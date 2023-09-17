import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import home from '../../Home/home.module.scss';
import OurAchieve from '../OurAchievements/OurAchievements.module.scss'
import fvldnkhcn from '../../../Image/AboutUs/Our_Achievements/FVL-DN-KHCN.png';
import fvliso27001 from '../../../Image/AboutUs/Our_Achievements/FVL-ISO27001.png';
import bangkhenthutuong from '../../../Image/AboutUs/Our_Achievements/Bằng khen Thủ Tướng.jpg'
import dichCovid from '../../../Image/AboutUs/Our_Achievements/Dịch COVID 2.jpg';
import thucamon from '../../../Image/AboutUs/Our_Achievements/ThuCamOn_2.jpg';
import KHCN from '../../../Image/AboutUs/Our_Achievements/KHCN.jpg';
import wethankyou from '../../../Image/AboutUs/Our_Achievements/WeThankYou.png';
import fvlcup1 from '../../../Image/AboutUs/Our_Achievements/FVL cup1.jpg';
import fvlcn2 from '../../../Image/AboutUs/Our_Achievements/FVL-CN2.png';
import ubndtphcm2018 from '../../../Image/AboutUs/Our_Achievements/UBND TP. HCM 2018.jpg';
import benhnhanngheo2015 from '../../../Image/AboutUs/Our_Achievements/UBND TP. HCM Bệnh nhân nghèo 2015.jpg';
import hinhcongnghe from '../../../Image/AboutUs/Our_Achievements/Hình công nghệ.jpg';
const OurAchievements = () => {

    const images = [
        { url: fvldnkhcn, nameImage: fvldnkhcn, title: 'Doanh nghiep Khoa hoc cong nghe' },
        { url: fvliso27001, nameImage: fvliso27001, title: 'ISO 27001' },
        { url: bangkhenthutuong, nameImage: bangkhenthutuong, title: 'Bang khen thu tuong' },
        { url: dichCovid, nameImage: dichCovid, title: 'Dich Covid' },
        { url: thucamon, nameImage: thucamon, title: 'Thu Cam On' },
        { url: KHCN, nameImage: KHCN, title: 'Khoa hoc cong nghe' },
        { url: wethankyou, nameImage: wethankyou, title: 'We thank you' },
        { url: fvlcup1, nameImage: fvlcup1, title: 'Cup 01' },
        { url: fvlcn2, nameImage: fvlcn2, title: 'FVL CN 02' },
        { url: ubndtphcm2018, nameImage: ubndtphcm2018, title: 'Uy ban nhanh dan thanh pho HCM 2018' },
        { url: benhnhanngheo2015, nameImage: benhnhanngheo2015, title: 'Benh nhan ngheo 2015' },
        { url: hinhcongnghe, nameImage: hinhcongnghe, title: 'Hinh cong nghe' },
    ]
    return (
        <>
            <div className={home.content}>
                <div className="container-fluid">
                    <div className="row">
                        <div className={OurAchieve.imgAchieve}>
                            <div className={home.titleContent}>
                                <h2>Our Achievements</h2>
                            </div>
                            <div id="demo" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                                </div>
                                <div className="carousel-inner">
                                    {
                                        images.map((imageItem, index) => {
                                            return (
                                                <div className="carousel-item" key={index}>
                                                    <img className="d-block w-100" src={imageItem.url} alt={imageItem.title} />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon"></span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                                    <span className="carousel-control-next-icon"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurAchievements;