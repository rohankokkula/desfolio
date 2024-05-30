import { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ isOpen, onClose, images, currentIndex, onNext, onPrevious }) => {
  const [isClosing, setIsClosing] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.body.style.overflow = 'unset';
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 500); // Duration of the close animation
  };

  if (!isOpen && !isClosing) return null;

  return createPortal(
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-85 ${isClosing ? 'modal-close' : 'modal-open'}`}>
      <div ref={modalRef} className="relative flex flex-col items-center p-2 md:p-4 lg:p-8 max-w-screen-lg w-full">
        <button
          onClick={onPrevious}
          className="absolute left-2 border border-[#ffffff40] top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-100 w-10 h-10 text-white p-2 rounded-full z-50"
        >
          &larr;
        </button>
        <div className="relative bg-black border border-[#ffffff40] p-2 rounded-lg shadow-lg">
          <button
            onClick={handleClose}
            className="absolute right-2 top-4 transform -translate-x-1/2 m-2 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center z-50"
          >
            &times;
          </button>
          <img src={images[currentIndex].src} alt={images[currentIndex].alt} className="rounded-lg max-h-[100vh] object-contain mx-auto" />
          <div className="mt-2 text-center">
            <p className="text-lg font-bold">{images[currentIndex].title}</p>
            <p className="text-sm">{images[currentIndex].subtitle}</p>
          </div>
        </div>
        <button
          onClick={onNext}
          className="absolute border border-[#ffffff40] right-2 top-1/2 transform -translate-y-1/2 bg-black w-10 h-10 bg-opacity-50 hover:bg-opacity-100 text-white p-2 rounded-full z-50"
        >
          &rarr;
        </button>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
