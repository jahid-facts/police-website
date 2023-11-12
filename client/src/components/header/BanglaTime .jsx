import React from 'react';
import moment from 'moment';
import 'moment/locale/bn'; // Import Bengali (Bangla) locale
import 'moment-timezone'; // Import Moment.js time zone

const BanglaTime = () => {
  moment.locale('bn'); // Set locale to Bengali (Bangla)
  moment.tz.setDefault('Asia/Dhaka'); // Set time zone to Asia/Dhaka (Bangladesh)

  const formattedDate = moment().format('LLLL'); // Format date in "LLLL" format

  return (
    <div>
      <p>Current date in Bangladeshi time zone: {formattedDate}</p>
    </div>
  );
};

export default BanglaTime;


// import React from 'react';
// import moment from 'moment';
// import 'moment/locale/bn'; // Import Bengali (Bangla) locale

// const BanglaTime = () => {
//   moment.locale('bn'); // Set locale to Bengali (Bangla)

//   const currentTime = moment().format('LT'); // Format time in "LT" format

//   return (
//     <div>
//       <p>Current time in Bangla: {currentTime}</p>
//     </div>
//   );
// };

// export default BanglaTime;
