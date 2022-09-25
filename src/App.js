import './App.css';
import Landing from './componets/Landing-page/Landing';
import Services from './componets/Services/Services';
import Design from './componets/Design/Design';
import Portfolio from './componets/portfolio/Portfolio';
import Video from './componets/videoSection/Video';
import About from './componets/About/About';
import State from './componets/stateSection/State';
import Skils from './componets/Skills/Skils';
import Pricing from './componets/pricing/Pricing';
import Quote from './componets/quote/Quote';
import SubSection from './componets/SectionSubscribe/SubSection';
import Contact from './componets/contact/Contact';
import Footer from './componets/footer/Footer';
function App() {
  return (
    <div>
      <Landing />
      <Services />
      <Design />
      <Portfolio />
       <Video /> 
       <About />  
       <State />
       <Skils />
       <Quote />
      <Pricing />
      <SubSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
