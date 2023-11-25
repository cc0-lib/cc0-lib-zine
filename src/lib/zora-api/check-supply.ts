import { CHAIN } from "../constants";

const chain = CHAIN === "TESTNET" ? "ZORA_GOERLI" : "ZORA_MAINNET"; // ZORA_MAINNET or ZORA_GOERLI
const checkSupply = async (collectionAddress: string) => {
  try {
    const response = await fetch(`https://api.zora.co/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query {
            collections(
                networks: {network: ZORA, chain: ${chain}}
                where: {collectionAddresses: "${collectionAddress}"}
              ) {
                nodes {
                  totalSupply
                }
              }
          }
          `,
      }),
      next: {
        revalidate: 1,
      },
    });
    const data = await response.json();
    return data.data.collections.nodes[0].totalSupply;
  } catch (error) {
    console.log(error);
  }
};

export default checkSupply;
