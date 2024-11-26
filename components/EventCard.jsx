
"use client";

import Tag from "./Tag";
import Link from "next/link";

const EventCard = ({ eventData }) => {
  return (
    <div className="hover-inverse group transform transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-orange-200 hover:to-white text-dark border border-slate-400 rounded-lg p-4 max-w-sm flex flex-col justify-between">
      <Link
        href={`/events/${eventData.id}`}
        className="text-dark flex-shrink-0"
      >
        <div>
          {/* Image */}
          <img
            className="w-full h-48 object-cover rounded-lg mb-4 shadow-md"
            src={eventData.image}
            alt={`${eventData.name} image`}
          />

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3 overflow-hidden">
            {eventData?.tags?.slice(0, 3).map((tag) => (
              <Tag text={tag} key={tag} />
            ))}
            {eventData?.tags?.length > 3 && (
              <span className="text-sm text-gray-500">+{eventData.tags.length - 3} more</span>
            )}
          </div>

          {/* Date and Time */}
          <p className="text-sm text-gray-600">
            {new Date(eventData.date).toDateString()} | {eventData.time}
          </p>

          {/* Location */}
          <p className="mt-1 text-sm text-gray-600">{eventData.location}</p>

          {/* Event Name */}
          <h2 className="text-lg font-bold mt-3">{eventData.name}</h2>
        </div>
      </Link>

      {/* Artist and Price */}
      <div className="flex justify-between items-center mt-6">
        <h3 className="text-lg font-medium">{eventData.artist}</h3>
        <h3 className="text-lg font-bold">
          {eventData.price > 0
            ? `$${eventData.price.toLocaleString()}`
            : "FREE"}
        </h3>
      </div>
    </div>
  );
};

export default EventCard;
