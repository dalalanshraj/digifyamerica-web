function Cancel() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-400 to-pink-600 px-4">
      
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8 text-center">
        
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="bg-red-100 p-4 rounded-full">
            <svg
              className="w-10 h-10 text-red-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Payment Cancelled ❌
        </h1>

        <p className="text-gray-500 mb-6">
          Your payment was not completed. You can try again anytime.
        </p>

        {/* Button */}
        <a
          href="/payment"
          className="inline-block w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition"
        >
          Try Again
        </a>

        <p className="text-xs text-gray-400 mt-4">
          Need help? Contact support
        </p>
      </div>
    </div>
  );
}

export default Cancel;