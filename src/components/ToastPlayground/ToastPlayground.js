import React from "react";

import Button from "../Button";

import Toast from "../Toast/Toast";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
    const [message, setMessage] = React.useState("");
    const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
    const [toastVisible, setToastVisible] = React.useState(false);

    return (
        <div className={styles.wrapper}>
            <header>
                <img alt="Cute toast mascot" src="/toast.png" />
                <h1>Toast Playground</h1>
            </header>
            {toastVisible && (
                <Toast
                    message={message}
                    variant={variant}
                    onDismiss={() => {
                        setToastVisible(false);
                    }}
                />
            )}
            <div className={styles.controlsWrapper}>
                <div className={styles.row}>
                    <label
                        htmlFor="message"
                        className={styles.label}
                        style={{ alignSelf: "baseline" }}
                    >
                        Message
                    </label>
                    <div className={styles.inputWrapper}>
                        <textarea
                            id="message"
                            className={styles.messageInput}
                            value={message}
                            onChange={(e) => {
                                setMessage(e.target.value);
                            }}
                        />
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.label}>Variant</div>
                    <div
                        className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                    >
                        {VARIANT_OPTIONS.map((item) => (
                            <label htmlFor={`variant-${item}`} key={item}>
                                <input
                                    id={`variant-${item}`}
                                    type="radio"
                                    name="variant"
                                    value={item}
                                    checked={variant === item}
                                    onChange={(e) => {
                                        setVariant(e.target.value);
                                    }}
                                />
                                {item}
                            </label>
                        ))}
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.label} />
                    <div
                        className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                    >
                        <Button
                            onClick={() => {
                                setToastVisible(true);
                            }}
                        >
                            Pop Toast!
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ToastPlayground;
