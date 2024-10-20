import Countries from '../AppComponents/Countries/Countries.tsx';
import CountryInfo from '../AppComponents/CountryInfo/CountryInfo.tsx';
import { useState } from 'react';

const AppBlock = () => {
  const [countryInfo, setCountryInfo] = useState(null);

  return (
    <div className="row border border-3">
      <div className="overflow-auto col-4" style={{maxHeight: '600px'}}>
        <Countries setCountryInfo={setCountryInfo}/>
      </div>
      <div className="col">
        <CountryInfo country={countryInfo} />
      </div>
    </div>
  );
};

export default AppBlock;