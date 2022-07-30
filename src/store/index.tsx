// const Test = () => {
//   return <>전역 상태 관리 (recoil)관련 로직들이 모여있는 폴더입니다.</>;
// };
// export default Test

import { atom } from "recoil";

// recoil atom -> atom 은 state 의 일부를 나타냅니다. Atoms는 어떤 컴포넌트에서나 읽고 쓸 수 있고, 
// atom의 값을 읽는 컴포넌트들은 암묵적으로 atom을 구독합니다. 그래서 atom에 어떤 변화가 있으면 그 atom을 구독하는 모든 컴포넌트들이 재 렌더링 되는 결과가 발생할 것입니다.

// 전역에서 해당 state 를 useRecoilValue 로 불러다 사용하면 됩니다.

export const TestState = atom({
  key: 'test',
  default: '',
});

export const TestState2 = atom({
  key: 'test2',
  default: '',
});