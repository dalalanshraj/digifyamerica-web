import Problem from '../assets/problem.png'
import { VscChromeClose } from "react-icons/vsc";
const ProblemSection = () => {
  return (
    <section className="py-20 max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

      {/* LEFT CONTENT */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-[#456882] mb-6 fontplayfair">
          You’re getting bookings… but at what cost?
        </h2>

        <ul className="space-y-4 text-gray-700 text-lg">
          <li className='flex gap-1'><VscChromeClose color='red' className='mt-1' /> High commissions eating your margins</li>
           <li className='flex gap-1'><VscChromeClose color='red' className='mt-1' /> No control over guest relationships</li>
           <li className='flex gap-1'><VscChromeClose color='red' className='mt-1' /> Dependency on OTAs & platforms</li>
           <li className='flex gap-1'><VscChromeClose color='red' className='mt-1' /> A website that looks good but doesn’t convert</li>
        </ul>

        <p className="mt-6 font-semibold text-lg">
          You don’t own your bookings. The platforms do.
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div>
        <img
          src={Problem}
          alt="Vacation rental problem"
          className="w-full rounded-2xl "
        />
      </div>

    </section>
  );
};

export default ProblemSection;