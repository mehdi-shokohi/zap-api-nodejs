'use strict';

/**
 * This file was automatically generated.
 */
function Alert(clientApi) {
  this.api = clientApi;
}

/**
 * 
 **/
 Alert.prototype.alertSummary = function (url,recurse,callback) {
     let params ={recurse:false}; 
     if (url && url!==null && url !=="") {
         params.url = url
     }
     if (recurse && recurse!==null ) {
        params.recurse = recurse
    }
  if (typeof callback === 'function') {
    this.api.request('/alert/view/alertCountsByRisk/',params ,callback);
    return;
  }
  return this.api.requestPromise('/alert/view/alertCountsByRisk/',params);
};

Alert.prototype.alertsByRisk = function (url,recurse,callback) {
    let params ={recurse:false}; 
    if (url && url!==null && url !=="") {
        params.url = url
    }
    if (recurse && recurse!==null ) {
       params.recurse = recurse
   }
 if (typeof callback === 'function') {
   this.api.request('/alert/view/alertsByRisk/',params ,callback);
   return;
 }
 return this.api.requestPromise('/alert/view/alertsByRisk/',params);
};

module.exports = Alert;