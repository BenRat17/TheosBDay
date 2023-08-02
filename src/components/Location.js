import React from 'react';
import '../assets/kidsClub.jpeg';
import './LocationStyle.scss';

const Location = () => {
  return (
    <div>
      <h3 className='text'>Please join us to celebrate</h3>
      <h2 className='text' style={{ textTransform: 'uppercase'}}>Theo's 1st Birthday!</h2>
      <h2 className='text' style={{ textTransform: 'uppercase'}}>Saturday September 2nd at 1:30 pm</h2>
      <h3 className='text'><a href='https://www.google.com/maps/place/Share+the+Love+Kidsclub/@35.0914459,-92.4402122,17z/data=!3m1!4b1!4m6!3m5!1s0x87d2823cd2d0c47f:0xa899b3fe6de1592f!8m2!3d35.0914459!4d-92.4376373!16s%2Fg%2F11cm77p8g3?entry=ttu'>Share The Love Kids Club!</a></h3>
      <h4 className='text-sm'>911 W. Oak Street, Conway, AR, United States, Arkansas</h4>
      <img className='img-loc' src={require('../assets/kidsClub.jpeg')} alt='location logo' />
      <iframe className='img-loc img-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3264.6118852744407!2d-92.44024022337793!3d35.09142897278322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d2823cd2d0c47f%3A0xa899b3fe6de1592f!2sShare%20the%20Love%20Kidsclub!5e0!3m2!1sen!2sus!4v1689321769612!5m2!1sen!2sus" 
        // width="fit-content" 
        // height="fit-content" 
        style={{border:0, padding: '.5rem', borderRadius: '15%'}} 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"
        title='locationMap'>
        </iframe>
    </div>
  )
}

export default Location