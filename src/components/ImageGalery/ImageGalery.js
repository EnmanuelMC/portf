import React from 'react';
import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './ImageGalery.css';

const ImageGalery = (props) => {
  const imageList = props?.images?.map((image) => {
    return {
      original: image,
      thumbnail: image,
    };
  });
  return (
    <div>
      <Gallery items={imageList} showBullets showThumbnails={true} />
    </div>
  );
};

export default ImageGalery;
