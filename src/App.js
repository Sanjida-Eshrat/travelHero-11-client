import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import AuthProvider from './context/AuthProvider';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import About from './components/Home/About/About';
import TourPackages from './components/Home/TourPackages/TourPackages';
import AddTour from './components/AddTour/AddTour';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Booking from './components/Booking/Booking';
import ManageBooking from './components/ManageBooking/ManageBooking';
import MyBooking from './components/MyBooking/MyBooking';
import Reviews from './components/Reviews/Reviews';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            
            {/* Redirect to Home page */}
            <Route exact path ="/">
                <Home></Home>
                <Reviews></Reviews>
            </Route>
            {/* Redirect to Home page */}
            <Route path ="/home">
                <Home></Home>
                <Reviews></Reviews>
            </Route>
            <Route path ="/about">
                <About></About>
            </Route>
            <Route path ="/tours">
                <TourPackages></TourPackages>
            </Route>
            <Route path ="/reviews">
                <Reviews></Reviews>
            </Route>

            {/* private routes. user can access them if logged in. */}
            <PrivateRoute path ="/addTour">
                <AddTour></AddTour>
            </PrivateRoute>

            <PrivateRoute path="/booking/:tourId">
                <Booking></Booking>
            </PrivateRoute>

            <PrivateRoute path="/manageBooking">
                <ManageBooking></ManageBooking>
            </PrivateRoute>

            <PrivateRoute path="/myBooking">
                <MyBooking></MyBooking>
            </PrivateRoute>

            <Route exact path="/login">
              <Login></Login>
            </Route>

            <Route exact path="/register">
              <Register></Register>
            </Route>
            {/* Redirect to Not Found page */}
            <Route path ="*">
              <NotFound></NotFound>
            </Route>

          </Switch> 
          <Footer></Footer>
          
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
