import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Todo from "./pages/Todo/Todo";
import PrivacyAndPolicy from "./pages/PrivacyAndPolicy/PrivacyAndPolicy";
import TermsOfService from "./pages/TermsOfService/TermsOfService";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Todo />} />
                    <Route
                        path="/privacypolicy"
                        element={<PrivacyAndPolicy />}
                    />
                    <Route path="/tos" element={<TermsOfService />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
