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
          {products.map((item) => (
            <Col md={5} className="project-card" key={item.id}>
              <div className="project-card-views" key={item.id}>
                  <div  className="project-card">

                    <img src={item.image_url}  className="card-img img" alt={item.name} />
                    <div className="card-body">                   
                         <Card.Title>
                           {item.name}
                         </Card.Title>
                          <Card.Text style={{ textAlign: "justify", fontSize: '0.9rem' }}>
                              <a className="cardbout" onClick={handleShow}>
                                Read more
                              </a>{" "}
                            </Card.Text>
                          <Card.Text><span className="price"><span className="cash">Price: </span> Ksh {item.amount}/-</span></Card.Text>
                      <Link to="/cart">
                        <button onClick={() => handleClick(item)} className=" btn btn-primary">
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
