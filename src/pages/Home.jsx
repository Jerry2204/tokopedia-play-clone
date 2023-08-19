import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  ChakraProvider,
  Grid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';

function ProductList() {
  const navigate = useNavigate();

  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get('https://ruby-adventurous-ox.cyclic.cloud/api/product')
      .then(res => {
        setProduct(res.data.data);
      });
  }, []);

  return (
    <div className="container">
      <>
        <ChakraProvider>
          <Box textAlign="center" fontSize="xl">
            <Grid minH="100vh" p={3}>
              <Tabs variant="soft-rounded" colorScheme="green">
                <TabList>
                  <Tab>Live</Tab>
                  <Tab>Explore</Tab>
                  <Tab>Official Store</Tab>
                  <Tab>Terbaru</Tab>
                  <Tab>Upcoming</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <div className="container mt-4">
                      <div className="row">
                        {product.map(el => {
                          return (
                            <div
                              onClick={() => navigate(`/product/${el._id}`)}
                              key={el._id}
                              className="col-md-4 mb-4"
                              style={{ cursor: 'pointer' }}
                            >
                              <div className="card">
                                <img
                                  className="img-fluid"
                                  src={el.urlThumbnail}
                                  alt="Link Gambar Tidak Valid"
                                  style={{
                                    height: '300px',
                                    borderRadius: '5px',
                                  }}
                                />
                                <div className="card-body">
                                  <div className="d-flex justify-content-between">
                                    <p className="text-success fw-bold">
                                      {el.title}
                                    </p>
                                    <p className="text-warning">
                                      Rp. {el.price},-
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="container mt-4">
                      <div className="row">
                        {product.map(el => {
                          return (
                            <div
                              onClick={() => navigate(`/product/${el._id}`)}
                              key={el._id}
                              className="col-md-4 mb-4"
                              style={{ cursor: 'pointer' }}
                            >
                              <div className="card">
                                <img
                                  className="img-fluid"
                                  src={el.urlThumbnail}
                                  alt="Link Gambar Tidak Valid"
                                  style={{
                                    height: '300px',
                                    borderRadius: '5px',
                                  }}
                                />
                                <div className="card-body">
                                  <div className="d-flex justify-content-between">
                                    <p className="text-success fw-bold">
                                      {el.title}
                                    </p>
                                    <p className="text-warning">
                                      Rp. {el.price},-
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="container mt-4">
                      <div className="row">
                        {product.map(el => {
                          return (
                            <div
                              onClick={() => navigate(`/product/${el._id}`)}
                              key={el._id}
                              className="col-md-4 mb-4"
                              style={{ cursor: 'pointer' }}
                            >
                              <div className="card">
                                <img
                                  className="img-fluid"
                                  src={el.urlThumbnail}
                                  alt="Link Gambar Tidak Valid"
                                  style={{
                                    height: '300px',
                                    borderRadius: '5px',
                                  }}
                                />
                                <div className="card-body">
                                  <div className="d-flex justify-content-between">
                                    <p className="text-success fw-bold">
                                      {el.title}
                                    </p>
                                    <p className="text-warning">
                                      Rp. {el.price},-
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="container mt-4">
                      <div className="row">
                        {product.map(el => {
                          return (
                            <div
                              onClick={() => navigate(`/product/${el._id}`)}
                              key={el._id}
                              className="col-md-4 mb-4"
                              style={{ cursor: 'pointer' }}
                            >
                              <div className="card">
                                <img
                                  className="img-fluid"
                                  src={el.urlThumbnail}
                                  alt="Link Gambar Tidak Valid"
                                  style={{
                                    height: '300px',
                                    borderRadius: '5px',
                                  }}
                                />
                                <div className="card-body">
                                  <div className="d-flex justify-content-between">
                                    <p className="text-success fw-bold">
                                      {el.title}
                                    </p>
                                    <p className="text-warning">
                                      Rp. {el.price},-
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="container mt-4">
                      <div className="row">
                        {product.map(el => {
                          return (
                            <div
                              onClick={() => navigate(`/product/${el._id}`)}
                              key={el._id}
                              className="col-md-4 mb-4"
                              style={{ cursor: 'pointer' }}
                            >
                              <div className="card">
                                <img
                                  className="img-fluid"
                                  src={el.urlThumbnail}
                                  alt="Link Gambar Tidak Valid"
                                  style={{
                                    height: '300px',
                                    borderRadius: '5px',
                                  }}
                                />
                                <div className="card-body">
                                  <div className="d-flex justify-content-between">
                                    <p className="text-success fw-bold">
                                      {el.title}
                                    </p>
                                    <p className="text-warning">
                                      Rp. {el.price},-
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Grid>
          </Box>
        </ChakraProvider>
      </>
    </div>
  );
}
export default ProductList;
