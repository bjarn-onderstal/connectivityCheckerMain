import { ConnectChecker } from "./components/CheckConnectivity";

export function ConnectivityChecker(props) {
    return <ConnectChecker connectivityBoolean={props.connectivityBoolean} onChangeAction={props.onChangeAction} />;
}
