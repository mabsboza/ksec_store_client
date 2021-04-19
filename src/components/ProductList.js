import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewProductForm from './NewProductForm';
import EditProductForm from './EditProductForm';
import Product from './Product';
import { Container } from 'reactstrap'

const ProductList = props => {

  const initialFormState = {
    code: '',
    name: '',
    brand: '',
    quantity: 0,
    price: 0
  };

  const [editing, setEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(initialFormState);

  const addProduct = product => {
    const qs = require("qs");
    axios
      .post(
        "/api/v1/products",
        qs.stringify({
          product: {
            code: product.code,
            name: product.name,
            brand: product.brand,
            quantity: product.quantity,
            price: product.price
          }
        })
      )
      .then(res => console.log(res))
      .catch(error => console.log(error));

      setProducts([...products, product]);
  };

  const editProduct = product => {
    setEditing(true);
    setCurrentProduct({
      id: product.id,
      code: product.code,
      name: product.name,
      brand: product.brand,
      quantity: product.quantity,
      price: product.price
    });
  };

  const updateProduct = updatedProduct => {
    setEditing(false);

    const qs = require("qs");
    axios
      .patch(
        "/api/v1/products/" + updatedProduct.id,
        qs.stringify({
          product: {
            code: updatedProduct.code,
            name: updatedProduct.name,
            brand: updatedProduct.brand,
            quantity: updatedProduct.quantity,
            price: updatedProduct.price
          }
        })
      )
      .then(res => console.log(res.data));

    setProducts(products.map(product => (product.id === updatedProduct.id ? updatedProduct : product)));
  };

  const removeProduct = id => {
    axios.delete( '/api/v1/products/' + id )
        .then(response => {
          setProducts(products.filter(product => product.id !== id))
        })
        .catch(error => console.log(error))
        
  };

  useEffect(() => {
    axios.get("/api/v1/products.json").then(res => setProducts(res.data));
  }, []);

  const [products, setProducts] = useState([]);

  return (
    <>
      <Container>
        <div>
          {editing ? (
            <EditProductForm
              setEditing={setEditing}
              currentProduct={currentProduct}
              updateProduct={updateProduct}
            />
          ) : (
            <NewProductForm
              addProduct={addProduct}
              initialFormState={initialFormState}
            />
          )}
        </div>
        <br />
        <hr />
        <Product products={products} removeProduct={removeProduct} editProduct={editProduct} editing={editing}/>
      </Container>
    </>
  );
};
export default ProductList;