import { ConnectChecker } from "./components/CheckConnectivity";

import { createElement } from "react";

export function ConnectivityChecker(props) {
    return <ConnectChecker connectivityBoolean={props.connectivityBoolean} onChangeAction={props.onChangeAction} />;
}
