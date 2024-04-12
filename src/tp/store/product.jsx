import Rating from "./rating"

export default function Product({product}){
 
     return <>
   
    <tr class="">
                    <td scope="row">{product.id}</td>
                    <td>{product.title}</td>
                    <td>{product.price}$</td>
                    <td >{product.description.slice(0,100)}</td>
                    <td>{product.category}</td>
                    <td><img src={product.image} alt="" width='100px' height='100px'  /></td>
                    <td><Rating  rate={product.rating.rate} count= {product.rating.count}/></td>
                </tr>
    </>
}