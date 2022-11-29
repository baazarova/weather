let input = document.querySelector(".city-input");
let form = document.querySelector(".form");
let btn = document.querySelector(".btn");
let inpVal = "";

let box = document.querySelector('.box');

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "677efaab11msh79e7dd74fdb9b5ap1eb6a0jsnb4ce8b6d8b04",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

let renderWeather = (data) => {
  box.innerHTML = null;
  console.log(data);
  let div = document.createElement("div");
  
  div.innerHTML = `
        <div class="card" style="width: 18rem">
        <img src="${data.current.condition.icon}" width="10" height="200" class="card-img-top" alt="..." />
        <div class="card-body">
          <h3 class="card-title">${data.location.name}</h3>
          <h4 class=card-country>${data.location.country}</h4>
          <p class="card-temp">${data.current.temp_c}<sup>c</sup></p>
          <p class="card-time">${data.location.localtime}</p>
          </div>
          </div>
          `;

          box.append(div);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let inpVal = input.value;
  console.log(inpVal);

  fetch(
    `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${inpVal}&dt=2022-12-25`,
    options
  )
    .then((response) => response.json())
    .then((response) => renderWeather(response))
    .catch((err) => console.error(err));

  // let url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${inpVal}&dt=2022-12-25`;

  // const getData = async function () {
  //     let response = await fetch(url, options);

  //     const data = await response.json();
  //     return data;
  // }
  // getData();
});
