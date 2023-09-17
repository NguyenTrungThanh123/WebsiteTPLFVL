import {contentEvents} from '../../components/News'



const News = () => {

    return ( 
        <>
            {
                contentEvents.map((contentItem, index) => {
                    return (
                        <div key={index} >
                            <a href={contentItem.link} target="_blank" rel="noopener noreferrer">
                                <img src={contentItem.urlImage} alt={contentItem.alt}/>
                                <div>{contentItem.title}</div>
                                <div>{contentItem.content}</div>
                                
                            </a>
                        </div>
                    )
                })
            }
        </>
     );
}

export default News;