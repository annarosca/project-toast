import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, handleRemoveToast }) {
    return (
        <ol className={styles.wrapper}>
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

export default ToastShelf;
