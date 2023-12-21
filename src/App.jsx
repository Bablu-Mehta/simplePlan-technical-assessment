import Navbar from "./components/Navbar.jsx";
import Classes from "./components/classes/Classes.jsx";
import Hero from "./components/hero/Hero.jsx";
import Services from "./components/services/Services.jsx";
import Categories from "./components/categories/Categories.jsx";
import Reasons from "./components/reasons/Reasons.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Classes />
      <Categories />
      <Reasons />
    </>
  );
}

export default App;
