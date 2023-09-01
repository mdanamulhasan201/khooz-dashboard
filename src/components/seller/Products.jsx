import React, { useState } from 'react';
import Search from '../Shared/Search';
import { Link } from 'react-router-dom';
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa';

const Products = () => {
    const [searchValue, setSearchValue] = useState('')
    return (
        <div className="px-2 md:px-7 mt-10 py-5">
            <div className='w-full p-4 bg-[#F8F5FF] rounded-md'>
                <Search setSearchValue={setSearchValue} searchValue={searchValue}></Search>
                <div className="w-full p-2 bg-[#F8F5FF] rounded-md mt-7 overflow-x-auto">
                    <table className="w-full text-sm text-left ">
                        <thead className="text-sm uppercase border-b border-slate-300 text-gray-600">
                            <tr>
                                <th scope="col" className="py-1 px-2 ">No</th>
                                <th scope="col" className="py-1 px-2 ">Image</th>
                                <th scope="col" className="py-1 px-2 ">Name</th>
                                <th scope="col" className="py-1 px-2 ">Category</th>
                                <th scope="col" className="py-1 px-2 ">Brand</th>
                                <th scope="col" className="py-1 px-2 ">Price</th>
                                <th scope="col" className="py-1 px-2 ">Discount</th>
                                <th scope="col" className="py-1 px-2 ">Stock</th>
                                <th scope="col" className="py-1 px-2 ">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                [1, 2, 3, 4, 5].map((d, i) => (
                                    <tr key={i} className='border-b'>
                                        <td className="py-1 px-0 font-medium whitespace-nowrap ">{d}</td>
                                        <td className="py-1 px-0 font-medium whitespace-nowrap ">
                                            <img className='w-16 h-16 rounded-full' src='https://i.ibb.co/nB6dFsn/vvv.jpg' alt="" />
                                        </td>
                                        <td className="py-1 px-0 font-medium whitespace-nowrap text-gray-700"><span>Compressor</span></td>
                                        <td className="py-1 px-0 font-medium whitespace-nowrap text-gray-700"><span>Category</span></td>
                                        <td className="py-1 px-0 font-medium whitespace-nowrap text-gray-700"><span>Brand</span></td>
                                        <td className="py-1 px-0 font-medium whitespace-nowrap text-gray-700"><span>Price</span></td>
                                        <td className="py-1 px-0 font-medium whitespace-nowrap text-gray-700"><span>Discount</span></td>
                                        <td className="py-1 px-0 font-medium whitespace-nowrap text-gray-700"><span>Stock</span></td>
                                        <td className="py-1 px-0 font-medium whitespace-nowrap ">
                                            <div className='flex justify-start items-center gap-4'>

                                                <Link className='p-1 bg-green-100 rounded'><FaEye className='text-xl text-green-500'></FaEye> </Link>
                                                <Link className='p-1 bg-blue-100 rounded'><FaEdit className='text-xl text-blue-400'></FaEdit> </Link>
                                                <button className='p-1 bg-red-100 rounded'><FaTrash className='text-lg text-red-500 '></FaTrash> </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Products;