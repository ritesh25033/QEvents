'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import EventCard from '@/components/EventCard';

function EventPage() {
  const searchParams = useSearchParams();
  const tagQuery = searchParams.get('tag');
  const artistQuery = searchParams.get('artist');
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch(
        'https://qevent-backend.labs.crio.do/events'
      );
      const eventData = await response.json();

      let filteredEvents = [];
      if (tagQuery) {
        filteredEvents = eventData.filter((event) =>
          event?.tags?.includes(tagQuery)
        );
      } else if (artistQuery) {
        filteredEvents = eventData.filter(
          (event) => event?.artist?.toLowerCase() === artistQuery.toLowerCase()
        );
      } else {
        filteredEvents = eventData;
      }
      setEvents(filteredEvents);
    };
    fetchEvents();
  }, [tagQuery, artistQuery]);

  return (
    <div className='container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8 mb-32'>
      {events &&
        events.map((eventData) => (
          <EventCard key={eventData.id} eventData={eventData} />
        ))}
    </div>
  );
}

export default EventPage;
