import {robotsArr} from "../Robots";
import SearchBox from "../components/SearchBox"
import CardList from "../components/CardList";
import Scroll from "../components/Scroll"
import ErrorBoundry from "../components/ErrorBoundry";
import React, {Component} from "react";



class App extends Component {
    constructor() {
        super()
        this.state = {
            robotsArr,
            searchField: ''
        }
    }

    onSearchChange = (e) => {
        this.setState({searchField: e.target.value})
    }

    render() {
        const {robotsArr, searchField} = this.state
        const filteredRobots = robotsArr.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return (
            <div>
                <h1>RoboFriends</h1>
                <SearchBox onSearchChange={this.onSearchChange}/>
                < Scroll>
                    <ErrorBoundry>
                <CardList robotsArr={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
    }
}


export default App;
