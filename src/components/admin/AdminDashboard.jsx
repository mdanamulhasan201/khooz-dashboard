import { BsCurrencyDollar } from "react-icons/bs";
import { RiProductHuntLine } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Chart from 'react-apexcharts'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { get_admin_index_data } from '../../store/Reducers/dashboardIndexReducer'

const AdminDashboard = () => {
    const {
        totalSale,
        totalOrder,
        totalProduct,
        totalSeller,
        recentOrder,

    } = useSelector(state => state.dashboardIndex)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(get_admin_index_data())
    })
    const state = {
        series: [
            {
                name: 'Orders',
                data: [340, 56, 348, 56, 85, 45, 78, 213, 200, 20, 17, 40]
            },
            {
                name: 'Revenue',
                data: [400, 56, 34, 450, 100, 25, 78, 113, 99, 20, 17, 400]
            },
            {
                name: 'Sellers',
                data: [200, 10, 3, 89, 50, 500, 7, 35, 91, 29, 482, 300]
            }

        ],

        options: {
            color: ['#181ee8', '#181ee8'],
            plotOptions: {
                radius: 30
            },
            chart: {
                background: 'transparent',
                foreColor: '#d0d2d6'
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                curve: ['smooth', 'straight', 'stepline'],
                lineCap: 'butt',
                colors: '#f0f0f0',
                width: .5,
                dashArray: 0
            },
            xaxis: {
                categories:
                    [
                        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
                    ]
            },
            legend: {
                position: 'top',
            },
            responsive: [
                {
                    breakpoint: 565,
                    yaxis: {
                        categories:
                            [
                                'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
                            ]
                    },
                    options: {
                        plotOptions: {
                            bar: {
                                horizontal: true
                            }
                        },
                        chart: {
                            height: '550px'
                        }
                    }
                }
            ]

        }
    }
    return (
        <div className="px-2 md:px-7 mt-10 py-5">

            {/* card items  */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7">
                <div className="flex justify-between items-center p-5 bg-[#F8F5FF] rounded-lg shadow-md gap-3">
                    <div className="flex flex-col justify-start items-start text-black">
                        <h2 className="text-3xl font-semibold">{totalSale} Tk</h2>
                        <span className="text-md font-medium">Total sales</span>
                    </div>
                    <div className="w-[46px] h-[47px] rounded-full bg-[#28c76f1f] flex justify-center items-center text-xl">
                        <BsCurrencyDollar className="text-[#28c76f]"></BsCurrencyDollar>
                    </div>
                </div>
                <div className="flex justify-between items-center p-5 bg-[#F8F5FF] rounded-lg shadow-md gap-3">
                    <div className="flex flex-col justify-start items-start text-black">
                        <h2 className="text-3xl font-semibold">{totalProduct}</h2>
                        <span className="text-md font-medium">Products</span>
                    </div>
                    <div className="w-[46px] h-[47px] rounded-full bg-[#e000e81f] flex justify-center items-center text-xl">
                        <RiProductHuntLine className="text-[#cd00e8] "></RiProductHuntLine>
                    </div>
                </div>
                <div className="flex justify-between items-center p-5 bg-[#F8F5FF] rounded-lg shadow-md gap-3">
                    <div className="flex flex-col justify-start items-start text-black">
                        <h2 className="text-3xl font-semibold">{totalSeller}</h2>
                        <span className="text-md font-medium">Sellers</span>
                    </div>
                    <div className="w-[46px] h-[47px] rounded-full bg-[#d0d2d6] flex justify-center items-center text-xl">
                        <FaUsers className="text-[#283046]"></FaUsers>
                    </div>
                </div>
                <div className="flex justify-between items-center p-5 bg-[#F8F5FF] rounded-lg shadow-md gap-3">
                    <div className="flex flex-col justify-start items-start text-black">
                        <h2 className="text-3xl font-semibold">{totalOrder}</h2>
                        <span className="text-md font-medium">Order</span>
                    </div>
                    <div className="w-[46px] h-[47px] rounded-full bg-[#7367f01f] flex justify-center items-center text-xl">
                        <AiOutlineShoppingCart className="text-[#7367f0] "></AiOutlineShoppingCart>
                    </div>
                </div>
            </div>


            {/* chart section */}
            <div className="w-full flex flex-wrap mt-12">
                <div className="w-full  lg:pr-3">

                    <div className="w-full bg-[#F8F5FF] pb-4 rounded-md shadow-md">
                        <Chart options={state.options} series={state.series} type="bar" height={350}></Chart>
                    </div>

                </div>
            </div>


            {/* recent order */}
            <div className="w-full p-4  rounded-md mt-12">
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-lg ">Recent Orders</h2>
                    <Link className="font-semibold text-sm">
                        View All
                    </Link>
                </div>
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left ">
                        <thead className="text-sm uppercase border-b border-slate-300">
                            <tr>
                                <th scope="col" className="py-3 px-4 ">Order Id</th>
                                <th scope="col" className="py-3 px-4 ">Price</th>
                                <th scope="col" className="py-3 px-4 ">Payment Status</th>
                                <th scope="col" className="py-3 px-4 ">Order Status</th>
                                <th scope="col" className="py-3 px-4 ">Action</th>


                            </tr>
                        </thead>
                        <tbody>
                            {
                                recentOrder.map((r, i) => <tr key={i}>
                                    <td className="py-3 px-4 font-medium whitespace-nowrap ">#{r._id}</td>
                                    <td className="py-3 px-4 font-medium whitespace-nowrap ">{r.price} Tk</td>
                                    <td className="py-3 px-4 font-medium whitespace-nowrap "><span>{r.payment_status}</span></td>
                                    <td className="py-3 px-4 font-medium whitespace-nowrap "><span>{r.delivery_status}</span></td>
                                    <td className="py-3 px-4 font-medium whitespace-nowrap ">
                                        <Link className="border px-2 py-1" to={`/admin/dashboard/order/details/${r._id}`}>View</Link>
                                    </td>

                                </tr>)
                            }


                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;