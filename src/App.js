import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import Nav from "./nav"
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Assignment6 from "./labs/a6";
import Assignment7 from "./labs/a7";

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
                    <Route path="a6"
                           element={<Assignment6/>}/>
                    <Route path="/a7"
                           element={<Assignment7/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}
export default App;