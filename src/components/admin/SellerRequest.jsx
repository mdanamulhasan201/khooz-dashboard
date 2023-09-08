import React, { useEffect, useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { get_seller_request } from '../../store/Reducers/sellerReducer'
import Search from '../Shared/Search';

const SellerRequest = () => {
    const dispatch = useDispatch()
    const { sellers, totalSeller } = useSelector(state => state.seller)
    // console.log(sellers)
    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        dispatch(get_seller_request({
            searchValue
        }))
    }, [searchValue])
    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='w-full p-4 bg-[#F8F5FF] rounded-md'>
                <div className='w-full p-4 bg-[#F8F5FF] rounded-md'>
                    <Search setSearchValue={setSearchValue} searchValue={searchValue}></Search>

                    <div className="w-full p-2 rounded-md mt-2 overflow-x-auto">
                        <div className="overflow-hidden border-b  sm:rounded-lg">
                            <table className="w-full divide-y divide-gray-200">
                                <thead className="">
                                    <tr>
                                        <th scope="col" className="px-1 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No</th>

                                        <th scope="col" className="px-1 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                        <th scope="col" className="px-1 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                        <th scope="col" className="px-1 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Status</th>
                                        <th scope="col" className="px-1 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                        <th scope="col" className="px-1 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>

                                    </tr>
                                </thead>
                                <tbody className=" divide-y divide-gray-200">
                                    {
                                        sellers.map((d, i) => (
                                            <tr key={i} >
                                                <td className="px-1 py-2 whitespace-nowrap">{i + 1}</td>

                                                <td className="px-1 py-2 whitespace-nowrap text-gray-700"><span>{d.name}</span></td>
                                                <td className="px-1 py-2 whitespace-nowrap text-gray-700"><span>{d.email}</span></td>
                                                <td className="px-1 py-2 whitespace-nowrap text-gray-700"><span>{d.payment}</span></td>
                                                <td className="px-1 py-2 whitespace-nowrap text-gray-700"><span>{d.status}</span></td>

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
                </div>
            </div>
        </div>
    );
};

export default SellerRequest;