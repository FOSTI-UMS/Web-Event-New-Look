import classnames from 'classnames';

const socials = [
  {
    image: '/github.svg',
    label: 'FOSTI UMS',
    link: 'https://github.com/fosti-ums',
    backgroundColor: 'bg-gray-700 hover:bg-gray-700',
    borderColor: 'border-gray-700',
  },
  {
    image: '/instagram.svg',
    label: '@fosti_ums',
    link: 'https://instagram.com/fosti_ums',
    backgroundColor: 'bg-pink-600 hover:bg-pink-600',
    borderColor: 'border-pink-700',
  },
  {
    image: '/twitter.svg',
    label: '@fostiums',
    link: 'https://twitter.com/fostiums',
    backgroundColor: 'bg-blue-500 hover:bg-blue-500',
    borderColor: 'border-blue-700',
  },
  {
    image: '/youtube.svg',
    label: 'Fosti UMS',
    link: 'https://www.youtube.com/channel/UCQt_FnP_9uTBfeWl1k0_k1w',
    backgroundColor: 'bg-red-600 hover:bg-red-600',
    borderColor: 'border-red-700',
  },
];

export default function SocialMediaLinks() {
  return (
    <div className="space-x-3 md:block md:space-x-5">
      {socials.map(({
        image, label, link, backgroundColor, borderColor,
      }) => (
        <a
          key={link}
          href={link}
          target="_blank"
          rel="noreferrer"
          className={
            classnames(
              'inline-flex items-center rounded-full text-white transition-colors md:pr-6 md:bg-white md:text-gray-800 md:hover:text-white',
              backgroundColor,
            )
          }
        >
          <img
            alt=""
            src={image}
            className={
              classnames('p-2 w-9 h-9 bg-white rounded-full border', borderColor)
            }
          />
          <span className="hidden text-sm md:ml-3 md:block">{label}</span>
        </a>
      ))}
    </div>
  );
}
