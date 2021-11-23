package keeper

import (
	"github.com/sap200/vineyard/x/vineyard/types"
)

var _ types.QueryServer = Keeper{}
