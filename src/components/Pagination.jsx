import React from 'react';
import { BsChevronBarDown } from 'react-icons/bs';

const Pagination = ({ pageNumber, setPageNumber, totalItem, parPage, showItem }) => {
    
    let totalPage = Math.ceil(totalItem / parPage)
    let startPage = pageNumber
    
    let difference = totalPage - pageNumber;
    if (difference <= showItem) {
        startPage = totalPage - showItem
    }
    let endPage = startPage < 0 ? showItem : showItem + startPage
    if (startPage <= 0) {
        startPage = 1
    }
    const createBtn = () => {
        const btns = []
        for (let i = startPage; i < endPage; i++) {
            btns.push(
                <li className={`
                    ${pageNumber === i ? 'bg-indigo-700 shadow-lg shadow-indigo-600 ' : 'bg-slate-700 hover:bg-indigo-500 shadow-lg hover:shadow-indigo-500/5'} w-[33px] h-[33px] rounded-full flex justify-center items-center cursor-pointer`
                }>
                    {i}
                </li>
            )
        }
        return btns
    }

    return (
        <ul className='flex gap-3'>
            {
                pageNumber > 1 && <li className='w-[33px] h-[33px] rounded-full justify-center items-center bg-[#713ced] text-black cursor-pointer'>
                    <BsChevronBarDown></BsChevronBarDown>
                </li>

            }
            {
                createBtn()
            }
        </ul>
    )
};

export default Pagination;