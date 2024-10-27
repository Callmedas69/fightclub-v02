import React from "react";

const teamList = [
  {
    name: "Blackswan",
    position: "Co-Founder / COO",
    photo: "",
  },
  {
    name: "Mr-Green",
    position: "Co-Founder / COO",
    photo: "",
  },
  {
    name: "0xD",
    position: "Tech Lead",
    photo: "",
  },
  {
    name: "Barret",
    position: "A.I Alchemist",
    photo: "",
  },
  {
    name: "D Man",
    position: "Special Advisor",
    photo: "",
  },
];

const Team = () => {
  return (
    <div className="relative bg-indigo-900 py-20">
      <div className="flex flex-col mx-auto justify-center items-center text-white text-center w-[60%]">
        <div className="font-bold text-6xl">
          MEET THE <span className="text-orange-400">TEAM</span>
        </div>
        <div className="pt-5 w-[80%]">
          <p className="text-center text-xl">
            Trusted and dedicated members themselves, MrGreen & Blackswan come
            from the 350k strong Blockchain Whispers community. Both with
            several years of high-rank within the community we chosen by D Man.,
            the BCW Founder to lead the FIGHT!
          </p>
        </div>
        <div className="flex flex-row gap-5 py-10">
          {teamList.map((team, index) => (
            <div key={index}>
              <p className="font-semibold text-xl text-card">{team.name}</p>
              <p className="text-sm">{team.position}</p>
            </div>
          ))}
        </div>
        <div className="w-[80%]">
          <p className="text-center text-xl text-">
            The overall TTS team consists of 14 members covering Operations,
            Social Media, Marketing, and Community Development. We&#39;re always
            on the look out for extra help, so keep an eye on our TG for future
            opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
