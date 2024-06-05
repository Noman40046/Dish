import{ useEffect, useRef } from 'react';

// eslint-disable-next-line react/prop-types
const SimpleCountUp = ({ end }) => {
  const spanRef = useRef(null);

  useEffect(() => {
    if (spanRef.current) {
      let current = 0;
      const increment = (end - current) / 100;
      const interval = setInterval(() => {
        current += increment;
        spanRef.current.innerText = `৳ ${Math.round(current).toLocaleString()}`;
        if (current >= end) clearInterval(interval);
      }, 30);
    }
  }, [end]);

  return <span ref={spanRef}></span>;
};
export default SimpleCountUp