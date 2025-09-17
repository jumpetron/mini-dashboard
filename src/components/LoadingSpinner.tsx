const LoadingSpinner = () => {
  return (
    <div className='flex justify-center items-center w-full h-full py-10'>
      <div className='w-12 h-12 border-4 border-gray-700 border-t-transparent rounded-full animate-spin'></div>
    </div>
  )
}

export default LoadingSpinner
