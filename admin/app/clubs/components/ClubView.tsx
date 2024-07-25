"use client";

import React from 'react';

interface Member {
  name: string;
  username: string;
  isAdmin: boolean;
  avatarSrc: string;
}

interface ClubViewProps {
  clubName: string;
  sport: string;
  minMembers: number;
  maxMembers: number;
  admins: string[];
  description: string;
  members: Member[];
}

const ClubView: React.FC<ClubViewProps> = ({
  clubName,
  sport,
  minMembers,
  maxMembers,
  admins = [],
  description,
  members = [],
}) => {
  return (
    <main className="flex flex-col p-5 bg-white rounded-xl shadow-sm max-w-[900px] mx-auto">
      <header className="flex gap-5 justify-center text-xl font-semibold text-center text-zinc-900 max-md:flex-wrap max-md:pl-5 max-md:max-w-full">
        <h1>{clubName}</h1>
      </header>
      <section className="mt-8 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col max-md:mt-2.5">
              <div className="flex text-xs font-semibold">
                <div className="px-2.5 py-2.5 bg-white rounded-md text-zinc-900 max-md:pr-5">Club Name</div>
                <div className="px-2.5 py-2.5 whitespace-nowrap bg-white rounded-md text-zinc-500 max-md:pr-5">{sport}</div>
              </div>
              <div className="flex text-xs font-semibold">
                <div className="px-2.5 py-2.5 bg-white rounded-md text-zinc-900 max-md:pr-5">Members (min)</div>
                <div className="px-2.5 py-2.5 bg-white rounded-md text-zinc-500 max-md:pr-5">{minMembers} (total)</div>
              </div>
              <div className="flex text-xs font-semibold">
                <div className="px-2.5 py-2.5 bg-white rounded-md text-zinc-900">Members (max)</div>
                <div className="px-2.5 py-2.5 whitespace-nowrap bg-white rounded-md text-zinc-500 max-md:pr-5">{maxMembers}</div>
              </div>
              <div className="flex items-start py-1 text-xs font-semibold whitespace-nowrap">
                <div className="px-2.5 py-2.5 bg-white rounded-md text-zinc-900 max-md:pr-5">Admin</div>
                <div className="flex flex-col justify-center items-start px-2.5 mt-1.5 bg-white rounded-md text-zinc-500 max-md:pr-5">
                  {admins.length > 0 ? (
                    admins.map((admin, index) => (
                      <div key={index} className={index > 0 ? "mt-2.5" : ""}>{admin}</div>
                    ))
                  ) : (
                    <div>No admins available</div>
                  )}
                </div>
              </div>
              <div className="flex items-start py-1 text-xs font-semibold">
                <div className="px-2.5 py-2.5 whitespace-nowrap bg-white rounded-md text-zinc-900 max-md:pr-5">Description:</div>
                <div className="px-2.5 mt-1.5 bg-white rounded-md text-zinc-500">{description}</div>
              </div>
              <div className="flex justify-center items-center px-16 py-2.5 mt-8 bg-white rounded-md border border-solid border-zinc-100 max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c1368f9f1ce59851b8f72513e540d5627b76234301a01182a0ada3978372072?apiKey=fa090b16b04649b4a5024c30e95337f0&&apiKey=fa090b16b04649b4a5024c30e95337f0"
                  className="w-3.5 aspect-[0.88] fill-indigo-400"
                  alt="Some Icon"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[53%] max-md:ml-0 max-md:w-full max-h-[500px] overflow-y-auto">
            <div className="flex flex-col grow self-stretch px-2.5 pt-5 pb-2.5 w-full font-semibold bg-white rounded-xl border border-solid border-zinc-100 max-md:mt-2.5">
              {members.map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center px-4 py-3 mt-4 rounded-xl border border-solid backdrop-blur-[10px] border-stone-300"
                >
                  <div className="flex gap-4 items-center">
                    <img
                      loading="lazy"
                      src={member.avatarSrc}
                      className="shrink-0 aspect-square w-[50px] h-[50px] rounded-full"
                      alt={`${member.name}'s avatar`}
                    />
                    <div className="flex flex-col flex-1">
                      <div className="text-base tracking-tight leading-5 text-zinc-900">{member.name}</div>
                      <div className="text-xs text-zinc-500 truncate">{member.username}</div>
                    </div>
                    <div className={`text-xs ${member.isAdmin ? 'text-zinc-900' : 'text-zinc-500'}`}>
                      {member.isAdmin ? 'Admin' : 'Member'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ClubView;
