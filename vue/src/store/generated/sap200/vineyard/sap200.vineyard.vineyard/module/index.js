// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateNode } from "./types/vineyard/tx";
import { MsgDeleteNode } from "./types/vineyard/tx";
import { MsgUpdateNode } from "./types/vineyard/tx";
import { MsgGetCoins } from "./types/vineyard/tx";
const types = [
    ["/sap200.vineyard.vineyard.MsgCreateNode", MsgCreateNode],
    ["/sap200.vineyard.vineyard.MsgDeleteNode", MsgDeleteNode],
    ["/sap200.vineyard.vineyard.MsgUpdateNode", MsgUpdateNode],
    ["/sap200.vineyard.vineyard.MsgGetCoins", MsgGetCoins],
];
export const MissingWalletError = new Error("wallet is required");
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgCreateNode: (data) => ({ typeUrl: "/sap200.vineyard.vineyard.MsgCreateNode", value: data }),
        msgDeleteNode: (data) => ({ typeUrl: "/sap200.vineyard.vineyard.MsgDeleteNode", value: data }),
        msgUpdateNode: (data) => ({ typeUrl: "/sap200.vineyard.vineyard.MsgUpdateNode", value: data }),
        msgGetCoins: (data) => ({ typeUrl: "/sap200.vineyard.vineyard.MsgGetCoins", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
