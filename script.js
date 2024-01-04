console.log("connected");
const api = "b7ccf0dd3aae4bf7ba0135554230710";
const textContent = document.querySelector(".text-content");
const searchBox = document.querySelector("#searchBox");
const weathericon = document.querySelector(".weathericon");

searchBox.addEventListener("change", (e) => {
  result(e.target.value);
});
async function result(location) {
  let call = `https://api.weatherapi.com/v1/current.json?key=${api}&q=${location}`;
  let result = await fetch(call);
  let data = await result.json();
  const icon = data.current.condition.icon;
  console.log(icon);
  weathericon.innerHTML = `<img src="https:${icon}" class="icon">`;
  textContent.innerHTML = `<div class="weatherCondition">
  <h2>${data.current.condition.text} ( ${data.current.temp_c} °C )</h2>
  </div>
  <div>
    <ul>
      <li>City: ${data.location.name}</li>	
      <li>Region: ${data.location.region}</li>	
      <li>Country: ${data.location.country} </li>	
      <li>Humidity: ${data.current.humidity} </li>	
      <li>Wind: ${data.current.humidity} Km/H (${data.current.wind_dir})</li>	

    </ul>
  </div>`;
  console.log(data);
}

// result("usa");
