/**********************************************************************************************************************/
//   author: ne@soalrcleano.com
//   brief: This file defines the Modal react component.
//          It is used to display a popup on the screen.
//   copyright: © 2024 Solarcleano. All rights reserved.
/**********************************************************************************************************************/
import ReactDom from "react-dom"

export default function Modal (props) {
    const {children, handleCloseModal} = props
    return ReactDom.createPortal(
        <div className="modal-container">
            <button 
                onClick={handleCloseModal}
                className="modal-underlay">
                <div className="modal-content">
                    {children}
                </div>
            </button>
        </div>,
        document.getElementById("portal")
    )
}
