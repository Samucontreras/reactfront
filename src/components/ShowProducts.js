import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
//import logo from './logo192.png';

const endpoint = 'http://localhost:8000/api';

export const ShowProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    try {
      const response = await axios.get(`${endpoint}/products`);
      setProducts(response.data);
      console.log(response);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${endpoint}/product/${id}`);
      getAllProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="./img.png" alt="Logo" width="150" height="75" className="d-inline-block align-top me-2" />
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/create">Crear Producto</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Product Table */}
      <div className="container mt-4">
        <table className="table table-striped">
          <thead className="bg-primary text-white">
            <tr>
              <th>Description</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td>
                  <Link to={`/edit/${product.id}`} className="btn btn-warning me-2">Edit</Link>
                  <button onClick={() => deleteProduct(product.id)} className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowProducts;
