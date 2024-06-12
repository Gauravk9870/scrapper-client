import ListPlus from "../assets/list-plus.svg";
import Facebook from "../assets/facebook.svg";
import Twitter from "../assets/twitter.svg";
import Linkedin from "../assets/linkedIn.svg";
import ChevronLeft from "../assets/chevron-left.svg";
import ChevronRight from "../assets/chevron-right.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { saveAs } from "file-saver";
import toast from "react-hot-toast";
import axios from "axios";
import { config } from "../utils/config";
import Loader from "./Loader";

const Table = () => {
  const [data, setData] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleClick = (company) => {
    navigate(`/${company}`);
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedRows(data.map((item) => item._id));
    } else {
      setSelectedRows([]);
    }
  };

  const handleSelectRow = (id, e) => {
    if (e.target.checked) {
      setSelectedRows((prev) => [...prev, id]);
    } else {
      setSelectedRows((prev) => prev.filter((rowId) => rowId !== id));
    }
  };

  const convertToCSV = (data) => {
    const headers = Object.keys(data[0]).join(",");
    const rows = data
      .map((row) =>
        Object.values(row)
          .map((value) => (value === undefined ? "" : value))
          .join(",")
      )
      .join("\n");
    return `${headers}\n${rows}`;
  };

  const handleExport = () => {
    if (selectedRows.length === 0) {
      toast.error("Please select a row to export");
      return;
    }

    const selectedData = data.filter((item) => selectedRows.includes(item._id));
    const csvData = convertToCSV(selectedData);
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "data.csv");
    toast.success("Data exported successfully");
  };

  const handleDelete = async () => {
    if (selectedRows.length === 0) {
      toast.error("No rows selected for deletion");
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.delete(`${config.server}/api/scrape`, {
        data: { ids: selectedRows },
      });

      if (response.status !== 200) {
        throw new Error("Failed to delete rows");
      }

      toast.success(response.data.message);

      // Update the state to remove the deleted rows
      setSelectedRows([]);

      // Re-fetch the data
      await fetchData();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${config.server}/api/scrape`);
      setData(response.data);
      console.log("REsponse:", response.data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="p-[5px]">
        <div className=" w-full rounded-[4px] py-3 px-0 border border-[#ECECEC] bg-[#fff]">
          <div className="py-[10px] pl-[10px] pr-[15px] flex items-center gap-[10px]">
            <div className=" min-w-[98px]">
              <span className=" font-[500] text-xs text-[#334155]">
                {selectedRows.length} selected
              </span>
            </div>

            <button
              onClick={handleDelete}
              className=" rounded-[3px] py-[5xp] px-[10px] flex items-center justify-center gap-[5px] border border-[#ECECEC] font-[500] text-[12px] leading-5 text-[#A2A2A2]"
            >
              Delete
            </button>
            <button
              onClick={handleExport}
              className="  rounded-[3px] py-[5xp] px-[10px] flex items-center justify-center gap-[5px] border border-[#ECECEC] font-[500] text-[12px] leading-5 text-[#A2A2A2]"
            >
              <img src={ListPlus} alt="list-plus" />
              Export as CSV
            </button>
          </div>
          <div className=" w-full overflow-y-scroll md:h-[calc(100vh-232px)]">
            <table className=" w-full ">
              <thead>
                <tr>
                  <th className=" font-[600] text-[10.8px] leading-[16.2px] text-[#6B7280] uppercase p-[14.4px] bg-[#F9FAFB] text-left">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className=" border-[0.9px] border-[#D1D5DB] bg-[#F9FAFB]"
                      onChange={handleSelectAll}
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
                    key={item._id}
                    className=" border cursor-pointer"
                    onClick={() => handleClick(item._id)}
                  >
                    <td className=" p-[14.4px]">
                      <input
                        type="checkbox"
                        checked={selectedRows.includes(item._id)}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSelectRow(item._id, e);
                        }}
                      />
                    </td>
                    <td className=" py-[9px] px-[4px]">
                      <img
                        src={item.favicon}
                        alt={item.logo}
                        className=" w-[25px] h-[25px] rounded-[5px] border object-cover"
                      />
                    </td>
                    <td className=" py-[14.4px] px-[7px] font-[400] text-[12.6px] leading-[15.25px] text-[#6C2BD9]">
                      {item.title.split(" ").slice(0, 2).join(" ")}{" "}
                    </td>
                    <td className=" p-[14.4px] ">
                      <ul className=" w-full flex items-center gap-[10px]">
                        {item?.facebook && (
                          <li className=" cursor-pointer">
                            <a href={item?.facebook}>
                              <img
                                src={Facebook}
                                alt="facebook"
                                className=" w-[15px] h-[15px]"
                              />
                            </a>
                          </li>
                        )}
                        {item?.twitter && (
                          <li className=" cursor-pointer">
                            <a href={item?.twitter}>
                              {" "}
                              <img
                                src={Twitter}
                                alt="twitter"
                                className=" w-[15px] h-[15px]"
                              />
                            </a>
                          </li>
                        )}

                        {item?.linkedIn && (
                          <li className=" cursor-pointer">
                            <a href={item?.linkedIn}>
                              <img
                                src={Linkedin}
                                alt="linkedin"
                                className=" w-[15px] h-[15px]"
                              />
                            </a>
                          </li>
                        )}
                      </ul>
                    </td>
                    <td className=" p-[14.4px] font-[400] text-[12.6px] leading-[15.25px] text-[#6B7280] hidden sm:table-cell">
                      {item?.description.length > 100
                        ? item?.description.substring(0, 100) + "..."
                        : item?.description}{" "}
                    </td>
                    <td className=" p-[14.4px] font-[400] text-[12.6px] leading-[15.25px] text-[#6B7280] hidden md:table-cell">
                      {item?.addresses.length > 0
                        ? item?.addresses[0]
                        : "No Address"}
                    </td>
                    <td className=" p-[14.4px] font-[400] text-[12.6px] leading-[15.25px] text-[#6C2BD9] hidden md:table-cell">
                      {item?.phoneNumber
                        ? item?.phoneNumber
                        : "No Phone number"}
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
                Showing <span className=" font-[600]"> {data.length} </span> of{" "}
                <span className=" font-[600]"> {data.length}</span>
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
      {isLoading && <Loader />}
    </>
  );
};

export default Table;
