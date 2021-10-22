import React from "react";
import { documentToSVG, elementToSVG, inlineResources } from "dom-to-svg";
import DomParser from "dom-parser";

export default function Svg({ svg }) {
  return (
    <>
      {JSON.stringify(svg)}
    </>
  );
}

export async function getStaticProps(context) {
  const resp = await fetch("https://leandrodasilva.dev");
  const text = await resp.text();

  //   // Initialize the DOM parser
  var parser = new DomParser();
  //   // Parse the text
  const doc = parser.parseFromString(text);

  //   // You can now even select part of that html as you would in the regular DOM
  //   // Example:
  //   // var docArticle = doc.querySelector('article').innerHTML;
  //   // console.log(doc);

  //   // Capture the whole document
  const svgDocument = elementToSVG(doc);

  //   // Inline external resources (fonts, images, etc) as data: URIs
  //   await inlineResources(svgDocument.documentElement);

  //   // Get SVG string
  //   new XMLSerializer().serializeToString(svgDocument);
  return {
    props: {
      svg: text,
    }, // will be passed to the page component as props
  };
}
