import axios from "axios";
const API_URL = "http://localhost:8080/articles";

class ProductService {
  get() {
    return axios.get(API_URL);
  }
  // get(params) {
  //   return axios.get(API_URL + "?" + params);
  // }
  getOne(id) {
    return axios.get(`${API_URL}/${id}`);
  }
  create(data) {
    return axios.post(`${API_URL}`, data);
  }
  update(id, data) {
    return axios.put(`${API_URL}/${id}`, data);
  }
  delete(id) {
    return axios.delete(`${API_URL}/${id}`);
  }
}
export default ProductService;
