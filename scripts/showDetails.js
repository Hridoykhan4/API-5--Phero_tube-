const showDetails = async (video_id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phero-tube/video/${video_id}`
  );
  const data = await res.json();
  const {thumbnail, description} = data.video
  const content = document.getElementById("modal-content");
  content.innerHTML = `
  <img class="rounded-lg" src="${thumbnail}" />
  <p class="font-medium">${description}</p>
    `;
  customModal.showModal();
};

