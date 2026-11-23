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
    <button id="menu-btn-${name}" class="add-btn" onclick="addItemToBasket(this, '${name}', ${price})">Add to basket</button>
    </div>
    </div>
    </div>
    `
}

function getEmptyBasketTemplate() {
    return `
    <div class="basket">
    <h3>Your Basket</h3>
    <br>
    <p>Nothing here yet.<br>
    Go ahead and choose something<br>
    delicious!</p>
    <img class="cart" src="./img/basket/basket.png" alt="cart logo"></img>
    </div>
    `
}

function getFilledBasketTemplate(index, amount, name, price) {
    let buttonSymbol;
    if(amount==1){
        buttonSymbol = `<img class="deleteIcon" src="./img/basket/delete.png" alt="">`;
    }else{
        buttonSymbol = `-`;
    }
    return `
    <div class="dishInBasket">
    <p>${amount} x ${name}</p>
    <br>
    <div class=amountPriceWrapper>
    <div>
    <button class="basketBtn" onclick="deleteItemFromBasket(${index})">${buttonSymbol}</button>
    ${amount}
    <button class="basketBtn" onclick="addItemToBasket(this, '${name}', ${price})"> + </button>
    </div>
    <p>${price} €</p>
    </div>
    </div>
    `;
}

function getOrderConfirmedTemplate() {

}