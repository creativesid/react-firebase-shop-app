import React, { useEffect, useState } from "react";
import { IoFastFood } from "react-icons/io5";
import { categories } from "../utils/data";
import { motion } from "framer-motion";
import RowContainer from "./RowContainer";
import { useStateValue } from "../context/StateProvider";

const MenuContainer = () => {
  const [filter, setFilter] = useState("fruits");
  const [{ foodItems }, dispatch] = useStateValue();

  useEffect(() => {}, [filter]);

  return (
    <section className="w-full my-6" id="menu">
      <div className="w-full flex flex-col items-center justify-center">
        <p className="text-2xl font-semibold text-headingColor capitalize relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-4 before:left-0 mr-auto before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
          Our Hot Dishes
        </p>

        <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none">
          {categories &&
            categories.map((val) => {
              return (
                <motion.div
                  whileTap={{ scale: 0.75 }}
                  key={val.id}
                  onClick={() => setFilter(val.urlParamName)}
                  className={`group ${
                    filter == val.urlParamName ? "bg-red-600" : "bg-card"
                  } hover:bg-red-600 w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center`}
                >
                  <div
                    className={`w-10 h-10 rounded-full shadow-lg ${
                      filter == val.urlParamName ? "bg-white" : "bg-red-600"
                    } group-hover:bg-white flex items-center justify-center hover:bg-red-500`}
                  >
                    <IoFastFood
                      className={`${
                        filter == val.urlParamName
                          ? "text-textColor"
                          : "text-white"
                      } group-hover:text-textColor text-lg`}
                    />
                  </div>
                  <p
                    className={`text-sm ${
                      filter == val.urlParamName
                        ? "text-white"
                        : "text-textColor"
                    } group-hover:text-white`}
                  >
                    {val.name}
                  </p>
                </motion.div>
              );
            })}
        </div>

        <div className="w-full">
          <RowContainer
            flag={false}
            data={foodItems?.filter((n) => n.category == filter)}
          />
        </div>
      </div>
    </section>
  );
};

export default MenuContainer;
