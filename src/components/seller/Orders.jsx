import { useState } from "react";
import Search from "../Shared/Search";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";


const Orders = () => {
    const [searchValue, setSearchValue] = useState('')
    return (
        <div className="px-2 md:px-7 mt-10 py-5">
            <div className='w-full p-4 bg-[#F8F5FF] rounded-md'>
                <Search setSearchValue={setSearchValue} searchValue={searchValue}></Search>

                {/* order */}
                <div className="w-full p-4 bg-[#F8F5FF] rounded-md mt-12">

                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left ">
                            <thead className="text-sm uppercase border-b border-slate-300">
                                <tr>
                                    <th scope="col" className="py-3 px-4 ">Order Id</th>
                                    <th scope="col" className="py-3 px-4 ">Price</th>
                                    <th scope="col" className="py-3 px-4 ">Payment Status</th>
                                    <th scope="col" className="py-3 px-4 ">Order Status</th>
                                    <th scope="col" className="py-3 px-4 ">Action</th>


                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-3 px-4 font-medium whitespace-nowrap ">#sdfg5554fjdf</td>
                                    <td className="py-3 px-4 font-medium whitespace-nowrap ">$520</td>
                                    <td className="py-3 px-4 font-medium whitespace-nowrap "><span>pending</span></td>
                                    <td className="py-3 px-4 font-medium whitespace-nowrap "><span>pending</span></td>
                                    <td className="py-3 px-4 font-medium whitespace-nowrap ">
                                        <Link to={`/seller/dashboard/orders/details/100`} className='p-1 bg-green-100 rounded flex justify-center items-center w-[30px]'><FaEye className='text-xl text-green-500'></FaEye> </Link>
                                    </td>

                                </tr>
                                <tr>
                                    <td className="py-3 px-4 font-medium whitespace-nowrap ">#sdfg5554fjdf</td>
                                    <td className="py-3 px-4 font-medium whitespace-nowrap ">$520</td>
                                    <td className="py-3 px-4 font-medium whitespace-nowrap "><span>pending</span></td>
                                    <td className="py-3 px-4 font-medium whitespace-nowrap "><span>pending</span></td>
                                    <td className="py-3 px-4 font-medium whitespace-nowrap ">
                                        <Link to={`/seller/dashboard/orders/details/100`} className='p-1 bg-green-100 rounded flex justify-center items-center w-[30px]'><FaEye className='text-xl text-green-500'></FaEye> </Link>
                                    </td>

                                </tr>
                                <tr>
                                    <td className="py-3 px-4 font-medium whitespace-nowrap ">#sdfg5554fjdf</td>
                                    <td className="py-3 px-4 font-medium whitespace-nowrap ">$520</td>
                                    <td className="py-3 px-4 font-medium whitespace-nowrap "><span>pending</span></td>
                                    <td className="py-3 px-4 font-medium whitespace-nowrap "><span>pending</span></td>
                                    <td className="py-3 px-4 font-medium whitespace-nowrap ">
                                        <Link to={`/seller/dashboard/orders/details/100`} className='p-1 bg-green-100 rounded flex justify-center items-center w-[30px]'><FaEye className='text-xl text-green-500'></FaEye> </Link>
                                    </td>

                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;