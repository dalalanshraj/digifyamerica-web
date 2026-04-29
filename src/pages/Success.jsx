function Success() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400 to-emerald-600 px-4">
      
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8 text-center">
        
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="bg-green-100 p-4 rounded-full">
            <svg
              className="w-10 h-10 text-green-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Payment Successful 🎉
        </h1>

        <p className="text-gray-500 mb-6">
          Thank you! Your payment has been completed successfully.
        </p>

        {/* Button */}
        <a
          href="/"
          className="inline-block w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
        >
          Go to Home
        </a>

        {/* Small text */}
        <p className="text-xs text-gray-400 mt-4">
          Secure payments powered by PayPal
        </p>
      </div>
    </div>
  );
}

export default Success;