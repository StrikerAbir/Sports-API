const setHTML = (data, detailsContainer) => {
    data.forEach(player => {
        console.log(player)
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="row g-0">
            <div class="col-12">
              <img
                src=""
                class="w-100"
                alt="..."
              />
            </div>
          </div>
          <div class="row g-0 mt-2">
            <div class="col-md-4">
              <img
                src="https://www.thesportsdb.com/images/media/player/cutout/a5bs0i1631443801.png"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-8">
                
              <div class="card-body h-100 d-flex flex-column justify-content-evenly">
                <h5 class="card-title">Card title</h5>
                <div class="row g-0">
                    <div class="col-6 ">
                        <p>DOB : </p>
                        <p>B.Place : </p>
                        <p>Nationality : </p>
                        <p>Income : (per/week)</p>
                    </div>
                    <div class="col-6">
                        <p>Height : </p>
                        <p>Weight : </p>
                        <p>Team : </p>
                        <p>Jersey No : </p>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row g-0 pt-3 border-top">
            <div class="col-12">
              <div class="card-body">
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
    `
    })

}
const loadData = (data) => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${data}`
    fetch(url).then(response => response.json()).then(json => displayData(json.player))
}

const displayData = (data) => {
    const detailsContainer = document.getElementById('details-container');
    detailsContainer.innerHTML = ``;
    setHTML(data, detailsContainer);
}

const searchPlayer = () => {
    const searchField = document.getElementById('search-field');
    const value = searchField.value;
    loadData(value);
    searchField.value = '';
}