import { TeamMember } from '@/data/TeamMember';
import Image from 'next/image';

interface TeamSectionProps {
  teamData: TeamMember[];
}

/* eslint-disable @next/next/no-img-element */
export const TeamSection = ({ teamData }: TeamSectionProps) => {
  return (
    <>
      <h2 id="team" className="mb-2 mt-10 text-2xl font-bold leading-relaxed sm:mt-20">
        Meet the team
      </h2>
      <div className="flex-row items-center py-5" id="team">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4">
          {teamData.map((member: TeamMember) => (
            <div
              key={member.id}
              className="h-[331px]  px-[35px] py-10 bg-background rounded-[45px]  border border-zinc-900 flex-col justify-start items-start gap-2.5 inline-flex shadow-[0px_5px_0px_#191a23]"
            >
              <div className="flex-col justify-start items-start gap-7 flex ">
                <div className="self-stretch justify-start items-start inline-flex">
                  <div className="grow shrink basis-0 justify-start items-center gap-8 flex">
                    <div className="h-[102.82px] left-0 top-0 relative">
                      <Image src={member.profile} alt={member.name} height={100} width={100} className="rounded-full" />
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
    </>
  );
};
