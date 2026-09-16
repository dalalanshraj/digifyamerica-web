// import React, { useEffect, useState } from "react";
// import { Helmet } from "react-helmet-async";
// import { Link } from "react-router-dom";
// import axios from "axios";

// export default function Blogs() {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   const fetchBlogs = async () => {
//     try {
//       const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/blogs`);

//       console.log("BLOG RESPONSE:", res.data);

//       setBlogs(res.data);
//     } catch (err) {
//       console.log(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Helmet>
//         <title>Blogs</title>
//       </Helmet>

//       <section className="bg-[#fff] min-h-screen pt-28 pb-20">
//         <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
//           <h1 className="fontplayfair text-6xl text-[#1B3C53] font-bold">
//             Our Blogs
//           </h1>

//           <p className="mt-5 text-xl text-[#234C6A]">
//             Total Blogs : {blogs.length}
//           </p>
//         </div>

//         {loading && <div className="text-center text-2xl">Loading...</div>}

//         <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
//           {blogs.map((blog) => {
//             console.log(blog);

//             return (
//               <Link
//                 key={blog._id}
//                 to={`/blog/${blog.slug}`}
//                 className="group bg-white rounded-[28px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
//               >
//                 <div className="relative">
//                   {blog.featuredImage ? (
//                     <img
//                       src={`${import.meta.env.VITE_API_URL}/uploads/blogs/${blog.featuredImage}`}
//                       alt={blog.title}
//                       className="w-full h-[250px] object-cover"
//                       onError={(e) => {
//                         console.log("IMAGE ERROR:", e.target.src);
//                         e.target.style.display = "none";
//                       }}
//                     />
//                   ) : (
//                     <div className="h-[250px] flex items-center justify-center bg-gray-300">
//                       No Image
//                     </div>
//                   )}

//                   <div className="absolute top-4 left-4 bg-white rounded-full px-4 py-2 text-xs font-semibold">
//                     {new Date(blog.createdAt).toLocaleDateString()}
//                   </div>
//                 </div>

//                 <div className="p-6">
//                   <h2 className="text-2xl font-bold text-[#1B3C53]">
//                     {blog.title}
//                   </h2>

//                   <p className="mt-4 text-gray-600">{blog.excerpt}</p>
//                 </div>
//               </Link>
//             );
//           })}
//         </div>
//       </section>
//     </>
//   );
// }

