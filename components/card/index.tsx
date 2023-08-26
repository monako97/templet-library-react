import React, { type ReactNode } from 'react';

/** API
 * @since 1.0.0
 * @author monako97 <poi.nyaa@qq.com>
 */
export interface CardProps {
  /** 标题
   * @default 默认值
   * @since 1.1.0 <br />表示这个属性在 1.1.0 新增
   */
  title?: ReactNode;
  /** 内容 */
  children?: ReactNode;
  /** 尺寸
   * @default 'normal'
   */
  size?: keyof typeof Size;
  /** 类型
   * @default 'line'
   */
  type?: keyof typeof Type;
}

/** 对于字面量建议使用枚举 */
enum Size {
  /** 小 */
  small,
  /** 默认 */
  normal,
}
/** 类型 */
enum Type {
  /** 线 */
  line = 'line',
  /** 卡片 */
  card = 'card',
}
function Card(props: CardProps) {
  return (
    <div>
      <h4>{props.title}</h4>
      <div>{props.children}</div>
    </div>
  );
}

export default Card;
