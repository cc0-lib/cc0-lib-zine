import RedeemPage from "@/app/redeem/redeem";

type Props = {};

export const revalidate = 60;

const RedeemHomePage = async (props: Props) => {
  return (
    <main className="">
      <RedeemPage />
    </main>
  );
};

export default RedeemHomePage;
