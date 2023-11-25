import HomePage from "@/app/home";
import {
  CHAIN,
  COLLECTION_ADDRESS,
  DEMO_SOLD,
  TEST_COLLECTION_ADDRESS,
} from "@/lib/constants";
import checkSupply from "@/lib/zora-api/check-supply";

type Props = {};

const MainPage = async (props: Props) => {
  const sold = await checkSupply(
    CHAIN === "TESTNET" ? TEST_COLLECTION_ADDRESS : COLLECTION_ADDRESS,
  );
  // const sold = DEMO_SOLD;
  return <HomePage sold={sold} />;
};

export default MainPage;
