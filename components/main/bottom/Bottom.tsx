/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import Container from "../../shared/Container"

export const Bottom = () => {
    return (
        <Container>
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
    )
}