import { useEffect } from "react";

export function PasswordErrorModal({ message, onClose, isVisible }) {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose();
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose]);

    if (!isVisible) return null;

    return (
        <>
            <div className="overlay-1"></div>
            <div className="customAlert custom-alert-1">
                <p className="alertText-1">{message}</p>
            </div>
        </>
    );
}
