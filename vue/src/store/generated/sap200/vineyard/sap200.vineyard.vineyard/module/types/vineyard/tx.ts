/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal'

export const protobufPackage = 'sap200.vineyard.vineyard'

export interface MsgCreateNode {
  creator: string
  index: string
  address: string
  location: string
  bandwidth: string
  uid: string
}

export interface MsgCreateNodeResponse {}

export interface MsgUpdateNode {
  creator: string
  index: string
  address: string
  location: string
  bandwidth: string
  uid: string
}

export interface MsgUpdateNodeResponse {}

export interface MsgDeleteNode {
  creator: string
  index: string
}

export interface MsgDeleteNodeResponse {}

export interface MsgGetCoins {
  creator: string
  amount: string
}

export interface MsgGetCoinsResponse {}

const baseMsgCreateNode: object = { creator: '', index: '', address: '', location: '', bandwidth: '', uid: '' }

export const MsgCreateNode = {
  encode(message: MsgCreateNode, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.index !== '') {
      writer.uint32(18).string(message.index)
    }
    if (message.address !== '') {
      writer.uint32(26).string(message.address)
    }
    if (message.location !== '') {
      writer.uint32(34).string(message.location)
    }
    if (message.bandwidth !== '') {
      writer.uint32(42).string(message.bandwidth)
    }
    if (message.uid !== '') {
      writer.uint32(50).string(message.uid)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateNode {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateNode } as MsgCreateNode
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.index = reader.string()
          break
        case 3:
          message.address = reader.string()
          break
        case 4:
          message.location = reader.string()
          break
        case 5:
          message.bandwidth = reader.string()
          break
        case 6:
          message.uid = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateNode {
    const message = { ...baseMsgCreateNode } as MsgCreateNode
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
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
    return message
  },

  toJSON(message: MsgCreateNode): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.index !== undefined && (obj.index = message.index)
    message.address !== undefined && (obj.address = message.address)
    message.location !== undefined && (obj.location = message.location)
    message.bandwidth !== undefined && (obj.bandwidth = message.bandwidth)
    message.uid !== undefined && (obj.uid = message.uid)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateNode>): MsgCreateNode {
    const message = { ...baseMsgCreateNode } as MsgCreateNode
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
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
    return message
  }
}

const baseMsgCreateNodeResponse: object = {}

export const MsgCreateNodeResponse = {
  encode(_: MsgCreateNodeResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateNodeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateNodeResponse } as MsgCreateNodeResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgCreateNodeResponse {
    const message = { ...baseMsgCreateNodeResponse } as MsgCreateNodeResponse
    return message
  },

  toJSON(_: MsgCreateNodeResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgCreateNodeResponse>): MsgCreateNodeResponse {
    const message = { ...baseMsgCreateNodeResponse } as MsgCreateNodeResponse
    return message
  }
}

const baseMsgUpdateNode: object = { creator: '', index: '', address: '', location: '', bandwidth: '', uid: '' }

export const MsgUpdateNode = {
  encode(message: MsgUpdateNode, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.index !== '') {
      writer.uint32(18).string(message.index)
    }
    if (message.address !== '') {
      writer.uint32(26).string(message.address)
    }
    if (message.location !== '') {
      writer.uint32(34).string(message.location)
    }
    if (message.bandwidth !== '') {
      writer.uint32(42).string(message.bandwidth)
    }
    if (message.uid !== '') {
      writer.uint32(50).string(message.uid)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateNode {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateNode } as MsgUpdateNode
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.index = reader.string()
          break
        case 3:
          message.address = reader.string()
          break
        case 4:
          message.location = reader.string()
          break
        case 5:
          message.bandwidth = reader.string()
          break
        case 6:
          message.uid = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateNode {
    const message = { ...baseMsgUpdateNode } as MsgUpdateNode
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
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
    return message
  },

  toJSON(message: MsgUpdateNode): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.index !== undefined && (obj.index = message.index)
    message.address !== undefined && (obj.address = message.address)
    message.location !== undefined && (obj.location = message.location)
    message.bandwidth !== undefined && (obj.bandwidth = message.bandwidth)
    message.uid !== undefined && (obj.uid = message.uid)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateNode>): MsgUpdateNode {
    const message = { ...baseMsgUpdateNode } as MsgUpdateNode
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
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
    return message
  }
}

const baseMsgUpdateNodeResponse: object = {}

export const MsgUpdateNodeResponse = {
  encode(_: MsgUpdateNodeResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateNodeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateNodeResponse } as MsgUpdateNodeResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateNodeResponse {
    const message = { ...baseMsgUpdateNodeResponse } as MsgUpdateNodeResponse
    return message
  },

  toJSON(_: MsgUpdateNodeResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateNodeResponse>): MsgUpdateNodeResponse {
    const message = { ...baseMsgUpdateNodeResponse } as MsgUpdateNodeResponse
    return message
  }
}

