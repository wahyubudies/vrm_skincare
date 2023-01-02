import React from "react"
import './App.css'
import { main_products } from "./ui_config/img.json"

import Logo from "./components/Logo"
import Button from "./components/Button"
import OurSeries from "./components/OurSeries"
import Promo from "./components/Promo"
import SlideContent from "./components/SlideContent"


function App() {
  const newImages = main_products.slice(1)
  const getProducts = newImages.map((img, idx) => (
    <React.Fragment key={idx}>
      <img src={`./img/${img.name}`} alt="" className="img_products" />

      <Button color="#F478A0" text="Dapatkan Sekarang" />
    </React.Fragment>
  ))

  return (
    <div className="App">
      <Logo />

      <img src={`./img/${main_products[0].name}`} alt="" className="img_products" />
      <Button color="#732236" text="Dapatkan Sekarang" />

      <SlideContent />

      {getProducts}

      <OurSeries />

      <Promo />
    </div>
  )
}

export default App
