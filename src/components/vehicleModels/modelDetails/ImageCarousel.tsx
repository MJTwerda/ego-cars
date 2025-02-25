'use client';

import { useState, useEffect } from 'react';
import { ModelFeaturesI } from '../interfaces/models.interfaces';
import { Button, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Image from 'next/image';

const ITEMS_PER_VIEW_DESKTOP = 3;
const ITEMS_PER_VIEW_MOBILE = 1;

interface ImageCarouselI {
  modelFeatures: ModelFeaturesI[];
}

const ImageCarousel = ({ modelFeatures }: ImageCarouselI) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(ITEMS_PER_VIEW_DESKTOP);
  
  const totalItems = modelFeatures.length;
  const totalPages = Math.ceil(totalItems / itemsPerView);

  useEffect(() => {
    const updateItemsPerView = () => {
      setItemsPerView(window.innerWidth < 640 ? ITEMS_PER_VIEW_MOBILE : ITEMS_PER_VIEW_DESKTOP);
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);

    return () => {
      window.removeEventListener('resize', updateItemsPerView);
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerView) % totalItems);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - itemsPerView + totalItems) % totalItems);
  };

  const goToPage = (pageIndex: number) => {
    setCurrentIndex(pageIndex * itemsPerView);
  };

  return (
    <div className="relative w-full mx-auto mt-10 overflow-hidden">
      {/* Contenedor de imágenes */}
      <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${(currentIndex / itemsPerView) * 100}%)` }}>
        {modelFeatures.map((item, index) => {
          return (
            <div key={index} className="md:w-1/3 w-full flex-shrink-0 transition-opacity duration-300">
              <div className="bg-gray-200 p-4 h-80 flex flex-col">
                <Image 
                  src={item.image}
                  alt={item.name}
                  width={200}
                  height={200}
                  className="w-full h-48 object-cover rounded"
                />
                <h3 className="mt-4 text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Botón Anterior */}
      <IconButton
        onClick={prevSlide}
        className="absolute left-1 top-1/3 -translate-y-1/2 w-12 h-12 bg-gray-400 opacity-80 text-black hidden sm:flex items-center justify-center hover:bg-gray-600 transition rounded-md"
        data-testid='image_carousel_prev_button'
      >
        <ArrowBackIosIcon fontSize="small" />
      </IconButton>

      {/* Botón Siguiente */}
      <IconButton
        onClick={nextSlide}
        className="absolute right-1 top-1/3 -translate-y-1/2 w-12 h-12 bg-gray-400 opacity-80 text-black hidden sm:flex items-center justify-center hover:bg-gray-600 transition rounded-md"
        data-testid='image_carousel_next_button'
      >
        <ArrowForwardIosIcon fontSize="small" />
      </IconButton>

      {/* Puntos indicadores */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {Array.from({ length: totalPages }).map((_, pageIndex) => (
          <Button
            key={pageIndex}
            onClick={() => goToPage(pageIndex)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              Math.floor(currentIndex / itemsPerView) === pageIndex ? 'bg-gray-600 scale-110 w-8' : 'bg-gray-400'
            }`}
            data-testid={`image_carousel_indicator_${pageIndex}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
