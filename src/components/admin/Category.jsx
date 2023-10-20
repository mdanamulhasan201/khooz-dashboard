import React, { useEffect, useState } from 'react';
import { BsImage } from 'react-icons/bs';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Search from '../Shared/Search';
import { ScaleLoader } from 'react-spinners';
import { useSelector, useDispatch } from 'react-redux';

import { categoryAdd, messageClear, get_category } from '../../store/Reducers/categoryReducers'
import { toast } from 'react-hot-toast';

const Category = () => {
    const dispatch = useDispatch()
    const { loader, successMessage, errorMessage, categorys } = useSelector(state => state.category)
    const [searchValue, setSearchValue] = useState('')


    const [imageShow, setImageShow] = useState('')

    const [state, setState] = useState(
        {
            name: '',
            image: ''
        })

    const imageHandle = (e) => {
        let files = e.target.files
        if (files.length > 0) {
            setImageShow(URL.createObjectURL(files[0]))
            setState({
                ...state,
                image: files[0]
            })
        }
    }

    const add_Category = (e) => {
        e.preventDefault(
            dispatch(categoryAdd(state))
        )
    }

    useEffect(() => {
        if (errorMessage) {
            toast.error(errorMessage)
            dispatch(messageClear)
        }
        if (successMessage) {
            toast.success(successMessage)
            dispatch(messageClear)
            setState({
                name: '',
                image: ''
            })
            setImageShow('')
        }
    }, [successMessage, errorMessage])

    useEffect(() => {
        const obj = {
            searchValue
        }
        dispatch(get_category(obj))
    }, [searchValue])


    // paginations
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Adjust the number of items per page as needed
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedData = categorys.slice(startIndex, endIndex);

    const totalPages = Math.ceil(categorys.length / itemsPerPage);

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className='px-2 lg:px-7 pt-5 '>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10'>
                <div className='w-full '>
                    <div className='w-full p-4 bg-[#F8F5FF] rounded-md'>
                        <Search setSearchValue={setSearchValue} searchValue={searchValue}></Search>

                        <div className="w-full p-2 bg-[#F8F5FF] rounded-md mt-2 overflow-x-auto">
                            <table className="w-full text-sm text-left ">
                                <thead className="text-sm uppercase border-b border-slate-300 text-gray-600">
                                    <tr>
                                        <th scope="col" className="py-1 px-2 ">No</th>
                                        <th scope="col" className="py-1 px-2 ">Image</th>
                                        <th scope="col" className="py-1 px-2 ">Name</th>
                                        <th scope="col" className="py-1 px-2 ">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        displayedData.map((d, i) => (
                                            <tr key={i} className='border-b'>
                                                <td className="py-1 px-0 font-medium whitespace-nowrap ">{i + 1}</td>
                                                <td className="py-1 px-0 font-medium whitespace-nowrap ">
                                                    <img className='w-16 h-16 rounded-full' src={d.image} alt="" />
                                                </td>
                                                <td className="py-1 px-0 font-medium whitespace-nowrap text-gray-700"><span>{d.name}</span></td>
                                                <td className="py-1 px-0 font-medium whitespace-nowrap ">
                                                    <div className='flex justify-start items-center gap-4'>
                                                        <Link className='p-1 bg-green-100 rounded'><FaEdit className='text-xl text-green-500'></FaEdit> </Link>
                                                        <Link className='p-1 bg-red-100 rounded'><FaTrash className='text-lg text-red-500 '></FaTrash> </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="pagination-controls mt-5">
                        <button
                            onClick={handlePrevPage}
                            disabled={currentPage === 1}
                            className={`px-2 py-1 rounded-md mr-2 ${currentPage === 1 ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-black hover:shadow-black/40 hover:shadow-lg text-white hover:text-white'}`}
                        >
                            Previous
                        </button>
                        <span>Page {currentPage} of {totalPages}</span>
                        <button
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                            className={`px-2 py-1 rounded-md ml-2 ${currentPage === totalPages ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-black hover:shadow-black/40 hover:shadow-lg text-white hover:text-white'}`}
                        >
                            Next
                        </button>
                    </div>

                </div>
                <div className='w-full '>
                    <div className='w-full p-9 bg-[#F8F5FF] rounded-md'>
                        <div>
                            <h1 className='text-center text-lg font-semibold w-full'>Add Category</h1>
                            <form onSubmit={add_Category}>
                                <div className='flex flex-col w-full gap-1 mb-3'>
                                    <label htmlFor='name'>Category Name</label>
                                    <input
                                        value={state.name}
                                        onChange={(e) => setState({ ...state, name: e.target.value })}
                                        className='px-4 py-2 focus:border-gray-700 outline-none bg-transparent border border-slate-400 rounded-md'
                                        type="text"
                                        id='name'
                                        name='category_name'
                                        placeholder='Category Name'
                                        required
                                    />
                                </div>
                                <div>

                                    <label htmlFor="image" className='flex justify-center items-center flex-col h-[238px] cursor-pointer border border-dashed border-gray-400 hover:border-gray-800 w-full'>
                                        {
                                            imageShow ? <img className='w-full h-full' src={imageShow} alt="" /> : <>
                                                <span><BsImage></BsImage></span>
                                                <span>select Image</span>
                                            </>
                                        }


                                    </label>
                                </div>

                                <input

                                    onChange={imageHandle}
                                    type="file"
                                    name='image'
                                    id='image'
                                    className='hidden'
                                    required
                                />


                                <button
                                    // type="submit"
                                    disabled={loader ? true : false}

                                    className={`btn ${loader ? 'bg-black' : 'bg-black'} w-full rounded-md hover:shadow-md mt-5 hover:shadow-gray-800/40 px-7 py-2 mb-3 text-white font-bold`}
                                >
                                    {loader ? <ScaleLoader height={13} color="#ffff" /> : 'Add Category'}
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default Category;
