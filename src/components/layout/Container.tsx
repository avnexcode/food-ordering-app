type ContainerProps = {
    children: React.ReactNode
    className?: string
}

export const Container: React.FC<ContainerProps> = (props) => {
    const { children, className } = props

    return (
        <div className={`container ${className}`}>{children}</div>
    )
}