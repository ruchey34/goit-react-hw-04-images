import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';
import PropTypes from 'prop-types';

const ImageGallery = ({ items, ...otherProps }) => {
  return (
    items && (
      <ul className={s.galleryList}>
        {items.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            item={webformatURL}
            largeImg={largeImageURL}
            {...otherProps}
          />
        ))}
      </ul>
    )
  );
};
export default ImageGallery;

ImageGallery.propTypes = {
  items: PropTypes.array,
};