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

function getCategoryTemplate(coverPic, name, description, price) {
    return `
    <div class="dish">
    <img class="dishImg" src="./img/dishImages/${coverPic}" alt="dish_image"></img>
    <div class="dishContent">
    <div class="dishNamePrice">
    <div class="dishName">
    <h4>${name}</h4>
    </div>
    <div class="price">${price.toFixed(2)} €</div>
    </div>
    <br>
    <div class="descrAdd">
    <div class="description">
    <p>${description}</p></div>
    <button>Add to basket</button>
    </div>
    </div>
    </div>
    `
}

function getAddToBasketTemplate() {

}

function getEmptyBasketTemplate() {
    return `
    
    `
}

function getFilledBasketTemplate() {
    return `
    
    `
}

function getOrderConfirmedTemplate() {

}