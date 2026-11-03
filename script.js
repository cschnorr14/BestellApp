function calculatePurchase() {

}

function addItemToBasket() {

}

function deleteItemFromBasket() {

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
            startersHtml += getCategoryTemplate(starters[index].name, starters[index].description, starters[index].price);
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
                let dish = subcategory.details[j];
                mainsHtml += getCategoryTemplate(dish.name, dish.description, dish.price);
            }
            subcategoryRef.innerHTML = mainsHtml;
        } 
    }

    let dessertDishesRef = document.getElementById('category-Dessert');
    if (dessertDishesRef) {
        let dessertHtml = "";
        for (let index = 0; index < dessert.length; index++) {
            dessertHtml += getCategoryTemplate(dessert[index].name, dessert[index].description || "", dessert[index].price);
        }
        dessertDishesRef.innerHTML = dessertHtml;
    }

    let sidesDishesRef = document.getElementById('category-Sides');
    if (sidesDishesRef) {
        let sidesHtml = "";
        for (let index = 0; index < sides.length; index++) {
            sidesHtml += getCategoryTemplate(sides[index].name, sides[index].description || "", sides[index].price);
        }
        sidesDishesRef.innerHTML = sidesHtml;
    }
}

function renderOnload() {
    renderMenuCategories();
    renderMainsCategories();
    renderDishes();
}