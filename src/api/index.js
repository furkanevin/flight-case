import axios from 'axios';

// const headers = {
//   app_id: 'cfa927a7',
//   app_key: '071b46261f6358977012aaf164c2773f',
//   ResourceVersion: 'v4',
//   Accept: 'application/json',
// };

const options = {
  headers:{
    app_id:"c17cb815",
  app_key:"798ace8433c0b6cad4baaacd8ee31755",
  ResourceVersion: 'v4',
  }
}

const proxy = "https://thingproxy.freeboard.io/fetch/"

export const getFlights = () =>
  axios
    .get(`${proxy}https://api.schiphol.nl/public-flights/flights`,options)
    .then((res) => res.data)
    .catch((err) => console.log(err));
