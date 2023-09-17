import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import home from '../../Home/home.module.scss';
import OurAchieve from '../OurAchievements/OurAchievements.module.scss'
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
                <div className="container">
                    <div className="row">
                        <div className={OurAchieve.imgAchieve}>
                            <div className={home.titleContent}>
                                <h2>Our Achievements</h2>
                            </div>
                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner justify-content-center align-items-center">
                                <div className="carousel-item active">
                                        <img className="d-block" src={require('../../../Image/AboutUs/Our_Achievements/FVL-DN-KHCN.png')} />
                                    </div>
                                    {
                                        images.map((imageItem, index) => {
                                            return (
                                                <div className="carousel-item" key={index}>
                                                    <img className="d-block" src={imageItem.url} alt={imageItem.title} />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
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