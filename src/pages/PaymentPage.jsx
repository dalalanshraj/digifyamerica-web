 import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

function PaymentPage() {
  const [accepted, setAccepted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
  });

  const [errors, setErrors] = useState({});
  const [modal, setModal] = useState({
    show: false,
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // ================================
  // HANDLE INPUT CHANGE
  // ================================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // ================================
  // VALIDATION
  // ================================
  const validate = () => {
    const newErrors = {};

    // Name
    if (!form.name.trim()) {
      newErrors.name = "Please enter your name";
    }

    // Email
    if (!form.email.trim()) {
      newErrors.email = "Please enter your email";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
    ) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone
    if (!form.phone.trim()) {
      newErrors.phone = "Please enter your phone number";
    } else if (!/^[0-9]{10,15}$/.test(form.phone.trim())) {
      newErrors.phone =
        "Please enter a valid phone number (10-15 digits)";
    }

    return newErrors;
  };

  // ================================
  // SUBMIT
  // ================================
  const handleSubmit = async () => {
    // Check Terms first
    if (!accepted) {
      setModal({
        show: true,
        message: "Please accept Terms & Conditions first.",
      });

      return;
    }

    // Validate form
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);

      setModal({
        show: true,
        message: "Please fill all required fields correctly.",
      });

      return;
    }

    try {
      setLoading(true);

      // ================================
      // SEND EMAIL USING EMAILJS
      // ================================
      await emailjs.send(
        "service_zz75v0n",
        "template_jkpznur",
        {
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          website: form.website.trim(),
        },
        "cRSuTQZ-JIDCuwin0"
      );

      // ================================
      // REDIRECT TO PAYPAL
      // ================================
      window.location.href =
        "https://www.paypal.com/ncp/payment/K6G79GUASF63N";
    } catch (error) {
      console.error("EmailJS Error:", error);

      setModal({
        show: true,
        message: "Failed to send details. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  // ================================
  // CLOSE MODAL
  // ================================
  const closeModal = () => {
    setModal({
      show: false,
      message: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">
        {/* ================================
            TITLE
        ================================= */}
        <h1 className="text-3xl font-bold text-center mb-6 uppercase">
          Customer Details
        </h1>

        {/* ================================
            NAME
        ================================= */}
        <div className="mb-4">
          <input
            type="text"
            name="name"
            value={form.name}
            placeholder="Name"
            onChange={handleChange}
            className={`w-full border p-3 rounded-lg outline-none transition ${
              errors.name
                ? "border-red-500"
                : "border-gray-300 focus:border-[#456882]"
            }`}
          />

          {errors.name && (
            <p className="text-red-500 text-sm mt-1">
              {errors.name}
            </p>
          )}
        </div>

        {/* ================================
            EMAIL
        ================================= */}
        <div className="mb-4">
          <input
            type="email"
            name="email"
            value={form.email}
            placeholder="Email"
            onChange={handleChange}
            className={`w-full border p-3 rounded-lg outline-none transition ${
              errors.email
                ? "border-red-500"
                : "border-gray-300 focus:border-[#456882]"
            }`}
          />

          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email}
            </p>
          )}
        </div>

        {/* ================================
            PHONE
        ================================= */}
        <div className="mb-4">
          <input
            type="tel"
            name="phone"
            value={form.phone}
            placeholder="Phone"
            onChange={handleChange}
            className={`w-full border p-3 rounded-lg outline-none transition ${
              errors.phone
                ? "border-red-500"
                : "border-gray-300 focus:border-[#456882]"
            }`}
          />

          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">
              {errors.phone}
            </p>
          )}
        </div>

        {/* ================================
            WEBSITE
        ================================= */}
        <div className="mb-5">
          <input
            type="text"
            name="website"
            value={form.website}
            placeholder="Website"
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:border-[#456882] transition"
          />
        </div>

        {/* ================================
            TERMS
        ================================= */}
        <div className="flex items-start gap-2 mb-5">
          <input
            type="checkbox"
            id="terms"
            checked={accepted}
            onChange={(e) => setAccepted(e.target.checked)}
            className="w-4 h-4 mt-1 cursor-pointer"
          />

          <label
            htmlFor="terms"
            className="text-sm text-gray-600 cursor-pointer"
          >
            I hereby accept and agree to the{" "}
            <Link
              to="/Terms-&-Conditions/"
              className="text-[#456882] font-semibold underline"
            >
              Terms & Conditions.
            </Link>
          </label>
        </div>

        {/* ================================
            SUBMIT BUTTON
        ================================= */}
        <button
          type="button"
          onClick={handleSubmit}
          disabled={loading}
          className={`w-full py-3 rounded-lg text-white font-semibold transition ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : accepted
              ? "bg-[#456882] hover:bg-[#36576c]"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          {loading ? "Processing..." : "Continue to Payment"}
        </button>
      </div>

      {/* ================================
          MODAL
      ================================= */}
      {modal.show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm text-center">
            <p className="mb-5 text-gray-700">
              {modal.message}
            </p>

            <button
              type="button"
              onClick={closeModal}
              className="bg-[#456882] hover:bg-[#36576c] text-white px-6 py-2 rounded-lg transition"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PaymentPage;