import { productsStore, refetchProducts } from "../../main.js"

export const Pagination = () => {
    const list_wrapp = document.querySelector('.list_wrapp')

    const pagesCount = Math.ceil(productsStore.totalCount/productsStore.limit)
    const pagination = document.createElement('div')
    pagination.classList.add('pagination')

    for (let i = 0; i < pagesCount; i++){
        const paginationItem = document.createElement('div')
        
        paginationItem.className = i+1 === productsStore.page? 'pagination_item pagination_item_active': 'pagination_item'
        paginationItem.addEventListener('click', () => {
            productsStore.setPage(i+1)
            refetchProducts()
        })
        paginationItem.innerHTML = i+1

        pagination.appendChild(paginationItem)
    }
    
    list_wrapp.append(pagination)
}