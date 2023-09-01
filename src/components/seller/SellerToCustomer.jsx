import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io'
import { FaList } from 'react-icons/fa'


const SellerToCustomer = () => {
    const [show, setShow] = useState(false)
    const sellerId = 32
    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='w-full px-4 py-4 rounded-md bg-[#F8F5FF] h-[calc(100vh-140px)]'>
                <div className='flex w-full h-full relative'>
                    <div className={`w-[280px] h-full absolute z-10 ${show ? '-left-[16px]' : '-left-[336px]'} md:left-0 md:relative transition-all`}>
                        <div className='w-full h-[calc(100vh-177px)] bg-[#e7defc] md:bg-transparent overflow-y-auto'>
                            <div className='flex text-xl justify-between items-center p-4 md:p-0 md:px-3 md:pb-3 '>
                                <h1 >Customer</h1>
                                <span onClick={() => setShow(!show)} className='block cursor-pointer md:hidden'><IoMdClose></IoMdClose></span>
                            </div>
                            <div className={`h-[60px] bg-[#e7defc86] flex justify-start gap-2 items-center px-2 py-2 rounded-sm cursor-pointer`}>
                                <div className='relative'>
                                    <img className='w-[40px] h-[40px] border-2 border-green-600 rounded-full mx-w-[40px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7ZQsrni23f7QEWYS2bz7tOFd8pAxKZvwmLELXub8F-LAYEt2qCtIoYW6L5zgbqvTGs3Q&usqp=CAU" alt="" />

                                    <div className='w-[12px] h-[12px] bg-green-500 rounded-full absolute right-0 bottom-0'></div>
                                </div>
                                <div className='flex justify-center items-start flex-col w-full'>
                                    <div className='flex justify-between items-center w-full'>
                                        <h1 className='text-base font-semibold'>Anamul Hasan</h1>
                                        {/* <span>Hello How are You?</span> */}

                                    </div>
                                    <span className='text-xs font-normal'>2 min</span>
                                </div>

                            </div>
                            <div className={`h-[60px] flex justify-start gap-2 items-center px-2 py-2 rounded-sm cursor-pointer`}>
                                <div className='relative'>
                                    <img className='w-[40px] h-[40px] border-2 border-green-600 rounded-full mx-w-[40px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7ZQsrni23f7QEWYS2bz7tOFd8pAxKZvwmLELXub8F-LAYEt2qCtIoYW6L5zgbqvTGs3Q&usqp=CAU" alt="" />

                                    <div className='w-[12px] h-[12px] bg-green-500 rounded-full absolute right-0 bottom-0'></div>
                                </div>
                                <div className='flex justify-center items-start flex-col w-full'>
                                    <div className='flex justify-between items-center w-full'>
                                        <h1 className='text-base font-semibold'>Anamul Hasan</h1>
                                        {/* <span>Hello How are You?</span> */}

                                    </div>
                                    <span className='text-xs font-normal'>2 min</span>
                                </div>

                            </div>
                            <div className={`h-[60px] flex justify-start gap-2 items-center px-2 py-2 rounded-sm cursor-pointer`}>
                                <div className='relative'>
                                    <img className='w-[40px] h-[40px] border-2 border-green-600 rounded-full mx-w-[40px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7ZQsrni23f7QEWYS2bz7tOFd8pAxKZvwmLELXub8F-LAYEt2qCtIoYW6L5zgbqvTGs3Q&usqp=CAU" alt="" />

                                    <div className='w-[12px] h-[12px] bg-green-500 rounded-full absolute right-0 bottom-0'></div>
                                </div>
                                <div className='flex justify-center items-start flex-col w-full'>
                                    <div className='flex justify-between items-center w-full'>
                                        <h1 className='text-base font-semibold'>Anamul Hasan</h1>
                                        {/* <span>Hello How are You?</span> */}

                                    </div>
                                    <span className='text-xs font-normal'>2 min</span>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/*  */}

                    <div className='w-full md:w-[calc(100%-200px)] md:pl-4'>
                        <div className='flex justify-between items-center'>
                            {
                                sellerId && <div className='flex justify-start items-center gap-3'>
                                    <div className='relative'>

                                        <img className='w-[50px]  h-[50px] border-2 border-green-600 rounded-full mx-w-[42px] p-[2px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRij6dtiHizH96qpCOe8WeXXP3yLyQJkPdGVg&usqp=CAU" alt="" />

                                        <div className='w-[12px] h-[12px] bg-green-500 rounded-full absolute right-0 bottom-0'></div>
                                    </div>
                                    <h2 className='text-base font-semibold'>Anamul Hasan</h2>

                                </div>

                            }
                            <div onClick={() => setShow(!show)} className='w-[35px] flex md:hidden h-[35px] rounded-sm bg-[#e7defc86] shadow-lg hover:shadow-gray-950/50 bg-black text-white justify-center items-center cursor-pointer'>
                                <span><FaList></FaList></span>
                            </div>
                        </div>

                        <div className='py-4'>
                            <div className='bg-[#e7defc86] h-[calc(100vh-290px)] rounded-md p-3 overflow-x-auto'>
                                {/* 1st */}
                                <div className='w-full flex justify-start items-center'>
                                    <div className='flex justify-start items-start gap-2 md:px-2 py-2 max-w-full lg:mx-w-[85%]'>
                                        <div>
                                            <img className='w-full p-[2px] h-[38px] border-2 border-green-600 rounded-full mx-w-[38px] ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRij6dtiHizH96qpCOe8WeXXP3yLyQJkPdGVg&usqp=CAU" alt="" />

                                        </div>
                                       
                                        <div className='flex  justify-center items-start flex-col w-full  bg-gray-400 text-white rounded-md shadow-lg py-1 px-2 '>
                                        <span>How Are You?</span>
                                        </div>
                                    </div>
                                </div>
                                {/* 2nd */}
                                <div className='w-full flex justify-end items-center'>
                                    <div className='flex justify-start items-start gap-2 md:px-2 py-2 max-w-full lg:mx-w-[85%]'>

                                        <div className='flex justify-center items-start flex-col w-full bg-blue-500 text-white rounded-md shadow-lg py-1 px-2 '>
                                            <span>I'm Fine.. You?</span>
                                        </div>
                                        <div>
                                            <img className=' h-[38px] p-[2px] border-2 border-green-600 rounded-full mx-w-[38px] ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRij6dtiHizH96qpCOe8WeXXP3yLyQJkPdGVg&usqp=CAU" alt="" />

                                        </div>
                                    </div>
                                </div>


                                {/* 3rd */}
                                <div className='w-full flex justify-start items-center'>
                                    <div className='flex justify-start items-start gap-2 md:px-2 py-2 max-w-full lg:mx-w-[85%]'>
                                        <div>
                                            <img className=' p-[2px] h-[38px] border-2 border-green-600 rounded-full mx-w-[38px] ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRij6dtiHizH96qpCOe8WeXXP3yLyQJkPdGVg&usqp=CAU" alt="" />

                                        </div>
                                        <div className='flex justify-center items-start flex-col w-full bg-gray-400 text-white rounded-md shadow-lg py-1 px-2 '>
                                            <span>I'm well</span>
                                        </div>
                                    </div>
                                </div>

                                {/* 4th */}
                                <div className='w-full flex justify-end items-center'>
                                    <div className='flex justify-start items-start gap-2 md:px-2 py-2 max-w-full lg:mx-w-[85%]'>

                                        <div className='flex justify-center items-start flex-col w-full bg-blue-500 text-white rounded-md shadow-lg py-1 px-2 '>
                                            <span>fine</span>
                                        </div>
                                        <div>
                                            <img className=' h-[38px] p-[2px] border-2 border-green-600 rounded-full mx-w-[38px] ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRij6dtiHizH96qpCOe8WeXXP3yLyQJkPdGVg&usqp=CAU" alt="" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <form className='flex justify-end gap-3 '>
                            <input className='flex justify-between px-2 border border-slate-300 items-center py-[5px] focus:border-gray-500 rounded-md outline-none bg-transparent' type="text" placeholder='Write your message...' />
                            <button className='bg-black shadow-lg hover:shadow-gray-600/50 font-semibold text-white w-[75px] h-[35px] rounded-md flex justify-center items-center'>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellerToCustomer;