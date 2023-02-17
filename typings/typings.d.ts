
declare module '*.less';
declare module '*.css';
declare module '*.js';
declare module '*.jsx';
declare module '*.ts';
declare module '*.png';
declare module '*.svg';
declare module '*.woff2';
declare module 'env-flags';
declare module './index.less' {
  const styles: { readonly [key: string]: string };

  export default styles;
}

// types/mdx.d.ts
declare module '*.mdx' {
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-explicit-any
  let MDXComponent: (props: any) => JSX.Element;

  export default MDXComponent;
}
declare module '*?raw' {
  export default string;
}

declare module 'libraryNameTemplate' {
  export * from 'components/index';
}

interface PureComponentProps {
  path: string;
}

interface Window {
  Prism?: Prism & typeof Object;
}
