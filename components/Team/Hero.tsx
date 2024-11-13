"use client"
import GradualSpacing from "../farmui/GradualSpacing";


export const Hero = ({isInView}:{isInView:boolean}) => {
      return (
    <>
              <GradualSpacing
              textClassName="justify-start"
              visiblity={isInView}
              className="max-w-[400px] text-6xl font-normal tracking-tighter text-transparent text-white max-sm:text-4xl font-geist"
              text={"We believe file"}
              />
            <GradualSpacing
              textClassName="justify-start"
              visiblity={isInView}
              className="max-w-[400px] text-6xl font-normal tracking-tighter text-transparent text-white max-sm:text-4xl font-geist"
              text={"management should be"}
              />
              <GradualSpacing
              textClassName="justify-start"
              visiblity={isInView}
              className="max-w-[400px] text-6xl font-normal tracking-tighter text-transparent text-white max-sm:text-4xl font-geist"
              text={"universal"}
              />
      <p className="sm:break-words animation-delay-2 fade-in-heading text-white/50 mt-10">
        Your priceless personal data shouldn&apos;t be stuck in a device
        ecosystem. It should be OS agnostic,
      </p>
      <p className="sm:break-words animation-delay-2 fade-in-heading text-white/50">
        permanent and owned by you. agnostic, permanent and owned by you.
      </p>

      <p className="sm:break-words animation-delay-2 fade-in-heading text-white/50 mt-10">
        The data we create daily is our legacy—that will long outlive us. Open
        source technology is
      </p>

      <p className="sm:break-words animation-delay-2 fade-in-heading text-white/50">
        the only way to ensure we retain absolute control over the files that
        define our lives, at
      </p>

      <p className="sm:break-words animation-delay-2 fade-in-heading text-white/50">
        unlimited scale
      </p>
    </>
  );
};
