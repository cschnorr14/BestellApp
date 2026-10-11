function getFoodCategoriesTemplate(name) {
    let categoryID = name;
    return `
    <div class="category">
    <div class="categoryName">
    <h2>${name}</h2>
    </div>
    <div id="subcategories-${categoryID}"></div>
    </div>
    `
}

function getMainsCategoriesTemplate(name) {
    return `
    <div class="mainsName">
    <h3>${name}</h3>
    </div>
    `
}

function getCategoryTemplate() {

}


function getAddToBasketTemplate() {

}

function getBasketTemplate() {

}

function getOrderConfirmedTemplate() {

}