import React from "react";
import Card from "react-bootstrap/Card";

const Bookcard = ({ book }) => {
  return (
    <div>
      <div
        style={{ width: "20rem", height: "320px", marginBottom: "50px" }}
      
      >
        <div>
          <div className="card_pic_div">
            <div className="card_pic_sub_div">
              <Card.Title style={{ fontSize: "auto" }}>{book.category}</Card.Title>
              <Card.Img
                // variant="top"
                src={book.image}
                style={{
                  width: "80px",
                }}
              />
            </div>
          </div>
        </div>
        <Card.Body className="card_body">
          <Card.Title style={{ fontSize: "22px" }}>{book.category}</Card.Title>
          <Card.Text style={{ fontSize: "15px" , fontFamily:"Greycliff CF Extra"  , fontWeight:"60px"}}>{book.category}.</Card.Text>
        </Card.Body>
      </div>
    </div>
  );
};

export default Bookcard;
