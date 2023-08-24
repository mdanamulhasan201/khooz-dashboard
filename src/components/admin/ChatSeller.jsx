import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io'

const ChatSeller = () => {
    const [show, setShow] = useState(false)
    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='w-full px-4 py-4 rounded-md bg-[#F8F5FF] h-[calc(100vh-140px)]'>
                <div className='flex w-full h-full relative'>
                    <div className={`w-[280px] h-full absolute z-10 ${show ? '-left-[16px]' : '-[336px]'} md:left-0 md:relative transition-all`}>
                        <div className='w-full h-[calc(100vh-177px)] bg-[#e7defc86] md:bg-transparent overflow-y-auto'>
                            <div className='flex text-xl justify-between items-center p-4 md:p-0 md:px-3 md:pb-3 '>
                                <h1>Sellers</h1>
                                <span onClick={() => setShow(true)} className='block cursor-pointer md:hidden'><IoMdClose></IoMdClose></span>
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
                </div>
            </div>
        </div>
    );
};

export default ChatSeller;