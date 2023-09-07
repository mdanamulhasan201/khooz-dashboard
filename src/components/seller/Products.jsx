import React, { useEffect, useState } from 'react';
import Search from '../Shared/Search';
import { Link } from 'react-router-dom';
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { get_products } from '../../store/Reducers/productReducer'

const Products = () => {
    const [searchValue, setSearchValue] = useState('')
    const dispatch = useDispatch()
    const { products, allProducts } = useSelector(state => state.product)


    useEffect(() => {
        const obj = {
            searchValue
        }
        dispatch(get_products(obj))
    }, [searchValue])
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
                                products.map((d, i) => (
                                    <tr key={i} className='border-b'>
                                        <td className="py-1 px-0 font-medium whitespace-nowrap ">{i + 1}</td>
                                        <td className="py-1 px-0 font-medium whitespace-nowrap ">
                                            <img className='w-16 h-16 rounded-full' src={d.images[0]} alt="" />
                                        </td>
                                        <td className="py-1 px-0 font-medium whitespace-nowrap text-gray-700"><span>{d?.name}</span></td>
                                        <td className="py-1 px-0 font-medium whitespace-nowrap text-gray-700"><span>{d.category}</span></td>
                                        <td className="py-1 px-0 font-medium whitespace-nowrap text-gray-700"><span>{d.brand}</span></td>
                                        <td className="py-1 px-0 font-medium whitespace-nowrap text-gray-700"><span>${d.price}</span></td>
                                        <td className="py-1 px-0 font-medium whitespace-nowrap text-gray-700">
                                            {
                                                d.discount === 0 ? <span>No discount</span> : <span>{d.discount}%</span>
                                            }
                                        </td>
                                        <td className="py-1 px-0 font-medium whitespace-nowrap text-gray-700"><span>{d.stock}</span></td>
                                        <td className="py-1 px-0 font-medium whitespace-nowrap ">
                                            <div className='flex justify-start items-center gap-4'>

                                                <Link className='p-1 bg-green-100 rounded'><FaEye className='text-xl text-green-500'></FaEye> </Link>
                                                <Link to={`/seller/dashboard/EditProduct/${d._id}`} className='p-1 bg-blue-100 rounded'><FaEdit className='text-xl text-blue-400'></FaEdit> </Link>
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