import axios from "axios";
const API_URL = "http://localhost:8080/orders";

class OrderService {
  get() {
    return axios.get(API_URL, { withCredentials: true });
  }
  getAll() {
    return axios.get(API_URL + "all");
  }
  //   get(params) {
  //     // console.log(`${API_URL}/vehiclemake?`, params);
  //     return axios.get(API_URL + "?" + params);
  //   }
  getOne(id) {
    return axios.get(`${API_URL}/${id}`);
  }
  create(data) {
    return axios.post(`${API_URL}`, data, { withCredentials: true });
  }
  update(id, data) {
    return axios.put(`${API_URL}/${id}`, data, { withCredentials: true });
  }
  delete(id) {
    return axios.delete(`${API_URL}/${id}`, { withCredentials: true });
  }
}
export default OrderService;
