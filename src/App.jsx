import { useEffect, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lenis from "lenis";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import HomeSkeleton from "./components/ui/HomeSkeleton";

// Route-level pages loaded lazily with Suspense fallback
const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/Aboutus"));
const Forex = lazy(() => import("./pages/Forex"));
const Contactus = lazy(() => import("./pages/Contactus"));
const Commodities = lazy(() => import("./pages/Commodities"));
const Indices = lazy(() => import("./pages/Indices"));
const Stocks = lazy(() => import("./pages/Stocks"));
const Metals = lazy(() => import("./pages/Metals"));
const AccountCompare = lazy(() => import("./pages/AccountCompare"));
const DipositWithdrawal = lazy(() => import("./pages/DipositWithdrawal"));
const Platform = lazy(() => import("./pages/Platform"));
const EconomicCalendar = lazy(() => import("./pages/EconomicCalendar"));
const Partnership = lazy(() => import("./pages/Partnership"));

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-black">
      <BrowserRouter>
        <div className="w-full min-h-screen bg-black">
          <Header />
          <ScrollToTop />

          {/* Suspense boundary showing high-fidelity HomeSkeleton during page loads */}
          <Suspense fallback={<HomeSkeleton />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/forex" element={<Forex />} />
              <Route path="/commodities" element={<Commodities />} />
              <Route path="/indices" element={<Indices />} />
              <Route path="/stocks" element={<Stocks />} />
              <Route path="/metals" element={<Metals />} />
              <Route path="/account-compare" element={<AccountCompare />} />
              <Route
                path="/deposit-withdrawals"
                element={<DipositWithdrawal />}
              />
              <Route path="/platform" element={<Platform />} />
              <Route
                path="/economic-calendar"
                element={<EconomicCalendar />}
              />
              <Route path="/partnership" element={<Partnership />} />
              <Route path="/contactus" element={<Contactus />} />
            </Routes>
          </Suspense>

          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;