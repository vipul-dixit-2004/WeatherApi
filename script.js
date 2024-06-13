const api = "b7ccf0dd3aae4bf7ba0135554230710";
const showBox = document.querySelector(".result");
const searchBox = document.querySelector("#searchBox");

searchBox.addEventListener("change", (e) => {
  result(e.target.value);
});
//html format convertor function
const htmlMaker = (data) => {
  const structure = `
  <div class="weathericon">
    <img src="https:${data.current.condition.icon}" class="icon">
    <h1 class="temp"> ${data.current.temp_c} °C</h1>
    <h2 class="description">${data.current.condition.text}</h2>
  </div>
		<div class="text-content">
			<div class="weatherCondition">
        <h1>${data.location.name}</h1>
        <h2><p>${data.location.region}, ${data.location.country}</p></h2>
    
      </div>
      <div>
        <ul>
          <li>Feels like: ${data.current.feelslike_c} °C</li>  
          <li>Heat Index: ${data.current.heatindex_c} °C</li>  
          <li>Humidity: ${data.current.humidity}%</li>	
          <li>Wind: ${data.current.humidity} Km/H (${data.current.wind_dir})</li>	

        </ul>
      </div>
		</div>
  `;
  return structure;
};

async function result(location) {
  let call = `https://api.weatherapi.com/v1/current.json?key=${api}&q=${location}`;
  let result = await fetch(call);
  let data = await result.json();
  if (!data.hasOwnProperty("error")) {
    showBox.innerHTML = htmlMaker(data);
  } else {
    showBox.innerHTML = `<h1 style="color:red">${data.error.message}<br> Please Try Again</h1>`;
  }
}
window.onload = () => {
  result("jaipur");
};
