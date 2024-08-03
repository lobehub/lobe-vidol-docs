import { bezier } from '@leva-ui/plugin-bezier';
import { button, buttonGroup, folder, useControls, useStoreContext } from 'leva';

import useStyles from './style';

export default () => {
  const { styles } = useStyles();
  const store = useStoreContext();

  const presets = buttonGroup({
    label: 'Presets',
    opts: {
      '0.25': () => store.set({ number: 0.25 }, true),
      '0.5': () => store.set({ number: 0.5 }, true),
      '1': () => store.set({ number: 1 }, true),
      '2': () => store.set({ number: 2 }, true),
      '3': () => store.set({ number: 3 }, true),
    },
  });

  const values = useControls(
    {
      boolean: true,
      buttonGroup: presets,
      color: { label: '颜色', render: (get) => get('showColor'), value: '#f00' },
      counter: { step: 1, value: 0 },
      curve: bezier(),
      foo: button((get) => alert(`Number value is ${get('number').toFixed(2)}`)),
      interval: {
        max: 10,
        min: 0,
        // initial value of 4, 5
        value: [4, 5],
      },
      name: 'World',
      number: 1,
      opacity: { label: '透明度', value: 0.5 },
      range: {
        max: 10,
        min: 0,
        step: 1,
        value: 4,
      },
      rgb: '#fff',
      rgba: { a: 0.4, b: 125, g: 106, r: 200 },
      select: {
        options: {
          'Hello World': 'helloWorld',
          'Leva is awesome!': 'leva',
        },
        value: 'helloWorld',
      },
      showColor: { label: '显示颜色', value: true },
      size: { label: '尺寸', value: { height: 300, width: 200 } },
      string: { label: 'My string', value: 'hello' },
      username: 'Mario',
      向量: folder({
        boxSize: [10, 20, 30],
        second: folder({ number: 0 }, { collapsed: true, order: 1 }),
        vector: { x: 0, y: 0 },
      }),
    },
    { store },
  );

  return (
    <div className={styles.container}>
      <div>values: {JSON.stringify(values)}</div>
    </div>
  );
};
