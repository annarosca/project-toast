import React from "react";

import Toast from "../Toast";

import { ToastContext } from "../ToastProvider/ToastProvider";

import styles from "./ToastShelf.module.css";

function ToastShelf() {
    const { toasts, handleRemoveToast, dismissAllToasts } =
        React.useContext(ToastContext);

    useEscapeKey(dismissAllToasts);

    return (
        <ol className={styles.wrapper} role="region" aria-live="polite" aria-label="Notification">
            {toasts.map((item) => (
                <li className={styles.toastWrapper} key={item.uid}>
                    <Toast
                        variant={item.variant}
                        uid={item.uid}
                        onDismiss={handleRemoveToast}
                    >
                        {item.message}
                    </Toast>
                </li>
            ))}
        </ol>
    );
}

function useEscapeKey(callback) {
    React.useEffect(() => {
        function handleKeydown(e) {
            if (e.code === "Escape") {
                callback();
            }
        }
        window.addEventListener("keydown", handleKeydown);

        return () => {
            window.removeEventListener("keydown", handleKeydown);
        };
    }, [callback]);
}

export default ToastShelf;
