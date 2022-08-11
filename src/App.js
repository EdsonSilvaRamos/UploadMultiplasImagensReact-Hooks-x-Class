import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ImageUploadPreviewComponent from './ImageUploadPreviewComponent'
import HookImageUpload from './HookImageUpload'
 
function App() {  
     
  return (  
    <div className="App"> 
      {/* <ImageUploadPreviewComponent/>  */}
      <HookImageUpload />
    </div>  
  );  
}  
 
export default App;