import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "../shared/components/Layouts";

export const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/home" element={<Dashboard />} />

            <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
    );
}