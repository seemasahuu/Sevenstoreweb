 import React, { useState } from 'react';
import { IndividualPuja } from "./tabs/IndividualPuja";
import { PartenerPuja } from "./tabs/PartenerPuja";
import { JointFamilyPuja } from './tabs/JointFamilyPuja'; 
import { FamilyPuja } from "./tabs/FamilyPuja";
import imgindividualunselectd from './imeges/individuaunslectedl.png';
import imgindividualselected from './imeges/individualselected.png';
import imgpartenerunslected from './imeges/partenerunslected.png';
import imgpartnerselected from './imeges/partnerselected.png';
import imgfamilyunselected from './imeges/familyunselected.png';
import imgfamilyselected from './imeges/familyselected.png';
import imgjointfamilyunselected from './imeges/jointfamilyunselected.png';
import imgjointfamilyselected from './imeges/jointfamilyselected.png';

export const PoojaPackeje = () => {
    const [selectedId, setSelectedId] = useState(1);

    const handleClick = (tabno) => {
        setSelectedId(tabno);

    }

    return (
        <div>
            <div className='flex m-3'>
                <div className='h-24 bg-slate-300 shadow-md w-[250px] m-1 rounded-xl lg:w-[200px] lg:rounded-3xl relative' onClick={() => handleClick(1)}>
                    <img src={selectedId === 1 ? imgindividualselected : imgindividualunselectd} alt=" "/>
                    <span className='absolute top-[95%] right-[30%]' style={{ color: selectedId === 1 ? 'white' : 'orange' }}>₹851</span>
                </div>
             
                <div className='h-24 bg-slate-300 shadow-md w-[250px] m-1 rounded-xl lg:w-[200px] lg:rounded-3xl relative' onClick={() => handleClick(2)}>
                    <img src={selectedId === 2 ? imgpartnerselected : imgpartenerunslected} alt=" " />
                    <span className='absolute top-[95%] right-[30%]'  style={{ color: selectedId === 2 ? 'white' : 'blue' }}>₹1251</span>
                </div>
                <div className='h-24 bg-slate-300 shadow-md w-[250px] m-1 rounded-xl lg:w-[200px] lg:rounded-3xl relative' onClick={() => handleClick(3)}>
                    <img src={selectedId === 3 ? imgfamilyselected : imgfamilyunselected} alt=" " />
                    <span className='absolute top-[95%] right-[30%]'  style={{ color: selectedId === 3 ? 'white' : 'red' }}>₹2001</span>
                </div>
                <div className='h-24 bg-slate-300 shadow-md w-[250px] m-1 rounded-xl lg:w-[200px] lg:rounded-3xl relative' onClick={() => handleClick(4)}>
                    <img src={selectedId === 4 ? imgjointfamilyselected : imgjointfamilyunselected} alt=" e" />
                    <span className='absolute top-[95%] right-[30%]'  style={{ color: selectedId === 4 ? 'white' : 'indigo' }}>₹3001</span>
                </div>
            </div>

            {selectedId === 1 && <IndividualPuja />}
            {selectedId === 2 && <PartenerPuja />}
            {selectedId === 3 && <FamilyPuja />}
            {selectedId === 4 && <JointFamilyPuja />}
        </div>
    );
};
