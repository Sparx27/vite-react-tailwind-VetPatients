const ErrorMessage = ({ children }) => {
  return (
    <div className='p-3 bg-red-800 rounded text-center font-bold text-white mb-5'>
      {children}
    </div>
  )
}

export default ErrorMessage
