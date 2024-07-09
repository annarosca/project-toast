import React from "react";

export const ToastContext = React.createContext();
function ToastProvider({ children }) {
    const [toasts, setToasts] = React.useState([]);

    function handleAddToast(variant, message) {
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
        setToasts(newToasts);
    }

    const dismissAllToasts = (React.useCallback = () => {
        setToasts([]);
    });

    return (
        <ToastContext.Provider
            value={{
                toasts,
                handleAddToast,
                handleRemoveToast,
                dismissAllToasts,
            }}
        >
            {children}
        </ToastContext.Provider>
    );
}

export default ToastProvider;
