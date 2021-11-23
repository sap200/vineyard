package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/sap200/vineyard/x/vineyard/types"
)

func (k msgServer) CreateNode(goCtx context.Context, msg *types.MsgCreateNode) (*types.MsgCreateNodeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetNode(
		ctx,
		msg.Index,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var node = types.Node{
		Creator:   msg.Creator,
		Index:     msg.Index,
		Address:   msg.Address,
		Location:  msg.Location,
		Bandwidth: msg.Bandwidth,
		Uid:       msg.Uid,
	}

	k.SetNode(
		ctx,
		node,
	)
	return &types.MsgCreateNodeResponse{}, nil
}

func (k msgServer) UpdateNode(goCtx context.Context, msg *types.MsgUpdateNode) (*types.MsgUpdateNodeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetNode(
		ctx,
		msg.Index,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var node = types.Node{
		Creator:   msg.Creator,
		Index:     msg.Index,
		Address:   msg.Address,
		Location:  msg.Location,
		Bandwidth: msg.Bandwidth,
		Uid:       msg.Uid,
	}

	k.SetNode(ctx, node)

	return &types.MsgUpdateNodeResponse{}, nil
}

func (k msgServer) DeleteNode(goCtx context.Context, msg *types.MsgDeleteNode) (*types.MsgDeleteNodeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetNode(
		ctx,
		msg.Index,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveNode(
		ctx,
		msg.Index,
	)

	return &types.MsgDeleteNodeResponse{}, nil
}
