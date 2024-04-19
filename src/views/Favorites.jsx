import Gallery from "../components/Gallery";

const Favorites = () => {
  return (
    <div className='text-center'>
      <h1  className='py-3 text-success'>Fotos favoritas</h1>
      <Gallery criteria={true} />
    </div>
  );
};
export default Favorites;
