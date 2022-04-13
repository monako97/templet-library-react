import React from 'react';
import { isEqual } from 'lodash';
import './index.global.less';

export interface WaveCircleProps {
  /** 背景颜色 */
  bgColor?: string;
  /** 动画曲线 */
  timingFunction?: string;
  className?: string;
  children?: React.ReactNode;
}

const _WaveCircle: React.FC<WaveCircleProps> = ({
  bgColor,
  timingFunction,
  children,
  className,
}: WaveCircleProps) => {
  const prefixStyles = () => {
    return Object.assign(
      {},
      bgColor && {
        '--wave-circles-bg-color': bgColor,
      },
      timingFunction && {
        '--transition-timing-function': timingFunction,
      }
    );
  };

  return (
    <div
      className={['wave-circles', className].join(' ')}
      style={prefixStyles() as React.CSSProperties}
    >
      <i className="wave-circle" />
      <i className="wave-circle" />
      <i className="wave-circle" />
      {children}
    </div>
  );
};

/**
 * 圆形波纹
 * @constructor
 * @param {string} bgColor 波浪背景色
 * @param {string} timingFunction 动画曲线
 * @param {React.ReactNode} children 内容
 */
const WaveCircle = React.memo(_WaveCircle, (pre, next) => {
  return isEqual(pre, next);
});

export default WaveCircle;
