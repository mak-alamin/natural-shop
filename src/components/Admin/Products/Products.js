import React from "react";
import useProducts from "../../../hooks/useProducts";

const Products = () => {
  const [products] = useProducts();

  return (
    <div className="row">
      <div className="col-lg-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">All Products</h4>
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr>
                      <td className="py-1">
                        <img
                          src={`${window.location.origin}/${product.picture}`}
                          alt=""
                        />
                      </td>
                      <td>{product.name}</td>
                      <td>{product.price}</td>
                      <td>
                        <button className="btn-link border me-1">View</button>
                        <button className="btn-link border me-1 text-dark">
                          Edit
                        </button>
                        <button className="btn-link border text-danger">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
