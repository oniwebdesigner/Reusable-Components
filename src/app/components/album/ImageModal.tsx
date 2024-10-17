'use client';
import React from 'react';

type ImageModalProps = {
  isOpen: boolean;
  imageUrl: string;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  caption?: string; // Optional prop for image caption
  altText?: string; // Optional prop for alt text
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  imageUrl,
  onClose,
  onNext,
  onPrev,
  caption,
  altText = 'Modal Image', // Default alt text
}) => {
  if (!isOpen) return null; // Return null if the modal is not open

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="relative w-screen h-screen flex justify-center items-center">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-white text-3xl">✖</button>
        
        {/* Modal Image */}
        <img
          src={imageUrl}
          className="max-w-full max-h-full object-contain"
          alt={altText}
          width={1000}
          height={1000}
        />

        {/* Navigation Buttons */}
        <button onClick={onPrev} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl">❮</button>
        <button onClick={onNext} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl">❯</button>
        
        {/* Optional Image Caption */}
        {caption && (
          <div className="absolute bottom-8 text-white text-xl">
            {caption}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageModal;
