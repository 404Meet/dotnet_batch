import React,{Component} from 'react';

export default class Home extends Component{
    render(){
        return(
            <div>
                <table className='m-2'>
        <tbody>
            <tr>
                <td width="50%">
                    <p className="font-monospace">Get everything you need at HealthCareByABC.com to take care of your health right from high-quality, affordable, authentic prescription medicines, Over-The-Counter pharmaceuticals products to general health care products, Ayurveda, Unani and Homeopathy medicines.We will ensure that the life-saving drugs reach your doorstep without a hitch. Do away with the hassle of driving to the medical store, waiting in line, or even remembering your refills! HealthCareByABC.com will sort out those problems for you effectively so that you can lead a healthy and full life!</p>
                </td>
                <td width="50%">
                <center>
                    <img src="https://www.svgrepo.com/show/165758/pharmacy.svg" width={60}/>
                    <h4 className="text-info font-monospac">Online order, made easy!</h4>
                    </center>
                </td>
            </tr>
            <tr>
                
                <td width="50%">
                    <center>
                    <img src="https://www.svgrepo.com/show/304743/trophy-first.svg" width={60}/>
                    <h4 className="text-info font-monospac">India's #1 Medicine Supplier.</h4>
                    </center>
                </td>
                <td width="50%">
                    <p className="font-monospace">With a dynamic legacy of over 100 years in the pharma business, it comes as no surprise that Netmeds.com is the first choice of over 4 million+ satisfied customers when it comes to an online pharmacy in India. Netmeds.com has a pan India presence as we deliver health care essentials to every state in the country. We take your health seriously at Netmeds.com. Be it purchasing medicines online, lab tests or online doctor consultations, we've got it all covered for our customers!</p>
                </td>
            </tr>
            <tr>
                <td width="50%">
                    <p className="font-monospace">HealthCare First is our loyalty programme which puts you and your health First! First members can get an extra 2.5% NMS Cashback (up to INR 100 per order) on prescription medication ordered using the membership. Members are also eligible for free delivery, priority processing, and free online doctor consultations! HealthCareByABC is one of India’s most trusted pharmacies, dispensing quality medicines at reasonable prices to over 7 million happy customers</p>
                </td>
                <td width="50%">
                    <div className="text-center">
                        <img src="https://www.svgrepo.com/show/211204/trophy-award.svg" width={60}/>
                        <h4 className="text-info font-monospac"> #10'th Leading Pharmacy by WHO</h4>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>

           </div>
        )
    }
}