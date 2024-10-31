import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { getProducts } from "../../data/products"
import "./itemlistcontainer.scss"



const ItemListContainer = ({ greeting }) => {
const [products ,setProducts] = useState([])
const {idCategory} = useParams()


useEffect(()=> {
  getProducts()
  .then ((data)=> {
    if (idCategory){
      const filterProducts = data.filter ((product)=> product.category === idCategory)
      setProducts(filterProducts)
    }else {
      setProducts(data)
    }
  })
  .catch((error)=> {
    console.error(error)
  })
  .finally(()=> {
    console.log("Finalizo la promesa")
  })
}, [idCategory])

  return (
    <div className="itemlistcontainer">
      <h1>{greeting}</h1>
          <ItemList products={products} />
    
    </div>
  )
}

export default ItemListContainer