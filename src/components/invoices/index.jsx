import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Invoices = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setError(true);
      e.target.reset();
      console.log("Message submited: " + JSON.stringify(data));
    }, 2500);
  };

  return (
    <div className="contact">
      <form className="contactform" onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
        <div className="col-12">
            <div className="form-group">
              <input
                {...register("invoice", { required: true })}
                type="text"
                name="invoice"
                placeholder="INVOICE NUMBER"
              />
              {errors.invoice && (
                <span className="invalid-feedback">An invoice number is required.</span>
              )}
            </div>
          </div>

          <h3>Card Information</h3>
          <p>We accept AMEX, Visa, and Mastercard</p>

          <div className="col-12 col-md-6">
            <div className="form-group">
              <input
                {...register("name", { required: true })}
                type="text"
                name="name"
                placeholder="NAME ON CARD"
              />
              {errors.name && errors.name.type === "required" && (
                <span className="invalid-feedback">Name is required</span>
              )}
            </div>
          </div>

          <div className="col-6 col-md-3">
            <div className="form-group">
              <input
                {...register(
                  "exp",
                  { required: true }
                )}
                type="text"
                name="exp"
                placeholder="EXPIRATION"
              />
              {errors.exp && errors.exp.type === "required" && (
                <span className="invalid-feedback">Expiration is required</span>
              )}
            </div>
          </div>

          <div className="col-6 col-md-3">
            <div className="form-group">
              <input
                {...register(
                  "security",
                  { required: true }
                )}
                type="text"
                name="security"
                placeholder="SECURITY CODE"
              />
              {errors.security && (
                <span className="invalid-feedback">Security code is required</span>
              )}
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="form-group">
              <input
                {...register("address", { required: true })}
                type="text"
                name="address"
                placeholder="BILLING ADDRESS"
              />
              {errors.address && errors.address.type === "required" && (
                <span className="invalid-feedback">Address is required</span>
              )}
            </div>
          </div>

          <div className="col-12 col-md-3">
            <div className="form-group">
              <input
                {...register("city", { required: true })}
                type="text"
                name="city"
                placeholder="CITY"
              />
              {errors.city && errors.city.type === "required" && (
                <span className="invalid-feedback">City is required</span>
              )}
            </div>
          </div>

          <div className="col-12 col-md-3">
            <div className="form-group">
              <input
                {...register("zip", { required: true })}
                type="text"
                name="zip"
                placeholder="ZIP CODE"
              />
              {errors.zip && errors.zip.type === "required" && (
                <span className="invalid-feedback">Zip code is required</span>
              )}
            </div>
          </div>

          <h3>Feedback</h3>
          <p>Write about how we did and thank you for working with us</p>

          <div className="col-12">
            <div className="form-group">
              <textarea
                {...register("message", { required: false })}
                name="message"
                placeholder="YOUR MESSAGE"
              ></textarea>
            </div>
          </div>
          
          {error && (
            <div className="col-12">
              <p className={`invalid-feedback`}>Invoice not found. Please try again or contact inquiries@pubkey.group</p>
            </div>
          )}

          <div className="col-12">
            <button type="submit" className="button">
              <span className="button-text">{isLoading ? 'Submitting' : 'Submit Payment'}</span>
              <span className={`button-icon fa ${isLoading ? 'fa-spinner animate-spin' : 'fa-send'}`}></span>
            </button>
          </div>
          {/* End .col */}
        </div>
      </form>

      {/* End contact */}
    </div>
  );
};

export default Invoices;
