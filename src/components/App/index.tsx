import * as React from 'react';
import "tachyons";
import robots    from "../../data/robots";
import CardList  from "../cardList";
import SearchBox from "../search";
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
                <SearchBox searchField= "" searchChange={this.onSearchChange}/>
                <CardList robots={this.state.robots}/>
            </div>
        );
    }

    private onSearchChange(event: any):void {
        console.log(event.target.value);
    }
}

export default App;