import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarIcon, ChevronDoubleDownIcon } from '@heroicons/react/outline';

import CONFIG from '../../globals/config';
import styles from './styles.module.css';

export default function RecentEvents({ events }) {
  const eventsPerFetch = 4;

  const [currentPage, setCurrentPage] = useState(1);
  const [featuredEvents, setFeaturedEvents] = useState(events.slice(0, eventsPerFetch));

  useEffect(() => {
    setFeaturedEvents(events.slice(0, (currentPage * eventsPerFetch)));
  }, [currentPage]);

  return (
    <div className="container mx-auto my-10 md:mt-16 lg:mt-20">
      <div className="relative mb-4 overflow-hidden md:static md:mb-6 lg:mb-8">
        <h3 className="inline-block pb-3 pr-16 mb-5 text-red-500 font-bold text-xl border-b-4 border-red-500">
          Recent Events
        </h3>
        <div className={styles.textBackdrop}>
          Recent Events
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2 lg:gap-8 lg:grid-cols-3 xl:grid-cols-4">
        {featuredEvents.map((_event) => (
          <div className="flex flex-col mb-2 md:mb-4 lg:mb-8" key={_event.slug}>
            <figure className="w-full h-96 filter grayscale">
              <Image
                className="object-cover object-top"
                layout="fill"
                src={`${CONFIG.BASE_IMAGE_URL}${_event.pamflet}`}
                alt={_event.nama_event}
              />
            </figure>
            <div className="flex-auto py-5 px-4">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <Link href={_event.slug}>
                    <a className="hover:text-red-500 transition-colors leading-normal">
                      <h2 className="font-semibold text-xl line-clamp-2 md:min-h-[3.5rem]">{_event.nama_event}</h2>
                    </a>
                  </Link>
                  <div className="flex items-center mt-3 text-sm text-gray-500">
                    <CalendarIcon className="w-4 h-4 mr-2" />
                    {dayjs(_event.waktu).format('DD MMMM YYYY HH:mm')}
                  </div>
                  <p className="line-clamp-3 mt-4 leading-relaxed text-gray-600">{_event.deskripsi}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {(currentPage * eventsPerFetch) < events.length && (
        <div className="mt-5 text-center">
          <button
            type="button"
            onClick={() => setCurrentPage(currentPage + 1)}
            className="relative bg-white border-2 border-red-500 text-red-500 rounded-full w-40 h-20 overflow-hidden group"
          >
            <span className="relative top-0 opacity-100 transition-all group-hover:-top-1/2 group-hover:opacity-0">
              Load More
            </span>
            <div className="absolute flex items-center justify-center rounded-full -top-1/2 left-1/2 -translate-x-1/2 bg-white w-20 h-20 z-[-1] group-hover:z-0 group-hover:top-1/2 group-hover:-translate-y-1/2 group-hover:transition-all duration-500">
              <ChevronDoubleDownIcon className="w-6 h-6" />
            </div>
          </button>
        </div>
      )}
    </div>
  );
}

RecentEvents.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object),
};

RecentEvents.defaultProps = {
  events: [],
};
