import * as React from 'react';
import "tachyons";
import CardList  from "../../components/cardList";
import SearchBox from "../../components/search";
import IAppState from "./IAppState";
import "./index.css";

class App extends React.Component<any, IAppState> {
    constructor(props: any) {
        super(props);
        console.log("constructor");
        this.state = {
            robots: [],
            searchfield: ''
        };
    }

    componentDidMount() {
        console.log("componentDidMount");
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }

    public render() {
        console.log("render")
        // parent knows what values are in search box, so can pass to card list
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield);
        });

        return(
            <div className="tc">
                <h1 className="f1">Robo Friends</h1>
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