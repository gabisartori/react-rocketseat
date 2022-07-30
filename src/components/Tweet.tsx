// ??Passar parâmetros para um componente
type TweetProps = {
    text: string;
}

export function Tweet(props: TweetProps){
    return (
        // {código typescript}
        <div>{props.text}</div>
    )
}