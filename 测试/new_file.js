"use strict"
class Employee
{
	constructor(id,firstName,lastName,emailAddress,officeNumber,position) {
	    this._id=id;
		this._firstName= firstName;
		this._lastName= lastName;
		this._emailAddress=emailAddress;
		this._phoneNumber= officeNumber;
		this._position= position;
		this._qualifications= [];
	}
	get id(){ return this._id}
}