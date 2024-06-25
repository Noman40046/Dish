import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const Revenue = () => {
  const [totalRevenue, setTotalRevenue] = useState(null);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure
      .get("/stats")
      .then((result) => {
        console.log(result.data.totalIncome);
        setTotalRevenue(result.data.totalIncome);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  console.log(totalRevenue);
  // if (!totalRevenue) {
  //   return <div>Loading...</div>;
  // }
  return (
    <div>
      <div className="heading font-bold text-3xl">Your Total Revenue</div>
      <div className="revenue-amount font-bold text-3xl bg-gradient-to-r from-indigo-600 via-red-500 to-orange-400 inline-block text-transparent bg-clip-text">
        {totalRevenue}
      </div>
    </div>
  );
};

export default Revenue;
