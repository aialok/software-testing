type helloProp = {
    names?: String
}

function Hello(props : helloProp) {
  return (
    <div>Hello {props.names}</div>
  )
}

export default Hello