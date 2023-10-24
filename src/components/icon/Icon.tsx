import iconSprite from "../../images/Icon-sprite.svg"

type IconPropsType = {
     height?: string
     width?: string
     viewBox?: string
     iconId: string 

}


export const Icon = (props: IconPropsType )=> {
    return(
        <svg
        height={props.height || "120px"}
        width={props.width || "120px"}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={props.viewBox || "0 0 130 130"}
        fill="none"
      >
        <use xlinkHref={`${iconSprite}#${props.iconId} `} />
      </svg>

    )
}