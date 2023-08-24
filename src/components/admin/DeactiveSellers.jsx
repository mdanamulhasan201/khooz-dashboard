import React from 'react';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DeactiveSellers = () => {
    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='w-full p-4 bg-[#F8F5FF] rounded-md'>
                <div className='w-full p-4 bg-[#F8F5FF] rounded-md'>
                    <input
                        className='px-4 py-2 focus:border-gray-700 outline-none bg-transparent border border-slate-400 rounded-md'
                        type="text"
                        placeholder='Search'
                    />

                    <div className="w-full p-2 rounded-md mt-2 overflow-x-auto">
                        <div className="overflow-hidden border-b  sm:rounded-lg">
                            <table className="w-full divide-y divide-gray-200">
                                <thead className="">
                                    <tr>
                                        <th scope="col" className="px-1 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No</th>
                                        <th scope="col" className="px-1 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                                        <th scope="col" className="px-1 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                        <th scope="col" className="px-1 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                        <th scope="col" className="px-1 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Status</th>
                                        <th scope="col" className="px-1 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                        <th scope="col" className="px-1 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                                        
                                    </tr>
                                </thead>
                                <tbody className=" divide-y divide-gray-200">
                                    {[1, 2, 3, 4, 5].map((d, i) => (
                                        <tr key={i} >
                                            <td className="px-1 py-2 whitespace-nowrap">{d}</td>
                                            <td className="px-1 py-2 whitespace-nowrap">
                                                <img className='w-10 h-10 rounded-md' src='https://t3.ftcdn.net/jpg/02/36/48/86/360_F_236488644_opXVvD367vGJTM2I7xTlsHB58DVbmtxR.jpg' alt="" />
                                            </td>
                                            <td className="px-1 py-2 whitespace-nowrap text-gray-700"><span>Md Anamul Hasan</span></td>
                                            <td className="px-1 py-2 whitespace-nowrap text-gray-700"><span>anamul@gmail.com</span></td>
                                            <td className="px-1 py-2 whitespace-nowrap text-gray-700"><span>Active</span></td>
                                            <td className="px-1 py-2 whitespace-nowrap text-gray-700"><span>deactive</span></td>
                                        
                                            <td className="px-1 py-2 whitespace-nowrap">
                                                <div className='flex justify-start items-center gap-4'>
                                                    <Link className='p-2 bg-green-200 rounded'><FaEye className='text-xl text-green-500'></FaEye> </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeactiveSellers;