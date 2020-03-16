import NextHead from "next/head";
import React from "react";
import { string } from "prop-types";

function getPageTitle() {
  return "The COVID Pages";
}

const defaultDescription =
  "The COVID Pages is the crowdsourced directory for online COVID resources.";
const defaultOGURL = process.env.BASE_URL;
const defaultOGImage = `${process.env.BASE_URL}/img/og-image.png`;

const Head = props => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>
      {props.title ? `${props.title} | ${getPageTitle()}` : getPageTitle()}
    </title>
    <meta
      name="description"
      content={props.description || defaultDescription}
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/icons/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/icons/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/icons/favicon-16x16.png"
    />
    <link rel="manifest" href="/icons/site.webmanifest" />
    <link rel="shortcut icon" href="/icons/favicon.ico" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="msapplication-config" content="/icons/browserconfig.xml" />
    <meta name="theme-color" content="#ffffff" />

    <meta property="og:url" content={props.url || defaultOGURL} />
    <meta property="og:title" content={props.title || "The COVID Pages"} />
    <meta
      property="og:description"
      content={props.description || defaultDescription}
    />
    <meta name="twitter:site" content={props.url || defaultOGURL} />
    {props.ogLargeImage || (!props.ogImage && defaultOGImage) ? (
      <meta name="twitter:card" content="summary_large_image" />
    ) : (
      <meta name="twitter:card" content={"summary"} />
    )}
    <meta name="twitter:site" content="@getmakerlog" />
    <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
  </NextHead>
);

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
};

export default Head;
