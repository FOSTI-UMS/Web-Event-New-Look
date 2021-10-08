import SocialMediaLinks from '../SocialMediaLinks';

import styles from './styles.module.css';

export default function Hero() {
  return (
    <div className={styles.wrapper}>
      <div className="relative container mx-auto font-semibold text-6xl md:text-7xl lg:text-8xl">
        <div className={styles.textBackdrop}>
          <div className="font-bold uppercase tracking-widest mb-4">
            F<span className="text-red-500">OS</span>TI
          </div>
          <div className="font-bold uppercase tracking-widest">
            Events
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-6 md:mt-8">
        <SocialMediaLinks />
      </div>
    </div>
  );
}
