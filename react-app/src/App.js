import './App.css';
import ProductCard from './features/ProductCard';

function App() {
  const imgUrl = "";
  return (
    <>
      <div class="container">
        <div class="row text-start">
        <img className="rounded float-start" src={imgUrl} alt="" />
          <h2 class="col">Car</h2>
        </div>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <ProductCard></ProductCard>
        </div>
      </div>
    </>
  );
}

export default App;
