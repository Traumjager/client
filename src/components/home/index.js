import React from "react";
import HeroBanner from "./HeroBanner";
import Paragraph from "./Paragraph";
import TobRated from "./TobRated";
import {useSelector} from 'react-redux'
function Home() {
  const state = useSelector(state => state.authReducer)
  console.log(state,'here is the data from the home page')
  return (
    <>
      <HeroBanner/>
      <Paragraph/>
      <TobRated/>
    </>
  );
}

export default Home;
