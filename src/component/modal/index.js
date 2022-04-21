import { useState } from "react";
import { Modal } from "react-bootstrap"

export default function MessageModal( { message, close } ) {

  const [show, setShow] = useState(true);

  const handleClose = () => {
      setShow(false);
      close();
  }

  return (
    <Modal show={show} onHide={handleClose} size='sm' centered>
      <div className="py-4 px-2 text-center">
        <h4>{message}</h4>
        <button className="btn btn-primary mt-4 mb-2" onClick={handleClose}>OK</button>
      </div>
    </Modal>
  )
}
