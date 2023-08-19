import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ProductList() {
  const navigate = useNavigate();

  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get('https://ruby-adventurous-ox.cyclic.cloud/api/product')
      .then(res => {
        console.log(res.data);
        setProduct(res.data.data.videoproduct);
      });
  }, []);

  return (
    <div className="container">
      {/* Komponen Header */}
      <header className="bg-dark text-white p-3">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <h1 className="me-4">Title</h1>
          </div>
          <div className="d-flex align-items-center">
            <span className="me-2">Username</span>
            <button className="btn btn-light">Logout</button>
          </div>
        </div>
      </header>

      {/* Komponen Body */}
      <div className="container mt-4">
        <div className="row">
          {product.map(el => {
            return (
              <div
                onClick={() => navigate(`/thumbnail-list/${el._id}`)}
                key={el._id}
                className="col-md-4 mb-4"
              >
                <div className="card">
                  <div className="card-header">
                    <img
                      className="img-fluid"
                      src={el.urlImageThumbnail}
                      alt="Link Gambar Tidak Valid"
                      style={{ height: '300px' }}
                    />
                  </div>
                  <div className="card-body">
                    <p>{el.title}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default ProductList;
