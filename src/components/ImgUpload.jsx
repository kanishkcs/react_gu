import React from 'react'
import '../styles/ImgUpload.css'
import $ from 'jquery';
const ImgUpload = () => {
    const done = () =>{
        function readURL(input) {
            if (input.files) {
                var reader = new FileReader();
                reader.onload = function(e) {   
                    $('#imagePreview').css('background-image', 'url('+e.target.result +')');
                    $('#imagePreview').hide();
                    $('#imagePreview').fadeIn(650);
                   
                    
                }
                reader.readAsDataURL(input.files[0]);
            }
        }
        $("#imageUpload").change(function() {
            readURL(this);
        });
    }
  return (
    <>
   
    <div className="avatar-upload">
        <div className="avatar-edit">
            <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg" onClick={done}/>
            <label htmlFor="imageUpload"></label>
        </div>
        <div className="avatar-preview">
            <div id="imagePreview">
             
            </div>
        </div>
    </div>
        
  </>
  );
}



export default ImgUpload