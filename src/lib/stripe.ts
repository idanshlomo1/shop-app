// import Stripe from "stripe"

// export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "",
//     {
//         apiVersion: '2024-04-10',
//         typescript: true,
//     }
// )


import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "", {
    apiVersion: '2023-10-16',  // Ensure this matches the supported version in your type definitions
    typescript: true,
});
