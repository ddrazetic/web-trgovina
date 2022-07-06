import axios from "axios";
const API_URL = "http://localhost:8080";

class UserService {
  getUser() {
    return axios.get(API_URL + "/auth/user", { withCredentials: true });
  }
  logout() {
    return axios.get(`${API_URL}/auth/logout`, { withCredentials: true });
  }
  login(data) {
    return axios.post(`${API_URL}/auth/login`, data, { withCredentials: true });
  }
  register(data) {
    return axios.post(`${API_URL}/auth/register`, data);
  }
  // update(id, data) {
  //   return axios.put(`${API_URL}/${id}`, data);
  // }
  // delete(id) {
  //   return axios.delete(`${API_URL}/${id}`);
  // }
}
export default UserService;
