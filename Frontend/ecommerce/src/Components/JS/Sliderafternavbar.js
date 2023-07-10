import { Carousel } from 'antd';
const contentStyle = {
    height: '300px',
    width: '100vw',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    objectfit: 'cover',
    overflow: 'hidden'

};
const Sliderafternavbar = () => {
    return (
        <Carousel autoplay>
            <div>
                <img style={contentStyle}
                    src="./assest/slider3.jpg" />
            </div>
            <div>
                <img style={contentStyle}
                    src="./assest/slider4.jpg" />
            </div>
            <div>
                <img style={contentStyle}
                    src="https://www.reliancedigital.in/medias/Best-Deals-on-OnePlus-Smartphones-CLP-Banner-13-04-2023.jpg?context=bWFzdGVyfGltYWdlc3wxMDg5ODZ8aW1hZ2UvanBlZ3xpbWFnZXMvaDExL2gxYS85OTgyNzU1MjA5MjQ2LmpwZ3w5YjU2OWRkMGFlNTRiZmU2OTRhODUxNDQ2ZGVmMmQ0MDAxYzk5NTdkOWRmZjczZDA1OGRmYzY3ZjkwY2NmNzMz" />
               
            </div>
            <div>
                <img style={contentStyle} 
                src="./assest/slider5.jpg"/>
            </div>
        </Carousel>
    )
}
export default Sliderafternavbar;