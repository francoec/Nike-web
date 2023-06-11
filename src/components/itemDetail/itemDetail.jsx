import React from 'react'
import {useState,useEffect} from 'react'
import getFetch from '../../helper/helper'
import './itemDetail.css'

const ItemDetail = () => {
const [data, setData] = useState({})
const [loading, setLoading] = useState(true)

useEffect(()=> {
    getFetch
    .then(response => {
        setData(response.find(prod => prod.id === 1))
        setLoading(false)
    })
}, [])

console.log(data)
        return (
            <div className="item-container">
            <h1>Detalle de producto, luego va con link/router</h1>
        {
            loading ?  <h2>Cargando details...</h2>
            :
            <div className="item-detail">
                    <img src={data.img} alt="" />
                    <h2>{data.name}</h2>
                    <h3>{data.price}</h3>

                <div className="detail">
                        <h4>{data.tipe}</h4>
                        <p>{data.season}</p>
                </div>
                    <p>{data.description}</p>

                </div>

        }
    </div>
  )
}

export default ItemDetail