import React, { useEffect, useRef, useState } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import NotFound from "../img/NotFound.svg";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/Reducer";

const RowContainer = ({ flag, data, scrollVal }) => {
  const rowContainerRef = useRef();
  const [{ cartItems }, dispatch] = useStateValue();
  const [items, setItems] = useState([]);

  const addToCart = () => {
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: items,
    });
    localStorage.setItem("cartItems", JSON.stringify(items));
  };

  useEffect(() => {
    rowContainerRef.current.scrollLeft += scrollVal;
  }, [scrollVal]);

  useEffect(() => {
    addToCart();
  }, [items]);

  return (
    <div
      ref={rowContainerRef}
      className={`w-full my-12 flex items-center gap-3 scroll-smooth  ${
        flag
          ? "overflow-x-scroll scrollbar-none "
          : "overflow-x-hidden flex-wrap justify-center"
      }`}
    >
      {data && data.length > 0 ? (
        data.map((val) => {
          return (
            <div
              key={val.id}
              className="flex flex-col justify-between items-center w-300 min-w-[300px] md:w-340 md:min-w-[340px] h-[225px] my-12 bg-cardOverlay rounded-lg p-2 backdrop-blur-lg hover:drop-shadow-lg"
            >
              <div className="w-full flex items-center justify-between">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="w-40 h-40 -mt-8 drop-shadow-2xl"
                >
                  <img
                    src={val?.imageURL}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </motion.div>
                <motion.div
                  whileTap={{ scale: 0.75 }}
                  onClick={() => setItems([...cartItems, val])}
                  className="w-8 h-8 rounded-full bg-red-700 flex justify-center items-center cursor-pointer hover:shadow-md"
                >
                  <MdShoppingBasket className="text-white" />
                </motion.div>
              </div>
              <div className="w-full flex-col flex items-end justify-end">
                <p className="text-base md:text-lg text-textColor font-semibold">
                  {val?.title}
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  {val?.calories} Calories
                </p>
                <div className="flex items-center gap-8">
                  <p className="text-lg text-headingColor  font-semibold">
                    <span className="text-sm text-red-500">$</span> {val?.price}
                  </p>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="w-full flex flex-col items-center justify-center">
          <img src={NotFound} className="h-300" />
          <p className="text-xl text-textColor font-semibold my-4">
            Nothing Found.
          </p>
        </div>
      )}
    </div>
  );
};

export default RowContainer;
