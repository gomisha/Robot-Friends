import * as React from 'react';
import "tachyons";
import robots    from "../../data/robots";
import CardList  from "../cardList";
import SearchBox from "../SearchBox";
import IAppState from "./IAppState";

class App extends React.Component<any, IAppState> {
    constructor(props: any) {
        super(props);
        this.state = {
            robots,
            searchfield: ''
        };
    }
    public render() {
        return(
            <div className="tc">
                <h1>Robo Friends</h1>
                <SearchBox/>
                <CardList robots={this.state.robots}/>
            </div>
        );
    }
}

export default App;