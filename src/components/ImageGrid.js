import { useState } from 'react';
import Image from 'next/image';
import Modal from './Modal';

const ImageGrid = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    { id: 1, src: '/images/day1.png', alt: 'Image 1', title: 'Title 1' },
    { id: 2, src: '/images/day2.png', alt: 'Image 2', title: 'Title 2' },
    { id: 3, src: '/images/day3.png', alt: 'Image 3', title: 'Title 3' },
    { id: 4, src: '/images/day4.png', alt: 'Image 4', title: 'Title 4' },
    { id: 5, src: '/images/day5.png', alt: 'Image 5', title: 'Title 5' },
    { id: 6, src: '/images/day6.png', alt: 'Image 6', title: 'Title 6' }
  ];

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-x-2 gap-y-4 p-4">
      {images.map((image, index) => (
        <div
          key={image.id}
          className="relative w-full h-[420px] cursor-pointer overflow-hidden rounded-lg"
          onClick={() => openModal(index)}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <p className="text-white text-center">{image.title}</p>
          </div>
          <Image
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
            className="transition-opacity duration-300 hover:opacity-75 rounded-lg"
          />
        </div>
      ))}
      {isOpen && (
        <Modal
          isOpen={isOpen}
          onClose={closeModal}
          imageSrc={images[currentImageIndex].src}
          imageAlt={images[currentImageIndex].alt}
          onNext={showNextImage}
          onPrevious={showPreviousImage}
        />
      )}
    </div>
  );
};

export default ImageGrid;
