import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import Nav from "./nav"
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Assignment6 from "./labs/a6";
import Assignment7 from "./labs/a7";
import express from 'express'
import cors from 'cors'

function App() {
    const app = express()
    app.use(cors())
    app.use(express.json())
}
export default App;