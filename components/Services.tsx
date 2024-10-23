import { servicesData } from "@/data/service";
import Container from "./Container";
import Topic from "./Topic";
import Link from "next/link";

function Services() {
  return (
    <div>
      <Container>
        <div
          className="relative flex flex-col items-center md:flex-row mt-20 "
          id="services"
        >
          <Topic
            title="Our Services"
            description="Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation"
          ></Topic>
        </div>

        <div className="flex-row items-center py-5">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
            {servicesData.map(
              ({ background, name1, name2, arrow, link, image }) => (
                <div className={`h-[310px] p-12 bg-zinc-100 dark:bg-background rounded-[45px] border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#8686f01f_inset] border   justify-between items-center flex text-black dark:text-white`}>
                  <div className="flex-col justify-center items-start gap-[93px] inline-flex">
                    <div className="flex-col justify-start items-start flex">
                      <div className="px-[7px] rounded-[7px] flex-col justify-start items-start gap-2.5 flex">
                        <div className=" text-3xl font-medium">{name1}</div>
                      </div>
                      <div className="px-[7px]  rounded-[7px] flex-col justify-start items-start gap-2.5 flex">
                        <div className="text-3xl font-medium">{name2}</div>
                      </div>
                    </div>
                    <Link
                      className="justify-start items-center gap-[15px] inline-flex"
                      href={link}
                    >
                      <div className="w-[41px] h-[41px] relative ">
                        <img
                          className="w-[41px] h-[41px] left-0 top-0 absolute "
                          src={arrow}
                        />
                      </div>
                      <div className="text-xl font-normal leading-7">
                        Learn more
                      </div>
                    </Link>
                  </div>
                  <div className="w-[210px] h-[170px] pt-0.5 pb-[1.95px] justify-center items-center flex">
                    <img className="hidden md:block invert" src={image} />
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        <div className="flex-row items-center my-6 p-14 bg-gray-900 rounded-[45px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="justify-start items-center gap-[275px] flex">
              <div className="flex-col justify-start items-start gap-[26px] inline-flex text-white">
                <div className="text-3xl font-medium">
                  Let’s make things happen
                </div>
                <div className="text-lg font-normal">
                  Contact us today to learn more about how our digital marketing
                  services can help your business grow and succeed online.
                </div>
                <Link
                  href="/"
                  className="px-[35px] py-5 bg- text-white hover:border:1px_solid_rgba(255,255,255,.1)] hover:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] border rounded-[14px] justify-start items-start gap-2.5 inline-flex"
                >
                  <div className="text-center text-xl font-normal leading-7">
                    Get your free proposal
                  </div>
                </Link>
              </div>
            </div>
            <div className="hidden md:grid justify-items-center -m-20 invert ">
              <img src="/services/Illustration.svg" width="50%" alt="cat"  />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Services;
