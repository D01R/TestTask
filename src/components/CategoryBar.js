import { productsStore, refetchProducts } from "../main.js"

export const CategoryBar = () => {
    let categories = document.createElement('div')
    categories.className = 'dropdown_category dropdown'
    categories.innerHTML = `
        <div class='select'>
            <span class='selected selected_item'>-</span>
            <div class='caret'></div>
        </div>
        <ul class='dropdown_list'>
        </ul>
    `

    const select = categories.querySelector('.select')
    const caret = categories.querySelector('.caret')
    const menu = categories.querySelector('.dropdown_list')


    productsStore.categories.forEach(i => {
        let item = document.createElement('li')
        item.innerHTML = i
        item.addEventListener('click', () => {
            select.querySelector('.selected_item').innerHTML = i
            select.classList.remove('select-clicked')
            caret.classList.remove('caret-rotate')
            menu.classList.remove('dropdown_list_open')
            productsStore.setSelectedCategory(i)
            productsStore.setPage(1)
            refetchProducts()
        })
        menu.appendChild(item)
    })


    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked')
        caret.classList.toggle('caret-rotate')
        menu.classList.toggle('dropdown_list_open')
    })

    document.addEventListener('click', e => {
        let target = e.target;
        let its_categories = target == categories || categories.contains(target);
        let menu_is_open = menu.classList.contains('dropdown_list_open');
        
        if (!its_categories && menu_is_open) {
            select.classList.remove('select-clicked')
            caret.classList.remove('caret-rotate')
            menu.classList.remove('dropdown_list_open');
        }
    })

    return categories
}