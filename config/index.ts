import type { PartialConfigType } from 'plugin-runtime';

const conf: PartialConfigType = {
  compiler: 'tsc',
  prefixCls: 'business',
  modifyVars: {
    '@primary-color': '#e6ebf3',
  },
};

export default conf;
