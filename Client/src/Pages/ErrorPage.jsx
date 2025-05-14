import React from 'react'


const ErrorPage = () => {
  return (
    <div className='h-screen w-full justify-center flex'>
      <div className="grid place-content-center">
        <img
          src="/error.png"
          alt='Error Image'
          className='w-100'/>
      </div>
    </div>
  )
}

export default ErrorPage