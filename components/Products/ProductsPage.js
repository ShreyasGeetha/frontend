/**
 * <a href="https://ibb.co/BPqpFtL"><img src="https://i.ibb.co/1n8gjLZ/Baby-Clothes.jpg" alt="Baby-Clothes" border="0"></a>
<a href="https://ibb.co/4TczsFK"><img src="https://i.ibb.co/C7qgJwm/Basic-Tee-White.jpg" alt="Basic-Tee-White" border="0"></a>
<a href="https://ibb.co/HDd0G3H"><img src="https://i.ibb.co/nsCTQtL/Basic-Tee-Yellow.jpg" alt="Basic-Tee-Yellow" border="0"></a>
<a href="https://ibb.co/2K4C2Lf"><img src="https://i.ibb.co/5cHSDzf/Black-Grey-Checks-Shirt.jpg" alt="Black-Grey-Checks-Shirt" border="0"></a>
<a href="https://ibb.co/r2jvvzw"><img src="https://i.ibb.co/RTF77sD/Blazer.jpg" alt="Blazer" border="0"></a>
<a href="https://ibb.co/vwMqxHy"><img src="https://i.ibb.co/8KQsD0v/Blue-Jean-Shirt.jpg" alt="Blue-Jean-Shirt" border="0"></a>
<a href="https://ibb.co/wRtK6Ny"><img src="https://i.ibb.co/Dtd7KD4/Blue-Sweater.jpg" alt="Blue-Sweater" border="0"></a>
<a href="https://ibb.co/bsWT5Lc"><img src="https://i.ibb.co/zXnpVbq/Jacket.jpg" alt="Jacket" border="0"></a>
<a href="https://ibb.co/NKLdQgZ"><img src="https://i.ibb.co/kXhskVQ/Jean-Jacket.jpg" alt="Jean-Jacket" border="0"></a>
<a href="https://ibb.co/T04QB1s"><img src="https://i.ibb.co/qgNHMCv/White-Shirt.jpg" alt="White-Shirt" border="0"></a>
 */

import Link from 'next/link';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../../redux/actions/productActions';

//useSelector - select the part of the state that you want to use here

const ProductsPage = () => {

  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  useEffect(() => {
    const getProducts = async () => {
       
      await dispatch(listProducts())
    }
    getProducts();  
  },[dispatch])
  

  return (
    
    <div className="bg-white">
      {loading ?
        (<h2>Loading...</h2>)
        : error
          ? (<h3>{error}</h3>)
          : (
      <div className="max-w-2xl mx-auto py-1 px-4 sm:py-1 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
             product.isVisible && <div key={product._id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <Link href={`/product/${product._id}`}>
                  <a>
                    <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />    
                    </a>
                </Link>              
              </div>
              
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-500">
                    <Link href={`/product/${product._id}`}><a>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a></Link>
                  </h3>
                  <Link href={`/product/${product._id}`}><a><p className="mt-1 text-sm text-gray-500">{product.color}</p></a></Link>
                </div>
                
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link href={`/product/${product._id}`}><a>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.sex}
                    </a></Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.size}</p>
                </div>
              </div>
            </div>
          ))}
        </div>      
      </div>  
      )}
      
    </div>
  )
}

export default ProductsPage