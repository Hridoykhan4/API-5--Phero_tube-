const loadSpinner = function (isLoading) {
    const loadSpinner = document.getElementById('loadingSpinner');
    if(isLoading){
        loadSpinner.classList.remove('hidden')
    }else{
        loadSpinner.classList.add('hidden')

    }
}