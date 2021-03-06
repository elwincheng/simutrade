import './App.css';

import Login from './components/Login/Login'
import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Stock from './components/Stock/Stocks';
import NotFound from './components/NotFound/NotFound';
import Portfolio from './components/Portfolio/Portfolio';

import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LOAD_AUTH } from './actions/constants'

function App() {
	//const user = useSelector((state) => state?.auth?.authData)
	const user = useSelector(state => state?.auth?.authData) || JSON.parse(localStorage.getItem('profile'))
	const dispatch = useDispatch();	

	dispatch({type: LOAD_AUTH, payload: user}) // load user auth data into state on opening app

  return (
    <div style={{paddingLeft: user ? '195px' : '0px'}}>
      <BrowserRouter>
				<Header />
        {user && <NavBar />}
        <div style={{padding: '50px 100px 50px 100px'}}>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/stocks" element={<Stock />} />
            <Route path="/portfolio" element={<Portfolio />} />
						<Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
