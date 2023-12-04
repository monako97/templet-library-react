import { ReactElement, createElement } from 'react';
import type { MDXComponents } from '@moneko/react/mdx';

type Props = {
  children: ReactElement;
  [key: string]: unknown;
};
function tag(type: string, p: Props) {
  const level = type.replace(/[^0-9]/gi, '');

  return createElement(type, {
    'data-prefix': level ? '# ' : void 0,
    role: level ? 'heading' : void 0,
    'aria-level': level,
    ...p,
  });
}
const mdxScope: MDXComponents = {
  h1: tag.bind(null, 'h1'),
  h2: tag.bind(null, 'h2'),
  h3: tag.bind(null, 'h3'),
  h4: tag.bind(null, 'h4'),
  h5: tag.bind(null, 'h5'),
  h6: tag.bind(null, 'h6'),
  pre(p: Props) {
    return tag('n-code', {
      toolbar: true,
      lang: p.children.props.className.replace('language-', '').replace(/ .*$/, ''),
      ...p,
    });
  },
} as unknown as MDXComponents;

export default mdxScope;
