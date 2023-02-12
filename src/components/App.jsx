import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Loader from './Loader';
import Button from './Button';

const API_KEY = '31254208-ff4dd95c44a4a79ef6d4abce7';
axios.defaults.baseURL = `https://pixabay.com/api/`;

export const App = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [allImages, setAllImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const isAllImages = allImages.length;

  useEffect(() => {
    if (!search) {
      return;
    }
    const fetchImg = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `?q=${search}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
        );
        setAllImages(prevState => [...prevState, ...response.data.hits]);
      } catch {
        alert(`Error`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchImg();
  }, [search, page]);

  const handleSubmit = (e, value) => {
    e.preventDefault();
    setSearch(value);
    setAllImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div>
      <Searchbar onSubmitForm={handleSubmit} />
      <ImageGallery items={allImages} />
      {isLoading && <Loader />}
      {isAllImages && <Button handleButtonClick={handleLoadMore} />}
    </div>
  );
};