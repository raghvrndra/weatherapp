import React from 'react';
import ChooseStateComponents from './Choosestate/Choosestate';
import HumidityComponents from './Humlidity/Humlditiy';
import LeftComponents from './Left/Left';
import WeekInfoCardComponents from './WeekendInfo/WeekndInfo';

const HomeComponents=()=>{
             return(
                          <>
                          <div className='homeWrap'>
                          <div className='weatherSection'>
                          <LeftComponents/>
                          <div className='rightSide'>
                          <ChooseStateComponents/><br/>
                          <WeekInfoCardComponents/><br/>
                          <HumidityComponents/>
                          </div>
                          </div>
                          
                          </div>
                          </>
                          
             )
}
export default HomeComponents