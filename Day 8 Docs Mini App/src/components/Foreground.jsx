// import { useState } from "react";
import { useRef } from "react";
import Card from "./Card";

function Foreground() {
  const ref = useRef(null);
  const data = [
    {
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing.",
      fileSize: ".9mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now...", tagColor: "green" },
    },
    {
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing.",
      fileSize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Upload Now...", tagColor: "blue" },
    },
    {
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing.",
      fileSize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now...", tagColor: "green" },
    },
    {
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing.",
      fileSize: ".9mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now...", tagColor: "green" },
    },
  ];

  return (
    <>
      <div>
        <div className="w-full h-screen p-5 fixed z-[3] top-0 left-0 flex gap-10 flex-wrap" ref={ref}>
          {data.map((item, index) => (
            <Card data={item} key={index} reference={ref} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Foreground;
