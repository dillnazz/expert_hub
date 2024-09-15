// import React, { useState } from 'react';
// import "./home.css";
// import FirstPhoto from '../../img/Снимок экрана 2024-09-15 в 13.23.06.png';
// import SecondPhoto from "../../img/Снимок экрана 2024-09-15 в 15.29.23.png"
// // import { VscAccount } from "react-icons/vsc";

// const StepForm = () => {
//   const [step, setStep] = useState(0);  // Начало с шага 0
//   const [specialist, setSpecialist] = useState(''); // Новое состояние для специалиста
//   const [location, setLocation] = useState('');  // Новое состояние для местоположения
//   const [serviceType, setServiceType] = useState('');
//   const [faultType, setFaultType] = useState('');

//   // Step 0: Поисковик специалиста
//   const renderStep0 = () => (
//     <div>
//       <h2>Find a specialist near you</h2>
//       {/* Поиск специалиста */}
//       <input
//         type="text"
//         placeholder="Enter type of specialist (e.g., plumber)"
//         value={specialist}
//         onChange={(e) => setSpecialist(e.target.value)}
//         style={{
//           padding: '10px',
//           fontSize: '16px',
//           borderRadius: '5px',
//           border: '1px solid #ccc',
//           width: '300px',
//           marginBottom: '10px'
//         }}
//       />
//       {/* Ввод местоположения */}
//       <input
//         type="text"
//         placeholder="Enter your ZIP code or town"
//         value={location}
//         onChange={(e) => setLocation(e.target.value)}
//         style={{
//           padding: '10px',
//           fontSize: '16px',
//           borderRadius: '5px',
//           border: '1px solid #ccc',
//           width: '300px',
//           marginBottom: '10px'
//         }}
//       />
//       <button
//         onClick={() => setStep(1)}
//         style={{
//           padding: '10px 20px',
//           backgroundColor: '#007bff',
//           color: '#fff',
//           border: 'none',
//           borderRadius: '5px',
//           cursor: 'pointer'
//         }}
//       >
//         Search
//       </button>
//     </div>
//   );

//   // Step 1: Выбор типа услуги
//   const renderStep1 = () => (
//     <div>
//       <h2>What type of service are you looking for with {specialist}?</h2>
//       <button onClick={() => { setServiceType('Repair a fault'); setStep(2); }}>Repair a fault</button>
//       <button onClick={() => { setServiceType('Clear a blockage'); setStep(2); }}>Clear a blockage</button>
//       <button onClick={() => { setServiceType('Installation / replacement'); setStep(2); }}>Installation / replacement</button>
//       <button onClick={() => { setServiceType('Service or maintenance'); setStep(2); }}>Service or maintenance</button>
//       <button onClick={() => { setServiceType('I just want a local specialist'); setStep(2); }}>I just want a local specialist</button>
//     </div>
//   );

//   // Step 2: Выбор типа неисправности
//   const renderStep2 = () => (
//     <div className='otions'>
//       <h2>Where is the fault?</h2>
//       <button onClick={() => { setFaultType('Toilet, sink or drainage system'); setStep(3); }}>Toilet, sink or drainage system</button>
//       <button onClick={() => { setFaultType('Gas appliance'); setStep(3); }}>Gas appliance</button>
//       <button onClick={() => { setFaultType('Hot water system'); setStep(3); }}>Hot water system</button>
//       <button onClick={() => { setFaultType('Tapware or tap fitting'); setStep(3); }}>Tapware or tap fitting</button>
//       <button onClick={() => { setFaultType('Cooling system'); setStep(3); }}>Cooling system</button>
//       <button onClick={() => { setFaultType('Heating system'); setStep(3); }}>Heating system</button>
//       <button onClick={() => { setFaultType('Roofing or guttering'); setStep(3); }}>Roofing or guttering</button>
//       <button onClick={() => { setFaultType('Fire sprinkler system'); setStep(3); }}>Fire sprinkler system</button>
//       <button onClick={() => { setFaultType('I\'m not sure / something else'); setStep(3); }}>I'm not sure / something else</button>
//     </div>
//   );

//   // Step 3: Подтверждение и отправка
//   const renderStep3 = () => (
//     <div>
//       <h2>Summary</h2>
//       <p><strong>Specialist:</strong> {specialist}</p>
//       <p><strong>Location:</strong> {location}</p>
//       <p><strong>Service Type:</strong> {serviceType}</p>
//       <p><strong>Fault Type:</strong> {faultType}</p>
//       <button onClick={() => alert('Specialist search initiated!')}>Find Specialist</button>
//     </div>
//   );

