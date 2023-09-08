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
                            seller?.image ? <img className='rounded-full w-60 h-60 border-2 border-black' src={seller.image} alt="" /> : <span>Image Not Found</span>
                        }

                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 justify-center items-center gap-3 mt-5'>

                        <div className='bg-[#F8F5FF] shadow-md p-5 rounded-md text-lg w-[330px] h-[220px] tracking-normal'>
                            <h2 className='text-lg border-b border-gray-300 font-semibold'>Basic Info</h2>
                            <h1>Name: {seller?.name}</h1>
                            <h2>Email: {seller?.email}</h2>
                            <h2>Mobile: {seller?.shopInfo?.mobileNumber}</h2>
                            <h2>Role: {seller?.role}</h2>
                            <h2>Status: <span className={seller?.status === 'active' ? 'text-green-500 font-semibold' : seller?.status === 'deactive' ? 'text-red-500 font-semibold' : ''}>{seller?.status}</span></h2>
                            <h2>Status: <span className={seller?.payment === 'active' ? 'text-green-500 font-semibold' : seller?.payment === 'inactive' ? 'text-red-500 font-semibold' : ''}>{seller?.payment}</span></h2>
                        </div>


                        <div className='bg-[#F8F5FF] shadow-md p-5 rounded-md text-lg w-[320px] h-[220px] tracking-wide'>
                            <h2 className='text-lg border-b border-gray-300 font-semibold'>Address</h2>
                            <span>Shop Name: {seller?.shopInfo?.shopName} </span>
                            <h2>Division: {seller?.shopInfo?.division} </h2>
                            <h2>District: {seller?.shopInfo?.district} </h2>
                            <h2>Upazila: {seller?.shopInfo?.thana}</h2>
                            <h2>Village: {seller?.shopInfo?.village}</h2>
                            <h2>Post: 1920</h2>
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