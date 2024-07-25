import React, { createElement, Component } from "react";

export class ConnectChecker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOnline: navigator.onLine
        };
        this.updateOnlineStatus = this.updateOnlineStatus.bind(this);
    }

    componentDidMount() {
        window.addEventListener('online', this.updateOnlineStatus);
        window.addEventListener('offline', this.updateOnlineStatus);
        // Initial check
        this.updateOnlineStatus();
    }

    componentWillUnmount() {
        window.removeEventListener('online', this.updateOnlineStatus);
        window.removeEventListener('offline', this.updateOnlineStatus);
    }

    updateOnlineStatus() {
        const isOnline = navigator.onLine;
        console.log(`Online status: ${isOnline}`); // Log online status
        this.setState({ isOnline }, () => {
            // Update the Mendix attribute
            if (typeof this.props.updateConnectivityBoolean === "function") {
                this.props.updateConnectivityBoolean(isOnline);
                console.log(`Updated connectivityBoolean to: ${isOnline}`);
            }

            // Execute onChangeAction if it exists
            if (this.props.onChangeAction) {
                this.props.onChangeAction.execute();
                console.log('Boolean value:' + this.props.connectivityBoolean.value)
            }
        });
    }


    render() {
        // No JSX required, but the render method must exist
        return null;
    }
}
