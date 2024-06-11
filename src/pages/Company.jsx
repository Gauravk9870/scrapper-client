import Header from "../components/Header";
import CompanyLogo from "../assets/Comp-Logo.png";
import PhoneCall from "../assets/phone-call.svg";
import Mail from "../assets/mail-search.svg";
import Globe from "../assets/globe.svg";
import Description from "../assets/description.svg";
import LocationMarker from "../assets/location-marker.svg";
import Facebook from "../assets/facebook-outline.svg";
import Instagram from "../assets/instagram-outline.svg";
import Twitter from "../assets/twitter-outline.svg";
import Linkedin from "../assets/linkedin-outline.svg";
import Camera from "../assets/camera.svg";
import ScrrenshotPreview from "../assets/scrrenshot-preview.png";
import { Link, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { config } from "../utils/config";
import axios from "axios";

// {
//   "_id": "6668b3a78ad586b3a286520b",
//   "url": "https://nextui.org/",
//   "title": "NextUI - Beautiful, fast and modern React UI Library",
//   "description": "Make beautiful websites regardless of your design experience.",
//   "facebook": "",
//   "twitter": "https://twitter.com/getnextui",
//   "screenshot": "https://res.cloudinary.com/dcrokdpjt/image/upload/v1718137768/mv7nwix2byh4pdh7s0y2.png",
//   "favicon": "https://nextui.org/favicon-32x32.png",
//   "createdAt": "2024-06-11T20:29:27.636Z",
//   "updatedAt": "2024-06-11T20:29:27.636Z",
//   "__v": 0
// }

const Company = () => {
  const { id } = useParams();
  const location = useLocation();
  const currentPath = location.pathname.slice(1);

  const [company, setCompany] = useState(null);

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const response = await axios.get(`${config.server}/api/scrape/${id}`);
        setCompany(response.data);
        console.log("Company:", response.data);
      } catch (error) {
        console.error("Failed to fetch company:", error);
      }
    };

    fetchCompany();
  }, [id]);

  return (
    <>
      <Header />
      <nav className=" flex items-center pt-0 pr-[10px] pb-[10px] pl-[10px] bg-[#ffffff]">
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
            {company?.title}
          </Link>
        </div>
      </nav>
      <div className="p-[5px] flex flex-col gap-[5px]">
        <div className=" rounded-[5px] border border-[#ECECEC] p-5 flex gap-[25px] bg-[#ffffff]">
          <div className="p-[10px] md:w-[830px] flex gap-[30px] flex-col sm:flex-row">
            <img
              src={company?.favicon}
              alt={"logo"}
              className=" w-[152px] h-[152px] object-cover"
            />
            <div className=" w-full flex flex-col gap-[10px] ">
              <h1 className=" font-[600] text-[32px] leading-[38.4px] text-[#374151]">
                {company?.title}
              </h1>
              <div className=" flex gap-[10px] md:gap-[50px] justify-between w-full flex-col md:flex-row">
                <div className="">
                  <div className=" flex gap-[5px]">
                    <img
                      src={Description}
                      alt="description"
                      className=" w-[25px] h-[25px]"
                    />
                    <span className=" font-[600] text-[14px] leading-[21px] text-[#64748B]">
                      Description
                    </span>
                  </div>
                  <div>
                    <p className=" font-[400] text-[16px] leading-[24px] text-[#000000] md:w-[327px]">
                      {company?.description.length > 100
                        ? company?.description.substring(0, 100) + "..."
                        : company?.description}{" "}
                    </p>
                  </div>
                </div>
                <div className=" border-r border-[#ECECEC]"></div>
                <div className="">
                  <div className=" flex flex-col gap-[20px]">
                    <div>
                      <h6 className=" flex gap-[5px]">
                        <img src={PhoneCall} alt="phone-call" />
                        <span className="font-[600] text-[14px] leading-[21px] text-[#64748B]">
                          Phone
                        </span>
                      </h6>
                      <p className=" font-[400] text-[16px] leading-[24px] text-black">
                        (573)-456-4644
                      </p>
                    </div>
                    <div>
                      <h6 className=" flex gap-[5px]">
                        <img src={Mail} alt="email" />
                        <span className="font-[600] text-[14px] leading-[21px] text-[#64748B]">
                          Email
                        </span>
                      </h6>
                      <p className=" font-[400] text-[16px] leading-[24px] text-black">
                        contact@netflix.com{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-[5px] flex-col md:flex-row">
          <div className="rounded-[5px] border border-[#ECECEC] p-5 flex gap-[5px] bg-[#ffffff] md:w-[438px] flex-col h-fit ">
            <h2 className=" font-[600] text-[18px] leading-[27px] text-black">
              Company Details
            </h2>

            <div className=" pt-[5px] pr-[35px] pb-[5px] pl-0 flex flex-col gap-[20px] ">
              <div>
                <h3 className=" flex gap-[5px]">
                  <img
                    src={Globe}
                    alt="website"
                    className="w-[25px] h-[25px] object-contain"
                  />
                  <span className="font-[600] text-[14px] leading-[21px] text-[#64748B]">
                    Website
                  </span>
                </h3>
                <a
                  href={company?.url}
                  className=" font-[400] text-[16px] leading-[24px] text-black"
                >
                  {company?.url}
                </a>
              </div>

              <div>
                <h3 className=" flex gap-[5px]">
                  <img
                    src={Description}
                    alt="description"
                    className="w-[25px] h-[25px] object-contain"
                  />
                  <span className="font-[600] text-[14px] leading-[21px] text-[#64748B]">
                    Description{" "}
                  </span>
                </h3>
                <p className=" font-[400] text-[16px] leading-[24px] text-black">
                  {company?.description}
                </p>
              </div>

              <div>
                <h3 className=" flex gap-[5px]">
                  <img
                    src={LocationMarker}
                    alt="email"
                    className="w-[25px] h-[25px] object-contain"
                  />
                  <span className="font-[600] text-[14px] leading-[21px] text-[#64748B]">
                    Email
                  </span>
                </h3>
                <p className=" font-[400] text-[16px] leading-[24px] text-black">
                  contact@netflix.com
                </p>
              </div>

              {company?.facebook && (
                <div>
                  <h3 className=" flex gap-[5px]">
                    <img
                      src={Facebook}
                      alt="facebook"
                      className="w-[25px] h-[25px] object-contain"
                    />
                    <span className="font-[600] text-[14px] leading-[21px] text-[#64748B]">
                      Facebook
                    </span>
                  </h3>
                  <a
                    href={company?.facebook}
                    className=" font-[400] text-[16px] leading-[24px] text-[#6C2BD9]"
                  >
                    {company?.facebook}
                  </a>
                </div>
              )}

              {company?.instagram && (
                <div>
                  <h3 className=" flex gap-[5px]">
                    <img
                      src={Instagram}
                      alt="instagram"
                      className="w-[25px] h-[25px] object-contain"
                    />
                    <span className="font-[600] text-[14px] leading-[21px] text-[#64748B]">
                      Instagram
                    </span>
                  </h3>
                  <a
                    href="https://www.instagram.com/netflix"
                    className=" font-[400] text-[16px] leading-[24px] text-[#6C2BD9]"
                  >
                    https://www.instagram.com/netflix{" "}
                  </a>
                </div>
              )}

              {company?.twitter && (
                <div>
                  <h3 className=" flex gap-[5px]">
                    <img
                      src={Twitter}
                      alt="twitter"
                      className="w-[25px] h-[25px] object-contain"
                    />
                    <span className="font-[600] text-[14px] leading-[21px] text-[#64748B]">
                      Twitter{" "}
                    </span>
                  </h3>
                  <a
                    href={company?.twitter}
                    className=" font-[400] text-[16px] leading-[24px] text-[#6C2BD9]"
                  >
                    {company?.twitter}
                  </a>
                </div>
              )}

              {company?.linkedin && (
                <div>
                  <h3 className=" flex gap-[5px]">
                    <img
                      src={Linkedin}
                      alt="linkedin"
                      className="w-[25px] h-[25px] object-contain"
                    />
                    <span className="font-[600] text-[14px] leading-[21px] text-[#64748B]">
                      Linkedin{" "}
                    </span>
                  </h3>
                  <a
                    href={company?.linkedin}
                    className=" font-[400] text-[16px] leading-[24px] text-[#6C2BD9]"
                  >
                    {company?.linkedin}
                  </a>
                </div>
              )}

              <div>
                <h3 className=" flex gap-[5px]">
                  <img
                    src={LocationMarker}
                    alt="address"
                    className="w-[25px] h-[25px] object-contain"
                  />
                  <span className="font-[600] text-[14px] leading-[21px] text-[#64748B]">
                    Address
                  </span>
                </h3>
                <p className=" font-[400] text-[16px] leading-[24px] text-[#000000]">
                  San Francisco, United States{" "}
                </p>
              </div>
            </div>
          </div>
          <div className=" bg-[#fff] rounded-[5px] border border-[#ECECEC] p-[30px] flex flex-col gap-[10px]">
            <div className=" flex py-0 px-[10px] gap-[10px] items-center">
              <img
                src={Camera}
                alt="screen-shot"
                className="w-[25px] h-[25px] object-contain"
              />

              <span className=" font-[600] text-[18px] leading-[27px] text-black">
                Screenshot of Webpage
              </span>
            </div>

            <div>
              <img
                src={company?.screenshot}
                alt="screen-shot"
                className=" w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Company;
