"use client";

export default function Hero() {
  const handleScroll = () => {
    window.scrollTo({
      top: 840,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(/images/yiran-ding-unsplash.jpg)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl font-bold shadow-sm">
            Your ride, whenever you need it
          </h1>
          <p className="mb-5 shadow-sm">
            Book a ride in seconds. Safe, reliable, and available anytime. just
            a tap away.
          </p>
          <button onClick={handleScroll} className="btn btn-neutral shadow-lg">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
