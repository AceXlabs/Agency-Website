/* eslint-disable @next/next/no-img-element */
"use client"
import { teamData } from "@/data/process";
import Container from "../../shared/Container";
import Topic from "../../shared/Topic";
import { useRouter } from "next/navigation";
import { TeamMember } from "@/data/TeamMember";


const TeamPage = () => {
  const router = useRouter();
  const homeTeamData = teamData.filter((x)=>x.id<=3);
  
  return (
    <Container>
      <div className="relative flex flex-col items-center md:flex-row pt-[8rem]">
        <Topic
          title="Team"
          description="Meet the skilled and experienced team behind our successful digital marketing strategies"
        />
      </div>

      <div className="flex-row items-center py-5" id="team">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4">
          {homeTeamData.map((member: TeamMember) => (
            <div
              key={member.id}
              className="h-[331px]  px-[35px] py-10 bg-background rounded-[45px]  border border-zinc-900 flex-col justify-start items-start gap-2.5 inline-flex shadow-[0px_5px_0px_#191a23]"
            >
              <div className="flex-col justify-start items-start gap-7 flex ">
                <div className="self-stretch justify-start items-start inline-flex">
                  <div className="grow shrink basis-0 justify-start items-center gap-8 flex">
                    <div className="h-[102.82px] left-0 top-0 relative">
                      <img
                        src={member.profile}
                        alt={member.name}
                        height={100}
                        width={100}
                        className="rounded-full"
                      />
                    </div>
                    <div className="flex-col justify-end items-start inline-flex">
                      <div className="text-lg font-normal">{member.title}</div>
                      <div className="text-xl font-medium">{member.name}</div>
                    </div>
                  </div>
                </div>
                <hr className="w-full border border-gray-800" />
                <p className="text-sm md:text-lg">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full justify-center md:justify-end items-center inline-flex mr-7">
        <button className="flex gap-2 justify-center items-center py-2 px-10 mt-5 text-lg tracking-tighter text-center bg-gradient-to-br rounded-xl ring-2 ring-offset-2 transition-all hover:ring-transparent group/button w-fit from-zinc-100 to-zinc-300 font-geist text-md text-zinc-900 ring-zinc-500/80 ring-offset-zinc-950 hover:scale-[1.02] active:scale-[0.98] active:ring-zinc-500/70"
        onClick={()=>{
          router.push("/team");
        }}
        >
          See All
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-0 group-hover/button:[animation-delay:.2s] group-hover/button:animate-shineButton rounded-[inherit] bg-[length:200%_100%] bg-[linear-gradient(110deg,transparent,35%,rgba(255,255,255,.7),75%,transparent)]"
          />
        </button>
      </div>
    </Container>
  );
};

export default TeamPage;
