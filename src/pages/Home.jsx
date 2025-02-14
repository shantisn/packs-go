import React from 'react';
import  Navber from'../layouts/Navber'
import   Banner from'../layouts/Banner'
import  Travel from'../layouts/Travel'
import  Popular from'../layouts/Popular'
import  About from'../layouts/About'
import  Pomotion from'../layouts/Pomotion'
import MoneyPart from '../layouts/MoneyPart';

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

    </>
  );
}

export default Home;
