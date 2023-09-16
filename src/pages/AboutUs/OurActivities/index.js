/* We work*/
import kyketvoihutech from '../../../Image/AboutUs/Our_Activities/WeWork/kyketvoiHutech.jpg';
import d5166 from '../../../Image/AboutUs/Our_Activities/WeWork/5d_116.jpg';
import wework1 from '../../../Image/AboutUs/Our_Activities/WeWork/1.jpg';
import lekyketcty2 from '../../../Image/AboutUs/Our_Activities/WeWork/le-ky-ket-cty-2.jpg';
import training from '../../../Image/AboutUs/Our_Activities/WeWork/training.jpg';
import wework6 from '../../../Image/AboutUs/Our_Activities/WeWork/6.jpg';
/* We  Play*/
import weplay1 from '../../../Image/AboutUs/Our_Activities/WePlay/1.jpg';
import weplay2 from '../../../Image/AboutUs/Our_Activities/WePlay/2.jpg';
import weplay3 from '../../../Image/AboutUs/Our_Activities/WePlay/3.jpg';
import hpbd1 from '../../../Image/AboutUs/Our_Activities/WePlay/hbpd_1.jpg';
import congra1 from '../../../Image/AboutUs/Our_Activities/WePlay/congra_1.jpg';
import hpbd2 from '../../../Image/AboutUs/Our_Activities/WePlay/hpbd_2.jpg';
/* We give */
import wegive1 from '../../../Image/AboutUs/Our_Activities/WeGive/1.jpg';
import binhdinh1 from '../../../Image/AboutUs/Our_Activities/WeGive/binhdinh_1.jpg';
import binhdinh2 from '../../../Image/AboutUs/Our_Activities/WeGive/binhdinh_2.jpg';
import wegive4 from '../../../Image/AboutUs/Our_Activities/WeGive/4.jpg';
import wegive3 from '../../../Image/AboutUs/Our_Activities/WeGive/3.jpg';
import wegive6new from '../../../Image/AboutUs/Our_Activities/WeGive/6_new.jpg';
/* Video */
import { WeWorkVideo,WeGiveVideo, WePlayVideo } from '../../../components/EmbeddedGoogleDriveFile/DriveFilePage';


const OurActivities = () => {

    const ImagesWeWork = [
        { url : kyketvoihutech, nameImage : kyketvoihutech,  title:'Ky ket voi hutech'} ,
        { url : d5166, nameImage : d5166,  title:'d5166'} ,
        { url : wework1, nameImage : wework1,  title:'We work image 1'} ,
        { url : lekyketcty2, nameImage : lekyketcty2,  title:'Le ky ket cong ty 2'} ,
        { url : training, nameImage : training,  title:'Training'} ,
        { url : wework6, nameImage : wework6,  title:'We Work 6'} ,
    ]
    const ImageWePlay = [
        { url : weplay1, nameImage : weplay1,  title:'We Play 1'} ,
        { url : weplay2, nameImage : weplay2,  title:'We Play 2'} ,
        { url : weplay3, nameImage : weplay3,  title:'We Play 3'} ,
        { url : hpbd1, nameImage : hpbd1,  title:'Happy Birthday 1'} ,
        { url : congra1, nameImage : congra1,  title:'Congratulations 1'} ,
        { url : hpbd2, nameImage : hpbd2,  title:'Happy Birthday 2'} ,
    ]
    const ImageWeGive = [
        { url : wegive1, nameImage : wegive1,  title:'We Give 1'} ,
        { url : binhdinh1, nameImage : binhdinh1,  title:'Binh Dinh 1'} ,
        { url : binhdinh2, nameImage : binhdinh2,  title:'Binh Dinh 2'} ,
        { url : wegive4, nameImage : wegive4,  title:'We Give 4'} ,
        { url : wegive3, nameImage : wegive3,  title:'We Give 3'} ,
        { url : wegive6new, nameImage : wegive6new,  title:'We Give 6 new'} ,
    ]


    return (
        <>
            
            {
                ImagesWeWork.map((imageItem,index) =>{ 
                    return (
                        <div key={index} className={imageItem.nameImage}>
                            <img src={imageItem.url} alt={imageItem.title}/>
                        </div>   
                    )
                })
                
            }
            <WeWorkVideo />
            
            {
                 ImageWePlay.map((imageItem,index) => { 
                    return (
                        <div key={index} className={imageItem.nameImage}>
                            <img src={imageItem.url} alt={imageItem.title}/>
                        </div>   
                    )
                })
            }
            <WePlayVideo />
            
            {
                 ImageWeGive.map((imageItem,index) => { 
                    return (
                        <div key={index} className={imageItem.nameImage}>
                            <img src={imageItem.url} alt={imageItem.title}/>
                        </div>   
                    )
                })
            }
            <WeGiveVideo />
        </>
    )
}

export default OurActivities;