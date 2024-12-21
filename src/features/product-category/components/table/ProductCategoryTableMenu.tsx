import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { DeleteProductCategoryButton } from '@/features/product-category/components/button/DeleteProductCategoryButton';
import { Ellipsis, Pencil} from 'lucide-react';
import { useRouter } from 'next/navigation';

type ProductCategoryTableMenuProps = {
    id: string;
};

export const ProductCategoryTableMenu = (
    props: ProductCategoryTableMenuProps,
) => {
    const router = useRouter();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="rounded-full">
                <Ellipsis size={20} strokeWidth={2} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="[&>*]:cursor-pointer">
                <DropdownMenuItem
                    onClick={() =>
                        router.push(
                            `/dashboard/store/product-category/edit/${props.id}`,
                        )
                    }
                >
                    <Pencil />
                    Edit
                </DropdownMenuItem>
                <DeleteProductCategoryButton id={props.id} />
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu';
// import { DeleteProductCategoryButton } from './DeleteProductCategoryButton';
// import { Button } from '@/components/ui/button';
// import { Ellipsis, Pencil, View } from 'lucide-react';
// import { useRouter } from 'next/navigation';
// import { forwardRef } from 'react';

// type ProductCategoryTableMenuProps = {
//     id: string;
// };

// export const ProductCategoryTableMenu = forwardRef<
//     HTMLButtonElement,
//     ProductCategoryTableMenuProps
// >((props, ref) => {
//     const router = useRouter();

//     return (
//         <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//                 <Button
//                     ref={ref}
//                     variant="ghost"
//                     className="h-8 w-8 p-0 focus-visible:ring-0"
//                 >
//                     <Ellipsis className="h-4 w-4" />
//                 </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end">
//                 <DropdownMenuItem
//                     onClick={() =>
//                         router.push(`/dashboard/store/product-category/${props.id}`)
//                     }
//                 >
//                     <View className="mr-2 h-4 w-4" />
//                     Detail
//                 </DropdownMenuItem>
//                 <DropdownMenuItem
//                     onClick={() =>
//                         router.push(
//                             `/dashboard/store/product-category/edit/${props.id}`
//                         )
//                     }
//                 >
//                     <Pencil className="mr-2 h-4 w-4" />
//                     Edit
//                 </DropdownMenuItem>
//                 <DeleteProductCategoryButton id={props.id} />
//             </DropdownMenuContent>
//         </DropdownMenu>
//     );
// });

// ProductCategoryTableMenu.displayName = 'ProductCategoryTableMenu';
