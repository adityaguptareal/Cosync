import React from 'react';

const EquipmentCard = ({
  id,
  name,
  description,
  imageUrl,
  quantity,
  createdBy,
  prices,
  onBookNow,
  itemId
}) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      <img
        className="w-full h-48 object-cover"
        src={imageUrl}
        alt={name}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-orange-600">{name}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <button
          onClick={() => onBookNow(itemId)}
          className="mt-4 cursor-pointer bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full transition duration-300"
        >
          Book Now
        </button>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-orange-100 rounded-full px-3 py-1 text-sm font-semibold text-orange-700 mr-2 mb-2">
          Quantity: {quantity}
        </span>
        <span className="inline-block bg-orange-100 rounded-full px-3 py-1 text-sm font-semibold text-orange-700 mr-2 mb-2">
          Created by: {createdBy}
        </span>
        <span className="inline-block bg-orange-100 rounded-full px-3 py-1 text-sm font-semibold text-orange-700 mr-2 mb-2">
          Price: {prices}
        </span>
      </div>
    </div>
  );
};

export default EquipmentCard;
