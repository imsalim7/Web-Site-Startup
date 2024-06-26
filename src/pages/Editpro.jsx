import React,{ useEffect } from 'react'
import "../styles/Editpro.css"
function Editpro() {
  useEffect(() => {
    // Load email-decode.min.js script
    const emailDecodeScript = document.createElement('script');
    emailDecodeScript.src = '/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js';
    emailDecodeScript.async = false;
    document.body.appendChild(emailDecodeScript);

    // Load jQuery script
    const jqueryScript = document.createElement('script');
    jqueryScript.src = 'https://code.jquery.com/jquery-1.10.2.min.js';
    jqueryScript.async = false;
    document.body.appendChild(jqueryScript);

    // Load Bootstrap script
    const bootstrapScript = document.createElement('script');
    bootstrapScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@4.5.0/dist/js/bootstrap.bundle.min.js';
    bootstrapScript.async = false;
    document.body.appendChild(bootstrapScript);

    return () => {
      // Cleanup script tags on component unmount
      document.body.removeChild(emailDecodeScript);
      document.body.removeChild(jqueryScript);
      document.body.removeChild(bootstrapScript);
    };
  }, []);
  return (
    <div className='bodyy'>

<div class="container light-style flex-grow-1 container-p-y">
        <h4 class="font-weight-bold py-3 mb-4">
            Account settings
        </h4>
        <div class="card overflow-hidden">
            <div class="row no-gutters row-bordered row-border-light">
                <div class="col-md-3 pt-0">
                    <div class="list-group list-group-flush account-settings-links">
                        <a class="list-group-item list-group-item-action active" data-toggle="list"
                            href="#account-general">Profil</a>
                        </div>
                </div>
                <div class="col-md-9">
                    <div class="tab-content">
                        <div class="tab-pane fade active show" id="account-general">
                            <div class="card-body media align-items-center">
                                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt=''
                                    class="d-block ui-w-80"/>
                                <div class="media-body ml-4">
                                    <label class="btn btn-outline-primary">
                                        Upload new photo
                                        <input type="file" class="account-settings-fileinput"/>
                                    </label> &nbsp;
                                    <button type="button" class="btn btn-default md-btn-flat">Reset</button>
                                    <div class="text-light small mt-1">Allowed JPG, GIF or PNG. Max size of 800K</div>
                                </div>
                            </div>
                            <hr class="border-light m-0"/>
                            <div class="card-body">
                                <div class="form-group">
                                    <label class="form-label">Current Username</label>
                                    <input type="text" class="form-control mb-1" />
                                </div>
                                <div class="form-group">
                                    <label class="form-label">New Username</label>
                                    <input type="text" class="form-control mb-1" />
                                </div>
                                <div class="form-group">
                                    <label class="form-label">E-mail</label>
                                    <input type="text" class="form-control mb-1" />
                                    
                                </div>
                                <div class="form-group">
                                    <label class="form-label">Current password</label>
                                    <input type="password" class="form-control"/>
                                </div>
                                <div class="form-group">
                                    <label class="form-label">New password</label>
                                    <input type="password" class="form-control"/>
                                </div>
                                <div class="form-group">
                                    <label class="form-label">Repeat new password</label>
                                    <input type="password" class="form-control"/>
                                </div>
                            </div>
                        </div>
                        
                        
                        
                        
                       
                    </div>
                </div>
            </div>
        </div>
        <div class="text-right mt-3">
            <button type="button" class="btn1 btn-primary">Save changes</button>&nbsp;
            <button type="button" class="btn1 btn-default">Cancel</button>
        </div>
    </div>
    </div>
  )
}

export default Editpro