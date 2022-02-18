import type { PartialConfigType } from 'plugin-runtime';

const conf: PartialConfigType = {
  compiler: 'tsc',
  prefixCls: 'business',
  modifyVars: {
    '@primary-color': '#e6ebf3',
    '@border-color-base': '4px',
  },
};

export default conf;
