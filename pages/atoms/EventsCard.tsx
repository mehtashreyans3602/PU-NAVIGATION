import React from 'react'

interface EventCardProps {
    image: string
    eventName: string
    eventDescription: string
    onClick: any
}

const EventsCard: React.FC<EventCardProps> = ({image, eventName, eventDescription, onClick}) => {
    return (
        <section onClick={onClick}
                 className={`md:w-44 w-full h-auto bg-[#E4E3D2] rounded-2xl p-2 flex md:flex-col flex-row gap-2 items-center cursor-pointer overflow-scroll`}>
            <img
                className="md:w-full md:h-auto w-16 h-16 rounded-lg border-2 border-[#46492F]"
                src={image[0]}
                alt={eventName}
            />
            <div>
                <h2 className="text-xl text-[#1C1C17]">{eventName}</h2>
                <p className="text-base text-left text-[#46492F]">{eventDescription}</p>
            </div>
        </section>
    )
}

export default EventsCard