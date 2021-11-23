package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/sap200/vineyard/testutil/keeper"
	"github.com/sap200/vineyard/x/vineyard/keeper"
	"github.com/sap200/vineyard/x/vineyard/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNNode(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Node {
	items := make([]types.Node, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetNode(ctx, items[i])
	}
	return items
}

func TestNodeGet(t *testing.T) {
	keeper, ctx := keepertest.VineyardKeeper(t)
	items := createNNode(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetNode(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t, item, rst)
	}
}
func TestNodeRemove(t *testing.T) {
	keeper, ctx := keepertest.VineyardKeeper(t)
	items := createNNode(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveNode(ctx,
			item.Index,
		)
		_, found := keeper.GetNode(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestNodeGetAll(t *testing.T) {
	keeper, ctx := keepertest.VineyardKeeper(t)
	items := createNNode(keeper, ctx, 10)
	require.ElementsMatch(t, items, keeper.GetAllNode(ctx))
}
