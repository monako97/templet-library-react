import type { PartialConfigType } from 'plugin-runtime';
import { packageJson } from 'plugin-runtime/build/common';

const conf: PartialConfigType = {
  compiler: 'tsc',
  prefixCls: packageJson.name,
  modifyVars: {
    '@primary-color': '#e6ebf3',
    '@border-color-base': '4px',
  },
  miniIdc: false,
  gzip: false,
  bundleAnalyzer: false,
  designSize: 1920,
};

export default conf;
