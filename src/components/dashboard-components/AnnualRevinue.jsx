import React from 'react';

const AnnualRevinue = () => {
    return (
        <div>
             <div className="flex items-center justify-start border rounded  dark:bg-gray-800 after: p-4">
              <div className="mt-4 flex  justify-between items-center ">
                <div>
                  <span class="material-symbols-outlined text-4xl">
                    universal_currency
                  </span>
                  <h4 className="text-title-md font-bold text-black     text-4xl ">
                    $500000
                  </h4>
                  <span className=" font-medium text-xl">Annual Revenue</span>
                </div>
              </div>
            </div>
        </div>
    );
};

export default AnnualRevinue;