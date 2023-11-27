// import React, { useState, useEffect } from "react";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import "./shop.css";
// import { Link } from "react-router-dom";

// function ShopCards(props, handleClick ) {
//   const [showModal, setShowModal] = useState(false);  
//   const [products, setProducts] = useState([])
//   const handleShow = () => setShowModal(true);
//   const handleClose = () => setShowModal(false);



//   return (
//     <Card className="project-card-view">
//       <Card.Img
//         className="img"
//         variant="none"
//         src={props.imgPath}
//         alt="card-img"
//       />
//       <Card.Body>
//         <Card.Title style={{ marginTop: '0' }}>{props.title}</Card.Title>
//         <Card.Text style={{ textAlign: "justify", fontSize: '0.9rem' }}>
//           <a className="cardbout" onClick={handleShow}>
//             Read more
//           </a>{" "}
//         </Card.Text>
//         <Card.Text><span className="price"><span className="cash">Price: </span> Ksh {props.amount}/-</span></Card.Text>
//         <Link to="/cart">
//           <button className="orderfmbtn btn btn-primary" type="submit" onClick={() => handleClick(products)}>
//             Place Order
//           </button>
//         </Link>
//       </Card.Body>

//       {/* Modal for Description */}
//       <Modal  show={showModal} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>{props.title}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>{props.description}</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </Card>
//   );
// }

// export default ShopCards;
