import React, { useState } from "react";
import axios from "axios";

const BookingModal = ({ isOpen, onClose, asset, itemType, userId }) => {
  const [date, setDate] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    try {
      const payload = {
        userId: userId,
        assetId: asset._id,// Added assetModel field
        date,
        quantity: Number(quantity),
      };
      await axios.post("https://cosync.onrender.com/api/v1/bookings/create", payload);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 1200);
    } catch (err) {
      setError(
        err.response?.data?.message || "Failed to book. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl"
          onClick={onClose}
          disabled={loading}
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4 text-orange-700">
          Book {itemType === "space" ? asset.name : asset.name}
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="flex flex-col">
            <span className="mb-1 font-medium">Date</span>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="border rounded px-3 py-2"
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-1 font-medium">Quantity</span>
            <input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
              className="border rounded px-3 py-2"
            />
          </label>
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition duration-300"
            disabled={loading}
          >
            {loading ? "Booking..." : "Confirm Booking"}
          </button>
          {error && <div className="text-red-600 text-sm mt-2">{error}</div>}
          {success && <div className="text-green-600 text-sm mt-2">Booking successful!</div>}
        </form>
      </div>
    </div>
  );
};

export default BookingModal;