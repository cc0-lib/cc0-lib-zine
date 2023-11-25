import { COLLECTION_ADDRESS, DEMO_SOLD } from "@/lib/constants";
import RedeemPage from "@/app/redeem/redeem";
import checkSupply from "@/lib/zora-api/check-supply";

type Props = {};

const RedeemHomePage = async (props: Props) => {
  // const sold = await checkSupply(COLLECTION_ADDRESS);
  const sold = DEMO_SOLD;

  return (
    <main className="">
      <RedeemPage sold={sold} />
    </main>
  );
};

export default RedeemHomePage;
