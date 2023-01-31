import {NUM_PAGES} from '../constants.js'
import { productsStore, refetchProducts } from '../main.js'

export const ItemsOnPage = () => {
    let num_pages = document.createElement('div')
    num_pages.className = 'dropdown_item dropdown'
    num_pages.innerHTML = `
        <div class='select'>
            <span class='selected selected_item'>-</span>
            <div class='caret'></div>
        </div>
        <ul class='dropdown_list'>
        </ul>
    `

    const select = num_pages.querySelector('.select')
    const caret = num_pages.querySelector('.caret')
    const menu = num_pages.querySelector('.dropdown_list')
    
    NUM_PAGES.forEach(i => {
        let item = document.createElement('li')
        item.innerHTML = i
        item.addEventListener('click', () => {
            select.querySelector('.selected_item').innerHTML = i
            select.classList.remove('select-clicked')
            caret.classList.remove('caret-rotate')
            menu.classList.remove('dropdown_list_open')
            productsStore.setLimit(i)
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
        let its_num_pages = target == num_pages || num_pages.contains(target);
        let menu_is_open = menu.classList.contains('dropdown_list_open');
        
        if (!its_num_pages && menu_is_open) {
            select.classList.remove('select-clicked')
            caret.classList.remove('caret-rotate')
            menu.classList.remove('dropdown_list_open');
        }
    })

    return num_pages
}