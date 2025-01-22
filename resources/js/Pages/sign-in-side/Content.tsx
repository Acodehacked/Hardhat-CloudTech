import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { motion, AnimatePresence } from "framer-motion";
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';

import { SitemarkIcon } from './CustomIcons';
import Sitemark from '@/Components/Common/Sitemark';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const items = [
  {
    icon: <SettingsSuggestRoundedIcon sx={{}} />,
    title: 'Adaptable Collaboration',
    description:
      'Our platform adapts seamlessly to your project management needs, enabling efficient teamwork and streamlining operations.',
  },
  {
    icon: <ConstructionRoundedIcon sx={{}} />,
    title: 'Robust Architecture',
    description:
      'Built on a strong foundation of reliability, our solution ensures consistent performance, making it a dependable choice for your business.',
  },
  {
    icon: <ThumbUpAltRoundedIcon sx={{}} />,
    title: 'Great user experience',
    description:
      'Integrate our product into your routine with an intuitive and easy-to-use interface.',
  },
  {
    icon: <AutoFixHighRoundedIcon sx={{}} />,
    title: 'Cutting-Edge Features',
    description:
      'Leverage innovative tools like task management, RFIs, and submittals to stay ahead in the construction industry.',
  },
  {
    icon: <AutoFixHighRoundedIcon sx={{}} />,
    title: 'Future-Ready Platform',
    description:
      'Built to evolve with your business, HardHatCloud supports growth and innovation, ensuring long-term success.',
  },
];

export default function Content() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <div
      className='flex flex-col border-zinc-600/10 border-[0.01rem] rounded-xl p-5 align-center gap-4 max-w-md bg-secondary-foreground text-white'
    >

      <div className="slider-container w-[400px] h-[400px] overflow-hidden">
        <AnimatePresence>
          {items.map((point, index) => {
            return (
              index === currentIndex && (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.6 }}
                  className="slide w-[400px] border-none"
                >
                  <h2>{point.title}</h2>
                  <p>{point.description}</p>
                </motion.div>
              )
            );
          })}
        </AnimatePresence>
      </div>
      <div className="flex text-zinc-500/40 items-center gap-2">
        <ChevronLeft className='p-1 cursor-pointer' size={34} onClick={()=>setCurrentIndex((current)=>current!=0 ? current-1 : 0)} />
        <span className=''>{currentIndex + 1} / {items.length}</span>
        <ChevronRight className='p-1 cursor-pointer' size={34} onClick={()=>setCurrentIndex((current)=>current!=items.length-1 ? current+1 : items.length-1)} />
      </div>
    </div>
  );
}
