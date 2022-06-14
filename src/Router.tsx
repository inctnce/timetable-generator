import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Screens/Main";
import ManualForm from "./components/Screens/ManualForm/Manual";

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path="/form/manual" element={<ManualForm />} />
            <Route path="/" element={<Main />} />
        </Routes>
    )
}

export default Router;