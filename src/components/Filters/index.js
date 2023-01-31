import { CategoryBar } from "../CategoryBar/index.js"
import { ItemsOnPage } from "../ItemsOnPage/index.js"

export const Filters = () => {
    const filter = document.createElement('div')
    filter.className = 'filter'
    filter.innerHTML = `
            <div class='items_on_page'>
                <label>Количество элементов</label>
            </div>
            <div class='category'>
                <label>Категория</label>
            </div>
        `
    filter.querySelector('.items_on_page').appendChild(ItemsOnPage())
    filter.querySelector('.category').appendChild(CategoryBar())

    return filter
}