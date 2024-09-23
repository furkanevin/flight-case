import axios from 'axios';

// const headers = {
//   app_id: 'cfa927a7',
//   app_key: '071b46261f6358977012aaf164c2773f',
//   ResourceVersion: 'v4',
//   Accept: 'application/json',
// };

export const getFlights = () =>
  axios
    .get('http://localhost:3090/flights')
    .then((res) => res.data)
    .catch((err) => console.log(err));
