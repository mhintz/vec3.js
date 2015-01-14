(function(global) {
  'use strict';

  function Vec3(x, y, z) {
    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;
  }

  Vec3.fromVals = function(x, y, z) {
    return new Vec3(x, y, z);
  };

  Vec3.fromScalar = function(s) {
    return new Vec3(s, s, s);
  };

  Vec3.zeroVec = function() {
    return new Vec3(0, 0, 0);
  };

  Vec3.fromArray = function(a) {
    return new Vec3(a[0], a[1], a[2]);
  };

  Vec3.prototype = {

    add: function(v) {
      this.x += v.x;
      this.y += v.y;
      this.z += v.z;
      return this;
    },

    sub: function(v) {
      this.x -= v.x;
      this.y -= v.y;
      this.z -= v.z;
      return this;
    },

    scale: function(s) {
      this.x *= s;
      this.y *= s;
      this.z *= s;
      return this;
    },

    negate: function() {
      this.x *= -1;
      this.y *= -1;
      this.z *= -1;
    },

    zero: function() {
      this.x = this.y = this.z = 0;
    },

    normalize: function() {
      var m = this.mag();
      this.x /= m;
      this.y /= m;
      this.z /= m;
      return this;
    },

    mag: function() {
      var x = this.x,
          y = this.y,
          z = this.z;
      return Math.sqrt(x * x + y * y + z * z);
    },

    dot: function(v) {
      return this.x * v.x + this.y * v.y + this.z * v.z;
    },

    negated: function() {
      return new Vec3(- this.x, - this.y, - this.z);
    },

    normalized: function() {
      var m = this.mag();
      return new Vec3(this.x / m, this.y / m, this.z / m);
    }

  };

  Vec3.sum = function(va, vb) {
    return new Vec3(va.x + vb.x, va.y + vb.y, va.z + vb.z);
  };

  Vec3.diff = function(va, vb) {
    return new Vec3(va.x - vb.x, va.y - vb.y, va.z + vb.z);
  };

  // static dot product a * b
  Vec3.dotProduct = function(va, vb) {
    return va.x * vb.x + va.y * vb.y + va.z * vb.z;
  };

  // cross product a X b
  Vec3.crossProduct = function(va, vb) {
    var ax = va.x, ay = va.y, az = va.z,
        bx = vb.x, by = vb.y, bz = vb.z;
    return new Vec3(ay * bz - az * by, az * bx - ax * bz, ax * by - ay * bx);
  };

  // distance from a to b
  Vec3.dist = function(va, vb) {
    var dx = vb.x - va.x,
        dy = vb.y - va.y,
        dz = vb.z - va.z;
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
  };

  if (typeof exports === 'object') {
    module.exports = Vec3;
  } else if (typeof global.define === 'function' && global.define.amd) {
    define([], function(){ return Vec3; });
  } else {
    global.Vec3 = Vec3;
  }

})(this);
