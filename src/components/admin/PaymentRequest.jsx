import React, { forwardRef, useEffect, useState } from 'react';
// react window package mainly use kora hoi data render korar jonno eitar kuno pagination dorkar hoi na 
import { FixedSizeList as List } from 'react-window'
import toast from 'react-hot-toast'
import moment from 'moment'
import { useSelector, useDispatch } from 'react-redux'

import { get_payment_request, confirm_payment_request, messageClear } from '../../store/Reducers/paymentReducer'


function handleOnWheel({ deltaY }) {
    console.log('handleOnWheel', deltaY)
}

const outerElementType = forwardRef((props, ref) => (
    <div ref={ref} onWheel={handleOnWheel} {...props} ></div>
))




const PaymentRequest = () => {
    const dispatch = useDispatch()
    const [paymentId, setPaymentId] = useState('')
    const { successMessage, errorMessage, loader, pendingWithdraws } = useSelector(state => state.payment)

    useEffect(() => {
        dispatch(get_payment_request())
    }, [])

   


    const confirm_request = (id) => {
        setPaymentId(id)
        dispatch(confirm_payment_request(id))
    }


    useEffect(() => {
        if (successMessage) {
            toast.success(successMessage)
            dispatch(messageClear())
        }
        if (errorMessage) {
            toast.error(errorMessage)
            dispatch(messageClear())
        }
    }, [errorMessage, successMessage])


    const Row = ({ index, style }) => {
        return (
            <div style={style} className='flex text-md border-b'>
                <div className='w-[25%] whitespace-nowrap'>{index + 1}</div>
                <div className='w-[25%] whitespace-nowrap'>{pendingWithdraws[index]?.amount} Tk</div>
                <div className='w-[25%] whitespace-nowrap'>
                    <span className='py-[1px] px-[5px] bg-red-100 text-red-400 font-semibold rounded-md text-sm'>{pendingWithdraws[index]?.status}</span>
                </div>
                <div className='w-[25%] whitespace-nowrap'>{moment(pendingWithdraws[index]?.createdAt).format('LL')}</div>
                <div className='w-[25%] whitespace-nowrap'>
                    <button disabled={loader} onClick={() => confirm_request(pendingWithdraws[index]?._id)} className='bg-green-200 shadow-md hover:shadow-green-500/50 px-3 py-[2px] cursor-pointer font-semibold text-green-500 rounded-sm text-sm'>{(loader && paymentId === pendingWithdraws[index]?._id) ? 'loading..' : 'Confirm'}</button>
                </div>

            </div>
        )
    }


    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='w-full p-4  rounded-md '>
                <h1 className='text-xl font-medium mb-5'> Withdrawal Request</h1>
                <div className='w-full '>
                    <div className='w-full  overflow-x-auto'>
                        <div className='flex bg-[#e7defc86] uppercase text-sm font-medium min-w-[340px]'>
                            <div className='w-[25%] p-2'> No</div>
                            <div className='w-[25%] p-2'> Amount</div>
                            <div className='w-[25%] p-2'> Status</div>
                            <div className='w-[25%] p-2'> Date</div>
                            <div className='w-[25%] p-2'> Action</div>
                        </div>
                        {
                            <List
                                style={{ minWidth: '340px', overflowX: 'hidden' }}
                                className='List md:mx-5 mx-3 mt-5'
                                height={550}
                                itemCount={pendingWithdraws.length}
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
    );
};

export default PaymentRequest;