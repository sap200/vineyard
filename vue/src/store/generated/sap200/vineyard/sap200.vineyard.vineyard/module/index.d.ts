import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateNode } from "./types/vineyard/tx";
import { MsgDeleteNode } from "./types/vineyard/tx";
import { MsgUpdateNode } from "./types/vineyard/tx";
import { MsgGetCoins } from "./types/vineyard/tx";
export declare const MissingWalletError: Error;
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }?: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgCreateNode: (data: MsgCreateNode) => EncodeObject;
    msgDeleteNode: (data: MsgDeleteNode) => EncodeObject;
    msgUpdateNode: (data: MsgUpdateNode) => EncodeObject;
    msgGetCoins: (data: MsgGetCoins) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
