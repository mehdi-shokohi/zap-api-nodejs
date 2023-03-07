/* Zed Attack Proxy (ZAP) and its related class files.
 *
 * ZAP is an HTTP/HTTPS proxy for assessing web application security.
 *
 * Copyright 2023 the ZAP development team
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


'use strict';

/**
 * This file was automatically generated.
 */
function Users(clientApi) {
  this.api = clientApi;
}

/**
 * Gets a list of users that belong to the context with the given ID, or all users if none provided.
 * @param {string} contextid - The Context ID
 **/
Users.prototype.usersList = function (args, callback) {
  const params = {};
  if (args.contextid && args.contextid !== null) {
    params['contextId'] = args.contextid;
  }
  if (typeof callback === 'function') {
    this.api.request('/users/view/usersList/', params, callback);
    return;
  }
  return this.api.requestPromise('/users/view/usersList/', params);
};

/**
 * Gets the data of the user with the given ID that belongs to the context with the given ID.
 * @param {string} contextid - The Context ID
 * @param {string} userid - The User ID
 **/
Users.prototype.getUserById = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/users/view/getUserById/', {'contextId': args.contextid, 'userId': args.userid}, callback);
    return;
  }
  return this.api.requestPromise('/users/view/getUserById/', {'contextId': args.contextid, 'userId': args.userid});
};

/**
 * Gets the configuration parameters for the credentials of the context with the given ID.
 * @param {string} contextid - The Context ID
 **/
Users.prototype.getAuthenticationCredentialsConfigParams = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/users/view/getAuthenticationCredentialsConfigParams/', {'contextId': args.contextid}, callback);
    return;
  }
  return this.api.requestPromise('/users/view/getAuthenticationCredentialsConfigParams/', {'contextId': args.contextid});
};

/**
 * Gets the authentication credentials of the user with given ID that belongs to the context with the given ID.
 * @param {string} contextid - The Context ID
 * @param {string} userid - the User ID
 **/
Users.prototype.getAuthenticationCredentials = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/users/view/getAuthenticationCredentials/', {'contextId': args.contextid, 'userId': args.userid}, callback);
    return;
  }
  return this.api.requestPromise('/users/view/getAuthenticationCredentials/', {'contextId': args.contextid, 'userId': args.userid});
};

/**
 * Gets the authentication state information for the user identified by the Context and User IDs.
 * @param {string} contextid - The Context ID
 * @param {string} userid - The User ID
 **/
Users.prototype.getAuthenticationState = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/users/view/getAuthenticationState/', {'contextId': args.contextid, 'userId': args.userid}, callback);
    return;
  }
  return this.api.requestPromise('/users/view/getAuthenticationState/', {'contextId': args.contextid, 'userId': args.userid});
};

/**
 * Gets the authentication session information for the user identified by the Context and User IDs, e.g. cookies and realm credentials.
 * @param {string} contextid - The Context ID
 * @param {string} userid - The User ID
 **/
Users.prototype.getAuthenticationSession = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/users/view/getAuthenticationSession/', {'contextId': args.contextid, 'userId': args.userid}, callback);
    return;
  }
  return this.api.requestPromise('/users/view/getAuthenticationSession/', {'contextId': args.contextid, 'userId': args.userid});
};

/**
 * Creates a new user with the given name for the context with the given ID.
 * @param {string} contextid - The Context ID
 * @param {string} name
 **/
Users.prototype.newUser = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/users/action/newUser/', {'contextId': args.contextid, 'name': args.name}, callback);
    return;
  }
  return this.api.requestPromise('/users/action/newUser/', {'contextId': args.contextid, 'name': args.name});
};

/**
 * Removes the user with the given ID that belongs to the context with the given ID.
 * @param {string} contextid - The Context ID
 * @param {string} userid - The User ID
 **/
Users.prototype.removeUser = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/users/action/removeUser/', {'contextId': args.contextid, 'userId': args.userid}, callback);
    return;
  }
  return this.api.requestPromise('/users/action/removeUser/', {'contextId': args.contextid, 'userId': args.userid});
};

/**
 * Sets whether or not the user, with the given ID that belongs to the context with the given ID, should be enabled.
 * @param {string} contextid - The Context ID
 * @param {string} userid - The User ID
 * @param {string} enabled
 **/
Users.prototype.setUserEnabled = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/users/action/setUserEnabled/', {'contextId': args.contextid, 'userId': args.userid, 'enabled': args.enabled}, callback);
    return;
  }
  return this.api.requestPromise('/users/action/setUserEnabled/', {'contextId': args.contextid, 'userId': args.userid, 'enabled': args.enabled});
};

/**
 * Renames the user with the given ID that belongs to the context with the given ID.
 * @param {string} contextid - The Context ID
 * @param {string} userid - The User ID
 * @param {string} name
 **/
Users.prototype.setUserName = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/users/action/setUserName/', {'contextId': args.contextid, 'userId': args.userid, 'name': args.name}, callback);
    return;
  }
  return this.api.requestPromise('/users/action/setUserName/', {'contextId': args.contextid, 'userId': args.userid, 'name': args.name});
};

/**
 * Sets the authentication credentials for the user with the given ID that belongs to the context with the given ID.
 * @param {string} contextid - The Context ID
 * @param {string} userid - The User ID
 * @param {string} authcredentialsconfigparams
 **/
Users.prototype.setAuthenticationCredentials = function (args, callback) {
  const params = {'contextId': args.contextid, 'userId': args.userid};
  if (args.authcredentialsconfigparams && args.authcredentialsconfigparams !== null) {
    params['authCredentialsConfigParams'] = args.authcredentialsconfigparams;
  }
  if (typeof callback === 'function') {
    this.api.request('/users/action/setAuthenticationCredentials/', params, callback);
    return;
  }
  return this.api.requestPromise('/users/action/setAuthenticationCredentials/', params);
};

Users.prototype.authenticateAsUser = function (contextid, userid,  callback) {
  const params = {'contextId' : contextid, 'userId' : userid};
  
  
  if (typeof callback === 'function') {
    this.api.request('/users/action/authenticateAsUser/', params, callback);
    return;
  }
  return this.api.requestPromise('/users/action/authenticateAsUser/', params);
};



Users.prototype.getAuthenticationSession = function (contextid, userid,  callback) {
  const params = {'contextId' : contextid, 'userId' : userid};
  
  
  if (typeof callback === 'function') {
    this.api.request('/users/action/getAuthenticationSession/', params, callback);
    return;
  }
  return this.api.requestPromise('/users/view/getAuthenticationSession/', params);
};
module.exports = Users;
