package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgGetCoins{}

func NewMsgGetCoins(creator string, amount string) *MsgGetCoins {
	return &MsgGetCoins{
		Creator: creator,
		Amount:  amount,
	}
}

func (msg *MsgGetCoins) Route() string {
	return RouterKey
}

func (msg *MsgGetCoins) Type() string {
	return "GetCoins"
}

func (msg *MsgGetCoins) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgGetCoins) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgGetCoins) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
