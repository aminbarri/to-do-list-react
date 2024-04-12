import { useEffect, useState } from "react"
import Product from "./product"
export default function ProductList(){
    const [productList ,setproductList] =useState([])
    const [categoriesList ,setcategoriesList] =useState([])
    
    const [searchInput, setsearchInput] = useState('')
    const [searchCategory, setsearchCategory] = useState('')

    const getProduct= ()=>{
        fetch('https://fakestoreapi.com/products') 
        .then(Response=>Response.json())
        .then(Response=>setproductList(Response))
    }

    const getCategory= ()=>{
        fetch('https://fakestoreapi.com/products/categories') 
        .then(Response=>Response.json())
        .then(Response=>setcategoriesList(Response))
    }

    useEffect (()=>{
        getProduct()
        getCategory()
    },[])


    const displayProducts = ()=>{
        console.log("Search Input:", searchInput); // Check the search input
        console.log("Search Category:", searchCategory); // Check the selected category
        let productTemp =productList
        if(searchCategory !== ''){
             productTemp = productList.filter(product =>{
                return product.category.includes(searchCategory)})
        }
        else if(searchCategory !=='' && searchInput !== ''){
            productTemp = productList.filter(product =>{
            return product.category.includes(searchCategory)||
            product.title.includes(searchInput) 
            ||product.id.toString().includes(searchInput)
            ||product.description.includes(searchInput)
        })
        }
        else{
              productTemp = productList.filter(product =>{
            return product.title.includes(searchInput) 
            ||product.id.toString().includes(searchInput)
            ||product.description.includes(searchInput)
           

        })
        }
       
        
        
      

        
        return productTemp.map(product=>{
            return <Product product={product} />
        })
    }


    const displaycategories = ()=>{
        return categoriesList.map(category=>{
            return  <button
            type="button"
            name=""
            key={category}
            className="btn btn-primary m-2"
            onClick={searchButton}
        >
        {category}
        </button>
        })
    }

    const searchButton = (e)  =>{
        e.preventDefault()

        const selectedCategory = e.target.textContent;
      
        setsearchCategory(selectedCategory); 
        console.log(searchCategory)
    }
    const handleSearch =(e)=>{
        e.preventDefault()
        setsearchCategory('')
        const searchValue = document.querySelector('#search').value
        
        setsearchInput (searchValue) 
    }
    return  <div className="container-fluix mx-auto w-75 my-3">
        <form>
        <div class="input-group mb-3">
  <input type="text" 
                        name=""
                        id="search"
                        className="form-control "  />
  <button value="Search" className="btn btn-outline-secondary mx-2" onClick={handleSearch}>Search</button>
</div>
       
        <div >
            <div className="">
                <h5>Categories</h5>
                
               {displaycategories()}
            </div>
            
           
        </div>
        </form>
    
    <h1>product list</h1>

    <div
        class="table-responsive"
    >
        <table
            class="table table-bg-primary"
        >
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Price</th>
                    <th scope="col">Description</th>

                    <th scope="col">Categorie</th>

                    <th scope="col">image</th>
                    <th scope="col">rating</th>

                </tr>
            </thead>
            <tbody>
            {displayProducts()}
               
            </tbody>
        </table>
    </div>
    
    </div>
}