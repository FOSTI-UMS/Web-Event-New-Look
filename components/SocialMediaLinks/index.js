const socials = [
  {
    image: '/github.svg',
    label: 'FOSTI UMS',
    link: 'https://github.com/fosti-ums',
  },
  {
    image: '/instagram.svg',
    label: '@fosti_ums',
    link: 'https://instagram.com/fosti_ums',
  },
  {
    image: '/twitter.svg',
    label: '@fostiums',
    link: 'https://twitter.com/fostiums',
  },
  {
    image: '/youtube.svg',
    label: 'Fosti UMS',
    link: 'https://www.youtube.com/channel/UCQt_FnP_9uTBfeWl1k0_k1w',
  },
];

export default function SocialMediaLinks() {
  return (
    <div className="grid grid-cols-2 gap-3 md:block md:space-x-6 lg:space-x-8">
      {socials.map(({ image, label, link }) => (
        <a href={link} className="inline-flex items-center" target="_blank" rel="noreferrer" key={link}>
          <img className="w-4 h-4" src={image} alt="" />
          <span className="ml-2">{label}</span>
        </a>
      ))}
    </div>
  );
}
