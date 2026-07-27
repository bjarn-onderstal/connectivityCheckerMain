import { useCallback, useEffect } from "react";

export function ConnectChecker({ connectivityBoolean, onChangeAction }) {
    const updateOnlineStatus = useCallback(() => {
        const isOnline = navigator.onLine;

        // Only write when the attribute is available and editable, otherwise setValue throws.
        if (connectivityBoolean.status !== "available" || connectivityBoolean.readOnly) {
            return;
        }

        // Skip redundant writes/actions when the status did not actually change.
        if (connectivityBoolean.value === isOnline) {
            return;
        }

        connectivityBoolean.setValue(isOnline);

        // Execute onChangeAction if it is configured and currently executable.
        if (onChangeAction && onChangeAction.canExecute) {
            onChangeAction.execute();
        }
    }, [connectivityBoolean, onChangeAction]);

    useEffect(() => {
        window.addEventListener("online", updateOnlineStatus);
        window.addEventListener("offline", updateOnlineStatus);
        // Initial check
        updateOnlineStatus();

        return () => {
            window.removeEventListener("online", updateOnlineStatus);
            window.removeEventListener("offline", updateOnlineStatus);
        };
    }, [updateOnlineStatus]);

    return null;
}
