/* eslint-disable camelcase */
import PropTypes from 'prop-types';

import withAppBar from '../layouts/withAppBar';

import ENDPOINT from '../globals/api-endpoint';

export default function Event({ event }) {
  return (
    <div>
      <pre>
        {JSON.stringify(event, 0, 2)}
      </pre>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch(ENDPOINT.getAllEvents());
  const events = await res.json();

  const paths = events.map(({ slug }) => ({
    params: { slug },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const res = await fetch(ENDPOINT.getEventDetail(params.slug));
  const event = await res.json();

  if (event.code === 404) {
    return {
      notFound: true,
    };
  }

  const {
    id, max_partic, views, created_at, updated_at, ...restAttributes
  } = event;

  return {
    props: {
      event: restAttributes,
    },
    revalidate: 30,
  };
}

Event.Layout = withAppBar;

Event.propTypes = {
  event: PropTypes.objectOf(PropTypes.any).isRequired,
};
