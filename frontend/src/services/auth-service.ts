import axios from "axios";

const API_URL = "http://localhost:5000/";

class AuthService {
  login(email: string, password: string) {
    const user = { email: email, password: password };
    return axios
      .post(API_URL + "login", {
        user,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        window.location.href = "/store"; //redirect to store page
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
    window.location.href = "/"; //redirect to login page
  }

  register(email: string, password: string) {
    const user = { email: email, password: password };
    return axios.post(API_URL + "signup", {
      user,
    });
  }

  getCurrentUser() {
    const currentUser = localStorage.getItem("user");
    if (currentUser) {
      return JSON.parse(currentUser);
    }
  }
}

export default new AuthService();
