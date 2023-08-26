import type { ConfigType } from 'PackageNameByCore';

const conf: Partial<ConfigType> = {
  minifier: {
    css: {
      type: 'cssnano',
    },
  },
  htmlPluginOption: {
    favicon: './site/assets/images/favicon.ico',
  },
  fallbackCompPath: '@/components/fallback',
  externals: [/(.+)\/__tests__\/(.+)/i],
  importOnDemand: {
    lodash: {
      transform: '${member}',
    },
  },
};

export default conf;
