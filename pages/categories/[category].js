import React, { Component } from "react";
import { getCategoryForId } from "../../lib/utils";
import AppLayout from "../../layouts/AppLayout";
import Product from "../../components/Product";
import axios from "../../lib/axios";
import Link from "next/link";
import Head from "../../components/Head";

export default class CategoryPage extends Component {
  static async getInitialProps({ query }) {
    try {
      const { data: prefetchedData } = await axios.get(
        `/api/get-products-category?id=${query.category}`
      );
      return {
        prefetchedData,
        category: query.category
      };
    } catch (e) {
      return {
        statusCode: e.status_code ? e.status_code : 500
      };
    }
  }

  constructor(props) {
    super(props);
    console.log(this.props.prefetchedData);
    this.state = {
      loading: false,
      offset:
        this.props.prefetchedData && this.props.prefetchedData.offset
          ? this.props.prefetchedData.offset
          : null,
      products:
        this.props.prefetchedData && this.props.prefetchedData.records
          ? this.props.prefetchedData.records
          : []
    };
  }

  getMore = async () => {
    try {
      if (this.state.offset) {
        this.setState({ loading: true });
        const { data } = await axios.get(
          `/api/get-products-category?id=${this.props.category}&offset=${this.state.offset}`
        );
        this.setState({
          loading: false,
          offset: data.offset ? data.offset : null,
          products: [...this.state.products, ...data.records]
        });
      }
    } catch (e) {
      alert(e);
    }
  };

  render() {
    const category = getCategoryForId(this.props.category);
    if (!category) return <div>Not found.</div>;
    return (
      <AppLayout>
        <Head title={category.name} />
        <Link href="/">
          <a>← Back to all</a>
        </Link>
        <br />
        <br />
        <div className="title mb-4">
          <h3 className="font-bold">{category.name}</h3>
          <h4 className="subtitle">{category.description}</h4>
        </div>
        {this.state.products.map(product => (
          <Product product={product} />
        ))}
        {this.state.products.length === 0 && (
          <span className="text-gray-900">
            No products yet.{" "}
            <a href="https://airtable.com/shrPtF3izWbVfwWAW">Add one?</a>
          </span>
        )}
        <div className="mt-2">
          {this.state.offset &&
            (this.state.loading ? (
              <span>Loading...</span>
            ) : (
              <a onClick={this.getMore}>Load more...</a>
            ))}
        </div>
      </AppLayout>
    );
  }
}
