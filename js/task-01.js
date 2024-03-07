const categoriesList = document.getElementById("categories");
const categories = categoriesList.querySelectorAll(".item");
console.log("Number of categories:", categories.length);

categories.forEach((category) =>{
    const categoryName = category.querySelector("h2").textContent;
    const categoryElements = category.querySelectorAll("ul > li").length;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryElements}`);
})