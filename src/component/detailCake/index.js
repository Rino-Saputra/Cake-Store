import {useState} from 'react'
import { Modal, Button, Card } from 'react-bootstrap'

export default function DetailCake( { data, close } ) {

  const [show, setShow] = useState(true);

  const handleClose = () => {
      setShow(false);
      close();
  }

  return (
    <Modal show={show} onHide={handleClose} size='md' centered>
        <div className='py-2 px-2'>
            <img className='cake-img pb-4' src={data.image} />
            <h4 className='pb-2'>{data.title}</h4>
            <h6>{data.description}</h6>
        </div>
    </Modal>
  )
}
