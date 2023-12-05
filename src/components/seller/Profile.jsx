import React, { useEffect, useState } from 'react';
import { BsImages } from 'react-icons/bs'
import { FaEdit } from 'react-icons/fa';
import { FadeLoader, ScaleLoader } from 'react-spinners';
import { useSelector, useDispatch } from 'react-redux'
import { profile_image_upload, messageClear, profile_info_add } from '../../store/Reducers/authReducer'
import { toast } from 'react-hot-toast';
import { PiWarningOctagonDuotone } from "react-icons/pi";
import { create_stripe_connect_account } from '../../store/Reducers/sellerReducer';

const Profile = () => {



    const [state, setState] = useState({
        category: '',
        shopName: '',
        mobileNumber: '',
        division: '',
        district: '',
        thana: '',
        village: '',
        about: '',



    })
    const dispatch = useDispatch()
    const { userInfo, loader, successMessage } = useSelector(state => state.auth)
    const status = "active"

    const add_image = (e) => {
        if (e.target.files.length > 0) {
            const formData = new FormData()
            formData.append('image', e.target.files[0])
            dispatch(profile_image_upload(formData))
        }
    }
    useEffect(() => {
        if (successMessage) {
            toast.success(successMessage)
            messageClear()
        }
    }, [successMessage])

    const add = (e) => {
        e.preventDefault()
        dispatch(profile_info_add(state))
        console.log(add)
    }


    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });

    };




    // const [selectedOption, setSelectedOption] = useState('');

    const options = [
        'Electrician',
        'Painter',
        'Plumber',
        'AC Repair',
        'Freeze Repair',
        'CCTV Repair',
        'Laborer',
        'Home Maid',
        'Photography',
        'Home Tutor',
    ];



    return (
        <div className='px-7 lg:px-7 py-5'>
            <div className='w-full flex flex-wrap'>
                <div className='w-full md:w-6/12'>
                    <div className='w-full p-4 rounded-md bg-[#F8F5FF]'>
                        <div className='flex justify-center items-center py-3'>
                            {
                                userInfo?.image ?
                                    <label htmlFor="img" className='h-[210px] w-[300px] relative p-3 cursor-pointer overflow-hidden'>
                                        <img className='h-full w-full' src={userInfo.image} alt="" />
                                        {
                                            loader && <div className='bg-[#e3dbf7] absolute left-0 top-0 w-full h-full opacity-70 flex justify-center items-center z-20'>
                                                <span>
                                                    <FadeLoader></FadeLoader>
                                                </span>
                                            </div>
                                        }
                                    </label>
                                    :

                                    <label className='flex justify-center items-center flex-col h-[210px] w-[300px] cursor-pointer border border-dashed border-gray-400 hover:border-gray-800 relative' htmlFor="img">
                                        <span><BsImages></BsImages></span>
                                        <span>Select Image</span>
                                        {
                                            loader && <div className='bg-[#e3dbf7] absolute left-0 top-0 w-full h-full opacity-70 flex justify-center items-center z-20'>
                                                <span>
                                                    <FadeLoader></FadeLoader>
                                                </span>
                                            </div>
                                        }
                                    </label>
                            }
                            <input onChange={add_image} type="file" className='hidden' id='img' />
                        </div>


                        {/*  */}

                        <div className='px-0 md:px-5 py-'>
                            <div className='flex justify-between bg-[#ede7ff] text-md flex-col gap-2 p-4 rounded-md relative '>
                                {/* <span className='p-[6px] bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/40 absolute right-2 top-2 cursor-pointer'><FaEdit></FaEdit></span> */}
                                <div className='flex gap-2 '>
                                    <span>Name: </span>
                                    <span>{userInfo.name}</span>
                                </div>
                                <div className='flex gap-2 '>
                                    <span>Email: </span>
                                    <span>{userInfo.email}</span>
                                </div>
                                {/* <div className='flex gap-2 '>
                                    <span>Role: </span>
                                    <span>{userInfo.role}</span>
                                </div> */}
                                <div className='flex gap-2 '>
                                    <span>Status: <span className={userInfo?.status === 'active' ? ' bg-green-400 px-2  font-semibold' : userInfo?.status === 'deactive' ? ' ' : 'bg-red-200  rounded px-2'}>{userInfo?.status}</span></span>
                                </div>
                                <div className='flex gap-2 '>
                                    <span>Payment Account: </span>
                                    <p>
                                        {
                                            userInfo.payment === 'active' ? <span className='bg-green-400 font-semibold cursor-pointer  ml-2 px-2 py-0.5 rounded '>{userInfo.payment}</span>
                                                : <span onClick={() => dispatch(create_stripe_connect_account())} className='bg-red-200 font-semibold text-sm cursor-pointer ml-2 px-2 py-0.5 rounded '>
                                                    Click active
                                                </span>
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/*  */}
                        <div className='px-0  py-2'>
                            <div className='w-full '>
                                {
                                    !userInfo?.shopInfo ?
                                        <form onSubmit={add} action=''>
                                            <div className='mt-10 '>
                                                {/* <h2 className='text-center text-xl font-semibold'> sect</h2> */}
                                                <span className='flex items-center bg-red-100 text-red-600  rounded py-1 px-2 my-2 '><PiWarningOctagonDuotone></PiWarningOctagonDuotone><span className='text-gray-600 ms-2'>If are you a provider then select a category and If you are a seller fil-up shop name</span> </span>

                                                <h1 className='font-semibold text-center text-xl my-5'>Are You Provider</h1>
                                                <div className=' flex flex-col gap-1 mt-7 mb-3'>
                                                    <label htmlFor="category">Select a Category:</label>
                                                    <select
                                                        className='px-4 py-2 focus:border-gray-700 outline-none bg-transparent border border-slate-400 rounded-md'
                                                        name="category" // Make sure the name attribute matches the state key
                                                        id="category"
                                                        value={state.category}
                                                        onChange={inputHandle}
                                                    >
                                                        <option value="">Select Category</option>
                                                        {options.map((option) => (
                                                            <option key={option} value={option}>
                                                                {option}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    {/* <p>Selected Service: {selectedOption}</p> */}
                                                </div>
                                            </div>

                                            <div className='flex flex-col gap-1 mb-3'>
                                                <label htmlFor='division'>Division</label>
                                                <input value={state.division} onChange={inputHandle} className='px-4 py-2 focus:border-gray-700 outline-none bg-transparent border border-slate-400 rounded-md' type="text" placeholder='Division Name' name='division' id='division' />
                                            </div>
                                            <div className='flex flex-col gap-1 mb-3'>
                                                <label htmlFor='district'>District</label>
                                                <input value={state.district} onChange={inputHandle} className='px-4 py-2 focus:border-gray-700 outline-none bg-transparent border border-slate-400 rounded-md' type="text" placeholder='District Name' name='district' id='district' />
                                            </div>
                                            <div className='flex flex-col gap-1 mb-3'>
                                                <label htmlFor='thana'>Upazila</label>
                                                <input value={state.thana} onChange={inputHandle} className='px-4 py-2 focus:border-gray-700 outline-none bg-transparent border border-slate-400 rounded-md' type="text" placeholder='UpazilaName' name='thana' id='thana' />
                                            </div>
                                            <div className='flex flex-col gap-1 mb-3'>
                                                <label htmlFor='village'>Village</label>
                                                <input value={state.village} onChange={inputHandle} className='px-4 py-2 focus:border-gray-700 outline-none bg-transparent border border-slate-400 rounded-md' type="text" placeholder='Village name' name='village' id='village' />
                                            </div>




                                            <h2 className='font-semibold text-center text-xl'>Are You Seller</h2>
                                            <div className='flex flex-col gap-1 mb-3'>
                                                <label htmlFor='shop'>Shop Name</label>
                                                <input value={state.shopName} onChange={inputHandle} className='px-4 py-2 focus:border-gray-700 outline-none bg-transparent border border-slate-400 rounded-md' type="text" placeholder='Shop name' name='shopName' id='shopName' />
                                            </div>
                                            <div className='flex flex-col gap-1 mb-3'>
                                                <label htmlFor='mobileNumber'>Mobile Number</label>
                                                <input value={state.mobileNumber} onChange={inputHandle} className='px-4 py-2 focus:border-gray-700 outline-none bg-transparent border border-slate-400 rounded-md' type="number" placeholder='+880' name='mobileNumber' id='mobileNumber' />
                                            </div>

                                            {/* <div className='flex flex-col gap-1 mb-3'>
                                                <label htmlFor='about'>about</label>
                                                <input value={state.about} onChange={inputHandle} className='px-4 py-2 focus:border-gray-700 outline-none bg-transparent border border-slate-400 rounded-md' type="text" placeholder='about' name='about' id='about' />
                                            </div> */}
                                            <div className='flex flex-col gap-1 mb-3'>
                                                <label htmlFor='about'>About</label>
                                                <textarea
                                                    className='px-4 py-2 outline-none bg-transparent focus:border-gray-700 border border-slate-400 rounded-md'
                                                    name="about"
                                                    id="about"
                                                    cols="30"
                                                    rows="10"
                                                    placeholder='About yourself....'
                                                    value={state.about} // Set value to the 'about' field in state
                                                    onChange={inputHandle} // Handle changes in the input
                                                />

                                            </div>

                                            <div className='flex'>
                                                <button
                                                    // type="submit"
                                                    disabled={loader ? true : false}

                                                    className={`btn ${loader ? 'bg-black' : 'bg-black'}  rounded-md hover:shadow-md mt-5 hover:shadow-gray-800/40 px-7 py-2 mb-3 text-white font-bold`}
                                                >
                                                    {loader ? <ScaleLoader height={13} color="#ffff" /> : 'Update Info'}
                                                </button>
                                            </div>
                                        </form> : <div className='px-0 md:px-5 py-2 '>
                                            <div className='flex  justify-between bg-[#ede7ff] text-md flex-col gap-2 p-4 rounded-md relative'>
                                                <span className='p-[6px] bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/40 absolute right-2 top-2 cursor-pointer'><FaEdit></FaEdit></span>
                                                <div className='flex gap-2 '>
                                                    <span>Category: </span>
                                                    <span>{userInfo.shopInfo?.category}</span>
                                                </div>
                                                <div className='flex gap-2 '>
                                                    <span>Shop Name: </span>
                                                    <span>{userInfo.shopInfo?.shopName}</span>
                                                </div>
                                                <div className='flex gap-2 '>
                                                    <span>Phone: </span>
                                                    <span>{userInfo.shopInfo?.mobileNumber}</span>
                                                </div>
                                                <div className='flex gap-2 '>
                                                    <span>Division: </span>
                                                    <span>{userInfo.shopInfo?.division}</span>
                                                </div>

                                                <div className='flex gap-2 '>
                                                    <span>District: </span>
                                                    <span>{userInfo.shopInfo?.district}</span>
                                                </div>
                                                <div className='flex gap-2 '>
                                                    <span>Upazila: </span>
                                                    <span>{userInfo.shopInfo?.thana}</span>
                                                </div>
                                                <div className='flex gap-2 '>
                                                    <span>Village: </span>
                                                    <span>{userInfo.shopInfo?.village}</span>
                                                </div>
                                                <div className='flex gap-2 '>
                                                    <span>About: </span>
                                                    <span>{userInfo.shopInfo?.about}</span>
                                                </div>

                                            </div>
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full md:w-6/12 gap-5'>
                    <div className='w-full pl-0 md:pl-7 mt-6 md:mt-0  '>
                        <div className='bg-[#F8F5FF] rounded-md p-4'>
                            <h1 className='text-xl font-semibold mb-5'>Change Password</h1>
                            <form action='' >
                                <div className='flex flex-col gap-1 mb-3'>
                                    <label htmlFor='email'>Email </label>
                                    <input className='px-4 py-2 focus:border-gray-700 outline-none bg-transparent border border-slate-400 rounded-md' type="email" placeholder='email' name='email' id='email' />
                                </div>
                                <div className='flex flex-col gap-1 mb-3'>
                                    <label htmlFor='OldPassword'>Old Password</label>
                                    <input className='px-4 py-2 focus:border-gray-700 outline-none bg-transparent border border-slate-400 rounded-md' type="password" placeholder='Old Password' name='OldPassword' id='OldPassword' />
                                </div>
                                <div className='flex flex-col gap-1 mb-3'>
                                    <label htmlFor='NewPassword'>New Password</label>
                                    <input className='px-4 py-2 focus:border-gray-700 outline-none bg-transparent border border-slate-400 rounded-md' type="password" placeholder='New Password' name='NewPassword' id='NewPassword' />
                                </div>

                                <div className='flex'>
                                    <button className='bg-black  hover:shadow-black/20 hover:shadow-lg p-2 mt-5 rounded text-white font-medium'> Update </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Profile;