import * as React from 'react';
import "tachyons";
import CardList  from "../../components/cardList";
import Scroll from "../../components/scroll";
import SearchBox from "../../components/search";
import IAppState from "./IAppState";
import "./index.css";

class App extends React.Component<any, IAppState> {
    constructor(props: any) {
        super(props);
        this.state = {
            robots: [],
            searchfield: ''
        };
    }

    public componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }

    public render() {
        const { robots, searchfield} = this.state;

        // parent knows what values are in search box, so can pass to card list
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield);
        });

        if(!robots.length) {
            return (
                <h1>Loading...</h1>
            );
        }
        else {
            return(
                <div className="tc">
                    <h1 className="f1">Robo Friends</h1>
                    <SearchBox searchField= "" searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            );
    
        }
    }

    private onSearchChange = (event: any) => {
        this.setState({searchfield: event.target.value});
    }
}

export default App;