package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// NodeKeyPrefix is the prefix to retrieve all Node
	NodeKeyPrefix = "Node/value/"
)

// NodeKey returns the store key to retrieve a Node from the index fields
func NodeKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
