import './HomePage.css'
import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { ProductsGrid } from './ProductsGrid'
import axios from 'axios'

export function HomePage({cart, loadCart}) {
    const [products, setProducts] = useState([]);
    
    useEffect( () => {
        const getHomeData = async () => {
            // fetch data or get data form the backend or server
            const response = await axios.get('/api/products')
            setProducts(response.data)
        }
        getHomeData();
    }, []);
    
    return (
        <>
            <title>Ecommerce Project</title>
            <Header cart={cart}/>

            <div className="home-page">
                <ProductsGrid products={products} loadCart={loadCart} />
            </div>
        </>
    )
}