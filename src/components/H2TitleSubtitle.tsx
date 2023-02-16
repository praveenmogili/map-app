import React from 'react'

const H2TitleSubtitle = (props) => {
  const { title, subtitle } = props
  return (
    <div className='container h2-title-subtitle w-100 p-3'>
      <h2 className='title'>{title}</h2>
      <p className='subtitle'>{subtitle}</p>
    </div>
  )
}

export default H2TitleSubtitle