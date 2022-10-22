import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import Nav from "./nav"
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route index
                           element={<Nav/>}/>
                    <Route path="/tuiter"
                           element={<Tuiter/>}/>
                    <Route path="/hello"
                           element={<HelloWorld/>}/>
                    <Route path="/labs"
                           element={<Labs/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}
export default App;