import MainView from "@views/MainView";

import type { NextPage } from "next";
import { RecoilRoot } from "recoil";

const Home: NextPage = () => {
    return (
        <>
            <RecoilRoot>
                <MainView />
            </RecoilRoot>
        </>
    );
};

export default Home;
