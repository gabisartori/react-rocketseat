import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import { CssInJs} from "./pages/cssInJs";
import { CssPuro } from "./pages/cssPuro";

export function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route path="/cssInJs" element={<CssInJs />} />
                <Route path="/cssPuro" element={<CssPuro />} />
            </Routes>
        </Router>
    )
};