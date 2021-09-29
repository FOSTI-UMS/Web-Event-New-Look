/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import omit from 'lodash.omit';
import { NextSeo } from 'next-seo';
import { CalendarIcon, LocationMarkerIcon, PhoneIcon } from '@heroicons/react/outline';

import withAppBar from '../layouts/withAppBar';
import Form from '../components/Form';
import schema from '../lib/forms/schema/event-registration';
import parseErrorResponse from '../lib/forms/parseErrorResponse';

import Request from '../utils/api-request';
import CONFIG from '../globals/config';
import ENDPOINT from '../globals/api-endpoint';

export default function Event({ event }) {
  const {
    nama_event, waktu, penutupan, tempat, pamflet, deskripsi, htm, cp, slug, is_full: isFull,
  } = event;

  const pageTitle = `${nama_event} - FOSTI UMS`;
  const now = new Date().getTime();
  const eventIsEnded = now > (new Date(penutupan).getTime() || new Date(waktu).getTime());

  const IMG_THUMBNAIL = `${CONFIG.BASE_IMAGE_URL}${pamflet}`;

  const submitEventRegistration = async (values) => {
    const response = await Request.post(ENDPOINT.joinEvent(), {
      body: JSON.stringify({
        ...values,
        acara: slug,
      }),
    });

    const { error_response, status_code } = parseErrorResponse(response);
    if (status_code !== 200 && error_response) {
      throw error_response;
    }
  };

  return (
    <div className="pb-10">
      <NextSeo
        title={pageTitle}
        description={deskripsi}
        openGraph={{
          title: pageTitle,
          description: deskripsi,
          images: [{ url: IMG_THUMBNAIL }],
        }}
      />

      <div
        className="relative h-[280px] -mx-4 overflow-hidden before:absolute before:inset-0 before:bg-[#0000005e] before:z-[1]"
        style={{ boxShadow: 'inset 0 0 100px 100px rgba(0,0,0,.6)' }}
      >
        <img className="w-full blur-[100px]" src={IMG_THUMBNAIL} alt="" />
      </div>

      <div className="relative container mx-auto -mt-28 pt-2 z-10">
        <div className="md:grid md:grid-cols-8 md:gap-12">
          <div className="md:col-span-3">
            <img className="rounded-xl" src={IMG_THUMBNAIL} alt={nama_event} />
          </div>

          <div className="md:col-span-5 max-w-2xl">
            <h2 className="mt-6 text-xl font-bold leading-normal md:text-2xl md:leading-relaxed md:h-24 md:text-white md:mt-0 lg:text-3xl lg:leading-relaxed">
              {nama_event}
            </h2>

            <div className="mt-2 space-y-5 md:mt-6">
              <div>
                <div className="mt-5 font-medium text-gray-700">Description</div>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed md:text-base md:leading-relaxed">{deskripsi}</p>
              </div>

              <div className="bg-gradient-to-r from-red-50 py-2.5 px-4 text-red-400 text-lg font-medium rounded border-l-2 border-red-500">
                {htm || 'Free Registration'}
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center">
                    <CalendarIcon className="w-4 h-4 mr-2 text-red-400" />
                    <span className="font-medium text-gray-700">When</span>
                  </div>
                  <div className="mt-2 text-sm text-gray-400 space-y-1 md:text-base">
                    <div>{dayjs(waktu).format('dddd, DD MMM YYYY')}</div>
                    <div>{dayjs(waktu).format('HH:mm')} WIB</div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center">
                    <LocationMarkerIcon className="w-4 h-4 mr-2 text-red-400" />
                    <span className="font-medium text-gray-700">Where</span>
                  </div>
                  <div className="mt-2 text-sm text-gray-400 md:text-base">{tempat}</div>
                </div>
              </div>

              <div>
                <div className="flex items-center">
                  <PhoneIcon className="w-4 h-4 mr-2 text-red-400" />
                  <span className="font-medium text-gray-700">Contact Person</span>
                </div>
                <div className="mt-2 text-sm text-gray-400 md:text-base">{cp}</div>
              </div>

              <div className="border-t border-gray-200" />

              {eventIsEnded && (
                <div className="italic text-gray-400 rounded">
                  We&apos;re Sorry, this event has ended.
                </div>
              )}

              {(!eventIsEnded && isFull) && (
                <div className="italic text-gray-400 p-4 border border-gray-100 rounded">
                  We&apos;re sorry, this event is fully booked.
                </div>
              )}

              {(!eventIsEnded && !isFull) && (
                <div className="py-2">
                  <div className="font-medium text-gray-800 mb-5">Event Registration Form</div>
                  <Form
                    useCaptcha
                    submitLabel="Daftar Event"
                    schema={schema}
                    onSubmit={submitEventRegistration}
                    onSuccessMessage={(
                      <div>
                        <div>Terima kasih telah mendaftar pada event <b>{nama_event}</b>.</div>
                      </div>
                    )}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch(ENDPOINT.getAllEvents());
  const events = await res.json();

  const paths = events.map(({ slug }) => ({
    params: { slug },
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const res = await fetch(ENDPOINT.getEventDetail(params.slug));
  const event = await res.json();

  if (event.code === 404) {
    return {
      notFound: true,
    };
  }

  const privateAttributes = ['id', 'max_partic', 'views', 'created_at', 'updated_at'];
  const publicAttributes = omit(event, privateAttributes);

  return {
    props: { event: publicAttributes },
    revalidate: 30,
  };
}

Event.Layout = withAppBar;
Event.propTypes = {
  event: PropTypes.objectOf(PropTypes.any).isRequired,
};
