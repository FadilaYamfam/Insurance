
import './index.css';

import Navbar from '../../component/navbar';
import Footer from '../../component/footer';
import About from './about';
import Department from './department';

import book from '../../images/computer.avif';

function Home() {
    return (
      <div className="Home">
        <Navbar/>
        <img src={book} alt=" " id="back-img" />
        <About/>
        <Department/>
        <Footer/>
      </div>
    );
  }
  
  export default Home;