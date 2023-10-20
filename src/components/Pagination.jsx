import React from 'react';
import {  BsChevronDoubleLeft, BsChevronDoubleRight } from 'react-icons/bs';

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
                <li onClick={() => setPageNumber(i)} className={`
                    ${pageNumber === i ? 'bg-green-500 shadow-lg shadow-green-500 text-white' : 'bg-slate-700 hover:bg-green-500 text-white shadow-lg hover:shadow-indigo-500/5'} w-[33px] h-[33px] rounded-full flex justify-center items-center cursor-pointer`
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
                pageNumber > 1 && <li onClick={() => setPageNumber(pageNumber - 1)} className='w-[33px] h-[33px] rounded-full flex justify-center items-center bg-slate-700 text-[#d0d2d6] cursor-pointer'>
                    <BsChevronDoubleLeft />
                </li>
            }
            {
                createBtn()
            }
            {
                pageNumber < totalPage && <li onClick={() => setPageNumber(pageNumber + 1)} className='w-[33px] h-[33px] rounded-full flex justify-center items-center bg-slate-700 text-[#d0d2d6] cursor-pointer'>
                    <BsChevronDoubleRight />
                </li>
            }
        </ul>
    )
};

export default Pagination;