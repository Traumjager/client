import React from "react";
import HeroBanner from "./HeroBanner";
import Paragraph from "./Paragraph";
import TobRated from "./TobRated";
import {useSelector} from 'react-redux'
function Home() {
  const state = useSelector(state => state.authReducer)
  return (
    <>
      <HeroBanner/>
      <Paragraph/>
      <TobRated/>
    </>
  );
}

export default Home;
