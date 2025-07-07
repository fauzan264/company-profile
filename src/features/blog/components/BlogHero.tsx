export default function BlogHero({
  image = "https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp",
}: {
  image: string;
}) {
  return (
    <div
      className="hero min-h-100"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="hero-overlay"></div>
    </div>
  );
}
