import React from "react";
import { Helmet } from "react-helmet";

type SeoProps = {
  title: string;
  desc: string;
  url: string;
  ogImage: string; // Starts with '/' symbol.
  path: string; // Starts with '/' symbol. Use '' if no path is required.
};

function Seo({ title, desc, ogImage, url, path }: SeoProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <html lang="en" />
      <meta name="description" content={desc} />
      <meta name="image" content={`${url}/${ogImage}`} />
      <meta name="image:alt" content={desc} />

      {/* Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={`${url}${path}`} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={`${url}/${ogImage}`} />
      <meta property="og:image:alt" content={desc}></meta>

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:url" content={`${url}${path}`} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={`${url}/${ogImage}`} />
      <meta name="twitter:image:alt" content={desc}></meta>
    </Helmet>
  );
}

export default Seo;
