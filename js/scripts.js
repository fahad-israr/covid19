
function toggleNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/*Fetch data from API: https://api.covid19api.com/summary and update in HTML*/

async function getSummary() {
  let url = 'https://api.covid19api.com/summary';
  try {
      let res = await fetch(url);
      return await res.json();
  } catch (error) {
      console.log(error);
  }
}
async function renderReports() {
  let summary = await getSummary();
  summary.Countries.forEach(country => {
      console.log(country);
      if(country.CountryCode==="US")document.querySelector('#usa').innerHTML=country.TotalConfirmed;
      if(country.CountryCode==="IT")document.querySelector('#italy').innerHTML=country.TotalConfirmed;
      if(country.CountryCode==="CN")document.querySelector('#china').innerHTML=country.TotalConfirmed;
      if(country.CountryCode==="ES")document.querySelector('#spain').innerHTML=country.TotalConfirmed;
      if(country.CountryCode==="DE")document.querySelector('#germany').innerHTML=country.TotalConfirmed;
      if(country.CountryCode==="IR")document.querySelector('#iran').innerHTML=country.TotalConfirmed;
  });

}
renderReports();
