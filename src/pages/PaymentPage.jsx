import { useState } from "react";
import emailjs from "@emailjs/browser";

function PaymentPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
  });

  const [errors, setErrors] = useState({});
  const [modal, setModal] = useState({ show: false, message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error
  };

  // 🔥 Validation
 const validate = () => {
  const newErrors = {};

  if (!form.name.trim()) {
    newErrors.name = "Please enter your name";
  }

  if (!form.email.trim()) {
    newErrors.email = "Please enter your email";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    newErrors.email = "Please enter a valid email address";
  }

  if (!form.phone.trim()) {
    newErrors.phone = "Please enter your phone number";
  } else if (!/^[0-9]{10,15}$/.test(form.phone)) {
    newErrors.phone = "Please enter a valid phone number";
  }

 if (form.website && !form.website.startsWith("http")) {
  alert("Enter valid URL");
  return;
}

  return newErrors;
};

  const handleSubmit = async () => {
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setModal({
        show: true,
        message: "Please fill all required fields correctly"
      });
      return;
    }

    try {
      setLoading(true);

      await emailjs.send(
        "service_lq2ng3r",
        "template_b2yd829",
        form,
        "cRSuTQZ-JIDCuwin0"
      );

      // Redirect
      window.location.href =
        "https://www.paypal.com/ncp/payment/K6G79GUASF63N";

    } catch (error) {
      console.error(error);
      setModal({
        show: true,
        message: "Failed to send. Try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">

        <h1 className="text-3xl font-bold text-center mb-4 uppercase" >
         customer details
        </h1>

        {/* Inputs */}
        {["name", "email", "phone", "website"].map((field) => (
          <div key={field} className="mb-3">
            <input
              name={field}
              placeholder={field}
              onChange={handleChange}
              className="w-full border p-3 rounded"
            />
            {errors[field] && (
              <p className="text-red-500 text-sm mt-1">
                {errors[field]}
              </p>
            )}
          </div>
        ))}

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-[#456882] hover:bg-[#36576c] text-white py-3 rounded-lg"
        >
          {loading ? "Processing..." : "Continue to Payment"}
        </button>
      </div>

      {/* 🔥 Modal */}
      {modal.show && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-80 text-center">
            <p className="mb-4 text-gray-700">{modal.message}</p>
            <button
              onClick={() => setModal({ show: false, message: "" })}
              className="bg-indigo-600 text-white px-4 py-2 rounded"
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