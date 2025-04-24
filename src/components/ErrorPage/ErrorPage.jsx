import { Link } from "react-router";
import image from "../../assets/404.jpg";
import Header from "../Header/Header";

const ErrorPage = () => {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      <Header></Header>

      <div className="flex-grow flex flex-col justify-center items-center gap-5">
        <img src={image} className="w-52 h-40 rounded-md object-cover" alt="Error Image" />

        <h3 className="text-xl text-red-500 font-semibold">404 - Page Not Found</h3>
        <p className="text-base font-normal text-gray-500">Oops! The page your'e looking for doesn't exist.</p>

        <Link
          to="/"
          className="w-auto h-10 px-10 bg-[#0EA106] text-white hover:bg-white hover:text-black hover:border hover:border-gray-300 transition-colors duration-300 text-base text-center rounded-full flex justify-center items-center"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
