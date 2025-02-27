import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BookEntity } from '../../database/entities/book.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(BookEntity)
    private readonly bookRepository: Repository<BookEntity>,
  ) {}

  async create(createBookDto: CreateBookDto): Promise<BookEntity> {
    return await this.bookRepository.save(createBookDto);
  }

  async findAll(): Promise<BookEntity[]> {
    return await this.bookRepository.find();
  }

  async findOne(id: number): Promise<BookEntity> {
    const book = await this.bookRepository.findOne({ where: { id } });
    if (!book) {
      throw new NotFoundException(`Book with id ${id} not found`);
    }
    return book;
  }

  async update(id: number, updateBookDto: UpdateBookDto): Promise<BookEntity> {
    const book = await this.bookRepository.preload({
      id,
      ...updateBookDto,
    });

    if (!book) {
      throw new NotFoundException(`Book with id ${id} not found`);
    }

    return await this.bookRepository.save(book);
  }

  async remove(id: number): Promise<BookEntity> {
    const book = await this.findOne(id);

    if (!book) {
      throw new NotFoundException(`Book with id ${id} not found`);
    }
    return await this.bookRepository.remove(book);
  }
}
