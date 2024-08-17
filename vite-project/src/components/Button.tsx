type ButtonProps = {
    title: string;
    color: string;
};

function Button({ title = "Button", color }: ButtonProps) {
    return (
        <button>{title}</button>

    )
}

export default Button