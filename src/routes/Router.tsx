import { BrowserRouter, Routes,  Route} from "react-router-dom";
import Homepage from "../pages/Homepage";
import App from "../App";
import LoginScreen from "../pages/LoginScreen";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Homepage />} />
                <Route path="/app" element={<App />} />
                <Route path="/login-screen" element={<LoginScreen/>}/>
            </Routes>
        </BrowserRouter>
    );
}