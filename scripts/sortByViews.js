const sortIt = async () => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phero-tube/videos`
  );
  const data = await res.json();
  const allData = data.videos;
  allData.sort(
    (a, b) => parseFloat(b.others.views) - parseFloat(a.others.views.split("k"))
  );
  showVideos(allData);
};
