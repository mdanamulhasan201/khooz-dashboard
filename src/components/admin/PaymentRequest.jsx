import React, { forwardRef } from 'react';

// react window package mainly use kora hoi data render korar jonno eitar kuno pagination dorkar hoi na 
import { FixedSizeList as List } from 'react-window'
function handleOnWheel({ deltaY }) {
    console.log('handleOnWheel', deltaY)
}

const outerElementType = forwardRef((props, ref) => (
    <div ref={ref} onWheel={handleOnWheel} {...props} ></div>
))
const PaymentRequest = () => {
    const Row = ({ index, style }) => {
        return (
            <div style={style} className='flex text-md border-b'>
                <div className='w-[25%] whitespace-nowrap'>{index + 1}</div>
                <div className='w-[25%] whitespace-nowrap'>$575</div>
                <div className='w-[25%] whitespace-nowrap'>
                    <span className='py-[1px] px-[5px] bg-red-200 rounded-md text-xs'>Pending</span>
                </div>
                <div className='w-[25%] whitespace-nowrap'>24 Aug 2023</div>
                <div className='w-[25%] whitespace-nowrap'>
                    <button className='bg-green-300  px-3 py-[2px cursor-pointer  rounded-sm text-sm]'>Confirm</button>
                </div>

            </div>
        )
    }
    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='w-full p-4 bg-[#F8F5FF] rounded-md '>
                <h1 className='text-xl font-medium mb-5'> Withdrawal Request</h1>
                <div className='w-full'>
                    <div className='w-full overflow-x-auto'>
                        <div className='flex bg-[#e7defc86] uppercase text-sm font-medium min-w-[340px]'>
                            <div className='w-[25%] p-2'> No</div>
                            <div className='w-[25%] p-2'> Amount</div>
                            <div className='w-[25%] p-2'> Status</div>
                            <div className='w-[25%] p-2'> Date</div>
                            <div className='w-[25%] p-2'> Action</div>
                        </div>
                        {
                            <List 
                            style={{ minWidth: '340px', overflowX : 'hidden' }} 
                            className='List' 
                            height={350} 
                            itemCount={20} 
                            itemSize={35} 
                            outerElementType={outerElementType}

                            >
                               
                                    { Row }
                            
                            </List>
                        }

                    </div>

                </div>

            </div>
        </div>
    );
};

export default PaymentRequest;