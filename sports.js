const setHTML = (data, detailsContainer) => {
    data.forEach(player => {
        console.log(player)
        const div = document.createElement('div');
        div.classList.add('card', 'mb-3')
        div.innerHTML = `
        <div class="row g-0">
            <div class="col-12">
              <img
                src="${player.strBanner ? player.strBanner : 'No Banner'}"
                class="w-100"
                alt="No Banner"
              />
            </div>
          </div>
          <div class="row g-0 mt-2">
            <div class="col-md-4">
              <img
                src="${player.strCutout}"
                class="img-fluid rounded-start"
                alt="No Image"
              />
            </div>
            <div class="col-md-8">
                
              <div class="card-body h-100 d-flex flex-column justify-content-evenly">
                <h5 class="card-title">${player.strPlayer} (${player.strSport})</h5>
                <div class="row g-0">
                    <div class="col-6 ">
                        <p>DOB : ${player.dateBorn ? player.dateBorn : 'No Info'}</p>
                        <p>B.Place : ${player.strBirthLocation ? player.strBirthLocation : 'No Info'}</p>
                        <p>Nationality : ${player.strNationality ? player.strNationality : 'No Info'}</p>
                        <p>Income : ${player.strWage ? player.strWage : 'No Info'}</p>
                    </div>
                    <div class="col-6">
                        <p>Height : ${player.strHeight ? player.strHeight : 'No Info'}</p>
                        <p>Weight : ${player.strWeight ? player.strWeight : 'No Info'}</p>
                        <p>Club : ${player.strTeam ? player.strTeam : 'No Info'}</p>
                        <p>Jersey No : ${player.strNumber ? player.strNumber : 'No Info'}</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row g-0 pt-3 border-top">
            <div class="col-12">
              <div class="card-body">
                <p class="card-text">
                  ${player.strDescriptionEN ? player.strDescriptionEN : 'No Info'}
                </p>
              </div>
            </div>
          </div>
    `
        detailsContainer.appendChild(div);
    })

}
const loadData = (data) => {
    if (data != '') {
        const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${data}`
        fetch(url).then(response => response.json()).then(json => displayData(json.player))
    } else {
        alert('Enter Player Name to Search.');
        return;
    }

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