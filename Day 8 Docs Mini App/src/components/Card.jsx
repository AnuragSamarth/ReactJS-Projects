import { FaRegFileAlt } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  return (
    <>
      <motion.div
        drag
        dragConstraints={reference}
        className="w-60 h-72 bg-slate-500 rounded-[40px] px-8 py-10 relative overflow-hidden mb-3 flex-shrink-0"
      >
        <FaRegFileAlt />
        <p className="text-sm leading-tight mt-5">{data.desc}</p>
        <div className="bottom-0 w-full left-0 absolute">
          <div className="flex items-center justify-between px-5 mb-3">
            <h5>{data.fileSize}</h5>
            <span className="w-7 h-7 bg-zinc-700 rounded-full flex items-center justify-center cursor-pointer">
              {data.close ? (
                <IoClose />
              ) : (
                <FaCloudDownloadAlt size=".7em" color="#fff" />
              )}
            </span>
          </div>
          {data.tag.isOpen && (
            <div
              className={`tag w-full ${
                data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
              } py-5 flex items-center justify-center`}
            >
              <h5 className=" text-sm font-semibold text-white">
                {data.tag.tagTitle}
              </h5>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
}

export default Card;
