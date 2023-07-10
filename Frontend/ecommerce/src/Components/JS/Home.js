
import '../CSS/Home.css';
import Sliderafternavbar from '../JS/Sliderafternavbar';
import Productslider from '../JS/Productslider';
import { useEffect, useState } from 'react';


const Home = (props) => {
    const temp=props.data;
    const [proList_Fashion, setProList_Fashion] = useState();
    const [proList_Mobile, setProList_Mobile] = useState();
    const [proList_Electronics, setProList_Electronics] = useState();
    const [proList_Computers, setProList_Computers] = useState();
    
    useEffect(() => {
        let t = temp.filter((i) => i.category == "fashion");
        let  t1=t.slice(0,20);
        setProList_Fashion(t1);
       
    }, [])

    useEffect(() => {
        let t = temp.filter((i) => i.category == "mobile");
        let  t1=t.slice(0,20);
        setProList_Mobile(t1);
        
    }, [])

    useEffect(() => {
        let t = temp.filter((i) => i.category == "electronics");
        let  t1=t.slice(0,20);
        setProList_Electronics(t1);
        
    }, [])

    useEffect(() => {
        let t = temp.filter((i) => i.category == "computers");
        let  t1=t.slice(0,20);
        setProList_Computers(t1);
        
    }, [])
    

    return (
        <div className="Home_page">
            <div className="Slider_after_nav_container">
                <Sliderafternavbar />
            </div>

            <div className="pro_slider3_container pro_slider_container">
                <Productslider title={<span style={{ color: 'white', cursor: 'pointer' }}>Electronics</span>} id="scroll3" data={proList_Electronics} />
            </div>

            <div className="pro_slider1_container pro_slider_container">
                <Productslider title={<span style={{ color: 'white', cursor: 'pointer' }}>Fashion</span>} id="scroll1" data={proList_Fashion} />
            </div>


            <div className="pro_slider2_container pro_slider_container">
            <Productslider title={<span style={{ color: 'white', cursor: 'pointer' }}>Mobile</span>} id="scroll2"data={proList_Mobile}/>
            </div>

            <div className="pro_slider3_container pro_slider_container">
                <Productslider title={<span style={{ color: 'white', cursor: 'pointer' }}>Computers</span>} id="scroll4" data={proList_Computers} />
            </div>


        </div>
    )

}
export default Home;
