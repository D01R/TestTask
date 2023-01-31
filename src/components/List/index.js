import { productsStore } from '../../main.js'
import { ListItem } from '../ListItem/index.js'

export const List = () => {
    const container = document.querySelector('.list_wrapp')

    let list_wrapper = document.createElement('div')
    list_wrapper.classList.add( 'wrapper')
    container.append(list_wrapper)
    
    productsStore.products.forEach(i => {
        list_wrapper.appendChild(ListItem(i))
    })
    
    list_wrapper.addEventListener('dragover', e => {
        e.preventDefault()
        const afterElement = getDragAfterElement(list_wrapper, e.clientY)
        const draggable = document.querySelector('.dragging')
        if (afterElement == null){
            list_wrapper.appendChild(draggable)
        }
        else {
            list_wrapper.insertBefore(draggable,afterElement)
        }
    })
    
    function getDragAfterElement(container,y) {
        const draggableItems = [...container.querySelectorAll('.draggable:not(.dragging)')]
    
        return draggableItems.reduce((closest, child) => {
            const box = child.getBoundingClientRect()
            const offset = y - box.top - box.height / 2
            if (offset < 0 && offset > closest.offset){
                return { offset: offset, element: child}
            } 
            else {
                return closest
            }
        }, {offset: Number.NEGATIVE_INFINITY}).element
    }
}