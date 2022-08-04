import { atom } from "recoil";

// recoil atom -> atom 은 state 의 일부를 나타냅니다. Atoms는 어떤 컴포넌트에서나 읽고 쓸 수 있고, 
// atom의 값을 읽는 컴포넌트들은 암묵적으로 atom을 구독합니다. 그래서 atom에 어떤 변화가 있으면 그 atom을 구독하는 모든 컴포넌트들이 재 렌더링 되는 결과가 발생할 것입니다.

// 전역에서 해당 state 를 useRecoilValue 로 불러다 사용하면 됩니다.

export const TestState = atom<string | undefined>({
  key: 'test',  // 해당 상태만의 유니크한 값이 들어가야 합니다.
  default: '테스트 state 입니다',  // 해당 값의 디폴트값이 들어갑니다.
});

export const TestState2 = atom<string | undefined>({
  key: 'test2',
  default: '',
});