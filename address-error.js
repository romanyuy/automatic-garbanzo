"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressError = void 0;
class AddressError extends Error {
    constructor(message, parseMessage) {
        super(message);
        this.name = 'AddressError';
        if (parseMessage !== null) {
            this.parseMessage = parseMessage;
        }
    }
}
exports.AddressError = AddressError;//# sourceMappingURL=https://main.vscode-cdn.net/sourcemaps/fabdb6a30b49f79a7aba0f2ad9df9b399473380f/node_modules/ip-address/dist/address-error.js.map