import React from 'react';
import { BsImage } from 'react-icons/bs';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Category = () => {
    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='flex flex-wrap w-full justify-between'>
                <div className='w-full lg:w-6/12'>
                    <div className='w-full p-4 bg-[#F8F5FF] rounded-md'>
                        <input
                            className='px-4 py-2 focus:border-gray-700 outline-none bg-transparent border border-slate-400 rounded-md'
                            type="text"
                            placeholder='Search'
                        />

                        <div className="w-full p-2 bg-[#F8F5FF] rounded-md mt-2 overflow-x-auto">
                            <table className="w-full text-sm text-left ">
                                <thead className="text-sm uppercase border-b border-slate-300 text-gray-600">
                                    <tr>
                                        <th scope="col" className="py-1 px-2 ">No</th>
                                        <th scope="col" className="py-1 px-2 ">Image</th>
                                        <th scope="col" className="py-1 px-2 ">Name</th>
                                        <th scope="col" className="py-1 px-2 ">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        [1, 2, 3, 4, 5].map((d, i) => (
                                            <tr key={i}>
                                                <td className="py-1 px-0 font-medium whitespace-nowrap ">{d}</td>
                                                <td className="py-1 px-0 font-medium whitespace-nowrap ">
                                                    <img className='w-16 h-16 rounded-full' src='https://i.ibb.co/nB6dFsn/vvv.jpg' alt="" />
                                                </td>
                                                <td className="py-1 px-0 font-medium whitespace-nowrap text-gray-700"><span>Compressor</span></td>
                                                <td className="py-1 px-0 font-medium whitespace-nowrap ">
                                                    <div className='flex justify-start items-center gap-4'>
                                                        <Link className='p-1 bg-green-100 rounded'><FaEdit className='text-xl text-green-500'></FaEdit> </Link>
                                                        <Link className='p-1 bg-red-100 rounded'><FaTrash className='text-lg text-red-500 '></FaTrash> </Link>
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
                <div className='w-full lg:w-5/12'>
                    <div className='w-full p-4 bg-[#F8F5FF] rounded-md'>
                        <div>
                            <h1 className='text-center text-lg font-semibold w-full'>Add Category</h1>
                            <form >
                                <div className='flex flex-col w-full gap-1 mb-3'>
                                    <label htmlFor='name'>Category Name</label>
                                    <input
                                        className='px-4 py-2 focus:border-gray-700 outline-none bg-transparent border border-slate-400 rounded-md'
                                        type="text"
                                        id='name'
                                        name='category'
                                        placeholder='Category Name'
                                    />
                                </div>
                                <div>
                                    <label htmlFor="image" className='flex justify-center items-center flex-col h-[238px] cursor-pointer border border-dashed border-gray-400 hover:border-gray-800 w-full'>
                                        <span><BsImage></BsImage></span>
                                        <span>select Image</span>
                                    </label>
                                </div>
                                <input type="file" name='image' id='image' className='hidden'/>
                                <div>
                                        <button className='bg-blue-500 w-full hover:shadow-blue-500/50 hover:shadow-lg p-2 mt-5 rounded text-white font-medium'> Add Category</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default Category;
