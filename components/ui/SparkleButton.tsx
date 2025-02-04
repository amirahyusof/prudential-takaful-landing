import React, { useEffect, useMemo, useState, useRef } from 'react';
import Link from 'next/link';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { 
  type Container, 
  type ISourceOptions 
} from "@tsparticles/engine";
import { motion, useTime, useTransform } from "framer-motion";

const SparkleButton = () => {
  const [init, setInit] = useState(false);
  const [showParticles, setShowParticles] = useState(false);
  const particlesContainerRef = useRef<Container | null>(null);

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
    if (!container) return;
    particlesContainerRef.current = container;
  };

  const options: ISourceOptions = useMemo(() => ({
    fullScreen: { enable: false },
    background: { color: { value: "transparent" } },
    particles: {
      number: { value: 10 },
      density: {
        enable: true,
        width: 400,
        height: 400
      },
      color: { value: "#ffffff" },
      shape: {
        type: "star",
        options: {
          star: {
            sides: 5
          }
        }
      },
      opacity: {
        value: { min: 0.3, max: 0.8 },
        animation: {
          enable: true,
          speed: 0.5,
          minimumValue: 0.1
        }
      },
      size: {
        value: { min: 0.5, max: 4.5 }, 
        random: {
          enable: true,
          minimumValue: 0.5
        }
      },
      position: { 
        x: 100, y: 100
      },
      move: {
        enable: true,
        speed: { min: 1, max: 3 },
        direction: "top",
        outModes: {
          default: "out",
        },
        noise: {
          enable: true,
          delay: {
            random: {
              enable: true,
              minimumValue: 0,
              maximumValue: 0.001
            },
            value: 0.001
          }
        }
      }
    },
    detectRetina: true,
    interactivity: {
      events: {
        onHover: {
          enable: false
        }
      }
    }
  }), []);

  return (
    <div 
      className="relative inline-block group"
      onMouseEnter={() => setShowParticles(true)}
      onMouseLeave={() => setShowParticles(false)}
    >
      {init && showParticles && (
        <Particles
          id="tsparticles"
          className="absolute -inset-[100px] z-0 pointer-events-none"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      )}
      <button 
        className={`
          relative z-10 px-6 py-2 rounded-xl 
          bg-red-700 
          text-white font-bold 
          overflow-hidden
        `}
      >
        <Link href="#" className="text-xl font-bold">Dapatkan Quote Percuma</Link>
      </button>
      <motion.div 
        className="absolute -inset-[1px] rounded-xl"
        style={{
          background: rotatingBg
        }}
      />
    </div>
  );
};

export default SparkleButton;

