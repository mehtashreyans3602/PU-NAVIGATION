import React from "react";

interface NearbyCardProps {
    PlaceName: string,
    setLatitude: number,
    setLongitude: number,
    onClick: (coordinates: {
        latitude: number; longitude: number
    }) => void,
    Latitude: number
    Longitude :number
}

const NearbyCard: React.FC<NearbyCardProps> = ({ PlaceName, setLatitude, setLongitude, onClick   }) => {
    const handleCardClick = () => {
        console.log("Latitude:", setLatitude);
        console.log("Longitude:", setLongitude);

        // Pass an object with latitude and longitude to onClick
        onClick({latitude: setLatitude, longitude: setLongitude});
    };

    return (<section
            onClick={handleCardClick}
            className="select-none group  bg-[#F0EEE5] group-active:border-[#78786a] group-active:border-2  w-full h-1/2 backdrop-blur-3xl flex md:flex-col flex-row p-2 gap-2 md:justify-between text-center items-center rounded-2xl cursor-pointer"
        >
            {/* svg as a square image holder */}
            <img
                className="border-2 border-[#1C1C17] rounded-2xl md:w-full h-16 w-16 object-cover"
                src="https://maps.gstatic.com/tactile/pane/default_geocode-2x.png"
                alt="placeholder"
            />
            <p className="text-sm font-light group-active:text-white">{PlaceName}</p>
        </section>);
};

export default NearbyCard;
