// Category section start
const loadCategories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/phero-tube/categories"
  );
  const data = await res.json();
  showCategories(data.categories);
};

const showCategories = (categories) => {
  const categoriesContainer = document.getElementById("categories");
  categories.forEach((category) => {
    const button = document.createElement("button");
    button.innerText = category.category;
    button.className = `btn btn-error text-white`;
    categoriesContainer.appendChild(button);
    button.onclick = () => {
      displayEachByCategory(`${category.category_id}`);
    };
  });
  loadSpinner(false);
};

// Category section End



// Load Videos Section Start

const loadVideos = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/phero-tube/videos"
  );
  const data = await res.json();
  showVideos(data.videos);
};

const showVideos = (videos) => {
  const videoContainer = document.getElementById("videos");
  videoContainer.innerHTML = ''
  videos.forEach((video) => {
    const card = document.createElement("div");
    card.classList = `card card-compact bg-base-100`;
    card.innerHTML = `
      <figure class="overflow-hidden h-[208px] relative">
    <img
      src="${
        video.thumbnail
      }" class="w-full h-full object-cover hover:scale-110 transition-all duration-300 ease-linear"
      alt="Shoes" />
      ${
        video?.others?.posted_date &&
        `<span class="p-2 rounded-lg bg-black text-white text-xs absolute bottom-2 right-2">${getTime(
          video?.others?.posted_date
        )}</span>`
      }
      </figure>
      <div class="py-3 flex gap-2 mt-1">
      <div>
        <img src="${
          video.authors[0].profile_picture
        }" class="w-12 h-12 object-cover rounded-full flex-shrink-0" />
    </div>

    <div>
    <h2 class="font-semibold text-lg">${video.title}</h2>
    <p class="text-gray-500 font-medium inline">${
      video.authors[0].profile_name
    }</p> ${
      video.authors[0].verified
        ? '<img class="inline w-5" src="./assets/tick.png"/>'
        : ""
    }
    <p></p>
    </div>

    
  </div>
    `;
    videoContainer.appendChild(card);
  });
  loadSpinner(false);
};

loadVideos();
// Load Videos Section End

loadCategories();
