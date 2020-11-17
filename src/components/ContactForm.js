import React, { useState, useEffect } from "react";

const ContactForm = ({ addOrEdit, currentid, contactObjects }) => {
  const initialFieldValues = {
    fullName: "",
    mobile: "",
    email: "",
    address: "",
  };

  const [values, setValues] = useState(initialFieldValues);

  useEffect(() => {
    if (currentid == "")
      setValues({
        ...initialFieldValues,
      });
    else
      setValues({
        ...contactObjects[currentid],
      });
  }, [currentid, contactObjects]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // console.log(e.target.name);
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleForSubmit = (e) => {
    e.preventDefault();
    addOrEdit(values);
  };

  return (
    <form autoComplete="off" onSubmit={handleForSubmit}>
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fas fa-user"></i>
          </div>
        </div>
        <input
          className="form-control"
          placeholder="Full Name"
          name="fullName"
          value={values.fullName}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-row">
        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-mobile-alt"></i>
            </div>
          </div>
          <input
            onChange={handleInputChange}
            className="form-control"
            placeholder="Mobile"
            name="mobile"
            value={values.mobile}
            required
          />
        </div>
        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-envelope"></i>
            </div>
          </div>
          <input
            onChange={handleInputChange}
            className="form-control"
            placeholder="Email"
            name="email"
            value={values.email}
            required
          />
        </div>
      </div>
      <div className="form-group">
        <textarea
          onChange={handleInputChange}
          className="form-control"
          placeholder="Address"
          name="address"
          value={values.address}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="submit"
          value={currentid == "" ? "Save" : "Update"}
          className="btn btn-primary btn-block"
        />
      </div>
    </form>
  );
};

export default ContactForm;
