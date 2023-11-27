import HomePage from "@/app/home";
import {
  CHAIN,
  COLLECTION_ADDRESS,
  DEMO_SOLD,
  TEST_COLLECTION_ADDRESS,
} from "@/lib/constants";
import { getCountDownTime, getMintState } from "@/lib/kv";
import checkSupply from "@/lib/zora-api/check-supply";

type Props = {};

const MainPage = async (props: Props) => {
  const sold = await checkSupply();
  const mintState = await getMintState();
  const countDownTime = await getCountDownTime();
  const live = mintState !== "live" ? false : true;
  // console.log("sold", sold);
  // const sold = DEMO_SOLD;
  return <HomePage sold={sold} live={live} time={countDownTime} />;
};

export default MainPage;
