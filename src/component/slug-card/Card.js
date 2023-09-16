import React from 'react';
import {
  // FaIndianRupeeSign  
  FiHome,
  FiMapPin,
  FiRepeat,
  FiShieldOff,
  FiSun,
  FiTruck,
} from 'react-icons/fi';
import useAsync from "@hooks/useAsync";
import SettingServices from "@services/SettingServices";


const Card = () => {
  const { data: globalSetting } = useAsync(SettingServices.getGlobalSetting);
  const currency = globalSetting?.default_currency || "$";


  return (
    <ul className="my-0">
      <li className="flex items-center py-3">
        <span className="text-xl text-gray-400 items-start mr-4">
          <FiTruck />
        </span>
        <p className="font-sans leading-5 text-sm text-gray-500">
          Free shipping apply to all orders over shipping{' '}
          <span className="font-semibold">{currency}100</span>
        </p>
      </li>
      <li className="flex items-center py-3">
        <span className="text-xl text-gray-400 items-start mr-4">
          <FiHome />
        </span>
        <p className="font-sans leading-5 text-sm text-gray-500">
          Home Delivery within <span className="font-semibold">1 Hour</span>
        </p>
      </li>
      <li className="flex items-center py-3">
        <span className="text-xl text-gray-400 items-start mr-4">
          {/* <FiIconName /> */}
          {currency}
        </span>
        <p className="font-sans leading-5 text-sm text-gray-500">
          Cash on Delivery Available
        </p>
      </li>
      <li className="flex items-center py-3">
        <span className="text-xl text-gray-400 items-start mr-4">
          <FiRepeat />
        </span>
        <p className="font-sans leading-5 text-sm text-gray-500">
          <span className="font-semibold">7</span> Days returns money back
          guarantee
        </p>
      </li>

      <li className="flex items-center py-3">
        <span className="text-xl text-gray-400 items-start mr-4">
          <FiShieldOff />
        </span>
        <p className="font-sans leading-5 text-sm text-gray-500">
          Warranty not available this item
        </p>
      </li>
      <li className="flex items-center py-3">
        <span className="text-xl text-gray-400 items-start mr-4">
          <FiSun />
        </span>
        <p className="font-sans leading-5 text-sm text-gray-500">
          Guaranteed 100% organic from natural products.
        </p>
      </li>

      <li className="flex items-center py-3">
        <span className="text-xl text-gray-400 items-start mr-4">
          <FiMapPin />
        </span>
        <p className="font-sans leading-5 text-sm text-gray-500">
        Address Flat No. 1312, Tower A, SAVY VILLEDE, Raj Nagar Extn., Ghaziabad, Uttar Pradesh-201301
        </p>
      </li>
    </ul>
  );
};

export default Card;
