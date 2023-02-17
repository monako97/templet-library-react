import { injectGlobal } from '@emotion/css';
import { getColorVariableString } from 'PackageNameByCommon';

export { default as WaveCircle, type WaveCircleProps } from './wave-circle';

injectGlobal([
    `:root {
      ${getColorVariableString('#faad14', { name: 'primary' })}
    }
  
    :root[data-theme='dark'] {
      ${getColorVariableString('#bb8314', { name: 'primary', theme: 'dark' })}
    }`,
]);
  