import asset from "./asset";

// Static hosting: serve the original file, just make sure basePath is applied.
export default function imageLoader({ src }) {
  return asset(src);
}
