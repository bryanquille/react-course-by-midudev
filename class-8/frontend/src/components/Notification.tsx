type NotificationProps = {
  message: string
}

function Notification({ message }: NotificationProps) {
  return (
    <strong className="text-gray-600 text-base">{message}</strong>
  )
}

export default Notification