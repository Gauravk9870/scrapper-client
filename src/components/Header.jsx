import { useState } from "react";
import Search from "../assets/search.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { config } from "../utils/config";
import Loader from "./Loader";

const Header = () => {
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === "/";

  const handleClick = async () => {
    if (!inputValue.trim()) {
      toast.error("Please enter a domain name");
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post(`${config.server}/api/scrape`, {
        url: inputValue,
      });
      console.log(response.data);
      toast.success(response.data.message);
      navigate(`/${response.data.data.id}`);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error fetching data");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <header className="bg-[#FFFFFF]">
        <div
          className={` w-full h-auto md:h-[82px] flex items-center flex-col md:flex-row py-5 px-[15px] gap-[10px]  ${
            isHomePage ? "border-b border-[#ECECEC]" : ""
          }`}
        >
          <div className="flex items-center  border border-[#E5E7EB] rounded-lg py-3 px-4 gap-2 bg-[#F9FAFB] w-full  md:max-w-[404px] md:w-[404px]">
            <img
              src={Search}
              alt="search-icon"
              className=" w-[18px] h-[18px]"
            />

            <input
              type="text"
              placeholder="Enter domain name"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="text-[#6B7280] text-sm bg-transparent focus:outline-none w-full "
            />
          </div>

          <button
            onClick={handleClick}
            className=" rounded-[5px] py-[10px] px-[15px] gap-2 bg-[#EDE5FF] text-sm text-center font-[500] text-[#6C2BD9] w-full md:w-auto"
          >
            Fetch & Save Details
          </button>
        </div>
      </header>
      {isLoading && <Loader />}
    </>
  );
};

export default Header;
