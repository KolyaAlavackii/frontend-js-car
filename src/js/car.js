'use strict';

 var car = {
    color: "white",
    dours: 4,
    speed: 0,
    defaultSpeed: 60,
    maxSpeed: 100,
    seats: 4,
    passengers: [],
    put: function() {
        if (this.passengers.length < this.seats) {
            this.passengers.push(true);
        }
        else if (this.passengers.length > this.seats) {
            this.passengers.pop();
        }
    },

    land: function() {
        this.passengers.pop();
        if (this.passengers.length === 0) {
            this.speed = 0;
        }
    },

    drive: function(newSpeed) {
        this.speed = newSpeed;
        if (this.speed === undefined) {
            this.speed = this.defaultSpeed;
        }
        else if (this.speed > this.maxSpeed) {
            this.speed = this.maxSpeed;
        }
        else if (this.passengers.length === 0) {
            this.speed = 0;
        }
    }
 };


module.exports = car;
 
        
        


