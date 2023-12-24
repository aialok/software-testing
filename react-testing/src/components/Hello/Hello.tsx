type helloProp = {
    names?: String
}

function Hello(props : helloProp) {
  return (
    <div>Hello-{props.names ? props.names : "Guest"}</div>
  )
}

export default Hello