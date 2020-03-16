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
      sizes="57x57"
      href="/icons/apple-icon-57x57.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="60x60"
      href="/icons/apple-icon-60x60.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="72x72"
      href="/icons/apple-icon-72x72.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="76x76"
      href="/icons/apple-icon-76x76.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="114x114"
      href="/icons/apple-icon-114x114.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="120x120"
      href="/icons/apple-icon-120x120.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="144x144"
      href="/icons/apple-icon-144x144.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="152x152"
      href="/icons/apple-icon-152x152.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/icons/apple-icon-180x180.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="192x192"
      href="/icons/android-icon-192x192.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/icons/favicon-32x32.png?v=csef4nwnl"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="96x96"
      href="/icons/favicon-96x96.png?v=csef4nwnl"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/icons/favicon-16x16.png?v=csef4nwnl"
    />
    <link rel="manifest" href="/icons/manifest.json" />
    <meta name="msapplication-TileColor" content="#00B77A" />
    <meta name="msapplication-TileImage" content="/icons/ms-icon-144x144.png" />
    <meta name="theme-color" content="#00B77A" />

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
