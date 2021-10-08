import PropTypes from 'prop-types';

import withAppBar from '../layouts/withAppBar';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import UpcomingEvents from '../components/UpcomingEvents';
import RecentEvents from '../components/RecentEvents';

import Request from '../utils/api-request';
import API_ENDPOINT from '../globals/api-endpoint';

export default function Homepage({ upcomingEvents, recentEvents }) {
  const noUpcomingEvents = upcomingEvents <= 0;

  return (
    <div>
      <Hero />
      <UpcomingEvents events={upcomingEvents} />
      {noUpcomingEvents && <Gallery />}
      <RecentEvents events={recentEvents} />
    </div>
  );
}

export async function getStaticProps() {
  const now = new Date().getTime();
  const events = await Request.get(API_ENDPOINT.getAllEvents());

  const upcomingEvents = events.filter(({ waktu }) => new Date(waktu).getTime() > now);
  const recentEvents = events.filter(({ waktu }) => new Date(waktu).getTime() < now);

  return {
    props: { upcomingEvents, recentEvents },
    revalidate: 30,
  };
}

Homepage.Layout = withAppBar;
Homepage.Settings = {
  pageTitle: 'Event',
};

Homepage.propTypes = {
  upcomingEvents: PropTypes.arrayOf(PropTypes.object).isRequired,
  recentEvents: PropTypes.arrayOf(PropTypes.object).isRequired,
};
