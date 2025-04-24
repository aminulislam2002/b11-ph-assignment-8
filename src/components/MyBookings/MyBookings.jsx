import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const MyBookings = () => {
  const [loading, setLoading] = useState(true);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const storedArray = JSON.parse(localStorage.getItem("bookedAppointments")) || [];
    setBookings(storedArray);
    setLoading(false);
  }, []);

  const handleRemoveBooking = (license_number) => {
    const existingBookings = JSON.parse(localStorage.getItem("bookedAppointments")) || [];

    const updatedBookings = existingBookings.filter((item) => item?.license_number !== license_number);

    localStorage.setItem("bookedAppointments", JSON.stringify(updatedBookings));
    setBookings(updatedBookings);
    toast.success("Booking removed successfully");
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
        <div className=" mb-8">
          <h1 className="text-center text-[40px] font-extrabold mb-4">My Today Appointments</h1>
          <p className="w-3/4 text-center mx-auto text-base font-normal text-[#0F0F0F] mb-8">
            Our platform connects you with verified, experienced Lawyers across various specialties — all at your
            convenience.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center">
            <span className="loading loading-bars loading-lg"></span>
          </div>
        ) : (
          <div className="space-y-5">
            {bookings.map((lawyer) => (
              <div key={lawyer?.id} className="bg-white rounded-md p-5 shadow-md border border-gray-300">
                <div className="w-full h-full pb-5 border-b border-dashed flex justify-between items-center">
                  <div>
                    <p className="text-base font-bold mb-1">{lawyer?.name}</p>
                    <p className="text-base font-normal text-gray-500">{lawyer?.department}</p>
                  </div>
                  <p className="text-base font-normal text-gray-500">Appointment Fee : {lawyer?.consultation_fee} Taka</p>
                </div>

                <button
                  onClick={() => handleRemoveBooking(lawyer?.license_number)}
                  className="w-full h-10 text-red-500 hover:bg-red-500 hover:text-white border border-gray-300 hover:border-none transition-colors duration-300 text-base text-center rounded-full mt-5"
                >
                  Cancel Appointment
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBookings;
