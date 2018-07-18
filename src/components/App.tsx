import * as React from 'react';
import robots from "../data/robots";
import CardList from "./CardList";


const App = () => {
    return(
        <div>
            <h1>Robo Friends</h1>
            <CardList robots={robots}/>
        </div>
    );
};

export default App;