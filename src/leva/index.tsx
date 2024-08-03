import { DraggablePanel } from '@ant-design/pro-editor';
import { LevaPanel, LevaStoreProvider, useCreateStore } from 'leva';

import Panel from './panel';

export default () => {
  const store = useCreateStore();

  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <LevaStoreProvider store={store}>
        <Panel />
      </LevaStoreProvider>
      <DraggablePanel>
        <div style={{ flexBasis: 480 }}>
          <LevaPanel
            fill
            flat
            hideCopyButton
            neverHide
            store={store}
            titleBar={{ drag: false, title: '示例面板' }}
          />
        </div>
      </DraggablePanel>
    </div>
  );
};