import React from "react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const blogs = [
  {
  slug: "/guest-just-cancelled-heres-exactly-what-to-do-in-the-next-24-hours",
  title:
    "Guest Just Cancelled? Here's Exactly What to Do in the Next 24 Hours",
  desc:
    "Learn what to do when a vacation rental guest cancels, how to relist quickly, and how to fill a last-minute vacation rental gap.",
  date: "September 14, 2026",
  image: "/blogs/blogs55.webp",
},
  {
  slug: "/how-to-use-vacation-rental-guest-reviews-as-marketing-content",
  title:
    "How to Use Vacation Rental Guest Reviews as Marketing Content And Where to Put Them",
  desc:
    "Learn how to use vacation rental guest reviews as marketing content, repurpose reviews across different channels, and build a consistent vacation rental review marketing strategy.",
  date: "September 14, 2026",
  image: "/blogs/blogs54.webp",
},
  {
  slug: "/the-vacation-rental-owners-guide-to-pricing-cleaning-fee",
  title: "The Vacation Rental Owner's Guide to Pricing Cleaning Fee",
  desc:
    "Learn how to price your vacation rental cleaning fee, benchmark competitors, use a hybrid pricing approach, and present cleaning costs without hurting bookings.",
  date: "September 14, 2026",
  image: "/blogs/blogs53.webp",
},
  {
  slug: "/guide-to-upselling-how-to-earn-more-from-every-booking",
  title:
    "Guide to Upselling - How to Earn More from Every Booking",
  desc:
    "Learn vacation rental upselling tips, how to earn more from vacation rental bookings, and the best vacation rental add-ons and extras.",
   date: "September 7, 2026",
  image: "/blogs/blogs50.webp",
},
{
  slug: "/what-guests-read-in-your-listing-and-what-they-skip",
  title:
    "What Guests Read in Your Listing and What They Skip",
  desc:
    "Learn vacation rental listing optimization tips, what guests look for in vacation rental listing, and which vacation rental listing sections convert.",
   date: "September 7, 2026",
  image: "/blogs/blogs51.webp",
},
{
  slug: "/how-to-market-your-vacation-rental-to-international-travelers-in-2026",
  title:
    "How to Market Your Vacation Rental to International Travelers in 2026",
  desc:
    "Learn how to attract international vacation rental guests, market your vacation rental to international travelers, and optimize your vacation rental listing for international guests.",
  date: "September 7, 2026",
  image: "/blogs/blogs52.webp",
},
  {
  slug: "/how-to-write-vacation-rental-house-rules",
  title:
    "How to Write Vacation Rental House Rules That Protect Your Property Without Scaring Guests Away",
  desc:
    "Learn how to write vacation rental house rules that protect your property, set clear expectations, and create a welcoming experience without scaring guests away.",
  date: "August 31, 2026",
  image: "/blogs/blogs49.webp",
},
  {
  slug: "/short-term-vs-long-term-vacation-rental-2026",
  title:
    "Short-Term vs Long-Term Vacation Rental: Which Strategy Makes More Money in 2026?",
  desc:
    "Compare short-term vs long-term vacation rentals in 2026, including revenue, operating costs, profitability, medium-term rental options, and how to choose the right strategy for your property.",
 date: "August 31, 2026",
  image: "/blogs/blogs48.webp",
},
  {
  slug: "/how-to-name-your-vacation-rental",
  title:
    "How to Name Your Vacation Rental to Drive More Direct Bookings",
  desc:
    "Learn how to name your vacation rental with unique, memorable property name ideas that improve searchability, word-of-mouth referrals, and direct bookings.",
  date: "August 31, 2026",
  image: "/blogs/blogs47.webp",
},
  {
  slug: "/the-real-cost-of-bad-vacation-rental-photos-and-how-to-fix-them-for-free",
  title:
    "The Real Cost of Bad Vacation Rental Photos and How to Fix Them for Free",
  desc:
    "Learn vacation rental photo tips to increase bookings, understand the cost of bad vacation rental photos, and improve your vacation rental listing photos for free.",
  date: "August 24, 2026",
  image: "/blogs/blogs45.webp",
},
  {
  slug: "/how-to-set-up-a-pet-friendly-vacation-rental-without-the-mess-or-the-stress",
  title:
    "How to Set Up a Pet-Friendly Vacation Rental Without the Mess or the Stress",
  desc:
    "Learn pet friendly vacation rental setup tips, how to pet proof vacation rental, and which vacation rental pet amenities help create a better guest experience.",
  date: "August 24, 2026",
  image: "/blogs/blogs46.webp",
},
  {
    slug: "/how-to-handle-difficult-vacation-rental-guests",
    title: "How to Handle Difficult Vacation Rental Guests Without Losing Your Rating or Your Mind",
    desc: "Learn how to handle difficult vacation rental guests, respond to guest complaints, manage damage claims, handle review threats, and respond to bad vacation rental reviews.",
    date: "August 24, 2026",
    image: "/blogs/blogs44.webp",
  },
  {
    slug: "/how-to-prepare-your-vacation-rental-for-fall",
    title:
      "How to Prepare Your Vacation Rental for Fall And Why September Is the Best Time to Start",
    desc: "Learn how to prepare your vacation rental for fall season with listing updates, seasonal pricing, targeted marketing, and a smart shoulder season strategy.",
    date: "August 17, 2026",
    image: "/blogs/blogs42.webp",
  },
  {
    slug: "/google-business-profile-for-vacation-rentals",
    title:
      "Google Business Profile for Vacation Rentals: The Free Marketing Tool Most Hosts Completely Ignore",
    desc: "Learn how Google Business Profile can help vacation rental owners improve local visibility, attract direct bookings, and build trust without paying OTA commissions.",
    date: "August 17, 2026",
    image: "/blogs/blogs41.webp",
  },
  {
    slug: "/smart-home-technology-for-vacation-rentals",
    title:
      "Smart Home Technology for Vacation Rentals: What's Actually Worth the Investment in 2026",
    desc: "Discover the best smart home technology for vacation rentals in 2026, including smart locks, thermostats, Wi-Fi, noise monitoring, security, and automation.",
    date: "August 17, 2026",
    image: "/blogs/blogs43.webp",
  },
  {
    slug: "/email-marketing-for-vacation-rentals",
    title:
      "Email Marketing for Vacation Rentals: How to Get More Direct Bookings Without Paying Commission",
    desc: "Learn how email marketing for vacation rentals can increase direct bookings, build a valuable guest email list, fill last-minute gaps, and reduce dependence on third-party platforms.",
    date: "August 10, 2026",
    image: "/blogs/blogs40.webp",
  },
  {
    slug: "/5-star-vacation-rental-host-tips",
    title:
      "5-Star Vacation Rental Host Tips: What the Best-Reviewed Hosts Do Differently",
    desc: "Discover what the best-reviewed vacation rental hosts do differently. Learn practical hosting systems, communication strategies, guest experience tips, and ways to earn more 5-star reviews.",
    date: "August 10, 2026",
    image: "/blogs/blogs39.webp",
  },
  {
    slug: "/bleisure-travel-vacation-rentals",
    title:
      "Bleisure Travel and Vacation Rentals: How to Attract Business Travelers Who Stay for the Weekend",
    desc: "Learn how to attract bleisure travelers to your vacation rental, optimize your listing for business travelers, and turn work trips into longer stays and repeat bookings.",
    date: "August 10, 2026",
    image: "/blogs/blogs38.webp",
  },
  {
    slug: "/climate-risk-vacation-rentals-peak-season",
    title:
      "Climate Risk and Vacation Rentals: What Every Host Should Know Before Peak Season",
    desc: "Learn how to protect your vacation rental from climate risks in 2026. Discover hurricane preparedness tips, short-term rental insurance advice, flood coverage, and ways to safeguard your rental income.",
    date: "August 3 2026",
    image: "/blogs/blogs37.webp",
  },
  {
    slug: "/how-to-build-a-vacation-rental-brand",
    title:
      "How to Build a Vacation Rental Brand That Guests Remember And Return To",
    desc: "Learn how to build a memorable vacation rental brand that attracts repeat guests, increases direct bookings, and helps your property stand out in a competitive market.",
    date: "August 3 2026",
    image: "/blogs/blogs36.webp",
  },
  {
    slug: "/vacation-rental-occupancy-rates-dropping-2026",
    title:
      "The Real Reason Occupancy Rates Are Dropping in 2026 and What Smart Hosts Are Doing About It",
    desc: "Learn why vacation rental occupancy rates are declining in 2026 and discover proven strategies to improve occupancy, increase revenue, and stay competitive in today's market.",
    date: "August 3 2026",
    image: "/blogs/blogs35.webp",
  },
  {
    slug: "/why-vacation-rental-gets-views-but-no-bookings",
    title:
      "Why Your Vacation Rental Is Getting Views but No Bookings (And How to Fix It)",
    desc: "Learn why your vacation rental listing isn't converting visitors into guests. Discover practical pricing, photography, description, and OTA optimization tips to increase bookings.",
    date: "July 27 2026",
    image: "/blogs/blogs32.webp",
  },
  {
    slug: "/relying-solely-on-third-party-rental-platforms-is-risky",
    title:
      "Relying Solely on Third-Party Rental Platforms Is Risky for Your Vacation Rental Business",
    desc: "Learn why depending only on OTA platforms can limit your vacation rental business. Discover how direct booking websites, SEO, and diversified marketing strategies help increase bookings while reducing commission fees.",
    date: "July 27 2026",
    image: "/blogs/blogs33.webp",
  },
  {
    slug: "/set-jetting-tv-and-film-tourism-vacation-rentals-2026",
    title:
      "Set-Jetting: How TV and Film Tourism Is Filling Vacation Rental Calendars in 2026",
    desc: "Discover how the set-jetting travel trend is helping vacation rental owners attract more bookings. Learn how TV and film tourism, screen-inspired travel, and storytelling can make your property stand out in 2026.",
    date: "July 27 2026",
    image: "/blogs/blogs34.webp",
  },
  {
    slug: "/vacation-rental-photography-tips",
    title:
      "Vacation Rental Photography Tips: How to Make Your Listing Photos Sell the Experience",
    desc: "Discover vacation rental photography tips that increase clicks and bookings. Learn how to photograph your vacation rental property with stunning listing photos that sell the experience.",
    date: "July 20 2026",
    image: "/blogs/blogs31.webp",
  },
  {
    slug: "/how-to-handle-negative-reviews-vacation-rental",
    title:
      "How to Handle Negative Reviews for Your Vacation Rental Without Losing Bookings",
    desc: "Learn how to respond to negative vacation rental reviews professionally, build guest trust, and protect future bookings with proven reputation management strategies.",
    date: "July 20 2026",
    image: "/blogs/blogs30.webp",
  },
  {
    slug: "/how-to-price-vacation-rental-holiday-weekends",
    title: "How to Price Your Vacation Rental for Holiday Weekends",
    desc: "Learn the best holiday weekend pricing strategy for your vacation rental. Discover when to raise rates, avoid common pricing mistakes, and maximize holiday revenue.",
    date: "July 20 2026",
    image: "/blogs/blogs29.webp",
  },
  {
    slug: "/how-to-attract-remote-work-travelers",
    title:
      "How to Attract Remote Work Travelers to Your Vacation Rental (The Workcation Goldmine)",
    desc: "Learn how to attract remote work travelers with workcation-friendly amenities, fast Wi-Fi, dedicated workspaces, and proven vacation rental marketing strategies.",
    date: "July 13 2026",
    image: "/blogs/blogs28.webp",
  },
  {
    slug: "/how-to-write-vacation-rental-description-that-converts",
    title:
      "How to Write a Vacation Rental Description That Converts (With Real Examples)",
    desc: "Learn how to write vacation rental descriptions that attract more guests, improve conversions, and increase direct bookings with proven copywriting strategies and real examples.",
    date: "July 13 2026",
    image: "/blogs/blogs26.webp",
  },
  {
    slug: "/pet-friendly-vacation-rentals",
    title:
      "Pet-Friendly Vacation Rentals: Why Allowing Pets Could Increase Your Bookings",
    desc: "Discover why pet-friendly vacation rentals attract more bookings, increase revenue, and build loyal returning guests with practical tips for welcoming pets safely.",
    date: "July 13 2026",
    image: "/blogs/blogs27.webp",
  },
  {
    slug: "/farm-stays-rural-rentals-booming-2026",
    title:
      "Farm Stays and Rural Rentals Are Booming in 2026 – Here's How to Capitalize on It",
    desc: "Discover why farm stays and rural vacation rentals are booming in 2026 and learn practical marketing strategies to attract Gen Z travelers, families, and nature lovers.",
    date: "July 4 2026",
    image: "/blogs/blogs23.webp",
  },
  {
    slug: "/micro-trips-weekend-getaways",
    title:
      "Micro-trips and Weekend Getaways: How to Market Your Rental for Shorter Stays",
    desc: "Learn how to attract more weekend travelers with proven vacation rental marketing strategies for micro-trips, short stays, and spontaneous bookings.",
    date: "July 4 2026",
    image: "/blogs/blogs24.webp",
  },
  {
    slug: "/summer-vacation-rental-marketing",
    title:
      "Summer Vacation Rental Marketing: How to Capture Last-Minute July and August Travelers",
    desc: "Learn practical summer vacation rental marketing tips to attract last-minute July and August travelers, maximize occupancy, and increase direct bookings during peak season.",
    date: "July 4 2026",
    image: "/blogs/blogs25.webp",
  },
  {
    slug: "/fifa-world-cup-vacation-rental-marketing",
    title: "Is your vacation rental ready for the FIFA World Cup travel surge?",
    desc: "Learn how vacation rental owners can attract more bookings during the FIFA World Cup by optimizing listings, pricing, and marketing strategies.",
    date: "June 29, 2026",
    image: "/blogs/blogs20.webp",
  },

  {
    slug: "/short-term-rental-regulations-2026",
    title:
      "Short-term rental regulations are changing in 2026 - Is your listing compliant?",
    desc: "Stay ahead of changing short-term rental regulations in 2026 and learn how to keep your vacation rental listing compliant.",
    date: "June 29, 2026",
    image: "/blogs/blogs21.webp",
  },

  {
    slug: "/last-minute-bookings-vacation-rental",
    title:
      "Last-minute bookings are the new normal - Is your listing set up to win them?",
    desc: "Discover proven strategies to attract more last-minute vacation rental bookings and improve occupancy throughout the year.",
    date: "June 29, 2026",
    image: "/blogs/blogs22.webp",
  },
  {
    slug: "/top-features-vacation-rental-website-2026",
    title: "Top Features Every Vacation Rental Website Must Have in 2026",
    desc: "Discover the most important vacation rental website features for 2026 that help increase direct bookings, build trust, and improve SEO rankings.",
    date: "June 22 2026",
    image: "/blogs/blogs17.webp",
  },
  {
    slug: "/how-to-get-more-reviews-for-vacation-rental",
    title:
      "Why Reviews Are Important And How To Get More Positive Reviews For Your Property",
    desc: "Learn why reviews matter for vacation rentals and discover proven strategies to get more positive reviews that increase bookings and build trust.",
    date: "June 22 2026",
    image: "/blogs/blogs18.webp",
  },
  {
    slug: "/vacation-rental-web-design-agency",
    title:
      "What To Look For When Hiring A Web Design Agency For Your Vacation Rental",
    desc: "Discover how to choose the right vacation rental website design company and avoid costly mistakes that hurt bookings.",
    date: "June 22 2026",
    image: "/blogs/blogs19.webp",
  },
  {
    slug: "/dynamic-pricing-for-vacation-rentals",
    title:
      "Dynamic pricing for vacation rentals explained: Are you leaving money on the table?",
    desc: "Learn how dynamic pricing for vacation rentals helps maximize revenue, improve occupancy rates, and create a smarter vacation rental pricing strategy.",
    date: "June 15, 2026",
    image: "/blogs/blogs14.webp",
  },
  {
    slug: "/vacation-rental-guest-experience",
    title:
      "The vacation rental guest experience: From first search to repeat booking",
    desc: "Learn how to improve the vacation rental guest experience, increase repeat bookings, and optimize every stage of the vacation rental customer journey.",
    date: "June 15, 2026",
    image: "/blogs/blogs15.webp",
  },
  {
    slug: "/improve-vacation-rental-occupancy-rate",
    title:
      "How to reduce last-minute vacancy and improve your vacation rental occupancy rate",
    desc: "Learn how to improve vacation rental occupancy rates, reduce vacancy, and increase last-minute bookings using pricing, ads, and direct booking strategies.",
    date: "June 15, 2026",
    image: "/blogs/blogs16.webp",
  },
  {
    slug: "/ai-for-vacation-rental-bookings",
    title:
      "How AI can help vacation rental owners save time and get more bookings",
    desc: "Discover how AI tools for vacation rental owners can automate guest communication, optimize pricing, create content, and increase direct bookings while saving valuable time.",
    date: "June 10, 2026",
    image: "/blogs/blogs11.webp",
  },

  {
    slug: "/7-reasons-guests-book-vacation-rentals",
    title: "7 reasons guests book one vacation rental over another",
    desc: "Discover the real reasons guests choose one vacation rental over another and learn practical ways to increase bookings.",
    date: "June 10, 2026",
    image: "/blogs/blogs12.webp",
  },

  {
    slug: "/vacation-rental-listing-optimization",
    title:
      "Vacation rental listing optimization: What high-converting properties have in common",
    desc: "Learn the proven vacation rental listing optimization strategies that help high-converting properties attract more clicks, build trust, and generate more bookings.",
    date: "June 10, 2026",
    image: "/blogs/blogs13.webp",
  },
  {
    slug: "/seo-for-vacation-rentals",
    title: "How to get more bookings without paying extra commission",
    desc: "Learn how vacation rental owners can use SEO to attract direct bookings, reduce dependence on third-party platforms, and grow long-term visibility on Google.",
    date: "May 21, 2026",
    image: "/blogs/blogs1.webp",
  },

  {
    slug: "/facebook-google-ads-vacation-rentals",
    title: "Do Facebook and Google Ads Work for Vacation Rentals?",
    desc: "A practical guide explaining how Facebook and Google Ads help vacation rental owners increase bookings and avoid wasting ad budget.",
    date: "May 21, 2026",
    image: "/blogs/blogs2.webp",
  },

  {
    slug: "/vacation-rental-website-benefits",
    title: "Why your vacation rental should have its own website?",
    desc: "Discover why direct booking websites help vacation rental owners save commission fees and build long-term business growth.",
    date: "May 21, 2026",
    image: "/blogs/blogs3.webp",
  },

  {
    slug: "/website-speed-google-ranking",
    title: "How your website speed can kill your Google ranking and bookings",
    desc: "Understand how slow websites hurt SEO rankings and direct bookings, plus learn simple fixes to improve performance.",
    date: "May 21, 2026",
    image: "/blogs/blogs4.webp",
  },

  {
    slug: "/landing-pages-for-vacation-rentals",
    title:
      "What is a landing page and why does every vacation rental owner need one?",
    desc: "Learn how high-converting landing pages help vacation rental owners turn visitors into direct bookings.",
    date: "May 21, 2026",
    image: "/blogs/blogs5.webp",
  },

  {
    slug: "/modern-seo-best-practices",
    title: "On-page vs off-page SEO: What's the real difference?",
    desc: "Way too many people get stuck on this question. They treat on-page and off-page SEO like they are two completely different skill sets.",
    date: "March 15, 2026",
    image: "/blogs/blogs6.webp",
  },

  {
    slug: "/social-media-campaigns",
    title: "The psychology behind viral social media campaigns",
    desc: "Some videos or memes explode across the internet leaving us wonder, why that one?",
    date: "March 15, 2026",
    image: "/blogs/blogs7.webp",
  },

  {
    slug: "/optimize-ad-performance",
    title: "How to use data to optimize ad performance",
    desc: "Data is like a GPS for your marketing campaigns without it, you are just driving around hoping you will end up somewhere profitable.",
    date: "March 15, 2026",
    image: "/blogs/blogs8.webp",
  },

  {
    slug: "/email-subject",
    title: "How to write email subject lines that get clicked",
    desc: "Your subject line is literally the only thing standing between your carefully crafted email and the trash folder.",
    date: "March 15, 2026",
    image: "/blogs/blogs9.webp",
  },

  {
    slug: "/brand-voice",
    title: "How to define your brand voice for social media",
    desc: "Your brand already has a voice. You just need to figure out what it actually is.",
    date: "March 15, 2026",
    image: "/blogs/blogs10.webp",
  },
  {
    slug: "/dynamic-pricing-for-vacation-rentals",
    title:
      "Dynamic pricing for vacation rentals explained: Are you leaving money on the table?",
    desc: "Learn how dynamic pricing for vacation rentals helps maximize revenue, improve occupancy rates, and create a smarter vacation rental pricing strategy.",
    date: "March 15, 2026",
    image: "/blogs/blogs14.webp",
  },
];

