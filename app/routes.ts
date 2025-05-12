import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("epub-editor", "routes/epub-editor.tsx"),
  route("crabigateur", "routes/crabigateur.tsx"),
  route("olx", "routes/olx.tsx"),
] satisfies RouteConfig;
