import React from 'react';
import { type ExampleModule } from '@app/example';
import * as Pkgs from '@pkg/index';
import { createRoot } from 'react-dom/client';
import './sandbox.css';
import type { CodeLiveElement } from 'n-code-live';
import type { BaseOption, CodeElement, SegmentedElement } from 'neko-ui';

const { useEffect, useMemo, useState, useRef } = React;

interface SandboxProps extends Omit<ExampleModule, 'title'> {
  legend: string;
  codes: Record<string, string>;
  description?: string;
  style?: React.CSSProperties;
}

const scope = {
  React,
  ...React,
  ...Pkgs,
};
const Sandbox: React.FC<SandboxProps> = ({ codes = {}, description, legend, style }) => {
  const langsRef = useRef<SegmentedElement>(null);
  const live = useRef<CodeLiveElement>(null);
  const codeRef = useRef<CodeElement>(null);
  const [sources, setSources] = useState<Record<string, string>>({});
  const [current, setCurrent] = useState({
    code: '',
    jsx: false,
    lang: '',
  });
  const [open, setOpen] = useState(false);
  const hasDesc = useMemo(() => {
    if (typeof description === 'string') {
      return !!description?.trim().length;
    }
    return false;
  }, [description]);

  useEffect(() => {
    setSources({ ...codes });
  }, [codes]);
  const langChange = React.useCallback(
    (e: CustomEvent<string | number>) => {
      setCurrent({
        code: sources[e.detail as string],
        jsx: e.detail !== 'html',
        lang: e.detail as string,
      });
    },
    [sources],
  );
  const codeChange = React.useCallback(
    (e: CustomEvent<string>) => {
      setCurrent({ ...current, code: e.detail });
      setSources({ ...codes, [current.lang]: e.detail });
    },
    [codes, current],
  );
  const langs = useMemo<BaseOption[]>(() => {
    return Object.keys(codes).map<BaseOption>((k) => ({
      value: k,
      label: <>{k.toLocaleUpperCase()}</>,
    }));
  }, [codes]);

  useEffect(() => {
    if (live.current) {
      live.current.components = scope;
      live.current.transform = {
        jsxImportSource: 'react',
        jsxPragma: 'React.createElement',
        jsxFragmentPragma: 'React.Fragment',
      };
      live.current.renderJsx = (dom, el) => {
        const root = createRoot(el);

        root.render(typeof dom === 'function' ? (dom() as React.ReactNode) : dom);
        return () => {
          try {
            root.unmount();
          } catch (error) {
            // eslint-disable-next-line no-console
            console.log(error);
          }
        };
      };
    }
  }, []);
  useEffect(() => {
    const l = langs[0].value;

    setCurrent({
      jsx: l !== 'html',
      code: l !== void 0 ? codes[l] : '',
      lang: l as string,
    });
  }, [codes, langs]);
  useEffect(() => {
    if (live.current) {
      live.current.jsx = current.jsx;
      live.current.source = sources[current.lang];
    }
  }, [current, sources]);
  useEffect(() => {
    if (langsRef.current) {
      langsRef.current.options = langs;
    }
  }, [langs]);
  useEffect(() => {
    if (langsRef.current) {
      langsRef.current?.addEventListener?.('change', langChange);
    }
  }, [langChange]);
  useEffect(() => {
    const code = codeRef.current;

    if (open && code) {
      code.addEventListener?.('change', codeChange);
    }
    return () => {
      code?.removeEventListener?.('change', codeChange);
    };
  }, [codeChange, open]);
  return (
    <section className="sandbox-box" style={style}>
      <fieldset className="sandbox-container">
        <legend className="sandbox-title">{legend}</legend>
        <section className="sandbox-view">
          <n-code-live ref={live} />
          {langs.length > 1 ? (
            <n-segmented ref={langsRef} class="lang-btn" value={current.lang} />
          ) : null}
          <span
            className={['sandbox-btn', hasDesc && 'sandbox-btn-desc'].filter(Boolean).join(' ')}
            data-open={open}
            onClick={() => setOpen(!open)}
          >
            编辑
          </span>
        </section>
        {hasDesc ? (
          <fieldset className="sandbox-info">
            <legend className="sandbox-title">描述</legend>
            <div className="sandbox-description">
              <n-md
                text={description}
                css={`
                  .n-md-body {
                    padding: 0;
                    margin-block-end: 0;
                    background-color: transparent;
                    box-shadow: none;
                  }
                `}
              />
            </div>
          </fieldset>
        ) : null}
        {open ? (
          <n-code
            ref={codeRef}
            class={['sandbox-live-editor', !open && 'hide'].filter(Boolean).join(' ')}
            code={sources[current.lang]}
            lang={current.lang}
            edit
            css={`
              .n-editor,
              pre {
                border-radius: 0 0 var(--border-radius) var(--border-radius);
                box-shadow: none;
              }
            `}
          />
        ) : null}
      </fieldset>
    </section>
  );
};

export default Sandbox;
