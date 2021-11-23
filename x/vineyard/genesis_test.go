package vineyard_test

import (
	"testing"

	keepertest "github.com/sap200/vineyard/testutil/keeper"
	"github.com/sap200/vineyard/x/vineyard"
	"github.com/sap200/vineyard/x/vineyard/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		NodeList: []types.Node{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.VineyardKeeper(t)
	vineyard.InitGenesis(ctx, *k, genesisState)
	got := vineyard.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	require.Len(t, got.NodeList, len(genesisState.NodeList))
	require.Subset(t, genesisState.NodeList, got.NodeList)
	// this line is used by starport scaffolding # genesis/test/assert
}
