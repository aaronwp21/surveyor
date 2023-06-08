import SurveyForm from '@/components/forms/SurveyForm';
import React from 'react';

function Create() {
  const submitHandler = (vals) => {
    console.log(vals);
  }

  return (
    <div className='flex flex-col items-center mt-8'>
      <SurveyForm submitHandler={submitHandler} />
    </div>
  );
}

export default Create;
