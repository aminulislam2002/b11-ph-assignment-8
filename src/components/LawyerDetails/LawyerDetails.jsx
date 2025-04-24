import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { toast, ToastContainer } from "react-toastify";

const LawyerDetails = () => {
  const { license_number } = useParams();
  const [lawyer, setLawyer] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const layer = data.find((item) => item?.license_number === license_number);
        setLawyer(layer);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [license_number]);

  const handleBooking = () => {
    const existingBookings = JSON.parse(localStorage.getItem("bookedAppointments")) || [];

    const isAlreadyBooked = existingBookings.find((item) => item?.license_number === lawyer?.license_number);

    if (isAlreadyBooked) {
      toast.error(`You already scheduled an appointment with ${lawyer?.name}.`);
      return;
    }

    const updatedBookings = [...existingBookings, lawyer];
    localStorage.setItem("bookedAppointments", JSON.stringify(updatedBookings));

    toast.success(`Appointment scheduled for ${lawyer?.name} successfully`);
    navigate("/my-bookings");
  };

  return (
    <div className="relative bg-white text-black py-10">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className="w-full max-w-[1280px] mx-auto">
        {!lawyer ? (
          <div>
            <h2 className="text-3xl text-center font-extrabold mb-2.5">No Lawyer Found!</h2>
            <p className="text-center mx-auto text-base font-normal text-[#0F0F0F] mb-2.5">
              No Lawyer Found with the License No.
            </p>
            <p className="text-center mx-auto text-base font-normal text-red-500 mb-2.5">{license_number}</p>

            <div className="flex justify-center items-center">
              <Link
                to="/"
                className="h-10 px-10 bg-[#0EA106] text-white hover:bg-white hover:text-black hover:border hover:border-gray-300 transition-colors duration-300 text-base flex justify-center items-center rounded-full"
              >
                Show All Lawyer
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <div className="bg-white rounded-md p-16 shadow border border-gray-300 flex flex-col justify-center items-center mb-8">
              <h1 className="text-[40px] font-extrabold mb-4">Lawyer’s Profile Details</h1>
              <p className="w-3/4 text-center mx-auto text-base font-normal text-[#0F0F0F] mb-8">
                Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor amet ut. Suscipit sed est fermentum
                magna. Quis vitae tempus facilisis turpis imperdiet mattis donec dignissim volutpat.
              </p>
            </div>

            {loading ? (
              <div className="flex justify-center items-center">
                <span className="loading loading-bars loading-lg"></span>
              </div>
            ) : (
              <div className="bg-white rounded-md p-5 shadow-md border border-gray-300 flex justify-start items-center gap-6 mb-8">
                <img src={lawyer?.image} alt={lawyer?.name} className="w-[310px] h-[310px] object-cover rounded-md" />

                <div className="w-full h-full">
                  <div className="mb-2.5">
                    <span className="px-2.5 py-1 rounded-full bg-blue-100 text-blue-500 text-sm">
                      {lawyer?.years_of_experience}+ Years Experience
                    </span>
                  </div>

                  <h2 className="text-3xl font-extrabold mb-2.5">{lawyer?.name}</h2>

                  <div className="text-base font-medium text-gray-600 mb-2.5 flex justify-start items-center gap-2.5">
                    <p>{lawyer?.department}</p>

                    <p>
                      <span className="font-semibold">License:</span> {lawyer?.license_number}
                    </p>
                  </div>

                  <div className="text-base font-medium text-gray-600 mb-2.5 flex justify-start items-center gap-2.5">
                    <span className="font-semibold">Availability:</span>{" "}
                    {lawyer?.availability?.map((day, index) => (
                      <span
                        key={index}
                        className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm font-normal border border-gray-300"
                      >
                        {day}
                      </span>
                    ))}
                  </div>
                  <p className="text-base text-gray-600 mb-2.5">
                    <span className="font-semibold">Consultation Fee:</span>{" "}
                    <span className="text-green-500">Taka: {lawyer?.consultation_fee}</span>
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="bg-white rounded-md p-16 shadow border border-gray-300 flex flex-col justify-center items-center">
          <h3 className="text-2xl font-bold text-center mb-5">Book an Appointment</h3>

          <div className="w-full h-full py-5 border-t border-b border-dashed flex justify-between items-center">
            <p className="text-base font-bold">Availability</p>
            <p className="text-base font-normal bg-green-100 text-green-500 px-5 rounded-full py-1">
              Lawyer Available Today
            </p>
          </div>

          <div className="w-full h-full space-y-5 mt-5">
            <span className="text-base font-normal bg-yellow-100 text-yellow-500 px-5 rounded-full py-1">
              Due to high patient volume, we are currently accepting appointments for today only. We appreciate your
              understanding and cooperation.
            </span>

            <button
              onClick={handleBooking}
              className="w-full h-10 bg-[#0EA106] text-white hover:bg-white hover:text-black hover:border hover:border-gray-300 transition-colors duration-300 text-base text-center rounded-full"
            >
              Book Appointment Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawyerDetails;
