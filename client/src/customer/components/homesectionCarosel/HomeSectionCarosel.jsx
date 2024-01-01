import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeCard from '../homecard/HomeCard';
import Button from '@mui/material/Button';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const HomeSectionCarosel = ({ data, sectionName }) => {
    const [index, setIndex] = useState(0);

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        820: { items: 3 },
        1024: { items: 4 },
        1275: { items: 5.5 },
    };

    const items = data.slice(0, 10).map((item) => <HomeCard product={item} />);


    const syncActiveIndex = ({ item }) => {
        setIndex(item);
    };

    const slideNext = () => {
        setIndex(index + 1);
    };

    const slidePrev = () => {
        setIndex(index - 1);
    };

    return (
        <div className="border">
            <div className="relative p-5 ">
                <h2 className="text-2xl font-extrabold text-gray-800 py-5 flex mx-5 items-start">{sectionName}</h2>
                <AliceCarousel
                    items={items}
                    // disableButtonsControls
                    responsive={responsive}
                    disableDotsControls
                    activeIndex={index}
                    onSlideChanged={syncActiveIndex}
                />

                {index !== items.length - 5 && <Button 
                    onClick={slideNext} 
                    variant='content' 
                    className="z-50" 
                    sx={{ position: 'absolute', top: '8rem', right: 0, transform: 'translateX(50%) rotate(90deg)', bgcolor: 'white' }} 
                    arial-label="next"
                >
                    <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)' }} />
                </Button>}

                {index !==0 && <Button 
                    onClick={slidePrev} 
                    variant='content' 
                    className="z-50" 
                    sx={{ position: 'absolute', top: '8rem', left: 0, transform: 'translateX(-50%) rotate(-90deg)', bgcolor: 'white' }} 
                    arial-label="next"
                >
                    <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)' }} />
                </Button>}
            </div>
        </div>
    )
}

export default HomeSectionCarosel;