
import { Route, Routes } from "react-router-dom";
import SkipSizePage from "../pages/SkipSizePage";

const TheRoutes = () => {

    return <Routes>
        <Route path="/" element={<SkipSizePage />} />
    </Routes>
};

export default TheRoutes ;