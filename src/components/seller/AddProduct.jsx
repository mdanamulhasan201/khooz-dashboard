import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsImages } from 'react-icons/bs'
import { IoCloseSharp } from 'react-icons/io5'
import { ScaleLoader } from 'react-spinners';
import { useSelector, useDispatch } from 'react-redux'
import { get_category } from '../../store/Reducers/categoryReducers'
import { add_product, messageClear } from '../../store/Reducers/productReducer'
import { toast } from 'react-hot-toast';
// import { toast } from 'react-hot-toast';

const AddProduct = () => {

    const dispatch = useDispatch()
    const { categorys } = useSelector(state => state.category)
    const { successMessage, errorMessage, loader } = useSelector(state => state.product)


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
            ...state, //initial obothai state jeita ache sheitai thakbe 
            [e.target.name]: e.target.value
        })
    }

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

    // useEffect mainly use korbo initial ager j data gul ache shy set kore dei (useEffect use na korle ei khane kaz korbe na)
    // useEffect(() => {
    //     setAllCategory(categorys)
    // }, [])


    // upload image
    const [images, setImages] = useState([])
    const [imageShow, setImageShow] = useState([])

    const imageHandle = (e) => {
        // console.log(e.target.files)
        const files = e.target.files
        const length = files.length;


        if (length > 0) {
            setImages([...images, ...files])
            let imageUrl = []

            for (let i = 0; i < length; i++) {
                imageUrl.push({ url: URL.createObjectURL(files[i]) })
            }
            setImageShow([...imageShow, ...imageUrl])
        }
    }

    // image change function 
    const changeImage = (img, index) => {
        if (img) {
            let tempUrl = imageShow
            let tempImages = images

            tempImages[index] = img
            tempUrl[index] = { url: URL.createObjectURL(img) }
            setImageShow([...tempUrl])
            setImages([...tempImages])
        }
    }


    // remove image 
    const removeImage = (i) => {
        const filterImage = images.filter((img, index) => index !== i)
        const filterImgUrl = imageShow.filter((img, index) => index !== i)
        setImages(filterImage)
        setImageShow(filterImgUrl)
    }

    useEffect(() => {
        setAllCategory(categorys)
    }, [categorys])

    // 
    const add = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('name', state.name)
        formData.append('description', state.description)
        formData.append('price', state.price)
        formData.append('stock', state.stock)
        formData.append('category', category)
        formData.append('discount', state.discount)
        formData.append('shopName', 'Anamul Fashoin')
        formData.append('brand', state.brand)
        for (let i = 0; i < images.length; i++) {
            formData.append('images', images[i])
        }
        dispatch(add_product(formData))
    }

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
            setImageShow([])
            setImages([])
            setCategory('')

        }
    }, [successMessage, errorMessage])

    return (

        <div className="px-2 md:px-7 mt-10 py-5">
            <div className='w-full p-4 bg-[#F8F5FF] rounded-md'>
                <div className='flex justify-between item-center pb-4 '>
                    <h1 className='text-xl font-semibold'>Add product</h1>
                    <Link className='bg-black btn-sm hover:shadow-black-700/50 hover:shadow-lg px-4 py-1 mt-5 rounded text-white font-medium' to='/seller/dashboard/allProduct'>All Products</Link>
                </div>
                <div>
                    <form onSubmit={add}>
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
                                            allCategory.map((c, i) => <span className={`px-4 py-2 hover:bg-black hover:text-white hover:shadow-lg cursor-pointer ${category === c.name && 'bg-black text-white'}`} onClick={() => {
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
                                <input min='0' onChange={inputHandle} value={state.price} className='px-4 py-2 focus:border-gray-700 outline-none bg-transparent border border-slate-400 rounded-md' type="number" placeholder='Price' name='price' id='price' />
                            </div>
                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor='discount'>Discount</label>
                                <input min='0' onChange={inputHandle} value={state.discount} className='px-4 py-2 focus:border-gray-700 outline-none bg-transparent border border-slate-400 rounded-md' type="number" placeholder='Discount%' name='discount' id='discount' />
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

                            <label className='flex justify-center items-center flex-col h-[180px] cursor-pointer border border-dashed hover:border-black w-full border-gray-400 ' htmlFor="image">
                                <span><BsImages></BsImages></span>
                                <span>select Image</span>
                            </label>
                            {
                                imageShow.map((img, i) => <div className='h-[180px] relative'>
                                    <label htmlFor={i}>
                                        <img className='w-full h-full rounded-sm' src={img.url} alt="" />
                                    </label>
                                    <input onChange={(e) => changeImage(e.target.files[0], i)} type="file" id={i} className='hidden' />
                                    <span onClick={() => removeImage(i)} className='p-2 z-10 cursor-pointer bg-black hover:shadow-lg hover:shadow-black/40 text-white absolute top-1 right-1 rounded-full'><IoCloseSharp></IoCloseSharp></span>

                                </div>)
                            }
                            <input type="file" id='image' className='hidden' multiple onChange={imageHandle} />

                        </div>

                        <div className='flex'>
                            {/* <button className='bg-black  hover:shadow-black/20 hover:shadow-lg p-2 mt-5 rounded text-white font-medium'> Add Product </button> */}

                            <button
                                // type="submit"
                                disabled={loader ? true : false}

                                className={`btn ${loader ? 'bg-black' : 'bg-black'}  rounded-md hover:shadow-md mt-5 hover:shadow-gray-800/40 px-7 py-2 mb-3 text-white font-bold`}
                            >
                                {loader ? <ScaleLoader height={13} color="#ffff" /> : 'Add Product'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;