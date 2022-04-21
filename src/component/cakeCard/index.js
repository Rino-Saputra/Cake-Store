import { useState, useRef } from 'react';
import { Row, Col, Image } from 'react-bootstrap'
import { DetailCake, MessageModal } from '../../export/components'
import { star, add, del, failed } from '../../export/img'; 
import { API } from '../../config/api';

export default function CakeCard( { data, reload } ) {

  const { description, id, image, rating, title }= data;

  const [showDetail, setShowDetail] = useState(false);

  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('')

  const delData = () => {
    API.delete(`/cakes/${id}`)
      .then( () => setMessage('sucess delete item'))
      .catch( () => setMessage('failed to delet'));
    setShowMessage(!showMessage);
  }

  const addData= () => {
    API.post('/cakes','')
        .then( () => setMessage('sucess add cake'))
        .catch( () => setMessage('failed add cake'));
    setShowMessage(!showMessage);
  }
  
  return (
    <Col md={4} className='my-4 xy-4 card-cake'>
        <Row>
            <Col>
                <Image className='cake-img rounded cp' 
                    onClick={()=>setShowDetail(!showDetail)} 
                    src={image}
                    alt={image}
                    >
                </Image>
            </Col>
            <Col ms={6}>
                <h6 className='fw-bold text-secondary'>{ title.length>20 ? title.slice(0,15)+'...' : title } </h6>
                <Row className='d-flex mt-5'>
                    <Col className='d-flex'>  
                        <Image className='icon' src={star}></Image>
                        <h6 >{rating}</h6>
                    </Col>
                    <Col className='d-flex'>
                        <Image onClick={addData} className='icon cp' src={add}></Image>
                        <Image onClick={delData} className='icon ms-2 cp' src={del}></Image>
                    </Col>
                </Row>
            </Col>
        </Row>

        { showDetail && <DetailCake data={data} close={()=>setShowDetail(!showDetail)}/>}

        { showMessage && < MessageModal 
            message={message} 
            close={()=>{
                setShowMessage(!message);
                reload();
            }}/>
        }

        
    </Col>
  )
}
