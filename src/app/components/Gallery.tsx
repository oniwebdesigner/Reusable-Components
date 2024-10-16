import React from "react";
import Image from "next/image";

type GalleryProps = {
  title: string;
  images: string[];
};

const Gallery: React.FC<GalleryProps> = ({ title, images }) => {
  return (
    <div className="pt-28"> {/* Spacing to avoid navbar overlap */}
      <h2 className="text-center text-3xl font-bold">{title}</h2> {/* Title */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-20">
        {images.map((src, index) => (
          <div key={index} className="grid gap-4">
            <Image className="h-auto max-w-full rounded-lg" src={src} alt={`Gallery image ${index + 1}`} width={500} height={300} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
