import Gallery from "../components/Gallery";

const Home = () => {
  return (
    <div className="text-center">
      <h1 className='py-3 text-success'>Natural Pic</h1>
      <Gallery criteria={false} />
    </div>
  );
};
export default Home;
