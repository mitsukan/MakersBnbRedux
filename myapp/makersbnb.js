"use strict";





function Makersbnb() {
  this.username = "";
  this._password = "";
  this._isLoggedIn = false;
}

Makersbnb.prototype.signUp = function(username, password) {
    this.username = username;
    this._password = password;

    // ghettoInsertUser(username, password);
};

Makersbnb.prototype.isSignIn = function(username, password) {
  if(this.username == username && this._password == password) {
    return this._isLoggedIn = true;
  }
  else{
    return "Username or password incorrect.";
  }
};

var ghettoBnb = new Makersbnb();
