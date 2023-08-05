import React from 'react'
import {FaStar, FaStarHalf} from 'react-icons/fa'
import { AiOutlineStar} from "react-icons/ai";

const Star = ({rating}:any) => {
   const starRating = Array.from({length: 5}, (e, i) => {
        const ratingValue = i + 0.5;

        return (
            <span key={i} >
                {rating >= i + 1 ? (
                    <FaStar className='text-yellow-400' />
                ) : rating >= ratingValue ? (
                    <FaStarHalf className='text-yellow-400' />
                ) : (
                    <AiOutlineStar className='text-yellow-400' />
                )}
            </span>
        ) 
    })


  return (
    <div className='flex items-center p-1  border rounded-sm'>
        <p className='font-bold pr-1  text-sm'>{rating}</p>
        {starRating} 
    </div>
  )
} 

export default Star