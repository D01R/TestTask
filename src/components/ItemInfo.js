export const ItemInfo = (item) => {
    const wrapp = document.querySelector(".list_wrapp")
    const delet = wrapp.querySelector('.item_info')
    if (delet) {delet.remove()}

    const item_info = document.createElement("div")
    item_info.classList.add("item_info")
    item_info.innerHTML = `
        <div class="item_image"></div>
        <p class="item_category">${item.category }</p>
        <h2 class="item_title">${item.title}</h2>
        <p class="item_brand">${item.brand}</p>
        <div class="price">
            <span class="original_price">$${item.price.toFixed(2)}</span>
            <span class="sale_price">$${(item.price*(1-item.discountPercentage/100)).toFixed(2)}</span>
        </div>
        <div class="rating">
            <div class="star"></div>
            <p>${item.rating}</p>
        </div>
    `
    item_info.querySelector(".item_image").style.backgroundImage = `url(${item.thumbnail})`
    wrapp.append(item_info)
}