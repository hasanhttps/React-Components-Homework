import logo from './logo.svg';
import './App.css';
import { UseProfile } from './components/UseProfile/UseProfile';
import { ProductCard } from './components/ProductCard/ProductCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          {/* <UseProfile name="Hesen" mail='hasanabdullazad@gmail.com'></UseProfile> */}
          <ProductCard productname={"Coca-Cola"} price={"2.99"} image={"https://bazarstore.az/cdn/shop/products/30009475_3bde13a5-6a8c-412e-9b97-111f72c6173a.jpg?v=1693743404"}></ProductCard>
      </header>
    </div>
  );
}

export default App;