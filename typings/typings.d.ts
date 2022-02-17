declare module '*.less';
declare module '*.css';
declare module '*.js';
declare module '*..jsx';
declare module '*.ts';
declare module '*.png';
declare module './index.less' {
  const styles: Record<string, string>;

  export default styles;
}

interface PureComponentProps {
  path: string;
}
