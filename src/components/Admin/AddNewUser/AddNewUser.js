import React from "react";

const AddNewUser = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Add New User</h4>
              <form className="forms-sample">
                <div className="form-group">
                  <label for="exampleInputUsername1">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputUsername1"
                    placeholder="Username"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputConfirmPassword1">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputConfirmPassword1"
                    placeholder="Password"
                  />
                </div>
                <button type="submit" className="btn btn-primary mr-2">
                  Add user
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewUser;
