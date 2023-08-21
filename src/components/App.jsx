import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { fetchImage } from '../api';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMore } from './Button/Button';
import { Loader } from './Loader/Loader';
export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    loading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      this.setState({ loading: true });
      const { hits } = await fetchImage(query, page);

      this.setState({ loading: false });
      if (hits.length === 0) {
        toast.error('Nothing was found for your query');
        return;
      }
      const images = hits.map(({ id, webformatURL, largeImageURL, tags }) => ({
        id,
        webformatURL,
        largeImageURL,
        tags,
      }));

      this.setState(prevState => ({
        images: [...prevState.images, ...images],
      }));
    }
  }
  handleSubmit = evt => {
    const notify = () => toast.error('Hey! Enter a some query!');

    evt.preventDefault();
    const query = evt.target.elements.query.value;
    query.trim() === '' ? notify() : this.changeQuery(query);

    evt.target.reset();
  };
  changeQuery = newQuery => {
    if (newQuery !== this.state.query) {
      this.setState({ query: newQuery, images: [], page: 1 });
    }
  };
  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { loading, images } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />

        {images.length > 0 && <ImageGallery images={images} />}
        {loading && <Loader />}
        {images.length > 0 && !loading && (
          <LoadMore onClick={this.handleLoadMore} />
        )}
        <Toaster />
      </>
    );
  }
}
