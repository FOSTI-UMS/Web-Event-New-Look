import classnames from 'classnames';

const socials = [
  {
    image: '/github.svg',
    label: 'FOSTI UMS',
    link: 'https://github.com/fosti-ums',
    backgroundColor: 'bg-gray-700 hover:bg-gray-700',
  },
  {
    image: '/instagram.svg',
    label: '@fosti_ums',
    link: 'https://instagram.com/fosti_ums',
    backgroundColor: 'bg-pink-400 hover:bg-pink-400',
  },
  {
    image: '/twitter.svg',
    label: '@fostiums',
    link: 'https://twitter.com/fostiums',
    backgroundColor: 'bg-blue-400 hover:bg-blue-400',
  },
  {
    image: '/youtube.svg',
    label: 'Fosti UMS',
    link: 'https://www.youtube.com/channel/UCQt_FnP_9uTBfeWl1k0_k1w',
    backgroundColor: 'bg-red-400 hover:bg-red-400',
  },
];

export default function SocialMediaLinks() {
  return (
    <div className="grid grid-cols-2 gap-3 md:block md:space-x-6">
      {socials.map(({
        image, label, link, backgroundColor,
      }) => (
        <a
          key={link}
          href={link}
          target="_blank"
          rel="noreferrer"
          className={
            classnames(
              'inline-flex items-center pr-6 text-white rounded-full transition-colors md:bg-white md:text-gray-800 md:hover:text-white',
              backgroundColor,
            )
          }
        >
          <img className="p-2 w-10 h-10 bg-white rounded-full" src={image} alt="" />
          <span className="ml-3 md:ml-2">{label}</span>
        </a>
      ))}
    </div>
  );
}
