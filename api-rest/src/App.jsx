import { useEffect, useState } from "react";
import "./App.css";
import SingleProduct from "./component/SingleProduct";

function App() {
  //store data
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // data load
  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleCartToAdd = (p) => {
    const isExit = cart.find((product) => product.id == p.id);
    
    if (!isExit) {
      setCart([...cart, p]);
    } else {
      alert("Already in cart");
    }
  };
  console.log(cart);

  const handleDelete = (id) => {
    const newCart = cart.filter((product) => product.id !== id);
    setCart( newCart);
  };

  return (
    <>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}

      <div className="main-container">
        <div className="cards-container">
          {products.map((product) => (
            <SingleProduct
              key={product.id}
              product={product}
              handleCartToAdd={handleCartToAdd}
            ></SingleProduct>
          ))}
        </div>

        <div className="card-container">
          <h1>This is Cart</h1>
          <div className="cart-items">
            <h5>name</h5>
            <h5>price</h5>
          </div>

          <div>
            {cart.map((item, index) => (
              <div className="cart-info">
                <p>{index + 1}</p>
                <h5>{item.title.slice(0, 10)}</h5>
                <h5>{item.price}</h5>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
