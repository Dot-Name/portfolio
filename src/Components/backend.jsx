<<<<<<< HEAD
import {
  FaCreditCard,
  FaDatabase,
  FaKey,
  FaLock,
  FaNetworkWired,
  FaServer,
  FaShieldAlt,
} from "react-icons/fa";
import SkillBadge from "./SkillBadge.jsx";

const skillGroups = [
  {
    number: "02",
    title: "Backend & data",
    skills: [
      {
        label: "Node.js",
        iconUrl: "https://cdn.simpleicons.org/nodedotjs/5FA04E",
        Icon: FaServer,
      },
      {
        label: "Express",
        iconUrl: "https://cdn.simpleicons.org/express/FFFFFF",
        Icon: FaServer,
      },
      {
        label: "MongoDB",
        iconUrl: "https://cdn.simpleicons.org/mongodb/47A248",
        Icon: FaDatabase,
      },
      {
        label: "Mongoose",
        iconUrl: "https://cdn.simpleicons.org/mongoose/880000",
        Icon: FaDatabase,
      },
      {
        label: "Sequelize",
        iconUrl: "https://cdn.simpleicons.org/sequelize/52B0E7",
        Icon: FaDatabase,
      },
    ],
  },
  {
    number: "03",
    title: "APIs & authentication",
    skills: [
      { label: "REST APIs", Icon: FaNetworkWired },
      { label: "JWT", Icon: FaKey },
      { label: "OAuth", Icon: FaLock },
      { label: "RBAC", Icon: FaShieldAlt },
    ],
  },
  {
    number: "04",
    title: "Integrations",
    skills: [
      {
        label: "Payments",
        iconUrl: "https://cdn.simpleicons.org/razorpay/0C2451",
        Icon: FaCreditCard,
      },
      {
        label: "Cloudinary",
        iconUrl: "https://cdn.simpleicons.org/cloudinary/3448C5",
        Icon: FaServer,
      },
    ],
  },
];

const Backend = () => (
  <>
    {skillGroups.map((group) => (
      <article
        key={group.number}
        className="border-t border-white/15 py-7 sm:py-9"
      >
        <div className="grid gap-5 sm:grid-cols-[0.7fr_1.3fr] sm:gap-10">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">
              {group.number}
            </p>
            <h3 className="mt-2 font-display text-2xl text-white sm:text-3xl">
              {group.title}
            </h3>
          </div>
          <ul
            aria-label={group.title}
            className="grid grid-cols-4 gap-1.5 sm:grid-cols-2 sm:gap-2.5"
          >
            {group.skills.map((skill) => (
              <SkillBadge key={skill.label} {...skill} />
            ))}
          </ul>
        </div>
      </article>
    ))}
  </>
);
=======
import React from 'react';
import { useInView } from 'react-intersection-observer';

const useScrollAnimation = (direction = 'right') => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const style = {
    transform: inView ? 'translateX(0)' : `translateX(${direction === 'left' ? '-100%' : '100%'})`,
    opacity: inView ? 1 : 0,
    transition: 'transform 0.8s ease-out, opacity 0.8s ease-out',
  };

  return { ref, style };
};

const Backend = () => {
  const nodeAnimation = useScrollAnimation('right');
  const expressAnimation = useScrollAnimation('left');
  const mongoAnimation = useScrollAnimation('right');
  const mongooseAnimation = useScrollAnimation('left');

  return (
    <div className='relative flex flex-col items-center justify-center w-full pb-10 mt-10 mb-10 text-left pt-28'>
      <h2 className='text-2xl text-center text-white md:text-4xl font-orbitron'>Backend Development</h2>

      {/* Main Container */}
      <div className='relative w-11/12 h-[600px] md:h-[1200px] mt-10'>
        {/* Centered Images */}
        <img 
          src={`${process.env.PUBLIC_URL}/Assets/path.png`} 
          alt="backend" 
          className="absolute w-10 transform -translate-x-1/2 rounded-lg left-1/2 top-16 md:w-16"
        />
        <img 
          src={`${process.env.PUBLIC_URL}/Assets/path.png`} 
          alt="backend" 
          className="absolute w-10 rounded-lg left-1/2 transform -translate-x-1/2 md:top-[33rem] md:w-16 top-[22rem]"
        />

        {/* Node.js Section */}
        <div ref={nodeAnimation.ref} style={nodeAnimation.style} className='absolute top-[13.5rem] md:top-[19rem] right-8 md:right-32'>
          <h2 className='text-xl text-right text-white md:text-center md:text-3xl font-orbitron'>Node.js</h2>
          <p className='hidden text-sm text-right text-white sm:hidden md:hidden lg:block md:text-center md:text-2xl font-saira'>
            Building scalable server-side <br />applications.
          </p>
        </div>

        {/* Express.js Section */}
        <div ref={expressAnimation.ref} style={expressAnimation.style} className='absolute top-[22.5rem] md:text-center md:left-32 md:top-[34rem]'>
          <h2 className='text-xl text-left text-white md:text-center md:text-3xl font-orbitron'>Express.js</h2>
          <p className='hidden text-2xl text-white sm:hidden md:hidden lg:block font-saira'>
            Expertise in creating <br />robust RESTful APIs.
          </p>
        </div>

        {/* MongoDB Section */}
        <div ref={mongoAnimation.ref} style={mongoAnimation.style} className='absolute md:text-center right-2 top-[31.5rem] md:right-32 md:top-[48rem]'>
          <h2 className='text-xl text-right text-white md:text-center md:text-3xl font-orbitron'>MongoDB</h2>
          <p className='hidden text-2xl text-white sm:hidden md:hidden lg:block font-saira'>
            Expert in MongoDB for <br />scalable apps.
          </p>
        </div>

        {/* Mongoose Section */}
        <div ref={mongooseAnimation.ref} style={mongooseAnimation.style} className='absolute top-[40.5rem] md:left-32 md:top-[63rem]'>
          <h2 className='text-xl text-left text-white md:text-center md:text-3xl font-orbitron'>Mongoose</h2>
          <p className='hidden text-2xl text-center sm:hidden text-white md:hidden lg:block font-saira'>
            Proficient in Mongoose <br />schema design.
          </p>
        </div>
      </div>
    </div>
  );
};
>>>>>>> origin/main

export default Backend;
