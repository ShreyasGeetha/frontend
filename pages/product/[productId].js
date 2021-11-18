import { useRouter } from 'next/router';
import ProductScreen from '../../components/Products/ProductScreen';

const ProductDetail = () => {
  const router = useRouter();
  //From products page you click on a image.. that href with id to a page.. from url 
  //you get the id and make query to backend using id
  const productId = router.query.productId;
  return (
    <div>
      <ProductScreen productId={`${productId}`}/>
    </div>
  );
}

export default ProductDetail; 