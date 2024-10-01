import React from "react";
import ReactDOM, {createRoot} from "react-dom/client";

const Title = ()=>(
    <h1 id="title" key="h2">
        Hello All!!!!
    </h1>
)

//Composing Componenets
const HeaderComponenet = ()=>{
    return (
        <div>
            <Title/>
            <h2>Hello EveryOne!!!!!</h2>
            <h2>This is an h2 Tag</h2>
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponenet/>);