//   // Условное отображение шагов
//   const renderCurrentStep = () => {
//     switch (step) {
//       case 0:
//         return renderStep0();
//       case 1:
//         return renderStep1();
//       case 2:
//         return renderStep2();
//       case 3:
//         return renderStep3();
//       default:
//         return null;
//     }
//   };

//   return (
//     <div>
//       <div className="homeDesign">
//       <div className="header">
//           <h3 style={{ marginLeft: 42, color:'#0056b3'}}>ExpertHub</h3>
//         <button>Login</button>
//       </div>
//         <div className="sectionOne">
//           <img style={{width:500, height:600}} src={FirstPhoto} alt="" />
//           <div className="sectionOneText">
//             <h1>ExpertHub: Transforming the Labor Market in Kyrgyzstan</h1>
//             <p>ExpertHub is revolutionizing the labor market in Kyrgyzstan by connecting skilled professionals with those seeking reliable services. We provide a platform for connecting those who need work done with those who know how to do it.</p>
//           </div>
//       </div>
//       </div>
//     <div className="step-form-container">
//       {renderCurrentStep()}
//     </div>
//       <img style={{width:1400, height:700}} src={SecondPhoto} alt="" />
//     </div>
//   );
// };

// export default StepForm;


// import React, { useState } from 'react';
// import "./home.css";
// import FirstPhoto from '../../img/Снимок экрана 2024-09-15 в 13.23.06.png';
// import SecondPhoto from "../../img/Снимок экрана 2024-09-15 в 15.29.23.png";
// // import { VscAccount } from "react-icons/vsc";

// const StepForm = () => {
//   const [step, setStep] = useState(0);  // Начало с шага 0
//   const [specialist, setSpecialist] = useState(''); // Новое состояние для специалиста
//   const [location, setLocation] = useState('');  // Новое состояние для местоположения
//   const [serviceType, setServiceType] = useState('');
//   const [faultType, setFaultType] = useState('');
//   const [results, setResults] = useState([]);  // Новое состояние для результатов поиска

//   // Placeholder for specialists data
//   const fetchSpecialists = () => {
//     // Simulate fetching data
//     return [
//       // { id: 1, name: 'John Doe', specialization: specialist, location: location },
//       { id: 2, name: 'Marat Nazarbaev', specialization: specialist, location: location, img: 'https://dpo.online/wp-content/uploads/2017/02/123555.jpg' },
//       // Add more mock specialists as needed
//     ];
//   };

//   const handleSearch = () => {
//     // Simulate searching for specialists
//     const specialists = fetchSpecialists();
//     setResults(specialists);
//     setStep(4);  // Go to the results step
//   };

//   // Step 0: Поисковик специалиста
//   const renderStep0 = () => (
//     <div>
//       <h2>Find a specialist near you</h2>
//       <input
//         type="text"
//         placeholder="Enter type of specialist (e.g., plumber)"
//         value={specialist}
//         onChange={(e) => setSpecialist(e.target.value)}
//         style={{
//           padding: '10px',
//           fontSize: '16px',
//           borderRadius: '5px',
//           border: '1px solid #ccc',
//           width: '300px',
//           marginBottom: '10px'
//         }}
//       />
//       <input
//         type="text"
//         placeholder="Enter your ZIP code or town"
//         value={location}
//         onChange={(e) => setLocation(e.target.value)}
//         style={{
//           padding: '10px',
//           fontSize: '16px',
//           borderRadius: '5px',
//           border: '1px solid #ccc',
//           width: '300px',
//           marginBottom: '10px'
//         }}
//       />
//       <button
//         onClick={() => setStep(1)}
//         style={{
//           padding: '10px 20px',
//           backgroundColor: '#007bff',
//           color: '#fff',
//           border: 'none',
//           borderRadius: '5px',
//           cursor: 'pointer'
//         }}
//       >
//         Search
//       </button>
//     </div>
//   );

