const SingleProduct = ({ product, handleCartToAdd }) => {
  return (
    <div>

      <div className="card">
        <img src={product.image} alt="" />
        <h1>{product.title.slice(0, 10)}</h1>
        <p>{product.description}</p>

        <div className="card-footer">
          <h2>{product.price} $</h2>
          <button onClick={(e)=> handleCartToAdd(product)} className="add-btn">Add to cart</button>
        </div>
      </div>

    </div>
  );
};

export default SingleProduct;
