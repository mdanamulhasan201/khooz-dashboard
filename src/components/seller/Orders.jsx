import { useEffect, useState } from "react";
import Search from "../Shared/Search";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import Pagination from "../Pagination";
import { get_seller_orders } from "../../store/Reducers/ordersReducer";
import { useDispatch, useSelector } from "react-redux";


const Orders = () => {
    const dispatch = useDispatch()
    const { totalOrder, myOrders } = useSelector(state => state.order)
    const { userInfo } = useSelector(state => state.auth)
    const [currentPage, setCurrentPage] = useState(1)
    const [searchValue, setSearchValue] = useState('')
    const [parPage, setParPage] = useState(10)

    useEffect(() => {
        dispatch(get_seller_orders({
            parPage: parseInt(parPage),
            page: parseInt(currentPage),
            searchValue,
            sellerId: userInfo._id
        }))
    }, [parPage, currentPage, searchValue])
    return (
        <div className="px-2 md:px-7 mt-10 py-5">
            <div className='w-full md:w-[1200px] mx-auto p-4 bg-[#F8F5FF] rounded-md'>
                <Search setSearchValue={setSearchValue} searchValue={searchValue}></Search>

                {/* order */}
                <div className="w-full p-4 bg-[#F8F5FF] rounded-md mt-12">

                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left ">
                            <thead className="text-sm uppercase border-b border-slate-300">
                                <tr>
                                    <th scope="col" className="py-3 px-4 ">Order Id</th>
                                    <th scope="col" className="py-3 px-4 ">Price</th>
                                    <th scope="col" className="py-3 px-4 ">Payment Status</th>
                                    <th scope="col" className="py-3 px-4 ">Order Status</th>
                                    <th scope="col" className="py-3 px-4 ">Date</th>
                                    <th scope="col" className="py-3 px-4 ">Action</th>


                                </tr>
                            </thead>
                            <tbody>

                                {
                                    myOrders.map((o, i) => <tr key={i}>
                                        <td className="py-3 px-4 font-medium whitespace-nowrap ">#{o._id}</td>
                                        <td className="py-3 px-4 font-medium whitespace-nowrap ">{o.price} Tk</td>
                                        <td className="py-3 px-4 font-medium whitespace-nowrap "><span>{o.payment_status}</span></td>
                                        <td className="py-3 px-4 font-medium whitespace-nowrap "><span> {o.delivery_status}</span></td>
                                        <td className="py-3 px-4 font-medium whitespace-nowrap "><span> {o.date}</span></td>
                                        <td className="py-3 px-4 font-medium whitespace-nowrap ">
                                            <Link to={`/seller/dashboard/orders/details/${o._id}`} className='px-5 py-1 bg-green-100 border rounded flex justify-center items-center w-[30px]'>  View </Link>
                                           
                                        </td>

                                    </tr>)
                                }


                            </tbody>
                        </table>

                    </div>
                </div>


                {
                    totalOrder <= parPage ? "" : <div className='w-full flex justify-end mt-4 bottom-4 right-4'>
                        <Pagination
                            pageNumber={currentPage}
                            setPageNumber={setCurrentPage}
                            totalItem={totalOrder}
                            parPage={parPage}
                            showItem={4}
                        />
                    </div>
                }

            </div>
        </div>
    );
};

export default Orders;