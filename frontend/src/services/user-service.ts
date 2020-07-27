import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:5000/";

type Item = {
  name: string;
  price: string;
};

class UserService {
  async getStoreItems() {
    let items: Array<Item> = [];
    axios.get(API_URL + "items", { headers: authHeader() }).then((resp) => {
      const data = resp!.data;
      data.forEach((obj: any) => {
        const item = { name: obj!.name, price: obj!.price };
        items = [...items, item];
      });
      console.log(items);
      return items;
    });
  }
}

export default new UserService();