const baseMsgDeleteNode: object = { creator: '', index: '' }

export const MsgDeleteNode = {
  encode(message: MsgDeleteNode, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.index !== '') {
      writer.uint32(18).string(message.index)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteNode {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteNode } as MsgDeleteNode
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.index = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteNode {
    const message = { ...baseMsgDeleteNode } as MsgDeleteNode
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    return message
  },

  toJSON(message: MsgDeleteNode): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.index !== undefined && (obj.index = message.index)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteNode>): MsgDeleteNode {
    const message = { ...baseMsgDeleteNode } as MsgDeleteNode
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    return message
  }
}

const baseMsgDeleteNodeResponse: object = {}

export const MsgDeleteNodeResponse = {
  encode(_: MsgDeleteNodeResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteNodeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteNodeResponse } as MsgDeleteNodeResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgDeleteNodeResponse {
    const message = { ...baseMsgDeleteNodeResponse } as MsgDeleteNodeResponse
    return message
  },

  toJSON(_: MsgDeleteNodeResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteNodeResponse>): MsgDeleteNodeResponse {
    const message = { ...baseMsgDeleteNodeResponse } as MsgDeleteNodeResponse
    return message
  }
}

const baseMsgGetCoins: object = { creator: '', amount: '' }

export const MsgGetCoins = {
  encode(message: MsgGetCoins, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.amount !== '') {
      writer.uint32(18).string(message.amount)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgGetCoins {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgGetCoins } as MsgGetCoins
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.amount = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgGetCoins {
    const message = { ...baseMsgGetCoins } as MsgGetCoins
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount)
    } else {
      message.amount = ''
    }
    return message
  },

  toJSON(message: MsgGetCoins): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.amount !== undefined && (obj.amount = message.amount)
    return obj
  },

  fromPartial(object: DeepPartial<MsgGetCoins>): MsgGetCoins {
    const message = { ...baseMsgGetCoins } as MsgGetCoins
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount
    } else {
      message.amount = ''
    }
    return message
  }
}

const baseMsgGetCoinsResponse: object = {}

export const MsgGetCoinsResponse = {
  encode(_: MsgGetCoinsResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgGetCoinsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgGetCoinsResponse } as MsgGetCoinsResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgGetCoinsResponse {
    const message = { ...baseMsgGetCoinsResponse } as MsgGetCoinsResponse
    return message
  },

  toJSON(_: MsgGetCoinsResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgGetCoinsResponse>): MsgGetCoinsResponse {
    const message = { ...baseMsgGetCoinsResponse } as MsgGetCoinsResponse
    return message
  }
}

/** Msg defines the Msg service. */
export interface Msg {
  CreateNode(request: MsgCreateNode): Promise<MsgCreateNodeResponse>
  UpdateNode(request: MsgUpdateNode): Promise<MsgUpdateNodeResponse>
  DeleteNode(request: MsgDeleteNode): Promise<MsgDeleteNodeResponse>
  /** this line is used by starport scaffolding # proto/tx/rpc */
  GetCoins(request: MsgGetCoins): Promise<MsgGetCoinsResponse>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  CreateNode(request: MsgCreateNode): Promise<MsgCreateNodeResponse> {
    const data = MsgCreateNode.encode(request).finish()
    const promise = this.rpc.request('sap200.vineyard.vineyard.Msg', 'CreateNode', data)
    return promise.then((data) => MsgCreateNodeResponse.decode(new Reader(data)))
  }

  UpdateNode(request: MsgUpdateNode): Promise<MsgUpdateNodeResponse> {
    const data = MsgUpdateNode.encode(request).finish()
    const promise = this.rpc.request('sap200.vineyard.vineyard.Msg', 'UpdateNode', data)
    return promise.then((data) => MsgUpdateNodeResponse.decode(new Reader(data)))
  }

  DeleteNode(request: MsgDeleteNode): Promise<MsgDeleteNodeResponse> {
    const data = MsgDeleteNode.encode(request).finish()
    const promise = this.rpc.request('sap200.vineyard.vineyard.Msg', 'DeleteNode', data)
    return promise.then((data) => MsgDeleteNodeResponse.decode(new Reader(data)))
  }

  GetCoins(request: MsgGetCoins): Promise<MsgGetCoinsResponse> {
    const data = MsgGetCoins.encode(request).finish()
    const promise = this.rpc.request('sap200.vineyard.vineyard.Msg', 'GetCoins', data)
    return promise.then((data) => MsgGetCoinsResponse.decode(new Reader(data)))
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>
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
