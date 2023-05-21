import axios from "axios";
import ProductList from "./component/ProductList";

axios.get("https://course-api.com/react-store-products").then((response) => {
  ProductList(response.data);
});
