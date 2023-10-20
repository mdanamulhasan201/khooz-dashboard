import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { active_stripe_connect_account, messageClear } from '../../store/Reducers/sellerReducer';
import FadeLoader from 'react-spinners/FadeLoader'
import errorImg from '../../assets/error.png'
import successImg from '../../assets/success.png'
import { useNavigate } from 'react-router-dom';

const Success = () => {
    const navigate = useNavigate()
    const { loader, errorMessage, successMessage } = useSelector(state => state.seller)
    const dispatch = useDispatch()
    const queryParams = new URLSearchParams(window.location.search)
    const activeCode = queryParams.get('activeCode')
    console.log(activeCode)
    useEffect(() => {
        dispatch(active_stripe_connect_account(activeCode))
    }, [activeCode])
    const redirect = () => {
        dispatch(messageClear())
        navigate('/')
    }
    return (
        <div className='w-screen h-screen flex justify-center items-center flex-col'>
            {
                loader ? <FadeLoader /> : errorMessage ? <>
                    <img src={errorImg} alt="" />
                    <button onClick={redirect} className='px-5 py-2 bg-green-500 mt-5 rounded text-white'>Back to Dashboard</button>
                </> : successMessage && <>
                    <img src={successImg} alt="" />
                    <button onClick={redirect} className='px-5 py-2 bg-green-500 mt-5 rounded text-white'>Back to Dashboard</button>
                </>
            }
        </div>
    );
};

export default Success;