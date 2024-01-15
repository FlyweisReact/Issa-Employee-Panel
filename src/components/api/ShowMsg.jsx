import { Store } from "react-notifications-component"

export const showMsg = (title, msg, type) => {
    return Store.addNotification({
        title: title,
        message: msg,
        type: type,
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
            duration: 3000,
            onScreen: true
        }
        
    })
}