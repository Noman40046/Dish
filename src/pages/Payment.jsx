// eslint-disable-next-line no-unused-vars
import React from "react";
import PaymentSearch from "../components/payment-components/PaymentSearch";
import AllPayments from "../components/payment-components/AllPayments";

const Payment = () => {
  return (
    <div className="p-4 sm:ml-64" >
      <main className=" w-full px-3 sm:px-10">

        {/*--- Payments search section--- */}
        <PaymentSearch/>

        {/* ----All Payments---- */}
        <AllPayments/>
      </main>
    </div>
  );
};

export default Payment;
