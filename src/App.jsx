import React, { Suspense, lazy, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Preloader from "./components/Preloader.jsx";
import "aos/dist/aos.css";
import AOS from "aos";
import PaymentPage from "./pages/PaymentPage.jsx";
import Success from "./pages/Success.jsx";
import Cancel from "./pages/Cancel.jsx";
import RazorpayPayment from "./pages/RazorpayPaymentPage.jsx";
// import BlogEleven from "./pages/ai-for-vacation-rental-bookings.jsx";
// import BlogThirteen from "./pages/vacation-rental-listing-optimizatio.jsx";
// import BlogTwelve from "./pages/7-reasons-guests-book-vacation-rentals.jsx";

import AdminRoute from "./admin/AdminRoute";
import AdminLayout from "./admin/layouts/AdminLayout";

import AdminLogin from "./admin/pages/AdminLogin";
import Dashboard from "./admin/pages/Dashboard";
import BlogList from "./admin/pages/BlogList";
import CreateBlog from "./admin/pages/CreateBlog";
import EditBlog from "./admin/pages/EditBlog";

// import Blogs from "./pages/Blogs";
import SingleBlog from "./pages/SingleBlog";
import BlogThirtyTwo from "./pages/why-vacation-rental-gets-views-but-no-bookings.jsx";
import BlogThirtyThree from "./pages/relying-solely-on-third-party-rental-platforms-is-risky.jsx";
import BlogThirtyFour from "./pages/set-jetting-tv-and-film-tourism-vacation-rentals-2026.jsx";
import BlogThirtyFive from "./pages/vacation-rental-occupancy-rates-dropping-2026.jsx";
import BlogThirtySix from "./pages/how-to-build-a-vacation-rental-brand.jsx";
import BlogThirtySeven from "./pages/climate-risk-vacation-rentals-peak-season.jsx";
import BlogThirtyEight from "./pages/bleisure-travel-vacation-rentals.jsx";
import BlogThirtyNine from "./pages/5-star-vacation-rental-host-tips.jsx";
import BlogForty from "./pages/email-marketing-for-vacation-rentals.jsx";
import BlogFortyOne from "./pages/google-business-profile-for-vacation-rentals.jsx";
import BlogFortyTwo from "./pages/smart-home-technology-for-vacation-rentals.jsx";
import BlogFortyThree from "./pages/how-to-prepare-your-vacation-rental-for-fall.jsx";
import BlogFortyFour from "./pages/how-to-handle-difficult-vacation-rental-guests.jsx";
import BlogFortyFive from "./pages/how-to-set-up-a-pet-friendly-vacation.jsx";
import BlogFortySix from "./pages/the-real-cost-of-bad-vacation-rental.jsx";
import BlogFortySeven from "./pages/how-to-name-your-vacation-rental.jsx";
import BlogFortyEight from "./pages/short-term-vs-long-term-vacation-rental-2026.jsx";
import BlogFortyNine from "./pages/how-to-write-vacation-rental-house-rules.jsx";
import BlogFifty from "./pages/guide-to-upselling-how-to-earn-more-from-every-booking.jsx";
import BlogFiftyOne from "./pages/what-guests-read-in-your-listing-and-what-they-skip.jsx";
import BlogFiftyTwo from "./pages/how-to-market-your-vacation-rental-to-international-travelers-in-2026.jsx";
import BlogFiftyThree from "./pages/the-vacation-rental-owners-guide-to-pricing-cleaning-fee.jsx";
import BlogFiftyFour from "./pages/how-to-use-vacation-rental-guest-reviews-as-marketing-content.jsx";
import BlogFiftyFive from "./pages/guest-just-cancelled-heres-exactly-what-to-do-in-the-next-24-hours.jsx";
import BlogFiftySix from "./pages/you-have-a-vacation-rental-website-so-why-arent-guests-booking-direct.jsx";
import BlogFiftySeven from "./pages/are-google-ads-worth-it-for-vacation-rentals-what-owners-should-know.jsx";
import BlogFiftyEight from "./pages/how-much-does-a-vacation-rental-website-cost.jsx";
import BlogFiftyNine from "./pages/vacation-rental-seo-what-helps-a-property-get-found.jsx";
import BlogSixty from "./pages/how-to-improve-conversion-on-a-vacation-rental-website.jsx";
import BlogSixtyOne from "./pages/what-should-a-vacation-rental-website-include.jsx";
import BlogSixtyTwo from "./pages/how-ai-search-is-changing-seo-in-2026.jsx";
import BlogSixtyThree from "./pages/can-ai-recommend-your-vacation-rental.jsx";
import BlogSixtyFour from "./pages/seo-after-keywords-why-being-useful-matters-more-than-repeating-search-terms.jsx";

const BlogEleven = lazy(
  () => import("./pages/ai-for-vacation-rental-bookings.jsx"),
);

const BlogTwelve = lazy(
  () => import("./pages/7-reasons-guests-book-vacation-rentals.jsx"),
);

const BlogThirteen = lazy(
  () => import("./pages/vacation-rental-listing-optimizatio.jsx"),
);

const BlogFourteen = lazy(
  () => import("./pages/dynamic-pricing-for-vacation-rentals.jsx"),
);

const BlogFifteen = lazy(
  () => import("./pages/vacation-rental-guest-experience.jsx"),
);

const BlogSixteen = lazy(
  () => import("./pages/improve-vacation-rental-occupancy-rate.jsx"),
);

const BlogSeventeen = lazy(
  () => import("./pages/top-features-vacation-rental-website-2026.jsx"),
);

const BlogEighteen = lazy(() => import("./pages/BlogEighteen.jsx"));

const BlogNineteen = lazy(
  () => import("./pages/vacation-rental-web-design-agency.jsx"),
);

const BlogTwenty = lazy(
  () => import("./pages/fifa-world-cup-vacation-rental-marketing.jsx"),
);

const BlogTwentyOne = lazy(
  () => import("./pages/short-term-rental-regulations-2026.jsx"),
);

const BlogTwentyTwo = lazy(
  () => import("./pages/last-minute-bookings-vacation-rental.jsx"),
);

const BlogTwentyThree = lazy(
  () => import("./pages/farm-stays-rural-rentals-booming-2026.jsx"),
);

const BlogTwentyFour = lazy(
  () => import("./pages/micro-trips-weekend-getaways.jsx"),
);

const BlogTwentyFive = lazy(
  () => import("./pages/summer-vacation-rental-marketing.jsx"),
);

const BlogTwentySix = lazy(
  () =>
    import("./pages/how-to-write-vacation-rental-description-that-converts.jsx"),
);

const BlogTwentySeven = lazy(
  () => import("./pages/pet-friendly-vacation-rentals.jsx"),
);

const BlogTwentyEight = lazy(
  () => import("./pages/how-to-attract-remote-work-travelers.jsx"),
);

const BlogTwentyNine = lazy(
  () => import("./pages/how-to-price-vacation-rental-holiday-weekends.jsx"),
);

const BlogThirty = lazy(
  () => import("./pages/how-to-handle-negative-reviews-vacation-rental.jsx"),
);

const BlogThirtyOne = lazy(
  () => import("./pages/vacation-rental-photography-tips.jsx"),
);

const TopFeaturesVacationRentalWebsite2026 = lazy(
  () => import("./pages/top-features-vacation-rental-website-2026.jsx"),
);

// ✅ Lazy imports (only pages)
const Home = lazy(() => import("./pages/Home/Home.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Blogs = lazy(() => import("./pages/Blogs.jsx"));
const Connect = lazy(() => import("./pages/Contect.jsx"));

// const DigitalMarketing = lazy(() => import("./pages/Solutions/Digital-Marketing.jsx"));
const Pricing = lazy(() => import("./pages/Pricing.jsx"));

const BlogOne = lazy(() => import("./pages/seo-for-vacation-rentals.jsx"));
const BlogTwo = lazy(
  () => import("./pages/facebook-google-ads-vacation-rentals.jsx"),
);
const BlogThree = lazy(
  () => import("./pages/vacation-rental-website-benefits.jsx"),
);
const BlogFour = lazy(() => import("./pages/website-speed-google-ranking.jsx"));
const BlogFive = lazy(
  () => import("./pages/landing-pages-for-vacation-rentals.jsx"),
);
const BlogSix = lazy(() => import("./pages/modern-seo-best-practices.jsx"));
const BlogSeven = lazy(() => import("./pages/your-website-is-boring.jsx"));
const BlogEighth = lazy(() => import("./pages/psychology-of-branding.jsx"));
const BlogNine = lazy(() => import("./pages/social-media-that-sells.jsx"));
const BlogTen = lazy(() => import("./pages/digital-first-impressions.jsx"));

const WebDevelopment = lazy(
  () => import("./pages/Services/WebDevelopment.jsx"),
);
const SeoService = lazy(() => import("./pages/Services/SeoService.jsx"));
const GraphicDesign = lazy(() => import("./pages/Services/graphicDesign.jsx"));
const SocialMedia = lazy(() => import("./pages/Services/socialMedia.jsx"));
const BrandingSection = lazy(
  () => import("./pages/Services/brandingSection.jsx"),
);
const VideoProduction = lazy(
  () => import("./pages/Services/videoProduction.jsx"),
);

const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy.jsx"));
const TermsConditions = lazy(() => import("./pages/Terms&Conditions.jsx"));
const Support = lazy(() => import("./pages/Support.jsx"));
const FaqSection = lazy(() => import("./pages/Faq.jsx"));

function App() {
  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith("/admin");

  useEffect(() => {
    AOS.init({
      duration: 1000, // Global animation duration
      once: true, // Animate once per scroll
    });
  }, []);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//code.tidio.co/ayacukfak1ovyii2w6chvtfm3tw51hgl.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <>
      <Preloader />
      <ScrollToTop />
      {!isAdminRoute && <Navbar />}

      {/* ✅ Suspense wraps ALL routes */}
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen text-xl">
            Loading...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />

          {/* Services */}
          <Route path="/web-designing/" element={<WebDevelopment />} />
          <Route path="/search-engine-optimization/" element={<SeoService />} />
          <Route path="/graphic-design/" element={<GraphicDesign />} />
          <Route path="/social-media-marketing/" element={<SocialMedia />} />
          <Route path="/branding/" element={<BrandingSection />} />
          <Route path="/video-production/" element={<VideoProduction />} />

          {/* Solutions */}
          {/* <Route path="/digital-marketing/" element={<DigitalMarketing />} /> */}

          {/* Other Pages */}
          <Route path="/pricing/" element={<Pricing />} />
          <Route path="/blogs/" element={<Blogs />} />

          {/* Blog Single Pages */}
          <Route path="/seo-for-vacation-rentals" element={<BlogOne />} />
          <Route
            path="/facebook-google-ads-vacation-rentals"
            element={<BlogTwo />}
          />
          <Route
            path="/vacation-rental-website-benefits"
            element={<BlogThree />}
          />
          <Route path="/website-speed-google-ranking" element={<BlogFour />} />
          <Route
            path="/landing-pages-for-vacation-rentals"
            element={<BlogFive />}
          />
          <Route path="/modern-seo-best-practices" element={<BlogSix />} />
          <Route path="/social-media-campaigns" element={<BlogSeven />} />
          <Route path="/optimize-ad-performance" element={<BlogEighth />} />
          <Route path="/email-subject" element={<BlogNine />} />
          <Route path="/brand-voice" element={<BlogTen />} />
          <Route
            path="/ai-for-vacation-rental-bookings"
            element={<BlogEleven />}
          />

          <Route
            path="/vacation-rental-listing-optimization"
            element={<BlogThirteen />}
          />

          <Route
            path="/7-reasons-guests-book-vacation-rentals"
            element={<BlogTwelve />}
          />
          <Route
            path="/dynamic-pricing-for-vacation-rentals"
            element={<BlogFourteen />}
          />
          <Route
            path="/vacation-rental-guest-experience"
            element={<BlogFifteen />}
          />
          <Route
            path="/improve-vacation-rental-occupancy-rate"
            element={<BlogSixteen />}
          />
          <Route
            path="/top-features-vacation-rental-website-2026"
            element={<BlogSeventeen />}
          />
          <Route
            path="/how-to-get-more-reviews-for-vacation-rental"
            element={<BlogEighteen />}
          />
          <Route
            path="/vacation-rental-web-design-agency"
            element={<BlogNineteen />}
          />
          <Route
            path="/fifa-world-cup-vacation-rental-marketing"
            element={<BlogTwenty />}
          />
          <Route
            path="/short-term-rental-regulations-2026"
            element={<BlogTwentyOne />}
          />
          <Route
            path="/last-minute-bookings-vacation-rental"
            element={<BlogTwentyTwo />}
          />
          <Route
            path="/farm-stays-rural-rentals-booming-2026"
            element={<BlogTwentyThree />}
          />
          <Route
            path="/micro-trips-weekend-getaways"
            element={<BlogTwentyFour />}
          />
          <Route
            path="/summer-vacation-rental-marketing"
            element={<BlogTwentyFive />}
          />
          <Route
            path="/how-to-write-vacation-rental-description-that-converts"
            element={<BlogTwentySix />}
          />
          <Route
            path="/pet-friendly-vacation-rentals"
            element={<BlogTwentySeven />}
          />
          <Route
            path="/how-to-attract-remote-work-travelers"
            element={<BlogTwentyEight />}
          />
          <Route
            path="/how-to-price-vacation-rental-holiday-weekends"
            element={<BlogTwentyNine />}
          />
          <Route
            path="/how-to-handle-negative-reviews-vacation-rental"
            element={<BlogThirty />}
          />
          <Route
            path="/vacation-rental-photography-tips"
            element={<BlogThirtyOne />}
          />
          <Route
            path="/why-vacation-rental-gets-views-but-no-bookings"
            element={<BlogThirtyTwo />}
          />
          <Route
            path="/relying-solely-on-third-party-rental-platforms-is-risky"
            element={<BlogThirtyThree />}
          />
          <Route
            path="/set-jetting-tv-and-film-tourism-vacation-rentals-2026"
            element={<BlogThirtyFour />}
          />
          <Route
            path="/vacation-rental-occupancy-rates-dropping-2026"
            element={<BlogThirtyFive />}
          />
          <Route
            path="/how-to-build-a-vacation-rental-brand"
            element={<BlogThirtySix />}
          />
          <Route
            path="/climate-risk-vacation-rentals-peak-season"
            element={<BlogThirtySeven />}
          />
          <Route
            path="/bleisure-travel-vacation-rentals"
            element={<BlogThirtyEight />}
          />
          <Route
            path="/5-star-vacation-rental-host-tips"
            element={<BlogThirtyNine />}
          />
          <Route
            path="/email-marketing-for-vacation-rentals"
            element={<BlogForty />}
          />
          <Route
            path="/google-business-profile-for-vacation-rentals"
            element={<BlogFortyOne />}
          />
          <Route
            path="/smart-home-technology-for-vacation-rentals"
            element={<BlogFortyTwo />}
          />
          <Route
            path="/how-to-prepare-your-vacation-rental-for-fall"
            element={<BlogFortyThree />}
          />
          <Route
            path="/how-to-handle-difficult-vacation-rental-guests"
            element={<BlogFortyFour />}
          />
          <Route
            path="/how-to-set-up-a-pet-friendly-vacation-rental-without-the-mess-or-the-stress"
            element={<BlogFortyFive />}
          />

          <Route
            path="/the-real-cost-of-bad-vacation-rental-photos-and-how-to-fix-them-for-free"
            element={<BlogFortySix />}
          />
          <Route
            path="/how-to-name-your-vacation-rental"
            element={<BlogFortySeven />}
          />
          <Route
            path="/short-term-vs-long-term-vacation-rental-2026"
            element={<BlogFortyEight />}
          />
          <Route
            path="/how-to-write-vacation-rental-house-rules"
            element={<BlogFortyNine />}
          />
          <Route
            path="/guide-to-upselling-how-to-earn-more-from-every-booking"
            element={<BlogFifty />}
          />
          <Route
            path="/what-guests-read-in-your-listing-and-what-they-skip"
            element={<BlogFiftyOne />}
          />
          <Route
            path="/how-to-market-your-vacation-rental-to-international-travelers-in-2026"
            element={<BlogFiftyTwo />}
          />
          <Route
            path="/the-vacation-rental-owners-guide-to-pricing-cleaning-fee"
            element={<BlogFiftyThree />}
          />
          <Route
            path="/how-to-use-vacation-rental-guest-reviews-as-marketing-content"
            element={<BlogFiftyFour />}
          />
          <Route
            path="/guest-just-cancelled-heres-exactly-what-to-do-in-the-next-24-hours"
            element={<BlogFiftyFive />}
          />
          <Route
            path="/you-have-a-vacation-rental-website-so-why-arent-guests-booking-direct"
            element={<BlogFiftySix />}
          />
           <Route
            path="/are-google-ads-worth-it-for-vacation-rentals-what-owners-should-know"
            element={<BlogFiftySeven />}
          />
          <Route
            path="/how-much-does-a-vacation-rental-website-cost"
            element={<BlogFiftyEight />}
          />
           <Route
            path="/vacation-rental-seo-what-helps-a-property-get-found"
            element={<BlogFiftyNine />}
          />
          <Route
            path="/how-to-improve-conversion-on-a-vacation-rental-website"
            element={<BlogSixty />}
          />
           <Route
            path="/what-should-a-vacation-rental-website-include"
            element={<BlogSixtyOne />}
          />
             <Route
            path="/how-ai-search-is-changing-seo-in-2026"
            element={<BlogSixtyTwo />}
          />
           <Route
            path="/can-ai-recommend-your-vacation-rental"
            element={<BlogSixtyThree />}
          />
           <Route
            path="/seo-after-keywords-why-being-useful-matters-more-than-repeating-search-terms"
            element={<BlogSixtyFour />}
          />

          <Route path="/contact/" element={<Connect />} />
          <Route path="/privacy-policy/" element={<PrivacyPolicy />} />
          <Route path="/terms-&-conditions/" element={<TermsConditions />} />
          <Route path="/24/7-support/" element={<Support />} />
          <Route path="/faq" element={<FaqSection />} />
          <Route path="/paymyorder" element={<PaymentPage />} />
          <Route path="/paynow" element={<RazorpayPayment />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />

          {/* <Route path="/blogs" element={<Blogs />} /> */}
          {/* <Route path="/blog/:slug" element={<SingleBlog />} /> */}

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          {/* <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/blogs" element={<BlogList />} />
          <Route path="/admin/blogscreate" element={<CreateBlog />} /> */}
          {/* <Route
            path="/admin/dashboard"
            element={
              <AdminRoute>
                <AdminLayout>
                  <Dashboard />
                </AdminLayout>
              </AdminRoute>
            }
          /> */}

          {/* <Route
            path="/admin/blogs"
            element={
              <AdminRoute>
                <AdminLayout>
                  <BlogList />
                </AdminLayout>
              </AdminRoute>
            }
          /> */}

          {/* <Route
            path="/admin/blogscreate"
            element={
              <AdminRoute>
                <AdminLayout>
                  <CreateBlog />
                </AdminLayout>
              </AdminRoute>
            }
          /> */}

          {/* <Route
            path="/admin/blogsedit/:id"
            element={
              <AdminRoute>
                <AdminLayout>
                  <EditBlog />
                </AdminLayout>
              </AdminRoute>
            }
          /> */}
        </Routes>
      </Suspense>

      {!isAdminRoute && <Footer />}
    </>
  );
}

export default App;
