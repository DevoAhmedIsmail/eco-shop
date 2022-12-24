import React from 'react'

const Message = ({text}) => {
  return (
    <div
          className="toast align-items-center text-white bg-primary position-fixed bottom-0 mb-3 end-0 border-0 show"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="d-flex">
            <div className="toast-body">
             {text}
            </div>
            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
        </div>
  )
}

export default Message
