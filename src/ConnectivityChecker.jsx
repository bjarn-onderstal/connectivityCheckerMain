import { Component, createElement } from "react";

import { ConnectChecker } from "./components/CheckConnectivity";

export class ConnectivityChecker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            connectivityBoolean: false
        };

        // Bind methods
        this.handleConnectivityChange = this.handleConnectivityChange.bind(this);
    }

    handleConnectivityChange(newStatus) {
        console.log(`Connectivity status changed: ${newStatus}`); // Debug log
        this.setState({ connectivityBoolean: newStatus }, () => {
            if (this.props.onChangeAction) {
                this.props.onChangeAction.execute();
            }
        });
    }

    render() {
        return (
            <ConnectChecker 
                connectivityBoolean={this.state.connectivityBoolean}
                onConnectivityChange={this.handleConnectivityChange}
            />
        );
    }
}