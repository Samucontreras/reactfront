import React, {useEffect, useState} from 'react'
import axios from 'axios'

import {Link} from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'

export const ShowProducts = () => {
    const [ products, setProducts ] = useState( [] )
    useEffect ( ()=> {
        getAllProducts()
    }, [])

    const getAllProducts = async () => {
        const response = await axios.get(`${endpoint}/products`)
        setProducts(response)
    }

    const deleteProduct = () => {

    }
  return (
    <div>Table</div>
  )
}
