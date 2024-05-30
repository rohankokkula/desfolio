import { useState, useEffect } from 'react';
import Image from 'next/image';
import Modal from './Modal';

const ImageGrid = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedTag, setSelectedTag] = useState(null);
  const [images, setImages] = useState([]);
  const [flattenedImages, setFlattenedImages] = useState([]);

  useEffect(() => {
    fetch('/designs.json')
      .then((response) => response.json())
      .then((data) => {
        setImages(data);
        const flatImages = data.flatMap((item, index) =>
          item.images.map((img, imgIndex) => ({
            ...img, itemIndex: index, imgIndex, title: item.title, subtitle: item.subtitle
          }))
        );
        setFlattenedImages(flatImages);
      })
      .catch((error) => console.error('Error fetching images:', error));
  }, []);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % flattenedImages.length);
  };

  const showPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? flattenedImages.length - 1 : prevIndex - 1
    );
  };

  const filterByTag = (tag) => {
    setSelectedTag(tag);
  };

  const filteredImages = selectedTag ? images.filter(image => image.tag === selectedTag) : images;

  return (
    <div className="min-h-screen p-4">
    

      <div className="mb-4 flex items-center justify-center">
        <div className="flex flex-wrap gap-2">
          <button
            className={`px-4 py-2 rounded-md ${selectedTag === null ? 'bg-gray-900 text-white' : 'bg-black hover:bg-gray-700'}`}
            onClick={() => filterByTag(null)}
          >
            All
          </button>
          {[...new Set(images.map(image => image.tag))].map(tag => (
            <button
              key={tag}
              className={`px-4 py-2 rounded-md ${selectedTag === tag ? 'bg-gray-900 text-white' : 'bg-black hover:bg-gray-700'}`}
              onClick={() => filterByTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {filteredImages.map((image, index) => (
          <div
            key={image.id}
            className="relative w-full h-[500px] cursor-pointer rounded-lg overflow-hidden group"
            onClick={() => openModal(flattenedImages.findIndex(img => img.itemIndex === index))}
          >
           <div className="absolute inset-0 bg-gradient-to-b from-[#2f82e700] to-[#000000] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
<div className="absolute bottom-0 left-0  p-4 w-full">
              <p className="text-white text-lg font-bold">{image.title}</p>
              <p className="text-white text-sm">{image.subtitle}</p>
            </div>
            <div className="absolute bottom-0 right-0  p-4">
              <p className="text-white text-sm">{image.tag}</p>
            </div>
            <Image
              src={image.images[0].src}
              alt={image.images[0].alt}
              layout="fill"
              objectFit="cover"
              className="transition-opacity duration-300 hover:opacity-30 rounded-lg"
            />
          </div>
        ))}
      </div>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          onClose={closeModal}
          images={flattenedImages}
          currentIndex={currentImageIndex}
          onNext={showNextImage}
          onPrevious={showPreviousImage}
        />
      )}
    </div>
  );
};

export default ImageGrid;
