"use client"

import { useState, useEffect, useRef } from 'react';

interface AccordionProps {
  index: number;
  title: string;
  description: string;
}

const AccordionItem = ({ index, title, description }: AccordionProps) => {
  const [isActive, setIsActive] = useState(false);
  const accordionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Handle clicks outside of accordion
    const handleClickOutside = (event: MouseEvent) => {
      if (accordionRef.current && !accordionRef.current.contains(event.target as Node)) {
        setIsActive(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setIsActive(!isActive);
  };

  return (
    <div
      ref={accordionRef}
      className={`accordion__item group ${
        isActive ? 'bg-background' : 'bg-background'
      } overflow-hidden w-full transition-all duration-500 mb-[30px] rounded-[45px] border border-dark shadow-[0px_5px_0px_#191a23]`}
      style={{
        height: isActive && contentRef.current 
          ? `${contentRef.current.scrollHeight + 160}px` 
          : '160px'
      }}
    >
      <button
        className="accordion__toggle w-full h-[160px] flex items-center justify-between p-[60px] cursor-pointer"
        id={`${title}-accordion-item-menu-button`}
        aria-expanded={isActive}
        aria-controls={`${title}-accordion-item-menu-content`}
        onClick={handleToggle}
      >
        <div className="flex items-center gap-[25px]">
          <span className="hidden sm:block sm:text-6xl">0{index}</span>
          {title}
        </div>
        <div className="bg-gray-900 w-[58px] h-[58px] flex justify-center items-center rounded-full border border-dark">
          <div
            className={`accordion__icon h-10 w-10 transition-transform duration-300 flex justify-center items-center relative ${
              isActive ? 'rotate-180 collapsed' : ''
            }`}
            aria-hidden="true"
          />
        </div>
      </button>
      <div
        ref={contentRef}
        id={`${title}-accordion-item-menu-content`}
        aria-labelledby={`${title}-accordion-item-menu-button`}
        className="accordion__content px-[60px]"
      >
        <div className="w-full h-[2px] bg-gray-900" />
        <p className="prose mb-4 mt-1 max-w-full pt-5 pb-[60px] transition-[height]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AccordionItem;