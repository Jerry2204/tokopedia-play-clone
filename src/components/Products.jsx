import Product from './Product.jsx';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Products({ id }) {
  const [listProduct, setlistProduct] = useState([]);
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    axios
      .get(`https://ruby-adventurous-ox.cyclic.cloud/api/product`)
      .then(res => {
        setlistProduct(res.data.data);
      })
      .finally(() => setIsLoad(false));
  }, []);

  return (
    <div className="row row-cols-1 row-cols-md-5 g-4 mt-1 mb-5">
      {isLoad ? (
        <div className="spinner-border" role="status">
          <span className="sr-only"></span>
        </div>
      ) : listProduct.length === 0 ? (
        <h6>Data produk tidak tersedia</h6>
      ) : (
        listProduct.map(el => {
          return <Product productData={el} key={el._id} />;
        })
      )}
    </div>
  );
}

export default Products;
