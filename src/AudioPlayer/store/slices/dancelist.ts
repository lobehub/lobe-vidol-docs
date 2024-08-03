import { produce } from 'immer';
import { StateCreator } from 'zustand/vanilla';

import { Dance } from '../../type';
import { DanceStore } from '../index';

export interface DanceListStore {
  activateDance: (identifier: string) => void;
  addDanceItem: (dance: Dance) => void;
  currentIdentifier: string;
  danceList: Dance[];
  danceLoading: boolean;
  deactivateDance: () => void;
  fetchDanceIndex: () => void;
  isPlaying: boolean;
  removeDanceItem: (danceId: string) => Promise<void>;
  setIsPlaying: (isPlaying: boolean) => void;
}

// @ts-ignore
export const createDanceStore: StateCreator<
  DanceStore,
  [['zustand/devtools', never]],
  [],
  DanceListStore
> = (set, get) => {
  return {
    activateDance: (identifier) => {
      set({ currentIdentifier: identifier });
    },
    addDanceItem: (dance) => {
      const { danceList } = get();

      const newList = produce(danceList, (draft) => {
        const index = draft.findIndex((item) => item.danceId === dance.danceId);

        if (index === -1) {
          draft.unshift(dance);
        }
      });
      set({ danceList: newList });
    },
    currentIdentifier: 'vidol-dance-gokuraku',
    danceList: [
      {
        audio:
          'https://r2.vidol.chat/dances/vidol-dance-dingdingdangdhang/《叮叮当当》乘风2023.wav',
        author: 'rdmclin2',
        cover: 'https://r2.vidol.chat/dances/vidol-dance-dingdingdangdhang/cover.jpg',
        createAt: '2023-10-31',
        danceId: 'vidol-dance-dingdingdangdhang',
        homepage: 'https://github.com/rdmclin2',
        name: '《叮叮当当》乘风2023',
        readme:
          '﻿/**********************【如果使用请注明】*************************/\r\n\r\n使用时请注明：\r\n【编舞视频参考】\r\n【陈嘉桦 Ella】叮叮当当舞蹈挑战：BV1Nc411N7VT\r\n《叮叮当当》乘风2023一公演出（Ella陈嘉桦、Chi Pu芝芙、张嘉倪、吴倩）：BV1E24y1K7rj\r\n【音乐】《叮叮当当》乘风2023一公演出（Ella陈嘉桦、Chi Pu芝芙、张嘉倪、吴倩）\r\n【动作】mars_official\r\n【配布视频】\r\n\r\n/********************************************************************/\r\n动作作者：\r\n      blibli:mars_official\r\n\r\n允许细节调整，表情增加，镜头增加\r\n部分动作需要根据模型细调，如脚部IK等\r\n/**********************【如果使用请注明】*************************/\r\n',
        schemaVersion: 1,
        src: 'https://r2.vidol.chat/dances/vidol-dance-dingdingdangdhang/叮叮当当 乘风2023.vmd',
        thumb: 'https://r2.vidol.chat/dances/vidol-dance-dingdingdangdhang/thumb.jpg',
      },
      {
        audio: 'https://r2.vidol.chat/dances/vidol-dance-gokuraku/Gokuraku jodo.mp3',
        author: 'rdmclin2',
        cover: 'https://r2.vidol.chat/dances/vidol-dance-gokuraku/cover.jpg',
        createAt: '2023-10-31',
        danceId: 'vidol-dance-gokuraku',
        homepage: 'https://github.com/rdmclin2',
        name: '極楽浄土',
        readme:
          '﻿WHAT CHANGED?!\r\n-FIXED THE GOOGLY/SHAKY EYES\r\n-Added eye motions that were supposed to be there\r\n-Audio is slightly more in sync\r\n\r\nSong: 【GARNiDELiA】極楽浄土【とく×メイリア】\r\nhttps://www.nicovideo.jp/watch/sm28709142\r\n\r\nMotion by yurie\r\nhttps://www.nicovideo.jp/watch/sm29180863',
        schemaVersion: 1,
        src: 'https://r2.vidol.chat/dances/vidol-dance-gokuraku/gokuraku.vmd',
        thumb: 'https://r2.vidol.chat/dances/vidol-dance-gokuraku/thumb.jpg',
      },
      {
        audio: 'https://r2.vidol.chat/dances/vidol-dance-last-surprise/Last surprise.mp3',
        author: 'rdmclin2',
        cover: 'https://r2.vidol.chat/dances/vidol-dance-last-surprise/cover.jpg',
        createAt: '2023-10-31',
        danceId: 'vidol-dance-last-surprise',
        homepage: 'https://github.com/rdmclin2',
        name: 'Last Surprise (✰Taku Takahashi Remix)',
        readme:
          '﻿Song: Last Surprise (✰Taku Takahashi Remix) from Persona 5 dancing star night\r\n\r\nMotion from Seto\r\nhttps://youtu.be/oDDPoJrmhkw\r\n\r\nScripts - Minmode\r\nAnimation - Atlus\r\nMotion convert, camera, and facials - Seto\r\n\r\nJoin the discord if you want to talk about dmmd related stuff. For example, help with importing a model. https://discord.gg/Cvbf58x\r\n',
        schemaVersion: 1,
        src: 'https://r2.vidol.chat/dances/vidol-dance-last-surprise/mmd_lastsurpriseremix_motion.vmd',
        thumb: 'https://r2.vidol.chat/dances/vidol-dance-last-surprise/thumb.jpg',
      },
      {
        audio: 'https://r2.vidol.chat/dances/vidol-dance-shujiwu/チカっとチカ千花っ.mp3',
        author: 'rdmclin2',
        cover: 'https://r2.vidol.chat/dances/vidol-dance-shujiwu/cover.jpg',
        createAt: '2023-10-31',
        danceId: 'vidol-dance-shujiwu',
        homepage: 'https://github.com/rdmclin2',
        name: '书记舞2023',
        readme:
          '﻿这是【?チカっとチカ千花っ?】的舞蹈MMD数据！ \r\n请大家自由利用！\r\n配布视频地址（camera）：https://www.bilibili.com/video/av42563692/\r\n增加camera2（仿动画ED视角）\r\n\r\n-------\r\n\r\n使用时请注明\r\n【动作】兰若_Ruo\r\n【镜头】-鬼瞳-\r\n【表情】Viero月城\r\n\r\n-------\r\n请从0帧开始加载。\r\n动作数据是在Motionbuilder里面K的，可能会有微小滑步\r\n【注意】使用动作数据时，请关闭 左足IK、左つま先IK、右足IK、右つま先IK，4个IK骨骼\r\n\r\n-------\r\n※可以的事情\r\n--镜头的改造、调整\r\n--表情的改造、调整\r\n\r\n※禁止的事情\r\n--对本数据的临摹\r\n--未改造的数据进行再次配布（也就是传说中的二配。公开、私下都不行，请注意，谢谢）\r\n--R18/色情作品的使用\r\n--商业利用\r\n--作品的转载（自转载）\r\n\r\n※请遵守动作&模型的规约。\r\n\r\n-------\r\n感谢你下载我们的数据，非常期待你的作品！使用愉快：）\r\n\r\n\r\n--------\r\n2019.2.3\r\n',
        schemaVersion: 1,
        src: 'https://r2.vidol.chat/dances/vidol-dance-shujiwu/书记舞.vmd',
        thumb: 'https://r2.vidol.chat/dances/vidol-dance-shujiwu/thumb.jpg',
      },
      {
        audio: 'https://r2.vidol.chat/dances/vidol-dance-sample/KX-YAO.mp3',
        author: 'rdmclin2',
        cover: 'https://r2.vidol.chat/dances/vidol-dance-sample/cover.jpg',
        createAt: '2023-10-30',
        danceId: 'vidol-dance-sample',
        homepage: 'https://github.com/rdmclin2',
        name: '开心摇',
        readme:
          '﻿MMD用开心摇动作数据\r\n\r\n公开发布视频\r\nBV19N411n7gG\r\n\r\n舞蹈参考中国大陆网络流行短舞开心摇\r\n感谢下载\r\n\r\n使用此动作数据时，请注明动作作者：妮谷丹\r\n\r\n\r\n\r\n\r\nMMDのハッピーシェイクモーションデータ\r\n\r\n中国大陸のインターネットで流行しているショートダンス「ハッピーシェイク」を参考にしています。\r\nダウンロードいただきありがとうございます。\r\nこのモーションデータを使用する際には、モーションの作者である「妮谷丹」を明記してください。\r\n\r\n\r\n\r\nMMD Happy Shake Motion Data\r\n\r\nDance reference: Popular short dance "Happy Shake" on the internet in mainland China\r\nThank you for downloading.\r\nWhen using this motion data, please credit the motion author: 妮谷丹.\r\n',
        schemaVersion: 1,
        src: 'https://r2.vidol.chat/dances/vidol-dance-sample/KX-YAO.vmd',
        thumb: 'https://r2.vidol.chat/dances/vidol-dance-sample/thumb.jpg',
      },
    ],
    danceLoading: false,
    deactivateDance: () => {
      set({ currentIdentifier: undefined });
    },
    isPlaying: false,
    removeDanceItem: async (danceId) => {
      const { danceList } = get();
      const newList = produce(danceList, (draft) => {
        const index = draft.findIndex((item) => item.danceId === danceId);

        if (index !== -1) {
          draft.splice(index, 1);
        }
      });
      set({ currentIdentifier: newList[0]?.danceId, danceList: newList });
    },
    setIsPlaying: (isPlaying) => {
      set({ isPlaying });
    },
  };
};
