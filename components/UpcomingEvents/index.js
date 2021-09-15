import Link from 'next/link';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import {
  CalendarIcon, LocationMarkerIcon, CurrencyDollarIcon, PhoneIcon,
} from '@heroicons/react/outline';

import CONFIG from '../../globals/config';

import styles from './styles.module.css';

export default function UpcomingEvents({ events }) {
  if (events.length <= 0) {
    return null;
  }

  return (
    <div className="container mx-auto mb-16">
      <div className={styles.innerWrapper}>
        {events.map((_event) => (
          <div className="md:grid md:grid-cols-8 md:gap-16">
            <div className="hidden md:block md:col-span-3">
              <img
                className="w-full rounded-xl overflow-hidden"
                src={`${CONFIG.BASE_IMAGE_URL}${_event.pamflet}`}
                alt=""
              />
            </div>
            <div className="md:col-span-5 text-white">
              <div className="max-w-3xl">
                <div className="text-red-500 text-xl font-bold mb-8">
                  Upcoming Events
                </div>
                <img
                  className="mb-6 w-full rounded-xl overflow-hidden md:hidden"
                  src={`${CONFIG.BASE_IMAGE_URL}${_event.pamflet}`}
                  alt=""
                />
                <div className="text-2xl md:text-3xl font-bold leading-relaxed">{_event.nama_event}</div>
                <p className="mt-5 leading-loose">{_event.deskripsi}</p>
                <div className="my-12 space-y-5">
                  <div className="flex items-center">
                    <CalendarIcon className="w-5 h-5 mr-4" />
                    {dayjs(_event.waktu).format('DD MMMM YYYY HH:mm')}
                  </div>
                  <div className="flex items-center">
                    <LocationMarkerIcon className="w-5 h-5 mr-4" />
                    {_event.tempat}
                  </div>
                  <div className="flex items-center">
                    <CurrencyDollarIcon className="w-5 h-5 mr-4" />
                    {_event.htm || 'FREE'}
                  </div>
                  <div className="flex items-center">
                    <PhoneIcon className="w-5 h-5 mr-4" />
                    {_event.cp}
                  </div>
                </div>
                <Link href={_event.slug}>
                  <a className="border-2 border-red-500 text-red-500 py-3 px-5 uppercase font-medium hover:text-white hover:bg-red-500 transition-colors">
                    Join Event
                  </a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

UpcomingEvents.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object),
};

UpcomingEvents.defaultProps = {
  events: [],
};
