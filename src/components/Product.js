import React from "react";
import { Table, Button } from "reactstrap";

const Product = ({ products, removeProduct, editProduct, editing }) => (
  <Table className="table">
    <thead>
      <tr>
        <th>Code</th>
        <th>Name</th>
        <th>Brand</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {products.map((item, _) => (
        <tr key={item.id}>
          <td>{item.code}</td>
          <td>{item.name}</td>
          <td>{item.brand}</td>
          <td>{item.quantity}</td>
          <td> $ {item.price}</td>
          <td>
            {editing ? null : (
              <Button
                className="btn btn-success"
                onClick={() => editProduct(item)}
              >
                Edit
              </Button>
            )}
            <span> </span>
            <Button
              className="btn btn-danger"
              onClick={() => removeProduct(item.id)}
            >
              Delete
            </Button>
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default Product;
