import React from 'react'
import { Route, Routes } from "react-router-dom";
import Announcements from '../Pages/Announcements';
import Assignments from '../Pages/Assignments';
import Courses from '../Pages/Courses';
import Discusion from '../Pages/Discusion';
import Elective from '../Pages/Elective';
import Lecture from '../Pages/Lecture';
import Message from '../Pages/Message';
import Notification from '../Pages/Notification';
import Quizes from '../Pages/Quizes';
import Tickets from '../Pages/Tickets';

const AllRoutes = () => {
  return (
    <>
      <Routes>
        {/* All routes done */}
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/lecture" element={<Lecture />} />
        <Route path="/assignment" element={<Assignments />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/discussion" element={<Discusion />} />
        <Route path="/elective" element={<Elective />} />
        <Route path="/message" element={<Message />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/quizes" element={<Quizes />} />
        <Route path="/Tickets" element={<Tickets />} />

      </Routes>
    </>
  )
}

export default AllRoutes