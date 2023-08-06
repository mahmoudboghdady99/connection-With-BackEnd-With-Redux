import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../RTK/slices/products-slice';


function Products() {

  const NewProducts = useSelector((state) => state.products);
  console.log("NewProducts", NewProducts);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (
    <Container >
     <Row>
        {["aaa", "bbb", "ccc"].map((item) => {
          return(
          <Col xs={12} sm={6} md={6} lg={4}    key={item} style={{ marginTop: "30px"}}> 
            <Card  style={{  marginLeft: "10px"}}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">SHow</Button>
            </Card.Body>
            </Card>
            </Col>
          )
        })
        
        }
     
     </Row>
  
    </Container>
  )
}

export default Products
