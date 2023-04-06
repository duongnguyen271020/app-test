import logo from './logo.svg';
import './App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {ProductList} from "./component/ProductList";
import products from "./product/ProductData";


function App() {
  return (
      <div className="container">
          <ProductList products={products} title="DANH SACH SAN PHAM"/>
      </div>
  );
}

export default App;
