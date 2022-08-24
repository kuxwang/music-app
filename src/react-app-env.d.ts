/// <reference types="react-scripts" />
declare module "*.less" {
  const content: { readonly [className: string]: string}
  export default content
}

declare module "*.png" {
  const src: string;
  export default src
}

declare module "*.jpg" {
  const src: string;
  export default src
}

declare module "*.jpeg" {
  const src: string;
  export default src
}