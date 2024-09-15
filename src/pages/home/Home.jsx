import React, { useState } from 'react';
import "./home.css";
import Logo from "../../img/Снимок экрана 2024-09-15 в 22.29.19.png";
import SectionTwo from "../../img/Снимок экрана 2024-09-16 в 00.24.06.png";

const StepForm = () => {
  const [step, setStep] = useState(0);
  const [specialist, setSpecialist] = useState('');
  const [location, setLocation] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [faultType, setFaultType] = useState('');
  const [results, setResults] = useState([]);

  const fetchSpecialists = () => {
    // Simulate fetching data
    return [
      { id: 2, name: 'Marat Nazarbaev', specialization: specialist, location: location, img: 'https://dpo.online/wp-content/uploads/2017/02/123555.jpg' },
    ];
  };

  const specialistOptions = [
    { value: 'plumber', label: 'Plumber' },
    { value: 'electrician', label: 'Electrician' },
    { value: 'carpenter', label: 'Carpenter' },
    { value: 'HVAC technician', label: 'HVAC Technician' },
    { value: 'house cleaner', label: 'House Cleaner' },
  ];

  // Fault types mapped to specialists
  const faultTypes = {
    plumber: [
      'Toilet, sink or drainage system',
      'Gas appliance',
      'Hot water system',
      'Tapware or tap fitting',
      'Cooling system',
      'Heating system',
      'Roofing or guttering',
      'Fire sprinkler system',
      'I\'m not sure / something else',
    ],
    electrician: [
      'Electrical wiring',
      'Fuse box issues',
      'Power outages',
      'Outlet problems',
      'Lighting issues',
      'Circuit breakers',
      'I\'m not sure / something else',
    ],
    carpenter: [
      'Woodwork repairs',
      'Furniture assembly',
      'Cabinet installations',
      'Decking',
      'Flooring',
      'Door installations',
      'I\'m not sure / something else',
    ],
    'HVAC technician': [
      'Heating system',
      'Cooling system',
      'Ventilation',
      'Air conditioning repair',
      'Furnace repair',
      'Duct cleaning',
      'I\'m not sure / something else',
    ],
    'house cleaner': [
      'General cleaning',
      'Deep cleaning',
      'Window cleaning',
      'Carpet cleaning',
      'Maid services',
      'I\'m not sure / something else',
    ],
  };

  const handleSearch = () => {
    const specialists = fetchSpecialists();
    setResults(specialists);
    setStep(4);
  };

  const handleCall = (specialist) => {
    alert(`Calling ${specialist.name}`);
  };

  const renderStep0 = () => (
    <div style={{ backgroundColor:'#DDD6BB', padding:20, width:'300px', height:450}}>
      <h2>Find a specialist near you</h2>
      <select
        value={specialist}
        onChange={(e) => setSpecialist(e.target.value)}
        style={{ padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc', width: '300px', marginBottom: '10px' }}
      >
        <option value=""> Select Specialist </option>
        {specialistOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Enter your ZIP code or town"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        style={{ padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc', width: '300px', marginBottom: '10px' }}
      />
      <button
        onClick={() => setStep(1)}
        style={{ padding: '10px 20px', backgroundColor: '#9B8C51', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Search
      </button>
    </div>
  );

  const renderStep1 = () => (
    <div>
      <h2>What type of service are you looking for with {specialist}?</h2>
      <button onClick={() => { setServiceType('Repair a fault'); setStep(2); }}>Repair a fault</button>
      <button onClick={() => { setServiceType('Clear a blockage'); setStep(2); }}>Clear a blockage</button>
      <button onClick={() => { setServiceType('Installation / replacement'); setStep(2); }}>Installation / replacement</button>
      <button onClick={() => { setServiceType('Service or maintenance'); setStep(2); }}>Service or maintenance</button>
      <button onClick={() => { setServiceType('I just want a local specialist'); setStep(2); }}>I just want a local specialist</button>
    </div>
  );

  const renderStep2 = () => (
    <div className='options'>
      <h2>Where is the fault?</h2>
      {faultTypes[specialist]?.map((type) => (
        <button key={type} onClick={() => { setFaultType(type); setStep(3); }}>
          {type}
        </button>
      ))}
    </div>
  );

  const renderStep3 = () => (
    <div>
      <h2>Summary</h2>
      <img style={{ width: 300, height: 300 }} src='https://dpo.online/wp-content/uploads/2017/02/123555.jpg' alt="" />
      <p><strong>Specialist:</strong> {specialist}</p>
      <p><strong>Location:</strong> {location}</p>
      <p><strong>Service Type:</strong> {serviceType}</p>
      <p><strong>Fault Type:</strong> {faultType}</p>
      <button onClick={handleSearch}>Find Specialist</button>
    </div>
  );

  const renderStep4 = () => (
    <div>
      <h2>Specialists Found</h2>
      <div className="cards">
        {results.length > 0 ? (
          results.map((specialist) => (
            <div key={specialist.id} className="specialist-card">
              <img src={specialist.img} alt={specialist.name} style={{ width: 100, height: 100, borderRadius: '50%' }} />
              <h3>{specialist.name}</h3>
              <p><strong>Specialization:</strong> {specialist.specialization}</p>
              <p><strong>Location:</strong> {specialist.location}</p>
              <button onClick={() => handleCall(specialist)}>Call</button>
            </div>
          ))
        ) : (
          <p>No specialists found.</p>
        )}
      </div>
    </div>
  );

  const renderCurrentStep = () => {
    switch (step) {
      case 0:
        return renderStep0();
      case 1:
        return renderStep1();
      case 2:
        return renderStep2();
      case 3:
        return renderStep3();
      case 4:
        return renderStep4();
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="homeDesign">
        <div className="header">
        <div style={{display:'flex'}}>
            <h3 style={{ marginLeft: 12, color: 'rgb(4, 4, 35)', paddingTop:10, paddingLeft:10 }}>ExpertHub</h3>
          <img style={{width:80, height:80, borderRadius:50}} src={Logo} alt="" />
        </div>
          <button style={{ background: "transparent", color:"#112A46"}}>Login</button>
        </div>
        {/* <div className="step-form-container">
          {renderCurrentStep()}
        </div> */}
        <div className="sectionOne">
          {/* <img style={{ width: 500, height: 600 }} src={FirstPhoto} alt="" /> */}
          <div className="sectionOneText">
          <div style={{marginRight:120}} className="div">
              <h1 style={{ color:'#112A46'}}>ExpertHub: Transforming the Labor Market in Kyrgyzstan</h1>
            <p>ExpertHub is revolutionizing the labor market in Kyrgyzstan by connecting skilled professionals with those seeking reliable services. We provide a platform for connecting those who need work done with those who know how to do it.</p>
          </div>
            <div style={{width:500}} className="step-form-container">
              {renderCurrentStep()}
            </div>
          </div>
        </div>
            <img style={{width:1435, height:700}} src={SectionTwo} alt="" />
      </div>
    </div>
  );
};

export default StepForm;
