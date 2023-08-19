import styled from 'styled-components';

export const Header = styled.header`
  top: 0;
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 12px 24px;
  z-index: 1;
  background-color: #3f51b5;
`;
export const Form = styled.form`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;

  button {
    width: 48px;
    height: 48px;
    border: 0;
    opacity: 0.6;
    cursor: pointer;
    outline: none;
    &:hover {
      opacity: 1;
    }
    svg {
      width: 100%;
      height: 100%;
    }
  }

  input {
    font-size: 20px;
    border: none;
    outline: none;
    padding: 4px;

    &::placeholder {
      font: inherit;
      font-size: 18px;
    }
  }
`;
