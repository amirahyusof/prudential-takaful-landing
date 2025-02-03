import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { motion, useTime, useTransform } from "framer-motion";
import Particles, {initParticlesEngine} from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";

const ParticleButton = () => {
  const [init, setInit] = useState(false);
  const [showParticles, setShowParticles] = useState(false);
  
  const time = useTime();
  const rotate = useTransform(time, [0, 3000], [0, 360], {
    clamp: false
  });
  
  const rotatingBg = useTransform(rotate, (r) => {
    return `conic-gradient(from ${r}deg, black 0%, white 0%, #f00 50%, #f00 100%)`;
  });

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: {enable: false},
      background: {
        color: {
          value: "black",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 40,
          enable: true,
          opacity: 0.4,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.bounce,
          },
          random: true,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 30,
        },
        opacity: {
          value: 0.3,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  return (
    <div 
      className='h-[50px] w-[300px] relative flex items-center justify-center mx-auto overflow-hidden'
      onMouseEnter={() => setShowParticles(true)}
      onMouseLeave={() => setShowParticles(false)}
    >
      {init && showParticles && (
        <Particles
          id="tsparticles"
          className="absolute inset-0 z-0"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      )}
      <div className='relative bg-red-700 py-2 px-6 rounded-lg duration-200 z-10'>
        <Link href="#" className='text-xl font-bold text-white'>
          Dapatkan Quote Percuma
        </Link>
      </div>
      <motion.div
        className='absolute -inset-[1px] rounded-lg'
        style={{
          background: rotatingBg
        }} 
      />
    </div>
  );
};

export default ParticleButton;

