---
title: 多种语法
description: 为当前案例提供多种语法的代码
order: 2
---

```tsx
function Demo() {
  // @ts-ignore
  const sw = useRef(null);
  // @ts-ignore
  const [checked, setChecked] = useState<boolean>(false);
  const title = <span>自定义标题{checked ? '开' : '关'}</span>;
  const child = <span>{checked ? '开' : '关'}</span>;

  // @ts-ignore
  useEffect(() => {
    sw.current?.addEventListener('change', (e: CustomEvent<boolean>) => {
      setChecked(e.detail);
    });
  }, []);
  return (
    <>
      <n-switch ref={sw} checked={checked} />
      {/* @ts-ignore */}
      <Card title={title}>{child}</Card>
    </>
  );
}

// @ts-ignore
render(<Demo />);
```

```jsx
function Demo() {
  const sw = useRef(null);
  const [checked, setChecked] = useState(false);
  const title = <span>自定义标题{checked ? '开' : '关'}</span>;
  const child = <span>{checked ? '开' : '关'}</span>;

  useEffect(() => {
    sw.current?.addEventListener('change', (e) => {
      setChecked(e.detail);
    });
  }, []);
  return (
    <>
      <n-switch ref={sw} checked={checked} />
      <Card title={title}>{child}</Card>
    </>
  );
}
render(<Demo />);
```

```html
<span>不好意思不支持html</span>
```
