import React from 'react';

const SellerDetails = () => {
    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='w-full p-4 '>
                <div className='grid items-center justify-center'>
                    <div className='flex justify-center'>
                        <img className='rounded-full w-60 h-60 border-2 border-blue-400' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlJoTqdKqbPOeJQnA6rtZbWMbBG82bqhc9rsCnV-ojZrbf5va6mXOn-l6KQBGhPe1JzgI&usqp=CAU" alt="" />
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 justify-center items-center gap-3 mt-5'>

                        <div className='bg-[#F8F5FF] shadow-md p-5 rounded-md text-lg w-[320px] h-[220px] tracking-normal'>
                            <h2 className='text-lg border-b border-gray-300 font-semibold'>Basic Info</h2>
                            <h1>Name: Md. Anamul Hasan</h1>
                            <h2> Email: anamul@gmail.com</h2>
                            <h2> Mobile: 01777577371</h2>
                            <h2>Role: Seller</h2>
                            <h2>Status: Active</h2>
                            <h2>Payment Account : Active</h2>
                        </div>

                        <div className='bg-[#F8F5FF] shadow-md p-5 rounded-md text-lg w-[320px] h-[220px] tracking-wide'>
                            <h2 className='text-lg border-b border-gray-300 font-semibold'>Address</h2>
                            <h1>Shop Name: Joss</h1>
                            <h2>Division: Dhaka</h2>
                            <h2>District: Tangail</h2>
                            <h2>Upazila: Sakhipur</h2>
                            <h2>Vallage: Sakhipur</h2>
                            <h2>Post: 1920</h2>
                        </div>
                    </div>

                    <div>
                        <form >
                            <div className='flex items-end justify-center gap-4 py-3'>
                                <select className='px-4 py-2 focus:border-gray-700 outline-none bg-transparent border border-slate-400 rounded-md' name='' id=''>
                                    <option value="">---Select Status---</option>
                                    <option value="active">Active</option>
                                    <option value="deactive">Deactive</option>
                                </select>

                                <div>
                                    <button className='bg-blue-500  hover:shadow-blue-500/50 hover:shadow-lg px-4 py-2 mt-5 rounded text-white font-medium'> Confirm</button>
                                </div>

                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SellerDetails;