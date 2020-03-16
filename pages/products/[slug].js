import React, { Component } from "react";
import AppLayout from "../../layouts/AppLayout";
import SingleProduct from "../../components/SingleProduct";
import Link from "next/link";
import Axios from "../../lib/axios";
import Head from "../../components/Head";

export default class ProductPage extends Component {
  static async getInitialProps({ query }) {
    try {
      const { data: product } = await Axios.get(
        `/api/get-product?slug=${query.slug}`
      );
      console.log(product);
      return {
        product
      };
    } catch (e) {
      console.log(e);
      return {
        statusCode: e.status_code ? e.status_code : 500
      };
    }
  }

  render() {
    const { product } = this.props;
    if (!product) return <div>Not found.</div>;
    return (
      <AppLayout>
        <Head title={product.name} />
        <Link href="/">
          <a>← Back to all</a>
        </Link>
        <br />
        <br />
        {product && <SingleProduct product={this.props.product} />}
      </AppLayout>
    );
  }
}
