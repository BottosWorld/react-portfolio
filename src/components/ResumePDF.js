import React from 'react'

const ResumePDF = () => {
  return (
    <div style={{backgroundImage: `url()`,backgroundColor: 'black', backgroundSize: 'cover', filter: `opacity(75%)`, backgroundPosition: "center"}} className="embed-responsive embed-responsive-16by9">
        <iframe src="https://drive.google.com/file/d/1hBCpaIl-ptt7XY8u9W7dRhGf1zKovcZn/preview" width="640" height="480" allow="autoplay"></iframe>
    </div>
  )
}

export default ResumePDF;