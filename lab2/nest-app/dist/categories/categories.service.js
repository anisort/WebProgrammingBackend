"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const category_entity_1 = require("./entities/category.entity");
const product_entity_1 = require("../products/entities/product.entity");
const typeorm_2 = require("typeorm");
const nestjs_paginate_1 = require("nestjs-paginate");
let CategoriesService = class CategoriesService {
    categoriesRepository;
    productsRepository;
    constructor(categoriesRepository, productsRepository) {
        this.categoriesRepository = categoriesRepository;
        this.productsRepository = productsRepository;
    }
    create(createCategoryDto) {
        return this.categoriesRepository.save(createCategoryDto);
    }
    findProductsByCategoryId(categoryId, query) {
        return (0, nestjs_paginate_1.paginate)(query, this.productsRepository, {
            sortableColumns: ['id', 'name', 'description'],
            nullSort: 'last',
            defaultSortBy: [['id', 'DESC']],
            searchableColumns: ['name', 'description'],
            select: ['*'],
            filterableColumns: {
                name: [nestjs_paginate_1.FilterOperator.EQ, nestjs_paginate_1.FilterSuffix.NOT]
            },
            where: {
                category_id: categoryId,
            }
        });
    }
    findAll(query) {
        return (0, nestjs_paginate_1.paginate)(query, this.categoriesRepository, {
            sortableColumns: ['id', 'name', 'description'],
            nullSort: 'last',
            defaultSortBy: [['id', 'DESC']],
            searchableColumns: ['name', 'description'],
            select: ['*'],
            filterableColumns: {
                name: [nestjs_paginate_1.FilterOperator.EQ, nestjs_paginate_1.FilterSuffix.NOT]
            },
        });
    }
    findOne(id) {
        return this.categoriesRepository.findOneBy({ id });
    }
    update(id, updateCategoryDto) {
        return this.categoriesRepository.update(id, updateCategoryDto);
    }
    remove(id) {
        return this.categoriesRepository.delete(id);
    }
};
exports.CategoriesService = CategoriesService;
exports.CategoriesService = CategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(category_entity_1.Category)),
    __param(1, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], CategoriesService);
//# sourceMappingURL=categories.service.js.map