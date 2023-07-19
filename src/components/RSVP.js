import React from 'react';
// import { useState } from 'react';
import './RSVPstyle.scss';

const RSVP = () => {
  return (
    <>
    <h2 className='app__footer-cards'>Please RSVP to Darian by August 14th</h2>

    <div className='app__footer-cards'>
    <div className='app__footer-card'>
        <img src={require("../assets/mobile.png")} alt='mobile' />
        <a href='tel: +1 (479) 221-2449' className='p'>+1 (479) 221-2449</a>
      </div>
    </div>
    </>
  )
}

export default RSVP;