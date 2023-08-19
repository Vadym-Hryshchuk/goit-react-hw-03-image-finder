import { TailSpin } from 'react-loader-spinner';
import { LoaderWraper } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderWraper>
      <TailSpin
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="2"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </LoaderWraper>
  );
};
