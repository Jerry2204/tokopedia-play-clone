import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Products from '../components/Products.jsx';
import Comments from '../components/Comments.jsx';

function DetailProduct() {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [videoId, setVideoId] = useState('');

  useEffect(() => {
    axios
      .get(`https://ruby-adventurous-ox.cyclic.cloud/api/product/${id}`)
      .then(res => {
        setItem(res.data.data);
        setVideoId(extractVideoId(res.data.data.url));
      });
  }, []);

  return (
    <div className="container">
      <header className="bg-success text-white p-3 mb-3">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <h1 className="me-4">TokPed Play</h1>
          </div>
          <div className="d-flex align-items-center">
            <Link
              className="me-4 text-white btn btn-dark"
              style={{ textDecoration: 'none' }}
              to="/"
            >
              Back
            </Link>
          </div>
        </div>
      </header>

      <div className="row">
        <div className="col-md-9">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              width="850"
              height="400"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube Video"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <Products id={id} />
        </div>
        <Comments id={id} />
      </div>
    </div>
  );
}

function extractVideoId(url) {
  const videoIdMatch = url.match(
    /(?:v=|\/embed\/|\/\d\/|\/vi\/|\/e\/|v\/|https:\/\/www.youtube.com\/watch\?v=)([^#\&\?]*).*/
  );
  return (videoIdMatch && videoIdMatch[1]) || '';
}

export default DetailProduct;
