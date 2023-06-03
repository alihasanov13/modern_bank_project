import "./App.css";
import {
  Navbar,
  Hero,
  Stats,
  Buisness,
  CardDeal,
  Testimonials,
  Clients,
  Cta,
  Billing,
  Footer,
} from "./components";
function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className="sm:px-16 px-6 flex items-center justify-center">
        <div className="max-w-[1280px] w-full">
          <Navbar></Navbar>
        </div>
      </div>

      <div className="sm:px-16 px-6 flex items-center justify-center">
        <div className="max-w-[1280px] w-full">
          <Hero></Hero>
        </div>
      </div>

      <div className="sm:px-16 px-6 flex items-center justify-center">
        <div className="max-w-[1280px] w-full">
          <Stats></Stats>
          <Buisness></Buisness>
          <Billing></Billing>
          <CardDeal></CardDeal>
          <Testimonials></Testimonials>
          <Clients></Clients>
          <Cta></Cta>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

export default App;
