import Modal from 'components/Modal';
import { useState } from 'react';
import s from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ item, largeImg }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  console.log(item);
  console.log(largeImg);

  return (
    <>
      <li className={s.listItem}>
        <img
          src={item}
          alt=""
          className={s.itemImage}
          onClick={handleModalOpen}
          loading="lazy"
        />
        {isModalOpen && (
          <Modal image={largeImg} closeModal={handleModalClose} />
        )}
      </li>
    </>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  item: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired,
};