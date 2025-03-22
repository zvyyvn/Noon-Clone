import { useState } from 'react'

import './App.css'
import Header from './Comonent/Header'
import Links from './Comonent/Links'
import Banner from './Comonent/Banner'
import SliderSection from './Comonent/SliderSection'
import Section1 from './Comonent/Section1'
import Section2 from './Comonent/Section2'
import MothersDay from './Comonent/MothersDay'
import Recommended from './Comonent/Recommended'
import BestDeal from './Comonent/BestDeal'
import Ramadan from './Comonent/Ramadan'
import Fashion from './Comonent/Fashion'
import BestSeller from './Comonent/BestSeller'
import SixtyOf from './Comonent/SixtyOf'
import FooterLinks from './Comonent/FooterLinks'
import FooterEnd from './Comonent/FooterEnd'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Links />
      <Banner value="https://f.nooncdn.com/mpcms/EN0001/assets/a6706a76-d65d-4781-aa66-fbcaa92affcc.png"/>
      <SliderSection />
      <Section1 />
      <Section2 />  
      <Recommended />
      <MothersDay />
      <Banner value="https://f.nooncdn.com/ads/banner-1440x1440/en_dk_uae-sfu-01.1741152511.1594114.png"/>
      <BestDeal />
      <Ramadan />
      <Fashion />
      <Banner value="https://f.nooncdn.com/ads/banner-1440x1440/EN-1440_200.1709632883.1436853.png"/>
      <Banner value="https://f.nooncdn.com/mpcms/EN0001/assets/aa5f61a8-3ce7-43e3-b9ce-006988531586.gif" />
      <BestSeller />
      <SixtyOf />
      <FooterLinks />
      <FooterEnd />
    </>
  )
}

export default App
