import Carousel from 'react-bootstrap/Carousel';
import Ban1 from './Assets/ban1.jpg'
import Ban2 from './Assets/ban2.jpg'
import Ban3 from './Assets/ban3.jpg'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'
import About from './Assets/About.jpg'
import What from './Assets/What.jpg'
import Card from './Card';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import Icon from './Assets/Icon.png'
import Int from './Int';

function Home() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Ban1}
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Ban2}
            alt="Second slide"
          />
          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Ban3}
            alt="Third slide"
          />

          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br />
      <div className='container3'>
        <div className='row' style={{ padding: '10px' }}>
          <div className=' col-sm-12 col-md-12 col-lg-6' style={{ margin: 'auto' }} >
            <h1>About Us</h1>
            <p style={{ color: '#000', textAlign: 'start', fontSize: '25px' }} >
              Much like Our Art deeply impressionistic paintings, her lithograph made for the Renaissance
              Society portrays the feeling of ascene as much as her given subjects. </p>
            <Link to='/about' ><Button style={{ color: '#fff', width: '25%' }}>Click to more
              &nbsp;
              <span> <img src={Icon} alt='icon' style={{ width: '100%' }} ></img> </span></Button></Link>
          </div>
          <div className='col-sm-12 col-md-12 col-lg-6' style={{ textAlign: 'center' }} >
            <img src={About} style={{ width: '50%' }} alt='about' />
          </div>
        </div>
        <br />
        <div className='row' style={{ padding: '10px' }}>
          <div className='col-sm-12 col-md-12 col-lg-6' style={{ textAlign: 'center' }}>
            <img src={What} style={{ width: '50%' }} alt='What' />
          </div>
          <div className='col-sm-12 col-md-12 col-lg-6' style={{ margin: 'auto' }}>
            <h1>What We Do</h1>
            <p style={{ color: '#000', textAlign: 'start', fontSize: '25px' }} >
              Much like Our Art deeply impressionistic paintings, her lithograph made for the Renaissance
              Society portrays the feeling of ascene as much as her given subjects. </p>
            <Link to='/whatwedo' ><Button style={{ color: '#fff', width: '25%' }}>Click to more
              &nbsp;
              <span> <img src={Icon} alt='icon' style={{ width: '100%' }} ></img> </span></Button></Link>
          </div>
        </div>
      </div>
      <Card />
      <div >
        <div className='row container3'>
          <div className='col'>
            <h1>Weekly Auction</h1>
            <p style={{ color: '#000', textAlign: 'justify' }}>If You are Impress with my Art's You can Partcipate on my Weejkkly Art's Auction</p>
          </div>
          <div className='col'>
            <div className='form'>
              <div className='mb-3'>
                <label className='form-label'>Full Name</label>
                <input type='text' className='form-control' placeholder='Enter Your FullName' ></input>
                <label className='form-label'>Email address</label>
                <input type='email' className='form-control' placeholder='Enter Your Email' ></input>
                <label className='form-label'>Mobile Number</label>
                <input type='number' className='form-control' placeholder='Enter Your Number' ></input><br /><br />
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Int /> */}
    </div>
  );
}

export default Home;