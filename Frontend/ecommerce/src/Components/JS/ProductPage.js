import ProductPageProBlock from "./ProductPageProBlock";
import '../CSS/ProductPage.css'
import { useEffect, useState } from 'react';

const ProductPage = (props) => {
    
    const temp = props.data;
    let [proList_Fashion, setProList_Fashion] = useState();
    let [proList_Mobile, setProList_Mobile] = useState();
    let [proList_Electronics, setProList_Electronics] = useState();
    let [proList_Computers, setProList_Computers] = useState();


   


    useEffect(() => {
        let t = temp.filter((i) => i.category == "fashion");
        setProList_Fashion(t);
        console.log(t);
    }, [])

    useEffect(() => {
        let t = temp.filter((i) => i.category == "mobile");
        setProList_Mobile(t);
        console.log(t);
    }, [])

    useEffect(() => {
        let t = temp.filter((i) => i.category == "electronics");
        setProList_Electronics(t);
        console.log(proList_Electronics);
    }, [])

    useEffect(() => {
        let t = temp.filter((i) => i.category == "computers");
        setProList_Computers(t);
        console.log(t);
    }, [])

    

    return (
        <div className="Product_Page">
            <div className="">
                <ProductPageProBlock title="Mobile" data={proList_Mobile} />
            </div>

            <div className="">
                <ProductPageProBlock title="Electronics" data={proList_Electronics} />
            </div>

            <div className="">
                <ProductPageProBlock title="Computers" data={proList_Computers} />
            </div>

            <div className="">
                <ProductPageProBlock title="Fashion" data={proList_Fashion} />
            </div>

        </div>
    )

}

export default ProductPage;