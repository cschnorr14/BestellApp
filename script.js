function calculatePurchase(){

}

function addItemToBasket(){

}

function deleteItemFromBasket(){

}

function completePurchase(){

}

//render functions

function renderMenuCategories(){
    let menuCategoriesRef = document.getElementById('food_categories');
    let allCategoriesHtml = "";
    for(let index = 0; index < foodCategories.length; index++){
        allCategoriesHtml+=getFoodCategoriesTemplate(foodCategories[index]);
    }
    menuCategoriesRef.innerHTML = allCategoriesHtml;
}

function renderMainsCategories(){
    let mainsCategoriesRef = document.getElementById('main_categories');
    let allMainCategoriesHtml = "";
    for(let index = 0; index < mains.length; index++){
        allMainCategoriesHtml+=getMainsCategoriesTemplate(mains[index]);
    }
    mainsCategoriesRef.innerHTML = allMainCategoriesHtml;
}

 function renderOnload() {
    renderMenuCategories();
    renderMainsCategories();
}