import './App.css';
import Products from './Component/Products';

function App() {
  const products = [
  {
    productId: '1',
    productPic: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    productName: 'bag',
    Brand: 'Adidas',
    productDescription: 'A stylish and comfortable pair of shoes.',
    Price: '7$',
    Rating: 4
  },
  {
    productId: '2',
    productPic: 'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    productName: 'cap',
    Brand: 'Adidas',
    productDescription: 'A stylish and comfortable pair of shoes.',
    Price: '7$',
    Rating: 4
  },
  {
    productId: '3',
    productPic: 'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    productName: 'watch',
    Brand: 'titan',
    productDescription: 'A stylish and comfortable pair of shoes.',
    Price: '7$',
    Rating: 4
  },
  {
    productId: '4',
    productPic: 'https://images.pexels.com/photos/2562992/pexels-photo-2562992.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    productName: 'Shoes',
    Brand: 'Adidas',
    productDescription: 'A stylish and comfortable pair of shoes.',
    Price: '7$',
    Rating: 4
  },
  {
    productId: '5',
    productPic: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    productName: 'phone',
    Brand: 'Adidas',
    productDescription: 'A stylish and comfortable pair of shoes.',
    Price: '7$',
    Rating: 4
  },
];

return (
  <div className="App">
    <h1>Products</h1>
    <div className="product-grid">
      {products.map(product => (
        <Products key={product.productId} product={product} />
      ))}
    </div>
  </div>
 
 
)
      }
export default App;
