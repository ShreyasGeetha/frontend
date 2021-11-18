import { useEffect, useState } from 'react'
import { StarIcon } from '@heroicons/react/solid'
import { RadioGroup } from '@headlessui/react'
import { CurrencyDollarIcon, GlobeIcon } from '@heroicons/react/outline'
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails } from '../../redux/actions/productActions';
import { showLoginForm } from "../../redux/actions/ShowLoginFormAction";
import Link from 'next/link';
import { useRouter } from 'next/router'


const policies = [
  { name: 'International delivery', icon: GlobeIcon, description: 'Get your order in 2 years' },
  { name: 'Loyalty rewards', icon: CurrencyDollarIcon, description: "Don't look at other tees" },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const ProductScreen = ({productId}) => {
  const router = useRouter();
  
  console.log('Router query',router)
  const [selectedSize, setSelectedSize] = useState('')
  const dispatch = useDispatch();
  const productDetails = useSelector(state => state.productDetails);
  const shouldShowLoginForm = useSelector(state => state.shouldShowLoginForm);

  const { product } = productDetails;
  console.log('product information', [product])
  const userLogin = useSelector(state => state.userLogin)
  var { userInfo, isUserloggedIn } = userLogin
 
  console.log('111', productId)
  
  useEffect(() => {
    console.log('what is the product id value now', productId);
    const getProductDetails = async () => {
      await dispatch(listProductDetails(productId))
    }
    getProductDetails()
    if (userInfo) {
      isUserloggedIn = true
    } else {
      isUserloggedIn = false
    }
    
  },[productId,userLogin])

  const showSignUpForm = async (e) => {
    e.preventDefault()
    console.log('1')
    await dispatch(showLoginForm(!shouldShowLoginForm))    
  }

  return (
    <div className="bg-white">
      <div className="pt-6 pb-16 sm:pb-24">
        
        <div className="mt-8 max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">
            <div className="lg:col-start-8 lg:col-span-5">
              <div className="flex justify-between">
                <h1 className="text-xl font-medium text-gray-900">{product.name}</h1>
                <p className="text-xl font-medium text-gray-900">{}</p>
              </div>
              
            </div>

            {// Image gallery
            }
            <div className="mt-8 lg:mt-0 lg:col-start-1 lg:col-span-7 lg:row-start-1 lg:row-span-3">
              <h2 className="sr-only">Images</h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
                
                  <img
                    key={product.id}
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className='lg:col-span-2 lg:row-span-2'
                  />
                
              </div>
            </div>

            <div className="mt-8 lg:col-span-5">
              <form>
                

                {// Size picker
                }
                <div className="mt-8">
                  <div className="flex items-center justify-between">
                    <h2 className="text-sm font-medium text-gray-900">Size</h2>
                    <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                      {/* See sizing chart */}
                    </a>
                  </div>

                  <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-2">
                    <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                    <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                      {product.sizes.map((size) => (
                        <RadioGroup.Option
                          key={size.name}
                          value={size}
                          className={({ active, checked }) =>
                            classNames(
                              size.inStock ? 'cursor-pointer focus:outline-none text-pink-50 bg-header ring-2 ring-offset-2 ring-header' : 'opacity-25 cursor-not-allowed',
                              active ? 'ring-2 ring-offset-2 ring-indigo-500' : '',
                              checked
                                ? ' border-transparent text-white '
                                : 'bg-white border-indigo-500 text-gray-900',
                              'border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1'
                            )
                          }
                          disabled={!size.inStock}
                        >
                          <RadioGroup.Label as="p">{size.name}</RadioGroup.Label>
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
                {isUserloggedIn && <Link href={{
                  pathname: '/cart/Cart',
                  query: {
                    productId: `${productId}`
                  },
                }} passHref>  
                  <button
                    type="submit"
                    className="mt-8 w-full bg-header border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-header focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-header"
                      >
                    Add to cart
                  </button>                
                </Link>}
                {!isUserloggedIn &&
                  <button
                    type="submit"
                    onClick={showSignUpForm}
                    className="mt-8 w-full bg-header border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-header focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-header"
                  >
                    Login to Add to Cart
                  </button>
                }
              </form>

              {// Product details
              }
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Description</h2>

                <div
                  className="mt-4 prose prose-sm text-gray-500"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductScreen;