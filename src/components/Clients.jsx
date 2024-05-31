import React from 'react';

const Clients = () => {
    return (
        /*    */
        <div className='main-client p-4 sm:ml-64'>
            <div className="w-full  flex justify-center flex-col clients relative overflow-x-auto  flex-none  mt-10  p-4  sm:rounded-lg items-center border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                <h1 className="text-xl font-bold mb-4"> All Clients</h1>
                <ul className="divide-y divide-gray-200 dark:divide-gray-700 w-[50%]">
                    <li className="pb-3 sm:pb-4">
                        <div className="flex items-center space-x-4 rtl:space-x-reverse">
                            <div className="flex-shrink-0">
                                {/*  <img
                        className="w-8 h-8 rounded-full"
                        src="/docs/images/people/profile-picture-1.jpg"
                        alt="Neil image"
                      /> */}
                                <span class="material-symbols-outlined">
                                    account_circle
                                </span>
                            </div>

                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate  ">
                                    Neil Sims
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    email@flowbite.com
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900  ">
                                $320
                            </div>
                        </div>
                    </li>

                    <li className="py-3 sm:py-4">
                        <div className="flex items-center space-x-4 rtl:space-x-reverse">
                            <div className="flex-shrink-0">

                                <span class="material-symbols-outlined">
                                    account_circle
                                </span>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate  ">
                                    Bonnie Green
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    email@flowbite.com
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900  ">
                                $3467
                            </div>
                        </div>
                    </li>

                    <li className="py-3 sm:py-4">
                        <div className="flex items-center space-x-4 rtl:space-x-reverse">
                            <div className="flex-shrink-0">
                                {/*  <img
                        className="w-8 h-8 rounded-full"
                        src="/docs/images/people/profile-picture-2.jpg"
                        alt="Neil image"
                      /> */}
                                <span class="material-symbols-outlined">
                                    account_circle
                                </span>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate  ">
                                    Michael Gough
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    email@flowbite.com
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900  ">
                                $67
                            </div>
                        </div>
                    </li>

                    <li className="py-3 sm:py-4">
                        <div className="flex items-center space-x-4 rtl:space-x-reverse">
                            <div className="flex-shrink-0">
                                {/* <img
                        className="w-8 h-8 rounded-full"
                        src="/docs/images/people/profile-picture-5.jpg"
                        alt="Neil image"
                      /> */}
                                <span class="material-symbols-outlined">
                                    account_circle
                                </span>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate  ">
                                    Thomas Lean
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    email@flowbite.com
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900  ">
                                $2367
                            </div>
                        </div>
                    </li>

                    <li className="pt-3 pb-0 sm:pt-4">
                        <div className="flex items-center space-x-4 rtl:space-x-reverse">
                            <div className="flex-shrink-0">
                                {/*  <img
                        className="w-8 h-8 rounded-full"
                        src="/docs/images/people/profile-picture-4.jpg"
                        alt="Neil image"
                      /> */}
                                <span class="material-symbols-outlined">
                                    account_circle
                                </span>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate  ">
                                    Lana Byrd
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    email@flowbite.com
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900  ">
                                $367
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Clients;