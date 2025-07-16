import {Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Gallery from './pages/Gallery';
import UpcomingEvents from './pages/Events';
import Contact from './pages/Contact';
// import ProtectRoute from './components/ProtectRoute';


import Landing from './pages/Landing';



function App() {

  return (
    <>

      <Header />

      <main className="flex-fill">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />          
          <Route path="/upcomingevents" element={<UpcomingEvents />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App