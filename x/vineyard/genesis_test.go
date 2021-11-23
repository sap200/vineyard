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
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.VineyardKeeper(t)
	vineyard.InitGenesis(ctx, *k, genesisState)
	got := vineyard.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	// this line is used by starport scaffolding # genesis/test/assert
}
