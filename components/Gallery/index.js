import Image from 'next/image';

const images = [
  '/1.jpg',
  '/4.jpg',
  '/3.jpg',
  '/2.jpg',
];

export default function Gallery() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:-mx-4">
      {images.map((image) => (
        <div className="relative w-full h-[200px] overflow-hidden md:h-[250px] lg:h-[300px]" key={image}>
          <Image
            layout="fill"
            src={image}
            className="object-cover object-center translate-x-0 scale-[1.3] transition-all duration-500 brightness-50 md:h-[300px] hover:xl:translate-x-[50px] hover:brightness-100"
            alt=""
          />
        </div>
      ))}
    </div>
  );
}
