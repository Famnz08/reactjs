import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import AboutMe from './component/AboutMe';
import LandingPage from './component/Landingpage';
import Footer from './component/Footer';
const App = () => {
  return (
    <div>
      <Header />
      <LandingPage />
      <AboutMe />
      <Footer />
    </div>
  );
};

export default App;
