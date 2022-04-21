import { useContext, useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap"
import { CakeCard, Error } from "../../export/components";
import { CakeContext } from "../../context/cakeContext";
import { API } from '../../config/api';

export default function Landing() {
  
  const [cakeState, dispatchCake] = useContext(CakeContext);
  const [error, setError] = useState(false);

  const getData= () => {
    API.get('/cakes')
        .then(res=> dispatchCake( { type: "INIT_CAKE_LIST", payload: res.data.data.items } ) )
        .catch(() => setError(true));
  }

  useEffect( ()=> getData() , [] )
  
  return (
    <Container>
        <Row className="text-center py-4">
            <h1 className="title">Cake Store</h1>
            <h4>list cake</h4>
        </Row>
        {
           error ? <Error />
           : <Row> { 
                cakeState.cake.map( data => 
                    <CakeCard 
                        data={data}
                        key={data.id}
                        reload={getData}
                    /> 
                ) 
            }
            </Row>
        }
        
    </Container>
  )
}
