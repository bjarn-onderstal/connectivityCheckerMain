import { Component, createElement } from "react";

import { ConnectChecker } from "./components/CheckConnectivity";

export class ConnectivityChecker extends Component {
    render() {
        return <ConnectChecker 
        connectivityBoolean={this.props.connectivityBoolean}
        OnchangeAction={this.props.onchangeAction} />;
    }
}


