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
  });
  loadSpinner(false);
};

// Load Videos Section Start

const loadVideos = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/phero-tube/videos"
  );
  const data = await res.json();
  showVideos(data.videos)
};

/* {
    "category_id": "1003",
    "video_id": "aaai",
    "thumbnail": "https://i.ibb.co/kc8CCFs/30-rock.png",
    "title": "30 Rock",
    "authors": [
        {
            "profile_picture": "https://i.ibb.co/YZN9rQZ/tina.jpg",
            "profile_name": "Tina Fey",
            "verified": false
        }
    ],
    "others": {
        "views": "4.5K",
        "posted_date": "14800"
    },
    "description": "'30 Rock,' led by Tina Fey, is a comedy series that has garnered 4.5K views. The show is a witty and humorous take on the behind-the-scenes antics of a fictional live comedy show. With its sharp writing and unforgettable characters, '30 Rock' is perfect for fans of smart, satirical humor and engaging storylines."
} */


const showVideos = (videos) => {
  const videoContainer = document.getElementById('videos')
  videos.forEach((video) => {
    const card = document.createElement('div');
    card.classList = `card card-compact bg-base-100`
    card.innerHTML = `
      <figure class="overflow-hidden h-[208px]">
    <img
      src="${video.thumbnail}" class="w-full h-full object-cover hover:scale-110 transition-all duration-300 ease-linear"
      alt="Shoes" />
  </figure>
  <div class="py-3">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
    `
    videoContainer.appendChild(card)
  });
  loadSpinner(false)
}


loadVideos()

// Load Videos Section End

const loadSpinner = (isLoading) => {
  if (isLoading) {
    document.getElementById("loadingSpinner").classList.remove("hidden");
  } else {
    document.getElementById("loadingSpinner").classList.add("hidden");
  }
};
loadSpinner(true);

loadCategories();
