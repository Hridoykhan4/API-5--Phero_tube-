function loadSpinner(isLoading) {
  if (isLoading) {
    document.getElementById("loadingSpinner").classList.remove("hidden");
  } else {
    document.getElementById("loadingSpinner").classList.add("hidden");
  }
}

loadSpinner(true);
