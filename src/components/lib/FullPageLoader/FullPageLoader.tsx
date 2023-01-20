import Loader from '../Loader';

const FullPageLoader = () => {
  return (
    <div className="fixed top-0 left-0 z-[1000] grid h-screen w-screen place-items-center bg-black/50">
      <Loader />
    </div>
  );
};

export default FullPageLoader;
