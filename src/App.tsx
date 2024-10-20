import './App.css';
import Header from './components/Header/Header.tsx';
import { Route, Routes } from 'react-router-dom';
import Home from './containers/Home/Home.tsx';
import AboutUs from './containers/AboutUs/AboutUs.tsx';
import Contacts from './containers/Contacts/Contacts.tsx';
import Footer from './components/Footer/Footer.tsx';
import Portfolio from './containers/Portfolio/Portfolio.tsx';
import App1 from './containers/App-1/App-1.tsx';
import App2 from './containers/App-2/App-2-Block/App-2-Block.tsx';
import App3 from './containers/App-3/App-3-Block/App3.tsx';

const App = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      <Header/>
      <div style={{flex: '1'}}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/contacts" element={<Contacts/>}/>

          <Route path="/portfolio" element={<Portfolio/>}>
            <Route path="App1" element={<App1/>}/>
            <Route path="App2" element={<App2/>}/>
            <Route path="App3" element={<App3/>}/>
          </Route>

          <Route path="*" element={<h1>Not found :(</h1>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
