import React from "react";
import Btn from "./Btn";

import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";

const Fashion = () => {
  const cartItems = [
    {
      id: 1,
      img: "https://f.nooncdn.com/p/pzsku/Z500663E7FB1AE2AB593EZ/45/_/1739960835/62c9b4c6-19c5-4722-8f9d-4979e12e72a7.jpg?format=jpg&width=240",
      rating: "4.4",
      reviews: "911",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      price: "79",
      previous: "199",
      discount: "60%",
    },
    {
      id: 2,
      img: "https://f.nooncdn.com/p/pzsku/Z61E886D13430E849B011Z/45/_/1726948466/86011fb4-1c7e-488d-b276-1cf2c994adfc.jpg?format=jpg&width=240",
      rating: "4.6",
      reviews: "521",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      price: "98",
      previous: "389",
      discount: "74%",
    },
    {
      id: 3,
      img: "https://f.nooncdn.com/p/pzsku/Z19D05AC73E0513B679D2Z/45/_/1691413961/b4b043ed-44f0-464a-8fed-771915b15f67.jpg?format=jpg&width=240",
      rating: "4.6",
      reviews: "215",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      price: "99",
      previous: "319",
      discount: "68%",
    },
    {
      id: 4,
      img: "https://f.nooncdn.com/p/pzsku/Z208B4C95545A14AF9C50Z/45/_/1737529257/8e8624b8-b345-4e33-9601-fad5054b800c.jpg?format=jpg&width=240",
      rating: "4.7",
      reviews: "66",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      price: "99",
      previous: "349",
      discount: "78%",
    },
    {
      id: 5,
      img: "https://f.nooncdn.com/p/pzsku/Z970BFBD125C85045C1EEZ/45/_/1742378613/16c9f8ac-334e-4b48-b64d-48728cc1fc17.jpg?format=jpg&width=240",
      rating: "4.3",
      reviews: "1.5k",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      price: "169",
      previous: "785",
      discount: "78%",
    },
    {
      id: 6,
      img: "https://f.nooncdn.com/p/pzsku/Z0E193A951B13878C88D0Z/45/_/1742370749/cff50ada-91bd-48a6-8163-465c116e81eb.jpg?format=jpg&width=240",
      rating: "4.5",
      reviews: "4.6k",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      price: "199",
      previous: "399",
      discount: "50%",
    },
  ];
  return (
    <div className="container mx-auto px-4 mt-5 mb-5 rounded-3xl pt-5 pb-5 bg-gray-100">
      <div className="flex justify-between items-center  px-3 mb-2 ">
        <p className="font-res font-bold text-3xl flex gap-1  text-red-500 p-2">
          RECOMMENDED
          <span className="font-res font-bold text-3xl text-black">FOR YOU</span>
        </p>
        <Btn title="View All" color="black" textColor="white" class="btn-res" />
      </div>
      <div className="cart-main flex gap-2 bg-gray-100 rounded-2xl flex-wrap justify-center">
        {cartItems.map((item, index) => {
          return (
            <div className="cart" key={index}>
              <div className="relative rounded-2xl p-2 flex flex-col">
                <div className="flex justify-between">
                  <button className="bg-gray-700 text-sm text-white px-2 rounded-2xl absolute">
                    Best Seller
                  </button>
                  <FaRegHeart className="text-2xl absolute right-2" />
                </div>
                <div>
                  <img className="rounded-2xl w-full" src={item.img} alt="" />
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm flex gap-1 items-center">
                    {item.rating}
                    <span>
                      <FaStar className="text-green-400" />
                    </span>
                    <span className="text-gray-400">{item.reviews}</span>
                  </p>
                  <MdOutlineShoppingCart className="text-3xl" />
                </div>
              </div>
              <div>
                <p className="text-sm">{item.title.slice(0, 100)}</p>
              </div>
              <div className="flex text-sm items-center">
                <p>AED</p>
                <p className="font-bold text-xl">{item.price}</p>
                <p className="line-through text-gray-300">{item.previous}</p>
                <p className="text-green-500 font-bold">{item.discount}</p>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <TbTruckDelivery />
                <p className="text-sm text-gray-400">Free Delivery</p>
              </div>
              <div>
                <button className="bg-yellow-300 px-3 rounded-2xl">
                  express
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Fashion;
