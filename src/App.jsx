import Navbar from "./components/Navbar.jsx";
import Classes from "./components/classes/Classes.jsx";
import Hero from "./components/hero/Hero.jsx";
import Services from "./components/services/Services.jsx";
import Categories from "./components/categories/Categories.jsx";
import Reasons from "./components/reasons/Reasons.jsx";
import Testimonials from "./components/testimonials/Testimonials.jsx";
import Certification from "./components/certification/Certification.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Classes />
      <Categories />
      <Reasons />
      <Testimonials />
      <Certification />
    </>
  );
}

export default App;
