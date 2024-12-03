import React from 'react'
import { ComponentNavbarEnergyListrik } from '../../components/ComponentsEnergyLine/ComponentNavbarEnergyListrik';
import { ComponentControlMQTT } from "../../components/ComponentsEnergyLine/ComponentControlMQTT";

const PageControlEnergy_OticsPlant1 = () => {
  return (
    <div>
        <ComponentNavbarEnergyListrik/>
        <ComponentControlMQTT/>
    </div>
  )
}

export default PageControlEnergy_OticsPlant1;
