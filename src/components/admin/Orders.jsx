import React, { useState } from 'react';
import { BsArrowBarDown } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Pagination from '../Pagination';


const Orders = () => {
    const [currentPage, setCurrentPage] = useState(0)
    const [searchValue, setSearchValue] = useState('')
    const [parPage, setParPage] = useState(5)
    const [show, setShow] = useState(false)
    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='w-full p-4 bg-[#F8F5FF] rounded-md '>
                <div className='flex justify-between items-center'>
                    <select onChange={(e) => setParPage(parseInt(e.target.value))} className='px-4 py-2 focus:border-gray-700 outline-none bg-transparent border border-slate-400 rounded-md'>

                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                    </select>
                    <input className='px-4 py-2 focus:border-gray-700 outline-none bg-transparent border border-slate-400 rounded-md' type="text" placeholder='Search' />
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
                        <div className='text-gray-600'>
                            <div className='flex justify-between items-start text-gray-600 border-b border-slate-300'>
                                <div className='py-3 font-normal whitespace-nowrap w-[25%] '>
                                    8585yrghse57575rweuiry
                                </div>
                                <div className='py-4 font-normal whitespace-nowrap w-[13%] '>
                                    $888
                                </div>
                                <div className='py-4 font-normal whitespace-nowrap w-[18%] '>
                                    pending
                                </div>
                                <div className='py-4 font-normal whitespace-nowrap w-[18%] '>
                                    pending
                                </div>
                                <Link to='/admin/dashboard/order/details/1' className='py-4 font-normal whitespace-nowrap w-[18%] '>
                                    View
                                </Link>

                                <div onClick={(e) => setShow(!show)} className='py-4 cursor-pointer font-medium w-[8%] '>
                                    <BsArrowBarDown></BsArrowBarDown>
                                </div>
                            </div>
                            {/* sub order */}
                            <div className={show ? 'block border-b border-slate-300 bg-[#e7defc86]' : 'hidden'}>

                                <div className='flex justify-start items-start text-gray-600 border-b border-slate-300'>
                                    <div className='py-3 font-normal whitespace-nowrap w-[25%] pl-4'>
                                        8585yrghse57575rweuiry
                                    </div>
                                    <div className='py-4 font-normal whitespace-nowrap w-[13%] '>
                                        $888
                                    </div>
                                    <div className='py-4 font-normal whitespace-nowrap w-[18%] '>
                                        pending
                                    </div>
                                    <div className='py-4 font-normal whitespace-nowrap w-[18%] '>
                                        pending
                                    </div>
                                </div>

                                <div className='flex justify-start items-start text-gray-600 border-b border-slate-300'>
                                    <div className='py-3 font-normal whitespace-nowrap w-[25%] pl-4'>
                                        8585yrghse57575rweuiry
                                    </div>
                                    <div className='py-4 font-normal whitespace-nowrap w-[13%] '>
                                        $888
                                    </div>
                                    <div className='py-4 font-normal whitespace-nowrap w-[18%] '>
                                        pending
                                    </div>
                                    <div className='py-4 font-normal whitespace-nowrap w-[18%] '>
                                        pending
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className='text-gray-600'>
                            <div className='flex justify-between items-start text-gray-600 border-b border-slate-300'>
                                <div className='py-3 font-normal whitespace-nowrap w-[25%] '>
                                    8585yrghse57575rweuiry
                                </div>
                                <div className='py-4 font-normal whitespace-nowrap w-[13%] '>
                                    $888
                                </div>
                                <div className='py-4 font-normal whitespace-nowrap w-[18%] '>
                                    pending
                                </div>
                                <div className='py-4 font-normal whitespace-nowrap w-[18%] '>
                                    pending
                                </div>
                                <Link className='py-4 font-normal whitespace-nowrap w-[18%] '>
                                    View
                                </Link>

                                <div onClick={(e) => setShow(!show)} className='py-4 cursor-pointer font-medium w-[8%] '>
                                    <BsArrowBarDown></BsArrowBarDown>
                                </div>
                            </div>
                            {/* sub order */}
                            <div className={show ? 'block border-b border-slate-300 bg-[#e7defc86]' : 'hidden'}>

                                <div className='flex justify-start items-start text-gray-600 border-b border-slate-300'>
                                    <div className='py-3 font-normal whitespace-nowrap w-[25%] pl-4'>
                                        8585yrghse57575rweuiry
                                    </div>
                                    <div className='py-4 font-normal whitespace-nowrap w-[13%] '>
                                        $888
                                    </div>
                                    <div className='py-4 font-normal whitespace-nowrap w-[18%] '>
                                        pending
                                    </div>
                                    <div className='py-4 font-normal whitespace-nowrap w-[18%] '>
                                        pending
                                    </div>
                                </div>

                                <div className='flex justify-start items-start text-gray-600 border-b border-slate-300'>
                                    <div className='py-3 font-normal whitespace-nowrap w-[25%] pl-4'>
                                        8585yrghse57575rweuiry
                                    </div>
                                    <div className='py-4 font-normal whitespace-nowrap w-[13%] '>
                                        $888
                                    </div>
                                    <div className='py-4 font-normal whitespace-nowrap w-[18%] '>
                                        pending
                                    </div>
                                    <div className='py-4 font-normal whitespace-nowrap w-[18%] '>
                                        pending
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <Pagination>
                    pageNumber={currentPage}
                    setPageNumber={setCurrentPage}
                    totalItem = {50}
                    parPage = {parPage}
                    showItem = {3}

                </Pagination>

                
            </div>


        </div>
    );
};

export default Orders;