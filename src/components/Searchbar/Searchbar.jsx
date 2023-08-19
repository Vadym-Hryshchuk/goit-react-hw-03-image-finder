import { Form, Header } from './Searchbar.styled';
import { FcSearch } from 'react-icons/fc';

export const Searchbar = ({ onSubmit }) => {
  return (
    <Header>
      <Form onSubmit={onSubmit}>
        <button type="submit">
          <FcSearch />
        </button>

        <input
          type="text"
          autoComplete="off"
          placeholder="Search images and photos"
          name="query"
        />
      </Form>
    </Header>
  );
};
