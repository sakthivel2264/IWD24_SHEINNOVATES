import { Link } from "react-router-dom";

const  Header = () => {

  const handleFAQ = () =>{
    window.location.href = "/FAQ"
  }

  return (
    <header className=" mx-64 py-8 w-full flex justify-between items-center text-white my-50">
      {/* Logo Section */}
      <div className="flex justify-center items-center text-2xl "><span className="py-2 text-2xl  font-bold bg-gradient-to-r from-yellow-300 to-orange-400 text-transparent bg-clip-text drop-shadow-lg" >She</span>Search</div>

      {/* Navigation section */}
      <ul className="flex justify-center items-center gap-20">
        <li className="text-white hover:text-purple-700  cursor-pointer drop-shadow-lg">
          About Us
        </li>
        <li className="text-white hover:text-purple-700  cursor-pointer drop-shadow-lg">
          Testimonials
        </li>
        <li className="text-white hover:text-purple-700  cursor-pointer drop-shadow-lg" onClick={handleFAQ}>
          FAQ
        </li>
      </ul>

      {/* Get Started button */}
      <Link to="/categories">
        <button className="bg-pink-600 text-white  text-xl px-3 py-2 rounded-2xl hover:bg-purple-950 drop-shadow-lg">
          Get Started
        </button>
      </Link>
    </header>
  );
};

export default Header;
