import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();
  const productId = params.productId;

  return (
    <div>
      <h1>Product details</h1>
      <p>{productId}</p>
    </div>
  );
};

export default ProductDetail;
