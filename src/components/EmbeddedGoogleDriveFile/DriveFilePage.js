


const Introduction = () => {
        return(
            <iframe
            src="https://drive.google.com/file/d/1m_2f_FiacceCI65EZ5BHerJBehp1zFc_/preview"
            width="1200"
            height="675"
            allowFullScreen
            style={{ border: 'none', overflow: 'hidden' }}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            title="Tệp từ Google Drive"
            as="script"
          ></iframe>
        )
}
const WeWorkVideo = () => {
  return (
    <iframe src="https://drive.google.com/file/d/1eOumFigTCPP6pCthl5PWF5-X4Bk7WG3z/preview" 
            width="1200" height="675" style={{border: 'none', overflow:"hidden"}}
            scrolling="no" frameborder="0" allowfullscreen="true" 
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" 
            allowFullScreen="true" title="Tệp từ Google Drive"
            as="scipt">
    </iframe>
  )
}
const WePlayVideo = () => {
  return (
    <iframe src="https://drive.google.com/file/d/1yKH_dksASFDWyq1aMK1OWvGQoVXdim1y/preview" 
          width="1200" height="675" style={{border: 'none', overflow:"hidden"}} scrolling="no" frameborder="0" allowfullscreen="true" 
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" 
          allowFullScreen="true"
          title="Tệp từ Google Drive" as="scipt">
    </iframe>
  )

}
const WeGiveVideo = () => {
  return (
    <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fturkeydashvietnam%2Fvideos%2F441023589936233%2F&show_text=false&width=560&t=0" 
    width="1200" height="675" style={{border: 'none', overflow:"hidden"}} scrolling="no" frameborder="0" 
    allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    title="Tệp từ Google Drive" as="scipt">
    </iframe>
  )

}

export {Introduction, WeWorkVideo, WePlayVideo, WeGiveVideo}
