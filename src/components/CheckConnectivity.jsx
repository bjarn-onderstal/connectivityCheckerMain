import { createElement, Component } from "react";

export class ConnectChecker extends Component {
    componentDidMount() {
        window.addEventListener("online", this.updateOnlineStatus);
        window.addEventListener("offline", this.updateOnlineStatus);
        // Initial check
        this.updateOnlineStatus();
    }

    updateOnlineStatus = () => {
        const isOnline = navigator.onLine;
        // Update the Mendix attribute
        this.props.connectivityBoolean.setValue(isOnline);

        // Execute onChangeAction if it exists
        if (this.props.onChangeAction) {
            this.props.onChangeAction.execute();
        }
    };

    render() {
        return null;
    }
}
