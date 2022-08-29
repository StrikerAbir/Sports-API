const setHTML = (data, detailsContainer) => {
    data.forEach(player => {
        console.log(player)
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="row g-0">
            <div class="col-12">
              <img
                src="${player.strBanner}"
                class="w-100"
                alt="..."
              />
            </div>
          </div>
          <div class="row g-0 mt-2">
            <div class="col-md-4">
              <img
                src="${player.strCutout}"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-8">
                
              <div class="card-body h-100 d-flex flex-column justify-content-evenly">
                <h5 class="card-title">${player.strPlayer}</h5>
                <div class="row g-0">
                    <div class="col-6 ">
                        <p>DOB : ${player.dateBorn}</p>
                        <p>B.Place : ${player.strBirthLocation}</p>
                        <p>Nationality : ${player.strNationality}</p>
                        <p>Income : ${player.strWage}</p>
                    </div>
                    <div class="col-6">
                        <p>Height : ${player.strHeight}</p>
                        <p>Weight : ${player.strWeight}</p>
                        <p>Team : ${player.strTeam}</p>
                        <p>Jersey No : ${player.strNumber}</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row g-0 pt-3 border-top">
            <div class="col-12">
              <div class="card-body">
                <p class="card-text">
                  ${player.strDescriptionEN}
                </p>
              </div>
            </div>
          </div>
    `
        detailsContainer.appendChild(div);
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