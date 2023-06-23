import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PieChart from '@/components/PieChart';
import SwitchToggle from '@/components/SwitchToggle';
import AllData from '@/components/answers/AllData';
import IndividualData from '@/components/answers/IndividualData';

function Page() {
  const [checked, setChecked] = useState(false);

  const handleSwitchClick = () => {
    setChecked(!checked);
  };

  return (
    <>
      <div
        className="mt-8 flex justify-center"
        onClick={() => handleSwitchClick()}
      >
        <SwitchToggle checked={checked} />
      </div>
      <div className="w-[80%] m-auto mt-8">
        {checked ? <IndividualData /> : <AllData />}
      </div>
    </>
  );
}

export default Page;
