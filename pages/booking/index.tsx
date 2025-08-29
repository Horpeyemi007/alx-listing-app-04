import axios from "axios";
import { useState } from "react";

export default function BookingPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("/api/bookings", formData);
      alert("Booking confirmed");
    } catch (error) {
      setError("Failed to submit booking");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="container mx=auto p-6">
      <div className="w-full max-w-[700px]">
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold">Contact Detail</h2>
          <form onSubmit={handleSubmit}>
            {/* Contact Information */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="border p-2 w-full mt-2"
                />
              </div>
              <div>
                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  className="border p-2 w-full mt-2"
                  name="lastName"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  className="border p-2 w-full mt-2"
                  name="email"
                />
              </div>
              <div>
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  id="phoneNumber"
                  type="text"
                  name="phoneNumber"
                  className="border p-2 w-full mt-2"
                />
              </div>
            </div>

            {/* Payment Information */}
            <h2 className="text-xl font-semibold mt-6">Pay with</h2>
            <div className="mt-4">
              <label htmlFor="cardNumber">Card Number</label>
              <input
                id="cardNumber"
                type="text"
                name="cardNumber"
                className="border p-2 w-full mt-2"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label htmlFor="expirationDate">Expiration Date</label>
                <input
                  id="expirationDate"
                  type="text"
                  name="expirationDate"
                  className="border p-2 w-full mt-2"
                />
              </div>
              <div>
                <label htmlFor="cvv">CVV</label>
                <input
                  id="cvv"
                  type="text"
                  name="cvv"
                  className="border p-2 w-full mt-2"
                />
              </div>
            </div>

            {/* Billing Address */}
            <h2 className="text-xl font-semibold mt-6">Billing Address</h2>
            <div className="mt-4">
              <label htmlFor="billingAddress">Street Address</label>
              <input
                id="billingAddress"
                type="text"
                name="billingAddress"
                className="border p-2 w-full mt-2"
              />
            </div>

            {/* Submit Button */}
            <button
              className="mt-6 bg-green-500 text-white py-2 px-4 rounded-md w-full"
              type="submit"
              disabled={loading}
            >
              {loading ? "Processing..." : "Confirm & Pay"}
            </button>
            {error && <p className="text-red-500">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
