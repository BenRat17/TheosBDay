import './App.css';
import ImagesCarosel from './components/ImagesCarosel';
import RSVP from './components/RSVP';
import Location from './components/Location';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className='checkerboard'></header>
     <h1 className='header-text'>Theo </h1>
      <h2 className='header-text'>is ☺NE Happy Dude!</h2>
        <ImagesCarosel/>
        <Location />
        <RSVP></RSVP>
        <div>
          <p className='p-text'>If you would like to contribute to our fund for a new carseat then click this link below!</p>
          <Button className='button' href='https://account.venmo.com/u/DarianSRatliff'><div className='p-text'>Theo's New CarSeat Fund!</div></Button>
        </div>
        <footer className='checkerboard'></footer>
    </div>
  );
}

export default App;
