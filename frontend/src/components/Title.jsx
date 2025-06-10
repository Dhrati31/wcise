import React, { useState } from 'react'

function Title(props) {
    // const [title, setTitle] = useState('');


  return (
    <div className='text-5xl font-bold text-center my-8 text-blue-600'>{props.title}</div>
  )
}

export default Title