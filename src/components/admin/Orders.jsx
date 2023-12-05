import React, { useEffect, useState } from 'react';
import { BsArrowBarDown } from 'react-icons/bs';
import { Link } from 'react-router-dom';
// import Pagination from '../Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { get_admin_orders } from '../../store/Reducers/ordersReducer';
import Pagination from '../Pagination';


const Orders = () => {
    const dispatch = useDispatch()
    const { totalOrder, myOrders } = useSelector(state => state.order)
    const [currentPage, setCurrentPage] = useState(1)
    const [searchValue, setSearchValue] = useState('')
    const [parPage, setParPage] = useState(10)
    const [show, setShow] = useState('')

    useEffect(() => {
        console.log("Search Value:", searchValue); // Add this line for debugging
        dispatch(get_admin_orders({
            parPage: parseInt(parPage),
            page: parseInt(currentPage),
            searchValue,
        }));
    }, [parPage, currentPage, searchValue]);

    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='w-full p-4  rounded-md '>
                <div className='flex justify-between items-center'>
                    <select onChange={(e) => setParPage(parseInt(e.target.value))} className='px-4 py-2 focus:border-gray-700 outline-none bg-transparent border border-slate-400 rounded-md'>

                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="15">50</option>
                        <option value="15">100</option>
                        <option value="15">10000</option>
                    </select>
                    <input
                        className='px-4 py-2 focus:border-gray-700 outline-none bg-transparent border border-slate-400 rounded-md'
                        type="text"
                        placeholder='Search by Order ID'
                       
                    />
                </div>
                {/* table */}
                <div className='relative mt-5 overflow-x-auto '>
                    <div className='w-full text-sm text-left '>
                        <div className='text-sm uppercase   border-b border-slate-300'>
                            <div className='flex justify-between items-start text-gray-600'>
                                <div className='py-3 font-medium w-[25%] '>
                                    Order ID
                                </div>
                                <div className='py-3 font-medium w-[13%] '>
                                    Price
                                </div>
                                <div className='py-3 font-medium w-[18%] '>
                                    Payment Status
                                </div>
                                <div className='py-3 font-medium w-[18%] '>
                                    Order Status
                                </div>
                                <div className='py-3 font-medium w-[18%] '>
                                    Action
                                </div>
                                <div className='py-3 font-medium w-[8%] '>
                                    <BsArrowBarDown></BsArrowBarDown>
                                </div>
                            </div>
                        </div>
                        {
                            myOrders.map((o, i) => <div key={i} className='text-gray-600'>
                                <div className='flex justify-between items-start text-gray-600 border-b border-slate-300'>
                                    <div className='py-3 font-normal whitespace-nowrap w-[25%] '>
                                        {o._id}
                                    </div>
                                    <div className='py-4 font-normal whitespace-nowrap w-[13%] '>
                                        {o.price} Tk
                                    </div>
                                    <div className='py-4 font-normal whitespace-nowrap w-[18%] '>
                                        {o.payment_status}
                                    </div>
                                    <div className='py-4 font-normal whitespace-nowrap w-[18%] '>
                                        {o.delivery_status}
                                    </div>
                                    <Link to={`/admin/dashboard/order/details/${o._id}`} className='py-4 font-normal whitespace-nowrap w-[18%] '>
                                        <span className='border py-1 px-1 rounded-md hover:bg-green-200 transform duration-300 outline-0'>View</span>
                                    </Link>

                                    <div onClick={(e) => setShow(o._id)} className='py-4 cursor-pointer font-medium w-[8%] '>
                                        <BsArrowBarDown></BsArrowBarDown>
                                    </div>
                                </div>
                                {/* sub order */}
                                <div className={show === o._id ? 'block border-b border-slate-300 bg-[#e7defc86]' : 'hidden'}>

                                    {
                                        o.subOrder.map((sub, i) => <div key={i} className='flex justify-start items-start text-gray-600 border-b border-slate-300'>
                                            <div className='py-3 font-normal whitespace-nowrap w-[25%] pl-4'>
                                                {sub._id}
                                            </div>
                                            <div className='py-4 font-normal whitespace-nowrap w-[13%] '>
                                                {sub.price} Tk
                                            </div>
                                            <div className='py-4 font-normal whitespace-nowrap w-[18%] '>
                                                {sub.payment_status}
                                            </div>
                                            <div className='py-4 font-normal whitespace-nowrap w-[18%] '>
                                                {sub.delivery_status}
                                            </div>
                                        </div>)
                                    }

                                </div>

                            </div>)
                        }

                    </div>
                </div>

                {
                    totalOrder <= parPage ? "" : <div className='w-full flex justify-end mt-4 bottom-4 right-4'>
                        <Pagination
                            pageNumber={currentPage}
                            setPageNumber={setCurrentPage}
                            totalItem={totalOrder}
                            parPage={parPage}
                            showItem={4}
                        />
                    </div>
                }


            </div>


        </div>
    );
};

export default Orders;