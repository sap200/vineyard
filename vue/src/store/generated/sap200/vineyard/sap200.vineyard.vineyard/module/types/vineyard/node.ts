/* eslint-disable */
import { Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'sap200.vineyard.vineyard'

export interface Node {
  index: string
  address: string
  location: string
  bandwidth: string
  uid: string
  creator: string
}

const baseNode: object = { index: '', address: '', location: '', bandwidth: '', uid: '', creator: '' }

export const Node = {
  encode(message: Node, writer: Writer = Writer.create()): Writer {
    if (message.index !== '') {
      writer.uint32(10).string(message.index)
    }
    if (message.address !== '') {
      writer.uint32(18).string(message.address)
    }
    if (message.location !== '') {
      writer.uint32(26).string(message.location)
    }
    if (message.bandwidth !== '') {
      writer.uint32(34).string(message.bandwidth)
    }
    if (message.uid !== '') {
      writer.uint32(42).string(message.uid)
    }
    if (message.creator !== '') {
      writer.uint32(50).string(message.creator)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Node {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseNode } as Node
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string()
          break
        case 2:
          message.address = reader.string()
          break
        case 3:
          message.location = reader.string()
          break
        case 4:
          message.bandwidth = reader.string()
          break
        case 5:
          message.uid = reader.string()
          break
        case 6:
          message.creator = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Node {
    const message = { ...baseNode } as Node
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address)
    } else {
      message.address = ''
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = String(object.location)
    } else {
      message.location = ''
    }
    if (object.bandwidth !== undefined && object.bandwidth !== null) {
      message.bandwidth = String(object.bandwidth)
    } else {
      message.bandwidth = ''
    }
    if (object.uid !== undefined && object.uid !== null) {
      message.uid = String(object.uid)
    } else {
      message.uid = ''
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    return message
  },

  toJSON(message: Node): unknown {
    const obj: any = {}
    message.index !== undefined && (obj.index = message.index)
    message.address !== undefined && (obj.address = message.address)
    message.location !== undefined && (obj.location = message.location)
    message.bandwidth !== undefined && (obj.bandwidth = message.bandwidth)
    message.uid !== undefined && (obj.uid = message.uid)
    message.creator !== undefined && (obj.creator = message.creator)
    return obj
  },

  fromPartial(object: DeepPartial<Node>): Node {
    const message = { ...baseNode } as Node
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address
    } else {
      message.address = ''
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = object.location
    } else {
      message.location = ''
    }
    if (object.bandwidth !== undefined && object.bandwidth !== null) {
      message.bandwidth = object.bandwidth
    } else {
      message.bandwidth = ''
    }
    if (object.uid !== undefined && object.uid !== null) {
      message.uid = object.uid
    } else {
      message.uid = ''
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    return message
  }
}

type Builtin = Date | Function | Uint8Array | string | number | undefined
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>
