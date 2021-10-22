import { documentToSVG, elementToSVG, inlineResources } from "dom-to-svg";
import DomParser from "dom-parser";

export default function handler(req, res) {
  const toSVG = async () => {
    const resp = await fetch("https://leandrodasilva.dev");

    // Initialize the DOM parser
    var parser = new DomParser();
    // Parse the text
    const doc = parser.parseFromString(await resp.text());

    // You can now even select part of that html as you would in the regular DOM
    // Example:
    // var docArticle = doc.querySelector('article').innerHTML;

    console.log(doc);

    // Capture the whole document
    const svgDocument = documentToSVG(doc);

    // Inline external resources (fonts, images, etc) as data: URIs
    await inlineResources(svgDocument.documentElement);

    // Get SVG string
    return new XMLSerializer().serializeToString(svgDocument);
  };
  toSVG().then(res.end);
}
