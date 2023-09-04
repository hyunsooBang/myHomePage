import React from 'react';
import { Route } from 'react-router-dom';
import AboutMe from '../pages/AboutMe';
import MyCareer from '../pages/MyCareer';
import ForFun from '../pages/ForFun';
import GuestBook from '../pages/GuestBook';

const RoutedComponents = () => {
  return (
    <>
      <Route path="about-me" element={<AboutMe />} />
      <Route path="my-career" element={<MyCareer />} />
      <Route path="for-fun" element={<ForFun />} />
      <Route path="guest-book" element={<GuestBook />} />
    </>
  );
};

export default RoutedComponents;
