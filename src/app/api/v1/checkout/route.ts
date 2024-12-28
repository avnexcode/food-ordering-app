import { handlers } from "@/server/features/transaction";

export const { POST } = handlers;


// //! Midtrans API
// import { midtransSnap } from "@/lib/midtrans";
// import type { NextApiRequest, NextApiResponse } from "next";

// type ProductDetails = {  
//     id: string;  
//     name: string;  
//     quantity: number;  
//     price: number;  
// };

// type RequestBody = {  
//     orderId: string;  
//     amount: number;  
//     productDetails: ProductDetails[];  
// };

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {  
//     if (req.method === 'POST') {  
//         const { orderId, amount, productDetails } = req.body as RequestBody;  

//         const parameter = {  
//             transaction_details: {  
//                 order_id: orderId,  
//                 gross_amount: amount,  
//             },  
//             item_details: productDetails, // Menambahkan detail produk  
//             credit_card: {  
//                 secure: true,  
//             },  
//         };  

//         try {  
//             const response = await midtransSnap.createTransaction(parameter);  
//             res.status(200).json(response);  
//         } catch (error) {  
//             res.status(500).json({ error: (error as Error).message });  
//         }  
//     } else {  
//         res.setHeader('Allow', ['POST']);  
//         res.status(405).end(`Method ${req.method} Not Allowed`);  
//     }  
// }