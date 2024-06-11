import Search from "../assets/search.svg";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const currentPath = location.pathname.slice(1);

  return (
    <header className="bg-[#FFFFFF]">
      <div
        className={` w-full h-auto md:h-[82px] flex items-center flex-col md:flex-row py-5 px-[15px] gap-[10px]  ${
          isHomePage ? "border-b border-[#ECECEC]" : ""
        }`}
      >
        <div className="flex items-center  border border-[#E5E7EB] rounded-lg py-3 px-4 gap-2 bg-[#F9FAFB] w-full  md:max-w-[404px] md:w-[404px]">
          <img src={Search} alt="search-icon" className=" w-[18px] h-[18px]" />

          <input
            type="text"
            placeholder="Enter domain name"
            className="text-[#6B7280] text-sm bg-transparent focus:outline-none w-full "
          />
        </div>

        <button className=" rounded-[5px] py-[10px] px-[15px] gap-2 bg-[#EDE5FF] text-sm text-center font-[500] text-[#6C2BD9] w-full md:w-auto">
          Fetch & Save Details
        </button>
      </div>
      {!isHomePage && (
        <nav className=" flex items-center pt-0 pr-[10px] pb-[10px] pl-[10px]">
          <div className=" py-[5px] px-[20px] flex items-center gap-4">
            <Link to="/" className=" font-[500] text-sm text-[#374151]">
              Home
            </Link>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.293 15.207C7.10553 15.0195 7.00021 14.7652 7.00021 14.5C7.00021 14.2348 7.10553 13.9805 7.293 13.793L10.586 10.5L7.293 7.207C7.11084 7.01839 7.01005 6.76579 7.01233 6.50359C7.0146 6.2414 7.11977 5.99058 7.30518 5.80518C7.49059 5.61977 7.7414 5.5146 8.0036 5.51232C8.2658 5.51004 8.5184 5.61084 8.707 5.793L12.707 9.793C12.8945 9.98052 12.9998 10.2348 12.9998 10.5C12.9998 10.7652 12.8945 11.0195 12.707 11.207L8.707 15.207C8.51947 15.3945 8.26516 15.4998 8 15.4998C7.73484 15.4998 7.48053 15.3945 7.293 15.207Z"
                fill="#9CA3AF"
              />
            </svg>
            <Link
              to={`/${currentPath}`}
              className=" font-[500] text-sm text-[#374151]"
            >
              {currentPath}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
