import { ModalImage } from 'components/Modal/Modal';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {
    isOpen: false,
  };

  openModal = () => {
    this.setState({ isOpen: true });
  };
  closeModal = () => {
    this.setState({ isOpen: false });
  };
  render() {
    const { image } = this.props;

    return (
      <>
        <img
          src={image.webformatURL}
          alt={image.tags}
          onClick={this.openModal}
        />
        <ModalImage onOpen={this.state.isOpen} onClose={this.closeModal}>
          <img src={image.largeImageURL} alt={image.tags} />
        </ModalImage>
      </>
    );
  }
}
