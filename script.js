function calculatePurchase() {
    let subtotal = 0;
    let deliveryFee = 4.99;
    for (index = 0; index < basket.length; index++) {
        let newSubtotal = basket[index].amount * basket[index].price;
        subtotal = subtotal + newSubtotal;
    }
    let total = subtotal + deliveryFee;
    return{
        subtotal: subtotal,
        total: total
    };
}

function formatPrice(price) {
    return price.toFixed(2).replace('.', ',');
}

function addItemToBasket(button, name, price) {
    let included = false;
    for (let index = 0; index < basket.length; index++) {
        if (basket[index].name == name) { /*indicates that dish already exists in basket -> +1 amount*/
            basket[index].amount++;
            included = true;
        }
    }
    if (included == false) {
        let newItem = {
            name: name,
            price: price,
            amount: 1
        };
        basket.push(newItem);
    }
    renderFilledBasket();
    updateAddToBasketButton(name);
}

function deleteItemFromBasket(index) {
    let dishName = basket[index].name; /*save name before dish is deleted*/
    if (basket[index].amount > 1) {
        basket[index].amount--;
    } else {
        basket.splice(index, 1);
    }
    renderFilledBasket();
    updateAddToBasketButton(dishName);
}

function deleteItemFromBasketComplete(index) {
    let dishName = basket[index].name; /*save name before dish is deleted*/
        basket.splice(index, 1);
    renderFilledBasket();
    updateAddToBasketButton(dishName);
}

function updateAddToBasketButton(name) {
    /*find the right button belonging to a certain dish, if button isn't found = break*/
    let addToBasketBtn = document.getElementById(`menu-btn-${name}`);
    if (!addToBasketBtn) {
        return;
    }
    let currentAmount = 0;
    for (let index = 0; index < basket.length; index++) {
        if (basket[index].name == name) {
            currentAmount = basket[index].amount;
        }
    }
    if (currentAmount > 0) {
        addToBasketBtn.innerText = `Added ${currentAmount}`;
    } else {
        addToBasketBtn.innerText = `Add to basket`;
    }
}

function closeConfirmation(){
    let confirmationRef = document.getElementById('orderConfirmation');
    if(confirmationRef){
        confirmationRef.innerHTML = "";
    } clearTimeout(confirmationTimeout);
}

//render functions:
function renderMenuCategories() {
    let menuCategoriesRef = document.getElementById('food_categories');
    let allCategoriesHtml = "";
    for (let index = 0; index < foodCategories.length; index++) {
        allCategoriesHtml += getFoodCategoriesTemplate(foodCategories[index]);
    }
    menuCategoriesRef.innerHTML = allCategoriesHtml;
}

function renderMainsCategories() {
    let mainsCategoriesRef = document.getElementById('category-Mains');
    //to render subcategories of mains 
    if (mainsCategoriesRef) {
        let allMainCategoriesHtml = "";
        for (let index = 0; index < mains.length; index++) {
            allMainCategoriesHtml += getMainsCategoriesTemplate(mains[index].subcategoryName);
        }
        mainsCategoriesRef.innerHTML = allMainCategoriesHtml;
    }
}

function renderDishes() {
    let starterDishesRef = document.getElementById('category-Starters');
    if (starterDishesRef) {
        let startersHtml = "";
        for (let index = 0; index < starters.length; index++) {
            let coverPic = startersImages[index];
            startersHtml += getCategoryTemplate(coverPic, starters[index].name, starters[index].description, starters[index].price);
        }
        starterDishesRef.innerHTML = startersHtml;
    }

    //dynamically fill subcategories of mains -> going through mains-array
    for (let index = 0; index < mains.length; index++) {
        let subcategory = mains[index];
        let subcategoryRef = document.getElementById(`subcategory-${subcategory.subcategoryName}`);
        if (subcategoryRef) {
            let mainsHtml = "";
            for (let j = 0; j < subcategory.details.length; j++) {
                let coverPic = allMainDishImages[index][j];
                let dish = subcategory.details[j];
                mainsHtml += getCategoryTemplate(coverPic, dish.name, dish.description, dish.price);
            }
            subcategoryRef.innerHTML = mainsHtml;
        }
    }

    let dessertDishesRef = document.getElementById('category-Dessert');
    if (dessertDishesRef) {
        let dessertHtml = "";
        for (let index = 0; index < dessert.length; index++) {
            let coverPic = dessertImages[index];
            dessertHtml += getCategoryTemplate(coverPic, dessert[index].name, dessert[index].description || "", dessert[index].price);
        }
        dessertDishesRef.innerHTML = dessertHtml;
    }

    let sidesDishesRef = document.getElementById('category-Sides');
    if (sidesDishesRef) {
        let sidesHtml = "";
        for (let index = 0; index < sides.length; index++) {
            let coverPic = sidesImages[index];
            sidesHtml += getCategoryTemplate(coverPic, sides[index].name, sides[index].description || "", sides[index].price);
        }
        sidesDishesRef.innerHTML = sidesHtml;
    }
}

function renderEmptyBasket() {
    let emptyBasketRef = document.getElementById('basket');
    let basketHtml = "";
    basketHtml += getEmptyBasketTemplate();
    emptyBasketRef.innerHTML = basketHtml;
}

function renderFilledBasket() {
    if (basket.length == 0) {
        renderEmptyBasket();
    } else {
        let filledBasketRef = document.getElementById('basket');
        let basketHtml = `
             <div class="basket">
                <h3>Your Basket</h3>
                <br>
                <div class="dishesInBasketWrapper">
        `;
        for (let index = 0; index < basket.length; index++) {
            basketHtml += getFilledBasketTemplate(index, basket[index].amount, basket[index].name, basket[index].price);
        }
        basketHtml += `</div>`;
        let costs = calculatePurchase();
        basketHtml += getTotalCostsTemplate(formatPrice(costs.subtotal), formatPrice(costs.total));
        basketHtml += `</div>`;
        filledBasketRef.innerHTML = basketHtml;
    }
}

let confirmationTimeout; /*recent timer*/

function renderCompletePurchase() {
    let confirmationRef = document.getElementById('orderConfirmation');
    let confirmationHtml = "";
    confirmationHtml += getOrderConfirmedTemplate();
    confirmationRef.innerHTML = confirmationHtml;

    for(let index = 0; index<basket.length; index++){
        let dishName = basket[index].name;
        basket[index].amount = 0;
        updateAddToBasketButton(dishName);
    }
    basket.length = 0;
    renderEmptyBasket();
    /*to stop previous timer & reset to 3seconds */
    clearTimeout(confirmationTimeout);
    confirmationTimeout = setTimeout(closeConfirmation, 3000);
}

function renderOnload() {
    renderMenuCategories();
    renderMainsCategories();
    renderDishes();
    renderEmptyBasket();
}