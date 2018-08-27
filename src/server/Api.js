import Axios from 'axios';

export default () => {
  return Axios.create({
    baseURL: `https://council-dashboard.herokuapp.com/`,
  });
};
