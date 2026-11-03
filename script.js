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
    console.log("1. renderMenuCategories gestartet. Array-Länge:", foodCategories.length);
    let menuCategoriesRef = document.getElementById('food_categories');
    let allCategoriesHtml = "";
    for (let index = 0; index < foodCategories.length; index++) {
        allCategoriesHtml += getFoodCategoriesTemplate(foodCategories[index]);
    }
    menuCategoriesRef.innerHTML = allCategoriesHtml;
}


/*to render starters, sides & desserts
function renderStandardDishes(categoryName, dishesArray) {
    let dishesRef = document.getElementById('dishes-container-${categoryName}');
    if (dishesRef) {
        let standardDishesHtml = "";
        for (let index = 0; index < dishesArray.length; index++) {
            let dish = dishesArray[index];
            standardDishesHtml += getCategoryTemplate(dish.name, dish.description || "", dish.price)
        }
        dishesRef.innerHTML = standardDishesHtml;
    }
}*/



function renderMainsCategories() {
     console.log("2. renderMainsCategories gestartet.");
    /*let mainsCategoriesRef = document.getElementById('dishes-container-Mains');*/
    let mainsCategoriesRef = document.getElementById('category-Mains');
    console.log("Mains-Container im DOM gefunden?", mainsCategoriesRef);
    //to render subcategories of mains 
    if (mainsCategoriesRef) {
        let allMainCategoriesHtml = "";
         console.log("Anzahl der Mains-Unterkategorien:", mains.length);
        for (let index = 0; index < mains.length; index++) {
            allMainCategoriesHtml += getMainsCategoriesTemplate(mains[index].subcategoryName);
        }
        mainsCategoriesRef.innerHTML = allMainCategoriesHtml;
    }
}

    /*
    //render content of specific subcategories
    for (let index = 0; index < mains.length; index++) {
        let subcategory = mains[index];
        let subcategoryDishesRef = document.getElementById('dishes-subcategory-${subcategory.subcategoryName}');


        if (subcategoryDishesRef) {
            let dishesHtml = "";
            for (let j = 0; j < subcategory.details.length; j++) {
                let dish = subcategory.details[j];
                dishesHtml += getCategoryTemplate(dish.name, dish.description, dish.price);
            }
            subcategoryDishesRef.innerHTML = dishesHtml;
        }
    }
*/


function renderDishes() {
    console.log("3. renderDishes gestartet.");
    let starterDishesRef = document.getElementById('category-Starters');
    console.log("Starters-Container gefunden?", starterDishesRef);
    if (starterDishesRef) {
        console.log("Anzahl Starters-Gerichte:", starters.length);
        let startersHtml = "";
        for (let index = 0; index < starters.length; index++) {
            startersHtml += getCategoryTemplate(starters[index].name, starters[index].description, starters[index].price);
        }
        starterDishesRef.innerHTML = startersHtml;
    }

    //dynamically fill subcategories of mains -> going through mains-array
    console.log("Starte Schleife durch Mains-Unterkategorien...");
    for (let index = 0; index < mains.length; index++) {
        let subcategory = mains[index];
        let subcategoryRef = document.getElementById(`subcategory-${subcategory.subcategoryName}`);
        console.log(`Suche Container für subcategory-${subcategory.subcategoryName}:`, subcategoryRef);
        if (subcategoryRef) {
            let mainsHtml = "";
            for (let j = 0; j < subcategory.details.length; j++) {
                let dish = subcategory.details[j];
                mainsHtml += getCategoryTemplate(dish.name, dish.description, dish.price);
            }

            subcategoryRef.innerHTML = mainsHtml;
        } 
    }

    /*
    let mainsDishesPizzaRef = document.getElementById('category-Pizza');
    let mainsDishesPastaRef = document.getElementById('category-Pasta');
    let mainsDishesBurgerRef = document.getElementById('category-Burger');
    let mainsDishesSaladRef = document.getElementById('category-Salad');
    */

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

    /*
    if (mainsDishesPizzaRef) {
        let allDishesHtml = "";
        for (let index = 0; index < mains[indexDishes].subcategoryName["Pizza"].length; index++) {    
            allDishesHtml += getCategoryTemplate();
        }
        mainsDishesPizzaRef.innerHTML = allDishesHtml;
    }

    if (mainsDishesPastaRef) {
        let allDishesHtml = "";
        for (let index = 0; index < mains[indexDishes].subcategoryName["Pasta"].length; index++) {    
            allDishesHtml += getCategoryTemplate();
        }
        mainsDishesPastaRef.innerHTML = allDishesHtml;
    }

    if (mainsDishesBurgerRef) {
        let allDishesHtml = "";
        for (let index = 0; index < mains[indexDishes].subcategoryName["Burger"].length; index++) {    
            allDishesHtml += getCategoryTemplate();
        }
        mainsDishesBurgerRef.innerHTML = allDishesHtml;
    }

    if (mainsDishesSaladRef) {
        let allDishesHtml = "";
        for (let index = 0; index < mains[indexDishes].subcategoryName["Salad"].length; index++) {   
            allDishesHtml += getCategoryTemplate();
        }
        mainsDishesSaladRef.innerHTML = allDishesHtml;
    }*/




function renderOnload() {
    renderMenuCategories();
    renderMainsCategories();
    renderDishes();
    /*renderStandardDishes('Starters', starters);
    renderStandardDishes('Sides', sides);
    renderStandardDishes('Dessert', dessert);*/
}