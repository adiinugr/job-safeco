import React from "react";
import Head from "next/head";

const CustomHead = () => {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" href="/logo.ico"></link>

      <title>Safeco Packaging</title>
      <meta name="title" content="Safeco Packaging" />
      <meta
        name="description"
        content="Plant based material packaging. Biodegradable, compostable,
                healthy, and recyclable. Saving resource and protecting the
                environtment."
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://safecopackaging.com/" />
      <meta property="og:title" content="Safeco Packaging" />
      <meta
        property="og:description"
        content="Plant based material packaging. Biodegradable, compostable,
                healthy, and recyclable. Saving resource and protecting the
                environtment."
      />
      <meta property="og:image" content="/images/image1.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://safecopackaging.com/" />
      <meta property="twitter:title" content="Safeco Packaging" />
      <meta
        property="twitter:description"
        content="Plant based material packaging. Biodegradable, compostable,
                healthy, and recyclable. Saving resource and protecting the
                environtment."
      />
      <meta property="twitter:image" content="/images/image1.png"></meta>
    </Head>
  );
};

export default CustomHead;
