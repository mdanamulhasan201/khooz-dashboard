import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { get_category } from '../../store/Reducers/categoryReducers'
import { get_product, messageClear, update_product, product_image_update } from '../../store/Reducers/productReducer'
import { useSelector, useDispatch } from 'react-redux'
import { ScaleLoader } from 'react-spinners';
import { toast } from 'react-hot-toast';


const EditProduct = () => {

    const { productId } = useParams()
    const dispatch = useDispatch()
    const { categorys } = useSelector(state => state.category)
    const { product, loader, successMessage, errorMessage, } = useSelector(state => state.product)

    useEffect(() => {
        dispatch(get_category({
            searchValue: '',

        }))
    }, [])

    const [state, setState] = useState({
        name: "",
        description: '',
        discount: '',
        price: "",
        brand: "",
        stock: ""
    })


    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }


    // 
    useEffect(() => {
        dispatch(get_product(productId))
    }, [productId])

    // 


    const [categoryShow, setCategoryShow] = useState(false)
    const [category, setCategory] = useState('')
    const [allCategory, setAllCategory] = useState([])
    const [searchValue, setSearchValue] = useState('')

    const categorySearch = (e) => {
        const value = e.target.value
        setSearchValue(value)
        if (value) {
            let srcValue = allCategory.filter(c => c.name.toLowerCase().indexOf(value.toLowerCase()) > -1)
            setAllCategory(srcValue)
        } else {
            setAllCategory(categorys)
        }
    }


    // upload image
    // const [images, setImages] = useState([])
    const [imageShow, setImageShow] = useState([])


    // image change function 
    const changeImage = (img, files) => {
        if (files.length > 0) {
            dispatch(product_image_update({
                oldImage: img,
                newImage: files[0],
                productId

            }))
        }
    }



    useEffect(() => {
        setState({
            name: product.name,
            brand: product.brand,
            price: product.price,
            discount: product.discount,
            stock: product.stock,
            description: product.description,
        })
        setCategory(product.category)
        setImageShow(product.images)
    }, [product])

    useEffect(() => {
        if (categorys.length > 0) {
            setAllCategory(categorys)
        }
    }, [categorys])



    useEffect(() => {
        if (errorMessage) {
            toast.error(errorMessage)
            dispatch(messageClear())
        }
        if (successMessage) {
            toast.success(successMessage)
            dispatch(messageClear())
            setState({
                name: "",
                description: '',
                discount: '',
                price: "",
                brand: "",
                stock: ""
            })

            setCategory('')

        }
    }, [successMessage, errorMessage])


    // update image 
    const update = (e) => {
        e.preventDefault()
        state.productId = productId
        dispatch(update_product(state))
    }

    return (

        <div className="px-2 md:px-7 mt-10 py-5">
            <div className='w-full p-4 bg-[#F8F5FF] rounded-md'>
                <div className='flex justify-between item-center pb-4 '>
                    <h1 className='text-xl font-semibold'>Edit product</h1>
                    <Link className='bg-black btn-sm hover:shadow-black-700/50 hover:shadow-lg px-4 py-1 mt-5 rounded text-white font-medium' to='/seller/dashboard/allProduct'>All Products</Link>
                </div>
                <div>
                    <form onSubmit={update}>
                        <div className='flex flex-col mb-3 md:flex-row gap-4 w-full '>
                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor='name'>Product name</label>
                                <input onChange={inputHandle} value={state.name} className='px-4 py-2 focus:border-gray-700 outline-none bg-transparent border border-slate-400 rounded-md' type="text" placeholder='product name' name='name' id='name' />
                            </div>
                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor='brand'>Brand name</label>
                                <input onChange={inputHandle} value={state.brand} className='px-4 py-2 focus:border-gray-700 outline-none bg-transparent border border-slate-400 rounded-md' type="text" placeholder='brand name' name='brand' id='brand' />
                            </div>
                        </div>


                        {/* category  and stock product*/}
                        <div className='flex flex-col mb-3 md:flex-row gap-4 w-full relative'>

                            {/*   category*/}
                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor='category'>Category</label>
                                <input readOnly onClick={() => setCategoryShow(!categoryShow)} onChange={inputHandle} value={category} className='px-4 py-2 focus:border-gray-700 outline-none bg-transparent border border-slate-400 rounded-md' type="text" placeholder='---Select Category---' id='category' />

                                <div className={`absolute top-[101%] bg-[#f1ecfb] w-full md:w-[780px] mt-2 transition-all ${categoryShow ? 'scale-100' : "scale-0"}`}>
                                    <div className='w-full px-4 py-2 fixed'>
                                        <input value={searchValue} onChange={categorySearch} className='px-3  py-1 w-full focus:border-gray-700 outline-none bg-transparent border border-slate-400 rounded-md overflow-hidden' type="text" placeholder='search' />
                                    </div>
                                    <div className='pt-16'></div>
                                    <div className='flex justify-start items-start flex-col h-[200px] overflow-y-scroll'>
                                        {
                                            allCategory.length > 0 && allCategory.map((c, i) => <span className={`px-4 py-2 hover:bg-black hover:text-white hover:shadow-lg cursor-pointer ${category === c.name && 'bg-black text-white'}`} onClick={() => {
                                                setCategoryShow(false)
                                                setCategory(c.name)
                                                setSearchValue('')
                                                setAllCategory(categorys)
                                            }}>{c.name}</span>)
                                        }
                                    </div>
                                </div>
                            </div>

                            {/* stock product */}
                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor='stock'>Stock</label>
                                <input onChange={inputHandle} value={state.stock} className='px-4 py-2 focus:border-gray-700 outline-none bg-transparent border border-slate-400 rounded-md' type="number" min='0' placeholder='product stock' name='stock' id='stock' />
                            </div>
                        </div>

                        {/* price and discount */}
                        <div className='flex flex-col mb-3 md:flex-row gap-4 w-full '>
                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor='price'>Price</label>
                                <input onChange={inputHandle} value={state.price} className='px-4 py-2 focus:border-gray-700 outline-none bg-transparent border border-slate-400 rounded-md' type="number" placeholder='Price' name='price' id='price' />
                            </div>
                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor='discount'>Discount</label>
                                <input onChange={inputHandle} value={state.discount} className='px-4 py-2 focus:border-gray-700 outline-none bg-transparent border border-slate-400 rounded-md' type="number" placeholder='Discount%' name='discount' id='discount' />
                            </div>
                        </div>
                        {/*  */}
                        <div className='flex flex-col w-full gap-1 mb-6'>
                            <label htmlFor='description'>Description</label>
                            <textarea rows={8} onChange={inputHandle} value={state.description} className='px-4 py-2 focus:border-gray-700 outline-none bg-transparent border border-slate-400 rounded-md' placeholder='description...' name='description' id='description' >
                            </textarea >
                        </div>


                        {/* image */}
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-3 sm:gap-4 md:gap-4 xs:gap-4 w-full mb-4'>


                            {
                                (imageShow && imageShow.length > 0) && imageShow.map((img, i) => <div>
                                    <label className='h-[180px]' htmlFor={i}>
                                        <img className='h-full' src={img} alt="" />
                                    </label>
                                    <input onChange={(e) => changeImage(img, e.target.files)} type="file" name="" id={i} className='hidden' />
                                </div>)
                            }
                            {/* <label className='flex justify-center items-center flex-col h-[180px] cursor-pointer border border-dashed hover:border-black w-full border-gray-400 ' htmlFor="image">
                                <span><BsImages></BsImages></span>
                                <span>select Image</span>
                            </label>
                            
                            <input type="file" id='image' className='hidden' multiple onChange={imageHandle} /> */}

                        </div>

                        <div className='flex'>
                            <button
                                // type="submit"
                                disabled={loader ? true : false}

                                className={`btn ${loader ? 'bg-black' : 'bg-black'}  rounded-md hover:shadow-md mt-5 hover:shadow-gray-800/40 px-7 py-2 mb-3 text-white font-bold`}
                            >
                                {loader ? <ScaleLoader height={13} color="#ffff" /> : 'Update Product'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditProduct;