import { useEffect, useState } from "react";
import { Link } from "react-router";

const BestLawyers = () => {
  const [lawyers, setLawyers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setLawyers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const displayedLayers = showAll ? lawyers : lawyers.slice(0, 6);

  return (
    <div className="relative w-full h-full pt-[100px]">
      <h1 className="text-center text-[40px] font-extrabold mb-4">Our Best Lawyers</h1>
      <p className="w-3/4 mx-auto text-center text-base font-normal text-[#0F0F0F] mb-8">
        Our platform connects you with verified, experienced lawyers across various specialties — all at your convenience.
        Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can
        trust.
      </p>

      {loading ? (
        <div className="flex justify-center items-center">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-5">
            {displayedLayers.map((lawyer) => (
              <div
                key={lawyer.id}
                className="bg-white rounded-md p-5 shadow-md border border-gray-300 flex justify-start items-center gap-20"
              >
                <img src={lawyer.image} alt={lawyer.name} className="w-[160px] h-[160px] object-cover rounded-md" />

                <div className="w-full h-full">
                  <div className="mb-2.5">
                    <span className="px-2.5 py-1 rounded-full bg-green-100 text-green-500 text-sm mr-2.5">Available</span>

                    <span className="px-2.5 py-1 rounded-full bg-blue-100 text-blue-500 text-sm">
                      {lawyer.years_of_experience}+ Years Experience
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold mb-1">{lawyer.name}</h2>
                  <p className="text-base font-normal text-gray-600 mb-1">{lawyer.department}</p>
                  <p className="text-sm text-gray-600 mb-2.5">License: {lawyer.license_number}</p>
                  <Link className="w-full h-10 bg-white text-black hover:bg-[#0EA106] hover:text-white border border-gray-300 hover:border-none transition-colors duration-300 text-base rounded-full flex justify-center items-center">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Toggle Button */}
          {lawyers.length > 6 && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setShowAll((prev) => !prev)}
                className="w-auto h-10 px-10 bg-[#0EA106] text-white hover:bg-white hover:text-black hover:border hover:border-gray-300 transition-colors duration-300 text-base text-center rounded-full"
              >
                {showAll ? "Show Less" : "Show All Lawyer"}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default BestLawyers;
