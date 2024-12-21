type RenderElementsProps<T> = {
    of?: T[];
    render: (item: T, index: number) => React.ReactNode;
};

export const renderElements = <T>(props: RenderElementsProps<T>) => {
    const { of, render } = props;
    return of?.map((item, index) => render(item, index));
};
