type CheckoutImagePreviewProps = {
    url: string;
};
export const CheckoutImagePreview = (props: CheckoutImagePreviewProps) => {
    return (
        <div className="w-full">
            <img src={props.url} alt="" />
        </div>
    );
};
