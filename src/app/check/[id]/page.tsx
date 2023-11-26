import { redirect } from "next/navigation";
import { checkClaimed } from "./action";
import ClaimedPage from "./claimed";

type Props = {
  params: {
    id: number;
  };
};

const iDCheckPage = async ({ params }: Props) => {
  if (params.id > 50) {
    redirect("/");
  }

  const { claimed, error } = await checkClaimed(params.id);

  if (error || !claimed) {
    console.log(error);
  }

  return (
    <>
      <ClaimedPage claimed={claimed} params={params} />
    </>
  );
};

export default iDCheckPage;
