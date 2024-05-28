import { useState } from 'react';
import Image from 'next/image';
import Modal from './Modal';

const ImageGrid = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedTag, setSelectedTag] = useState(null);

  const images = [
    { id: 1, src: '/images/intro.png', alt: 'Image 1', title: 'Title 1', subtitle: 'Subtitle 1', tag: 'Intro' },
    { id: 2, src: '/images/day2.png', alt: 'Image 2', title: 'Title 2', subtitle: 'Subtitle 2', tag: 'Mobile Screens' },
    { id: 3, src: '/images/day3.png', alt: 'Image 3', title: 'Title 3', subtitle: 'Subtitle 3', tag: 'Dashboard' },
    { id: 4, src: '/images/day4.png', alt: 'Image 4', title: 'Title 4', subtitle: 'Subtitle 4', tag: 'Graphic Design' },
    { id: 5, src: '/images/day5.png', alt: 'Image 5', title: 'Title 5', subtitle: 'Subtitle 5', tag: 'Video' },
    { id: 6, src: '/images/day6.png', alt: 'Image 6', title: 'Title 6', subtitle: 'Subtitle 6', tag: 'Concept' }
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

  const filterByTag = (tag) => {
    setSelectedTag(tag);
  };

  const filteredImages = selectedTag ? images.filter(image => image.tag === selectedTag) : images;

  return (
    <div className="min-h-screen p-4">
      <div className="mb-4 flex flex-wrap items-center justify-between">
        <p className="text-lg font-bold mb-2">Filter by Tag:</p>
        <div className="flex flex-wrap gap-2">
          <button
            className={`px-4 py-2 rounded-md ${selectedTag === null ? 'bg-gray-900 text-white' : 'bg-black hover:bg-gray-700'}`}
            onClick={() => filterByTag(null)}
          >
            All
          </button>
          {images.map(image => (
            <button
              key={image.tag}
              className={`px-4 py-2 rounded-md ${selectedTag === image.tag ? 'bg-gray-900 text-white' : 'bg-black hover:bg-gray-700'}`}
              onClick={() => filterByTag(image.tag)}
            >
              {image.tag}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {filteredImages.map((image, index) => (
          <div
            key={image.id}
            className="relative w-full h-[500px] cursor-pointer rounded-lg overflow-hidden"
            onClick={() => openModal(index)}
          >
            <div className="absolute bottom-0 left-0 bg-gradient-to-b from-transparent to-black p-4 w-full">
              <p className="text-white text-lg font-bold">{image.title}</p>
              <p className="text-white text-sm">{image.subtitle}</p>
            </div>
            <div className="absolute bottom-0 right-0 bg-gradient-to-b from-transparent to-black p-4">
              <p className="text-white text-sm">{image.tag}</p>
            </div>
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              className="transition-opacity duration-300 hover:opacity-45 rounded-lg"
            />
          </div>
        ))}
      </div>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          onClose={closeModal}
          imageSrc={filteredImages[currentImageIndex].src}
          imageAlt={filteredImages[currentImageIndex].alt}
          onNext={showNextImage}
          onPrevious={showPreviousImage}
        />
      )}
    </div>
  );
};

export default ImageGrid;
