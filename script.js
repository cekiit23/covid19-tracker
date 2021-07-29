const SearchButton = document.querySelector('.searchBtn')


SearchButton.addEventListener('click', async function() {
    
        const keyword = document.querySelector('.keyword').value
        const countries = await getCountries(keyword);

        updateUI(countries)


    
})



function getCountries(keyword)
{
    return fetch(`https://covid19.mathdro.id/api/countries/${keyword}`)
        .then(response => response.json())
        .then(response => response)
}

function updateUI(countries)
{

    console.log
    const dataRow = document.querySelector('.dataRow');

    let data = '';

    data += showCountry(countries)

    dataRow.innerHTML = data

}

function showCountry (c)
{
    const keyword = document.querySelector('.keyword').value
   return `
   <h1>${keyword}</h1>
   <ol class="list-group list-group-numbered">
   <li class="list-group-item d-flex justify-content-between align-items-start">
     <div class="ms-2 me-auto">
       <div class="fw-bold">Terkonfirmasi</div>
       Update Terakhir : ${c.lastUpdate}
     </div>
     <span class="badge bg-secondary rounded-pill">${c.confirmed.value}</span>
   </li>
   <li class="list-group-item d-flex justify-content-between align-items-start">
     <div class="ms-2 me-auto">
       <div class="fw-bold">Sembuh</div>
       Update Terakhir : ${c.lastUpdate}
     </div>
     <span class="badge bg-success rounded-pill">${c.recovered.value}</span>
   </li>
   <li class="list-group-item d-flex justify-content-between align-items-start">
     <div class="ms-2 me-auto">
       <div class="fw-bold">Meninggal</div>
       Update Terakhir : ${c.lastUpdate}
     </div>
     <span class="badge bg-danger rounded-pill">${c.deaths.value}</span>
   </li>
 </ol>
  `
}