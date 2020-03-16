import React, { Component } from "react";
import Link from "next/link";
import Head from "../components/Head";

/**
          <input
            type="text"
            className="p-4 border border-gray-400 border-t-0 rounded-none focus:outline-none"
            placeholder="Find a product..."
          /> */

export default class AppLayout extends Component {
  render() {
    return (
      <>
        <Head />
        <div class="container mx-auto">
          <div className="flex flex-col min-h-screen">
            <div className="p-4 pt-8  pb-8 border border-gray-400 border-t-0 bg-white  flex flex-col items-center justify-center">
              <Link href="/">
                <h1 className="cursor-pointer hover:underline text-yellow-600 mb-2">
                  <img
                    src="https://i.imgur.com/zfBi9SR.png"
                    alt=""
                    className="w-6 h-6 inline-block"
                  />
                  The COVID Pages
                </h1>
              </Link>
              <h3 className="subtitle mb-4">
                A directory of tech products aiming to help solve the global
                pandemic, aggregated by people like you.
              </h3>
              <a
                href="https://airtable.com/shrPtF3izWbVfwWAW"
                target="_blank"
                className="btn inline-block font-base text-gray-700 text-md rounded-full block p-2 pl-5 pr-5 bg-yellow-400"
              >
                Add a resource
              </a>
            </div>
            <div className="md:grid md:grid-cols-3  bg-gray-100  flex-grow border border-gray-400 border-t-0 border-b-0">
              <div className="col-span-2 p-4 pt-6">{this.props.children}</div>
              <div className="p-4  pt-6">
                <h3 className="mb-2 font-bold">Categories</h3>
                <ul>
                  <li className="cursor-pointer p-2 border border-gray-400 border-t-0 border-b-0 border-r-0">
                    <Link href="/">
                      <a>All categories ✨</a>
                    </Link>
                  </li>
                  <li className="cursor-pointer p-2 border border-gray-400 border-t-0 border-b-0 border-r-0">
                    <Link href="/categories/remote-work">
                      <a>Working from home 💻</a>
                    </Link>
                  </li>
                  <li className="cursor-pointer p-2 border border-gray-400 border-t-0 border-b-0 border-r-0">
                    <Link href="/categories/education">
                      <a>Education & resources 📝</a>
                    </Link>
                  </li>
                  <li className="cursor-pointer p-2 border border-gray-400 border-t-0 border-b-0 border-r-0">
                    <Link href="/categories/services-irl">
                      <a>Physical services 🩺</a>
                    </Link>
                  </li>
                  <li className="cursor-pointer p-2 border border-gray-400 border-t-0 border-b-0 border-r-0">
                    <Link href="/categories/education">
                      <a>Indie-made products ✅</a>
                    </Link>
                  </li>
                  <li className="cursor-pointer p-2 border border-gray-400 border-t-0 border-b-0 border-r-0">
                    <Link href="/categories/publicly-built">
                      <a>Built in public 🔥</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white items-center justify-center text-gray-600 p-4 border border-gray-400 border-b-0 flex">
              <div className="flex flex-col">
                <a href="https://getmakerlog.com">
                  <img
                    className="h-8"
                    src="https://getmakerlog.com/img/logo.png"
                    alt=""
                  />
                </a>
                <small>The home of the maker community.</small>
              </div>
              <div className="flex-grow"></div>
              <div className="flex flex-col text-right">
                <small>Made with love in Puerto Rico 🇵🇷</small>
                <small className="text-gray-500">
                  &copy; Sergio Mattei 2020
                </small>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
