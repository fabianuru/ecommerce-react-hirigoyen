import { Link } from 'react-router-dom'

const Item = ({ product }) => {
  return (

    <Link className='item' to={"/detail/"+product.id}>
      
        <img className='img-item' src={product.img} alt="" />
        <p className="text-item">{product.name}</p>
        <p className="text-item">${product.price}</p>
 
    </Link>
  )
}

export default Item