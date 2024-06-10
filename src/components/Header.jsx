import Search from "../assets/search.svg";

const Header = () => {
  return (
    <header className=" w-full h-auto md:h-[82px] border flex items-center flex-col md:flex-row py-5 px-[15px] gap-[10px] bg-[#FFFFFF] border-b border-[#ECECEC]">
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
    </header>
  );
};

export default Header;
