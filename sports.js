fetch('https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=Danny%20Welbeck').then(response => response.json()).then(json => console.log(json.player[0]))