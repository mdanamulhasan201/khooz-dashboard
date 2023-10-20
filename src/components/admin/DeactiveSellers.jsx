import React, { useEffect, useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { get_deactive_seller } from '../../store/Reducers/sellerReducer';

const DeactiveSellers = () => {

    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');
    const { sellers } = useSelector(state => state.seller);

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(20); // Number of items to display per page

    // Calculate pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = sellers.slice(indexOfFirstItem, indexOfLastItem);

    // Total number of pages
    const totalPages = Math.ceil(sellers.length / itemsPerPage);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    useEffect(() => {
        const obj = {
            searchValue,
        };
        dispatch(get_deactive_seller(obj));
    }, [searchValue, dispatch]);
    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='w-full p-4 bg-[#F8F5FF] rounded-md'>
                <div className='flex md:justify-end justify-center'>
                    <input
                        onChange={e => setSearchValue(e.target.value)}
                        className='px-4 py-2 focus:border-gray-700 outline-none bg-transparent border border-slate-400 rounded-md'
                        type="text"
                        placeholder='Search..email or name'
                    />
                </div>

                <div className="w-full p-2 rounded-md mt-2 overflow-x-auto">
                    <div className=" border-b sm:rounded-lg">
                        <table className="w-full divide-y divide-gray-200">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th scope="col" className="hidden sm:table-cell px-1 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No</th>
                                    <th scope="col" className="hidden sm:table-cell px-1 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                                    <th scope="col" className="px-1 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                    <th scope="col" className="px-1 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                    <th scope="col" className="px-1 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Division</th>
                                    <th scope="col" className="px-1 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">District</th>
                                    <th scope="col" className="px-1 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Status</th>
                                    <th scope="col" className="px-1 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {currentItems.map((d, i) => (
                                    <tr key={i}>
                                        <td className="hidden sm:table-cell px-1 py-2 whitespace-nowrap">{i + 1}</td>
                                        <td className="hidden sm:table-cell px-1 py-2 whitespace-nowrap">
                                            <img className='w-10 h-10 rounded-md' src={d.image} alt="" />
                                        </td>
                                        <td className="px-1 py-2 whitespace-nowrap text-gray-700"><span>{d.name}</span></td>
                                        <td className="px-1 py-2 whitespace-nowrap text-gray-700"><span>{d.email}</span></td>
                                        <td className="px-1 py-2 whitespace-nowrap text-gray-700"><span>{d.shopInfo?.division}</span></td>
                                        <td className="px-1 py-2 whitespace-nowrap text-gray-700"><span>{d.shopInfo?.district}</span></td>
                                        <td className="px-1 py-2 whitespace-nowrap text-gray-700">
                                            <span className={`${d.status === 'active' ? 'text-green-600 bg-green-200 px-1  rounded-md' : d.status === 'deactive' ? 'text-red-500 bg-red-200 px-1  rounded-md' : 'text-gray-700'}`}>{d.status}</span>
                                        </td>
                                        <td className="px-1 py-2 whitespace-nowrap">
                                            <div className='flex justify-start items-center gap-4'>
                                                <Link to={`/admin/dashboard/seller/details/${d._id}`} className='p-2 bg-green-200 rounded'><FaEye className='text-xl text-green-500'></FaEye> </Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>




                <div className="pagination-controls flex justify-end items-center mt-4">
                    <button
                        onClick={prevPage}
                        disabled={currentPage === 1}
                        className={`px-2 py-1 rounded-md mr-2 ${currentPage === 1 ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-black hover:shadow-black/40 hover:shadow-lg text-white hover:text-white'}`}
                    >
                        Previous
                    </button>
                    <span>Page {currentPage} of {totalPages}</span>
                    <button
                        onClick={nextPage}
                        disabled={currentPage === totalPages}
                        className={`px-2 py-1 rounded-md ml-2 ${currentPage === totalPages ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-black hover:shadow-black/40 hover:shadow-lg text-white hover:text-white'}`}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeactiveSellers;