import TestComponent from "@components/TestComponent";
import { TestState } from "@store/index";
import { useRecoilState } from "recoil";

const MainView = () => {
  const [test, setTest] = useRecoilState(TestState)

  return (
    <>
      <h1>atozsports</h1>
      <TestComponent />
    </>
  );
};

export default MainView;
