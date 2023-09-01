import React from 'react';

const OrdersDetails = () => {
    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='w-full p-4 bg-[#F8F5FF] rounded-md'>
                {/* option button */}
                <div className='flex justify-between items-center p-4'>
                    <h2 className='text-xl'>Order Details</h2>
                    <select name="" id="" className='px-4 py-2 focus:border-gray-700 outline-none bg-[#e7defc86] border border-[#e7defc86] rounded-md '>
                        <option value="">pending</option>
                        <option value="">processing</option>
                        <option value="">werehouse</option>
                        <option value="">placed</option>
                        <option value="">cancelled</option>
                    </select>
                </div>

                {/*  */}
                <div className='p-4 '>
                    <div className='flex gap-2 text-lg '>
                        <h2>#5757dfg</h2>
                        <span>25 jun 2023</span>
                    </div>

                    {/*  */}
                    <div className='flex flex-wrap'>

                        {/* left side  */}
                        <div className='w-[32%]'>
                            <div className='pr-3 text-lg'>
                                <div className='flex flex-col gap-1 '>
                                    <h2 className='pb-2 font-semibold'>Deliver to : Anamul Hasan</h2>
                                    <p><span className='text-sm'>Tangail, Sakhipur, Sakhipur</span></p>
                                </div>

                            </div>
                            <div className='flex justify-start items-center gap-3'>
                                <h2>Payment Status: </h2>
                                <span className='text-base'>paid</span>
                            </div>
                            <span>Price: $50</span>
                            <div className='mt-4 flex flex-col gap-5'>
                                <div className=''>
                                    <div className='flex  items-center gap-3 text-md mb-5'>
                                        <img className='w-32' src="https://i.ibb.co/nB6dFsn/vvv.jpg" alt="" />
                                        <div>
                                            <h2>Compressor</h2>
                                            <p>
                                                <span>Brand: </span>
                                                <span>LG</span>
                                            </p>
                                            <p> <span className='text-lg'>Quantity: 2</span></p>
                                        </div>
                                    </div>
                                    <div className='flex  items-center gap-3 text-md mb-5'>
                                        <img className='w-32' src="https://i.ibb.co/nB6dFsn/vvv.jpg" alt="" />
                                        <div>
                                            <h2>Compressor</h2>
                                            <p>
                                                <span>Brand: </span>
                                                <span>LG</span>
                                            </p>
                                            <p> <span className='text-lg'>Quantity: 2</span></p>
                                        </div>
                                    </div>
                                    <div className='flex  items-center gap-3 text-md mb-5'>
                                        <img className='w-32' src="https://i.ibb.co/nB6dFsn/vvv.jpg" alt="" />
                                        <div>
                                            <h2>Compressor</h2>
                                            <p>
                                                <span>Brand: </span>
                                                <span>LG</span>
                                            </p>
                                            <p> <span className='text-lg'>Quantity: 2</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* right side  */}

                        {/* seller items list */}
                        <div className='w-[68%]'>
                            <div className='pl-3'>
                                <div className='mt-4 flex flex-col'>
                                    {/*  */}
                                    <div>
                                        <div className='flex justify-start items-center gap-3'>
                                            <h1>Seller 1 Order</h1>
                                            <span>pending</span>
                                        </div>
                                        <div className='flex mt-3 items-center gap-3 text-md mb-5'>
                                            <img className='w-32' src="https://i.ibb.co/nB6dFsn/vvv.jpg" alt="" />
                                            <div>
                                                <h2>Compressor</h2>
                                                <p>
                                                    <span>Brand: </span>
                                                    <span>LG</span>
                                                </p>
                                                <p> <span className='text-lg'>Quantity: 2</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    {/*  */}
                                    <div className='mt-3'>
                                        <div className='flex justify-start items-center gap-3'>
                                            <h1>Seller 2 Order</h1>
                                            <span>pending</span>
                                        </div>
                                        <div className='flex mt-3 items-center gap-3 text-md mb-5'>
                                            <img className='w-32' src="https://i.ibb.co/nB6dFsn/vvv.jpg" alt="" />
                                            <div>
                                                <h2>Compressor</h2>
                                                <p>
                                                    <span>Brand: </span>
                                                    <span>LG</span>
                                                </p>
                                                <p> <span className='text-lg'>Quantity: 4</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OrdersDetails;