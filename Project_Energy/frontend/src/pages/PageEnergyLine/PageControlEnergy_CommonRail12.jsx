import React from 'react'

import ComponentSidebar from '../../components/ComponentsEnergyLine/ComponentSidebar.jsx';
import ComponentMenuFilterTime from '../../components/ComponentsEnergyLine/ComponentMenuFilterTimeEnergy.jsx';
import { ComponentNavbarEnergyListrik } from '../../components/ComponentsEnergyLine/ComponentNavbarEnergyListrik.jsx';


const PageControlEnergy_CommonRail12 = () => {
    return (
      <div>

        <ComponentNavbarEnergyListrik />
        <ComponentMenuFilterTime />
        <ComponentSidebar />

        
      </div>
    );
  };
  
        
export default PageControlEnergy_CommonRail12;
