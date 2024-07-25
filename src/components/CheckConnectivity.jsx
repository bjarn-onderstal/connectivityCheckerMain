import React, { createElement, Component } from "react";

export class ConnectChecker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOnline: navigator.onLine
        };

        // Bind methods
        this.updateOnlineStatus = this.updateOnlineStatus.bind(this);
    }

    componentDidMount() {
        console.log(this.props.onChangeAction); // Check if prop is passed correctly
        // Add event listeners for online and offline events
        window.addEventListener("online", this.updateOnlineStatus);
        window.addEventListener("offline", this.updateOnlineStatus);

        // Initial check
        this.updateOnlineStatus();
    }

    componentWillUnmount() {
        // Cleanup event listeners on component unmount
        window.removeEventListener("online", this.updateOnlineStatus);
        window.removeEventListener("offline", this.updateOnlineStatus);
    }

    updateOnlineStatus() {
        const isOnline = navigator.onLine;
        console.log(`Online status: ${isOnline}`); // Log online status

        // Update the state
        this.setState({ isOnline }, () => {
            // Update connectivityBoolean based on the online status
            if (this.props.onConnectivityChange) {
                this.props.onConnectivityChange(isOnline);
            }

            // Execute onChangeAction if it exists
            if (this.props.onChangeAction) {
                this.props.onChangeAction.execute();
            }
        });
    }

    render() {
        // No JSX required, but the render method must exist
        return null;
    }
}