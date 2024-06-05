import SimpleCountUp from "./Counter";

const Revenue = () => {
  return (
    <div>
      <div className="heading font-bold text-3xl">Your Total Revenue</div>
      <div className="revenue-amount font-bold text-3xl bg-gradient-to-r from-indigo-600 via-red-500 to-orange-400 inline-block text-transparent bg-clip-text">
        <SimpleCountUp end={57900} />
      </div>
    </div>
  );
};

export default Revenue;
