import type { PartialConfigType } from 'PackageNameByCore';

const conf: PartialConfigType = {
  modifyVars: {},
  miniIdc: false,
  designSize: 1920,
  minifier: {
    type: 'terser',
  },
  importOnDemand: {
    antd: ['[source]/es/[name:-]', '[source]/es/[name:-]/style'],
    'neko-ui': '[source]/es/[name]',
    lodash: '[source]/[name]',
    '@ant-design/icons': {
        transform: ({ name, source }) => {
            if (name === 'createFromIconfontCN') {
                return `${source}/es/components/IconFont`;
            }
            return `${source}/es/icons/${name}`;
        },
    },
  },
  proxy: [
    {
      context: ['/api/'],
      target: 'http://127.0.0.1:8001/',
      changeOrigin: true,
      pathRewrite: { '^/api/': '/' },
      secure: false,
    }
  ] as unknown as PartialConfigType['proxy'],
};

export default conf;
