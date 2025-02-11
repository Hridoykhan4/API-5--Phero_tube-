const displayEachByCategory = async (categoryId) => {
  removeAllBg();
  const activeBtn = document.getElementById(`btn-${categoryId}`);
  activeBtn.classList.add("btn", "btn-error", "text-white");

  const res = await fetch(
    `https://openapi.programming-hero.com/api/phero-tube/category/${categoryId}`
  );
  const data = await res.json();
  showVideos(data.category);
};

const removeAllBg = () => {
  const allBtn = document.querySelectorAll(".category-btn");
  const allBtnArray = Array.from(allBtn);
  allBtnArray.forEach((btn) => btn.classList.remove("btn-error", "text-white"));
};
