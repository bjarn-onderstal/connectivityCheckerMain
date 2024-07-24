import React, { createElement, Component } from 'react';

export class ConnectChecker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOnline: navigator.onLine
        };
    }

    componentDidMount() {
        // Add event listeners for online and offline events
        window.addEventListener('online', this.updateOnlineStatus);
        window.addEventListener('offline', this.updateOnlineStatus);

        // Initial check
        this.updateOnlineStatus();
    }

    componentWillUnmount() {
        // Cleanup event listeners on component unmount
        window.removeEventListener('online', this.updateOnlineStatus);
        window.removeEventListener('offline', this.updateOnlineStatus);
    }

    updateOnlineStatus = () => {
        const isOnline = navigator.onLine;
        this.setState({ isOnline }, () => {
            if (isOnline) {
                console.log('You are online');
                // You can add your logic here for when the user is online
            } else {
                console.log('You are offline');
                // You can add your logic here for when the user is offline
            }
            this.onChange();
        });
    };

    render() {
        return (
            <div>
                <p>{this.state.isOnline ? 'You are online' : 'You are offline'}</p>
            </div>
        );
    }

    onChange = () => {
        // Update ConnectivityBoolean prop
        if (typeof this.props.connectivityBoolean === 'function') {
            this.props.connectivityBoolean(this.state.isOnline);
        }

        if (this.props.onChangeAction) {
            this.props.onChangeAction.execute();
        }
    };
}