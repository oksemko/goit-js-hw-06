const categoriesListEl = document.querySelector("#categories");
console.log("Number of categories ", categories.children.length);

const subCategoryListEl = document.querySelectorAll(".item");
subCategoryListEl.forEach((category) => {
  console.log("Category: ", category.firstElementChild.textContent);
  console.log("Element: ", category.lastElementChild.children.length);
});
