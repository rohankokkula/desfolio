import { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ isOpen, onClose, imageSrc, imageAlt, onNext, onPrevious }) => {
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
      <div ref={modalRef} className="relative flex items-center">
        <button
          onClick={onPrevious}
          className="absolute left-2 bg-black bg-opacity-50 hover:bg-opacity-100 w-10 h-10 text-white p-2 rounded-full z-50"
        >
          &larr;
        </button>
        <div className="relative">
          <button
            onClick={handleClose}
            className="absolute top-0 right-0 m-4 w-10 h-10 bg-black  text-white rounded-full flex items-center justify-center z-50"
          >
            &times;
          </button>
          <img src={imageSrc} alt={imageAlt} className="rounded-lg max-h-screen" style={{ maxWidth: '100%', maxHeight: '100%' }} />
        </div>
        <button
          onClick={onNext}
          className="absolute right-2 bg-black w-10 h-10 bg-opacity-50 hover:bg-opacity-100 text-white p-2 rounded-full z-50"
        >
          &rarr;
        </button>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
