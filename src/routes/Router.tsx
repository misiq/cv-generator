import { BrowserRouter, Routes,  Route} from "react-router-dom";
import Homepage from "../homepage/Homepage";
import App from "../App";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Homepage />} />
                <Route path="/app" element={<App />} />
            </Routes>
        </BrowserRouter>
    );
}