import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Modal, Button, Card } from "react-bootstrap";
import "./shop.css";

function Shop({ handleClick }) {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((products) => {
        console.log(products)
        setProducts(products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleShow = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <Container fluid className="project-section">
      <Container>
        <Row style={{ justifyContent: "center"}}>
          {products.map((product) => (
            <Col md={5} className="project-card" key={product.id}>
              <div className="project-card-views" key={product.id}>
                  <div  className="project-card">
                    <img src={product.image_url}  className="img" alt={product.name} />
                    <div className="card-body">                   
                         <Card.Title>
                           {product.name}
                         </Card.Title>
                          <Card.Text style={{ textAlign: "justify", fontSize: '0.9rem' }}>
                              <a className="cardbout" onClick={handleShow}>
                                Read more
                              </a>{" "}
                            </Card.Text>
                          <Card.Text><span className="price"><span className="cash">Price: </span> Ksh {product.amount}/-</span></Card.Text>
                      <Link to="/checkout">
                        <button onClick={() => handleClick(product)} className=" btn btn-primary">
                          Add to cart
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
            </Col>
          ))}
        </Row>       
      </Container>
      {/* Modal for Description */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProduct.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{selectedProduct.description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Shop;
