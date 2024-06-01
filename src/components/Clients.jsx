import React from 'react';

const Clients = () => {
    return (
        <div className="p-4 sm:ml-64" >
            <main className=" w-full px-3 sm:px-10">

                <section>
                    <div
                        className=" mb-4 mt-4 border rounded-xl px-5 sm:px-10  pt-8 pb-4 relative xl:bg-[url('../images/invoice.png')] bg-no-repeat bg-right bg-contain ">
                        <div className=" font-semibold text-lg text-black">Search User</div>


                        <div className="mt-6 grid grid-cols-1 xs:grid-cols-2 gap-y-6  gap-x-6 md:flex md:space-x-6 md:gap-x-0 ">
                            <div className="flex flex-col   md:w-40  text-black text-sm space-y-2 font-semibold">

                                <div className="inline-flex relative">
                                    <input
                                        className=" shadow-lg border tracking-wider pl-4 pr-10 py-3 rounded-lg appearance-none w-full  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
                                        id="client" name="client" type="text" placeholder='Enter User Id' />
                                </div>

                            </div>
                            <div className="flex flex-col   md:w-40  text-black text-sm space-y-2 font-semibold">

                                <div className="inline-flex relative">
                                    <input
                                        className=" shadow-lg border tracking-wider pl-4 pr-10 py-3 rounded-lg appearance-none w-full  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
                                        id="client" name="client" type="text" placeholder='Enter Price' />
                                </div>

                            </div>
                            <div><span className="btn px-4 bg-black text-white ">Submit</span></div>
                        </div>
                    </div>
                </section>



                <section className="border rounded-lg">
                    <div
                        className=" overflow-visible text-sm client-table-row   bg-white mt-10 rounded-xl px-10  py-4 flex items-start justify-start gap-x-3  font-semibold  text-gray-600">
                        <div className="text-left">Id</div>
                        <div className="text-left">User name</div>
                        <div className="text-left">Contact</div>
                        <div className="text-left">charge</div>
                        <div className="text-left">Action</div>
                    </div>
                    <div className="bg-white mt-5 rounded-xl text-sm  text-black divide-y divide-indigo-50 overflow-x-auto  shadow">
                        <div className="client-table-row flex items-start justify-start gap-x-3 px-10 py-4">
                            <div className="text-left ">12</div>
                            <div className="text-left">John Doe</div>
                            <div className="text-left">01518999578</div>
                            <div className="text-left">500৳</div>
                            <div className="text-left cursor-pointer  hover:text-blue-900">Edit</div>

                        </div>

                        <div className="client-table-row flex items-start justify-start gap-x-3 px-10 py-4  ">
                            <div className="text-left">13</div>
                            <div className="text-left">Thomas Bride</div>
                            <div className="text-left">01518999578</div>
                            <div className="text-left"> 500৳</div>
                            <div className="text-left cursor-pointer  hover:text-blue-900">Edit</div>

                        </div>

                        <div className="client-table-row flex items-start justify-start gap-x-3 px-10 py-4">
                            <div className="text-left">14</div>
                            <div className="text-left">Ellen Bean</div>
                            <div className="text-left">01518999578</div>
                            <div className="text-left"> 500৳</div>
                            <div className="text-left cursor-pointer  hover:text-blue-900">Edit</div>

                        </div>

                        <div className="client-table-row flex items-start justify-start gap-x-3 px-10 py-4  ">
                            <div className="text-left">15</div>
                            <div className="text-left">Jack Sanders</div>
                            <div className="text-left">01518999578</div>
                            <div className="text-left"> 500৳</div>
                            <div className="text-left cursor-pointer  hover:text-blue-900">Edit</div>

                        </div>

                        <div className="client-table-row flex items-start justify-start gap-x-3 px-10 py-4">
                            <div className="text-left">16</div>
                            <div className="text-left">Leslie Ive</div>
                            <div className="text-left">01518999578</div>
                            <div className="text-left">500৳</div>
                            <div className="text-left cursor-pointer  hover:text-blue-900">Edit</div>

                        </div>


                    </div>
                </section>


            </main>
        </div>
    );
};

export default Clients;