package keeper_test

import (
	"context"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/sap200/vineyard/testutil/keeper"
	"github.com/sap200/vineyard/x/vineyard/keeper"
	"github.com/sap200/vineyard/x/vineyard/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.VineyardKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
