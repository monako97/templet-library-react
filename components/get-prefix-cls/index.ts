import css from './index.less';
import { getPrefixCls as prefixCls } from 'PackageNameByCommon';

const getPrefixCls = (className: string, prefix = css.prefixCls) => prefixCls(className, prefix);

export default getPrefixCls;
