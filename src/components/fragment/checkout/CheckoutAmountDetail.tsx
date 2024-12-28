import { Button } from '@/components/ui/button';  
import {  
    Card,  
    CardContent,  
    CardDescription,  
    CardFooter,  
    CardHeader,  
    CardTitle,  
} from '@/components/ui/card';  

import { Input } from '@/components/ui/input';  
import { CheckoutAmountDetailContent } from './CheckoutAmountDetailContent';  
import { useRouter } from 'next/router';  
import { useProductId } from '@/features/product/api';  
import React, { useEffect } from 'react';  
import { useMutation } from '@tanstack/react-query';  
import { axiosAuth } from '@/lib/axios';  
import { useUpdateProduct } from '@/features/product/api/useUpdateProduct';  

export const CheckoutAmountDetail = () => {  
    const router = useRouter();  
    const { id } = router.query as { id: string };  
    const { data: product, error, isLoading } = useProductId(id);  
    const [quantity, setQuantity] = React.useState(1);  
    const [stock, setStock] = React.useState(10);  
    const { mutate: updateProduct } = useUpdateProduct({
        id: product?.id
    });  

    useEffect(() => {  
        if (product) {  
            setStock(product.stock);  
        }  
    }, [product]);  

    useEffect(() => {  
        const snapScript = "https://app.sandbox.midtrans.com/snap/snap.js";  
        const clientKey = process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY; // Ensure this is set correctly  
        const script = document.createElement('script');  

        script.src = snapScript;  
        script.setAttribute('data-client-key', clientKey);  
        script.async = true;  

        document.body.appendChild(script);  

        return () => {  
            document.body.removeChild(script);  
        };  
    }, []);  

    const handleIncrement = () => {  
        if (quantity < stock) {  
            setQuantity(quantity + 1);  
        }  
    };  

    const handleDecrement = () => {  
        if (quantity > 1) {  
            setQuantity(quantity - 1);  
        }  
    };  

    const { mutateAsync: checkout } = useMutation({  
        mutationKey: ['checkout'],  
        mutationFn: async () => {  
            const response = await axiosAuth.post('/checkout', {  
                order_id: Math.round(Math.random() * 10000).toString(),  
                amount: product?.price * quantity,  
            });  
            console.log(response.data.data); // Log the response for debugging  
            return response.data.data; // Ensure this returns the correct structure with the token  
        },  
        onError: (error) => {  
            console.error('Checkout error:', error);  
            alert('Failed to initiate checkout. Please try again.');  
        }  
    });  

    const handlePayment = async () => {  
        try {  
            const snapToken = await checkout(); // Await the checkout mutation to get the transaction token  
            console.log(snapToken);  

            // Check if snapToken is defined and has a token property  
            if (snapToken && snapToken.token) {  
                // Check if window.snap is available before calling pay  
                if (typeof window.snap !== 'undefined') {  
                    // Trigger Midtrans Snap  
                    window.snap.pay(snapToken.token, {  
                        onSuccess: async function (result) {  
                            alert("Payment success!");  
                            console.log(result);  
                            // Update product stock in the database  
                            updateProduct({  
                                productId: product?.id, // Pass the product ID  
                                stock: product.stock - quantity // Calculate the new stock  
                            });  
                        },  
                        onPending: function (result) {  
                            alert("Waiting for your payment!");  
                            console.log(result);  
                        },  
                        onError: function (result) {  
                            alert("Payment failed!");  
                            console.log(result);  
                        },  
                        onClose: function () {  
                            alert('You closed the popup without finishing the payment');  
                        }  
                    });  
                } else {  
                    alert('Midtrans Snap is not loaded. Please try again later.');  
                }  
            } else {  
                alert('Invalid token received from the server.');  
            }  
        } catch (error) {  
            console.error('Payment error:', error);  
            alert('Payment process failed. Please try again.');  
        }  
    };  

    if (isLoading) {  
        return <p>Loading product details...</p>;  
    }  

    if (error) {  
        return <p>Error loading product details</p>;  
    }  

    return (  
        <Card className="w-full h-[400px] flex flex-col justify-center">  
            <CardHeader>  
                <CardTitle>Atur jumlah dan catatan</CardTitle>  
                <CardDescription>  
                    <Input placeholder="Catatan" className="border-none" />  
                </CardDescription>  
            </CardHeader>  
            <CardContent>  
                <CheckoutAmountDetailContent  
                    product={product}  
                    quantity={quantity}  
                    stock={stock}  
                    onIncrement={handleIncrement}  
                    onDecrement={handleDecrement}  
                />  
            </CardContent>  
            <CardFooter className="w-full flex flex-col gap-2">  
                <Button   
                    className="w-full bg-green-600 hover:bg-green-700"   
                    disabled={stock === 0} // Disable if stock is 0  
                >  
                    Add Cart  
                </Button>  
                <Button   
                    onClick={handlePayment}   
                    className="w-full bg-white border-2 hover:border-green-600 hover:bg-white hover:text-green-600 border-green-600 text-green-600 font-semibold"   
                    disabled={stock === 0} // Disable if stock is 0  
                >  
                    Checkout  
                </Button>  
            </CardFooter>  
        </Card>  
    );  
};