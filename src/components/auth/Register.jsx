import React, { useEffect, useState } from "react";
// import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';
import { Link, useNavigate } from "react-router-dom";
import { AiFillGoogleSquare, AiFillFacebook } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux'
import { ScaleLoader } from 'react-spinners'
import { messageClear, seller_register } from '../../store/Reducers/authReducer'
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { toast } from "react-hot-toast";

const Register = () => {
    const navigate = useNavigate()
    const { loader, errorMessage, successMessage } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const [state, setState] = useState({
        name: '',
        email: '',
        password: ''
    })


    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }


    const submit = (e) => {
        e.preventDefault()
        dispatch(seller_register(state))
    }



    useEffect(() => {
        if (successMessage) {
            toast.success(successMessage)
            dispatch(messageClear()) // error message clear in redux state
            navigate('/login')
        }
        if (errorMessage) {
            toast.error(errorMessage)
            dispatch(messageClear())
        }
    }, [successMessage, errorMessage])


    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(prevState => !prevState);
    };


    return (
        <div className="min-w-screen min-h-screen bg-[#f4f0fd] flex justify-center items-center">
            <div className="w-[390px] text-[#000000] p-2">
                <div className="bg-[#f5f1fd] shadow-lg p-4 rounded-md">
                    <h1 className="text-2xl font-semibold mb-3">Khooz-Register</h1>
                  
                    <p className="text-sm mb-8 text-gray-500">Please register to your account and start Your business</p>
                    <form onSubmit={submit} >
                        <div className="flex flex-col w-full gap-1 mb-3">
                            <label htmlFor='name' >
                                Name
                            </label>
                            <input

                                type='text'
                                onChange={inputHandle}
                                value={state.name}
                                name='name'
                                id='name'
                                placeholder='Your Name'
                                className="px-3 py-2 outline-none border border-slate-300 bg-transparent rounded-md text-gray-500 focus:ring-1 focus:ring-red-400 overflow-hidden"
                                data-temp-mail-org='0'
                                required
                            />

                        </div>

                        <div className="flex flex-col w-full gap-1 mb-3 relative">
                            <label htmlFor='name' >
                                Email address
                            </label>
                            <input

                                onChange={inputHandle}
                                value={state.email}
                                type='email'
                                name='email'
                                id='email'
                                placeholder=' Your Email'
                                className="px-3 py-2 outline-none border border-slate-300 bg-transparent rounded-md text-gray-500 focus:ring-1 focus:ring-red-400 overflow-hidden"
                                // data-temp-mail-org='0'
                                required
                            />

                        </div>



                        <div>
                            <label htmlFor='password' className='text-sm mb-2'>
                                Password
                            </label>
                            <div className="flex flex-col w-full gap-1 mb-5 relative">
                                <input
                                    onChange={inputHandle}
                                    value={state.password}
                                    type={showPassword ? 'text' : 'password'}
                                    name='password'
                                    id='password'
                                    required
                                    placeholder='******'
                                    className="px-3 py-2 outline-none border border-slate-300 bg-transparent rounded-md text-gray-500 focus:ring-1 focus:ring-red-400 overflow-hidden"
                                // data-temp-mail-org='0'


                                />

                                <button
                                    type='button'
                                    onClick={handleTogglePassword}
                                    className='absolute inset-y-0 right-0 px-2 flex items-center  text-red-500 focus:outline-red-400'
                                >
                                    {showPassword ? <RiEyeOffFill size={20} /> : <RiEyeFill size={20} />}
                                </button>
                            </div>
                        </div>





                        <div className="flex items-center w-full gap-1 mb-5">
                            <input
                                type="checkbox"
                                name="agreement"
                                id="agreement"
                                className="w-4 h-4 overflow-hidden rounded"
                                required

                            />
                            <label htmlFor="agreement">I agree to privacy policy & terms</label>
                        </div>

                        <button
                            // type="submit"
                            disabled={loader ? true : false}

                            className={`btn ${loader ? 'bg-red-500' : 'bg-red-500'} w-full rounded-md hover:shadow-md hover:bg-red-600/100 px-7 py-2 mb-3 text-white font-bold`}
                        >
                            {loader ? <ScaleLoader height={13} color="#ffff" /> : 'Sign Up'}
                        </button>



                        <div className="mb-3 text-center">
                            <p> <span className="text-gray-500">Already have an account?</span> <Link to='/login' className="hover:text-red-400 font-semibold">Login</Link></p>
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

export default Register;
