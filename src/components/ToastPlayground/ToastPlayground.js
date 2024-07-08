import React from "react";

import Button from "../Button";

import ToastShelf from "../ToastShelf/ToastShelf";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
    const [message, setMessage] = React.useState("");
    const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
    const [toasts, setToasts] = React.useState([]);

    function handleAddToast() {
        const newKey = crypto.randomUUID();
        const newToasts = [{ variant, message, uid: newKey }, ...toasts];
        setToasts(newToasts);
    }

    function handleRemoveToast({ variant, message, uid }) {
        const indexToRemove = toasts.findIndex(
            (item) =>
                item.variant === variant &&
                item.message === message &&
                item.uid === uid
        );
        const newToasts = [
            ...toasts.slice(0, indexToRemove),
            ...toasts.slice(indexToRemove + 1),
        ];
        console.log({ toasts, newToasts, indexToRemove });
        setToasts(newToasts);
    }

    return (
        <div className={styles.wrapper}>
            <header>
                <img alt="Cute toast mascot" src="/toast.png" />
                <h1>Toast Playground</h1>
            </header>
            <ToastShelf toasts={toasts} handleRemoveToast={handleRemoveToast} />
            <div className={styles.controlsWrapper}>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleAddToast();
                        setMessage("");
                        setVariant(VARIANT_OPTIONS[0]);
                    }}
                >
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
                            <Button type="submit">Pop Toast!</Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ToastPlayground;
