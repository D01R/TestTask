import { DEFAULT_CATEGORY } from "../constants.js"

export class ProductsStore{
    constructor(){
        this._products = []
        this._categories = []

        this._selectedCategory = DEFAULT_CATEGORY
        this._hoverProduct = {}

        this._page = 1
        this._limit = 10
        this._totalCount = 0
    }

    setProducts(products){
        this._products = products
    }
    setCategories(categories){
        this._categories = categories
    }
    setHoverProduct(hoverProduct){
        this._hoverProduct = hoverProduct
    }
    setSelectedCategory(selectedCategory){
        this._selectedCategory = selectedCategory
    }
    setPage(page){
        this._page = page
    }
    setLimit(limit){
        this._limit = limit
    }
    setTotalCount(totalCount){
        this._totalCount = totalCount
    }

    get products(){
        return this._products
    }
    get categories(){
        return this._categories
    }
    get hoverProduct(){
        return this._hoverProduct
    }
    get selectedCategory(){
        return this._selectedCategory
    }
    get page(){
        return this._page
    }
    get limit(){
        return this._limit
    }
    get totalCount(){
        return this._totalCount
    }
}