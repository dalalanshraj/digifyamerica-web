import logo1 from "../assets/integrations/logo1.png";
import logo2 from "../assets/integrations/logo2.png";
import logo3 from "../assets/integrations/logo3.png";
import logo4 from "../assets/integrations/logo4.png";
import logo5 from "../assets/integrations/logo5.png";
// import logo6 from "../assets/integrations/logo6.png";
import logo7 from "../assets/integrations/logo7.png";
import logo8 from "../assets/integrations/logo8.png";
import logo9 from "../assets/integrations/logo9.png";
import logo10 from "../assets/integrations/logo10.png";
import logo11 from "../assets/integrations/logo11.png";
import logo12 from "../assets/integrations/logo12.png";

export default function CompatibleSection() {
  const integrations = [
    {
      name: "BP",
      logo: logo1,
    },
    {
      name: "Streamline",
      logo: logo2,
    },
    {
      name: "Escapia",
      logo: logo3,
    },
    {
      name: "Track",
      logo: logo4,
    },
    {
      name: "Lodgify",
      logo: logo5,
    },
    // {
    //   name: "OwnerRez",
    //   logo: logo6,
    // },
    {
      name: "Streamline",
      logo: logo7,
    },
    {
      name: "Escapia",
      logo: logo8,
    },
    {
      name: "Track",
      logo: logo9,
    },
    {
      name: "Lodgify",
      logo: logo10,
    },
    {
      name: "Track",
      logo: logo11,
    },
    {
      name: "Lodgify",
      logo: logo12,
    },
  ];

  return (
    <section className="w-full bg-[#fff] overflow-hidden">
      <div className="max-w-[1900px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 py-10 lg:py-14">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Heading */}

          <div className="w-full lg:w-[33%] shrink-0 text-center lg:text-left">
            <h3 className="text-[#1B3C53] fontplayfair text-[34px] md:text-[48px] font-light">
              Compatible with :
            </h3>
          </div>

          {/* Marquee */}

          <div className="relative w-full lg:flex-1 overflow-hidden group">
            {/* Left Fade */}

            <div className="absolute left-0 top-0 z-10 h-full w-10 bg-gradient-to-r from-[#fff] to-transparent"></div>

            {/* Right Fade */}

            <div className="absolute right-0 top-0 z-10 h-full w-10 bg-gradient-to-l from-[#fff] to-transparent"></div>

            <div className="marquee flex items-center">
              {[...integrations, ...integrations].map((item, index) => (
                <div
                  key={index}
                  className="
                    flex-shrink-0
                    w-[140px]
                    sm:w-[170px]
                    md:w-[190px]
                    lg:w-[220px]
                    h-[90px]
                    sm:h-[110px]
                    md:h-[120px]
                    lg:h-[130px]
                    flex
                    items-center
                    justify-center
                  "
                >
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="
                      w-[100px]
                      sm:w-[120px]
                      md:w-[140px]
                      lg:w-[160px]
                      h-[60px]
                      sm:h-[70px]
                      md:h-[80px]
                      lg:h-[90px]
                      object-contain
                      transition-all
                      duration-300
                      hover:scale-110
                    "
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
