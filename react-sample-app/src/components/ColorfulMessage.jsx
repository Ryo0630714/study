export const ColorfulMessage = (props)=>{
    const{color,children} = props;

    const contentStyle = {
        color,
        fontSize: '18px'
      };

    return(
        <p style={contentStyle}>{children}</p>
    )
}

//propsはコンポーネントに渡す引数のようなもの