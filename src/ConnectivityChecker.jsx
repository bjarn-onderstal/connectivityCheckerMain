import { createElement, Component } from "react";

import { ConnectChecker } from "./components/CheckConnectivity";

export class ConnectivityChecker extends Component {
    render() {
        return (
            <ConnectChecker
                connectivityBoolean={this.props.connectivityBoolean}
                onChangeAction={this.props.onChangeAction}
            />
        );
    }
}
