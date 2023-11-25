import checkOwner from "@/lib/zora-api/check-owner";
import { Address } from "viem";

type Props = {
  address: string;
};

const Owner = async ({ address }: Props) => {
  if (!address) return null;
  const { isOwner, name, owner, tokenId } = await checkOwner(
    address.toLowerCase(),
  );

  if (isOwner) {
    return <div>Eligible to redeem</div>;
  }
  return <div>Not eligible to redeem</div>;
};

export default Owner;
