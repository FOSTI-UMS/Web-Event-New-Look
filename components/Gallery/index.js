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
        <div className="overflow-hidden" key={image}>
          <img
            src={image}
            className="w-full object-cover object-center h-[200px] translate-x-0 scale-[1.3] transition-all duration-500 brightness-50 md:h-[300px] hover:xl:translate-x-[50px] hover:brightness-100"
            alt=""
          />
        </div>
      ))}
    </div>
  );
}
