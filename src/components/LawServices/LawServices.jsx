import image1 from "../../assets/success-doctor.png";
import image2 from "../../assets/success-review.png";
import image3 from "../../assets/success-patients.png";
import image4 from "../../assets/success-staffs.png";
import CountUp from "react-countup";

const LawServices = () => {
  return (
    <div className="relative w-full h-full py-[100px]">
      <h1 className="text-center text-[40px] font-extrabold mb-4">We Provide Best Law Services</h1>
      <p className="text-center text-base font-normal text-[#0F0F0F] mb-8">
        Our platform connects you with verified, experienced Lawyers across various specialities — all at your convenience.{" "}
      </p>

      <div className="grid grid-cols-4 gap-6">
        <div className="w-full h-full p-10 bg-[#0F0F0F] bg-opacity-5 rounded-md border border-[#0F0F0F] border-opacity-15 flex flex-col justify-center items-center gap-2.5">
          <img src={image1} alt="" />
          <h3 className="text-[48px] font-extrabold">
            <CountUp duration={2.5} end={199} />+
          </h3>
          <p className="text-base font-normal text-[#0F0F0F]">Total Lawyer</p>
        </div>

        <div className="w-full h-full p-10 bg-[#0F0F0F] bg-opacity-5 rounded-md border border-[#0F0F0F] border-opacity-15 flex flex-col justify-center items-center gap-2.5">
          <img src={image2} alt="" />
          <h3 className="text-[48px] font-extrabold">
            <CountUp duration={2.5} end={467} />+
          </h3>
          <p className="text-base font-normal text-[#0F0F0F]">Total Reviews</p>
        </div>

        <div className="w-full h-full p-10 bg-[#0F0F0F] bg-opacity-5 rounded-md border border-[#0F0F0F] border-opacity-15 flex flex-col justify-center items-center gap-2.5">
          <img src={image3} alt="" />
          <h3 className="text-[48px] font-extrabold">
            <CountUp duration={2.5} end={1900} />+
          </h3>
          <p className="text-base font-normal text-[#0F0F0F]">Cases Initiated</p>
        </div>

        <div className="w-full h-full p-10 bg-[#0F0F0F] bg-opacity-5 rounded-md border border-[#0F0F0F] border-opacity-15 flex flex-col justify-center items-center gap-2.5">
          <img src={image4} alt="" />
          <h3 className="text-[48px] font-extrabold">
            <CountUp duration={2.5} end={300} />+
          </h3>
          <p className="text-base font-normal text-[#0F0F0F]">Total Stuffs</p>
        </div>
      </div>
    </div>
  );
};

export default LawServices;
