import React from 'react';
import './colors.global.less';
import readme from '../../README.md?raw';

function Colors() {
  const colors = ['primary', 'warning', 'error', 'success'],
    types = ['bg', 'outline', 'border', 'color', 'hover', 'active'];

  return (
    <>
      <n-md text={readme} not-render picture-viewer={false} />
      <div className="site-colors">
        {colors.map((c: string) => {
          return (
            <div key={c} className="site-color">
              {types.map((t: string) => {
                const v = `--${c}-${t}`;

                return (
                  <div
                    key={t}
                    className="site-color-item"
                    style={{
                      backgroundColor: `var(${v})`,
                    }}
                  >
                    <span data-val={v} data-name={t} />
                    <span>{getComputedStyle(document.documentElement).getPropertyValue(v)}</span>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Colors;
