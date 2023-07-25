import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import Header from './Components/Header';
import HomePage from "./Components/HomePage";
import Cart from "./Components/Cart";
import LoginPage from './Components/LoginPage';
import SignupPage from "./Components/SignupPage";
import HomePageFooter from "./Components/HomePageFooter";
import MenPage from "./Components/Pages/MenPage";
import DecorationPage from "./Components/Pages/DecorationPage";
import WomenPage from "./Components/Pages/WomenPage";
import ToolsPage from "./Components/Pages/ToolsPage";
import DealsPage from "./Components/Pages/DealsPage";
import KidsPage from "./Components/Pages/KidsPage";
import ElectronicsPage from "./Components/Pages/ElectronicsPage";
import AppliancesPage from "./Components/Pages/AppliancesPage";
import KitchenPage from "./Components/Pages/KitchenPage";


// Cart page
function Checkout(){
  return<div className="headerandcart">
    <Header/>
    <Cart/>
    <HomePageFooter/>
  </div>
}

//Login and Signup pages
function Login(){
  return<div>
    <LoginPage/>
  </div>
}

function Signup() {
  return <div>
    <SignupPage />
  </div>
}

//Product pages (men, women, decoration, tools, deals, kids, electronics, appliances, kitchen)
function Men() {
  return <div className='pages'>
    <Header />
    <MenPage />
    <HomePageFooter />
  </div>
}

function Decoration() {
  return <div className='pages'>
    <Header />
    <DecorationPage />
    <HomePageFooter />
  </div>
}

function Women() {
  return <div className='pages'>
    <Header />
    <WomenPage />
    <HomePageFooter />
  </div>
}

function Tools() {
  return <div className='pages'>
    <Header />
    <ToolsPage />
    <HomePageFooter />
  </div>
}

function Deals() {
  return <div className='pages'>
    <Header />
    <DealsPage />
    <HomePageFooter />
  </div>
}

function Kids() {
  return <div className='pages'>
    <Header />
    <KidsPage />
    <HomePageFooter />
  </div>
}

function Electronics() {
  return <div className='pages'>
    <Header />
    <ElectronicsPage />
    <HomePageFooter />
  </div>
}

function Appliances() {
  return <div className='pages'>
    <Header />
    <AppliancesPage />
    <HomePageFooter />
  </div>
}

function Kitchen() {
  return <div className='pages'>
    <Header />
    <KitchenPage />
    <HomePageFooter />
  </div>
}

//Home page
function Home() {
  return <div className='homeandheader'>
    <Header />
    <HomePage />
  </div>
}



function App() {
  return (
    
    <Router>
    <div className="app">
      <Routes>
        <Route path="/checkout" element={<Checkout />}>
        </Route>
        <Route path="/login" element={<Login />}>
        </Route>
        <Route path="/signup" element={<Signup />}>
        </Route>
        <Route path="/men" element={<Men />}>
        </Route>
        <Route path="/decoration" element={<Decoration />}>
        </Route>
        <Route path="/women" element={<Women />}>
        </Route>
        <Route path="/tools" element={<Tools />}>
        </Route>
        <Route path="/deals" element={<Deals />}>
        </Route>
        <Route path="/kids" element={<Kids />}>
        </Route>
        <Route path="/electronics" element={<Electronics />}>
        </Route>
        <Route path="/appliances" element={<Appliances />}>
        </Route>
        <Route path="/kitchen" element={<Kitchen />}>
        </Route>
        <Route path="/" element={<Home />}>
        </Route>
      </Routes>
    </div>
  </Router>
   
  );
}

export default App;
