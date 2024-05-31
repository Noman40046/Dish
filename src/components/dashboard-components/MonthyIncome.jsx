import React from 'react';

const MonthyIncome = () => {
    return (
        <div>
            <div className="flex items-center justify-start shadow-lg rounded  dark:bg-gray-800 after: p-4">
              <div className="mt-4 flex  justify-between items-center ">
                <div>
                  <span class="material-symbols-outlined text-4xl">
                    currency_exchange
                  </span>

                  <h4 className="text-title-md font-bold text-black     text-4xl ">
                    $30000
                  </h4>
                  <span className=" font-medium text-xl">Monthly Income</span>
                </div>
              </div>
            </div>
        </div>
    );
};

export default MonthyIncome;