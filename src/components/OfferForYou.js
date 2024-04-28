import React from 'react'

const OfferForYou = ({ header, subHeader }) => {
    return (
        <div className='rounded-xl border  pl-2 pr-2 pb-1 pt-2 border-gray-400 inline-block card mt-4 mb-4'>
            <div className='flex flex-row'>
                <div className='h-10 w-10 sm:h-20 sm:w-20'>
                    <img src="data:image/png;base64,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" alt='offer' />
                </div>
                <div className='mt-0 sm:mt-1 sm:mr-2'>
                    <h3 className='font-bold text-md sm:text-2xl'>{header}</h3>
                    <p className='text-gray-400 text-sm'>{subHeader}</p>
                </div>
            </div>
        </div>
    )
}

export default OfferForYou
