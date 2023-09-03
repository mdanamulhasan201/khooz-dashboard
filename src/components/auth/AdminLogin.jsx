import React, { useEffect, useState } from "react";
import { ScaleLoader } from 'react-spinners'
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux'
import { admin_login, messageClear } from '../../store/Reducers/authReducer'
import { toast } from "react-hot-toast";
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {

    // create navigate 
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const { loader, errorMessage, successMessage } = useSelector(state => state.auth)

    // handle email and password
    const [state, setState] = useState({
        email: '',
        password: ''
    })

    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (errorMessage) {
            toast.error(errorMessage)
            dispatch(messageClear()) // error message clear in redux state
        }
        if (successMessage) {
            toast.success(successMessage)
            dispatch(messageClear()) // success message clear in redux state
            navigate('/')
        }
    }, [errorMessage, successMessage])

    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(prevState => !prevState);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(state)
        dispatch(admin_login(state)) // Handle form submission logic here
    };

    return (
        <div className="min-w-screen min-h-screen bg-[#F8F5FF] flex justify-center items-center">
            <div className="w-[360px] text-[#000000] p-2">
                <div className="bg-[#f5f1fd] shadow-lg p-4 rounded-md">
                    <h1 className="text-2xl font-semibold mb-3 text-center">Khooz-Admin Login</h1>
                    <form onSubmit={handleSubmit}>
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

                        <button
                            disabled={loader ? true : false}
                            className={`btn ${loader ? 'bg-red-500' : 'bg-red-500'} w-full rounded-md hover:shadow-md hover:bg-red-600/100 px-7 py-2 mb-3 text-white font-bold`}
                        >
                            {loader ? <ScaleLoader height={13} color="#ffff" /> : 'Login'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
