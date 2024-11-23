import About from "./components/About";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Galery from "./components/Galery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Quotes from "./components/Quotes";
import Support from "./components/Support";
import Team from "./components/Team";

function App() {
  return (
    <>
      <Navbar />
      <div className="layar-penuh">
        <Hero />
        <main>
          <About />
          <Support />
          <Galery />
          <Quotes />
          <Team />
          <Blog />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
