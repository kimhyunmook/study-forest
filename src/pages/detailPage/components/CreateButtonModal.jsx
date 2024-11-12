export function CreateButtonModal({ message, onClose, isVisible }) {
    return (
        <>
            {isVisible && (
                <>
                    <div className="overlay"></div>
                    <div className="customAlert custom-alert">
                        <p className="alertText">{message}</p>
                        <button className="closeAlert" onClick={onClose}>확인</button>
                    </div>
                </>
            )}
        </>
    )
}