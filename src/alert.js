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
 Alert.prototype.alertSummary = function (url,callback) {
     let params ={}
     if (url && url!==null && url !=="") {
         params.url = url
     }

  if (typeof callback === 'function') {
    this.api.request('/alert/view/alertsSummary/',params ,callback);
    return;
  }
  return this.api.requestPromise('/alert/view/alertsSummary/',params);
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

Alert.prototype.alerts = function (baseurl,start,count,riskid,callback) {
    const params = {};
    if (baseurl && baseurl !== null) {
      params['baseurl'] = baseurl;
    }
    if (start && start !== null) {
      params['start'] = start;
    }
    if (count && count !== null) {
      params['count'] = count;
    }
    if (riskid && riskid !== null) {
      params['riskId'] = riskid;
    }
 if (typeof callback === 'function') {
   this.api.request('/alert/view/alerts/',params ,callback);
   return;
 }
 return this.api.requestPromise('/alert/view/alerts/',params);
};

module.exports = Alert;