import React, { Component } from "react";
import Link from "next/link";
import Head from "../components/Head";

/**
          <input
            type="text"
            className="p-4 border border-gray-400 border-t-0 rounded-none focus:outline-none"
            placeholder="Find a product..."
          /> */

const Sidebar = props => (
  <>
    <h3 className="mb-4 font-bold">What's this?</h3>
    <div className="p-4 rounded-md bg-white border border-gray-400 mb-4">
      <a target="_blank" href="https://twitter.com/matteing">
        I made
      </a>{" "}
      a crowdsourced list of resources to help tackle the coronavirus crisis.{" "}
      <br />
      <span className="text-gray-500">
        <hr className="mb-2 mt-2" />
        <small>
          Brought to you by{" "}
          <a target="_blank" href="https://getmakerlog.com">
            Makerlog
          </a>
          , the home of the maker community. Oh, and this is{" "}
          <a
            target="_blank"
            href="https://github.com/matteing/covid-product-tracker"
          >
            open source
          </a>
          !
        </small>
      </span>
    </div>
    <h3 className="mb-4 font-bold">Categories</h3>
    <ul>
      <Link href="/categories/remote-work">
        <li className="cursor-pointer p-3 bg-white border border-b-0 border-gray-400 hover:bg-yellow-500">
          <a class="unstyled">Working from home 💻</a>
        </li>
      </Link>

      <Link href="/categories/education-resources">
        <li className="cursor-pointer p-3 bg-white border border-b-0 border-gray-400 hover:bg-yellow-500">
          <a class="unstyled">Education & resources 📝</a>
        </li>
      </Link>
      <Link href="/categories/physical-services">
        <li className="cursor-pointer p-3 bg-white border border-b-0 border-gray-400 hover:bg-yellow-500">
          <a class="unstyled">Physical services 🩺</a>
        </li>
      </Link>

      <Link href="/categories/indie-apps">
        <li className="cursor-pointer p-3 bg-white border border-b-0 border-gray-400 hover:bg-yellow-500">
          <a class="unstyled">Indie-made products ✅</a>
        </li>
      </Link>
      <Link href="/categories/on-makerlog">
        <li className="cursor-pointer p-3 bg-white border border-gray-400 hover:bg-yellow-500">
          <a class="unstyled">Built in public 🔥</a>
        </li>
      </Link>
    </ul>
    <h3 className="mt-4 mb-4 font-bold">More</h3>
    <div className="p-4 rounded-md bg-white border border-gray-400 mb-4">
      <div className="flex flex-col items-center justify-center">
        <span className="mb-2">
          Like what I made? Consider buying me a coffee:
        </span>
        <a href="https://www.buymeacoffee.com/mattei" target="_blank">
          <img
            src="https://cdn.buymeacoffee.com/buttons/lato-yellow.png"
            alt="Buy Me A Coffee"
            className="bmc-inline"
          />
        </a>
      </div>
    </div>
  </>
);

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
                A directory of resources aiming to help solve the global
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
              <div className="block md:hidden p-4  pt-6">
                <Sidebar />
              </div>
              <div className="col-span-2 p-4 pt-6">{this.props.children}</div>
              <div className="md:block hidden p-4  pt-6">
                <Sidebar />
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
