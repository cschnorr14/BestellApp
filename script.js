function calculatePurchase() {

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
    changeToAdded(button);
    renderFilledBasket();
}

function changeToAdded(button) {
    if (button.innerHTML == "Add to basket") {
        button.anzahl = 1;
    } else {
        button.anzahl++;
    }
    button.innerHTML = "Added" + " " + button.anzahl;
}

function deleteItemFromBasket(index) {
    if(basket[index].amount > 1){
        basket[index].amount--;
    }else{
        basket.splice(index, 1);
    }
    renderFilledBasket();
}

function completePurchase() {

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
        `;
        for (let index = 0; index < basket.length; index++) {
            basketHtml += getFilledBasketTemplate(index, basket[index].amount, basket[index].name, basket[index].price);
        }
        basketHtml += `</div>`;
        filledBasketRef.innerHTML = basketHtml;

    }
}

function renderOnload() {
    renderMenuCategories();
    renderMainsCategories();
    renderDishes();
    renderEmptyBasket();
}