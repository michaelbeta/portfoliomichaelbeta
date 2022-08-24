import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import Settings from "../../settings";

const socialTags = ({
  openGraphType,
  url,
  title,
  description,
  image,
  createdAt,
  updatedAt,
}) => {
  const metaTags = [
    { name: "facebook:card", content: "summary_large_image" },
    {
      name: "facebook:site",
      content:
        Settings &&
        Settings.meta &&
        Settings.meta.social &&
        Settings.meta.social.facebook,
    },
    { name: "facebook:title", content: title },
    { name: "facebook:description", content: description },
    {
      name: "facebook:creator",
      content:
        Settings &&
        Settings.meta &&
        Settings.meta.social &&
        Settings.meta.social.facebook,
    },
    { name: "facebook:image:src", content: image },
    { name: "facebook:card", content: "summary_large_image" },
    { name: "og:title", content: title },
    { name: "og:type", content: openGraphType },
    { name: "og:url", content: url },
    { name: "og:image", content: image },
    { name: "og:description", content: description },
    {
      name: "og:site_name",
      content: Settings && Settings.meta && Settings.meta.title,
    },
    {
      name: "og:published_time",
      content: createdAt || new Date().toISOString(),
    },
    {
      name: "og:modified_time",
      content: updatedAt || new Date().toISOString(),
    },
  ];

  return metaTags;
};

const SEO = (props) => {
  const { url, title, description, image,schemaType ,icon} = props;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={image} />
      {socialTags(props).map(({ name, content }) => {
        return <meta key={name} name={name} content={content} />;
      })}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": schemaType,
            name: title,
            about: description,
            url: url,
          }),
        }}
      />
    </Head>
  );
};

SEO.defaultProps = {
  url: "/",
  openGraphType: "website",
  schemaType: "Article",
};

SEO.propTypes = {
  url: PropTypes.string,
  openGraphType: PropTypes.string,
  schemaType: PropTypes.string,
  
};

export default SEO;