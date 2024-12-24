import { Alert } from "react-bootstrap"

const Message = ( { variant, childer }) => {
  return (
    <Alert variant={variant}>
      {childer}
    </Alert>
  )
}

Message.defaultProps = {
  variant: 'info'
}

export default Message