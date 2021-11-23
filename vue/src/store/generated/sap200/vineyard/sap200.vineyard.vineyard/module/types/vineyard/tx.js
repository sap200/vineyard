/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal';
export const protobufPackage = 'sap200.vineyard.vineyard';
const baseMsgCreateNode = { creator: '', index: '', address: '', location: '', bandwidth: '', uid: '' };
export const MsgCreateNode = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.index !== '') {
            writer.uint32(18).string(message.index);
        }
        if (message.address !== '') {
            writer.uint32(26).string(message.address);
        }
        if (message.location !== '') {
            writer.uint32(34).string(message.location);
        }
        if (message.bandwidth !== '') {
            writer.uint32(42).string(message.bandwidth);
        }
        if (message.uid !== '') {
            writer.uint32(50).string(message.uid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateNode };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.index = reader.string();
                    break;
                case 3:
                    message.address = reader.string();
                    break;
                case 4:
                    message.location = reader.string();
                    break;
                case 5:
                    message.bandwidth = reader.string();
                    break;
                case 6:
                    message.uid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateNode };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = '';
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = '';
        }
        if (object.location !== undefined && object.location !== null) {
            message.location = String(object.location);
        }
        else {
            message.location = '';
        }
        if (object.bandwidth !== undefined && object.bandwidth !== null) {
            message.bandwidth = String(object.bandwidth);
        }
        else {
            message.bandwidth = '';
        }
        if (object.uid !== undefined && object.uid !== null) {
            message.uid = String(object.uid);
        }
        else {
            message.uid = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.index !== undefined && (obj.index = message.index);
        message.address !== undefined && (obj.address = message.address);
        message.location !== undefined && (obj.location = message.location);
        message.bandwidth !== undefined && (obj.bandwidth = message.bandwidth);
        message.uid !== undefined && (obj.uid = message.uid);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateNode };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = '';
        }
        if (object.location !== undefined && object.location !== null) {
            message.location = object.location;
        }
        else {
            message.location = '';
        }
        if (object.bandwidth !== undefined && object.bandwidth !== null) {
            message.bandwidth = object.bandwidth;
        }
        else {
            message.bandwidth = '';
        }
        if (object.uid !== undefined && object.uid !== null) {
            message.uid = object.uid;
        }
        else {
            message.uid = '';
        }
        return message;
    }
};
const baseMsgCreateNodeResponse = {};
export const MsgCreateNodeResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateNodeResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgCreateNodeResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgCreateNodeResponse };
        return message;
    }
};
const baseMsgUpdateNode = { creator: '', index: '', address: '', location: '', bandwidth: '', uid: '' };
export const MsgUpdateNode = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.index !== '') {
            writer.uint32(18).string(message.index);
        }
        if (message.address !== '') {
            writer.uint32(26).string(message.address);
        }
        if (message.location !== '') {
            writer.uint32(34).string(message.location);
        }
        if (message.bandwidth !== '') {
            writer.uint32(42).string(message.bandwidth);
        }
        if (message.uid !== '') {
            writer.uint32(50).string(message.uid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateNode };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.index = reader.string();
                    break;
                case 3:
                    message.address = reader.string();
                    break;
                case 4:
                    message.location = reader.string();
                    break;
                case 5:
                    message.bandwidth = reader.string();
                    break;
                case 6:
                    message.uid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateNode };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = '';
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = '';
        }
        if (object.location !== undefined && object.location !== null) {
            message.location = String(object.location);
        }
        else {
            message.location = '';
        }
        if (object.bandwidth !== undefined && object.bandwidth !== null) {
            message.bandwidth = String(object.bandwidth);
        }
        else {
            message.bandwidth = '';
        }
        if (object.uid !== undefined && object.uid !== null) {
            message.uid = String(object.uid);
        }
        else {
            message.uid = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.index !== undefined && (obj.index = message.index);
        message.address !== undefined && (obj.address = message.address);
        message.location !== undefined && (obj.location = message.location);
        message.bandwidth !== undefined && (obj.bandwidth = message.bandwidth);
        message.uid !== undefined && (obj.uid = message.uid);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateNode };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = '';
        }
        if (object.location !== undefined && object.location !== null) {
            message.location = object.location;
        }
        else {
            message.location = '';
        }
        if (object.bandwidth !== undefined && object.bandwidth !== null) {
            message.bandwidth = object.bandwidth;
        }
        else {
            message.bandwidth = '';
        }
        if (object.uid !== undefined && object.uid !== null) {
            message.uid = object.uid;
        }
        else {
            message.uid = '';
        }
        return message;
    }
};
const baseMsgUpdateNodeResponse = {};
export const MsgUpdateNodeResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateNodeResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgUpdateNodeResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateNodeResponse };
        return message;
    }
};
const baseMsgDeleteNode = { creator: '', index: '' };
export const MsgDeleteNode = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.index !== '') {
            writer.uint32(18).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteNode };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.index = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgDeleteNode };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteNode };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        return message;
    }
};
const baseMsgDeleteNodeResponse = {};
export const MsgDeleteNodeResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteNodeResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgDeleteNodeResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeleteNodeResponse };
        return message;
    }
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    CreateNode(request) {
        const data = MsgCreateNode.encode(request).finish();
        const promise = this.rpc.request('sap200.vineyard.vineyard.Msg', 'CreateNode', data);
        return promise.then((data) => MsgCreateNodeResponse.decode(new Reader(data)));
    }
    UpdateNode(request) {
        const data = MsgUpdateNode.encode(request).finish();
        const promise = this.rpc.request('sap200.vineyard.vineyard.Msg', 'UpdateNode', data);
        return promise.then((data) => MsgUpdateNodeResponse.decode(new Reader(data)));
    }
    DeleteNode(request) {
        const data = MsgDeleteNode.encode(request).finish();
        const promise = this.rpc.request('sap200.vineyard.vineyard.Msg', 'DeleteNode', data);
        return promise.then((data) => MsgDeleteNodeResponse.decode(new Reader(data)));
    }
}
