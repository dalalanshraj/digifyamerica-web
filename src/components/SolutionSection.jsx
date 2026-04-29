import Solution from "../assets/solutions.png"
import { VscCheck } from "react-icons/vsc";
const SolutionSection = () => {
  return (
    <section className="py-20 bg-gray-50 max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

      {/* LEFT IMAGE */}
      <div>
        <img
          src={Solution}
          alt="Vacation rental success"
          className="w-full rounded-2xl "
        />
      </div>

      {/* RIGHT CONTENT */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-[#456882] fontplayfair mb-6">
          At Digify America, we turn interest into bookings
        </h2>

        <p className="text-gray-700 text-lg mb-4">
          We combine strategy, storytelling, and performance marketing to help you:
        </p>

        <ul className="space-y-3 text-gray-700 text-lg">
          <li className="flex gap-1"><VscCheck className="mt-1" /> Attract the right guests</li>
          <li className="flex gap-1"><VscCheck className="mt-1" />Build trust instantly</li>
          <li className="flex gap-1"><VscCheck className="mt-1" /> Convert visitors into direct bookings</li>
        </ul>

        <p className="mt-6 font-semibold text-lg">
          We don’t just drive traffic. We build booking systems.
        </p>
      </div>

    </section>
  );
};

export default SolutionSection;