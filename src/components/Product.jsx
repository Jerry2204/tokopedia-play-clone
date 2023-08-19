function Product({ productData }) {
  return (
    <div className="col">
      <a href={productData.url}>
        <div className="card">
          <div style={{ height: 200 }}>
            <img
              src={productData.urlThumbnail}
              className="card-img-top"
              alt="URL Product tidak valid"
              style={{ height: '100%' }}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">{productData.title}</h5>
            <p className="card-text">Rp.{productData.price}</p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Product;
