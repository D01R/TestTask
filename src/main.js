import { ProductsStore } from "./store/index.js";
import { fetchCategories, fetchProducts, fetchProductsByCategory } from "./http/index.js";
import { List, Filters, Pagination, Loader } from "./components/index.js";

export const productsStore = new ProductsStore()



const start = async() => {
    const root = document.querySelector('#root')
    root.classList.add('container')

    const loader = Loader()
    root.append(loader)


    await fetchCategories().then(data => {
        data.sort().unshift('all')
        productsStore.setCategories(data)
    })

    await fetchProducts(productsStore.limit, productsStore.page).then(data => {
        productsStore.setProducts(data.products)
        productsStore.setTotalCount(data.total)
    });

    loader.remove()

    const list_wrapp = document.createElement("div")
    list_wrapp.className = 'list_wrapp'
    list_wrapp.append(Filters())
    root.append(list_wrapp)


    List(productsStore.products)
    Pagination()
}

export const refetchProducts = async() => {
    const container = document.querySelector('.list_wrapp')
    
    deleteList()
    const loader = Loader()
    container.append(loader)

    productsStore.selectedCategory === 'all'?
        await fetchProducts(productsStore.limit, productsStore.page).then(data => {
            productsStore.setProducts(data.products)
            productsStore.setTotalCount(data.total)
        })
        :
        await fetchProductsByCategory(productsStore.selectedCategory,productsStore.limit,productsStore.page).then(data => {
            productsStore.setProducts(data.products)
            productsStore.setTotalCount(data.total)
        })
    
    loader.remove()
    List(productsStore.products)
    Pagination()
}


const deleteList = () => {
    document.querySelector('.wrapper').remove()
    document.querySelector('.pagination').remove()
}




start()