const Blogs = () => {
  const BLOGS_PER_PAGE = 15;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogs.length / BLOGS_PER_PAGE);

  const startIndex = (currentPage - 1) * BLOGS_PER_PAGE;

  const currentBlogs = blogs.slice(startIndex, startIndex + BLOGS_PER_PAGE);
  return (
    <>
      <Helmet>
        <title>Blog | Digital Marketing Tips & Business Growth Insights</title>

        <meta
          name="description"
          content="Read expert articles on SEO, branding, design, advertising, social media strategies and digital marketing trends."
        />
      </Helmet>

      <section className="bg-[#fff] min-h-screen pt-28 pb-20 overflow-hidden">
        {/* Hero */}
        <div className="max-w-7xl mx-auto px-6 mb-20">
          <div className="relative z-10 text-center">
            <h1 className="fontplayfair text-[#1B3C53] font-bold leading-[0.95] mt-5 text-5xl sm:text-6xl md:text-7xl lg:text-[90px]">
              Our Blogs
            </h1>

            <p className="max-w-3xl mx-auto mt-6 text-[#234C6A] ont-[500] Poppins-font text-base md:text-2xl leading-relaxed">
              Explore expert tips to help businesses grow faster online.
            </p>
          </div>
        </div>

        {/* Blog Grid */}
        <section className="px-6">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 max-w-7xl mx-auto">
            {currentBlogs.map((blog) => (
              <Link
                key={blog.slug}
                to={blog.slug}
                className="group bg-white rounded-[28px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[#ece1d8]"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <LazyLoadImage
                    src={blog.image}
                    alt={blog.title}
                    effect="blur"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    className="w-full   object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                  {/* Date */}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className=" px-[3px] text-blue-500 hover:text-black   ">
                    {blog.date}
                  </div>

                  <h2 className="text-[#0F2D45] text-[24px] leading-tight font-bold mb-4 group-hover:text-[#1B3C53] transition duration-300">
                    {blog.title}
                  </h2>

                  <p className="text-[#4b5563] text-[15px] leading-relaxed">
                    {blog.desc}
                  </p>

                  {/* <div className="mt-auto pt-6 flex items-center justify-between">
                    <span className="text-[#0F2D45] font-semibold group-hover:text-red-500 transition">
                      Read Article
                    </span>

                    <div className="w-10 h-10 shrink-0 rounded-full bg-[#0F2D45] text-white flex items-center justify-center group-hover:bg-red-500 transition duration-300">
                      →
                    </div>
                  </div> */}
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center items-center gap-3 mt-16 flex-wrap">
            <button
              disabled={currentPage === 1}
              onClick={() => {
                setCurrentPage((prev) => prev - 1);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="px-5 py-2 rounded-lg bg-gray-200 disabled:opacity-40 cursor-pointer"
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentPage(index + 1);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`w-11 h-11 rounded-full cursor-pointer ${
                  currentPage === index + 1
                    ? "bg-[#1B3C53] text-white"
                    : "bg-gray-200"
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() => {
                setCurrentPage((prev) => prev + 1);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="px-5 py-2 rounded-lg bg-gray-200 disabled:opacity-40 cursor-pointer"
            >
              Next
            </button>
          </div>
        </section>
      </section>
    </>
  );
};

export default Blogs;
