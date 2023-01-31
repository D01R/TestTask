import { ItemInfo } from "./ItemInfo.js";

export const ListItem = (item) => {
    let new_item = document.createElement("div");
    new_item.className = "item draggable";
    new_item.draggable = true;
    new_item.innerHTML = item.title;

    new_item.addEventListener("dragstart", () => {
        new_item.classList.add("dragging");
    });

    new_item.addEventListener("dragend", () => {
        new_item.classList.remove("dragging");
    });

    new_item.addEventListener('mouseenter', () => {
        ItemInfo(item)
    })

    new_item.addEventListener('mouseleave', () => {
        document.querySelector('.item_info').remove()
    })


    return new_item
}