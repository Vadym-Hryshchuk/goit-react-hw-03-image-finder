import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <Gallery>
      {images.map(img => (
        <li key={img.id}>
          <ImageGalleryItem image={img} />
        </li>
      ))}
    </Gallery>
  );
};
