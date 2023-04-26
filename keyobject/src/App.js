import logo from './logo.svg';
import './App.css';
import Card from './Coponanat/Card';

function App() {
  const productDetails = [
    { id: 1, name: 'Product 1', price: 10.99 },
    { id: 2, name: 'Product 2', price: 19.99 },
    { id: 3, name: 'Product 3', price: 7.99 }
  ];
  return (
    <div className="App">
    { productDetails.map(productDetail => (
  <Card key={productDetail.id} productDetail={productDetail} />
))}
</div>
  );
}

export default App;
