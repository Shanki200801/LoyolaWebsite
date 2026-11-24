// Prefix a root-relative public asset path with the deploy basePath.
// <Link> does this automatically; plain <a href>, <img> and next/image src strings do not.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function asset(path) {
  if (typeof path !== "string" || !path.startsWith("/") || path.startsWith("//")) return path;
  if (basePath && (path === basePath || path.startsWith(basePath + "/"))) return path;
  return basePath + path;
}