//   // Step 1: Выбор типа услуги
//   const renderStep1 = () => (
//     <div>
//       <h2>What type of service are you looking for with {specialist}?</h2>
//       <button onClick={() => { setServiceType('Repair a fault'); setStep(2); }}>Repair a fault</button>
//       <button onClick={() => { setServiceType('Clear a blockage'); setStep(2); }}>Clear a blockage</button>
//       <button onClick={() => { setServiceType('Installation / replacement'); setStep(2); }}>Installation / replacement</button>
//       <button onClick={() => { setServiceType('Service or maintenance'); setStep(2); }}>Service or maintenance</button>
//       <button onClick={() => { setServiceType('I just want a local specialist'); setStep(2); }}>I just want a local specialist</button>
//     </div>
//   );

//   // Step 2: Выбор типа неисправности
//   const renderStep2 = () => (
//     <div className='otions'>
//       <h2>Where is the fault?</h2>
//       <button onClick={() => { setFaultType('Toilet, sink or drainage system'); setStep(3); }}>Toilet, sink or drainage system</button>
//       <button onClick={() => { setFaultType('Gas appliance'); setStep(3); }}>Gas appliance</button>
//       <button onClick={() => { setFaultType('Hot water system'); setStep(3); }}>Hot water system</button>
//       <button onClick={() => { setFaultType('Tapware or tap fitting'); setStep(3); }}>Tapware or tap fitting</button>
//       <button onClick={() => { setFaultType('Cooling system'); setStep(3); }}>Cooling system</button>
//       <button onClick={() => { setFaultType('Heating system'); setStep(3); }}>Heating system</button>
//       <button onClick={() => { setFaultType('Roofing or guttering'); setStep(3); }}>Roofing or guttering</button>
//       <button onClick={() => { setFaultType('Fire sprinkler system'); setStep(3); }}>Fire sprinkler system</button>
//       <button onClick={() => { setFaultType('I\'m not sure / something else'); setStep(3); }}>I'm not sure / something else</button>
//     </div>
//   );

//   // Step 3: Подтверждение и отправка
//   const renderStep3 = () => (
//     <div>
//       <h2>Summary</h2>
//       <img style={{width:300, height:300}} src='https://dpo.online/wp-content/uploads/2017/02/123555.jpg' alt="" />
//       <p><strong>Specialist:</strong> {specialist}</p>
//       <p><strong>Location:</strong> {location}</p>
//       <p><strong>Service Type:</strong> {serviceType}</p>
//       <p><strong>Fault Type:</strong> {faultType}</p>
//       <button onClick={handleSearch}>Find Specialist</button>
//     </div>
//   );

//   // Step 4: Результаты поиска специалистов
//   const renderStep4 = () => (
//     <div>
//       <h2>Specialists Found</h2>
//       <div className="cards">
//       {results.length > 0 ? (
//         results.map((specialist) => (
//           <div key={specialist.id} className="specialist-card">
//             <h3>{specialist.name}</h3>
//             <p><strong>Specialization:</strong> {specialist.specialization}</p>
//             <p><strong>Location:</strong> {specialist.location}</p>
//           </div>
//         ))
//       ) : (
//         <p>No specialists found.</p>
//       )}
//       </div>
//     </div>
//   );

//   // Условное отображение шагов
//   const renderCurrentStep = () => {
//     switch (step) {
//       case 0:
//         return renderStep0();
//       case 1:
//         return renderStep1();
//       case 2:
//         return renderStep2();
//       case 3:
//         return renderStep3();
//       case 4:
//         return renderStep4();
//       default:
//         return null;
//     }
//   };

//   return (
//     <div>
//       <div className="homeDesign">
//         <div className="header">
//           <h3 style={{ marginLeft: 42, color: '#0056b3' }}>ExpertHub</h3>
//           <button>Login</button>
//         </div>
//         <div className="sectionOne">
//           <img style={{ width: 500, height: 600 }} src={FirstPhoto} alt="" />
//           <div className="sectionOneText">
//             <h1>ExpertHub: Transforming the Labor Market in Kyrgyzstan</h1>
//             <p>ExpertHub is revolutionizing the labor market in Kyrgyzstan by connecting skilled professionals with those seeking reliable services. We provide a platform for connecting those who need work done with those who know how to do it.</p>
//           </div>
//         </div>
//       </div>
//       <div className="step-form-container">
//         {renderCurrentStep()}
//       </div>
//       <img style={{ width: 1400, height: 700 }} src={SecondPhoto} alt="" />
//     </div>
//   );
// };

// export default StepForm;

import React, { useState } from 'react';
import "./home.css";
import FirstPhoto from '../../img/Снимок экрана 2024-09-15 в 13.23.06.png';
import SecondPhoto from "../../img/Снимок экрана 2024-09-15 в 15.29.23.png";
// import { VscAccount } from "react-icons/vsc";

