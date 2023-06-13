import Header from './components/Header/Header'
import Hero from './components/Hero/hero'
import Companies from './components/Companies/companies'
import Residencies from './components/Residencies/residencies'
import Value from './components/Value/value'
import Contact from './components/Contact/contact'
import GetStarted from './components/GetStarted/getstarted'
import Footer from './components/Footer/footer'
import './App.css'
function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
      <Footer /> 
    </div>
  );
}

export default App;
