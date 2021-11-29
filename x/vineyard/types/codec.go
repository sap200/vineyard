package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgCreateNode{}, "vineyard/CreateNode", nil)
	cdc.RegisterConcrete(&MsgUpdateNode{}, "vineyard/UpdateNode", nil)
	cdc.RegisterConcrete(&MsgDeleteNode{}, "vineyard/DeleteNode", nil)
	cdc.RegisterConcrete(&MsgGetCoins{}, "vineyard/GetCoins", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateNode{},
		&MsgUpdateNode{},
		&MsgDeleteNode{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgGetCoins{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
