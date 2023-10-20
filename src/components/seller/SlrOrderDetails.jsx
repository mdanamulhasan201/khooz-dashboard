import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { get_seller_order_details, seller_order_status_update, messageClear } from '../../store/Reducers/ordersReducer';
import toast from 'react-hot-toast';

const SlrOrderDetails = () => {
    const { orderId } = useParams()
    const dispatch = useDispatch()
    const { order, errorMessage, successMessage } = useSelector(state => state.order)

    useEffect(() => {
        dispatch(get_seller_order_details(orderId))
    }, [orderId])

    const [status, setStatus] = useState('')
    useEffect(() => {
        setStatus(order?.delivery_status)
    }, [order])

    const status_update = (e) => {
        dispatch(seller_order_status_update({ orderId, info: { status: e.target.value } }))
        setStatus(e.target.value)
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
    }, [successMessage, errorMessage])
    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='w-full p-4 bg-[#F8F5FF] rounded-md'>
                {/* option button */}
                <div className='flex justify-between items-center p-4'>
                    <h2 className='text-xl'>Order Details</h2>
                    <select value={status} onChange={status_update} name="" id="" className='px-4 py-2 focus:border-gray-700 outline-none bg-[#e7defc86] border border-[#e7defc86] rounded-md '>
                        <option value="pending">pending</option>
                        <option value="processing">processing</option>
                        <option value="placed">placed</option>
                        <option value="cancelled">cancelled</option>
                    </select>
                </div>

                {/*  */}
                <div className='p-4 '>
                    <div className='flex gap-2 text-lg '>
                        <h2 className='font-semibold text-gray-500'>#{order._id}</h2> ||
                        <span className='font-semibold text-gray-500'>{order.date}</span>
                    </div>

                    {/*  */}
                    <div className='flex flex-wrap'>

                        {/* left side  */}
                        <div className='w-[32%]'>
                            <div className='pr-3 text-lg'>
                                <div className='flex flex-col gap-1 '>
                                    <h2 className='pb-2 font-semibold'>Deliver to : {order.shippingInfo}</h2>

                                </div>

                            </div>
                            <div className='flex justify-start items-center gap-3'>
                                <h2>Payment Status: </h2>
                                <span className={order.payment_status === 'paid' ? 'text-green-500 bg-green-100 px-1 rounded  text-base' : 'text-red-500 bg-red-100 px-1 rounded text-base'}>
                                    {order.payment_status}
                                </span>

                            </div>
                            <span  className='font-semibold'>Price: {order.price} Tk</span>
                            <div className='mt-4 flex flex-col gap-5'>
                                <div className=''>
                                    {
                                        order.products && order.products.map((p, i) => <div key={i} className='flex  items-center gap-3 text-md mb-5'>
                                            <img className='w-32 h-24' src={p.images[1]} alt="" />
                                            <div>
                                                <h2> {p.name}</h2>
                                                <h2>{p.price} Tk</h2>

                                                <p><span>Brand: {p.brand} </span></p>

                                                {
                                                    p.discount ? <p ><span className=' px-2 bg-green-200'>{p.discount}%Off </span></p> : ''
                                                }
                                                <p> Quantity: {p.quantity}</p>
                                            </div>
                                        </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    );
};

export default SlrOrderDetails;