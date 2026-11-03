function getFoodCategoriesTemplate(name) {
    return `
    <div class="category">
    <div class="categoryName">
    <h2>${name}</h2>
    </div>
    <div id="category-${name}"></div> 
    </div>
    `
}

function getMainsCategoriesTemplate(name) {
    return `
    <div class="mainsName">
    <h3>${name}</h3>
    </div>
    <div id="subcategory-${name}"></div>
    `
}

function getCategoryTemplate(name, description, price) {
    /*<img>dishPic</img>*/
    return `
    <div class="dish">
    
    <div class="dishName">
    <h5>${name}</h5>
    </div>
    <p>${description}</p>
    <div class="price">${price.toFixed(2)} €</div>
    <button>Add to basket</button>
    </div>
    `
}


function getAddToBasketTemplate() {

}

function getBasketTemplate() {

}

function getOrderConfirmedTemplate() {

}