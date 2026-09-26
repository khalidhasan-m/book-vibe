import heroImg from "../../assets/hero_img.jpg"


import { Link } from "react-router";

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-[70vh] container mx-auto my-8 rounded-3xl">
        <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between">
          <img
            src={heroImg}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">
              Books to freshen up <br /> your bookshelf
            </h1>
            <Link to="/books" className="btn bg-[#23BE0A] text-white p-6 mt-6">
              View The List
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
