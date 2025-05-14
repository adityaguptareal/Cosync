
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useUser } from '@clerk/clerk-react';

import SpaceCard from '../Components/SpaceCard';
import EquipmentCard from '../Components/EquipmentCard';


export default function BookingListing() {
  const [spaces, setSpaces] = useState([]);
  const [equipment, setEquipment] = useState([]);
  const [modalData, setModalData] = useState({ isOpen: false, asset: null, type: '' });


  const { user } = useUser();            
  const clerkUserId = user?.id || null;  

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/v1/admin/spaces')
      .then(res => Array.isArray(res.data.data) ? setSpaces(res.data.data) : console.error(res.data))
      .catch(err => console.error('Error fetching spaces:', err));

    axios
      .get('http://localhost:3000/api/v1/admin/equipment')
      .then(res => Array.isArray(res.data.data) ? setEquipment(res.data.data) : console.error(res.data))
      .catch(err => console.error('Error fetching equipment:', err));
  }, []);

  const openModal = (asset, type) => {
    setModalData({ isOpen: true, asset, type });
  };
  const closeModal = () => {
    setModalData({ isOpen: false, asset: null, type: '' });
  };


  if (!clerkUserId) return null;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-orange-800 mb-4">Available Spaces</h2>
      <div className="flex flex-wrap gap-8">
        {spaces.map((s, index) => (
          <SpaceCard
            key={s._id || `space-${index}`}
            {...s}
            itemId={s._id}
            onBookNow={() => openModal(s, 'space')}
          />
        ))}
      </div>

      <h2 className="text-2xl font-bold text-orange-800 mt-12 mb-4">Available Equipment</h2>
      <div className="flex flex-wrap gap-8">
        {equipment.map((e, index) => (
          <EquipmentCard
            key={e._id || `equipment-${index}`}
            {...e}
            itemId={e._id}
            onBookNow={() => openModal(e, 'equipment')}
          />
        ))}
      </div>

      {modalData.asset && (
        <BookingModal
          isOpen={modalData.isOpen}
          onClose={closeModal}
          asset={modalData.asset}
          itemType={modalData.type}
          userId={clerkUserId}
        />
      )}
    </div>
  );
}
