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
        // parent knows what values are in search box, so can pass to card list
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield);
        });

        return(
            <div className="tc">
                <h1>Robo Friends</h1>
                <SearchBox searchField= "" searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </div>
        );
    }

    private onSearchChange = (event: any) => {
        this.setState({searchfield: event.target.value});
    }
}

export default App;