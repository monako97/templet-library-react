import { DEV } from 'PackageNameByCore/build/process-env';
import type { PartialConfigType } from 'PackageNameByCore';

const conf: PartialConfigType = {
  devtool: DEV ? 'eval-cheap-module-source-map' : false,
  publicPath: DEV ? '/' : './',
  routerMode: 'hash',
  htmlPluginOption: {
    // favicon: './site/assets/images/favicon.ico',
  },
  miniIdc: false,
  designSize: 1920,
  bundleAnalyzer: false,
  fallbackCompPath: '@/components/fallback',
  externals: [/(.+)\/__tests__\/(.+)/i],
  importOnDemand: {
    'neko-ui': {
      transform: 'neko-ui/es/${member}',
      memberTransformers: ['dashed_case'],
    },
    lodash: {
      transform: 'lodash/${member}',
    },
  },
};

export default conf;
