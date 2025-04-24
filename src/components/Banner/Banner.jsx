import image from "../../assets/banner-img-1.png";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "730px",
        borderRadius: "24px",
      }}
    >
      <div className="max-w-[1200px] mx-auto h-full flex items-center">
        <div className="w-3/4 mx-auto">
          <h1 className="text-white text-center text-[48px] font-bold mb-5">
            It avoids subjective claims or exaggeration that might raise red flags legally
          </h1>
          <p className="text-white text-center text-[24px] font-normal mb-5">
            Our platform connects you with verified, experienced doctors across various specialties — all at your
            convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive
            quality care you can trust.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
