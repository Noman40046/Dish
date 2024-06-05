import CountUp from 'react-countup';

const Revenue = () => {
  return (
    <div>
      <div className="heading font-bold text-3xl">Your Total Revenue</div>
      <CountUp start={9} end={57000}>
        {({ countUpRef }) => (
           <div className="revenue-ammount font-bold text-3xl bg-gradient-to-r from-indigo-600 via-red-500 to-orange-400 inline-block text-transparent bg-clip-text">
           ৳ <span ref={countUpRef}></span>
         </div>
        )}
      </CountUp>
     
    </div>
  );
};

export default Revenue;
