/* eslint-disable @next/next/no-img-element */
import { servicesData } from "@/data/service";
import Container from "../../shared/Container";
import Topic from "../../shared/Topic";

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

        <div className="flex-row items-start py-5">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
            {servicesData.map(
              ({ name1, name2,image,description },index) => (
                <div key={index} className={`h-[310px] p-12 bg-zinc-100 dark:bg-background rounded-[45px] border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#8686f01f_inset] border   justify-between items-start flex text-black dark:text-white`}>
                  <div className="flex-col justify-center items-start gap-[93px] inline-flex">
                    <div className="flex-col justify-start items-start flex">
                      <div className="px-[7px] rounded-[7px] flex-col justify-start items-start gap-2.5 flex">
                        <div className=" text-3xl font-medium">{name1}</div>
                      </div>
                      <div className="px-[7px]  rounded-[7px] flex-col justify-start items-start gap-2.5 flex">
                        <div className="text-3xl font-medium">{name2}</div>
                      </div>
                      <div className="px-[7px] mt-4 rounded-[7px] flex-col justify-start items-start gap-2.5 flex">
                        <div className="text-xl font-normal">{description}</div>
                      </div>
                      </div>
                  </div>
                  <div className="w-[210px] h-[170px] pt-0.5 pb-[1.95px] justify-center items-center flex">
                    <img className="hidden md:block invert" src={image} alt="image"/>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Services;
