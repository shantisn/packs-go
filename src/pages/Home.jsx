import React from 'react';
import  Navber from'../layouts/Navber'
import   Banner from'../layouts/Banner'
import  Travel from'../layouts/Travel'
import  Popular from'../layouts/Popular'
import  About from'../layouts/About'
import  Pomotion from'../layouts/Pomotion'
import MoneyPart from '../layouts/MoneyPart';
import Testi from'../layouts/Testi';
import Subscribe from'../layouts/Subscribe';
import Destination from '../layouts/Destination';
import Splace from '../layouts/splace';

const Home = () => {
  return (
    <>
   <Navber/>
   <Banner/>
   <Travel/>
   <Popular/>
   <About/>
   <Pomotion/>
   <MoneyPart/>
   <Destination/>
   <Splace/>
   <Testi/>
   <Subscribe/>

    </>
  );
}

export default Home;
