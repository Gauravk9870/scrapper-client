import ListPlus from "../assets/list-plus.svg";
import Facebook from "../assets/facebook.svg";
import Twitter from "../assets/twitter.svg";
import Linkedin from "../assets/linkedIn.svg";
import { data } from "../utils/data";
import ChevronLeft from "../assets/chevron-left.svg";
import ChevronRight from "../assets/chevron-right.svg";
import { useNavigate } from "react-router-dom";

const Table = () => {
  const navigate = useNavigate();

  const handleClick = (company) => {
    navigate(`/${company}`);
  };
  return (
    <div className="p-[5px]">
      <div className=" rounded-[4px] py-3 px-0 border border-[#ECECEC] bg-[#fff]">
        <div className="py-[10px] pl-[10px] pr-[15px] flex items-center gap-[10px]">
          <div className=" min-w-[98px]">
            <span className=" font-[500] text-xs text-[#334155]">
              0 selected
            </span>
          </div>

          <button className=" rounded-[3px] py-[5xp] px-[10px] flex items-center justify-center gap-[5px] border border-[#ECECEC] font-[500] text-[12px] leading-5 text-[#A2A2A2]">
            Delete
          </button>
          <button className="  rounded-[3px] py-[5xp] px-[10px] flex items-center justify-center gap-[5px] border border-[#ECECEC] font-[500] text-[12px] leading-5 text-[#A2A2A2]">
            <img src={ListPlus} alt="list-plus" />
            Export as CSV
          </button>
        </div>
        <div className=" w-full overflow-scroll md:h-[calc(100vh-232px)]">
          <table className=" w-full">
            <thead>
              <tr>
                <th className=" font-[600] text-[10.8px] leading-[16.2px] text-[#6B7280] uppercase p-[14.4px] bg-[#F9FAFB] text-left">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className=" border-[0.9px] border-[#D1D5DB] bg-[#F9FAFB]"
                  />
                </th>
                <th className=" font-[600] text-[10.8px] leading-[16.2px] text-[#6B7280] uppercase p-[14.4px] bg-[#F9FAFB] text-left"></th>
                <th className=" font-[600] text-[10.8px] leading-[16.2px] text-[#6B7280] uppercase p-[14.4px] bg-[#F9FAFB] text-left">
                  Company
                </th>
                <th className=" font-[600] text-[10.8px] leading-[16.2px] text-[#6B7280] uppercase p-[14.4px] bg-[#F9FAFB] text-left">
                  Social Profiles
                </th>
                <th className=" font-[600] text-[10.8px] leading-[16.2px] text-[#6B7280] uppercase p-[14.4px] bg-[#F9FAFB] text-left hidden sm:table-cell">
                  Description
                </th>
                <th className=" font-[600] text-[10.8px] leading-[16.2px] text-[#6B7280] uppercase p-[14.4px] bg-[#F9FAFB] text-left hidden md:table-cell">
                  Address
                </th>
                <th className=" font-[600] text-[10.8px] leading-[16.2px] text-[#6B7280] uppercase p-[14.4px] bg-[#F9FAFB] text-left hidden md:table-cell">
                  Phone no.
                </th>
                <th className=" font-[600] text-[10.8px] leading-[16.2px] text-[#6B7280] uppercase p-[14.4px] bg-[#F9FAFB] text-left hidden md:table-cell">
                  Email
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr
                  key={item.id}
                  className=" border cursor-pointer"
                  onClick={() => handleClick(item.name)}
                >
                  <td className=" p-[14.4px]">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      onClick={(e) => e.stopPropagation()}
                    />
                  </td>
                  <td className=" py-[9px] px-[4px]">
                    <img
                      src={item.logo}
                      alt={item.name}
                      className=" w-[25px] h-[25px] rounded-[5px] border object-cover"
                    />
                  </td>
                  <td className=" py-[14.4px] px-[7px] font-[400] text-[12.6px] leading-[15.25px] text-[#6C2BD9]">
                    {item.name}
                  </td>
                  <td className=" p-[14.4px] ">
                    <ul className=" w-full flex items-center gap-[10px]">
                      <li className=" cursor-pointer">
                        <img
                          src={Facebook}
                          alt="facebook"
                          className=" w-[15px] h-[15px]"
                        />
                      </li>
                      <li className=" cursor-pointer">
                        <img
                          src={Twitter}
                          alt="twitter"
                          className=" w-[15px] h-[15px]"
                        />
                      </li>
                      <li className=" cursor-pointer">
                        <img
                          src={Linkedin}
                          alt="linkedin"
                          className=" w-[15px] h-[15px]"
                        />
                      </li>
                    </ul>
                  </td>
                  <td className=" p-[14.4px] font-[400] text-[12.6px] leading-[15.25px] text-[#6B7280] hidden sm:table-cell">
                    Modernize workflows with Zoom's trusted collaboration tools:
                    including video...
                  </td>
                  <td className=" p-[14.4px] font-[400] text-[12.6px] leading-[15.25px] text-[#6B7280] hidden md:table-cell">
                    San Francisco, United States
                  </td>
                  <td className=" p-[14.4px] font-[400] text-[12.6px] leading-[15.25px] text-[#6C2BD9] hidden md:table-cell">
                    (573)-467-7494
                  </td>
                  <td className="p-[14.4px] font-[400] text-[12.6px] leading-[15.25px] text-[#6C2BD9] hidden md:table-cell">
                    Email
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className=" h-[65px] p-4 flex items-center gap-[10px] ">
          <div className="">
            <span className=" font-[400] text-[14px] leading-[21px] text-[#6B7280]">
              Showing <span className=" font-[600]"> 2-10 </span> of{" "}
              <span className=" font-[600]">1000</span>
            </span>
          </div>
          <div className=" border border-[#D1D5DB] rounded-[4px] flex items-center">
            <button className=" py-[6px] px-[12px]">
              <img src={ChevronLeft} alt="" />
            </button>
            <button className=" py-[6px] px-[12px] font-[500] text-[14px] leading-[21px] text-center text-[#6B7280] border  border-[#D1D5DB]">
              1
            </button>
            <button className="  py-[6px] px-[12px] font-[500] text-[14px] leading-[21px] text-center text-[#6B7280]  border  border-[#D1D5DB]">
              2
            </button>
            <button className=" py-[6px] px-[12px] font-[500] text-[14px] leading-[21px] text-center text-[#6B7280]  border  border-[#D1D5DB]">
              3
            </button>

            <button className=" py-[6px] px-[12px]">
              <img src={ChevronRight} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
