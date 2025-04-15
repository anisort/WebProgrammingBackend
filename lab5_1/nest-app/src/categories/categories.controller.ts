import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Put } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Paginate, PaginateQuery } from 'nestjs-paginate';
import { Roles } from 'nest-keycloak-connect';

@Controller('v1/categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  @Roles({roles:['ApiViewer']})
  findAll(@Paginate() query: PaginateQuery) {
    return this.categoriesService.findAll(query);
  }

  @Get(':id')
  @Roles({roles:['ApiViewer']})
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.categoriesService.findOne(+id);
  }

  @Get(':id/products')
  @Roles({roles:['ApiViewer']})
  findProductsByCategoryId(@Param('id', ParseIntPipe) id: string, @Paginate() query: PaginateQuery) {
    return this.categoriesService.findProductsByCategoryId(+id, query);
  }

  
  @Post()
  @Roles({roles:['ApiWriter']})
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.create(createCategoryDto);
  }

  @Put(':id')
  @Roles({roles:['ApiWriter']})
  update(@Param('id', ParseIntPipe) id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoriesService.update(+id, updateCategoryDto);
  }

  @Delete(':id')
  @Roles({roles:['ApiWriter']})
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.categoriesService.remove(+id);
  }

}