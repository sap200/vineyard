package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sap200/vineyard/x/vineyard/types"
	"github.com/tendermint/tendermint/crypto"
)

func (k msgServer) GetCoins(goCtx context.Context, msg *types.MsgGetCoins) (*types.MsgGetCoinsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	// parse the amount
	feeCoins, err := sdk.ParseCoinsNormalized(msg.Amount + "token")
	if err != nil {
		return nil, err
	}

	//_, _ = ctx, feeCoins

	// mint the token and send it to the creators account
	if err := k.bankKeeper.MintCoins(ctx, types.ModuleName, feeCoins); err != nil {
		return nil, err
	}

	// transfer the amount to the given creator address
	recipientAddress, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return nil, err
	}

	moduleAcct := sdk.AccAddress(crypto.AddressHash([]byte(types.ModuleName)))

	if err := k.bankKeeper.SendCoins(ctx, moduleAcct, recipientAddress, feeCoins); err != nil {
		return nil, err
	}

	return &types.MsgGetCoinsResponse{}, nil
}
