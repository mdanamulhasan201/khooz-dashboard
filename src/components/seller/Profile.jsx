import React from 'react';
import { BsImages } from 'react-icons/bs'
import { FaEdit } from 'react-icons/fa';
import { FadeLoader } from 'react-spinners';

const Profile = () => {
    const image = true
    const loader = false
    const status = "active"
    const userInfo = true
    return (
        <div className='px-7 lg:px-7 py-5'>
            <div className='w-full flex flex-wrap'>
                <div className='w-full md:w-6/12'>
                    <div className='w-full p-4 rounded-md bg-[#F8F5FF]'>
                        <div className='flex justify-center items-center py-3'>
                            {
                                image ?
                                    <label htmlFor="img" className='h-[210px] w-[300px] relative p-3 cursor-pointer overflow-hidden'>
                                        <img className='h-full w-full' src="https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg" alt="" />
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
                            <input type="file" className='hidden' id='img' />
                        </div>


                        {/*  */}

                        <div className='px-0 md:px-5 py-2'>
                            <div className='flex justify-between bg-[#ede7ff] text-sm flex-col gap-2 p-4 rounded-md relative'>
                                <span className='p-[6px] bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/40 absolute right-2 top-2 cursor-pointer'><FaEdit></FaEdit></span>
                                <div className='flex gap-2 '>
                                    <span>Name: </span>
                                    <span>Anamul Hasan</span>
                                </div>
                                <div className='flex gap-2 '>
                                    <span>Email: </span>
                                    <span>anamul@gmail.com</span>
                                </div>
                                <div className='flex gap-2 '>
                                    <span>Role: </span>
                                    <span>Seller</span>
                                </div>
                                <div className='flex gap-2 '>
                                    <span>Status: </span>
                                    <span>Active</span>
                                </div>
                                <div className='flex gap-2 '>
                                    <span>Payment Account: </span>
                                    <p>
                                        {
                                            status === 'active' ? <span className='bg-red-400 text-white text-xs cursor-pointer font-normal ml-2 px-2 py-0.5 rounded '>pending</span>
                                                : <span className='bg-blue-500 text-white text-xs cursor-pointer font-normal ml-2 px-2 py-0.5 rounded '>
                                                    click active
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
                                    !userInfo ?
                                        <form action=''>
                                            <div className='flex flex-col gap-1 mb-3'>
                                                <label htmlFor='Shop'>Shop Name</label>
                                                <input className='px-4 py-2 focus:border-gray-700 outline-none bg-transparent border border-slate-400 rounded-md' type="text" placeholder='Shop name' name='shopName' id='Shop' />
                                            </div>
                                            <div className='flex flex-col gap-1 mb-3'>
                                                <label htmlFor='MobileNumber'>Mobile Number</label>
                                                <input className='px-4 py-2 focus:border-gray-700 outline-none bg-transparent border border-slate-400 rounded-md' type="number" placeholder='+880' name='MobileNumber' id='MobileNumber' />
                                            </div>
                                            <div className='flex flex-col gap-1 mb-3'>
                                                <label htmlFor='Division'>Division</label>
                                                <input className='px-4 py-2 focus:border-gray-700 outline-none bg-transparent border border-slate-400 rounded-md' type="text" placeholder='Division Name' name='division' id='Division' />
                                            </div>
                                            <div className='flex flex-col gap-1 mb-3'>
                                                <label htmlFor='District'>District</label>
                                                <input className='px-4 py-2 focus:border-gray-700 outline-none bg-transparent border border-slate-400 rounded-md' type="text" placeholder='District Name' name='district' id='District' />
                                            </div>
                                            <div className='flex flex-col gap-1 mb-3'>
                                                <label htmlFor='Thana'>Upazila</label>
                                                <input className='px-4 py-2 focus:border-gray-700 outline-none bg-transparent border border-slate-400 rounded-md' type="text" placeholder='UpazilaName' name='Thana' id='Thana' />
                                            </div>
                                            <div className='flex flex-col gap-1 mb-3'>
                                                <label htmlFor='Village'>Village</label>
                                                <input className='px-4 py-2 focus:border-gray-700 outline-none bg-transparent border border-slate-400 rounded-md' type="text" placeholder='Village name' name='Village' id='Village' />
                                            </div>

                                            <div className='flex'>
                                                <button className='bg-black  hover:shadow-black/20 hover:shadow-lg p-2 mt-5 rounded text-white font-medium'> Submit </button>
                                            </div>
                                        </form> : <div className='px-0 md:px-5 py-2 '>
                                            <div className='flex  justify-between bg-[#ede7ff] text-sm flex-col gap-2 p-4 rounded-md relative'>
                                                <span className='p-[6px] bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/40 absolute right-2 top-2 cursor-pointer'><FaEdit></FaEdit></span>
                                                <div className='flex gap-2 '>
                                                    <span>Shop Name: </span>
                                                    <span>Ostad</span>
                                                </div>
                                                <div className='flex gap-2 '>
                                                    <span>Phone: </span>
                                                    <span>+880155</span>
                                                </div>
                                                <div className='flex gap-2 '>
                                                    <span>Division: </span>
                                                    <span>Dhaka</span>
                                                </div>

                                                <div className='flex gap-2 '>
                                                    <span>District: </span>
                                                    <span>Tangail</span>
                                                </div>
                                                <div className='flex gap-2 '>
                                                    <span>Upazila: </span>
                                                    <span>Sakhipur</span>
                                                </div>
                                                <div className='flex gap-2 '>
                                                    <span>Village: </span>
                                                    <span>Dariapur, UttarPara</span>
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