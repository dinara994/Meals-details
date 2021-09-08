import React from 'react';
import logo1 from '../Icon/food2.png'
import logo2 from '../Icon/food1.png'
import logo3 from '../Icon/food3.png'
import grid from '../Icon/grid.png'
import grid5 from '../Icon/grid1.png'
import grid6 from '../Icon/grid2.png'

const Home = () => {
    return (
          <div className='container home-page hero'>
              HOME PAGE
              <div className='row'>
                  <div className='col-6'>
                      <h1 className='hero__title'>Making time a good time by making food <p className='mt-3'><b>the</b> <span className='text-warning'>good</span> <b>food</b>.</p></h1>
                  </div>
                  <div className='col-6 home-box'>
                      <img src={grid6} alt='svg' className='home__svg6'/>
                      <img src={grid5} alt='svg' className='home__svg5'/>
                      <img src={logo1} alt='svg' className='home__svg1'/>
                      <img src={logo2} alt='svg' className='home__svg2'/>
                      <img src={logo3} alt='svg' className='home__svg3'/>
                      <img src={grid} alt='svg' className='home__svg4'/>
                  </div>
              </div>
          </div>
    );
};

export default Home;