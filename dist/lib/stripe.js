"use strict";
// import Stripe from "stripe"
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripe = void 0;
// export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "",
//     {
//         apiVersion: '2024-04-10',
//         typescript: true,
//     }
// )
var stripe_1 = __importDefault(require("stripe"));
exports.stripe = new stripe_1.default((_a = process.env.STRIPE_SECRET_KEY) !== null && _a !== void 0 ? _a : "", {
    apiVersion: '2023-10-16', // Ensure this matches the supported version in your type definitions
    typescript: true,
});
