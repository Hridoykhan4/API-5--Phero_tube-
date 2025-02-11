const displayEachByCategory = async(categoryId) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${categoryId}`);
    const data = await res.json();
    showVideos(data.category)
}