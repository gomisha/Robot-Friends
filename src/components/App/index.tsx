import * as React from 'react';
import "tachyons";
import robots from "../../data/robots";
import CardList from "../cardList";
import SearchBox from '../SearchBox';

class App extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            robots1: robots,
            searchfield: ''
        };
    }
    public render() {
        return(
            <div className="tc">
                <h1>Robo Friends</h1>
                <SearchBox/>
                <CardList robots={this.state.robots1}/>
            </div>
        );
    }
}

export default App;