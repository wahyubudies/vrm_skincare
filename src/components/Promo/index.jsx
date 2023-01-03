import React from 'react'
import "./index.sass"
import Button from "../Button"

const Promo = () => {
    return (
        <div className="wrapper_promo" id="promo_section">
            <div className="item">
                <img src="./img/promo.png" alt="" className='promo_img' />
            </div>
            <div className="item">
                <div className="wrap_text">
                    <h5>HOT PROMO</h5>
                    <p>(5 item + FREE BONUS)</p>
                    <p className='promo_price'> Rp. 400.000</p>
                    <p>CUMA <strong>Rp. 250.000</strong></p>
                    <p className='long_text'> 1 Paket kamu sudah mendapatkan
                        serangkaian perawatan wajah Radiant Series :
                        Face Wash, Day Cream, Night Cream, Toner
                        dan Serum plus FREE Pouch Cantik + FREE
                        emas 0,001 gr (buyback guarantee)
                    </p>
                    <p>*Persediaan terbatas</p>
                    <div className="wrap_button">
                        <button>
                            <a href="https://wa.me/6281805023857" target="_blank">
                                <img src="./img/icon_wa.png" alt="" />
                                Whatsapp
                            </a>
                        </button>
                        <button>
                            <a href="https://shopee.co.id/vrm_nbsstokismalang" target="_blank">
                                <img src="./img/icon_shopee.png" alt="" />
                                Shopee
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Promo