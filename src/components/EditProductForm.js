import React, { useState } from "react";
import { Input, Container, Form, Button } from "reactstrap";

const EditProductForm = props => {
  const [product, setProduct] = useState(props.currentProduct);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  return (
    <Form
      onSubmit={event => {
        event.preventDefault();
        if (!product.name) return;
        props.updateProduct(product);
      }}
    >
      <Container className="container-sm">
        <div className="row">
          <div className="col">
            <label>Code</label>
            <Input
              type="text"
              name="code"
              value={product.code}
              onChange={handleInputChange}
            ></Input>
          </div>
          <div className="col">
            <label>Name</label>
            <Input
              type="text"
              name="name"
              value={product.name}
              onChange={handleInputChange}
            ></Input>
          </div>
          <div className="col">
            <label>Brand</label>
            <Input
              type="text"
              name="brand"
              value={product.brand}
              onChange={handleInputChange}
            ></Input>
          </div>
          <div className="col">
            <label>Quantity</label>
            <Input
              type="text"
              name="quantity"
              value={product.quantity}
              onChange={handleInputChange}
            ></Input>
          </div>
          <div className="col">
            <label>Price</label>
            <Input
              type="text"
              name="price"
              value={product.price}
              onChange={handleInputChange}
            ></Input>
          </div>
          <div className="col">
            <br />
            <Button className="btn btn-success">Edit Product</Button>
            <br />
          </div>
          <div className="col">
            <br />
            <Button
              onClick={() => props.setEditing(false)}
              className="btn btn-warning"
            >
              Cancel
            </Button>
          </div>
        </div>
      </Container>
    </Form>
  );
};

export default EditProductForm;
