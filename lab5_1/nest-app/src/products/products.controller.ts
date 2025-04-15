import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Paginate, PaginateQuery } from 'nestjs-paginate';
import { Roles } from 'nest-keycloak-connect';


@Controller('v1/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  @Roles({roles:['ApiViewer']})
  findAll(@Paginate() query: PaginateQuery) {
    return this.productsService.findAll(query);
  }


  @Get(':id')
  @Roles({roles:['ApiViewer']})
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.productsService.findOne(+id);
  }

  @Post()
  @Roles({roles:['ApiWriter']})
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Put(':id')
  @Roles({roles:['ApiWriter']})
  update(@Param('id', ParseIntPipe) id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  @Roles({roles:['ApiWriter']})
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.productsService.remove(+id);
  }
}