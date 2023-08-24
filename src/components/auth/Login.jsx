import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';
import { Link } from "react-router-dom";
import { AiFillGoogleSquare, AiFillFacebook } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";

const Login = () => {
    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
        // setError,
    } = useForm();

    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(prevState => !prevState);
    };

    const onSubmit = data => {
        console.log(data); // Handle form submission logic here
    };

    return (
        <div className="min-w-screen min-h-screen bg-[#f4f0fd] flex justify-center items-center">
            <div className="w-[390px] text-[#000000] p-2">
                <div className="bg-[#f5f1fd] shadow-lg p-4 rounded-md">
                    <h1 className="text-2xl font-semibold mb-3">Khooz-Seller Login</h1>
                    <p className="text-sm mb-8 text-gray-500">Please Sign In to your account and start your business</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col w-full gap-1 mb-3 relative">
                            <label htmlFor='email' >
                                Email address
                            </label>
                            <input
                                {...register('email', { required: true })}
                                type='email'
                                name='email'
                                id='email'
                                placeholder=' Your Email'
                                className="px-3 py-2 outline-none border border-slate-300 bg-transparent rounded-md text-gray-500 focus:ring-1 focus:ring-red-400 overflow-hidden"
                                data-temp-mail-org='0'
                                required
                            />
                            {errors.email?.type === 'required' && (
                                <p className='text-red-600 mt-2' role='alert'>
                                    Email is required
                                </p>
                            )}
                        </div>


                        <div>
                            <label htmlFor='password' className='text-sm mb-2'>
                                Password
                            </label>
                            <div className="flex flex-col w-full gap-1 mb-5 relative">
                                <input
                                    {...register('password', { required: true })}
                                    type={showPassword ? 'text' : 'password'}
                                    name='password'
                                    id='password'
                                    required
                                    placeholder='*******'
                                    className="px-3 py-2 outline-none border border-slate-300 bg-transparent rounded-md text-gray-500 focus:ring-1 focus:ring-red-400 overflow-hidden"
                                    data-temp-mail-org='0'
                                   
                                />
                                {errors.password?.type === 'required' && (
                                    <p className='text-red-600 mt-2' role='alert'>
                                        Password is required
                                    </p>
                                )}
                                <button
                                    type='button'
                                    onClick={handleTogglePassword}
                                    className='absolute inset-y-0 right-0 px-2 flex items-center  text-red-500 focus:outline-red-400'
                                >
                                    {showPassword ? <RiEyeOffFill size={20} /> : <RiEyeFill size={20} />}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="btn bg-red-500 w-full rounded-md hover:shadow-md hover:shadow-red-500/50 px-7 py-2 mb-3 text-white font-bold"
                        >
                            Sign In
                        </button>
                        <div className="mb-3 text-center">
                            <p> <span className="text-gray-500">Don't have an account yet?</span> <Link to='/register' className="hover:text-red-400 font-semibold">Sign Up</Link></p>
                        </div>
                        <div className="w-full flex justify-center items-center mb-3">
                            <div className="w-[45%] bg-slate-400 h-[1px]"></div>
                            <div className="w-[10%]">
                                <span className="mx-2">OR</span>
                            </div>
                            <div className="w-[45%] bg-slate-400 h-[1px]"></div>
                        </div>
                        <div className="flex justify-center items-center gap-3">
                            <div className="text-4xl hover:text-red-500 cursor-pointer">
                                <span>
                                    <AiFillGoogleSquare className="rounded-full"></AiFillGoogleSquare>
                                </span>
                            </div>
                            <div className="text-4xl hover:text-red-500 cursor-pointer">
                                <span>
                                    <AiFillFacebook className="rounded-full"></AiFillFacebook>
                                </span>
                            </div>
                            <div className="text-4xl hover:text-red-500 cursor-pointer">
                                <span>
                                    <FaGithubSquare className=""></FaGithubSquare>
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
