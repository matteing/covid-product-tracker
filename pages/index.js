import Head from "next/head";
import AppLayout from "../layouts/AppLayout";
import Product from "../components/Product";
import axios from "../lib/axios";
import Link from "next/link";

const Home = ({ categories = null }) => {
  return (
    <AppLayout>
      {categories &&
        categories
          .filter(c => c.products.length > 0)
          .map(category => (
            <div className="category-section mb-8">
              <div className="title mb-4">
                <h3 className="font-bold">{category.name}</h3>
                <h4 className="subtitle">{category.description}</h4>
              </div>
              {category.products.map(p => (
                <Product product={p} />
              ))}
              <Link href={`/categories/${category.id}`}>
                <a>View all</a>
              </Link>
            </div>
          ))}
    </AppLayout>
  );
};

Home.getInitialProps = async ctx => {
  try {
    const { data: categories } = await axios.get("/api/get-featured");
    return {
      categories
    };
  } catch (e) {
    //console.log(e);
    return {
      statusCode: 500
    };
  }
};

export default Home;
