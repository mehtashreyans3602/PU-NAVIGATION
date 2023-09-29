import React from "react";

interface NearbyCardProps {
  PlaceName: string;
  setLatitude: number;
  setLongitude: number;
  onClick: (coordinates: { latitude: number; longitude: number }) => void;
}

const NearbyCard: React.FC<NearbyCardProps> = ({
  PlaceName,
  setLatitude,
  setLongitude,
  onClick,
}) => {
  const handleCardClick = () => {
    console.log("Latitude:", setLatitude);
    console.log("Longitude:", setLongitude);

    // Pass an object with latitude and longitude to onClick
    onClick({ latitude: setLatitude, longitude: setLongitude });
  };

  return (
    <section
      onClick={handleCardClick}
      className="select-none group  bg-[#F0EEE5] group-active:border-[#78786a] group-active:border-2  w-full h-auto flex flex-col p-2 gap-2 justify-between rounded-2xl cursor-pointer"
    >
      {/* svg as a square image holder */}
      <img
        className="border-2 border-[#1C1C17] rounded-2xl w-full h-16 object-cover"
        src="https://maps.gstatic.com/tactile/pane/default_geocode-2x.png"
        alt="placeholder"
      />
      <p className="text-sm group-active:text-white">{PlaceName}</p>
    </section>
  );
};

export default NearbyCard;
