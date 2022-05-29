import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Screens/Main/Main";
import ManualForm from "./components/Screens/TimetableForm/Manual/Manual";
import TimetableForm from "./components/Screens/TimetableForm/TimetableForm";

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path="/form/manual" element={<ManualForm />} />
            <Route path="/form" element={<TimetableForm />} />
            <Route path="/" element={<Main />} />
        </Routes>
    )
}

export default Router;