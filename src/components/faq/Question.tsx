import React, { useState } from "react";
import images from "../images";

type Props = {
  title: string
  info: string
}

const Question:React.FC<Props> = ({ title, info }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="border-b border-[#EAEAEA] h-full flex-wrap basis-0 rounded-sm flex mb-6" onClick={() => setExpanded(!expanded)}>
      <p className="flex justify-between relative font-black text-[#000F24] items-center m-auto lg:h-[100px] h-12 w-full lg:px-6">
        <span className={`items-center capitalize lg:text-2xl text-[14px]  ${expanded && 'text-[#004DB3]'}`}>
          {title}
        </span>
        <img className="lg:w-auto w-4" onClick={() => setExpanded(!expanded)} src={expanded ? images.remove : images.add} alt='' />
      </p>
      {expanded && <p className="text-[#A1A1A1] font-medium relative lg:px-6 mb-8 capitalize lg:text-base text-[8px]">{info}</p>}
    </article>
  );
};

export default Question;
