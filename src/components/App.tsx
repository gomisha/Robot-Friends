import * as React from 'react';
import "tachyons";
import robots from "../data/robots";
import CardList from "./CardList";
import SearchBox from './SearchBox';

const App = () => {
    return(
        <div className="tc">
            <h1>Robo Friends</h1>
            <SearchBox/>
            <CardList robots={robots}/>
        </div>
    );
};

export default App;