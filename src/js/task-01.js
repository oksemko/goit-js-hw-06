const categoriesNumEl = document.querySelector("#categories");
console.log("Number of categories ", categories.children.length);

const subCategoryNumEl = document.querySelectorAll(".item");
subCategoryNumEl.forEach((category) => {
  console.log("Category: ", category.firstElementChild.textContent);
  console.log("Element: ", category.lastElementChild.children.length);
});

const categoriesEl = document.querySelectorAll(".item");
console.log("Number of categories ", categoriesEl.length);

categoriesEl.forEach(function (category) {
  console.log("Category: ", category.firstElementChild.textContent);
  console.log("Element: ", category.lastElementChild.children.length);
});
