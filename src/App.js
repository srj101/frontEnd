import '../node_modules/font-awesome/css/font-awesome.min.css';
import './App.css';
import {  Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Shop from './components/pages/Shop/Shop';
import Offer from './components/Offer/Offer';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import Videos from './components/pages/videos/videos.component';
import SingleVideo from './components/pages/videos/singleVideo';
import Footer from './components/Footer/Footer';
import News from './components/pages/news/news.component';
import SingleNews from './components/pages/news/SingleNews';
import Course from './components/pages/courses/courses.component';
import SingleCourse from './components/pages/courses/SingleCourse';
import Checkout from './components/pages/Checkout';
import SingleShop from './components/pages/Shop/SingleShop';

function App() {
  return (
    <div className="App">

    <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route  path='/shop' element={<Shop></Shop>} ></Route>
        <Route  path='/plants/:plantId' element={<SingleShop/>} ></Route>
        <Route path='/offer' element={<Offer></Offer>} ></Route>
        <Route path='/news' element={<News/>} ></Route>
        <Route path='/news/:newsId' element={<SingleNews/>} ></Route>

        <Route  path='/about' element={<About></About>} ></Route>
        <Route path='/contact' element={<Contact></Contact>} ></Route>
        <Route path='/videos' element={<Videos></Videos>} >
        </Route>
        <Route path='/videos/:videoId' element={<SingleVideo/>} ></Route>
        
        <Route path='/courses'  element={<Course/>} ></Route>
        <Route path='/courses/:courseId' element={<SingleCourse/>} ></Route>

        <Route path='/courses/checkout/:courseId' element={<Checkout type="course"/>} ></Route>
        <Route path='/plants/checkout/:plantId' element={<Checkout type="plant"/>} ></Route>

        <Route path='/*' element={<NotFound></NotFound>} ></Route>

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
