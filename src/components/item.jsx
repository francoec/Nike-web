import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useState } from 'react';

const Item = ({data, inicial, max, onAdd}) => {

    const [count, setCount] = useState(inicial)
  
    const sumar = () => {
        count < max ? setCount(count + 1) : alert('No se pueden agregar mas productos')
    }
  
    const restar = () => {
        count > inicial ? setCount(count - 1) : alert('No podes quitar mas productos')
    }
  
    const reset = () => {
        setCount(inicial)
    }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data.img} />
      <Card.Body>
        <Card.Title>
        {data.name}
        </Card.Title>
        <Card.Text>
          nike good.
        </Card.Text>
        <ButtonGroup aria-label="Basic example">
        <Button onClick={sumar}>+</Button>
        <Button onClick={restar}>-</Button>
        <Button onClick={() => {onAdd(count)}}>Agregar al carrito</Button>
        <Button onClick={reset}>Borrar Carrito</Button>
        <h2>{count}</h2>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
}

export default Item;