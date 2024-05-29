import React from "react";

const Payment = () => {
  return (
    <div className="Paybill-container">
      <div class="main">
        <div class="container">
          <div class="heading">
            <h1 className="text-black font-bold">Pay Bill</h1>
          </div>

          <label for="email">Email</label>
          <input className="mb-4" type="email" id="email" name="email" placeholder="Email" />

          <label for="month">Month Of Bill</label>
          <input className="mb-4" type="month" id="month" name="month" placeholder="Month" />

          <label for="card">Card number</label>
          <input
            type="text"
            minlength="16"
            maxlength="16"
            id="card"
            name="card"
            placeholder="0000 0000 0000 0000"
             className="mb-4"
          />

          <div class="exp-cvc">
            <div class="expiration">
              <label for="expiry">Expiration date</label>
              <input
                class="inputCard"
                name="expiry"
                id="expiry"
                type="text"
                required
                placeholder="00/00"
              />
            </div>
            <div class="security">
              <label for="cvc">CVC</label>
              <input
                type="text"
                minlength="3"
                maxlength="4"
                id="cvc"
                name="cvc"
                placeholder="XXX"
              />
            </div>
          </div>
          <div class="btn mt-4">
            <span id="submit">Submit</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
