import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { get_seller_details, messageClear, seller_status_update } from '../../store/Reducers/sellerReducer'
import { toast } from 'react-hot-toast';

const SellerDetails = () => {
    const dispatch = useDispatch()
    const { sellerId } = useParams()
    const { seller, successMessage } = useSelector(state => state.seller)



    useEffect(() => {
        dispatch(get_seller_details(sellerId))
    }, [sellerId])

    const [status, setStatus] = useState('')
    const submit = (e) => {
        e.preventDefault()
        dispatch(seller_status_update({
            sellerId,
            status
        }))
    }

    useEffect(() => {
        if (successMessage) {
            toast.success(successMessage)
            dispatch(messageClear())
        }
    }, [successMessage]) //defendancy akare patahi diya hoiche 

    useEffect(() => {
        if (seller) {
            setStatus(seller.status)
        }
    }, [seller])
    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='w-full p-4 '>
                <div className='grid items-center justify-center'>
                    <div className='flex justify-center'>
                        {
                            seller?.image ? <img className='rounded-full w-60 h-60 border-2 border-black' src={seller.image} alt="" /> : <span>
                                <img className='rounded-full w-60 h-60 border-2 border-black' src="https://as1.ftcdn.net/v2/jpg/01/84/81/64/1000_F_184816468_sXO2m7Xhy2xqENls5YxrKlmFg3Ii82Mr.jpg" alt="" />
                                </span>
                        }

                    </div>


                    <div className='bg-[#F8F5FF] w-full md:w-[900px] mx-auto shadow-md p-5 mt-5 rounded-md text-lg  tracking-wide flex flex-col md:flex-row justify-between gap-5 md:gap-20'>
                        <div className='w-3/12'>
                            <h2 className='text-lg border-b border-gray-300 font-semibold'>Basic Info</h2>
                            <h1>Name: <span className='text-sm'>{seller?.name}</span></h1>
                            <h2>Email: <span className='text-sm'>{seller?.email}</span></h2>
                            <h2>Mobile: <span className='text-sm'>{seller?.shopInfo?.mobileNumber}</span></h2>
                            <h2>Role: <span className='text-sm'>{seller?.role}</span></h2>

                            <h2>Status: <span className={seller?.status === 'active' ? 'text-green-500 bg-green-100 text-xs px-2 rounded font-semibold' : seller?.status === 'deactive' ? 'text-red-500 font-semibold bg-red-100 px-2 rounded  text-xs ' : ''}>{seller?.status}</span></h2>

                            <h2>Payment: <span className={seller?.payment === 'active' ? 'text-green-500 bg-green-100 px-2 text-xs rounded font-semibold' : seller?.payment === 'inactive' ? 'text-red-500 font-semibold bg-red-100 px-2 rounded  text-xs ' : ''}>{seller?.payment}</span></h2>
                        </div>
                        <div className='w-9/12'>
                            <h2 className='text-lg border-b border-gray-300 font-semibold'>Others Info</h2>
                            <h2>Category: <span className='text-sm'> {seller?.shopInfo?.category}</span> </h2>
                            <span>Shop Name: <span className='text-sm'>{seller?.shopInfo?.shopName}</span> </span>
                            <h2>Division: <span className='text-sm'>{seller?.shopInfo?.division}</span> </h2>
                            <h2>District: <span className='text-sm'>{seller?.shopInfo?.district}</span> </h2>
                            <h2>Upazila: <span className='text-sm'> {seller?.shopInfo?.thana}</span> </h2>
                            <h2>Village: <span className='text-sm'>{seller?.shopInfo?.village}</span> </h2>
                            <h2>About: <span className='text-sm'>{seller?.shopInfo?.about}</span> </h2>
                        </div>

                    </div>


                    <div>
                        <form onSubmit={submit}>
                            <div className='flex items-end justify-center gap-4 py-3'>
                                <select value={status} onChange={(e) => setStatus(e.target.value)} className='px-4 py-2 focus:border-gray-700 outline-none bg-transparent border border-slate-400 rounded-md' name='' id='' required>
                                    <option value="">---Select Status---</option>
                                    <option value="active">Active</option>
                                    <option value="deactive">Deactive</option>
                                </select>

                                <div>
                                    <button className='bg-black  hover:shadow-black/30 hover:shadow-lg px-4 py-2 mt-5 rounded text-white font-medium'> Confirm</button>
                                </div>

                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SellerDetails;