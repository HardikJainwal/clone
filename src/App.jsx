import React from "react";
import TopNavbar from "./Component/Header/TopNavbar";
import MidNavbar from "./Component/Header/MidNavbar";
import BottomNavbar from "./Component/Header/BottomNavbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeBody from "./Component/Body/Banner";
import OurCampuses from "./Component/Body/OurCampuses";
import Footer from "./Component/Footer/Footer";

import FacultyProfile from "./Component/Body/FacultyProfile";
import Message from "./Component/Body/Message";
import Announcements from "./Component/Body/Announcements";
import Card from "./Component/Body/Card";
import News from "./Component/Body/News";
import OurPartners from "./Component/Body/OurPartners";
import DepartmentPage from "./Component/Body/DepartmentPage";
import ListOfFaculties from "./Component/Body/ListOfFaculties";
import Achievement from "./Component/Body/Achievement";




function App() {
  return (
    <BrowserRouter>
      <TopNavbar />
      <MidNavbar />
      <BottomNavbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomeBody></HomeBody>
              <Announcements/>
               <Message/>
               <Card/>
              <OurCampuses />
              <OurPartners/>
              <News/>
               <Achievement/>
            </>
          }
        />
        
        <Route path="/academics/faculty" element={<ListOfFaculties />} />
        <Route path="/dept/:departmentPath" element={<DepartmentPage />} />
        <Route path="/faculty/:id" element={<FacultyProfile />} />
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;