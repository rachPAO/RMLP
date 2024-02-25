import React from 'react';
import { useNavigate } from 'react-router-dom';


// Component for the main page
//export default function Main() {
//   return (
//     <div>
//       <h1>Welcome!</h1>
//       <p>This is the main page.</p>
//         <button>Write a Review!</button>
//     </div>
//   );
//}

export default function LoginLayout() {
  
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/Form`; 
      navigate(path);
    }
    
    return (
       <div className="app flex-row align-items-center">
        <container> 
            <button color="primary" className="px-4"
              onClick={routeChange}
                >
                Write a review!
              </button>
         </container>
      </div>
    );
  }

