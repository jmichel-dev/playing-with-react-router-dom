import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>Products page</h1>
      <ul>
        <Link to="/products/p1">A book</Link>
        <Link to="/products/p2">A carpet</Link>
        <Link to="/products/p3">An online course</Link>
      </ul>
    </section>
  );
};

export default Products;
