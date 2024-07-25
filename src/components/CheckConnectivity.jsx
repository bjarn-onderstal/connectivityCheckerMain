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
        window.addEventListener("online", this.updateOnlineStatus);
        window.addEventListener("offline", this.updateOnlineStatus);
        // Initial check
        this.updateOnlineStatus();
    }

    updateOnlineStatus() {
        const isOnline = navigator.onLine;
        console.log(`Online status: ${isOnline}`); // Log online status
        this.setState({ isOnline }, () => {
            // Update the Mendix attribute
            if (isOnline) this.props.connectivityBoolean.setValue(true);
            else this.props.connectivityBoolean.setValue(false);

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
