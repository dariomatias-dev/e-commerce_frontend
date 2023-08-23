'use client';

import { useEffect, useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

const ScrollUpButton = () => {
  const [buttonVisible, setButtonVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const checkScroll = () => {
    if (window.scrollY > 300) setButtonVisible(true);
    else setButtonVisible(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);

    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`${
        buttonVisible ? 'fixed' : 'hidden'
      } bottom-6 right-6 rounded-full border border-gray-600 bg-black p-3 transition-all duration-300 hover:bg-zinc-950`}
    >
      <IoIosArrowUp className="h-6 w-6 text-white" />
    </button>
  );
};

export default ScrollUpButton;
