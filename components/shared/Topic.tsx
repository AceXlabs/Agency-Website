import React from 'react';

interface TopicProps {
  title: string;
  description: string;
}

const Topic: React.FC<TopicProps> = ({ title, description }) => {
  return (
    <div className="grid place-items-center gap-5 mb-10 md:flex">
      <h2 className="text-4xl sm:text-5xl  font-medium bg-lime  bg-gray-900 p-3 px-4 rounded-[20px]" >
        {title}
      </h2>
      <p className="text-xl font-normal text-center md:text-start lg:w-2/3">
        {description}
      </p>
    </div>
  );
};

export default Topic;