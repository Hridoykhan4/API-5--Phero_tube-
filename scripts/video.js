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
    button.className = `btn category-btn`;
    button.setAttribute('id', `btn-${category.category_id}`)
    categoriesContainer.appendChild(button);
    button.onclick = () => {
      displayEachByCategory(`${category.category_id}`);
    };
  });
  loadSpinner(false);
};

// Category section End

// Load Videos Section Start

const loadVideos = async (videoTitle = '') => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phero-tube/videos?title=${videoTitle}`
  );
  const data = await res.json();
  showVideos(data.videos);
};

const showVideos = (videos) => {
  const videoContainer = document.getElementById("videos");
  videoContainer.innerHTML = "";

  if (!videos.length) {
    videoContainer.className = `flex justify-center flex-col items-center h-[18rem]`;
    videoContainer.innerHTML = `
   <img src="./assets/Icon.png" />
   <p class="mt-4 text-center font-bold text-2xl">Oops!! Sorry, There is no <br> content here</p>
   `;
  } else {
    videoContainer.className = `w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10`;
  }

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
    </div>

    
    </div>
      <div class="card-actions justify-end">
      <button class="btn btn-primary" onclick="showDetails('${video.video_id}')">Details</button>
    </div>
    `;
    videoContainer.appendChild(card);
  });
  loadSpinner(false);
};

loadVideos();
// Load Videos Section End

loadCategories();


// Search Function
document.getElementById('search-input').addEventListener('keyup', (e) => {
  const target = e.target.value;
  loadVideos(target)
})