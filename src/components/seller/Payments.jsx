import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { forwardRef } from 'react';

// react window package mainly use kora hoi data render korar jonno eitar kuno pagination dorkar hoi na 
import { FixedSizeList as List } from 'react-window'
function handleOnWheel({ deltaY }) {
    console.log('handleOnWheel', deltaY)
}

const outerElementType = forwardRef((props, ref) => (
    <div ref={ref} onWheel={handleOnWheel} {...props} ></div>
))


const Payments = () => {
    const Row = ({ index, style }) => {
        return (
            <div style={style} className='flex text-md border-b'>
                <div className='w-[25%] whitespace-nowrap'>{index + 1}</div>
                <div className='w-[25%] whitespace-nowrap'>$575</div>
                <div className='w-[25%] whitespace-nowrap'>
                    <span className='py-[1px] px-[5px] bg-red-200 rounded-md text-xs'>Pending</span>
                </div>
                <div className='w-[25%] whitespace-nowrap'>24 Aug 2023</div>


            </div>
        )
    }
    return (
        <div className="px-2 md:px-7 mt-10 py-5">
            {/* card items  */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                <div className="flex justify-between items-center p-5 bg-[#F8F5FF] rounded-lg shadow-md gap-3">
                    <div className="flex flex-col justify-start items-start text-black">
                        <h2 className="text-2xl font-semibold">$15000</h2>
                        <span className="text-sm font-medium text-gray-500">Total sales</span>
                    </div>
                    <div className="w-[46px] h-[47px] rounded-full bg-[#28c76f1f] flex justify-center items-center text-xl">
                        <BsCurrencyDollar className="text-[#28c76f]"></BsCurrencyDollar>
                    </div>
                </div>
                <div className="flex justify-between items-center p-5 bg-[#F8F5FF] rounded-lg shadow-md gap-3">
                    <div className="flex flex-col justify-start items-start text-black">
                        <h2 className="text-2xl font-semibold ">$100</h2>
                        <span className="text-sm font-medium text-gray-500">Available Amount</span>
                    </div>
                    <div className="w-[46px] h-[47px] rounded-full bg-[#e000e81f] flex justify-center items-center text-xl">
                        <BsCurrencyDollar className="text-[#cd00e8] "></BsCurrencyDollar>
                    </div>
                </div>
                <div className="flex justify-between items-center p-5 bg-[#F8F5FF] rounded-lg shadow-md gap-3">
                    <div className="flex flex-col justify-start items-start text-black">
                        <h2 className="text-2xl font-semibold">$30</h2>
                        <span className="text-sm font-medium text-gray-500">Withdrawal Amount</span>
                    </div>
                    <div className="w-[46px] h-[47px] rounded-full bg-[#d0d2d6] flex justify-center items-center text-xl">
                        <BsCurrencyDollar className="text-[#283046]"></BsCurrencyDollar>
                    </div>
                </div>
                <div className="flex justify-between items-center p-5 bg-[#F8F5FF] rounded-lg shadow-md gap-3">
                    <div className="flex flex-col justify-start items-start text-black">
                        <h2 className="text-2xl font-semibold">$200</h2>
                        <span className="text-sm font-medium text-gray-500">Pending Amount</span>
                    </div>
                    <div className="w-[46px] h-[47px] rounded-full bg-[#7367f01f] flex justify-center items-center text-xl">
                        <BsCurrencyDollar className="text-[#7367f0] "></BsCurrencyDollar>
                    </div>
                </div>
            </div>

            {/*  */}
            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-3 pb-4 '>
                {/* left side */}
                <div className='bg-[#F8F5FF] rounded-lg p-5'>
                    <h2 className='text-lg font-semibold'>Send Request</h2>
                    <div className='py-5'>
                        <form >
                            <div className='flex gap-3 flex-wrap justify-center items-center'>
                                <input
                                    min='0'
                                    className='px-4 py-2 md:w-[79%]  focus:border-gray-700 outline-none bg-transparent border border-slate-400 rounded-md'
                                    type="number"
                                    name='amount'
                                    placeholder='$'
                                />
                                <button className='bg-black  hover:shadow-black/20 hover:shadow-lg px-4 py-2  rounded-md text-white font-medium'> Send </button>
                            </div>
                        </form>



                    </div>
                    <div>
                        <h2 className='text-lg pb-4 font-semibold'>Pending Request</h2>
                        <div className='w-full overflow-x-auto'>
                            <div className='flex bg-[#e7defc86] uppercase text-sm font-medium min-w-[340px]'>
                                <div className='w-[25%] p-2'> No</div>
                                <div className='w-[25%] p-2'> Amount</div>
                                <div className='w-[25%] p-2'> Status</div>
                                <div className='w-[25%] p-2'> Date</div>

                            </div>
                            {
                                <List
                                    style={{ minWidth: '340px', overflowX: 'hidden' }}
                                    className='List'
                                    height={550}
                                    itemCount={15}
                                    itemSize={35}
                                    outerElementType={outerElementType}

                                >

                                    {Row}

                                </List>
                            }

                        </div>
                    </div>
                </div>


                {/* right side */}
                <div className='bg-[#F8F5FF] rounded-lg p-5'>

                    <div>
                        <h2 className='text-lg pb-4 font-semibold'>Success Withdraw</h2>
                        <div className='w-full overflow-x-auto'>
                            <div className='flex bg-[#e7defc86] uppercase text-sm font-medium min-w-[340px]'>
                                <div className='w-[25%] p-2'> No</div>
                                <div className='w-[25%] p-2'> Amount</div>
                                <div className='w-[25%] p-2'> Status</div>
                                <div className='w-[25%] p-2'> Date</div>

                            </div>
                            {
                                <List
                                    style={{ minWidth: '340px', overflowX: 'hidden' }}
                                    className='List'
                                    height={550}
                                    itemCount={15}
                                    itemSize={35}
                                    outerElementType={outerElementType}

                                >

                                    {Row}

                                </List>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payments;