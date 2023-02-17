import React, { useState, FC, useEffect, memo } from 'react';
import { css, injectGlobal } from '@emotion/css';
import { isEqual } from 'PackageNameByCommon';
import { mdxComponents, type ExampleModule } from 'PackageNameByCore';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'PackageNameByReactLive';
import { Prism } from 'neko-ui';

const sandboxCss = css`
  .sandbox-box {
    break-inside: avoid;
    box-sizing: border-box;
    padding-bottom: 16px;
  }

  .sandbox-container,
  .sandbox-view,
  .sandbox-btn,
  .sandbox-live-editor {
    transition-duration: var(--transition-duration);
    transition-timing-function: var(--transition-timing-function);
  }

  .sandbox-container,
  .sandbox-view,
  .sandbox-live-editor {
    transition-property: border-color;
    border: 1px solid var(--border-color-base, #d9d9d9);
  }

  .sandbox-container {
    border-radius: var(--border-radius-base);
  }

  .sandbox-title {
    margin: 8px 0 !important;
    padding: 0 16px;
    font-weight: 500;
  }

  .sandbox-view {
    position: relative;
    border-width: 1px 0 0;
    padding: 16px 16px 32px;
  }

  .sandbox-btn {
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 4px;
    width: fit-content;
    font-size: 12px;
    cursor: pointer;
    border-top-left-radius: var(--border-radius-base);
    line-height: 16px;
    user-select: none;
    transition-property: background-color, color, transform;
  }

  .sandbox-btn::after {
    display: inline-block;
    font-size: 8px;
    font-family: neko-icon, sans-serif;
    text-indent: 4px;
    content: '\\e644';
  }

  .sandbox-btn:active {
    transform: scale(0.95);
  }

  .sandbox-btn:hover::after,
  .sandbox-btn[data-open='true']::after {
    font-size: 10px;
    content: '\\e63e';
  }

  .sandbox-btn[data-open='true'] {
    color: white;
    background-color: var(--primary-color, #5794ff);
  }

  .sandbox-btn[data-open='false'] {
    color: var(--primary-color, #5794ff);
    background-color: var(--primary-color-bg, #f0f8ff);
    border-bottom-right-radius: var(--border-radius-base);
  }

  .sandbox-live-editor {
    --code-color: var(--text-color);

    border-width: 1px 0 0;
    padding: 16px;
  }

  .sandbox-live-editor.hide {
    display: none;
  }

  .sandbox-error-msg {
    color: var(--error-color);
  }
`;

injectGlobal([sandboxCss]);

const Sandbox: FC<ExampleModule> = ({ soucre, title }) => {
  const [init, setInit] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    return () => {
      setOpen(false);
    };
  }, []);

  return (
    <LiveProvider
      code={soucre}
      scope={mdxComponents}
      language="tsx"
      theme={{
        plain: {},
        styles: [],
      }}
    >
      <div className="sandbox-box">
        <div className="sandbox-container">
          <h4 className="sandbox-title">{title}</h4>
          <div className="sandbox-view">
            <LiveError className="sandbox-error-msg" />
            <LivePreview />
            <span
              className="sandbox-btn"
              data-open={open}
              onClick={() => {
                if (!init) {
                  setInit(true);
                }
                setOpen(!open);
              }}
            >
              编辑示例代码
            </span>
          </div>
          {init && (
            <LiveEditor className={`sandbox-live-editor ${open ? '' : 'hide'}`} prism={Prism} />
          )}
        </div>
      </div>
    </LiveProvider>
  );
};

export default memo(Sandbox, isEqual);