import React, { FC, Suspense, lazy, useMemo } from 'react';
import Fallback from '@app/fallback';
import 'n-code-live';
import Sandbox from './sandbox';
import './sandbox-group.css';

interface SandboxGroupProps {
  name: string;
  ignore?: string[];
}

const SandboxGroup: FC<SandboxGroupProps> = (props) => {
  async function load(name: string) {
    let box: () => React.JSX.Element;

    try {
      const resp = (await import(`@app/example/${name}`)).default || [];

      box = () => (
        <div className="sandbox-group">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {resp.map(({ title, ...m }: any, i: number) => (
            <Sandbox
              key={title + i}
              style={{ flex: m.col || 'calc(50% - 24px)' }}
              legend={title}
              {...m}
            />
          ))}
        </div>
      );
    } catch (error) {
      box = () => <></>;
    }
    return {
      default: box,
    };
  }
  const data = useMemo(() => {
    const app = load.bind(null, props.name);
    const View = lazy(app);

    return <View />;
  }, [props.name]);

  return <Suspense fallback={Fallback && <Fallback />}>{data}</Suspense>;
};

export default SandboxGroup;
