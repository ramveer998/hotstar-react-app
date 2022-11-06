import React from 'react'
import PageNotFound from '../images/404.jpg'

const NotFound = () => {
  return (
    <div style={{ marginLeft: "600px", height: '300px' }}>
      <img style={{marginTop: "30px"}} height={500} src={PageNotFound} alt="" />
    </div>
  )
}

export default NotFound