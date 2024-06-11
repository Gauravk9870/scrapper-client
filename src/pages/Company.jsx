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

const Company = () => {
  return (
    <>
      <Header />
      <div className="p-[5px] flex flex-col gap-[5px]">
        <div className=" rounded-[5px] border border-[#ECECEC] p-5 flex gap-[25px] bg-[#ffffff]">
          <div className="p-[10px] md:w-[830px] flex gap-[30px] flex-col sm:flex-row">
            <img
              src={CompanyLogo}
              alt="company-log"
              className=" w-[152px] h-[152px] object-cover"
            />
            <div className=" w-full flex flex-col gap-[10px] ">
              <h1 className=" font-[600] text-[32px] leading-[38.4px] text-[#374151]">
                Netflix
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
                      Watch Netflix movies & TV shows online or stream right to
                      your smart TV, game console, PC, Mac, mobile, tablet and
                      more.
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
                <p className=" font-[400] text-[16px] leading-[24px] text-black">
                  netflix.com
                </p>
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
                  Watch Netflix movies & TV shows online or stream right to your
                  smart TV, game console, PC, Mac, mobile, tablet and more.{" "}
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
                  href="https://www.facebook.com/netflix"
                  className=" font-[400] text-[16px] leading-[24px] text-[#6C2BD9]"
                >
                  https://www.facebook.com/netflix
                </a>
              </div>

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
                  href="https://www.instagram.com/netflix"
                  className=" font-[400] text-[16px] leading-[24px] text-[#6C2BD9]"
                >
                  https://twitter.com/netflix{" "}
                </a>
              </div>

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
                  href="https://www.instagram.com/netflix"
                  className=" font-[400] text-[16px] leading-[24px] text-[#6C2BD9]"
                >
                  https://www.linkedin.com/company/netflix{" "}
                </a>
              </div>

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
                src={ScrrenshotPreview}
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
