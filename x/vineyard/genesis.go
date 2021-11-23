package vineyard

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sap200/vineyard/x/vineyard/keeper"
	"github.com/sap200/vineyard/x/vineyard/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the node
	for _, elem := range genState.NodeList {
		k.SetNode(ctx, elem)
	}
	// this line is used by starport scaffolding # genesis/module/init
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	genesis.NodeList = k.GetAllNode(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