const StepForm = () => {
  const [step, setStep] = useState(0);  // Начало с шага 0
  const [specialist, setSpecialist] = useState(''); // Новое состояние для специалиста
  const [location, setLocation] = useState('');  // Новое состояние для местоположения
  const [serviceType, setServiceType] = useState('');
  const [faultType, setFaultType] = useState('');
  const [results, setResults] = useState([]);  // Новое состояние для результатов поиска

  // Placeholder for specialists data
  const fetchSpecialists = () => {
    // Simulate fetching data
    return [
      // { id: 1, name: 'John Doe', specialization: specialist, location: location },
      { id: 2, name: 'Marat Nazarbaev', specialization: specialist, location: location, img: 'https://dpo.online/wp-content/uploads/2017/02/123555.jpg' },
      // Add more mock specialists as needed
    ];
  };

  const handleSearch = () => {
    // Simulate searching for specialists
    const specialists = fetchSpecialists();
    setResults(specialists);
    setStep(4);  // Go to the results step
  };

  const handleCall = (specialist) => {
    // Implement call functionality here
    alert(`Calling ${specialist.name}`);
  };

  // Step 0: Поисковик специалиста
  const renderStep0 = () => (
    <div>
      <h2>Find a specialist near you</h2>
      <input
        type="text"
        placeholder="Enter type of specialist (e.g., plumber)"
        value={specialist}
        onChange={(e) => setSpecialist(e.target.value)}
        style={{
          padding: '10px',
          fontSize: '16px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          width: '300px',
          marginBottom: '10px'
        }}
      />
      <input
        type="text"
        placeholder="Enter your ZIP code or town"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        style={{
          padding: '10px',
          fontSize: '16px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          width: '300px',
          marginBottom: '10px'
        }}
      />
      <button
        onClick={() => setStep(1)}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Search
      </button>
    </div>
  );

  // Step 1: Выбор типа услуги
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

  // Step 2: Выбор типа неисправности
  const renderStep2 = () => (
    <div className='otions'>
      <h2>Where is the fault?</h2>
      <button onClick={() => { setFaultType('Toilet, sink or drainage system'); setStep(3); }}>Toilet, sink or drainage system</button>
      <button onClick={() => { setFaultType('Gas appliance'); setStep(3); }}>Gas appliance</button>
      <button onClick={() => { setFaultType('Hot water system'); setStep(3); }}>Hot water system</button>
      <button onClick={() => { setFaultType('Tapware or tap fitting'); setStep(3); }}>Tapware or tap fitting</button>
      <button onClick={() => { setFaultType('Cooling system'); setStep(3); }}>Cooling system</button>
      <button onClick={() => { setFaultType('Heating system'); setStep(3); }}>Heating system</button>
      <button onClick={() => { setFaultType('Roofing or guttering'); setStep(3); }}>Roofing or guttering</button>
      <button onClick={() => { setFaultType('Fire sprinkler system'); setStep(3); }}>Fire sprinkler system</button>
      <button onClick={() => { setFaultType('I\'m not sure / something else'); setStep(3); }}>I'm not sure / something else</button>
    </div>
  );

  // Step 3: Подтверждение и отправка
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

  // Step 4: Результаты поиска специалистов
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
              <button onClick={() => handleCall(specialist)}>Call</button> {/* Call button */}
            </div>
          ))
        ) : (
          <p>No specialists found.</p>
        )}
      </div>
    </div>
  );

  // Условное отображение шагов
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
          <h3 style={{ marginLeft: 42, color: '#0056b3' }}>ExpertHub</h3>
          <button>Login</button>
        </div>
        <div className="sectionOne">
          <img style={{ width: 500, height: 600 }} src={FirstPhoto} alt="" />
          <div className="sectionOneText">
            <h1>ExpertHub: Transforming the Labor Market in Kyrgyzstan</h1>
            <p>ExpertHub is revolutionizing the labor market in Kyrgyzstan by connecting skilled professionals with those seeking reliable services. We provide a platform for connecting those who need work done with those who know how to do it.</p>
          </div>
        </div>
      </div>
      <div className="step-form-container">
        {renderCurrentStep()}
      </div>
      <img style={{ width: 1400, height: 700 }} src={SecondPhoto} alt="" />
    </div>
  );
};

export default StepForm;
