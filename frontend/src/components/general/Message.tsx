interface MessageProps {
    color: string,
    message: string,
}

const Message: React.FC<MessageProps> = ({message, color}) => {
    return <div className={`bg-green-100 border border-${color}-400 text-${color}-700 px-4 py-3 rounded relative" my-5 md:w-1/2`}>
    <strong className="font-bold">Submission:</strong> <span className="block sm:inline">{message}</span>
  </div>
}

export default Message;