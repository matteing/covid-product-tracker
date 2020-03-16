import React from "react";
import Link from "next/link";
import axios from "../lib/axios";
import { useState } from "react";

class AddCommentBox extends React.Component {
  state = { creating: false, text: "", name: "", comments: [], failed: false };

  createComment = async () => {
    try {
      this.setState({ creating: true, failed: false });
      const comment = await axios.post("/api/post-comment", {
        id: this.props.product.id,
        name: this.state.name,
        content: this.state.text
      });
      if (this.props.onCommentCreate) this.props.onCommentCreate(comment.data);
      this.setState({ creating: false, text: "", failed: false });
    } catch (e) {
      alert(e);
      this.setState({ creating: false, failed: true });
    }
  };

  render() {
    return (
      <>
        <div className="flex flex-col mb-4">
          <h4 className="mb-3 font-bold">Add a comment</h4>
          <div>
            <input
              value={this.state.name}
              onChange={e => this.setState({ name: e.target.value })}
              className="input mb-2"
              placeholder="Your name"
            />
            <textarea
              value={this.state.text}
              onChange={e => this.setState({ text: e.target.value })}
              className="input"
              placeholder="Say something nice..."
            />
            {this.state.creating ? (
              <div className="mt-2 text-gray-400">Creating...</div>
            ) : (
              <button
                onClick={() => this.createComment()}
                className="mt-3 btn inline-block font-base text-gray-700 text-md rounded-full block p-2 pl-5 pr-5 bg-white border border-gray-400"
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </>
    );
  }
}

const SingleProduct = ({ product }) => {
  const [comments, setComments] = useState([]);

  const allComments = [...product.comments, ...comments];
  return (
    <>
      <div className="bg-white border border-gray-400 rounded-md rounded-b-none p-4 ">
        <a className="unstyled" target="_blank" href={product.url}>
          <div className="flex items-center justify-center cursor-pointer">
            <div className="mr-4">
              <img
                className="w-12 h-12"
                src={product.icon}
                alt={product.name}
              />
            </div>
            <div className="flex-grow">
              <h2 className="font-bold">{product.name}</h2>
              <h3 className="subtitle text-gray-700">{product.description}</h3>
              <small className="text-gray-600">
                {product.cost} · {product.comments.length} comments ·{" "}
                {product.url}
              </small>
              <br />
            </div>

            <a
              href={product.url}
              target="_blank"
              className="btn bg-primary text-white inline-block font-base text-md rounded-full block p-2 pl-5 pr-5"
            >
              Get product
            </a>
          </div>
        </a>
      </div>

      {allComments.length > 0 && (
        <div className="p-4 bg-gray-200 border border-gray-400 border-t-0">
          <div>
            {allComments.map(comment => {
              return (
                <div className="mb-4 p-4 border bg-white rounded-md border-b-1 border-gray-400">
                  <h5 className="font-bold mb-2">
                    {comment.name}{" "}
                    <span className="text-gray-600 font-normal">says...</span>
                  </h5>
                  <p>{comment.content}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
      <div className="p-4 bg-white border rounded-md rounded-t-none border-gray-400 border-t-0">
        <AddCommentBox
          product={product}
          onCommentCreate={comment => setComments([...comments, comment])}
        />
      </div>
    </>
  );
};

export default SingleProduct;
