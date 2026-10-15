var of=0,Sh=1,af=2;var Ts=1,lf=2,yr=3,ns=0,rn=1,It=2,Yt=0,Mr=1,dn=2,Eh=3,bh=4,Sl=5;var $n=100,cf=101,hf=102,uf=103,ff=104,ws=200,df=201,pf=202,mf=203,Th=204,wh=205,Io=206,gf=207,Lo=208,xf=209,_f=210,vf=211,yf=212,Mf=213,Sf=214,za=0,Ga=1,ka=2,sr=3,Va=4,Wa=5,Xa=6,qa=7,Ah=0,Ef=1,bf=2,ci=0,Do=1,Uo=2,No=3,As=4,Fo=5,Bo=6,Oo=7,ch="attached",Tf="detached",Rh=300,is=301,Rs=302,El=303,bl=304,Ho=306,jt=1e3,pi=1001,Ya=1002,Kt=1003,wf=1004;var zo=1005;var gn=1006,Tl=1007;var ss=1008;var Mn=1009,Ch=1010,Ph=1011,Sr=1012,wl=1013,hi=1014,On=1015,Zt=1016,Al=1017,Rl=1018,rs=1020,Ih=35902,Lh=35899,Dh=1021,Uh=1022,Cn=1023,gi=1026,Si=1027,Cl=1028,Pl=1029,os=1030,Il=1031;var Ll=1033,Go=33776,ko=33777,Vo=33778,Wo=33779,Dl=35840,Ul=35841,Nl=35842,Fl=35843,Bl=36196,Ol=37492,Hl=37496,zl=37488,Gl=37489,Xo=37490,kl=37491,Vl=37808,Wl=37809,Xl=37810,ql=37811,Yl=37812,Zl=37813,$l=37814,Jl=37815,Kl=37816,Ql=37817,jl=37818,ec=37819,tc=37820,nc=37821,ic=36492,sc=36494,rc=36495,oc=36283,ac=36284,qo=36285,lc=36286;var Kr=2300,Za=2301,Oa=2302,hh=2303,uh=2400,fh=2401,dh=2402;var Af=3200;var Yo=0,Rf=1,Gi="",Ut="srgb",Qr="srgb-linear",jr="linear",At="srgb";var Ha=7680;var Cf=519,Pf=512,If=513,Lf=514,cc=515,Df=516,Uf=517,hc=518,Nf=519,Nh=35044;var Fh="300 es",ri=2e3,rr=2001;function Xd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function qd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function eo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ff(){let i=eo("canvas");return i.style.display="block",i}var _u={},or=null;function to(...i){let e="THREE."+i.shift();or?or("log",e,...i):console.log(e,...i)}function Bf(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function nt(...i){i=Bf(i);let e="THREE."+i.shift();if(or)or("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function lt(...i){i=Bf(i);let e="THREE."+i.shift();if(or)or("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function _s(...i){let e=i.join(" ");e in _u||(_u[e]=!0,nt(...i))}function Of(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Hf={[za]:Ga,[ka]:Xa,[Va]:qa,[sr]:Wa,[Ga]:za,[Xa]:ka,[qa]:Va,[Wa]:sr},xi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},_n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vu=1234567,Yr=Math.PI/180,vs=180/Math.PI;function oi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_n[i&255]+_n[i>>8&255]+_n[i>>16&255]+_n[i>>24&255]+"-"+_n[e&255]+_n[e>>8&255]+"-"+_n[e>>16&15|64]+_n[e>>24&255]+"-"+_n[t&63|128]+_n[t>>8&255]+"-"+_n[t>>16&255]+_n[t>>24&255]+_n[n&255]+_n[n>>8&255]+_n[n>>16&255]+_n[n>>24&255]).toLowerCase()}function St(i,e,t){return Math.max(e,Math.min(t,i))}function Bh(i,e){return(i%e+e)%e}function Yd(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Zd(i,e,t){return i!==e?(t-i)/(e-i):0}function Zr(i,e,t){return(1-t)*i+t*e}function $d(i,e,t,n){return Zr(i,e,1-Math.exp(-t*n))}function Jd(i,e=1){return e-Math.abs(Bh(i,e*2)-e)}function Kd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Qd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function jd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function ep(i,e){return i+Math.random()*(e-i)}function tp(i){return i*(.5-Math.random())}function np(i){i!==void 0&&(vu=i);let e=vu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ip(i){return i*Yr}function sp(i){return i*vs}function rp(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function op(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ap(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function lp(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),u=o((e-n)/2),f=r((n-e)/2),m=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*d,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*m,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*m,a*c);break;case"ZYZ":i.set(l*m,l*f,a*h,a*c);break;default:nt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function si(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Dt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Oh={DEG2RAD:Yr,RAD2DEG:vs,generateUUID:oi,clamp:St,euclideanModulo:Bh,mapLinear:Yd,inverseLerp:Zd,lerp:Zr,damp:$d,pingpong:Jd,smoothstep:Kd,smootherstep:Qd,randInt:jd,randFloat:ep,randFloatSpread:tp,seededRandom:np,degToRad:ip,radToDeg:sp,isPowerOfTwo:rp,ceilPowerOfTwo:op,floorPowerOfTwo:ap,setQuaternionFromProperEuler:lp,normalize:Dt,denormalize:si},Wh=class Wh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(St(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Wh.prototype.isVector2=!0;var me=Wh,fn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],m=r[o+2],x=r[o+3];if(d!==x||l!==u||c!==f||h!==m){let p=l*u+c*f+h*m+d*x;p<0&&(u=-u,f=-f,m=-m,x=-x,p=-p);let g=1-a;if(p<.9995){let y=Math.acos(p),M=Math.sin(y);g=Math.sin(g*y)/M,a=Math.sin(a*y)/M,l=l*g+u*a,c=c*g+f*a,h=h*g+m*a,d=d*g+x*a}else{l=l*g+u*a,c=c*g+f*a,h=h*g+m*a,d=d*g+x*a;let y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],m=r[o+3];return e[t]=a*m+h*d+l*f-c*u,e[t+1]=l*m+h*u+c*d-a*f,e[t+2]=c*m+h*f+a*u-l*d,e[t+3]=h*m-a*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),f=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"YZX":this._x=u*h*d+c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d-u*f*m;break;case"XZY":this._x=u*h*d-c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d+u*f*m;break;default:nt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Xh=class Xh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(St(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Nc.copy(this).projectOnVector(e),this.sub(Nc)}reflect(e){return this.sub(Nc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Xh.prototype.isVector3=!0;var N=Xh,Nc=new N,yu=new fn,qh=class qh{constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],x=s[0],p=s[3],g=s[6],y=s[1],M=s[4],_=s[7],b=s[2],S=s[5],A=s[8];return r[0]=o*x+a*y+l*b,r[3]=o*p+a*M+l*S,r[6]=o*g+a*_+l*A,r[1]=c*x+h*y+d*b,r[4]=c*p+h*M+d*S,r[7]=c*g+h*_+d*A,r[2]=u*x+f*y+m*b,r[5]=u*p+f*M+m*S,r[8]=u*g+f*_+m*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,m=t*d+n*u+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=d*x,e[1]=(s*c-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=u*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return _s("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Fc.makeScale(e,t)),this}rotate(e){return _s("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Fc.makeRotation(-e)),this}translate(e,t){return _s("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Fc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};qh.prototype.isMatrix3=!0;var ut=qh,Fc=new ut,Mu=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Su=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cp(){let i={enabled:!0,workingColorSpace:Qr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===At&&(s.r=Bi(s.r),s.g=Bi(s.g),s.b=Bi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===At&&(s.r=ir(s.r),s.g=ir(s.g),s.b=ir(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Gi?jr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return _s("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return _s("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Qr]:{primaries:e,whitePoint:n,transfer:jr,toXYZ:Mu,fromXYZ:Su,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ut},outputColorSpaceConfig:{drawingBufferColorSpace:Ut}},[Ut]:{primaries:e,whitePoint:n,transfer:At,toXYZ:Mu,fromXYZ:Su,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ut}}}),i}var Et=cp();function Bi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ir(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Hs,$a=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Hs===void 0&&(Hs=eo("canvas")),Hs.width=e.width,Hs.height=e.height;let s=Hs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Hs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=eo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Bi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Bi(t[n]/255)*255):t[n]=Bi(t[n]);return{data:t,width:e.width,height:e.height}}else return nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},hp=0,ar=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=oi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Bc(s[o].image)):r.push(Bc(s[o]))}else r=Bc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Bc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?$a.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(nt("Texture: Unable to serialize Texture."),{})}var up=0,Oc=new N,Rn=class i extends xi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=pi,s=pi,r=gn,o=ss,a=Cn,l=Mn,c=i.DEFAULT_ANISOTROPY,h=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=oi(),this.name="",this.source=new ar(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Oc).x}get height(){return this.source.getSize(Oc).y}get depth(){return this.source.getSize(Oc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){nt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){nt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jt:e.x=e.x-Math.floor(e.x);break;case pi:e.x=e.x<0?0:1;break;case Ya:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jt:e.y=e.y-Math.floor(e.y);break;case pi:e.y=e.y<0?0:1;break;case Ya:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=Rh;Rn.DEFAULT_ANISOTROPY=1;var Yh=class Yh{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],x=l[2],p=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,_=(f+1)/2,b=(g+1)/2,S=(h+u)/4,A=(d+x)/4,v=(m+p)/4;return M>_&&M>b?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=S/n,r=A/n):_>b?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=S/s,r=v/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=A/r,s=v/r),this.set(n,s,r,t),this}let y=Math.sqrt((p-m)*(p-m)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(p-m)/y,this.y=(d-x)/y,this.z=(u-h)/y,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this.w=St(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this.w=St(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(St(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Yh.prototype.isVector4=!0;var Nt=Yh,Ja=class extends xi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Rn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:gn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ar(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vt=class extends Ja{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},no=class extends Rn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ka=class extends Rn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ml=class Ml{constructor(e,t,n,s,r,o,a,l,c,h,d,u,f,m,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,d,u,f,m,x,p)}set(e,t,n,s,r,o,a,l,c,h,d,u,f,m,x,p){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=m,g[11]=x,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ml().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/zs.setFromMatrixColumn(e,0).length(),r=1/zs.setFromMatrixColumn(e,1).length(),o=1/zs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,f=o*d,m=a*h,x=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+m*c,t[5]=u-x*c,t[9]=-a*l,t[2]=x-u*c,t[6]=m+f*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,m=c*h,x=c*d;t[0]=u+x*a,t[4]=m*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-m,t[6]=x+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,m=c*h,x=c*d;t[0]=u-x*a,t[4]=-o*d,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*h,t[9]=x-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,f=o*d,m=a*h,x=a*d;t[0]=l*h,t[4]=m*c-f,t[8]=u*c+x,t[1]=l*d,t[5]=x*c+u,t[9]=f*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,f=o*c,m=a*l,x=a*c;t[0]=l*h,t[4]=x-u*d,t[8]=m*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*d+m,t[10]=u-x*d}else if(e.order==="XZY"){let u=o*l,f=o*c,m=a*l,x=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+x,t[5]=o*h,t[9]=f*d-m,t[2]=m*d-f,t[6]=a*h,t[10]=x*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fp,e,dp)}lookAt(e,t,n){let s=this.elements;return Un.subVectors(e,t),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),Zi.crossVectors(n,Un),Zi.lengthSq()===0&&(Math.abs(n.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),Zi.crossVectors(n,Un)),Zi.normalize(),la.crossVectors(Un,Zi),s[0]=Zi.x,s[4]=la.x,s[8]=Un.x,s[1]=Zi.y,s[5]=la.y,s[9]=Un.y,s[2]=Zi.z,s[6]=la.z,s[10]=Un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],x=n[6],p=n[10],g=n[14],y=n[3],M=n[7],_=n[11],b=n[15],S=s[0],A=s[4],v=s[8],T=s[12],R=s[1],P=s[5],U=s[9],O=s[13],F=s[2],V=s[6],k=s[10],te=s[14],L=s[3],G=s[7],X=s[11],j=s[15];return r[0]=o*S+a*R+l*F+c*L,r[4]=o*A+a*P+l*V+c*G,r[8]=o*v+a*U+l*k+c*X,r[12]=o*T+a*O+l*te+c*j,r[1]=h*S+d*R+u*F+f*L,r[5]=h*A+d*P+u*V+f*G,r[9]=h*v+d*U+u*k+f*X,r[13]=h*T+d*O+u*te+f*j,r[2]=m*S+x*R+p*F+g*L,r[6]=m*A+x*P+p*V+g*G,r[10]=m*v+x*U+p*k+g*X,r[14]=m*T+x*O+p*te+g*j,r[3]=y*S+M*R+_*F+b*L,r[7]=y*A+M*P+_*V+b*G,r[11]=y*v+M*U+_*k+b*X,r[15]=y*T+M*O+_*te+b*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],m=e[3],x=e[7],p=e[11],g=e[15],y=l*f-c*u,M=a*f-c*d,_=a*u-l*d,b=o*f-c*h,S=o*u-l*h,A=o*d-a*h;return t*(x*y-p*M+g*_)-n*(m*y-p*b+g*S)+s*(m*M-x*b+g*A)-r*(m*_-x*S+p*A)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],m=e[12],x=e[13],p=e[14],g=e[15],y=t*a-n*o,M=t*l-s*o,_=t*c-r*o,b=n*l-s*a,S=n*c-r*a,A=s*c-r*l,v=h*x-d*m,T=h*p-u*m,R=h*g-f*m,P=d*p-u*x,U=d*g-f*x,O=u*g-f*p,F=y*O-M*U+_*P+b*R-S*T+A*v;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/F;return e[0]=(a*O-l*U+c*P)*V,e[1]=(s*U-n*O-r*P)*V,e[2]=(x*A-p*S+g*b)*V,e[3]=(u*S-d*A-f*b)*V,e[4]=(l*R-o*O-c*T)*V,e[5]=(t*O-s*R+r*T)*V,e[6]=(p*_-m*A-g*M)*V,e[7]=(h*A-u*_+f*M)*V,e[8]=(o*U-a*R+c*v)*V,e[9]=(n*R-t*U-r*v)*V,e[10]=(m*S-x*_+g*y)*V,e[11]=(d*_-h*S-f*y)*V,e[12]=(a*T-o*P-l*v)*V,e[13]=(t*P-n*T+s*v)*V,e[14]=(x*M-m*b-p*y)*V,e[15]=(h*b-d*M+u*y)*V,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,m=r*d,x=o*h,p=o*d,g=a*d,y=l*c,M=l*h,_=l*d,b=n.x,S=n.y,A=n.z;return s[0]=(1-(x+g))*b,s[1]=(f+_)*b,s[2]=(m-M)*b,s[3]=0,s[4]=(f-_)*S,s[5]=(1-(u+g))*S,s[6]=(p+y)*S,s[7]=0,s[8]=(m+M)*A,s[9]=(p-y)*A,s[10]=(1-(u+x))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=zs.set(s[0],s[1],s[2]).length(),a=zs.set(s[4],s[5],s[6]).length(),l=zs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ei.copy(this);let c=1/o,h=1/a,d=1/l;return ei.elements[0]*=c,ei.elements[1]*=c,ei.elements[2]*=c,ei.elements[4]*=h,ei.elements[5]*=h,ei.elements[6]*=h,ei.elements[8]*=d,ei.elements[9]*=d,ei.elements[10]*=d,t.setFromRotationMatrix(ei),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=ri,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),m,x;if(l)m=r/(o-r),x=o*r/(o-r);else if(a===ri)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===rr)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=ri,l=!1){let c=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),f=-(n+s)/(n-s),m,x;if(l)m=1/(o-r),x=o/(o-r);else if(a===ri)m=-2/(o-r),x=-(o+r)/(o-r);else if(a===rr)m=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Ml.prototype.isMatrix4=!0;var et=Ml,zs=new N,ei=new et,fp=new N(0,0,0),dp=new N(1,1,1),Zi=new N,la=new N,Un=new N,Eu=new et,bu=new fn,Wn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(St(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-St(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(St(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-St(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(St(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-St(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Eu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Eu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bu.setFromEuler(this),this.setFromQuaternion(bu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Wn.DEFAULT_ORDER="XYZ";var io=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},pp=0,Tu=new N,Gs=new fn,Ii=new et,ca=new N,Nr=new N,mp=new N,gp=new fn,wu=new N(1,0,0),Au=new N(0,1,0),Ru=new N(0,0,1),Cu={type:"added"},xp={type:"removed"},ks={type:"childadded",child:null},Hc={type:"childremoved",child:null},Pt=class i extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new N,t=new Wn,n=new fn,s=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new et},normalMatrix:{value:new ut}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new io,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.multiply(Gs),this}rotateOnWorldAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.premultiply(Gs),this}rotateX(e){return this.rotateOnAxis(wu,e)}rotateY(e){return this.rotateOnAxis(Au,e)}rotateZ(e){return this.rotateOnAxis(Ru,e)}translateOnAxis(e,t){return Tu.copy(e).applyQuaternion(this.quaternion),this.position.add(Tu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wu,e)}translateY(e){return this.translateOnAxis(Au,e)}translateZ(e){return this.translateOnAxis(Ru,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ca.copy(e):ca.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(Nr,ca,this.up):Ii.lookAt(ca,Nr,this.up),this.quaternion.setFromRotationMatrix(Ii),s&&(Ii.extractRotation(s.matrixWorld),Gs.setFromRotationMatrix(Ii),this.quaternion.premultiply(Gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cu),ks.child=e,this.dispatchEvent(ks),ks.child=null):lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xp),Hc.child=e,this.dispatchEvent(Hc),Hc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cu),ks.child=e,this.dispatchEvent(ks),ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,e,mp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,gp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Pt.DEFAULT_UP=new N(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ze=class extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}},_p={type:"move"},lr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,n),g=this._getHandJoint(c,x);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_p)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ze;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},zf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},ha={h:0,s:0,l:0};function zc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var we=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Et.workingColorSpace){return this.r=e,this.g=t,this.b=n,Et.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Et.workingColorSpace){if(e=Bh(e,1),t=St(t,0,1),n=St(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=zc(o,r,e+1/3),this.g=zc(o,r,e),this.b=zc(o,r,e-1/3)}return Et.colorSpaceToWorking(this,s),this}setStyle(e,t=Ut){function n(r){r!==void 0&&parseFloat(r)<1&&nt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:nt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);nt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){let n=zf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):nt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}copyLinearToSRGB(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return Et.workingToColorSpace(vn.copy(this),e),Math.round(St(vn.r*255,0,255))*65536+Math.round(St(vn.g*255,0,255))*256+Math.round(St(vn.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Et.workingColorSpace){Et.workingToColorSpace(vn.copy(this),t);let n=vn.r,s=vn.g,r=vn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Et.workingColorSpace){return Et.workingToColorSpace(vn.copy(this),t),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=Ut){Et.workingToColorSpace(vn.copy(this),e);let t=vn.r,n=vn.g,s=vn.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL($i),this.setHSL($i.h+e,$i.s+t,$i.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($i),e.getHSL(ha);let n=Zr($i.h,ha.h,t),s=Zr($i.s,ha.s,t),r=Zr($i.l,ha.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},vn=new we;we.NAMES=zf;var so=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new we(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ys=class extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ti=new N,Li=new N,Gc=new N,Di=new N,Vs=new N,Ws=new N,Pu=new N,kc=new N,Vc=new N,Wc=new N,Xc=new Nt,qc=new Nt,Yc=new Nt,Fi=class i{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ti.subVectors(e,t),s.cross(ti);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ti.subVectors(s,t),Li.subVectors(n,t),Gc.subVectors(e,t);let o=ti.dot(ti),a=ti.dot(Li),l=ti.dot(Gc),c=Li.dot(Li),h=Li.dot(Gc),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,m=(o*h-a*l)*u;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Di.x),l.addScaledVector(o,Di.y),l.addScaledVector(a,Di.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Xc.setScalar(0),qc.setScalar(0),Yc.setScalar(0),Xc.fromBufferAttribute(e,t),qc.fromBufferAttribute(e,n),Yc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Xc,r.x),o.addScaledVector(qc,r.y),o.addScaledVector(Yc,r.z),o}static isFrontFacing(e,t,n,s){return ti.subVectors(n,t),Li.subVectors(e,t),ti.cross(Li).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ti.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),ti.cross(Li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Vs.subVectors(s,n),Ws.subVectors(r,n),kc.subVectors(e,n);let l=Vs.dot(kc),c=Ws.dot(kc);if(l<=0&&c<=0)return t.copy(n);Vc.subVectors(e,s);let h=Vs.dot(Vc),d=Ws.dot(Vc);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Vs,o);Wc.subVectors(e,r);let f=Vs.dot(Wc),m=Ws.dot(Wc);if(m>=0&&f<=m)return t.copy(r);let x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(Ws,a);let p=h*m-f*d;if(p<=0&&d-h>=0&&f-m>=0)return Pu.subVectors(r,s),a=(d-h)/(d-h+(f-m)),t.copy(s).addScaledVector(Pu,a);let g=1/(p+x+u);return o=x*g,a=u*g,t.copy(n).addScaledVector(Vs,o).addScaledVector(Ws,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ai=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ni):ni.fromBufferAttribute(r,o),ni.applyMatrix4(e.matrixWorld),this.expandByPoint(ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ua.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ua.copy(n.boundingBox)),ua.applyMatrix4(e.matrixWorld),this.union(ua)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ni),ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fr),fa.subVectors(this.max,Fr),Xs.subVectors(e.a,Fr),qs.subVectors(e.b,Fr),Ys.subVectors(e.c,Fr),Ji.subVectors(qs,Xs),Ki.subVectors(Ys,qs),ps.subVectors(Xs,Ys);let t=[0,-Ji.z,Ji.y,0,-Ki.z,Ki.y,0,-ps.z,ps.y,Ji.z,0,-Ji.x,Ki.z,0,-Ki.x,ps.z,0,-ps.x,-Ji.y,Ji.x,0,-Ki.y,Ki.x,0,-ps.y,ps.x,0];return!Zc(t,Xs,qs,Ys,fa)||(t=[1,0,0,0,1,0,0,0,1],!Zc(t,Xs,qs,Ys,fa))?!1:(da.crossVectors(Ji,Ki),t=[da.x,da.y,da.z],Zc(t,Xs,qs,Ys,fa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ui=[new N,new N,new N,new N,new N,new N,new N,new N],ni=new N,ua=new ai,Xs=new N,qs=new N,Ys=new N,Ji=new N,Ki=new N,ps=new N,Fr=new N,fa=new N,da=new N,ms=new N;function Zc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ms.fromArray(i,r);let a=s.x*Math.abs(ms.x)+s.y*Math.abs(ms.y)+s.z*Math.abs(ms.z),l=e.dot(ms),c=t.dot(ms),h=n.dot(ms);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Qt=new N,pa=new me,vp=0,yt=class extends xi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Nh,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)pa.fromBufferAttribute(this,t),pa.applyMatrix3(e),this.setXY(t,pa.x,pa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=si(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=si(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=si(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=si(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=si(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),s=Dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),s=Dt(s,this.array),r=Dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var ro=class extends yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var oo=class extends yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var at=class extends yt{constructor(e,t,n){super(new Float32Array(e),t,n)}},yp=new ai,Br=new N,$c=new N,Xn=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):yp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Br.subVectors(e,this.center);let t=Br.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Br,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($c.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Br.copy(e.center).add($c)),this.expandByPoint(Br.copy(e.center).sub($c))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Mp=0,Vn=new et,Jc=new Pt,Zs=new N,Nn=new ai,Or=new ai,hn=new N,Mt=class i extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xd(e)?oo:ro)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ut().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,t,n){return Vn.makeTranslation(e,t,n),this.applyMatrix4(Vn),this}scale(e,t,n){return Vn.makeScale(e,t,n),this.applyMatrix4(Vn),this}lookAt(e){return Jc.lookAt(e),Jc.updateMatrix(),this.applyMatrix4(Jc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zs).negate(),this.translate(Zs.x,Zs.y,Zs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new at(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ai);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Nn.setFromBufferAttribute(r),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){let n=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Or.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(Nn.min,Or.min),Nn.expandByPoint(hn),hn.addVectors(Nn.max,Or.max),Nn.expandByPoint(hn)):(Nn.expandByPoint(Or.min),Nn.expandByPoint(Or.max))}Nn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)hn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(hn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)hn.fromBufferAttribute(a,c),l&&(Zs.fromBufferAttribute(e,c),hn.add(Zs)),s=Math.max(s,n.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new yt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let v=0;v<n.count;v++)a[v]=new N,l[v]=new N;let c=new N,h=new N,d=new N,u=new me,f=new me,m=new me,x=new N,p=new N;function g(v,T,R){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,T),d.fromBufferAttribute(n,R),u.fromBufferAttribute(r,v),f.fromBufferAttribute(r,T),m.fromBufferAttribute(r,R),h.sub(c),d.sub(c),f.sub(u),m.sub(u);let P=1/(f.x*m.y-m.x*f.y);isFinite(P)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(P),p.copy(d).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(P),a[v].add(x),a[T].add(x),a[R].add(x),l[v].add(p),l[T].add(p),l[R].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let v=0,T=y.length;v<T;++v){let R=y[v],P=R.start,U=R.count;for(let O=P,F=P+U;O<F;O+=3)g(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let M=new N,_=new N,b=new N,S=new N;function A(v){b.fromBufferAttribute(s,v),S.copy(b);let T=a[v];M.copy(T),M.sub(b.multiplyScalar(b.dot(T))).normalize(),_.crossVectors(S,T);let P=_.dot(l[v])<0?-1:1;o.setXYZW(v,M.x,M.y,M.z,P)}for(let v=0,T=y.length;v<T;++v){let R=y[v],P=R.start,U=R.count;for(let O=P,F=P+U;O<F;O+=3)A(e.getX(O+0)),A(e.getX(O+1)),A(e.getX(O+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,h=new N,d=new N;if(e)for(let u=0,f=e.count;u<f;u+=3){let m=e.getX(u+0),x=e.getX(u+1),p=e.getX(u+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,m=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let g=0;g<h;g++)u[m++]=c[f++]}return new yt(u,h,d)}if(this.index===null)return nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ao=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Nh,this.updateRanges=[],this.version=0,this.uuid=oi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},An=new N,cr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyMatrix4(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyNormalMatrix(e),this.setXYZ(t,An.x,An.y,An.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.transformDirection(e),this.setXYZ(t,An.x,An.y,An.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=si(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Dt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=si(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=si(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=si(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=si(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),s=Dt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),s=Dt(s,this.array),r=Dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){to("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new yt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){to("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Kc=new N,Sp=new N,Ep=new ut,ii=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Kc.subVectors(n,t).cross(Sp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Kc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ep.getNormalMatrix(e),s=this.coplanarPoint(Kc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},bp=0,qn=class extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=oi(),this.name="",this.type="Material",this.blending=Mr,this.side=ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Th,this.blendDst=wh,this.blendEquation=$n,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ha,this.stencilZFail=Ha,this.stencilZPass=Ha,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){nt(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){nt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new we().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new ii().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new me().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new me().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},hr=class extends qn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},$s,Hr=new N,Js=new N,Ks=new N,Qs=new me,zr=new me,Gf=new et,ma=new N,Gr=new N,ga=new N,Iu=new me,Qc=new me,Lu=new me,lo=class extends Pt{constructor(e=new hr){if(super(),this.isSprite=!0,this.type="Sprite",$s===void 0){$s=new Mt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ao(t,5);$s.setIndex([0,1,2,0,2,3]),$s.setAttribute("position",new cr(n,3,0,!1)),$s.setAttribute("uv",new cr(n,2,3,!1))}this.geometry=$s,this.material=e,this.center=new me(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&lt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Js.setFromMatrixScale(this.matrixWorld),Gf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ks.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Js.multiplyScalar(-Ks.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;xa(ma.set(-.5,-.5,0),Ks,o,Js,s,r),xa(Gr.set(.5,-.5,0),Ks,o,Js,s,r),xa(ga.set(.5,.5,0),Ks,o,Js,s,r),Iu.set(0,0),Qc.set(1,0),Lu.set(1,1);let a=e.ray.intersectTriangle(ma,Gr,ga,!1,Hr);if(a===null&&(xa(Gr.set(-.5,.5,0),Ks,o,Js,s,r),Qc.set(0,1),a=e.ray.intersectTriangle(ma,ga,Gr,!1,Hr),a===null))return;let l=e.ray.origin.distanceTo(Hr);l<e.near||l>e.far||t.push({distance:l,point:Hr.clone(),uv:Fi.getInterpolation(Hr,ma,Gr,ga,Iu,Qc,Lu,new me),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function xa(i,e,t,n,s,r){Qs.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(zr.x=r*Qs.x-s*Qs.y,zr.y=s*Qs.x+r*Qs.y):zr.copy(Qs),i.copy(e),i.x+=zr.x,i.y+=zr.y,i.applyMatrix4(Gf)}var Ni=new N,jc=new N,_a=new N,va=new N,Ms=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,t),Ni.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){jc.copy(e).add(t).multiplyScalar(.5),_a.copy(t).sub(e).normalize(),va.copy(this.origin).sub(jc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(_a),a=va.dot(this.direction),l=-va.dot(_a),c=va.lengthSq(),h=Math.abs(1-o*o),d,u,f,m;if(h>0)if(d=o*l-a,u=o*a-l,m=r*h,d>=0)if(u>=-m)if(u<=m){let x=1/h;d*=x,u*=x,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(jc).addScaledVector(_a,u),f}intersectSphere(e,t){if(e.radius<0)return null;Ni.subVectors(e.center,this.origin);let n=Ni.dot(this.direction),s=Ni.dot(Ni)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=e.x-o.x,u=e.y-o.y,f=e.z-o.z,m=t.x-o.x,x=t.y-o.y,p=t.z-o.z,g=n.x-o.x,y=n.y-o.y,M=n.z-o.z,_=Math.abs(l),b=Math.abs(c),S=Math.abs(h),A,v,T,R,P,U,O,F,V,k,te,L;if(_>=b&&_>=S?(T=l,U=d,V=m,L=g,l>=0?(A=c,v=h,R=u,P=f,O=x,F=p,k=y,te=M):(A=h,v=c,R=f,P=u,O=p,F=x,k=M,te=y)):b>=S?(T=c,U=u,V=x,L=y,c>=0?(A=h,v=l,R=f,P=d,O=p,F=m,k=M,te=g):(A=l,v=h,R=d,P=f,O=m,F=p,k=g,te=M)):(T=h,U=f,V=p,L=M,h>=0?(A=l,v=c,R=d,P=u,O=m,F=x,k=g,te=y):(A=c,v=l,R=u,P=d,O=x,F=m,k=y,te=g)),T===0)return null;let G=A/T,X=v/T,j=1/T,re=R-G*U,de=P-X*U,Fe=O-G*V,ze=F-X*V,Xe=k-G*L,ae=te-X*L,le=Xe*ze-ae*Fe,Te=re*ae-de*Xe,We=Fe*de-ze*re;if(s){if(le<0||Te<0||We<0)return null}else if((le<0||Te<0||We<0)&&(le>0||Te>0||We>0))return null;let Ce=le+Te+We;if(Ce===0)return null;let Ke=j*(le*U+Te*V+We*L);return(Ce>0?Ke<0:Ke>0)?null:this.at(Ke/Ce,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},dt=class extends qn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=Ah,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Du=new et,gs=new Ms,ya=new Xn,Uu=new N,Ma=new N,Sa=new N,Ea=new N,eh=new N,ba=new N,Nu=new N,Ta=new N,be=class extends Pt{constructor(e=new Mt,t=new dt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){ba.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(eh.fromBufferAttribute(d,e),o?ba.addScaledVector(eh,h):ba.addScaledVector(eh.sub(t),h))}t.add(ba)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ya.copy(n.boundingSphere),ya.applyMatrix4(r),gs.copy(e.ray).recast(e.near),!(ya.containsPoint(gs.origin)===!1&&(gs.intersectSphere(ya,Uu)===null||gs.origin.distanceToSquared(Uu)>(e.far-e.near)**2))&&(Du.copy(r).invert(),gs.copy(e.ray).applyMatrix4(Du),!(n.boundingBox!==null&&gs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,gs)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){let p=u[m],g=o[p.materialIndex],y=Math.max(p.start,f.start),M=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let _=y,b=M;_<b;_+=3){let S=a.getX(_),A=a.getX(_+1),v=a.getX(_+2);s=wa(this,g,e,n,c,h,d,S,A,v),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let p=m,g=x;p<g;p+=3){let y=a.getX(p),M=a.getX(p+1),_=a.getX(p+2);s=wa(this,o,e,n,c,h,d,y,M,_),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){let p=u[m],g=o[p.materialIndex],y=Math.max(p.start,f.start),M=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let _=y,b=M;_<b;_+=3){let S=_,A=_+1,v=_+2;s=wa(this,g,e,n,c,h,d,S,A,v),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let p=m,g=x;p<g;p+=3){let y=p,M=p+1,_=p+2;s=wa(this,o,e,n,c,h,d,y,M,_),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function Tp(i,e,t,n,s,r,o,a){let l;if(e.side===rn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===ns,a),l===null)return null;Ta.copy(a),Ta.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ta);return c<t.near||c>t.far?null:{distance:c,point:Ta.clone(),object:i}}function wa(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Ma),i.getVertexPosition(l,Sa),i.getVertexPosition(c,Ea);let h=Tp(i,e,t,n,Ma,Sa,Ea,Nu);if(h){let d=new N;Fi.getBarycoord(Nu,Ma,Sa,Ea,d),s&&(h.uv=Fi.getInterpolatedAttribute(s,a,l,c,d,new me)),r&&(h.uv1=Fi.getInterpolatedAttribute(r,a,l,c,d,new me)),o&&(h.normal=Fi.getInterpolatedAttribute(o,a,l,c,d,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new N,materialIndex:0};Fi.getNormal(Ma,Sa,Ea,u.normal),h.face=u,h.barycoord=d}return h}var kr=new Nt,Fu=new Nt,Bu=new Nt,wp=new Nt,Ou=new et,Aa=new N,th=new Xn,Hu=new et,nh=new Ms,co=class extends be{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ch,this.bindMatrix=new et,this.bindMatrixInverse=new et,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ai),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Aa),this.boundingBox.expandByPoint(Aa)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Xn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Aa),this.boundingSphere.expandByPoint(Aa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),th.copy(this.boundingSphere),th.applyMatrix4(s),e.ray.intersectsSphere(th)!==!1&&(Hu.copy(s).invert(),nh.copy(e.ray).applyMatrix4(Hu),!(this.boundingBox!==null&&nh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,nh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Nt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ch?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Tf?this.bindMatrixInverse.copy(this.bindMatrix).invert():nt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Fu.fromBufferAttribute(s.attributes.skinIndex,e),Bu.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(kr.copy(t),t.set(0,0,0,0)):(kr.set(...t,1),t.set(0,0,0)),kr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=Bu.getComponent(r);if(o!==0){let a=Fu.getComponent(r);Ou.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(wp.copy(kr).applyMatrix4(Ou),o)}}return t.isVector4&&(t.w=kr.w),t.applyMatrix4(this.bindMatrixInverse)}},ur=class extends Pt{constructor(){super(),this.isBone=!0,this.type="Bone"}},_i=class extends Rn{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Kt,h=Kt,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},zu=new et,Ap=new et,ho=class i{constructor(e=[],t=[]){this.uuid=oi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){nt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new et)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new et;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Ap;zu.multiplyMatrices(a,t[r]),zu.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new _i(t,e,e,Cn,On);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(nt("Skeleton: No bone found with UUID:",r),o=new ur),this.bones.push(o),this.boneInverses.push(new et().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},fr=class extends yt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},js=new et,Gu=new et,Ra=[],ku=new ai,Rp=new et,Vr=new be,Wr=new Xn,xn=class extends be{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new fr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Rp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ai),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,js),ku.copy(e.boundingBox).applyMatrix4(js),this.boundingBox.union(ku)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,js),Wr.copy(e.boundingSphere).applyMatrix4(js),this.boundingSphere.union(Wr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Vr.geometry=this.geometry,Vr.material=this.material,Vr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wr.copy(this.boundingSphere),Wr.applyMatrix4(n),e.ray.intersectsSphere(Wr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,js),Gu.multiplyMatrices(n,js),Vr.matrixWorld=Gu,Vr.raycast(e,Ra);for(let o=0,a=Ra.length;o<a;o++){let l=Ra[o];l.instanceId=r,l.object=this,t.push(l)}Ra.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new fr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new _i(new Float32Array(s*this.count),s,this.count,Cl,On));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},xs=new Xn,Cp=new me(.5,.5),Ca=new N,dr=class{constructor(e=new ii,t=new ii,n=new ii,s=new ii,r=new ii,o=new ii){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ri,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],m=r[8],x=r[9],p=r[10],g=r[11],y=r[12],M=r[13],_=r[14],b=r[15];if(s[0].setComponents(c-o,f-h,g-m,b-y).normalize(),s[1].setComponents(c+o,f+h,g+m,b+y).normalize(),s[2].setComponents(c+a,f+d,g+x,b+M).normalize(),s[3].setComponents(c-a,f-d,g-x,b-M).normalize(),n)s[4].setComponents(l,u,p,_).normalize(),s[5].setComponents(c-l,f-u,g-p,b-_).normalize();else if(s[4].setComponents(c-l,f-u,g-p,b-_).normalize(),t===ri)s[5].setComponents(c+l,f+u,g+p,b+_).normalize();else if(t===rr)s[5].setComponents(l,u,p,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(e){xs.center.set(0,0,0);let t=Cp.distanceTo(e.center);return xs.radius=.7071067811865476+t,xs.applyMatrix4(e.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ca.x=s.normal.x>0?e.max.x:e.min.x,Ca.y=s.normal.y>0?e.max.y:e.min.y,Ca.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ca)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var pr=class extends qn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Qa=new N,ja=new N,Vu=new et,Xr=new Ms,Pa=new Xn,ih=new N,Wu=new N,uo=class extends Pt{constructor(e=new Mt,t=new pr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Qa.fromBufferAttribute(t,s-1),ja.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Qa.distanceTo(ja);e.setAttribute("lineDistance",new at(n,1))}else nt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pa.copy(n.boundingSphere),Pa.applyMatrix4(s),Pa.radius+=r,e.ray.intersectsSphere(Pa)===!1)return;Vu.copy(s).invert(),Xr.copy(e.ray).applyMatrix4(Vu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=f,p=m-1;x<p;x+=c){let g=h.getX(x),y=h.getX(x+1),M=Ia(this,e,Xr,l,g,y,x);M&&t.push(M)}if(this.isLineLoop){let x=h.getX(m-1),p=h.getX(f),g=Ia(this,e,Xr,l,x,p,m-1);g&&t.push(g)}}else{let f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let x=f,p=m-1;x<p;x+=c){let g=Ia(this,e,Xr,l,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){let x=Ia(this,e,Xr,l,m-1,f,m-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ia(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(Qa.fromBufferAttribute(a,s),ja.fromBufferAttribute(a,r),t.distanceSqToSegment(Qa,ja,ih,Wu)>n)return;ih.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ih);if(!(c<e.near||c>e.far))return{distance:c,point:Wu.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var vi=class extends qn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Xu=new et,ph=new Ms,La=new Xn,Da=new N,Oi=class extends Pt{constructor(e=new Mt,t=new vi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),La.copy(n.boundingSphere),La.applyMatrix4(s),La.radius+=r,e.ray.intersectsSphere(La)===!1)return;Xu.copy(s).invert(),ph.copy(e.ray).applyMatrix4(Xu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=u,x=f;m<x;m++){let p=c.getX(m);Da.fromBufferAttribute(d,p),qu(Da,p,l,s,e,t,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let m=u,x=f;m<x;m++)Da.fromBufferAttribute(d,m),qu(Da,m,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function qu(i,e,t,n,s,r,o){let a=ph.distanceSqToPoint(i);if(a<t){let l=new N;ph.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var fo=class extends Rn{constructor(e=[],t=is,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},en=class extends Rn{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var yi=class extends Rn{constructor(e,t,n=hi,s,r,o,a=Kt,l=Kt,c,h=gi,d=1){if(h!==gi&&h!==Si)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ar(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},el=class extends yi{constructor(e,t=hi,n=is,s,r,o=Kt,a=Kt,l,c=gi){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},po=class extends Rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ct=class i extends Mt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,s,o,2),m("x","z","y",1,-1,e,n,-t,s,o,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(h,3)),this.setAttribute("uv",new at(d,2));function m(x,p,g,y,M,_,b,S,A,v,T){let R=_/A,P=b/v,U=_/2,O=b/2,F=S/2,V=A+1,k=v+1,te=0,L=0,G=new N;for(let X=0;X<k;X++){let j=X*P-O;for(let re=0;re<V;re++){let de=re*R-U;G[x]=de*y,G[p]=j*M,G[g]=F,c.push(G.x,G.y,G.z),G[x]=0,G[p]=0,G[g]=S>0?1:-1,h.push(G.x,G.y,G.z),d.push(re/A),d.push(1-X/v),te+=1}}for(let X=0;X<v;X++)for(let j=0;j<A;j++){let re=u+j+V*X,de=u+j+V*(X+1),Fe=u+(j+1)+V*(X+1),ze=u+(j+1)+V*X;l.push(re,de,ze),l.push(de,Fe,ze),L+=6}a.addGroup(f,L,T),f+=L,u+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},yn=class i extends Mt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=t/2,d=Math.PI/2*e,u=t,f=2*d+u,m=n*2+r,x=s+1,p=new N,g=new N;for(let y=0;y<=m;y++){let M=0,_=0,b=0,S=0;if(y<=n){let T=y/n,R=T*Math.PI/2;_=-h-e*Math.cos(R),b=e*Math.sin(R),S=-e*Math.cos(R),M=T*d}else if(y<=n+r){let T=(y-n)/r;_=-h+T*t,b=e,S=0,M=d+T*u}else{let T=(y-n-r)/n,R=T*Math.PI/2;_=h+e*Math.sin(R),b=e*Math.cos(R),S=e*Math.sin(R),M=d+u+T*d}let A=Math.max(0,Math.min(1,M/f)),v=0;y===0?v=.5/s:y===m&&(v=-.5/s);for(let T=0;T<=s;T++){let R=T/s,P=R*Math.PI*2,U=Math.sin(P),O=Math.cos(P);g.x=-b*O,g.y=_,g.z=b*U,a.push(g.x,g.y,g.z),p.set(-b*O,S,b*U),p.normalize(),l.push(p.x,p.y,p.z),c.push(R+v,A)}if(y>0){let T=(y-1)*x;for(let R=0;R<s;R++){let P=T+R,U=T+R+1,O=y*x+R,F=y*x+R+1;o.push(P,U,O),o.push(U,F,O)}}}this.setIndex(o),this.setAttribute("position",new at(a,3)),this.setAttribute("normal",new at(l,3)),this.setAttribute("uv",new at(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},tn=class i extends Mt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new N,h=new me;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=n+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new at(o,3)),this.setAttribute("normal",new at(a,3)),this.setAttribute("uv",new at(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Qe=class i extends Mt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],m=0,x=[],p=n/2,g=0;y(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new at(d,3)),this.setAttribute("normal",new at(u,3)),this.setAttribute("uv",new at(f,2));function y(){let _=new N,b=new N,S=0,A=(t-e)/n;for(let v=0;v<=r;v++){let T=[],R=v/r,P=R*(t-e)+e;for(let U=0;U<=s;U++){let O=U/s,F=O*l+a,V=Math.sin(F),k=Math.cos(F);b.x=P*V,b.y=-R*n+p,b.z=P*k,d.push(b.x,b.y,b.z),_.set(V,A,k).normalize(),u.push(_.x,_.y,_.z),f.push(O,1-R),T.push(m++)}x.push(T)}for(let v=0;v<s;v++)for(let T=0;T<r;T++){let R=x[T][v],P=x[T+1][v],U=x[T+1][v+1],O=x[T][v+1];(e>0||T!==0)&&(h.push(R,P,O),S+=3),(t>0||T!==r-1)&&(h.push(P,U,O),S+=3)}c.addGroup(g,S,0),g+=S}function M(_){let b=m,S=new me,A=new N,v=0,T=_===!0?e:t,R=_===!0?1:-1;for(let U=1;U<=s;U++)d.push(0,p*R,0),u.push(0,R,0),f.push(.5,.5),m++;let P=m;for(let U=0;U<=s;U++){let F=U/s*l+a,V=Math.cos(F),k=Math.sin(F);A.x=T*k,A.y=p*R,A.z=T*V,d.push(A.x,A.y,A.z),u.push(0,R,0),S.x=V*.5+.5,S.y=k*.5*R+.5,f.push(S.x,S.y),m++}for(let U=0;U<s;U++){let O=b+U,F=P+U;_===!0?h.push(F,F+1,O):h.push(F+1,F,O),v+=3}c.addGroup(g,v,_===!0?1:2),g+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Hi=class i extends Qe{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},tl=class i extends Mt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new at(r,3)),this.setAttribute("normal",new at(r.slice(),3)),this.setAttribute("uv",new at(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let M=new N,_=new N,b=new N;for(let S=0;S<t.length;S+=3)f(t[S+0],M),f(t[S+1],_),f(t[S+2],b),l(M,_,b,y)}function l(y,M,_,b){let S=b+1,A=[];for(let v=0;v<=S;v++){A[v]=[];let T=y.clone().lerp(_,v/S),R=M.clone().lerp(_,v/S),P=S-v;for(let U=0;U<=P;U++)U===0&&v===S?A[v][U]=T:A[v][U]=T.clone().lerp(R,U/P)}for(let v=0;v<S;v++)for(let T=0;T<2*(S-v)-1;T++){let R=Math.floor(T/2);T%2===0?(u(A[v][R+1]),u(A[v+1][R]),u(A[v][R])):(u(A[v][R+1]),u(A[v+1][R+1]),u(A[v+1][R]))}}function c(y){let M=new N;for(let _=0;_<r.length;_+=3)M.x=r[_+0],M.y=r[_+1],M.z=r[_+2],M.normalize().multiplyScalar(y),r[_+0]=M.x,r[_+1]=M.y,r[_+2]=M.z}function h(){let y=new N;for(let M=0;M<r.length;M+=3){y.x=r[M+0],y.y=r[M+1],y.z=r[M+2];let _=p(y)/2/Math.PI+.5,b=g(y)/Math.PI+.5;o.push(_,1-b)}m(),d()}function d(){for(let y=0;y<o.length;y+=6){let M=o[y+0],_=o[y+2],b=o[y+4],S=Math.max(M,_,b),A=Math.min(M,_,b);S>.9&&A<.1&&(M<.2&&(o[y+0]+=1),_<.2&&(o[y+2]+=1),b<.2&&(o[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function f(y,M){let _=y*3;M.x=e[_+0],M.y=e[_+1],M.z=e[_+2]}function m(){let y=new N,M=new N,_=new N,b=new N,S=new me,A=new me,v=new me;for(let T=0,R=0;T<r.length;T+=9,R+=6){y.set(r[T+0],r[T+1],r[T+2]),M.set(r[T+3],r[T+4],r[T+5]),_.set(r[T+6],r[T+7],r[T+8]),S.set(o[R+0],o[R+1]),A.set(o[R+2],o[R+3]),v.set(o[R+4],o[R+5]),b.copy(y).add(M).add(_).divideScalar(3);let P=p(b);x(S,R+0,y,P),x(A,R+2,M,P),x(v,R+4,_,P)}}function x(y,M,_,b){b<0&&y.x===1&&(o[M]=y.x-1),_.x===0&&_.z===0&&(o[M]=b/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var Fn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){nt("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new me:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new N,s=[],r=[],o=[],a=new N,l=new et;for(let f=0;f<=e;f++){let m=f/e;s[f]=this.getTangentAt(m,new N)}r[0]=new N,o[0]=new N;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(St(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(St(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},mr=class extends Fn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new me){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},nl=class extends mr{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Hh(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Yu=new N,Zu=new N,sh=new Hh,rh=new Hh,oh=new Hh,Ht=class extends Fn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new N){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Zu.subVectors(s[0],s[1]).add(s[0]),c=Zu);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Yu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Yu),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),m<1e-4&&(m=x),p<1e-4&&(p=x),sh.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,m,x,p),rh.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,m,x,p),oh.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,m,x,p)}else this.curveType==="catmullrom"&&(sh.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),rh.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),oh.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(sh.calc(l),rh.calc(l),oh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new N().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function $u(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function Pp(i,e){let t=1-i;return t*t*e}function Ip(i,e){return 2*(1-i)*i*e}function Lp(i,e){return i*i*e}function $r(i,e,t,n){return Pp(i,e)+Ip(i,t)+Lp(i,n)}function Dp(i,e){let t=1-i;return t*t*t*e}function Up(i,e){let t=1-i;return 3*t*t*i*e}function Np(i,e){return 3*(1-i)*i*i*e}function Fp(i,e){return i*i*i*e}function Jr(i,e,t,n,s){return Dp(i,e)+Up(i,t)+Np(i,n)+Fp(i,s)}var mo=class extends Fn{constructor(e=new me,t=new me,n=new me,s=new me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new me){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Jr(e,s.x,r.x,o.x,a.x),Jr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},il=class extends Fn{constructor(e=new N,t=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new N){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Jr(e,s.x,r.x,o.x,a.x),Jr(e,s.y,r.y,o.y,a.y),Jr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},go=class extends Fn{constructor(e=new me,t=new me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new me){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sl=class extends Fn{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xo=class extends Fn{constructor(e=new me,t=new me,n=new me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new me){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set($r(e,s.x,r.x,o.x),$r(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_o=class extends Fn{constructor(e=new N,t=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new N){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set($r(e,s.x,r.x,o.x),$r(e,s.y,r.y,o.y),$r(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vo=class extends Fn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new me){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set($u(a,l.x,c.x,h.x,d.x),$u(a,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new me().fromArray(s))}return this}},rl=Object.freeze({__proto__:null,ArcCurve:nl,CatmullRomCurve3:Ht,CubicBezierCurve:mo,CubicBezierCurve3:il,EllipseCurve:mr,LineCurve:go,LineCurve3:sl,QuadraticBezierCurve:xo,QuadraticBezierCurve3:_o,SplineCurve:vo}),ol=class extends Fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new rl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new rl[s.type]().fromJSON(s))}return this}},Ss=class extends ol{constructor(e){super(),this.type="Path",this.currentPoint=new me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new go(this.currentPoint.clone(),new me(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new xo(this.currentPoint.clone(),new me(e,t),new me(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new mo(this.currentPoint.clone(),new me(e,t),new me(n,s),new me(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new vo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new mr(e,t,n,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Mi=class extends Ss{constructor(e){super(e),this.uuid=oi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Ss().fromJSON(s))}return this}};function Bp(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=kf(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=kp(i,e,r,t)),i.length>80*t){a=i[0],l=i[1];let h=a,d=l;for(let u=t;u<s;u+=t){let f=i[u],m=i[u+1];f<a&&(a=f),m<l&&(l=m),f>h&&(h=f),m>d&&(d=m)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return yo(r,o,t,a,l,c,0),o}function kf(i,e,t,n,s){let r;if(s===jp(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Ju(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Ju(o/n|0,i[o],i[o+1],r);return r&&gr(r,r.next)&&(So(r),r=r.next),r}function Es(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(gr(t,t.next)||qt(t.prev,t,t.next)===0)){if(So(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function yo(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Yp(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Hp(i,n,s,r):Op(i)){e.push(l.i,i.i,c.i),So(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=zp(Es(i),e),yo(i,e,t,n,s,r,2)):o===2&&Gp(i,e,t,n,s,r):yo(Es(i),e,t,n,s,r,1);break}}}function Op(i){let e=i.prev,t=i,n=i.next;if(qt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(s,r,o),d=Math.min(a,l,c),u=Math.max(s,r,o),f=Math.max(a,l,c),m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=u&&m.y>=d&&m.y<=f&&qr(s,a,r,l,o,c,m.x,m.y)&&qt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Hp(i,e,t,n){let s=i.prev,r=i,o=i.next;if(qt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,f=Math.min(a,l,c),m=Math.min(h,d,u),x=Math.max(a,l,c),p=Math.max(h,d,u),g=mh(f,m,e,t,n),y=mh(x,p,e,t,n),M=i.prevZ,_=i.nextZ;for(;M&&M.z>=g&&_&&_.z<=y;){if(M.x>=f&&M.x<=x&&M.y>=m&&M.y<=p&&M!==s&&M!==o&&qr(a,h,l,d,c,u,M.x,M.y)&&qt(M.prev,M,M.next)>=0||(M=M.prevZ,_.x>=f&&_.x<=x&&_.y>=m&&_.y<=p&&_!==s&&_!==o&&qr(a,h,l,d,c,u,_.x,_.y)&&qt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;M&&M.z>=g;){if(M.x>=f&&M.x<=x&&M.y>=m&&M.y<=p&&M!==s&&M!==o&&qr(a,h,l,d,c,u,M.x,M.y)&&qt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;_&&_.z<=y;){if(_.x>=f&&_.x<=x&&_.y>=m&&_.y<=p&&_!==s&&_!==o&&qr(a,h,l,d,c,u,_.x,_.y)&&qt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function zp(i,e){let t=i;do{let n=t.prev,s=t.next.next;!gr(n,s)&&Wf(n,t,t.next,s)&&Mo(n,s)&&Mo(s,n)&&(e.push(n.i,t.i,s.i),So(t),So(t.next),t=i=s),t=t.next}while(t!==i);return Es(t)}function Gp(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Jp(o,a)){let l=Xf(o,a);o=Es(o,o.next),l=Es(l,l.next),yo(o,e,t,n,s,r,0),yo(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function kp(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=kf(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push($p(c))}s.sort(Vp);for(let r=0;r<s.length;r++)t=Wp(s[r],t);return t}function Vp(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Wp(i,e){let t=Xp(i,e);if(!t)return e;let n=Xf(t,i);return Es(n,n.next),Es(t,t.next)}function Xp(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(gr(i,t))return t;do{if(gr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Vf(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let d=Math.abs(s-t.y)/(n-t.x);Mo(t,i)&&(d<h||d===h&&(t.x>o.x||t.x===o.x&&qp(o,t)))&&(o=t,h=d)}t=t.next}while(t!==a);return o}function qp(i,e){return qt(i.prev,i,e.prev)<0&&qt(e.next,i,i.next)<0}function Yp(i,e,t,n){let s=i;do s.z===0&&(s.z=mh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Zp(s)}function Zp(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function mh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function $p(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Vf(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function qr(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Vf(i,e,t,n,s,r,o,a)}function Jp(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Kp(i,e)&&(Mo(i,e)&&Mo(e,i)&&Qp(i,e)&&(qt(i.prev,i,e.prev)||qt(i,e.prev,e))||gr(i,e)&&qt(i.prev,i,i.next)>0&&qt(e.prev,e,e.next)>0)}function qt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function gr(i,e){return i.x===e.x&&i.y===e.y}function Wf(i,e,t,n){let s=Na(qt(i,e,t)),r=Na(qt(i,e,n)),o=Na(qt(t,n,i)),a=Na(qt(t,n,e));return!!(s!==r&&o!==a||s===0&&Ua(i,t,e)||r===0&&Ua(i,n,e)||o===0&&Ua(t,i,n)||a===0&&Ua(t,e,n))}function Ua(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Na(i){return i>0?1:i<0?-1:0}function Kp(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Wf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Mo(i,e){return qt(i.prev,i,i.next)<0?qt(i,e,i.next)>=0&&qt(i,i.prev,e)>=0:qt(i,e,i.prev)<0||qt(i,i.next,e)<0}function Qp(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Xf(i,e){let t=gh(i.i,i.x,i.y),n=gh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Ju(i,e,t,n){let s=gh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function So(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function gh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function jp(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var xh=class{static triangulate(e,t,n=2){return Bp(e,t,n)}},mi=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Ku(e),Qu(n,e);let o=e.length;t.forEach(Ku);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Qu(n,t[l]);let a=xh.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Ku(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Qu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Eo=class i extends Mt{constructor(e=new Mi([new me(.5,.5),new me(-.5,.5),new me(-.5,-.5),new me(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new at(s,3)),this.setAttribute("uv",new at(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:e0,M,_=!1,b,S,A,v;if(g){M=g.getSpacedPoints(h),_=!0,u=!1;let fe=g.isCatmullRomCurve3?g.closed:!1;b=g.computeFrenetFrames(h,fe),S=new N,A=new N,v=new N}u||(p=0,f=0,m=0,x=0);let T=a.extractPoints(c),R=T.shape,P=T.holes;if(!mi.isClockWise(R)){R=R.reverse();for(let fe=0,_e=P.length;fe<_e;fe++){let Se=P[fe];mi.isClockWise(Se)&&(P[fe]=Se.reverse())}}function O(fe){let Se=10000000000000001e-36,Ee=fe[0];for(let q=1;q<=fe.length;q++){let ve=q%fe.length,Pe=fe[ve],Le=Pe.x-Ee.x,Ue=Pe.y-Ee.y,H=Le*Le+Ue*Ue,qe=Math.max(Math.abs(Pe.x),Math.abs(Pe.y),Math.abs(Ee.x),Math.abs(Ee.y)),tt=Se*qe*qe;if(H<=tt){fe.splice(ve,1),q--;continue}Ee=Pe}}O(R),P.forEach(O);let F=P.length,V=R;for(let fe=0;fe<F;fe++){let _e=P[fe];R=R.concat(_e)}function k(fe,_e,Se){return _e||lt("ExtrudeGeometry: vec does not exist"),fe.clone().addScaledVector(_e,Se)}let te=R.length;function L(fe,_e,Se){let Ee,q,ve,Pe=fe.x-_e.x,Le=fe.y-_e.y,Ue=Se.x-fe.x,H=Se.y-fe.y,qe=Pe*Pe+Le*Le,tt=Pe*H-Le*Ue;if(Math.abs(tt)>Number.EPSILON){let D=Math.sqrt(qe),E=Math.sqrt(Ue*Ue+H*H),Y=_e.x-Le/D,Q=_e.y+Pe/D,se=Se.x-H/E,ye=Se.y+Ue/E,Ie=((se-Y)*H-(ye-Q)*Ue)/(Pe*H-Le*Ue);Ee=Y+Pe*Ie-fe.x,q=Q+Le*Ie-fe.y;let he=Ee*Ee+q*q;if(he<=2)return new me(Ee,q);ve=Math.sqrt(he/2)}else{let D=!1;Pe>Number.EPSILON?Ue>Number.EPSILON&&(D=!0):Pe<-Number.EPSILON?Ue<-Number.EPSILON&&(D=!0):Math.sign(Le)===Math.sign(H)&&(D=!0),D?(Ee=-Le,q=Pe,ve=Math.sqrt(qe)):(Ee=Pe,q=Le,ve=Math.sqrt(qe/2))}return new me(Ee/ve,q/ve)}let G=[];for(let fe=0,_e=V.length,Se=_e-1,Ee=fe+1;fe<_e;fe++,Se++,Ee++)Se===_e&&(Se=0),Ee===_e&&(Ee=0),G[fe]=L(V[fe],V[Se],V[Ee]);let X=[],j,re=G.concat();for(let fe=0,_e=F;fe<_e;fe++){let Se=P[fe];j=[];for(let Ee=0,q=Se.length,ve=q-1,Pe=Ee+1;Ee<q;Ee++,ve++,Pe++)ve===q&&(ve=0),Pe===q&&(Pe=0),j[Ee]=L(Se[Ee],Se[ve],Se[Pe]);X.push(j),re=re.concat(j)}let de;if(p===0)de=mi.triangulateShape(V,P);else{let fe=[],_e=[];for(let Se=0;Se<p;Se++){let Ee=Se/p,q=f*Math.cos(Ee*Math.PI/2),ve=m*Math.sin(Ee*Math.PI/2)+x;for(let Pe=0,Le=V.length;Pe<Le;Pe++){let Ue=k(V[Pe],G[Pe],ve);Te(Ue.x,Ue.y,-q),Ee===0&&fe.push(Ue)}for(let Pe=0,Le=F;Pe<Le;Pe++){let Ue=P[Pe];j=X[Pe];let H=[];for(let qe=0,tt=Ue.length;qe<tt;qe++){let D=k(Ue[qe],j[qe],ve);Te(D.x,D.y,-q),Ee===0&&H.push(D)}Ee===0&&_e.push(H)}}de=mi.triangulateShape(fe,_e)}let Fe=de.length,ze=m+x;for(let fe=0;fe<te;fe++){let _e=u?k(R[fe],re[fe],ze):R[fe];_?(A.copy(b.normals[0]).multiplyScalar(_e.x),S.copy(b.binormals[0]).multiplyScalar(_e.y),v.copy(M[0]).add(A).add(S),Te(v.x,v.y,v.z)):Te(_e.x,_e.y,0)}for(let fe=1;fe<=h;fe++)for(let _e=0;_e<te;_e++){let Se=u?k(R[_e],re[_e],ze):R[_e];_?(A.copy(b.normals[fe]).multiplyScalar(Se.x),S.copy(b.binormals[fe]).multiplyScalar(Se.y),v.copy(M[fe]).add(A).add(S),Te(v.x,v.y,v.z)):Te(Se.x,Se.y,d/h*fe)}for(let fe=p-1;fe>=0;fe--){let _e=fe/p,Se=f*Math.cos(_e*Math.PI/2),Ee=m*Math.sin(_e*Math.PI/2)+x;for(let q=0,ve=V.length;q<ve;q++){let Pe=k(V[q],G[q],Ee);Te(Pe.x,Pe.y,d+Se)}for(let q=0,ve=P.length;q<ve;q++){let Pe=P[q];j=X[q];for(let Le=0,Ue=Pe.length;Le<Ue;Le++){let H=k(Pe[Le],j[Le],Ee);_?Te(H.x,H.y+M[h-1].y,M[h-1].x+Se):Te(H.x,H.y,d+Se)}}}Xe(),ae();function Xe(){let fe=s.length/3;if(u){let _e=0,Se=te*_e;for(let Ee=0;Ee<Fe;Ee++){let q=de[Ee];We(q[2]+Se,q[1]+Se,q[0]+Se)}_e=h+p*2,Se=te*_e;for(let Ee=0;Ee<Fe;Ee++){let q=de[Ee];We(q[0]+Se,q[1]+Se,q[2]+Se)}}else{for(let _e=0;_e<Fe;_e++){let Se=de[_e];We(Se[2],Se[1],Se[0])}for(let _e=0;_e<Fe;_e++){let Se=de[_e];We(Se[0]+te*h,Se[1]+te*h,Se[2]+te*h)}}n.addGroup(fe,s.length/3-fe,0)}function ae(){let fe=s.length/3,_e=0;le(V,_e),_e+=V.length;for(let Se=0,Ee=P.length;Se<Ee;Se++){let q=P[Se];le(q,_e),_e+=q.length}n.addGroup(fe,s.length/3-fe,1)}function le(fe,_e){let Se=fe.length;for(;--Se>=0;){let Ee=Se,q=Se-1;q<0&&(q=fe.length-1);for(let ve=0,Pe=h+p*2;ve<Pe;ve++){let Le=te*ve,Ue=te*(ve+1),H=_e+Ee+Le,qe=_e+q+Le,tt=_e+q+Ue,D=_e+Ee+Ue;Ce(H,qe,tt,D)}}}function Te(fe,_e,Se){l.push(fe),l.push(_e),l.push(Se)}function We(fe,_e,Se){Ke(fe),Ke(_e),Ke(Se);let Ee=s.length/3,q=y.generateTopUV(n,s,Ee-3,Ee-2,Ee-1);rt(q[0]),rt(q[1]),rt(q[2])}function Ce(fe,_e,Se,Ee){Ke(fe),Ke(_e),Ke(Ee),Ke(_e),Ke(Se),Ke(Ee);let q=s.length/3,ve=y.generateSideWallUV(n,s,q-6,q-3,q-2,q-1);rt(ve[0]),rt(ve[1]),rt(ve[3]),rt(ve[1]),rt(ve[2]),rt(ve[3])}function Ke(fe){s.push(l[fe*3+0]),s.push(l[fe*3+1]),s.push(l[fe*3+2])}function rt(fe){r.push(fe.x),r.push(fe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return t0(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new rl[s.type]().fromJSON(s)),new i(n,e.options)}},e0={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new me(r,o),new me(a,l),new me(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[s*3],f=e[s*3+1],m=e[s*3+2],x=e[r*3],p=e[r*3+1],g=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new me(o,1-l),new me(c,1-d),new me(u,1-m),new me(x,1-g)]:[new me(a,1-l),new me(h,1-d),new me(f,1-m),new me(p,1-g)]}};function t0(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var bo=class i extends tl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},li=class i extends Mt{constructor(e=[new me(0,-.5),new me(.5,0),new me(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=St(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,d=new N,u=new me,f=new N,m=new N,x=new N,p=0,g=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:p=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,f.x=g*1,f.y=-p,f.z=g*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:p=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,f.x=g*1,f.y=-p,f.z=g*0,m.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(m)}for(let y=0;y<=t;y++){let M=n+y*h*s,_=Math.sin(M),b=Math.cos(M);for(let S=0;S<=e.length-1;S++){d.x=e[S].x*_,d.y=e[S].y,d.z=e[S].x*b,o.push(d.x,d.y,d.z),u.x=y/t,u.y=S/(e.length-1),a.push(u.x,u.y);let A=l[3*S+0]*_,v=l[3*S+1],T=l[3*S+0]*b;c.push(A,v,T)}}for(let y=0;y<t;y++)for(let M=0;M<e.length-1;M++){let _=M+y*e.length,b=_,S=_+e.length,A=_+e.length+1,v=_+1;r.push(b,S,v),r.push(A,v,S)}this.setIndex(r),this.setAttribute("position",new at(o,3)),this.setAttribute("uv",new at(a,2)),this.setAttribute("normal",new at(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var wt=class i extends Mt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=e/a,u=t/l,f=[],m=[],x=[],p=[];for(let g=0;g<h;g++){let y=g*u-o;for(let M=0;M<c;M++){let _=M*d-r;m.push(_,-y,0),x.push(0,0,1),p.push(M/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){let M=y+c*g,_=y+c*(g+1),b=y+1+c*(g+1),S=y+1+c*g;f.push(M,_,S),f.push(_,b,S)}this.setIndex(f),this.setAttribute("position",new at(m,3)),this.setAttribute("normal",new at(x,3)),this.setAttribute("uv",new at(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var xr=class i extends Mt{constructor(e=new Mi([new me(0,.5),new me(-.5,-.5),new me(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new at(s,3)),this.setAttribute("normal",new at(r,3)),this.setAttribute("uv",new at(o,2));function c(h){let d=s.length/3,u=h.extractPoints(t),f=u.shape,m=u.holes;mi.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,g=m.length;p<g;p++){let y=m[p];mi.isClockWise(y)===!0&&(m[p]=y.reverse())}let x=mi.triangulateShape(f,m);for(let p=0,g=m.length;p<g;p++){let y=m[p];f=f.concat(y)}for(let p=0,g=f.length;p<g;p++){let y=f[p];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let p=0,g=x.length;p<g;p++){let y=x[p],M=y[0]+d,_=y[1]+d,b=y[2]+d;n.push(M,_,b),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return n0(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function n0(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var it=class i extends Mt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new N,u=new N,f=[],m=[],x=[],p=[];for(let g=0;g<=n;g++){let y=[],M=g/n,_=o+M*a,b=e*Math.cos(_),S=Math.sqrt(e*e-b*b),A=0;g===0&&o===0?A=.5/t:g===n&&l===Math.PI&&(A=-.5/t);for(let v=0;v<=t;v++){let T=v/t,R=s+T*r;d.x=-S*Math.cos(R),d.y=b,d.z=S*Math.sin(R),m.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),p.push(T+A,1-M),y.push(c++)}h.push(y)}for(let g=0;g<n;g++)for(let y=0;y<t;y++){let M=h[g][y+1],_=h[g][y],b=h[g+1][y],S=h[g+1][y+1];(g!==0||o>0)&&f.push(M,_,S),(g!==n-1||l<Math.PI)&&f.push(_,b,S)}this.setIndex(f),this.setAttribute("position",new at(m,3)),this.setAttribute("normal",new at(x,3)),this.setAttribute("uv",new at(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ft=class i extends Mt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new N,f=new N,m=new N;for(let x=0;x<=n;x++){let p=o+x/n*a;for(let g=0;g<=s;g++){let y=g/s*r;f.x=(e+t*Math.cos(p))*Math.cos(y),f.y=(e+t*Math.cos(p))*Math.sin(y),f.z=t*Math.sin(p),c.push(f.x,f.y,f.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),m.subVectors(f,u).normalize(),h.push(m.x,m.y,m.z),d.push(g/s),d.push(x/n)}}for(let x=1;x<=n;x++)for(let p=1;p<=s;p++){let g=(s+1)*x+p-1,y=(s+1)*(x-1)+p-1,M=(s+1)*(x-1)+p,_=(s+1)*x+p;l.push(g,y,_),l.push(y,M,_)}this.setIndex(l),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(h,3)),this.setAttribute("uv",new at(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Yn=class i extends Mt{constructor(e=new _o(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new N,l=new N,c=new me,h=new N,d=[],u=[],f=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new at(d,3)),this.setAttribute("normal",new at(u,3)),this.setAttribute("uv",new at(f,2));function x(){for(let M=0;M<t;M++)p(M);p(r===!1?t:0),y(),g()}function p(M){h=e.getPointAt(M/t,h);let _=o.normals[M],b=o.binormals[M];for(let S=0;S<=s;S++){let A=S/s*Math.PI*2,v=Math.sin(A),T=-Math.cos(A);l.x=T*_.x+v*b.x,l.y=T*_.y+v*b.y,l.z=T*_.z+v*b.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function g(){for(let M=1;M<=t;M++)for(let _=1;_<=s;_++){let b=(s+1)*(M-1)+(_-1),S=(s+1)*M+(_-1),A=(s+1)*M+_,v=(s+1)*(M-1)+_;m.push(b,S,v),m.push(S,A,v)}}function y(){for(let M=0;M<=t;M++)for(let _=0;_<=s;_++)c.x=M/t,c.y=_/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new rl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Cs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(ju(s))s.isRenderTargetTexture?(nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(ju(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Sn(i){let e={};for(let t=0;t<i.length;t++){let n=Cs(i[t]);for(let s in n)e[s]=n[s]}return e}function ju(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function i0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function zh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}var Pn={clone:Cs,merge:Sn},s0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,r0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Bt=class extends qn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=s0,this.fragmentShader=r0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cs(e.uniforms),this.uniformsGroups=i0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new we().setHex(s.value);break;case"v2":this.uniforms[n].value=new me().fromArray(s.value);break;case"v3":this.uniforms[n].value=new N().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Nt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ut().fromArray(s.value);break;case"m4":this.uniforms[n].value=new et().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},_r=class extends Bt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Be=class extends qn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yo,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},pt=class extends Be{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new me(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return St(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new we(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new we(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new we(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var To=class extends qn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yo,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};var al=class extends qn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Af,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ll=class extends qn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function er(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function ah(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ji=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},cl=class extends ji{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:uh,endingEnd:uh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case fh:r=e,a=2*t-n;break;case dh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case fh:o=e,l=2*n-t;break;case dh:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(n-t)/(s-t),x=m*m,p=x*m,g=-u*p+2*u*x-u*m,y=(1+u)*p+(-1.5-2*u)*x+(-.5+u)*m+1,M=(-1-f)*p+(1.5+f)*x+.5*m,_=f*p-f*x;for(let b=0;b!==a;++b)r[b]=g*o[h+b]+y*o[c+b]+M*o[l+b]+_*o[d+b];return r}},hl=class extends ji{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},ul=class extends ji{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},fl=class extends ji{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(n-t)/(s-t),x=1-m;for(let p=0;p!==a;++p)r[p]=o[c+p]*x+o[l+p]*m;return r}let u=a*2,f=e-1;for(let m=0;m!==a;++m){let x=o[c+m],p=o[l+m],g=f*u+m*2,y=d[g],M=d[g+1],_=e*u+m*2,b=h[_],S=h[_+1],A=a0(n,t,y,b,s);r[m]=qf(A,x,M,S,p)}return r}};function qf(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function o0(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function a0(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=qf(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let l=o0(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Bn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=er(t,this.TimeBufferType),this.values=er(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:er(e.times,Array),values:er(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),ah(e.settings)&&(n.settings={inTangents:er(e.settings.inTangents,Array),outTangents:er(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ul(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new hl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new cl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new fl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Kr:t=this.InterpolantFactoryMethodDiscrete;break;case Za:t=this.InterpolantFactoryMethodLinear;break;case Oa:t=this.InterpolantFactoryMethodSmooth;break;case hh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return nt("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Kr;case this.InterpolantFactoryMethodLinear:return Za;case this.InterpolantFactoryMethodSmooth:return Oa;case this.InterpolantFactoryMethodBezier:return hh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;ah(this.settings)&&(ef(this.settings.inTangents,e),ef(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(lt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(lt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){lt("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){lt("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&qd(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){lt("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Oa,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let m=0;m!==n;++m){let x=t[d+m];if(x!==t[u+m]||x!==t[f+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,ah(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function ef(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Bn.prototype.ValueTypeName="";Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=Za;var es=class extends Bn{constructor(e,t,n){super(e,t,n)}};es.prototype.ValueTypeName="bool";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=Kr;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;var dl=class extends Bn{constructor(e,t,n,s){super(e,t,n,s)}};dl.prototype.ValueTypeName="color";var pl=class extends Bn{constructor(e,t,n,s){super(e,t,n,s)}};pl.prototype.ValueTypeName="number";var ml=class extends ji{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)fn.slerpFlat(r,0,o,c-a,o,c,l);return r}},wo=class extends Bn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new ml(this.times,this.values,this.getValueSize(),e)}};wo.prototype.ValueTypeName="quaternion";wo.prototype.InterpolantFactoryMethodSmooth=void 0;var ts=class extends Bn{constructor(e,t,n){super(e,t,n)}};ts.prototype.ValueTypeName="string";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=Kr;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var gl=class extends Bn{constructor(e,t,n,s){super(e,t,n,s)}};gl.prototype.ValueTypeName="vector";var xl=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Yf=new xl,_l=class{constructor(e){this.manager=e!==void 0?e:Yf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};_l.DEFAULT_MATERIAL_NAME="__DEFAULT";var vr=class extends Pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ao=class extends vr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new we(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},lh=new et,tf=new N,nf=new N,Ro=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.mapType=Mn,this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dr,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;tf.setFromMatrixPosition(e.matrixWorld),t.position.copy(tf),nf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){lh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(lh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===rr||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(lh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Fa=new N,Ba=new fn,di=new N,Co=class extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Fa,Ba,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fa,Ba,di.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Fa,Ba,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fa,Ba,di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Qi=new N,sf=new me,rf=new me,un=class extends Co{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Yr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vs*2*Math.atan(Math.tan(Yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z)}getViewSize(e,t){return this.getViewBounds(e,sf,rf),t.subVectors(rf,sf)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Yr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},_h=class extends Ro{constructor(){super(new un(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=vs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},zi=class extends vr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new _h}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},vh=class extends Ro{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0}},Zn=class extends vr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new vh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},bs=class extends Co{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var tr=-90,nr=1,vl=class extends Pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new un(tr,nr,e,t);s.layers=this.layers,this.add(s);let r=new un(tr,nr,e,t);r.layers=this.layers,this.add(r);let o=new un(tr,nr,e,t);o.layers=this.layers,this.add(o);let a=new un(tr,nr,e,t);a.layers=this.layers,this.add(a);let l=new un(tr,nr,e,t);l.layers=this.layers,this.add(l);let c=new un(tr,nr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ri)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===rr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},yl=class extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Po=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=l0.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function l0(){this._document.hidden===!1&&this.reset()}var Gh="\\[\\]\\.:\\/",c0=new RegExp("["+Gh+"]","g"),kh="[^"+Gh+"]",h0="[^"+Gh.replace("\\.","")+"]",u0=/((?:WC+[\/:])*)/.source.replace("WC",kh),f0=/(WCOD+)?/.source.replace("WCOD",h0),d0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kh),p0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kh),m0=new RegExp("^"+u0+f0+d0+p0+"$"),g0=["material","materials","bones","map"],yh=class{constructor(e,t,n){let s=n||kt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},kt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(c0,"")}static parseTrackName(e){let t=m0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);g0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){nt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){lt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){lt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){lt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){lt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){lt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){lt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){lt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;lt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){lt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){lt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};kt.Composite=yh;kt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};kt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};kt.prototype.GetterByBindingType=[kt.prototype._getValue_direct,kt.prototype._getValue_array,kt.prototype._getValue_arrayElement,kt.prototype._getValue_toArray];kt.prototype.SetterByBindingTypeAndVersioning=[[kt.prototype._setValue_direct,kt.prototype._setValue_direct_setNeedsUpdate,kt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_array,kt.prototype._setValue_array_setNeedsUpdate,kt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_arrayElement,kt.prototype._setValue_arrayElement_setNeedsUpdate,kt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_fromArray,kt.prototype._setValue_fromArray_setNeedsUpdate,kt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var dy=new Float32Array(1);var Zh=class Zh{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Zh.prototype.isMatrix2=!0;var Mh=Zh;function Vh(i,e,t,n){let s=x0(n);switch(t){case Dh:return i*e;case Cl:return i*e/s.components*s.byteLength;case Pl:return i*e/s.components*s.byteLength;case os:return i*e*2/s.components*s.byteLength;case Il:return i*e*2/s.components*s.byteLength;case Uh:return i*e*3/s.components*s.byteLength;case Cn:return i*e*4/s.components*s.byteLength;case Ll:return i*e*4/s.components*s.byteLength;case Go:case ko:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Vo:case Wo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ul:case Fl:return Math.max(i,16)*Math.max(e,8)/4;case Dl:case Nl:return Math.max(i,8)*Math.max(e,8)/2;case Bl:case Ol:case zl:case Gl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Hl:case Xo:case kl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Vl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Xl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ql:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Yl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Zl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case $l:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Jl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Kl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ql:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case jl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ec:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case tc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case nc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ic:case sc:case rc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case oc:case ac:return Math.ceil(i/4)*Math.ceil(e/4)*8;case qo:case lc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function x0(i){switch(i){case Mn:case Ch:return{byteLength:1,components:1};case Sr:case Ph:case Zt:return{byteLength:2,components:1};case Al:case Rl:return{byteLength:2,components:4};case hi:case wl:case On:return{byteLength:4,components:1};case Ih:case Lh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function md(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function S0(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){let m=d[u],x=d[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){let x=d[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var E0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,b0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,T0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,w0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,A0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,R0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,C0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,P0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,I0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,L0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,D0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,U0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,N0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,F0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,B0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,O0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,k0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,V0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,W0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,X0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,q0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Y0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Z0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,$0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,J0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,K0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Q0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,j0="gl_FragColor = linearToOutputTexel( gl_FragColor );",em=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,nm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,im=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,om=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,am=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,um=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,mm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,gm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_m=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ym=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Mm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Sm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Em=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tm=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,wm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Am=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Im=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Dm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Um=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Om=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,zm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,km=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,qm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ym=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$m=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Km=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,jm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ng=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ig=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,og=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ag=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,lg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ug=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,dg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,xg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_g=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Sg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Eg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Pg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ig=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Lg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ug=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ng=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Og=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Wg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Xg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Zg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$g=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Qg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ex=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mt={alphahash_fragment:E0,alphahash_pars_fragment:b0,alphamap_fragment:T0,alphamap_pars_fragment:w0,alphatest_fragment:A0,alphatest_pars_fragment:R0,aomap_fragment:C0,aomap_pars_fragment:P0,batching_pars_vertex:I0,batching_vertex:L0,begin_vertex:D0,beginnormal_vertex:U0,bsdfs:N0,iridescence_fragment:F0,bumpmap_pars_fragment:B0,clipping_planes_fragment:O0,clipping_planes_pars_fragment:H0,clipping_planes_pars_vertex:z0,clipping_planes_vertex:G0,color_fragment:k0,color_pars_fragment:V0,color_pars_vertex:W0,color_vertex:X0,common:q0,cube_uv_reflection_fragment:Y0,defaultnormal_vertex:Z0,displacementmap_pars_vertex:$0,displacementmap_vertex:J0,emissivemap_fragment:K0,emissivemap_pars_fragment:Q0,colorspace_fragment:j0,colorspace_pars_fragment:em,envmap_fragment:tm,envmap_common_pars_fragment:nm,envmap_pars_fragment:im,envmap_pars_vertex:sm,envmap_physical_pars_fragment:mm,envmap_vertex:rm,fog_vertex:om,fog_pars_vertex:am,fog_fragment:lm,fog_pars_fragment:cm,gradientmap_pars_fragment:hm,lightmap_pars_fragment:um,lights_lambert_fragment:fm,lights_lambert_pars_fragment:dm,lights_pars_begin:pm,lights_toon_fragment:gm,lights_toon_pars_fragment:xm,lights_phong_fragment:_m,lights_phong_pars_fragment:vm,lights_physical_fragment:ym,lights_physical_pars_fragment:Mm,lights_fragment_begin:Sm,lights_fragment_maps:Em,lights_fragment_end:bm,lightprobes_pars_fragment:Tm,logdepthbuf_fragment:wm,logdepthbuf_pars_fragment:Am,logdepthbuf_pars_vertex:Rm,logdepthbuf_vertex:Cm,map_fragment:Pm,map_pars_fragment:Im,map_particle_fragment:Lm,map_particle_pars_fragment:Dm,metalnessmap_fragment:Um,metalnessmap_pars_fragment:Nm,morphinstance_vertex:Fm,morphcolor_vertex:Bm,morphnormal_vertex:Om,morphtarget_pars_vertex:Hm,morphtarget_vertex:zm,normal_fragment_begin:Gm,normal_fragment_maps:km,normal_pars_fragment:Vm,normal_pars_vertex:Wm,normal_vertex:Xm,normalmap_pars_fragment:qm,clearcoat_normal_fragment_begin:Ym,clearcoat_normal_fragment_maps:Zm,clearcoat_pars_fragment:$m,iridescence_pars_fragment:Jm,opaque_fragment:Km,packing:Qm,premultiplied_alpha_fragment:jm,project_vertex:eg,dithering_fragment:tg,dithering_pars_fragment:ng,roughnessmap_fragment:ig,roughnessmap_pars_fragment:sg,shadowmap_pars_fragment:rg,shadowmap_pars_vertex:og,shadowmap_vertex:ag,shadowmask_pars_fragment:lg,skinbase_vertex:cg,skinning_pars_vertex:hg,skinning_vertex:ug,skinnormal_vertex:fg,specularmap_fragment:dg,specularmap_pars_fragment:pg,tonemapping_fragment:mg,tonemapping_pars_fragment:gg,transmission_fragment:xg,transmission_pars_fragment:_g,uv_pars_fragment:vg,uv_pars_vertex:yg,uv_vertex:Mg,worldpos_vertex:Sg,background_vert:Eg,background_frag:bg,backgroundCube_vert:Tg,backgroundCube_frag:wg,cube_vert:Ag,cube_frag:Rg,depth_vert:Cg,depth_frag:Pg,distance_vert:Ig,distance_frag:Lg,equirect_vert:Dg,equirect_frag:Ug,linedashed_vert:Ng,linedashed_frag:Fg,meshbasic_vert:Bg,meshbasic_frag:Og,meshlambert_vert:Hg,meshlambert_frag:zg,meshmatcap_vert:Gg,meshmatcap_frag:kg,meshnormal_vert:Vg,meshnormal_frag:Wg,meshphong_vert:Xg,meshphong_frag:qg,meshphysical_vert:Yg,meshphysical_frag:Zg,meshtoon_vert:$g,meshtoon_frag:Jg,points_vert:Kg,points_frag:Qg,shadow_vert:jg,shadow_frag:ex,sprite_vert:tx,sprite_frag:nx},ke={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new N},probesMax:{value:new N},probesResolution:{value:new N}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},bi={basic:{uniforms:Sn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Sn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new we(0)},envMapIntensity:{value:1}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Sn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Sn([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Sn([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new we(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Sn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Sn([ke.points,ke.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Sn([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Sn([ke.common,ke.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Sn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Sn([ke.sprite,ke.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distance:{uniforms:Sn([ke.common,ke.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distance_vert,fragmentShader:mt.distance_frag},shadow:{uniforms:Sn([ke.lights,ke.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};bi.physical={uniforms:Sn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};var uc={r:0,b:0,g:0},ix=new et,gd=new ut;gd.set(-1,0,0,0,1,0,0,0,1);function sx(i,e,t,n,s,r){let o=new we(0),a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(y){let M=y.isScene===!0?y.background:null;if(M&&M.isTexture){let _=y.backgroundBlurriness>0;M=e.get(M,_)}return M}function m(y){let M=!1,_=f(y);_===null?p(o,a):_&&_.isColor&&(p(_,1),M=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(y,M){let _=f(M);_&&(_.isCubeTexture||_.mapping===Ho)?(c===void 0&&(c=new be(new ct(1,1,1),new Bt({name:"BackgroundCubeMaterial",uniforms:Cs(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ix.makeRotationFromEuler(M.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(gd),c.material.toneMapped=Et.getTransfer(_.colorSpace)!==At,(h!==_||d!==_.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,u=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new be(new wt(2,2),new Bt({name:"BackgroundMaterial",uniforms:Cs(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:ns,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Et.getTransfer(_.colorSpace)!==At,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,u=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,M){y.getRGB(uc,zh(i)),t.buffers.color.setClear(uc.r,uc.g,uc.b,M,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,M=1){o.set(y),a=M,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,p(o,a)},render:m,addToRenderList:x,dispose:g}}function rx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(P,U,O,F,V){let k=!1,te=d(P,F,O,U);r!==te&&(r=te,c(r.object)),k=f(P,F,O,V),k&&m(P,F,O,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,_(P,U,O,F),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function h(P){return i.deleteVertexArray(P)}function d(P,U,O,F){let V=F.wireframe===!0,k=n[U.id];k===void 0&&(k={},n[U.id]=k);let te=P.isInstancedMesh===!0?P.id:0,L=k[te];L===void 0&&(L={},k[te]=L);let G=L[O.id];G===void 0&&(G={},L[O.id]=G);let X=G[V];return X===void 0&&(X=u(l()),G[V]=X),X}function u(P){let U=[],O=[],F=[];for(let V=0;V<t;V++)U[V]=0,O[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:O,attributeDivisors:F,object:P,attributes:{},index:null}}function f(P,U,O,F){let V=r.attributes,k=U.attributes,te=0,L=O.getAttributes();for(let G in L)if(L[G].location>=0){let j=V[G],re=k[G];if(re===void 0&&(G==="instanceMatrix"&&P.instanceMatrix&&(re=P.instanceMatrix),G==="instanceColor"&&P.instanceColor&&(re=P.instanceColor)),j===void 0||j.attribute!==re||re&&j.data!==re.data)return!0;te++}return r.attributesNum!==te||r.index!==F}function m(P,U,O,F){let V={},k=U.attributes,te=0,L=O.getAttributes();for(let G in L)if(L[G].location>=0){let j=k[G];j===void 0&&(G==="instanceMatrix"&&P.instanceMatrix&&(j=P.instanceMatrix),G==="instanceColor"&&P.instanceColor&&(j=P.instanceColor));let re={};re.attribute=j,j&&j.data&&(re.data=j.data),V[G]=re,te++}r.attributes=V,r.attributesNum=te,r.index=F}function x(){let P=r.newAttributes;for(let U=0,O=P.length;U<O;U++)P[U]=0}function p(P){g(P,0)}function g(P,U){let O=r.newAttributes,F=r.enabledAttributes,V=r.attributeDivisors;O[P]=1,F[P]===0&&(i.enableVertexAttribArray(P),F[P]=1),V[P]!==U&&(i.vertexAttribDivisor(P,U),V[P]=U)}function y(){let P=r.newAttributes,U=r.enabledAttributes;for(let O=0,F=U.length;O<F;O++)U[O]!==P[O]&&(i.disableVertexAttribArray(O),U[O]=0)}function M(P,U,O,F,V,k,te){te===!0?i.vertexAttribIPointer(P,U,O,V,k):i.vertexAttribPointer(P,U,O,F,V,k)}function _(P,U,O,F){x();let V=F.attributes,k=O.getAttributes(),te=U.defaultAttributeValues;for(let L in k){let G=k[L];if(G.location>=0){let X=V[L];if(X===void 0&&(L==="instanceMatrix"&&P.instanceMatrix&&(X=P.instanceMatrix),L==="instanceColor"&&P.instanceColor&&(X=P.instanceColor)),X!==void 0){let j=X.normalized,re=X.itemSize,de=e.get(X);if(de===void 0)continue;let Fe=de.buffer,ze=de.type,Xe=de.bytesPerElement,ae=ze===i.INT||ze===i.UNSIGNED_INT||X.gpuType===wl;if(X.isInterleavedBufferAttribute){let le=X.data,Te=le.stride,We=X.offset;if(le.isInstancedInterleavedBuffer){for(let Ce=0;Ce<G.locationSize;Ce++)g(G.location+Ce,le.meshPerAttribute);P.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ce=0;Ce<G.locationSize;Ce++)p(G.location+Ce);i.bindBuffer(i.ARRAY_BUFFER,Fe);for(let Ce=0;Ce<G.locationSize;Ce++)M(G.location+Ce,re/G.locationSize,ze,j,Te*Xe,(We+re/G.locationSize*Ce)*Xe,ae)}else{if(X.isInstancedBufferAttribute){for(let le=0;le<G.locationSize;le++)g(G.location+le,X.meshPerAttribute);P.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let le=0;le<G.locationSize;le++)p(G.location+le);i.bindBuffer(i.ARRAY_BUFFER,Fe);for(let le=0;le<G.locationSize;le++)M(G.location+le,re/G.locationSize,ze,j,re*Xe,re/G.locationSize*le*Xe,ae)}}else if(te!==void 0){let j=te[L];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(G.location,j);break;case 3:i.vertexAttrib3fv(G.location,j);break;case 4:i.vertexAttrib4fv(G.location,j);break;default:i.vertexAttrib1fv(G.location,j)}}}}y()}function b(){T();for(let P in n){let U=n[P];for(let O in U){let F=U[O];for(let V in F){let k=F[V];for(let te in k)h(k[te].object),delete k[te];delete F[V]}}delete n[P]}}function S(P){if(n[P.id]===void 0)return;let U=n[P.id];for(let O in U){let F=U[O];for(let V in F){let k=F[V];for(let te in k)h(k[te].object),delete k[te];delete F[V]}}delete n[P.id]}function A(P){for(let U in n){let O=n[U];for(let F in O){let V=O[F];if(V[P.id]===void 0)continue;let k=V[P.id];for(let te in k)h(k[te].object),delete k[te];delete V[P.id]}}}function v(P){for(let U in n){let O=n[U],F=P.isInstancedMesh===!0?P.id:0,V=O[F];if(V!==void 0){for(let k in V){let te=V[k];for(let L in te)h(te[L].object),delete te[L];delete V[k]}delete O[F],Object.keys(O).length===0&&delete n[U]}}}function T(){R(),o=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:R,dispose:b,releaseStatesOfGeometry:S,releaseStatesOfObject:v,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:p,disableUnusedAttributes:y}}function ox(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function ax(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==Cn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let v=A===Zt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Mn&&A!==On&&!v&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(nt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:_,maxSamples:b,samples:S}}function lx(i){let e=this,t=null,n=0,s=!1,r=!1,o=new ii,a=new ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,g=i.get(d);if(!s||m===null||m.length===0||r&&!p)r?h(null):c();else{let y=r?0:n,M=y*4,_=g.clippingState||null;l.value=_,_=h(m,u,M,f);for(let b=0;b!==M;++b)_[b]=t[b];g.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,m){let x=d!==null?d.length:0,p=null;if(x!==0){if(p=l.value,m!==!0||p===null){let g=f+x*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<g)&&(p=new Float32Array(g));for(let M=0,_=f;M!==x;++M,_+=4)o.copy(d[M]).applyMatrix4(y,a),o.normal.toArray(p,_),p[_+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}var br=4,cx=6,hx=20,ux=256,Zo=new bs,Zf=new we,$h=null,Jh=0,Kh=0,Qh=!1,fx=new N,Ps=new N,wr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=fx}=r;$h=this._renderer.getRenderTarget(),Jh=this._renderer.getActiveCubeFace(),Kh=this._renderer.getActiveMipmapLevel(),Qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget($h,Jh,Kh),this._renderer.xr.enabled=Qh,e.scissorTest=!1,Er(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===is||e.mapping===Rs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$h=this._renderer.getRenderTarget(),Jh=this._renderer.getActiveCubeFace(),Kh=this._renderer.getActiveMipmapLevel(),Qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:Zt,format:Cn,colorSpace:Qr,depthBuffer:!1},s=$f(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$f(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=dx(r)),this._blurMaterial=mx(r,e,t),this._ggxMaterial=px(r,e,t)}return s}_compileMaterial(e){let t=new be(new Mt,e);this._renderer.compile(t,Zo)}_sceneToCubeUV(e,t,n,s,r){let l=new un(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Zf),d.toneMapping=ci,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new be(new ct,new dt({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,p=x.material,g=!1,y=e.background;y?y.isColor&&(p.color.copy(y),e.background=null,g=!0):(p.color.copy(Zf),g=!0);for(let M=0;M<6;M++){let _=M%3;_===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[M],r.y,r.z)):_===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[M]));let b=this._cubeSize;Er(s,_*b,M>2?b:0,b,b),d.setRenderTarget(s),g&&d.render(x,l),d.render(e,l)}d.toneMapping=f,d.autoClear=u,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===is||e.mapping===Rs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Er(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Zo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:m}=this,x=this._sizeLods[n],p=3*x*(n>m-br?n-m+br:0),g=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=m-t,Er(r,p,g,3*x,2*x),s.setRenderTarget(r),s.render(a,Zo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,Er(e,p,g,3*x,2*x),s.setRenderTarget(e),s.render(a,Zo)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-br?s-this._lodMax+br:0),u=4*(this._cubeSize-h);Er(t,d,u,3*h,2*h),o.setRenderTarget(t),o.render(l,Zo)}};function dx(i){let e=[],t=[],n=i,s=i-br+1+cx;for(let r=0;r<s;r++){let o=Math.pow(2,n);e.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,m=new Float32Array(f*u*d),x=new Float32Array(f*u*d);for(let g=0;g<d;g++){let y=g%3*2/3-1,M=g>2?0:-1,_=[y,M,0,y+2/3,M,0,y+2/3,M+1,0,y,M,0,y+2/3,M+1,0,y,M+1,0];m.set(_,f*u*g);for(let b=0;b<u;b++){let S=h[b*2]*2-1,A=h[b*2+1]*2-1;g===0?Ps.set(1,A,S):g===1?Ps.set(-S,1,-A):g===2?Ps.set(-S,A,1):g===3?Ps.set(-1,A,-S):g===4?Ps.set(-S,-1,A):Ps.set(S,A,-1),Ps.toArray(x,(g*u+b)*f)}}let p=new Mt;p.setAttribute("position",new yt(m,f)),p.setAttribute("outputDirection",new yt(x,f)),t.push(new be(p,null)),n>br&&n--}return{lodMeshes:t,sizeLods:e}}function $f(i,e,t){let n=new Vt(i,e,t);return n.texture.mapping=Ho,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Er(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function px(i,e,t){return new Bt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ux,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:mc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Yt,depthTest:!1,depthWrite:!1})}function mx(i,e,t){return new Bt({name:"SphericalGaussianBlur",defines:{SAMPLES:hx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:mc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Yt,depthTest:!1,depthWrite:!1})}function Jf(){return new Bt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Yt,depthTest:!1,depthWrite:!1})}function Kf(){return new Bt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yt,depthTest:!1,depthWrite:!1})}function mc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var dc=class extends Vt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new fo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ct(5,5,5),r=new Bt({name:"CubemapFromEquirect",uniforms:Cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:Yt});r.uniforms.tEquirect.value=t;let o=new be(s,r),a=t.minFilter;return t.minFilter===ss&&(t.minFilter=gn),new vl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function gx(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===El||f===bl)if(e.has(u)){let m=e.get(u).texture;return a(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let x=new dc(m.height);return x.fromEquirectangularTexture(i,u),e.set(u,x),u.addEventListener("dispose",c),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,m=f===El||f===bl,x=f===is||f===Rs;if(m||x){let p=t.get(u),g=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new wr(i)),p=m?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{let y=u.image;return m&&y&&y.height>0||x&&y&&l(y)?(n===null&&(n=new wr(i)),p=m?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function a(u,f){return f===El?u.mapping=is:f===bl&&(u.mapping=Rs),u}function l(u){let f=0,m=6;for(let x=0;x<m;x++)u[x]!==void 0&&f++;return f===m}function c(u){let f=u.target;f.removeEventListener("dispose",c);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function xx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&_s("WebGLRenderer: "+n+" extension not supported."),s}}}function _x(i,e,t,n){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let m in u.attributes)e.remove(u.attributes[m]);u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)e.update(u[f],i.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,m=d.attributes.position,x=0;if(m===void 0)return;if(f!==null){let y=f.array;x=f.version;for(let M=0,_=y.length;M<_;M+=3){let b=y[M+0],S=y[M+1],A=y[M+2];u.push(b,S,S,A,A,b)}}else{let y=m.array;x=m.version;for(let M=0,_=y.length/3-1;M<_;M+=3){let b=M+0,S=M+1,A=M+2;u.push(b,S,S,A,A,b)}}let p=new(m.count>=65535?oo:ro)(u,1);p.version=x;let g=r.get(d);g&&e.remove(g),r.set(d,p)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function vx(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*o),t.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*o,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let x=0;for(let p=0;p<f;p++)x+=u[p];t.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function yx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:lt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Mx(i,e,t){let n=new WeakMap,s=new Nt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let T=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],M=0;f===!0&&(M=1),m===!0&&(M=2),x===!0&&(M=3);let _=a.attributes.position.count*M,b=1;_>e.maxTextureSize&&(b=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let S=new Float32Array(_*b*4*d),A=new no(S,_,b,d);A.type=On,A.needsUpdate=!0;let v=M*4;for(let R=0;R<d;R++){let P=p[R],U=g[R],O=y[R],F=_*b*4*R;for(let V=0;V<P.count;V++){let k=V*v;f===!0&&(s.fromBufferAttribute(P,V),S[F+k+0]=s.x,S[F+k+1]=s.y,S[F+k+2]=s.z,S[F+k+3]=0),m===!0&&(s.fromBufferAttribute(U,V),S[F+k+4]=s.x,S[F+k+5]=s.y,S[F+k+6]=s.z,S[F+k+7]=0),x===!0&&(s.fromBufferAttribute(O,V),S[F+k+8]=s.x,S[F+k+9]=s.y,S[F+k+10]=s.z,S[F+k+11]=O.itemSize===4?s.w:1)}}u={count:d,texture:A,size:new me(_,b)},n.set(a,u),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Sx(i,e,t,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var Ex={[Do]:"LINEAR_TONE_MAPPING",[Uo]:"REINHARD_TONE_MAPPING",[No]:"CINEON_TONE_MAPPING",[As]:"ACES_FILMIC_TONE_MAPPING",[Bo]:"AGX_TONE_MAPPING",[Oo]:"NEUTRAL_TONE_MAPPING",[Fo]:"CUSTOM_TONE_MAPPING"};function bx(i,e,t,n,s,r){let o=new Vt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Mt;c.setAttribute("position",new at([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new at([0,2,0,0,2,0],2));let h=new _r({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new be(c,h),u=new bs(-1,1,1,-1,0,1),f=null,m=null,x=!1,p,g=null,y=[],M=!1;this.setSize=function(_,b){o.setSize(_,b),a!==null&&a.setSize(_,b),l!==null&&l.setSize(_,b);for(let S=0;S<y.length;S++){let A=y[S];A.setSize&&A.setSize(_,b)}},this.setEffects=function(_){y=_,M=y.length>0&&y[0].isRenderPass===!0;let b=o.width,S=o.height;y.length>0&&a===null&&(a=new Vt(b,S,{type:Zt,depthBuffer:!1,stencilBuffer:!1}),l=new Vt(b,S,{type:Zt,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<y.length;A++){let v=y[A];v.setSize&&v.setSize(b,S)}},this.begin=function(_,b){if(x||_.toneMapping===ci&&y.length===0)return!1;if(g=b,b!==null){let S=b.width,A=b.height;(o.width!==S||o.height!==A)&&this.setSize(S,A)}return M===!1&&_.setRenderTarget(o),p=_.toneMapping,_.toneMapping=ci,!0},this.hasRenderPass=function(){return M},this.end=function(_,b){_.toneMapping=p,x=!0;let S=o,A=a;for(let v=0;v<y.length;v++){let T=y[v];T.enabled!==!1&&(T.render(_,A,S,b),T.needsSwap!==!1&&(S=A,A=A===a?l:a))}if(f!==_.outputColorSpace||m!==_.toneMapping){f=_.outputColorSpace,m=_.toneMapping,h.defines={},Et.getTransfer(f)===At&&(h.defines.SRGB_TRANSFER="");let v=Ex[m];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,_.setRenderTarget(g),_.render(d,u),g=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var xd=new Rn,tu=new yi(1,1),_d=new no,vd=new Ka,yd=new fo,Qf=[],jf=[],ed=new Float32Array(16),td=new Float32Array(9),nd=new Float32Array(4);function Ar(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Qf[s];if(r===void 0&&(r=new Float32Array(s),Qf[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function on(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function an(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function gc(i,e){let t=jf[e];t===void 0&&(t=new Int32Array(e),jf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Tx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function wx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2fv(this.addr,e),an(t,e)}}function Ax(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;i.uniform3fv(this.addr,e),an(t,e)}}function Rx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4fv(this.addr,e),an(t,e)}}function Cx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;nd.set(n),i.uniformMatrix2fv(this.addr,!1,nd),an(t,n)}}function Px(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;td.set(n),i.uniformMatrix3fv(this.addr,!1,td),an(t,n)}}function Ix(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;ed.set(n),i.uniformMatrix4fv(this.addr,!1,ed),an(t,n)}}function Lx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Dx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2iv(this.addr,e),an(t,e)}}function Ux(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;i.uniform3iv(this.addr,e),an(t,e)}}function Nx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4iv(this.addr,e),an(t,e)}}function Fx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Bx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2uiv(this.addr,e),an(t,e)}}function Ox(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;i.uniform3uiv(this.addr,e),an(t,e)}}function Hx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4uiv(this.addr,e),an(t,e)}}function zx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(tu.compareFunction=t.isReversedDepthBuffer()?hc:cc,r=tu):r=xd,t.setTexture2D(e||r,s)}function Gx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||vd,s)}function kx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||yd,s)}function Vx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||_d,s)}function Wx(i){switch(i){case 5126:return Tx;case 35664:return wx;case 35665:return Ax;case 35666:return Rx;case 35674:return Cx;case 35675:return Px;case 35676:return Ix;case 5124:case 35670:return Lx;case 35667:case 35671:return Dx;case 35668:case 35672:return Ux;case 35669:case 35673:return Nx;case 5125:return Fx;case 36294:return Bx;case 36295:return Ox;case 36296:return Hx;case 35678:case 36198:case 36298:case 36306:case 35682:return zx;case 35679:case 36299:case 36307:return Gx;case 35680:case 36300:case 36308:case 36293:return kx;case 36289:case 36303:case 36311:case 36292:return Vx}}function Xx(i,e){i.uniform1fv(this.addr,e)}function qx(i,e){let t=Ar(e,this.size,2);i.uniform2fv(this.addr,t)}function Yx(i,e){let t=Ar(e,this.size,3);i.uniform3fv(this.addr,t)}function Zx(i,e){let t=Ar(e,this.size,4);i.uniform4fv(this.addr,t)}function $x(i,e){let t=Ar(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Jx(i,e){let t=Ar(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Kx(i,e){let t=Ar(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Qx(i,e){i.uniform1iv(this.addr,e)}function jx(i,e){i.uniform2iv(this.addr,e)}function e_(i,e){i.uniform3iv(this.addr,e)}function t_(i,e){i.uniform4iv(this.addr,e)}function n_(i,e){i.uniform1uiv(this.addr,e)}function i_(i,e){i.uniform2uiv(this.addr,e)}function s_(i,e){i.uniform3uiv(this.addr,e)}function r_(i,e){i.uniform4uiv(this.addr,e)}function o_(i,e,t){let n=this.cache,s=e.length,r=gc(t,s);on(n,r)||(i.uniform1iv(this.addr,r),an(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=tu:o=xd;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function a_(i,e,t){let n=this.cache,s=e.length,r=gc(t,s);on(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||vd,r[o])}function l_(i,e,t){let n=this.cache,s=e.length,r=gc(t,s);on(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||yd,r[o])}function c_(i,e,t){let n=this.cache,s=e.length,r=gc(t,s);on(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||_d,r[o])}function h_(i){switch(i){case 5126:return Xx;case 35664:return qx;case 35665:return Yx;case 35666:return Zx;case 35674:return $x;case 35675:return Jx;case 35676:return Kx;case 5124:case 35670:return Qx;case 35667:case 35671:return jx;case 35668:case 35672:return e_;case 35669:case 35673:return t_;case 5125:return n_;case 36294:return i_;case 36295:return s_;case 36296:return r_;case 35678:case 36198:case 36298:case 36306:case 35682:return o_;case 35679:case 36299:case 36307:return a_;case 35680:case 36300:case 36308:case 36293:return l_;case 36289:case 36303:case 36311:case 36292:return c_}}var nu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Wx(t.type)}},iu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=h_(t.type)}},su=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},jh=/(\w+)(\])?(\[|\.)?/g;function id(i,e){i.seq.push(e),i.map[e.id]=e}function u_(i,e,t){let n=i.name,s=n.length;for(jh.lastIndex=0;;){let r=jh.exec(n),o=jh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){id(t,c===void 0?new nu(a,i,e):new iu(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new su(a),id(t,d)),t=d}}}var Tr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);u_(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function sd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var f_=37297,d_=0;function p_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var rd=new ut;function m_(i){Et._getMatrix(rd,Et.workingColorSpace,i);let e=`mat3( ${rd.elements.map(t=>t.toFixed(4))} )`;switch(Et.getTransfer(i)){case jr:return[e,"LinearTransferOETF"];case At:return[e,"sRGBTransferOETF"];default:return nt("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function od(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+p_(i.getShaderSource(e),a)}else return r}function g_(i,e){let t=m_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var x_={[Do]:"Linear",[Uo]:"Reinhard",[No]:"Cineon",[As]:"ACESFilmic",[Bo]:"AgX",[Oo]:"Neutral",[Fo]:"Custom"};function __(i,e){let t=x_[e];return t===void 0?(nt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var fc=new N;function v_(){Et.getLuminanceCoefficients(fc);let i=fc.x.toFixed(4),e=fc.y.toFixed(4),t=fc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function y_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jo).join(`
`)}function M_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function S_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Jo(i){return i!==""}function ad(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ld(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var E_=/^[ \t]*#include +<([\w\d./]+)>/gm;function ru(i){return i.replace(E_,T_)}var b_=new Map;function T_(i,e){let t=mt[e];if(t===void 0){let n=b_.get(e);if(n!==void 0)t=mt[n],nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ru(t)}var w_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cd(i){return i.replace(w_,A_)}function A_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function hd(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var R_={[Ts]:"SHADOWMAP_TYPE_PCF",[yr]:"SHADOWMAP_TYPE_VSM"};function C_(i){return R_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var P_={[is]:"ENVMAP_TYPE_CUBE",[Rs]:"ENVMAP_TYPE_CUBE",[Ho]:"ENVMAP_TYPE_CUBE_UV"};function I_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":P_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var L_={[Rs]:"ENVMAP_MODE_REFRACTION"};function D_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":L_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var U_={[Ah]:"ENVMAP_BLENDING_MULTIPLY",[Ef]:"ENVMAP_BLENDING_MIX",[bf]:"ENVMAP_BLENDING_ADD"};function N_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":U_[i.combine]||"ENVMAP_BLENDING_NONE"}function F_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function B_(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=C_(t),c=I_(t),h=D_(t),d=N_(t),u=F_(t),f=y_(t),m=M_(r),x=s.createProgram(),p,g,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Jo).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Jo).join(`
`),g.length>0&&(g+=`
`)):(p=[hd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jo).join(`
`),g=[hd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ci?"#define TONE_MAPPING":"",t.toneMapping!==ci?mt.tonemapping_pars_fragment:"",t.toneMapping!==ci?__("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,g_("linearToOutputTexel",t.outputColorSpace),v_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Jo).join(`
`)),o=ru(o),o=ad(o,t),o=ld(o,t),a=ru(a),a=ad(a,t),a=ld(a,t),o=cd(o),a=cd(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===Fh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let M=y+p+o,_=y+g+a,b=sd(s,s.VERTEX_SHADER,M),S=sd(s,s.FRAGMENT_SHADER,_);s.attachShader(x,b),s.attachShader(x,S),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(P){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(x)||"",O=s.getShaderInfoLog(b)||"",F=s.getShaderInfoLog(S)||"",V=U.trim(),k=O.trim(),te=F.trim(),L=!0,G=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(L=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,b,S);else{let X=od(s,b,"vertex"),j=od(s,S,"fragment");lt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+V+`
`+X+`
`+j)}else V!==""?nt("WebGLProgram: Program Info Log:",V):(k===""||te==="")&&(G=!1);G&&(P.diagnostics={runnable:L,programLog:V,vertexShader:{log:k,prefix:p},fragmentShader:{log:te,prefix:g}})}s.deleteShader(b),s.deleteShader(S),v=new Tr(s,x),T=S_(s,x)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(x,f_)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=d_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=S,this}var O_=0,ou=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new au(e),t.set(e,n)),n}},au=class{constructor(e){this.id=O_++,this.code=e,this.usedTimes=0}};function H_(i){return i===os||i===Xo||i===qo}function z_(i,e,t,n,s,r){let o=new io,a=new ou,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return l.add(v),v===0?"uv":`uv${v}`}function x(v,T,R,P,U,O){let F=P.fog,V=U.geometry,k=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,te=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,L=e.get(v.envMap||k,te),G=L&&L.mapping===Ho?L.image.height:null,X=f[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&nt("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let j=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,re=j!==void 0?j.length:0,de=0;V.morphAttributes.position!==void 0&&(de=1),V.morphAttributes.normal!==void 0&&(de=2),V.morphAttributes.color!==void 0&&(de=3);let Fe,ze,Xe,ae;if(X){let Tt=bi[X];Fe=Tt.vertexShader,ze=Tt.fragmentShader}else{Fe=v.vertexShader,ze=v.fragmentShader;let Tt=a.getVertexShaderStage(v),vt=a.getFragmentShaderStage(v);a.update(v,Tt,vt),Xe=Tt.id,ae=vt.id}let le=i.getRenderTarget(),Te=i.state.buffers.depth.getReversed(),We=U.isInstancedMesh===!0,Ce=U.isBatchedMesh===!0,Ke=!!v.map,rt=!!v.matcap,fe=!!L,_e=!!v.aoMap,Se=!!v.lightMap,Ee=!!v.bumpMap&&v.wireframe===!1,q=!!v.normalMap,ve=!!v.displacementMap,Pe=!!v.emissiveMap,Le=!!v.metalnessMap,Ue=!!v.roughnessMap,H=v.anisotropy>0,qe=v.clearcoat>0,tt=v.dispersion>0,D=v.retroreflectivity>0,E=v.iridescence>0,Y=v.sheen>0,Q=v.transmission>0,se=H&&!!v.anisotropyMap,ye=qe&&!!v.clearcoatMap,Ie=qe&&!!v.clearcoatNormalMap,he=qe&&!!v.clearcoatRoughnessMap,pe=E&&!!v.iridescenceMap,z=E&&!!v.iridescenceThicknessMap,Z=Y&&!!v.sheenColorMap,W=Y&&!!v.sheenRoughnessMap,ne=!!v.specularMap,oe=!!v.specularColorMap,ie=!!v.specularIntensityMap,ue=Q&&!!v.transmissionMap,B=Q&&!!v.thicknessMap,ge=!!v.gradientMap,ce=!!v.alphaMap,Ae=v.alphaTest>0,Oe=!!v.alphaHash,xe=!!v.extensions,Je=ci;v.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Je=i.toneMapping);let $e={shaderID:X,shaderType:v.type,shaderName:v.name,vertexShader:Fe,fragmentShader:ze,defines:v.defines,customVertexShaderID:Xe,customFragmentShaderID:ae,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:Ce,batchingColor:Ce&&U._colorsTexture!==null,instancing:We,instancingColor:We&&U.instanceColor!==null,instancingMorph:We&&U.morphTexture!==null,outputColorSpace:le===null?i.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Et.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ke,matcap:rt,envMap:fe,envMapMode:fe&&L.mapping,envMapCubeUVHeight:G,aoMap:_e,lightMap:Se,bumpMap:Ee,normalMap:q,displacementMap:ve,emissiveMap:Pe,normalMapObjectSpace:q&&v.normalMapType===Rf,normalMapTangentSpace:q&&v.normalMapType===Yo,packedNormalMap:q&&v.normalMapType===Yo&&H_(v.normalMap.format),metalnessMap:Le,roughnessMap:Ue,anisotropy:H,anisotropyMap:se,clearcoat:qe,clearcoatMap:ye,clearcoatNormalMap:Ie,clearcoatRoughnessMap:he,dispersion:tt,retroreflection:D,iridescence:E,iridescenceMap:pe,iridescenceThicknessMap:z,sheen:Y,sheenColorMap:Z,sheenRoughnessMap:W,specularMap:ne,specularColorMap:oe,specularIntensityMap:ie,transmission:Q,transmissionMap:ue,thicknessMap:B,gradientMap:ge,opaque:v.transparent===!1&&v.blending===Mr&&v.alphaToCoverage===!1,alphaMap:ce,alphaTest:Ae,alphaHash:Oe,combine:v.combine,mapUv:Ke&&m(v.map.channel),aoMapUv:_e&&m(v.aoMap.channel),lightMapUv:Se&&m(v.lightMap.channel),bumpMapUv:Ee&&m(v.bumpMap.channel),normalMapUv:q&&m(v.normalMap.channel),displacementMapUv:ve&&m(v.displacementMap.channel),emissiveMapUv:Pe&&m(v.emissiveMap.channel),metalnessMapUv:Le&&m(v.metalnessMap.channel),roughnessMapUv:Ue&&m(v.roughnessMap.channel),anisotropyMapUv:se&&m(v.anisotropyMap.channel),clearcoatMapUv:ye&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:z&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:Z&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:W&&m(v.sheenRoughnessMap.channel),specularMapUv:ne&&m(v.specularMap.channel),specularColorMapUv:oe&&m(v.specularColorMap.channel),specularIntensityMapUv:ie&&m(v.specularIntensityMap.channel),transmissionMapUv:ue&&m(v.transmissionMap.channel),thicknessMapUv:B&&m(v.thicknessMap.channel),alphaMapUv:ce&&m(v.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(q||H),vertexNormals:!!V.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!V.attributes.uv&&(Ke||ce),fog:!!F,useFog:v.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||V.attributes.normal===void 0&&q===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Te,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:de,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Je,decodeVideoTexture:Ke&&v.map.isVideoTexture===!0&&Et.getTransfer(v.map.colorSpace)===At,decodeVideoTextureEmissive:Pe&&v.emissiveMap.isVideoTexture===!0&&Et.getTransfer(v.emissiveMap.colorSpace)===At,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===It,flipSided:v.side===rn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:xe&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&v.extensions.multiDraw===!0||Ce)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return $e.vertexUv1s=l.has(1),$e.vertexUv2s=l.has(2),$e.vertexUv3s=l.has(3),l.clear(),$e}function p(v){let T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(let R in v.defines)T.push(R),T.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(g(T,v),y(T,v),T.push(i.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function g(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numSunLights),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numSunLightShadows),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function y(v,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function M(v){let T=f[v.type],R;if(T){let P=bi[T];R=Pn.clone(P.uniforms)}else R=v.uniforms;return R}function _(v,T){let R=h.get(T);return R!==void 0?++R.usedTimes:(R=new B_(i,T,v,s),c.push(R),h.set(T,R)),R}function b(v){if(--v.usedTimes===0){let T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function S(v){a.remove(v)}function A(){a.dispose()}return{getParameters:x,getProgramCacheKey:p,getUniforms:M,acquireProgram:_,releaseProgram:b,releaseShaderCache:S,programs:c,dispose:A}}function G_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function k_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function ud(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function fd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,m,x,p,g){let y=i[e];return y===void 0?(y={id:u.id,object:u,geometry:f,material:m,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:p,group:g},i[e]=y):(y.id=u.id,y.object=u,y.geometry=f,y.material=m,y.materialVariant=o(u),y.groupOrder=x,y.renderOrder=u.renderOrder,y.z=p,y.group=g),e++,y}function l(u,f,m,x,p,g,y){y.reversedDepth===!0&&(p=-p);let M=a(u,f,m,x,p,g);m.transmission>0?n.push(M):m.transparent===!0?s.push(M):t.push(M)}function c(u,f,m,x,p,g){let y=a(u,f,m,x,p,g);m.transmission>0?n.unshift(y):m.transparent===!0?s.unshift(y):t.unshift(y)}function h(u,f){t.length>1&&t.sort(u||k_),n.length>1&&n.sort(f||ud),s.length>1&&s.sort(f||ud)}function d(){for(let u=e,f=i.length;u<f;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function V_(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new fd,i.set(n,[o])):s>=r.length?(o=new fd,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function W_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new N,color:new we};break;case"SpotLight":t={position:new N,direction:new N,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new we,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new we,groundColor:new we};break;case"RectAreaLight":t={color:new we,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function X_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var q_=0;function Y_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Z_(i){let e=new W_,t=X_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);let s=new N,r=new et,o=new et;function a(c){let h=0,d=0,u=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let f=0,m=0,x=0,p=0,g=0,y=0,M=0,_=0,b=0,S=0,A=0,v=0,T=0,R=0;c.sort(Y_);for(let U=0,O=c.length;U<O;U++){let F=c[U],V=F.color,k=F.intensity,te=F.distance,L=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===os?L=F.shadow.map.texture:L=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)h+=V.r*k,d+=V.g*k,u+=V.b*k;else if(F.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(F.sh.coefficients[G],k);R++}else if(F.isSunLight){let G=e.get(F);if(G.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let X=F.shadow,j=t.get(F);j.shadowIntensity=X.intensity,j.shadowBias=X.bias,j.shadowNormalBias=X.normalBias,j.shadowRadius=X.radius,j.shadowMapSize.copy(X.mapSize).multiply(X.getFrameExtents()),n.sunShadow[m]=j,n.sunShadowMap[m]=L;let re=X.getViewportCount();for(let de=0;de<re;de++)n.sunShadowMatrix[x+de]=X.getMatrix(de),n.sunShadowCascade[x+de]=X._cascadeData[de];x+=re,m++}n.sun[f]=G,f++}else if(F.isDirectionalLight){let G=e.get(F);if(G.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let X=F.shadow,j=t.get(F);j.shadowIntensity=X.intensity,j.shadowBias=X.bias,j.shadowNormalBias=X.normalBias,j.shadowRadius=X.radius,j.shadowMapSize=X.mapSize,n.directionalShadow[p]=j,n.directionalShadowMap[p]=L,n.directionalShadowMatrix[p]=F.shadow.matrix,b++}n.directional[p]=G,p++}else if(F.isSpotLight){let G=e.get(F);G.position.setFromMatrixPosition(F.matrixWorld),G.color.copy(V).multiplyScalar(k),G.distance=te,G.coneCos=Math.cos(F.angle),G.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),G.decay=F.decay,n.spot[y]=G;let X=F.shadow;if(F.map&&(n.spotLightMap[v]=F.map,v++,X.updateMatrices(F),F.castShadow&&T++),n.spotLightMatrix[y]=X.matrix,F.castShadow){let j=t.get(F);j.shadowIntensity=X.intensity,j.shadowBias=X.bias,j.shadowNormalBias=X.normalBias,j.shadowRadius=X.radius,j.shadowMapSize=X.mapSize,n.spotShadow[y]=j,n.spotShadowMap[y]=L,A++}y++}else if(F.isRectAreaLight){let G=e.get(F);G.color.copy(V).multiplyScalar(k),G.halfWidth.set(F.width*.5,0,0),G.halfHeight.set(0,F.height*.5,0),n.rectArea[M]=G,M++}else if(F.isPointLight){let G=e.get(F);if(G.color.copy(F.color).multiplyScalar(F.intensity),G.distance=F.distance,G.decay=F.decay,F.castShadow){let X=F.shadow,j=t.get(F);j.shadowIntensity=X.intensity,j.shadowBias=X.bias,j.shadowNormalBias=X.normalBias,j.shadowRadius=X.radius,j.shadowMapSize=X.mapSize,j.shadowCameraNear=X.camera.near,j.shadowCameraFar=X.camera.far,n.pointShadow[g]=j,n.pointShadowMap[g]=L,n.pointShadowMatrix[g]=F.shadow.matrix,S++}n.point[g]=G,g++}else if(F.isHemisphereLight){let G=e.get(F);G.skyColor.copy(F.color).multiplyScalar(k),G.groundColor.copy(F.groundColor).multiplyScalar(k),n.hemi[_]=G,_++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ke.LTC_FLOAT_1,n.rectAreaLTC2=ke.LTC_FLOAT_2):(n.rectAreaLTC1=ke.LTC_HALF_1,n.rectAreaLTC2=ke.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let P=n.hash;(P.sunLength!==f||P.directionalLength!==p||P.pointLength!==g||P.spotLength!==y||P.rectAreaLength!==M||P.hemiLength!==_||P.numSunShadows!==m||P.numDirectionalShadows!==b||P.numPointShadows!==S||P.numSpotShadows!==A||P.numSpotMaps!==v||P.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=p,n.spot.length=y,n.rectArea.length=M,n.point.length=g,n.hemi.length=_,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+v-T,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,P.sunLength=f,P.directionalLength=p,P.pointLength=g,P.spotLength=y,P.rectAreaLength=M,P.hemiLength=_,P.numSunShadows=m,P.numDirectionalShadows=b,P.numPointShadows=S,P.numSpotShadows=A,P.numSpotMaps=v,P.numLightProbes=R,n.version=q_++)}function l(c,h){let d=0,u=0,f=0,m=0,x=0,p=0,g=h.matrixWorldInverse;for(let y=0,M=c.length;y<M;y++){let _=c[y];if(_.isSunLight){let b=n.sun[d];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(g),d++}else if(_.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),u++}else if(_.isSpotLight){let b=n.spot[m];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),m++}else if(_.isRectAreaLight){let b=n.rectArea[x];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(g),o.identity(),r.copy(_.matrixWorld),r.premultiply(g),o.extractRotation(r),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(_.isPointLight){let b=n.point[f];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(g),f++}else if(_.isHemisphereLight){let b=n.hemi[p];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(g),p++}}}return{setup:a,setupView:l,state:n}}function dd(i){let e=new Z_(i),t=[],n=[],s=[];function r(u){d.camera=u,t.length=0,n.length=0,s.length=0}function o(u){t.push(u)}function a(u){n.push(u)}function l(u){s.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function $_(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new dd(i),e.set(s,[a])):r>=o.length?(a=new dd(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var J_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,K_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Q_=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],j_=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],pd=new et,$o=new N,eu=new N;function ev(i,e,t){let n=new dr,s=new me,r=new me,o=new Nt,a=new al,l=new ll,c={},h=t.maxTextureSize,d={[ns]:rn,[rn]:ns,[It]:It},u=new Bt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:J_,fragmentShader:K_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new Mt;m.setAttribute("position",new yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new be(m,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ts;let g=this.type;this.render=function(S,A,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;this.type===lf&&(nt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ts);let T=i.getRenderTarget(),R=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Yt),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let O=g!==this.type;O&&A.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(V=>V.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,V=S.length;F<V;F++){let k=S[F],te=k.shadow;if(te===void 0){nt("WebGLShadowMap:",k,"has no shadow.");continue}if(te.autoUpdate===!1&&te.needsUpdate===!1)continue;s.copy(te.mapSize);let L=te.getFrameExtents();s.multiply(L),r.copy(te.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/L.x),s.x=r.x*L.x,te.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/L.y),s.y=r.y*L.y,te.mapSize.y=r.y));let G=i.state.buffers.depth.getReversed();if(te.camera._reversedDepth=G,te.map===null||O===!0){if(te.map!==null&&(te.map.depthTexture!==null&&(te.map.depthTexture.dispose(),te.map.depthTexture=null),te.map.dispose()),this.type===yr){if(k.isPointLight){nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}te.map=new Vt(s.x,s.y,{format:os,type:Zt,minFilter:gn,magFilter:gn,generateMipmaps:!1}),te.map.texture.name=k.name+".shadowMap",te.map.depthTexture=new yi(s.x,s.y,On),te.map.depthTexture.name=k.name+".shadowMapDepth",te.map.depthTexture.format=gi,te.map.depthTexture.compareFunction=null,te.map.depthTexture.minFilter=Kt,te.map.depthTexture.magFilter=Kt}else k.isPointLight?(te.map=new dc(s.x),te.map.depthTexture=new el(s.x,hi)):(te.map=new Vt(s.x,s.y),te.map.depthTexture=new yi(s.x,s.y,hi)),te.map.depthTexture.name=k.name+".shadowMap",te.map.depthTexture.format=gi,this.type===Ts?(te.map.depthTexture.compareFunction=G?hc:cc,te.map.depthTexture.minFilter=gn,te.map.depthTexture.magFilter=gn):(te.map.depthTexture.compareFunction=null,te.map.depthTexture.minFilter=Kt,te.map.depthTexture.magFilter=Kt);te.camera.updateProjectionMatrix()}te.map.isWebGLCubeRenderTarget!==!0&&(te.map.width!==s.x||te.map.height!==s.y)&&te.map.setSize(s.x,s.y);let X=te.map.isWebGLCubeRenderTarget?6:te.getViewportCount();k.isPointLight!==!0&&te.updateMatrices(k,v);for(let j=0;j<X;j++){let re=te.getCamera(j);if(k.isPointLight){let de=te.camera,Fe=te.matrix,ze=k.distance||de.far;ze!==de.far&&(de.far=ze,de.updateProjectionMatrix()),$o.setFromMatrixPosition(k.matrixWorld),de.position.copy($o),eu.copy(de.position),eu.add(Q_[j]),de.up.copy(j_[j]),de.lookAt(eu),de.updateMatrixWorld(),Fe.makeTranslation(-$o.x,-$o.y,-$o.z),pd.multiplyMatrices(de.projectionMatrix,de.matrixWorldInverse),te._frustum.setFromProjectionMatrix(pd,de.coordinateSystem,de.reversedDepth)}if(te.map.isWebGLCubeRenderTarget)i.setRenderTarget(te.map,j),i.clear();else{j===0&&(i.setRenderTarget(te.map),i.clear());let de=te.getViewport(j);o.set(r.x*de.x,r.y*de.y,r.x*de.z,r.y*de.w),U.viewport(o)}n=te.getFrustum(j),_(A,v,re,k,this.type)}te.isPointLightShadow!==!0&&this.type===yr&&y(te,v),te.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(T,R,P)};function y(S,A){let v=e.update(x);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new Vt(s.x,s.y,{format:os,type:Zt}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),u.uniforms.shadow_pass.value=S.map.depthTexture,u.uniforms.resolution.value.set(S.map.width,S.map.height),u.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(A,null,v,u,x,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(A,null,v,f,x,null)}function M(S,A,v,T){let R=null,P=v.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(P!==void 0)R=P;else if(R=v.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let U=R.uuid,O=A.uuid,F=c[U];F===void 0&&(F={},c[U]=F);let V=F[O];V===void 0&&(V=R.clone(),F[O]=V,A.addEventListener("dispose",b)),R=V}if(R.visible=A.visible,R.wireframe=A.wireframe,T===yr?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:d[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,v.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let U=i.properties.get(R);U.light=v}return R}function _(S,A,v,T,R){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&R===yr)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,S.matrixWorld);let O=e.update(S),F=S.material;if(Array.isArray(F)){let V=O.groups;for(let k=0,te=V.length;k<te;k++){let L=V[k],G=F[L.materialIndex];if(G&&G.visible){let X=M(S,G,T,R);S.onBeforeShadow(i,S,A,v,O,X,L),i.renderBufferDirect(v,null,O,X,S,L),S.onAfterShadow(i,S,A,v,O,X,L)}}}else if(F.visible){let V=M(S,F,T,R);S.onBeforeShadow(i,S,A,v,O,V,null),i.renderBufferDirect(v,null,O,V,S,null),S.onAfterShadow(i,S,A,v,O,V,null)}}let U=S.children;for(let O=0,F=U.length;O<F;O++)_(U[O],A,v,T,R)}function b(S){S.target.removeEventListener("dispose",b);for(let v in c){let T=c[v],R=S.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function tv(i,e){function t(){let B=!1,ge=new Nt,ce=null,Ae=new Nt(0,0,0,0);return{setMask:function(Oe){ce!==Oe&&!B&&(i.colorMask(Oe,Oe,Oe,Oe),ce=Oe)},setLocked:function(Oe){B=Oe},setClear:function(Oe,xe,Je,$e,Tt){Tt===!0&&(Oe*=$e,xe*=$e,Je*=$e),ge.set(Oe,xe,Je,$e),Ae.equals(ge)===!1&&(i.clearColor(Oe,xe,Je,$e),Ae.copy(ge))},reset:function(){B=!1,ce=null,Ae.set(-1,0,0,0)}}}function n(){let B=!1,ge=!1,ce=null,Ae=null,Oe=null;return{setReversed:function(xe){if(ge!==xe){let Je=e.get("EXT_clip_control");xe?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT),ge=xe;let $e=Oe;Oe=null,this.setClear($e)}},getReversed:function(){return ge},setTest:function(xe){xe?le(i.DEPTH_TEST):Te(i.DEPTH_TEST)},setMask:function(xe){ce!==xe&&!B&&(i.depthMask(xe),ce=xe)},setFunc:function(xe){if(ge&&(xe=Hf[xe]),Ae!==xe){switch(xe){case za:i.depthFunc(i.NEVER);break;case Ga:i.depthFunc(i.ALWAYS);break;case ka:i.depthFunc(i.LESS);break;case sr:i.depthFunc(i.LEQUAL);break;case Va:i.depthFunc(i.EQUAL);break;case Wa:i.depthFunc(i.GEQUAL);break;case Xa:i.depthFunc(i.GREATER);break;case qa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ae=xe}},setLocked:function(xe){B=xe},setClear:function(xe){Oe!==xe&&(Oe=xe,ge&&(xe=1-xe),i.clearDepth(xe))},reset:function(){B=!1,ce=null,Ae=null,Oe=null,ge=!1}}}function s(){let B=!1,ge=null,ce=null,Ae=null,Oe=null,xe=null,Je=null,$e=null,Tt=null;return{setTest:function(vt){B||(vt?le(i.STENCIL_TEST):Te(i.STENCIL_TEST))},setMask:function(vt){ge!==vt&&!B&&(i.stencilMask(vt),ge=vt)},setFunc:function(vt,pn,bn){(ce!==vt||Ae!==pn||Oe!==bn)&&(i.stencilFunc(vt,pn,bn),ce=vt,Ae=pn,Oe=bn)},setOp:function(vt,pn,bn){(xe!==vt||Je!==pn||$e!==bn)&&(i.stencilOp(vt,pn,bn),xe=vt,Je=pn,$e=bn)},setLocked:function(vt){B=vt},setClear:function(vt){Tt!==vt&&(i.clearStencil(vt),Tt=vt)},reset:function(){B=!1,ge=null,ce=null,Ae=null,Oe=null,xe=null,Je=null,$e=null,Tt=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,m=[],x=null,p=!1,g=null,y=null,M=null,_=null,b=null,S=null,A=null,v=new we(0,0,0),T=0,R=!1,P=null,U=null,O=null,F=null,V=null,k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),te=!1,L=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(G)[1]),te=L>=1):G.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),te=L>=2);let X=null,j={},re=i.getParameter(i.SCISSOR_BOX),de=i.getParameter(i.VIEWPORT),Fe=new Nt().fromArray(re),ze=new Nt().fromArray(de);function Xe(B,ge,ce,Ae){let Oe=new Uint8Array(4),xe=i.createTexture();i.bindTexture(B,xe),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Je=0;Je<ce;Je++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(ge,0,i.RGBA,1,1,Ae,0,i.RGBA,i.UNSIGNED_BYTE,Oe):i.texImage2D(ge+Je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Oe);return xe}let ae={};ae[i.TEXTURE_2D]=Xe(i.TEXTURE_2D,i.TEXTURE_2D,1),ae[i.TEXTURE_CUBE_MAP]=Xe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[i.TEXTURE_2D_ARRAY]=Xe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ae[i.TEXTURE_3D]=Xe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(i.DEPTH_TEST),o.setFunc(sr),Ee(!1),q(Sh),le(i.CULL_FACE),_e(Yt);function le(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function Te(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function We(B,ge){return u[B]!==ge?(i.bindFramebuffer(B,ge),u[B]=ge,B===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ge),B===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ge),!0):!1}function Ce(B,ge){let ce=m,Ae=!1;if(B){ce=f.get(ge),ce===void 0&&(ce=[],f.set(ge,ce));let Oe=B.textures;if(ce.length!==Oe.length||ce[0]!==i.COLOR_ATTACHMENT0){for(let xe=0,Je=Oe.length;xe<Je;xe++)ce[xe]=i.COLOR_ATTACHMENT0+xe;ce.length=Oe.length,Ae=!0}}else ce[0]!==i.BACK&&(ce[0]=i.BACK,Ae=!0);Ae&&i.drawBuffers(ce)}function Ke(B){return x!==B?(i.useProgram(B),x=B,!0):!1}let rt={[$n]:i.FUNC_ADD,[cf]:i.FUNC_SUBTRACT,[hf]:i.FUNC_REVERSE_SUBTRACT};rt[uf]=i.MIN,rt[ff]=i.MAX;let fe={[ws]:i.ZERO,[df]:i.ONE,[pf]:i.SRC_COLOR,[Th]:i.SRC_ALPHA,[_f]:i.SRC_ALPHA_SATURATE,[Lo]:i.DST_COLOR,[Io]:i.DST_ALPHA,[mf]:i.ONE_MINUS_SRC_COLOR,[wh]:i.ONE_MINUS_SRC_ALPHA,[xf]:i.ONE_MINUS_DST_COLOR,[gf]:i.ONE_MINUS_DST_ALPHA,[vf]:i.CONSTANT_COLOR,[yf]:i.ONE_MINUS_CONSTANT_COLOR,[Mf]:i.CONSTANT_ALPHA,[Sf]:i.ONE_MINUS_CONSTANT_ALPHA};function _e(B,ge,ce,Ae,Oe,xe,Je,$e,Tt,vt){if(B===Yt){p===!0&&(Te(i.BLEND),p=!1);return}if(p===!1&&(le(i.BLEND),p=!0),B!==Sl){if(B!==g||vt!==R){if((y!==$n||b!==$n)&&(i.blendEquation(i.FUNC_ADD),y=$n,b=$n),vt)switch(B){case Mr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dn:i.blendFunc(i.ONE,i.ONE);break;case Eh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:lt("WebGLState: Invalid blending: ",B);break}else switch(B){case Mr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Eh:lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bh:lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:lt("WebGLState: Invalid blending: ",B);break}M=null,_=null,S=null,A=null,v.set(0,0,0),T=0,g=B,R=vt}return}Oe=Oe||ge,xe=xe||ce,Je=Je||Ae,(ge!==y||Oe!==b)&&(i.blendEquationSeparate(rt[ge],rt[Oe]),y=ge,b=Oe),(ce!==M||Ae!==_||xe!==S||Je!==A)&&(i.blendFuncSeparate(fe[ce],fe[Ae],fe[xe],fe[Je]),M=ce,_=Ae,S=xe,A=Je),($e.equals(v)===!1||Tt!==T)&&(i.blendColor($e.r,$e.g,$e.b,Tt),v.copy($e),T=Tt),g=B,R=!1}function Se(B,ge){B.side===It?Te(i.CULL_FACE):le(i.CULL_FACE);let ce=B.side===rn;ge&&(ce=!ce),Ee(ce),B.blending===Mr&&B.transparent===!1?_e(Yt):_e(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);let Ae=B.stencilWrite;a.setTest(Ae),Ae&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Pe(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?le(i.SAMPLE_ALPHA_TO_COVERAGE):Te(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(B){P!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),P=B)}function q(B){B!==of?(le(i.CULL_FACE),B!==U&&(B===Sh?i.cullFace(i.BACK):B===af?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Te(i.CULL_FACE),U=B}function ve(B){B!==O&&(te&&i.lineWidth(B),O=B)}function Pe(B,ge,ce){B?(le(i.POLYGON_OFFSET_FILL),(F!==ge||V!==ce)&&(F=ge,V=ce,o.getReversed()&&(ge=-ge),i.polygonOffset(ge,ce))):Te(i.POLYGON_OFFSET_FILL)}function Le(B){B?le(i.SCISSOR_TEST):Te(i.SCISSOR_TEST)}function Ue(B){B===void 0&&(B=i.TEXTURE0+k-1),X!==B&&(i.activeTexture(B),X=B)}function H(B,ge,ce){ce===void 0&&(X===null?ce=i.TEXTURE0+k-1:ce=X);let Ae=j[ce];Ae===void 0&&(Ae={type:void 0,texture:void 0},j[ce]=Ae),(Ae.type!==B||Ae.texture!==ge)&&(X!==ce&&(i.activeTexture(ce),X=ce),i.bindTexture(B,ge||ae[B]),Ae.type=B,Ae.texture=ge)}function qe(){let B=j[X];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function tt(){try{i.compressedTexImage2D(...arguments)}catch(B){lt("WebGLState:",B)}}function D(){try{i.compressedTexImage3D(...arguments)}catch(B){lt("WebGLState:",B)}}function E(){try{i.texSubImage2D(...arguments)}catch(B){lt("WebGLState:",B)}}function Y(){try{i.texSubImage3D(...arguments)}catch(B){lt("WebGLState:",B)}}function Q(){try{i.compressedTexSubImage2D(...arguments)}catch(B){lt("WebGLState:",B)}}function se(){try{i.compressedTexSubImage3D(...arguments)}catch(B){lt("WebGLState:",B)}}function ye(){try{i.texStorage2D(...arguments)}catch(B){lt("WebGLState:",B)}}function Ie(){try{i.texStorage3D(...arguments)}catch(B){lt("WebGLState:",B)}}function he(){try{i.texImage2D(...arguments)}catch(B){lt("WebGLState:",B)}}function pe(){try{i.texImage3D(...arguments)}catch(B){lt("WebGLState:",B)}}function z(B){return d[B]!==void 0?d[B]:i.getParameter(B)}function Z(B,ge){d[B]!==ge&&(i.pixelStorei(B,ge),d[B]=ge)}function W(B){Fe.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),Fe.copy(B))}function ne(B){ze.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),ze.copy(B))}function oe(B,ge){let ce=c.get(ge);ce===void 0&&(ce=new WeakMap,c.set(ge,ce));let Ae=ce.get(B);Ae===void 0&&(Ae=i.getUniformBlockIndex(ge,B.name),ce.set(B,Ae))}function ie(B,ge){let Ae=c.get(ge).get(B);l.get(ge)!==Ae&&(i.uniformBlockBinding(ge,Ae,B.__bindingPointIndex),l.set(ge,Ae))}function ue(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},X=null,j={},u={},f=new WeakMap,m=[],x=null,p=!1,g=null,y=null,M=null,_=null,b=null,S=null,A=null,v=new we(0,0,0),T=0,R=!1,P=null,U=null,O=null,F=null,V=null,Fe.set(0,0,i.canvas.width,i.canvas.height),ze.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:le,disable:Te,bindFramebuffer:We,drawBuffers:Ce,useProgram:Ke,setBlending:_e,setMaterial:Se,setFlipSided:Ee,setCullFace:q,setLineWidth:ve,setPolygonOffset:Pe,setScissorTest:Le,activeTexture:Ue,bindTexture:H,unbindTexture:qe,compressedTexImage2D:tt,compressedTexImage3D:D,texImage2D:he,texImage3D:pe,pixelStorei:Z,getParameter:z,updateUBOMapping:oe,uniformBlockBinding:ie,texStorage2D:ye,texStorage3D:Ie,texSubImage2D:E,texSubImage3D:Y,compressedTexSubImage2D:Q,compressedTexSubImage3D:se,scissor:W,viewport:ne,reset:ue}}function nv(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new me,h=new WeakMap,d=new Set,u,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(D,E){return m?new OffscreenCanvas(D,E):eo("canvas")}function p(D,E,Y){let Q=1,se=tt(D);if((se.width>Y||se.height>Y)&&(Q=Y/Math.max(se.width,se.height)),Q<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let ye=Math.floor(Q*se.width),Ie=Math.floor(Q*se.height);u===void 0&&(u=x(ye,Ie));let he=E?x(ye,Ie):u;return he.width=ye,he.height=Ie,he.getContext("2d").drawImage(D,0,0,ye,Ie),nt("WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+ye+"x"+Ie+")."),he}else return"data"in D&&nt("WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),D;return D}function g(D){return D.generateMipmaps}function y(D){i.generateMipmap(D)}function M(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(D,E,Y,Q,se,ye=!1){if(D!==null){if(i[D]!==void 0)return i[D];nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Ie;Q&&(Ie=e.get("EXT_texture_norm16"),Ie||nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let he=E;if(E===i.RED&&(Y===i.FLOAT&&(he=i.R32F),Y===i.HALF_FLOAT&&(he=i.R16F),Y===i.UNSIGNED_BYTE&&(he=i.R8),Y===i.UNSIGNED_SHORT&&Ie&&(he=Ie.R16_EXT),Y===i.SHORT&&Ie&&(he=Ie.R16_SNORM_EXT)),E===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(he=i.R8UI),Y===i.UNSIGNED_SHORT&&(he=i.R16UI),Y===i.UNSIGNED_INT&&(he=i.R32UI),Y===i.BYTE&&(he=i.R8I),Y===i.SHORT&&(he=i.R16I),Y===i.INT&&(he=i.R32I)),E===i.RG&&(Y===i.FLOAT&&(he=i.RG32F),Y===i.HALF_FLOAT&&(he=i.RG16F),Y===i.UNSIGNED_BYTE&&(he=i.RG8),Y===i.UNSIGNED_SHORT&&Ie&&(he=Ie.RG16_EXT),Y===i.SHORT&&Ie&&(he=Ie.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(he=i.RG8UI),Y===i.UNSIGNED_SHORT&&(he=i.RG16UI),Y===i.UNSIGNED_INT&&(he=i.RG32UI),Y===i.BYTE&&(he=i.RG8I),Y===i.SHORT&&(he=i.RG16I),Y===i.INT&&(he=i.RG32I)),E===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(he=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(he=i.RGB16UI),Y===i.UNSIGNED_INT&&(he=i.RGB32UI),Y===i.BYTE&&(he=i.RGB8I),Y===i.SHORT&&(he=i.RGB16I),Y===i.INT&&(he=i.RGB32I)),E===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(he=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(he=i.RGBA16UI),Y===i.UNSIGNED_INT&&(he=i.RGBA32UI),Y===i.BYTE&&(he=i.RGBA8I),Y===i.SHORT&&(he=i.RGBA16I),Y===i.INT&&(he=i.RGBA32I)),E===i.RGB&&(Y===i.UNSIGNED_SHORT&&Ie&&(he=Ie.RGB16_EXT),Y===i.SHORT&&Ie&&(he=Ie.RGB16_SNORM_EXT),Y===i.UNSIGNED_INT_5_9_9_9_REV&&(he=i.RGB9_E5),Y===i.UNSIGNED_INT_10F_11F_11F_REV&&(he=i.R11F_G11F_B10F)),E===i.RGBA){let pe=ye?jr:Et.getTransfer(se);Y===i.FLOAT&&(he=i.RGBA32F),Y===i.HALF_FLOAT&&(he=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(he=pe===At?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT&&Ie&&(he=Ie.RGBA16_EXT),Y===i.SHORT&&Ie&&(he=Ie.RGBA16_SNORM_EXT),Y===i.UNSIGNED_SHORT_4_4_4_4&&(he=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(he=i.RGB5_A1)}return(he===i.R16F||he===i.R32F||he===i.RG16F||he===i.RG32F||he===i.RGBA16F||he===i.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function b(D,E){let Y;return D?E===null||E===hi||E===rs?Y=i.DEPTH24_STENCIL8:E===On?Y=i.DEPTH32F_STENCIL8:E===Sr&&(Y=i.DEPTH24_STENCIL8,nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===hi||E===rs?Y=i.DEPTH_COMPONENT24:E===On?Y=i.DEPTH_COMPONENT32F:E===Sr&&(Y=i.DEPTH_COMPONENT16),Y}function S(D,E){return g(D)===!0||D.isFramebufferTexture&&D.minFilter!==Kt&&D.minFilter!==gn?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function A(D){let E=D.target;E.removeEventListener("dispose",A),T(E),E.isVideoTexture&&h.delete(E),E.isHTMLTexture&&d.delete(E)}function v(D){let E=D.target;E.removeEventListener("dispose",v),P(E)}function T(D){let E=n.get(D);if(E.__webglInit===void 0)return;let Y=D.source,Q=f.get(Y);if(Q){let se=Q[E.__cacheKey];se.usedTimes--,se.usedTimes===0&&R(D),Object.keys(Q).length===0&&f.delete(Y)}n.remove(D)}function R(D){let E=n.get(D);i.deleteTexture(E.__webglTexture);let Y=D.source,Q=f.get(Y);delete Q[E.__cacheKey],o.memory.textures--}function P(D){let E=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(E.__webglFramebuffer[Q]))for(let se=0;se<E.__webglFramebuffer[Q].length;se++)i.deleteFramebuffer(E.__webglFramebuffer[Q][se]);else i.deleteFramebuffer(E.__webglFramebuffer[Q]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[Q])}else{if(Array.isArray(E.__webglFramebuffer))for(let Q=0;Q<E.__webglFramebuffer.length;Q++)i.deleteFramebuffer(E.__webglFramebuffer[Q]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Q=0;Q<E.__webglColorRenderbuffer.length;Q++)E.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[Q]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let Y=D.textures;for(let Q=0,se=Y.length;Q<se;Q++){let ye=n.get(Y[Q]);ye.__webglTexture&&(i.deleteTexture(ye.__webglTexture),o.memory.textures--),n.remove(Y[Q])}n.remove(D)}let U=0;function O(){U=0}function F(){return U}function V(D){U=D}function k(){let D=U;return D>=s.maxTextures&&nt("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,D}function te(D){let E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function L(D,E){let Y=n.get(D);if(D.isVideoTexture&&H(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&Y.__version!==D.version){let Q=D.image;if(Q===null)nt("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)nt("WebGLRenderer: Texture marked for update but image is incomplete");else{Te(Y,D,E);return}}else D.isExternalTexture&&(Y.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+E)}function G(D,E){let Y=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Y.__version!==D.version){Te(Y,D,E);return}else D.isExternalTexture&&(Y.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+E)}function X(D,E){let Y=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Y.__version!==D.version){Te(Y,D,E);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+E)}function j(D,E){let Y=n.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&Y.__version!==D.version){We(Y,D,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+E)}let re={[jt]:i.REPEAT,[pi]:i.CLAMP_TO_EDGE,[Ya]:i.MIRRORED_REPEAT},de={[Kt]:i.NEAREST,[wf]:i.NEAREST_MIPMAP_NEAREST,[zo]:i.NEAREST_MIPMAP_LINEAR,[gn]:i.LINEAR,[Tl]:i.LINEAR_MIPMAP_NEAREST,[ss]:i.LINEAR_MIPMAP_LINEAR},Fe={[Pf]:i.NEVER,[Nf]:i.ALWAYS,[If]:i.LESS,[cc]:i.LEQUAL,[Lf]:i.EQUAL,[hc]:i.GEQUAL,[Df]:i.GREATER,[Uf]:i.NOTEQUAL};function ze(D,E){if(E.type===On&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===gn||E.magFilter===Tl||E.magFilter===zo||E.magFilter===ss||E.minFilter===gn||E.minFilter===Tl||E.minFilter===zo||E.minFilter===ss)&&nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,re[E.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,re[E.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,re[E.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,de[E.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,de[E.minFilter]),E.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,Fe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Kt||E.minFilter!==zo&&E.minFilter!==ss||E.type===On&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let Y=e.get("EXT_texture_filter_anisotropic");i.texParameterf(D,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Xe(D,E){let Y=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",A));let Q=E.source,se=f.get(Q);se===void 0&&(se={},f.set(Q,se));let ye=te(E);if(ye!==D.__cacheKey){se[ye]===void 0&&(se[ye]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),se[ye].usedTimes++;let Ie=se[D.__cacheKey];Ie!==void 0&&(se[D.__cacheKey].usedTimes--,Ie.usedTimes===0&&R(E)),D.__cacheKey=ye,D.__webglTexture=se[ye].texture}return Y}function ae(D,E,Y){return Math.floor(Math.floor(D/Y)/E)}function le(D,E,Y,Q){let ye=D.updateRanges;if(ye.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,Y,Q,E.data);else{ye.sort((Z,W)=>Z.start-W.start);let Ie=0;for(let Z=1;Z<ye.length;Z++){let W=ye[Ie],ne=ye[Z],oe=W.start+W.count,ie=ae(ne.start,E.width,4),ue=ae(W.start,E.width,4);ne.start<=oe+1&&ie===ue&&ae(ne.start+ne.count-1,E.width,4)===ie?W.count=Math.max(W.count,ne.start+ne.count-W.start):(++Ie,ye[Ie]=ne)}ye.length=Ie+1;let he=t.getParameter(i.UNPACK_ROW_LENGTH),pe=t.getParameter(i.UNPACK_SKIP_PIXELS),z=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let Z=0,W=ye.length;Z<W;Z++){let ne=ye[Z],oe=Math.floor(ne.start/4),ie=Math.ceil(ne.count/4),ue=oe%E.width,B=Math.floor(oe/E.width),ge=ie,ce=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ue),t.pixelStorei(i.UNPACK_SKIP_ROWS,B),t.texSubImage2D(i.TEXTURE_2D,0,ue,B,ge,ce,Y,Q,E.data)}D.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,he),t.pixelStorei(i.UNPACK_SKIP_PIXELS,pe),t.pixelStorei(i.UNPACK_SKIP_ROWS,z)}}function Te(D,E,Y){let Q=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Q=i.TEXTURE_3D);let se=Xe(D,E),ye=E.source;t.bindTexture(Q,D.__webglTexture,i.TEXTURE0+Y);let Ie=n.get(ye);if(ye.version!==Ie.__version||se===!0){if(t.activeTexture(i.TEXTURE0+Y),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let ce=Et.getPrimaries(Et.workingColorSpace),Ae=E.colorSpace===Gi?null:Et.getPrimaries(E.colorSpace),Oe=E.colorSpace===Gi||ce===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe)}t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let pe=p(E.image,!1,s.maxTextureSize);pe=qe(E,pe);let z=r.convert(E.format,E.colorSpace),Z=r.convert(E.type),W=_(E.internalFormat,z,Z,E.normalized,E.colorSpace,E.isVideoTexture);ze(Q,E);let ne,oe=E.mipmaps,ie=E.isVideoTexture!==!0,ue=Ie.__version===void 0||se===!0,B=ye.dataReady,ge=S(E,pe);if(E.isDepthTexture)W=b(E.format===Si,E.type),ue&&(ie?t.texStorage2D(i.TEXTURE_2D,1,W,pe.width,pe.height):t.texImage2D(i.TEXTURE_2D,0,W,pe.width,pe.height,0,z,Z,null));else if(E.isDataTexture)if(oe.length>0){ie&&ue&&t.texStorage2D(i.TEXTURE_2D,ge,W,oe[0].width,oe[0].height);for(let ce=0,Ae=oe.length;ce<Ae;ce++)ne=oe[ce],ie?B&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,ne.width,ne.height,z,Z,ne.data):t.texImage2D(i.TEXTURE_2D,ce,W,ne.width,ne.height,0,z,Z,ne.data);E.generateMipmaps=!1}else ie?(ue&&t.texStorage2D(i.TEXTURE_2D,ge,W,pe.width,pe.height),B&&le(E,pe,z,Z)):t.texImage2D(i.TEXTURE_2D,0,W,pe.width,pe.height,0,z,Z,pe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ie&&ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,W,oe[0].width,oe[0].height,pe.depth);for(let ce=0,Ae=oe.length;ce<Ae;ce++)if(ne=oe[ce],E.format!==Cn)if(z!==null)if(ie){if(B)if(E.layerUpdates.size>0){let Oe=Vh(ne.width,ne.height,E.format,E.type);for(let xe of E.layerUpdates){let Je=ne.data.subarray(xe*Oe/ne.data.BYTES_PER_ELEMENT,(xe+1)*Oe/ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,xe,ne.width,ne.height,1,z,Je)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,ne.width,ne.height,pe.depth,z,ne.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ce,W,ne.width,ne.height,pe.depth,0,ne.data,0,0);else nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?B&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,ne.width,ne.height,pe.depth,z,Z,ne.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ce,W,ne.width,ne.height,pe.depth,0,z,Z,ne.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{ie&&ue&&t.texStorage2D(i.TEXTURE_2D,ge,W,oe[0].width,oe[0].height);for(let ce=0,Ae=oe.length;ce<Ae;ce++)ne=oe[ce],E.format!==Cn?z!==null?ie?B&&t.compressedTexSubImage2D(i.TEXTURE_2D,ce,0,0,ne.width,ne.height,z,ne.data):t.compressedTexImage2D(i.TEXTURE_2D,ce,W,ne.width,ne.height,0,ne.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?B&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,ne.width,ne.height,z,Z,ne.data):t.texImage2D(i.TEXTURE_2D,ce,W,ne.width,ne.height,0,z,Z,ne.data)}else if(E.isDataArrayTexture)if(ie){if(ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,W,pe.width,pe.height,pe.depth),B)if(E.layerUpdates.size>0){let ce=Vh(pe.width,pe.height,E.format,E.type);for(let Ae of E.layerUpdates){let Oe=pe.data.subarray(Ae*ce/pe.data.BYTES_PER_ELEMENT,(Ae+1)*ce/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ae,pe.width,pe.height,1,z,Z,Oe)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,z,Z,pe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,W,pe.width,pe.height,pe.depth,0,z,Z,pe.data);else if(E.isData3DTexture)ie?(ue&&t.texStorage3D(i.TEXTURE_3D,ge,W,pe.width,pe.height,pe.depth),B&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,z,Z,pe.data)):t.texImage3D(i.TEXTURE_3D,0,W,pe.width,pe.height,pe.depth,0,z,Z,pe.data);else if(E.isFramebufferTexture){if(ue)if(ie)t.texStorage2D(i.TEXTURE_2D,ge,W,pe.width,pe.height);else{let ce=pe.width,Ae=pe.height;for(let Oe=0;Oe<ge;Oe++)t.texImage2D(i.TEXTURE_2D,Oe,W,ce,Ae,0,z,Z,null),ce>>=1,Ae>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){let ce=i.canvas;if(ce.hasAttribute("layoutsubtree")||ce.setAttribute("layoutsubtree","true"),pe.parentNode!==ce){ce.appendChild(pe),d.add(E),ce.onpaint=Ae=>{let Oe=Ae.changedElements;for(let xe of d)Oe.includes(xe.image)&&(xe.needsUpdate=!0)},ce.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,pe);else{let Oe=i.RGBA,xe=i.RGBA,Je=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Oe,xe,Je,pe)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(oe.length>0){if(ie&&ue){let ce=tt(oe[0]);t.texStorage2D(i.TEXTURE_2D,ge,W,ce.width,ce.height)}for(let ce=0,Ae=oe.length;ce<Ae;ce++)ne=oe[ce],ie?B&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,z,Z,ne):t.texImage2D(i.TEXTURE_2D,ce,W,z,Z,ne);E.generateMipmaps=!1}else if(ie){if(ue){let ce=tt(pe);t.texStorage2D(i.TEXTURE_2D,ge,W,ce.width,ce.height)}B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,z,Z,pe)}else t.texImage2D(i.TEXTURE_2D,0,W,z,Z,pe);g(E)&&y(Q),Ie.__version=ye.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function We(D,E,Y){if(E.image.length!==6)return;let Q=Xe(D,E),se=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+Y);let ye=n.get(se);if(se.version!==ye.__version||Q===!0){t.activeTexture(i.TEXTURE0+Y);let Ie=Et.getPrimaries(Et.workingColorSpace),he=E.colorSpace===Gi?null:Et.getPrimaries(E.colorSpace),pe=E.colorSpace===Gi||Ie===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let z=E.isCompressedTexture||E.image[0].isCompressedTexture,Z=E.image[0]&&E.image[0].isDataTexture,W=[];for(let xe=0;xe<6;xe++)!z&&!Z?W[xe]=p(E.image[xe],!0,s.maxCubemapSize):W[xe]=Z?E.image[xe].image:E.image[xe],W[xe]=qe(E,W[xe]);let ne=W[0],oe=r.convert(E.format,E.colorSpace),ie=r.convert(E.type),ue=_(E.internalFormat,oe,ie,E.normalized,E.colorSpace),B=E.isVideoTexture!==!0,ge=ye.__version===void 0||Q===!0,ce=se.dataReady,Ae=S(E,ne);ze(i.TEXTURE_CUBE_MAP,E);let Oe;if(z){B&&ge&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,ue,ne.width,ne.height);for(let xe=0;xe<6;xe++){Oe=W[xe].mipmaps;for(let Je=0;Je<Oe.length;Je++){let $e=Oe[Je];E.format!==Cn?oe!==null?B?ce&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Je,0,0,$e.width,$e.height,oe,$e.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Je,ue,$e.width,$e.height,0,$e.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Je,0,0,$e.width,$e.height,oe,ie,$e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Je,ue,$e.width,$e.height,0,oe,ie,$e.data)}}}else{if(Oe=E.mipmaps,B&&ge){Oe.length>0&&Ae++;let xe=tt(W[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,ue,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(Z){B?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,W[xe].width,W[xe].height,oe,ie,W[xe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ue,W[xe].width,W[xe].height,0,oe,ie,W[xe].data);for(let Je=0;Je<Oe.length;Je++){let Tt=Oe[Je].image[xe].image;B?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Je+1,0,0,Tt.width,Tt.height,oe,ie,Tt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Je+1,ue,Tt.width,Tt.height,0,oe,ie,Tt.data)}}else{B?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,oe,ie,W[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ue,oe,ie,W[xe]);for(let Je=0;Je<Oe.length;Je++){let $e=Oe[Je];B?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Je+1,0,0,oe,ie,$e.image[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Je+1,ue,oe,ie,$e.image[xe])}}}g(E)&&y(i.TEXTURE_CUBE_MAP),ye.__version=se.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function Ce(D,E,Y,Q,se,ye){let Ie=r.convert(Y.format,Y.colorSpace),he=r.convert(Y.type),pe=_(Y.internalFormat,Ie,he,Y.normalized,Y.colorSpace),z=n.get(E),Z=n.get(Y);if(Z.__renderTarget=E,!z.__hasExternalTextures){let W=Math.max(1,E.width>>ye),ne=Math.max(1,E.height>>ye);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,ye,pe,W,ne,E.depth,0,Ie,he,null):t.texImage2D(se,ye,pe,W,ne,0,Ie,he,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),Ue(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,se,Z.__webglTexture,0,Le(E)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,se,Z.__webglTexture,ye),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ke(D,E,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,D),E.depthBuffer){let Q=E.depthTexture,se=Q&&Q.isDepthTexture?Q.type:null,ye=b(E.stencilBuffer,se),Ie=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ue(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Le(E),ye,E.width,E.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,Le(E),ye,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,ye,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ie,i.RENDERBUFFER,D)}else{let Q=E.textures;for(let se=0;se<Q.length;se++){let ye=Q[se],Ie=r.convert(ye.format,ye.colorSpace),he=r.convert(ye.type),pe=_(ye.internalFormat,Ie,he,ye.normalized,ye.colorSpace);Ue(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Le(E),pe,E.width,E.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,Le(E),pe,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,pe,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function rt(D,E,Y){let Q=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let se=n.get(E.depthTexture);if(se.__renderTarget=E,(!se.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Q){if(se.__webglInit===void 0&&(se.__webglInit=!0,E.depthTexture.addEventListener("dispose",A)),se.__webglTexture===void 0){se.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,se.__webglTexture),ze(i.TEXTURE_CUBE_MAP,E.depthTexture);let z=r.convert(E.depthTexture.format),Z=r.convert(E.depthTexture.type),W;E.depthTexture.format===gi?W=i.DEPTH_COMPONENT24:E.depthTexture.format===Si&&(W=i.DEPTH24_STENCIL8);for(let ne=0;ne<6;ne++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,W,E.width,E.height,0,z,Z,null)}}else L(E.depthTexture,0);let ye=se.__webglTexture,Ie=Le(E),he=Q?i.TEXTURE_CUBE_MAP_POSITIVE_X+Y:i.TEXTURE_2D,pe=E.depthTexture.format===Si?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===gi)Ue(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pe,he,ye,0,Ie):i.framebufferTexture2D(i.FRAMEBUFFER,pe,he,ye,0);else if(E.depthTexture.format===Si)Ue(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pe,he,ye,0,Ie):i.framebufferTexture2D(i.FRAMEBUFFER,pe,he,ye,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function fe(D){let E=n.get(D),Y=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){let Q=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Q){let se=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Q.removeEventListener("dispose",se)};Q.addEventListener("dispose",se),E.__depthDisposeCallback=se}E.__boundDepthTexture=Q}if(D.depthTexture&&!E.__autoAllocateDepthBuffer)if(Y)for(let Q=0;Q<6;Q++)rt(E.__webglFramebuffer[Q],D,Q);else{let Q=D.texture.mipmaps;Q&&Q.length>0?rt(E.__webglFramebuffer[0],D,0):rt(E.__webglFramebuffer,D,0)}else if(Y){E.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[Q]),E.__webglDepthbuffer[Q]===void 0)E.__webglDepthbuffer[Q]=i.createRenderbuffer(),Ke(E.__webglDepthbuffer[Q],D,!1);else{let se=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=E.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,ye),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,ye)}}else{let Q=D.texture.mipmaps;if(Q&&Q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),Ke(E.__webglDepthbuffer,D,!1);else{let se=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ye),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,ye)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function _e(D,E,Y){let Q=n.get(D);E!==void 0&&Ce(Q.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&fe(D)}function Se(D){let E=D.texture,Y=n.get(D),Q=n.get(E);D.addEventListener("dispose",v);let se=D.textures,ye=D.isWebGLCubeRenderTarget===!0,Ie=se.length>1;if(Ie||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=E.version,o.memory.textures++),ye){Y.__webglFramebuffer=[];for(let he=0;he<6;he++)if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer[he]=[];for(let pe=0;pe<E.mipmaps.length;pe++)Y.__webglFramebuffer[he][pe]=i.createFramebuffer()}else Y.__webglFramebuffer[he]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer=[];for(let he=0;he<E.mipmaps.length;he++)Y.__webglFramebuffer[he]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(Ie)for(let he=0,pe=se.length;he<pe;he++){let z=n.get(se[he]);z.__webglTexture===void 0&&(z.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&Ue(D)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let he=0;he<se.length;he++){let pe=se[he];Y.__webglColorRenderbuffer[he]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[he]);let z=r.convert(pe.format,pe.colorSpace),Z=r.convert(pe.type),W=_(pe.internalFormat,z,Z,pe.normalized,pe.colorSpace,D.isXRRenderTarget===!0),ne=Le(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,W,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,Y.__webglColorRenderbuffer[he])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),Ke(Y.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ye){t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),ze(i.TEXTURE_CUBE_MAP,E);for(let he=0;he<6;he++)if(E.mipmaps&&E.mipmaps.length>0)for(let pe=0;pe<E.mipmaps.length;pe++)Ce(Y.__webglFramebuffer[he][pe],D,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,pe);else Ce(Y.__webglFramebuffer[he],D,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);g(E)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let he=0,pe=se.length;he<pe;he++){let z=se[he],Z=n.get(z),W=i.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(W=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(W,Z.__webglTexture),ze(W,z),Ce(Y.__webglFramebuffer,D,z,i.COLOR_ATTACHMENT0+he,W,0),g(z)&&y(W)}t.unbindTexture()}else{let he=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(he=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,Q.__webglTexture),ze(he,E),E.mipmaps&&E.mipmaps.length>0)for(let pe=0;pe<E.mipmaps.length;pe++)Ce(Y.__webglFramebuffer[pe],D,E,i.COLOR_ATTACHMENT0,he,pe);else Ce(Y.__webglFramebuffer,D,E,i.COLOR_ATTACHMENT0,he,0);g(E)&&y(he),t.unbindTexture()}D.depthBuffer&&fe(D)}function Ee(D){let E=D.textures;for(let Y=0,Q=E.length;Y<Q;Y++){let se=E[Y];if(g(se)){let ye=M(D),Ie=n.get(se).__webglTexture;t.bindTexture(ye,Ie),y(ye),t.unbindTexture()}}}let q=[],ve=[];function Pe(D){if(D.samples>0){if(Ue(D)===!1){let E=D.textures,Y=D.width,Q=D.height,se=i.COLOR_BUFFER_BIT,ye=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ie=n.get(D),he=E.length>1;if(he)for(let z=0;z<E.length;z++)t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+z,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+z,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);let pe=D.texture.mipmaps;pe&&pe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let z=0;z<E.length;z++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),he){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[z]);let Z=n.get(E[z]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Z,0)}i.blitFramebuffer(0,0,Y,Q,0,0,Y,Q,se,i.NEAREST),l===!0&&(q.length=0,ve.length=0,q.push(i.COLOR_ATTACHMENT0+z),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&(q.push(ye),ve.push(ye),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ve)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,q))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),he)for(let z=0;z<E.length;z++){t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+z,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[z]);let Z=n.get(E[z]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+z,i.TEXTURE_2D,Z,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&l){let E=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function Le(D){return Math.min(s.maxSamples,D.samples)}function Ue(D){let E=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function H(D){let E=o.render.frame;h.get(D)!==E&&(h.set(D,E),D.update())}function qe(D,E){let Y=D.colorSpace,Q=D.format,se=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Y!==Qr&&Y!==Gi&&(Et.getTransfer(Y)===At?(Q!==Cn||se!==Mn)&&nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):lt("WebGLTextures: Unsupported texture color space:",Y)),E}function tt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=O,this.getTextureUnits=F,this.setTextureUnits=V,this.setTexture2D=L,this.setTexture2DArray=G,this.setTexture3D=X,this.setTextureCube=j,this.rebindTextures=_e,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=Ue,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function iv(i,e){function t(n,s=Gi){let r,o=Et.getTransfer(s);if(n===Mn)return i.UNSIGNED_BYTE;if(n===Al)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Rl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ih)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Lh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ch)return i.BYTE;if(n===Ph)return i.SHORT;if(n===Sr)return i.UNSIGNED_SHORT;if(n===wl)return i.INT;if(n===hi)return i.UNSIGNED_INT;if(n===On)return i.FLOAT;if(n===Zt)return i.HALF_FLOAT;if(n===Dh)return i.ALPHA;if(n===Uh)return i.RGB;if(n===Cn)return i.RGBA;if(n===gi)return i.DEPTH_COMPONENT;if(n===Si)return i.DEPTH_STENCIL;if(n===Cl)return i.RED;if(n===Pl)return i.RED_INTEGER;if(n===os)return i.RG;if(n===Il)return i.RG_INTEGER;if(n===Ll)return i.RGBA_INTEGER;if(n===Go||n===ko||n===Vo||n===Wo)if(o===At)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Go)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Go)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ko)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Vo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Wo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Dl||n===Ul||n===Nl||n===Fl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Dl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ul)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Nl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Bl||n===Ol||n===Hl||n===zl||n===Gl||n===Xo||n===kl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Bl||n===Ol)return o===At?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Hl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===zl)return r.COMPRESSED_R11_EAC;if(n===Gl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Xo)return r.COMPRESSED_RG11_EAC;if(n===kl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Vl||n===Wl||n===Xl||n===ql||n===Yl||n===Zl||n===$l||n===Jl||n===Kl||n===Ql||n===jl||n===ec||n===tc||n===nc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Vl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ql)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Yl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Zl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$l)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Jl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Kl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ql)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===jl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ec)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===tc)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===nc)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ic||n===sc||n===rc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ic)return o===At?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===rc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===oc||n===ac||n===qo||n===lc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===oc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ac)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===lc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var sv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,lu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new po(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Bt({vertexShader:sv,fragmentShader:rv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new be(new wt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},cu=class extends xi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,m=null,x=typeof XRWebGLBinding<"u",p=new lu,g={},y=t.getContextAttributes(),M=null,_=null,b=[],S=[],A=new me,v=null,T=null,R=new un;R.viewport=new Nt;let P=new un;P.viewport=new Nt;let U=[R,P],O=new yl,F=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let le=b[ae];return le===void 0&&(le=new lr,b[ae]=le),le.getTargetRaySpace()},this.getControllerGrip=function(ae){let le=b[ae];return le===void 0&&(le=new lr,b[ae]=le),le.getGripSpace()},this.getHand=function(ae){let le=b[ae];return le===void 0&&(le=new lr,b[ae]=le),le.getHandSpace()};function k(ae){let le=S.indexOf(ae.inputSource);if(le===-1)return;let Te=b[le];Te!==void 0&&(Te.update(ae.inputSource,ae.frame,c||o),Te.dispatchEvent({type:ae.type,data:ae.inputSource}))}function te(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",te),s.removeEventListener("inputsourceschange",L);for(let ae=0;ae<b.length;ae++){let le=S[ae];le!==null&&(S[ae]=null,b[ae].disconnect(le))}F=null,V=null,p.reset();for(let ae in g)delete g[ae];if(e.setRenderTarget(M),f=null,u=null,d=null,s=null,_=null,Xe.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(A.width,A.height,!1),T!==null){let ae=T.camera;ae.fov=T.fov,ae.zoom=T.zoom,ae.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){r=ae,n.isPresenting===!0&&nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){a=ae,n.isPresenting===!0&&nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ae){c=ae},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(ae){if(s=ae,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",te),s.addEventListener("inputsourceschange",L),y.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,We=null,Ce=null;y.depth&&(Ce=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=y.stencil?Si:gi,We=y.stencil?rs:hi);let Ke={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Ke),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),_=new Vt(u.textureWidth,u.textureHeight,{format:Cn,type:Mn,depthTexture:new yi(u.textureWidth,u.textureHeight,We,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Te={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Te),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Vt(f.framebufferWidth,f.framebufferHeight,{format:Cn,type:Mn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Xe.setContext(s),Xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function L(ae){for(let le=0;le<ae.removed.length;le++){let Te=ae.removed[le],We=S.indexOf(Te);We>=0&&(S[We]=null,b[We].disconnect(Te))}for(let le=0;le<ae.added.length;le++){let Te=ae.added[le],We=S.indexOf(Te);if(We===-1){for(let Ke=0;Ke<b.length;Ke++)if(Ke>=S.length){S.push(Te),We=Ke;break}else if(S[Ke]===null){S[Ke]=Te,We=Ke;break}if(We===-1)break}let Ce=b[We];Ce&&Ce.connect(Te)}}let G=new N,X=new N;function j(ae,le,Te){G.setFromMatrixPosition(le.matrixWorld),X.setFromMatrixPosition(Te.matrixWorld);let We=G.distanceTo(X),Ce=le.projectionMatrix.elements,Ke=Te.projectionMatrix.elements,rt=Ce[14]/(Ce[10]-1),fe=Ce[14]/(Ce[10]+1),_e=(Ce[9]+1)/Ce[5],Se=(Ce[9]-1)/Ce[5],Ee=(Ce[8]-1)/Ce[0],q=(Ke[8]+1)/Ke[0],ve=rt*Ee,Pe=rt*q,Le=We/(-Ee+q),Ue=Le*-Ee;if(le.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(Ue),ae.translateZ(Le),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),Ce[10]===-1)ae.projectionMatrix.copy(le.projectionMatrix),ae.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{let H=rt+Le,qe=fe+Le,tt=ve-Ue,D=Pe+(We-Ue),E=_e*fe/qe*H,Y=Se*fe/qe*H;ae.projectionMatrix.makePerspective(tt,D,E,Y,H,qe),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function re(ae,le){le===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(le.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(s===null)return;let le=ae.near,Te=ae.far;p.texture!==null&&(p.depthNear>0&&(le=p.depthNear),p.depthFar>0&&(Te=p.depthFar)),O.near=P.near=R.near=le,O.far=P.far=R.far=Te,(F!==O.near||V!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),F=O.near,V=O.far),O.layers.mask=ae.layers.mask|6,R.layers.mask=O.layers.mask&-5,P.layers.mask=O.layers.mask&-3;let We=ae.parent,Ce=O.cameras;re(O,We);for(let Ke=0;Ke<Ce.length;Ke++)re(Ce[Ke],We);Ce.length===2?j(O,R,P):O.projectionMatrix.copy(R.projectionMatrix),T===null&&ae.isPerspectiveCamera&&(T={camera:ae,fov:ae.fov,zoom:ae.zoom}),de(ae,O,We)};function de(ae,le,Te){Te===null?ae.matrix.copy(le.matrixWorld):(ae.matrix.copy(Te.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(le.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(le.projectionMatrix),ae.projectionMatrixInverse.copy(le.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=vs*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(ae){l=ae,u!==null&&(u.fixedFoveation=ae),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ae)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(O)},this.getCameraTexture=function(ae){return g[ae]};let Fe=null;function ze(ae,le){if(h=le.getViewerPose(c||o),m=le,h!==null){let Te=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let We=!1;Te.length!==O.cameras.length&&(O.cameras.length=0,We=!0);for(let fe=0;fe<Te.length;fe++){let _e=Te[fe],Se=null;if(f!==null)Se=f.getViewport(_e);else{let q=d.getViewSubImage(u,_e);Se=q.viewport,fe===0&&(e.setRenderTargetTextures(_,q.colorTexture,q.depthStencilTexture),e.setRenderTarget(_))}let Ee=U[fe];Ee===void 0&&(Ee=new un,Ee.layers.enable(fe),Ee.viewport=new Nt,U[fe]=Ee),Ee.matrix.fromArray(_e.transform.matrix),Ee.matrix.decompose(Ee.position,Ee.quaternion,Ee.scale),Ee.projectionMatrix.fromArray(_e.projectionMatrix),Ee.projectionMatrixInverse.copy(Ee.projectionMatrix).invert(),Ee.viewport.set(Se.x,Se.y,Se.width,Se.height),fe===0&&(O.matrix.copy(Ee.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),We===!0&&O.cameras.push(Ee)}let Ce=s.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let fe=d.getDepthInformation(Te[0]);fe&&fe.isValid&&fe.texture&&p.init(fe,s.renderState)}if(Ce&&Ce.includes("camera-access")&&x){e.state.unbindTexture(),d=n.getBinding();for(let fe=0;fe<Te.length;fe++){let _e=Te[fe].camera;if(_e){let Se=g[_e];Se||(Se=new po,g[_e]=Se);let Ee=d.getCameraImage(_e);Se.sourceTexture=Ee}}}}for(let Te=0;Te<b.length;Te++){let We=S[Te],Ce=b[Te];We!==null&&Ce!==void 0&&Ce.update(We,le,c||o)}Fe&&Fe(ae,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),m=null}let Xe=new md;Xe.setAnimationLoop(ze),this.setAnimationLoop=function(ae){Fe=ae},this.dispose=function(){}}},ov=new et,Md=new ut;Md.set(-1,0,0,0,1,0,0,0,1);function av(i,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,zh(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,y,M,_){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),d(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),u(p,g),g.isMeshPhysicalMaterial&&f(p,g,_)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),x(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,y,M):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===rn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===rn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let y=e.get(g),M=y.envMap,_=y.envMapRotation;M&&(p.envMap.value=M,p.envMapRotation.value.setFromMatrix4(ov.makeRotationFromEuler(_)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Md),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,y,M){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*y,p.scale.value=M*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function d(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function u(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,y){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===rn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function x(p,g){let y=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function lv(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,b){let S=b.program;n.uniformBlockBinding(_,S)}function c(_,b){let S=s[_.id];S===void 0&&(p(_),S=h(_),s[_.id]=S,_.addEventListener("dispose",y));let A=b.program;n.updateUBOMapping(_,A);let v=e.render.frame;r[_.id]!==v&&(u(_),r[_.id]=v)}function h(_){let b=d();_.__bindingPointIndex=b;let S=i.createBuffer(),A=_.__size,v=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,A,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,S),S}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){let b=s[_.id],S=_.uniforms,A=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let v=0,T=S.length;v<T;v++){let R=S[v];if(Array.isArray(R))for(let P=0,U=R.length;P<U;P++)f(R[P],v,P,A);else f(R,v,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,b,S,A){if(x(_,b,S,A)===!0){let v=_.__offset,T=_.value;if(Array.isArray(T)){let R=0;for(let P=0;P<T.length;P++){let U=T[P],O=g(U);m(U,_.__data,R),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(R+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(T,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,_.__data)}}function m(_,b,S){typeof _=="number"||typeof _=="boolean"?b[0]=_:_.isMatrix3?(b[0]=_.elements[0],b[1]=_.elements[1],b[2]=_.elements[2],b[3]=0,b[4]=_.elements[3],b[5]=_.elements[4],b[6]=_.elements[5],b[7]=0,b[8]=_.elements[6],b[9]=_.elements[7],b[10]=_.elements[8],b[11]=0):ArrayBuffer.isView(_)?b.set(new _.constructor(_.buffer,_.byteOffset,b.length)):_.toArray(b,S)}function x(_,b,S,A){let v=_.value,T=b+"_"+S;if(A[T]===void 0)return typeof v=="number"||typeof v=="boolean"?A[T]=v:ArrayBuffer.isView(v)?A[T]=v.slice():A[T]=v.clone(),!0;{let R=A[T];if(typeof v=="number"||typeof v=="boolean"){if(R!==v)return A[T]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(R.equals(v)===!1)return R.copy(v),!0}}return!1}function p(_){let b=_.uniforms,S=0,A=16;for(let T=0,R=b.length;T<R;T++){let P=Array.isArray(b[T])?b[T]:[b[T]];for(let U=0,O=P.length;U<O;U++){let F=P[U],V=Array.isArray(F.value)?F.value:[F.value];for(let k=0,te=V.length;k<te;k++){let L=V[k],G=g(L),X=S%A,j=X%G.boundary,re=X+j;S+=j,re!==0&&A-re<G.storage&&(S+=A-re),F.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=S,S+=G.storage}}}let v=S%A;return v>0&&(S+=A-v),_.__size=S,_.__cache={},this}function g(_){let b={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=48,b.storage=48):_.isMatrix4?(b.boundary=64,b.storage=64):_.isTexture?nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(b.boundary=16,b.storage=_.byteLength):nt("WebGLRenderer: Unsupported uniform value type.",_),b}function y(_){let b=_.target;b.removeEventListener("dispose",y);let S=o.indexOf(b.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function M(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:M}}var cv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ei=null;function hv(){return Ei===null&&(Ei=new _i(cv,16,16,os,Zt),Ei.name="DFG_LUT",Ei.minFilter=gn,Ei.magFilter=gn,Ei.wrapS=pi,Ei.wrapT=pi,Ei.generateMipmaps=!1,Ei.needsUpdate=!0),Ei}var pc=class{constructor(e={}){let{canvas:t=Ff(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Mn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let x=f,p=new Set([Ll,Il,Pl]),g=new Set([Mn,hi,Sr,rs,Al,Rl]),y=new Uint32Array(4),M=new Int32Array(4),_=new N,b=null,S=null,A=[],v=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,P=!1,U=null,O=null,F=null,V=null;this._outputColorSpace=Ut;let k=0,te=0,L=null,G=-1,X=null,j=new Nt,re=new Nt,de=null,Fe=new we(0),ze=0,Xe=t.width,ae=t.height,le=1,Te=null,We=null,Ce=new Nt(0,0,Xe,ae),Ke=new Nt(0,0,Xe,ae),rt=!1,fe=new dr,_e=!1,Se=!1,Ee=new et,q=new N,ve=new Nt,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Le=!1;function Ue(){return L===null?le:1}let H=n;function qe(w,$){return t.getContext(w,$)}let tt,D,E,Y,Q,se,ye,Ie,he,pe,z,Z,W,ne,oe,ie,ue,B,ge,ce,Ae,Oe,xe;try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Tt,!1),t.addEventListener("webglcontextrestored",vt,!1),t.addEventListener("webglcontextcreationerror",pn,!1),H===null){let $="webgl2";if(H=qe($,w),H===null)throw qe($)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Je()}catch(w){throw t.removeEventListener("webglcontextlost",Tt,!1),t.removeEventListener("webglcontextrestored",vt,!1),t.removeEventListener("webglcontextcreationerror",pn,!1),lt("WebGLRenderer: "+w.message),w}function Je(){tt=new xx(H),tt.init(),Ae=new iv(H,tt),D=new ax(H,tt,e,Ae),E=new tv(H,tt),D.reversedDepthBuffer&&u&&E.buffers.depth.setReversed(!0),O=H.createFramebuffer(),F=H.createFramebuffer(),V=H.createFramebuffer(),Y=new yx(H),Q=new G_,se=new nv(H,tt,E,Q,D,Ae,Y),ye=new gx(R),Ie=new S0(H),Oe=new rx(H,Ie),he=new _x(H,Ie,Y,Oe),pe=new Sx(H,he,Ie,Oe,Y),B=new Mx(H,D,se),oe=new lx(Q),z=new z_(R,ye,tt,D,Oe,oe),Z=new av(R,Q),W=new V_,ne=new $_(tt),ue=new sx(R,ye,E,pe,m,l),ie=new ev(R,pe,D),xe=new lv(H,Y,D,E),ge=new ox(H,tt,Y),ce=new vx(H,tt,Y),Y.programs=z.programs,R.capabilities=D,R.extensions=tt,R.properties=Q,R.renderLists=W,R.shadowMap=ie,R.state=E,R.info=Y}x!==Mn&&(T=new bx(x,t.width,t.height,a,s,r));let $e=new cu(R,H);this.xr=$e,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let w=tt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=tt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(w){w!==void 0&&(le=w,this.setSize(Xe,ae,!1))},this.getSize=function(w){return w.set(Xe,ae)},this.setSize=function(w,$,C=!0){if($e.isPresenting){nt("WebGLRenderer: Can't change size while VR device is presenting.");return}Xe=w,ae=$,t.width=Math.floor(w*le),t.height=Math.floor($*le),C===!0&&(t.style.width=w+"px",t.style.height=$+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,w,$)},this.getDrawingBufferSize=function(w){return w.set(Xe*le,ae*le).floor()},this.setDrawingBufferSize=function(w,$,C){Xe=w,ae=$,le=C,t.width=Math.floor(w*C),t.height=Math.floor($*C),this.setViewport(0,0,w,$)},this.setEffects=function(w){if(x===Mn){lt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let $=0;$<w.length;$++)if(w[$].isOutputPass===!0){nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(j)},this.getViewport=function(w){return w.copy(Ce)},this.setViewport=function(w,$,C,J){w.isVector4?Ce.set(w.x,w.y,w.z,w.w):Ce.set(w,$,C,J),E.viewport(j.copy(Ce).multiplyScalar(le).round())},this.getScissor=function(w){return w.copy(Ke)},this.setScissor=function(w,$,C,J){w.isVector4?Ke.set(w.x,w.y,w.z,w.w):Ke.set(w,$,C,J),E.scissor(re.copy(Ke).multiplyScalar(le).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(w){E.setScissorTest(rt=w)},this.setOpaqueSort=function(w){Te=w},this.setTransparentSort=function(w){We=w},this.getClearColor=function(w){return w.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor(...arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha(...arguments)},this.clear=function(w=!0,$=!0,C=!0){let J=0;if(w){let ee=!1;if(L!==null){let Me=L.texture.format;ee=p.has(Me)}if(ee){let Me=L.texture.type,Re=g.has(Me),De=ue.getClearColor(),Ne=ue.getClearAlpha(),Ge=De.r,ot=De.g,je=De.b;Re?(y[0]=Ge,y[1]=ot,y[2]=je,y[3]=Ne,H.clearBufferuiv(H.COLOR,0,y)):(M[0]=Ge,M[1]=ot,M[2]=je,M[3]=Ne,H.clearBufferiv(H.COLOR,0,M))}else J|=H.COLOR_BUFFER_BIT}$&&(J|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),C&&(J|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&H.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),U=w},this.dispose=function(){t.removeEventListener("webglcontextlost",Tt,!1),t.removeEventListener("webglcontextrestored",vt,!1),t.removeEventListener("webglcontextcreationerror",pn,!1),ue.dispose(),W.dispose(),ne.dispose(),Q.dispose(),ye.dispose(),pe.dispose(),Oe.dispose(),xe.dispose(),z.dispose(),$e.dispose(),$e.removeEventListener("sessionstart",kn),$e.removeEventListener("sessionend",jn),wn.stop()};function Tt(w){w.preventDefault(),to("WebGLRenderer: Context Lost."),P=!0}function vt(){to("WebGLRenderer: Context Restored."),P=!1;let w=Y.autoReset,$=ie.enabled,C=ie.autoUpdate,J=ie.needsUpdate,ee=ie.type;Je(),Y.autoReset=w,ie.enabled=$,ie.autoUpdate=C,ie.needsUpdate=J,ie.type=ee}function pn(w){lt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function bn(w){let $=w.target;$.removeEventListener("dispose",bn),ln($)}function ln(w){Tn(w),Q.remove(w)}function Tn(w){let $=Q.get(w).programs;$!==void 0&&($.forEach(function(C){z.releaseProgram(C)}),w.isShaderMaterial&&z.releaseShaderCache(w))}this.renderBufferDirect=function(w,$,C,J,ee,Me){$===null&&($=Pe);let Re=ee.isMesh&&ee.matrixWorld.determinantAffine()<0,De=Us(w,$,C,J,ee);E.setMaterial(J,Re);let Ne=C.index,Ge=1;if(J.wireframe===!0){if(Ne=he.getWireframeAttribute(C),Ne===void 0)return;Ge=2}let ot=C.drawRange,je=C.attributes.position,Ye=ot.start*Ge,gt=(ot.start+ot.count)*Ge;Me!==null&&(Ye=Math.max(Ye,Me.start*Ge),gt=Math.min(gt,(Me.start+Me.count)*Ge)),Ne!==null?(Ye=Math.max(Ye,0),gt=Math.min(gt,Ne.count)):je!=null&&(Ye=Math.max(Ye,0),gt=Math.min(gt,je.count));let Ct=gt-Ye;if(Ct<0||Ct===1/0)return;Oe.setup(ee,J,De,C,Ne);let Lt,Rt=ge;if(Ne!==null&&(Lt=Ie.get(Ne),Rt=ce,Rt.setIndex(Lt)),ee.isMesh)J.wireframe===!0?(E.setLineWidth(J.wireframeLinewidth*Ue()),Rt.setMode(H.LINES)):Rt.setMode(H.TRIANGLES);else if(ee.isLine){let Wt=J.linewidth;Wt===void 0&&(Wt=1),E.setLineWidth(Wt*Ue()),ee.isLineSegments?Rt.setMode(H.LINES):ee.isLineLoop?Rt.setMode(H.LINE_LOOP):Rt.setMode(H.LINE_STRIP)}else ee.isPoints?Rt.setMode(H.POINTS):ee.isSprite&&Rt.setMode(H.TRIANGLES);if(ee.isBatchedMesh)if(tt.get("WEBGL_multi_draw"))Rt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{let Wt=ee._multiDrawStarts,Ve=ee._multiDrawCounts,sn=ee._multiDrawCount,bt=Ne?Ie.get(Ne).bytesPerElement:1,cn=Q.get(J).currentProgram.getUniforms();for(let mn=0;mn<sn;mn++)cn.setValue(H,"_gl_DrawID",mn),Rt.render(Wt[mn]/bt,Ve[mn])}else if(ee.isInstancedMesh)Rt.renderInstances(Ye,Ct,ee.count);else if(C.isInstancedBufferGeometry){let Wt=C._maxInstanceCount!==void 0?C._maxInstanceCount:1/0,Ve=Math.min(C.instanceCount,Wt);Rt.renderInstances(Ye,Ct,Ve)}else Rt.render(Ye,Ct)};function Ln(w,$,C,J){U!==null&&w.isNodeMaterial&&U.setObject(J,w),_e===!0&&oe.setState(w,C,!1),w.transparent===!0&&w.side===It&&w.forceSinglePass===!1?(w.side=rn,w.needsUpdate=!0,ds(w,$,J),w.side=ns,w.needsUpdate=!0,ds(w,$,J),w.side=It):ds(w,$,J)}this.compile=function(w,$,C=null){C===null&&(C=w),U!==null&&U.renderStart(w,$,C),S=ne.get(C),S.init($),v.push(S),C.traverseVisible(function(ee){ee.isLight&&ee.layers.test($.layers)&&(S.pushLight(ee),ee.castShadow&&S.pushShadow(ee))}),w!==C&&w.traverseVisible(function(ee){ee.isLight&&ee.layers.test($.layers)&&(S.pushLight(ee),ee.castShadow&&S.pushShadow(ee))}),S.setupLights(),U!==null&&U.updateLights(S.state.lightsArray),Se=this.localClippingEnabled,_e=oe.init(this.clippingPlanes,Se),_e===!0&&oe.setGlobalState(this.clippingPlanes,$),U!==null&&ie.render(S.state.shadowsArray,C,$);let J=new Set;return w.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;let Me=ee.material;if(Me)if(Array.isArray(Me))for(let Re=0;Re<Me.length;Re++){let De=Me[Re];Ln(De,C,$,ee),J.add(De)}else Ln(Me,C,$,ee),J.add(Me)}),S=v.pop(),U!==null&&U.renderEnd(),J},this.compileAsync=function(w,$,C=null){let J=this.compile(w,$,C);return new Promise(ee=>{function Me(){if(J.forEach(function(Re){let Ne=Q.get(Re).currentProgram;(Ne===void 0||Ne.isReady())&&J.delete(Re)}),J.size===0){ee(w);return}setTimeout(Me,10)}tt.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let ui=null;function Xt(w){ui&&ui(w)}function kn(){wn.stop()}function jn(){wn.start()}let wn=new md;wn.setAnimationLoop(Xt),typeof self<"u"&&wn.setContext(self),this.setAnimationLoop=function(w){ui=w,$e.setAnimationLoop(w),w===null?wn.stop():wn.start()},$e.addEventListener("sessionstart",kn),$e.addEventListener("sessionend",jn),this.render=function(w,$){if($!==void 0&&$.isCamera!==!0){lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;U!==null&&U.renderStart(w,$);let C=$e.enabled===!0&&$e.isPresenting===!0,J=T!==null&&(L===null||C)&&T.begin(R,L);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),$e.enabled===!0&&$e.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&($e.cameraAutoUpdate===!0&&$e.updateCamera($),$=$e.getCamera()),w.isScene===!0&&w.onBeforeRender(R,w,$,L),S=ne.get(w,v.length),S.init($),S.state.textureUnits=se.getTextureUnits(),v.push(S),Ee.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),fe.setFromProjectionMatrix(Ee,ri,$.reversedDepth),Se=this.localClippingEnabled,_e=oe.init(this.clippingPlanes,Se),b=W.get(w,A.length),b.init(),A.push(b),$e.enabled===!0&&$e.isPresenting===!0){let Re=R.xr.getDepthSensingMesh();Re!==null&&Pi(Re,$,-1/0,R.sortObjects)}Pi(w,$,0,R.sortObjects),b.finish(),U!==null&&U.updateLights(S.state.lightsArray),R.sortObjects===!0&&b.sort(Te,We),Le=$e.enabled===!1||$e.isPresenting===!1||$e.hasDepthSensing()===!1,Le&&ue.addToRenderList(b,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),_e===!0&&oe.beginShadows();let ee=S.state.shadowsArray;if(ie.render(ee,w,$),_e===!0&&oe.endShadows(),(J&&T.hasRenderPass())===!1){let Re=b.opaque,De=b.transmissive;if(S.setupLights(),$.isArrayCamera){let Ne=$.cameras;if(De.length>0)for(let Ge=0,ot=Ne.length;Ge<ot;Ge++){let je=Ne[Ge];Wi(Re,De,w,je)}Le&&ue.render(w);for(let Ge=0,ot=Ne.length;Ge<ot;Ge++){let je=Ne[Ge];Dn(b,w,je,je.viewport)}}else De.length>0&&Wi(Re,De,w,$),Le&&ue.render(w),Dn(b,w,$)}L!==null&&te===0&&(se.updateMultisampleRenderTarget(L),se.updateRenderTargetMipmap(L)),J&&T.end(R),w.isScene===!0&&w.onAfterRender(R,w,$),Oe.resetDefaultState(),G=-1,X=null,v.pop(),v.length>0?(S=v[v.length-1],se.setTextureUnits(S.state.textureUnits),_e===!0&&oe.setGlobalState(R.clippingPlanes,S.state.camera)):S=null,A.pop(),A.length>0?b=A[A.length-1]:b=null,U!==null&&U.renderEnd()};function Pi(w,$,C,J){if(w.visible===!1)return;if(w.layers.test($.layers)){if(w.isGroup)C=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update($);else if(w.isLightProbeGrid)S.pushLightProbeGrid(w);else if(w.isLight)S.pushLight(w),w.castShadow&&S.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(fe)){J&&ve.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ee);let Re=pe.update(w),De=w.material;De.visible&&b.push(w,Re,De,C,ve.z,null,$)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(fe))){let Re=pe.update(w),De=w.material;if(J&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ve.copy(w.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),ve.copy(Re.boundingSphere.center)),ve.applyMatrix4(w.matrixWorld).applyMatrix4(Ee)),Array.isArray(De)){let Ne=Re.groups;for(let Ge=0,ot=Ne.length;Ge<ot;Ge++){let je=Ne[Ge],Ye=De[je.materialIndex];Ye&&Ye.visible&&b.push(w,Re,Ye,C,ve.z,je,$)}}else De.visible&&b.push(w,Re,De,C,ve.z,null,$)}}let Me=w.children;for(let Re=0,De=Me.length;Re<De;Re++)Pi(Me[Re],$,C,J)}function Dn(w,$,C,J){let{opaque:ee,transmissive:Me,transparent:Re}=w;S.setupLightsView(C),_e===!0&&oe.setGlobalState(R.clippingPlanes,C),J&&E.viewport(j.copy(J)),ee.length>0&&fi(ee,$,C),Me.length>0&&fi(Me,$,C),Re.length>0&&fi(Re,$,C),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function Wi(w,$,C,J){if((C.isScene===!0?C.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[J.id]===void 0){let Ye=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[J.id]=new Vt(1,1,{generateMipmaps:!0,type:Ye?Zt:Mn,minFilter:ss,samples:Math.max(4,D.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Et.workingColorSpace})}let Me=S.state.transmissionRenderTarget[J.id],Re=J.viewport||j;Me.setSize(Re.z*R.transmissionResolutionScale,Re.w*R.transmissionResolutionScale);let De=R.getRenderTarget(),Ne=R.getActiveCubeFace(),Ge=R.getActiveMipmapLevel();R.setRenderTarget(Me),R.getClearColor(Fe),ze=R.getClearAlpha(),ze<1&&R.setClearColor(16777215,.5),R.clear(),Le&&ue.render(C);let ot=R.toneMapping;R.toneMapping=ci;let je=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),S.setupLightsView(J),_e===!0&&oe.setGlobalState(R.clippingPlanes,J),fi(w,C,J),se.updateMultisampleRenderTarget(Me),se.updateRenderTargetMipmap(Me),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let gt=0,Ct=$.length;gt<Ct;gt++){let Lt=$[gt],{object:Rt,geometry:Wt,material:Ve,group:sn}=Lt;if(Ve.side===It&&Rt.layers.test(J.layers)){let bt=Ve.side;Ve.side=rn,Ve.needsUpdate=!0,Lr(Rt,C,J,Wt,Ve,sn),Ve.side=bt,Ve.needsUpdate=!0,Ye=!0}}Ye===!0&&(se.updateMultisampleRenderTarget(Me),se.updateRenderTargetMipmap(Me))}R.setRenderTarget(De,Ne,Ge),R.setClearColor(Fe,ze),je!==void 0&&(J.viewport=je),R.toneMapping=ot}function fi(w,$,C){let J=$.isScene===!0?$.overrideMaterial:null;for(let ee=0,Me=w.length;ee<Me;ee++){let Re=w[ee],{object:De,geometry:Ne,group:Ge}=Re,ot=Re.material;ot.allowOverride===!0&&J!==null&&(ot=J),De.layers.test(C.layers)&&Lr(De,$,C,Ne,ot,Ge)}}function Lr(w,$,C,J,ee,Me){U!==null&&ee.isNodeMaterial&&U.setObject(w,ee),w.onBeforeRender(R,$,C,J,ee,Me),w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),ee.onBeforeRender(R,$,C,J,w,Me),ee.transparent===!0&&ee.side===It&&ee.forceSinglePass===!1?(ee.side=rn,ee.needsUpdate=!0,R.renderBufferDirect(C,$,J,ee,w,Me),ee.side=ns,ee.needsUpdate=!0,R.renderBufferDirect(C,$,J,ee,w,Me),ee.side=It):R.renderBufferDirect(C,$,J,ee,w,Me),w.onAfterRender(R,$,C,J,ee,Me)}function ds(w,$,C){$.isScene!==!0&&($=Pe);let J=Q.get(w),ee=S.state.lights,Me=S.state.shadowsArray,Re=ee.state.version,De=z.getParameters(w,ee.state,Me,$,C,S.state.lightProbeGridArray),Ne=z.getProgramCacheKey(De),Ge=J.programs;J.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?$.environment:null,J.fog=$.fog;let ot=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;J.envMap=ye.get(w.envMap||J.environment,ot),J.envMapRotation=J.environment!==null&&w.envMap===null?$.environmentRotation:w.envMapRotation,Ge===void 0&&(w.addEventListener("dispose",bn),Ge=new Map,J.programs=Ge);let je=Ge.get(Ne);if(je!==void 0){if(J.currentProgram===je&&J.lightsStateVersion===Re)return aa(w,De),je}else De.uniforms=z.getUniforms(w),U!==null&&w.isNodeMaterial&&U.build(w,C,De),w.onBeforeCompile(De,R),je=z.acquireProgram(De,Ne),Ge.set(Ne,je),J.uniforms=De.uniforms;let Ye=J.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ye.clippingPlanes=oe.uniform),aa(w,De),J.needsLights=Ns(w),J.lightsStateVersion=Re,J.needsLights&&(Ye.ambientLightColor.value=ee.state.ambient,Ye.lightProbe.value=ee.state.probe,Ye.sunLights.value=ee.state.sun,Ye.sunLightShadows.value=ee.state.sunShadow,Ye.directionalLights.value=ee.state.directional,Ye.directionalLightShadows.value=ee.state.directionalShadow,Ye.spotLights.value=ee.state.spot,Ye.spotLightShadows.value=ee.state.spotShadow,Ye.rectAreaLights.value=ee.state.rectArea,Ye.ltc_1.value=ee.state.rectAreaLTC1,Ye.ltc_2.value=ee.state.rectAreaLTC2,Ye.pointLights.value=ee.state.point,Ye.pointLightShadows.value=ee.state.pointShadow,Ye.hemisphereLights.value=ee.state.hemi,Ye.sunShadowMatrix.value=ee.state.sunShadowMatrix,Ye.sunShadowCascade.value=ee.state.sunShadowCascade,Ye.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Ye.spotLightMatrix.value=ee.state.spotLightMatrix,Ye.spotLightMap.value=ee.state.spotLightMap,Ye.pointShadowMatrix.value=ee.state.pointShadowMatrix),J.lightProbeGrid=S.state.lightProbeGridArray.length>0,J.currentProgram=je,J.uniformsList=null,je}function Dr(w){if(w.uniformsList===null){let $=w.currentProgram.getUniforms();w.uniformsList=Tr.seqWithValue($.seq,w.uniforms)}return w.uniformsList}function aa(w,$){let C=Q.get(w);C.outputColorSpace=$.outputColorSpace,C.batching=$.batching,C.batchingColor=$.batchingColor,C.instancing=$.instancing,C.instancingColor=$.instancingColor,C.instancingMorph=$.instancingMorph,C.skinning=$.skinning,C.morphTargets=$.morphTargets,C.morphNormals=$.morphNormals,C.morphColors=$.morphColors,C.morphTargetsCount=$.morphTargetsCount,C.numClippingPlanes=$.numClippingPlanes,C.numIntersection=$.numClipIntersection,C.vertexAlphas=$.vertexAlphas,C.vertexTangents=$.vertexTangents,C.toneMapping=$.toneMapping}function Uc(w,$){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;_.setFromMatrixPosition($.matrixWorld);for(let C=0,J=w.length;C<J;C++){let ee=w[C];if(ee.texture!==null&&ee.boundingBox.containsPoint(_))return ee}return null}function Us(w,$,C,J,ee){$.isScene!==!0&&($=Pe),se.resetTextureUnits();let Me=$.fog,Re=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?$.environment:null,De=L===null?R.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Et.workingColorSpace,Ne=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,Ge=ye.get(J.envMap||Re,Ne),ot=J.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,je=!!C.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ye=!!C.morphAttributes.position,gt=!!C.morphAttributes.normal,Ct=!!C.morphAttributes.color,Lt=ci;J.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Lt=R.toneMapping);let Rt=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,Wt=Rt!==void 0?Rt.length:0,Ve=Q.get(J),sn=S.state.lights;if(_e===!0&&(Se===!0||w!==X)){let zt=w===X&&J.id===G;oe.setState(J,w,zt)}let bt=!1;J.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==sn.state.version||Ve.outputColorSpace!==De||ee.isBatchedMesh&&Ve.batching===!1||!ee.isBatchedMesh&&Ve.batching===!0||ee.isBatchedMesh&&Ve.batchingColor===!0&&ee._colorsTexture===null||ee.isBatchedMesh&&Ve.batchingColor===!1&&ee._colorsTexture!==null||ee.isInstancedMesh&&Ve.instancing===!1||!ee.isInstancedMesh&&Ve.instancing===!0||ee.isSkinnedMesh&&Ve.skinning===!1||!ee.isSkinnedMesh&&Ve.skinning===!0||ee.isInstancedMesh&&Ve.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&Ve.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&Ve.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&Ve.instancingMorph===!1&&ee.morphTexture!==null||Ve.envMap!==Ge||J.fog===!0&&Ve.fog!==Me||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==oe.numPlanes||Ve.numIntersection!==oe.numIntersection)||Ve.vertexAlphas!==ot||Ve.vertexTangents!==je||Ve.morphTargets!==Ye||Ve.morphNormals!==gt||Ve.morphColors!==Ct||Ve.toneMapping!==Lt||Ve.morphTargetsCount!==Wt||!!Ve.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(bt=!0):(bt=!0,Ve.__version=J.version);let cn=Ve.currentProgram;bt===!0&&(cn=ds(J,$,ee),U&&J.isNodeMaterial&&U.onUpdateProgram(J,cn,Ve));let mn=!1,Xi=!1,Bs=!1,Ot=cn.getUniforms(),Jt=Ve.uniforms;if(E.useProgram(cn.program)&&(mn=!0,Xi=!0,Bs=!0),J.id!==G&&(G=J.id,Xi=!0),Ve.needsLights){let zt=Uc(S.state.lightProbeGridArray,ee);Ve.lightProbeGrid!==zt&&(Ve.lightProbeGrid=zt,Xi=!0)}if(mn||X!==w){E.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Ot.setValue(H,"projectionMatrix",w.projectionMatrix),Ot.setValue(H,"viewMatrix",w.matrixWorldInverse);let Yi=Ot.map.cameraPosition;Yi!==void 0&&Yi.setValue(H,q.setFromMatrixPosition(w.matrixWorld)),D.logarithmicDepthBuffer&&Ot.setValue(H,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Ot.setValue(H,"isOrthographic",w.isOrthographicCamera===!0),X!==w&&(X=w,Xi=!0,Bs=!0)}if(Ve.needsLights&&(sn.state.sunShadowMap.length>0&&Ot.setValue(H,"sunShadowMap",sn.state.sunShadowMap,se),sn.state.directionalShadowMap.length>0&&Ot.setValue(H,"directionalShadowMap",sn.state.directionalShadowMap,se),sn.state.spotShadowMap.length>0&&Ot.setValue(H,"spotShadowMap",sn.state.spotShadowMap,se),sn.state.pointShadowMap.length>0&&Ot.setValue(H,"pointShadowMap",sn.state.pointShadowMap,se)),ee.isSkinnedMesh){Ot.setOptional(H,ee,"bindMatrix"),Ot.setOptional(H,ee,"bindMatrixInverse");let zt=ee.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),Ot.setValue(H,"boneTexture",zt.boneTexture,se))}ee.isBatchedMesh&&(Ot.setOptional(H,ee,"batchingTexture"),Ot.setValue(H,"batchingTexture",ee._matricesTexture,se),Ot.setOptional(H,ee,"batchingIdTexture"),Ot.setValue(H,"batchingIdTexture",ee._indirectTexture,se),Ot.setOptional(H,ee,"batchingColorTexture"),ee._colorsTexture!==null&&Ot.setValue(H,"batchingColorTexture",ee._colorsTexture,se));let qi=C.morphAttributes;if((qi.position!==void 0||qi.normal!==void 0||qi.color!==void 0)&&B.update(ee,C,cn),(Xi||Ve.receiveShadow!==ee.receiveShadow)&&(Ve.receiveShadow=ee.receiveShadow,Ot.setValue(H,"receiveShadow",ee.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&$.environment!==null&&(Jt.envMapIntensity.value=$.environmentIntensity),Jt.dfgLUT!==void 0&&(Jt.dfgLUT.value=hv()),Xi){if(Ot.setValue(H,"toneMappingExposure",R.toneMappingExposure),Ve.needsLights&&Ur(Jt,Bs),Me&&J.fog===!0&&Z.refreshFogUniforms(Jt,Me),Z.refreshMaterialUniforms(Jt,J,le,ae,S.state.transmissionRenderTarget[w.id]),Ve.needsLights&&Ve.lightProbeGrid){let zt=Ve.lightProbeGrid;Jt.probesSH.value=zt.texture,Jt.probesMin.value.copy(zt.boundingBox.min),Jt.probesMax.value.copy(zt.boundingBox.max),Jt.probesResolution.value.copy(zt.resolution)}Tr.upload(H,Dr(Ve),Jt,se)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Tr.upload(H,Dr(Ve),Jt,se),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Ot.setValue(H,"center",ee.center),Ot.setValue(H,"modelViewMatrix",ee.modelViewMatrix),Ot.setValue(H,"normalMatrix",ee.normalMatrix),Ot.setValue(H,"modelMatrix",ee.matrixWorld),J.uniformsGroups!==void 0){let zt=J.uniformsGroups;for(let Yi=0,Os=zt.length;Yi<Os;Yi++){let xu=zt[Yi];xe.update(xu,cn),xe.bind(xu,cn)}}return cn}function Ur(w,$){w.ambientLightColor.needsUpdate=$,w.lightProbe.needsUpdate=$,w.sunLights.needsUpdate=$,w.sunLightShadows.needsUpdate=$,w.directionalLights.needsUpdate=$,w.directionalLightShadows.needsUpdate=$,w.pointLights.needsUpdate=$,w.pointLightShadows.needsUpdate=$,w.spotLights.needsUpdate=$,w.spotLightShadows.needsUpdate=$,w.rectAreaLights.needsUpdate=$,w.hemisphereLights.needsUpdate=$}function Ns(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return te},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(w,$,C){let J=Q.get(w);J.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),Q.get(w.texture).__webglTexture=$,Q.get(w.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:C,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,$){let C=Q.get(w);C.__webglFramebuffer=$,C.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(w,$=0,C=0){L=w,k=$,te=C;let J=null,ee=!1,Me=!1;if(w){let De=Q.get(w);if(De.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(H.FRAMEBUFFER,De.__webglFramebuffer),j.copy(w.viewport),re.copy(w.scissor),de=w.scissorTest,E.viewport(j),E.scissor(re),E.setScissorTest(de),G=-1;return}else if(De.__webglFramebuffer===void 0)se.setupRenderTarget(w);else if(De.__hasExternalTextures)se.rebindTextures(w,Q.get(w.texture).__webglTexture,Q.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let ot=w.depthTexture;if(De.__boundDepthTexture!==ot){if(ot!==null&&Q.has(ot)&&(w.width!==ot.image.width||w.height!==ot.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(w)}}let Ne=w.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Me=!0);let Ge=Q.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ge[$])?J=Ge[$][C]:J=Ge[$],ee=!0):w.samples>0&&se.useMultisampledRTT(w)===!1?J=Q.get(w).__webglMultisampledFramebuffer:Array.isArray(Ge)?J=Ge[C]:J=Ge,j.copy(w.viewport),re.copy(w.scissor),de=w.scissorTest}else j.copy(Ce).multiplyScalar(le).floor(),re.copy(Ke).multiplyScalar(le).floor(),de=rt;if(C!==0&&(J=O),E.bindFramebuffer(H.FRAMEBUFFER,J)&&E.drawBuffers(w,J),E.viewport(j),E.scissor(re),E.setScissorTest(de),ee){let De=Q.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+$,De.__webglTexture,C)}else if(Me){let De=$;for(let Ne=0;Ne<w.textures.length;Ne++){let Ge=Q.get(w.textures[Ne]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Ne,Ge.__webglTexture,C,De)}}else if(w!==null&&C!==0){let De=Q.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,De.__webglTexture,C)}G=-1};function Fs(w){let $=Q.get(w);return($.__readFormat!==w.format||$.__readType!==w.type)&&($.__readFormat=w.format,$.__readType=w.type,$.__formatReadable=D.textureFormatReadable(w.format),$.__typeReadable=D.textureTypeReadable(w.type)),$}this.readRenderTargetPixels=function(w,$,C,J,ee,Me,Re,De=0){if(!(w&&w.isWebGLRenderTarget)){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Q.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(Ne=Ne[Re]),Ne){E.bindFramebuffer(H.FRAMEBUFFER,Ne);try{let Ge=w.textures[De],ot=Ge.format,je=Ge.type;w.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+De);let Ye=Fs(Ge);if(Ye.__formatReadable===!1){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ye.__typeReadable===!1){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=w.width-J&&C>=0&&C<=w.height-ee&&H.readPixels($,C,J,ee,Ae.convert(ot),Ae.convert(je),Me)}finally{let Ge=L!==null?Q.get(L).__webglFramebuffer:null;E.bindFramebuffer(H.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(w,$,C,J,ee,Me,Re,De=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=Q.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(Ne=Ne[Re]),Ne)if($>=0&&$<=w.width-J&&C>=0&&C<=w.height-ee){E.bindFramebuffer(H.FRAMEBUFFER,Ne);let Ge=w.textures[De],ot=Ge.format,je=Ge.type;w.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+De);let Ye=Fs(Ge);if(Ye.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ye.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let gt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,gt),H.bufferData(H.PIXEL_PACK_BUFFER,Me.byteLength,H.STREAM_READ),H.readPixels($,C,J,ee,Ae.convert(ot),Ae.convert(je),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let Ct=L!==null?Q.get(L).__webglFramebuffer:null;E.bindFramebuffer(H.FRAMEBUFFER,Ct);let Lt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Of(H,Lt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,gt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Me),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(gt),H.deleteSync(Lt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,$=null,C=0){let J=Math.pow(2,-C),ee=Math.floor(w.image.width*J),Me=Math.floor(w.image.height*J),Re=$!==null?$.x:0,De=$!==null?$.y:0;se.setTexture2D(w,0),H.copyTexSubImage2D(H.TEXTURE_2D,C,0,0,Re,De,ee,Me),E.unbindTexture()},this.copyTextureToTexture=function(w,$,C=null,J=null,ee=0,Me=0){let Re,De,Ne,Ge,ot,je,Ye,gt,Ct,Lt=w.isCompressedTexture?w.mipmaps[Me]:w.image;if(C!==null)Re=C.max.x-C.min.x,De=C.max.y-C.min.y,Ne=C.isBox3?C.max.z-C.min.z:1,Ge=C.min.x,ot=C.min.y,je=C.isBox3?C.min.z:0;else{let Jt=Math.pow(2,-ee);Re=Math.floor(Lt.width*Jt),De=Math.floor(Lt.height*Jt),w.isDataArrayTexture?Ne=Lt.depth:w.isData3DTexture?Ne=Math.floor(Lt.depth*Jt):Ne=1,Ge=0,ot=0,je=0}J!==null?(Ye=J.x,gt=J.y,Ct=J.z):(Ye=0,gt=0,Ct=0);let Rt=Ae.convert($.format),Wt=Ae.convert($.type),Ve;$.isData3DTexture?(se.setTexture3D($,0),Ve=H.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(se.setTexture2DArray($,0),Ve=H.TEXTURE_2D_ARRAY):(se.setTexture2D($,0),Ve=H.TEXTURE_2D),E.activeTexture(H.TEXTURE0),E.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,$.flipY),E.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),E.pixelStorei(H.UNPACK_ALIGNMENT,$.unpackAlignment);let sn=E.getParameter(H.UNPACK_ROW_LENGTH),bt=E.getParameter(H.UNPACK_IMAGE_HEIGHT),cn=E.getParameter(H.UNPACK_SKIP_PIXELS),mn=E.getParameter(H.UNPACK_SKIP_ROWS),Xi=E.getParameter(H.UNPACK_SKIP_IMAGES);E.pixelStorei(H.UNPACK_ROW_LENGTH,Lt.width),E.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Lt.height),E.pixelStorei(H.UNPACK_SKIP_PIXELS,Ge),E.pixelStorei(H.UNPACK_SKIP_ROWS,ot),E.pixelStorei(H.UNPACK_SKIP_IMAGES,je);let Bs=w.isDataArrayTexture||w.isData3DTexture,Ot=$.isDataArrayTexture||$.isData3DTexture;if(w.isDepthTexture){let Jt=Q.get(w),qi=Q.get($),zt=Q.get(Jt.__renderTarget),Yi=Q.get(qi.__renderTarget);E.bindFramebuffer(H.READ_FRAMEBUFFER,zt.__webglFramebuffer),E.bindFramebuffer(H.DRAW_FRAMEBUFFER,Yi.__webglFramebuffer);for(let Os=0;Os<Ne;Os++)Bs&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Q.get(w).__webglTexture,ee,je+Os),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Q.get($).__webglTexture,Me,Ct+Os)),H.blitFramebuffer(Ge,ot,Re,De,Ye,gt,Re,De,H.DEPTH_BUFFER_BIT,H.NEAREST);E.bindFramebuffer(H.READ_FRAMEBUFFER,null),E.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(ee!==0||w.isRenderTargetTexture||Q.has(w)){let Jt=Q.get(w),qi=Q.get($);E.bindFramebuffer(H.READ_FRAMEBUFFER,F),E.bindFramebuffer(H.DRAW_FRAMEBUFFER,V);for(let zt=0;zt<Ne;zt++)Bs?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Jt.__webglTexture,ee,je+zt):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Jt.__webglTexture,ee),Ot?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,qi.__webglTexture,Me,Ct+zt):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,qi.__webglTexture,Me),ee!==0?H.blitFramebuffer(Ge,ot,Re,De,Ye,gt,Re,De,H.COLOR_BUFFER_BIT,H.NEAREST):Ot?H.copyTexSubImage3D(Ve,Me,Ye,gt,Ct+zt,Ge,ot,Re,De):H.copyTexSubImage2D(Ve,Me,Ye,gt,Ge,ot,Re,De);E.bindFramebuffer(H.READ_FRAMEBUFFER,null),E.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Ot?w.isDataTexture||w.isData3DTexture?H.texSubImage3D(Ve,Me,Ye,gt,Ct,Re,De,Ne,Rt,Wt,Lt.data):$.isCompressedArrayTexture?H.compressedTexSubImage3D(Ve,Me,Ye,gt,Ct,Re,De,Ne,Rt,Lt.data):H.texSubImage3D(Ve,Me,Ye,gt,Ct,Re,De,Ne,Rt,Wt,Lt):w.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Me,Ye,gt,Re,De,Rt,Wt,Lt.data):w.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Me,Ye,gt,Lt.width,Lt.height,Rt,Lt.data):H.texSubImage2D(H.TEXTURE_2D,Me,Ye,gt,Re,De,Rt,Wt,Lt);E.pixelStorei(H.UNPACK_ROW_LENGTH,sn),E.pixelStorei(H.UNPACK_IMAGE_HEIGHT,bt),E.pixelStorei(H.UNPACK_SKIP_PIXELS,cn),E.pixelStorei(H.UNPACK_SKIP_ROWS,mn),E.pixelStorei(H.UNPACK_SKIP_IMAGES,Xi),Me===0&&$.generateMipmaps&&H.generateMipmap(Ve),E.unbindTexture()},this.initRenderTarget=function(w){Q.get(w).__webglFramebuffer===void 0&&se.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?se.setTextureCube(w,0):w.isData3DTexture?se.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?se.setTexture2DArray(w,0):se.setTexture2D(w,0),E.unbindTexture()},this.resetState=function(){k=0,te=0,L=null,E.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Et._getDrawingBufferColorSpace(e),t.unpackColorSpace=Et._getUnpackColorSpace()}};var Ti={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var In=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},uv=new bs(-1,1,1,-1,0,1),hu=class extends Mt{constructor(){super(),this.setAttribute("position",new at([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new at([0,2,0,0,2,0],2))}},fv=new hu,wi=class{constructor(e){this._mesh=new be(fv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,uv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Cr=class extends In{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Bt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Pn.clone(e.uniforms),this.material=new Bt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new wi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ko=class extends In{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},xc=class extends In{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var _c=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new me);this._width=n.width,this._height=n.height,t=new Vt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Zt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Cr(Ti),this.copyPass.material.blending=Yt,this.timer=new Po}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ko!==void 0&&(o instanceof Ko?n=!0:o instanceof xc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new me);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Qo=class extends In{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new we}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Sd={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new we(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Pr=class i extends In{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new me(e.x,e.y):new me(256,256),this.clearColor=new we(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Vt(r,o,{type:Zt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Vt(r,o,{type:Zt,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new Vt(r,o,{type:Zt,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}let a=Sd;this.highPassUniforms=Pn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Bt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new me(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Pn.clone(Ti.uniforms),this.blendMaterial=new Bt({uniforms:this.copyUniforms,vertexShader:Ti.vertexShader,fragmentShader:Ti.fragmentShader,premultipliedAlpha:!0,blending:dn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new we,this._oldClearAlpha=1,this._basic=new dt,this._fsQuad=new wi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new me(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let s=[],r=[];for(let o=1;o<e;o+=2){let a=t[o],l=o+1<e?t[o+1]:0,c=a+l;s.push((o*a+(o+1)*l)/c),r.push(c)}return new Bt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new me(.5,.5)},direction:{value:new me(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Bt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Pr.BlurDirectionX=new me(1,0);Pr.BlurDirectionY=new me(0,1);var jo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var vc=class extends In{constructor(){super(),this.isOutputPass=!0,this.uniforms=Pn.clone(jo.uniforms),this.material=new _r({name:jo.name,uniforms:this.uniforms,vertexShader:jo.vertexShader,fragmentShader:jo.fragmentShader}),this._fsQuad=new wi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Et.getTransfer(this._outputColorSpace)===At&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Do?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Uo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===No?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===As?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Bo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Oo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Fo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ea=new N;function Jn(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;ea.copy(e),ea[n]=0,ea.normalize();let c=.5*o/(o+a),h=1-ea.angleTo(i)/l;return Math.sign(ea[t])===1?h*c:a/(o+a)+c+c*(1-h)}var as=class i extends ct{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new N,c=new N,h=new N(e,t,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,m=d.length/6,x=new N,p=.5/o;for(let g=0,y=0;g<d.length;g+=3,y+=2)switch(l.fromArray(d,g),c.copy(l),c.x-=Math.sign(c.x)*p,c.y-=Math.sign(c.y)*p,c.z-=Math.sign(c.z)*p,c.normalize(),d[g+0]=h.x*Math.sign(l.x)+c.x*r,d[g+1]=h.y*Math.sign(l.y)+c.y*r,d[g+2]=h.z*Math.sign(l.z)+c.z*r,u[g+0]=c.x,u[g+1]=c.y,u[g+2]=c.z,Math.floor(g/m)){case 0:x.set(1,0,0),f[y+0]=Jn(x,c,"z","y",r,n),f[y+1]=1-Jn(x,c,"y","z",r,t);break;case 1:x.set(-1,0,0),f[y+0]=1-Jn(x,c,"z","y",r,n),f[y+1]=1-Jn(x,c,"y","z",r,t);break;case 2:x.set(0,1,0),f[y+0]=1-Jn(x,c,"x","z",r,e),f[y+1]=Jn(x,c,"z","x",r,n);break;case 3:x.set(0,-1,0),f[y+0]=1-Jn(x,c,"x","z",r,e),f[y+1]=1-Jn(x,c,"z","x",r,n);break;case 4:x.set(0,0,1),f[y+0]=1-Jn(x,c,"x","y",r,e),f[y+1]=1-Jn(x,c,"y","x",r,t);break;case 5:x.set(0,0,-1),f[y+0]=Jn(x,c,"x","y",r,e),f[y+1]=1-Jn(x,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var ls=.1171875,$t=1.875*11,dv=1.875*15+1.4,pv={C:0,D:2,E:4,F:5,G:7,A:9,B:11};function Ai(i){let e=/^([A-G])(#|b)?(-?\d)$/.exec(i),t=pv[e[1]]+(e[2]==="#"?1:e[2]==="b"?-1:0);return 440*2**(((Number(e[3])+1)*12+t-69)/12)}function Is(i,e){let t=Math.imul(i|0,374761393)^Math.imul(e|0,668265263);return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967296}var mv=[null,"Am","Am","F","C","G","Am","F","C","G","E7","A","Fsm","D","E"],gv={Am:["A","C","E"],F:["F","A","C"],C:["C","E","G"],G:["G","B","D"],E7:["E","G#","B","D"],A:["A","C#","E"],Fsm:["F#","A","C#"],D:["D","F#","A"],E:["E","G#","B"]},xv={Am:"A",F:"F",C:"C",G:"G",E7:"E",A:"A",Fsm:"F#",D:"D",E:"E"},_v={6:[[0,"E5",2],[2,"A5",2],[4,"C6",1],[5,"B5",1],[6,"A5",2],[8,"G#5",1],[9,"A5",3],[12,"E5",4]],7:[[0,"F5",2],[2,"A5",2],[4,"C6",2],[6,"D6",1],[7,"C6",1],[8,"A5",2],[10,"F5",2],[12,"G5",2],[14,"A5",2]],8:[[0,"G5",2],[2,"E5",1],[3,"G5",1],[4,"C6",2],[6,"E6",2],[8,"D6",1],[9,"C6",1],[10,"B5",2],[12,"G5",4]],9:[[0,"B5",1],[1,"C6",1],[2,"D6",2],[4,"B5",2],[6,"G5",2],[8,"A5",1],[9,"B5",1],[10,"C6",1],[11,"D6",1],[12,"E6",4]],11:[[0,"A5",4],[4,"C#6",2],[6,"E6",2],[8,"A6",6],[14,"G#6",1],[15,"F#6",1]],12:[[0,"F#6",4],[4,"E6",2],[6,"C#6",2],[8,"A5",4],[12,"C#6",4]],13:[[0,"D6",2],[2,"F#6",2],[4,"A6",4],[8,"G#6",2],[10,"F#6",2],[12,"E6",4]],14:[[0,"E6",2],[2,"G#6",2],[4,"B6",4],[8,"G#6",2],[10,"B6",2],[12,"C#7",4]]};function vv(){let i=[],e=(n,s)=>n*1.875+s*ls,t=["A5","C6","D6","E6","G6","A6"];for(let n=0;n<32;n++)Is(n,1)>.45&&i.push({t:e(0,n),k:"blip",f:Ai(t[Math.floor(Is(n,2)*t.length)]),v:.5+.5*(n/32)});for(let n=0;n<16;n+=2)i.push({t:e(1,n),k:"bass",f:Ai("A1"),d:ls*1.6,v:.4+n*.03,cut:300+n*90});for(let n=0;n<16;n+=2)i.push({t:e(1,n+1),k:"hat",v:.25});i.push({t:e(1,12),k:"riserShort"});for(let n=2;n<=14;n++){let s=mv[n],r=gv[s],o=xv[s],a=n>=11,l=n===10;if(l){for(let h of[0,4,8,12])i.push({t:e(n,h),k:"kick",v:1});for(let h=0;h<8;h+=2)i.push({t:e(n,h),k:"snare",v:.35+h*.04});for(let h=8;h<15;h++)i.push({t:e(n,h),k:"snare",v:.55+(h-8)*.06});i.push({t:e(n,0),k:"riser",d:1.875-ls})}else{for(let h of[0,4,8,12])i.push({t:e(n,h),k:"kick",v:1});n%2===1&&i.push({t:e(n,14),k:"kick",v:.7});for(let h of[4,12])i.push({t:e(n,h),k:"snare",v:.9});for(let h=2;h<16;h+=4)i.push({t:e(n,h),k:"hat",v:.45,open:a&&h===14});if(n>=6)for(let h=1;h<16;h+=2)i.push({t:e(n,h),k:"hat",v:.18})}let c=[[0,2],[2,3],[3,2],[6,3],[8,2],[10,3],[11,2],[14,3]];if(l)for(let h=0;h<15;h+=2)i.push({t:e(n,h),k:"bass",f:Ai(`${o}${h%4===0?2:3}`),d:ls*1.5,v:.8,cut:600+h*160});else for(let[h,d]of c)i.push({t:e(n,h),k:"bass",f:Ai(`${o}${d}`),d:ls*1.4,v:.85,cut:a?1400:900});if(n>=3){let h=[...r.map(d=>`${d}4`),`${r[0]}5`];for(let d=0;d<16;d++)l&&d===15||i.push({t:e(n,d),k:"arp",f:Ai(h[d%h.length]),v:a?.32:.24})}a&&i.push({t:e(n,0),k:"pad",fs:r.map(h=>Ai(`${h}3`)),d:1.875*.98});for(let[h,d,u]of _v[n]||[])i.push({t:e(n,h),k:"lead",f:Ai(d),d:u*ls*.92,v:a?.55:.5});if(n>=3&&n<=5)for(let h=0;h<16;h+=1)Is(n*16+h,9)>.78&&i.push({t:e(n,h),k:"bloop",f:300+Is(h,n)*500});if(n>=6&&n<=9)for(let h=0;h<16;h+=1)Is(n*16+h,4)>.82&&i.push({t:e(n,h),k:"crackle",d:.05+Is(h,n)*.12})}return i.push({t:$t,k:"boom"}),i.push({t:$t,k:"crash"}),i.push({t:1.875*15,k:"kick",v:1}),i.push({t:1.875*15,k:"crash"}),i.push({t:1.875*15,k:"pad",fs:["A3","C#4","E4","A4"].map(Ai),d:1.3}),i.push({t:1.875*15,k:"lead",f:Ai("A6"),d:1.1,v:.5}),i.push({t:1.875*15,k:"bass",f:Ai("A1"),d:1.2,v:.9,cut:900}),i.sort((n,s)=>n.t-s.t)}function Ed(i,e=.25){let n=new Float32Array(64),s=new Float32Array(64);for(let r=1;r<64;r++)n[r]=2/(r*Math.PI)*Math.sin(r*Math.PI*e);return i.createPeriodicWave(n,s)}function bd(i){let e=i.createBuffer(1,i.sampleRate,i.sampleRate),t=e.getChannelData(0),n=12345;for(let s=0;s<t.length;s++)n=Math.imul(n,1103515245)+12345|0,t[s]=(n>>>16&32767)/16384-1;return e}function Hn(i,e,t,n,s,r=.05){i.gain.setValueAtTime(1e-4,e),i.gain.exponentialRampToValueAtTime(Math.max(2e-4,n),e+t),i.gain.setValueAtTime(Math.max(2e-4,n),e+Math.max(t,s)),i.gain.exponentialRampToValueAtTime(1e-4,e+Math.max(t,s)+r)}function Td(i,e,t,n){let{out:s,send:r,noise:o,pulse:a}=e,l=(u,f)=>{let m=i.createOscillator();return u==="pulse"?m.setPeriodicWave(a):m.type=u,m.frequency.setValueAtTime(f,n),m},c=()=>i.createGain(),h=(u,f,m=.7)=>{let x=i.createBiquadFilter();return x.type=u,x.frequency.setValueAtTime(f,n),x.Q.value=m,x},d=()=>{let u=i.createBufferSource();return u.buffer=o,u};switch(t.k){case"kick":{let u=l("sine",160),f=c();u.frequency.exponentialRampToValueAtTime(42,n+.13),Hn(f,n,.004,.95*t.v,.02,.32),u.connect(f).connect(s),u.start(n),u.stop(n+.45);break}case"snare":{let u=d(),f=h("bandpass",1900,.8),m=c();Hn(m,n,.002,.42*t.v,.01,.16),u.connect(f).connect(m).connect(s),u.start(n),u.stop(n+.25);let x=l("triangle",190),p=c();Hn(p,n,.002,.25*t.v,.01,.09),x.connect(p).connect(s),x.start(n),x.stop(n+.15);break}case"hat":{let u=d(),f=h("highpass",7500),m=c();Hn(m,n,.001,.16*t.v,.005,t.open?.22:.045),u.connect(f).connect(m).connect(s),u.start(n),u.stop(n+.3);break}case"crash":{let u=d(),f=h("highpass",3800),m=c();Hn(m,n,.003,.28,.02,1.6),u.connect(f).connect(m).connect(s),u.start(n),u.stop(n+1.8);break}case"bass":{let u=l("sawtooth",t.f),f=l("square",t.f/2),m=h("lowpass",t.cut*2,4),x=c(),p=c();m.frequency.exponentialRampToValueAtTime(Math.max(80,t.cut*.4),n+t.d),p.gain.value=.35,Hn(x,n,.005,.38*t.v,t.d*.75,.06),u.connect(m),f.connect(p).connect(m),m.connect(x).connect(s),u.start(n),f.start(n),u.stop(n+t.d+.1),f.stop(n+t.d+.1);break}case"arp":{let u=l("pulse",t.f*2),f=h("lowpass",3800),m=c();Hn(m,n,.003,.11*t.v,.02,.07),u.connect(f).connect(m),m.connect(s),m.connect(r),u.start(n),u.stop(n+.12);break}case"lead":{let u=l("sawtooth",t.f),f=l("sawtooth",t.f);f.detune.value=9,u.detune.value=-7;let m=l("sine",5.6),x=c();x.gain.setValueAtTime(0,n),x.gain.linearRampToValueAtTime(9,n+.18),m.connect(x),x.connect(u.detune),x.connect(f.detune);let p=h("lowpass",3400,2),g=c();Hn(g,n,.012,.13*t.v,t.d,.09),u.connect(p),f.connect(p),p.connect(g),g.connect(s),g.connect(r);for(let y of[u,f,m])y.start(n),y.stop(n+t.d+.15);break}case"pad":{for(let u of t.fs){let f=l("triangle",u),m=l("sine",u*2),x=c();Hn(x,n,.25,.055,t.d,.6),f.connect(x),m.connect(x),x.connect(s),x.connect(r),f.start(n),m.start(n),f.stop(n+t.d+.7),m.stop(n+t.d+.7)}break}case"blip":{let u=l("square",t.f),f=c(),m=h("lowpass",5e3);Hn(f,n,.002,.06*t.v,.04,.03),u.connect(m).connect(f),f.connect(s),f.connect(r),u.start(n),u.stop(n+.1);break}case"bloop":{let u=l("sine",t.f),f=c();u.frequency.exponentialRampToValueAtTime(t.f*2.4,n+.11),Hn(f,n,.004,.16,.06,.05),u.connect(f),f.connect(s),f.connect(r),u.start(n),u.stop(n+.16);break}case"crackle":{let u=d(),f=h("highpass",2500),m=c();m.gain.setValueAtTime(1e-4,n);let x=8;for(let p=0;p<x;p++)m.gain.setValueAtTime(Is(p,Math.round(n*1e3))>.5?.12:1e-4,n+t.d*p/x);m.gain.setValueAtTime(1e-4,n+t.d),u.connect(f).connect(m).connect(s),u.start(n),u.stop(n+t.d+.02);break}case"riserShort":case"riser":{let u=t.d||.46875,f=d();f.loop=!0;let m=h("bandpass",300,2.5),x=c();m.frequency.exponentialRampToValueAtTime(7e3,n+u),x.gain.setValueAtTime(1e-4,n),x.gain.exponentialRampToValueAtTime(t.k==="riser"?.3:.12,n+u),x.gain.exponentialRampToValueAtTime(1e-4,n+u+.04),f.connect(m).connect(x).connect(s),f.start(n),f.stop(n+u+.06);break}case"boom":{let u=l("sine",75),f=c();u.frequency.exponentialRampToValueAtTime(28,n+1.4),Hn(f,n,.005,.9,.05,1.5),u.connect(f).connect(s),u.start(n),u.stop(n+1.7);let m=d();m.loop=!0;let x=h("lowpass",4e3,.5),p=c();x.frequency.exponentialRampToValueAtTime(160,n+1.6),Hn(p,n,.003,.55,.05,1.6),m.connect(x).connect(p).connect(s),m.start(n),m.stop(n+1.8);break}default:break}}function wd(){let i=vv(),e=null,t=null,n=0,s=0,r=null,o=!1;function a(){if(e)return e;let c=window.AudioContext||window.webkitAudioContext;if(!c)return null;e=new c;let h=e.createGain();h.gain.value=o?0:.32;let d=e.createDynamicsCompressor();d.threshold.value=-14,d.ratio.value=4,d.attack.value=.005,d.release.value=.2,h.connect(d).connect(e.destination);let u=e.createDelay(1);u.delayTime.value=ls*3;let f=e.createGain();f.gain.value=.28;let m=e.createBiquadFilter();m.type="lowpass",m.frequency.value=2600;let x=e.createGain();return x.gain.value=.35,u.connect(m).connect(f).connect(u),m.connect(x).connect(h),t={out:h,send:u,master:h,noise:bd(e),pulse:Ed(e)},e}function l(){if(!e||e.state!=="running")return;let c=e.currentTime-n+.25;for(;s<i.length&&i[s].t<c;){let h=i[s++],d=n+h.t;d>=e.currentTime-.01&&Td(e,t,h,Math.max(d,e.currentTime+.005))}}return{prepare(){try{a()}catch{}},async play(c){if(!a())return!1;if(e.state!=="running")try{await e.resume()}catch{}return e.state!=="running"?!1:(n=e.currentTime+.06-c,s=i.findIndex(h=>h.t>=c-.001),s<0&&(s=i.length),clearInterval(r),r=setInterval(l,25),l(),!0)},running:()=>!!e&&e.state==="running"&&r!==null,position:()=>e&&e.state==="running"?e.currentTime-n:null,setMuted(c){o=c,t&&t.master.gain.setTargetAtTime(c?0:.32,e.currentTime,.05)},suspend(){e&&e.state==="running"&&e.suspend()},resume(){return e&&e.state==="suspended"?e.resume():Promise.resolve()},stop(c=.4){if(clearInterval(r),r=null,!e)return;let h=e;try{t.master.gain.setTargetAtTime(0,h.currentTime,c/3)}catch{}setTimeout(()=>{h.close().catch(()=>{})},c*1e3+200),e=null},async renderOffline(c=22050){let h=window.OfflineAudioContext,d=new h(1,Math.ceil(dv*c),c),u=d.createGain();u.gain.value=.32;let f=d.createDynamicsCompressor();f.threshold.value=-14,f.ratio.value=4,u.connect(f).connect(d.destination);let m=d.createDelay(1);m.delayTime.value=ls*3;let x=d.createGain();x.gain.value=.28;let p=d.createBiquadFilter();p.type="lowpass",p.frequency.value=2600;let g=d.createGain();g.gain.value=.35,m.connect(p).connect(x).connect(m),p.connect(g).connect(u);let y={out:u,send:m,master:u,noise:bd(d),pulse:Ed(d)};for(let M of i)Td(d,y,M,M.t+.01);return d.startRendering()},events:i}}function Rd(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Mt,c=0;for(let h=0;h<i.length;++h){let d=i[h],u=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0,d=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let m=0;m<f.count;++m)d.push(f.getX(m)+h);h+=i[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=Ad(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][u]);let m=Ad(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function Ad(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new yt(o,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let d=l/t;for(let u=0,f=h.count;u<f;u++)for(let m=0;m<t;m++){let x=h.getComponent(u,m);a.setComponent(u+d,m,x)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}var Ri=i=>Math.min(1,Math.max(0,i)),ht=(i,e,t)=>Ri((i-e)/(t-e)),_t=i=>i*i*(3-2*i),uu=i=>i<.5?4*i*i*i:1-(-2*i+2)**3/2,ft=(i,e,t)=>i+(e-i)*t;function K(i,e=0){let t=Math.imul(i|0,374761393)^Math.imul(e|0,668265263);return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967296}var I=(i,e,t)=>new N(i,e,t),xt=(i,e=1)=>new we(i).multiplyScalar(e),ki=class{constructor(){this.pos=[],this.nor=[],this.col=[],this.idx=[],this.n=0}addGeometry(e,t,n){let s=e.attributes.position,r=e.attributes.normal,o=new ut().getNormalMatrix(t),a=new N;for(let l=0;l<s.count;l++)a.fromBufferAttribute(s,l).applyMatrix4(t),this.pos.push(a.x,a.y,a.z),a.fromBufferAttribute(r,l).applyMatrix3(o).normalize(),this.nor.push(a.x,a.y,a.z),this.col.push(n.r,n.g,n.b);if(e.index)for(let l=0;l<e.index.count;l++)this.idx.push(e.index.getX(l)+this.n);else for(let l=0;l<s.count;l++)this.idx.push(l+this.n);this.n+=s.count,e.dispose()}addTube(e,{segs:t=12,radial:n=6,prof:s,col:r}){let o=e.computeFrenetFrames(t,!1),a=new N,l=new N,c=this.n;for(let h=0;h<=t;h++){let d=h/t;e.getPointAt(d,a);let u=s(d),f=r(d),m=o.normals[h],x=o.binormals[h];for(let p=0;p<=n;p++){let g=p/n*Math.PI*2,y=Math.sin(g),M=-Math.cos(g);l.set(M*m.x+y*x.x,M*m.y+y*x.y,M*m.z+y*x.z).normalize(),this.nor.push(l.x,l.y,l.z),this.pos.push(a.x+u*l.x,a.y+u*l.y,a.z+u*l.z),this.col.push(f.r,f.g,f.b)}}for(let h=1;h<=t;h++)for(let d=1;d<=n;d++){let u=c+(n+1)*(h-1)+(d-1),f=c+(n+1)*h+(d-1),m=c+(n+1)*h+d,x=c+(n+1)*(h-1)+d;this.idx.push(u,f,x,f,m,x)}this.n+=(t+1)*(n+1)}build(){let e=new Mt;return e.setAttribute("position",new at(this.pos,3)),e.setAttribute("normal",new at(this.nor,3)),e.setAttribute("color",new at(this.col,3)),e.setIndex(this.idx),e.computeBoundingSphere(),e}};function cs(i,{deep:e=!0,skip:t=()=>!1}={}){i.updateMatrixWorld(!0);let n=new et().copy(i.matrixWorld).invert(),s=new Map,r=a=>{for(let l of a.children)if(!t(l))if(l.isMesh){if(l.isInstancedMesh||l.userData.keep||Array.isArray(l.material)||!l.visible)continue;let c=[l.material.uuid,l.castShadow,l.receiveShadow,!!l.userData.noDepth,!!l.userData.noCast,l.renderOrder,l.frustumCulled].join("|");s.has(c)||s.set(c,[]),s.get(c).push(l)}else e&&l.children.length&&!l.isPoints&&!l.isLine&&!l.isSprite&&r(l)};r(i);let o=new et;for(let a of s.values()){if(a.length<2)continue;let l=a.some(m=>m.geometry.attributes.uv),c=a.some(m=>m.geometry.attributes.color),h=a.map(m=>{let x=m.geometry.index?m.geometry.toNonIndexed():m.geometry.clone();for(let g of Object.keys(x.attributes))["position","normal","uv","color"].includes(g)||x.deleteAttribute(g);x.attributes.normal||x.computeVertexNormals();let p=x.attributes.position.count;return l&&!x.attributes.uv&&x.setAttribute("uv",new at(new Float32Array(p*2),2)),!l&&x.attributes.uv&&x.deleteAttribute("uv"),c&&!x.attributes.color&&x.setAttribute("color",new at(new Float32Array(p*3).fill(1),3)),!c&&x.attributes.color&&x.deleteAttribute("color"),x.morphAttributes={},x.clearGroups(),o.multiplyMatrices(n,m.matrixWorld),x.applyMatrix4(o),x}),d=Rd(h,!1);if(h.forEach(m=>m.dispose()),!d)continue;let u=a[0],f=new be(d,u.material);f.castShadow=u.castShadow,f.receiveShadow=u.receiveShadow,f.renderOrder=u.renderOrder,f.frustumCulled=u.frustumCulled,f.userData={...u.userData},i.add(f);for(let m of a)m.removeFromParent(),m.geometry.dispose()}}var Kn=Math.PI*2,Mc={grandpa:{skin:15777688,hair:14278115,brow:13620443,style:"swept",beard:!0,mustache:!0,glasses:"round",frame:13212222,eye:7029795,head:[.25,.262,.245],eyeR:.05,eyeX:.088,eyeY:.035,nose:.06,noseRed:.3,mouthY:-.142,mouthW:.08,belly:1,shirt:7114677,tie:"bow",tieColor:12071482,browR:.019,cheeks:!0,badge:"Pr Anatole",wrinkles:"old",extra:"chain",shoe:5911072},wild:{skin:16044732,hair:15988216,brow:15988216,style:"wild",goatee:!0,glasses:"thick",frame:1315864,eye:4102988,head:[.232,.285,.235],eyeR:.06,eyeX:.083,eyeY:.05,nose:.064,noseRed:.55,mouthY:-.122,mouthW:.084,belly:0,shirt:3108762,vest:3817032,tie:null,browR:.025,chin:!0,badge:"Dr Eustache",wrinkles:"grin",extra:"pencil",shoe:2501171},curly:{skin:10118212,hair:12867628,brow:7219730,style:"puff",goggles:!0,eye:6963987,head:[.238,.258,.24],eyeR:.058,eyeX:.086,eyeY:.035,nose:.042,noseRed:.12,mouthY:-.115,mouthW:.064,belly:.2,shirt:2001546,tie:null,browR:.012,cheeks:!0,lashes:!0,lidOpen:-.25,badge:"Dr Margot",freckles:!0,extra:"clipboard",shoe:8007226}};function yv(i,e,t){let n=(a,l)=>t*Math.sqrt(Math.max(0,1-(a/i)**2-(l/e)**2)),s=a=>I(a.x/(i*i),a.y/(e*e),a.z/(t*t)).normalize();return{zS:n,normal:s,surf:(a,l,c=0)=>{let h=I(a,l,n(a,l));return h.addScaledVector(s(h),c)},dirPt:(a,l,c=1)=>I(Math.sin(a)*Math.cos(l)*i*c,Math.sin(l)*e*c,Math.cos(a)*Math.cos(l)*t*c)}}function Mv(i){let e=document.createElement("canvas");e.width=256,e.height=128;let t=e.getContext("2d");t.fillStyle="#f6f2ec",t.fillRect(0,0,256,128);let n=t.createRadialGradient(64,64,34,64,64,120);n.addColorStop(0,"rgba(255,255,255,0)"),n.addColorStop(1,"rgba(214,140,140,0.45)"),t.fillStyle=n,t.fillRect(0,0,256,128);let s=new we(i),r=l=>`rgb(${Math.min(255,Math.round(s.r*255*l))},${Math.min(255,Math.round(s.g*255*l))},${Math.min(255,Math.round(s.b*255*l))})`,o=t.createRadialGradient(64,64,6,64,64,24);o.addColorStop(0,r(1.6)),o.addColorStop(.65,r(1.05)),o.addColorStop(1,r(.5)),t.beginPath(),t.arc(64,64,24,0,Kn),t.fillStyle=o,t.fill();for(let l=0;l<48;l++){let c=l/48*Kn+K(l,5)*.08;t.strokeStyle=K(l,6)>.5?r(1.9):r(.55),t.globalAlpha=.35,t.lineWidth=1,t.beginPath(),t.moveTo(64+Math.cos(c)*11,64+Math.sin(c)*11),t.lineTo(64+Math.cos(c)*(19+K(l,7)*4),64+Math.sin(c)*(19+K(l,7)*4)),t.stroke()}t.globalAlpha=1,t.lineWidth=2.5,t.strokeStyle=r(.28),t.stroke(),t.beginPath(),t.arc(64,64,10.5,0,Kn),t.fillStyle="#0a0706",t.fill(),t.fillStyle="rgba(255,255,255,0.95)",t.beginPath(),t.arc(56,55,5,0,Kn),t.fill(),t.fillStyle="rgba(255,255,255,0.65)",t.beginPath(),t.arc(72,72,2.2,0,Kn),t.fill();let a=new en(e);return a.colorSpace=Ut,a.anisotropy=4,a}var yc=null;function Cd(){if(yc)return yc;let i=(n,s,r)=>{let o=document.createElement("canvas");o.width=n,o.height=s,r(o.getContext("2d"),n,s);let a=new en(o);return a.wrapS=a.wrapT=jt,a},e=i(256,128,(n,s,r)=>{n.fillStyle="#808080",n.fillRect(0,0,s,r);for(let o=0;o<2600;o++){let a=110+Math.floor(K(o,1)*50);n.fillStyle=`rgba(${a},${a},${a},0.5)`,n.beginPath(),n.arc(K(o,2)*s,K(o,3)*r,.6+K(o,4)*1.2,0,Kn),n.fill()}}),t=i(128,128,(n,s,r)=>{n.fillStyle="#808080",n.fillRect(0,0,s,r);for(let o=0;o<r;o+=2)n.fillStyle=o%4?"rgba(150,150,150,0.5)":"rgba(100,100,100,0.5)",n.fillRect(0,o,s,1);for(let o=0;o<s;o+=2)n.fillStyle=o%4?"rgba(140,140,140,0.35)":"rgba(110,110,110,0.35)",n.fillRect(o,0,1,r)});return t.repeat.set(10,10),yc={skin:e,fabric:t},yc}function Sv(i){let e=document.createElement("canvas");e.width=256,e.height=128;let t=e.getContext("2d");t.fillStyle="#f8f6f0",t.fillRect(0,0,256,128),t.fillStyle="#1e8a8a",t.fillRect(0,0,256,34),t.fillStyle="#ffffff",t.font='700 22px "Bricolage Grotesque", sans-serif',t.textAlign="center",t.fillText("LABO",128,25),t.fillStyle="#1b2433",t.font='800 34px "Bricolage Grotesque", sans-serif',t.fillText(i,128,86),t.fillStyle="#e0446a",t.fillRect(96,104,64,8);let n=new en(e);return n.colorSpace=Ut,n}function Ev(i,e,t,n){let s=e.clone().sub(i),r=new be(new Qe(t,t,s.length(),8),n);return r.position.copy(i).addScaledVector(s,.5),r.quaternion.setFromUnitVectors(I(0,1,0),s.normalize()),r}function Sc(i){let e=new Ze,t=new Ze;e.add(t);let n=(z,Z,W,ne=null,oe=null,ie=null)=>{let ue=new be(Z,W);return ne&&ue.position.copy(ne),oe&&ue.rotation.set(oe[0],oe[1],oe[2]),ie&&ue.scale.copy(ie),z.add(ue),ue},s=new we(i.skin),r=new pt({color:s,roughness:.5,sheen:.55,sheenColor:new we(16748408),sheenRoughness:.45,emissive:s.clone().multiplyScalar(.05),bumpMap:Cd().skin,bumpScale:.35}),o=r.clone();o.color=s.clone().lerp(new we(14704746),.3);let a=r.clone();a.color=s.clone().lerp(new we(14178383),i.noseRed);let l=new pt({color:15593971,roughness:.72,sheen:.6,sheenColor:new we(16777215),sheenRoughness:.7,bumpMap:Cd().fabric,bumpScale:.6}),c=new Be({color:2830917,roughness:.85}),h=new pt({color:i.shoe||3809558,roughness:.35,clearcoat:.7,clearcoatRoughness:.25}),d=new Be({color:15327956,roughness:.8}),u=new Be({color:i.shirt,roughness:.75}),f=new we(i.hair),m=new pt({vertexColors:!0,roughness:.55,sheen:1,sheenRoughness:.4,sheenColor:f.clone().lerp(new we(16777215),.5)}),x=new Be({color:1380366,roughness:.5}),p=new pt({map:Mv(i.eye),roughness:.25,clearcoat:1,clearcoatRoughness:.05,emissive:16777215,emissiveIntensity:.04}),g=null;i.glasses==="round"?g=new Be({color:i.frame,metalness:1,roughness:.25}):i.glasses&&(g=new pt({color:i.frame,roughness:.3,clearcoat:1,clearcoatRoughness:.1}));let y=new pt({color:16777215,transparent:!0,opacity:.1,roughness:.04,clearcoat:1,depthWrite:!1}),M=new Be({color:13146696,metalness:1,roughness:.3});for(let z of[-1,1]){n(t,new yn(.085,.32,6,12),c,I(z*.11,.3,0)),n(t,new it(1,20,14),h,I(z*.115,.075,.055),null,I(.1,.07,.16)),n(t,new it(1,20,10,0,Kn,Math.PI*.5,Math.PI*.5),d,I(z*.115,.06,.055),null,I(.108,.05,.17));for(let Z=0;Z<3;Z++)n(t,new Qe(.006,.006,.07,6),d,I(z*.115,.135-Z*.008,.1+Z*.03),[.35+Z*.25,0,Math.PI/2])}let _=i.belly,b=[[.001,.4],[.27,.4],[.3,.43],[.285,.55],[.28+.06*_,.72],[.28+.075*_,.86],[.275+.04*_,.98],[.26,1.08],[.22,1.16],[.15,1.23],[.085,1.27],[.001,1.28]],S=z=>{for(let Z=1;Z<b.length;Z++)if(z<=b[Z][1]){let[W,ne]=b[Z-1],[oe,ie]=b[Z];return ft(W,oe,(z-ne)/(ie-ne))}return 0},A=.8;n(t,new li(b.map(([z,Z])=>new me(z,Z)),40),l,null,null,I(1,1,A));let v=(z,Z=0)=>S(z)*A+Z,T=new Ze;T.position.set(0,1.27,v(1.27)+.004),T.rotation.x=-.72,t.add(T);let R=(z,Z,W)=>{let ne=new Mi;return ne.moveTo(-z,0),ne.lineTo(z,0),ne.lineTo(0,-Z),ne.closePath(),new Eo(ne,{depth:W,bevelEnabled:!1})};if(i.vest){n(T,R(.12,.3,.02),new Be({color:i.vest,roughness:.8})),n(T,R(.07,.13,.024),u);for(let z=0;z<2;z++)n(T,new it(.012,8,6),x,I(0,-.15-z*.05,.022))}else n(T,R(.12,.3,.02),u);if(i.tie==="bow"){let z=new Be({color:i.tieColor,roughness:.6});n(T,new it(.018,10,8),z,I(0,-.03,.03));for(let Z of[-1,1])n(T,new Hi(.03,.06,10),z,I(Z*.035,-.03,.028),[0,0,Z*Math.PI/2],I(1,1,.5))}for(let z of[-1,1])n(T,new ct(.04,.32,.018),l,I(z*.07,-.14,.024),[0,0,z*.38]);n(t,new Ft(.1,.032,10,24),l,I(0,1.27,0),[Math.PI/2,0,0],I(1,1,.75)),n(t,new Qe(.07,.075,.14,14),r,I(0,1.31,0));for(let z of[.95,.8,.65])n(t,new it(.016,10,8),x,I(0,z,v(z)+.004));for(let z of[-1,1]){let W=new Ze;W.position.set(z*.17,.66,v(.66)*.82),W.rotation.y=z*.62,t.add(W),n(W,new ct(.15,.13,.016),l,I(0,0,.012)),n(W,new ct(.16,.035,.022),l,I(0,.07,.016))}if(i.badge){let z=new Ze;z.position.set(-.13,1,v(1)-.02),z.rotation.set(-.15,-.5,.06),t.add(z),n(z,new ct(.1,.055,.006),new Be({map:Sv(i.badge),roughness:.35}),I(0,0,.012)),n(z,new ct(.02,.02,.008),M,I(0,.032,.012))}let P=new Ze;P.position.set(.13,.98,v(.98)-.03),P.rotation.y=.5,t.add(P),n(P,new ct(.11,.1,.02),l,I(0,0,.012)),[15221579,2919664,15777836].forEach((z,Z)=>{n(P,new Qe(.008,.008,.07,8),new Be({color:z,roughness:.4}),I(-.03+Z*.025,.06,.006))});let U={};for(let[z,Z]of[["L",1],["R",-1]]){let W=new Ze;W.position.set(Z*.245,1.15,0),t.add(W),n(W,new it(.074,16,12),l),n(W,new yn(.072,.2,6,12),l,I(0,-.14,0));let ne=new Ze;ne.position.y=-.29,W.add(ne),n(ne,new yn(.066,.19,6,12),l,I(0,-.13,0)),n(ne,new Ft(.066,.018,8,18),l,I(0,-.245,0),[Math.PI/2,0,0]);let oe=new Ze;oe.position.y=-.29,ne.add(oe),n(oe,new it(1,16,12),r,I(0,-.05,0),null,I(.04,.078,.07));let ie=[];for(let[ue,B]of[[-.036,.04],[-.012,.052],[.012,.055],[.036,.048]]){let ge=new Ze;ge.position.set(0,-.1,ue*1.1),oe.add(ge),n(ge,new yn(.017,B,4,8),r,I(0,-.03,0)),ie.push(ge)}n(oe,new yn(.022,.05,4,8),r,I(-Z*.014,-.045,.062),[.7,0,0]),U[z]={shoulder:W,elbow:ne,hand:oe,fingers:ie,sx:Z}}if(i.extra==="clipboard"){let z=new Ze;z.position.set(-.035,-.13,.02),U.R.hand.add(z),n(z,new ct(.012,.24,.17),new Be({color:9067058,roughness:.6}));let Z=document.createElement("canvas");Z.width=128,Z.height=180;let W=Z.getContext("2d");W.fillStyle="#fbfaf5",W.fillRect(0,0,128,180),W.strokeStyle="#2f6f9a",W.lineWidth=3;for(let oe=0;oe<6;oe++)W.strokeRect(10,20+oe*26,14,14),W.fillStyle="#9aa7b5",W.fillRect(32,24+oe*26,60+K(oe,91)*30,6),oe<4&&(W.beginPath(),W.moveTo(12,27+oe*26),W.lineTo(17,32+oe*26),W.lineTo(26,18+oe*26),W.strokeStyle="#e0446a",W.stroke(),W.strokeStyle="#2f6f9a");let ne=new en(Z);ne.colorSpace=Ut,n(z,new wt(.15,.2),new Be({map:ne,roughness:.8}),I(-.0065,-.01,0),[0,-Math.PI/2,0]),n(z,new ct(.02,.025,.06),M,I(-.006,.115,0))}let[O,F,V]=i.head,k=yv(O,F,V),te=1.24,L=new Ze,G=1.29+F*.86*te;L.position.y=G,L.scale.setScalar(te),t.add(L),n(L,new it(1,48,36),r,null,null,I(O,F,V));for(let z of[-1,1])n(L,new it(1,16,12),r,I(z*O*.95,-.015,-.01),[0,z*.3,z*.12],I(.03,.068,.05)),n(L,new it(1,12,10),o,I(z*(O*.95+.012),-.015,0),[0,z*.3,0],I(.012,.042,.03)),i.cheeks&&n(L,new it(.06,20,14),o,k.surf(z*.14,-.045,-.046));i.chin&&n(L,new it(.072,20,14),r,k.surf(0,-.2,-.045));let X=k.surf(0,-.035,i.nose*.32);n(L,new it(i.nose,24,18),a,X,null,I(1,.92,1.05));let j=new Be({color:s.clone().multiplyScalar(.32),roughness:.8});for(let z of[-1,1])n(L,new it(i.nose*.2,12,8),j,X.clone().add(I(z*i.nose*.4,-i.nose*.62,i.nose*.42)),null,I(1.1,.55,1));let re=[];for(let z of[-1,1]){let Z=z*i.eyeX,W=i.eyeY,ne=new Ze;ne.position.set(Z,W,k.zS(Z,W)-.6*i.eyeR),L.add(ne);let oe=n(ne,new it(i.eyeR,32,24),p),ie=new Ze;ne.add(ie),n(ie,new it(i.eyeR*1.08,28,14,0,Kn,0,Math.PI/2),r);let ue=new Ze;if(ne.add(ue),n(ue,new it(i.eyeR*1.06,28,14,0,Kn,Math.PI/2,Math.PI/2),r),i.lashes){let B=new ki,ge=i.eyeR*1.08;for(let ce of[.55,.85,1.15]){let Ae=I(z*Math.sin(ce)*ge,0,Math.cos(ce)*ge),Oe=Ae.clone().normalize();B.addTube(new Ht([Ae,Ae.clone().addScaledVector(Oe,.012).add(I(0,.004,0)),Ae.clone().addScaledVector(Oe,.02).add(I(0,.014,0))]),{segs:5,radial:4,prof:xe=>.0035*(1-xe),col:()=>new we(1707272)})}n(ie,B.build(),m)}re.push({g:ne,eye:oe,lidU:ie,lidL:ue,sx:z})}let de=[],Fe=i.eyeY+i.eyeR+.032;for(let z of[-1,1]){let Z=k.surf(z*(i.eyeX+.004),Fe,.01),W=new Ze;W.position.copy(Z),L.add(W);let ne=new ki,oe=[-1,-.4,.3,1].map(ue=>k.surf(z*(i.eyeX+ue*.05),Fe+.014*(1-ue*ue)-.006*ue,.01).sub(Z)),ie=new we(i.brow);ne.addTube(new Ht(oe),{segs:12,radial:7,prof:ue=>i.browR*Math.sin(Math.PI*(.12+.76*ue))*(1.1-.4*ue),col:ue=>ie.clone().multiplyScalar(.85+.15*ue)}),n(W,ne.build(),m),de.push({g:W,sx:z,base:Z.clone()})}let ze=z=>k.zS(z*i.eyeX,i.eyeY)-.6*i.eyeR+i.eyeR;if(i.glasses){let z=i.glasses==="thick",Z=i.eyeR+(z?.022:.018),W=ze(1)+(z?.03:.022);for(let oe of[-1,1]){let ie=n(L,new Ft(Z,z?.015:.0065,10,40),g,I(oe*i.eyeX,i.eyeY,W),null,z?I(1.08,.94,1):null);ie.castShadow=!0;let ue=n(L,new tn(Z,32),y,I(oe*i.eyeX,i.eyeY,W-.002),null,z?I(1.08,.94,1):null);ue.userData.noDepth=!0;let B=I(oe*(i.eyeX+Z*(z?1.08:1)),i.eyeY+.01,W-.005),ge=I(oe*O*.97,i.eyeY-.005,-.03);L.add(Ev(B,ge,z?.009:.004,g))}let ne=i.eyeX-Z*(z?1.08:1);n(L,new Ft(Math.max(.01,ne),z?.011:.005,8,14,Math.PI),g,I(0,i.eyeY-.002,W))}if(i.goggles){for(let oe of[-1,1]){let ie=k.surf(oe*.072,.165,.02),ue=new Ze;ue.position.copy(ie),ue.quaternion.setFromUnitVectors(I(0,0,1),k.normal(ie)),L.add(ue),n(ue,new Qe(.052,.056,.045,24),M,null,[Math.PI/2,0,0]);let B=n(ue,new tn(.044,24),new pt({color:16757575,emissive:16747034,emissiveIntensity:.08,roughness:.25,clearcoat:.6}),I(0,0,.0235));B.castShadow=!1}let Z=new ki,W=[];for(let oe=0;oe<24;oe++){let ie=oe/24*Kn,ue=.165-.03+.03*Math.cos(ie),B=Math.sqrt(Math.max(.05,1-(ue/F)**2))*1.03;W.push(I(Math.sin(ie)*O*B,ue,Math.cos(ie)*V*B))}let ne=new we(3811874);Z.addTube(new Ht(W,!0),{segs:48,radial:5,prof:()=>.011,col:()=>ne}),n(L,Z.build(),m)}let Xe=18,ae=5,le=(Xe+1)*2,Te=new Float32Array(ae*le*3),We=new Float32Array(ae*le*3),Ce=new Float32Array(ae*le*3),Ke=[];for(let z=0;z<ae;z++)for(let Z=0;Z<Xe;Z++){let W=z*le+Z*2;Ke.push(W,W+2,W+1,W+1,W+2,W+3)}let rt=new Mt;rt.setAttribute("position",new yt(Te,3)),rt.setAttribute("normal",new yt(We,3)),rt.setAttribute("color",new yt(Ce,3)),rt.setIndex(Ke);let fe=n(L,rt,new Be({vertexColors:!0,roughness:.45,side:It}));fe.frustumCulled=!1;let _e=s.clone().lerp(new we(9321010),.4),Se=[_e,new we(3803662),new we(15920352),new we(12865626),_e],Ee=[.0022,.0016,.0026,.002,.0022],q=new N;function ve(z,Z,W,ne,oe){let ie=(z*le+Z*2+W)*3;q.copy(k.surf(ne,oe,Ee[z])),Te[ie]=q.x,Te[ie+1]=q.y,Te[ie+2]=q.z;let ue=k.normal(q);We[ie]=ue.x,We[ie+1]=ue.y,We[ie+2]=ue.z,Ce[ie]=Se[z].r,Ce[ie+1]=Se[z].g,Ce[ie+2]=Se[z].b}let Pe="";function Le(z,Z){let W=`${z.toFixed(3)}|${Z.toFixed(3)}`;if(W===Pe)return;Pe=W;let ne=i.mouthW,oe=i.mouthY;for(let ie=0;ie<=Xe;ie++){let ue=-1+2*ie/Xe,B=ue*ne,ge=1-ue*ue,ce=oe+z*.03*ue*ue+Z*.02*ge*(1-.5*Math.max(0,z)),Ae=Math.min(ce,oe+z*.03*ue*ue-(.006+Z*.075)*Math.pow(ge,.85)),Oe=Math.max(Ae,ce-.024*Math.sqrt(ge)),xe=Math.min(ce,Ae+(.01+.022*Z)*ge),Je=.0095*Math.sqrt(ge)+.0015;ve(0,ie,0,B,ce+Je),ve(0,ie,1,B,ce),ve(1,ie,0,B,ce),ve(1,ie,1,B,Ae),ve(2,ie,0,B,ce-5e-4),ve(2,ie,1,B,Oe),ve(3,ie,0,B,xe),ve(3,ie,1,B,Ae),ve(4,ie,0,B,Ae),ve(4,ie,1,B,Ae-Je)}rt.attributes.position.needsUpdate=!0,rt.attributes.normal.needsUpdate=!0,rt.attributes.color.needsUpdate=!0}Le(.6,.1);let Ue=new ki,H=new we,qe=(z,Z,W)=>H.copy(z).multiplyScalar(.7+.3*W+(K(Z,9)-.5)*.14).clone();if(i.beard){let z=new we(i.hair).multiplyScalar(.9),Z=(ne,oe,ie)=>!(Math.abs(ne)<i.mouthW+.035&&oe>i.mouthY-.045)&&!(oe>-.085&&Math.abs(ne)<ie*.66),W=0;for(let ne=0;ne<1400&&W<150;ne++){let oe=ft(0,-.265,K(ne,52)),ie=O*.98*Math.sqrt(Math.max(0,1-(oe/F)**2)),ue=(K(ne,51)*2-1)*ie;if(!Z(ue,oe,ie))continue;W+=1;let B=k.surf(ue,oe,-.006),ge=.03+K(ne,54)*.014;Ue.addGeometry(new it(1,10,8),new et().compose(B,new fn,I(ge,ge*1.15,ge)),qe(z,ne,.55+K(ne,55)*.45))}}if(i.mustache){let z=new we(i.hair);for(let Z of[-1,1])for(let W=0;W<3;W++){let ne=(W-1)*.006,oe=W===1?.004:0,ie=[[.006,-.088,.024],[.045,-.097,.027],[.085,-.118,.02],[.108,-.15,.012]].map(([ue,B,ge])=>k.surf(Z*ue,B+ne,ge+oe));Ue.addTube(new Ht(ie),{segs:14,radial:8,prof:ue=>.026*Math.pow(Math.sin(Math.PI*(.08+.84*ue)),.7)*(1-.3*ue),col:ue=>qe(z,W+Z*5,.6+.4*ue)})}}if(i.goatee){let z=new we(i.hair);for(let Z=0;Z<10;Z++){let W=(K(Z,61)-.5)*.07,ne=-.2-K(Z,62)*.05,oe=k.surf(W,ne,.015),ie=.07+K(Z,63)*.05;Ue.addTube(new Ht([oe,oe.clone().add(I(W*.2,-ie*.5,.02)),oe.clone().add(I(W*.4,-ie,.035))]),{segs:6,radial:6,prof:ue=>.022*(1-.88*ue),col:ue=>qe(z,Z,ue)})}}let tt=s.clone().multiplyScalar(.78),D=(z,Z=.0032)=>Ue.addTube(new Ht(z.map(([W,ne])=>k.surf(W,ne,5e-4))),{segs:10,radial:5,prof:W=>Z*Math.sin(Math.PI*(.1+.8*W)),col:()=>tt});if(i.wrinkles){let z=i.wrinkles==="old"?3:2;for(let Z=0;Z<z;Z++){let W=Fe+.048+Z*.022;D([-1,-.5,0,.5,1].map(ne=>[ne*(.07+Z*.008),W+.007*(1-ne*ne)]))}for(let Z of[-1,1])if(i.wrinkles==="old"){for(let W of[-.016,0,.016])D([[Z*(i.eyeX+i.eyeR+.006),i.eyeY+W*.6],[Z*(i.eyeX+i.eyeR+.02),i.eyeY+W*1.2],[Z*(i.eyeX+i.eyeR+.032),i.eyeY+W*1.8]],.0026);D([[Z*(i.eyeX-.03),i.eyeY-i.eyeR-.004],[Z*i.eyeX,i.eyeY-i.eyeR-.012],[Z*(i.eyeX+.032),i.eyeY-i.eyeR-.004]],.0028)}else D([[Z*i.nose*1.05,-.045],[Z*(i.nose*1.45),-.085],[Z*(i.mouthW+.012),i.mouthY-.004]],.0035)}if(i.freckles){let z=s.clone().multiplyScalar(.6);for(let Z=0;Z<26;Z++){let W=(K(Z,81)*2-1)*.15,ne=-.055+K(Z,82)*.05;if(Math.abs(W)<.03&&ne<-.02)continue;let oe=.0035+K(Z,83)*.003;Ue.addGeometry(new it(1,8,6),new et().compose(k.surf(W,ne,-5e-4),new fn,I(oe,oe,oe*.5)),z)}}if(Ue.n&&n(L,Ue.build(),m),i.extra==="chain"){let z=new ki,Z=W=>v(W)+.012;z.addTube(new Ht([I(.11,.95,Z(.95)-.02),I(.085,.87,Z(.87)),I(.04,.845,Z(.845)),I(.004,.86,Z(.86))]),{segs:20,radial:5,prof:()=>.004,col:()=>new we(16777215)}),n(t,z.build(),M)}else if(i.extra==="pencil"){let z=new Ze;z.position.set(-O*.93,.05,-.01),z.rotation.set(Math.PI/2+.25,0,.15),L.add(z),n(z,new Qe(.008,.008,.15,6),new Be({color:15909424,roughness:.5})),n(z,new Hi(.008,.025,6),new Be({color:15255450,roughness:.7}),I(0,-.087,0),[Math.PI,0,0]),n(z,new Qe(.0085,.0085,.018,6),new Be({color:15235722,roughness:.6}),I(0,.083,0))}let E=new Ze;L.add(E);let Y=new ki,Q=(z,Z,W,ne=.6)=>Y.addGeometry(new it(1,32,20,0,Kn,0,Math.PI*ne),new et().compose(I(0,.004,-.01),new fn().setFromEuler(new Wn(z,0,0)),I(O*Z,F*Z,V*Z)),W);if(i.style==="swept"){Q(-.5,1.03,f.clone().multiplyScalar(.78));for(let z=0;z<64;z++){let Z=ft(-.21,.21,(z+K(z,1))/64),W=Math.sqrt(Math.max(.05,1-(Z/O)**2)),ne=.8+K(z,2)*.2+Math.abs(Z)*1.3,oe=2.55+K(z,3)*.35,ie=[];for(let ue=0;ue<=5;ue++){let B=ue/5,ge=ft(ne,oe,B),ce=.985+.2*Math.pow(Math.sin(Math.PI*Math.min(1,B*1.15)),.8)+.06*B+K(z,4)*.04;ie.push(I(Z*(1+.3*B),Math.sin(ge)*F*W*ce,Math.cos(ge)*V*W*ce))}Y.addTube(new Ht(ie),{segs:16,radial:7,prof:ue=>.044*(1-.85*Math.pow(ue,1.3))*(.55+.45*Math.min(1,ue*6)),col:ue=>qe(f,z,ue)})}for(let z of[-1,1])for(let Z=0;Z<14;Z++){let W=k.dirPt(z*(1.35+K(Z,11+z)*.6),.02+K(Z,12)*.6,.97),ne=k.normal(W),oe=.07+K(Z,13)*.06,ie=.03+K(Z,14)*.05,ue=[W,W.clone().addScaledVector(ne,oe*.5).add(I(0,ie*.4,-.03)),W.clone().addScaledVector(ne,oe).add(I(0,ie,-.07))];Y.addTube(new Ht(ue),{segs:8,radial:7,prof:B=>.048*(1-.8*B),col:B=>qe(f,Z+50,.6+.4*B)})}for(let z=0;z<18;z++){let Z=ft(-.19,.19,(z+K(z,21))/18),W=Math.sqrt(Math.max(.05,1-(Z/O)**2)),ne=[];for(let oe=0;oe<=4;oe++){let ie=oe/4,ue=ft(1.95+K(z,22)*.3,3.75+K(z,23)*.2,ie),B=1+.1*Math.sin(Math.PI*ie)+K(z,24)*.03;ne.push(I(Z,Math.sin(ue)*F*W*B,Math.cos(ue)*V*W*B))}Y.addTube(new Ht(ne),{segs:12,radial:7,prof:oe=>.04*(1-.8*oe),col:oe=>qe(f,z+90,oe)})}}else if(i.style==="wild"){Q(-.7,1.02,f.clone().multiplyScalar(.8));let z=0;for(let W=0;W<400&&z<46;W++){let ne=(K(W,71)*2-1)*Math.PI,oe=ft(-.1,.9,K(W,72));if(Math.abs(ne)<1.2)continue;z+=1;let ie=.045+K(W,73)*.03;Y.addGeometry(new it(1,10,8),new et().compose(k.dirPt(ne,oe,1.02+K(W,74)*.12),new fn,I(ie,ie,ie)),qe(f,W,.7+K(W,75)*.3))}let Z=0;for(let W=0;W<1200&&Z<150;W++){let ne=(K(W,1)*2-1)*Math.PI,oe=ft(-.05,1.5,Math.sqrt(K(W,2)));if(Math.abs(ne)<.75&&oe<1.1)continue;Z+=1;let ie=k.dirPt(ne,oe,.96),B=k.normal(ie).clone().add(I(0,.55+K(W,3)*.45,0)).normalize(),ge=new N().crossVectors(B,I(0,1,0));ge.lengthSq()<.001&&(ge=I(1,0,0)),ge.normalize();let ce=.15+K(W,4)*.2,Ae=(K(W,5)-.5)*.22,Oe=[ie,ie.clone().addScaledVector(B,ce*.35).addScaledVector(ge,Ae*.5),ie.clone().addScaledVector(B,ce*.7).addScaledVector(ge,-Ae*.6),ie.clone().addScaledVector(B,ce).addScaledVector(ge,Ae)];Y.addTube(new Ht(Oe),{segs:12,radial:7,prof:xe=>.048*(1-.88*Math.pow(xe,.9)),col:xe=>qe(f,W,.75+.25*xe)})}}else if(i.style==="puff"){let z=new it(1,32,20,0,Kn,0,Math.PI*.6);Y.addGeometry(z,new et().compose(I(0,.005,-.012),new fn().setFromEuler(new Wn(-.42,0,0)),I(O*1.05,F*1.05,V*1.05)),f.clone().multiplyScalar(.8));let Z=(ie,ue,B)=>Y.addGeometry(new it(1,10,8),new et().compose(ie,new fn,I(ue,ue,ue)),qe(f,B,.7+K(B,77)*.3)),W=0;for(let ie=0;ie<800&&W<115;ie++){let ue=(K(ie,31)*2-1)*Math.PI,B=ft(.2,1.5,K(ie,32));Math.abs(ue)<.85&&B<.95||(W+=1,Z(k.dirPt(ue,B,1.06+K(ie,33)*.1),.034+K(ie,34)*.028,ie))}let ne=I(0,F*1.08,-V*.38);for(let ie=0;ie<46;ie++){let ue=I(K(ie,41)-.5,K(ie,42)-.35,K(ie,43)-.5).normalize();Z(ne.clone().addScaledVector(ue,.1+K(ie,44)*.05),.05+K(ie,45)*.03,ie+200)}for(let ie=0;ie<9;ie++)Z(k.dirPt(ft(-.8,.8,ie/8),.98+K(ie,46)*.08,1.05),.038,ie+300);let oe=new Ze;oe.position.copy(ne).add(I(.04,.05,.02)),oe.rotation.set(.4,0,-.9),E.add(oe),n(oe,new Qe(.011,.011,.26,6),new Be({color:15909424,roughness:.5})),n(oe,new Qe(.012,.012,.03,8),new Be({color:15235722,roughness:.6}),I(0,.14,0)),n(oe,new Hi(.011,.035,6),new Be({color:15255450,roughness:.7}),I(0,-.147,0),[Math.PI,0,0])}if(i.flyaways){let z=i.style==="wild"?26:10;for(let Z=0;Z<z;Z++){let W=(K(Z,101)*2-1)*Math.PI,ne=ft(.5,1.45,K(Z,102));if(Math.abs(W)<.7&&ne<1)continue;let oe=k.dirPt(W,ne,1),ie=k.normal(oe),ue=(i.style==="wild"?.25:.14)+K(Z,103)*.12,B=I(K(Z,104)-.5,.2,K(Z,105)-.5).normalize().multiplyScalar(ue*.5);Y.addTube(new Ht([oe,oe.clone().addScaledVector(ie,ue*.4).addScaledVector(B,.15),oe.clone().addScaledVector(ie,ue*.75).addScaledVector(B,.5),oe.clone().addScaledVector(ie,ue).addScaledVector(B,1)]),{segs:16,radial:5,prof:ge=>.012*(1-.8*ge),col:ge=>qe(f,Z+700,.85+.15*ge)})}}n(E,Y.build(),m),e.traverse(z=>{z.isMesh&&(z.castShadow=z.castShadow||!z.material.transparent,z.receiveShadow=!z.material.transparent)}),fe.castShadow=!1,fe.userData.keep=!0,re.forEach(z=>{z.eye.userData.keep=!0});let se=[];e.traverse(z=>{z.isMesh||se.push(z)});for(let z of se)cs(z,{deep:!1});let ye=new N,Ie=(z,Z)=>{let W=2.6+K(Z,1)*1.8,ne=(z+K(Z,2)*W)%W/W,oe=.16/W;return ne<oe?Math.sin(ne/oe*Math.PI):0},he=Math.floor(i.eyeX*1e3+i.mouthY*777);function pe(z){let{t:Z=0,y:W=0,turn:ne=0,L:oe=[0,0,0,.3],R:ie=[0,0,0,.3],headTurn:ue=0,headTilt:B=0,headRoll:ge=0,frizz:ce=1,smile:Ae=.6,open:Oe=.08,brow:xe=0,browAngle:Je=0,lid:$e=0,squint:Tt=0,look:vt=null,squash:pn=1,lean:bn=0,wink:ln=0}=z;t.position.y=W,t.rotation.x=bn;let Tn=1/Math.sqrt(pn);t.scale.set(Tn,pn,Tn),e.rotation.y=ne;for(let[Xt,[kn,jn,wn,Pi=.3]]of[["L",oe],["R",ie]]){let Dn=U[Xt];Dn.shoulder.rotation.set(-kn,0,Dn.sx*jn),Dn.elbow.rotation.set(-wn,0,0),Dn.fingers.forEach(Wi=>{Wi.rotation.z=-Dn.sx*Pi*1.4})}L.position.y=G+.006*Math.sin(Z*2.2+he),L.rotation.set(B,ue,ge),E.scale.setScalar(1+.022*ce*Math.sin(Z*9+he)+(ce-1)*.025),de.forEach(Xt=>{Xt.g.position.copy(Xt.base),Xt.g.position.y+=xe*.02,Xt.g.rotation.z=Xt.sx*Je*.4}),Le(Math.max(-1,Math.min(1,Ae)),Ri(Oe));let Ln=Math.max($e,Ie(Z,he)),ui=-.7-.22*Math.max(0,xe)+.25*Tt+(i.lidOpen||0);re.forEach(Xt=>{Xt.lidU.rotation.x=ft(ui,1.45,Xt.sx<0?Math.max(Ln,ln):Ln),Xt.lidL.rotation.x=ft(.85,.32,Tt)}),vt&&(e.updateMatrixWorld(!0),ye.copy(vt),L.worldToLocal(ye),re.forEach(Xt=>{let kn=ye.x-Xt.g.position.x,jn=ye.y-Xt.g.position.y,wn=ye.z-Xt.g.position.z,Pi=Math.max(-.55,Math.min(.55,Math.atan2(kn,wn))),Dn=Math.max(-.4,Math.min(.4,Math.atan2(jn,Math.hypot(kn,wn))));Xt.eye.rotation.set(-Dn,Pi,0)}))}return{root:e,pose:pe,arms:U,head:L}}var En={};En.supported=!0;En.ready=Promise.resolve();function zn(i){if(!i)throw new Error("Assertion failed")}function Ec(i){return i>>>1^-(i&1)}En.decodeVertexBuffer=(i,e,t,n,s)=>{zn(n[0]===160||n[0]===161);let r=n[0]&15,o=Math.min(8192/t&-16,256),a=new Uint8Array(o*t),l=r===0?t:t+t/4,c=n.length-l,h=n.slice(c,c+t),d=r===0?null:n.slice(c+t,c+l),u=1,f=[[0,2,4,8],[0,1,2,4],[1,2,4,8]];for(let x=0;x<e;x+=o){let p=Math.min(e-x,o),g=(p+15&-16)>>>4,y=(g+3&-4)>>>2,M=u;u+=r===0?0:t/4,a.fill(0);for(let _=0;_<t;_++){let b=_*p,S=r===0?0:n[M+(_>>>2)]>>>((_&3)<<1)&3;if(S===2)continue;if(S===3){a.set(n.subarray(u,u+p),b),u+=p;continue}let A=u;u+=y;for(let v=0;v<g;v++){let T=n[A+(v>>>2)]>>>((v&3)<<1)&3,R=f[r===0?0:S+1][T],P=b+(v<<4);if(R!==0)if(R===1){let U=u;u+=2;for(let O=0;O<16;O++){let F=O&7,V=n[U+(O>>>3)]>>>F&1;V===1&&(V=n[u++]),a[P+O]=V}}else if(R===2){let U=u;u+=4;for(let O=0;O<16;O++){let F=6-((O&3)<<1),V=n[U+(O>>>2)]>>>F&3;V===3&&(V=n[u++]),a[P+O]=V}}else if(R===4){let U=u;u+=8;for(let O=0;O<16;O++){let F=4-((O&1)<<2),V=n[U+(O>>>1)]>>>F&15;V===15&&(V=n[u++]),a[P+O]=V}}else a.set(n.subarray(u,u+16),P),u+=16}}for(let _=0;_<p;_++){let b=x+_;for(let S=0;S<t;S+=4){let A=r===0?0:d[S>>>2]&3;if(zn(A!==3),A===0)for(let v=S;v<S+4;v++){let T=Ec(a[v*p+_]),R=h[v]+T&255,P=b*t+v;i[P]=h[v]=R}else if(A===1)for(let v=S;v<S+4;v+=2){let T=Ec(a[v*p+_]+(a[(v+1)*p+_]<<8)),R=h[v]+(h[v+1]<<8);R=R+T&65535;let P=b*t+v;i[P]=h[v]=R&255,i[P+1]=h[v+1]=R>>>8}else if(A===2){let v=S,T=a[v*p+_]+(a[(v+1)*p+_]<<8)+(a[(v+2)*p+_]<<16)+(a[(v+3)*p+_]<<24),R=h[v]+(h[v+1]<<8)+(h[v+2]<<16)+(h[v+3]<<24),P=d[S>>>2]>>>4;R=R^(T>>>P|T<<32-P);let U=b*t+v;i[U]=h[v]=R&255,i[U+1]=h[v+1]=R>>>8&255,i[U+2]=h[v+2]=R>>>16&255,i[U+3]=h[v+3]=R>>>24}}}}let m=Math.max(l,r===0?32:24);if(zn(u==n.length-m),s==="OCTAHEDRAL"){zn(t===4||t===8);let x=new(t===4?Int8Array:Int16Array)(i.buffer,i.byteOffset,e*4),p=t===4?127:32767;for(let g=0;g<e*4;g+=4){let y=x[g+0],M=x[g+1],_=x[g+2];y/=_,M/=_;let b=1-Math.abs(y)-Math.abs(M),S=Math.max(-b,0);y-=y>=0?S:-S,M-=M>=0?S:-S;let A=p/Math.sqrt(y*y+M*M+b*b);x[g+0]=Math.round(y*A),x[g+1]=Math.round(M*A),x[g+2]=Math.round(b*A)}}else if(s==="QUATERNION"){zn(t===8);let x=new Int16Array(i.buffer,i.byteOffset,e*4);for(let p=0;p<e*4;p+=4){let g=x[p+3],y=g&3,M=Math.SQRT1_2/(g|3),_=x[p+0]*M,b=x[p+1]*M,S=x[p+2]*M,A=Math.sqrt(Math.max(0,1-_*_-b*b-S*S));x[p+(y+1)%4]=Math.round(_*32767),x[p+(y+2)%4]=Math.round(b*32767),x[p+(y+3)%4]=Math.round(S*32767),x[p+(y+0)%4]=Math.round(A*32767)}}else if(s==="EXPONENTIAL"){zn((t&3)===0);let x=new Uint32Array(1),p=new Float32Array(x.buffer),g=new Int32Array(i.buffer,i.byteOffset,e*(t/4)),y=new Float32Array(i.buffer,i.byteOffset,e*(t/4));for(let M=0;M<e*(t/4);M++){let _=g[M],b=_>>24,S=_<<8>>8;x[0]=b+127<<23,y[M]=p[0]*S}}else if(s==="COLOR"){zn(t===4||t===8);let x=(1<<t*2)-1,p=new(t===4?Uint8Array:Uint16Array)(i.buffer,i.byteOffset,e*4),g=new(t===4?Int8Array:Int16Array)(i.buffer,i.byteOffset,e*4);for(let y=0;y<e*4;y+=4){let M=p[y+0],_=g[y+1],b=g[y+2],S=p[y+3],v=(1<<31-Math.clz32(S)+1)-1,T=M+_-b,R=M+b,P=M-_-b,U=S&v>>1;U=U<<1|U&1;let O=x/v;p[y+0]=Math.round(T*O),p[y+1]=Math.round(R*O),p[y+2]=Math.round(P*O),p[y+3]=Math.round(U*O)}}};function Ls(i,e){return i[i.offset-1-e&i.length-1]}function nn(i,e){let t=i.offset;i[t]=e,i.offset=t+1&i.length-1}En.decodeIndexBuffer=(i,e,t,n)=>{zn(n[0]===225),zn(e%3===0),zn(t===2||t===4);let s;t===2?s=new Uint16Array(i.buffer):s=new Uint32Array(i.buffer);let r=e/3,o=1,a=o+r,l=n.length-16;function c(){let p=0;for(let g=0;;g+=7){let y=n[a++];if(p|=(y&127)<<g,y<128)return p}}let h=0,d=0,u=new Uint32Array(32),f=new Uint32Array(16);u.offset=0,f.offset=0;function m(p){return d+=Ec(p)}let x=0;for(let p=0;p<r;p++){let g=n[o++],y=g>>>4,M=g&15;if(y<15){let _=Ls(u,(y<<1)+0),b=Ls(u,(y<<1)+1),S=-1;if(M===0)S=h++,nn(f,S);else if(M<13)S=Ls(f,M);else if(M===13)S=--d,nn(f,S);else if(M===14)S=++d,nn(f,S);else if(M===15){let A=c();S=m(A),nn(f,S)}nn(u,b),nn(u,S),nn(u,S),nn(u,_),s[x++]=_,s[x++]=b,s[x++]=S}else{let _=-1,b=-1,S=-1;if(M<14){let A=n[l+M],v=A>>>4,T=A&15;_=h++,v===0?b=h++:b=Ls(f,v-1),T===0?S=h++:S=Ls(f,T-1),nn(f,_),v===0&&nn(f,b),T===0&&nn(f,S)}else{let A=n[a++];A===0&&(h=0);let v=A>>>4,T=A&15;M===14?_=h++:_=m(c()),v===0?b=h++:v===15?b=m(c()):b=Ls(f,v-1),T===0?S=h++:T===15?S=m(c()):S=Ls(f,T-1),nn(f,_),(v===0||v===15)&&nn(f,b),(T===0||T===15)&&nn(f,S)}nn(u,_),nn(u,b),nn(u,b),nn(u,S),nn(u,S),nn(u,_),s[x++]=_,s[x++]=b,s[x++]=S}}};En.decodeIndexSequence=(i,e,t,n)=>{zn(n[0]===209),zn(t===2||t===4);let s;t===2?s=new Uint16Array(i.buffer):s=new Uint32Array(i.buffer);let r=1;function o(){let l=0;for(let c=0;;c+=7){let h=n[r++];if(l|=(h&127)<<c,h<128)return l}}let a=new Uint32Array(2);for(let l=0;l<e;l++){let c=o(),h=c&1,d=Ec(c>>>1);s[l]=a[h]+=d}};En.decodeGltfBuffer=(i,e,t,n,s,r)=>{let o={ATTRIBUTES:En.decodeVertexBuffer,TRIANGLES:En.decodeIndexBuffer,INDICES:En.decodeIndexSequence};zn(o[s]!==void 0),o[s](i,e,t,n,r)};En.decodeGltfBufferAsync=(i,e,t,n,s)=>{let r=new Uint8Array(i*e);return En.decodeGltfBuffer(r,i,e,t,n,s),Promise.resolve(r)};async function Ld(i){let e=await fetch(i);if(!e.ok)throw new Error(`${i} : ${e.status}`);let t=await e.arrayBuffer(),n=new Uint8Array(t,0,2);return n[0]===31&&n[1]===139&&(t=await new Response(new Blob([t]).stream().pipeThrough(new DecompressionStream("gzip"))).arrayBuffer()),await En.ready,bv(t)}function bv(i){let e=new DataView(i);if(String.fromCharCode(e.getUint8(0),e.getUint8(1),e.getUint8(2),e.getUint8(3))!=="BNGC")throw new Error("format inconnu");let n=e.getUint32(4,!0),s=JSON.parse(new TextDecoder().decode(new Uint8Array(i,8,n))),r=8+n,o=s.version>=2,a=(h,d,u,f,m)=>{let x=h.nv;if(!o)return new u(i,r+h.offsets[d],x*f);let p=new Uint8Array(x*m);return En.decodeVertexBuffer(p,x,m,new Uint8Array(i,r+h.offsets[d],h.sizes[d])),new u(p.buffer,0,x*f)},l=(h,d,u)=>{if(!o)return h.index32?new Uint32Array(i,r+h.offsets[d],u):new Uint16Array(i,r+h.offsets[d],u);let f=new Uint32Array(u);return En.decodeIndexBuffer(new Uint8Array(f.buffer),u,4,new Uint8Array(i,r+h.offsets[d],h.sizes[d])),h.index32?f:Uint16Array.from(f)},c=s.parts.map(h=>{let d=h.nv,u=a(h,"pos",Uint16Array,4,8),f=new Float32Array(d*3);for(let S=0;S<d;S++)for(let A=0;A<3;A++)f[S*3+A]=h.min[A]+u[S*4+A]/65535*(h.max[A]-h.min[A]);let m=new Mt;m.setAttribute("position",new yt(f,3));let x=h.offsets.nrm!==void 0,p=x?a(h,"nrm",Int8Array,4,4):null,g=a(h,"col",Uint8Array,4,4),y=x?new Int8Array(d*3):null,M=new Uint8Array(d*3),_=new Uint8Array(d);for(let S=0;S<d;S++)x&&(y[S*3]=p[S*4],y[S*3+1]=p[S*4+1],y[S*3+2]=p[S*4+2]),M[S*3]=g[S*4],M[S*3+1]=g[S*4+1],M[S*3+2]=g[S*4+2],_[S]=g[S*4+3];x&&m.setAttribute("normal",new yt(y,3,!0)),m.setAttribute("color",new yt(M,3,!0)),m.setAttribute("mask",new yt(_,1,!0)),h.offsets.skinI!==void 0&&(m.setAttribute("skinIndex",new yt(a(h,"skinI",Uint8Array,4,4),4)),m.setAttribute("skinWeight",new yt(a(h,"skinW",Uint8Array,4,4),4,!0))),h.offsets.uv!==void 0&&m.setAttribute("uv",new yt(a(h,"uv",Uint16Array,2,4),2,!0)),h.offsets.flow!==void 0&&m.setAttribute("flow",new yt(a(h,"flow",Int8Array,4,4),4,!0)),h.morph&&(m.morphAttributes.position=h.morph.names.map((S,A)=>{let v=new Float32Array(d*3);if(o){let R=new Uint8Array(d*8);En.decodeVertexBuffer(R,d,8,new Uint8Array(i,r+h.morph.offsets[A],h.morph.sizes[A]));let P=new Int16Array(R.buffer);for(let U=0;U<d;U++)for(let O=0;O<3;O++)v[U*3+O]=P[U*4+O]*h.morph.scale}else{let R=h.morph.names.length,P=new Int16Array(i,r+h.morph.offset,d*3*R),U=h.morph.scale/32767;for(let O=0;O<d*3;O++)v[O]=P[A*d*3+O]*U}let T=new yt(v,3);return T.name=S,T}),m.morphTargetsRelative=!0),m.setIndex(new yt(l(h,"idx",h.ni),1)),x||m.computeVertexNormals(),m.computeBoundingSphere();let b=null;if(h.offsets.idx1!==void 0){b=new Mt;for(let[S,A]of Object.entries(m.attributes))b.setAttribute(S,A);m.morphAttributes.position&&(b.morphAttributes.position=m.morphAttributes.position,b.morphTargetsRelative=!0),b.setIndex(new yt(l(h,"idx1",h.ni1),1)),b.boundingSphere=m.boundingSphere}return{name:h.name,mat:h.mat,geometry:m,geometryLo:b,attach:h.attach||null,morphNames:h.morph?h.morph.names:null}});return{meta:s.meta,bones:s.bones,parts:c}}var Dd=`
vec3 hash33c(vec3 p) { p = fract(p * vec3(.1031, .1030, .0973)); p += dot(p, p.yxz + 33.33); return fract((p.xxy + p.yxx) * p.zyx) * 2.0 - 1.0; }
float gnoise(vec3 p) {
  vec3 i = floor(p); vec3 f = fract(p); vec3 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(dot(hash33c(i), f), dot(hash33c(i + vec3(1,0,0)), f - vec3(1,0,0)), u.x),
                 mix(dot(hash33c(i + vec3(0,1,0)), f - vec3(0,1,0)), dot(hash33c(i + vec3(1,1,0)), f - vec3(1,1,0)), u.x), u.y),
             mix(mix(dot(hash33c(i + vec3(0,0,1)), f - vec3(0,0,1)), dot(hash33c(i + vec3(1,0,1)), f - vec3(1,0,1)), u.x),
                 mix(dot(hash33c(i + vec3(0,1,1)), f - vec3(0,1,1)), dot(hash33c(i + vec3(1,1,1)), f - vec3(1,1,1)), u.x), u.y), u.z);
}
`;function Pd(i){i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vRest;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vRest = position;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vRest;
${Dd}`)}var Id=(i,e,t="")=>`
#include <normal_fragment_maps>
{
  vec3 pr = vRest * ${e.toFixed(1)};
  // att\xE9nu\xE9 quand le motif devient plus fin qu'un pixel (pas de scintillement)
  float lodK = 1.0 - smoothstep(0.35, 1.2, length(fwidth(pr)));
  float b0 = (gnoise(pr)${t}) * lodK;
  vec3 dpx = dFdx(-vViewPosition); vec3 dpy = dFdy(-vViewPosition);
  float bx = dFdx(b0); float by = dFdy(b0);
  vec3 r1 = cross(dpy, normal); vec3 r2 = cross(normal, dpx);
  float det = dot(dpx, r1);
  vec3 sg = sign(det) * (bx * r1 + by * r2);
  normal = normalize(abs(det) * normal - ${i.toFixed(4)} * sg);
}
`;function Ud(){let i={},e=new pt({vertexColors:!0,roughness:.56,sheen:.25,sheenRoughness:.55,sheenColor:new we(16761e3),specularIntensity:.45}),t=typeof location<"u"&&new URLSearchParams(location.search).get("castdbg")||"";t.includes("nosheen")&&(e.sheen=0),e.onBeforeCompile=o=>{Pd(o),o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
attribute float mask;
varying float vMask;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vMask = mask;`),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
varying float vMask;`).replace("#include <lights_physical_fragment>",`#include <lights_physical_fragment>
material.specularColor *= 1.0 - vMask; material.specularF90 *= 1.0 - vMask;
#ifdef USE_SHEEN
material.sheenColor *= 1.0 - vMask;
#endif`),t.includes("nobump")||(o.fragmentShader=o.fragmentShader.replace("#include <normal_fragment_maps>",Id(11e-5,1100," + 0.4 * gnoise(pr * 2.3)"))),t.includes("nosss")||(o.fragmentShader=o.fragmentShader.replace("#include <lights_physical_pars_fragment>",mt.lights_physical_pars_fragment.replace("reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );","reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F ); { float dNLw = saturate((dot(geometryNormal, directLight.direction) + 0.35) / 1.35); vec3 sss = vec3(1.0, 0.42, 0.3) * max(dNLw - dotNL, 0.0) * 0.9; reflectedLight.directDiffuse += sss * directLight.color * BRDF_Lambert( material.diffuseContribution ); }")))},e.customProgramCacheKey=()=>"skin-v4",i.skin=e,i.skinmh=e;let n=(o,a=.82,l=.5)=>{let c=new pt({color:o,vertexColors:!0,roughness:a,sheen:l,sheenRoughness:.75,sheenColor:new we(16777215)});return c.onBeforeCompile=h=>{Pd(h),h.fragmentShader=h.fragmentShader.replace("#include <normal_fragment_maps>",Id(22e-5,900," + 0.5 * sin(vRest.y * 2600.0 + vRest.x * 900.0) * sin(vRest.x * 2600.0 + vRest.z * 2600.0)"))},c.customProgramCacheKey=()=>`fabric-${a}`,c};i.coat=n(16777215,.8,.55),i.cloth=n(16777215,.85,.35);let s=new pt({vertexColors:!0,roughness:.7,specularIntensity:.18});s.onBeforeCompile=o=>{o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 flow;
varying vec3 vFlow;
varying vec3 vFlowO;
varying vec3 vRest;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFlowO = flow.xyz;
vRest = position;
vFlow = normalize(normalMatrix * flow.xyz + 1e-5);`),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vFlow;
varying vec3 vFlowO;
varying vec3 vRest;
vec3 gHairT; float gHairShift; vec3 gHairTint;
${Dd}
float strandNoise(out float lod) {
  vec3 T = normalize(vFlowO + 1e-5);
  vec3 B1 = normalize(cross(T, abs(T.y) < 0.9 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0)));
  vec3 B2 = cross(T, B1);
  vec3 q = vec3(dot(vRest, T) * 45.0, dot(vRest, B1) * 900.0, dot(vRest, B2) * 900.0);
  lod = 1.0 - smoothstep(0.5, 1.6, length(fwidth(q.yz)));
  // m\xE8ches (environ 4 mm) toujours visibles, fibres fines att\xE9nu\xE9es quand elles deviennent trop petites
  vec3 qc = vec3(dot(vRest, T) * 18.0, dot(vRest, B1) * 260.0, dot(vRest, B2) * 260.0);
  float lodC = 1.0 - smoothstep(0.6, 1.8, length(fwidth(qc.yz)));
  return (gnoise(q) * 0.65 + gnoise(q * vec3(1.0, 2.3, 2.3)) * 0.35) * lod * 0.7 + gnoise(qc) * lodC * 0.9;
}`).replace("#include <lights_physical_pars_fragment>",mt.lights_physical_pars_fragment.replace("reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;",`reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
        {
          vec3 Hh = normalize(directLight.direction + geometryViewDir);
          float th = dot(gHairT, Hh) + gHairShift;
          float s1 = pow(sqrt(max(0.0, 1.0 - th * th)), 110.0);
          float t2 = th - 0.2;
          float s2 = pow(sqrt(max(0.0, 1.0 - t2 * t2)), 24.0);
          float vis = saturate(dot(geometryNormal, directLight.direction) * 0.75 + 0.25);
          reflectedLight.directSpecular += directLight.color * vis * (s1 * 0.07 * gHairTint + s2 * 0.5 * material.diffuseColor);
        }`)).replace("#include <color_fragment>",`#include <color_fragment>
float sLod; float sN = strandNoise(sLod); diffuseColor.rgb *= clamp(0.84 + sN * 0.42, 0.35, 1.25);`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
      {
        vec3 dpx = dFdx(-vViewPosition); vec3 dpy = dFdy(-vViewPosition);
        float bx = dFdx(sN); float by = dFdy(sN);
        vec3 r1 = cross(dpy, normal); vec3 r2 = cross(normal, dpx);
        float det = dot(dpx, r1);
        normal = normalize(abs(det) * normal - 0.0011 * sign(det) * (bx * r1 + by * r2));
        gHairT = normalize(vFlow - dot(vFlow, normal) * normal + 1e-5);
        gHairShift = sN * 0.12;
        gHairTint = mix(vec3(1.0), normalize(diffuseColor.rgb + 1e-3) * 1.7, 0.35);
      }`)},s.customProgramCacheKey=()=>"hair-v5",i.hair=s;let r=new pt({vertexColors:!0,map:Tv(),alphaTest:.3,alphaToCoverage:!0,side:It,roughness:.62,specularIntensity:.15});r.onBeforeCompile=o=>{o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 flow;
varying vec3 vFlow;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFlow = normalize(normalMatrix * flow.xyz + 1e-5);`),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vFlow;
vec3 gHairT; float gHairShift; vec3 gHairTint;`).replace("#include <lights_physical_pars_fragment>",mt.lights_physical_pars_fragment.replace("reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;",`reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
        {
          vec3 Hh = normalize(directLight.direction + geometryViewDir);
          float th = dot(gHairT, Hh) + gHairShift;
          float s1 = pow(sqrt(max(0.0, 1.0 - th * th)), 120.0);
          float t2 = th - 0.18;
          float s2 = pow(sqrt(max(0.0, 1.0 - t2 * t2)), 26.0);
          float vis = saturate(dot(geometryNormal, directLight.direction) * 0.6 + 0.4);
          reflectedLight.directSpecular += directLight.color * vis * (s1 * 0.09 * gHairTint + s2 * 0.45 * material.diffuseColor);
        }`)).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
        gHairT = normalize(vFlow - dot(vFlow, normal) * normal + 1e-5);
        gHairShift = (vMapUv.x - 0.5) * 0.06;
        gHairTint = mix(vec3(1.0), normalize(diffuseColor.rgb + 1e-3) * 1.7, 0.35);`)},r.customProgramCacheKey=()=>"haircards-v1",i.haircard=r;{let o=document.createElement("canvas");o.width=256,o.height=64;let a=o.getContext("2d");a.clearRect(0,0,256,64);for(let c=0;c<46;c++){let h=(c+.5)*5.565217391304348+Math.sin(c*7.3)*1.5,d=40+22*Math.abs(Math.sin(c*3.1));a.strokeStyle="rgba(255,255,255,0.95)",a.lineWidth=1.6,a.beginPath(),a.moveTo(h,0),a.quadraticCurveTo(h+3,d*.5,h+6*Math.sin(c),d),a.stroke()}let l=new en(o);l.wrapS=jt,i.lash=new Be({vertexColors:!0,alphaMap:l,alphaTest:.35,alphaToCoverage:!0,transparent:!1,side:It,roughness:.6})}if(i.leather=new pt({vertexColors:!0,roughness:.4,clearcoat:.6,clearcoatRoughness:.35}),i.metal=new Be({vertexColors:!0,metalness:1,roughness:.28}),i.plastic=new pt({vertexColors:!0,roughness:.32,clearcoat:.8,clearcoatRoughness:.2}),i.teeth=new pt({vertexColors:!0,roughness:.38,clearcoat:.25,clearcoatRoughness:.3,specularIntensity:.5}),i.paper=new Be({vertexColors:!0,roughness:.9}),typeof location<"u"&&new URLSearchParams(location.search).get("castdbg")==="plain")for(let o of["skin","hair","coat","cloth"])i[o]=new Be({vertexColors:!0,roughness:.6});return i.glass=new pt({color:16777215,transparent:!0,opacity:.16,roughness:.05,clearcoat:1,clearcoatRoughness:.05,depthWrite:!1,envMapIntensity:2}),i}var Ds=null;function Tv(){if(Ds)return Ds;let i=512,e=512,t=4,n=i/t,s=document.createElement("canvas");s.width=i,s.height=e;let r=s.getContext("2d");r.clearRect(0,0,i,e);let o=(a,l)=>{let c=Math.sin(a*127.1+l*311.7)*43758.5453;return c-Math.floor(c)};for(let a=0;a<t;a++){let l=a*n,c=r.createLinearGradient(0,e,0,0);c.addColorStop(0,"rgba(150,150,150,0.55)"),c.addColorStop(.45,"rgba(150,150,150,0.2)"),c.addColorStop(1,"rgba(150,150,150,0)"),r.fillStyle=c,r.fillRect(l+n*.3,0,n*.4,e);let h=26;for(let d=0;d<h;d++){let u=a*100+d,f=l+n*(.08+.84*((d+o(u,1)*.8)/h)),m=e*(.62+.38*o(u,2)),x=Math.round(110+145*o(u,3)**.7),p=.7+.3*o(u,4),g=2.2+2*o(u,5),y=16;for(let M=0;M<y;M++){let _=M/y,b=(M+1)/y,S=e-_*m,A=e-b*m,v=f+Math.sin(_*6+u)*2.5*_,T=f+Math.sin(b*6+u)*2.5*b;r.strokeStyle=`rgba(${x},${x},${x},${p*(1-b*.35)})`,r.lineWidth=Math.max(.6,g*(1-b*.8)),r.beginPath(),r.moveTo(v,S),r.lineTo(T,A),r.stroke()}}}return Ds=new en(s),Ds.colorSpace=Ut,Ds.anisotropy=8,Ds.generateMipmaps=!0,Ds}function wv(i){let e=document.createElement("canvas");e.width=512,e.height=256;let t=e.getContext("2d"),n=new we(i),s=(c,h=1)=>`rgba(${Math.min(255,Math.round(n.r*255*c))},${Math.min(255,Math.round(n.g*255*c))},${Math.min(255,Math.round(n.b*255*c))},${h})`;t.fillStyle="#ddd4ca",t.fillRect(0,0,512,256);let r=t.createRadialGradient(128,128,60,128,128,260);r.addColorStop(0,"rgba(255,255,255,0)"),r.addColorStop(1,"rgba(205,120,120,0.55)"),t.fillStyle=r,t.fillRect(0,0,512,256),t.strokeStyle="rgba(190,70,70,0.25)",t.lineWidth=1;for(let c=0;c<26;c++){let h=c/26*Math.PI*2,d=128+Math.cos(h)*70,u=128+Math.sin(h)*70;t.beginPath(),t.moveTo(d,u);for(let f=0;f<6;f++)d+=Math.cos(h+Math.sin(c*7+f)*.6)*14,u+=Math.sin(h+Math.cos(c*3+f)*.6)*14,t.lineTo(d,u);t.stroke()}let o=40,a=t.createRadialGradient(128,128,8,128,128,o);a.addColorStop(0,s(.55)),a.addColorStop(.35,s(1.5)),a.addColorStop(.8,s(1)),a.addColorStop(1,s(.45)),t.beginPath(),t.arc(128,128,o,0,Math.PI*2),t.fillStyle=a,t.fill();for(let c=0;c<140;c++){let h=c/140*Math.PI*2+Math.sin(c*12.9)*.02;t.strokeStyle=c%2?s(1.9,.35):s(.4,.35),t.lineWidth=1+c%3*.4,t.beginPath(),t.moveTo(128+Math.cos(h)*14,128+Math.sin(h)*14),t.lineTo(128+Math.cos(h)*(o-4),128+Math.sin(h)*(o-4)),t.stroke()}t.lineWidth=5,t.strokeStyle=s(.25,.9),t.beginPath(),t.arc(128,128,o-1,0,Math.PI*2),t.stroke(),t.beginPath(),t.arc(128,128,14,0,Math.PI*2),t.fillStyle="#060404",t.fill();let l=new en(e);return l.colorSpace=Ut,l.anisotropy=4,l}function Av(i,e){let t=new it(i,48,32),n=t.attributes.position;for(let r=0;r<n.count;r++){let o=n.getZ(r)/i;if(o>.86){let a=(o-.86)/.14;n.setZ(r,n.getZ(r)+i*.09*Math.sin(a*Math.PI*.5))}}t.computeVertexNormals();let s=new pt({map:wv(e),roughness:.35,clearcoat:1,clearcoatRoughness:.02,specularIntensity:.8});return new be(t,s)}function Rv(i,e){let t=new Ze,n=i.bones.map(f=>{let m=new ur;return m.name=f.name,m});i.bones.forEach((f,m)=>{let x=f.parent>=0?i.bones[f.parent]:null;n[m].position.set(f.pos[0]-(x?x.pos[0]:0),f.pos[1]-(x?x.pos[1]:0),f.pos[2]-(x?x.pos[2]:0)),f.parent>=0?n[f.parent].add(n[m]):t.add(n[m])}),t.updateMatrixWorld(!0);let s=new ho(n),r=Object.fromEntries(n.map(f=>[f.name,f])),o=[],a=[],l=[],c=(f,m)=>{let x=e[m.mat]||e.cloth,p=new co(f,x);return p.bind(s,new et),p.name=m.name,p.castShadow=!0,p.receiveShadow=!0,p.frustumCulled=!1,t.add(p),o.push(p),p};for(let f of i.parts){let m=c(f.geometry,f);if(f.geometryLo){a.push(m);let x=c(f.geometryLo,f);x.visible=!1,l.push(x)}}for(let f of i.meta.lenses||[]){let m=new tn(f.r,40),x=m.attributes.position;for(let g=0;g<x.count;g++){let y=(x.getX(g)**2+x.getY(g)**2)/(f.r*f.r);x.setZ(g,f.r*.12*(1-y))}m.computeVertexNormals();let p=new be(m,e.glass);p.name="lens",p.position.set(...f.c),p.quaternion.setFromUnitVectors(new N(0,0,1),new N(...f.n).normalize()),p.renderOrder=2,t.add(p),t.updateMatrixWorld(!0),(r.head||t).attach(p)}let h=0,d=f=>{if(!(f===h||!l.length)){h=f;for(let m of a)m.visible=f===0;for(let m of l)m.visible=f===1}},u=(f,m)=>{for(let x of o){let p=x.morphTargetDictionary?x.morphTargetDictionary[f]:void 0;p!==void 0&&(x.morphTargetInfluences[p]=m)}};return{root:t,bones:r,skeleton:s,meshes:o,meta:i.meta,setLod:d,setExpression:u}}var fu=(i,e)=>{let t=Math.sin(i*127.1+e*311.7)*43758.5453;return t-Math.floor(t)},hs=(i,e,t)=>Math.max(e,Math.min(t,i));function Cv(){let i=new Ze,e=document.createElement("canvas");e.width=128,e.height=180;let t=e.getContext("2d");t.fillStyle="#fbfaf5",t.fillRect(0,0,128,180),t.strokeStyle="#2f6f9a",t.lineWidth=3;for(let a=0;a<6;a++)t.strokeRect(10,20+a*26,14,14),t.fillStyle="#9aa7b5",t.fillRect(32,24+a*26,60+fu(a,91)*30,6),a%2===0&&(t.beginPath(),t.moveTo(12,27+a*26),t.lineTo(17,32+a*26),t.lineTo(26,18+a*26),t.stroke());let n=new en(e);n.colorSpace=Ut;let s=new be(new ct(.17,.24,.008),new Be({color:9067058,roughness:.55})),r=new be(new wt(.15,.21),new Be({map:n,roughness:.9}));r.position.set(0,-.008,.0045);let o=new be(new ct(.07,.022,.014),new Be({color:12106948,metalness:1,roughness:.3}));return o.position.set(0,.11,.006),i.add(s,r,o),i}var Pv={sculpt:{armL:"armL",foreL:"foreL",handL:"handL",armR:"armR",foreR:"foreR",handR:"handR",chest:"chest",neck:"neck",head:"head",hair:"hair",fingL:"fingL",fingR:"fingR",thumbL:"thumbL",thumbR:"thumbR"},mh:{armL:"upperarm_l",foreL:"lowerarm_l",handL:"hand_l",armR:"upperarm_r",foreR:"lowerarm_r",handR:"hand_r",chest:"spine_03",neck:"neck_01",head:"head"}};function bc(i,e,{seed:t=0,baseOpen:n=.1,prop:s=null}={}){let r=Rv(i,e),o=new Ze;o.add(r.root);let a=Pv[i.meta.rig==="mh"?"mh":"sculpt"],l={};for(let[p,g]of Object.entries(a))l[p]=r.bones[g]||null;let c=i.meta.rig==="mh",h={L:[],R:[]};if(c)for(let[p,g]of[["L","l"],["R","r"]])for(let y of["index","middle","ring","pinky"])for(let M of["01","02","03"]){let _=r.bones[`${y}_${M}_${g}`];_&&h[p].push(_)}r.root.updateMatrixWorld(!0);let d=i.meta.eyes.map(p=>{let g=Av(p.r*(c?.97:1),i.meta.iris);return g.position.set(...p.c),g.castShadow=!1,r.root.add(g),r.root.updateMatrixWorld(!0),l.head.attach(g),{eye:g,sx:p.c[0]<0?-1:1}}),u={};for(let[p,g]of[["L",1],["R",-1]]){let y=l[`fore${p}`].position,M=l[`hand${p}`].position,_=Math.atan2(g*y.x,-y.y);u[p]={sx:g,outA:_,foreOut:Math.atan2(g*M.x,-M.y)-_,foreFwd:Math.atan2(M.z,Math.hypot(M.x,M.y))-Math.atan2(y.z,Math.hypot(y.x,y.y))}}if(s==="clipboard"){let p=Cv();p.position.set(c?-.03:.02,-.12,.05),p.rotation.set(.2,-1.2,.1),l.handR.add(p)}let f=p=>{let g=2.6+fu(t,1)*1.8,y=(p+fu(t,2)*g)%g/g,M=.16/g;return y<M?Math.sin(y/M*Math.PI):0},m=new N;function x(p){let{t:g=0,y=0,turn:M=0,L:_=[0,0,0,.3],R:b=[0,0,0,.3],headTurn:S=0,headTilt:A=0,headRoll:v=0,frizz:T=1,smile:R=.6,open:P=.08,brow:U=0,browAngle:O=0,lid:F=0,squint:V=0,look:k=null,squash:te=1,lean:L=0,wink:G=0}=p;r.root.position.y=y,r.root.rotation.x=L;let X=1/Math.sqrt(te);r.root.scale.set(X,te,X),o.rotation.y=M;for(let[de,[Fe,ze,Xe,ae=.3]]of[["L",_],["R",b]]){let le=u[de];l[`arm${de}`].rotation.set(-Fe,0,le.sx*(ze-le.outA)),l[`fore${de}`].rotation.set(le.foreFwd-Xe,0,-le.sx*le.foreOut),l[`fing${de}`]&&l[`fing${de}`].rotation.set(0,0,-le.sx*(ae-.3)*1.3),l[`thumb${de}`]&&l[`thumb${de}`].rotation.set(0,0,-le.sx*(ae-.3)*.6);for(let Te of h[de])Te.rotation.set(-(ae-.3)*.5,0,0)}l.chest.rotation.x=.012*Math.sin(g*2.2+t),l.neck.rotation.set(A*.4,S*.4,v*.4),l.head.rotation.set(A*.6-.012*Math.sin(g*2.2+t),S*.6,v*.6),l.hair&&l.hair.scale.setScalar(1+.022*T*Math.sin(g*9+t)+(T-1)*.025);let j=c?.85:1;r.setExpression("smile",hs((R-.6)/.4,c?0:-1.4,1)*j),c&&r.setExpression("frown",hs((.6-R)/.8,0,1)),r.setExpression("open",hs((P-n)*(i.meta.real?.9:1.25),0,1.1)),r.setExpression("brow",hs(U,c?0:-.6,1.2)*j),r.setExpression("browAngle",hs(c?Math.max(0,O):O,-1,1)*j),r.setExpression("squint",hs(V+Math.max(0,R-.8)*.8,0,1)*(c?.6:1));let re=Math.max(F,f(g));if(r.setExpression("blinkA",Math.max(re,G)),r.setExpression("blinkB",re),k){o.updateMatrixWorld(!0),m.copy(k),l.head.worldToLocal(m);for(let de of d){let Fe=m.x-de.eye.position.x,ze=m.y-de.eye.position.y,Xe=m.z-de.eye.position.z,ae=hs(Math.atan2(Fe,Xe),-.5,.5),le=hs(Math.atan2(ze,Math.hypot(Fe,Xe)),-.35,.35);de.eye.rotation.set(-le,ae,0)}}}return{root:o,pose:x,arms:{L:{hand:l.handL},R:{hand:l.handR}},head:l.head,setLod:r.setLod,character:r}}var Nd={grandpa:"assets/intro/grandpa.bin.gz?v=2d801e99",wild:"assets/intro/wild.bin.gz?v=fe711791",curly:"assets/intro/curly.bin.gz?v=31890f76"};var Gt=Math.PI*2;function Gn(i,e,t,{srgb:n=!0,repeat:s=null}={}){let r=document.createElement("canvas");r.width=i,r.height=e,t(r.getContext("2d"),i,e);let o=new en(r);return n&&(o.colorSpace=Ut),o.anisotropy=8,s&&(o.wrapS=o.wrapT=jt,o.repeat.set(s[0],s[1])),o}var Tc=(i,e,t,n=.03,s=2)=>new as(i,e,t,s,n),wc=(i,e=28)=>new li(i.map(([t,n])=>new me(t,n)),e);function Fd(i){let n=s=>(r,o,a)=>{if(s==="map"){r.fillStyle="#56686a",r.fillRect(0,0,o,a);for(let h=0;h<2;h++)r.fillStyle=`rgba(${K(h,1)>.5?"255,255,240":"20,30,30"},${.03+K(h,2)*.04})`,r.fillRect(h*o/2,0,o/2,a);for(let h=0;h<1400;h++){let d=K(h,3);r.fillStyle=`rgba(${d>.5?"235,240,230":"10,18,20"},${.012+K(h,4)*.025})`,r.beginPath(),r.ellipse(K(h,1)*o,K(h,2)*a,4+K(h,5)*60,3+K(h,6)*40,K(h,7)*3,0,Gt),r.fill()}for(let h=0;h<90;h++){let d=K(h,8)*o,u=K(h,9)*a*.4,f=60+K(h,10)*380,m=r.createLinearGradient(0,u,0,u+f);m.addColorStop(0,`rgba(30,24,16,${.08+K(h,11)*.12})`),m.addColorStop(1,"rgba(30,24,16,0)"),r.fillStyle=m,r.fillRect(d,u,1.5+K(h,12)*5,f)}for(let h=0;h<16;h++){let d=K(h,13)>.5?K(h,14)>.5?18:o-18:o/2+(K(h,15)>.5?18:-18),u=K(h,16)*a,f=r.createRadialGradient(d,u,1,d,u,10+K(h,17)*22);f.addColorStop(0,"rgba(120,58,24,0.55)"),f.addColorStop(1,"rgba(120,58,24,0)"),r.fillStyle=f,r.fillRect(d-40,u-40,80,120)}r.lineWidth=1;for(let h=0;h<70;h++){r.strokeStyle=`rgba(200,210,205,${.08+K(h,18)*.15})`;let d=K(h,19)*o,u=a*(.45+K(h,20)*.55);r.beginPath(),r.moveTo(d,u),r.lineTo(d+(K(h,21)-.5)*70,u+(K(h,22)-.5)*18),r.stroke()}let c=r.createLinearGradient(0,a*.7,0,a);c.addColorStop(0,"rgba(10,10,8,0)"),c.addColorStop(1,"rgba(10,10,8,0.4)"),r.fillStyle=c,r.fillRect(0,0,o,a)}else{if(r.fillStyle=s==="bump"?"#808080":"#9a9a9a",r.fillRect(0,0,o,a),s==="rough")for(let c=0;c<900;c++)r.fillStyle=`rgba(${K(c,23)>.5?"255,255,255":"0,0,0"},0.08)`,r.fillRect(K(c,24)*o,K(c,25)*a,3+K(c,26)*50,3+K(c,27)*50);if(s==="bump")for(let c=0;c<2e3;c++)r.fillStyle=`rgba(${K(c,28)>.5?"255,255,255":"0,0,0"},0.05)`,r.fillRect(K(c,29)*o,K(c,30)*a,2,2)}let l=(c,h,d,u)=>{r.fillStyle=s==="map"?"rgba(12,18,20,0.85)":s==="bump"?"#2a2a2a":"#606060",r.fillRect(c,h,d,u)};l(0,0,o,6),l(0,0,6,a),l(o/2-3,0,6,a),s==="map"&&(r.fillStyle="rgba(230,240,235,0.12)",r.fillRect(6,6,o,2),r.fillRect(6,6,2,a),r.fillRect(o/2+3,0,2,a));for(let c=22;c<a;c+=128)for(let h of[18,o/2-18,o/2+18,o-18])s==="map"?(r.fillStyle="#3e4c4f",r.beginPath(),r.arc(h,c,7,0,Gt),r.fill(),r.fillStyle="rgba(255,255,255,0.3)",r.beginPath(),r.arc(h-2,c-2,2.5,0,Gt),r.fill()):(r.fillStyle=s==="bump"?"#e0e0e0":"#707070",r.beginPath(),r.arc(h,c,7,0,Gt),r.fill())};return{map:Gn(1024,1024,n("map"),{repeat:i}),bump:Gn(1024,1024,n("bump"),{srgb:!1,repeat:i}),rough:Gn(1024,1024,n("rough"),{srgb:!1,repeat:i})}}function Iv(i){let e=t=>(n,s,r)=>{let a=s/4;for(let l=0;l<4;l++)for(let c=0;c<4;c++){let h=K(l*7+c,11);if(t){let d=70+Math.floor(h*40);n.fillStyle=`rgb(${d},${d},${d})`}else{let d=38+h*7;n.fillStyle=(l+c)%2?`hsl(35, 6%, ${d}%)`:`hsl(30, 5%, ${d-4}%)`}if(n.fillRect(l*a,c*a,a,a),!t)for(let d=0;d<220;d++)n.fillStyle=`rgba(${K(d,l+c*9)>.5?"255,255,250":"20,18,16"},0.12)`,n.fillRect(l*a+K(d,31+l)*a,c*a+K(d,41+c)*a,2,2)}for(let l=0;l<220;l++){n.strokeStyle=t?`rgba(255,255,255,${.1+K(l,13)*.15})`:`rgba(15,12,10,${.04+K(l,13)*.08})`,n.lineWidth=1+K(l,14)*3;let c=K(l,15)*s,h=K(l,16)*r;n.beginPath(),n.moveTo(c,h),n.quadraticCurveTo(c+(K(l,17)-.5)*60,h+(K(l,18)-.5)*20,c+(K(l,19)-.5)*90,h+(K(l,20)-.5)*30),n.stroke()}if(!t)for(let l=0;l<14;l++){let c=K(l,21)*s,h=K(l,22)*r,d=20+K(l,23)*70,u=n.createRadialGradient(c,h,0,c,h,d);u.addColorStop(0,"rgba(25,20,15,0.18)"),u.addColorStop(1,"rgba(25,20,15,0)"),n.fillStyle=u,n.fillRect(c-d,h-d,d*2,d*2)}n.fillStyle=t?"#d8d8d8":"#1a1815";for(let l=0;l<=4;l++)n.fillRect(l*a-2,0,4,r),n.fillRect(0,l*a-2,s,4)};return{map:Gn(1024,1024,e(!1),{repeat:i}),rough:Gn(1024,1024,e(!0),{srgb:!1,repeat:i})}}function Lv(){return Gn(1024,512,(i,e,t)=>{let n=i.createLinearGradient(0,0,0,t);n.addColorStop(0,"#070b24"),n.addColorStop(.55,"#1d1550"),n.addColorStop(.8,"#5b2a6e"),n.addColorStop(1,"#ff8a5c"),i.fillStyle=n,i.fillRect(0,0,e,t);for(let r=0;r<220;r++)i.fillStyle=`rgba(255,255,255,${.3+K(r,1)*.7})`,i.fillRect(K(r,2)*e,K(r,3)*t*.55,1.5,1.5);let s=i.createRadialGradient(760,120,10,760,120,120);s.addColorStop(0,"rgba(255,248,220,1)"),s.addColorStop(.3,"rgba(255,240,200,0.9)"),s.addColorStop(.31,"rgba(255,220,180,0.25)"),s.addColorStop(1,"rgba(255,200,160,0)"),i.fillStyle=s,i.beginPath(),i.arc(760,120,120,0,Gt),i.fill();for(let r=0;r<3;r++){let o=-20;for(;o<e;){let a=30+K(Math.floor(o),r+20)*70,l=(.18+K(Math.floor(o),r+30)*.32)*t*(1-r*.18),c=t-l-r*18;i.fillStyle=["#0c1030","#0a0d26","#06081a"][r],i.fillRect(o,c,a,t-c),K(Math.floor(o),r+40)>.7&&(i.beginPath(),i.moveTo(o+a/2-3,c),i.lineTo(o+a/2,c-40),i.lineTo(o+a/2+3,c),i.fill(),i.fillStyle="#ff3d5a",i.fillRect(o+a/2-1.5,c-42,3,3));for(let h=c+8;h<t-6;h+=11)for(let d=o+5;d<o+a-6;d+=9){let u=K(Math.floor(d*3+h),r+50);u>.62&&(i.fillStyle=u>.93?"#7df3ff":u>.85?"#ff9ef0":"#ffd48a",i.globalAlpha=.5+r*.15,i.fillRect(d,h,4,5),i.globalAlpha=1)}o+=a+4}}i.strokeStyle="rgba(255,90,200,0.8)",i.lineWidth=2,i.beginPath(),i.moveTo(80,300),i.bezierCurveTo(300,260,500,330,980,270),i.stroke(),i.strokeStyle="rgba(120,240,255,0.7)",i.beginPath(),i.moveTo(0,340),i.bezierCurveTo(250,300,600,360,1024,320),i.stroke()})}function Dv(){return Gn(1024,512,(i,e,t)=>{i.fillStyle="#1f3a33",i.fillRect(0,0,e,t);for(let r=0;r<40;r++)i.fillStyle=`rgba(255,255,255,${.02+K(r,1)*.04})`,i.beginPath(),i.ellipse(K(r,2)*e,K(r,3)*t,40+K(r,4)*120,15+K(r,5)*40,K(r,6)*3,0,Gt),i.fill();i.fillStyle="rgba(245,245,235,0.88)",i.font='italic 600 46px "Bricolage Grotesque", sans-serif',i.fillText("R\xE9union = \u03A3 (blabla)\xB2",40,80),i.font='italic 600 40px "Bricolage Grotesque", sans-serif',i.fillText("Synergie \u2248 m\xB7c\xB2",60,160),i.fillText("Quick win \u2192 quick lose ?",520,130),i.fillText("ROI = \xBF?",640,230),i.font='italic 600 34px "Bricolage Grotesque", sans-serif',i.fillText("On boucle... encore",70,400),i.fillText("ASAP = hier",600,420),i.strokeStyle="rgba(245,245,235,0.8)",i.lineWidth=3;let n=120,s=210;for(let r=0;r<=3;r++)i.beginPath(),i.moveTo(n+r*45,s),i.lineTo(n+r*45,s+135),i.stroke(),i.beginPath(),i.moveTo(n,s+r*45),i.lineTo(n+135,s+r*45),i.stroke();i.beginPath(),i.arc(n+22,s+22,14,0,Gt),i.stroke(),i.beginPath(),i.arc(n+67,s+67,14,0,Gt),i.stroke(),i.beginPath(),i.moveTo(n+100,s+100),i.lineTo(n+125,s+125),i.moveTo(n+125,s+100),i.lineTo(n+100,s+125),i.stroke(),i.beginPath(),i.moveTo(300,260),i.quadraticCurveTo(400,200,480,270),i.stroke(),i.beginPath(),i.moveTo(470,255),i.lineTo(482,272),i.lineTo(462,276),i.stroke(),i.beginPath(),i.arc(880,330,40,0,Gt),i.stroke(),i.beginPath(),i.arc(866,320,5,0,Gt),i.arc(894,320,5,0,Gt),i.fill(),i.beginPath(),i.arc(880,340,18,.2,Math.PI-.2),i.stroke()})}function Uv(i){return Gn(256,384,(e,t,n)=>{if(i===0){let s=e.createLinearGradient(0,0,0,n);s.addColorStop(0,"#ffcf4a"),s.addColorStop(1,"#ff7a1a"),e.fillStyle=s,e.fillRect(0,0,t,n),e.fillStyle="#1b1b2e",e.font='800 30px "Bricolage Grotesque", sans-serif',e.textAlign="center",e.fillText("R\xC9UNIONITE",t/2,60),e.fillText("AIGU\xCB",t/2,95),e.font='600 18px "Bricolage Grotesque", sans-serif',["B\xE2illements","Regard vitreux","Envie de caf\xE9","Mots creux"].forEach((r,o)=>e.fillText(`\u2022 ${r}`,t/2,160+o*34)),e.beginPath(),e.arc(t/2,320,30,0,Gt),e.fill(),e.fillStyle="#ffcf4a",e.fillRect(t/2-4,300,8,26),e.fillRect(t/2-4,332,8,8)}else e.fillStyle="#16324a",e.fillRect(0,0,t,n),e.fillStyle="#7df3ff",e.font='800 28px "Bricolage Grotesque", sans-serif',e.textAlign="center",e.fillText("COUPEZ",t/2,70),e.fillText("VOS MICROS",t/2,105),e.strokeStyle="#ff3df2",e.lineWidth=10,e.beginPath(),e.roundRect(t/2-28,150,56,100,28),e.stroke(),e.beginPath(),e.moveTo(t/2-60,290),e.lineTo(t/2+60,140),e.stroke(),e.fillStyle="#e7f0ee",e.font='600 18px "Bricolage Grotesque", sans-serif',e.fillText("(sauf pour dire \xAB Bingo \xBB)",t/2,340)})}function Nv(){return Gn(256,256,i=>{i.fillStyle="#f6f1e4",i.beginPath(),i.arc(128,128,126,0,Gt),i.fill(),i.fillStyle="#1b2433",i.textAlign="center",i.textBaseline="middle",i.font='800 30px "Bricolage Grotesque", sans-serif';for(let e=1;e<=12;e++){let t=e/12*Gt-Math.PI/2;i.fillText(String(e),128+Math.cos(t)*96,128+Math.sin(t)*96)}for(let e=0;e<60;e++){let t=e/60*Gt;i.fillRect(128+Math.cos(t)*116-1,128+Math.sin(t)*116-1,e%5?2:4,e%5?2:4)}i.font='700 16px "Bricolage Grotesque", sans-serif',i.fillStyle="#e0446a",i.fillText("LUNDI",128,168)})}function Fv(){return Gn(256,256,(i,e,t)=>{i.fillStyle="#9a6a3a",i.fillRect(0,0,e,t);for(let n=0;n<4;n++)i.fillStyle=n%2?"#8a5c30":"#a87444",i.fillRect(0,n*64,e,62);for(let n=0;n<60;n++){i.strokeStyle="rgba(60,30,10,0.25)",i.beginPath();let s=K(n,1)*t;i.moveTo(0,s),i.bezierCurveTo(80,s+4,160,s-4,e,s+2),i.stroke()}i.strokeStyle="#5a3a1a",i.lineWidth=14,i.strokeRect(7,7,e-14,t-14),i.beginPath(),i.moveTo(10,10),i.lineTo(e-10,t-10),i.stroke(),i.fillStyle="rgba(30,20,10,0.75)",i.font='800 26px "Bricolage Grotesque", sans-serif',i.textAlign="center",i.fillText("MOTS CREUX",e/2,112),i.font='700 20px "Bricolage Grotesque", sans-serif',i.fillText("FRAGILE",e/2,150)})}function Bv(){return Gn(512,512,(i,e)=>{let t=e/2;for(let n=0;n<48;n++)i.fillStyle=n%2?"#16161a":"#f2c230",i.beginPath(),i.moveTo(t,t),i.arc(t,t,250,n/48*Gt,(n+1)/48*Gt),i.closePath(),i.fill();i.globalCompositeOperation="destination-out",i.beginPath(),i.arc(t,t,212,0,Gt),i.fill(),i.globalCompositeOperation="source-over",i.fillStyle="rgba(0,0,0,0.25)";for(let n=0;n<300;n++)i.fillRect(K(n,1)*e,K(n,2)*e,3,3)})}function Ov(){let i=new Ze,e=new Ze;i.add(e);let t=new pt({color:15856630,roughness:.28,clearcoat:1,clearcoatRoughness:.12}),n=new pt({color:16742938,roughness:.35,clearcoat:.7}),s=new pt({color:527122,roughness:.08,clearcoat:1,metalness:.3}),r=new Be({color:1776930,roughness:.85}),o=new dt({color:xt(4190463,2.4),toneMapped:!1}),a=(x,p,g,y,M,_)=>{let b=new be(p,g);return y&&b.position.copy(y),M&&b.rotation.set(...M),_&&b.scale.copy(_),x.add(b),b},l=a(i,new Ft(.075,.035,12,24),r,I(0,.11,0),[0,Math.PI/2,0]);a(e,new Qe(.15,.19,.12,28),n,I(0,.17,0)),a(e,new it(.22,32,24),t,I(0,.42,0),null,I(1,1.08,.95)),a(e,new Ft(.205,.018,10,40),n,I(0,.36,0),[Math.PI/2,0,0]);let c=a(e,new tn(.035,20),new dt({color:xt(3800968,2),toneMapped:!1}),I(0,.46,.21));a(e,new Qe(.05,.06,.08,14),r,I(0,.67,0));let h=new Ze;h.position.y=.8,e.add(h),a(h,new it(.19,32,24),t,null,null,I(1.15,.82,1)),a(h,new it(.185,32,16,-Math.PI*.42,Math.PI*.84,Math.PI*.22,Math.PI*.56),s,I(0,0,.012),null,I(1.13,.8,1));let d=[-1,1].map(x=>a(h,new it(.032,16,12),o,I(x*.065,.005,.178),null,I(.8,1.15,.3)));a(h,new Qe(.007,.007,.14,6),r,I(0,.2,0));let u=a(h,new it(.026,14,10),new dt({color:xt(16756768,2),toneMapped:!1}),I(0,.28,0)),f=[-1,1].map(x=>{let p=new Ze;p.position.set(x*.21,.5,0),e.add(p),a(p,new it(.045,14,10),n),a(p,new yn(.028,.14,4,10),t,I(0,-.1,0));let g=a(p,new it(.04,14,10),n,I(0,-.2,0));return{sh:p,hand:g,sx:x}}),m=new Ze;return f[1].hand.add(m),m.position.set(.02,-.02,.07),a(m,wc([[0,0],[.045,0],[.048,.1],[.044,.1],[.041,.006],[0,.006]]),new pt({color:14697578,roughness:.3,clearcoat:.8,side:It})),a(m,new tn(.041,20),new Be({color:3809040,roughness:.2}),I(0,.085,0),[-Math.PI/2,0,0]),a(m,new Ft(.025,.007,8,16,Math.PI),new pt({color:14697578,roughness:.3}),I(.05,.05,0),[0,0,-Math.PI/2]),{root:i,body:e,head:h,eyes:d,bulb:u,arms:f,wheel:l,status:c,mug:m}}function Bd(i,e){let t=new Ze;i.add(t);let n=(q,ve,Pe,Le,Ue=t)=>{let H=new be(q,ve);return Pe&&H.position.copy(Pe),Le&&H.rotation.set(...Le),Ue.add(H),H},s=Iv([45,25]),r=new Be({map:s.map,roughnessMap:s.rough,roughness:.75,metalness:0}),o=n(new wt(90,50),r,null,[-Math.PI/2,0,0]);o.receiveShadow=!0,o.userData.noCast=!0;let a=Fd([.5,.5]),l=new Be({map:a.map,bumpMap:a.bump,bumpScale:1.2,roughnessMap:a.rough,roughness:.75,metalness:.2}),c=new Mi;c.moveTo(-8.5,0),c.lineTo(9.5,0),c.lineTo(9.5,7),c.lineTo(-8.5,7),c.closePath();let h=new Ss,d={x:0,y:3,r:1.3};h.absarc(d.x,d.y,d.r,0,Gt,!0),c.holes.push(h);let u=n(new xr(c,48),l,I(0,0,-6.5));u.receiveShadow=!0,u.userData.noCast=!0;let f=Fd([7,3.5]),m=n(new wt(14,7),new Be({map:f.map,bumpMap:f.bump,bumpScale:1.2,roughnessMap:f.rough,roughness:.75,metalness:.2}),I(9.5,3.5,.5),[0,-Math.PI/2,0]);m.receiveShadow=!0,m.userData.noCast=!0;let x=new pt({color:2051410,roughness:.4,clearcoat:.5});n(new ct(18,.32,.06),x,I(.5,.16,-6.46)),n(new ct(.06,.32,14),x,I(9.46,.16,.5));let p=n(new Ft(d.r,.1,16,72),e.brass,I(d.x,d.y,-6.45));p.castShadow=!1;for(let q=0;q<16;q++){let ve=q/16*Gt;n(new it(.035,10,8),e.copper,I(d.x+Math.cos(ve)*d.r,d.y+Math.sin(ve)*d.r,-6.36))}n(new ct(d.r*2,.05,.05),e.metalLight,I(d.x,d.y,-6.5)),n(new ct(.05,d.r*2,.05),e.metalLight,I(d.x,d.y,-6.5));let g=n(new tn(d.r,48),new pt({color:10475775,transparent:!0,opacity:.08,roughness:.05,clearcoat:1,depthWrite:!1}),I(d.x,d.y,-6.52));g.userData.noDepth=!0;let y=new dt({map:Lv(),fog:!1});n(new wt(6.4,3.2),y,I(d.x,d.y-.2,-7.4));let M=n(new Qe(d.r,d.r,.9,48,1,!0),new Be({color:791586,roughness:.7,side:rn}),I(d.x,d.y,-6.95),[Math.PI/2,0,0]);M.userData.noCast=!0;let _=new Be({color:2305082,metalness:.6,roughness:.45});for(let q of[-5.2,-2.6,0,2.6])n(new ct(18.4,.28,.22),_,I(.5,5.95,q));for(let q of[-6,-2,2,6])n(new ct(.18,.2,13),_,I(q,5.72,-1.3));for(let[q,ve,Pe,Le]of[[5.45,-4.2,.12,e.metalLight],[5.5,-3.6,.08,e.copper],[5.35,1.4,.1,e.metalLight]])n(new Qe(Pe,Pe,18,16),Le,I(.5,q,ve),[0,0,Math.PI/2]);let b=n(new wt(22,5.4),new Be({color:1120808,roughness:.8}),I(-19,3.75,0),[Math.PI/2,0,0]);b.userData.noCast=!0;let S=new dt({color:xt(13627391,1.5),toneMapped:!1});for(let q=-28;q<=-10;q+=3)n(new ct(1.4,.03,.5),S,I(q,3.73,0));let A=new Ze;A.position.set(9.42,2.55,-2.4),A.rotation.y=-Math.PI/2,t.add(A),n(new ct(3.8,2,.06),e.wood,null,null,A),n(new wt(3.6,1.8),new Be({map:Dv(),roughness:.95}),I(0,0,.032),null,A),n(new ct(3.6,.06,.12),e.wood,I(0,-1.02,.06),null,A),n(new ct(.18,.05,.07),new Be({color:3816010,roughness:.8}),I(1.2,-.97,.08),null,A);for(let q=0;q<3;q++)n(new Qe(.012,.012,.09,8),new Be({color:[16777215,16766688,14087935][q]}),I(-1.2+q*.14,-.975,.08),[0,0,Math.PI/2],A);for(let[q,ve,Pe]of[[I(9.43,2.45,2.6),-Math.PI/2,0],[I(8.55,2.3,-6.44),0,1]]){let Le=n(new wt(.9,1.35),new Be({map:Uv(Pe),roughness:.7}),q,[0,ve,0]);Le.userData.noCast=!0}let v=n(new tn(.32,3),new Be({color:15909424,roughness:.5}),I(-2.05,2,-6.44),[0,0,Math.PI/2]);v.userData.noCast=!0,n(new wt(.06,.24),new dt({color:1447450}),I(-2.05,2.02,-6.43));let T=new Ze;T.position.set(-5,4.35,-6.42),t.add(T),n(new Qe(.46,.46,.06,48),e.brass,null,[Math.PI/2,0,0],T),n(new tn(.42,48),new Be({map:Nv(),roughness:.6}),I(0,0,.032),null,T);let R=[[.2,.03,1778739],[.32,.02,1778739],[.36,.008,14697578]].map(([q,ve,Pe],Le)=>{let Ue=new Ze;return Ue.position.z=.036+Le*.004,T.add(Ue),n(new ct(ve,q,.006),new Be({color:Pe,roughness:.5}),I(0,q/2-.03,0),null,Ue),Ue}),P=new Be({map:Fv(),roughness:.75});for(let[q,ve,Pe,Le,Ue]of[[-6.6,.4,-2,.8,.1],[-6.5,1.2,-2.05,.8,-.15],[-6.7,.35,-1,.7,.3],[-7.6,.4,-5.6,.8,.2]])n(Tc(Le,Le,Le,.03),P,I(q,ve,Pe),[0,Ue,0]);let U=new Ze;U.position.set(6.3,0,1.4),U.rotation.y=-.4,t.add(U);let O=new Qe(.02,.02,.9,8);for(let[q,ve]of[[-.42,-.25],[.42,-.25],[-.42,.25],[.42,.25]])n(O,e.chrome,I(q,.47,ve),null,U);for(let q of[.2,.92])n(Tc(.95,.04,.6,.015),e.wood,I(0,q,0),null,U);n(Tc(.36,.5,.34,.05),new pt({color:12071482,roughness:.3,clearcoat:.8}),I(-.18,1.19,-.05),null,U),n(Tc(.26,.06,.2,.02),e.chrome,I(-.18,1,.14),null,U),n(new tn(.035,16),new dt({color:xt(3800968,2),toneMapped:!1}),I(-.08,1.3,.121),null,U);for(let q=0;q<3;q++)n(wc([[0,0],[.04,0],[.042,.09],[.038,.09],[.036,.006],[0,.006]]),new pt({color:[15922422,2270899,15909424][q],roughness:.3,clearcoat:.8,side:It}),I(.12+q*.1,.94,.12-q*.05),null,U);let F=new Be({color:3115594,roughness:.55,side:It}),V=new Mi;V.moveTo(0,0),V.bezierCurveTo(.18,.08,.2,.32,0,.42),V.bezierCurveTo(-.2,.32,-.18,.08,0,0);let k=new xr(V,8),te=(q,ve,Pe)=>{let Le=new Ze;Le.position.set(q,0,ve),Le.scale.setScalar(Pe),t.add(Le),n(wc([[0,0],[.18,0],[.24,.4],[.26,.42],[0,.42]]),new pt({color:14252106,roughness:.6}),null,null,Le);for(let Ue=0;Ue<9;Ue++){let H=Ue/9*Gt+K(Ue,1),qe=new Ze;qe.position.y=.4,qe.rotation.set(.5+K(Ue,2)*.5,H,0),Le.add(qe),n(new Qe(.008,.01,.6,5),F,I(0,.3,0),null,qe),n(k,F,I(0,.58,0),[.6,0,0],qe)}};te(-7.8,-5,1.4),te(8.6,-5.6,1.2),te(6.5,-.3,.9);let L=new Ze;L.position.set(-5.45,0,.75),t.add(L),n(new Qe(.2,.2,.06,24),new pt({color:12071482,roughness:.4,clearcoat:.6}),I(0,.62,0),null,L);for(let q=0;q<3;q++){let ve=q/3*Gt;n(new Qe(.015,.02,.62,8),e.chrome,I(Math.cos(ve)*.13,.3,Math.sin(ve)*.13),[Math.sin(ve)*.15,0,-Math.cos(ve)*.15],L)}n(wc([[0,0],[.16,0],[.2,.4],[.21,.4],[.17,0],[0,.005]]),new Be({color:5925498,metalness:.6,roughness:.4,side:It}),I(-1.75,0,2.35));let G=new Be({color:15855590,roughness:.9,flatShading:!0});for(let q=0;q<5;q++)n(new bo(.06,0),G,I(-1.75+(K(q,1)-.5)*.18,.4+K(q,2)*.05,2.35+(K(q,3)-.5)*.18),[K(q,4)*3,K(q,5)*3,0]);for(let[q,ve]of[[9.1,-4.6],[-8.2,-5.9]])n(new yn(.1,.4,6,16),new pt({color:14032678,roughness:.3,clearcoat:1}),I(q,.32,ve)),n(new Qe(.03,.03,.08,10),e.dark,I(q,.63,ve));let X=new Be({color:1447965,roughness:.7});for(let q of[[[1.35,-3.4],[1.5,-4.6],[1.9,-5.8],[2.2,-6.4]],[[-1.35,-3.4],[-1.6,-4.8],[-1.8,-6.4]],[[-1.2,-.6],[-2,.2],[-2.6,.6],[-3.2,.9]],[[1.2,-.6],[2,.1],[2.8,.5],[3.4,.9]]]){let ve=new Ht(q.map(([Pe,Le],Ue)=>I(Pe,.035,Le+Math.sin(Ue*2.1)*.08)));n(new Yn(ve,40,.035,8),X)}let j=new Be({map:Bv(),transparent:!0,roughness:.7,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,depthWrite:!1}),re=n(new wt(3.7,3.7),j,I(0,.004,0),[-Math.PI/2,0,0]);re.userData.noCast=!0,re.userData.noDepth=!0;let de=Gn(4,128,q=>{let ve=q.createLinearGradient(0,0,0,128);ve.addColorStop(0,"rgba(255,255,255,0)"),ve.addColorStop(.15,"rgba(255,255,255,0.9)"),ve.addColorStop(1,"rgba(255,255,255,0.15)"),q.fillStyle=ve,q.fillRect(0,0,4,128)},{srgb:!1}),Fe=[],ze=[];for(let[q,ve,Pe,Le,Ue]of[[-3.2,3.32,1.75,-3.3,.8],[3.6,3.32,1.75,3.6,.7],[-1.7,3.42,-1.4,-2.4,-2.4]]){let H=ve-.02,qe=new be(new Qe(.2,1,H,40,1,!0),new dt({color:xt(16762512,.03),alphaMap:de,transparent:!0,depthWrite:!1,blending:dn,side:It,toneMapped:!1}));qe.position.set((q+Le)/2,H/2,(Pe+Ue)/2);let tt=I(q-Le,H,Pe-Ue).normalize();qe.quaternion.setFromUnitVectors(I(0,1,0),tt),qe.userData.noDepth=!0,t.add(qe),Fe.push(qe),ze.push({top:I(q,ve,Pe),bot:I(Le,0,Ue)})}let Xe=240,ae=new Mt;ae.setAttribute("position",new yt(new Float32Array(Xe*3),3));let le=Gn(32,32,q=>{let ve=q.createRadialGradient(16,16,0,16,16,16);ve.addColorStop(0,"rgba(255,255,255,1)"),ve.addColorStop(1,"rgba(255,255,255,0)"),q.fillStyle=ve,q.fillRect(0,0,32,32)}),Te=new vi({size:.022,map:le,color:xt(16767400,1.6),transparent:!0,depthWrite:!1,blending:dn,toneMapped:!1}),We=new Oi(ae,Te);We.frustumCulled=!1,t.add(We);let Ce=Ov();t.add(Ce.root),Ce.root.traverse(q=>{q.isMesh&&!q.material.isMeshBasicMaterial&&(q.castShadow=!0,q.receiveShadow=!0)});let Ke=[[0,I(-.6,0,3.4)],[6.4,I(-.6,0,3.4)],[9.2,I(-1.75,0,2.6)],[11,I(-1.75,0,2.6)],[13.4,I(2.1,0,2.7)],[16.2,I(2.1,0,2.7)],[$t,I(1.4,0,2.9)],[$t+1.2,I(.9,0,3.1)],[40,I(.9,0,3.1)]],rt=(q,ve)=>{let Pe=0;for(;Pe<Ke.length-2&&q>Ke[Pe+1][0];)Pe++;let[Le,Ue]=Ke[Pe],[H,qe]=Ke[Pe+1];return ve.copy(Ue).lerp(qe,_t(Ri((q-Le)/(H-Le))))};cs(t,{skip:q=>q===Ce.root||R.includes(q)||Fe.includes(q)||q===We});let fe=new N,_e=new N,Se=new we(4190463),Ee=new we(16722493);return{window:d,update(q,ve){let Pe=q>$t?(q-$t)*9:0;R[0].rotation.z=-((9+2/60)/12)*Gt-Pe*.3,R[1].rotation.z=-(2/60)*Gt-q*.02-Pe,R[2].rotation.z=-Math.floor(q)*(Gt/60)-Pe*3,y.color.setScalar(q>$t?ft(1,.45,_t(ht(q,$t,$t+1.5))):1);let Le=ae.attributes.position.array;for(let Q=0;Q<Xe;Q++){let se=ze[Q%ze.length],ye=(K(Q,1)+q*(.01+K(Q,2)*.02))%1,Ie=Math.sqrt(K(Q,3))*ft(.15,1,ye),he=K(Q,4)*Gt+q*.1*(K(Q,5)-.5);fe.copy(se.top).lerp(se.bot,ye*.85),Le[Q*3]=fe.x+Math.cos(he)*Ie,Le[Q*3+1]=fe.y+Math.sin(q*.7+Q)*.03,Le[Q*3+2]=fe.z+Math.sin(he)*Ie}ae.attributes.position.needsUpdate=!0,Fe.forEach((Q,se)=>{let ye=ve.position.distanceTo(Q.position);Q.material.color.copy(xt(16762512,(q>$t&&se<2?.012:.03)*_t(Ri((ye-1.2)/2.5))))}),rt(q,fe),rt(q+.15,_e);let Ue=fe.distanceTo(_e)>.004;Ce.root.position.copy(fe);let H=q>16.4&&q<$t,qe;if(H)qe=(q-16.4)*9;else if(Ue)qe=Math.atan2(_e.x-fe.x,_e.z-fe.z);else{let Q=ve.position;qe=Math.atan2(Q.x-fe.x,Q.z-fe.z)*.6}Ce.root.rotation.y=ft(Ce.root.rotation.y,qe,H?1:.25),Ce.wheel.rotation.x+=Ue?.35:0;let tt=q>$t+.4?Math.exp(-(q-$t-.4)*.25):0,D=tt?Math.abs(Math.sin((q-$t)*6.5))*.22*tt:0;Ce.body.position.y=D+(Ue?Math.abs(Math.sin(q*14))*.012:0),Ce.body.rotation.z=Ue?Math.sin(q*7)*.04:0,Ce.head.rotation.set(H?Math.sin(q*20)*.15:Math.sin(q*1.3)*.05,H?0:Math.sin(q*.9)*.25,H?Math.sin(q*17)*.2:0);let E=q*.37%1<.05?.15:1;Ce.eyes.forEach(Q=>{Q.scale.set(.8,(H?1.5:q>$t?.45:1.15)*E,.3),Q.material.color.copy(H?Ee:Se).multiplyScalar(2.4)}),Ce.bulb.material.color.copy(xt(H?Math.sin(q*16)>0?16722493:4194304:16756768,2)),Ce.arms.forEach((Q,se)=>{let ye=q>$t?2.6+Math.sin((q-$t)*6.5+se)*.3:H?2.2+Math.sin(q*12+se*3)*.6:se===1?1.1:.2+Math.sin(q*2+se)*.1;Q.sh.rotation.set(-ye*(se===1&&!H&&q<$t?1:.2),0,Q.sx*(q>$t||H?ye*.45:.15))});let Y=ht(q,17.6,18.1);Ce.mug.visible=q<18.1,Ce.mug.position.y=-.02-Y*Y*.8}}}var Rc=Math.PI*2,ta=(i,e,t,n=.03,s=2)=>new as(i,e,t,s,n);function us(i,e,t,{srgb:n=!0,repeat:s=null}={}){let r=document.createElement("canvas");r.width=i,r.height=e,t(r.getContext("2d"),i,e);let o=new en(r);return n&&(o.colorSpace=Ut),s&&(o.wrapS=o.wrapT=jt,o.repeat.set(...s)),o.anisotropy=4,o}var Ac=null;function Hv(){return Ac||(Ac=us(128,128,i=>{let e=i.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,255,255,0.55)"),e.addColorStop(.7,"rgba(255,255,255,0.15)"),e.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=e,i.fillRect(0,0,128,128)},{srgb:!1}),Ac)}function zv(){return us(512,300,(i,e,t)=>{i.fillStyle="#04121c",i.fillRect(0,0,e,t),i.strokeStyle="rgba(34,230,255,0.25)",i.lineWidth=1;for(let n=0;n<e;n+=32)i.beginPath(),i.moveTo(n,0),i.lineTo(n,t),i.stroke();for(let n=0;n<t;n+=32)i.beginPath(),i.moveTo(0,n),i.lineTo(e,n),i.stroke();i.font='700 22px "Bricolage Grotesque", sans-serif',i.fillStyle="#7df3ff",i.fillText("NIVEAU DE BLABLA",18,34),i.fillStyle="#ff6ad5",i.fillText("R\xC9UNION EN COURS",300,34),i.strokeStyle="#39ff88",i.lineWidth=4,i.beginPath();for(let n=0;n<=60;n++){let s=20+n*7.5,r=250-n*n*.045-Math.sin(n*.7)*10;n?i.lineTo(s,r):i.moveTo(s,r)}i.stroke();for(let n=0;n<7;n++){let s=30+K(n,3)*90;i.fillStyle=n%2?"#ffb020":"#9b5cff",i.fillRect(330+n*24,270-s,16,s)}i.fillStyle="#e8fbff",i.font='600 18px "Bricolage Grotesque", sans-serif',i.fillText("Creux : 97 %",330,290)})}function Gv(i){return us(128,180,(e,t,n)=>{e.fillStyle="#f3f0e6",e.fillRect(0,0,t,n),e.fillStyle="rgba(40,60,90,0.55)";for(let s=0;s<12;s++)e.fillRect(12,22+s*12,60+K(s,i)*50,3);i%2&&(e.strokeStyle="rgba(224,68,106,0.8)",e.lineWidth=3,e.beginPath(),e.arc(90,140,18,0,Rc),e.stroke())})}function kv(){return us(256,32,(i,e,t)=>{i.fillStyle="#e8b81a",i.fillRect(0,0,e,t),i.fillStyle="#16161a";for(let n=-t;n<e+t;n+=32)i.beginPath(),i.moveTo(n,0),i.lineTo(n+16,0),i.lineTo(n+16-t,t),i.lineTo(n-t,t),i.closePath(),i.fill()},{repeat:[4,1]})}function Od(i,e){return us(128,128,t=>{t.translate(64,64),t.rotate(Math.PI/4),t.fillStyle=e,t.fillRect(-40,-40,80,80),t.strokeStyle="#111",t.lineWidth=5,t.strokeRect(-36,-36,72,72),t.rotate(-Math.PI/4),t.fillStyle="#111",t.font="800 26px sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText(i,0,2)})}function Vv(){return us(128,128,i=>{i.fillStyle="#f4f1e8",i.beginPath(),i.arc(64,64,62,0,Rc),i.fill(),i.strokeStyle="#222",i.lineWidth=3;for(let e=0;e<=10;e++){let t=Math.PI*.75+e/10*Math.PI*1.5;i.beginPath(),i.moveTo(64+Math.cos(t)*50,64+Math.sin(t)*50),i.lineTo(64+Math.cos(t)*58,64+Math.sin(t)*58),i.stroke()}i.strokeStyle="#d6243a",i.lineWidth=8,i.beginPath(),i.arc(64,64,54,Math.PI*1.9,Math.PI*2.25),i.stroke()})}function Hd(i,e){let t=new Ze;i.add(t);let n=(L,G,X,j,re=t)=>{let de=new be(L,G);return X&&de.position.copy(X),j&&de.rotation.set(...j),re.add(de),de},s=(L,G=.35)=>new pt({color:L,roughness:G,clearcoat:.7,clearcoatRoughness:.25}),r=[],o=[],a=(L,G,X,j,re,de)=>{let Fe=new be(new wt(G,X),new dt({map:Hv(),color:xt(j,re),transparent:!0,depthWrite:!1,blending:dn,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-4}));return Fe.position.copy(L),de&&Fe.rotation.set(...de),Fe.userData.noDepth=!0,Fe.userData.noCast=!0,Fe.renderOrder=1,t.add(Fe),o.push(Fe),Fe};a(I(-5,2,-6.42),6.4,4.4,16757866,.55),a(I(5,2,-6.42),6.4,4.4,16757866,.55),a(I(0,3,-6.41),4.6,4.6,6273279,.6),a(I(.5,5,-6.42),20,2.6,16727538,.3),a(I(9.42,2.6,-2.4),5.6,4,12575999,.4,[0,-Math.PI/2,0]),a(I(9.42,2.2,1),3.6,3,2287359,.45,[0,-Math.PI/2,0]),a(I(0,.008,0),7.5,7.5,2287359,.3,[-Math.PI/2,0,0]),a(I(-3.6,.007,2.15),3.8,1.6,3800968,.35,[-Math.PI/2,0,0]),a(I(3.6,.007,2.15),3.8,1.6,2287359,.35,[-Math.PI/2,0,0]),a(I(0,.006,-4.8),5,3.2,8239359,.3,[-Math.PI/2,0,0]);let l=us(4,128,L=>{let G=L.createLinearGradient(0,0,0,128);G.addColorStop(0,"rgba(255,255,255,0.05)"),G.addColorStop(.25,"rgba(255,255,255,0.8)"),G.addColorStop(1,"rgba(255,255,255,0)"),L.fillStyle=G,L.fillRect(0,0,4,128)},{srgb:!1}),c=new be(new Qe(1.15,1.9,5.2,40,1,!0),new dt({color:xt(8239359,.06),alphaMap:l,transparent:!0,depthWrite:!1,blending:dn,side:It,toneMapped:!1})),h=I(0,3,-6.45),d=I(0,0,-2.6);c.position.copy(h).lerp(d,.5),c.quaternion.setFromUnitVectors(I(0,1,0),h.clone().sub(d).normalize()),c.scale.y=h.distanceTo(d)/5.2,c.userData.noDepth=!0,t.add(c);let u=new Be({color:12106948,metalness:1,roughness:.3});[[7.75,2919002,"O\u2082"],[8.08,3104666,"N\u2082"],[8.41,7040888,"CO\u2082"]].forEach(([L,G,X],j)=>{n(new Qe(.13,.13,1.25,28),s(G),I(L,.66,-6.12)),n(new it(.13,28,14,0,Rc,0,Math.PI/2),s(G),I(L,1.285,-6.12)),n(new Qe(.05,.06,.12,16),u,I(L,1.43,-6.12)),n(new Ft(.05,.012,8,20),u,I(L,1.5,-6.12),[Math.PI/2,0,0]),n(new Qe(.135,.135,.05,28),new Be({color:15921386,roughness:.5}),I(L,1,-6.12));let de=n(new wt(.16,.16),new Be({map:Od(X,"#f2c230"),roughness:.6,transparent:!0}),I(L,.72,-6.12+.132));de.userData.noCast=!0,n(new Qe(.135,.12,.04,28),e.dark,I(L,.02,-6.12))});for(let L=0;L<26;L++)n(new Ft(.018,.005,6,12),e.chrome,I(7.6+L*.038,1.12-Math.sin(L/25*Math.PI)*.03,-5.98),[0,L%2?Math.PI/2:0,0]);let f=new Ze;f.position.set(-8.2,0,-6.28),t.add(f),n(ta(.62,2,.34,.03),s(3818840,.45),I(0,1,0),null,f),n(ta(.56,1.1,.02,.01),s(2963014,.5),I(0,1.3,.175),null,f),n(new yn(.012,.1,4,8),e.chrome,I(.22,1.1,.2),null,f);let m=n(new wt(.16,.16),new Be({map:Od("\u26A1","#f2c230"),transparent:!0,roughness:.6}),I(0,.55,.172),null,f);m.userData.noCast=!0;let x=24,p=new xn(new ct(.035,.022,.01),new dt({toneMapped:!1}),x),g=new Pt;for(let L=0;L<x;L++)g.position.set(-.2+L%6*.08,1.75-Math.floor(L/6)*.06,.18),g.updateMatrix(),p.setMatrixAt(L,g.matrix),p.setColorAt(L,xt([3800968,16756768,2287359,16722493][L%4],2));f.add(p),r.push(L=>{for(let G=0;G<x;G++){let X=Math.sin(L*(2+K(G,7)*6)+K(G,8)*9)>-.2;p.setColorAt(G,xt([3800968,16756768,2287359,16722493][G%4],X?2.2:.15))}p.instanceColor.needsUpdate=!0}),n(new ct(.18,4,.12),s(2963014,.5),I(-8.2,4,-6.38));let y=new Ze;y.position.set(9.4,2.55,.85),y.rotation.y=-Math.PI/2,t.add(y),n(ta(1.75,1.05,.08,.03),e.dark,null,null,y);let M=n(new wt(1.62,.94),new dt({map:zv(),toneMapped:!1,color:new we(1.15,1.15,1.15)}),I(0,0,.042),null,y);M.userData.noCast=!0,n(new ct(.06,.5,.06),e.metalLight,I(0,.75,-.05),null,y);let _=(L,G,X,j=0)=>{let re=new Ht(L,!1,"catmullrom",.05);n(new Yn(re,Math.max(24,L.length*12),G,12),X);for(let de=1;de<=j;de++){let Fe=de/(j+1);n(new Ft(G*1.25,G*.35,8,20),e.brass,re.getPointAt(Fe)).quaternion.setFromUnitVectors(I(0,0,1),re.getTangentAt(Fe))}return re};_([I(9.3,.62,-6.4),I(9.3,.62,-1),I(9.3,.62,4.5),I(9.3,.62,7.4)],.07,e.copper,5),_([I(9.3,4.35,-6.4),I(9.3,4.35,.5),I(9.3,4.35,7.4)],.055,e.metalLight,4),_([I(9.3,.62,3.8),I(9.3,1.6,3.8),I(9.3,2.6,3.8),I(9.3,4.35,3.8)],.045,e.copper,2);for(let L of[-1,1])_([I(L*2.25,0,-6.32),I(L*2.25,2,-6.32),I(L*2.25,4,-6.32),I(L*2.25,6,-6.32)],.075,L<0?e.copper:e.metalLight,4),_([I(L*2.06,0,-6.36),I(L*2.06,3,-6.36),I(L*2.06,6,-6.36)],.035,e.brass,2);let b=new Be({map:Vv(),roughness:.4}),S=(L,G)=>{let X=new Ze;X.position.copy(L),X.lookAt(L.clone().add(G)),t.add(X),n(new Qe(.02,.02,.14,10),e.chrome,I(0,0,.07),[Math.PI/2,0,0],X),n(new Ft(.1,.015,8,28),s(13120058),I(0,0,.15),null,X);for(let j=0;j<3;j++)n(new ct(.2,.014,.014),s(13120058),I(0,0,.15),[0,0,j/3*Math.PI],X)},A=(L,G)=>{let X=new Ze;X.position.copy(L),X.lookAt(L.clone().add(G)),t.add(X),n(new Qe(.09,.09,.04,28),e.brass,I(0,0,.02),[Math.PI/2,0,0],X),n(new tn(.078,28),b,I(0,0,.041),null,X);let j=n(new ct(.006,.07,.004),e.dark,I(0,0,.045),null,X);j.geometry.translate(0,.03,0),j.userData.keep=!0,r.push(re=>{j.rotation.z=-.6+Math.sin(re*1.3+L.x)*.25+(K(Math.floor(re*7),L.x)-.5)*.06})};S(I(9.3,.62,-3),I(-1,0,0)),S(I(9.3,.62,5.6),I(-1,0,0)),S(I(-2.25,1.15,-6.32),I(0,0,1)),A(I(2.25,1.55,-6.25),I(0,0,1)),A(I(-2.25,2.4,-6.25),I(0,0,1)),A(I(9.25,1.15,3.8),I(-1,0,0));let v=[1382172,1382172,12071482,15251482,2051466].map(L=>new Be({color:L,roughness:.6}));for(let L=0;L<12;L++){let G=-7.5+K(L,1)*15,X=G+(K(L,2)-.5)*4,j=[-5.2,-2.6,0,2.6][L%4],re=[-2.6,0,2.6,-5.2][L%4];if(Math.abs(re-j)>3)continue;let de=.35+K(L,3)*.6,Fe=[];for(let ze=0;ze<=10;ze++){let Xe=ze/10;Fe.push(I(G+(X-G)*Xe,5.83-Math.sin(Xe*Math.PI)*de,j+(re-j)*Xe))}n(new Yn(new Ht(Fe),32,.018+K(L,4)*.01,6),v[L%v.length])}let T=new Ze;T.position.set(.5,5.25,-4.75),t.add(T),n(new ct(17.5,.02,.36),e.metalLight,null,null,T);for(let L of[-1,1])n(new ct(17.5,.1,.02),e.metalLight,I(0,.05,L*.18),null,T);for(let L=0;L<4;L++)n(new Qe(.03,.03,17.4,8),v[L],I(0,.04+L%2*.03,-.12+L*.08),[0,0,Math.PI/2],T);for(let L=-8;L<=8.5;L+=2.5)n(new Qe(.012,.012,.7,6),e.metalLight,I(L,.35,0),null,T);let R=new Be({map:kv(),roughness:.6,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});for(let L of[-3.6,3.6]){let G=n(new wt(3,.12),R,I(L,.004,2.2),[-Math.PI/2,0,0]);G.userData.noCast=!0}let P=us(128,128,L=>{L.fillStyle="rgba(232,184,26,0.85)",L.beginPath(),L.moveTo(64,8),L.lineTo(120,70),L.lineTo(84,70),L.lineTo(84,120),L.lineTo(44,120),L.lineTo(44,70),L.lineTo(8,70),L.closePath(),L.fill()}),U=new Be({map:P,transparent:!0,roughness:.6,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});for(let[L,G,X]of[[0,3.4,0],[-1.2,4.6,.25],[1.2,4.6,-.25]]){let j=n(new wt(.5,.5),U,I(L,.004,G),[-Math.PI/2,0,X]);j.userData.noCast=!0,j.userData.noDepth=!0}for(let L=0;L<7;L++){let G=n(new wt(.21,.297),new Be({map:Gv(L),roughness:.85}),I([-2.4,-1.9,-4.7,1.9,2.6,4.9,-.9][L],.005+L*6e-4,[2.6,3.3,2.9,2.5,3.6,2.8,4.2][L]),[-Math.PI/2,0,K(L,9)*Rc]);G.userData.noCast=!0}let O=.86,F=new Ze;F.position.set(4.72,O,1.08),t.add(F),n(new li([[0,0],[.042,0],[.045,.1],[.041,.1],[.038,.006],[0,.006]].map(([L,G])=>new me(L,G)),24),s(15909424),null,null,F),n(new Ft(.028,.008,8,16,Math.PI),s(15909424),I(.045,.05,0),[0,0,-Math.PI/2],F),n(new tn(.039,20),new Be({color:2758156,roughness:.2}),I(0,.085,0),[-Math.PI/2,0,0],F);for(let L=0;L<6;L++)n(ta(.21,.006,.297,.002,1),new Be({color:15855590,roughness:.9}),I(2.62+K(L,2)*.02,O+.003+L*.006,1.05),[0,(K(L,3)-.5)*.2,0]);[16769126,16748472,9433343].forEach((L,G)=>n(new wt(.075,.075),new Be({color:L,roughness:.8}),I(3+G*.09,O+.003,1.42+K(G,5)*.05),[-Math.PI/2,0,(K(G,6)-.5)*.5]));let V=new dt({color:xt(15660287,2.4),toneMapped:!1}),k=new Be({color:14277848,roughness:.5,metalness:.3}),te=[];for(let[L,G]of[[-4.2,-3.6],[.2,-3.6],[4.6,-3.6],[-4.2,1.4],[.2,1.4],[4.6,1.4]]){let X=new Ze;X.position.set(L,5.55,G),t.add(X),n(ta(1.5,.08,.36,.02),k,null,null,X);for(let j of[-.09,.09]){let re=n(new Qe(.018,.018,1.36,12),V,I(0,-.055,j),[0,0,Math.PI/2],X);re.userData.noCast=!0}for(let j=-3;j<=3;j++)n(new ct(.01,.02,.34),k,I(j*.2,-.07,0),null,X);for(let j of[-.6,.6])n(new Qe(.006,.006,.35,6),e.metalLight,I(j,.2,0),null,X);te.push(X)}for(let L of te)a(I(L.position.x,5.92,L.position.z),2.6,1.4,15660287,.25,[Math.PI/2,0,0]);return t.traverse(L=>{!L.isMesh||L.material.transparent||L.material.isMeshBasicMaterial||(L.receiveShadow=!0,L.userData.noCast||(L.castShadow=!0))}),cs(t,{skip:L=>L===p||L.userData.keep||o.includes(L)||L===c}),{update(L){for(let G of r)G(L)}}}var na={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new me},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new et},cameraProjectionMatrixInverse:{value:new et},cameraWorldMatrix:{value:new et},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new N(-1,-1,-1)},sceneBoxMax:{value:new N(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);

			#ifdef USE_REVERSED_DEPTH_BUFFER
				if (depth <= 0.0) {
					discard;
					return;
				}
			#else
				if (depth >= 1.0) {
					discard;
					return;
				}
			#endif
			
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},ia={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Cc={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function zd(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=Wv(e),n=t.length,s=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=t[o],l=2*Math.PI*a/n,c=new N(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new _i(s,e,e);return r.wrapS=jt,r.wrapT=jt,r.needsUpdate=!0,r}function Wv(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=o++;r++,s--}return n}var sa={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:du(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new me},cameraProjectionMatrixInverse:{value:new et},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function du(i,e,t){let n=Xv(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let o=n[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<i-1?",":")"}`}return s}function Xv(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,o=Math.pow(s/(i-1),t);n.push(new N(Math.cos(r),Math.sin(r),o))}return n}var Pc=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),h=(3-Math.sqrt(3))/6,d=(l+c)*h,u=l-d,f=c-d,m=e-u,x=t-f,p,g;m>x?(p=1,g=0):(p=0,g=1);let y=m-p+h,M=x-g+h,_=m-1+2*h,b=x-1+2*h,S=l&255,A=c&255,v=this.perm[S+this.perm[A]]%12,T=this.perm[S+p+this.perm[A+g]]%12,R=this.perm[S+1+this.perm[A+1]]%12,P=.5-m*m-x*x;P<0?n=0:(P*=P,n=P*P*this._dot(this.grad3[v],m,x));let U=.5-y*y-M*M;U<0?s=0:(U*=U,s=U*U*this._dot(this.grad3[T],y,M));let O=.5-_*_-b*b;return O<0?r=0:(O*=O,r=O*O*this._dot(this.grad3[R],_,b)),70*(n+s+r)}noise3d(e,t,n){let s,r,o,a,c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),d=Math.floor(t+c),u=Math.floor(n+c),f=1/6,m=(h+d+u)*f,x=h-m,p=d-m,g=u-m,y=e-x,M=t-p,_=n-g,b,S,A,v,T,R;y>=M?M>=_?(b=1,S=0,A=0,v=1,T=1,R=0):y>=_?(b=1,S=0,A=0,v=1,T=0,R=1):(b=0,S=0,A=1,v=1,T=0,R=1):M<_?(b=0,S=0,A=1,v=0,T=1,R=1):y<_?(b=0,S=1,A=0,v=0,T=1,R=1):(b=0,S=1,A=0,v=1,T=1,R=0);let P=y-b+f,U=M-S+f,O=_-A+f,F=y-v+2*f,V=M-T+2*f,k=_-R+2*f,te=y-1+3*f,L=M-1+3*f,G=_-1+3*f,X=h&255,j=d&255,re=u&255,de=this.perm[X+this.perm[j+this.perm[re]]]%12,Fe=this.perm[X+b+this.perm[j+S+this.perm[re+A]]]%12,ze=this.perm[X+v+this.perm[j+T+this.perm[re+R]]]%12,Xe=this.perm[X+1+this.perm[j+1+this.perm[re+1]]]%12,ae=.6-y*y-M*M-_*_;ae<0?s=0:(ae*=ae,s=ae*ae*this._dot3(this.grad3[de],y,M,_));let le=.6-P*P-U*U-O*O;le<0?r=0:(le*=le,r=le*le*this._dot3(this.grad3[Fe],P,U,O));let Te=.6-F*F-V*V-k*k;Te<0?o=0:(Te*=Te,o=Te*Te*this._dot3(this.grad3[ze],F,V,k));let We=.6-te*te-L*L-G*G;return We<0?a=0:(We*=We,a=We*We*this._dot3(this.grad3[Xe],te,L,G)),32*(s+r+o+a)}noise4d(e,t,n,s){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,d,u,f,m,x=(e+t+n+s)*l,p=Math.floor(e+x),g=Math.floor(t+x),y=Math.floor(n+x),M=Math.floor(s+x),_=(p+g+y+M)*c,b=p-_,S=g-_,A=y-_,v=M-_,T=e-b,R=t-S,P=n-A,U=s-v,O=T>R?32:0,F=T>P?16:0,V=R>P?8:0,k=T>U?4:0,te=R>U?2:0,L=P>U?1:0,G=O+F+V+k+te+L,X=o[G][0]>=3?1:0,j=o[G][1]>=3?1:0,re=o[G][2]>=3?1:0,de=o[G][3]>=3?1:0,Fe=o[G][0]>=2?1:0,ze=o[G][1]>=2?1:0,Xe=o[G][2]>=2?1:0,ae=o[G][3]>=2?1:0,le=o[G][0]>=1?1:0,Te=o[G][1]>=1?1:0,We=o[G][2]>=1?1:0,Ce=o[G][3]>=1?1:0,Ke=T-X+c,rt=R-j+c,fe=P-re+c,_e=U-de+c,Se=T-Fe+2*c,Ee=R-ze+2*c,q=P-Xe+2*c,ve=U-ae+2*c,Pe=T-le+3*c,Le=R-Te+3*c,Ue=P-We+3*c,H=U-Ce+3*c,qe=T-1+4*c,tt=R-1+4*c,D=P-1+4*c,E=U-1+4*c,Y=p&255,Q=g&255,se=y&255,ye=M&255,Ie=a[Y+a[Q+a[se+a[ye]]]]%32,he=a[Y+X+a[Q+j+a[se+re+a[ye+de]]]]%32,pe=a[Y+Fe+a[Q+ze+a[se+Xe+a[ye+ae]]]]%32,z=a[Y+le+a[Q+Te+a[se+We+a[ye+Ce]]]]%32,Z=a[Y+1+a[Q+1+a[se+1+a[ye+1]]]]%32,W=.6-T*T-R*R-P*P-U*U;W<0?h=0:(W*=W,h=W*W*this._dot4(r[Ie],T,R,P,U));let ne=.6-Ke*Ke-rt*rt-fe*fe-_e*_e;ne<0?d=0:(ne*=ne,d=ne*ne*this._dot4(r[he],Ke,rt,fe,_e));let oe=.6-Se*Se-Ee*Ee-q*q-ve*ve;oe<0?u=0:(oe*=oe,u=oe*oe*this._dot4(r[pe],Se,Ee,q,ve));let ie=.6-Pe*Pe-Le*Le-Ue*Ue-H*H;ie<0?f=0:(ie*=ie,f=ie*ie*this._dot4(r[z],Pe,Le,Ue,H));let ue=.6-qe*qe-tt*tt-D*D-E*E;return ue<0?m=0:(ue*=ue,m=ue*ue*this._dot4(r[Z],qe,tt,D,E)),27*(h+d+u+f+m)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}};var ra=class i extends In{constructor(e,t,n=512,s=512,r,o,a){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=zd(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Vt(this.width,this.height,{type:Zt,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Bt({defines:Object.assign({},na.defines),uniforms:Pn.clone(na.uniforms),vertexShader:na.vertexShader,fragmentShader:na.fragmentShader,blending:Yt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new To,this.normalMaterial.blending=Yt,this.pdMaterial=new Bt({defines:Object.assign({},sa.defines),uniforms:Pn.clone(sa.uniforms),vertexShader:sa.vertexShader,fragmentShader:sa.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Bt({defines:Object.assign({},ia.defines),uniforms:Pn.clone(ia.uniforms),vertexShader:ia.vertexShader,fragmentShader:ia.fragmentShader,blending:Yt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Bt({uniforms:Pn.clone(Ti.uniforms),vertexShader:Ti.vertexShader,fragmentShader:Ti.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Lo,blendDst:ws,blendEquation:$n,blendSrcAlpha:Io,blendDstAlpha:ws,blendEquationAlpha:$n}),this.blendMaterial=new Bt({uniforms:Pn.clone(Cc.uniforms),vertexShader:Cc.vertexShader,fragmentShader:Cc.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Sl,blendSrc:Lo,blendDst:ws,blendEquation:$n,blendSrcAlpha:Io,blendDstAlpha:ws,blendEquationAlpha:$n}),this._fsQuad=new wi(null),this._originalClearColor=new we,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new yi,this.depthTexture.format=Si,this.depthTexture.type=rs,this.normalRenderTarget=new Vt(this.width,this.height,{minFilter:Kt,magFilter:Kt,type:Zt,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=du(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Yt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Yt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Yt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Yt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Yt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new Pc,n=e*e*4,s=new Uint8Array(n);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let l=o,c=a;s[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new _i(s,e,e,Cn,Mn);return r.wrapS=jt,r.wrapT=jt,r.needsUpdate=!0,r}};ra.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Ic=class extends ra{constructor(...e){super(...e),this.blendMaterial=new Bt({uniforms:{tDiffuse:{value:null},tColor:{value:null},intensity:{value:1}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
        uniform sampler2D tDiffuse;
        uniform sampler2D tColor;
        uniform float intensity;
        varying vec2 vUv;
        void main() {
          vec4 c = texture2D(tColor, vUv);
          float ao = texture2D(tDiffuse, vUv).r;
          float l = max(c.r, max(c.g, c.b));
          float k = intensity * (1.0 - smoothstep(0.9, 2.2, l));
          gl_FragColor = vec4(c.rgb * mix(1.0, ao, k), c.a);
        }`,blending:Yt,depthTest:!1,depthWrite:!1})}setSize(e,t){super.setSize(Math.max(1,e>>1),Math.max(1,t>>1))}render(e,t,n,s,r){this.blendMaterial.uniforms.tColor.value=n.texture,super.render(e,t,n,s,r)}_overrideVisibility(){let e=this._visibilityCache;this.scene.traverse(t=>{t.visible&&(t.isPoints||t.isLine||t.isSprite||t.userData.noDepth)&&(t.visible=!1,e.push(t))})}},Gd={name:"LabDofShader",uniforms:{tDiffuse:{value:null},tDepth:{value:null},cameraNear:{value:.05},cameraFar:{value:120},focus:{value:4},aperture:{value:.5},maxBlur:{value:10},resolution:{value:null},vignette:{value:.35},sharpen:{value:.18},debug:{value:0}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
  `,fragmentShader:`
    #include <packing>
    uniform sampler2D tDiffuse;
    uniform sampler2D tDepth;
    uniform float cameraNear;
    uniform float cameraFar;
    uniform float focus;
    uniform float aperture;
    uniform float maxBlur;
    uniform vec2 resolution;
    uniform float vignette;
    uniform float debug;
    uniform float sharpen;
    varying vec2 vUv;
    float dist(vec2 uv) {
      float d = texture2D(tDepth, uv).x;
      return -perspectiveDepthToViewZ(d, cameraNear, cameraFar);
    }
    float coc(float z) { return clamp(aperture * abs(z - focus) / max(z, 0.001), 0.0, 1.0) * maxBlur; }
    void main() {
      vec4 base = texture2D(tDiffuse, vUv);
      float cd = dist(vUv);
      float cs = coc(cd);
      vec3 acc = base.rgb;
      float tot = 1.0;
      // zone nette (le point et 4 voisins au rayon maximal) : pas de flou \xE0 calculer
      float probe = cs;
      if (maxBlur > 0.5) {
        vec2 o = vec2(maxBlur) / resolution;
        probe = max(probe, max(max(coc(dist(vUv + vec2(o.x, 0.0))), coc(dist(vUv - vec2(o.x, 0.0)))), max(coc(dist(vUv + vec2(0.0, o.y))), coc(dist(vUv - vec2(0.0, o.y))))));
      }
      if (maxBlur > 0.5 && probe > 0.6) {
        for (int i = 0; i < 24; i++) {
          float fi = float(i) + 0.5;
          float r = maxBlur * sqrt(fi / 24.0);
          float a = fi * 2.39996323;
          vec2 tc = vUv + vec2(cos(a), sin(a)) * r / resolution;
          vec3 sc = texture2D(tDiffuse, tc).rgb;
          float sd = dist(tc);
          float ss = coc(sd);
          if (sd > cd) ss = min(ss, cs * 2.0);
          float m = smoothstep(r - 1.0, r + 1.0, ss);
          acc += mix(acc / tot, sc, m);
          tot += 1.0;
        }
      }
      if (debug > 0.5) { gl_FragColor = vec4(cs / max(maxBlur, 0.001), clamp(cd / 12.0, 0.0, 1.0), clamp(focus / 12.0, 0.0, 1.0), 1.0); return; }
      vec3 col = acc / tot;
      // accentuation l\xE9g\xE8re des zones nettes (contours des personnages et des objets)
      vec2 px = 1.0 / resolution;
      vec3 nb = texture2D(tDiffuse, vUv + vec2(px.x, 0.0)).rgb + texture2D(tDiffuse, vUv - vec2(px.x, 0.0)).rgb
              + texture2D(tDiffuse, vUv + vec2(0.0, px.y)).rgb + texture2D(tDiffuse, vUv - vec2(0.0, px.y)).rgb;
      float sk = sharpen * (1.0 - clamp(cs / 2.0, 0.0, 1.0));
      col = max(col + (base.rgb * 4.0 - nb) * sk, vec3(0.0));
      vec2 q = vUv - 0.5;
      float v = 1.0 - vignette * dot(q, q) * 2.2;
      gl_FragColor = vec4(col * v, base.a);
    }
  `};var st=$t,oa=29.2,kd="bingo.introSound",He={cyan:2287359,green:3800968,magenta:16727538,amber:16756768,violet:10181887,pink:14697578,red:16722493,white:16777215,warm:16757866},Lc=["Synergie","ASAP","Roadmap","On boucle","Quick win","KPI","Align\xE9s","Process","Deadline"],qv=[[1.2,5.6,"Quelque part, dans un laboratoire secret\u2026"],[6,10.8,"Des savants fous distillent les mots les plus creux des r\xE9unions"],[11.4,15.8,"Synergie, roadmap, quick win : 400 serveurs analysent chaque phrase"],[16.2,20.4,"Attention : r\xE9action imminente"]];function Ir(i,e,t){let n=document.createElement("canvas");n.width=i,n.height=e,t(n.getContext("2d"),i,e);let s=new en(n);return s.colorSpace=Ut,s.anisotropy=4,s}function gu(){return Ir(64,64,i=>{let e=i.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,255,255,0.55)"),e.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=e,i.fillRect(0,0,64,64)})}function Yv(){let i=Ir(512,128,(e,t,n)=>{e.fillStyle="#8a5530",e.fillRect(0,0,t,n);for(let s=0;s<80;s++){let r=K(s,1)*n,o=.05+K(s,2)*.14;e.strokeStyle=K(s,3)>.5?`rgba(48,20,6,${o})`:`rgba(206,140,84,${o})`,e.lineWidth=1+K(s,4)*3,e.beginPath();for(let a=0;a<=t;a+=16){let l=r+Math.sin(a*.012+s)*4+Math.sin(a*.05+s*3)*1.5;a?e.lineTo(a,l):e.moveTo(a,l)}e.stroke()}});return i.wrapS=i.wrapT=jt,i}function Zv(){return Ir(256,64,(i,e,t)=>{i.fillStyle="#f2c230",i.fillRect(0,0,e,t),i.fillStyle="#16161a";for(let n=-t;n<e+t;n+=48)i.beginPath(),i.moveTo(n,0),i.lineTo(n+24,0),i.lineTo(n+24-t,t),i.lineTo(n-t,t),i.closePath(),i.fill()})}var Vi=2.2;function $v(i){return Ir(256,256,e=>{e.fillStyle="#f3ead8",e.beginPath(),e.arc(128,128,124,0,Math.PI*2),e.fill();let t=(n,s,r)=>{e.strokeStyle=r,e.lineWidth=18,e.beginPath(),e.arc(128,128,96,-Math.PI/2-Vi+2*Vi*n,-Math.PI/2-Vi+2*Vi*s),e.stroke()};t(0,.55,"#3bb273"),t(.55,.8,"#f2b632"),t(.8,1,"#e5383b"),e.strokeStyle="#2a2a2a",e.lineWidth=3;for(let n=0;n<=10;n++){let s=-Math.PI/2-Vi+2*Vi*n/10;e.beginPath(),e.moveTo(128+Math.cos(s)*74,128+Math.sin(s)*74),e.lineTo(128+Math.cos(s)*86,128+Math.sin(s)*86),e.stroke()}e.fillStyle="#2a2a2a",e.font='700 22px "Bricolage Grotesque", sans-serif',e.textAlign="center",e.fillText(i,128,196)})}function Jv(){return{metal:new Be({color:1845056,metalness:.55,roughness:.42}),metalLight:new Be({color:9345710,metalness:.9,roughness:.28}),chrome:new Be({color:14870768,metalness:1,roughness:.16}),copper:new Be({color:13664336,metalness:1,roughness:.3}),brass:new Be({color:14067280,metalness:1,roughness:.3}),wood:new Be({map:Yv(),roughness:.55}),enamel:new pt({color:2910832,roughness:.38,clearcoat:.6,clearcoatRoughness:.3}),ceramic:new pt({color:14673902,roughness:.35,clearcoat:.5,clearcoatRoughness:.3}),floor:new Be({color:790810,metalness:.35,roughness:.45}),glass:new pt({color:15267583,transparent:!0,opacity:.24,roughness:.05,clearcoat:1,clearcoatRoughness:.05,depthWrite:!1,side:It,envMapIntensity:2.5}),dark:new Be({color:724242,roughness:.6}),neon:(i,e=2)=>new dt({color:xt(i,e),toneMapped:!1})}}function Kv(i){let e=new ys;e.add(new be(new ct(24,12,24),new dt({color:658967,side:rn})));let t=(r,o,a,l,c)=>{let h=new be(new wt(r,o),new dt({color:xt(l,c),side:It}));h.position.copy(a),h.lookAt(0,0,0),e.add(h)};t(9,3,I(0,5,7),He.warm,2.6),t(4,4,I(6,3,6),16765600,1.6),t(6,2,I(-10,2,0),He.cyan,2.2),t(6,2,I(10,2,-3),He.magenta,2),t(12,1.2,I(0,5.5,-9),He.violet,1.4);let n=new wr(i),s=n.fromScene(e,.03).texture;return n.dispose(),s}var fs=(i,e=32)=>new li(i.map(([t,n])=>new me(t,n)),e),Qn=(i,e,t,n=.04,s=3)=>new as(i,e,t,s,n);function Qv(i,e){let t=[];for(let[r,o,a,l,c,h,d]of[[18,.05,.05,.5,.35,-6.45,He.cyan],[18,.05,.05,.5,5.2,-6.45,He.magenta],[.05,.05,14,9.45,.35,.5,He.cyan],[.05,.05,14,9.45,5.2,.5,He.violet]]){let u=new be(new ct(r,o,a),e.neon(d,1.3));u.position.set(l,c,h),i.add(u),t.push(u)}let n=jv("LABO DE R\xC9UNIONOLOGIE APPLIQU\xC9E",{w:1024,h:128,font:'700 64px "Bricolage Grotesque", sans-serif',color:"#7df3ff",glow:"#22e6ff"});n.scale.set(5,.62,1),n.position.set(.5,4.78,-6.4),i.add(n);let s=new Ze;i.add(s);for(let r of[-1,1]){let o=new Ht([I(r*3.2,5.6,-6.35),I(r*2.6,5.2,-5.6),I(r*1.4,4.6,-2.4),I(r*.55,3.9,-.4),I(r*.5,3.12,0)]);s.add(new be(new Yn(o,80,.07,12),e.copper));for(let a=1;a<6;a++){let l=new be(new Ft(.085,.025,8,20),e.brass),c=a/6;l.position.copy(o.getPointAt(c)),l.quaternion.setFromUnitVectors(I(0,0,1),o.getTangentAt(c)),s.add(l)}}return r=>{let o=r>16.4&&r<st?.5+.5*Math.sin(r*14):0;t[1].material.color.copy(xt(o?He.red:He.magenta,1.3+o*3)),n.visible=r<st,s.visible=r<st}}function jv(i,{w:e,h:t,font:n,color:s,glow:r}){let o=Ir(e,t,l=>{l.font=n;let c=Math.min(1,(e-60)/l.measureText(i).width);c<1&&(l.font=n.replace(/(\d+)px/,(h,d)=>`${Math.floor(Number(d)*c)}px`)),l.textAlign="center",l.textBaseline="middle",l.shadowColor=r,l.shadowBlur=18,l.fillStyle=s,l.fillText(i,e/2,t/2)}),a=new be(new wt(1,1),new dt({map:o,transparent:!0,depthWrite:!1,toneMapped:!1,color:xt(16777215,1.6)}));return a.userData.noDepth=!0,a}var pu=[{glass:[[0,0],[.12,0],[.125,.012],[.05,.2],[.04,.21],[.04,.3],[.046,.31]],liquid:[[0,.01],[.115,.01],[.08,.11],[0,.11]]},{glass:[[0,0],[.05,.005],[.09,.04],[.11,.11],[.09,.18],[.04,.215],[.035,.3],[.04,.31]],liquid:[[0,.008],[.05,.012],[.088,.045],[.105,.1],[0,.1]]},{glass:[[0,0],[.07,0],[.075,.01],[.075,.2],[.05,.25],[.03,.27],[.03,.32],[.034,.33]],liquid:[[0,.01],[.068,.01],[.068,.16],[0,.16]]},{glass:[[0,0],[.08,0],[.085,.008],[.085,.2],[.092,.21]],liquid:[[0,.008],[.078,.008],[.078,.12],[0,.12]]}];function ey(i,e){let t=new Ze;i.add(t);let n=[.95,1.7,2.45,3.2],s=[[-7.4,-2.6],[2.6,7.4]],r=-6.2,o=pu.map(()=>[]),a=[He.green,He.magenta,He.cyan,He.amber,He.violet,16738877,11992893],l=0;for(let[h,d]of s){let u=d-h,f=(h+d)/2;for(let m of n){let x=new be(Qn(u,.06,.42,.02,2),e.wood);x.position.set(f,m,r),t.add(x);let p=new be(new ct(u-.1,.012,.02),e.neon(He.warm,1.3));p.position.set(f,m-.04,r+.2),t.add(p);for(let g=h+.25;g<d-.2;g+=.3+K(l,1)*.22){l+=1;let y=Math.floor(K(l,2)*pu.length),M=.8+K(l,3)*.55;o[y].push({x:g,y:m+.03,z:r+(K(l,4)-.5)*.18,sc:M,col:a[Math.floor(K(l,5)*a.length)],k:l})}}for(let m of[h+.05,d-.05]){let x=new be(new Qe(.03,.03,3,10),e.brass);x.position.set(m,1.95,r+.18),t.add(x)}}let c=new Pt;pu.forEach((h,d)=>{let u=o[d];if(!u.length)return;let f=new xn(fs(h.glass,20),e.glass,u.length),m=new xn(fs(h.liquid,20),new dt({toneMapped:!1}),u.length);u.forEach((x,p)=>{c.position.set(x.x,x.y,x.z),c.scale.setScalar(x.sc),c.rotation.set(0,K(x.k,6)*6,0),c.updateMatrix(),f.setMatrixAt(p,c.matrix),m.setMatrixAt(p,c.matrix),m.setColorAt(p,xt(x.col,1.1+K(x.k,7)*1.1))}),t.add(f,m)}),cs(t)}function mu(i,e,t,n,s){let r=new Ze;r.position.copy(t),i.add(r);let o=new be(new Qe(.01,.01,6.5-t.y,6),e.dark);o.position.y=(6.5-t.y)/2+.2,r.add(o);let a=new be(fs([[.03,.25],[.07,.24],[.12,.17],[.22,.04],[.27,0],[.265,-.01]],32),new Be({color:2316367,metalness:.6,roughness:.35,side:It}));r.add(a);let l=new be(new Ft(.265,.012,8,40),e.brass);l.rotation.x=Math.PI/2,r.add(l);let c=new be(new it(.07,16,12),new dt({color:xt(16767392,4),toneMapped:!1}));c.position.y=.06,c.userData.noCast=!0,r.add(c);let h=new zi(He.warm,s,9,.72,.85,2);return h.position.copy(t),h.target.position.copy(n),h.castShadow=!0,h.shadow.mapSize.set(1024,1024),h.shadow.bias=-3e-4,h.shadow.normalBias=.025,h.shadow.radius=5,h.shadow.camera.near=.3,h.shadow.camera.far=7,i.add(h,h.target),h}function ty(i,e){let n=new xn(Qn(1.25,2.7,1,.06,2),e.metal,28),s=new xn(new ct(.035,2.5,.035),e.neon(He.cyan,1.15),56),r=new Pt,o=[],a=0,l=0;for(let x of[-1,1])for(let p=0;p<14;p++){let g=-8.6-p*1.32,y=x*2.6;r.position.set(g,1.35,y),r.rotation.set(0,0,0),r.updateMatrix(),n.setMatrixAt(a++,r.matrix);for(let M of[-.58,.58])r.position.set(g+M,1.35,y-x*.51),r.updateMatrix(),s.setMatrixAt(l++,r.matrix);for(let M=0;M<14;M++)for(let _=0;_<4;_++)o.push({x:g-.42+_*.28,y:.3+M*.17,z:y-x*.506,i:p,s:x})}i.add(n,s);let c=new xn(new wt(.12,.036),new dt({toneMapped:!1,side:It}),o.length),h=new we(198670);o.forEach((x,p)=>{r.position.set(x.x,x.y,x.z),r.rotation.set(0,x.s>0?Math.PI:0,0),r.updateMatrix(),c.setMatrixAt(p,r.matrix),c.setColorAt(p,h)}),i.add(c);let d=[He.cyan,He.green,He.cyan,He.green,He.amber,He.magenta].map(x=>new we(x)),u=new we,f=[-1.7,1.7].map(x=>new Ht([I(-29,3.15,x),I(-16,3.15,x),I(-8,3.2,x*.8),I(-3,3.6,x*.4),I(0,3.2,0)]));for(let x of f){let p=new be(new Yn(x,160,.05,8),e.metalLight);p.userData.cable=!0,i.add(p)}let m=new xn(new it(.075,14,10),new dt({toneMapped:!1}),36);m.userData.noCast=!0;for(let x=0;x<36;x++)m.setColorAt(x,xt(x%3===0?He.magenta:He.cyan,3));return i.add(m),x=>{let p=x>16.4&&x<st?1+2*Math.abs(Math.sin(x*12)):1;for(let y=0;y<o.length;y++){let _=.2+(13-o[y].i)*.11+K(y,7)*.45;if(x<_||x>st+.1){c.setColorAt(y,h);continue}let b=2+K(y,3)*9;if(!(K(y,Math.floor(x*b*p+K(y,5)*10))>.33+.25*K(y,11))){c.setColorAt(y,h);continue}u.copy(d[Math.floor(K(y,13)*d.length)]).multiplyScalar(1.35*p),c.setColorAt(y,u)}c.instanceColor.needsUpdate=!0;let g=.1*x+Math.max(0,x-14)**2*.03;for(let y=0;y<36;y++){let M=f[y%2],_=(g+(y>>1)/18)%1,b=x>1.6&&x<st;r.position.copy(M.getPointAt(_)),r.position.y-=.13,r.rotation.set(0,0,0),r.scale.setScalar(b?1:1e-4),r.updateMatrix(),m.setMatrixAt(y,r.matrix)}m.instanceMatrix.needsUpdate=!0}}var Dc=I(-3.6,0,1.4),Wd=-.13;function ny(i,e){let t=new Ze;t.position.set(Dc.x,Wd,Dc.z),i.add(t);let n=new be(Qn(2.95,.08,1,.025,2),e.wood);n.position.y=.95,t.add(n);let s=new be(Qn(2.8,.78,.86,.05),e.enamel);s.position.y=.52,t.add(s);for(let k of[-.93,0,.93]){let te=new be(Qn(.86,.62,.03,.012,2),e.enamel);te.position.set(k,.5,.43),t.add(te);let L=new be(new yn(.016,.16,4,8),e.brass);L.rotation.z=Math.PI/2,L.position.set(k,.72,.47),t.add(L)}let r=new be(new ct(2.8,.025,.025),e.neon(He.green,2.2));r.position.set(0,.9,.47),t.add(r);let o=new Set([n,s,r,...t.children]),a=[],l=(k,te,L,G,X=.99,j=0)=>{let re=new be(k,e.glass);re.position.set(G,X,j),t.add(re);let de=new be(te,new dt({color:xt(L,1.5),toneMapped:!1}));return de.position.set(G,X,j),t.add(de),a.push({glass:re,liquid:de,color:L,x:G,y:X,z:j}),a[a.length-1]},c=fs([[0,0],[.17,0],[.18,.02],[.065,.27],[.055,.28],[.055,.4],[.062,.41]]),h=fs([[0,.012],[.165,.012],[.11,.14],[0,.14]]);l(c,h,He.green,-1.1,.99,.1);let d=new be(new Ft(.16,.012,6,24),e.brass);d.rotation.x=Math.PI/2,d.position.set(-.45,1.2,0),t.add(d);for(let k=0;k<3;k++){let te=k/3*Math.PI*2,L=new be(new Qe(.008,.008,.22,6),e.brass);L.position.set(-.45+Math.cos(te)*.16,1.09,Math.sin(te)*.16),t.add(L)}let u=new be(new Qe(.05,.07,.12,12),e.brass);u.position.set(-.45,1.05,0),t.add(u);let f=new be(new Hi(.045,.14,12),new dt({color:xt(3902719,3),toneMapped:!1,transparent:!0,opacity:.85}));f.position.set(-.45,1.17,0),t.add(f);let m=new it(.17,24,18),x=new it(.155,24,16,0,Math.PI*2,Math.PI*.42,Math.PI*.58),p=l(m,x,He.magenta,-.45,1.38),g=new be(new Qe(.045,.045,.22,16,1,!0),e.glass);g.position.set(-.45,1.62,0),t.add(g);let y=[];for(let k=0;k<=120;k++){let te=k*.32;y.push(I(-.8+Math.cos(te)*.07,1+k*.0035,-.3+Math.sin(te)*.07))}t.add(new be(new Yn(new Ht(y),240,.012,6),e.copper));let M=new be(Qn(.5,.06,.14,.015,2),e.wood);M.position.set(.15,1.13,.12),t.add(M),[He.cyan,He.amber,He.violet,He.green].forEach((k,te)=>{let L=new Qe(.032,.032,.34,14,1,!0),G=new Qe(.027,.027,.16+.04*te,14);l(L,G,k,-.03+te*.12,1.15,.12),a[a.length-1].liquid.position.y=1.07+(.08+.02*te)});let _=l(c,h,He.violet,.7,.99,-.22),b=new Qe(.075,.075,.55,18,1,!0),S=new Qe(.068,.068,.38,18);l(b,S,He.amber,1.22,1.265,.05),a[a.length-1].liquid.position.y=1.19,[[12071482,.07,.1],[3108762,.06,-.08],[3836490,.065,.2]].forEach(([k,te,L],G)=>{let X=new be(Qn(.3,te,.22,.012,2),new Be({color:k,roughness:.7}));X.position.set(-1.3,.99+te/2+G*.068,-.25),X.rotation.y=L,t.add(X)});let A=[{x:-1.1,y:1,z:.1,h:.42,r:.09},{x:-.45,y:1.26,z:0,h:.55,r:.07},{x:.7,y:1,z:-.22,h:.42,r:.09},{x:1.22,y:1.05,z:.05,h:.5,r:.04},{x:-.03,y:1,z:.12,h:.3,r:.015},{x:.33,y:1,z:.12,h:.3,r:.015}],v=72,T=new xn(new it(1,8,6),new dt({toneMapped:!1,transparent:!0,opacity:.85}),v);for(let k=0;k<v;k++)T.setColorAt(k,xt([He.green,He.magenta,He.violet,He.amber,He.cyan,He.violet][k%6],2.2));t.add(T);let R=60,P=new Mt;P.setAttribute("position",new yt(new Float32Array(R*3),3)),P.setAttribute("color",new yt(new Float32Array(R*3),3));let U=new Oi(P,new vi({size:.22,map:gu(),vertexColors:!0,transparent:!0,depthWrite:!1,blending:dn,toneMapped:!1}));t.add(U);let O=new Pt,F=new we(He.violet),V=new we(He.green);return{target:_,update(k){let te=1+2.5*_t(ht(k,9.6,10.4))*(1-ht(k,11,13))+(k>16.4&&k<st?1.5:0);for(let re=0;re<v;re++){let de=A[re%A.length],Fe=.35+K(re,1)*.5,ze=(k*Fe*te*.6+K(re,2))%1,Xe=.012+K(re,3)*.022;O.position.set(de.x+Math.sin(k*3+re)*de.r*.5*(1-ze),de.y+ze*de.h,de.z+Math.cos(k*2.3+re)*de.r*.5*(1-ze)),O.scale.setScalar(k>st?1e-4:Xe*(1-ze*.5)),O.updateMatrix(),T.setMatrixAt(re,O.matrix)}T.instanceMatrix.needsUpdate=!0;let L=P.attributes.position.array,G=P.attributes.color.array;for(let re=0;re<R;re++){let de=re%2?{x:-.45,y:1.72,z:0}:{x:.7,y:1.4,z:-.22},Fe=(k*.25+K(re,4))%1;L[re*3]=de.x+Math.sin(re+k)*.12*Fe,L[re*3+1]=de.y+Fe*1.1,L[re*3+2]=de.z+Math.cos(re*1.3+k)*.1*Fe;let ze=Math.sin(Fe*Math.PI)*.35*(k>st?0:1),Xe=re%2?[.9,.3,.9]:[.5,.4,1];G[re*3]=Xe[0]*ze,G[re*3+1]=Xe[1]*ze,G[re*3+2]=Xe[2]*ze}P.attributes.position.needsUpdate=!0,P.attributes.color.needsUpdate=!0,f.scale.set(1,.8+.4*Math.abs(Math.sin(k*17)),1);let X=_t(ht(k,8.4,10.2));_.liquid.material.color.copy(F).lerp(V,X).multiplyScalar(1.5+X*1.5*Math.abs(Math.sin(k*8))),p.liquid.rotation.y=k;let j=k>st;t.children.forEach(re=>{o.has(re)||(re.visible=!j||re===T)})}}}var Ci=I(3.6,0,1.4);function iy(i=512,e=288){let t=document.createElement("canvas");t.width=i,t.height=e;let n=new en(t);return n.colorSpace=Ut,{c:t,x:t.getContext("2d"),tex:n}}function sy(i,e,t){let{c:n,x:s}=i,r=n.width,o=n.height;if(s.clearRect(0,0,r,o),s.strokeStyle="rgba(34,230,255,0.9)",s.lineWidth=3,s.strokeRect(6,6,r-12,o-12),s.font='700 26px "Bricolage Grotesque", sans-serif',s.fillStyle="#7df3ff",t===0){s.fillText("ANALYSE S\xC9MANTIQUE",24,44);let a=Lc[Math.floor(e*1.6)%Lc.length];s.font='800 64px "Bricolage Grotesque", sans-serif',s.fillStyle="#ff7df7",s.shadowColor="#ff3df2",s.fillText(a,24,140),s.font='700 24px "Bricolage Grotesque", sans-serif',s.fillStyle="#7df3ff",s.shadowColor="#22e6ff";let l=Math.min(99,Math.floor(60+e*13.7%40));s.fillText(`Creux : ${l} %`,24,190),s.fillRect(24,214,(r-48)*(l/100),18),s.strokeRect(24,214,r-48,18)}else if(t===1){s.fillText("FLUX DE BLABLA",24,44),s.beginPath();for(let a=0;a<=60;a++){let l=24+a/60*(r-48),c=170+Math.sin(a*.4+e*5)*40*Math.sin(a*.11+e)+Math.sin(a*1.7+e*9)*8;a?s.lineTo(l,c):s.moveTo(l,c)}s.stroke()}else{s.font='600 20px "Bricolage Grotesque", monospace';for(let a=0;a<9;a++){let l="";for(let c=0;c<18;c++)l+="0123456789ABCDEF"[Math.floor(K(a*31+c,Math.floor(e*8)+a)*16)];s.fillText(l,24,44+a*26)}}i.tex.needsUpdate=!0}function ry(i){let e=Ir(512,128,n=>{n.font='800 70px "Bricolage Grotesque", sans-serif',n.textAlign="center",n.textBaseline="middle",n.shadowColor="#ff3df2",n.shadowBlur=22,n.fillStyle="#ffd6fb",n.fillText(i,256,64)}),t=new lo(new hr({map:e,transparent:!0,depthWrite:!1,blending:dn,toneMapped:!1,color:xt(16777215,1.4)}));return t.scale.set(1.2,.3,1),t}function oy(i,e){let t=new Ze;t.position.set(Ci.x,Wd,Ci.z),i.add(t);let n=new be(Qn(2.55,.08,.95,.03,2),e.ceramic);n.position.y=.95,t.add(n);let s=new be(Qn(2.4,.78,.82,.06),e.metal);s.position.y=.52,t.add(s);let r=new be(new ct(2.4,.025,.025),e.neon(He.cyan,2.2));r.position.set(0,.9,.42),t.add(r);let o=new be(Qn(.9,.04,.3,.015,2),e.metal);o.position.set(0,1.01,.15),o.rotation.x=.2,t.add(o);let a=new xn(Qn(.058,.014,.05,.006,1),new dt({toneMapped:!1}),36),l=new Pt;for(let _=0;_<36;_++)l.position.set(-.38+_%12*.069,1.04+Math.floor(_/12)*.012,.06+Math.floor(_/12)*.075),l.rotation.x=.2,l.updateMatrix(),a.setMatrixAt(_,l.matrix),a.setColorAt(_,xt(He.cyan,.6));t.add(a);let c=new be(new Qe(.07,.08,.04,20),e.brass);c.position.set(.85,1.01,.1),t.add(c);let h=new be(new it(.055,20,12,0,Math.PI*2,0,Math.PI/2),new pt({color:14689326,roughness:.25,clearcoat:1}));h.position.set(.85,1.03,.1),t.add(h);let d=new be(new Ft(.5,.03,8,40),e.neon(He.cyan,2));d.rotation.x=Math.PI/2,d.position.set(0,.16,-1.45),t.add(d);let u=new be(new Qe(1.25,.5,2,32,1,!0),new dt({color:xt(He.cyan,.5),transparent:!0,opacity:.1,blending:dn,depthWrite:!1,side:It,toneMapped:!1}));u.position.set(0,1.16,-1.45),u.userData.noDepth=!0,t.add(u);let f=[0,1,2].map(_=>{let b=iy(),S=new be(new wt(1.25,.7),new dt({map:b.tex,transparent:!0,depthWrite:!1,blending:dn,side:It,toneMapped:!1,color:xt(16777215,1.5)})),A=(_-1)*.5;return S.position.set(Math.sin(A)*2.1,2.13,-1.45+(1-Math.cos(A))*1.6),S.rotation.y=-A,t.add(S),{h:b,m:S,kind:_}}),m=Lc.map(_=>{let b=ry(_);return i.add(b),b}),x=-1,p=I(0,2.7,0),g=[xt(He.cyan,.6),xt(He.cyan,1.4),xt(He.magenta,1.4)],y=new N,M=new N;return _=>{let b=_t(ht(_,10.6,11.6))*(_>st?0:1),S=Math.floor(_*10);b>.001&&S!==x&&(x=S,f.forEach(v=>sy(v.h,_,v.kind))),f.forEach((v,T)=>{v.m.material.opacity=b*(.85+.15*Math.sin(_*30+T*2))*(K(Math.floor(_*20),T)>.04?1:.3),v.m.position.y=(v.kind===1?2.25:2.13)+Math.sin(_*1.5+T)*.03}),u.material.opacity=.1*b;for(let v=0;v<36;v++)a.setColorAt(v,g[_>11?K(v,Math.floor(_*12))>.75&&_<16.2?2:1:0]);a.instanceColor.needsUpdate=!0,m.forEach((v,T)=>{let R=11.2+T*.28,P=_*.9+T/Lc.length*Math.PI*2;y.set(Ci.x+Math.cos(P)*1.4,2.15+Math.sin(_*1.3+T)*.28+T%3*.14,Ci.z-.35+Math.sin(P)*.8);let U=uu(ht(_,16+T*.16,20.1));M.set(Math.cos(_*4+T)*.8*(1-U),0,Math.sin(_*4+T)*.8*(1-U)),v.position.copy(y).lerp(p,U).add(M);let O=1-.7*U;v.scale.set(1.2*O,.3*O,1),v.material.opacity=_t(ht(_,R,R+.5))*(1-ht(_,19.9,20.4)),v.visible=v.material.opacity>.01});let A=_>st;f.forEach(v=>{v.m.visible=!A}),d.visible=!A,u.visible=!A}}function ay(i,e){let t=new Ze;i.add(t);let n=[];for(let x of[-1.35,1.35]){let p=new be(new Qe(.34,.4,.24,24),e.copper);p.position.set(x,.12,-3.4),t.add(p);let g=new be(new Qe(.12,.2,2.4,20),e.metalLight);g.position.set(x,1.2,-3.4),t.add(g);for(let _=0;_<6;_++){let b=new be(new Ft(.2-_*.012,.028,10,28),_%2?e.copper:e.neon(He.violet,2));b.rotation.x=Math.PI/2,b.position.set(x,.45+_*.32,-3.4),t.add(b)}let y=new be(new it(.32,32,24),e.chrome);y.position.set(x,2.72,-3.4),t.add(y);let M=new be(new Ft(.33,.02,8,30),e.neon(He.violet,2.5));M.rotation.x=Math.PI/2,M.position.copy(y.position),t.add(M),n.push(y.position.clone())}let s=new pr({color:xt(14268671,3),toneMapped:!1,transparent:!0}),r=26,o=[];for(let x=0;x<7;x++){let p=new Mt;p.setAttribute("position",new yt(new Float32Array(r*3),3));let g=new uo(p,s);g.frustumCulled=!1,t.add(g),o.push(g)}let a=I(0,3,0);function l(x,p,g,y,M){let _=x.geometry.attributes.position.array;for(let b=0;b<r;b++){let S=b/(r-1),A=Math.sin(S*Math.PI);_[b*3]=ft(p.x,g.x,S)+(K(y,b*3)-.5)*M*A,_[b*3+1]=ft(p.y,g.y,S)+(K(y,b*3+1)-.5)*M*A+A*.25,_[b*3+2]=ft(p.z,g.z,S)+(K(y,b*3+2)-.5)*M*A}x.geometry.attributes.position.needsUpdate=!0}let c=new be(Qn(.55,1,.4,.05),e.metal);c.position.set(-2.05,.5,-2.4),t.add(c);let h=new be(new wt(.5,.12),new Be({map:Zv(),roughness:.6}));h.position.set(-2.05,.18,-2.195),t.add(h);let d=new be(new it(.08,14,10),new dt({color:xt(He.red,1),toneMapped:!1}));d.position.set(-2.05,1.07,-2.4),t.add(d);let u=new Ze;u.position.set(-2.05,.75,-2.18),t.add(u);let f=new be(new Qe(.022,.022,.42,10),e.chrome);f.position.y=.21,u.add(f);let m=new be(new it(.065,18,14),new pt({color:14689326,roughness:.25,clearcoat:1,emissive:4194304}));return m.position.y=.42,u.add(m),{leverHandle:m,update(x,p){let g=Math.floor(x*30),y=0;o.forEach((b,S)=>{let A=!1;S<3?(A=x>12.4&&x<st&&K(g,S+40)>(x>16?.15:.45),A&&l(b,n[0],n[1],g*7+S,.55)):(A=x>17.3&&x<st&&K(g,S+80)>.25,A&&l(b,n[S%2],a,g*11+S,.7)),b.visible=A,A&&(y+=1)}),p.intensity=y*7;let M=_t(ht(x,16,16.35));u.rotation.x=ft(-.6,.7,M);let _=x>16.4&&x<st&&Math.sin(x*16)>0?3:.4;d.material.color.copy(xt(He.red,_))}}}function ly(i,e){let t=new Ze;i.add(t);let n=new be(new Qe(1.3,1.45,.32,64),e.copper);n.position.y=.16,t.add(n);let s=new be(new Ft(1.36,.035,8,64),e.neon(He.cyan,2.5));s.rotation.x=Math.PI/2,s.position.y=.33,t.add(s);let r=new xn(new it(.035,10,8),e.brass,24),o=new Pt;for(let M=0;M<24;M++){let _=M/24*Math.PI*2;o.position.set(Math.cos(_)*1.18,.33,Math.sin(_)*1.18),o.updateMatrix(),r.setMatrixAt(M,o.matrix)}t.add(r);let a=new be(new Qe(1,1,2.6,64,1,!0),e.glass);a.position.y=1.62,t.add(a);let l=new be(fs([[0,.3],[.35,.28],[.85,.16],[1.1,.05],[1.12,-.06],[1,-.08]],64),e.copper);l.position.y=2.97,t.add(l);let c=new be(new it(.18,20,14),new dt({color:xt(He.white,2),toneMapped:!1}));c.position.y=3.35,t.add(c);let h=new dt({color:xt(He.cyan,1.5),toneMapped:!1,transparent:!0,opacity:.85}),d=new be(new Qe(.93,.93,1,48),h);t.add(d);let u=[0,1,2].map(M=>{let _=new be(new Ft(1.06,.03,8,64),e.neon([He.magenta,He.cyan,He.amber][M],2.5));return _.rotation.x=Math.PI/2,t.add(_),_}),f=[-1,1].map(M=>{let _=new Ze;_.position.set(M*1.25,0,1.15),_.rotation.y=-M*.5,t.add(_);let b=new be(new Qe(.04,.05,.75,12),e.brass);b.position.y=.375,_.add(b);let S=new be(new Qe(.2,.2,.08,32),e.brass);S.rotation.x=Math.PI/2,S.position.y=.92,_.add(S);let A=new be(new tn(.175,40),new Be({map:$v(M<0?"BLABLA":"CREUX"),roughness:.5}));A.position.set(0,.92,.041),_.add(A);let v=new Ze;v.position.set(0,.92,.05),_.add(v);let T=new be(new ct(.012,.15,.006),new Be({color:13114922,roughness:.4}));T.position.y=.065,v.add(T);let R=new be(new it(.018,10,8),e.brass);v.add(R);let P=new be(new it(.19,24,12,0,Math.PI*2,0,.5),e.glass);return P.rotation.x=Math.PI/2,P.position.set(0,.92,-.12),_.add(P),{gg:_,needle:v,sx:M}}),m=220,x=new Mt;x.setAttribute("position",new yt(new Float32Array(m*3),3));let p=new Oi(x,new vi({size:.07,map:gu(),color:xt(16777215,2),transparent:!0,depthWrite:!1,blending:dn,toneMapped:!1}));t.add(p);let g=new be(new Ft(1,.08,10,80),new dt({color:xt(He.white,3),toneMapped:!1,transparent:!0}));g.rotation.x=Math.PI/2,g.position.y=1.6,t.add(g);let y=new we;return(M,_)=>{let b=.35+1*_t(ht(M,9.5,16))+.85*_t(ht(M,16,20.4));d.scale.y=b,d.position.y=.32+b/2;let S=M<16?.06:.06+(M-16)*.12;y.setHSL((M*S+.5)%1,1,.55);let A=1.2+.9*_t(ht(M,16,st));h.color.copy(y).multiplyScalar(A),c.material.color.copy(y).multiplyScalar(1.2+A),u.forEach((P,U)=>{let O=.6+(M*(.25+U*.07)*(M>16?3:1)+U/3)%1*2.2;P.position.y=O,P.scale.setScalar(1+.05*Math.sin(M*6+U))});let v=x.attributes.position.array;for(let P=0;P<m;P++){let U=M*(1.5+K(P,1)*2)*(M>16?2.5:1)+K(P,2)*6.283,O=.2+K(P,3)*.7;v[P*3]=Math.cos(U)*O,v[P*3+1]=.35+(M*.3*(1+K(P,4))+K(P,5))%1*b,v[P*3+2]=Math.sin(U)*O}x.attributes.position.needsUpdate=!0,f.forEach((P,U)=>{let O=Ri(.15+.4*_t(ht(M,9,16))+.5*_t(ht(M,16,st-.4))+(M>16.4&&M<st?.04*Math.sin(M*40+U):0)),F=M>=st?Vi+(M-st)*14:-Vi+2*Vi*O;P.needle.rotation.z=-F,P.gg.visible=M<st+.25}),_.color.copy(y),_.intensity=4+20*_t(ht(M,15,st));let T=M>=st;a.visible=!T,d.visible=!T,p.visible=!T,c.visible=!T,l.visible=!T,u.forEach(P=>{P.visible=!T});let R=ht(M,st,st+.9);g.visible=T&&R<1,g.scale.setScalar(1+R*16),g.material.opacity=1-R,T&&(_.intensity=30*Math.exp(-(M-st)*3))}}async function cy(i,e,t,n=0){try{await document.fonts.load('800 160px "Bricolage Grotesque"')}catch{}let s=1024,r=128*i.length+40,o=document.createElement("canvas");o.width=s,o.height=r;let a=o.getContext("2d");a.fillStyle="#fff",a.textAlign="center",a.textBaseline="middle",i.forEach((u,f)=>{let m=f===0?150:104;a.font=`800 ${m}px "Bricolage Grotesque", "Arial Black", sans-serif`;let x=a.measureText(u).width,p=Math.min(1,(s-40)/x);a.font=`800 ${Math.floor(m*p)}px "Bricolage Grotesque", "Arial Black", sans-serif`,a.fillText(u,s/2,84+f*128)});let l=a.getImageData(0,0,s,r).data,c=[],h=3;for(let u=0;u<r;u+=h)for(let f=0;f<s;f+=h)l[(u*s+f)*4+3]>140&&c.push([f,u]);let d=e/s;return c.map(([u,f])=>I((u-s/2)*d,t-(f-r/2)*d,n+(K(u,f)-.5)*.1))}function hy(i,e,t,n){let s=Math.min(5200,Math.max(1500,t.length)),r=new Float32Array(s*3),o=new Float32Array(s*3),a=new Mt;a.setAttribute("position",new yt(r,3)),a.setAttribute("color",new yt(o,3));let l=new vi({size:n,map:gu(),vertexColors:!0,transparent:!0,depthWrite:!1,depthTest:!1,blending:dn,toneMapped:!1,fog:!1}),c=new Oi(a,l);c.frustumCulled=!1,e.add(c);let h=I(0,2.2,0),d=[He.magenta,He.cyan,He.amber,He.green,He.violet,He.pink].map(T=>new we(T)),u=[],f=[],m=[],x=1/0,p=-1/0;for(let T of t)x=Math.min(x,T.x),p=Math.max(p,T.x);for(let T=0;T<s;T++){let R=K(T,1)*Math.PI*2,P=Math.acos(1-2*K(T,2)),U=I(Math.sin(P)*Math.cos(R),Math.abs(Math.cos(P))*.9+.2,Math.sin(P)*Math.sin(R));u.push(U.multiplyScalar(2.5+K(T,3)*5)),f.push(t.length>s?t[Math.floor(T*t.length/s)]:t[T%t.length]),m.push(d[Math.floor(K(T,4)*d.length)])}let g=new we(He.magenta),y=new we(He.cyan),M=new we(He.amber),_=new we,b=new we,S=40,A=new xn(new Qe(.22,.22,.05,32),new pt({color:He.pink,emissive:He.pink,emissiveIntensity:.35,roughness:.3,clearcoat:1,clearcoatRoughness:.15}),S);A.castShadow=!0,i.add(A);let v=new Pt;return T=>{let R=T-st;if(c.visible=R>=0,R>=0){let P=uu(ht(R,.9,3)),U=Math.min(R,1.8),O=1-ht(T,oa-1,oa-.2);for(let F=0;F<s;F++){let V=1-Math.exp(-2.4*U),k=h.x+u[F].x*V*1.25,te=h.y+u[F].y*V*1.25-.35*U*U,L=h.z+u[F].z*V*1.25,G=f[F],X=R>3?.025:0;r[F*3]=ft(k,G.x+Math.sin(T*3+F)*X,P),r[F*3+1]=ft(te,G.y+Math.cos(T*2.6+F*1.3)*X,P),r[F*3+2]=ft(L,G.z,P);let j=(G.x-x)/Math.max(.001,p-x);j<.5?b.copy(g).lerp(y,j*2):b.copy(y).lerp(M,(j-.5)*2);let re=R>3.2?.75+.5*K(F,Math.floor(T*12)):1;_.copy(m[F]).lerp(b,P).multiplyScalar(2.2*re*O*(R<.25?1+(.25-R)*8:1)),o[F*3]=_.r,o[F*3+1]=_.g,o[F*3+2]=_.b}a.attributes.position.needsUpdate=!0,a.attributes.color.needsUpdate=!0}for(let P=0;P<S;P++){let U=23.4+K(P,1)*2.4,O=(K(P,2)-.5)*12,F=(K(P,3)-.5)*5+1,V=T-U,k=9;if(V>0){let te=9-4.9*V*V;if(te>.03)k=te;else{let L=V-Math.sqrt(1.8306122448979592);k=.03+Math.abs(Math.sin(L*7))*.5*Math.exp(-L*4)}}v.position.set(O,k,F),v.rotation.set(V>0&&k>.1?V*6+P:0,P,V>0&&k>.1?V*4:0),v.scale.setScalar(V>0?1:1e-4),v.updateMatrix(),A.setMatrixAt(P,v.matrix)}A.instanceMatrix.needsUpdate=!0}}function Vd(i,e,t=0){let n=[[0,I(-27.5,1.7,0),I(-20,1.6,0)],[2.6,I(-22,1.75,.3),I(-14,1.6,0)],[5.2,I(-13.5,1.85,.4),I(-6,1.45,.8)],[7.2,I(-3.02,1.64,1.9),I(-3.18,1.5,.66)],[9.6,I(-4.8,1.85,3.7),I(-3.1,1.1,1.1)],[11.9,I(1.6,2,4.4),I(3.6,1.6,1)],[14,I(3.78,1.8,1.72),I(3.6,1.58,.62)],[15.2,I(-2.3,2.6,2.9),I(-2.2,1.5,-2)],[16.6,I(-1.35,1.7,-.75),I(-2.35,1.35,-2.3)],[17.7,I(-2.9,2.35,1.9),I(-1,1.6,-1.4)],[18.8,I(0,3.3,8.4),I(0,1.7,0)],[20.6,I(0,2.4,5.4),I(0,1.8,0)],[22.8,I(0,e+.4,t+i+1.2),I(0,e-.3,t)],[oa,I(0,e,t+i),I(0,e,t)]],s=new Ht(n.map(c=>c[1]),!1,"centripetal"),r=new Ht(n.map(c=>c[2]),!1,"centripetal"),o=n.length-1,a=new N,l=new N;return(c,h)=>{let d=0;for(;d<o-1&&h>n[d+1][0];)d++;let u=Ri((h-n[d][0])/(n[d+1][0]-n[d][0])),f=.45*u+.55*_t(u),m=Math.min(1,(d+f)/o);s.getPoint(m,a),r.getPoint(m,l);let x=.012+.09*_t(ht(h,16,st))+(h>st?.35*Math.exp(-(h-st)*3):0);return a.x+=Math.sin(h*37)*x*.6+Math.sin(h*23)*x*.4,a.y+=Math.sin(h*41+1)*x*.5,c.position.copy(a),c.lookAt(l),l}}function uy(i){let e=i||document.createElement("div");e.className="intro",e.setAttribute("role","dialog"),e.setAttribute("aria-label","Introduction anim\xE9e du jeu"),e.replaceChildren();let t=document.createElement("canvas");t.className="intro-canvas",t.setAttribute("aria-hidden","true");let n=document.createElement("p");n.className="intro-caption";let s=document.createElement("div");s.className="intro-flash";let r=document.createElement("div");r.className="intro-bar";let o=document.createElement("button");o.type="button",o.className="intro-btn intro-sound";let a=document.createElement("button");a.type="button",a.className="intro-btn",a.textContent="Passer",r.append(o,a);let l=document.createElement("div");l.className="intro-progress";let c=document.createElement("p");return c.className="intro-loading",c.textContent="Pr\xE9paration du laboratoire\u2026",e.append(t,s,n,r,l,c),i||document.body.append(e),{o:e,canvas:t,caption:n,flash:s,sound:o,skip:a,progress:l,loading:c}}async function fy({renderer:i,composer:e,scene:t,camera:n,ui:s,update:r,resize:o,ao:a,dof:l,bloom:c,allShadows:h,nextShadow:d,calibrate:u,maxQ:f,getQuality:m,setQuality:x}){let p=i.getContext(),g=new Uint8Array(4),y=()=>p.readPixels(0,0,1,1,p.RGBA,p.UNSIGNED_BYTE,g),M=i.extensions.get("WEBGL_debug_renderer_info"),_={gpu:M?p.getParameter(M.UNMASKED_RENDERER_WEBGL):p.getParameter(p.RENDERER),dpr:window.devicePixelRatio||1,viewport:`${window.innerWidth}x${window.innerHeight}`,parallelCompile:i.extensions.has("KHR_parallel_shader_compile"),visible:document.visibilityState},b=[];t.traverse(X=>{X.isLight&&X.castShadow&&b.push(X)});let S=[];t.traverse(X=>{X.isLight&&!X.isHemisphereLight&&S.push(X)});let A=[e.renderTarget1,e.renderTarget2],v=[];t.traverse(X=>{(X.isMesh||X.isPoints||X.isSprite)&&X.material&&X.material.transparent&&v.push(X)});let T=new dt({colorWrite:!1}),R=()=>{let X=v.map(re=>re.visible);for(let re of v)re.visible=!1;let j=t.background;t.background=null,t.overrideMaterial=T,i.setClearColor(197899,1),i.render(t,n),t.overrideMaterial=null,t.background=j,v.forEach((re,de)=>{re.visible=X[de]})},P=X=>{x(X.pr??f),o();for(let re of b)re.castShadow=X.shadows!==!1;for(let re of S)re.visible=!X.fewLights||re.castShadow||re.isSpotLight;a.enabled=X.ao!==!1,l.enabled=X.dof!==!1,c.enabled=X.bloom!==!1;let j=X.msaa??4;for(let re of A)re.samples!==j&&(re.samples=j,re.dispose())},U=X=>{if(X.rr?d():h(),!X.direct){e.render();return}i.setRenderTarget(null);let j=null;if(X.opaqueOnly){j=v.map(re=>re.visible);for(let re of v)re.visible=!1}if(X.prepass){R(),i.autoClear=!1;let re=t.background;t.background=null,i.render(t,n),t.background=re,i.autoClear=!0}else i.render(t,n);j&&v.forEach((re,de)=>{re.visible=j[de]})},O=[3,8,12,15.5,19,24],F=[["3 ombres par image, r\xE9solution max",{}],["ombres \xE0 tour de r\xF4le, r\xE9solution max",{rr:!0}],["ombres \xE0 tour de r\xF4le, r\xE9solution 1",{rr:!0,pr:1}],["ombres \xE0 tour de r\xF4le, r\xE9solution 0,75",{rr:!0,pr:.75}],["ombres \xE0 tour de r\xF4le, r\xE9solution 0,6",{rr:!0,pr:.6}],["ombres \xE0 tour de r\xF4le, r\xE9solution 0,5",{rr:!0,pr:.5}],["tour de r\xF4le, r\xE9solution 1, sans occlusion",{rr:!0,pr:1,ao:!1}],["tour de r\xF4le, r\xE9solution 1, sans flou",{rr:!0,pr:1,dof:!1}],["tour de r\xF4le, r\xE9solution 1, sans halo",{rr:!0,pr:1,bloom:!1}],["tour de r\xF4le, r\xE9solution 1, sans MSAA",{rr:!0,pr:1,msaa:0}],["r\xE9solution 1, sans ombres",{pr:1,shadows:!1}],["sc\xE8ne seule, r\xE9solution 1, sans ombres",{pr:1,direct:!0,shadows:!1}],["sc\xE8ne seule, sans ombres ni lampes ponctuelles",{pr:1,direct:!0,shadows:!1,fewLights:!0}],["sc\xE8ne seule, sans ombres, objets opaques seulement",{pr:1,direct:!0,shadows:!1,opaqueOnly:!0}],["sc\xE8ne seule, sans ombres, avec pr\xE9passe de profondeur",{pr:1,direct:!0,shadows:!1,prepass:!0}],["sc\xE8ne seule, r\xE9solution 0,5, sans ombres",{pr:.5,direct:!0,shadows:!1}]],V=X=>{let j=[...X].sort((re,de)=>re-de);return j[Math.floor(j.length/2)]},k=[],te=document.createElement("pre");te.className="intro-bench",s.loading.textContent="Mesure des performances\u2026",s.o.append(te),s.skip.addEventListener("click",()=>s.o.remove());let L=0,G=0;for(let[X,j]of F){P(j);let re=[],de=[];for(let Fe of O){r(Fe),U(j),y();let ze=4,Xe=0,ae=performance.now();for(let le=0;le<ze;le++){r(Fe+le*.03),i.info.reset();let Te=performance.now();U(j),Xe+=performance.now()-Te,j.direct&&X==="sc\xE8ne seule, r\xE9solution 1, sans ombres"&&(L=Math.max(L,i.info.render.calls),G=Math.max(G,i.info.render.triangles))}y(),re.push((performance.now()-ae)/ze),de.push(Xe/ze),await new Promise(le=>{setTimeout(le,0)})}k.push({name:X,ms:Math.round(V(re)*10)/10,max:Math.round(Math.max(...re)*10)/10,cpu:Math.round(V(de)*10)/10}),te.textContent=k.map(Fe=>`${Fe.ms.toFixed(1).padStart(6)} ms (max ${Fe.max.toFixed(1)}, envoi ${Fe.cpu.toFixed(1)})  ${Fe.name}`).join(`
`)}_.drawCalls=L,_.triangles=G,P({rr:!0}),await u(),_.calibrage=window.__introQuality,_.resolutionChoisie=m(),s.loading.textContent="",window.__introBench={info:_,rows:k},te.textContent=`${_.gpu}
${_.viewport} x${_.dpr}, appels de dessin ${L}, triangles ${G}
r\xE9solution choisie ${_.resolutionChoisie} ${JSON.stringify(_.calibrage)}

${te.textContent}`}async function bE({seekT:i=null,shell:e=null,speed:t=1,stallMs:n=3e3}={}){window.__introStartAt=performance.now();let s=uy(e),r;try{r=new pc({canvas:s.canvas,antialias:!1,powerPreference:"high-performance"})}catch{s.o.remove();return}let o=!1,a=C=>{C.stopPropagation(),o=!0};s.skip.addEventListener("click",a);let l=async()=>{s.o.classList.add("leaving"),await new Promise(C=>{setTimeout(C,650)});try{r.dispose(),r.forceContextLoss()}catch{}s.o.remove()},c=new URL("../",import.meta.url),h=performance.now(),d=Promise.all(["grandpa","wild","curly"].map(C=>Ld(new URL(Nd[C],c)))).then(C=>(window.__introCastMs=Math.round(performance.now()-h),C)).catch(C=>(console.warn("Personnages sculpt\xE9s indisponibles :",C),null));r.toneMapping=As,r.toneMappingExposure=1.12,r.outputColorSpace=Ut,r.shadowMap.enabled=!0,r.shadowMap.type=Ts;let u=new ys;u.background=new we(461068),u.fog=new so(658705,.03),u.environment=Kv(r),u.environmentIntensity=.42;let f=new ys,m=new un(50,1,.05,120),x=Jv();u.add(new Ao(13621478,3814188,.45));for(let[C,J]of[[-4.2,-1],[4.6,-1],[.2,2.6]]){let ee=new zi(15856895,15,14,1.15,.85,1.4);ee.position.set(C,5.5,J),ee.target.position.set(C,0,J+.4),u.add(ee,ee.target)}let p=new Zn(He.cyan,5,10);p.position.set(-21,2.6,0),u.add(p);let g=new Zn(He.cyan,5,10);g.position.set(-12,2.6,0),u.add(g);let y=new Zn(He.green,4,6);y.position.set(-3.4,1.5,2),u.add(y);let M=new Zn(He.cyan,4,6);M.position.set(3.6,1.6,2),u.add(M);let _=new Zn(16743128,3.2,5);_.position.set(-3.6,2.5,-.6),u.add(_);let b=new Zn(8055039,3.2,5);b.position.set(3.6,2.4,-.9),u.add(b);let S=new Zn(He.cyan,6,14);S.position.set(0,1.6,0),u.add(S);let A=new Zn(He.violet,0,9);A.position.set(0,2.9,-3.1),u.add(A);let v=new zi(He.red,0,18,.5,.6);v.position.set(0,5.5,0),u.add(v),u.add(v.target);let T=new zi(16762512,30,22,.55,.9,1.6);T.position.set(0,6,8.5),T.target.position.set(0,1.4,-.5),u.add(T,T.target);let R=Qv(u,x),P=Bd(u,x),U=Hd(u,x);ey(u,x);let O=ty(u,x),F=ny(u,x),V=oy(u,x),k=ay(u,x),te=ly(u,x),L=mu(u,x,I(-3.2,3.4,1.75),I(-3.3,.8,.8),10),G=mu(u,x,I(3.6,3.4,1.75),I(3.6,.9,.7),10),X=mu(u,x,I(-1.7,3.5,-1.4),I(-2.4,.6,-2.4),10),j=[L,G,X];for(let C of j)C.shadow.autoUpdate=!1;let re=()=>{for(let C of j)C.shadow.needsUpdate=!0},de=0,Fe=()=>{j[de%j.length].shadow.needsUpdate=!0,de+=1};u.traverse(C=>{!C.isMesh||C.material.transparent||C.material.isMeshBasicMaterial||(C.receiveShadow=!0,C.userData.noCast||(C.castShadow=!0))});let ze=await d;if(o&&i===null){await l();return}let Xe=ze?Ud():null,ae=ze?bc(ze[0],Xe,{seed:3,baseOpen:.12}):Sc(Mc.grandpa);ae.root.position.set(Dc.x+.35,0,Dc.z-.85),u.add(ae.root);let le=ze?bc(ze[1],Xe,{seed:7,baseOpen:.15}):Sc(Mc.wild);le.root.position.set(Ci.x,0,Ci.z-.85),u.add(le.root);let Te=ze?bc(ze[2],Xe,{seed:11,baseOpen:.02,prop:"clipboard"}):Sc(Mc.curly);Te.root.position.set(-2.55,0,-2.25),u.add(Te.root);let We=ze?[ae,le,Te]:[],Ce=We.map(C=>{let J=new zi(16769736,0,4.5,.42,.9,2);return u.add(J,J.target),{l:J,sc:C}}),Ke=C=>{for(let{l:J,sc:ee}of Ce){let Me=ee.head.getWorldPosition(new N).add(I(0,.1,0)),Re=C.position.clone().sub(Me).setY(0).normalize(),De=I(-Re.z,0,Re.x);J.position.copy(Me).addScaledVector(Re,1.1).addScaledVector(De,.55).add(I(0,.55,0)),J.target.position.copy(Me);let Ne=C.position.distanceTo(Me);J.intensity=1.3*(1-_t(ht(Ne,2.5,6)))}},rt=new Ze;ae.arms.L.hand.add(rt);let fe=new be(fs([[0,0],[.11,0],[.12,.015],[.045,.18],[.038,.19],[.038,.27],[.044,.28]]),x.glass),_e=new be(fs([[0,.01],[.105,.01],[.07,.09],[0,.09]]),new dt({color:xt(He.green,2),toneMapped:!1}));rt.add(fe,_e),rt.position.set(0,-.08,.06),rt.rotation.x=Math.PI;let Se=18,Ee=new xn(new it(.022,8,6),new dt({color:xt(He.green,2.5),toneMapped:!1}),Se);u.add(Ee);let q=16/9,ve=()=>q<.9,Pe=3.3,Le=1.8,Ue=()=>ve()?{lines:["Bingo","du lundi","matin"],width:4.4}:{lines:["Bingo","du lundi matin"],width:8.2},H=Ue(),qe=()=>{let C=Oh.degToRad(m.fov);return Math.max(5.5,H.width/2*1.15/(Math.tan(C/2)*q))},tt=Math.min(1.5,window.devicePixelRatio||1),D=Math.min(.5,tt),E=tt,Y=new _c(r,new Vt(1,1,{type:Zt,samples:4}));Y.addPass(new Qo(u,m));let Q=new Ic(u,m,512,512,void 0,{radius:.45,distanceExponent:1.6,thickness:.9,scale:1.15,samples:8},{lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,samples:8});Q.blendIntensity=.9,Y.addPass(Q);let se=new Cr(Gd);se.uniforms.tDepth.value=Q.depthTexture,se.uniforms.resolution.value=new me(1,1),se.uniforms.cameraNear.value=m.near,se.uniforms.cameraFar.value=m.far,Y.addPass(se);let ye=new Qo(f,m);ye.clear=!1,Y.addPass(ye);let Ie=new Pr(new me(512,512),.55,.45,.92);Y.addPass(Ie),Y.addPass(new vc);let he=10,pe=()=>{let C=window.innerWidth,J=window.innerHeight;q=C/J,m.aspect=q,m.fov=q<.9?64:50,m.updateProjectionMatrix();let ee=E;r.setPixelRatio(ee),r.setSize(C,J,!1),Y.setPixelRatio(ee),Y.setSize(C,J),Ie.resolution.set(C/2,J/2),se.uniforms.resolution.value.set(C*ee,J*ee),he=Math.min(18,.009*Math.min(C,J*1.4)*ee)};pe(),H=Ue();let z=await cy(H.lines,H.width,Pe,Le);if(o&&i===null){await l();return}let Z=hy(u,f,z,.1*(H.width/8.2)),W=Vd(qe(),Pe,Le),ne=new Pt,oe=new N,ie=new N,ue=F.target.glass.getWorldPosition(new N).add(I(0,.42,0)),B=ue.clone().add(I(0,-.2,0)),ge=I(0,2.2,0),ce=I(Ci.x,2,Ci.z-1.6),Ae=I(Ci.x,.95,Ci.z+.15),Oe=k.leverHandle.getWorldPosition(new N),xe=new URLSearchParams(location.search).get("introlook")==="cam";function Je(C){let J=C>st?Math.exp(-(C-st)*.32):0,ee=mn=>(C-st)*5.5+mn,Me=mn=>C>st+.15?Math.abs(Math.sin(ee(mn)))*.3*J:0,Re=mn=>C>st+.15?1-.1*J*Math.max(0,Math.cos(2*ee(mn)))**3+.05*J*Math.sin(2*ee(mn))**2:1,De=C>16.4&&C<st,Ne=m.position,Ge={smile:1,open:.6,brow:.7,look:Ne},ot={smile:-.35,open:.85,brow:1,browAngle:-.4,look:ge},je=_t(ht(C,7.4,8.1))*(1-_t(ht(C,10.4,11))),Ye=Math.sin(ht(C,6.95,7.3)*Math.PI),gt;C>st?gt=Ge:De?gt=ot:C>10.6?gt={smile:1,open:.35,brow:.3,look:ge}:C>7.6?gt={smile:.3,open:.05,brow:-.3,browAngle:.35,squint:.35,look:B}:gt={smile:.9,open:.28+.12*Ye,brow:.3,look:Ne,wink:Ye},ae.pose({t:C,y:Me(0),squash:Re(0),turn:C>16?ft(.15,.7,_t(ht(C,16,17))):.15,L:C>st?[2.8,.5,.2,.2]:[ft(.25,1.35,je),.12+.3*je,ft(.35,.45,je),ft(.3,.95,je)],R:C>st?[2.8,.5,.2,.2]:[.45+.08*Math.sin(C*2),.18,1.2,.5],headTurn:ft(0,.3,je)+(C>16&&C<st?.35:0),headTilt:.2*je,lean:.06*je,frizz:1+J*3,...gt,...xe?{look:Ne}:{}}),rt.rotation.z=ft(0,1.9,_t(ht(C,8.1,8.6))*(1-_t(ht(C,10,10.5)))),rt.visible=C<st;let Ct=C>10.8&&C<16.2?1:0,Lt=Ct*.15*Math.abs(Math.sin(C*15)),Rt=Ct*.15*Math.abs(Math.sin(C*15+1.6)),Wt=_t(ht(C,16.2,17)),Ve;C>st?Ve=Ge:C>16.2?Ve=ot:C>13.3&&C<14.9?Ve={smile:1,open:.55,brow:.8,browAngle:-.3,look:Ne}:Ct?Ve={smile:1,open:.4,brow:.5,browAngle:.3,squint:.2,look:Math.sin(C*1.7)>0?ce:Ae}:Ve={smile:.6,open:.15,brow:.2,look:ce},le.pose({t:C,y:Me(1.2),squash:Re(1.2),turn:ft(0,-.9,Wt),L:C>st?[2.8,.6,.1,.1]:[ft(.85+Lt,1.6,Wt),ft(.05,.2,Wt),ft(1.1,.1,Wt),ft(.4,.1,Wt)],R:C>st?[2.8,.6,.1,.1]:[.85+Rt,.05,1.1,.4],headTurn:ft(.12*Math.sin(C*.8),.2,Wt),headTilt:ft(.12,-.1,Wt),frizz:1+J*3+(Ct?.6:0),...Ve,...xe?{look:Ne}:{}});let sn=_t(ht(C,15.4,16))*(1-_t(ht(C,16.6,17.2))),bt=_t(ht(C,16,16.35)),cn;C>st?cn=Ge:C>16.4?cn={smile:.6,open:.9,brow:1,look:ge}:C>15?cn={smile:.25,open:.08,brow:-.5,browAngle:.6,squint:.25,look:Oe}:cn={smile:.6,open:.15,brow:.1,look:ge},Te.pose({t:C,y:Me(2.1),squash:Re(2.1),turn:ft(.6,.2,_t(ht(C,16.6,17.4))),L:C>17?[ft(.4,2.7,_t(ht(C,17,17.6))),.6,.3,.1]:[ft(.4,ft(1.5,.85,bt),sn),.1,ft(.5,.2,sn),ft(.3,1,sn)],R:C>17?[ft(.4,2.7,_t(ht(C,17,17.6))),.6,.3,.1]:[.4,.15,.5,.3],headTurn:-.25,headTilt:.08,frizz:1+(C>16.4?2:0),...cn,...xe?{look:Ne}:{}})}function $e(C){let ee=_t(ht(C,8.1,8.6))*(1-_t(ht(C,10,10.5)))>.75&&C<10.1;ee&&(rt.updateWorldMatrix(!0,!1),ie.set(0,.28,0).applyMatrix4(rt.matrixWorld));for(let Me=0;Me<Se;Me++){if(!ee)ne.scale.setScalar(1e-4),ne.position.set(0,-10,0);else{let Re=(Me/Se+C*2.2)%1;oe.copy(ie).lerp(ue,Re),oe.y-=Math.sin(Re*Math.PI)*-.12+Re*Re*.05,ne.position.copy(oe),ne.scale.setScalar(1-Re*.3)}ne.updateMatrix(),Ee.setMatrixAt(Me,ne.matrix)}Ee.instanceMatrix.needsUpdate=!0}let Tt=null;function vt(C){R(C),O(C),F.update(C),V(C),k.update(C,A),te(C,S);let J=W(m,C);Tt&&(J=Tt(m)),m.updateMatrixWorld();for(let Ne of We)Ne.setLod(m.position.distanceTo(Ne.root.position)>4.2?1:0);Ce.length&&(u.updateMatrixWorld(),Ke(m)),P.update(C,m),U.update(C),Je(C),u.updateMatrixWorld(),$e(C),Z(C);let ee=C>16.4&&C<st;v.intensity=ee?60+40*Math.sin(C*14):0,v.target.position.set(Math.cos(C*4)*5,0,Math.sin(C*4)*5),y.intensity=C>st?0:1+4*_t(ht(C,9.6,10.4))*(1-ht(C,10.6,12)),M.intensity=C>st?0:1+2.5*_t(ht(C,10.6,11.6)),L.intensity=C>st?5:10,G.intensity=C>st?5:10,T.intensity=C>st?40:10,u.fog.density=ft(.04,.06,_t(ht(C,st,st+2))),se.uniforms.focus.value=m.position.distanceTo(J);let Me=Math.max(_t(ht(C,6,7))*(1-_t(ht(C,9.2,10.2))),_t(ht(C,13,13.8))*(1-_t(ht(C,14.6,15.2))),_t(ht(C,15.8,16.4))*(1-_t(ht(C,17,17.6))));se.uniforms.aperture.value=(C<5.2?.18:.3)+.36*Me,se.uniforms.maxBlur.value=he;let Re=C>=st?Math.max(0,1-(C-st)/.7):0;s.flash.style.opacity=String(Re*.95);let De="";for(let[Ne,Ge,ot]of qv)if(C>=Ne&&C<Ge){let je=Math.floor((C-Ne)*40);De=ot.slice(0,je),s.caption.style.opacity=String(1-ht(C,Ge-.4,Ge))}s.caption.textContent!==De&&(s.caption.textContent=De),s.progress.style.transform=`scaleX(${Ri(C/oa)})`}let pn=22;async function bn(){let C=r.getContext(),J=new Uint8Array(4),ee=()=>C.readPixels(0,0,1,1,C.RGBA,C.UNSIGNED_BYTE,J),Me=window.innerWidth*window.innerHeight,Re=async De=>{E=De,pe();let Ne=[];for(let Ge of[12,17.2,3]){vt(Ge),Fe(),Y.render(),ee();let ot=performance.now();for(let je=1;je<=3;je++)vt(Ge+je*.03),Fe(),Y.render();ee(),Ne.push((performance.now()-ot)/3),await new Promise(je=>{setTimeout(je,0)})}return Ne.sort((Ge,ot)=>Ge-ot),Ne[1]};try{let De=Math.max(.3,tt*.65),Ne=Math.max(.2,tt*.35),Ge=await Re(De),ot=await Re(Ne),je=Me*De*De/1e6,Ye=Me*Ne*Ne/1e6,gt=(Ge-ot)/(je-Ye),Ct=Ge-gt*je;(!(gt>0)||Ct<0)&&(gt=Ge/je,Ct=0);let Lt=Math.max(0,(pn-Ct)/gt),Rt=Math.sqrt(Lt*1e6/Me);E=Math.min(tt,Math.max(D,Math.floor(Rt*20)/20)),window.__introQuality={cHi:Math.round(Ge*10)/10,cLo:Math.round(ot*10)/10,fixe:Math.round(Ct*10)/10,parMpx:Math.round(gt*10)/10,resolution:E}}catch{E=tt}pe()}if(new URLSearchParams(location.search).get("introbench")==="1"){await fy({renderer:r,composer:Y,scene:u,camera:m,ui:s,update:vt,resize:pe,ao:Q,dof:se,bloom:Ie,allShadows:re,nextShadow:Fe,calibrate:bn,maxQ:tt,getQuality:()=>E,setQuality:C=>{E=C}});return}if(i!==null){let C=new URLSearchParams(location.search).get("introdbg")||"";C.includes("nodof")&&(se.uniforms.maxBlur.value=0),C.includes("noao")&&(Q.blendIntensity=0),C.includes("coc")&&(se.uniforms.debug.value=1),C.includes("nocable")&&u.traverse(Re=>{Re.userData.cable&&(Re.visible=!1)});let J=C.includes("noui"),ee=new URLSearchParams(location.search).get("introcam"),Me=null;ee&&(Me=ee.split(",").map(Number),Tt=Re=>{Re.position.set(Me[0],Me[1],Me[2]);let De=I(Me[3],Me[4],Me[5]);return Re.lookAt(De),Me[6]&&(Re.fov=Me[6],Re.updateProjectionMatrix()),De}),vt(i),Me&&Me[7]&&(se.uniforms.aperture.value=Me[7]),re(),C.includes("nodof")&&(se.uniforms.maxBlur.value=0),r.info.autoReset=!1,r.info.reset(),Y.render(),s.loading.remove(),s.sound.hidden=!0,J&&(s.caption.style.display="none",s.skip.style.display="none",s.progress.style.display="none"),window.__introStats={calls:r.info.render.calls,triangles:r.info.render.triangles,geometries:r.info.memory.geometries,textures:r.info.memory.textures,programs:r.info.programs?r.info.programs.length:0},window.__introFrame=i,window.__introScene=u;return}s.sound.hidden=!0,s.canvas.style.visibility="hidden";let ln=wd();ln.prepare();for(let C of[12,17,21.5]){if(o)break;vt(C),re();try{r.extensions.has("KHR_parallel_shader_compile")?await r.compileAsync(u,m):r.compile(u,m)}catch{}Y.render(),await new Promise(J=>{setTimeout(J,0)})}if(o||await bn(),s.skip.removeEventListener("click",a),o){ln.stop(0),s.o.classList.add("leaving"),await new Promise(C=>{setTimeout(C,650)});try{Y.dispose(),r.dispose(),r.forceContextLoss()}catch{}s.o.remove();return}vt(0),re(),Y.render(),s.canvas.style.visibility="",s.loading.remove(),s.sound.hidden=!1;let Tn=!0;try{Tn=localStorage.getItem(kd)!=="off"}catch{}let Ln=0,ui=performance.now(),Xt=Date.now(),kn=document.visibilityState!=="visible",jn=!1,wn,Pi=new Promise(C=>{wn=C}),Dn=()=>{if(!Tn){s.sound.textContent="Activer le son",s.sound.classList.remove("pulse");return}ln.running()?(s.sound.textContent="Couper le son",s.sound.classList.remove("pulse")):(s.sound.textContent="Activer le son",s.sound.classList.add("pulse"))};async function Wi(){let C=await ln.play(Ln);return ln.setMuted(!1),Dn(),C}s.sound.addEventListener("click",async C=>{C.stopPropagation(),Tn&&ln.running()?(Tn=!1,ln.setMuted(!0)):(Tn=!0,await Wi());try{localStorage.setItem(kd,Tn?"on":"off")}catch{}Dn()}),s.o.addEventListener("pointerdown",C=>{C.target.closest(".intro-btn")||Tn&&!ln.running()&&Wi()});function fi(){jn||(jn=!0,ln.stop(.5),clearInterval(Uc),document.removeEventListener("visibilitychange",Dr),document.removeEventListener("keydown",Lr),window.removeEventListener("resize",ds),s.o.classList.add("leaving"),setTimeout(()=>{try{Y.dispose(),r.dispose(),r.forceContextLoss()}catch{}s.o.remove(),wn()},650))}s.skip.addEventListener("click",C=>{C.stopPropagation(),fi()});let Lr=C=>{(C.key==="Escape"||C.key==="Enter")&&fi()};document.addEventListener("keydown",Lr);let ds=()=>{pe();let C=Ue();C.lines.length!==H.lines.length&&(H=C),W=Vd(qe(),Pe,Le)};window.addEventListener("resize",ds);let Dr=()=>{document.visibilityState!=="visible"?(kn=!0,ln.suspend()):(kn=!1,ui=performance.now(),Xt=Date.now(),ln.resume().then(()=>{Tn&&ln.running()&&ln.play(Ln)}))};document.addEventListener("visibilitychange",Dr);let aa=Date.now(),Uc=setInterval(()=>{jn||(!kn&&Date.now()-Xt>n&&fi(),Date.now()-aa>9e4&&fi())},1e3),Us=0,Ur=0,Ns=0,Fs=8,w=new URLSearchParams(location.search).get("introperf")==="1"?document.createElement("p"):null;w&&(w.className="intro-perf",s.o.append(w),window.__introPerf=[],window.__introReadyAt=performance.now());function $(C){if(jn||(requestAnimationFrame($),kn))return;let J=C-ui,ee=Math.min(.1,J/1e3)*t;ui=C,Xt=Date.now();let Me=ln.position();if(Ln=Me!==null&&Tn?Math.max(Ln,Me):Ln+ee,Ln>=oa){fi();return}if(vt(Ln),Fe(),Y.render(),Xt=Date.now(),w&&window.__introPerf.push([Math.round(Ln*100)/100,Math.round(J*10)/10,E]),Fs>0){Fs-=1;return}if(Us+=1,Ur+=J,Ns=Math.max(Ns,J),Us===40){let Re=Ur/Us;w&&(w.textContent=`${Math.round(1e3/Re)} images/s, pire image ${Math.round(Ns)} ms, r\xE9solution ${E.toFixed(2)}`),Re>30&&E>D&&(E=Math.max(D,Math.floor(E*Math.sqrt(pn/Re)*20)/20),pe(),Fs=8),Us=0,Ur=0,Ns=0}}return Dn(),Tn&&Wi(),requestAnimationFrame(C=>{ui=C,$(C)}),Pi}export{bE as playIntro};
/*! meshoptimizer 1.3.0, décodeur de référence en JavaScript pur (meshopt_decoder_reference.js).
 * Licence MIT. Copyright (C) 2016-2026, Arseny Kapoulkine. Décodeur de référence écrit par Jasper St. Pierre.
 * Texte de la licence :
 *
 * MIT License
 *
 * Copyright (c) 2016-2026 Arseny Kapoulkine
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * Copié sans modification du code : utilisé à la place du décodeur WebAssembly, que la politique de sécurité
 * du site (Content-Security-Policy sans 'wasm-unsafe-eval') ne permet pas de charger. */
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
