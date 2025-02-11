// Convert Second to day
const getTimeString = (time) => {
  const day = parseInt(time / 86400);
  let remainingSecond = time % 86400;

  const hour = parseInt(remainingSecond / 3600);
  remainingSecond = remainingSecond % 3600;

  const min = parseInt(remainingSecond / 60);
  remainingSecond = remainingSecond % 60;

  return `${day} day ${hour} hour ${min} min ${remainingSecond} sec ago`;
};

// Show Category
const loadCategories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/phero-tube/categories"
  );
  const data = await res.json();
  displayCategory(data.categories);
};

const displayCategory = (categories) => {
  const categoryContainer = document.getElementById("categories");
  categories.forEach((item) => {
    // console.log(item);

    const buttonContainer = document.createElement("div");
    buttonContainer.innerHTML = `
    <button id='btn-${item.category_id}' onclick="loadCategoriesVideos(${item.category_id})" class="btn category-btn">${item.category}</button>
    `;
    categoryContainer.append(buttonContainer);
  });
};

const removeActiveClass = () => {
  const buttons = document.getElementsByClassName("category-btn");
  for (const btn of buttons) {
    btn.classList.remove("active");
  }
};

const loadCategoriesVideos = async (categoryId) => {
  removeActiveClass();

  const res = await fetch(
    ` https://openapi.programming-hero.com/api/phero-tube/category/${categoryId}`
  );
  const data = await res.json();
  const activeBtn = document.getElementById(`btn-${categoryId}`);
  activeBtn.classList.add("active");
  displayVideos(data.category);
};

const loadDetails = async (id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phero-tube/video/${id}`
  );
  const data = await res.json();
  displayDetails(data.video);
};

const displayDetails = (video) => {
  console.log(video);
  const detailContainer = document.getElementById("modal-content");
  detailContainer.innerHTML = `
      <img src="${video.thumbnail}">
      <p>${video.description}</p>
      `;

  customModal.showModal();
};

//* Load Videos Section */
const loadVideos = async (searchText = "") => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchText}`
  );
  const data = await res.json();
  displayVideos(data.videos);
};

const displayVideos = (videos) => {
  const videoContainer = document.getElementById("videos");
  videoContainer.innerText = "";

  if (videos.length === 0) {
    videoContainer.classList.remove("grid");
    videoContainer.innerHTML = `
  <div class="min-h-[250px] w-full flex flex-col gap-5 justify-center items-center">
  <img src="./assets/icon.png" />
  <h2 class="text-xl font-bold">No Content Here in this category</h2>
  </div>
  `;
    return;
  } else {
    videoContainer.classList.add("grid");
  }

  videos.forEach((video) => {
    const card = document.createElement("div");
    card.classList = `card card-compact`;
    card.innerHTML = `
        
  <figure class="h-[200px] relative">
    <img class="h-full w-full object-cover"
      src="${video?.thumbnail}"
      alt="Shoes" />
    
        ${
          video?.others?.posted_date.length === 0
            ? ""
            : ` <span class="absolute right-2 bottom-2 bg-black text-white p-1 rounded text-xs">${getTimeString(
                video?.others?.posted_date
              )}</span>`
        } 
     
     
  </figure>
  <div class="py-2 px-0 flex gap-2">
        <div>
            <img class="w-10 h-10 rounded-full object-cover" src="${
              video?.authors[0]?.profile_picture
            }" />
        </div>
        <div>
        <div>
        <h2 class="font-bold">${video.title}</h2>
         </div>
        <div class="flex gap-2 items-center">
        <p class="text-gray-400">${video?.authors[0]?.profile_name}</p>
        ${
          video?.authors[0]?.verified === true
            ? '<img class="w-5" src="./assets/tick.png"/>'
            : ""
        }
        </div>
        <p><button onclick="loadDetails('${
          video?.video_id
        }')" class="btn btn-sm btn-error text-white">Details</button></p>
        </div>
  </div>

        `;

    videoContainer.appendChild(card);
  });
  loadSpinner(false);
};

document.getElementById("search-input").addEventListener("keyup", (e) => {
  loadVideos(e.target.value);
});

loadCategories();
setTimeout(() => {
  loadVideos("");
}, 1000);
