import React, { useEffect, useState } from 'react'
import RestroData from "../utils/restrodata";
import { Link } from 'react-router-dom';

const Restaurant = () => {
    const [data, setData] = useState([]);
    const [temp, setTemp] = useState([]);
    const [isfastDeliveryClicked, setIsFastDeliveryClicked] = useState(false);
    const [isRatingsClicked, setIsRatingsClicked] = useState(false);
    const [isLessThanClicked, setIsLessThanClicked] = useState(false);
    const [isBetweenClicked, setIsBetweenClicked] = useState(false);

    useEffect(() => {
        setData(RestroData.card.card.gridElements.infoWithStyle.restaurants);
        setTemp(RestroData.card.card.gridElements.infoWithStyle.restaurants);
    }, [])

    const handleFastDelivery = (e) => {
        e.preventDefault();
        setIsFastDeliveryClicked(true)
        setTemp(() => {
            return temp.filter((el) => {
                return (el.info.sla.deliveryTime < 30)
            })
        });
    }

    const handleRatings = (e) => {
        e.preventDefault();
        setIsRatingsClicked(true);
        setTemp(() => {
            return temp.filter((el) => {
                return (el.info.avgRating > 4)
            })
        });
    }
    const handleCostForTwo = (filterRange) => {

        setTemp(() => {
            return temp.filter((el) => {
                const costString = el.info.costForTwo;
                const cost = parseInt(costString.match(/\d+/)[0]);
                switch (filterRange) {
                    case 'lessThan300':
                        setIsLessThanClicked(true)
                        return cost < 300;
                    case 'between300And600':
                        setIsBetweenClicked(true)
                        return cost >= 300 && cost <= 600;
                    default:
                        return true;
                }
            })
        })
    }


    return (
        <div className='ml-2 mt-4 mr-2 sm:ml-20 sm:mr-20 sm:mt-10 sm:mb-10'>
            <div className='flex flex-row mb-4 flex-wrap justify-between '>
                {isfastDeliveryClicked ?
                    <button onClick={() => {
                        const tempArr = data.filter((el) => {
                            return el.info.sla.deliveryTime >= 30
                        })
                        setTemp((prev) => {
                            return [...prev,...tempArr]
                        })
                        setIsFastDeliveryClicked(false)
                    }} className='sm:p-2 border border-gray-400 w-1/3 sm:w-2/12 mt-2 p-1 shadow-sm sm:ml-1 rounded-sm sm:rounded-xl bg-gray-700 text-gray-200'>
                        Fast Delivery
                    </button>
                    : <button onClick={handleFastDelivery} className='sm:w-2/12 p-1 mt-2 sm:p-2 w-1/3 border border-gray-400 shadow-sm sm:ml-1 rounded-sm sm:rounded-xl text-gray-600'>
                        Fast Delivery
                    </button>
                }
                {isRatingsClicked ?
                    <button onClick={() => {
                        const tempArr = data.filter((el) => {
                            return el.info.avgRating < 4 
                        })
                        setTemp((prev) => {
                            return [...prev,...tempArr]
                        })
                        setIsRatingsClicked(false)
                    }} className='sm:p-2 border border-gray-400 w-1/3 sm:w-2/12 mt-2 p-1 shadow-sm sm:ml-1 rounded-sm sm:rounded-xl bg-gray-700 text-gray-200'>
                        Ratings 4.0+
                    </button>
                    : <button onClick={handleRatings} className='sm:w-2/12 p-1 mt-2 sm:p-2 w-1/3 border border-gray-400 shadow-sm sm:ml-1 rounded-sm sm:rounded-xl text-gray-600'>
                        Ratings 4.0+
                    </button>
                }
                {isBetweenClicked ?
                    <button onClick={() => {
                        const tempArr = data.filter((el) => {
                            const costString = el.info.costForTwo;
                            const cost = parseInt(costString.match(/\d+/)[0]);
                            return cost<300 || cost>600
                        })
                        setTemp((prev) => {
                            return [...prev,...tempArr]
                        })
                        setIsBetweenClicked(false)
                    }} className='sm:p-2 border border-gray-400 w-1/3 sm:w-2/12 mt-2 p-1 shadow-sm sm:ml-1 rounded-sm sm:rounded-xl bg-gray-700 text-gray-200'>
                        Rs 300 -Rs 600
                    </button>
                    :
                    <button onClick={() => handleCostForTwo('between300And600')} className='sm:w-2/12 p-1 mt-2 sm:p-2 w-1/3 border border-gray-400 shadow-sm sm:ml-1 rounded-sm sm:rounded-xl text-gray-600'>
                        Rs 300 -Rs 600
                    </button>
                }
                {isLessThanClicked ?
                    <button onClick={() => {
                        setTemp((prev) => {
                            const temparr = data.filter((el) => {
                                const costString = el.info.costForTwo;
                                const cost = parseInt(costString.match(/\d+/)[0]);
                                return cost >= 300
                            })
                            return [...prev,...temparr]
                        })
                        setIsLessThanClicked(false)
                    }} className='sm:p-2 border border-gray-400 w-1/3 sm:w-2/12 mt-2 p-1 shadow-sm sm:ml-1 rounded-sm sm:rounded-xl bg-gray-700 text-gray-200'>
                        Less than Rs. 300
                    </button>
                    :
                    <button onClick={() => handleCostForTwo('lessThan300')} className='sm:w-2/12 p-1 mt-2 sm:p-2 w-1/3 border border-gray-400 shadow-sm sm:ml-1 rounded-sm sm:rounded-xl text-gray-600'>
                        Less than Rs. 300
                    </button>
                }

            </div>
            {(temp && temp[0]) ? <>
                {temp.map((el) => {
                    return (
                        <Link to={`/restaurant/${el.info.id}`}>
                            <div className='inline-block w-45p sm:w-60 mb-4 sm:ml-2 sm:mb-6'>
                                <div key={el.info.id} className='max-w-60 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                                    <img className="rounded-t-lg w-full sm:min-w-60 max-h-40" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKlb3BURO2FSGiYwgaPdjYeYcO7FxWWz1ZX2ugJ2SnWA&s" alt="restaurant" />
                                    <h3 className='font-bold truncate pl-2 pb-1 pr-2'>{el.info.name}</h3>
                                    <div className='flex flex-row font-bold pl-2 pb-1 pr-2'>
                                        <span>
                                            <img className='max-h-5 sm:max-h-6' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEWklEQVR4nO1a62tcVRA/ra/6FqGiFSkoahERsf0gmmbOTdIStdoPcmZu00JANOBfICISq2jFV2kRX/imtFrE1wdBNDuzMRaFCiJCFRWfUVufX3wkpl2Z3QZikt299549ezf1/uDCwt175vzmzJyZM3OMKVCgQIECBQoUKFCgLeh/b+MpwPEq4LgfhFz10d8cr7pi7LqTzZGGy/e444ExtoLPWMEvrVCl0QOMXwDTUzXFDC4xCxXRyMByYHwYhH5vRrrB8xswbltdpnPMQgHw+tOUuGWc9CA+yypowgptVfcxnYxuoaus0A+tIj6Pe4zbEvWajkPFLLJCd1mmQ6HIz1DCQWC63XQK3G53lBV6OjTxedziMZWdL/uKWQSMT7ab/AxreDxX/sC4OS/yM5Rway7kozKtVX/0mPw/wLTDCu0EoanMCtBvSw5yyOZw3HP1bpsezwre6WUFgl+t27vuhLYpwAo+5Ge2NNE16pZOj7e6vPEstQhPhd7TFvI9b7uzQehvz8nunqtUesVvTPxLFRlcAcD4oCf5ih5+Zo8bCV7tO64V3BKUvPvYHWsFf/Kc5Lfzxu/K8GL1ZT/F4n5gODqYAmyJ1vuvPt1Rd3zB4RDW1ToFCD3qNTmhKT0l1htfT30t2F+2BlQA7msovHYW2N4teK3G5qjkVva+M3Dumnc3nZEmTGkdQKNENELn6RjdglHN+vCRZucNEPowCHngwSXNEh9gfC2I8JnzEHy1iYtNBNkHgPHiBP79rAkMK7Sr2Ty6ZcP5LRccleOepv7HOKnhzIStNzRNmIBdV24RAGp5/S2tlh8JDSXNFoNEAps+BO7Ugqiv3P43+o+rFVSTy1ZLMa2GLVFv6rDH9IFPQbNvLF4GTO+nlxvABXpG40vSTuRwZBiPRtyF6eW5iyzj91lkZpGXtL6f6fyvEcSkRE8ZL8siSzfilXuHjjEhAIyfZiC/X0tnqYVVzwb0c3oF0EcmFKzQExlWZVdWeSD0UgaFbzOhYEt4fWp/FBrKKg+Ybk6t8FJ8TWtZz0qHLeOvaSbUKCvTPB/YXVrvfe8oXZDS/A8E8/9p6GEnxYb0jamnSMEt1cSGcRIY767XCNX6QXLzpwdMaEQjA8sT9/0YX55DqIRXgtAnc/+P+/TdnP8zvd5RJTFFtfmZbFU+A3Yn6Tdr3tx0om5QjULp4Xfbp7/RIzQwfZ1QAfebtnaABX9MZJaCn+spMU1SUyu54/NJwy4Ifdf2yxWRFjHb0AxNoKyD2qQxecAK3tcBCths8m2O0nP5kacdmbLMVpfKgenFPMgHj/mJURle7NsuS/wwHQLGe3Nf+XqpMjD9EpD8Aa04m05G16hbqjdGPFvn/zV3oSm9DLF2jzvdLBQAb1hRLWUx/enh53/oncEgVd52oe8td2ok7gbtCCfpK9b6e/iCLbvBI/LmaN9YvEw7PbWboO4mYLyx9psssDsz7/kVKFCgQIECBQoUMP8T/AsMrPqZYrw8mAAAAABJRU5ErkJggg==" alt='rating' />
                                        </span>
                                        <span className='mr-4 text-sm sm:text-lg'>
                                            {el.info.avgRating}
                                        </span>
                                        <span className='text-gray-900 text-sm sm:text-lg'>
                                            <li>{el.info.sla.deliveryTime} mins</li>
                                        </span>
                                    </div>
                                    <div className='truncate pl-2 pb-1 pr-2'>
                                        {(el.info.cuisines && el.info.cuisines[0]) ?
                                            <>
                                                {el.info.cuisines.map(el => {
                                                    return (
                                                        <span className='text-gray-600'>{el}, </span>
                                                    )
                                                })}
                                            </>
                                            : <></>}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </> : <></>}
        </div>
    )
}

export default Restaurant
