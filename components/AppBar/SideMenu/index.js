/* eslint-disable max-len */
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { XIcon } from '@heroicons/react/outline';

import styles from './styles.module.css';

export default function SideMenu({ isOpen, onClose }) {
  return (
    <div className={classnames(styles.sideMenu, (isOpen && styles.isOpen))}>
      <button type="button" onClick={onClose}>
        <XIcon className="w-7 h-7 text-red-500" />
      </button>

      <div className="text-white mt-8">
        <div className="font-bold text-2xl mb-8">About</div>

        <p className="leading-loose text-sm">
          FOSTI merupakan unit kegiatan mahasiswa Fakultas Komunikasi dan Informatika Universitas Muhammadiyah Surakarta yang mempelajari, memperdalam, dan menyebarkan open source. Didirikan pada 21 Desember 2008.
        </p>
      </div>

      <iframe
        className="w-full border-0 mt-8"
        title="Google Maps - Universitas Muhammadiyah Surakarta"
        height="250"
        loading="lazy"
        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_MAPS_KEY}&q=Universitas+Muhammadiyah+Surakarta`}
      />
    </div>
  );
}

SideMenu.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

SideMenu.defaultProps = {
  isOpen: false,
  onClose: () => {},
};
