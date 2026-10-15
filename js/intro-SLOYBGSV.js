var lf=0,Th=1,cf=2;var As=1,hf=2,br=3,di=0,en=1,Bt=2,Jt=0,Tr=1,gn=2,wh=3,Rh=4,wl=5;var jn=100,uf=101,ff=102,df=103,pf=104,Cs=200,mf=201,gf=202,xf=203,Ah=204,Ch=205,Uo=206,_f=207,No=208,vf=209,yf=210,Mf=211,Sf=212,Ef=213,bf=214,Xa=0,qa=1,Ya=2,ar=3,Za=4,$a=5,Ja=6,Ka=7,Ph=0,Tf=1,wf=2,pi=0,Fo=1,Bo=2,Oo=3,is=4,Ho=5,zo=6,Go=7,fh="attached",Rf="detached",Ih=300,ss=301,Ps=302,Rl=303,Al=304,ko=306,sn=1e3,vi=1001,Qa=1002,jt=1003,Af=1004;var Vo=1005;var _n=1006,Cl=1007;var rs=1008;var En=1009,Lh=1010,Dh=1011,wr=1012,Pl=1013,mi=1014,Vn=1015,Kt=1016,Il=1017,Ll=1018,os=1020,Uh=35902,Nh=35899,Fh=1021,Bh=1022,In=1023,Mi=1026,Ri=1027,Dl=1028,Ul=1029,as=1030,Nl=1031;var Fl=1033,Wo=33776,Xo=33777,qo=33778,Yo=33779,Bl=35840,Ol=35841,Hl=35842,zl=35843,Gl=36196,kl=37492,Vl=37496,Wl=37488,Xl=37489,Zo=37490,ql=37491,Yl=37808,Zl=37809,$l=37810,Jl=37811,Kl=37812,Ql=37813,jl=37814,ec=37815,tc=37816,nc=37817,ic=37818,sc=37819,rc=37820,oc=37821,ac=36492,lc=36494,cc=36495,hc=36283,uc=36284,$o=36285,fc=36286;var eo=2300,ja=2301,Va=2302,dh=2303,ph=2400,mh=2401,gh=2402;var Cf=3200;var Jo=0,Pf=1,qi="",Ot="srgb",to="srgb-linear",no="linear",Ft="srgb";var Wa=7680;var If=519,Lf=512,Df=513,Uf=514,dc=515,Nf=516,Ff=517,pc=518,Bf=519,Oh=35044;var Hh="300 es",ci=2e3,lr=2001;function Yd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Zd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function io(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Of(){let i=io("canvas");return i.style.display="block",i}var yu={},cr=null;function so(...i){let e="THREE."+i.shift();cr?cr("log",e,...i):console.log(e,...i)}function Hf(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ot(...i){i=Hf(i);let e="THREE."+i.shift();if(cr)cr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ft(...i){i=Hf(i);let e="THREE."+i.shift();if(cr)cr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ms(...i){let e=i.join(" ");e in yu||(yu[e]=!0,ot(...i))}function zf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Gf={[Xa]:qa,[Ya]:Ja,[Za]:Ka,[ar]:$a,[qa]:Xa,[Ja]:Ya,[Ka]:Za,[$a]:ar},Si=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mu=1234567,Jr=Math.PI/180,Ss=180/Math.PI;function hi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yn[i&255]+yn[i>>8&255]+yn[i>>16&255]+yn[i>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[t&63|128]+yn[t>>8&255]+"-"+yn[t>>16&255]+yn[t>>24&255]+yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]).toLowerCase()}function Ct(i,e,t){return Math.max(e,Math.min(t,i))}function zh(i,e){return(i%e+e)%e}function $d(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Jd(i,e,t){return i!==e?(t-i)/(e-i):0}function Kr(i,e,t){return(1-t)*i+t*e}function Kd(i,e,t,n){return Kr(i,e,1-Math.exp(-t*n))}function Qd(i,e=1){return e-Math.abs(zh(i,e*2)-e)}function jd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function ep(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function tp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function np(i,e){return i+Math.random()*(e-i)}function ip(i){return i*(.5-Math.random())}function sp(i){i!==void 0&&(Mu=i);let e=Mu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function rp(i){return i*Jr}function op(i){return i*Ss}function ap(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function lp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function cp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function hp(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),u=o((e-n)/2),f=r((n-e)/2),p=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*d,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*p,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*p,a*c);break;case"ZYZ":i.set(l*p,l*f,a*h,a*c);break;default:ot("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function li(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function zt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Gh={DEG2RAD:Jr,RAD2DEG:Ss,generateUUID:hi,clamp:Ct,euclideanModulo:zh,mapLinear:$d,inverseLerp:Jd,lerp:Kr,damp:Kd,pingpong:Qd,smoothstep:jd,smootherstep:ep,randInt:tp,randFloat:np,randFloatSpread:ip,seededRandom:sp,degToRad:rp,radToDeg:op,isPowerOfTwo:ap,ceilPowerOfTwo:lp,floorPowerOfTwo:cp,setQuaternionFromProperEuler:hp,normalize:zt,denormalize:li},Yh=class Yh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Yh.prototype.isVector2=!0;var ge=Yh,mn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(d!==x||l!==u||c!==f||h!==p){let m=l*u+c*f+h*p+d*x;m<0&&(u=-u,f=-f,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){let y=Math.acos(m),M=Math.sin(y);g=Math.sin(g*y)/M,a=Math.sin(a*y)/M,l=l*g+u*a,c=c*g+f*a,h=h*g+p*a,d=d*g+x*a}else{l=l*g+u*a,c=c*g+f*a,h=h*g+p*a,d=d*g+x*a;let y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+h*d+l*f-c*u,e[t+1]=l*p+h*u+c*d-a*f,e[t+2]=c*p+h*f+a*u-l*d,e[t+3]=h*p-a*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:ot("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Zh=class Zh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Su.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Su.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this.z=Ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this.z=Ct(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Oc.copy(this).projectOnVector(e),this.sub(Oc)}reflect(e){return this.sub(Oc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Zh.prototype.isVector3=!0;var U=Zh,Oc=new U,Su=new mn,$h=class $h{constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],x=s[0],m=s[3],g=s[6],y=s[1],M=s[4],_=s[7],b=s[2],S=s[5],R=s[8];return r[0]=o*x+a*y+l*b,r[3]=o*m+a*M+l*S,r[6]=o*g+a*_+l*R,r[1]=c*x+h*y+d*b,r[4]=c*m+h*M+d*S,r[7]=c*g+h*_+d*R,r[2]=u*x+f*y+p*b,r[5]=u*m+f*M+p*S,r[8]=u*g+f*_+p*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,p=t*d+n*u+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=d*x,e[1]=(s*c-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=u*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Ms("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Hc.makeScale(e,t)),this}rotate(e){return Ms("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Hc.makeRotation(-e)),this}translate(e,t){return Ms("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Hc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};$h.prototype.isMatrix3=!0;var gt=$h,Hc=new gt,Eu=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bu=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function up(){let i={enabled:!0,workingColorSpace:to,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ft&&(s.r=ki(s.r),s.g=ki(s.g),s.b=ki(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ft&&(s.r=or(s.r),s.g=or(s.g),s.b=or(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===qi?no:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ms("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ms("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[to]:{primaries:e,whitePoint:n,transfer:no,toXYZ:Eu,fromXYZ:bu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:e,whitePoint:n,transfer:Ft,toXYZ:Eu,fromXYZ:bu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}}),i}var It=up();function ki(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function or(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ks,el=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ks===void 0&&(ks=io("canvas")),ks.width=e.width,ks.height=e.height;let s=ks.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ks}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=io("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ki(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ki(t[n]/255)*255):t[n]=ki(t[n]);return{data:t,width:e.width,height:e.height}}else return ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},fp=0,hr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=hi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(zc(s[o].image)):r.push(zc(s[o]))}else r=zc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function zc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?el.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ot("Texture: Unable to serialize Texture."),{})}var dp=0,Gc=new U,Pn=class i extends Si{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=vi,s=vi,r=_n,o=rs,a=In,l=En,c=i.DEFAULT_ANISOTROPY,h=qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=hi(),this.name="",this.source=new hr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Gc).x}get height(){return this.source.getSize(Gc).y}get depth(){return this.source.getSize(Gc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ot(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ot(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ih)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sn:e.x=e.x-Math.floor(e.x);break;case vi:e.x=e.x<0?0:1;break;case Qa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sn:e.y=e.y-Math.floor(e.y);break;case vi:e.y=e.y<0?0:1;break;case Qa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=Ih;Pn.DEFAULT_ANISOTROPY=1;var Jh=class Jh{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,_=(f+1)/2,b=(g+1)/2,S=(h+u)/4,R=(d+x)/4,v=(p+m)/4;return M>_&&M>b?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=S/n,r=R/n):_>b?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=S/s,r=v/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=R/r,s=v/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-p)*(m-p)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(d-x)/y,this.z=(u-h)/y,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this.z=Ct(this.z,e.z,t.z),this.w=Ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this.z=Ct(this.z,e,t),this.w=Ct(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Jh.prototype.isVector4=!0;var Gt=Jh,tl=class extends Si{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Gt(0,0,e,t),this.scissorTest=!1,this.viewport=new Gt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Pn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:_n,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new hr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xt=class extends tl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ro=class extends Pn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var nl=class extends Pn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Tl=class Tl{constructor(e,t,n,s,r,o,a,l,c,h,d,u,f,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,d,u,f,p,x,m)}set(e,t,n,s,r,o,a,l,c,h,d,u,f,p,x,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Vs.setFromMatrixColumn(e,0).length(),r=1/Vs.setFromMatrixColumn(e,1).length(),o=1/Vs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,f=o*d,p=a*h,x=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+p*c,t[5]=u-x*c,t[9]=-a*l,t[2]=x-u*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,p=c*h,x=c*d;t[0]=u+x*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-p,t[6]=x+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,p=c*h,x=c*d;t[0]=u-x*a,t[4]=-o*d,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*h,t[9]=x-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,f=o*d,p=a*h,x=a*d;t[0]=l*h,t[4]=p*c-f,t[8]=u*c+x,t[1]=l*d,t[5]=x*c+u,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,f=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=x-u*d,t[8]=p*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*d+p,t[10]=u-x*d}else if(e.order==="XZY"){let u=o*l,f=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+x,t[5]=o*h,t[9]=f*d-p,t[2]=p*d-f,t[6]=a*h,t[10]=x*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pp,e,mp)}lookAt(e,t,n){let s=this.elements;return On.subVectors(e,t),On.lengthSq()===0&&(On.z=1),On.normalize(),$i.crossVectors(n,On),$i.lengthSq()===0&&(Math.abs(n.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),$i.crossVectors(n,On)),$i.normalize(),da.crossVectors(On,$i),s[0]=$i.x,s[4]=da.x,s[8]=On.x,s[1]=$i.y,s[5]=da.y,s[9]=On.y,s[2]=$i.z,s[6]=da.z,s[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],x=n[6],m=n[10],g=n[14],y=n[3],M=n[7],_=n[11],b=n[15],S=s[0],R=s[4],v=s[8],T=s[12],A=s[1],C=s[5],D=s[9],B=s[13],N=s[2],W=s[6],k=s[10],j=s[14],I=s[3],G=s[7],X=s[11],Q=s[15];return r[0]=o*S+a*A+l*N+c*I,r[4]=o*R+a*C+l*W+c*G,r[8]=o*v+a*D+l*k+c*X,r[12]=o*T+a*B+l*j+c*Q,r[1]=h*S+d*A+u*N+f*I,r[5]=h*R+d*C+u*W+f*G,r[9]=h*v+d*D+u*k+f*X,r[13]=h*T+d*B+u*j+f*Q,r[2]=p*S+x*A+m*N+g*I,r[6]=p*R+x*C+m*W+g*G,r[10]=p*v+x*D+m*k+g*X,r[14]=p*T+x*B+m*j+g*Q,r[3]=y*S+M*A+_*N+b*I,r[7]=y*R+M*C+_*W+b*G,r[11]=y*v+M*D+_*k+b*X,r[15]=y*T+M*B+_*j+b*Q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],p=e[3],x=e[7],m=e[11],g=e[15],y=l*f-c*u,M=a*f-c*d,_=a*u-l*d,b=o*f-c*h,S=o*u-l*h,R=o*d-a*h;return t*(x*y-m*M+g*_)-n*(p*y-m*b+g*S)+s*(p*M-x*b+g*R)-r*(p*_-x*S+m*R)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],p=e[12],x=e[13],m=e[14],g=e[15],y=t*a-n*o,M=t*l-s*o,_=t*c-r*o,b=n*l-s*a,S=n*c-r*a,R=s*c-r*l,v=h*x-d*p,T=h*m-u*p,A=h*g-f*p,C=d*m-u*x,D=d*g-f*x,B=u*g-f*m,N=y*B-M*D+_*C+b*A-S*T+R*v;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/N;return e[0]=(a*B-l*D+c*C)*W,e[1]=(s*D-n*B-r*C)*W,e[2]=(x*R-m*S+g*b)*W,e[3]=(u*S-d*R-f*b)*W,e[4]=(l*A-o*B-c*T)*W,e[5]=(t*B-s*A+r*T)*W,e[6]=(m*_-p*R-g*M)*W,e[7]=(h*R-u*_+f*M)*W,e[8]=(o*D-a*A+c*v)*W,e[9]=(n*A-t*D-r*v)*W,e[10]=(p*S-x*_+g*y)*W,e[11]=(d*_-h*S-f*y)*W,e[12]=(a*T-o*C-l*v)*W,e[13]=(t*C-n*T+s*v)*W,e[14]=(x*M-p*b-m*y)*W,e[15]=(h*b-d*M+u*y)*W,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,p=r*d,x=o*h,m=o*d,g=a*d,y=l*c,M=l*h,_=l*d,b=n.x,S=n.y,R=n.z;return s[0]=(1-(x+g))*b,s[1]=(f+_)*b,s[2]=(p-M)*b,s[3]=0,s[4]=(f-_)*S,s[5]=(1-(u+g))*S,s[6]=(m+y)*S,s[7]=0,s[8]=(p+M)*R,s[9]=(m-y)*R,s[10]=(1-(u+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Vs.set(s[0],s[1],s[2]).length(),a=Vs.set(s[4],s[5],s[6]).length(),l=Vs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),si.copy(this);let c=1/o,h=1/a,d=1/l;return si.elements[0]*=c,si.elements[1]*=c,si.elements[2]*=c,si.elements[4]*=h,si.elements[5]*=h,si.elements[6]*=h,si.elements[8]*=d,si.elements[9]*=d,si.elements[10]*=d,t.setFromRotationMatrix(si),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=ci,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===ci)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===lr)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=ci,l=!1){let c=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),f=-(n+s)/(n-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===ci)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===lr)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Tl.prototype.isMatrix4=!0;var rt=Tl,Vs=new U,si=new rt,pp=new U(0,0,0),mp=new U(1,1,1),$i=new U,da=new U,On=new U,Tu=new rt,wu=new mn,$n=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ct(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Tu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wu.setFromEuler(this),this.setFromQuaternion(wu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$n.DEFAULT_ORDER="XYZ";var oo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},gp=0,Ru=new U,Ws=new mn,Fi=new rt,pa=new U,Or=new U,xp=new U,_p=new mn,Au=new U(1,0,0),Cu=new U(0,1,0),Pu=new U(0,0,1),Iu={type:"added"},vp={type:"removed"},Xs={type:"childadded",child:null},kc={type:"childremoved",child:null},Ht=class i extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new U,t=new $n,n=new mn,s=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new rt},normalMatrix:{value:new gt}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ws.setFromAxisAngle(e,t),this.quaternion.multiply(Ws),this}rotateOnWorldAxis(e,t){return Ws.setFromAxisAngle(e,t),this.quaternion.premultiply(Ws),this}rotateX(e){return this.rotateOnAxis(Au,e)}rotateY(e){return this.rotateOnAxis(Cu,e)}rotateZ(e){return this.rotateOnAxis(Pu,e)}translateOnAxis(e,t){return Ru.copy(e).applyQuaternion(this.quaternion),this.position.add(Ru.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Au,e)}translateY(e){return this.translateOnAxis(Cu,e)}translateZ(e){return this.translateOnAxis(Pu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?pa.copy(e):pa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(Or,pa,this.up):Fi.lookAt(pa,Or,this.up),this.quaternion.setFromRotationMatrix(Fi),s&&(Fi.extractRotation(s.matrixWorld),Ws.setFromRotationMatrix(Fi),this.quaternion.premultiply(Ws.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ft("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Iu),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null):ft("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vp),kc.child=e,this.dispatchEvent(kc),kc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Iu),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,e,xp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,_p,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ht.DEFAULT_UP=new U(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ze=class extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}},yp={type:"move"},ur=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ze;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},kf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},ma={h:0,s:0,l:0};function Vc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Re=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,It.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=It.workingColorSpace){return this.r=e,this.g=t,this.b=n,It.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=It.workingColorSpace){if(e=zh(e,1),t=Ct(t,0,1),n=Ct(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Vc(o,r,e+1/3),this.g=Vc(o,r,e),this.b=Vc(o,r,e-1/3)}return It.colorSpaceToWorking(this,s),this}setStyle(e,t=Ot){function n(r){r!==void 0&&parseFloat(r)<1&&ot("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ot("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);ot("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){let n=kf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ot("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}copyLinearToSRGB(e){return this.r=or(e.r),this.g=or(e.g),this.b=or(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return It.workingToColorSpace(Mn.copy(this),e),Math.round(Ct(Mn.r*255,0,255))*65536+Math.round(Ct(Mn.g*255,0,255))*256+Math.round(Ct(Mn.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=It.workingColorSpace){It.workingToColorSpace(Mn.copy(this),t);let n=Mn.r,s=Mn.g,r=Mn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=It.workingColorSpace){return It.workingToColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=Ot){It.workingToColorSpace(Mn.copy(this),e);let t=Mn.r,n=Mn.g,s=Mn.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ji),this.setHSL(Ji.h+e,Ji.s+t,Ji.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ji),e.getHSL(ma);let n=Kr(Ji.h,ma.h,t),s=Kr(Ji.s,ma.s,t),r=Kr(Ji.l,ma.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mn=new Re;Re.NAMES=kf;var ao=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Re(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Es=class extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ri=new U,Bi=new U,Wc=new U,Oi=new U,qs=new U,Ys=new U,Lu=new U,Xc=new U,qc=new U,Yc=new U,Zc=new Gt,$c=new Gt,Jc=new Gt,Gi=class i{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ri.subVectors(e,t),s.cross(ri);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ri.subVectors(s,t),Bi.subVectors(n,t),Wc.subVectors(e,t);let o=ri.dot(ri),a=ri.dot(Bi),l=ri.dot(Wc),c=Bi.dot(Bi),h=Bi.dot(Wc),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,p=(o*h-a*l)*u;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Oi.x),l.addScaledVector(o,Oi.y),l.addScaledVector(a,Oi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Zc.setScalar(0),$c.setScalar(0),Jc.setScalar(0),Zc.fromBufferAttribute(e,t),$c.fromBufferAttribute(e,n),Jc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Zc,r.x),o.addScaledVector($c,r.y),o.addScaledVector(Jc,r.z),o}static isFrontFacing(e,t,n,s){return ri.subVectors(n,t),Bi.subVectors(e,t),ri.cross(Bi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ri.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),ri.cross(Bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;qs.subVectors(s,n),Ys.subVectors(r,n),Xc.subVectors(e,n);let l=qs.dot(Xc),c=Ys.dot(Xc);if(l<=0&&c<=0)return t.copy(n);qc.subVectors(e,s);let h=qs.dot(qc),d=Ys.dot(qc);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(qs,o);Yc.subVectors(e,r);let f=qs.dot(Yc),p=Ys.dot(Yc);if(p>=0&&f<=p)return t.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(Ys,a);let m=h*p-f*d;if(m<=0&&d-h>=0&&f-p>=0)return Lu.subVectors(r,s),a=(d-h)/(d-h+(f-p)),t.copy(s).addScaledVector(Lu,a);let g=1/(m+x+u);return o=x*g,a=u*g,t.copy(n).addScaledVector(qs,o).addScaledVector(Ys,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ui=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,oi):oi.fromBufferAttribute(r,o),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ga.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ga.copy(n.boundingBox)),ga.applyMatrix4(e.matrixWorld),this.union(ga)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hr),xa.subVectors(this.max,Hr),Zs.subVectors(e.a,Hr),$s.subVectors(e.b,Hr),Js.subVectors(e.c,Hr),Ki.subVectors($s,Zs),Qi.subVectors(Js,$s),xs.subVectors(Zs,Js);let t=[0,-Ki.z,Ki.y,0,-Qi.z,Qi.y,0,-xs.z,xs.y,Ki.z,0,-Ki.x,Qi.z,0,-Qi.x,xs.z,0,-xs.x,-Ki.y,Ki.x,0,-Qi.y,Qi.x,0,-xs.y,xs.x,0];return!Kc(t,Zs,$s,Js,xa)||(t=[1,0,0,0,1,0,0,0,1],!Kc(t,Zs,$s,Js,xa))?!1:(_a.crossVectors(Ki,Qi),t=[_a.x,_a.y,_a.z],Kc(t,Zs,$s,Js,xa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Hi=[new U,new U,new U,new U,new U,new U,new U,new U],oi=new U,ga=new ui,Zs=new U,$s=new U,Js=new U,Ki=new U,Qi=new U,xs=new U,Hr=new U,xa=new U,_a=new U,_s=new U;function Kc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){_s.fromArray(i,r);let a=s.x*Math.abs(_s.x)+s.y*Math.abs(_s.y)+s.z*Math.abs(_s.z),l=e.dot(_s),c=t.dot(_s),h=n.dot(_s);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var nn=new U,va=new ge,Mp=0,At=class extends Si{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Mp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Oh,this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)va.fromBufferAttribute(this,t),va.applyMatrix3(e),this.setXY(t,va.x,va.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix3(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=li(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=zt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=li(t,this.array)),t}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=li(t,this.array)),t}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=li(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=li(t,this.array)),t}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),s=zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),s=zt(s,this.array),r=zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var lo=class extends At{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var co=class extends At{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var at=class extends At{constructor(e,t,n){super(new Float32Array(e),t,n)}},Sp=new ui,zr=new U,Qc=new U,Jn=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Sp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zr.subVectors(e,this.center);let t=zr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(zr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zr.copy(e.center).add(Qc)),this.expandByPoint(zr.copy(e.center).sub(Qc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ep=0,Zn=new rt,jc=new Ht,Ks=new U,Hn=new ui,Gr=new ui,dn=new U,wt=class i extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yd(e)?co:lo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new gt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,t,n){return Zn.makeTranslation(e,t,n),this.applyMatrix4(Zn),this}scale(e,t,n){return Zn.makeScale(e,t,n),this.applyMatrix4(Zn),this}lookAt(e){return jc.lookAt(e),jc.updateMatrix(),this.applyMatrix4(jc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ks).negate(),this.translate(Ks.x,Ks.y,Ks.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new at(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ui);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Hn.setFromBufferAttribute(r),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let n=this.boundingSphere.center;if(Hn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Gr.setFromBufferAttribute(a),this.morphTargetsRelative?(dn.addVectors(Hn.min,Gr.min),Hn.expandByPoint(dn),dn.addVectors(Hn.max,Gr.max),Hn.expandByPoint(dn)):(Hn.expandByPoint(Gr.min),Hn.expandByPoint(Gr.max))}Hn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)dn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(dn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)dn.fromBufferAttribute(a,c),l&&(Ks.fromBufferAttribute(e,c),dn.add(Ks)),s=Math.max(s,n.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new At(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let v=0;v<n.count;v++)a[v]=new U,l[v]=new U;let c=new U,h=new U,d=new U,u=new ge,f=new ge,p=new ge,x=new U,m=new U;function g(v,T,A){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,T),d.fromBufferAttribute(n,A),u.fromBufferAttribute(r,v),f.fromBufferAttribute(r,T),p.fromBufferAttribute(r,A),h.sub(c),d.sub(c),f.sub(u),p.sub(u);let C=1/(f.x*p.y-p.x*f.y);isFinite(C)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(C),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(C),a[v].add(x),a[T].add(x),a[A].add(x),l[v].add(m),l[T].add(m),l[A].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let v=0,T=y.length;v<T;++v){let A=y[v],C=A.start,D=A.count;for(let B=C,N=C+D;B<N;B+=3)g(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let M=new U,_=new U,b=new U,S=new U;function R(v){b.fromBufferAttribute(s,v),S.copy(b);let T=a[v];M.copy(T),M.sub(b.multiplyScalar(b.dot(T))).normalize(),_.crossVectors(S,T);let C=_.dot(l[v])<0?-1:1;o.setXYZW(v,M.x,M.y,M.z,C)}for(let v=0,T=y.length;v<T;++v){let A=y[v],C=A.start,D=A.count;for(let B=C,N=C+D;B<N;B+=3)R(e.getX(B+0)),R(e.getX(B+1)),R(e.getX(B+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new At(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,h=new U,d=new U;if(e)for(let u=0,f=e.count;u<f;u+=3){let p=e.getX(u+0),x=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)dn.fromBufferAttribute(e,t),dn.normalize(),e.setXYZ(t,dn.x,dn.y,dn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let g=0;g<h;g++)u[p++]=c[f++]}return new At(u,h,d)}if(this.index===null)return ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ho=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Oh,this.updateRanges=[],this.version=0,this.uuid=hi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Cn=new U,fr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.applyMatrix4(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.applyNormalMatrix(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.transformDirection(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=li(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=zt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=li(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=li(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=li(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=li(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),s=zt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),s=zt(s,this.array),r=zt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){so("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new At(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){so("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},eh=new U,bp=new U,Tp=new gt,ai=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=eh.subVectors(n,t).cross(bp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(eh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Tp.getNormalMatrix(e),s=this.coplanarPoint(eh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},wp=0,Kn=class extends Si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=hi(),this.name="",this.type="Material",this.blending=Tr,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ah,this.blendDst=Ch,this.blendEquation=jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=If,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wa,this.stencilZFail=Wa,this.stencilZPass=Wa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ot(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ot(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Re().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new ai().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ge().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ge().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},dr=class extends Kn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Qs,kr=new U,js=new U,er=new U,tr=new ge,Vr=new ge,Vf=new rt,ya=new U,Wr=new U,Ma=new U,Du=new ge,th=new ge,Uu=new ge,uo=class extends Ht{constructor(e=new dr){if(super(),this.isSprite=!0,this.type="Sprite",Qs===void 0){Qs=new wt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ho(t,5);Qs.setIndex([0,1,2,0,2,3]),Qs.setAttribute("position",new fr(n,3,0,!1)),Qs.setAttribute("uv",new fr(n,2,3,!1))}this.geometry=Qs,this.material=e,this.center=new ge(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&ft('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),js.setFromMatrixScale(this.matrixWorld),Vf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),er.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&js.multiplyScalar(-er.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Sa(ya.set(-.5,-.5,0),er,o,js,s,r),Sa(Wr.set(.5,-.5,0),er,o,js,s,r),Sa(Ma.set(.5,.5,0),er,o,js,s,r),Du.set(0,0),th.set(1,0),Uu.set(1,1);let a=e.ray.intersectTriangle(ya,Wr,Ma,!1,kr);if(a===null&&(Sa(Wr.set(-.5,.5,0),er,o,js,s,r),th.set(0,1),a=e.ray.intersectTriangle(ya,Ma,Wr,!1,kr),a===null))return;let l=e.ray.origin.distanceTo(kr);l<e.near||l>e.far||t.push({distance:l,point:kr.clone(),uv:Gi.getInterpolation(kr,ya,Wr,Ma,Du,th,Uu,new ge),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Sa(i,e,t,n,s,r){tr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Vr.x=r*tr.x-s*tr.y,Vr.y=s*tr.x+r*tr.y):Vr.copy(tr),i.copy(e),i.x+=Vr.x,i.y+=Vr.y,i.applyMatrix4(Vf)}var zi=new U,nh=new U,Ea=new U,ba=new U,bs=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zi.copy(this.origin).addScaledVector(this.direction,t),zi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){nh.copy(e).add(t).multiplyScalar(.5),Ea.copy(t).sub(e).normalize(),ba.copy(this.origin).sub(nh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Ea),a=ba.dot(this.direction),l=-ba.dot(Ea),c=ba.lengthSq(),h=Math.abs(1-o*o),d,u,f,p;if(h>0)if(d=o*l-a,u=o*a-l,p=r*h,d>=0)if(u>=-p)if(u<=p){let x=1/h;d*=x,u*=x,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(nh).addScaledVector(Ea,u),f}intersectSphere(e,t){if(e.radius<0)return null;zi.subVectors(e.center,this.origin);let n=zi.dot(this.direction),s=zi.dot(zi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,zi)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=e.x-o.x,u=e.y-o.y,f=e.z-o.z,p=t.x-o.x,x=t.y-o.y,m=t.z-o.z,g=n.x-o.x,y=n.y-o.y,M=n.z-o.z,_=Math.abs(l),b=Math.abs(c),S=Math.abs(h),R,v,T,A,C,D,B,N,W,k,j,I;if(_>=b&&_>=S?(T=l,D=d,W=p,I=g,l>=0?(R=c,v=h,A=u,C=f,B=x,N=m,k=y,j=M):(R=h,v=c,A=f,C=u,B=m,N=x,k=M,j=y)):b>=S?(T=c,D=u,W=x,I=y,c>=0?(R=h,v=l,A=f,C=d,B=m,N=p,k=M,j=g):(R=l,v=h,A=d,C=f,B=p,N=m,k=g,j=M)):(T=h,D=f,W=m,I=M,h>=0?(R=l,v=c,A=d,C=u,B=p,N=x,k=g,j=y):(R=c,v=l,A=u,C=d,B=x,N=p,k=y,j=g)),T===0)return null;let G=R/T,X=v/T,Q=1/T,re=A-G*D,pe=C-X*D,Fe=B-G*W,ze=N-X*W,We=k-G*I,oe=j-X*I,le=We*ze-oe*Fe,be=re*oe-pe*We,Ve=Fe*pe-ze*re;if(s){if(le<0||be<0||Ve<0)return null}else if((le<0||be<0||Ve<0)&&(le>0||be>0||Ve>0))return null;let Ie=le+be+Ve;if(Ie===0)return null;let Xe=Q*(le*D+be*W+Ve*I);return(Ie>0?Xe<0:Xe>0)?null:this.at(Xe/Ie,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},yt=class extends Kn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=Ph,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Nu=new rt,vs=new bs,Ta=new Jn,Fu=new U,wa=new U,Ra=new U,Aa=new U,ih=new U,Ca=new U,Bu=new U,Pa=new U,Te=class extends Ht{constructor(e=new wt,t=new yt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Ca.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(ih.fromBufferAttribute(d,e),o?Ca.addScaledVector(ih,h):Ca.addScaledVector(ih.sub(t),h))}t.add(Ca)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ta.copy(n.boundingSphere),Ta.applyMatrix4(r),vs.copy(e.ray).recast(e.near),!(Ta.containsPoint(vs.origin)===!1&&(vs.intersectSphere(Ta,Fu)===null||vs.origin.distanceToSquared(Fu)>(e.far-e.near)**2))&&(Nu.copy(r).invert(),vs.copy(e.ray).applyMatrix4(Nu),!(n.boundingBox!==null&&vs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,vs)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=u.length;p<x;p++){let m=u[p],g=o[m.materialIndex],y=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=y,b=M;_<b;_+=3){let S=a.getX(_),R=a.getX(_+1),v=a.getX(_+2);s=Ia(this,g,e,n,c,h,d,S,R,v),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let y=a.getX(m),M=a.getX(m+1),_=a.getX(m+2);s=Ia(this,o,e,n,c,h,d,y,M,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=u.length;p<x;p++){let m=u[p],g=o[m.materialIndex],y=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=y,b=M;_<b;_+=3){let S=_,R=_+1,v=_+2;s=Ia(this,g,e,n,c,h,d,S,R,v),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let y=m,M=m+1,_=m+2;s=Ia(this,o,e,n,c,h,d,y,M,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Rp(i,e,t,n,s,r,o,a){let l;if(e.side===en?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===di,a),l===null)return null;Pa.copy(a),Pa.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Pa);return c<t.near||c>t.far?null:{distance:c,point:Pa.clone(),object:i}}function Ia(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,wa),i.getVertexPosition(l,Ra),i.getVertexPosition(c,Aa);let h=Rp(i,e,t,n,wa,Ra,Aa,Bu);if(h){let d=new U;Gi.getBarycoord(Bu,wa,Ra,Aa,d),s&&(h.uv=Gi.getInterpolatedAttribute(s,a,l,c,d,new ge)),r&&(h.uv1=Gi.getInterpolatedAttribute(r,a,l,c,d,new ge)),o&&(h.normal=Gi.getInterpolatedAttribute(o,a,l,c,d,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new U,materialIndex:0};Gi.getNormal(wa,Ra,Aa,u.normal),h.face=u,h.barycoord=d}return h}var Xr=new Gt,Ou=new Gt,Hu=new Gt,Ap=new Gt,zu=new rt,La=new U,sh=new Jn,Gu=new rt,rh=new bs,fo=class extends Te{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=fh,this.bindMatrix=new rt,this.bindMatrixInverse=new rt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ui),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,La),this.boundingBox.expandByPoint(La)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Jn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,La),this.boundingSphere.expandByPoint(La)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sh.copy(this.boundingSphere),sh.applyMatrix4(s),e.ray.intersectsSphere(sh)!==!1&&(Gu.copy(s).invert(),rh.copy(e.ray).applyMatrix4(Gu),!(this.boundingBox!==null&&rh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,rh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Gt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===fh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Rf?this.bindMatrixInverse.copy(this.bindMatrix).invert():ot("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Ou.fromBufferAttribute(s.attributes.skinIndex,e),Hu.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Xr.copy(t),t.set(0,0,0,0)):(Xr.set(...t,1),t.set(0,0,0)),Xr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=Hu.getComponent(r);if(o!==0){let a=Ou.getComponent(r);zu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Ap.copy(Xr).applyMatrix4(zu),o)}}return t.isVector4&&(t.w=Xr.w),t.applyMatrix4(this.bindMatrixInverse)}},pr=class extends Ht{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ei=class extends Pn{constructor(e=null,t=1,n=1,s,r,o,a,l,c=jt,h=jt,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ku=new rt,Cp=new rt,po=class i{constructor(e=[],t=[]){this.uuid=hi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){ot("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new rt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new rt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Cp;ku.multiplyMatrices(a,t[r]),ku.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Ei(t,e,e,In,Vn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(ot("Skeleton: No bone found with UUID:",r),o=new pr),this.bones.push(o),this.boneInverses.push(new rt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},mr=class extends At{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},nr=new rt,Vu=new rt,Da=[],Wu=new ui,Pp=new rt,qr=new Te,Yr=new Jn,vn=class extends Te{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new mr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Pp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ui),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,nr),Wu.copy(e.boundingBox).applyMatrix4(nr),this.boundingBox.union(Wu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Jn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,nr),Yr.copy(e.boundingSphere).applyMatrix4(nr),this.boundingSphere.union(Yr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(qr.geometry=this.geometry,qr.material=this.material,qr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yr.copy(this.boundingSphere),Yr.applyMatrix4(n),e.ray.intersectsSphere(Yr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,nr),Vu.multiplyMatrices(n,nr),qr.matrixWorld=Vu,qr.raycast(e,Da);for(let o=0,a=Da.length;o<a;o++){let l=Da[o];l.instanceId=r,l.object=this,t.push(l)}Da.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new mr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ei(new Float32Array(s*this.count),s,this.count,Dl,Vn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ys=new Jn,Ip=new ge(.5,.5),Ua=new U,gr=class{constructor(e=new ai,t=new ai,n=new ai,s=new ai,r=new ai,o=new ai){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ci,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],x=r[9],m=r[10],g=r[11],y=r[12],M=r[13],_=r[14],b=r[15];if(s[0].setComponents(c-o,f-h,g-p,b-y).normalize(),s[1].setComponents(c+o,f+h,g+p,b+y).normalize(),s[2].setComponents(c+a,f+d,g+x,b+M).normalize(),s[3].setComponents(c-a,f-d,g-x,b-M).normalize(),n)s[4].setComponents(l,u,m,_).normalize(),s[5].setComponents(c-l,f-u,g-m,b-_).normalize();else if(s[4].setComponents(c-l,f-u,g-m,b-_).normalize(),t===ci)s[5].setComponents(c+l,f+u,g+m,b+_).normalize();else if(t===lr)s[5].setComponents(l,u,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ys.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ys.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ys)}intersectsSprite(e){ys.center.set(0,0,0);let t=Ip.distanceTo(e.center);return ys.radius=.7071067811865476+t,ys.applyMatrix4(e.matrixWorld),this.intersectsSphere(ys)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ua.x=s.normal.x>0?e.max.x:e.min.x,Ua.y=s.normal.y>0?e.max.y:e.min.y,Ua.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ua)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var xr=class extends Kn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},il=new U,sl=new U,Xu=new rt,Zr=new bs,Na=new Jn,oh=new U,qu=new U,mo=class extends Ht{constructor(e=new wt,t=new xr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)il.fromBufferAttribute(t,s-1),sl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=il.distanceTo(sl);e.setAttribute("lineDistance",new at(n,1))}else ot("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Na.copy(n.boundingSphere),Na.applyMatrix4(s),Na.radius+=r,e.ray.intersectsSphere(Na)===!1)return;Xu.copy(s).invert(),Zr.copy(e.ray).applyMatrix4(Xu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=f,m=p-1;x<m;x+=c){let g=h.getX(x),y=h.getX(x+1),M=Fa(this,e,Zr,l,g,y,x);M&&t.push(M)}if(this.isLineLoop){let x=h.getX(p-1),m=h.getX(f),g=Fa(this,e,Zr,l,x,m,p-1);g&&t.push(g)}}else{let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=f,m=p-1;x<m;x+=c){let g=Fa(this,e,Zr,l,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){let x=Fa(this,e,Zr,l,p-1,f,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Fa(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(il.fromBufferAttribute(a,s),sl.fromBufferAttribute(a,r),t.distanceSqToSegment(il,sl,oh,qu)>n)return;oh.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(oh);if(!(c<e.near||c>e.far))return{distance:c,point:qu.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var bi=class extends Kn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Yu=new rt,xh=new bs,Ba=new Jn,Oa=new U,Vi=class extends Ht{constructor(e=new wt,t=new bi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ba.copy(n.boundingSphere),Ba.applyMatrix4(s),Ba.radius+=r,e.ray.intersectsSphere(Ba)===!1)return;Yu.copy(s).invert(),xh.copy(e.ray).applyMatrix4(Yu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=u,x=f;p<x;p++){let m=c.getX(p);Oa.fromBufferAttribute(d,m),Zu(Oa,m,l,s,e,t,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let p=u,x=f;p<x;p++)Oa.fromBufferAttribute(d,p),Zu(Oa,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Zu(i,e,t,n,s,r,o){let a=xh.distanceSqToPoint(i);if(a<t){let l=new U;xh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var go=class extends Pn{constructor(e=[],t=ss,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},rn=class extends Pn{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ti=class extends Pn{constructor(e,t,n=mi,s,r,o,a=jt,l=jt,c,h=Mi,d=1){if(h!==Mi&&h!==Ri)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new hr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},rl=class extends Ti{constructor(e,t=mi,n=ss,s,r,o=jt,a=jt,l,c=Mi){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},xo=class extends Pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},pt=class i extends wt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,s,o,2),p("x","z","y",1,-1,e,n,-t,s,o,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(h,3)),this.setAttribute("uv",new at(d,2));function p(x,m,g,y,M,_,b,S,R,v,T){let A=_/R,C=b/v,D=_/2,B=b/2,N=S/2,W=R+1,k=v+1,j=0,I=0,G=new U;for(let X=0;X<k;X++){let Q=X*C-B;for(let re=0;re<W;re++){let pe=re*A-D;G[x]=pe*y,G[m]=Q*M,G[g]=N,c.push(G.x,G.y,G.z),G[x]=0,G[m]=0,G[g]=S>0?1:-1,h.push(G.x,G.y,G.z),d.push(re/R),d.push(1-X/v),j+=1}}for(let X=0;X<v;X++)for(let Q=0;Q<R;Q++){let re=u+Q+W*X,pe=u+Q+W*(X+1),Fe=u+(Q+1)+W*(X+1),ze=u+(Q+1)+W*X;l.push(re,pe,ze),l.push(pe,Fe,ze),I+=6}a.addGroup(f,I,T),f+=I,u+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Sn=class i extends wt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=t/2,d=Math.PI/2*e,u=t,f=2*d+u,p=n*2+r,x=s+1,m=new U,g=new U;for(let y=0;y<=p;y++){let M=0,_=0,b=0,S=0;if(y<=n){let T=y/n,A=T*Math.PI/2;_=-h-e*Math.cos(A),b=e*Math.sin(A),S=-e*Math.cos(A),M=T*d}else if(y<=n+r){let T=(y-n)/r;_=-h+T*t,b=e,S=0,M=d+T*u}else{let T=(y-n-r)/n,A=T*Math.PI/2;_=h+e*Math.sin(A),b=e*Math.cos(A),S=e*Math.sin(A),M=d+u+T*d}let R=Math.max(0,Math.min(1,M/f)),v=0;y===0?v=.5/s:y===p&&(v=-.5/s);for(let T=0;T<=s;T++){let A=T/s,C=A*Math.PI*2,D=Math.sin(C),B=Math.cos(C);g.x=-b*B,g.y=_,g.z=b*D,a.push(g.x,g.y,g.z),m.set(-b*B,S,b*D),m.normalize(),l.push(m.x,m.y,m.z),c.push(A+v,R)}if(y>0){let T=(y-1)*x;for(let A=0;A<s;A++){let C=T+A,D=T+A+1,B=y*x+A,N=y*x+A+1;o.push(C,D,B),o.push(D,N,B)}}}this.setIndex(o),this.setAttribute("position",new at(a,3)),this.setAttribute("normal",new at(l,3)),this.setAttribute("uv",new at(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},on=class i extends wt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new U,h=new ge;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=n+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new at(o,3)),this.setAttribute("normal",new at(a,3)),this.setAttribute("uv",new at(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},it=class i extends wt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],p=0,x=[],m=n/2,g=0;y(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new at(d,3)),this.setAttribute("normal",new at(u,3)),this.setAttribute("uv",new at(f,2));function y(){let _=new U,b=new U,S=0,R=(t-e)/n;for(let v=0;v<=r;v++){let T=[],A=v/r,C=A*(t-e)+e;for(let D=0;D<=s;D++){let B=D/s,N=B*l+a,W=Math.sin(N),k=Math.cos(N);b.x=C*W,b.y=-A*n+m,b.z=C*k,d.push(b.x,b.y,b.z),_.set(W,R,k).normalize(),u.push(_.x,_.y,_.z),f.push(B,1-A),T.push(p++)}x.push(T)}for(let v=0;v<s;v++)for(let T=0;T<r;T++){let A=x[T][v],C=x[T+1][v],D=x[T+1][v+1],B=x[T][v+1];(e>0||T!==0)&&(h.push(A,C,B),S+=3),(t>0||T!==r-1)&&(h.push(C,D,B),S+=3)}c.addGroup(g,S,0),g+=S}function M(_){let b=p,S=new ge,R=new U,v=0,T=_===!0?e:t,A=_===!0?1:-1;for(let D=1;D<=s;D++)d.push(0,m*A,0),u.push(0,A,0),f.push(.5,.5),p++;let C=p;for(let D=0;D<=s;D++){let N=D/s*l+a,W=Math.cos(N),k=Math.sin(N);R.x=T*k,R.y=m*A,R.z=T*W,d.push(R.x,R.y,R.z),u.push(0,A,0),S.x=W*.5+.5,S.y=k*.5*A+.5,f.push(S.x,S.y),p++}for(let D=0;D<s;D++){let B=b+D,N=C+D;_===!0?h.push(N,N+1,B):h.push(N+1,N,B),v+=3}c.addGroup(g,v,_===!0?1:2),g+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Wi=class i extends it{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ol=class i extends wt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new at(r,3)),this.setAttribute("normal",new at(r.slice(),3)),this.setAttribute("uv",new at(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let M=new U,_=new U,b=new U;for(let S=0;S<t.length;S+=3)f(t[S+0],M),f(t[S+1],_),f(t[S+2],b),l(M,_,b,y)}function l(y,M,_,b){let S=b+1,R=[];for(let v=0;v<=S;v++){R[v]=[];let T=y.clone().lerp(_,v/S),A=M.clone().lerp(_,v/S),C=S-v;for(let D=0;D<=C;D++)D===0&&v===S?R[v][D]=T:R[v][D]=T.clone().lerp(A,D/C)}for(let v=0;v<S;v++)for(let T=0;T<2*(S-v)-1;T++){let A=Math.floor(T/2);T%2===0?(u(R[v][A+1]),u(R[v+1][A]),u(R[v][A])):(u(R[v][A+1]),u(R[v+1][A+1]),u(R[v+1][A]))}}function c(y){let M=new U;for(let _=0;_<r.length;_+=3)M.x=r[_+0],M.y=r[_+1],M.z=r[_+2],M.normalize().multiplyScalar(y),r[_+0]=M.x,r[_+1]=M.y,r[_+2]=M.z}function h(){let y=new U;for(let M=0;M<r.length;M+=3){y.x=r[M+0],y.y=r[M+1],y.z=r[M+2];let _=m(y)/2/Math.PI+.5,b=g(y)/Math.PI+.5;o.push(_,1-b)}p(),d()}function d(){for(let y=0;y<o.length;y+=6){let M=o[y+0],_=o[y+2],b=o[y+4],S=Math.max(M,_,b),R=Math.min(M,_,b);S>.9&&R<.1&&(M<.2&&(o[y+0]+=1),_<.2&&(o[y+2]+=1),b<.2&&(o[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function f(y,M){let _=y*3;M.x=e[_+0],M.y=e[_+1],M.z=e[_+2]}function p(){let y=new U,M=new U,_=new U,b=new U,S=new ge,R=new ge,v=new ge;for(let T=0,A=0;T<r.length;T+=9,A+=6){y.set(r[T+0],r[T+1],r[T+2]),M.set(r[T+3],r[T+4],r[T+5]),_.set(r[T+6],r[T+7],r[T+8]),S.set(o[A+0],o[A+1]),R.set(o[A+2],o[A+3]),v.set(o[A+4],o[A+5]),b.copy(y).add(M).add(_).divideScalar(3);let C=m(b);x(S,A+0,y,C),x(R,A+2,M,C),x(v,A+4,_,C)}}function x(y,M,_,b){b<0&&y.x===1&&(o[M]=y.x-1),_.x===0&&_.z===0&&(o[M]=b/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var zn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ot("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ge:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new U,s=[],r=[],o=[],a=new U,l=new rt;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new U)}r[0]=new U,o[0]=new U;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Ct(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Ct(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},_r=class extends zn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ge){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},al=class extends _r{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function kh(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var $u=new U,Ju=new U,ah=new kh,lh=new kh,ch=new kh,Wt=class extends zn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new U){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Ju.subVectors(s[0],s[1]).add(s[0]),c=Ju);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:($u.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=$u),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),ah.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,x,m),lh.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,x,m),ch.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,x,m)}else this.curveType==="catmullrom"&&(ah.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),lh.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),ch.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(ah.calc(l),lh.calc(l),ch.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new U().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ku(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function Lp(i,e){let t=1-i;return t*t*e}function Dp(i,e){return 2*(1-i)*i*e}function Up(i,e){return i*i*e}function Qr(i,e,t,n){return Lp(i,e)+Dp(i,t)+Up(i,n)}function Np(i,e){let t=1-i;return t*t*t*e}function Fp(i,e){let t=1-i;return 3*t*t*i*e}function Bp(i,e){return 3*(1-i)*i*i*e}function Op(i,e){return i*i*i*e}function jr(i,e,t,n,s){return Np(i,e)+Fp(i,t)+Bp(i,n)+Op(i,s)}var _o=class extends zn{constructor(e=new ge,t=new ge,n=new ge,s=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ge){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(jr(e,s.x,r.x,o.x,a.x),jr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ll=class extends zn{constructor(e=new U,t=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new U){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(jr(e,s.x,r.x,o.x,a.x),jr(e,s.y,r.y,o.y,a.y),jr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},vo=class extends zn{constructor(e=new ge,t=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ge){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},cl=class extends zn{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},yo=class extends zn{constructor(e=new ge,t=new ge,n=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ge){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Qr(e,s.x,r.x,o.x),Qr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Mo=class extends zn{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Qr(e,s.x,r.x,o.x),Qr(e,s.y,r.y,o.y),Qr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},So=class extends zn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ge){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Ku(a,l.x,c.x,h.x,d.x),Ku(a,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ge().fromArray(s))}return this}},hl=Object.freeze({__proto__:null,ArcCurve:al,CatmullRomCurve3:Wt,CubicBezierCurve:_o,CubicBezierCurve3:ll,EllipseCurve:_r,LineCurve:vo,LineCurve3:cl,QuadraticBezierCurve:yo,QuadraticBezierCurve3:Mo,SplineCurve:So}),ul=class extends zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new hl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new hl[s.type]().fromJSON(s))}return this}},Ts=class extends ul{constructor(e){super(),this.type="Path",this.currentPoint=new ge,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new vo(this.currentPoint.clone(),new ge(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new yo(this.currentPoint.clone(),new ge(e,t),new ge(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new _o(this.currentPoint.clone(),new ge(e,t),new ge(n,s),new ge(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new So(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new _r(e,t,n,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},wi=class extends Ts{constructor(e){super(e),this.uuid=hi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Ts().fromJSON(s))}return this}};function Hp(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Wf(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Wp(i,e,r,t)),i.length>80*t){a=i[0],l=i[1];let h=a,d=l;for(let u=t;u<s;u+=t){let f=i[u],p=i[u+1];f<a&&(a=f),p<l&&(l=p),f>h&&(h=f),p>d&&(d=p)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return Eo(r,o,t,a,l,c,0),o}function Wf(i,e,t,n,s){let r;if(s===t0(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Qu(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Qu(o/n|0,i[o],i[o+1],r);return r&&vr(r,r.next)&&(To(r),r=r.next),r}function ws(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(vr(t,t.next)||$t(t.prev,t,t.next)===0)){if(To(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Eo(i,e,t,n,s,r,o){if(!i)return;!o&&r&&$p(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Gp(i,n,s,r):zp(i)){e.push(l.i,i.i,c.i),To(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=kp(ws(i),e),Eo(i,e,t,n,s,r,2)):o===2&&Vp(i,e,t,n,s,r):Eo(ws(i),e,t,n,s,r,1);break}}}function zp(i){let e=i.prev,t=i,n=i.next;if($t(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(s,r,o),d=Math.min(a,l,c),u=Math.max(s,r,o),f=Math.max(a,l,c),p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&$r(s,a,r,l,o,c,p.x,p.y)&&$t(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Gp(i,e,t,n){let s=i.prev,r=i,o=i.next;if($t(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,f=Math.min(a,l,c),p=Math.min(h,d,u),x=Math.max(a,l,c),m=Math.max(h,d,u),g=_h(f,p,e,t,n),y=_h(x,m,e,t,n),M=i.prevZ,_=i.nextZ;for(;M&&M.z>=g&&_&&_.z<=y;){if(M.x>=f&&M.x<=x&&M.y>=p&&M.y<=m&&M!==s&&M!==o&&$r(a,h,l,d,c,u,M.x,M.y)&&$t(M.prev,M,M.next)>=0||(M=M.prevZ,_.x>=f&&_.x<=x&&_.y>=p&&_.y<=m&&_!==s&&_!==o&&$r(a,h,l,d,c,u,_.x,_.y)&&$t(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;M&&M.z>=g;){if(M.x>=f&&M.x<=x&&M.y>=p&&M.y<=m&&M!==s&&M!==o&&$r(a,h,l,d,c,u,M.x,M.y)&&$t(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;_&&_.z<=y;){if(_.x>=f&&_.x<=x&&_.y>=p&&_.y<=m&&_!==s&&_!==o&&$r(a,h,l,d,c,u,_.x,_.y)&&$t(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function kp(i,e){let t=i;do{let n=t.prev,s=t.next.next;!vr(n,s)&&qf(n,t,t.next,s)&&bo(n,s)&&bo(s,n)&&(e.push(n.i,t.i,s.i),To(t),To(t.next),t=i=s),t=t.next}while(t!==i);return ws(t)}function Vp(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Qp(o,a)){let l=Yf(o,a);o=ws(o,o.next),l=ws(l,l.next),Eo(o,e,t,n,s,r,0),Eo(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Wp(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Wf(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Kp(c))}s.sort(Xp);for(let r=0;r<s.length;r++)t=qp(s[r],t);return t}function Xp(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function qp(i,e){let t=Yp(i,e);if(!t)return e;let n=Yf(t,i);return ws(n,n.next),ws(t,t.next)}function Yp(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(vr(i,t))return t;do{if(vr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Xf(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let d=Math.abs(s-t.y)/(n-t.x);bo(t,i)&&(d<h||d===h&&(t.x>o.x||t.x===o.x&&Zp(o,t)))&&(o=t,h=d)}t=t.next}while(t!==a);return o}function Zp(i,e){return $t(i.prev,i,e.prev)<0&&$t(e.next,i,i.next)<0}function $p(i,e,t,n){let s=i;do s.z===0&&(s.z=_h(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Jp(s)}function Jp(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function _h(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Kp(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Xf(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function $r(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Xf(i,e,t,n,s,r,o,a)}function Qp(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!jp(i,e)&&(bo(i,e)&&bo(e,i)&&e0(i,e)&&($t(i.prev,i,e.prev)||$t(i,e.prev,e))||vr(i,e)&&$t(i.prev,i,i.next)>0&&$t(e.prev,e,e.next)>0)}function $t(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function vr(i,e){return i.x===e.x&&i.y===e.y}function qf(i,e,t,n){let s=za($t(i,e,t)),r=za($t(i,e,n)),o=za($t(t,n,i)),a=za($t(t,n,e));return!!(s!==r&&o!==a||s===0&&Ha(i,t,e)||r===0&&Ha(i,n,e)||o===0&&Ha(t,i,n)||a===0&&Ha(t,e,n))}function Ha(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function za(i){return i>0?1:i<0?-1:0}function jp(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&qf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function bo(i,e){return $t(i.prev,i,i.next)<0?$t(i,e,i.next)>=0&&$t(i,i.prev,e)>=0:$t(i,e,i.prev)<0||$t(i,i.next,e)<0}function e0(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Yf(i,e){let t=vh(i.i,i.x,i.y),n=vh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Qu(i,e,t,n){let s=vh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function To(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function vh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function t0(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var yh=class{static triangulate(e,t,n=2){return Hp(e,t,n)}},yi=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];ju(e),ef(n,e);let o=e.length;t.forEach(ju);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,ef(n,t[l]);let a=yh.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function ju(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function ef(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var wo=class i extends wt{constructor(e=new wi([new ge(.5,.5),new ge(-.5,.5),new ge(-.5,-.5),new ge(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new at(s,3)),this.setAttribute("uv",new at(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:n0,M,_=!1,b,S,R,v;if(g){M=g.getSpacedPoints(h),_=!0,u=!1;let de=g.isCatmullRomCurve3?g.closed:!1;b=g.computeFrenetFrames(h,de),S=new U,R=new U,v=new U}u||(m=0,f=0,p=0,x=0);let T=a.extractPoints(c),A=T.shape,C=T.holes;if(!yi.isClockWise(A)){A=A.reverse();for(let de=0,ve=C.length;de<ve;de++){let Se=C[de];yi.isClockWise(Se)&&(C[de]=Se.reverse())}}function B(de){let Se=10000000000000001e-36,Ee=de[0];for(let Y=1;Y<=de.length;Y++){let ye=Y%de.length,Ae=de[ye],De=Ae.x-Ee.x,Le=Ae.y-Ee.y,H=De*De+Le*Le,$e=Math.max(Math.abs(Ae.x),Math.abs(Ae.y),Math.abs(Ee.x),Math.abs(Ee.y)),ut=Se*$e*$e;if(H<=ut){de.splice(ye,1),Y--;continue}Ee=Ae}}B(A),C.forEach(B);let N=C.length,W=A;for(let de=0;de<N;de++){let ve=C[de];A=A.concat(ve)}function k(de,ve,Se){return ve||ft("ExtrudeGeometry: vec does not exist"),de.clone().addScaledVector(ve,Se)}let j=A.length;function I(de,ve,Se){let Ee,Y,ye,Ae=de.x-ve.x,De=de.y-ve.y,Le=Se.x-de.x,H=Se.y-de.y,$e=Ae*Ae+De*De,ut=Ae*H-De*Le;if(Math.abs(ut)>Number.EPSILON){let L=Math.sqrt($e),E=Math.sqrt(Le*Le+H*H),J=ve.x-De/L,K=ve.y+Ae/L,ae=Se.x-H/E,Me=Se.y+Le/E,Pe=((ae-J)*H-(Me-K)*Le)/(Ae*H-De*Le);Ee=J+Ae*Pe-de.x,Y=K+De*Pe-de.y;let ue=Ee*Ee+Y*Y;if(ue<=2)return new ge(Ee,Y);ye=Math.sqrt(ue/2)}else{let L=!1;Ae>Number.EPSILON?Le>Number.EPSILON&&(L=!0):Ae<-Number.EPSILON?Le<-Number.EPSILON&&(L=!0):Math.sign(De)===Math.sign(H)&&(L=!0),L?(Ee=-De,Y=Ae,ye=Math.sqrt($e)):(Ee=Ae,Y=De,ye=Math.sqrt($e/2))}return new ge(Ee/ye,Y/ye)}let G=[];for(let de=0,ve=W.length,Se=ve-1,Ee=de+1;de<ve;de++,Se++,Ee++)Se===ve&&(Se=0),Ee===ve&&(Ee=0),G[de]=I(W[de],W[Se],W[Ee]);let X=[],Q,re=G.concat();for(let de=0,ve=N;de<ve;de++){let Se=C[de];Q=[];for(let Ee=0,Y=Se.length,ye=Y-1,Ae=Ee+1;Ee<Y;Ee++,ye++,Ae++)ye===Y&&(ye=0),Ae===Y&&(Ae=0),Q[Ee]=I(Se[Ee],Se[ye],Se[Ae]);X.push(Q),re=re.concat(Q)}let pe;if(m===0)pe=yi.triangulateShape(W,C);else{let de=[],ve=[];for(let Se=0;Se<m;Se++){let Ee=Se/m,Y=f*Math.cos(Ee*Math.PI/2),ye=p*Math.sin(Ee*Math.PI/2)+x;for(let Ae=0,De=W.length;Ae<De;Ae++){let Le=k(W[Ae],G[Ae],ye);be(Le.x,Le.y,-Y),Ee===0&&de.push(Le)}for(let Ae=0,De=N;Ae<De;Ae++){let Le=C[Ae];Q=X[Ae];let H=[];for(let $e=0,ut=Le.length;$e<ut;$e++){let L=k(Le[$e],Q[$e],ye);be(L.x,L.y,-Y),Ee===0&&H.push(L)}Ee===0&&ve.push(H)}}pe=yi.triangulateShape(de,ve)}let Fe=pe.length,ze=p+x;for(let de=0;de<j;de++){let ve=u?k(A[de],re[de],ze):A[de];_?(R.copy(b.normals[0]).multiplyScalar(ve.x),S.copy(b.binormals[0]).multiplyScalar(ve.y),v.copy(M[0]).add(R).add(S),be(v.x,v.y,v.z)):be(ve.x,ve.y,0)}for(let de=1;de<=h;de++)for(let ve=0;ve<j;ve++){let Se=u?k(A[ve],re[ve],ze):A[ve];_?(R.copy(b.normals[de]).multiplyScalar(Se.x),S.copy(b.binormals[de]).multiplyScalar(Se.y),v.copy(M[de]).add(R).add(S),be(v.x,v.y,v.z)):be(Se.x,Se.y,d/h*de)}for(let de=m-1;de>=0;de--){let ve=de/m,Se=f*Math.cos(ve*Math.PI/2),Ee=p*Math.sin(ve*Math.PI/2)+x;for(let Y=0,ye=W.length;Y<ye;Y++){let Ae=k(W[Y],G[Y],Ee);be(Ae.x,Ae.y,d+Se)}for(let Y=0,ye=C.length;Y<ye;Y++){let Ae=C[Y];Q=X[Y];for(let De=0,Le=Ae.length;De<Le;De++){let H=k(Ae[De],Q[De],Ee);_?be(H.x,H.y+M[h-1].y,M[h-1].x+Se):be(H.x,H.y,d+Se)}}}We(),oe();function We(){let de=s.length/3;if(u){let ve=0,Se=j*ve;for(let Ee=0;Ee<Fe;Ee++){let Y=pe[Ee];Ve(Y[2]+Se,Y[1]+Se,Y[0]+Se)}ve=h+m*2,Se=j*ve;for(let Ee=0;Ee<Fe;Ee++){let Y=pe[Ee];Ve(Y[0]+Se,Y[1]+Se,Y[2]+Se)}}else{for(let ve=0;ve<Fe;ve++){let Se=pe[ve];Ve(Se[2],Se[1],Se[0])}for(let ve=0;ve<Fe;ve++){let Se=pe[ve];Ve(Se[0]+j*h,Se[1]+j*h,Se[2]+j*h)}}n.addGroup(de,s.length/3-de,0)}function oe(){let de=s.length/3,ve=0;le(W,ve),ve+=W.length;for(let Se=0,Ee=C.length;Se<Ee;Se++){let Y=C[Se];le(Y,ve),ve+=Y.length}n.addGroup(de,s.length/3-de,1)}function le(de,ve){let Se=de.length;for(;--Se>=0;){let Ee=Se,Y=Se-1;Y<0&&(Y=de.length-1);for(let ye=0,Ae=h+m*2;ye<Ae;ye++){let De=j*ye,Le=j*(ye+1),H=ve+Ee+De,$e=ve+Y+De,ut=ve+Y+Le,L=ve+Ee+Le;Ie(H,$e,ut,L)}}}function be(de,ve,Se){l.push(de),l.push(ve),l.push(Se)}function Ve(de,ve,Se){Xe(de),Xe(ve),Xe(Se);let Ee=s.length/3,Y=y.generateTopUV(n,s,Ee-3,Ee-2,Ee-1);ht(Y[0]),ht(Y[1]),ht(Y[2])}function Ie(de,ve,Se,Ee){Xe(de),Xe(ve),Xe(Ee),Xe(ve),Xe(Se),Xe(Ee);let Y=s.length/3,ye=y.generateSideWallUV(n,s,Y-6,Y-3,Y-2,Y-1);ht(ye[0]),ht(ye[1]),ht(ye[3]),ht(ye[1]),ht(ye[2]),ht(ye[3])}function Xe(de){s.push(l[de*3+0]),s.push(l[de*3+1]),s.push(l[de*3+2])}function ht(de){r.push(de.x),r.push(de.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return i0(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new hl[s.type]().fromJSON(s)),new i(n,e.options)}},n0={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new ge(r,o),new ge(a,l),new ge(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[s*3],f=e[s*3+1],p=e[s*3+2],x=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ge(o,1-l),new ge(c,1-d),new ge(u,1-p),new ge(x,1-g)]:[new ge(a,1-l),new ge(h,1-d),new ge(f,1-p),new ge(m,1-g)]}};function i0(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ro=class i extends ol{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},fi=class i extends wt{constructor(e=[new ge(0,-.5),new ge(.5,0),new ge(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Ct(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,d=new U,u=new ge,f=new U,p=new U,x=new U,m=0,g=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,f.x=g*1,f.y=-m,f.z=g*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(p)}for(let y=0;y<=t;y++){let M=n+y*h*s,_=Math.sin(M),b=Math.cos(M);for(let S=0;S<=e.length-1;S++){d.x=e[S].x*_,d.y=e[S].y,d.z=e[S].x*b,o.push(d.x,d.y,d.z),u.x=y/t,u.y=S/(e.length-1),a.push(u.x,u.y);let R=l[3*S+0]*_,v=l[3*S+1],T=l[3*S+0]*b;c.push(R,v,T)}}for(let y=0;y<t;y++)for(let M=0;M<e.length-1;M++){let _=M+y*e.length,b=_,S=_+e.length,R=_+e.length+1,v=_+1;r.push(b,S,v),r.push(R,v,S)}this.setIndex(r),this.setAttribute("position",new at(o,3)),this.setAttribute("uv",new at(a,2)),this.setAttribute("normal",new at(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Ut=class i extends wt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=e/a,u=t/l,f=[],p=[],x=[],m=[];for(let g=0;g<h;g++){let y=g*u-o;for(let M=0;M<c;M++){let _=M*d-r;p.push(_,-y,0),x.push(0,0,1),m.push(M/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){let M=y+c*g,_=y+c*(g+1),b=y+1+c*(g+1),S=y+1+c*g;f.push(M,_,S),f.push(_,b,S)}this.setIndex(f),this.setAttribute("position",new at(p,3)),this.setAttribute("normal",new at(x,3)),this.setAttribute("uv",new at(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var yr=class i extends wt{constructor(e=new wi([new ge(0,.5),new ge(-.5,-.5),new ge(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new at(s,3)),this.setAttribute("normal",new at(r,3)),this.setAttribute("uv",new at(o,2));function c(h){let d=s.length/3,u=h.extractPoints(t),f=u.shape,p=u.holes;yi.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,g=p.length;m<g;m++){let y=p[m];yi.isClockWise(y)===!0&&(p[m]=y.reverse())}let x=yi.triangulateShape(f,p);for(let m=0,g=p.length;m<g;m++){let y=p[m];f=f.concat(y)}for(let m=0,g=f.length;m<g;m++){let y=f[m];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let m=0,g=x.length;m<g;m++){let y=x[m],M=y[0]+d,_=y[1]+d,b=y[2]+d;n.push(M,_,b),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return s0(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function s0(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var lt=class i extends wt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new U,u=new U,f=[],p=[],x=[],m=[];for(let g=0;g<=n;g++){let y=[],M=g/n,_=o+M*a,b=e*Math.cos(_),S=Math.sqrt(e*e-b*b),R=0;g===0&&o===0?R=.5/t:g===n&&l===Math.PI&&(R=-.5/t);for(let v=0;v<=t;v++){let T=v/t,A=s+T*r;d.x=-S*Math.cos(A),d.y=b,d.z=S*Math.sin(A),p.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),m.push(T+R,1-M),y.push(c++)}h.push(y)}for(let g=0;g<n;g++)for(let y=0;y<t;y++){let M=h[g][y+1],_=h[g][y],b=h[g+1][y],S=h[g+1][y+1];(g!==0||o>0)&&f.push(M,_,S),(g!==n-1||l<Math.PI)&&f.push(_,b,S)}this.setIndex(f),this.setAttribute("position",new at(p,3)),this.setAttribute("normal",new at(x,3)),this.setAttribute("uv",new at(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var kt=class i extends wt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new U,f=new U,p=new U;for(let x=0;x<=n;x++){let m=o+x/n*a;for(let g=0;g<=s;g++){let y=g/s*r;f.x=(e+t*Math.cos(m))*Math.cos(y),f.y=(e+t*Math.cos(m))*Math.sin(y),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(g/s),d.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=s;m++){let g=(s+1)*x+m-1,y=(s+1)*(x-1)+m-1,M=(s+1)*(x-1)+m,_=(s+1)*x+m;l.push(g,y,_),l.push(y,M,_)}this.setIndex(l),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(h,3)),this.setAttribute("uv",new at(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Qn=class i extends wt{constructor(e=new Mo(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new U,l=new U,c=new ge,h=new U,d=[],u=[],f=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new at(d,3)),this.setAttribute("normal",new at(u,3)),this.setAttribute("uv",new at(f,2));function x(){for(let M=0;M<t;M++)m(M);m(r===!1?t:0),y(),g()}function m(M){h=e.getPointAt(M/t,h);let _=o.normals[M],b=o.binormals[M];for(let S=0;S<=s;S++){let R=S/s*Math.PI*2,v=Math.sin(R),T=-Math.cos(R);l.x=T*_.x+v*b.x,l.y=T*_.y+v*b.y,l.z=T*_.z+v*b.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function g(){for(let M=1;M<=t;M++)for(let _=1;_<=s;_++){let b=(s+1)*(M-1)+(_-1),S=(s+1)*M+(_-1),R=(s+1)*M+_,v=(s+1)*(M-1)+_;p.push(b,S,v),p.push(S,R,v)}}function y(){for(let M=0;M<=t;M++)for(let _=0;_<=s;_++)c.x=M/t,c.y=_/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new hl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Is(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(tf(s))s.isRenderTargetTexture?(ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(tf(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function bn(i){let e={};for(let t=0;t<i.length;t++){let n=Is(i[t]);for(let s in n)e[s]=n[s]}return e}function tf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function r0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Vh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:It.workingColorSpace}var Ln={clone:Is,merge:bn},o0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,a0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Vt=class extends Kn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=o0,this.fragmentShader=a0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Is(e.uniforms),this.uniformsGroups=r0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Re().setHex(s.value);break;case"v2":this.uniforms[n].value=new ge().fromArray(s.value);break;case"v3":this.uniforms[n].value=new U().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Gt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new gt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new rt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Mr=class extends Vt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ne=class extends Kn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jo,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Mt=class extends Ne{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ge(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ao=class extends Kn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jo,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};var Sr=class extends Kn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},fl=class extends Kn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ir(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function hh(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var es=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},dl=class extends es{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ph,endingEnd:ph}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case mh:r=e,a=2*t-n;break;case gh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case mh:o=e,l=2*n-t;break;case gh:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),x=p*p,m=x*p,g=-u*m+2*u*x-u*p,y=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*p+1,M=(-1-f)*m+(1.5+f)*x+.5*p,_=f*m-f*x;for(let b=0;b!==a;++b)r[b]=g*o[h+b]+y*o[c+b]+M*o[l+b]+_*o[d+b];return r}},pl=class extends es{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},ml=class extends es{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},gl=class extends es{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-t)/(s-t),x=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*p;return r}let u=a*2,f=e-1;for(let p=0;p!==a;++p){let x=o[c+p],m=o[l+p],g=f*u+p*2,y=d[g],M=d[g+1],_=e*u+p*2,b=h[_],S=h[_+1],R=c0(n,t,y,b,s);r[p]=Zf(R,x,M,S,m)}return r}};function Zf(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function l0(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function c0(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=Zf(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let l=l0(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Gn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ir(t,this.TimeBufferType),this.values=ir(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ir(e.times,Array),values:ir(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),hh(e.settings)&&(n.settings={inTangents:ir(e.settings.inTangents,Array),outTangents:ir(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ml(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new pl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new dl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new gl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case eo:t=this.InterpolantFactoryMethodDiscrete;break;case ja:t=this.InterpolantFactoryMethodLinear;break;case Va:t=this.InterpolantFactoryMethodSmooth;break;case dh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ot("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return eo;case this.InterpolantFactoryMethodLinear:return ja;case this.InterpolantFactoryMethodSmooth:return Va;case this.InterpolantFactoryMethodBezier:return dh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;hh(this.settings)&&(nf(this.settings.inTangents,e),nf(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ft("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ft("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){ft("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){ft("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Zd(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){ft("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Va,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){let x=t[d+p];if(x!==t[u+p]||x!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,hh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function nf(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Gn.prototype.ValueTypeName="";Gn.prototype.TimeBufferType=Float32Array;Gn.prototype.ValueBufferType=Float32Array;Gn.prototype.DefaultInterpolation=ja;var ts=class extends Gn{constructor(e,t,n){super(e,t,n)}};ts.prototype.ValueTypeName="bool";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=eo;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var xl=class extends Gn{constructor(e,t,n,s){super(e,t,n,s)}};xl.prototype.ValueTypeName="color";var _l=class extends Gn{constructor(e,t,n,s){super(e,t,n,s)}};_l.prototype.ValueTypeName="number";var vl=class extends es{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)mn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Co=class extends Gn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new vl(this.times,this.values,this.getValueSize(),e)}};Co.prototype.ValueTypeName="quaternion";Co.prototype.InterpolantFactoryMethodSmooth=void 0;var ns=class extends Gn{constructor(e,t,n){super(e,t,n)}};ns.prototype.ValueTypeName="string";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=eo;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var yl=class extends Gn{constructor(e,t,n,s){super(e,t,n,s)}};yl.prototype.ValueTypeName="vector";var Ml=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},$f=new Ml,Sl=class{constructor(e){this.manager=e!==void 0?e:$f,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Sl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Er=class extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Po=class extends Er{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},uh=new rt,sf=new U,rf=new U,Io=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.mapType=En,this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gr,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;sf.setFromMatrixPosition(e.matrixWorld),t.position.copy(sf),rf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(rf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){uh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(uh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===lr||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(uh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ga=new U,ka=new mn,_i=new U,Lo=class extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ga,ka,_i),_i.x===1&&_i.y===1&&_i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ga,ka,_i.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ga,ka,_i),_i.x===1&&_i.y===1&&_i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ga,ka,_i.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ji=new U,of=new ge,af=new ge,pn=class extends Lo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ss*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Jr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ss*2*Math.atan(Math.tan(Jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ji.x,ji.y).multiplyScalar(-e/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ji.x,ji.y).multiplyScalar(-e/ji.z)}getViewSize(e,t){return this.getViewBounds(e,of,af),t.subVectors(af,of)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Jr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Mh=class extends Io{constructor(){super(new pn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Ss*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Xi=class extends Er{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Mh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Sh=class extends Io{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0}},kn=class extends Er{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Sh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Rs=class extends Lo{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var sr=-90,rr=1,El=class extends Ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new pn(sr,rr,e,t);s.layers=this.layers,this.add(s);let r=new pn(sr,rr,e,t);r.layers=this.layers,this.add(r);let o=new pn(sr,rr,e,t);o.layers=this.layers,this.add(o);let a=new pn(sr,rr,e,t);a.layers=this.layers,this.add(a);let l=new pn(sr,rr,e,t);l.layers=this.layers,this.add(l);let c=new pn(sr,rr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ci)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===lr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},bl=class extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Do=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=h0.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function h0(){this._document.hidden===!1&&this.reset()}var Wh="\\[\\]\\.:\\/",u0=new RegExp("["+Wh+"]","g"),Xh="[^"+Wh+"]",f0="[^"+Wh.replace("\\.","")+"]",d0=/((?:WC+[\/:])*)/.source.replace("WC",Xh),p0=/(WCOD+)?/.source.replace("WCOD",f0),m0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xh),g0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xh),x0=new RegExp("^"+d0+p0+m0+g0+"$"),_0=["material","materials","bones","map"],Eh=class{constructor(e,t,n){let s=n||Zt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Zt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(u0,"")}static parseTrackName(e){let t=x0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);_0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ot("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){ft("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ft("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ft("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ft("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ft("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ft("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){ft("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;ft("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ft("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ft("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Zt.Composite=Eh;Zt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Zt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Zt.prototype.GetterByBindingType=[Zt.prototype._getValue_direct,Zt.prototype._getValue_array,Zt.prototype._getValue_arrayElement,Zt.prototype._getValue_toArray];Zt.prototype.SetterByBindingTypeAndVersioning=[[Zt.prototype._setValue_direct,Zt.prototype._setValue_direct_setNeedsUpdate,Zt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_array,Zt.prototype._setValue_array_setNeedsUpdate,Zt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_arrayElement,Zt.prototype._setValue_arrayElement_setNeedsUpdate,Zt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_fromArray,Zt.prototype._setValue_fromArray_setNeedsUpdate,Zt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var gy=new Float32Array(1);var Kh=class Kh{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Kh.prototype.isMatrix2=!0;var bh=Kh;function qh(i,e,t,n){let s=v0(n);switch(t){case Fh:return i*e;case Dl:return i*e/s.components*s.byteLength;case Ul:return i*e/s.components*s.byteLength;case as:return i*e*2/s.components*s.byteLength;case Nl:return i*e*2/s.components*s.byteLength;case Bh:return i*e*3/s.components*s.byteLength;case In:return i*e*4/s.components*s.byteLength;case Fl:return i*e*4/s.components*s.byteLength;case Wo:case Xo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case qo:case Yo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ol:case zl:return Math.max(i,16)*Math.max(e,8)/4;case Bl:case Hl:return Math.max(i,8)*Math.max(e,8)/2;case Gl:case kl:case Wl:case Xl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Vl:case Zo:case ql:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Yl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Zl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case $l:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Kl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ql:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case jl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ec:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case tc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case nc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ic:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case sc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case rc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case oc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ac:case lc:case cc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case hc:case uc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case $o:case fc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function v0(i){switch(i){case En:case Lh:return{byteLength:1,components:1};case wr:case Dh:case Kt:return{byteLength:2,components:1};case Il:case Ll:return{byteLength:2,components:4};case mi:case Pl:case Vn:return{byteLength:4,components:1};case Uh:case Nh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function xd(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function b0(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],x=d[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let x=d[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var T0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,w0=`#ifdef USE_ALPHAHASH
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
#endif`,R0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,A0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,C0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,P0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,I0=`#ifdef USE_AOMAP
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
#endif`,L0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,D0=`#ifdef USE_BATCHING
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
#endif`,U0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,N0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,F0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,B0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,O0=`#ifdef USE_IRIDESCENCE
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
#endif`,H0=`#ifdef USE_BUMPMAP
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
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,W0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,X0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,q0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Y0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Z0=`#define PI 3.141592653589793
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
} // validated`,$0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,J0=`vec3 transformedNormal = objectNormal;
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
#endif`,K0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Q0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,j0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,em=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tm="gl_FragColor = linearToOutputTexel( gl_FragColor );",nm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,im=`#ifdef USE_ENVMAP
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
#endif`,sm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,rm=`#ifdef USE_ENVMAP
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
#endif`,om=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,am=`#ifdef USE_ENVMAP
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
#endif`,lm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,um=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fm=`#ifdef USE_GRADIENTMAP
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
}`,dm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,xm=`#ifdef USE_ENVMAP
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
#endif`,_m=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ym=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sm=`PhysicalMaterial material;
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
#endif`,Em=`uniform sampler2D dfgLUT;
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
}`,bm=`
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
#endif`,Tm=`#if defined( RE_IndirectDiffuse )
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
#endif`,wm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Am=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Im=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Um=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nm=`#if defined( USE_POINTS_UV )
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
#endif`,Fm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Om=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gm=`#ifdef USE_MORPHTARGETS
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
#endif`,km=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ym=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Zm=`#ifdef USE_NORMALMAP
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
#endif`,$m=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Km=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ng=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ig=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,og=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ag=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hg=`float getShadowMask() {
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
}`,ug=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fg=`#ifdef USE_SKINNING
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
#endif`,dg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pg=`#ifdef USE_SKINNING
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
#endif`,mg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_g=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vg=`#ifdef USE_TRANSMISSION
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
#endif`,yg=`#ifdef USE_TRANSMISSION
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
#endif`,Mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Tg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wg=`uniform sampler2D t2D;
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
}`,Rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ag=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ig=`#include <common>
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
}`,Lg=`#if DEPTH_PACKING == 3200
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
}`,Dg=`#define DISTANCE
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
}`,Ug=`#define DISTANCE
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
}`,Ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bg=`uniform float scale;
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
}`,Og=`uniform vec3 diffuse;
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
}`,Hg=`#include <common>
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
}`,zg=`uniform vec3 diffuse;
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
}`,Gg=`#define LAMBERT
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
}`,kg=`#define LAMBERT
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
}`,Vg=`#define MATCAP
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
}`,Wg=`#define MATCAP
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
}`,Xg=`#define NORMAL
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
}`,qg=`#define NORMAL
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
}`,Yg=`#define PHONG
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
}`,Zg=`#define PHONG
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
}`,$g=`#define STANDARD
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
}`,Jg=`#define STANDARD
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
}`,Kg=`#define TOON
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
}`,Qg=`#define TOON
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
}`,jg=`uniform float size;
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
}`,ex=`uniform vec3 diffuse;
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
}`,tx=`#include <common>
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
}`,nx=`uniform vec3 color;
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
}`,ix=`uniform float rotation;
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
}`,sx=`uniform vec3 diffuse;
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
}`,St={alphahash_fragment:T0,alphahash_pars_fragment:w0,alphamap_fragment:R0,alphamap_pars_fragment:A0,alphatest_fragment:C0,alphatest_pars_fragment:P0,aomap_fragment:I0,aomap_pars_fragment:L0,batching_pars_vertex:D0,batching_vertex:U0,begin_vertex:N0,beginnormal_vertex:F0,bsdfs:B0,iridescence_fragment:O0,bumpmap_pars_fragment:H0,clipping_planes_fragment:z0,clipping_planes_pars_fragment:G0,clipping_planes_pars_vertex:k0,clipping_planes_vertex:V0,color_fragment:W0,color_pars_fragment:X0,color_pars_vertex:q0,color_vertex:Y0,common:Z0,cube_uv_reflection_fragment:$0,defaultnormal_vertex:J0,displacementmap_pars_vertex:K0,displacementmap_vertex:Q0,emissivemap_fragment:j0,emissivemap_pars_fragment:em,colorspace_fragment:tm,colorspace_pars_fragment:nm,envmap_fragment:im,envmap_common_pars_fragment:sm,envmap_pars_fragment:rm,envmap_pars_vertex:om,envmap_physical_pars_fragment:xm,envmap_vertex:am,fog_vertex:lm,fog_pars_vertex:cm,fog_fragment:hm,fog_pars_fragment:um,gradientmap_pars_fragment:fm,lightmap_pars_fragment:dm,lights_lambert_fragment:pm,lights_lambert_pars_fragment:mm,lights_pars_begin:gm,lights_toon_fragment:_m,lights_toon_pars_fragment:vm,lights_phong_fragment:ym,lights_phong_pars_fragment:Mm,lights_physical_fragment:Sm,lights_physical_pars_fragment:Em,lights_fragment_begin:bm,lights_fragment_maps:Tm,lights_fragment_end:wm,lightprobes_pars_fragment:Rm,logdepthbuf_fragment:Am,logdepthbuf_pars_fragment:Cm,logdepthbuf_pars_vertex:Pm,logdepthbuf_vertex:Im,map_fragment:Lm,map_pars_fragment:Dm,map_particle_fragment:Um,map_particle_pars_fragment:Nm,metalnessmap_fragment:Fm,metalnessmap_pars_fragment:Bm,morphinstance_vertex:Om,morphcolor_vertex:Hm,morphnormal_vertex:zm,morphtarget_pars_vertex:Gm,morphtarget_vertex:km,normal_fragment_begin:Vm,normal_fragment_maps:Wm,normal_pars_fragment:Xm,normal_pars_vertex:qm,normal_vertex:Ym,normalmap_pars_fragment:Zm,clearcoat_normal_fragment_begin:$m,clearcoat_normal_fragment_maps:Jm,clearcoat_pars_fragment:Km,iridescence_pars_fragment:Qm,opaque_fragment:jm,packing:eg,premultiplied_alpha_fragment:tg,project_vertex:ng,dithering_fragment:ig,dithering_pars_fragment:sg,roughnessmap_fragment:rg,roughnessmap_pars_fragment:og,shadowmap_pars_fragment:ag,shadowmap_pars_vertex:lg,shadowmap_vertex:cg,shadowmask_pars_fragment:hg,skinbase_vertex:ug,skinning_pars_vertex:fg,skinning_vertex:dg,skinnormal_vertex:pg,specularmap_fragment:mg,specularmap_pars_fragment:gg,tonemapping_fragment:xg,tonemapping_pars_fragment:_g,transmission_fragment:vg,transmission_pars_fragment:yg,uv_pars_fragment:Mg,uv_pars_vertex:Sg,uv_vertex:Eg,worldpos_vertex:bg,background_vert:Tg,background_frag:wg,backgroundCube_vert:Rg,backgroundCube_frag:Ag,cube_vert:Cg,cube_frag:Pg,depth_vert:Ig,depth_frag:Lg,distance_vert:Dg,distance_frag:Ug,equirect_vert:Ng,equirect_frag:Fg,linedashed_vert:Bg,linedashed_frag:Og,meshbasic_vert:Hg,meshbasic_frag:zg,meshlambert_vert:Gg,meshlambert_frag:kg,meshmatcap_vert:Vg,meshmatcap_frag:Wg,meshnormal_vert:Xg,meshnormal_frag:qg,meshphong_vert:Yg,meshphong_frag:Zg,meshphysical_vert:$g,meshphysical_frag:Jg,meshtoon_vert:Kg,meshtoon_frag:Qg,points_vert:jg,points_frag:ex,shadow_vert:tx,shadow_frag:nx,sprite_vert:ix,sprite_frag:sx},ke={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},Ci={basic:{uniforms:bn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:St.meshbasic_vert,fragmentShader:St.meshbasic_frag},lambert:{uniforms:bn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Re(0)},envMapIntensity:{value:1}}]),vertexShader:St.meshlambert_vert,fragmentShader:St.meshlambert_frag},phong:{uniforms:bn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:St.meshphong_vert,fragmentShader:St.meshphong_frag},standard:{uniforms:bn([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag},toon:{uniforms:bn([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new Re(0)}}]),vertexShader:St.meshtoon_vert,fragmentShader:St.meshtoon_frag},matcap:{uniforms:bn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:St.meshmatcap_vert,fragmentShader:St.meshmatcap_frag},points:{uniforms:bn([ke.points,ke.fog]),vertexShader:St.points_vert,fragmentShader:St.points_frag},dashed:{uniforms:bn([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:St.linedashed_vert,fragmentShader:St.linedashed_frag},depth:{uniforms:bn([ke.common,ke.displacementmap]),vertexShader:St.depth_vert,fragmentShader:St.depth_frag},normal:{uniforms:bn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:St.meshnormal_vert,fragmentShader:St.meshnormal_frag},sprite:{uniforms:bn([ke.sprite,ke.fog]),vertexShader:St.sprite_vert,fragmentShader:St.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:St.background_vert,fragmentShader:St.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:St.backgroundCube_vert,fragmentShader:St.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:St.cube_vert,fragmentShader:St.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:St.equirect_vert,fragmentShader:St.equirect_frag},distance:{uniforms:bn([ke.common,ke.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:St.distance_vert,fragmentShader:St.distance_frag},shadow:{uniforms:bn([ke.lights,ke.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:St.shadow_vert,fragmentShader:St.shadow_frag}};Ci.physical={uniforms:bn([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag};var mc={r:0,b:0,g:0},rx=new rt,_d=new gt;_d.set(-1,0,0,0,1,0,0,0,1);function ox(i,e,t,n,s,r){let o=new Re(0),a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(y){let M=y.isScene===!0?y.background:null;if(M&&M.isTexture){let _=y.backgroundBlurriness>0;M=e.get(M,_)}return M}function p(y){let M=!1,_=f(y);_===null?m(o,a):_&&_.isColor&&(m(_,1),M=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(y,M){let _=f(M);_&&(_.isCubeTexture||_.mapping===ko)?(c===void 0&&(c=new Te(new pt(1,1,1),new Vt({name:"BackgroundCubeMaterial",uniforms:Is(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,S,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(rx.makeRotationFromEuler(M.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(_d),c.material.toneMapped=It.getTransfer(_.colorSpace)!==Ft,(h!==_||d!==_.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,u=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Te(new Ut(2,2),new Vt({name:"BackgroundMaterial",uniforms:Is(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=It.getTransfer(_.colorSpace)!==Ft,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,u=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,M){y.getRGB(mc,Vh(i)),t.buffers.color.setClear(mc.r,mc.g,mc.b,M,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,M=1){o.set(y),a=M,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:p,addToRenderList:x,dispose:g}}function ax(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(C,D,B,N,W){let k=!1,j=d(C,N,B,D);r!==j&&(r=j,c(r.object)),k=f(C,N,B,W),k&&p(C,N,B,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,_(C,D,B,N),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return i.createVertexArray()}function c(C){return i.bindVertexArray(C)}function h(C){return i.deleteVertexArray(C)}function d(C,D,B,N){let W=N.wireframe===!0,k=n[D.id];k===void 0&&(k={},n[D.id]=k);let j=C.isInstancedMesh===!0?C.id:0,I=k[j];I===void 0&&(I={},k[j]=I);let G=I[B.id];G===void 0&&(G={},I[B.id]=G);let X=G[W];return X===void 0&&(X=u(l()),G[W]=X),X}function u(C){let D=[],B=[],N=[];for(let W=0;W<t;W++)D[W]=0,B[W]=0,N[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:N,object:C,attributes:{},index:null}}function f(C,D,B,N){let W=r.attributes,k=D.attributes,j=0,I=B.getAttributes();for(let G in I)if(I[G].location>=0){let Q=W[G],re=k[G];if(re===void 0&&(G==="instanceMatrix"&&C.instanceMatrix&&(re=C.instanceMatrix),G==="instanceColor"&&C.instanceColor&&(re=C.instanceColor)),Q===void 0||Q.attribute!==re||re&&Q.data!==re.data)return!0;j++}return r.attributesNum!==j||r.index!==N}function p(C,D,B,N){let W={},k=D.attributes,j=0,I=B.getAttributes();for(let G in I)if(I[G].location>=0){let Q=k[G];Q===void 0&&(G==="instanceMatrix"&&C.instanceMatrix&&(Q=C.instanceMatrix),G==="instanceColor"&&C.instanceColor&&(Q=C.instanceColor));let re={};re.attribute=Q,Q&&Q.data&&(re.data=Q.data),W[G]=re,j++}r.attributes=W,r.attributesNum=j,r.index=N}function x(){let C=r.newAttributes;for(let D=0,B=C.length;D<B;D++)C[D]=0}function m(C){g(C,0)}function g(C,D){let B=r.newAttributes,N=r.enabledAttributes,W=r.attributeDivisors;B[C]=1,N[C]===0&&(i.enableVertexAttribArray(C),N[C]=1),W[C]!==D&&(i.vertexAttribDivisor(C,D),W[C]=D)}function y(){let C=r.newAttributes,D=r.enabledAttributes;for(let B=0,N=D.length;B<N;B++)D[B]!==C[B]&&(i.disableVertexAttribArray(B),D[B]=0)}function M(C,D,B,N,W,k,j){j===!0?i.vertexAttribIPointer(C,D,B,W,k):i.vertexAttribPointer(C,D,B,N,W,k)}function _(C,D,B,N){x();let W=N.attributes,k=B.getAttributes(),j=D.defaultAttributeValues;for(let I in k){let G=k[I];if(G.location>=0){let X=W[I];if(X===void 0&&(I==="instanceMatrix"&&C.instanceMatrix&&(X=C.instanceMatrix),I==="instanceColor"&&C.instanceColor&&(X=C.instanceColor)),X!==void 0){let Q=X.normalized,re=X.itemSize,pe=e.get(X);if(pe===void 0)continue;let Fe=pe.buffer,ze=pe.type,We=pe.bytesPerElement,oe=ze===i.INT||ze===i.UNSIGNED_INT||X.gpuType===Pl;if(X.isInterleavedBufferAttribute){let le=X.data,be=le.stride,Ve=X.offset;if(le.isInstancedInterleavedBuffer){for(let Ie=0;Ie<G.locationSize;Ie++)g(G.location+Ie,le.meshPerAttribute);C.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ie=0;Ie<G.locationSize;Ie++)m(G.location+Ie);i.bindBuffer(i.ARRAY_BUFFER,Fe);for(let Ie=0;Ie<G.locationSize;Ie++)M(G.location+Ie,re/G.locationSize,ze,Q,be*We,(Ve+re/G.locationSize*Ie)*We,oe)}else{if(X.isInstancedBufferAttribute){for(let le=0;le<G.locationSize;le++)g(G.location+le,X.meshPerAttribute);C.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let le=0;le<G.locationSize;le++)m(G.location+le);i.bindBuffer(i.ARRAY_BUFFER,Fe);for(let le=0;le<G.locationSize;le++)M(G.location+le,re/G.locationSize,ze,Q,re*We,re/G.locationSize*le*We,oe)}}else if(j!==void 0){let Q=j[I];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(G.location,Q);break;case 3:i.vertexAttrib3fv(G.location,Q);break;case 4:i.vertexAttrib4fv(G.location,Q);break;default:i.vertexAttrib1fv(G.location,Q)}}}}y()}function b(){T();for(let C in n){let D=n[C];for(let B in D){let N=D[B];for(let W in N){let k=N[W];for(let j in k)h(k[j].object),delete k[j];delete N[W]}}delete n[C]}}function S(C){if(n[C.id]===void 0)return;let D=n[C.id];for(let B in D){let N=D[B];for(let W in N){let k=N[W];for(let j in k)h(k[j].object),delete k[j];delete N[W]}}delete n[C.id]}function R(C){for(let D in n){let B=n[D];for(let N in B){let W=B[N];if(W[C.id]===void 0)continue;let k=W[C.id];for(let j in k)h(k[j].object),delete k[j];delete W[C.id]}}}function v(C){for(let D in n){let B=n[D],N=C.isInstancedMesh===!0?C.id:0,W=B[N];if(W!==void 0){for(let k in W){let j=W[k];for(let I in j)h(j[I].object),delete j[I];delete W[k]}delete B[N],Object.keys(B).length===0&&delete n[D]}}}function T(){A(),o=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:A,dispose:b,releaseStatesOfGeometry:S,releaseStatesOfObject:v,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function lx(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function cx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==In&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let v=R===Kt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==En&&R!==Vn&&!v&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(ot("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:_,maxSamples:b,samples:S}}function hx(i){let e=this,t=null,n=0,s=!1,r=!1,o=new ai,a=new gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,g=i.get(d);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,M=y*4,_=g.clippingState||null;l.value=_,_=h(p,u,M,f);for(let b=0;b!==M;++b)_[b]=t[b];g.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,p){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=f+x*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let M=0,_=f;M!==x;++M,_+=4)o.copy(d[M]).applyMatrix4(y,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var Ar=4,ux=6,fx=20,dx=256,Ko=new Rs,Jf=new Re,Qh=null,jh=0,eu=0,tu=!1,px=new U,Ls=new U,Pr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=px}=r;Qh=this._renderer.getRenderTarget(),jh=this._renderer.getActiveCubeFace(),eu=this._renderer.getActiveMipmapLevel(),tu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Qh,jh,eu),this._renderer.xr.enabled=tu,e.scissorTest=!1,Rr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ss||e.mapping===Ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qh=this._renderer.getRenderTarget(),jh=this._renderer.getActiveCubeFace(),eu=this._renderer.getActiveMipmapLevel(),tu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:Kt,format:In,colorSpace:to,depthBuffer:!1},s=Kf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kf(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=mx(r)),this._blurMaterial=xx(r,e,t),this._ggxMaterial=gx(r,e,t)}return s}_compileMaterial(e){let t=new Te(new wt,e);this._renderer.compile(t,Ko)}_sceneToCubeUV(e,t,n,s,r){let l=new pn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Jf),d.toneMapping=pi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Te(new pt,new yt({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,g=!1,y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,g=!0):(m.color.copy(Jf),g=!0);for(let M=0;M<6;M++){let _=M%3;_===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[M],r.y,r.z)):_===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[M]));let b=this._cubeSize;Rr(s,_*b,M>2?b:0,b,b),d.setRenderTarget(s),g&&d.render(x,l),d.render(e,l)}d.toneMapping=f,d.autoClear=u,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ss||e.mapping===Ps;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Rr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ko)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:p}=this,x=this._sizeLods[n],m=3*x*(n>p-Ar?n-p+Ar:0),g=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=p-t,Rr(r,m,g,3*x,2*x),s.setRenderTarget(r),s.render(a,Ko),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,Rr(e,m,g,3*x,2*x),s.setRenderTarget(e),s.render(a,Ko)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-Ar?s-this._lodMax+Ar:0),u=4*(this._cubeSize-h);Rr(t,d,u,3*h,2*h),o.setRenderTarget(t),o.render(l,Ko)}};function mx(i){let e=[],t=[],n=i,s=i-Ar+1+ux;for(let r=0;r<s;r++){let o=Math.pow(2,n);e.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,p=new Float32Array(f*u*d),x=new Float32Array(f*u*d);for(let g=0;g<d;g++){let y=g%3*2/3-1,M=g>2?0:-1,_=[y,M,0,y+2/3,M,0,y+2/3,M+1,0,y,M,0,y+2/3,M+1,0,y,M+1,0];p.set(_,f*u*g);for(let b=0;b<u;b++){let S=h[b*2]*2-1,R=h[b*2+1]*2-1;g===0?Ls.set(1,R,S):g===1?Ls.set(-S,1,-R):g===2?Ls.set(-S,R,1):g===3?Ls.set(-1,R,-S):g===4?Ls.set(-S,-1,R):Ls.set(S,R,-1),Ls.toArray(x,(g*u+b)*f)}}let m=new wt;m.setAttribute("position",new At(p,f)),m.setAttribute("outputDirection",new At(x,f)),t.push(new Te(m,null)),n>Ar&&n--}return{lodMeshes:t,sizeLods:e}}function Kf(i,e,t){let n=new Xt(i,e,t);return n.texture.mapping=ko,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Rr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function gx(i,e,t){return new Vt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:dx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:vc(),fragmentShader:`

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
		`,blending:Jt,depthTest:!1,depthWrite:!1})}function xx(i,e,t){return new Vt({name:"SphericalGaussianBlur",defines:{SAMPLES:fx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:vc(),fragmentShader:`

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
		`,blending:Jt,depthTest:!1,depthWrite:!1})}function Qf(){return new Vt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vc(),fragmentShader:`

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
		`,blending:Jt,depthTest:!1,depthWrite:!1})}function jf(){return new Vt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jt,depthTest:!1,depthWrite:!1})}function vc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var xc=class extends Xt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new go(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new pt(5,5,5),r=new Vt({name:"CubemapFromEquirect",uniforms:Is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:Jt});r.uniforms.tEquirect.value=t;let o=new Te(s,r),a=t.minFilter;return t.minFilter===rs&&(t.minFilter=_n),new El(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function _x(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Rl||f===Al)if(e.has(u)){let p=e.get(u).texture;return a(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let x=new xc(p.height);return x.fromEquirectangularTexture(i,u),e.set(u,x),u.addEventListener("dispose",c),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,p=f===Rl||f===Al,x=f===ss||f===Ps;if(p||x){let m=t.get(u),g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new Pr(i)),m=p?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let y=u.image;return p&&y&&y.height>0||x&&y&&l(y)?(n===null&&(n=new Pr(i)),m=p?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===Rl?u.mapping=ss:f===Al&&(u.mapping=Ps),u}function l(u){let f=0,p=6;for(let x=0;x<p;x++)u[x]!==void 0&&f++;return f===p}function c(u){let f=u.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function vx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ms("WebGLRenderer: "+n+" extension not supported."),s}}}function yx(i,e,t,n){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let p in u.attributes)e.remove(u.attributes[p]);u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)e.update(u[f],i.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,p=d.attributes.position,x=0;if(p===void 0)return;if(f!==null){let y=f.array;x=f.version;for(let M=0,_=y.length;M<_;M+=3){let b=y[M+0],S=y[M+1],R=y[M+2];u.push(b,S,S,R,R,b)}}else{let y=p.array;x=p.version;for(let M=0,_=y.length/3-1;M<_;M+=3){let b=M+0,S=M+1,R=M+2;u.push(b,S,S,R,R,b)}}let m=new(p.count>=65535?co:lo)(u,1);m.version=x;let g=r.get(d);g&&e.remove(g),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Mx(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*o),t.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*o,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let x=0;for(let m=0;m<f;m++)x+=u[m];t.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Sx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:ft("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Ex(i,e,t){let n=new WeakMap,s=new Gt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let T=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],M=0;f===!0&&(M=1),p===!0&&(M=2),x===!0&&(M=3);let _=a.attributes.position.count*M,b=1;_>e.maxTextureSize&&(b=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let S=new Float32Array(_*b*4*d),R=new ro(S,_,b,d);R.type=Vn,R.needsUpdate=!0;let v=M*4;for(let A=0;A<d;A++){let C=m[A],D=g[A],B=y[A],N=_*b*4*A;for(let W=0;W<C.count;W++){let k=W*v;f===!0&&(s.fromBufferAttribute(C,W),S[N+k+0]=s.x,S[N+k+1]=s.y,S[N+k+2]=s.z,S[N+k+3]=0),p===!0&&(s.fromBufferAttribute(D,W),S[N+k+4]=s.x,S[N+k+5]=s.y,S[N+k+6]=s.z,S[N+k+7]=0),x===!0&&(s.fromBufferAttribute(B,W),S[N+k+8]=s.x,S[N+k+9]=s.y,S[N+k+10]=s.z,S[N+k+11]=B.itemSize===4?s.w:1)}}u={count:d,texture:R,size:new ge(_,b)},n.set(a,u),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function bx(i,e,t,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var Tx={[Fo]:"LINEAR_TONE_MAPPING",[Bo]:"REINHARD_TONE_MAPPING",[Oo]:"CINEON_TONE_MAPPING",[is]:"ACES_FILMIC_TONE_MAPPING",[zo]:"AGX_TONE_MAPPING",[Go]:"NEUTRAL_TONE_MAPPING",[Ho]:"CUSTOM_TONE_MAPPING"};function wx(i,e,t,n,s,r){let o=new Xt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new wt;c.setAttribute("position",new at([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new at([0,2,0,0,2,0],2));let h=new Mr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Te(c,h),u=new Rs(-1,1,1,-1,0,1),f=null,p=null,x=!1,m,g=null,y=[],M=!1;this.setSize=function(_,b){o.setSize(_,b),a!==null&&a.setSize(_,b),l!==null&&l.setSize(_,b);for(let S=0;S<y.length;S++){let R=y[S];R.setSize&&R.setSize(_,b)}},this.setEffects=function(_){y=_,M=y.length>0&&y[0].isRenderPass===!0;let b=o.width,S=o.height;y.length>0&&a===null&&(a=new Xt(b,S,{type:Kt,depthBuffer:!1,stencilBuffer:!1}),l=new Xt(b,S,{type:Kt,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<y.length;R++){let v=y[R];v.setSize&&v.setSize(b,S)}},this.begin=function(_,b){if(x||_.toneMapping===pi&&y.length===0)return!1;if(g=b,b!==null){let S=b.width,R=b.height;(o.width!==S||o.height!==R)&&this.setSize(S,R)}return M===!1&&_.setRenderTarget(o),m=_.toneMapping,_.toneMapping=pi,!0},this.hasRenderPass=function(){return M},this.end=function(_,b){_.toneMapping=m,x=!0;let S=o,R=a;for(let v=0;v<y.length;v++){let T=y[v];T.enabled!==!1&&(T.render(_,R,S,b),T.needsSwap!==!1&&(S=R,R=R===a?l:a))}if(f!==_.outputColorSpace||p!==_.toneMapping){f=_.outputColorSpace,p=_.toneMapping,h.defines={},It.getTransfer(f)===Ft&&(h.defines.SRGB_TRANSFER="");let v=Tx[p];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,_.setRenderTarget(g),_.render(d,u),g=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var vd=new Pn,su=new Ti(1,1),yd=new ro,Md=new nl,Sd=new go,ed=[],td=[],nd=new Float32Array(16),id=new Float32Array(9),sd=new Float32Array(4);function Ir(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=ed[s];if(r===void 0&&(r=new Float32Array(s),ed[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function un(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function fn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function yc(i,e){let t=td[e];t===void 0&&(t=new Int32Array(e),td[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Rx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ax(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;i.uniform2fv(this.addr,e),fn(t,e)}}function Cx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(un(t,e))return;i.uniform3fv(this.addr,e),fn(t,e)}}function Px(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;i.uniform4fv(this.addr,e),fn(t,e)}}function Ix(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),fn(t,e)}else{if(un(t,n))return;sd.set(n),i.uniformMatrix2fv(this.addr,!1,sd),fn(t,n)}}function Lx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),fn(t,e)}else{if(un(t,n))return;id.set(n),i.uniformMatrix3fv(this.addr,!1,id),fn(t,n)}}function Dx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),fn(t,e)}else{if(un(t,n))return;nd.set(n),i.uniformMatrix4fv(this.addr,!1,nd),fn(t,n)}}function Ux(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Nx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;i.uniform2iv(this.addr,e),fn(t,e)}}function Fx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;i.uniform3iv(this.addr,e),fn(t,e)}}function Bx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;i.uniform4iv(this.addr,e),fn(t,e)}}function Ox(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Hx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;i.uniform2uiv(this.addr,e),fn(t,e)}}function zx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;i.uniform3uiv(this.addr,e),fn(t,e)}}function Gx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;i.uniform4uiv(this.addr,e),fn(t,e)}}function kx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(su.compareFunction=t.isReversedDepthBuffer()?pc:dc,r=su):r=vd,t.setTexture2D(e||r,s)}function Vx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Md,s)}function Wx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Sd,s)}function Xx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||yd,s)}function qx(i){switch(i){case 5126:return Rx;case 35664:return Ax;case 35665:return Cx;case 35666:return Px;case 35674:return Ix;case 35675:return Lx;case 35676:return Dx;case 5124:case 35670:return Ux;case 35667:case 35671:return Nx;case 35668:case 35672:return Fx;case 35669:case 35673:return Bx;case 5125:return Ox;case 36294:return Hx;case 36295:return zx;case 36296:return Gx;case 35678:case 36198:case 36298:case 36306:case 35682:return kx;case 35679:case 36299:case 36307:return Vx;case 35680:case 36300:case 36308:case 36293:return Wx;case 36289:case 36303:case 36311:case 36292:return Xx}}function Yx(i,e){i.uniform1fv(this.addr,e)}function Zx(i,e){let t=Ir(e,this.size,2);i.uniform2fv(this.addr,t)}function $x(i,e){let t=Ir(e,this.size,3);i.uniform3fv(this.addr,t)}function Jx(i,e){let t=Ir(e,this.size,4);i.uniform4fv(this.addr,t)}function Kx(i,e){let t=Ir(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Qx(i,e){let t=Ir(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function jx(i,e){let t=Ir(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function e_(i,e){i.uniform1iv(this.addr,e)}function t_(i,e){i.uniform2iv(this.addr,e)}function n_(i,e){i.uniform3iv(this.addr,e)}function i_(i,e){i.uniform4iv(this.addr,e)}function s_(i,e){i.uniform1uiv(this.addr,e)}function r_(i,e){i.uniform2uiv(this.addr,e)}function o_(i,e){i.uniform3uiv(this.addr,e)}function a_(i,e){i.uniform4uiv(this.addr,e)}function l_(i,e,t){let n=this.cache,s=e.length,r=yc(t,s);un(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=su:o=vd;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function c_(i,e,t){let n=this.cache,s=e.length,r=yc(t,s);un(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Md,r[o])}function h_(i,e,t){let n=this.cache,s=e.length,r=yc(t,s);un(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Sd,r[o])}function u_(i,e,t){let n=this.cache,s=e.length,r=yc(t,s);un(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||yd,r[o])}function f_(i){switch(i){case 5126:return Yx;case 35664:return Zx;case 35665:return $x;case 35666:return Jx;case 35674:return Kx;case 35675:return Qx;case 35676:return jx;case 5124:case 35670:return e_;case 35667:case 35671:return t_;case 35668:case 35672:return n_;case 35669:case 35673:return i_;case 5125:return s_;case 36294:return r_;case 36295:return o_;case 36296:return a_;case 35678:case 36198:case 36298:case 36306:case 35682:return l_;case 35679:case 36299:case 36307:return c_;case 35680:case 36300:case 36308:case 36293:return h_;case 36289:case 36303:case 36311:case 36292:return u_}}var ru=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=qx(t.type)}},ou=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=f_(t.type)}},au=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},nu=/(\w+)(\])?(\[|\.)?/g;function rd(i,e){i.seq.push(e),i.map[e.id]=e}function d_(i,e,t){let n=i.name,s=n.length;for(nu.lastIndex=0;;){let r=nu.exec(n),o=nu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){rd(t,c===void 0?new ru(a,i,e):new ou(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new au(a),rd(t,d)),t=d}}}var Cr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);d_(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function od(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var p_=37297,m_=0;function g_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var ad=new gt;function x_(i){It._getMatrix(ad,It.workingColorSpace,i);let e=`mat3( ${ad.elements.map(t=>t.toFixed(4))} )`;switch(It.getTransfer(i)){case no:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return ot("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ld(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+g_(i.getShaderSource(e),a)}else return r}function __(i,e){let t=x_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var v_={[Fo]:"Linear",[Bo]:"Reinhard",[Oo]:"Cineon",[is]:"ACESFilmic",[zo]:"AgX",[Go]:"Neutral",[Ho]:"Custom"};function y_(i,e){let t=v_[e];return t===void 0?(ot("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var gc=new U;function M_(){It.getLuminanceCoefficients(gc);let i=gc.x.toFixed(4),e=gc.y.toFixed(4),t=gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function S_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jo).join(`
`)}function E_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function b_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function jo(i){return i!==""}function cd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var T_=/^[ \t]*#include +<([\w\d./]+)>/gm;function lu(i){return i.replace(T_,R_)}var w_=new Map;function R_(i,e){let t=St[e];if(t===void 0){let n=w_.get(e);if(n!==void 0)t=St[n],ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return lu(t)}var A_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ud(i){return i.replace(A_,C_)}function C_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function fd(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var P_={[As]:"SHADOWMAP_TYPE_PCF",[br]:"SHADOWMAP_TYPE_VSM"};function I_(i){return P_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var L_={[ss]:"ENVMAP_TYPE_CUBE",[Ps]:"ENVMAP_TYPE_CUBE",[ko]:"ENVMAP_TYPE_CUBE_UV"};function D_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":L_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var U_={[Ps]:"ENVMAP_MODE_REFRACTION"};function N_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":U_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var F_={[Ph]:"ENVMAP_BLENDING_MULTIPLY",[Tf]:"ENVMAP_BLENDING_MIX",[wf]:"ENVMAP_BLENDING_ADD"};function B_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":F_[i.combine]||"ENVMAP_BLENDING_NONE"}function O_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function H_(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=I_(t),c=D_(t),h=N_(t),d=B_(t),u=O_(t),f=S_(t),p=E_(r),x=s.createProgram(),m,g,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(jo).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(jo).join(`
`),g.length>0&&(g+=`
`)):(m=[fd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jo).join(`
`),g=[fd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pi?"#define TONE_MAPPING":"",t.toneMapping!==pi?St.tonemapping_pars_fragment:"",t.toneMapping!==pi?y_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",St.colorspace_pars_fragment,__("linearToOutputTexel",t.outputColorSpace),M_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(jo).join(`
`)),o=lu(o),o=cd(o,t),o=hd(o,t),a=lu(a),a=cd(a,t),a=hd(a,t),o=ud(o),a=ud(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Hh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let M=y+m+o,_=y+g+a,b=od(s,s.VERTEX_SHADER,M),S=od(s,s.FRAGMENT_SHADER,_);s.attachShader(x,b),s.attachShader(x,S),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(C){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(x)||"",B=s.getShaderInfoLog(b)||"",N=s.getShaderInfoLog(S)||"",W=D.trim(),k=B.trim(),j=N.trim(),I=!0,G=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(I=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,b,S);else{let X=ld(s,b,"vertex"),Q=ld(s,S,"fragment");ft("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+W+`
`+X+`
`+Q)}else W!==""?ot("WebGLProgram: Program Info Log:",W):(k===""||j==="")&&(G=!1);G&&(C.diagnostics={runnable:I,programLog:W,vertexShader:{log:k,prefix:m},fragmentShader:{log:j,prefix:g}})}s.deleteShader(b),s.deleteShader(S),v=new Cr(s,x),T=b_(s,x)}let v;this.getUniforms=function(){return v===void 0&&R(this),v};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(x,p_)),A},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=m_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=S,this}var z_=0,cu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new hu(e),t.set(e,n)),n}},hu=class{constructor(e){this.id=z_++,this.code=e,this.usedTimes=0}};function G_(i){return i===as||i===Zo||i===$o}function k_(i,e,t,n,s,r){let o=new oo,a=new cu,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function x(v,T,A,C,D,B){let N=C.fog,W=D.geometry,k=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?C.environment:null,j=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,I=e.get(v.envMap||k,j),G=I&&I.mapping===ko?I.image.height:null,X=f[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&ot("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let Q=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,re=Q!==void 0?Q.length:0,pe=0;W.morphAttributes.position!==void 0&&(pe=1),W.morphAttributes.normal!==void 0&&(pe=2),W.morphAttributes.color!==void 0&&(pe=3);let Fe,ze,We,oe;if(X){let Nt=Ci[X];Fe=Nt.vertexShader,ze=Nt.fragmentShader}else{Fe=v.vertexShader,ze=v.fragmentShader;let Nt=a.getVertexShaderStage(v),Lt=a.getFragmentShaderStage(v);a.update(v,Nt,Lt),We=Nt.id,oe=Lt.id}let le=i.getRenderTarget(),be=i.state.buffers.depth.getReversed(),Ve=D.isInstancedMesh===!0,Ie=D.isBatchedMesh===!0,Xe=!!v.map,ht=!!v.matcap,de=!!I,ve=!!v.aoMap,Se=!!v.lightMap,Ee=!!v.bumpMap&&v.wireframe===!1,Y=!!v.normalMap,ye=!!v.displacementMap,Ae=!!v.emissiveMap,De=!!v.metalnessMap,Le=!!v.roughnessMap,H=v.anisotropy>0,$e=v.clearcoat>0,ut=v.dispersion>0,L=v.retroreflectivity>0,E=v.iridescence>0,J=v.sheen>0,K=v.transmission>0,ae=H&&!!v.anisotropyMap,Me=$e&&!!v.clearcoatMap,Pe=$e&&!!v.clearcoatNormalMap,ue=$e&&!!v.clearcoatRoughnessMap,me=E&&!!v.iridescenceMap,O=E&&!!v.iridescenceThicknessMap,q=J&&!!v.sheenColorMap,z=J&&!!v.sheenRoughnessMap,ee=!!v.specularMap,te=!!v.specularColorMap,ne=!!v.specularIntensityMap,fe=K&&!!v.transmissionMap,F=K&&!!v.thicknessMap,_e=!!v.gradientMap,he=!!v.alphaMap,Ce=v.alphaTest>0,Ue=!!v.alphaHash,xe=!!v.extensions,Ke=pi;v.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Ke=i.toneMapping);let Qe={shaderID:X,shaderType:v.type,shaderName:v.name,vertexShader:Fe,fragmentShader:ze,defines:v.defines,customVertexShaderID:We,customFragmentShaderID:oe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:Ie,batchingColor:Ie&&D._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&D.instanceColor!==null,instancingMorph:Ve&&D.morphTexture!==null,outputColorSpace:le===null?i.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:It.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Xe,matcap:ht,envMap:de,envMapMode:de&&I.mapping,envMapCubeUVHeight:G,aoMap:ve,lightMap:Se,bumpMap:Ee,normalMap:Y,displacementMap:ye,emissiveMap:Ae,normalMapObjectSpace:Y&&v.normalMapType===Pf,normalMapTangentSpace:Y&&v.normalMapType===Jo,packedNormalMap:Y&&v.normalMapType===Jo&&G_(v.normalMap.format),metalnessMap:De,roughnessMap:Le,anisotropy:H,anisotropyMap:ae,clearcoat:$e,clearcoatMap:Me,clearcoatNormalMap:Pe,clearcoatRoughnessMap:ue,dispersion:ut,retroreflection:L,iridescence:E,iridescenceMap:me,iridescenceThicknessMap:O,sheen:J,sheenColorMap:q,sheenRoughnessMap:z,specularMap:ee,specularColorMap:te,specularIntensityMap:ne,transmission:K,transmissionMap:fe,thicknessMap:F,gradientMap:_e,opaque:v.transparent===!1&&v.blending===Tr&&v.alphaToCoverage===!1,alphaMap:he,alphaTest:Ce,alphaHash:Ue,combine:v.combine,mapUv:Xe&&p(v.map.channel),aoMapUv:ve&&p(v.aoMap.channel),lightMapUv:Se&&p(v.lightMap.channel),bumpMapUv:Ee&&p(v.bumpMap.channel),normalMapUv:Y&&p(v.normalMap.channel),displacementMapUv:ye&&p(v.displacementMap.channel),emissiveMapUv:Ae&&p(v.emissiveMap.channel),metalnessMapUv:De&&p(v.metalnessMap.channel),roughnessMapUv:Le&&p(v.roughnessMap.channel),anisotropyMapUv:ae&&p(v.anisotropyMap.channel),clearcoatMapUv:Me&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:O&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:q&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:z&&p(v.sheenRoughnessMap.channel),specularMapUv:ee&&p(v.specularMap.channel),specularColorMapUv:te&&p(v.specularColorMap.channel),specularIntensityMapUv:ne&&p(v.specularIntensityMap.channel),transmissionMapUv:fe&&p(v.transmissionMap.channel),thicknessMapUv:F&&p(v.thicknessMap.channel),alphaMapUv:he&&p(v.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Y||H),vertexNormals:!!W.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!W.attributes.uv&&(Xe||he),fog:!!N,useFog:v.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||W.attributes.normal===void 0&&Y===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:be,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:W.attributes.position!==void 0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:pe,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ke,decodeVideoTexture:Xe&&v.map.isVideoTexture===!0&&It.getTransfer(v.map.colorSpace)===Ft,decodeVideoTextureEmissive:Ae&&v.emissiveMap.isVideoTexture===!0&&It.getTransfer(v.emissiveMap.colorSpace)===Ft,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Bt,flipSided:v.side===en,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:xe&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&v.extensions.multiDraw===!0||Ie)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Qe.vertexUv1s=l.has(1),Qe.vertexUv2s=l.has(2),Qe.vertexUv3s=l.has(3),l.clear(),Qe}function m(v){let T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(let A in v.defines)T.push(A),T.push(v.defines[A]);return v.isRawShaderMaterial===!1&&(g(T,v),y(T,v),T.push(i.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function g(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numSunLights),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numSunLightShadows),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function y(v,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function M(v){let T=f[v.type],A;if(T){let C=Ci[T];A=Ln.clone(C.uniforms)}else A=v.uniforms;return A}function _(v,T){let A=h.get(T);return A!==void 0?++A.usedTimes:(A=new H_(i,T,v,s),c.push(A),h.set(T,A)),A}function b(v){if(--v.usedTimes===0){let T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function S(v){a.remove(v)}function R(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:M,acquireProgram:_,releaseProgram:b,releaseShaderCache:S,programs:c,dispose:R}}function V_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function W_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function dd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function pd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,p,x,m,g){let y=i[e];return y===void 0?(y={id:u.id,object:u,geometry:f,material:p,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:g},i[e]=y):(y.id=u.id,y.object=u,y.geometry=f,y.material=p,y.materialVariant=o(u),y.groupOrder=x,y.renderOrder=u.renderOrder,y.z=m,y.group=g),e++,y}function l(u,f,p,x,m,g,y){y.reversedDepth===!0&&(m=-m);let M=a(u,f,p,x,m,g);p.transmission>0?n.push(M):p.transparent===!0?s.push(M):t.push(M)}function c(u,f,p,x,m,g){let y=a(u,f,p,x,m,g);p.transmission>0?n.unshift(y):p.transparent===!0?s.unshift(y):t.unshift(y)}function h(u,f){t.length>1&&t.sort(u||W_),n.length>1&&n.sort(f||dd),s.length>1&&s.sort(f||dd)}function d(){for(let u=e,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function X_(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new pd,i.set(n,[o])):s>=r.length?(o=new pd,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function q_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new U,color:new Re};break;case"SpotLight":t={position:new U,direction:new U,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function Y_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Z_=0;function $_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function J_(i){let e=new q_,t=Y_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);let s=new U,r=new rt,o=new rt;function a(c){let h=0,d=0,u=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let f=0,p=0,x=0,m=0,g=0,y=0,M=0,_=0,b=0,S=0,R=0,v=0,T=0,A=0;c.sort($_);for(let D=0,B=c.length;D<B;D++){let N=c[D],W=N.color,k=N.intensity,j=N.distance,I=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===as?I=N.shadow.map.texture:I=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=W.r*k,d+=W.g*k,u+=W.b*k;else if(N.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(N.sh.coefficients[G],k);A++}else if(N.isSunLight){let G=e.get(N);if(G.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let X=N.shadow,Q=t.get(N);Q.shadowIntensity=X.intensity,Q.shadowBias=X.bias,Q.shadowNormalBias=X.normalBias,Q.shadowRadius=X.radius,Q.shadowMapSize.copy(X.mapSize).multiply(X.getFrameExtents()),n.sunShadow[p]=Q,n.sunShadowMap[p]=I;let re=X.getViewportCount();for(let pe=0;pe<re;pe++)n.sunShadowMatrix[x+pe]=X.getMatrix(pe),n.sunShadowCascade[x+pe]=X._cascadeData[pe];x+=re,p++}n.sun[f]=G,f++}else if(N.isDirectionalLight){let G=e.get(N);if(G.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let X=N.shadow,Q=t.get(N);Q.shadowIntensity=X.intensity,Q.shadowBias=X.bias,Q.shadowNormalBias=X.normalBias,Q.shadowRadius=X.radius,Q.shadowMapSize=X.mapSize,n.directionalShadow[m]=Q,n.directionalShadowMap[m]=I,n.directionalShadowMatrix[m]=N.shadow.matrix,b++}n.directional[m]=G,m++}else if(N.isSpotLight){let G=e.get(N);G.position.setFromMatrixPosition(N.matrixWorld),G.color.copy(W).multiplyScalar(k),G.distance=j,G.coneCos=Math.cos(N.angle),G.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),G.decay=N.decay,n.spot[y]=G;let X=N.shadow;if(N.map&&(n.spotLightMap[v]=N.map,v++,X.updateMatrices(N),N.castShadow&&T++),n.spotLightMatrix[y]=X.matrix,N.castShadow){let Q=t.get(N);Q.shadowIntensity=X.intensity,Q.shadowBias=X.bias,Q.shadowNormalBias=X.normalBias,Q.shadowRadius=X.radius,Q.shadowMapSize=X.mapSize,n.spotShadow[y]=Q,n.spotShadowMap[y]=I,R++}y++}else if(N.isRectAreaLight){let G=e.get(N);G.color.copy(W).multiplyScalar(k),G.halfWidth.set(N.width*.5,0,0),G.halfHeight.set(0,N.height*.5,0),n.rectArea[M]=G,M++}else if(N.isPointLight){let G=e.get(N);if(G.color.copy(N.color).multiplyScalar(N.intensity),G.distance=N.distance,G.decay=N.decay,N.castShadow){let X=N.shadow,Q=t.get(N);Q.shadowIntensity=X.intensity,Q.shadowBias=X.bias,Q.shadowNormalBias=X.normalBias,Q.shadowRadius=X.radius,Q.shadowMapSize=X.mapSize,Q.shadowCameraNear=X.camera.near,Q.shadowCameraFar=X.camera.far,n.pointShadow[g]=Q,n.pointShadowMap[g]=I,n.pointShadowMatrix[g]=N.shadow.matrix,S++}n.point[g]=G,g++}else if(N.isHemisphereLight){let G=e.get(N);G.skyColor.copy(N.color).multiplyScalar(k),G.groundColor.copy(N.groundColor).multiplyScalar(k),n.hemi[_]=G,_++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ke.LTC_FLOAT_1,n.rectAreaLTC2=ke.LTC_FLOAT_2):(n.rectAreaLTC1=ke.LTC_HALF_1,n.rectAreaLTC2=ke.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let C=n.hash;(C.sunLength!==f||C.directionalLength!==m||C.pointLength!==g||C.spotLength!==y||C.rectAreaLength!==M||C.hemiLength!==_||C.numSunShadows!==p||C.numDirectionalShadows!==b||C.numPointShadows!==S||C.numSpotShadows!==R||C.numSpotMaps!==v||C.numLightProbes!==A)&&(n.sun.length=f,n.directional.length=m,n.spot.length=y,n.rectArea.length=M,n.point.length=g,n.hemi.length=_,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+v-T,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,C.sunLength=f,C.directionalLength=m,C.pointLength=g,C.spotLength=y,C.rectAreaLength=M,C.hemiLength=_,C.numSunShadows=p,C.numDirectionalShadows=b,C.numPointShadows=S,C.numSpotShadows=R,C.numSpotMaps=v,C.numLightProbes=A,n.version=Z_++)}function l(c,h){let d=0,u=0,f=0,p=0,x=0,m=0,g=h.matrixWorldInverse;for(let y=0,M=c.length;y<M;y++){let _=c[y];if(_.isSunLight){let b=n.sun[d];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(g),d++}else if(_.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),u++}else if(_.isSpotLight){let b=n.spot[p];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),p++}else if(_.isRectAreaLight){let b=n.rectArea[x];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(g),o.identity(),r.copy(_.matrixWorld),r.premultiply(g),o.extractRotation(r),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(_.isPointLight){let b=n.point[f];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(g),f++}else if(_.isHemisphereLight){let b=n.hemi[m];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function md(i){let e=new J_(i),t=[],n=[],s=[];function r(u){d.camera=u,t.length=0,n.length=0,s.length=0}function o(u){t.push(u)}function a(u){n.push(u)}function l(u){s.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function K_(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new md(i),e.set(s,[a])):r>=o.length?(a=new md(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Q_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,j_=`uniform sampler2D shadow_pass;
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
}`,ev=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],tv=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],gd=new rt,Qo=new U,iu=new U;function nv(i,e,t){let n=new gr,s=new ge,r=new ge,o=new Gt,a=new Sr,l=new fl,c={},h=t.maxTextureSize,d={[di]:en,[en]:di,[Bt]:Bt},u=new Vt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:Q_,fragmentShader:j_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new wt;p.setAttribute("position",new At(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Te(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=As;let g=this.type;this.render=function(S,R,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===hf&&(ot("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=As);let T=i.getRenderTarget(),A=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Jt),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let B=g!==this.type;B&&R.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(W=>W.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,W=S.length;N<W;N++){let k=S[N],j=k.shadow;if(j===void 0){ot("WebGLShadowMap:",k,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);let I=j.getFrameExtents();s.multiply(I),r.copy(j.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/I.x),s.x=r.x*I.x,j.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/I.y),s.y=r.y*I.y,j.mapSize.y=r.y));let G=i.state.buffers.depth.getReversed();if(j.camera._reversedDepth=G,j.map===null||B===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===br){if(k.isPointLight){ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new Xt(s.x,s.y,{format:as,type:Kt,minFilter:_n,magFilter:_n,generateMipmaps:!1}),j.map.texture.name=k.name+".shadowMap",j.map.depthTexture=new Ti(s.x,s.y,Vn),j.map.depthTexture.name=k.name+".shadowMapDepth",j.map.depthTexture.format=Mi,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=jt,j.map.depthTexture.magFilter=jt}else k.isPointLight?(j.map=new xc(s.x),j.map.depthTexture=new rl(s.x,mi)):(j.map=new Xt(s.x,s.y),j.map.depthTexture=new Ti(s.x,s.y,mi)),j.map.depthTexture.name=k.name+".shadowMap",j.map.depthTexture.format=Mi,this.type===As?(j.map.depthTexture.compareFunction=G?pc:dc,j.map.depthTexture.minFilter=_n,j.map.depthTexture.magFilter=_n):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=jt,j.map.depthTexture.magFilter=jt);j.camera.updateProjectionMatrix()}j.map.isWebGLCubeRenderTarget!==!0&&(j.map.width!==s.x||j.map.height!==s.y)&&j.map.setSize(s.x,s.y);let X=j.map.isWebGLCubeRenderTarget?6:j.getViewportCount();k.isPointLight!==!0&&j.updateMatrices(k,v);for(let Q=0;Q<X;Q++){let re=j.getCamera(Q);if(k.isPointLight){let pe=j.camera,Fe=j.matrix,ze=k.distance||pe.far;ze!==pe.far&&(pe.far=ze,pe.updateProjectionMatrix()),Qo.setFromMatrixPosition(k.matrixWorld),pe.position.copy(Qo),iu.copy(pe.position),iu.add(ev[Q]),pe.up.copy(tv[Q]),pe.lookAt(iu),pe.updateMatrixWorld(),Fe.makeTranslation(-Qo.x,-Qo.y,-Qo.z),gd.multiplyMatrices(pe.projectionMatrix,pe.matrixWorldInverse),j._frustum.setFromProjectionMatrix(gd,pe.coordinateSystem,pe.reversedDepth)}if(j.map.isWebGLCubeRenderTarget)i.setRenderTarget(j.map,Q),i.clear();else{Q===0&&(i.setRenderTarget(j.map),i.clear());let pe=j.getViewport(Q);o.set(r.x*pe.x,r.y*pe.y,r.x*pe.z,r.y*pe.w),D.viewport(o)}n=j.getFrustum(Q),_(R,v,re,k,this.type)}j.isPointLightShadow!==!0&&this.type===br&&y(j,v),j.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(T,A,C)};function y(S,R){let v=e.update(x);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new Xt(s.x,s.y,{format:as,type:Kt}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),u.uniforms.shadow_pass.value=S.map.depthTexture,u.uniforms.resolution.value.set(S.map.width,S.map.height),u.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(R,null,v,u,x,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(R,null,v,f,x,null)}function M(S,R,v,T){let A=null,C=v.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(C!==void 0)A=C;else if(A=v.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let D=A.uuid,B=R.uuid,N=c[D];N===void 0&&(N={},c[D]=N);let W=N[B];W===void 0&&(W=A.clone(),N[B]=W,R.addEventListener("dispose",b)),A=W}if(A.visible=R.visible,A.wireframe=R.wireframe,T===br?A.side=R.shadowSide!==null?R.shadowSide:R.side:A.side=R.shadowSide!==null?R.shadowSide:d[R.side],A.alphaMap=R.alphaMap,A.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,A.map=R.map,A.clipShadows=R.clipShadows,A.clippingPlanes=R.clippingPlanes,A.clipIntersection=R.clipIntersection,A.displacementMap=R.displacementMap,A.displacementScale=R.displacementScale,A.displacementBias=R.displacementBias,A.wireframeLinewidth=R.wireframeLinewidth,A.linewidth=R.linewidth,v.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let D=i.properties.get(A);D.light=v}return A}function _(S,R,v,T,A){if(S.visible===!1)return;if(S.layers.test(R.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&A===br)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,S.matrixWorld);let B=e.update(S),N=S.material;if(Array.isArray(N)){let W=B.groups;for(let k=0,j=W.length;k<j;k++){let I=W[k],G=N[I.materialIndex];if(G&&G.visible){let X=M(S,G,T,A);S.onBeforeShadow(i,S,R,v,B,X,I),i.renderBufferDirect(v,null,B,X,S,I),S.onAfterShadow(i,S,R,v,B,X,I)}}}else if(N.visible){let W=M(S,N,T,A);S.onBeforeShadow(i,S,R,v,B,W,null),i.renderBufferDirect(v,null,B,W,S,null),S.onAfterShadow(i,S,R,v,B,W,null)}}let D=S.children;for(let B=0,N=D.length;B<N;B++)_(D[B],R,v,T,A)}function b(S){S.target.removeEventListener("dispose",b);for(let v in c){let T=c[v],A=S.target.uuid;A in T&&(T[A].dispose(),delete T[A])}}}function iv(i,e){function t(){let F=!1,_e=new Gt,he=null,Ce=new Gt(0,0,0,0);return{setMask:function(Ue){he!==Ue&&!F&&(i.colorMask(Ue,Ue,Ue,Ue),he=Ue)},setLocked:function(Ue){F=Ue},setClear:function(Ue,xe,Ke,Qe,Nt){Nt===!0&&(Ue*=Qe,xe*=Qe,Ke*=Qe),_e.set(Ue,xe,Ke,Qe),Ce.equals(_e)===!1&&(i.clearColor(Ue,xe,Ke,Qe),Ce.copy(_e))},reset:function(){F=!1,he=null,Ce.set(-1,0,0,0)}}}function n(){let F=!1,_e=!1,he=null,Ce=null,Ue=null;return{setReversed:function(xe){if(_e!==xe){let Ke=e.get("EXT_clip_control");xe?Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.ZERO_TO_ONE_EXT):Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.NEGATIVE_ONE_TO_ONE_EXT),_e=xe;let Qe=Ue;Ue=null,this.setClear(Qe)}},getReversed:function(){return _e},setTest:function(xe){xe?le(i.DEPTH_TEST):be(i.DEPTH_TEST)},setMask:function(xe){he!==xe&&!F&&(i.depthMask(xe),he=xe)},setFunc:function(xe){if(_e&&(xe=Gf[xe]),Ce!==xe){switch(xe){case Xa:i.depthFunc(i.NEVER);break;case qa:i.depthFunc(i.ALWAYS);break;case Ya:i.depthFunc(i.LESS);break;case ar:i.depthFunc(i.LEQUAL);break;case Za:i.depthFunc(i.EQUAL);break;case $a:i.depthFunc(i.GEQUAL);break;case Ja:i.depthFunc(i.GREATER);break;case Ka:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ce=xe}},setLocked:function(xe){F=xe},setClear:function(xe){Ue!==xe&&(Ue=xe,_e&&(xe=1-xe),i.clearDepth(xe))},reset:function(){F=!1,he=null,Ce=null,Ue=null,_e=!1}}}function s(){let F=!1,_e=null,he=null,Ce=null,Ue=null,xe=null,Ke=null,Qe=null,Nt=null;return{setTest:function(Lt){F||(Lt?le(i.STENCIL_TEST):be(i.STENCIL_TEST))},setMask:function(Lt){_e!==Lt&&!F&&(i.stencilMask(Lt),_e=Lt)},setFunc:function(Lt,ln,wn){(he!==Lt||Ce!==ln||Ue!==wn)&&(i.stencilFunc(Lt,ln,wn),he=Lt,Ce=ln,Ue=wn)},setOp:function(Lt,ln,wn){(xe!==Lt||Ke!==ln||Qe!==wn)&&(i.stencilOp(Lt,ln,wn),xe=Lt,Ke=ln,Qe=wn)},setLocked:function(Lt){F=Lt},setClear:function(Lt){Nt!==Lt&&(i.clearStencil(Lt),Nt=Lt)},reset:function(){F=!1,_e=null,he=null,Ce=null,Ue=null,xe=null,Ke=null,Qe=null,Nt=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],x=null,m=!1,g=null,y=null,M=null,_=null,b=null,S=null,R=null,v=new Re(0,0,0),T=0,A=!1,C=null,D=null,B=null,N=null,W=null,k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,I=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(G)[1]),j=I>=1):G.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),j=I>=2);let X=null,Q={},re=i.getParameter(i.SCISSOR_BOX),pe=i.getParameter(i.VIEWPORT),Fe=new Gt().fromArray(re),ze=new Gt().fromArray(pe);function We(F,_e,he,Ce){let Ue=new Uint8Array(4),xe=i.createTexture();i.bindTexture(F,xe),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ke=0;Ke<he;Ke++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(_e,0,i.RGBA,1,1,Ce,0,i.RGBA,i.UNSIGNED_BYTE,Ue):i.texImage2D(_e+Ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ue);return xe}let oe={};oe[i.TEXTURE_2D]=We(i.TEXTURE_2D,i.TEXTURE_2D,1),oe[i.TEXTURE_CUBE_MAP]=We(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[i.TEXTURE_2D_ARRAY]=We(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),oe[i.TEXTURE_3D]=We(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(i.DEPTH_TEST),o.setFunc(ar),Ee(!1),Y(Th),le(i.CULL_FACE),ve(Jt);function le(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function be(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function Ve(F,_e){return u[F]!==_e?(i.bindFramebuffer(F,_e),u[F]=_e,F===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=_e),F===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=_e),!0):!1}function Ie(F,_e){let he=p,Ce=!1;if(F){he=f.get(_e),he===void 0&&(he=[],f.set(_e,he));let Ue=F.textures;if(he.length!==Ue.length||he[0]!==i.COLOR_ATTACHMENT0){for(let xe=0,Ke=Ue.length;xe<Ke;xe++)he[xe]=i.COLOR_ATTACHMENT0+xe;he.length=Ue.length,Ce=!0}}else he[0]!==i.BACK&&(he[0]=i.BACK,Ce=!0);Ce&&i.drawBuffers(he)}function Xe(F){return x!==F?(i.useProgram(F),x=F,!0):!1}let ht={[jn]:i.FUNC_ADD,[uf]:i.FUNC_SUBTRACT,[ff]:i.FUNC_REVERSE_SUBTRACT};ht[df]=i.MIN,ht[pf]=i.MAX;let de={[Cs]:i.ZERO,[mf]:i.ONE,[gf]:i.SRC_COLOR,[Ah]:i.SRC_ALPHA,[yf]:i.SRC_ALPHA_SATURATE,[No]:i.DST_COLOR,[Uo]:i.DST_ALPHA,[xf]:i.ONE_MINUS_SRC_COLOR,[Ch]:i.ONE_MINUS_SRC_ALPHA,[vf]:i.ONE_MINUS_DST_COLOR,[_f]:i.ONE_MINUS_DST_ALPHA,[Mf]:i.CONSTANT_COLOR,[Sf]:i.ONE_MINUS_CONSTANT_COLOR,[Ef]:i.CONSTANT_ALPHA,[bf]:i.ONE_MINUS_CONSTANT_ALPHA};function ve(F,_e,he,Ce,Ue,xe,Ke,Qe,Nt,Lt){if(F===Jt){m===!0&&(be(i.BLEND),m=!1);return}if(m===!1&&(le(i.BLEND),m=!0),F!==wl){if(F!==g||Lt!==A){if((y!==jn||b!==jn)&&(i.blendEquation(i.FUNC_ADD),y=jn,b=jn),Lt)switch(F){case Tr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gn:i.blendFunc(i.ONE,i.ONE);break;case wh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Rh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ft("WebGLState: Invalid blending: ",F);break}else switch(F){case Tr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case wh:ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rh:ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ft("WebGLState: Invalid blending: ",F);break}M=null,_=null,S=null,R=null,v.set(0,0,0),T=0,g=F,A=Lt}return}Ue=Ue||_e,xe=xe||he,Ke=Ke||Ce,(_e!==y||Ue!==b)&&(i.blendEquationSeparate(ht[_e],ht[Ue]),y=_e,b=Ue),(he!==M||Ce!==_||xe!==S||Ke!==R)&&(i.blendFuncSeparate(de[he],de[Ce],de[xe],de[Ke]),M=he,_=Ce,S=xe,R=Ke),(Qe.equals(v)===!1||Nt!==T)&&(i.blendColor(Qe.r,Qe.g,Qe.b,Nt),v.copy(Qe),T=Nt),g=F,A=!1}function Se(F,_e){F.side===Bt?be(i.CULL_FACE):le(i.CULL_FACE);let he=F.side===en;_e&&(he=!he),Ee(he),F.blending===Tr&&F.transparent===!1?ve(Jt):ve(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let Ce=F.stencilWrite;a.setTest(Ce),Ce&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ae(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?le(i.SAMPLE_ALPHA_TO_COVERAGE):be(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(F){C!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),C=F)}function Y(F){F!==lf?(le(i.CULL_FACE),F!==D&&(F===Th?i.cullFace(i.BACK):F===cf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):be(i.CULL_FACE),D=F}function ye(F){F!==B&&(j&&i.lineWidth(F),B=F)}function Ae(F,_e,he){F?(le(i.POLYGON_OFFSET_FILL),(N!==_e||W!==he)&&(N=_e,W=he,o.getReversed()&&(_e=-_e),i.polygonOffset(_e,he))):be(i.POLYGON_OFFSET_FILL)}function De(F){F?le(i.SCISSOR_TEST):be(i.SCISSOR_TEST)}function Le(F){F===void 0&&(F=i.TEXTURE0+k-1),X!==F&&(i.activeTexture(F),X=F)}function H(F,_e,he){he===void 0&&(X===null?he=i.TEXTURE0+k-1:he=X);let Ce=Q[he];Ce===void 0&&(Ce={type:void 0,texture:void 0},Q[he]=Ce),(Ce.type!==F||Ce.texture!==_e)&&(X!==he&&(i.activeTexture(he),X=he),i.bindTexture(F,_e||oe[F]),Ce.type=F,Ce.texture=_e)}function $e(){let F=Q[X];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ut(){try{i.compressedTexImage2D(...arguments)}catch(F){ft("WebGLState:",F)}}function L(){try{i.compressedTexImage3D(...arguments)}catch(F){ft("WebGLState:",F)}}function E(){try{i.texSubImage2D(...arguments)}catch(F){ft("WebGLState:",F)}}function J(){try{i.texSubImage3D(...arguments)}catch(F){ft("WebGLState:",F)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(F){ft("WebGLState:",F)}}function ae(){try{i.compressedTexSubImage3D(...arguments)}catch(F){ft("WebGLState:",F)}}function Me(){try{i.texStorage2D(...arguments)}catch(F){ft("WebGLState:",F)}}function Pe(){try{i.texStorage3D(...arguments)}catch(F){ft("WebGLState:",F)}}function ue(){try{i.texImage2D(...arguments)}catch(F){ft("WebGLState:",F)}}function me(){try{i.texImage3D(...arguments)}catch(F){ft("WebGLState:",F)}}function O(F){return d[F]!==void 0?d[F]:i.getParameter(F)}function q(F,_e){d[F]!==_e&&(i.pixelStorei(F,_e),d[F]=_e)}function z(F){Fe.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Fe.copy(F))}function ee(F){ze.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),ze.copy(F))}function te(F,_e){let he=c.get(_e);he===void 0&&(he=new WeakMap,c.set(_e,he));let Ce=he.get(F);Ce===void 0&&(Ce=i.getUniformBlockIndex(_e,F.name),he.set(F,Ce))}function ne(F,_e){let Ce=c.get(_e).get(F);l.get(_e)!==Ce&&(i.uniformBlockBinding(_e,Ce,F.__bindingPointIndex),l.set(_e,Ce))}function fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},X=null,Q={},u={},f=new WeakMap,p=[],x=null,m=!1,g=null,y=null,M=null,_=null,b=null,S=null,R=null,v=new Re(0,0,0),T=0,A=!1,C=null,D=null,B=null,N=null,W=null,Fe.set(0,0,i.canvas.width,i.canvas.height),ze.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:le,disable:be,bindFramebuffer:Ve,drawBuffers:Ie,useProgram:Xe,setBlending:ve,setMaterial:Se,setFlipSided:Ee,setCullFace:Y,setLineWidth:ye,setPolygonOffset:Ae,setScissorTest:De,activeTexture:Le,bindTexture:H,unbindTexture:$e,compressedTexImage2D:ut,compressedTexImage3D:L,texImage2D:ue,texImage3D:me,pixelStorei:q,getParameter:O,updateUBOMapping:te,uniformBlockBinding:ne,texStorage2D:Me,texStorage3D:Pe,texSubImage2D:E,texSubImage3D:J,compressedTexSubImage2D:K,compressedTexSubImage3D:ae,scissor:z,viewport:ee,reset:fe}}function sv(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ge,h=new WeakMap,d=new Set,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,E){return p?new OffscreenCanvas(L,E):io("canvas")}function m(L,E,J){let K=1,ae=ut(L);if((ae.width>J||ae.height>J)&&(K=J/Math.max(ae.width,ae.height)),K<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let Me=Math.floor(K*ae.width),Pe=Math.floor(K*ae.height);u===void 0&&(u=x(Me,Pe));let ue=E?x(Me,Pe):u;return ue.width=Me,ue.height=Pe,ue.getContext("2d").drawImage(L,0,0,Me,Pe),ot("WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+Me+"x"+Pe+")."),ue}else return"data"in L&&ot("WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),L;return L}function g(L){return L.generateMipmaps}function y(L){i.generateMipmap(L)}function M(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(L,E,J,K,ae,Me=!1){if(L!==null){if(i[L]!==void 0)return i[L];ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Pe;K&&(Pe=e.get("EXT_texture_norm16"),Pe||ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ue=E;if(E===i.RED&&(J===i.FLOAT&&(ue=i.R32F),J===i.HALF_FLOAT&&(ue=i.R16F),J===i.UNSIGNED_BYTE&&(ue=i.R8),J===i.UNSIGNED_SHORT&&Pe&&(ue=Pe.R16_EXT),J===i.SHORT&&Pe&&(ue=Pe.R16_SNORM_EXT)),E===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(ue=i.R8UI),J===i.UNSIGNED_SHORT&&(ue=i.R16UI),J===i.UNSIGNED_INT&&(ue=i.R32UI),J===i.BYTE&&(ue=i.R8I),J===i.SHORT&&(ue=i.R16I),J===i.INT&&(ue=i.R32I)),E===i.RG&&(J===i.FLOAT&&(ue=i.RG32F),J===i.HALF_FLOAT&&(ue=i.RG16F),J===i.UNSIGNED_BYTE&&(ue=i.RG8),J===i.UNSIGNED_SHORT&&Pe&&(ue=Pe.RG16_EXT),J===i.SHORT&&Pe&&(ue=Pe.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(J===i.UNSIGNED_BYTE&&(ue=i.RG8UI),J===i.UNSIGNED_SHORT&&(ue=i.RG16UI),J===i.UNSIGNED_INT&&(ue=i.RG32UI),J===i.BYTE&&(ue=i.RG8I),J===i.SHORT&&(ue=i.RG16I),J===i.INT&&(ue=i.RG32I)),E===i.RGB_INTEGER&&(J===i.UNSIGNED_BYTE&&(ue=i.RGB8UI),J===i.UNSIGNED_SHORT&&(ue=i.RGB16UI),J===i.UNSIGNED_INT&&(ue=i.RGB32UI),J===i.BYTE&&(ue=i.RGB8I),J===i.SHORT&&(ue=i.RGB16I),J===i.INT&&(ue=i.RGB32I)),E===i.RGBA_INTEGER&&(J===i.UNSIGNED_BYTE&&(ue=i.RGBA8UI),J===i.UNSIGNED_SHORT&&(ue=i.RGBA16UI),J===i.UNSIGNED_INT&&(ue=i.RGBA32UI),J===i.BYTE&&(ue=i.RGBA8I),J===i.SHORT&&(ue=i.RGBA16I),J===i.INT&&(ue=i.RGBA32I)),E===i.RGB&&(J===i.UNSIGNED_SHORT&&Pe&&(ue=Pe.RGB16_EXT),J===i.SHORT&&Pe&&(ue=Pe.RGB16_SNORM_EXT),J===i.UNSIGNED_INT_5_9_9_9_REV&&(ue=i.RGB9_E5),J===i.UNSIGNED_INT_10F_11F_11F_REV&&(ue=i.R11F_G11F_B10F)),E===i.RGBA){let me=Me?no:It.getTransfer(ae);J===i.FLOAT&&(ue=i.RGBA32F),J===i.HALF_FLOAT&&(ue=i.RGBA16F),J===i.UNSIGNED_BYTE&&(ue=me===Ft?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT&&Pe&&(ue=Pe.RGBA16_EXT),J===i.SHORT&&Pe&&(ue=Pe.RGBA16_SNORM_EXT),J===i.UNSIGNED_SHORT_4_4_4_4&&(ue=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(ue=i.RGB5_A1)}return(ue===i.R16F||ue===i.R32F||ue===i.RG16F||ue===i.RG32F||ue===i.RGBA16F||ue===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function b(L,E){let J;return L?E===null||E===mi||E===os?J=i.DEPTH24_STENCIL8:E===Vn?J=i.DEPTH32F_STENCIL8:E===wr&&(J=i.DEPTH24_STENCIL8,ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===mi||E===os?J=i.DEPTH_COMPONENT24:E===Vn?J=i.DEPTH_COMPONENT32F:E===wr&&(J=i.DEPTH_COMPONENT16),J}function S(L,E){return g(L)===!0||L.isFramebufferTexture&&L.minFilter!==jt&&L.minFilter!==_n?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function R(L){let E=L.target;E.removeEventListener("dispose",R),T(E),E.isVideoTexture&&h.delete(E),E.isHTMLTexture&&d.delete(E)}function v(L){let E=L.target;E.removeEventListener("dispose",v),C(E)}function T(L){let E=n.get(L);if(E.__webglInit===void 0)return;let J=L.source,K=f.get(J);if(K){let ae=K[E.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&A(L),Object.keys(K).length===0&&f.delete(J)}n.remove(L)}function A(L){let E=n.get(L);i.deleteTexture(E.__webglTexture);let J=L.source,K=f.get(J);delete K[E.__cacheKey],o.memory.textures--}function C(L){let E=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(E.__webglFramebuffer[K]))for(let ae=0;ae<E.__webglFramebuffer[K].length;ae++)i.deleteFramebuffer(E.__webglFramebuffer[K][ae]);else i.deleteFramebuffer(E.__webglFramebuffer[K]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[K])}else{if(Array.isArray(E.__webglFramebuffer))for(let K=0;K<E.__webglFramebuffer.length;K++)i.deleteFramebuffer(E.__webglFramebuffer[K]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let K=0;K<E.__webglColorRenderbuffer.length;K++)E.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[K]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let J=L.textures;for(let K=0,ae=J.length;K<ae;K++){let Me=n.get(J[K]);Me.__webglTexture&&(i.deleteTexture(Me.__webglTexture),o.memory.textures--),n.remove(J[K])}n.remove(L)}let D=0;function B(){D=0}function N(){return D}function W(L){D=L}function k(){let L=D;return L>=s.maxTextures&&ot("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),D+=1,L}function j(L){let E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function I(L,E){let J=n.get(L);if(L.isVideoTexture&&H(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&J.__version!==L.version){let K=L.image;if(K===null)ot("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)ot("WebGLRenderer: Texture marked for update but image is incomplete");else{be(J,L,E);return}}else L.isExternalTexture&&(J.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+E)}function G(L,E){let J=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){be(J,L,E);return}else L.isExternalTexture&&(J.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+E)}function X(L,E){let J=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){be(J,L,E);return}t.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+E)}function Q(L,E){let J=n.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&J.__version!==L.version){Ve(J,L,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+E)}let re={[sn]:i.REPEAT,[vi]:i.CLAMP_TO_EDGE,[Qa]:i.MIRRORED_REPEAT},pe={[jt]:i.NEAREST,[Af]:i.NEAREST_MIPMAP_NEAREST,[Vo]:i.NEAREST_MIPMAP_LINEAR,[_n]:i.LINEAR,[Cl]:i.LINEAR_MIPMAP_NEAREST,[rs]:i.LINEAR_MIPMAP_LINEAR},Fe={[Lf]:i.NEVER,[Bf]:i.ALWAYS,[Df]:i.LESS,[dc]:i.LEQUAL,[Uf]:i.EQUAL,[pc]:i.GEQUAL,[Nf]:i.GREATER,[Ff]:i.NOTEQUAL};function ze(L,E){if(E.type===Vn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===_n||E.magFilter===Cl||E.magFilter===Vo||E.magFilter===rs||E.minFilter===_n||E.minFilter===Cl||E.minFilter===Vo||E.minFilter===rs)&&ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,re[E.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,re[E.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,re[E.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,pe[E.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,pe[E.minFilter]),E.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,Fe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===jt||E.minFilter!==Vo&&E.minFilter!==rs||E.type===Vn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let J=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function We(L,E){let J=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",R));let K=E.source,ae=f.get(K);ae===void 0&&(ae={},f.set(K,ae));let Me=j(E);if(Me!==L.__cacheKey){ae[Me]===void 0&&(ae[Me]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,J=!0),ae[Me].usedTimes++;let Pe=ae[L.__cacheKey];Pe!==void 0&&(ae[L.__cacheKey].usedTimes--,Pe.usedTimes===0&&A(E)),L.__cacheKey=Me,L.__webglTexture=ae[Me].texture}return J}function oe(L,E,J){return Math.floor(Math.floor(L/J)/E)}function le(L,E,J,K){let Me=L.updateRanges;if(Me.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,J,K,E.data);else{Me.sort((q,z)=>q.start-z.start);let Pe=0;for(let q=1;q<Me.length;q++){let z=Me[Pe],ee=Me[q],te=z.start+z.count,ne=oe(ee.start,E.width,4),fe=oe(z.start,E.width,4);ee.start<=te+1&&ne===fe&&oe(ee.start+ee.count-1,E.width,4)===ne?z.count=Math.max(z.count,ee.start+ee.count-z.start):(++Pe,Me[Pe]=ee)}Me.length=Pe+1;let ue=t.getParameter(i.UNPACK_ROW_LENGTH),me=t.getParameter(i.UNPACK_SKIP_PIXELS),O=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let q=0,z=Me.length;q<z;q++){let ee=Me[q],te=Math.floor(ee.start/4),ne=Math.ceil(ee.count/4),fe=te%E.width,F=Math.floor(te/E.width),_e=ne,he=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,fe),t.pixelStorei(i.UNPACK_SKIP_ROWS,F),t.texSubImage2D(i.TEXTURE_2D,0,fe,F,_e,he,J,K,E.data)}L.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ue),t.pixelStorei(i.UNPACK_SKIP_PIXELS,me),t.pixelStorei(i.UNPACK_SKIP_ROWS,O)}}function be(L,E,J){let K=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(K=i.TEXTURE_3D);let ae=We(L,E),Me=E.source;t.bindTexture(K,L.__webglTexture,i.TEXTURE0+J);let Pe=n.get(Me);if(Me.version!==Pe.__version||ae===!0){if(t.activeTexture(i.TEXTURE0+J),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let he=It.getPrimaries(It.workingColorSpace),Ce=E.colorSpace===qi?null:It.getPrimaries(E.colorSpace),Ue=E.colorSpace===qi||he===Ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue)}t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let me=m(E.image,!1,s.maxTextureSize);me=$e(E,me);let O=r.convert(E.format,E.colorSpace),q=r.convert(E.type),z=_(E.internalFormat,O,q,E.normalized,E.colorSpace,E.isVideoTexture);ze(K,E);let ee,te=E.mipmaps,ne=E.isVideoTexture!==!0,fe=Pe.__version===void 0||ae===!0,F=Me.dataReady,_e=S(E,me);if(E.isDepthTexture)z=b(E.format===Ri,E.type),fe&&(ne?t.texStorage2D(i.TEXTURE_2D,1,z,me.width,me.height):t.texImage2D(i.TEXTURE_2D,0,z,me.width,me.height,0,O,q,null));else if(E.isDataTexture)if(te.length>0){ne&&fe&&t.texStorage2D(i.TEXTURE_2D,_e,z,te[0].width,te[0].height);for(let he=0,Ce=te.length;he<Ce;he++)ee=te[he],ne?F&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,ee.width,ee.height,O,q,ee.data):t.texImage2D(i.TEXTURE_2D,he,z,ee.width,ee.height,0,O,q,ee.data);E.generateMipmaps=!1}else ne?(fe&&t.texStorage2D(i.TEXTURE_2D,_e,z,me.width,me.height),F&&le(E,me,O,q)):t.texImage2D(i.TEXTURE_2D,0,z,me.width,me.height,0,O,q,me.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ne&&fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,z,te[0].width,te[0].height,me.depth);for(let he=0,Ce=te.length;he<Ce;he++)if(ee=te[he],E.format!==In)if(O!==null)if(ne){if(F)if(E.layerUpdates.size>0){let Ue=qh(ee.width,ee.height,E.format,E.type);for(let xe of E.layerUpdates){let Ke=ee.data.subarray(xe*Ue/ee.data.BYTES_PER_ELEMENT,(xe+1)*Ue/ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,xe,ee.width,ee.height,1,O,Ke)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,ee.width,ee.height,me.depth,O,ee.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,he,z,ee.width,ee.height,me.depth,0,ee.data,0,0);else ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?F&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,ee.width,ee.height,me.depth,O,q,ee.data):t.texImage3D(i.TEXTURE_2D_ARRAY,he,z,ee.width,ee.height,me.depth,0,O,q,ee.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{ne&&fe&&t.texStorage2D(i.TEXTURE_2D,_e,z,te[0].width,te[0].height);for(let he=0,Ce=te.length;he<Ce;he++)ee=te[he],E.format!==In?O!==null?ne?F&&t.compressedTexSubImage2D(i.TEXTURE_2D,he,0,0,ee.width,ee.height,O,ee.data):t.compressedTexImage2D(i.TEXTURE_2D,he,z,ee.width,ee.height,0,ee.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?F&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,ee.width,ee.height,O,q,ee.data):t.texImage2D(i.TEXTURE_2D,he,z,ee.width,ee.height,0,O,q,ee.data)}else if(E.isDataArrayTexture)if(ne){if(fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,z,me.width,me.height,me.depth),F)if(E.layerUpdates.size>0){let he=qh(me.width,me.height,E.format,E.type);for(let Ce of E.layerUpdates){let Ue=me.data.subarray(Ce*he/me.data.BYTES_PER_ELEMENT,(Ce+1)*he/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ce,me.width,me.height,1,O,q,Ue)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,O,q,me.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,z,me.width,me.height,me.depth,0,O,q,me.data);else if(E.isData3DTexture)ne?(fe&&t.texStorage3D(i.TEXTURE_3D,_e,z,me.width,me.height,me.depth),F&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,O,q,me.data)):t.texImage3D(i.TEXTURE_3D,0,z,me.width,me.height,me.depth,0,O,q,me.data);else if(E.isFramebufferTexture){if(fe)if(ne)t.texStorage2D(i.TEXTURE_2D,_e,z,me.width,me.height);else{let he=me.width,Ce=me.height;for(let Ue=0;Ue<_e;Ue++)t.texImage2D(i.TEXTURE_2D,Ue,z,he,Ce,0,O,q,null),he>>=1,Ce>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){let he=i.canvas;if(he.hasAttribute("layoutsubtree")||he.setAttribute("layoutsubtree","true"),me.parentNode!==he){he.appendChild(me),d.add(E),he.onpaint=Ce=>{let Ue=Ce.changedElements;for(let xe of d)Ue.includes(xe.image)&&(xe.needsUpdate=!0)},he.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,me);else{let Ue=i.RGBA,xe=i.RGBA,Ke=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ue,xe,Ke,me)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(te.length>0){if(ne&&fe){let he=ut(te[0]);t.texStorage2D(i.TEXTURE_2D,_e,z,he.width,he.height)}for(let he=0,Ce=te.length;he<Ce;he++)ee=te[he],ne?F&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,O,q,ee):t.texImage2D(i.TEXTURE_2D,he,z,O,q,ee);E.generateMipmaps=!1}else if(ne){if(fe){let he=ut(me);t.texStorage2D(i.TEXTURE_2D,_e,z,he.width,he.height)}F&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,O,q,me)}else t.texImage2D(i.TEXTURE_2D,0,z,O,q,me);g(E)&&y(K),Pe.__version=Me.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Ve(L,E,J){if(E.image.length!==6)return;let K=We(L,E),ae=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+J);let Me=n.get(ae);if(ae.version!==Me.__version||K===!0){t.activeTexture(i.TEXTURE0+J);let Pe=It.getPrimaries(It.workingColorSpace),ue=E.colorSpace===qi?null:It.getPrimaries(E.colorSpace),me=E.colorSpace===qi||Pe===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let O=E.isCompressedTexture||E.image[0].isCompressedTexture,q=E.image[0]&&E.image[0].isDataTexture,z=[];for(let xe=0;xe<6;xe++)!O&&!q?z[xe]=m(E.image[xe],!0,s.maxCubemapSize):z[xe]=q?E.image[xe].image:E.image[xe],z[xe]=$e(E,z[xe]);let ee=z[0],te=r.convert(E.format,E.colorSpace),ne=r.convert(E.type),fe=_(E.internalFormat,te,ne,E.normalized,E.colorSpace),F=E.isVideoTexture!==!0,_e=Me.__version===void 0||K===!0,he=ae.dataReady,Ce=S(E,ee);ze(i.TEXTURE_CUBE_MAP,E);let Ue;if(O){F&&_e&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,fe,ee.width,ee.height);for(let xe=0;xe<6;xe++){Ue=z[xe].mipmaps;for(let Ke=0;Ke<Ue.length;Ke++){let Qe=Ue[Ke];E.format!==In?te!==null?F?he&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ke,0,0,Qe.width,Qe.height,te,Qe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ke,fe,Qe.width,Qe.height,0,Qe.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ke,0,0,Qe.width,Qe.height,te,ne,Qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ke,fe,Qe.width,Qe.height,0,te,ne,Qe.data)}}}else{if(Ue=E.mipmaps,F&&_e){Ue.length>0&&Ce++;let xe=ut(z[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,fe,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(q){F?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,z[xe].width,z[xe].height,te,ne,z[xe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,fe,z[xe].width,z[xe].height,0,te,ne,z[xe].data);for(let Ke=0;Ke<Ue.length;Ke++){let Nt=Ue[Ke].image[xe].image;F?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ke+1,0,0,Nt.width,Nt.height,te,ne,Nt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ke+1,fe,Nt.width,Nt.height,0,te,ne,Nt.data)}}else{F?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,te,ne,z[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,fe,te,ne,z[xe]);for(let Ke=0;Ke<Ue.length;Ke++){let Qe=Ue[Ke];F?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ke+1,0,0,te,ne,Qe.image[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ke+1,fe,te,ne,Qe.image[xe])}}}g(E)&&y(i.TEXTURE_CUBE_MAP),Me.__version=ae.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Ie(L,E,J,K,ae,Me){let Pe=r.convert(J.format,J.colorSpace),ue=r.convert(J.type),me=_(J.internalFormat,Pe,ue,J.normalized,J.colorSpace),O=n.get(E),q=n.get(J);if(q.__renderTarget=E,!O.__hasExternalTextures){let z=Math.max(1,E.width>>Me),ee=Math.max(1,E.height>>Me);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,Me,me,z,ee,E.depth,0,Pe,ue,null):t.texImage2D(ae,Me,me,z,ee,0,Pe,ue,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),Le(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,ae,q.__webglTexture,0,De(E)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,ae,q.__webglTexture,Me),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Xe(L,E,J){if(i.bindRenderbuffer(i.RENDERBUFFER,L),E.depthBuffer){let K=E.depthTexture,ae=K&&K.isDepthTexture?K.type:null,Me=b(E.stencilBuffer,ae),Pe=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Le(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,De(E),Me,E.width,E.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,De(E),Me,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Me,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pe,i.RENDERBUFFER,L)}else{let K=E.textures;for(let ae=0;ae<K.length;ae++){let Me=K[ae],Pe=r.convert(Me.format,Me.colorSpace),ue=r.convert(Me.type),me=_(Me.internalFormat,Pe,ue,Me.normalized,Me.colorSpace);Le(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,De(E),me,E.width,E.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,De(E),me,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,me,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ht(L,E,J){let K=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ae=n.get(E.depthTexture);if(ae.__renderTarget=E,(!ae.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),K){if(ae.__webglInit===void 0&&(ae.__webglInit=!0,E.depthTexture.addEventListener("dispose",R)),ae.__webglTexture===void 0){ae.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ae.__webglTexture),ze(i.TEXTURE_CUBE_MAP,E.depthTexture);let O=r.convert(E.depthTexture.format),q=r.convert(E.depthTexture.type),z;E.depthTexture.format===Mi?z=i.DEPTH_COMPONENT24:E.depthTexture.format===Ri&&(z=i.DEPTH24_STENCIL8);for(let ee=0;ee<6;ee++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,z,E.width,E.height,0,O,q,null)}}else I(E.depthTexture,0);let Me=ae.__webglTexture,Pe=De(E),ue=K?i.TEXTURE_CUBE_MAP_POSITIVE_X+J:i.TEXTURE_2D,me=E.depthTexture.format===Ri?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===Mi)Le(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,me,ue,Me,0,Pe):i.framebufferTexture2D(i.FRAMEBUFFER,me,ue,Me,0);else if(E.depthTexture.format===Ri)Le(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,me,ue,Me,0,Pe):i.framebufferTexture2D(i.FRAMEBUFFER,me,ue,Me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function de(L){let E=n.get(L),J=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){let K=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),K){let ae=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,K.removeEventListener("dispose",ae)};K.addEventListener("dispose",ae),E.__depthDisposeCallback=ae}E.__boundDepthTexture=K}if(L.depthTexture&&!E.__autoAllocateDepthBuffer)if(J)for(let K=0;K<6;K++)ht(E.__webglFramebuffer[K],L,K);else{let K=L.texture.mipmaps;K&&K.length>0?ht(E.__webglFramebuffer[0],L,0):ht(E.__webglFramebuffer,L,0)}else if(J){E.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[K]),E.__webglDepthbuffer[K]===void 0)E.__webglDepthbuffer[K]=i.createRenderbuffer(),Xe(E.__webglDepthbuffer[K],L,!1);else{let ae=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=E.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,Me),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,Me)}}else{let K=L.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),Xe(E.__webglDepthbuffer,L,!1);else{let ae=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Me),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,Me)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ve(L,E,J){let K=n.get(L);E!==void 0&&Ie(K.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&de(L)}function Se(L){let E=L.texture,J=n.get(L),K=n.get(E);L.addEventListener("dispose",v);let ae=L.textures,Me=L.isWebGLCubeRenderTarget===!0,Pe=ae.length>1;if(Pe||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=E.version,o.memory.textures++),Me){J.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer[ue]=[];for(let me=0;me<E.mipmaps.length;me++)J.__webglFramebuffer[ue][me]=i.createFramebuffer()}else J.__webglFramebuffer[ue]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer=[];for(let ue=0;ue<E.mipmaps.length;ue++)J.__webglFramebuffer[ue]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(Pe)for(let ue=0,me=ae.length;ue<me;ue++){let O=n.get(ae[ue]);O.__webglTexture===void 0&&(O.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&Le(L)===!1){J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let ue=0;ue<ae.length;ue++){let me=ae[ue];J.__webglColorRenderbuffer[ue]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[ue]);let O=r.convert(me.format,me.colorSpace),q=r.convert(me.type),z=_(me.internalFormat,O,q,me.normalized,me.colorSpace,L.isXRRenderTarget===!0),ee=De(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,z,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,J.__webglColorRenderbuffer[ue])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),Xe(J.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Me){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),ze(i.TEXTURE_CUBE_MAP,E);for(let ue=0;ue<6;ue++)if(E.mipmaps&&E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)Ie(J.__webglFramebuffer[ue][me],L,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,me);else Ie(J.__webglFramebuffer[ue],L,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);g(E)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let ue=0,me=ae.length;ue<me;ue++){let O=ae[ue],q=n.get(O),z=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(z=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(z,q.__webglTexture),ze(z,O),Ie(J.__webglFramebuffer,L,O,i.COLOR_ATTACHMENT0+ue,z,0),g(O)&&y(z)}t.unbindTexture()}else{let ue=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ue=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,K.__webglTexture),ze(ue,E),E.mipmaps&&E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)Ie(J.__webglFramebuffer[me],L,E,i.COLOR_ATTACHMENT0,ue,me);else Ie(J.__webglFramebuffer,L,E,i.COLOR_ATTACHMENT0,ue,0);g(E)&&y(ue),t.unbindTexture()}L.depthBuffer&&de(L)}function Ee(L){let E=L.textures;for(let J=0,K=E.length;J<K;J++){let ae=E[J];if(g(ae)){let Me=M(L),Pe=n.get(ae).__webglTexture;t.bindTexture(Me,Pe),y(Me),t.unbindTexture()}}}let Y=[],ye=[];function Ae(L){if(L.samples>0){if(Le(L)===!1){let E=L.textures,J=L.width,K=L.height,ae=i.COLOR_BUFFER_BIT,Me=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=n.get(L),ue=E.length>1;if(ue)for(let O=0;O<E.length;O++)t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+O,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+O,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);let me=L.texture.mipmaps;me&&me.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let O=0;O<E.length;O++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),ue){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[O]);let q=n.get(E[O]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,q,0)}i.blitFramebuffer(0,0,J,K,0,0,J,K,ae,i.NEAREST),l===!0&&(Y.length=0,ye.length=0,Y.push(i.COLOR_ATTACHMENT0+O),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&(Y.push(Me),ye.push(Me),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ye)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Y))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ue)for(let O=0;O<E.length;O++){t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+O,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[O]);let q=n.get(E[O]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+O,i.TEXTURE_2D,q,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){let E=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function De(L){return Math.min(s.maxSamples,L.samples)}function Le(L){let E=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function H(L){let E=o.render.frame;h.get(L)!==E&&(h.set(L,E),L.update())}function $e(L,E){let J=L.colorSpace,K=L.format,ae=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||J!==to&&J!==qi&&(It.getTransfer(J)===Ft?(K!==In||ae!==En)&&ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ft("WebGLTextures: Unsupported texture color space:",J)),E}function ut(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=B,this.getTextureUnits=N,this.setTextureUnits=W,this.setTexture2D=I,this.setTexture2DArray=G,this.setTexture3D=X,this.setTextureCube=Q,this.rebindTextures=ve,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=Le,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function rv(i,e){function t(n,s=qi){let r,o=It.getTransfer(s);if(n===En)return i.UNSIGNED_BYTE;if(n===Il)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ll)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Uh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Nh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Lh)return i.BYTE;if(n===Dh)return i.SHORT;if(n===wr)return i.UNSIGNED_SHORT;if(n===Pl)return i.INT;if(n===mi)return i.UNSIGNED_INT;if(n===Vn)return i.FLOAT;if(n===Kt)return i.HALF_FLOAT;if(n===Fh)return i.ALPHA;if(n===Bh)return i.RGB;if(n===In)return i.RGBA;if(n===Mi)return i.DEPTH_COMPONENT;if(n===Ri)return i.DEPTH_STENCIL;if(n===Dl)return i.RED;if(n===Ul)return i.RED_INTEGER;if(n===as)return i.RG;if(n===Nl)return i.RG_INTEGER;if(n===Fl)return i.RGBA_INTEGER;if(n===Wo||n===Xo||n===qo||n===Yo)if(o===Ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Wo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Wo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===qo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Yo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Bl||n===Ol||n===Hl||n===zl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Bl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ol)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Hl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===zl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Gl||n===kl||n===Vl||n===Wl||n===Xl||n===Zo||n===ql)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Gl||n===kl)return o===Ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Vl)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Wl)return r.COMPRESSED_R11_EAC;if(n===Xl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Zo)return r.COMPRESSED_RG11_EAC;if(n===ql)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Yl||n===Zl||n===$l||n===Jl||n===Kl||n===Ql||n===jl||n===ec||n===tc||n===nc||n===ic||n===sc||n===rc||n===oc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Yl)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Zl)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$l)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Jl)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Kl)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ql)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===jl)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ec)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===tc)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===nc)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ic)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===sc)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===rc)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===oc)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ac||n===lc||n===cc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ac)return o===Ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===lc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===cc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===hc||n===uc||n===$o||n===fc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===hc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===uc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$o)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===os?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var ov=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,av=`
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

}`,uu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new xo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Vt({vertexShader:ov,fragmentShader:av,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Te(new Ut(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},fu=class extends Si{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null,x=typeof XRWebGLBinding<"u",m=new uu,g={},y=t.getContextAttributes(),M=null,_=null,b=[],S=[],R=new ge,v=null,T=null,A=new pn;A.viewport=new Gt;let C=new pn;C.viewport=new Gt;let D=[A,C],B=new bl,N=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let le=b[oe];return le===void 0&&(le=new ur,b[oe]=le),le.getTargetRaySpace()},this.getControllerGrip=function(oe){let le=b[oe];return le===void 0&&(le=new ur,b[oe]=le),le.getGripSpace()},this.getHand=function(oe){let le=b[oe];return le===void 0&&(le=new ur,b[oe]=le),le.getHandSpace()};function k(oe){let le=S.indexOf(oe.inputSource);if(le===-1)return;let be=b[le];be!==void 0&&(be.update(oe.inputSource,oe.frame,c||o),be.dispatchEvent({type:oe.type,data:oe.inputSource}))}function j(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",I);for(let oe=0;oe<b.length;oe++){let le=S[oe];le!==null&&(S[oe]=null,b[oe].disconnect(le))}N=null,W=null,m.reset();for(let oe in g)delete g[oe];if(e.setRenderTarget(M),f=null,u=null,d=null,s=null,_=null,We.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(R.width,R.height,!1),T!==null){let oe=T.camera;oe.fov=T.fov,oe.zoom=T.zoom,oe.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){r=oe,n.isPresenting===!0&&ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){a=oe,n.isPresenting===!0&&ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(oe){c=oe},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(oe){if(s=oe,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",j),s.addEventListener("inputsourceschange",I),y.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Ve=null,Ie=null;y.depth&&(Ie=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=y.stencil?Ri:Mi,Ve=y.stencil?os:mi);let Xe={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Xe),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),_=new Xt(u.textureWidth,u.textureHeight,{format:In,type:En,depthTexture:new Ti(u.textureWidth,u.textureHeight,Ve,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let be={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,be),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Xt(f.framebufferWidth,f.framebufferHeight,{format:In,type:En,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),We.setContext(s),We.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function I(oe){for(let le=0;le<oe.removed.length;le++){let be=oe.removed[le],Ve=S.indexOf(be);Ve>=0&&(S[Ve]=null,b[Ve].disconnect(be))}for(let le=0;le<oe.added.length;le++){let be=oe.added[le],Ve=S.indexOf(be);if(Ve===-1){for(let Xe=0;Xe<b.length;Xe++)if(Xe>=S.length){S.push(be),Ve=Xe;break}else if(S[Xe]===null){S[Xe]=be,Ve=Xe;break}if(Ve===-1)break}let Ie=b[Ve];Ie&&Ie.connect(be)}}let G=new U,X=new U;function Q(oe,le,be){G.setFromMatrixPosition(le.matrixWorld),X.setFromMatrixPosition(be.matrixWorld);let Ve=G.distanceTo(X),Ie=le.projectionMatrix.elements,Xe=be.projectionMatrix.elements,ht=Ie[14]/(Ie[10]-1),de=Ie[14]/(Ie[10]+1),ve=(Ie[9]+1)/Ie[5],Se=(Ie[9]-1)/Ie[5],Ee=(Ie[8]-1)/Ie[0],Y=(Xe[8]+1)/Xe[0],ye=ht*Ee,Ae=ht*Y,De=Ve/(-Ee+Y),Le=De*-Ee;if(le.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(Le),oe.translateZ(De),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),Ie[10]===-1)oe.projectionMatrix.copy(le.projectionMatrix),oe.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{let H=ht+De,$e=de+De,ut=ye-Le,L=Ae+(Ve-Le),E=ve*de/$e*H,J=Se*de/$e*H;oe.projectionMatrix.makePerspective(ut,L,E,J,H,$e),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function re(oe,le){le===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(le.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(s===null)return;let le=oe.near,be=oe.far;m.texture!==null&&(m.depthNear>0&&(le=m.depthNear),m.depthFar>0&&(be=m.depthFar)),B.near=C.near=A.near=le,B.far=C.far=A.far=be,(N!==B.near||W!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),N=B.near,W=B.far),B.layers.mask=oe.layers.mask|6,A.layers.mask=B.layers.mask&-5,C.layers.mask=B.layers.mask&-3;let Ve=oe.parent,Ie=B.cameras;re(B,Ve);for(let Xe=0;Xe<Ie.length;Xe++)re(Ie[Xe],Ve);Ie.length===2?Q(B,A,C):B.projectionMatrix.copy(A.projectionMatrix),T===null&&oe.isPerspectiveCamera&&(T={camera:oe,fov:oe.fov,zoom:oe.zoom}),pe(oe,B,Ve)};function pe(oe,le,be){be===null?oe.matrix.copy(le.matrixWorld):(oe.matrix.copy(be.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(le.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(le.projectionMatrix),oe.projectionMatrixInverse.copy(le.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=Ss*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(oe){l=oe,u!==null&&(u.fixedFoveation=oe),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=oe)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(oe){return g[oe]};let Fe=null;function ze(oe,le){if(h=le.getViewerPose(c||o),p=le,h!==null){let be=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let Ve=!1;be.length!==B.cameras.length&&(B.cameras.length=0,Ve=!0);for(let de=0;de<be.length;de++){let ve=be[de],Se=null;if(f!==null)Se=f.getViewport(ve);else{let Y=d.getViewSubImage(u,ve);Se=Y.viewport,de===0&&(e.setRenderTargetTextures(_,Y.colorTexture,Y.depthStencilTexture),e.setRenderTarget(_))}let Ee=D[de];Ee===void 0&&(Ee=new pn,Ee.layers.enable(de),Ee.viewport=new Gt,D[de]=Ee),Ee.matrix.fromArray(ve.transform.matrix),Ee.matrix.decompose(Ee.position,Ee.quaternion,Ee.scale),Ee.projectionMatrix.fromArray(ve.projectionMatrix),Ee.projectionMatrixInverse.copy(Ee.projectionMatrix).invert(),Ee.viewport.set(Se.x,Se.y,Se.width,Se.height),de===0&&(B.matrix.copy(Ee.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ve===!0&&B.cameras.push(Ee)}let Ie=s.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let de=d.getDepthInformation(be[0]);de&&de.isValid&&de.texture&&m.init(de,s.renderState)}if(Ie&&Ie.includes("camera-access")&&x){e.state.unbindTexture(),d=n.getBinding();for(let de=0;de<be.length;de++){let ve=be[de].camera;if(ve){let Se=g[ve];Se||(Se=new xo,g[ve]=Se);let Ee=d.getCameraImage(ve);Se.sourceTexture=Ee}}}}for(let be=0;be<b.length;be++){let Ve=S[be],Ie=b[be];Ve!==null&&Ie!==void 0&&Ie.update(Ve,le,c||o)}Fe&&Fe(oe,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),p=null}let We=new xd;We.setAnimationLoop(ze),this.setAnimationLoop=function(oe){Fe=oe},this.dispose=function(){}}},lv=new rt,Ed=new gt;Ed.set(-1,0,0,0,1,0,0,0,1);function cv(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Vh(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,y,M,_){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),u(m,g),g.isMeshPhysicalMaterial&&f(m,g,_)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,y,M):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===en&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===en&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let y=e.get(g),M=y.envMap,_=y.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(lv.makeRotationFromEuler(_)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Ed),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,M){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=M*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,y){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===en&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let y=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function hv(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,b){let S=b.program;n.uniformBlockBinding(_,S)}function c(_,b){let S=s[_.id];S===void 0&&(m(_),S=h(_),s[_.id]=S,_.addEventListener("dispose",y));let R=b.program;n.updateUBOMapping(_,R);let v=e.render.frame;r[_.id]!==v&&(u(_),r[_.id]=v)}function h(_){let b=d();_.__bindingPointIndex=b;let S=i.createBuffer(),R=_.__size,v=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,R,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,S),S}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return ft("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){let b=s[_.id],S=_.uniforms,R=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let v=0,T=S.length;v<T;v++){let A=S[v];if(Array.isArray(A))for(let C=0,D=A.length;C<D;C++)f(A[C],v,C,R);else f(A,v,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,b,S,R){if(x(_,b,S,R)===!0){let v=_.__offset,T=_.value;if(Array.isArray(T)){let A=0;for(let C=0;C<T.length;C++){let D=T[C],B=g(D);p(D,_.__data,A),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(A+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(T,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,_.__data)}}function p(_,b,S){typeof _=="number"||typeof _=="boolean"?b[0]=_:_.isMatrix3?(b[0]=_.elements[0],b[1]=_.elements[1],b[2]=_.elements[2],b[3]=0,b[4]=_.elements[3],b[5]=_.elements[4],b[6]=_.elements[5],b[7]=0,b[8]=_.elements[6],b[9]=_.elements[7],b[10]=_.elements[8],b[11]=0):ArrayBuffer.isView(_)?b.set(new _.constructor(_.buffer,_.byteOffset,b.length)):_.toArray(b,S)}function x(_,b,S,R){let v=_.value,T=b+"_"+S;if(R[T]===void 0)return typeof v=="number"||typeof v=="boolean"?R[T]=v:ArrayBuffer.isView(v)?R[T]=v.slice():R[T]=v.clone(),!0;{let A=R[T];if(typeof v=="number"||typeof v=="boolean"){if(A!==v)return R[T]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(A.equals(v)===!1)return A.copy(v),!0}}return!1}function m(_){let b=_.uniforms,S=0,R=16;for(let T=0,A=b.length;T<A;T++){let C=Array.isArray(b[T])?b[T]:[b[T]];for(let D=0,B=C.length;D<B;D++){let N=C[D],W=Array.isArray(N.value)?N.value:[N.value];for(let k=0,j=W.length;k<j;k++){let I=W[k],G=g(I),X=S%R,Q=X%G.boundary,re=X+Q;S+=Q,re!==0&&R-re<G.storage&&(S+=R-re),N.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=S,S+=G.storage}}}let v=S%R;return v>0&&(S+=R-v),_.__size=S,_.__cache={},this}function g(_){let b={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=48,b.storage=48):_.isMatrix4?(b.boundary=64,b.storage=64):_.isTexture?ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(b.boundary=16,b.storage=_.byteLength):ot("WebGLRenderer: Unsupported uniform value type.",_),b}function y(_){let b=_.target;b.removeEventListener("dispose",y);let S=o.indexOf(b.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function M(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:M}}var uv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ai=null;function fv(){return Ai===null&&(Ai=new Ei(uv,16,16,as,Kt),Ai.name="DFG_LUT",Ai.minFilter=_n,Ai.magFilter=_n,Ai.wrapS=vi,Ai.wrapT=vi,Ai.generateMipmaps=!1,Ai.needsUpdate=!0),Ai}var _c=class{constructor(e={}){let{canvas:t=Of(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=En}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=f,m=new Set([Fl,Nl,Ul]),g=new Set([En,mi,wr,os,Il,Ll]),y=new Uint32Array(4),M=new Int32Array(4),_=new U,b=null,S=null,R=[],v=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,C=!1,D=null,B=null,N=null,W=null;this._outputColorSpace=Ot;let k=0,j=0,I=null,G=-1,X=null,Q=new Gt,re=new Gt,pe=null,Fe=new Re(0),ze=0,We=t.width,oe=t.height,le=1,be=null,Ve=null,Ie=new Gt(0,0,We,oe),Xe=new Gt(0,0,We,oe),ht=!1,de=new gr,ve=!1,Se=!1,Ee=new rt,Y=new U,ye=new Gt,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},De=!1;function Le(){return I===null?le:1}let H=n;function $e(w,Z){return t.getContext(w,Z)}let ut,L,E,J,K,ae,Me,Pe,ue,me,O,q,z,ee,te,ne,fe,F,_e,he,Ce,Ue,xe;try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Nt,!1),t.addEventListener("webglcontextrestored",Lt,!1),t.addEventListener("webglcontextcreationerror",ln,!1),H===null){let Z="webgl2";if(H=$e(Z,w),H===null)throw $e(Z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ke()}catch(w){throw t.removeEventListener("webglcontextlost",Nt,!1),t.removeEventListener("webglcontextrestored",Lt,!1),t.removeEventListener("webglcontextcreationerror",ln,!1),ft("WebGLRenderer: "+w.message),w}function Ke(){ut=new vx(H),ut.init(),Ce=new rv(H,ut),L=new cx(H,ut,e,Ce),E=new iv(H,ut),L.reversedDepthBuffer&&u&&E.buffers.depth.setReversed(!0),B=H.createFramebuffer(),N=H.createFramebuffer(),W=H.createFramebuffer(),J=new Sx(H),K=new V_,ae=new sv(H,ut,E,K,L,Ce,J),Me=new _x(A),Pe=new b0(H),Ue=new ax(H,Pe),ue=new yx(H,Pe,J,Ue),me=new bx(H,ue,Pe,Ue,J),F=new Ex(H,L,ae),te=new hx(K),O=new k_(A,Me,ut,L,Ue,te),q=new cv(A,K),z=new X_,ee=new K_(ut),fe=new ox(A,Me,E,me,p,l),ne=new nv(A,me,L),xe=new hv(H,J,L,E),_e=new lx(H,ut,J),he=new Mx(H,ut,J),J.programs=O.programs,A.capabilities=L,A.extensions=ut,A.properties=K,A.renderLists=z,A.shadowMap=ne,A.state=E,A.info=J}x!==En&&(T=new wx(x,t.width,t.height,a,s,r));let Qe=new fu(A,H);this.xr=Qe,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let w=ut.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=ut.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(w){w!==void 0&&(le=w,this.setSize(We,oe,!1))},this.getSize=function(w){return w.set(We,oe)},this.setSize=function(w,Z,ce=!0){if(Qe.isPresenting){ot("WebGLRenderer: Can't change size while VR device is presenting.");return}We=w,oe=Z,t.width=Math.floor(w*le),t.height=Math.floor(Z*le),ce===!0&&(t.style.width=w+"px",t.style.height=Z+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,w,Z)},this.getDrawingBufferSize=function(w){return w.set(We*le,oe*le).floor()},this.setDrawingBufferSize=function(w,Z,ce){We=w,oe=Z,le=ce,t.width=Math.floor(w*ce),t.height=Math.floor(Z*ce),this.setViewport(0,0,w,Z)},this.setEffects=function(w){if(x===En){ft("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let Z=0;Z<w.length;Z++)if(w[Z].isOutputPass===!0){ot("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(Q)},this.getViewport=function(w){return w.copy(Ie)},this.setViewport=function(w,Z,ce,ie){w.isVector4?Ie.set(w.x,w.y,w.z,w.w):Ie.set(w,Z,ce,ie),E.viewport(Q.copy(Ie).multiplyScalar(le).round())},this.getScissor=function(w){return w.copy(Xe)},this.setScissor=function(w,Z,ce,ie){w.isVector4?Xe.set(w.x,w.y,w.z,w.w):Xe.set(w,Z,ce,ie),E.scissor(re.copy(Xe).multiplyScalar(le).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(w){E.setScissorTest(ht=w)},this.setOpaqueSort=function(w){be=w},this.setTransparentSort=function(w){Ve=w},this.getClearColor=function(w){return w.copy(fe.getClearColor())},this.setClearColor=function(){fe.setClearColor(...arguments)},this.getClearAlpha=function(){return fe.getClearAlpha()},this.setClearAlpha=function(){fe.setClearAlpha(...arguments)},this.clear=function(w=!0,Z=!0,ce=!0){let ie=0;if(w){let se=!1;if(I!==null){let Ge=I.texture.format;se=m.has(Ge)}if(se){let Ge=I.texture.type,Ye=g.has(Ge),Oe=fe.getClearColor(),Je=fe.getClearAlpha(),et=Oe.r,_t=Oe.g,vt=Oe.b;Ye?(y[0]=et,y[1]=_t,y[2]=vt,y[3]=Je,H.clearBufferuiv(H.COLOR,0,y)):(M[0]=et,M[1]=_t,M[2]=vt,M[3]=Je,H.clearBufferiv(H.COLOR,0,M))}else ie|=H.COLOR_BUFFER_BIT}Z&&(ie|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ce&&(ie|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&H.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),D=w},this.dispose=function(){t.removeEventListener("webglcontextlost",Nt,!1),t.removeEventListener("webglcontextrestored",Lt,!1),t.removeEventListener("webglcontextcreationerror",ln,!1),fe.dispose(),z.dispose(),ee.dispose(),K.dispose(),Me.dispose(),me.dispose(),Ue.dispose(),xe.dispose(),O.dispose(),Qe.dispose(),Qe.removeEventListener("sessionstart",ii),Qe.removeEventListener("sessionend",Rn),Un.stop()};function Nt(w){w.preventDefault(),so("WebGLRenderer: Context Lost."),C=!0}function Lt(){so("WebGLRenderer: Context Restored."),C=!1;let w=J.autoReset,Z=ne.enabled,ce=ne.autoUpdate,ie=ne.needsUpdate,se=ne.type;Ke(),J.autoReset=w,ne.enabled=Z,ne.autoUpdate=ce,ne.needsUpdate=ie,ne.type=se}function ln(w){ft("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function wn(w){let Z=w.target;Z.removeEventListener("dispose",wn),Fr(Z)}function Fr(w){Fs(w),K.remove(w)}function Fs(w){let Z=K.get(w).programs;Z!==void 0&&(Z.forEach(function(ce){O.releaseProgram(ce)}),w.isShaderMaterial&&O.releaseShaderCache(w))}this.renderBufferDirect=function(w,Z,ce,ie,se,Ge){Z===null&&(Z=Ae);let Ye=se.isMesh&&se.matrixWorld.determinantAffine()<0,Oe=Hs(w,Z,ce,ie,se);E.setMaterial(ie,Ye);let Je=ce.index,et=1;if(ie.wireframe===!0){if(Je=ue.getWireframeAttribute(ce),Je===void 0)return;et=2}let _t=ce.drawRange,vt=ce.attributes.position,je=_t.start*et,V=(_t.start+_t.count)*et;Ge!==null&&(je=Math.max(je,Ge.start*et),V=Math.min(V,(Ge.start+Ge.count)*et)),Je!==null?(je=Math.max(je,0),V=Math.min(V,Je.count)):vt!=null&&(je=Math.max(je,0),V=Math.min(V,vt.count));let nt=V-je;if(nt<0||nt===1/0)return;Ue.setup(se,ie,Oe,ce,Je);let tt,He=_e;if(Je!==null&&(tt=Pe.get(Je),He=he,He.setIndex(tt)),se.isMesh)ie.wireframe===!0?(E.setLineWidth(ie.wireframeLinewidth*Le()),He.setMode(H.LINES)):He.setMode(H.TRIANGLES);else if(se.isLine){let st=ie.linewidth;st===void 0&&(st=1),E.setLineWidth(st*Le()),se.isLineSegments?He.setMode(H.LINES):se.isLineLoop?He.setMode(H.LINE_LOOP):He.setMode(H.LINE_STRIP)}else se.isPoints?He.setMode(H.POINTS):se.isSprite&&He.setMode(H.TRIANGLES);if(se.isBatchedMesh)if(ut.get("WEBGL_multi_draw"))He.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else{let st=se._multiDrawStarts,we=se._multiDrawCounts,mt=se._multiDrawCount,qe=Je?Pe.get(Je).bytesPerElement:1,Tt=K.get(ie).currentProgram.getUniforms();for(let Rt=0;Rt<mt;Rt++)Tt.setValue(H,"_gl_DrawID",Rt),He.render(st[Rt]/qe,we[Rt])}else if(se.isInstancedMesh)He.renderInstances(je,nt,se.count);else if(ce.isInstancedBufferGeometry){let st=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,we=Math.min(ce.instanceCount,st);He.renderInstances(je,nt,we)}else He.render(je,nt)};function Ni(w,Z,ce,ie){D!==null&&w.isNodeMaterial&&D.setObject(ie,w),ve===!0&&te.setState(w,ce,!1),w.transparent===!0&&w.side===Bt&&w.forceSinglePass===!1?(w.side=en,w.needsUpdate=!0,Bn(w,Z,ie),w.side=di,w.needsUpdate=!0,Bn(w,Z,ie),w.side=Bt):Bn(w,Z,ie)}this.compile=function(w,Z,ce=null){ce===null&&(ce=w),D!==null&&D.renderStart(w,Z,ce),S=ee.get(ce),S.init(Z),v.push(S),ce.traverseVisible(function(se){se.isLight&&se.layers.test(Z.layers)&&(S.pushLight(se),se.castShadow&&S.pushShadow(se))}),w!==ce&&w.traverseVisible(function(se){se.isLight&&se.layers.test(Z.layers)&&(S.pushLight(se),se.castShadow&&S.pushShadow(se))}),S.setupLights(),D!==null&&D.updateLights(S.state.lightsArray),Se=this.localClippingEnabled,ve=te.init(this.clippingPlanes,Se),ve===!0&&te.setGlobalState(this.clippingPlanes,Z),D!==null&&ne.render(S.state.shadowsArray,ce,Z);let ie=new Set;return w.traverse(function(se){if(!(se.isMesh||se.isPoints||se.isLine||se.isSprite))return;let Ge=se.material;if(Ge)if(Array.isArray(Ge))for(let Ye=0;Ye<Ge.length;Ye++){let Oe=Ge[Ye];Ni(Oe,ce,Z,se),ie.add(Oe)}else Ni(Ge,ce,Z,se),ie.add(Ge)}),S=v.pop(),D!==null&&D.renderEnd(),ie},this.compileAsync=function(w,Z,ce=null){let ie=this.compile(w,Z,ce);return new Promise(se=>{function Ge(){if(ie.forEach(function(Ye){let Je=K.get(Ye).currentProgram;(Je===void 0||Je.isReady())&&ie.delete(Ye)}),ie.size===0){se(w);return}setTimeout(Ge,10)}ut.get("KHR_parallel_shader_compile")!==null?Ge():setTimeout(Ge,10)})};let ps=null;function tn(w){ps&&ps(w)}function ii(){Un.stop()}function Rn(){Un.start()}let Un=new xd;Un.setAnimationLoop(tn),typeof self<"u"&&Un.setContext(self),this.setAnimationLoop=function(w){ps=w,Qe.setAnimationLoop(w),w===null?Un.stop():Un.start()},Qe.addEventListener("sessionstart",ii),Qe.addEventListener("sessionend",Rn),this.render=function(w,Z){if(Z!==void 0&&Z.isCamera!==!0){ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;D!==null&&D.renderStart(w,Z);let ce=Qe.enabled===!0&&Qe.isPresenting===!0,ie=T!==null&&(I===null||ce)&&T.begin(A,I);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Qe.enabled===!0&&Qe.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Qe.cameraAutoUpdate===!0&&Qe.updateCamera(Z),Z=Qe.getCamera()),w.isScene===!0&&w.onBeforeRender(A,w,Z,I),S=ee.get(w,v.length),S.init(Z),S.state.textureUnits=ae.getTextureUnits(),v.push(S),Ee.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),de.setFromProjectionMatrix(Ee,ci,Z.reversedDepth),Se=this.localClippingEnabled,ve=te.init(this.clippingPlanes,Se),b=z.get(w,R.length),b.init(),R.push(b),Qe.enabled===!0&&Qe.isPresenting===!0){let Ye=A.xr.getDepthSensingMesh();Ye!==null&&gi(Ye,Z,-1/0,A.sortObjects)}gi(w,Z,0,A.sortObjects),b.finish(),D!==null&&D.updateLights(S.state.lightsArray),A.sortObjects===!0&&b.sort(be,Ve),De=Qe.enabled===!1||Qe.isPresenting===!1||Qe.hasDepthSensing()===!1,De&&fe.addToRenderList(b,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ve===!0&&te.beginShadows();let se=S.state.shadowsArray;if(ne.render(se,w,Z),ve===!0&&te.endShadows(),(ie&&T.hasRenderPass())===!1){let Ye=b.opaque,Oe=b.transmissive;if(S.setupLights(),Z.isArrayCamera){let Je=Z.cameras;if(Oe.length>0)for(let et=0,_t=Je.length;et<_t;et++){let vt=Je[et];cn(Ye,Oe,w,vt)}De&&fe.render(w);for(let et=0,_t=Je.length;et<_t;et++){let vt=Je[et];Nn(b,w,vt,vt.viewport)}}else Oe.length>0&&cn(Ye,Oe,w,Z),De&&fe.render(w),Nn(b,w,Z)}I!==null&&j===0&&(ae.updateMultisampleRenderTarget(I),ae.updateRenderTargetMipmap(I)),ie&&T.end(A),w.isScene===!0&&w.onAfterRender(A,w,Z),Ue.resetDefaultState(),G=-1,X=null,v.pop(),v.length>0?(S=v[v.length-1],ae.setTextureUnits(S.state.textureUnits),ve===!0&&te.setGlobalState(A.clippingPlanes,S.state.camera)):S=null,R.pop(),R.length>0?b=R[R.length-1]:b=null,D!==null&&D.renderEnd()};function gi(w,Z,ce,ie){if(w.visible===!1)return;if(w.layers.test(Z.layers)){if(w.isGroup)ce=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Z);else if(w.isLightProbeGrid)S.pushLightProbeGrid(w);else if(w.isLight)S.pushLight(w),w.castShadow&&S.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(de)){ie&&ye.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ee);let Ye=me.update(w),Oe=w.material;Oe.visible&&b.push(w,Ye,Oe,ce,ye.z,null,Z)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(de))){let Ye=me.update(w),Oe=w.material;if(ie&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ye.copy(w.boundingSphere.center)):(Ye.boundingSphere===null&&Ye.computeBoundingSphere(),ye.copy(Ye.boundingSphere.center)),ye.applyMatrix4(w.matrixWorld).applyMatrix4(Ee)),Array.isArray(Oe)){let Je=Ye.groups;for(let et=0,_t=Je.length;et<_t;et++){let vt=Je[et],je=Oe[vt.materialIndex];je&&je.visible&&b.push(w,Ye,je,ce,ye.z,vt,Z)}}else Oe.visible&&b.push(w,Ye,Oe,ce,ye.z,null,Z)}}let Ge=w.children;for(let Ye=0,Oe=Ge.length;Ye<Oe;Ye++)gi(Ge[Ye],Z,ce,ie)}function Nn(w,Z,ce,ie){let{opaque:se,transmissive:Ge,transparent:Ye}=w;S.setupLightsView(ce),ve===!0&&te.setGlobalState(A.clippingPlanes,ce),ie&&E.viewport(Q.copy(ie)),se.length>0&&Bs(se,Z,ce),Ge.length>0&&Bs(Ge,Z,ce),Ye.length>0&&Bs(Ye,Z,ce),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function cn(w,Z,ce,ie){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[ie.id]===void 0){let je=ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[ie.id]=new Xt(1,1,{generateMipmaps:!0,type:je?Kt:En,minFilter:rs,samples:Math.max(4,L.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:It.workingColorSpace})}let Ge=S.state.transmissionRenderTarget[ie.id],Ye=ie.viewport||Q;Ge.setSize(Ye.z*A.transmissionResolutionScale,Ye.w*A.transmissionResolutionScale);let Oe=A.getRenderTarget(),Je=A.getActiveCubeFace(),et=A.getActiveMipmapLevel();A.setRenderTarget(Ge),A.getClearColor(Fe),ze=A.getClearAlpha(),ze<1&&A.setClearColor(16777215,.5),A.clear(),De&&fe.render(ce);let _t=A.toneMapping;A.toneMapping=pi;let vt=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),S.setupLightsView(ie),ve===!0&&te.setGlobalState(A.clippingPlanes,ie),Bs(w,ce,ie),ae.updateMultisampleRenderTarget(Ge),ae.updateRenderTargetMipmap(Ge),ut.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let V=0,nt=Z.length;V<nt;V++){let tt=Z[V],{object:He,geometry:st,material:we,group:mt}=tt;if(we.side===Bt&&He.layers.test(ie.layers)){let qe=we.side;we.side=en,we.needsUpdate=!0,Fn(He,ce,ie,st,we,mt),we.side=qe,we.needsUpdate=!0,je=!0}}je===!0&&(ae.updateMultisampleRenderTarget(Ge),ae.updateRenderTargetMipmap(Ge))}A.setRenderTarget(Oe,Je,et),A.setClearColor(Fe,ze),vt!==void 0&&(ie.viewport=vt),A.toneMapping=_t}function Bs(w,Z,ce){let ie=Z.isScene===!0?Z.overrideMaterial:null;for(let se=0,Ge=w.length;se<Ge;se++){let Ye=w[se],{object:Oe,geometry:Je,group:et}=Ye,_t=Ye.material;_t.allowOverride===!0&&ie!==null&&(_t=ie),Oe.layers.test(ce.layers)&&Fn(Oe,Z,ce,Je,_t,et)}}function Fn(w,Z,ce,ie,se,Ge){D!==null&&se.isNodeMaterial&&D.setObject(w,se),w.onBeforeRender(A,Z,ce,ie,se,Ge),w.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),se.onBeforeRender(A,Z,ce,ie,w,Ge),se.transparent===!0&&se.side===Bt&&se.forceSinglePass===!1?(se.side=en,se.needsUpdate=!0,A.renderBufferDirect(ce,Z,ie,se,w,Ge),se.side=di,se.needsUpdate=!0,A.renderBufferDirect(ce,Z,ie,se,w,Ge),se.side=Bt):A.renderBufferDirect(ce,Z,ie,se,w,Ge),w.onAfterRender(A,Z,ce,ie,se,Ge)}function Bn(w,Z,ce){Z.isScene!==!0&&(Z=Ae);let ie=K.get(w),se=S.state.lights,Ge=S.state.shadowsArray,Ye=se.state.version,Oe=O.getParameters(w,se.state,Ge,Z,ce,S.state.lightProbeGridArray),Je=O.getProgramCacheKey(Oe),et=ie.programs;ie.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?Z.environment:null,ie.fog=Z.fog;let _t=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;ie.envMap=Me.get(w.envMap||ie.environment,_t),ie.envMapRotation=ie.environment!==null&&w.envMap===null?Z.environmentRotation:w.envMapRotation,et===void 0&&(w.addEventListener("dispose",wn),et=new Map,ie.programs=et);let vt=et.get(Je);if(vt!==void 0){if(ie.currentProgram===vt&&ie.lightsStateVersion===Ye)return gs(w,Oe),vt}else Oe.uniforms=O.getUniforms(w),D!==null&&w.isNodeMaterial&&D.build(w,ce,Oe),w.onBeforeCompile(Oe,A),vt=O.acquireProgram(Oe,Je),et.set(Je,vt),ie.uniforms=Oe.uniforms;let je=ie.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(je.clippingPlanes=te.uniform),gs(w,Oe),ie.needsLights=Bc(w),ie.lightsStateVersion=Ye,ie.needsLights&&(je.ambientLightColor.value=se.state.ambient,je.lightProbe.value=se.state.probe,je.sunLights.value=se.state.sun,je.sunLightShadows.value=se.state.sunShadow,je.directionalLights.value=se.state.directional,je.directionalLightShadows.value=se.state.directionalShadow,je.spotLights.value=se.state.spot,je.spotLightShadows.value=se.state.spotShadow,je.rectAreaLights.value=se.state.rectArea,je.ltc_1.value=se.state.rectAreaLTC1,je.ltc_2.value=se.state.rectAreaLTC2,je.pointLights.value=se.state.point,je.pointLightShadows.value=se.state.pointShadow,je.hemisphereLights.value=se.state.hemi,je.sunShadowMatrix.value=se.state.sunShadowMatrix,je.sunShadowCascade.value=se.state.sunShadowCascade,je.directionalShadowMatrix.value=se.state.directionalShadowMatrix,je.spotLightMatrix.value=se.state.spotLightMatrix,je.spotLightMap.value=se.state.spotLightMap,je.pointShadowMatrix.value=se.state.pointShadowMatrix),ie.lightProbeGrid=S.state.lightProbeGridArray.length>0,ie.currentProgram=vt,ie.uniformsList=null,vt}function ms(w){if(w.uniformsList===null){let Z=w.currentProgram.getUniforms();w.uniformsList=Cr.seqWithValue(Z.seq,w.uniforms)}return w.uniformsList}function gs(w,Z){let ce=K.get(w);ce.outputColorSpace=Z.outputColorSpace,ce.batching=Z.batching,ce.batchingColor=Z.batchingColor,ce.instancing=Z.instancing,ce.instancingColor=Z.instancingColor,ce.instancingMorph=Z.instancingMorph,ce.skinning=Z.skinning,ce.morphTargets=Z.morphTargets,ce.morphNormals=Z.morphNormals,ce.morphColors=Z.morphColors,ce.morphTargetsCount=Z.morphTargetsCount,ce.numClippingPlanes=Z.numClippingPlanes,ce.numIntersection=Z.numClipIntersection,ce.vertexAlphas=Z.vertexAlphas,ce.vertexTangents=Z.vertexTangents,ce.toneMapping=Z.toneMapping}function Os(w,Z){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;_.setFromMatrixPosition(Z.matrixWorld);for(let ce=0,ie=w.length;ce<ie;ce++){let se=w[ce];if(se.texture!==null&&se.boundingBox.containsPoint(_))return se}return null}function Hs(w,Z,ce,ie,se){Z.isScene!==!0&&(Z=Ae),ae.resetTextureUnits();let Ge=Z.fog,Ye=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?Z.environment:null,Oe=I===null?A.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:It.workingColorSpace,Je=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,et=Me.get(ie.envMap||Ye,Je),_t=ie.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,vt=!!ce.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),je=!!ce.morphAttributes.position,V=!!ce.morphAttributes.normal,nt=!!ce.morphAttributes.color,tt=pi;ie.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(tt=A.toneMapping);let He=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,st=He!==void 0?He.length:0,we=K.get(ie),mt=S.state.lights;if(ve===!0&&(Se===!0||w!==X)){let Dt=w===X&&ie.id===G;te.setState(ie,w,Dt)}let qe=!1;ie.version===we.__version?(we.needsLights&&we.lightsStateVersion!==mt.state.version||we.outputColorSpace!==Oe||se.isBatchedMesh&&we.batching===!1||!se.isBatchedMesh&&we.batching===!0||se.isBatchedMesh&&we.batchingColor===!0&&se._colorsTexture===null||se.isBatchedMesh&&we.batchingColor===!1&&se._colorsTexture!==null||se.isInstancedMesh&&we.instancing===!1||!se.isInstancedMesh&&we.instancing===!0||se.isSkinnedMesh&&we.skinning===!1||!se.isSkinnedMesh&&we.skinning===!0||se.isInstancedMesh&&we.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&we.instancingColor===!1&&se.instanceColor!==null||se.isInstancedMesh&&we.instancingMorph===!0&&se.morphTexture===null||se.isInstancedMesh&&we.instancingMorph===!1&&se.morphTexture!==null||we.envMap!==et||ie.fog===!0&&we.fog!==Ge||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==te.numPlanes||we.numIntersection!==te.numIntersection)||we.vertexAlphas!==_t||we.vertexTangents!==vt||we.morphTargets!==je||we.morphNormals!==V||we.morphColors!==nt||we.toneMapping!==tt||we.morphTargetsCount!==st||!!we.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(qe=!0):(qe=!0,we.__version=ie.version);let Tt=we.currentProgram;qe===!0&&(Tt=Bn(ie,Z,se),D&&ie.isNodeMaterial&&D.onUpdateProgram(ie,Tt,we));let Rt=!1,xn=!1,hn=!1,Pt=Tt.getUniforms(),Yt=we.uniforms;if(E.useProgram(Tt.program)&&(Rt=!0,xn=!0,hn=!0),ie.id!==G&&(G=ie.id,xn=!0),we.needsLights){let Dt=Os(S.state.lightProbeGridArray,se);we.lightProbeGrid!==Dt&&(we.lightProbeGrid=Dt,xn=!0)}if(Rt||X!==w){E.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Pt.setValue(H,"projectionMatrix",w.projectionMatrix),Pt.setValue(H,"viewMatrix",w.matrixWorldInverse);let An=Pt.map.cameraPosition;An!==void 0&&An.setValue(H,Y.setFromMatrixPosition(w.matrixWorld)),L.logarithmicDepthBuffer&&Pt.setValue(H,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Pt.setValue(H,"isOrthographic",w.isOrthographicCamera===!0),X!==w&&(X=w,xn=!0,hn=!0)}if(we.needsLights&&(mt.state.sunShadowMap.length>0&&Pt.setValue(H,"sunShadowMap",mt.state.sunShadowMap,ae),mt.state.directionalShadowMap.length>0&&Pt.setValue(H,"directionalShadowMap",mt.state.directionalShadowMap,ae),mt.state.spotShadowMap.length>0&&Pt.setValue(H,"spotShadowMap",mt.state.spotShadowMap,ae),mt.state.pointShadowMap.length>0&&Pt.setValue(H,"pointShadowMap",mt.state.pointShadowMap,ae)),se.isSkinnedMesh){Pt.setOptional(H,se,"bindMatrix"),Pt.setOptional(H,se,"bindMatrixInverse");let Dt=se.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),Pt.setValue(H,"boneTexture",Dt.boneTexture,ae))}se.isBatchedMesh&&(Pt.setOptional(H,se,"batchingTexture"),Pt.setValue(H,"batchingTexture",se._matricesTexture,ae),Pt.setOptional(H,se,"batchingIdTexture"),Pt.setValue(H,"batchingIdTexture",se._indirectTexture,ae),Pt.setOptional(H,se,"batchingColorTexture"),se._colorsTexture!==null&&Pt.setValue(H,"batchingColorTexture",se._colorsTexture,ae));let Yn=ce.morphAttributes;if((Yn.position!==void 0||Yn.normal!==void 0||Yn.color!==void 0)&&F.update(se,ce,Tt),(xn||we.receiveShadow!==se.receiveShadow)&&(we.receiveShadow=se.receiveShadow,Pt.setValue(H,"receiveShadow",se.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&Z.environment!==null&&(Yt.envMapIntensity.value=Z.environmentIntensity),Yt.dfgLUT!==void 0&&(Yt.dfgLUT.value=fv()),xn){if(Pt.setValue(H,"toneMappingExposure",A.toneMappingExposure),we.needsLights&&ua(Yt,hn),Ge&&ie.fog===!0&&q.refreshFogUniforms(Yt,Ge),q.refreshMaterialUniforms(Yt,ie,le,oe,S.state.transmissionRenderTarget[w.id]),we.needsLights&&we.lightProbeGrid){let Dt=we.lightProbeGrid;Yt.probesSH.value=Dt.texture,Yt.probesMin.value.copy(Dt.boundingBox.min),Yt.probesMax.value.copy(Dt.boundingBox.max),Yt.probesResolution.value.copy(Dt.resolution)}Cr.upload(H,ms(we),Yt,ae)}if(ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Cr.upload(H,ms(we),Yt,ae),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Pt.setValue(H,"center",se.center),Pt.setValue(H,"modelViewMatrix",se.modelViewMatrix),Pt.setValue(H,"normalMatrix",se.normalMatrix),Pt.setValue(H,"modelMatrix",se.matrixWorld),ie.uniformsGroups!==void 0){let Dt=ie.uniformsGroups;for(let An=0,xi=Dt.length;An<xi;An++){let fa=Dt[An];xe.update(fa,Tt),xe.bind(fa,Tt)}}return Tt}function ua(w,Z){w.ambientLightColor.needsUpdate=Z,w.lightProbe.needsUpdate=Z,w.sunLights.needsUpdate=Z,w.sunLightShadows.needsUpdate=Z,w.directionalLights.needsUpdate=Z,w.directionalLightShadows.needsUpdate=Z,w.pointLights.needsUpdate=Z,w.pointLightShadows.needsUpdate=Z,w.spotLights.needsUpdate=Z,w.spotLightShadows.needsUpdate=Z,w.rectAreaLights.needsUpdate=Z,w.hemisphereLights.needsUpdate=Z}function Bc(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(w,Z,ce){let ie=K.get(w);ie.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),K.get(w.texture).__webglTexture=Z,K.get(w.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:ce,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,Z){let ce=K.get(w);ce.__webglFramebuffer=Z,ce.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(w,Z=0,ce=0){I=w,k=Z,j=ce;let ie=null,se=!1,Ge=!1;if(w){let Oe=K.get(w);if(Oe.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(H.FRAMEBUFFER,Oe.__webglFramebuffer),Q.copy(w.viewport),re.copy(w.scissor),pe=w.scissorTest,E.viewport(Q),E.scissor(re),E.setScissorTest(pe),G=-1;return}else if(Oe.__webglFramebuffer===void 0)ae.setupRenderTarget(w);else if(Oe.__hasExternalTextures)ae.rebindTextures(w,K.get(w.texture).__webglTexture,K.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let _t=w.depthTexture;if(Oe.__boundDepthTexture!==_t){if(_t!==null&&K.has(_t)&&(w.width!==_t.image.width||w.height!==_t.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(w)}}let Je=w.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Ge=!0);let et=K.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(et[Z])?ie=et[Z][ce]:ie=et[Z],se=!0):w.samples>0&&ae.useMultisampledRTT(w)===!1?ie=K.get(w).__webglMultisampledFramebuffer:Array.isArray(et)?ie=et[ce]:ie=et,Q.copy(w.viewport),re.copy(w.scissor),pe=w.scissorTest}else Q.copy(Ie).multiplyScalar(le).floor(),re.copy(Xe).multiplyScalar(le).floor(),pe=ht;if(ce!==0&&(ie=B),E.bindFramebuffer(H.FRAMEBUFFER,ie)&&E.drawBuffers(w,ie),E.viewport(Q),E.scissor(re),E.setScissorTest(pe),se){let Oe=K.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Oe.__webglTexture,ce)}else if(Ge){let Oe=Z;for(let Je=0;Je<w.textures.length;Je++){let et=K.get(w.textures[Je]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Je,et.__webglTexture,ce,Oe)}}else if(w!==null&&ce!==0){let Oe=K.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Oe.__webglTexture,ce)}G=-1};function zs(w){let Z=K.get(w);return(Z.__readFormat!==w.format||Z.__readType!==w.type)&&(Z.__readFormat=w.format,Z.__readType=w.type,Z.__formatReadable=L.textureFormatReadable(w.format),Z.__typeReadable=L.textureTypeReadable(w.type)),Z}this.readRenderTargetPixels=function(w,Z,ce,ie,se,Ge,Ye,Oe=0){if(!(w&&w.isWebGLRenderTarget)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Je=K.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ye!==void 0&&(Je=Je[Ye]),Je){E.bindFramebuffer(H.FRAMEBUFFER,Je);try{let et=w.textures[Oe],_t=et.format,vt=et.type;w.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Oe);let je=zs(et);if(je.__formatReadable===!1){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(je.__typeReadable===!1){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=w.width-ie&&ce>=0&&ce<=w.height-se&&H.readPixels(Z,ce,ie,se,Ce.convert(_t),Ce.convert(vt),Ge)}finally{let et=I!==null?K.get(I).__webglFramebuffer:null;E.bindFramebuffer(H.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(w,Z,ce,ie,se,Ge,Ye,Oe=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Je=K.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ye!==void 0&&(Je=Je[Ye]),Je)if(Z>=0&&Z<=w.width-ie&&ce>=0&&ce<=w.height-se){E.bindFramebuffer(H.FRAMEBUFFER,Je);let et=w.textures[Oe],_t=et.format,vt=et.type;w.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Oe);let je=zs(et);if(je.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(je.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let V=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,V),H.bufferData(H.PIXEL_PACK_BUFFER,Ge.byteLength,H.STREAM_READ),H.readPixels(Z,ce,ie,se,Ce.convert(_t),Ce.convert(vt),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let nt=I!==null?K.get(I).__webglFramebuffer:null;E.bindFramebuffer(H.FRAMEBUFFER,nt);let tt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await zf(H,tt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,V),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Ge),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(V),H.deleteSync(tt),Ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,Z=null,ce=0){let ie=Math.pow(2,-ce),se=Math.floor(w.image.width*ie),Ge=Math.floor(w.image.height*ie),Ye=Z!==null?Z.x:0,Oe=Z!==null?Z.y:0;ae.setTexture2D(w,0),H.copyTexSubImage2D(H.TEXTURE_2D,ce,0,0,Ye,Oe,se,Ge),E.unbindTexture()},this.copyTextureToTexture=function(w,Z,ce=null,ie=null,se=0,Ge=0){let Ye,Oe,Je,et,_t,vt,je,V,nt,tt=w.isCompressedTexture?w.mipmaps[Ge]:w.image;if(ce!==null)Ye=ce.max.x-ce.min.x,Oe=ce.max.y-ce.min.y,Je=ce.isBox3?ce.max.z-ce.min.z:1,et=ce.min.x,_t=ce.min.y,vt=ce.isBox3?ce.min.z:0;else{let Yt=Math.pow(2,-se);Ye=Math.floor(tt.width*Yt),Oe=Math.floor(tt.height*Yt),w.isDataArrayTexture?Je=tt.depth:w.isData3DTexture?Je=Math.floor(tt.depth*Yt):Je=1,et=0,_t=0,vt=0}ie!==null?(je=ie.x,V=ie.y,nt=ie.z):(je=0,V=0,nt=0);let He=Ce.convert(Z.format),st=Ce.convert(Z.type),we;Z.isData3DTexture?(ae.setTexture3D(Z,0),we=H.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(ae.setTexture2DArray(Z,0),we=H.TEXTURE_2D_ARRAY):(ae.setTexture2D(Z,0),we=H.TEXTURE_2D),E.activeTexture(H.TEXTURE0),E.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Z.flipY),E.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),E.pixelStorei(H.UNPACK_ALIGNMENT,Z.unpackAlignment);let mt=E.getParameter(H.UNPACK_ROW_LENGTH),qe=E.getParameter(H.UNPACK_IMAGE_HEIGHT),Tt=E.getParameter(H.UNPACK_SKIP_PIXELS),Rt=E.getParameter(H.UNPACK_SKIP_ROWS),xn=E.getParameter(H.UNPACK_SKIP_IMAGES);E.pixelStorei(H.UNPACK_ROW_LENGTH,tt.width),E.pixelStorei(H.UNPACK_IMAGE_HEIGHT,tt.height),E.pixelStorei(H.UNPACK_SKIP_PIXELS,et),E.pixelStorei(H.UNPACK_SKIP_ROWS,_t),E.pixelStorei(H.UNPACK_SKIP_IMAGES,vt);let hn=w.isDataArrayTexture||w.isData3DTexture,Pt=Z.isDataArrayTexture||Z.isData3DTexture;if(w.isDepthTexture){let Yt=K.get(w),Yn=K.get(Z),Dt=K.get(Yt.__renderTarget),An=K.get(Yn.__renderTarget);E.bindFramebuffer(H.READ_FRAMEBUFFER,Dt.__webglFramebuffer),E.bindFramebuffer(H.DRAW_FRAMEBUFFER,An.__webglFramebuffer);for(let xi=0;xi<Je;xi++)hn&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,K.get(w).__webglTexture,se,vt+xi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,K.get(Z).__webglTexture,Ge,nt+xi)),H.blitFramebuffer(et,_t,Ye,Oe,je,V,Ye,Oe,H.DEPTH_BUFFER_BIT,H.NEAREST);E.bindFramebuffer(H.READ_FRAMEBUFFER,null),E.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(se!==0||w.isRenderTargetTexture||K.has(w)){let Yt=K.get(w),Yn=K.get(Z);E.bindFramebuffer(H.READ_FRAMEBUFFER,N),E.bindFramebuffer(H.DRAW_FRAMEBUFFER,W);for(let Dt=0;Dt<Je;Dt++)hn?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Yt.__webglTexture,se,vt+Dt):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Yt.__webglTexture,se),Pt?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Yn.__webglTexture,Ge,nt+Dt):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Yn.__webglTexture,Ge),se!==0?H.blitFramebuffer(et,_t,Ye,Oe,je,V,Ye,Oe,H.COLOR_BUFFER_BIT,H.NEAREST):Pt?H.copyTexSubImage3D(we,Ge,je,V,nt+Dt,et,_t,Ye,Oe):H.copyTexSubImage2D(we,Ge,je,V,et,_t,Ye,Oe);E.bindFramebuffer(H.READ_FRAMEBUFFER,null),E.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Pt?w.isDataTexture||w.isData3DTexture?H.texSubImage3D(we,Ge,je,V,nt,Ye,Oe,Je,He,st,tt.data):Z.isCompressedArrayTexture?H.compressedTexSubImage3D(we,Ge,je,V,nt,Ye,Oe,Je,He,tt.data):H.texSubImage3D(we,Ge,je,V,nt,Ye,Oe,Je,He,st,tt):w.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Ge,je,V,Ye,Oe,He,st,tt.data):w.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Ge,je,V,tt.width,tt.height,He,tt.data):H.texSubImage2D(H.TEXTURE_2D,Ge,je,V,Ye,Oe,He,st,tt);E.pixelStorei(H.UNPACK_ROW_LENGTH,mt),E.pixelStorei(H.UNPACK_IMAGE_HEIGHT,qe),E.pixelStorei(H.UNPACK_SKIP_PIXELS,Tt),E.pixelStorei(H.UNPACK_SKIP_ROWS,Rt),E.pixelStorei(H.UNPACK_SKIP_IMAGES,xn),Ge===0&&Z.generateMipmaps&&H.generateMipmap(we),E.unbindTexture()},this.initRenderTarget=function(w){K.get(w).__webglFramebuffer===void 0&&ae.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ae.setTextureCube(w,0):w.isData3DTexture?ae.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ae.setTexture2DArray(w,0):ae.setTexture2D(w,0),E.unbindTexture()},this.resetState=function(){k=0,j=0,I=null,E.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=It._getDrawingBufferColorSpace(e),t.unpackColorSpace=It._getUnpackColorSpace()}};var Pi={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Dn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},dv=new Rs(-1,1,1,-1,0,1),du=class extends wt{constructor(){super(),this.setAttribute("position",new at([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new at([0,2,0,0,2,0],2))}},pv=new du,Ii=class{constructor(e){this._mesh=new Te(pv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,dv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Dr=class extends Dn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Vt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ln.clone(e.uniforms),this.material=new Vt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ii(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ea=class extends Dn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Mc=class extends Dn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Sc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ge);this._width=n.width,this._height=n.height,t=new Xt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Kt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Dr(Pi),this.copyPass.material.blending=Jt,this.timer=new Do}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ea!==void 0&&(o instanceof ea?n=!0:o instanceof Mc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ge);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var ta=class extends Dn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Re}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var bd={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Re(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Ur=class i extends Dn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ge(e.x,e.y):new ge(256,256),this.clearColor=new Re(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Xt(r,o,{type:Kt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Xt(r,o,{type:Kt,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new Xt(r,o,{type:Kt,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}let a=bd;this.highPassUniforms=Ln.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Vt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ge(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ln.clone(Pi.uniforms),this.blendMaterial=new Vt({uniforms:this.copyUniforms,vertexShader:Pi.vertexShader,fragmentShader:Pi.fragmentShader,premultipliedAlpha:!0,blending:gn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Re,this._oldClearAlpha=1,this._basic=new yt,this._fsQuad=new Ii(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ge(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let s=[],r=[];for(let o=1;o<e;o+=2){let a=t[o],l=o+1<e?t[o+1]:0,c=a+l;s.push((o*a+(o+1)*l)/c),r.push(c)}return new Vt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new ge(.5,.5)},direction:{value:new ge(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Vt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};Ur.BlurDirectionX=new ge(1,0);Ur.BlurDirectionY=new ge(0,1);var na={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var ia=class extends Dn{constructor(){super(),this.isOutputPass=!0,this.uniforms=Ln.clone(na.uniforms),this.material=new Mr({name:na.name,uniforms:this.uniforms,vertexShader:na.vertexShader,fragmentShader:na.fragmentShader}),this._fsQuad=new Ii(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},It.getTransfer(this._outputColorSpace)===Ft&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Fo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Bo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Oo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===is?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===zo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Go?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ho&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var sa=new U;function ei(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;sa.copy(e),sa[n]=0,sa.normalize();let c=.5*o/(o+a),h=1-sa.angleTo(i)/l;return Math.sign(sa[t])===1?h*c:a/(o+a)+c+c*(1-h)}var ls=class i extends pt{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new U,c=new U,h=new U(e,t,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,p=d.length/6,x=new U,m=.5/o;for(let g=0,y=0;g<d.length;g+=3,y+=2)switch(l.fromArray(d,g),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[g+0]=h.x*Math.sign(l.x)+c.x*r,d[g+1]=h.y*Math.sign(l.y)+c.y*r,d[g+2]=h.z*Math.sign(l.z)+c.z*r,u[g+0]=c.x,u[g+1]=c.y,u[g+2]=c.z,Math.floor(g/p)){case 0:x.set(1,0,0),f[y+0]=ei(x,c,"z","y",r,n),f[y+1]=1-ei(x,c,"y","z",r,t);break;case 1:x.set(-1,0,0),f[y+0]=1-ei(x,c,"z","y",r,n),f[y+1]=1-ei(x,c,"y","z",r,t);break;case 2:x.set(0,1,0),f[y+0]=1-ei(x,c,"x","z",r,e),f[y+1]=ei(x,c,"z","x",r,n);break;case 3:x.set(0,-1,0),f[y+0]=1-ei(x,c,"x","z",r,e),f[y+1]=1-ei(x,c,"z","x",r,n);break;case 4:x.set(0,0,1),f[y+0]=1-ei(x,c,"x","y",r,e),f[y+1]=1-ei(x,c,"y","x",r,t);break;case 5:x.set(0,0,-1),f[y+0]=ei(x,c,"x","y",r,e),f[y+1]=1-ei(x,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var cs=.1171875,Qt=1.875*11,mv=1.875*15+1.4,gv={C:0,D:2,E:4,F:5,G:7,A:9,B:11};function Li(i){let e=/^([A-G])(#|b)?(-?\d)$/.exec(i),t=gv[e[1]]+(e[2]==="#"?1:e[2]==="b"?-1:0);return 440*2**(((Number(e[3])+1)*12+t-69)/12)}function Ds(i,e){let t=Math.imul(i|0,374761393)^Math.imul(e|0,668265263);return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967296}var xv=[null,"Am","Am","F","C","G","Am","F","C","G","E7","A","Fsm","D","E"],_v={Am:["A","C","E"],F:["F","A","C"],C:["C","E","G"],G:["G","B","D"],E7:["E","G#","B","D"],A:["A","C#","E"],Fsm:["F#","A","C#"],D:["D","F#","A"],E:["E","G#","B"]},vv={Am:"A",F:"F",C:"C",G:"G",E7:"E",A:"A",Fsm:"F#",D:"D",E:"E"},yv={6:[[0,"E5",2],[2,"A5",2],[4,"C6",1],[5,"B5",1],[6,"A5",2],[8,"G#5",1],[9,"A5",3],[12,"E5",4]],7:[[0,"F5",2],[2,"A5",2],[4,"C6",2],[6,"D6",1],[7,"C6",1],[8,"A5",2],[10,"F5",2],[12,"G5",2],[14,"A5",2]],8:[[0,"G5",2],[2,"E5",1],[3,"G5",1],[4,"C6",2],[6,"E6",2],[8,"D6",1],[9,"C6",1],[10,"B5",2],[12,"G5",4]],9:[[0,"B5",1],[1,"C6",1],[2,"D6",2],[4,"B5",2],[6,"G5",2],[8,"A5",1],[9,"B5",1],[10,"C6",1],[11,"D6",1],[12,"E6",4]],11:[[0,"A5",4],[4,"C#6",2],[6,"E6",2],[8,"A6",6],[14,"G#6",1],[15,"F#6",1]],12:[[0,"F#6",4],[4,"E6",2],[6,"C#6",2],[8,"A5",4],[12,"C#6",4]],13:[[0,"D6",2],[2,"F#6",2],[4,"A6",4],[8,"G#6",2],[10,"F#6",2],[12,"E6",4]],14:[[0,"E6",2],[2,"G#6",2],[4,"B6",4],[8,"G#6",2],[10,"B6",2],[12,"C#7",4]]};function Mv(){let i=[],e=(n,s)=>n*1.875+s*cs,t=["A5","C6","D6","E6","G6","A6"];for(let n=0;n<32;n++)Ds(n,1)>.45&&i.push({t:e(0,n),k:"blip",f:Li(t[Math.floor(Ds(n,2)*t.length)]),v:.5+.5*(n/32)});for(let n=0;n<16;n+=2)i.push({t:e(1,n),k:"bass",f:Li("A1"),d:cs*1.6,v:.4+n*.03,cut:300+n*90});for(let n=0;n<16;n+=2)i.push({t:e(1,n+1),k:"hat",v:.25});i.push({t:e(1,12),k:"riserShort"});for(let n=2;n<=14;n++){let s=xv[n],r=_v[s],o=vv[s],a=n>=11,l=n===10;if(l){for(let h of[0,4,8,12])i.push({t:e(n,h),k:"kick",v:1});for(let h=0;h<8;h+=2)i.push({t:e(n,h),k:"snare",v:.35+h*.04});for(let h=8;h<15;h++)i.push({t:e(n,h),k:"snare",v:.55+(h-8)*.06});i.push({t:e(n,0),k:"riser",d:1.875-cs})}else{for(let h of[0,4,8,12])i.push({t:e(n,h),k:"kick",v:1});n%2===1&&i.push({t:e(n,14),k:"kick",v:.7});for(let h of[4,12])i.push({t:e(n,h),k:"snare",v:.9});for(let h=2;h<16;h+=4)i.push({t:e(n,h),k:"hat",v:.45,open:a&&h===14});if(n>=6)for(let h=1;h<16;h+=2)i.push({t:e(n,h),k:"hat",v:.18})}let c=[[0,2],[2,3],[3,2],[6,3],[8,2],[10,3],[11,2],[14,3]];if(l)for(let h=0;h<15;h+=2)i.push({t:e(n,h),k:"bass",f:Li(`${o}${h%4===0?2:3}`),d:cs*1.5,v:.8,cut:600+h*160});else for(let[h,d]of c)i.push({t:e(n,h),k:"bass",f:Li(`${o}${d}`),d:cs*1.4,v:.85,cut:a?1400:900});if(n>=3){let h=[...r.map(d=>`${d}4`),`${r[0]}5`];for(let d=0;d<16;d++)l&&d===15||i.push({t:e(n,d),k:"arp",f:Li(h[d%h.length]),v:a?.32:.24})}a&&i.push({t:e(n,0),k:"pad",fs:r.map(h=>Li(`${h}3`)),d:1.875*.98});for(let[h,d,u]of yv[n]||[])i.push({t:e(n,h),k:"lead",f:Li(d),d:u*cs*.92,v:a?.55:.5});if(n>=3&&n<=5)for(let h=0;h<16;h+=1)Ds(n*16+h,9)>.78&&i.push({t:e(n,h),k:"bloop",f:300+Ds(h,n)*500});if(n>=6&&n<=9)for(let h=0;h<16;h+=1)Ds(n*16+h,4)>.82&&i.push({t:e(n,h),k:"crackle",d:.05+Ds(h,n)*.12})}return i.push({t:Qt,k:"boom"}),i.push({t:Qt,k:"crash"}),i.push({t:1.875*15,k:"kick",v:1}),i.push({t:1.875*15,k:"crash"}),i.push({t:1.875*15,k:"pad",fs:["A3","C#4","E4","A4"].map(Li),d:1.3}),i.push({t:1.875*15,k:"lead",f:Li("A6"),d:1.1,v:.5}),i.push({t:1.875*15,k:"bass",f:Li("A1"),d:1.2,v:.9,cut:900}),i.sort((n,s)=>n.t-s.t)}function Td(i,e=.25){let n=new Float32Array(64),s=new Float32Array(64);for(let r=1;r<64;r++)n[r]=2/(r*Math.PI)*Math.sin(r*Math.PI*e);return i.createPeriodicWave(n,s)}function wd(i){let e=i.createBuffer(1,i.sampleRate,i.sampleRate),t=e.getChannelData(0),n=12345;for(let s=0;s<t.length;s++)n=Math.imul(n,1103515245)+12345|0,t[s]=(n>>>16&32767)/16384-1;return e}function Wn(i,e,t,n,s,r=.05){i.gain.setValueAtTime(1e-4,e),i.gain.exponentialRampToValueAtTime(Math.max(2e-4,n),e+t),i.gain.setValueAtTime(Math.max(2e-4,n),e+Math.max(t,s)),i.gain.exponentialRampToValueAtTime(1e-4,e+Math.max(t,s)+r)}function Rd(i,e,t,n){let{out:s,send:r,noise:o,pulse:a}=e,l=(u,f)=>{let p=i.createOscillator();return u==="pulse"?p.setPeriodicWave(a):p.type=u,p.frequency.setValueAtTime(f,n),p},c=()=>i.createGain(),h=(u,f,p=.7)=>{let x=i.createBiquadFilter();return x.type=u,x.frequency.setValueAtTime(f,n),x.Q.value=p,x},d=()=>{let u=i.createBufferSource();return u.buffer=o,u};switch(t.k){case"kick":{let u=l("sine",160),f=c();u.frequency.exponentialRampToValueAtTime(42,n+.13),Wn(f,n,.004,.95*t.v,.02,.32),u.connect(f).connect(s),u.start(n),u.stop(n+.45);break}case"snare":{let u=d(),f=h("bandpass",1900,.8),p=c();Wn(p,n,.002,.42*t.v,.01,.16),u.connect(f).connect(p).connect(s),u.start(n),u.stop(n+.25);let x=l("triangle",190),m=c();Wn(m,n,.002,.25*t.v,.01,.09),x.connect(m).connect(s),x.start(n),x.stop(n+.15);break}case"hat":{let u=d(),f=h("highpass",7500),p=c();Wn(p,n,.001,.16*t.v,.005,t.open?.22:.045),u.connect(f).connect(p).connect(s),u.start(n),u.stop(n+.3);break}case"crash":{let u=d(),f=h("highpass",3800),p=c();Wn(p,n,.003,.28,.02,1.6),u.connect(f).connect(p).connect(s),u.start(n),u.stop(n+1.8);break}case"bass":{let u=l("sawtooth",t.f),f=l("square",t.f/2),p=h("lowpass",t.cut*2,4),x=c(),m=c();p.frequency.exponentialRampToValueAtTime(Math.max(80,t.cut*.4),n+t.d),m.gain.value=.35,Wn(x,n,.005,.38*t.v,t.d*.75,.06),u.connect(p),f.connect(m).connect(p),p.connect(x).connect(s),u.start(n),f.start(n),u.stop(n+t.d+.1),f.stop(n+t.d+.1);break}case"arp":{let u=l("pulse",t.f*2),f=h("lowpass",3800),p=c();Wn(p,n,.003,.11*t.v,.02,.07),u.connect(f).connect(p),p.connect(s),p.connect(r),u.start(n),u.stop(n+.12);break}case"lead":{let u=l("sawtooth",t.f),f=l("sawtooth",t.f);f.detune.value=9,u.detune.value=-7;let p=l("sine",5.6),x=c();x.gain.setValueAtTime(0,n),x.gain.linearRampToValueAtTime(9,n+.18),p.connect(x),x.connect(u.detune),x.connect(f.detune);let m=h("lowpass",3400,2),g=c();Wn(g,n,.012,.13*t.v,t.d,.09),u.connect(m),f.connect(m),m.connect(g),g.connect(s),g.connect(r);for(let y of[u,f,p])y.start(n),y.stop(n+t.d+.15);break}case"pad":{for(let u of t.fs){let f=l("triangle",u),p=l("sine",u*2),x=c();Wn(x,n,.25,.055,t.d,.6),f.connect(x),p.connect(x),x.connect(s),x.connect(r),f.start(n),p.start(n),f.stop(n+t.d+.7),p.stop(n+t.d+.7)}break}case"blip":{let u=l("square",t.f),f=c(),p=h("lowpass",5e3);Wn(f,n,.002,.06*t.v,.04,.03),u.connect(p).connect(f),f.connect(s),f.connect(r),u.start(n),u.stop(n+.1);break}case"bloop":{let u=l("sine",t.f),f=c();u.frequency.exponentialRampToValueAtTime(t.f*2.4,n+.11),Wn(f,n,.004,.16,.06,.05),u.connect(f),f.connect(s),f.connect(r),u.start(n),u.stop(n+.16);break}case"crackle":{let u=d(),f=h("highpass",2500),p=c();p.gain.setValueAtTime(1e-4,n);let x=8;for(let m=0;m<x;m++)p.gain.setValueAtTime(Ds(m,Math.round(n*1e3))>.5?.12:1e-4,n+t.d*m/x);p.gain.setValueAtTime(1e-4,n+t.d),u.connect(f).connect(p).connect(s),u.start(n),u.stop(n+t.d+.02);break}case"riserShort":case"riser":{let u=t.d||.46875,f=d();f.loop=!0;let p=h("bandpass",300,2.5),x=c();p.frequency.exponentialRampToValueAtTime(7e3,n+u),x.gain.setValueAtTime(1e-4,n),x.gain.exponentialRampToValueAtTime(t.k==="riser"?.3:.12,n+u),x.gain.exponentialRampToValueAtTime(1e-4,n+u+.04),f.connect(p).connect(x).connect(s),f.start(n),f.stop(n+u+.06);break}case"boom":{let u=l("sine",75),f=c();u.frequency.exponentialRampToValueAtTime(28,n+1.4),Wn(f,n,.005,.9,.05,1.5),u.connect(f).connect(s),u.start(n),u.stop(n+1.7);let p=d();p.loop=!0;let x=h("lowpass",4e3,.5),m=c();x.frequency.exponentialRampToValueAtTime(160,n+1.6),Wn(m,n,.003,.55,.05,1.6),p.connect(x).connect(m).connect(s),p.start(n),p.stop(n+1.8);break}default:break}}function Ad(){let i=Mv(),e=null,t=null,n=0,s=0,r=null,o=!1;function a(){if(e)return e;let c=window.AudioContext||window.webkitAudioContext;if(!c)return null;e=new c;let h=e.createGain();h.gain.value=o?0:.32;let d=e.createDynamicsCompressor();d.threshold.value=-14,d.ratio.value=4,d.attack.value=.005,d.release.value=.2,h.connect(d).connect(e.destination);let u=e.createDelay(1);u.delayTime.value=cs*3;let f=e.createGain();f.gain.value=.28;let p=e.createBiquadFilter();p.type="lowpass",p.frequency.value=2600;let x=e.createGain();return x.gain.value=.35,u.connect(p).connect(f).connect(u),p.connect(x).connect(h),t={out:h,send:u,master:h,noise:wd(e),pulse:Td(e)},e}function l(){if(!e||e.state!=="running")return;let c=e.currentTime-n+.25;for(;s<i.length&&i[s].t<c;){let h=i[s++],d=n+h.t;d>=e.currentTime-.01&&Rd(e,t,h,Math.max(d,e.currentTime+.005))}}return{prepare(){try{a()}catch{}},async play(c){if(!a())return!1;if(e.state!=="running")try{await e.resume()}catch{}return e.state!=="running"?!1:(n=e.currentTime+.06-c,s=i.findIndex(h=>h.t>=c-.001),s<0&&(s=i.length),clearInterval(r),r=setInterval(l,25),l(),!0)},running:()=>!!e&&e.state==="running"&&r!==null,position:()=>e&&e.state==="running"?e.currentTime-n:null,setMuted(c){o=c,t&&t.master.gain.setTargetAtTime(c?0:.32,e.currentTime,.05)},suspend(){e&&e.state==="running"&&e.suspend()},resume(){return e&&e.state==="suspended"?e.resume():Promise.resolve()},stop(c=.4){if(clearInterval(r),r=null,!e)return;let h=e;try{t.master.gain.setTargetAtTime(0,h.currentTime,c/3)}catch{}setTimeout(()=>{h.close().catch(()=>{})},c*1e3+200),e=null},async renderOffline(c=22050){let h=window.OfflineAudioContext,d=new h(1,Math.ceil(mv*c),c),u=d.createGain();u.gain.value=.32;let f=d.createDynamicsCompressor();f.threshold.value=-14,f.ratio.value=4,u.connect(f).connect(d.destination);let p=d.createDelay(1);p.delayTime.value=cs*3;let x=d.createGain();x.gain.value=.28;let m=d.createBiquadFilter();m.type="lowpass",m.frequency.value=2600;let g=d.createGain();g.gain.value=.35,p.connect(m).connect(x).connect(p),m.connect(g).connect(u);let y={out:u,send:p,master:u,noise:wd(d),pulse:Td(d)};for(let M of i)Rd(d,y,M,M.t+.01);return d.startRendering()},events:i}}function Pd(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new wt,c=0;for(let h=0;h<i.length;++h){let d=i[h],u=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0,d=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let p=0;p<f.count;++p)d.push(f.getX(p)+h);h+=i[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=Cd(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][u]);let p=Cd(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function Cd(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new At(o,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let d=l/t;for(let u=0,f=h.count;u<f;u++)for(let p=0;p<t;p++){let x=h.getComponent(u,p);a.setComponent(u+d,p,x)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}var Di=i=>Math.min(1,Math.max(0,i)),dt=(i,e,t)=>Di((i-e)/(t-e)),Et=i=>i*i*(3-2*i),pu=i=>i<.5?4*i*i*i:1-(-2*i+2)**3/2,xt=(i,e,t)=>i+(e-i)*t;function $(i,e=0){let t=Math.imul(i|0,374761393)^Math.imul(e|0,668265263);return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967296}var P=(i,e,t)=>new U(i,e,t),bt=(i,e=1)=>new Re(i).multiplyScalar(e),Yi=class{constructor(){this.pos=[],this.nor=[],this.col=[],this.idx=[],this.n=0}addGeometry(e,t,n){let s=e.attributes.position,r=e.attributes.normal,o=new gt().getNormalMatrix(t),a=new U;for(let l=0;l<s.count;l++)a.fromBufferAttribute(s,l).applyMatrix4(t),this.pos.push(a.x,a.y,a.z),a.fromBufferAttribute(r,l).applyMatrix3(o).normalize(),this.nor.push(a.x,a.y,a.z),this.col.push(n.r,n.g,n.b);if(e.index)for(let l=0;l<e.index.count;l++)this.idx.push(e.index.getX(l)+this.n);else for(let l=0;l<s.count;l++)this.idx.push(l+this.n);this.n+=s.count,e.dispose()}addTube(e,{segs:t=12,radial:n=6,prof:s,col:r}){let o=e.computeFrenetFrames(t,!1),a=new U,l=new U,c=this.n;for(let h=0;h<=t;h++){let d=h/t;e.getPointAt(d,a);let u=s(d),f=r(d),p=o.normals[h],x=o.binormals[h];for(let m=0;m<=n;m++){let g=m/n*Math.PI*2,y=Math.sin(g),M=-Math.cos(g);l.set(M*p.x+y*x.x,M*p.y+y*x.y,M*p.z+y*x.z).normalize(),this.nor.push(l.x,l.y,l.z),this.pos.push(a.x+u*l.x,a.y+u*l.y,a.z+u*l.z),this.col.push(f.r,f.g,f.b)}}for(let h=1;h<=t;h++)for(let d=1;d<=n;d++){let u=c+(n+1)*(h-1)+(d-1),f=c+(n+1)*h+(d-1),p=c+(n+1)*h+d,x=c+(n+1)*(h-1)+d;this.idx.push(u,f,x,f,p,x)}this.n+=(t+1)*(n+1)}build(){let e=new wt;return e.setAttribute("position",new at(this.pos,3)),e.setAttribute("normal",new at(this.nor,3)),e.setAttribute("color",new at(this.col,3)),e.setIndex(this.idx),e.computeBoundingSphere(),e}};function hs(i,{deep:e=!0,skip:t=()=>!1}={}){i.updateMatrixWorld(!0);let n=new rt().copy(i.matrixWorld).invert(),s=new Map,r=a=>{for(let l of a.children)if(!t(l))if(l.isMesh){if(l.isInstancedMesh||l.userData.keep||Array.isArray(l.material)||!l.visible)continue;let c=[l.material.uuid,l.castShadow,l.receiveShadow,!!l.userData.noDepth,!!l.userData.noCast,l.renderOrder,l.frustumCulled].join("|");s.has(c)||s.set(c,[]),s.get(c).push(l)}else e&&l.children.length&&!l.isPoints&&!l.isLine&&!l.isSprite&&r(l)};r(i);let o=new rt;for(let a of s.values()){if(a.length<2)continue;let l=a.some(p=>p.geometry.attributes.uv),c=a.some(p=>p.geometry.attributes.color),h=a.map(p=>{let x=p.geometry.index?p.geometry.toNonIndexed():p.geometry.clone();for(let g of Object.keys(x.attributes))["position","normal","uv","color"].includes(g)||x.deleteAttribute(g);x.attributes.normal||x.computeVertexNormals();let m=x.attributes.position.count;return l&&!x.attributes.uv&&x.setAttribute("uv",new at(new Float32Array(m*2),2)),!l&&x.attributes.uv&&x.deleteAttribute("uv"),c&&!x.attributes.color&&x.setAttribute("color",new at(new Float32Array(m*3).fill(1),3)),!c&&x.attributes.color&&x.deleteAttribute("color"),x.morphAttributes={},x.clearGroups(),o.multiplyMatrices(n,p.matrixWorld),x.applyMatrix4(o),x}),d=Pd(h,!1);if(h.forEach(p=>p.dispose()),!d)continue;let u=a[0],f=new Te(d,u.material);f.castShadow=u.castShadow,f.receiveShadow=u.receiveShadow,f.renderOrder=u.renderOrder,f.frustumCulled=u.frustumCulled,f.userData={...u.userData},i.add(f);for(let p of a)p.removeFromParent(),p.geometry.dispose()}}var ti=Math.PI*2,bc={grandpa:{skin:15777688,hair:14278115,brow:13620443,style:"swept",beard:!0,mustache:!0,glasses:"round",frame:13212222,eye:7029795,head:[.25,.262,.245],eyeR:.05,eyeX:.088,eyeY:.035,nose:.06,noseRed:.3,mouthY:-.142,mouthW:.08,belly:1,shirt:7114677,tie:"bow",tieColor:12071482,browR:.019,cheeks:!0,badge:"Pr Anatole",wrinkles:"old",extra:"chain",shoe:5911072},wild:{skin:16044732,hair:15988216,brow:15988216,style:"wild",goatee:!0,glasses:"thick",frame:1315864,eye:4102988,head:[.232,.285,.235],eyeR:.06,eyeX:.083,eyeY:.05,nose:.064,noseRed:.55,mouthY:-.122,mouthW:.084,belly:0,shirt:3108762,vest:3817032,tie:null,browR:.025,chin:!0,badge:"Dr Eustache",wrinkles:"grin",extra:"pencil",shoe:2501171},curly:{skin:10118212,hair:12867628,brow:7219730,style:"puff",goggles:!0,eye:6963987,head:[.238,.258,.24],eyeR:.058,eyeX:.086,eyeY:.035,nose:.042,noseRed:.12,mouthY:-.115,mouthW:.064,belly:.2,shirt:2001546,tie:null,browR:.012,cheeks:!0,lashes:!0,lidOpen:-.25,badge:"Dr Margot",freckles:!0,extra:"clipboard",shoe:8007226}};function Sv(i,e,t){let n=(a,l)=>t*Math.sqrt(Math.max(0,1-(a/i)**2-(l/e)**2)),s=a=>P(a.x/(i*i),a.y/(e*e),a.z/(t*t)).normalize();return{zS:n,normal:s,surf:(a,l,c=0)=>{let h=P(a,l,n(a,l));return h.addScaledVector(s(h),c)},dirPt:(a,l,c=1)=>P(Math.sin(a)*Math.cos(l)*i*c,Math.sin(l)*e*c,Math.cos(a)*Math.cos(l)*t*c)}}function Ev(i){let e=document.createElement("canvas");e.width=256,e.height=128;let t=e.getContext("2d");t.fillStyle="#f6f2ec",t.fillRect(0,0,256,128);let n=t.createRadialGradient(64,64,34,64,64,120);n.addColorStop(0,"rgba(255,255,255,0)"),n.addColorStop(1,"rgba(214,140,140,0.45)"),t.fillStyle=n,t.fillRect(0,0,256,128);let s=new Re(i),r=l=>`rgb(${Math.min(255,Math.round(s.r*255*l))},${Math.min(255,Math.round(s.g*255*l))},${Math.min(255,Math.round(s.b*255*l))})`,o=t.createRadialGradient(64,64,6,64,64,24);o.addColorStop(0,r(1.6)),o.addColorStop(.65,r(1.05)),o.addColorStop(1,r(.5)),t.beginPath(),t.arc(64,64,24,0,ti),t.fillStyle=o,t.fill();for(let l=0;l<48;l++){let c=l/48*ti+$(l,5)*.08;t.strokeStyle=$(l,6)>.5?r(1.9):r(.55),t.globalAlpha=.35,t.lineWidth=1,t.beginPath(),t.moveTo(64+Math.cos(c)*11,64+Math.sin(c)*11),t.lineTo(64+Math.cos(c)*(19+$(l,7)*4),64+Math.sin(c)*(19+$(l,7)*4)),t.stroke()}t.globalAlpha=1,t.lineWidth=2.5,t.strokeStyle=r(.28),t.stroke(),t.beginPath(),t.arc(64,64,10.5,0,ti),t.fillStyle="#0a0706",t.fill(),t.fillStyle="rgba(255,255,255,0.95)",t.beginPath(),t.arc(56,55,5,0,ti),t.fill(),t.fillStyle="rgba(255,255,255,0.65)",t.beginPath(),t.arc(72,72,2.2,0,ti),t.fill();let a=new rn(e);return a.colorSpace=Ot,a.anisotropy=4,a}var Ec=null;function Id(){if(Ec)return Ec;let i=(n,s,r)=>{let o=document.createElement("canvas");o.width=n,o.height=s,r(o.getContext("2d"),n,s);let a=new rn(o);return a.wrapS=a.wrapT=sn,a},e=i(256,128,(n,s,r)=>{n.fillStyle="#808080",n.fillRect(0,0,s,r);for(let o=0;o<2600;o++){let a=110+Math.floor($(o,1)*50);n.fillStyle=`rgba(${a},${a},${a},0.5)`,n.beginPath(),n.arc($(o,2)*s,$(o,3)*r,.6+$(o,4)*1.2,0,ti),n.fill()}}),t=i(128,128,(n,s,r)=>{n.fillStyle="#808080",n.fillRect(0,0,s,r);for(let o=0;o<r;o+=2)n.fillStyle=o%4?"rgba(150,150,150,0.5)":"rgba(100,100,100,0.5)",n.fillRect(0,o,s,1);for(let o=0;o<s;o+=2)n.fillStyle=o%4?"rgba(140,140,140,0.35)":"rgba(110,110,110,0.35)",n.fillRect(o,0,1,r)});return t.repeat.set(10,10),Ec={skin:e,fabric:t},Ec}function bv(i){let e=document.createElement("canvas");e.width=256,e.height=128;let t=e.getContext("2d");t.fillStyle="#f8f6f0",t.fillRect(0,0,256,128),t.fillStyle="#1e8a8a",t.fillRect(0,0,256,34),t.fillStyle="#ffffff",t.font='700 22px "Bricolage Grotesque", sans-serif',t.textAlign="center",t.fillText("LABO",128,25),t.fillStyle="#1b2433",t.font='800 34px "Bricolage Grotesque", sans-serif',t.fillText(i,128,86),t.fillStyle="#e0446a",t.fillRect(96,104,64,8);let n=new rn(e);return n.colorSpace=Ot,n}function Tv(i,e,t,n){let s=e.clone().sub(i),r=new Te(new it(t,t,s.length(),8),n);return r.position.copy(i).addScaledVector(s,.5),r.quaternion.setFromUnitVectors(P(0,1,0),s.normalize()),r}function Tc(i){let e=new Ze,t=new Ze;e.add(t);let n=(O,q,z,ee=null,te=null,ne=null)=>{let fe=new Te(q,z);return ee&&fe.position.copy(ee),te&&fe.rotation.set(te[0],te[1],te[2]),ne&&fe.scale.copy(ne),O.add(fe),fe},s=new Re(i.skin),r=new Mt({color:s,roughness:.5,sheen:.55,sheenColor:new Re(16748408),sheenRoughness:.45,emissive:s.clone().multiplyScalar(.05),bumpMap:Id().skin,bumpScale:.35}),o=r.clone();o.color=s.clone().lerp(new Re(14704746),.3);let a=r.clone();a.color=s.clone().lerp(new Re(14178383),i.noseRed);let l=new Mt({color:15593971,roughness:.72,sheen:.6,sheenColor:new Re(16777215),sheenRoughness:.7,bumpMap:Id().fabric,bumpScale:.6}),c=new Ne({color:2830917,roughness:.85}),h=new Mt({color:i.shoe||3809558,roughness:.35,clearcoat:.7,clearcoatRoughness:.25}),d=new Ne({color:15327956,roughness:.8}),u=new Ne({color:i.shirt,roughness:.75}),f=new Re(i.hair),p=new Mt({vertexColors:!0,roughness:.55,sheen:1,sheenRoughness:.4,sheenColor:f.clone().lerp(new Re(16777215),.5)}),x=new Ne({color:1380366,roughness:.5}),m=new Mt({map:Ev(i.eye),roughness:.25,clearcoat:1,clearcoatRoughness:.05,emissive:16777215,emissiveIntensity:.04}),g=null;i.glasses==="round"?g=new Ne({color:i.frame,metalness:1,roughness:.25}):i.glasses&&(g=new Mt({color:i.frame,roughness:.3,clearcoat:1,clearcoatRoughness:.1}));let y=new Mt({color:16777215,transparent:!0,opacity:.1,roughness:.04,clearcoat:1,depthWrite:!1}),M=new Ne({color:13146696,metalness:1,roughness:.3});for(let O of[-1,1]){n(t,new Sn(.085,.32,6,12),c,P(O*.11,.3,0)),n(t,new lt(1,20,14),h,P(O*.115,.075,.055),null,P(.1,.07,.16)),n(t,new lt(1,20,10,0,ti,Math.PI*.5,Math.PI*.5),d,P(O*.115,.06,.055),null,P(.108,.05,.17));for(let q=0;q<3;q++)n(t,new it(.006,.006,.07,6),d,P(O*.115,.135-q*.008,.1+q*.03),[.35+q*.25,0,Math.PI/2])}let _=i.belly,b=[[.001,.4],[.27,.4],[.3,.43],[.285,.55],[.28+.06*_,.72],[.28+.075*_,.86],[.275+.04*_,.98],[.26,1.08],[.22,1.16],[.15,1.23],[.085,1.27],[.001,1.28]],S=O=>{for(let q=1;q<b.length;q++)if(O<=b[q][1]){let[z,ee]=b[q-1],[te,ne]=b[q];return xt(z,te,(O-ee)/(ne-ee))}return 0},R=.8;n(t,new fi(b.map(([O,q])=>new ge(O,q)),40),l,null,null,P(1,1,R));let v=(O,q=0)=>S(O)*R+q,T=new Ze;T.position.set(0,1.27,v(1.27)+.004),T.rotation.x=-.72,t.add(T);let A=(O,q,z)=>{let ee=new wi;return ee.moveTo(-O,0),ee.lineTo(O,0),ee.lineTo(0,-q),ee.closePath(),new wo(ee,{depth:z,bevelEnabled:!1})};if(i.vest){n(T,A(.12,.3,.02),new Ne({color:i.vest,roughness:.8})),n(T,A(.07,.13,.024),u);for(let O=0;O<2;O++)n(T,new lt(.012,8,6),x,P(0,-.15-O*.05,.022))}else n(T,A(.12,.3,.02),u);if(i.tie==="bow"){let O=new Ne({color:i.tieColor,roughness:.6});n(T,new lt(.018,10,8),O,P(0,-.03,.03));for(let q of[-1,1])n(T,new Wi(.03,.06,10),O,P(q*.035,-.03,.028),[0,0,q*Math.PI/2],P(1,1,.5))}for(let O of[-1,1])n(T,new pt(.04,.32,.018),l,P(O*.07,-.14,.024),[0,0,O*.38]);n(t,new kt(.1,.032,10,24),l,P(0,1.27,0),[Math.PI/2,0,0],P(1,1,.75)),n(t,new it(.07,.075,.14,14),r,P(0,1.31,0));for(let O of[.95,.8,.65])n(t,new lt(.016,10,8),x,P(0,O,v(O)+.004));for(let O of[-1,1]){let z=new Ze;z.position.set(O*.17,.66,v(.66)*.82),z.rotation.y=O*.62,t.add(z),n(z,new pt(.15,.13,.016),l,P(0,0,.012)),n(z,new pt(.16,.035,.022),l,P(0,.07,.016))}if(i.badge){let O=new Ze;O.position.set(-.13,1,v(1)-.02),O.rotation.set(-.15,-.5,.06),t.add(O),n(O,new pt(.1,.055,.006),new Ne({map:bv(i.badge),roughness:.35}),P(0,0,.012)),n(O,new pt(.02,.02,.008),M,P(0,.032,.012))}let C=new Ze;C.position.set(.13,.98,v(.98)-.03),C.rotation.y=.5,t.add(C),n(C,new pt(.11,.1,.02),l,P(0,0,.012)),[15221579,2919664,15777836].forEach((O,q)=>{n(C,new it(.008,.008,.07,8),new Ne({color:O,roughness:.4}),P(-.03+q*.025,.06,.006))});let D={};for(let[O,q]of[["L",1],["R",-1]]){let z=new Ze;z.position.set(q*.245,1.15,0),t.add(z),n(z,new lt(.074,16,12),l),n(z,new Sn(.072,.2,6,12),l,P(0,-.14,0));let ee=new Ze;ee.position.y=-.29,z.add(ee),n(ee,new Sn(.066,.19,6,12),l,P(0,-.13,0)),n(ee,new kt(.066,.018,8,18),l,P(0,-.245,0),[Math.PI/2,0,0]);let te=new Ze;te.position.y=-.29,ee.add(te),n(te,new lt(1,16,12),r,P(0,-.05,0),null,P(.04,.078,.07));let ne=[];for(let[fe,F]of[[-.036,.04],[-.012,.052],[.012,.055],[.036,.048]]){let _e=new Ze;_e.position.set(0,-.1,fe*1.1),te.add(_e),n(_e,new Sn(.017,F,4,8),r,P(0,-.03,0)),ne.push(_e)}n(te,new Sn(.022,.05,4,8),r,P(-q*.014,-.045,.062),[.7,0,0]),D[O]={shoulder:z,elbow:ee,hand:te,fingers:ne,sx:q}}if(i.extra==="clipboard"){let O=new Ze;O.position.set(-.035,-.13,.02),D.R.hand.add(O),n(O,new pt(.012,.24,.17),new Ne({color:9067058,roughness:.6}));let q=document.createElement("canvas");q.width=128,q.height=180;let z=q.getContext("2d");z.fillStyle="#fbfaf5",z.fillRect(0,0,128,180),z.strokeStyle="#2f6f9a",z.lineWidth=3;for(let te=0;te<6;te++)z.strokeRect(10,20+te*26,14,14),z.fillStyle="#9aa7b5",z.fillRect(32,24+te*26,60+$(te,91)*30,6),te<4&&(z.beginPath(),z.moveTo(12,27+te*26),z.lineTo(17,32+te*26),z.lineTo(26,18+te*26),z.strokeStyle="#e0446a",z.stroke(),z.strokeStyle="#2f6f9a");let ee=new rn(q);ee.colorSpace=Ot,n(O,new Ut(.15,.2),new Ne({map:ee,roughness:.8}),P(-.0065,-.01,0),[0,-Math.PI/2,0]),n(O,new pt(.02,.025,.06),M,P(-.006,.115,0))}let[B,N,W]=i.head,k=Sv(B,N,W),j=1.24,I=new Ze,G=1.29+N*.86*j;I.position.y=G,I.scale.setScalar(j),t.add(I),n(I,new lt(1,48,36),r,null,null,P(B,N,W));for(let O of[-1,1])n(I,new lt(1,16,12),r,P(O*B*.95,-.015,-.01),[0,O*.3,O*.12],P(.03,.068,.05)),n(I,new lt(1,12,10),o,P(O*(B*.95+.012),-.015,0),[0,O*.3,0],P(.012,.042,.03)),i.cheeks&&n(I,new lt(.06,20,14),o,k.surf(O*.14,-.045,-.046));i.chin&&n(I,new lt(.072,20,14),r,k.surf(0,-.2,-.045));let X=k.surf(0,-.035,i.nose*.32);n(I,new lt(i.nose,24,18),a,X,null,P(1,.92,1.05));let Q=new Ne({color:s.clone().multiplyScalar(.32),roughness:.8});for(let O of[-1,1])n(I,new lt(i.nose*.2,12,8),Q,X.clone().add(P(O*i.nose*.4,-i.nose*.62,i.nose*.42)),null,P(1.1,.55,1));let re=[];for(let O of[-1,1]){let q=O*i.eyeX,z=i.eyeY,ee=new Ze;ee.position.set(q,z,k.zS(q,z)-.6*i.eyeR),I.add(ee);let te=n(ee,new lt(i.eyeR,32,24),m),ne=new Ze;ee.add(ne),n(ne,new lt(i.eyeR*1.08,28,14,0,ti,0,Math.PI/2),r);let fe=new Ze;if(ee.add(fe),n(fe,new lt(i.eyeR*1.06,28,14,0,ti,Math.PI/2,Math.PI/2),r),i.lashes){let F=new Yi,_e=i.eyeR*1.08;for(let he of[.55,.85,1.15]){let Ce=P(O*Math.sin(he)*_e,0,Math.cos(he)*_e),Ue=Ce.clone().normalize();F.addTube(new Wt([Ce,Ce.clone().addScaledVector(Ue,.012).add(P(0,.004,0)),Ce.clone().addScaledVector(Ue,.02).add(P(0,.014,0))]),{segs:5,radial:4,prof:xe=>.0035*(1-xe),col:()=>new Re(1707272)})}n(ne,F.build(),p)}re.push({g:ee,eye:te,lidU:ne,lidL:fe,sx:O})}let pe=[],Fe=i.eyeY+i.eyeR+.032;for(let O of[-1,1]){let q=k.surf(O*(i.eyeX+.004),Fe,.01),z=new Ze;z.position.copy(q),I.add(z);let ee=new Yi,te=[-1,-.4,.3,1].map(fe=>k.surf(O*(i.eyeX+fe*.05),Fe+.014*(1-fe*fe)-.006*fe,.01).sub(q)),ne=new Re(i.brow);ee.addTube(new Wt(te),{segs:12,radial:7,prof:fe=>i.browR*Math.sin(Math.PI*(.12+.76*fe))*(1.1-.4*fe),col:fe=>ne.clone().multiplyScalar(.85+.15*fe)}),n(z,ee.build(),p),pe.push({g:z,sx:O,base:q.clone()})}let ze=O=>k.zS(O*i.eyeX,i.eyeY)-.6*i.eyeR+i.eyeR;if(i.glasses){let O=i.glasses==="thick",q=i.eyeR+(O?.022:.018),z=ze(1)+(O?.03:.022);for(let te of[-1,1]){let ne=n(I,new kt(q,O?.015:.0065,10,40),g,P(te*i.eyeX,i.eyeY,z),null,O?P(1.08,.94,1):null);ne.castShadow=!0;let fe=n(I,new on(q,32),y,P(te*i.eyeX,i.eyeY,z-.002),null,O?P(1.08,.94,1):null);fe.userData.noDepth=!0;let F=P(te*(i.eyeX+q*(O?1.08:1)),i.eyeY+.01,z-.005),_e=P(te*B*.97,i.eyeY-.005,-.03);I.add(Tv(F,_e,O?.009:.004,g))}let ee=i.eyeX-q*(O?1.08:1);n(I,new kt(Math.max(.01,ee),O?.011:.005,8,14,Math.PI),g,P(0,i.eyeY-.002,z))}if(i.goggles){for(let te of[-1,1]){let ne=k.surf(te*.072,.165,.02),fe=new Ze;fe.position.copy(ne),fe.quaternion.setFromUnitVectors(P(0,0,1),k.normal(ne)),I.add(fe),n(fe,new it(.052,.056,.045,24),M,null,[Math.PI/2,0,0]);let F=n(fe,new on(.044,24),new Mt({color:16757575,emissive:16747034,emissiveIntensity:.08,roughness:.25,clearcoat:.6}),P(0,0,.0235));F.castShadow=!1}let q=new Yi,z=[];for(let te=0;te<24;te++){let ne=te/24*ti,fe=.165-.03+.03*Math.cos(ne),F=Math.sqrt(Math.max(.05,1-(fe/N)**2))*1.03;z.push(P(Math.sin(ne)*B*F,fe,Math.cos(ne)*W*F))}let ee=new Re(3811874);q.addTube(new Wt(z,!0),{segs:48,radial:5,prof:()=>.011,col:()=>ee}),n(I,q.build(),p)}let We=18,oe=5,le=(We+1)*2,be=new Float32Array(oe*le*3),Ve=new Float32Array(oe*le*3),Ie=new Float32Array(oe*le*3),Xe=[];for(let O=0;O<oe;O++)for(let q=0;q<We;q++){let z=O*le+q*2;Xe.push(z,z+2,z+1,z+1,z+2,z+3)}let ht=new wt;ht.setAttribute("position",new At(be,3)),ht.setAttribute("normal",new At(Ve,3)),ht.setAttribute("color",new At(Ie,3)),ht.setIndex(Xe);let de=n(I,ht,new Ne({vertexColors:!0,roughness:.45,side:Bt}));de.frustumCulled=!1;let ve=s.clone().lerp(new Re(9321010),.4),Se=[ve,new Re(3803662),new Re(15920352),new Re(12865626),ve],Ee=[.0022,.0016,.0026,.002,.0022],Y=new U;function ye(O,q,z,ee,te){let ne=(O*le+q*2+z)*3;Y.copy(k.surf(ee,te,Ee[O])),be[ne]=Y.x,be[ne+1]=Y.y,be[ne+2]=Y.z;let fe=k.normal(Y);Ve[ne]=fe.x,Ve[ne+1]=fe.y,Ve[ne+2]=fe.z,Ie[ne]=Se[O].r,Ie[ne+1]=Se[O].g,Ie[ne+2]=Se[O].b}let Ae="";function De(O,q){let z=`${O.toFixed(3)}|${q.toFixed(3)}`;if(z===Ae)return;Ae=z;let ee=i.mouthW,te=i.mouthY;for(let ne=0;ne<=We;ne++){let fe=-1+2*ne/We,F=fe*ee,_e=1-fe*fe,he=te+O*.03*fe*fe+q*.02*_e*(1-.5*Math.max(0,O)),Ce=Math.min(he,te+O*.03*fe*fe-(.006+q*.075)*Math.pow(_e,.85)),Ue=Math.max(Ce,he-.024*Math.sqrt(_e)),xe=Math.min(he,Ce+(.01+.022*q)*_e),Ke=.0095*Math.sqrt(_e)+.0015;ye(0,ne,0,F,he+Ke),ye(0,ne,1,F,he),ye(1,ne,0,F,he),ye(1,ne,1,F,Ce),ye(2,ne,0,F,he-5e-4),ye(2,ne,1,F,Ue),ye(3,ne,0,F,xe),ye(3,ne,1,F,Ce),ye(4,ne,0,F,Ce),ye(4,ne,1,F,Ce-Ke)}ht.attributes.position.needsUpdate=!0,ht.attributes.normal.needsUpdate=!0,ht.attributes.color.needsUpdate=!0}De(.6,.1);let Le=new Yi,H=new Re,$e=(O,q,z)=>H.copy(O).multiplyScalar(.7+.3*z+($(q,9)-.5)*.14).clone();if(i.beard){let O=new Re(i.hair).multiplyScalar(.9),q=(ee,te,ne)=>!(Math.abs(ee)<i.mouthW+.035&&te>i.mouthY-.045)&&!(te>-.085&&Math.abs(ee)<ne*.66),z=0;for(let ee=0;ee<1400&&z<150;ee++){let te=xt(0,-.265,$(ee,52)),ne=B*.98*Math.sqrt(Math.max(0,1-(te/N)**2)),fe=($(ee,51)*2-1)*ne;if(!q(fe,te,ne))continue;z+=1;let F=k.surf(fe,te,-.006),_e=.03+$(ee,54)*.014;Le.addGeometry(new lt(1,10,8),new rt().compose(F,new mn,P(_e,_e*1.15,_e)),$e(O,ee,.55+$(ee,55)*.45))}}if(i.mustache){let O=new Re(i.hair);for(let q of[-1,1])for(let z=0;z<3;z++){let ee=(z-1)*.006,te=z===1?.004:0,ne=[[.006,-.088,.024],[.045,-.097,.027],[.085,-.118,.02],[.108,-.15,.012]].map(([fe,F,_e])=>k.surf(q*fe,F+ee,_e+te));Le.addTube(new Wt(ne),{segs:14,radial:8,prof:fe=>.026*Math.pow(Math.sin(Math.PI*(.08+.84*fe)),.7)*(1-.3*fe),col:fe=>$e(O,z+q*5,.6+.4*fe)})}}if(i.goatee){let O=new Re(i.hair);for(let q=0;q<10;q++){let z=($(q,61)-.5)*.07,ee=-.2-$(q,62)*.05,te=k.surf(z,ee,.015),ne=.07+$(q,63)*.05;Le.addTube(new Wt([te,te.clone().add(P(z*.2,-ne*.5,.02)),te.clone().add(P(z*.4,-ne,.035))]),{segs:6,radial:6,prof:fe=>.022*(1-.88*fe),col:fe=>$e(O,q,fe)})}}let ut=s.clone().multiplyScalar(.78),L=(O,q=.0032)=>Le.addTube(new Wt(O.map(([z,ee])=>k.surf(z,ee,5e-4))),{segs:10,radial:5,prof:z=>q*Math.sin(Math.PI*(.1+.8*z)),col:()=>ut});if(i.wrinkles){let O=i.wrinkles==="old"?3:2;for(let q=0;q<O;q++){let z=Fe+.048+q*.022;L([-1,-.5,0,.5,1].map(ee=>[ee*(.07+q*.008),z+.007*(1-ee*ee)]))}for(let q of[-1,1])if(i.wrinkles==="old"){for(let z of[-.016,0,.016])L([[q*(i.eyeX+i.eyeR+.006),i.eyeY+z*.6],[q*(i.eyeX+i.eyeR+.02),i.eyeY+z*1.2],[q*(i.eyeX+i.eyeR+.032),i.eyeY+z*1.8]],.0026);L([[q*(i.eyeX-.03),i.eyeY-i.eyeR-.004],[q*i.eyeX,i.eyeY-i.eyeR-.012],[q*(i.eyeX+.032),i.eyeY-i.eyeR-.004]],.0028)}else L([[q*i.nose*1.05,-.045],[q*(i.nose*1.45),-.085],[q*(i.mouthW+.012),i.mouthY-.004]],.0035)}if(i.freckles){let O=s.clone().multiplyScalar(.6);for(let q=0;q<26;q++){let z=($(q,81)*2-1)*.15,ee=-.055+$(q,82)*.05;if(Math.abs(z)<.03&&ee<-.02)continue;let te=.0035+$(q,83)*.003;Le.addGeometry(new lt(1,8,6),new rt().compose(k.surf(z,ee,-5e-4),new mn,P(te,te,te*.5)),O)}}if(Le.n&&n(I,Le.build(),p),i.extra==="chain"){let O=new Yi,q=z=>v(z)+.012;O.addTube(new Wt([P(.11,.95,q(.95)-.02),P(.085,.87,q(.87)),P(.04,.845,q(.845)),P(.004,.86,q(.86))]),{segs:20,radial:5,prof:()=>.004,col:()=>new Re(16777215)}),n(t,O.build(),M)}else if(i.extra==="pencil"){let O=new Ze;O.position.set(-B*.93,.05,-.01),O.rotation.set(Math.PI/2+.25,0,.15),I.add(O),n(O,new it(.008,.008,.15,6),new Ne({color:15909424,roughness:.5})),n(O,new Wi(.008,.025,6),new Ne({color:15255450,roughness:.7}),P(0,-.087,0),[Math.PI,0,0]),n(O,new it(.0085,.0085,.018,6),new Ne({color:15235722,roughness:.6}),P(0,.083,0))}let E=new Ze;I.add(E);let J=new Yi,K=(O,q,z,ee=.6)=>J.addGeometry(new lt(1,32,20,0,ti,0,Math.PI*ee),new rt().compose(P(0,.004,-.01),new mn().setFromEuler(new $n(O,0,0)),P(B*q,N*q,W*q)),z);if(i.style==="swept"){K(-.5,1.03,f.clone().multiplyScalar(.78));for(let O=0;O<64;O++){let q=xt(-.21,.21,(O+$(O,1))/64),z=Math.sqrt(Math.max(.05,1-(q/B)**2)),ee=.8+$(O,2)*.2+Math.abs(q)*1.3,te=2.55+$(O,3)*.35,ne=[];for(let fe=0;fe<=5;fe++){let F=fe/5,_e=xt(ee,te,F),he=.985+.2*Math.pow(Math.sin(Math.PI*Math.min(1,F*1.15)),.8)+.06*F+$(O,4)*.04;ne.push(P(q*(1+.3*F),Math.sin(_e)*N*z*he,Math.cos(_e)*W*z*he))}J.addTube(new Wt(ne),{segs:16,radial:7,prof:fe=>.044*(1-.85*Math.pow(fe,1.3))*(.55+.45*Math.min(1,fe*6)),col:fe=>$e(f,O,fe)})}for(let O of[-1,1])for(let q=0;q<14;q++){let z=k.dirPt(O*(1.35+$(q,11+O)*.6),.02+$(q,12)*.6,.97),ee=k.normal(z),te=.07+$(q,13)*.06,ne=.03+$(q,14)*.05,fe=[z,z.clone().addScaledVector(ee,te*.5).add(P(0,ne*.4,-.03)),z.clone().addScaledVector(ee,te).add(P(0,ne,-.07))];J.addTube(new Wt(fe),{segs:8,radial:7,prof:F=>.048*(1-.8*F),col:F=>$e(f,q+50,.6+.4*F)})}for(let O=0;O<18;O++){let q=xt(-.19,.19,(O+$(O,21))/18),z=Math.sqrt(Math.max(.05,1-(q/B)**2)),ee=[];for(let te=0;te<=4;te++){let ne=te/4,fe=xt(1.95+$(O,22)*.3,3.75+$(O,23)*.2,ne),F=1+.1*Math.sin(Math.PI*ne)+$(O,24)*.03;ee.push(P(q,Math.sin(fe)*N*z*F,Math.cos(fe)*W*z*F))}J.addTube(new Wt(ee),{segs:12,radial:7,prof:te=>.04*(1-.8*te),col:te=>$e(f,O+90,te)})}}else if(i.style==="wild"){K(-.7,1.02,f.clone().multiplyScalar(.8));let O=0;for(let z=0;z<400&&O<46;z++){let ee=($(z,71)*2-1)*Math.PI,te=xt(-.1,.9,$(z,72));if(Math.abs(ee)<1.2)continue;O+=1;let ne=.045+$(z,73)*.03;J.addGeometry(new lt(1,10,8),new rt().compose(k.dirPt(ee,te,1.02+$(z,74)*.12),new mn,P(ne,ne,ne)),$e(f,z,.7+$(z,75)*.3))}let q=0;for(let z=0;z<1200&&q<150;z++){let ee=($(z,1)*2-1)*Math.PI,te=xt(-.05,1.5,Math.sqrt($(z,2)));if(Math.abs(ee)<.75&&te<1.1)continue;q+=1;let ne=k.dirPt(ee,te,.96),F=k.normal(ne).clone().add(P(0,.55+$(z,3)*.45,0)).normalize(),_e=new U().crossVectors(F,P(0,1,0));_e.lengthSq()<.001&&(_e=P(1,0,0)),_e.normalize();let he=.15+$(z,4)*.2,Ce=($(z,5)-.5)*.22,Ue=[ne,ne.clone().addScaledVector(F,he*.35).addScaledVector(_e,Ce*.5),ne.clone().addScaledVector(F,he*.7).addScaledVector(_e,-Ce*.6),ne.clone().addScaledVector(F,he).addScaledVector(_e,Ce)];J.addTube(new Wt(Ue),{segs:12,radial:7,prof:xe=>.048*(1-.88*Math.pow(xe,.9)),col:xe=>$e(f,z,.75+.25*xe)})}}else if(i.style==="puff"){let O=new lt(1,32,20,0,ti,0,Math.PI*.6);J.addGeometry(O,new rt().compose(P(0,.005,-.012),new mn().setFromEuler(new $n(-.42,0,0)),P(B*1.05,N*1.05,W*1.05)),f.clone().multiplyScalar(.8));let q=(ne,fe,F)=>J.addGeometry(new lt(1,10,8),new rt().compose(ne,new mn,P(fe,fe,fe)),$e(f,F,.7+$(F,77)*.3)),z=0;for(let ne=0;ne<800&&z<115;ne++){let fe=($(ne,31)*2-1)*Math.PI,F=xt(.2,1.5,$(ne,32));Math.abs(fe)<.85&&F<.95||(z+=1,q(k.dirPt(fe,F,1.06+$(ne,33)*.1),.034+$(ne,34)*.028,ne))}let ee=P(0,N*1.08,-W*.38);for(let ne=0;ne<46;ne++){let fe=P($(ne,41)-.5,$(ne,42)-.35,$(ne,43)-.5).normalize();q(ee.clone().addScaledVector(fe,.1+$(ne,44)*.05),.05+$(ne,45)*.03,ne+200)}for(let ne=0;ne<9;ne++)q(k.dirPt(xt(-.8,.8,ne/8),.98+$(ne,46)*.08,1.05),.038,ne+300);let te=new Ze;te.position.copy(ee).add(P(.04,.05,.02)),te.rotation.set(.4,0,-.9),E.add(te),n(te,new it(.011,.011,.26,6),new Ne({color:15909424,roughness:.5})),n(te,new it(.012,.012,.03,8),new Ne({color:15235722,roughness:.6}),P(0,.14,0)),n(te,new Wi(.011,.035,6),new Ne({color:15255450,roughness:.7}),P(0,-.147,0),[Math.PI,0,0])}if(i.flyaways){let O=i.style==="wild"?26:10;for(let q=0;q<O;q++){let z=($(q,101)*2-1)*Math.PI,ee=xt(.5,1.45,$(q,102));if(Math.abs(z)<.7&&ee<1)continue;let te=k.dirPt(z,ee,1),ne=k.normal(te),fe=(i.style==="wild"?.25:.14)+$(q,103)*.12,F=P($(q,104)-.5,.2,$(q,105)-.5).normalize().multiplyScalar(fe*.5);J.addTube(new Wt([te,te.clone().addScaledVector(ne,fe*.4).addScaledVector(F,.15),te.clone().addScaledVector(ne,fe*.75).addScaledVector(F,.5),te.clone().addScaledVector(ne,fe).addScaledVector(F,1)]),{segs:16,radial:5,prof:_e=>.012*(1-.8*_e),col:_e=>$e(f,q+700,.85+.15*_e)})}}n(E,J.build(),p),e.traverse(O=>{O.isMesh&&(O.castShadow=O.castShadow||!O.material.transparent,O.receiveShadow=!O.material.transparent)}),de.castShadow=!1,de.userData.keep=!0,re.forEach(O=>{O.eye.userData.keep=!0});let ae=[];e.traverse(O=>{O.isMesh||ae.push(O)});for(let O of ae)hs(O,{deep:!1});let Me=new U,Pe=(O,q)=>{let z=2.6+$(q,1)*1.8,ee=(O+$(q,2)*z)%z/z,te=.16/z;return ee<te?Math.sin(ee/te*Math.PI):0},ue=Math.floor(i.eyeX*1e3+i.mouthY*777);function me(O){let{t:q=0,y:z=0,turn:ee=0,L:te=[0,0,0,.3],R:ne=[0,0,0,.3],headTurn:fe=0,headTilt:F=0,headRoll:_e=0,frizz:he=1,smile:Ce=.6,open:Ue=.08,brow:xe=0,browAngle:Ke=0,lid:Qe=0,squint:Nt=0,look:Lt=null,squash:ln=1,lean:wn=0,wink:Fr=0}=O;t.position.y=z,t.rotation.x=wn;let Fs=1/Math.sqrt(ln);t.scale.set(Fs,ln,Fs),e.rotation.y=ee;for(let[tn,[ii,Rn,Un,gi=.3]]of[["L",te],["R",ne]]){let Nn=D[tn];Nn.shoulder.rotation.set(-ii,0,Nn.sx*Rn),Nn.elbow.rotation.set(-Un,0,0),Nn.fingers.forEach(cn=>{cn.rotation.z=-Nn.sx*gi*1.4})}I.position.y=G+.006*Math.sin(q*2.2+ue),I.rotation.set(F,fe,_e),E.scale.setScalar(1+.022*he*Math.sin(q*9+ue)+(he-1)*.025),pe.forEach(tn=>{tn.g.position.copy(tn.base),tn.g.position.y+=xe*.02,tn.g.rotation.z=tn.sx*Ke*.4}),De(Math.max(-1,Math.min(1,Ce)),Di(Ue));let Ni=Math.max(Qe,Pe(q,ue)),ps=-.7-.22*Math.max(0,xe)+.25*Nt+(i.lidOpen||0);re.forEach(tn=>{tn.lidU.rotation.x=xt(ps,1.45,tn.sx<0?Math.max(Ni,Fr):Ni),tn.lidL.rotation.x=xt(.85,.32,Nt)}),Lt&&(e.updateMatrixWorld(!0),Me.copy(Lt),I.worldToLocal(Me),re.forEach(tn=>{let ii=Me.x-tn.g.position.x,Rn=Me.y-tn.g.position.y,Un=Me.z-tn.g.position.z,gi=Math.max(-.55,Math.min(.55,Math.atan2(ii,Un))),Nn=Math.max(-.4,Math.min(.4,Math.atan2(Rn,Math.hypot(ii,Un))));tn.eye.rotation.set(-Nn,gi,0)}))}return{root:e,pose:me,arms:D,head:I}}var Tn={};Tn.supported=!0;Tn.ready=Promise.resolve();function Xn(i){if(!i)throw new Error("Assertion failed")}function wc(i){return i>>>1^-(i&1)}Tn.decodeVertexBuffer=(i,e,t,n,s)=>{Xn(n[0]===160||n[0]===161);let r=n[0]&15,o=Math.min(8192/t&-16,256),a=new Uint8Array(o*t),l=r===0?t:t+t/4,c=n.length-l,h=n.slice(c,c+t),d=r===0?null:n.slice(c+t,c+l),u=1,f=[[0,2,4,8],[0,1,2,4],[1,2,4,8]];for(let x=0;x<e;x+=o){let m=Math.min(e-x,o),g=(m+15&-16)>>>4,y=(g+3&-4)>>>2,M=u;u+=r===0?0:t/4,a.fill(0);for(let _=0;_<t;_++){let b=_*m,S=r===0?0:n[M+(_>>>2)]>>>((_&3)<<1)&3;if(S===2)continue;if(S===3){a.set(n.subarray(u,u+m),b),u+=m;continue}let R=u;u+=y;for(let v=0;v<g;v++){let T=n[R+(v>>>2)]>>>((v&3)<<1)&3,A=f[r===0?0:S+1][T],C=b+(v<<4);if(A!==0)if(A===1){let D=u;u+=2;for(let B=0;B<16;B++){let N=B&7,W=n[D+(B>>>3)]>>>N&1;W===1&&(W=n[u++]),a[C+B]=W}}else if(A===2){let D=u;u+=4;for(let B=0;B<16;B++){let N=6-((B&3)<<1),W=n[D+(B>>>2)]>>>N&3;W===3&&(W=n[u++]),a[C+B]=W}}else if(A===4){let D=u;u+=8;for(let B=0;B<16;B++){let N=4-((B&1)<<2),W=n[D+(B>>>1)]>>>N&15;W===15&&(W=n[u++]),a[C+B]=W}}else a.set(n.subarray(u,u+16),C),u+=16}}for(let _=0;_<m;_++){let b=x+_;for(let S=0;S<t;S+=4){let R=r===0?0:d[S>>>2]&3;if(Xn(R!==3),R===0)for(let v=S;v<S+4;v++){let T=wc(a[v*m+_]),A=h[v]+T&255,C=b*t+v;i[C]=h[v]=A}else if(R===1)for(let v=S;v<S+4;v+=2){let T=wc(a[v*m+_]+(a[(v+1)*m+_]<<8)),A=h[v]+(h[v+1]<<8);A=A+T&65535;let C=b*t+v;i[C]=h[v]=A&255,i[C+1]=h[v+1]=A>>>8}else if(R===2){let v=S,T=a[v*m+_]+(a[(v+1)*m+_]<<8)+(a[(v+2)*m+_]<<16)+(a[(v+3)*m+_]<<24),A=h[v]+(h[v+1]<<8)+(h[v+2]<<16)+(h[v+3]<<24),C=d[S>>>2]>>>4;A=A^(T>>>C|T<<32-C);let D=b*t+v;i[D]=h[v]=A&255,i[D+1]=h[v+1]=A>>>8&255,i[D+2]=h[v+2]=A>>>16&255,i[D+3]=h[v+3]=A>>>24}}}}let p=Math.max(l,r===0?32:24);if(Xn(u==n.length-p),s==="OCTAHEDRAL"){Xn(t===4||t===8);let x=new(t===4?Int8Array:Int16Array)(i.buffer,i.byteOffset,e*4),m=t===4?127:32767;for(let g=0;g<e*4;g+=4){let y=x[g+0],M=x[g+1],_=x[g+2];y/=_,M/=_;let b=1-Math.abs(y)-Math.abs(M),S=Math.max(-b,0);y-=y>=0?S:-S,M-=M>=0?S:-S;let R=m/Math.sqrt(y*y+M*M+b*b);x[g+0]=Math.round(y*R),x[g+1]=Math.round(M*R),x[g+2]=Math.round(b*R)}}else if(s==="QUATERNION"){Xn(t===8);let x=new Int16Array(i.buffer,i.byteOffset,e*4);for(let m=0;m<e*4;m+=4){let g=x[m+3],y=g&3,M=Math.SQRT1_2/(g|3),_=x[m+0]*M,b=x[m+1]*M,S=x[m+2]*M,R=Math.sqrt(Math.max(0,1-_*_-b*b-S*S));x[m+(y+1)%4]=Math.round(_*32767),x[m+(y+2)%4]=Math.round(b*32767),x[m+(y+3)%4]=Math.round(S*32767),x[m+(y+0)%4]=Math.round(R*32767)}}else if(s==="EXPONENTIAL"){Xn((t&3)===0);let x=new Uint32Array(1),m=new Float32Array(x.buffer),g=new Int32Array(i.buffer,i.byteOffset,e*(t/4)),y=new Float32Array(i.buffer,i.byteOffset,e*(t/4));for(let M=0;M<e*(t/4);M++){let _=g[M],b=_>>24,S=_<<8>>8;x[0]=b+127<<23,y[M]=m[0]*S}}else if(s==="COLOR"){Xn(t===4||t===8);let x=(1<<t*2)-1,m=new(t===4?Uint8Array:Uint16Array)(i.buffer,i.byteOffset,e*4),g=new(t===4?Int8Array:Int16Array)(i.buffer,i.byteOffset,e*4);for(let y=0;y<e*4;y+=4){let M=m[y+0],_=g[y+1],b=g[y+2],S=m[y+3],v=(1<<31-Math.clz32(S)+1)-1,T=M+_-b,A=M+b,C=M-_-b,D=S&v>>1;D=D<<1|D&1;let B=x/v;m[y+0]=Math.round(T*B),m[y+1]=Math.round(A*B),m[y+2]=Math.round(C*B),m[y+3]=Math.round(D*B)}}};function Us(i,e){return i[i.offset-1-e&i.length-1]}function an(i,e){let t=i.offset;i[t]=e,i.offset=t+1&i.length-1}Tn.decodeIndexBuffer=(i,e,t,n)=>{Xn(n[0]===225),Xn(e%3===0),Xn(t===2||t===4);let s;t===2?s=new Uint16Array(i.buffer):s=new Uint32Array(i.buffer);let r=e/3,o=1,a=o+r,l=n.length-16;function c(){let m=0;for(let g=0;;g+=7){let y=n[a++];if(m|=(y&127)<<g,y<128)return m}}let h=0,d=0,u=new Uint32Array(32),f=new Uint32Array(16);u.offset=0,f.offset=0;function p(m){return d+=wc(m)}let x=0;for(let m=0;m<r;m++){let g=n[o++],y=g>>>4,M=g&15;if(y<15){let _=Us(u,(y<<1)+0),b=Us(u,(y<<1)+1),S=-1;if(M===0)S=h++,an(f,S);else if(M<13)S=Us(f,M);else if(M===13)S=--d,an(f,S);else if(M===14)S=++d,an(f,S);else if(M===15){let R=c();S=p(R),an(f,S)}an(u,b),an(u,S),an(u,S),an(u,_),s[x++]=_,s[x++]=b,s[x++]=S}else{let _=-1,b=-1,S=-1;if(M<14){let R=n[l+M],v=R>>>4,T=R&15;_=h++,v===0?b=h++:b=Us(f,v-1),T===0?S=h++:S=Us(f,T-1),an(f,_),v===0&&an(f,b),T===0&&an(f,S)}else{let R=n[a++];R===0&&(h=0);let v=R>>>4,T=R&15;M===14?_=h++:_=p(c()),v===0?b=h++:v===15?b=p(c()):b=Us(f,v-1),T===0?S=h++:T===15?S=p(c()):S=Us(f,T-1),an(f,_),(v===0||v===15)&&an(f,b),(T===0||T===15)&&an(f,S)}an(u,_),an(u,b),an(u,b),an(u,S),an(u,S),an(u,_),s[x++]=_,s[x++]=b,s[x++]=S}}};Tn.decodeIndexSequence=(i,e,t,n)=>{Xn(n[0]===209),Xn(t===2||t===4);let s;t===2?s=new Uint16Array(i.buffer):s=new Uint32Array(i.buffer);let r=1;function o(){let l=0;for(let c=0;;c+=7){let h=n[r++];if(l|=(h&127)<<c,h<128)return l}}let a=new Uint32Array(2);for(let l=0;l<e;l++){let c=o(),h=c&1,d=wc(c>>>1);s[l]=a[h]+=d}};Tn.decodeGltfBuffer=(i,e,t,n,s,r)=>{let o={ATTRIBUTES:Tn.decodeVertexBuffer,TRIANGLES:Tn.decodeIndexBuffer,INDICES:Tn.decodeIndexSequence};Xn(o[s]!==void 0),o[s](i,e,t,n,r)};Tn.decodeGltfBufferAsync=(i,e,t,n,s)=>{let r=new Uint8Array(i*e);return Tn.decodeGltfBuffer(r,i,e,t,n,s),Promise.resolve(r)};async function Ud(i){let e=await fetch(i);if(!e.ok)throw new Error(`${i} : ${e.status}`);let t=await e.arrayBuffer(),n=new Uint8Array(t,0,2);return n[0]===31&&n[1]===139&&(t=await new Response(new Blob([t]).stream().pipeThrough(new DecompressionStream("gzip"))).arrayBuffer()),await Tn.ready,wv(t)}function wv(i){let e=new DataView(i);if(String.fromCharCode(e.getUint8(0),e.getUint8(1),e.getUint8(2),e.getUint8(3))!=="BNGC")throw new Error("format inconnu");let n=e.getUint32(4,!0),s=JSON.parse(new TextDecoder().decode(new Uint8Array(i,8,n))),r=8+n,o=s.version>=2,a=(h,d,u,f,p)=>{let x=h.nv;if(!o)return new u(i,r+h.offsets[d],x*f);let m=new Uint8Array(x*p);return Tn.decodeVertexBuffer(m,x,p,new Uint8Array(i,r+h.offsets[d],h.sizes[d])),new u(m.buffer,0,x*f)},l=(h,d,u)=>{if(!o)return h.index32?new Uint32Array(i,r+h.offsets[d],u):new Uint16Array(i,r+h.offsets[d],u);let f=new Uint32Array(u);return Tn.decodeIndexBuffer(new Uint8Array(f.buffer),u,4,new Uint8Array(i,r+h.offsets[d],h.sizes[d])),h.index32?f:Uint16Array.from(f)},c=s.parts.map(h=>{let d=h.nv,u=a(h,"pos",Uint16Array,4,8),f=new Float32Array(d*3);for(let S=0;S<d;S++)for(let R=0;R<3;R++)f[S*3+R]=h.min[R]+u[S*4+R]/65535*(h.max[R]-h.min[R]);let p=new wt;p.setAttribute("position",new At(f,3));let x=h.offsets.nrm!==void 0,m=x?a(h,"nrm",Int8Array,4,4):null,g=a(h,"col",Uint8Array,4,4),y=x?new Int8Array(d*3):null,M=new Uint8Array(d*3),_=new Uint8Array(d);for(let S=0;S<d;S++)x&&(y[S*3]=m[S*4],y[S*3+1]=m[S*4+1],y[S*3+2]=m[S*4+2]),M[S*3]=g[S*4],M[S*3+1]=g[S*4+1],M[S*3+2]=g[S*4+2],_[S]=g[S*4+3];x&&p.setAttribute("normal",new At(y,3,!0)),p.setAttribute("color",new At(M,3,!0)),p.setAttribute("mask",new At(_,1,!0)),h.offsets.skinI!==void 0&&(p.setAttribute("skinIndex",new At(a(h,"skinI",Uint8Array,4,4),4)),p.setAttribute("skinWeight",new At(a(h,"skinW",Uint8Array,4,4),4,!0))),h.offsets.uv!==void 0&&p.setAttribute("uv",new At(a(h,"uv",Uint16Array,2,4),2,!0)),h.offsets.flow!==void 0&&p.setAttribute("flow",new At(a(h,"flow",Int8Array,4,4),4,!0)),h.morph&&(p.morphAttributes.position=h.morph.names.map((S,R)=>{let v=new Float32Array(d*3);if(o){let A=new Uint8Array(d*8);Tn.decodeVertexBuffer(A,d,8,new Uint8Array(i,r+h.morph.offsets[R],h.morph.sizes[R]));let C=new Int16Array(A.buffer);for(let D=0;D<d;D++)for(let B=0;B<3;B++)v[D*3+B]=C[D*4+B]*h.morph.scale}else{let A=h.morph.names.length,C=new Int16Array(i,r+h.morph.offset,d*3*A),D=h.morph.scale/32767;for(let B=0;B<d*3;B++)v[B]=C[R*d*3+B]*D}let T=new At(v,3);return T.name=S,T}),p.morphTargetsRelative=!0),p.setIndex(new At(l(h,"idx",h.ni),1)),x||p.computeVertexNormals(),p.computeBoundingSphere();let b=null;if(h.offsets.idx1!==void 0){b=new wt;for(let[S,R]of Object.entries(p.attributes))b.setAttribute(S,R);p.morphAttributes.position&&(b.morphAttributes.position=p.morphAttributes.position,b.morphTargetsRelative=!0),b.setIndex(new At(l(h,"idx1",h.ni1),1)),b.boundingSphere=p.boundingSphere}return{name:h.name,mat:h.mat,geometry:p,geometryLo:b,attach:h.attach||null,morphNames:h.morph?h.morph.names:null}});return{meta:s.meta,bones:s.bones,parts:c}}var Nd=`
vec3 hash33c(vec3 p) { p = fract(p * vec3(.1031, .1030, .0973)); p += dot(p, p.yxz + 33.33); return fract((p.xxy + p.yxx) * p.zyx) * 2.0 - 1.0; }
float gnoise(vec3 p) {
  vec3 i = floor(p); vec3 f = fract(p); vec3 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(dot(hash33c(i), f), dot(hash33c(i + vec3(1,0,0)), f - vec3(1,0,0)), u.x),
                 mix(dot(hash33c(i + vec3(0,1,0)), f - vec3(0,1,0)), dot(hash33c(i + vec3(1,1,0)), f - vec3(1,1,0)), u.x), u.y),
             mix(mix(dot(hash33c(i + vec3(0,0,1)), f - vec3(0,0,1)), dot(hash33c(i + vec3(1,0,1)), f - vec3(1,0,1)), u.x),
                 mix(dot(hash33c(i + vec3(0,1,1)), f - vec3(0,1,1)), dot(hash33c(i + vec3(1,1,1)), f - vec3(1,1,1)), u.x), u.y), u.z);
}
`;function Ld(i){i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vRest;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vRest = position;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vRest;
${Nd}`)}var Dd=(i,e,t="")=>`
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
`;function Fd(){let i={},e=new Mt({vertexColors:!0,roughness:.56,sheen:.25,sheenRoughness:.55,sheenColor:new Re(16761e3),specularIntensity:.45}),t=typeof location<"u"&&new URLSearchParams(location.search).get("castdbg")||"";t.includes("nosheen")&&(e.sheen=0),e.onBeforeCompile=o=>{Ld(o),o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
attribute float mask;
varying float vMask;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vMask = mask;`),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
varying float vMask;`).replace("#include <lights_physical_fragment>",`#include <lights_physical_fragment>
material.specularColor *= 1.0 - vMask; material.specularF90 *= 1.0 - vMask;
#ifdef USE_SHEEN
material.sheenColor *= 1.0 - vMask;
#endif`),t.includes("nobump")||(o.fragmentShader=o.fragmentShader.replace("#include <normal_fragment_maps>",Dd(11e-5,1100," + 0.4 * gnoise(pr * 2.3)"))),t.includes("nosss")||(o.fragmentShader=o.fragmentShader.replace("#include <lights_physical_pars_fragment>",St.lights_physical_pars_fragment.replace("reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );","reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F ); { float dNLw = saturate((dot(geometryNormal, directLight.direction) + 0.35) / 1.35); vec3 sss = vec3(1.0, 0.42, 0.3) * max(dNLw - dotNL, 0.0) * 0.9; reflectedLight.directDiffuse += sss * directLight.color * BRDF_Lambert( material.diffuseContribution ); }")))},e.customProgramCacheKey=()=>"skin-v4",i.skin=e,i.skinmh=e;let n=(o,a=.82,l=.5)=>{let c=new Mt({color:o,vertexColors:!0,roughness:a,sheen:l,sheenRoughness:.75,sheenColor:new Re(16777215)});return c.onBeforeCompile=h=>{Ld(h),h.fragmentShader=h.fragmentShader.replace("#include <normal_fragment_maps>",Dd(22e-5,900," + 0.5 * sin(vRest.y * 2600.0 + vRest.x * 900.0) * sin(vRest.x * 2600.0 + vRest.z * 2600.0)"))},c.customProgramCacheKey=()=>`fabric-${a}`,c};i.coat=n(16777215,.8,.55),i.cloth=n(16777215,.85,.35);let s=new Mt({vertexColors:!0,roughness:.7,specularIntensity:.18});s.onBeforeCompile=o=>{o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
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
${Nd}
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
}`).replace("#include <lights_physical_pars_fragment>",St.lights_physical_pars_fragment.replace("reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;",`reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
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
      }`)},s.customProgramCacheKey=()=>"hair-v5",i.hair=s;let r=new Mt({vertexColors:!0,map:Rv(),alphaTest:.3,alphaToCoverage:!0,side:Bt,roughness:.62,specularIntensity:.15});r.onBeforeCompile=o=>{o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 flow;
varying vec3 vFlow;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFlow = normalize(normalMatrix * flow.xyz + 1e-5);`),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vFlow;
vec3 gHairT; float gHairShift; vec3 gHairTint;`).replace("#include <lights_physical_pars_fragment>",St.lights_physical_pars_fragment.replace("reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;",`reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
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
        gHairTint = mix(vec3(1.0), normalize(diffuseColor.rgb + 1e-3) * 1.7, 0.35);`)},r.customProgramCacheKey=()=>"haircards-v1",i.haircard=r;{let o=document.createElement("canvas");o.width=256,o.height=64;let a=o.getContext("2d");a.clearRect(0,0,256,64);for(let c=0;c<46;c++){let h=(c+.5)*5.565217391304348+Math.sin(c*7.3)*1.5,d=40+22*Math.abs(Math.sin(c*3.1));a.strokeStyle="rgba(255,255,255,0.95)",a.lineWidth=1.6,a.beginPath(),a.moveTo(h,0),a.quadraticCurveTo(h+3,d*.5,h+6*Math.sin(c),d),a.stroke()}let l=new rn(o);l.wrapS=sn,i.lash=new Ne({vertexColors:!0,alphaMap:l,alphaTest:.35,alphaToCoverage:!0,transparent:!1,side:Bt,roughness:.6})}if(i.leather=new Mt({vertexColors:!0,roughness:.4,clearcoat:.6,clearcoatRoughness:.35}),i.metal=new Ne({vertexColors:!0,metalness:1,roughness:.28}),i.plastic=new Mt({vertexColors:!0,roughness:.32,clearcoat:.8,clearcoatRoughness:.2}),i.teeth=new Mt({vertexColors:!0,roughness:.38,clearcoat:.25,clearcoatRoughness:.3,specularIntensity:.5}),i.paper=new Ne({vertexColors:!0,roughness:.9}),typeof location<"u"&&new URLSearchParams(location.search).get("castdbg")==="plain")for(let o of["skin","hair","coat","cloth"])i[o]=new Ne({vertexColors:!0,roughness:.6});return i.glass=new Mt({color:16777215,transparent:!0,opacity:.16,roughness:.05,clearcoat:1,clearcoatRoughness:.05,depthWrite:!1,envMapIntensity:2}),i}var Ns=null;function Rv(){if(Ns)return Ns;let i=512,e=512,t=4,n=i/t,s=document.createElement("canvas");s.width=i,s.height=e;let r=s.getContext("2d");r.clearRect(0,0,i,e);let o=(a,l)=>{let c=Math.sin(a*127.1+l*311.7)*43758.5453;return c-Math.floor(c)};for(let a=0;a<t;a++){let l=a*n,c=r.createLinearGradient(0,e,0,0);c.addColorStop(0,"rgba(150,150,150,0.55)"),c.addColorStop(.45,"rgba(150,150,150,0.2)"),c.addColorStop(1,"rgba(150,150,150,0)"),r.fillStyle=c,r.fillRect(l+n*.3,0,n*.4,e);let h=26;for(let d=0;d<h;d++){let u=a*100+d,f=l+n*(.08+.84*((d+o(u,1)*.8)/h)),p=e*(.62+.38*o(u,2)),x=Math.round(110+145*o(u,3)**.7),m=.7+.3*o(u,4),g=2.2+2*o(u,5),y=16;for(let M=0;M<y;M++){let _=M/y,b=(M+1)/y,S=e-_*p,R=e-b*p,v=f+Math.sin(_*6+u)*2.5*_,T=f+Math.sin(b*6+u)*2.5*b;r.strokeStyle=`rgba(${x},${x},${x},${m*(1-b*.35)})`,r.lineWidth=Math.max(.6,g*(1-b*.8)),r.beginPath(),r.moveTo(v,S),r.lineTo(T,R),r.stroke()}}}return Ns=new rn(s),Ns.colorSpace=Ot,Ns.anisotropy=8,Ns.generateMipmaps=!0,Ns}function Av(i){let e=document.createElement("canvas");e.width=512,e.height=256;let t=e.getContext("2d"),n=new Re(i),s=(c,h=1)=>`rgba(${Math.min(255,Math.round(n.r*255*c))},${Math.min(255,Math.round(n.g*255*c))},${Math.min(255,Math.round(n.b*255*c))},${h})`;t.fillStyle="#ddd4ca",t.fillRect(0,0,512,256);let r=t.createRadialGradient(128,128,60,128,128,260);r.addColorStop(0,"rgba(255,255,255,0)"),r.addColorStop(1,"rgba(205,120,120,0.55)"),t.fillStyle=r,t.fillRect(0,0,512,256),t.strokeStyle="rgba(190,70,70,0.25)",t.lineWidth=1;for(let c=0;c<26;c++){let h=c/26*Math.PI*2,d=128+Math.cos(h)*70,u=128+Math.sin(h)*70;t.beginPath(),t.moveTo(d,u);for(let f=0;f<6;f++)d+=Math.cos(h+Math.sin(c*7+f)*.6)*14,u+=Math.sin(h+Math.cos(c*3+f)*.6)*14,t.lineTo(d,u);t.stroke()}let o=40,a=t.createRadialGradient(128,128,8,128,128,o);a.addColorStop(0,s(.55)),a.addColorStop(.35,s(1.5)),a.addColorStop(.8,s(1)),a.addColorStop(1,s(.45)),t.beginPath(),t.arc(128,128,o,0,Math.PI*2),t.fillStyle=a,t.fill();for(let c=0;c<140;c++){let h=c/140*Math.PI*2+Math.sin(c*12.9)*.02;t.strokeStyle=c%2?s(1.9,.35):s(.4,.35),t.lineWidth=1+c%3*.4,t.beginPath(),t.moveTo(128+Math.cos(h)*14,128+Math.sin(h)*14),t.lineTo(128+Math.cos(h)*(o-4),128+Math.sin(h)*(o-4)),t.stroke()}t.lineWidth=5,t.strokeStyle=s(.25,.9),t.beginPath(),t.arc(128,128,o-1,0,Math.PI*2),t.stroke(),t.beginPath(),t.arc(128,128,14,0,Math.PI*2),t.fillStyle="#060404",t.fill();let l=new rn(e);return l.colorSpace=Ot,l.anisotropy=4,l}function Cv(i,e){let t=new lt(i,48,32),n=t.attributes.position;for(let r=0;r<n.count;r++){let o=n.getZ(r)/i;if(o>.86){let a=(o-.86)/.14;n.setZ(r,n.getZ(r)+i*.09*Math.sin(a*Math.PI*.5))}}t.computeVertexNormals();let s=new Mt({map:Av(e),roughness:.35,clearcoat:1,clearcoatRoughness:.02,specularIntensity:.8});return new Te(t,s)}var Pv=new Set(["haircard","lash","teeth","glass"]);function Iv(i,e){let t=new Ze,n=i.bones.map(f=>{let p=new pr;return p.name=f.name,p});i.bones.forEach((f,p)=>{let x=f.parent>=0?i.bones[f.parent]:null;n[p].position.set(f.pos[0]-(x?x.pos[0]:0),f.pos[1]-(x?x.pos[1]:0),f.pos[2]-(x?x.pos[2]:0)),f.parent>=0?n[f.parent].add(n[p]):t.add(n[p])}),t.updateMatrixWorld(!0);let s=new po(n),r=Object.fromEntries(n.map(f=>[f.name,f])),o=[],a=[],l=[],c=(f,p)=>{let x=e[p.mat]||e.cloth,m=new fo(f,x);return m.bind(s,new rt),m.name=p.name,m.castShadow=!Pv.has(p.mat),m.receiveShadow=!0,m.frustumCulled=!1,t.add(m),o.push(m),m};for(let f of i.parts){let p=c(f.geometry,f);if(f.geometryLo){a.push(p);let x=c(f.geometryLo,f);x.visible=!1,l.push(x)}}for(let f of i.meta.lenses||[]){let p=new on(f.r,40),x=p.attributes.position;for(let g=0;g<x.count;g++){let y=(x.getX(g)**2+x.getY(g)**2)/(f.r*f.r);x.setZ(g,f.r*.12*(1-y))}p.computeVertexNormals();let m=new Te(p,e.glass);m.name="lens",m.position.set(...f.c),m.quaternion.setFromUnitVectors(new U(0,0,1),new U(...f.n).normalize()),m.renderOrder=2,t.add(m),t.updateMatrixWorld(!0),(r.head||t).attach(m)}let h=0,d=f=>{if(!(f===h||!l.length)){h=f;for(let p of a)p.visible=f===0;for(let p of l)p.visible=f===1}},u=(f,p)=>{for(let x of o){let m=x.morphTargetDictionary?x.morphTargetDictionary[f]:void 0;m!==void 0&&(x.morphTargetInfluences[m]=p)}};return{root:t,bones:r,skeleton:s,meshes:o,meta:i.meta,setLod:d,setExpression:u}}var mu=(i,e)=>{let t=Math.sin(i*127.1+e*311.7)*43758.5453;return t-Math.floor(t)},us=(i,e,t)=>Math.max(e,Math.min(t,i));function Lv(){let i=new Ze,e=document.createElement("canvas");e.width=128,e.height=180;let t=e.getContext("2d");t.fillStyle="#fbfaf5",t.fillRect(0,0,128,180),t.strokeStyle="#2f6f9a",t.lineWidth=3;for(let a=0;a<6;a++)t.strokeRect(10,20+a*26,14,14),t.fillStyle="#9aa7b5",t.fillRect(32,24+a*26,60+mu(a,91)*30,6),a%2===0&&(t.beginPath(),t.moveTo(12,27+a*26),t.lineTo(17,32+a*26),t.lineTo(26,18+a*26),t.stroke());let n=new rn(e);n.colorSpace=Ot;let s=new Te(new pt(.17,.24,.008),new Ne({color:9067058,roughness:.55})),r=new Te(new Ut(.15,.21),new Ne({map:n,roughness:.9}));r.position.set(0,-.008,.0045);let o=new Te(new pt(.07,.022,.014),new Ne({color:12106948,metalness:1,roughness:.3}));return o.position.set(0,.11,.006),i.add(s,r,o),i}var Dv={sculpt:{armL:"armL",foreL:"foreL",handL:"handL",armR:"armR",foreR:"foreR",handR:"handR",chest:"chest",neck:"neck",head:"head",hair:"hair",fingL:"fingL",fingR:"fingR",thumbL:"thumbL",thumbR:"thumbR"},mh:{armL:"upperarm_l",foreL:"lowerarm_l",handL:"hand_l",armR:"upperarm_r",foreR:"lowerarm_r",handR:"hand_r",chest:"spine_03",neck:"neck_01",head:"head"}};function Rc(i,e,{seed:t=0,baseOpen:n=.1,prop:s=null}={}){let r=Iv(i,e),o=new Ze;o.add(r.root);let a=Dv[i.meta.rig==="mh"?"mh":"sculpt"],l={};for(let[m,g]of Object.entries(a))l[m]=r.bones[g]||null;let c=i.meta.rig==="mh",h={L:[],R:[]};if(c)for(let[m,g]of[["L","l"],["R","r"]])for(let y of["index","middle","ring","pinky"])for(let M of["01","02","03"]){let _=r.bones[`${y}_${M}_${g}`];_&&h[m].push(_)}r.root.updateMatrixWorld(!0);let d=i.meta.eyes.map(m=>{let g=Cv(m.r*(c?.97:1),i.meta.iris);return g.position.set(...m.c),g.castShadow=!1,r.root.add(g),r.root.updateMatrixWorld(!0),l.head.attach(g),{eye:g,sx:m.c[0]<0?-1:1}}),u={};for(let[m,g]of[["L",1],["R",-1]]){let y=l[`fore${m}`].position,M=l[`hand${m}`].position,_=Math.atan2(g*y.x,-y.y);u[m]={sx:g,outA:_,foreOut:Math.atan2(g*M.x,-M.y)-_,foreFwd:Math.atan2(M.z,Math.hypot(M.x,M.y))-Math.atan2(y.z,Math.hypot(y.x,y.y))}}if(s==="clipboard"){let m=Lv();m.position.set(c?-.03:.02,-.12,.05),m.rotation.set(.2,-1.2,.1),l.handR.add(m)}let f=m=>{let g=2.6+mu(t,1)*1.8,y=(m+mu(t,2)*g)%g/g,M=.16/g;return y<M?Math.sin(y/M*Math.PI):0},p=new U;function x(m){let{t:g=0,y=0,turn:M=0,L:_=[0,0,0,.3],R:b=[0,0,0,.3],headTurn:S=0,headTilt:R=0,headRoll:v=0,frizz:T=1,smile:A=.6,open:C=.08,brow:D=0,browAngle:B=0,lid:N=0,squint:W=0,look:k=null,squash:j=1,lean:I=0,wink:G=0}=m;r.root.position.y=y,r.root.rotation.x=I;let X=1/Math.sqrt(j);r.root.scale.set(X,j,X),o.rotation.y=M;for(let[pe,[Fe,ze,We,oe=.3]]of[["L",_],["R",b]]){let le=u[pe];l[`arm${pe}`].rotation.set(-Fe,0,le.sx*(ze-le.outA)),l[`fore${pe}`].rotation.set(le.foreFwd-We,0,-le.sx*le.foreOut),l[`fing${pe}`]&&l[`fing${pe}`].rotation.set(0,0,-le.sx*(oe-.3)*1.3),l[`thumb${pe}`]&&l[`thumb${pe}`].rotation.set(0,0,-le.sx*(oe-.3)*.6);for(let be of h[pe])be.rotation.set(-(oe-.3)*.5,0,0)}l.chest.rotation.x=.012*Math.sin(g*2.2+t),l.neck.rotation.set(R*.4,S*.4,v*.4),l.head.rotation.set(R*.6-.012*Math.sin(g*2.2+t),S*.6,v*.6),l.hair&&l.hair.scale.setScalar(1+.022*T*Math.sin(g*9+t)+(T-1)*.025);let Q=c?.85:1;r.setExpression("smile",us((A-.6)/.4,c?0:-1.4,1)*Q),c&&r.setExpression("frown",us((.6-A)/.8,0,1)),r.setExpression("open",us((C-n)*(i.meta.real?.9:1.25),0,1.1)),r.setExpression("brow",us(D,c?0:-.6,1.2)*Q),r.setExpression("browAngle",us(c?Math.max(0,B):B,-1,1)*Q),r.setExpression("squint",us(W+Math.max(0,A-.8)*.8,0,1)*(c?.6:1));let re=Math.max(N,f(g));if(r.setExpression("blinkA",Math.max(re,G)),r.setExpression("blinkB",re),k){o.updateMatrixWorld(!0),p.copy(k),l.head.worldToLocal(p);for(let pe of d){let Fe=p.x-pe.eye.position.x,ze=p.y-pe.eye.position.y,We=p.z-pe.eye.position.z,oe=us(Math.atan2(Fe,We),-.5,.5),le=us(Math.atan2(ze,Math.hypot(Fe,We)),-.35,.35);pe.eye.rotation.set(-le,oe,0)}}}return{root:o,pose:x,arms:{L:{hand:l.handL},R:{hand:l.handR}},head:l.head,setLod:r.setLod,character:r}}var Bd={grandpa:"assets/intro/grandpa.bin.gz?v=2d801e99",wild:"assets/intro/wild.bin.gz?v=fe711791",curly:"assets/intro/curly.bin.gz?v=31890f76"};var qt=Math.PI*2;function qn(i,e,t,{srgb:n=!0,repeat:s=null}={}){let r=document.createElement("canvas");r.width=i,r.height=e,t(r.getContext("2d"),i,e);let o=new rn(r);return n&&(o.colorSpace=Ot),o.anisotropy=8,s&&(o.wrapS=o.wrapT=sn,o.repeat.set(s[0],s[1])),o}var Ac=(i,e,t,n=.03,s=2)=>new ls(i,e,t,s,n),Cc=(i,e=28)=>new fi(i.map(([t,n])=>new ge(t,n)),e);function Od(i){let n=s=>(r,o,a)=>{if(s==="map"){r.fillStyle="#56686a",r.fillRect(0,0,o,a);for(let h=0;h<2;h++)r.fillStyle=`rgba(${$(h,1)>.5?"255,255,240":"20,30,30"},${.03+$(h,2)*.04})`,r.fillRect(h*o/2,0,o/2,a);for(let h=0;h<1400;h++){let d=$(h,3);r.fillStyle=`rgba(${d>.5?"235,240,230":"10,18,20"},${.012+$(h,4)*.025})`,r.beginPath(),r.ellipse($(h,1)*o,$(h,2)*a,4+$(h,5)*60,3+$(h,6)*40,$(h,7)*3,0,qt),r.fill()}for(let h=0;h<90;h++){let d=$(h,8)*o,u=$(h,9)*a*.4,f=60+$(h,10)*380,p=r.createLinearGradient(0,u,0,u+f);p.addColorStop(0,`rgba(30,24,16,${.08+$(h,11)*.12})`),p.addColorStop(1,"rgba(30,24,16,0)"),r.fillStyle=p,r.fillRect(d,u,1.5+$(h,12)*5,f)}for(let h=0;h<16;h++){let d=$(h,13)>.5?$(h,14)>.5?18:o-18:o/2+($(h,15)>.5?18:-18),u=$(h,16)*a,f=r.createRadialGradient(d,u,1,d,u,10+$(h,17)*22);f.addColorStop(0,"rgba(120,58,24,0.55)"),f.addColorStop(1,"rgba(120,58,24,0)"),r.fillStyle=f,r.fillRect(d-40,u-40,80,120)}r.lineWidth=1;for(let h=0;h<70;h++){r.strokeStyle=`rgba(200,210,205,${.08+$(h,18)*.15})`;let d=$(h,19)*o,u=a*(.45+$(h,20)*.55);r.beginPath(),r.moveTo(d,u),r.lineTo(d+($(h,21)-.5)*70,u+($(h,22)-.5)*18),r.stroke()}let c=r.createLinearGradient(0,a*.7,0,a);c.addColorStop(0,"rgba(10,10,8,0)"),c.addColorStop(1,"rgba(10,10,8,0.4)"),r.fillStyle=c,r.fillRect(0,0,o,a)}else{if(r.fillStyle=s==="bump"?"#808080":"#9a9a9a",r.fillRect(0,0,o,a),s==="rough")for(let c=0;c<900;c++)r.fillStyle=`rgba(${$(c,23)>.5?"255,255,255":"0,0,0"},0.08)`,r.fillRect($(c,24)*o,$(c,25)*a,3+$(c,26)*50,3+$(c,27)*50);if(s==="bump")for(let c=0;c<2e3;c++)r.fillStyle=`rgba(${$(c,28)>.5?"255,255,255":"0,0,0"},0.05)`,r.fillRect($(c,29)*o,$(c,30)*a,2,2)}let l=(c,h,d,u)=>{r.fillStyle=s==="map"?"rgba(12,18,20,0.85)":s==="bump"?"#2a2a2a":"#606060",r.fillRect(c,h,d,u)};l(0,0,o,6),l(0,0,6,a),l(o/2-3,0,6,a),s==="map"&&(r.fillStyle="rgba(230,240,235,0.12)",r.fillRect(6,6,o,2),r.fillRect(6,6,2,a),r.fillRect(o/2+3,0,2,a));for(let c=22;c<a;c+=128)for(let h of[18,o/2-18,o/2+18,o-18])s==="map"?(r.fillStyle="#3e4c4f",r.beginPath(),r.arc(h,c,7,0,qt),r.fill(),r.fillStyle="rgba(255,255,255,0.3)",r.beginPath(),r.arc(h-2,c-2,2.5,0,qt),r.fill()):(r.fillStyle=s==="bump"?"#e0e0e0":"#707070",r.beginPath(),r.arc(h,c,7,0,qt),r.fill())};return{map:qn(1024,1024,n("map"),{repeat:i}),bump:qn(1024,1024,n("bump"),{srgb:!1,repeat:i}),rough:qn(1024,1024,n("rough"),{srgb:!1,repeat:i})}}function Uv(i){let e=t=>(n,s,r)=>{let a=s/4;for(let l=0;l<4;l++)for(let c=0;c<4;c++){let h=$(l*7+c,11);if(t){let d=70+Math.floor(h*40);n.fillStyle=`rgb(${d},${d},${d})`}else{let d=38+h*7;n.fillStyle=(l+c)%2?`hsl(35, 6%, ${d}%)`:`hsl(30, 5%, ${d-4}%)`}if(n.fillRect(l*a,c*a,a,a),!t)for(let d=0;d<220;d++)n.fillStyle=`rgba(${$(d,l+c*9)>.5?"255,255,250":"20,18,16"},0.12)`,n.fillRect(l*a+$(d,31+l)*a,c*a+$(d,41+c)*a,2,2)}for(let l=0;l<220;l++){n.strokeStyle=t?`rgba(255,255,255,${.1+$(l,13)*.15})`:`rgba(15,12,10,${.04+$(l,13)*.08})`,n.lineWidth=1+$(l,14)*3;let c=$(l,15)*s,h=$(l,16)*r;n.beginPath(),n.moveTo(c,h),n.quadraticCurveTo(c+($(l,17)-.5)*60,h+($(l,18)-.5)*20,c+($(l,19)-.5)*90,h+($(l,20)-.5)*30),n.stroke()}if(!t)for(let l=0;l<14;l++){let c=$(l,21)*s,h=$(l,22)*r,d=20+$(l,23)*70,u=n.createRadialGradient(c,h,0,c,h,d);u.addColorStop(0,"rgba(25,20,15,0.18)"),u.addColorStop(1,"rgba(25,20,15,0)"),n.fillStyle=u,n.fillRect(c-d,h-d,d*2,d*2)}n.fillStyle=t?"#d8d8d8":"#1a1815";for(let l=0;l<=4;l++)n.fillRect(l*a-2,0,4,r),n.fillRect(0,l*a-2,s,4)};return{map:qn(1024,1024,e(!1),{repeat:i}),rough:qn(1024,1024,e(!0),{srgb:!1,repeat:i})}}function Nv(){return qn(1024,512,(i,e,t)=>{let n=i.createLinearGradient(0,0,0,t);n.addColorStop(0,"#070b24"),n.addColorStop(.55,"#1d1550"),n.addColorStop(.8,"#5b2a6e"),n.addColorStop(1,"#ff8a5c"),i.fillStyle=n,i.fillRect(0,0,e,t);for(let r=0;r<220;r++)i.fillStyle=`rgba(255,255,255,${.3+$(r,1)*.7})`,i.fillRect($(r,2)*e,$(r,3)*t*.55,1.5,1.5);let s=i.createRadialGradient(760,120,10,760,120,120);s.addColorStop(0,"rgba(255,248,220,1)"),s.addColorStop(.3,"rgba(255,240,200,0.9)"),s.addColorStop(.31,"rgba(255,220,180,0.25)"),s.addColorStop(1,"rgba(255,200,160,0)"),i.fillStyle=s,i.beginPath(),i.arc(760,120,120,0,qt),i.fill();for(let r=0;r<3;r++){let o=-20;for(;o<e;){let a=30+$(Math.floor(o),r+20)*70,l=(.18+$(Math.floor(o),r+30)*.32)*t*(1-r*.18),c=t-l-r*18;i.fillStyle=["#0c1030","#0a0d26","#06081a"][r],i.fillRect(o,c,a,t-c),$(Math.floor(o),r+40)>.7&&(i.beginPath(),i.moveTo(o+a/2-3,c),i.lineTo(o+a/2,c-40),i.lineTo(o+a/2+3,c),i.fill(),i.fillStyle="#ff3d5a",i.fillRect(o+a/2-1.5,c-42,3,3));for(let h=c+8;h<t-6;h+=11)for(let d=o+5;d<o+a-6;d+=9){let u=$(Math.floor(d*3+h),r+50);u>.62&&(i.fillStyle=u>.93?"#7df3ff":u>.85?"#ff9ef0":"#ffd48a",i.globalAlpha=.5+r*.15,i.fillRect(d,h,4,5),i.globalAlpha=1)}o+=a+4}}i.strokeStyle="rgba(255,90,200,0.8)",i.lineWidth=2,i.beginPath(),i.moveTo(80,300),i.bezierCurveTo(300,260,500,330,980,270),i.stroke(),i.strokeStyle="rgba(120,240,255,0.7)",i.beginPath(),i.moveTo(0,340),i.bezierCurveTo(250,300,600,360,1024,320),i.stroke()})}function Fv(){return qn(1024,512,(i,e,t)=>{i.fillStyle="#1f3a33",i.fillRect(0,0,e,t);for(let r=0;r<40;r++)i.fillStyle=`rgba(255,255,255,${.02+$(r,1)*.04})`,i.beginPath(),i.ellipse($(r,2)*e,$(r,3)*t,40+$(r,4)*120,15+$(r,5)*40,$(r,6)*3,0,qt),i.fill();i.fillStyle="rgba(245,245,235,0.88)",i.font='italic 600 46px "Bricolage Grotesque", sans-serif',i.fillText("R\xE9union = \u03A3 (blabla)\xB2",40,80),i.font='italic 600 40px "Bricolage Grotesque", sans-serif',i.fillText("Synergie \u2248 m\xB7c\xB2",60,160),i.fillText("Quick win \u2192 quick lose ?",520,130),i.fillText("ROI = \xBF?",640,230),i.font='italic 600 34px "Bricolage Grotesque", sans-serif',i.fillText("On boucle... encore",70,400),i.fillText("ASAP = hier",600,420),i.strokeStyle="rgba(245,245,235,0.8)",i.lineWidth=3;let n=120,s=210;for(let r=0;r<=3;r++)i.beginPath(),i.moveTo(n+r*45,s),i.lineTo(n+r*45,s+135),i.stroke(),i.beginPath(),i.moveTo(n,s+r*45),i.lineTo(n+135,s+r*45),i.stroke();i.beginPath(),i.arc(n+22,s+22,14,0,qt),i.stroke(),i.beginPath(),i.arc(n+67,s+67,14,0,qt),i.stroke(),i.beginPath(),i.moveTo(n+100,s+100),i.lineTo(n+125,s+125),i.moveTo(n+125,s+100),i.lineTo(n+100,s+125),i.stroke(),i.beginPath(),i.moveTo(300,260),i.quadraticCurveTo(400,200,480,270),i.stroke(),i.beginPath(),i.moveTo(470,255),i.lineTo(482,272),i.lineTo(462,276),i.stroke(),i.beginPath(),i.arc(880,330,40,0,qt),i.stroke(),i.beginPath(),i.arc(866,320,5,0,qt),i.arc(894,320,5,0,qt),i.fill(),i.beginPath(),i.arc(880,340,18,.2,Math.PI-.2),i.stroke()})}function Bv(i){return qn(256,384,(e,t,n)=>{if(i===0){let s=e.createLinearGradient(0,0,0,n);s.addColorStop(0,"#ffcf4a"),s.addColorStop(1,"#ff7a1a"),e.fillStyle=s,e.fillRect(0,0,t,n),e.fillStyle="#1b1b2e",e.font='800 30px "Bricolage Grotesque", sans-serif',e.textAlign="center",e.fillText("R\xC9UNIONITE",t/2,60),e.fillText("AIGU\xCB",t/2,95),e.font='600 18px "Bricolage Grotesque", sans-serif',["B\xE2illements","Regard vitreux","Envie de caf\xE9","Mots creux"].forEach((r,o)=>e.fillText(`\u2022 ${r}`,t/2,160+o*34)),e.beginPath(),e.arc(t/2,320,30,0,qt),e.fill(),e.fillStyle="#ffcf4a",e.fillRect(t/2-4,300,8,26),e.fillRect(t/2-4,332,8,8)}else e.fillStyle="#16324a",e.fillRect(0,0,t,n),e.fillStyle="#7df3ff",e.font='800 28px "Bricolage Grotesque", sans-serif',e.textAlign="center",e.fillText("COUPEZ",t/2,70),e.fillText("VOS MICROS",t/2,105),e.strokeStyle="#ff3df2",e.lineWidth=10,e.beginPath(),e.roundRect(t/2-28,150,56,100,28),e.stroke(),e.beginPath(),e.moveTo(t/2-60,290),e.lineTo(t/2+60,140),e.stroke(),e.fillStyle="#e7f0ee",e.font='600 18px "Bricolage Grotesque", sans-serif',e.fillText("(sauf pour dire \xAB Bingo \xBB)",t/2,340)})}function Ov(){return qn(256,256,i=>{i.fillStyle="#f6f1e4",i.beginPath(),i.arc(128,128,126,0,qt),i.fill(),i.fillStyle="#1b2433",i.textAlign="center",i.textBaseline="middle",i.font='800 30px "Bricolage Grotesque", sans-serif';for(let e=1;e<=12;e++){let t=e/12*qt-Math.PI/2;i.fillText(String(e),128+Math.cos(t)*96,128+Math.sin(t)*96)}for(let e=0;e<60;e++){let t=e/60*qt;i.fillRect(128+Math.cos(t)*116-1,128+Math.sin(t)*116-1,e%5?2:4,e%5?2:4)}i.font='700 16px "Bricolage Grotesque", sans-serif',i.fillStyle="#e0446a",i.fillText("LUNDI",128,168)})}function Hv(){return qn(256,256,(i,e,t)=>{i.fillStyle="#9a6a3a",i.fillRect(0,0,e,t);for(let n=0;n<4;n++)i.fillStyle=n%2?"#8a5c30":"#a87444",i.fillRect(0,n*64,e,62);for(let n=0;n<60;n++){i.strokeStyle="rgba(60,30,10,0.25)",i.beginPath();let s=$(n,1)*t;i.moveTo(0,s),i.bezierCurveTo(80,s+4,160,s-4,e,s+2),i.stroke()}i.strokeStyle="#5a3a1a",i.lineWidth=14,i.strokeRect(7,7,e-14,t-14),i.beginPath(),i.moveTo(10,10),i.lineTo(e-10,t-10),i.stroke(),i.fillStyle="rgba(30,20,10,0.75)",i.font='800 26px "Bricolage Grotesque", sans-serif',i.textAlign="center",i.fillText("MOTS CREUX",e/2,112),i.font='700 20px "Bricolage Grotesque", sans-serif',i.fillText("FRAGILE",e/2,150)})}function zv(){return qn(512,512,(i,e)=>{let t=e/2;for(let n=0;n<48;n++)i.fillStyle=n%2?"#16161a":"#f2c230",i.beginPath(),i.moveTo(t,t),i.arc(t,t,250,n/48*qt,(n+1)/48*qt),i.closePath(),i.fill();i.globalCompositeOperation="destination-out",i.beginPath(),i.arc(t,t,212,0,qt),i.fill(),i.globalCompositeOperation="source-over",i.fillStyle="rgba(0,0,0,0.25)";for(let n=0;n<300;n++)i.fillRect($(n,1)*e,$(n,2)*e,3,3)})}function Gv(){let i=new Ze,e=new Ze;i.add(e);let t=new Mt({color:15856630,roughness:.28,clearcoat:1,clearcoatRoughness:.12}),n=new Mt({color:16742938,roughness:.35,clearcoat:.7}),s=new Mt({color:527122,roughness:.08,clearcoat:1,metalness:.3}),r=new Ne({color:1776930,roughness:.85}),o=new yt({color:bt(4190463,2.4),toneMapped:!1}),a=(x,m,g,y,M,_)=>{let b=new Te(m,g);return y&&b.position.copy(y),M&&b.rotation.set(...M),_&&b.scale.copy(_),x.add(b),b},l=a(i,new kt(.075,.035,12,24),r,P(0,.11,0),[0,Math.PI/2,0]);a(e,new it(.15,.19,.12,28),n,P(0,.17,0)),a(e,new lt(.22,32,24),t,P(0,.42,0),null,P(1,1.08,.95)),a(e,new kt(.205,.018,10,40),n,P(0,.36,0),[Math.PI/2,0,0]);let c=a(e,new on(.035,20),new yt({color:bt(3800968,2),toneMapped:!1}),P(0,.46,.21));a(e,new it(.05,.06,.08,14),r,P(0,.67,0));let h=new Ze;h.position.y=.8,e.add(h),a(h,new lt(.19,32,24),t,null,null,P(1.15,.82,1)),a(h,new lt(.185,32,16,-Math.PI*.42,Math.PI*.84,Math.PI*.22,Math.PI*.56),s,P(0,0,.012),null,P(1.13,.8,1));let d=[-1,1].map(x=>a(h,new lt(.032,16,12),o,P(x*.065,.005,.178),null,P(.8,1.15,.3)));a(h,new it(.007,.007,.14,6),r,P(0,.2,0));let u=a(h,new lt(.026,14,10),new yt({color:bt(16756768,2),toneMapped:!1}),P(0,.28,0)),f=[-1,1].map(x=>{let m=new Ze;m.position.set(x*.21,.5,0),e.add(m),a(m,new lt(.045,14,10),n),a(m,new Sn(.028,.14,4,10),t,P(0,-.1,0));let g=a(m,new lt(.04,14,10),n,P(0,-.2,0));return{sh:m,hand:g,sx:x}}),p=new Ze;return f[1].hand.add(p),p.position.set(.02,-.02,.07),a(p,Cc([[0,0],[.045,0],[.048,.1],[.044,.1],[.041,.006],[0,.006]]),new Mt({color:14697578,roughness:.3,clearcoat:.8,side:Bt})),a(p,new on(.041,20),new Ne({color:3809040,roughness:.2}),P(0,.085,0),[-Math.PI/2,0,0]),a(p,new kt(.025,.007,8,16,Math.PI),new Mt({color:14697578,roughness:.3}),P(.05,.05,0),[0,0,-Math.PI/2]),{root:i,body:e,head:h,eyes:d,bulb:u,arms:f,wheel:l,status:c,mug:p}}function Hd(i,e){let t=new Ze;i.add(t);let n=(Y,ye,Ae,De,Le=t)=>{let H=new Te(Y,ye);return Ae&&H.position.copy(Ae),De&&H.rotation.set(...De),Le.add(H),H},s=Uv([45,25]),r=new Ne({map:s.map,roughnessMap:s.rough,roughness:.75,metalness:0}),o=n(new Ut(90,50),r,null,[-Math.PI/2,0,0]);o.receiveShadow=!0,o.userData.noCast=!0;let a=Od([.5,.5]),l=new Ne({map:a.map,bumpMap:a.bump,bumpScale:1.2,roughnessMap:a.rough,roughness:.75,metalness:.2}),c=new wi;c.moveTo(-8.5,0),c.lineTo(9.5,0),c.lineTo(9.5,7),c.lineTo(-8.5,7),c.closePath();let h=new Ts,d={x:0,y:3,r:1.3};h.absarc(d.x,d.y,d.r,0,qt,!0),c.holes.push(h);let u=n(new yr(c,48),l,P(0,0,-6.5));u.receiveShadow=!0,u.userData.noCast=!0;let f=Od([7,3.5]),p=n(new Ut(14,7),new Ne({map:f.map,bumpMap:f.bump,bumpScale:1.2,roughnessMap:f.rough,roughness:.75,metalness:.2}),P(9.5,3.5,.5),[0,-Math.PI/2,0]);p.receiveShadow=!0,p.userData.noCast=!0;let x=new Mt({color:2051410,roughness:.4,clearcoat:.5});n(new pt(18,.32,.06),x,P(.5,.16,-6.46)),n(new pt(.06,.32,14),x,P(9.46,.16,.5));let m=n(new kt(d.r,.1,16,72),e.brass,P(d.x,d.y,-6.45));m.castShadow=!1;for(let Y=0;Y<16;Y++){let ye=Y/16*qt;n(new lt(.035,10,8),e.copper,P(d.x+Math.cos(ye)*d.r,d.y+Math.sin(ye)*d.r,-6.36))}n(new pt(d.r*2,.05,.05),e.metalLight,P(d.x,d.y,-6.5)),n(new pt(.05,d.r*2,.05),e.metalLight,P(d.x,d.y,-6.5));let g=n(new on(d.r,48),new Mt({color:10475775,transparent:!0,opacity:.08,roughness:.05,clearcoat:1,depthWrite:!1}),P(d.x,d.y,-6.52));g.userData.noDepth=!0;let y=new yt({map:Nv(),fog:!1});n(new Ut(6.4,3.2),y,P(d.x,d.y-.2,-7.4));let M=n(new it(d.r,d.r,.9,48,1,!0),new Ne({color:791586,roughness:.7,side:en}),P(d.x,d.y,-6.95),[Math.PI/2,0,0]);M.userData.noCast=!0;let _=new Ne({color:2305082,metalness:.6,roughness:.45});for(let Y of[-5.2,-2.6,0,2.6])n(new pt(18.4,.28,.22),_,P(.5,5.95,Y));for(let Y of[-6,-2,2,6])n(new pt(.18,.2,13),_,P(Y,5.72,-1.3));for(let[Y,ye,Ae,De]of[[5.45,-4.2,.12,e.metalLight],[5.5,-3.6,.08,e.copper],[5.35,1.4,.1,e.metalLight]])n(new it(Ae,Ae,18,16),De,P(.5,Y,ye),[0,0,Math.PI/2]);let b=n(new Ut(22,5.4),new Ne({color:1120808,roughness:.8}),P(-19,3.75,0),[Math.PI/2,0,0]);b.userData.noCast=!0;let S=new yt({color:bt(13627391,1.5),toneMapped:!1});for(let Y=-28;Y<=-10;Y+=3)n(new pt(1.4,.03,.5),S,P(Y,3.73,0));let R=new Ze;R.position.set(9.42,2.55,-2.4),R.rotation.y=-Math.PI/2,t.add(R),n(new pt(3.8,2,.06),e.wood,null,null,R),n(new Ut(3.6,1.8),new Ne({map:Fv(),roughness:.95}),P(0,0,.032),null,R),n(new pt(3.6,.06,.12),e.wood,P(0,-1.02,.06),null,R),n(new pt(.18,.05,.07),new Ne({color:3816010,roughness:.8}),P(1.2,-.97,.08),null,R);for(let Y=0;Y<3;Y++)n(new it(.012,.012,.09,8),new Ne({color:[16777215,16766688,14087935][Y]}),P(-1.2+Y*.14,-.975,.08),[0,0,Math.PI/2],R);for(let[Y,ye,Ae]of[[P(9.43,2.45,2.6),-Math.PI/2,0],[P(8.55,2.3,-6.44),0,1]]){let De=n(new Ut(.9,1.35),new Ne({map:Bv(Ae),roughness:.7}),Y,[0,ye,0]);De.userData.noCast=!0}let v=n(new on(.32,3),new Ne({color:15909424,roughness:.5}),P(-2.05,2,-6.44),[0,0,Math.PI/2]);v.userData.noCast=!0,n(new Ut(.06,.24),new yt({color:1447450}),P(-2.05,2.02,-6.43));let T=new Ze;T.position.set(-5,4.35,-6.42),t.add(T),n(new it(.46,.46,.06,48),e.brass,null,[Math.PI/2,0,0],T),n(new on(.42,48),new Ne({map:Ov(),roughness:.6}),P(0,0,.032),null,T);let A=[[.2,.03,1778739],[.32,.02,1778739],[.36,.008,14697578]].map(([Y,ye,Ae],De)=>{let Le=new Ze;return Le.position.z=.036+De*.004,T.add(Le),n(new pt(ye,Y,.006),new Ne({color:Ae,roughness:.5}),P(0,Y/2-.03,0),null,Le),Le}),C=new Ne({map:Hv(),roughness:.75});for(let[Y,ye,Ae,De,Le]of[[-6.6,.4,-2,.8,.1],[-6.5,1.2,-2.05,.8,-.15],[-6.7,.35,-1,.7,.3],[-7.6,.4,-5.6,.8,.2]])n(Ac(De,De,De,.03),C,P(Y,ye,Ae),[0,Le,0]);let D=new Ze;D.position.set(6.3,0,1.4),D.rotation.y=-.4,t.add(D);let B=new it(.02,.02,.9,8);for(let[Y,ye]of[[-.42,-.25],[.42,-.25],[-.42,.25],[.42,.25]])n(B,e.chrome,P(Y,.47,ye),null,D);for(let Y of[.2,.92])n(Ac(.95,.04,.6,.015),e.wood,P(0,Y,0),null,D);n(Ac(.36,.5,.34,.05),new Mt({color:12071482,roughness:.3,clearcoat:.8}),P(-.18,1.19,-.05),null,D),n(Ac(.26,.06,.2,.02),e.chrome,P(-.18,1,.14),null,D),n(new on(.035,16),new yt({color:bt(3800968,2),toneMapped:!1}),P(-.08,1.3,.121),null,D);for(let Y=0;Y<3;Y++)n(Cc([[0,0],[.04,0],[.042,.09],[.038,.09],[.036,.006],[0,.006]]),new Mt({color:[15922422,2270899,15909424][Y],roughness:.3,clearcoat:.8,side:Bt}),P(.12+Y*.1,.94,.12-Y*.05),null,D);let N=new Ne({color:3115594,roughness:.55,side:Bt}),W=new wi;W.moveTo(0,0),W.bezierCurveTo(.18,.08,.2,.32,0,.42),W.bezierCurveTo(-.2,.32,-.18,.08,0,0);let k=new yr(W,8),j=(Y,ye,Ae)=>{let De=new Ze;De.position.set(Y,0,ye),De.scale.setScalar(Ae),t.add(De),n(Cc([[0,0],[.18,0],[.24,.4],[.26,.42],[0,.42]]),new Mt({color:14252106,roughness:.6}),null,null,De);for(let Le=0;Le<9;Le++){let H=Le/9*qt+$(Le,1),$e=new Ze;$e.position.y=.4,$e.rotation.set(.5+$(Le,2)*.5,H,0),De.add($e),n(new it(.008,.01,.6,5),N,P(0,.3,0),null,$e),n(k,N,P(0,.58,0),[.6,0,0],$e)}};j(-7.8,-5,1.4),j(8.6,-5.6,1.2),j(6.5,-.3,.9);let I=new Ze;I.position.set(-5.45,0,.75),t.add(I),n(new it(.2,.2,.06,24),new Mt({color:12071482,roughness:.4,clearcoat:.6}),P(0,.62,0),null,I);for(let Y=0;Y<3;Y++){let ye=Y/3*qt;n(new it(.015,.02,.62,8),e.chrome,P(Math.cos(ye)*.13,.3,Math.sin(ye)*.13),[Math.sin(ye)*.15,0,-Math.cos(ye)*.15],I)}n(Cc([[0,0],[.16,0],[.2,.4],[.21,.4],[.17,0],[0,.005]]),new Ne({color:5925498,metalness:.6,roughness:.4,side:Bt}),P(-1.75,0,2.35));let G=new Ne({color:15855590,roughness:.9,flatShading:!0});for(let Y=0;Y<5;Y++)n(new Ro(.06,0),G,P(-1.75+($(Y,1)-.5)*.18,.4+$(Y,2)*.05,2.35+($(Y,3)-.5)*.18),[$(Y,4)*3,$(Y,5)*3,0]);for(let[Y,ye]of[[9.1,-4.6],[-8.2,-5.9]])n(new Sn(.1,.4,6,16),new Mt({color:14032678,roughness:.3,clearcoat:1}),P(Y,.32,ye)),n(new it(.03,.03,.08,10),e.dark,P(Y,.63,ye));let X=new Ne({color:1447965,roughness:.7});for(let Y of[[[1.35,-3.4],[1.5,-4.6],[1.9,-5.8],[2.2,-6.4]],[[-1.35,-3.4],[-1.6,-4.8],[-1.8,-6.4]],[[-1.2,-.6],[-2,.2],[-2.6,.6],[-3.2,.9]],[[1.2,-.6],[2,.1],[2.8,.5],[3.4,.9]]]){let ye=new Wt(Y.map(([Ae,De],Le)=>P(Ae,.035,De+Math.sin(Le*2.1)*.08)));n(new Qn(ye,40,.035,8),X)}let Q=new Ne({map:zv(),transparent:!0,roughness:.7,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,depthWrite:!1}),re=n(new Ut(3.7,3.7),Q,P(0,.004,0),[-Math.PI/2,0,0]);re.userData.noCast=!0,re.userData.noDepth=!0;let pe=qn(4,128,Y=>{let ye=Y.createLinearGradient(0,0,0,128);ye.addColorStop(0,"rgba(255,255,255,0)"),ye.addColorStop(.15,"rgba(255,255,255,0.9)"),ye.addColorStop(1,"rgba(255,255,255,0.15)"),Y.fillStyle=ye,Y.fillRect(0,0,4,128)},{srgb:!1}),Fe=[],ze=[];for(let[Y,ye,Ae,De,Le]of[[-3.2,3.32,1.75,-3.3,.8],[3.6,3.32,1.75,3.6,.7],[-1.7,3.42,-1.4,-2.4,-2.4]]){let H=ye-.02,$e=new Te(new it(.2,1,H,40,1,!0),new yt({color:bt(16762512,.03),alphaMap:pe,transparent:!0,depthWrite:!1,blending:gn,side:Bt,toneMapped:!1}));$e.position.set((Y+De)/2,H/2,(Ae+Le)/2);let ut=P(Y-De,H,Ae-Le).normalize();$e.quaternion.setFromUnitVectors(P(0,1,0),ut),$e.userData.noDepth=!0,t.add($e),Fe.push($e),ze.push({top:P(Y,ye,Ae),bot:P(De,0,Le)})}let We=240,oe=new wt;oe.setAttribute("position",new At(new Float32Array(We*3),3));let le=qn(32,32,Y=>{let ye=Y.createRadialGradient(16,16,0,16,16,16);ye.addColorStop(0,"rgba(255,255,255,1)"),ye.addColorStop(1,"rgba(255,255,255,0)"),Y.fillStyle=ye,Y.fillRect(0,0,32,32)}),be=new bi({size:.022,map:le,color:bt(16767400,1.6),transparent:!0,depthWrite:!1,blending:gn,toneMapped:!1}),Ve=new Vi(oe,be);Ve.frustumCulled=!1,t.add(Ve);let Ie=Gv();t.add(Ie.root),Ie.root.traverse(Y=>{Y.isMesh&&!Y.material.isMeshBasicMaterial&&(Y.castShadow=!0,Y.receiveShadow=!0)});let Xe=[[0,P(-.6,0,3.4)],[6.4,P(-.6,0,3.4)],[9.2,P(-1.75,0,2.6)],[11,P(-1.75,0,2.6)],[13.4,P(2.1,0,2.7)],[16.2,P(2.1,0,2.7)],[Qt,P(1.4,0,2.9)],[Qt+1.2,P(.9,0,3.1)],[40,P(.9,0,3.1)]],ht=(Y,ye)=>{let Ae=0;for(;Ae<Xe.length-2&&Y>Xe[Ae+1][0];)Ae++;let[De,Le]=Xe[Ae],[H,$e]=Xe[Ae+1];return ye.copy(Le).lerp($e,Et(Di((Y-De)/(H-De))))};hs(t,{skip:Y=>Y===Ie.root||A.includes(Y)||Fe.includes(Y)||Y===Ve});let de=new U,ve=new U,Se=new Re(4190463),Ee=new Re(16722493);return{window:d,update(Y,ye){let Ae=Y>Qt?(Y-Qt)*9:0;A[0].rotation.z=-((9+2/60)/12)*qt-Ae*.3,A[1].rotation.z=-(2/60)*qt-Y*.02-Ae,A[2].rotation.z=-Math.floor(Y)*(qt/60)-Ae*3,y.color.setScalar(Y>Qt?xt(1,.45,Et(dt(Y,Qt,Qt+1.5))):1);let De=oe.attributes.position.array;for(let K=0;K<We;K++){let ae=ze[K%ze.length],Me=($(K,1)+Y*(.01+$(K,2)*.02))%1,Pe=Math.sqrt($(K,3))*xt(.15,1,Me),ue=$(K,4)*qt+Y*.1*($(K,5)-.5);de.copy(ae.top).lerp(ae.bot,Me*.85),De[K*3]=de.x+Math.cos(ue)*Pe,De[K*3+1]=de.y+Math.sin(Y*.7+K)*.03,De[K*3+2]=de.z+Math.sin(ue)*Pe}oe.attributes.position.needsUpdate=!0,Fe.forEach((K,ae)=>{let Me=ye.position.distanceTo(K.position);K.material.color.copy(bt(16762512,(Y>Qt&&ae<2?.012:.03)*Et(Di((Me-1.2)/2.5))))}),ht(Y,de),ht(Y+.15,ve);let Le=de.distanceTo(ve)>.004;Ie.root.position.copy(de);let H=Y>16.4&&Y<Qt,$e;if(H)$e=(Y-16.4)*9;else if(Le)$e=Math.atan2(ve.x-de.x,ve.z-de.z);else{let K=ye.position;$e=Math.atan2(K.x-de.x,K.z-de.z)*.6}Ie.root.rotation.y=xt(Ie.root.rotation.y,$e,H?1:.25),Ie.wheel.rotation.x+=Le?.35:0;let ut=Y>Qt+.4?Math.exp(-(Y-Qt-.4)*.25):0,L=ut?Math.abs(Math.sin((Y-Qt)*6.5))*.22*ut:0;Ie.body.position.y=L+(Le?Math.abs(Math.sin(Y*14))*.012:0),Ie.body.rotation.z=Le?Math.sin(Y*7)*.04:0,Ie.head.rotation.set(H?Math.sin(Y*20)*.15:Math.sin(Y*1.3)*.05,H?0:Math.sin(Y*.9)*.25,H?Math.sin(Y*17)*.2:0);let E=Y*.37%1<.05?.15:1;Ie.eyes.forEach(K=>{K.scale.set(.8,(H?1.5:Y>Qt?.45:1.15)*E,.3),K.material.color.copy(H?Ee:Se).multiplyScalar(2.4)}),Ie.bulb.material.color.copy(bt(H?Math.sin(Y*16)>0?16722493:4194304:16756768,2)),Ie.arms.forEach((K,ae)=>{let Me=Y>Qt?2.6+Math.sin((Y-Qt)*6.5+ae)*.3:H?2.2+Math.sin(Y*12+ae*3)*.6:ae===1?1.1:.2+Math.sin(Y*2+ae)*.1;K.sh.rotation.set(-Me*(ae===1&&!H&&Y<Qt?1:.2),0,K.sx*(Y>Qt||H?Me*.45:.15))});let J=dt(Y,17.6,18.1);Ie.mug.visible=Y<18.1,Ie.mug.position.y=-.02-J*J*.8}}}var Ic=Math.PI*2,ra=(i,e,t,n=.03,s=2)=>new ls(i,e,t,s,n);function fs(i,e,t,{srgb:n=!0,repeat:s=null}={}){let r=document.createElement("canvas");r.width=i,r.height=e,t(r.getContext("2d"),i,e);let o=new rn(r);return n&&(o.colorSpace=Ot),s&&(o.wrapS=o.wrapT=sn,o.repeat.set(...s)),o.anisotropy=4,o}var Pc=null;function kv(){return Pc||(Pc=fs(128,128,i=>{let e=i.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,255,255,0.55)"),e.addColorStop(.7,"rgba(255,255,255,0.15)"),e.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=e,i.fillRect(0,0,128,128)},{srgb:!1}),Pc)}function Vv(){return fs(512,300,(i,e,t)=>{i.fillStyle="#04121c",i.fillRect(0,0,e,t),i.strokeStyle="rgba(34,230,255,0.25)",i.lineWidth=1;for(let n=0;n<e;n+=32)i.beginPath(),i.moveTo(n,0),i.lineTo(n,t),i.stroke();for(let n=0;n<t;n+=32)i.beginPath(),i.moveTo(0,n),i.lineTo(e,n),i.stroke();i.font='700 22px "Bricolage Grotesque", sans-serif',i.fillStyle="#7df3ff",i.fillText("NIVEAU DE BLABLA",18,34),i.fillStyle="#ff6ad5",i.fillText("R\xC9UNION EN COURS",300,34),i.strokeStyle="#39ff88",i.lineWidth=4,i.beginPath();for(let n=0;n<=60;n++){let s=20+n*7.5,r=250-n*n*.045-Math.sin(n*.7)*10;n?i.lineTo(s,r):i.moveTo(s,r)}i.stroke();for(let n=0;n<7;n++){let s=30+$(n,3)*90;i.fillStyle=n%2?"#ffb020":"#9b5cff",i.fillRect(330+n*24,270-s,16,s)}i.fillStyle="#e8fbff",i.font='600 18px "Bricolage Grotesque", sans-serif',i.fillText("Creux : 97 %",330,290)})}function Wv(i){return fs(128,180,(e,t,n)=>{e.fillStyle="#f3f0e6",e.fillRect(0,0,t,n),e.fillStyle="rgba(40,60,90,0.55)";for(let s=0;s<12;s++)e.fillRect(12,22+s*12,60+$(s,i)*50,3);i%2&&(e.strokeStyle="rgba(224,68,106,0.8)",e.lineWidth=3,e.beginPath(),e.arc(90,140,18,0,Ic),e.stroke())})}function Xv(){return fs(256,32,(i,e,t)=>{i.fillStyle="#e8b81a",i.fillRect(0,0,e,t),i.fillStyle="#16161a";for(let n=-t;n<e+t;n+=32)i.beginPath(),i.moveTo(n,0),i.lineTo(n+16,0),i.lineTo(n+16-t,t),i.lineTo(n-t,t),i.closePath(),i.fill()},{repeat:[4,1]})}function zd(i,e){return fs(128,128,t=>{t.translate(64,64),t.rotate(Math.PI/4),t.fillStyle=e,t.fillRect(-40,-40,80,80),t.strokeStyle="#111",t.lineWidth=5,t.strokeRect(-36,-36,72,72),t.rotate(-Math.PI/4),t.fillStyle="#111",t.font="800 26px sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText(i,0,2)})}function qv(){return fs(128,128,i=>{i.fillStyle="#f4f1e8",i.beginPath(),i.arc(64,64,62,0,Ic),i.fill(),i.strokeStyle="#222",i.lineWidth=3;for(let e=0;e<=10;e++){let t=Math.PI*.75+e/10*Math.PI*1.5;i.beginPath(),i.moveTo(64+Math.cos(t)*50,64+Math.sin(t)*50),i.lineTo(64+Math.cos(t)*58,64+Math.sin(t)*58),i.stroke()}i.strokeStyle="#d6243a",i.lineWidth=8,i.beginPath(),i.arc(64,64,54,Math.PI*1.9,Math.PI*2.25),i.stroke()})}function Gd(i,e){let t=new Ze;i.add(t);let n=(I,G,X,Q,re=t)=>{let pe=new Te(I,G);return X&&pe.position.copy(X),Q&&pe.rotation.set(...Q),re.add(pe),pe},s=(I,G=.35)=>new Mt({color:I,roughness:G,clearcoat:.7,clearcoatRoughness:.25}),r=[],o=[],a=(I,G,X,Q,re,pe)=>{let Fe=new Te(new Ut(G,X),new yt({map:kv(),color:bt(Q,re),transparent:!0,depthWrite:!1,blending:gn,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-4}));return Fe.position.copy(I),pe&&Fe.rotation.set(...pe),Fe.userData.noDepth=!0,Fe.userData.noCast=!0,Fe.renderOrder=1,t.add(Fe),o.push(Fe),Fe};a(P(-5,2,-6.42),6.4,4.4,16757866,.55),a(P(5,2,-6.42),6.4,4.4,16757866,.55),a(P(0,3,-6.41),4.6,4.6,6273279,.6),a(P(.5,5,-6.42),20,2.6,16727538,.3),a(P(9.42,2.6,-2.4),5.6,4,12575999,.4,[0,-Math.PI/2,0]),a(P(9.42,2.2,1),3.6,3,2287359,.45,[0,-Math.PI/2,0]),a(P(0,.008,0),7.5,7.5,2287359,.3,[-Math.PI/2,0,0]),a(P(-3.6,.007,2.15),3.8,1.6,3800968,.35,[-Math.PI/2,0,0]),a(P(3.6,.007,2.15),3.8,1.6,2287359,.35,[-Math.PI/2,0,0]),a(P(0,.006,-4.8),5,3.2,8239359,.3,[-Math.PI/2,0,0]);let l=fs(4,128,I=>{let G=I.createLinearGradient(0,0,0,128);G.addColorStop(0,"rgba(255,255,255,0.05)"),G.addColorStop(.25,"rgba(255,255,255,0.8)"),G.addColorStop(1,"rgba(255,255,255,0)"),I.fillStyle=G,I.fillRect(0,0,4,128)},{srgb:!1}),c=new Te(new it(1.15,1.9,5.2,40,1,!0),new yt({color:bt(8239359,.06),alphaMap:l,transparent:!0,depthWrite:!1,blending:gn,side:Bt,toneMapped:!1})),h=P(0,3,-6.45),d=P(0,0,-2.6);c.position.copy(h).lerp(d,.5),c.quaternion.setFromUnitVectors(P(0,1,0),h.clone().sub(d).normalize()),c.scale.y=h.distanceTo(d)/5.2,c.userData.noDepth=!0,t.add(c);let u=new Ne({color:12106948,metalness:1,roughness:.3});[[7.75,2919002,"O\u2082"],[8.08,3104666,"N\u2082"],[8.41,7040888,"CO\u2082"]].forEach(([I,G,X],Q)=>{n(new it(.13,.13,1.25,28),s(G),P(I,.66,-6.12)),n(new lt(.13,28,14,0,Ic,0,Math.PI/2),s(G),P(I,1.285,-6.12)),n(new it(.05,.06,.12,16),u,P(I,1.43,-6.12)),n(new kt(.05,.012,8,20),u,P(I,1.5,-6.12),[Math.PI/2,0,0]),n(new it(.135,.135,.05,28),new Ne({color:15921386,roughness:.5}),P(I,1,-6.12));let pe=n(new Ut(.16,.16),new Ne({map:zd(X,"#f2c230"),roughness:.6,transparent:!0}),P(I,.72,-6.12+.132));pe.userData.noCast=!0,n(new it(.135,.12,.04,28),e.dark,P(I,.02,-6.12))});for(let I=0;I<26;I++)n(new kt(.018,.005,6,12),e.chrome,P(7.6+I*.038,1.12-Math.sin(I/25*Math.PI)*.03,-5.98),[0,I%2?Math.PI/2:0,0]);let f=new Ze;f.position.set(-8.2,0,-6.28),t.add(f),n(ra(.62,2,.34,.03),s(3818840,.45),P(0,1,0),null,f),n(ra(.56,1.1,.02,.01),s(2963014,.5),P(0,1.3,.175),null,f),n(new Sn(.012,.1,4,8),e.chrome,P(.22,1.1,.2),null,f);let p=n(new Ut(.16,.16),new Ne({map:zd("\u26A1","#f2c230"),transparent:!0,roughness:.6}),P(0,.55,.172),null,f);p.userData.noCast=!0;let x=24,m=new vn(new pt(.035,.022,.01),new yt({toneMapped:!1}),x),g=new Ht;for(let I=0;I<x;I++)g.position.set(-.2+I%6*.08,1.75-Math.floor(I/6)*.06,.18),g.updateMatrix(),m.setMatrixAt(I,g.matrix),m.setColorAt(I,bt([3800968,16756768,2287359,16722493][I%4],2));f.add(m),r.push(I=>{for(let G=0;G<x;G++){let X=Math.sin(I*(2+$(G,7)*6)+$(G,8)*9)>-.2;m.setColorAt(G,bt([3800968,16756768,2287359,16722493][G%4],X?2.2:.15))}m.instanceColor.needsUpdate=!0}),n(new pt(.18,4,.12),s(2963014,.5),P(-8.2,4,-6.38));let y=new Ze;y.position.set(9.4,2.55,.85),y.rotation.y=-Math.PI/2,t.add(y),n(ra(1.75,1.05,.08,.03),e.dark,null,null,y);let M=n(new Ut(1.62,.94),new yt({map:Vv(),toneMapped:!1,color:new Re(1.15,1.15,1.15)}),P(0,0,.042),null,y);M.userData.noCast=!0,n(new pt(.06,.5,.06),e.metalLight,P(0,.75,-.05),null,y);let _=(I,G,X,Q=0)=>{let re=new Wt(I,!1,"catmullrom",.05);n(new Qn(re,Math.max(24,I.length*12),G,12),X);for(let pe=1;pe<=Q;pe++){let Fe=pe/(Q+1);n(new kt(G*1.25,G*.35,8,20),e.brass,re.getPointAt(Fe)).quaternion.setFromUnitVectors(P(0,0,1),re.getTangentAt(Fe))}return re};_([P(9.3,.62,-6.4),P(9.3,.62,-1),P(9.3,.62,4.5),P(9.3,.62,7.4)],.07,e.copper,5),_([P(9.3,4.35,-6.4),P(9.3,4.35,.5),P(9.3,4.35,7.4)],.055,e.metalLight,4),_([P(9.3,.62,3.8),P(9.3,1.6,3.8),P(9.3,2.6,3.8),P(9.3,4.35,3.8)],.045,e.copper,2);for(let I of[-1,1])_([P(I*2.25,0,-6.32),P(I*2.25,2,-6.32),P(I*2.25,4,-6.32),P(I*2.25,6,-6.32)],.075,I<0?e.copper:e.metalLight,4),_([P(I*2.06,0,-6.36),P(I*2.06,3,-6.36),P(I*2.06,6,-6.36)],.035,e.brass,2);let b=new Ne({map:qv(),roughness:.4}),S=(I,G)=>{let X=new Ze;X.position.copy(I),X.lookAt(I.clone().add(G)),t.add(X),n(new it(.02,.02,.14,10),e.chrome,P(0,0,.07),[Math.PI/2,0,0],X),n(new kt(.1,.015,8,28),s(13120058),P(0,0,.15),null,X);for(let Q=0;Q<3;Q++)n(new pt(.2,.014,.014),s(13120058),P(0,0,.15),[0,0,Q/3*Math.PI],X)},R=(I,G)=>{let X=new Ze;X.position.copy(I),X.lookAt(I.clone().add(G)),t.add(X),n(new it(.09,.09,.04,28),e.brass,P(0,0,.02),[Math.PI/2,0,0],X),n(new on(.078,28),b,P(0,0,.041),null,X);let Q=n(new pt(.006,.07,.004),e.dark,P(0,0,.045),null,X);Q.geometry.translate(0,.03,0),Q.userData.keep=!0,r.push(re=>{Q.rotation.z=-.6+Math.sin(re*1.3+I.x)*.25+($(Math.floor(re*7),I.x)-.5)*.06})};S(P(9.3,.62,-3),P(-1,0,0)),S(P(9.3,.62,5.6),P(-1,0,0)),S(P(-2.25,1.15,-6.32),P(0,0,1)),R(P(2.25,1.55,-6.25),P(0,0,1)),R(P(-2.25,2.4,-6.25),P(0,0,1)),R(P(9.25,1.15,3.8),P(-1,0,0));let v=[1382172,1382172,12071482,15251482,2051466].map(I=>new Ne({color:I,roughness:.6}));for(let I=0;I<12;I++){let G=-7.5+$(I,1)*15,X=G+($(I,2)-.5)*4,Q=[-5.2,-2.6,0,2.6][I%4],re=[-2.6,0,2.6,-5.2][I%4];if(Math.abs(re-Q)>3)continue;let pe=.35+$(I,3)*.6,Fe=[];for(let ze=0;ze<=10;ze++){let We=ze/10;Fe.push(P(G+(X-G)*We,5.83-Math.sin(We*Math.PI)*pe,Q+(re-Q)*We))}n(new Qn(new Wt(Fe),32,.018+$(I,4)*.01,6),v[I%v.length])}let T=new Ze;T.position.set(.5,5.25,-4.75),t.add(T),n(new pt(17.5,.02,.36),e.metalLight,null,null,T);for(let I of[-1,1])n(new pt(17.5,.1,.02),e.metalLight,P(0,.05,I*.18),null,T);for(let I=0;I<4;I++)n(new it(.03,.03,17.4,8),v[I],P(0,.04+I%2*.03,-.12+I*.08),[0,0,Math.PI/2],T);for(let I=-8;I<=8.5;I+=2.5)n(new it(.012,.012,.7,6),e.metalLight,P(I,.35,0),null,T);let A=new Ne({map:Xv(),roughness:.6,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});for(let I of[-3.6,3.6]){let G=n(new Ut(3,.12),A,P(I,.004,2.2),[-Math.PI/2,0,0]);G.userData.noCast=!0}let C=fs(128,128,I=>{I.fillStyle="rgba(232,184,26,0.85)",I.beginPath(),I.moveTo(64,8),I.lineTo(120,70),I.lineTo(84,70),I.lineTo(84,120),I.lineTo(44,120),I.lineTo(44,70),I.lineTo(8,70),I.closePath(),I.fill()}),D=new Ne({map:C,transparent:!0,roughness:.6,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});for(let[I,G,X]of[[0,3.4,0],[-1.2,4.6,.25],[1.2,4.6,-.25]]){let Q=n(new Ut(.5,.5),D,P(I,.004,G),[-Math.PI/2,0,X]);Q.userData.noCast=!0,Q.userData.noDepth=!0}for(let I=0;I<7;I++){let G=n(new Ut(.21,.297),new Ne({map:Wv(I),roughness:.85}),P([-2.4,-1.9,-4.7,1.9,2.6,4.9,-.9][I],.005+I*6e-4,[2.6,3.3,2.9,2.5,3.6,2.8,4.2][I]),[-Math.PI/2,0,$(I,9)*Ic]);G.userData.noCast=!0}let B=.86,N=new Ze;N.position.set(4.72,B,1.08),t.add(N),n(new fi([[0,0],[.042,0],[.045,.1],[.041,.1],[.038,.006],[0,.006]].map(([I,G])=>new ge(I,G)),24),s(15909424),null,null,N),n(new kt(.028,.008,8,16,Math.PI),s(15909424),P(.045,.05,0),[0,0,-Math.PI/2],N),n(new on(.039,20),new Ne({color:2758156,roughness:.2}),P(0,.085,0),[-Math.PI/2,0,0],N);for(let I=0;I<6;I++)n(ra(.21,.006,.297,.002,1),new Ne({color:15855590,roughness:.9}),P(2.62+$(I,2)*.02,B+.003+I*.006,1.05),[0,($(I,3)-.5)*.2,0]);[16769126,16748472,9433343].forEach((I,G)=>n(new Ut(.075,.075),new Ne({color:I,roughness:.8}),P(3+G*.09,B+.003,1.42+$(G,5)*.05),[-Math.PI/2,0,($(G,6)-.5)*.5]));let W=new yt({color:bt(15660287,2.4),toneMapped:!1}),k=new Ne({color:14277848,roughness:.5,metalness:.3}),j=[];for(let[I,G]of[[-4.2,-3.6],[.2,-3.6],[4.6,-3.6],[-4.2,1.4],[.2,1.4],[4.6,1.4]]){let X=new Ze;X.position.set(I,5.55,G),t.add(X),n(ra(1.5,.08,.36,.02),k,null,null,X);for(let Q of[-.09,.09]){let re=n(new it(.018,.018,1.36,12),W,P(0,-.055,Q),[0,0,Math.PI/2],X);re.userData.noCast=!0}for(let Q=-3;Q<=3;Q++)n(new pt(.01,.02,.34),k,P(Q*.2,-.07,0),null,X);for(let Q of[-.6,.6])n(new it(.006,.006,.35,6),e.metalLight,P(Q,.2,0),null,X);j.push(X)}for(let I of j)a(P(I.position.x,5.92,I.position.z),2.6,1.4,15660287,.25,[Math.PI/2,0,0]);return t.traverse(I=>{!I.isMesh||I.material.transparent||I.material.isMeshBasicMaterial||(I.receiveShadow=!0,I.userData.noCast||(I.castShadow=!0))}),hs(t,{skip:I=>I===m||I.userData.keep||o.includes(I)||I===c}),{update(I){for(let G of r)G(I)}}}var oa={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ge},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new rt},cameraProjectionMatrixInverse:{value:new rt},cameraWorldMatrix:{value:new rt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new U(-1,-1,-1)},sceneBoxMax:{value:new U(1,1,1)}},vertexShader:`

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
		}`},aa={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Lc={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function kd(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=Yv(e),n=t.length,s=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=t[o],l=2*Math.PI*a/n,c=new U(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new Ei(s,e,e);return r.wrapS=sn,r.wrapT=sn,r.needsUpdate=!0,r}function Yv(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=o++;r++,s--}return n}var la={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:gu(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ge},cameraProjectionMatrixInverse:{value:new rt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function gu(i,e,t){let n=Zv(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let o=n[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<i-1?",":")"}`}return s}function Zv(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,o=Math.pow(s/(i-1),t);n.push(new U(Math.cos(r),Math.sin(r),o))}return n}var Dc=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),h=(3-Math.sqrt(3))/6,d=(l+c)*h,u=l-d,f=c-d,p=e-u,x=t-f,m,g;p>x?(m=1,g=0):(m=0,g=1);let y=p-m+h,M=x-g+h,_=p-1+2*h,b=x-1+2*h,S=l&255,R=c&255,v=this.perm[S+this.perm[R]]%12,T=this.perm[S+m+this.perm[R+g]]%12,A=this.perm[S+1+this.perm[R+1]]%12,C=.5-p*p-x*x;C<0?n=0:(C*=C,n=C*C*this._dot(this.grad3[v],p,x));let D=.5-y*y-M*M;D<0?s=0:(D*=D,s=D*D*this._dot(this.grad3[T],y,M));let B=.5-_*_-b*b;return B<0?r=0:(B*=B,r=B*B*this._dot(this.grad3[A],_,b)),70*(n+s+r)}noise3d(e,t,n){let s,r,o,a,c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),d=Math.floor(t+c),u=Math.floor(n+c),f=1/6,p=(h+d+u)*f,x=h-p,m=d-p,g=u-p,y=e-x,M=t-m,_=n-g,b,S,R,v,T,A;y>=M?M>=_?(b=1,S=0,R=0,v=1,T=1,A=0):y>=_?(b=1,S=0,R=0,v=1,T=0,A=1):(b=0,S=0,R=1,v=1,T=0,A=1):M<_?(b=0,S=0,R=1,v=0,T=1,A=1):y<_?(b=0,S=1,R=0,v=0,T=1,A=1):(b=0,S=1,R=0,v=1,T=1,A=0);let C=y-b+f,D=M-S+f,B=_-R+f,N=y-v+2*f,W=M-T+2*f,k=_-A+2*f,j=y-1+3*f,I=M-1+3*f,G=_-1+3*f,X=h&255,Q=d&255,re=u&255,pe=this.perm[X+this.perm[Q+this.perm[re]]]%12,Fe=this.perm[X+b+this.perm[Q+S+this.perm[re+R]]]%12,ze=this.perm[X+v+this.perm[Q+T+this.perm[re+A]]]%12,We=this.perm[X+1+this.perm[Q+1+this.perm[re+1]]]%12,oe=.6-y*y-M*M-_*_;oe<0?s=0:(oe*=oe,s=oe*oe*this._dot3(this.grad3[pe],y,M,_));let le=.6-C*C-D*D-B*B;le<0?r=0:(le*=le,r=le*le*this._dot3(this.grad3[Fe],C,D,B));let be=.6-N*N-W*W-k*k;be<0?o=0:(be*=be,o=be*be*this._dot3(this.grad3[ze],N,W,k));let Ve=.6-j*j-I*I-G*G;return Ve<0?a=0:(Ve*=Ve,a=Ve*Ve*this._dot3(this.grad3[We],j,I,G)),32*(s+r+o+a)}noise4d(e,t,n,s){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,d,u,f,p,x=(e+t+n+s)*l,m=Math.floor(e+x),g=Math.floor(t+x),y=Math.floor(n+x),M=Math.floor(s+x),_=(m+g+y+M)*c,b=m-_,S=g-_,R=y-_,v=M-_,T=e-b,A=t-S,C=n-R,D=s-v,B=T>A?32:0,N=T>C?16:0,W=A>C?8:0,k=T>D?4:0,j=A>D?2:0,I=C>D?1:0,G=B+N+W+k+j+I,X=o[G][0]>=3?1:0,Q=o[G][1]>=3?1:0,re=o[G][2]>=3?1:0,pe=o[G][3]>=3?1:0,Fe=o[G][0]>=2?1:0,ze=o[G][1]>=2?1:0,We=o[G][2]>=2?1:0,oe=o[G][3]>=2?1:0,le=o[G][0]>=1?1:0,be=o[G][1]>=1?1:0,Ve=o[G][2]>=1?1:0,Ie=o[G][3]>=1?1:0,Xe=T-X+c,ht=A-Q+c,de=C-re+c,ve=D-pe+c,Se=T-Fe+2*c,Ee=A-ze+2*c,Y=C-We+2*c,ye=D-oe+2*c,Ae=T-le+3*c,De=A-be+3*c,Le=C-Ve+3*c,H=D-Ie+3*c,$e=T-1+4*c,ut=A-1+4*c,L=C-1+4*c,E=D-1+4*c,J=m&255,K=g&255,ae=y&255,Me=M&255,Pe=a[J+a[K+a[ae+a[Me]]]]%32,ue=a[J+X+a[K+Q+a[ae+re+a[Me+pe]]]]%32,me=a[J+Fe+a[K+ze+a[ae+We+a[Me+oe]]]]%32,O=a[J+le+a[K+be+a[ae+Ve+a[Me+Ie]]]]%32,q=a[J+1+a[K+1+a[ae+1+a[Me+1]]]]%32,z=.6-T*T-A*A-C*C-D*D;z<0?h=0:(z*=z,h=z*z*this._dot4(r[Pe],T,A,C,D));let ee=.6-Xe*Xe-ht*ht-de*de-ve*ve;ee<0?d=0:(ee*=ee,d=ee*ee*this._dot4(r[ue],Xe,ht,de,ve));let te=.6-Se*Se-Ee*Ee-Y*Y-ye*ye;te<0?u=0:(te*=te,u=te*te*this._dot4(r[me],Se,Ee,Y,ye));let ne=.6-Ae*Ae-De*De-Le*Le-H*H;ne<0?f=0:(ne*=ne,f=ne*ne*this._dot4(r[O],Ae,De,Le,H));let fe=.6-$e*$e-ut*ut-L*L-E*E;return fe<0?p=0:(fe*=fe,p=fe*fe*this._dot4(r[q],$e,ut,L,E)),27*(h+d+u+f+p)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}};var ca=class i extends Dn{constructor(e,t,n=512,s=512,r,o,a){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=kd(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Xt(this.width,this.height,{type:Kt,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Vt({defines:Object.assign({},oa.defines),uniforms:Ln.clone(oa.uniforms),vertexShader:oa.vertexShader,fragmentShader:oa.fragmentShader,blending:Jt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Ao,this.normalMaterial.blending=Jt,this.pdMaterial=new Vt({defines:Object.assign({},la.defines),uniforms:Ln.clone(la.uniforms),vertexShader:la.vertexShader,fragmentShader:la.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Vt({defines:Object.assign({},aa.defines),uniforms:Ln.clone(aa.uniforms),vertexShader:aa.vertexShader,fragmentShader:aa.fragmentShader,blending:Jt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Vt({uniforms:Ln.clone(Pi.uniforms),vertexShader:Pi.vertexShader,fragmentShader:Pi.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:No,blendDst:Cs,blendEquation:jn,blendSrcAlpha:Uo,blendDstAlpha:Cs,blendEquationAlpha:jn}),this.blendMaterial=new Vt({uniforms:Ln.clone(Lc.uniforms),vertexShader:Lc.vertexShader,fragmentShader:Lc.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:wl,blendSrc:No,blendDst:Cs,blendEquation:jn,blendSrcAlpha:Uo,blendDstAlpha:Cs,blendEquationAlpha:jn}),this._fsQuad=new Ii(null),this._originalClearColor=new Re,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Ti,this.depthTexture.format=Ri,this.depthTexture.type=os,this.normalRenderTarget=new Xt(this.width,this.height,{minFilter:jt,magFilter:jt,type:Kt,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=gu(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Jt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Jt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Jt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Jt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Jt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new Dc,n=e*e*4,s=new Uint8Array(n);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let l=o,c=a;s[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new Ei(s,e,e,In,En);return r.wrapS=sn,r.wrapT=sn,r.needsUpdate=!0,r}};ca.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Uc=class extends ca{constructor(...e){super(...e),this.blendMaterial=new Vt({uniforms:{tDiffuse:{value:null},tColor:{value:null},intensity:{value:1}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
        }`,blending:Jt,depthTest:!1,depthWrite:!1})}setSize(e,t){super.setSize(Math.max(1,e>>1),Math.max(1,t>>1))}render(e,t,n,s,r){this.blendMaterial.uniforms.tColor.value=n.texture,super.render(e,t,n,s,r)}_overrideVisibility(){let e=this._visibilityCache;this.scene.traverse(t=>{t.visible&&(t.isPoints||t.isLine||t.isSprite||t.userData.noDepth)&&(t.visible=!1,e.push(t))})}},Vd={name:"LabDofShader",uniforms:{tDiffuse:{value:null},tDepth:{value:null},cameraNear:{value:.05},cameraFar:{value:120},focus:{value:4},aperture:{value:.5},maxBlur:{value:10},resolution:{value:null},vignette:{value:.35},sharpen:{value:.18},debug:{value:0}},vertexShader:`
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
  `};var ct=Qt,ha=29.2,Wd="bingo.introSound",Be={cyan:2287359,green:3800968,magenta:16727538,amber:16756768,violet:10181887,pink:14697578,red:16722493,white:16777215,warm:16757866},Nc=["Synergie","ASAP","Roadmap","On boucle","Quick win","KPI","Align\xE9s","Process","Deadline"],$v=[[1.2,5.6,"Quelque part, dans un laboratoire secret\u2026"],[6,10.8,"Des savants fous distillent les mots les plus creux des r\xE9unions"],[11.4,15.8,"Synergie, roadmap, quick win : 400 serveurs analysent chaque phrase"],[16.2,20.4,"Attention : r\xE9action imminente"]];function Nr(i,e,t){let n=document.createElement("canvas");n.width=i,n.height=e,t(n.getContext("2d"),i,e);let s=new rn(n);return s.colorSpace=Ot,s.anisotropy=4,s}function vu(){return Nr(64,64,i=>{let e=i.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,255,255,0.55)"),e.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=e,i.fillRect(0,0,64,64)})}function Jv(){let i=Nr(512,128,(e,t,n)=>{e.fillStyle="#8a5530",e.fillRect(0,0,t,n);for(let s=0;s<80;s++){let r=$(s,1)*n,o=.05+$(s,2)*.14;e.strokeStyle=$(s,3)>.5?`rgba(48,20,6,${o})`:`rgba(206,140,84,${o})`,e.lineWidth=1+$(s,4)*3,e.beginPath();for(let a=0;a<=t;a+=16){let l=r+Math.sin(a*.012+s)*4+Math.sin(a*.05+s*3)*1.5;a?e.lineTo(a,l):e.moveTo(a,l)}e.stroke()}});return i.wrapS=i.wrapT=sn,i}function Kv(){return Nr(256,64,(i,e,t)=>{i.fillStyle="#f2c230",i.fillRect(0,0,e,t),i.fillStyle="#16161a";for(let n=-t;n<e+t;n+=48)i.beginPath(),i.moveTo(n,0),i.lineTo(n+24,0),i.lineTo(n+24-t,t),i.lineTo(n-t,t),i.closePath(),i.fill()})}var Zi=2.2;function Qv(i){return Nr(256,256,e=>{e.fillStyle="#f3ead8",e.beginPath(),e.arc(128,128,124,0,Math.PI*2),e.fill();let t=(n,s,r)=>{e.strokeStyle=r,e.lineWidth=18,e.beginPath(),e.arc(128,128,96,-Math.PI/2-Zi+2*Zi*n,-Math.PI/2-Zi+2*Zi*s),e.stroke()};t(0,.55,"#3bb273"),t(.55,.8,"#f2b632"),t(.8,1,"#e5383b"),e.strokeStyle="#2a2a2a",e.lineWidth=3;for(let n=0;n<=10;n++){let s=-Math.PI/2-Zi+2*Zi*n/10;e.beginPath(),e.moveTo(128+Math.cos(s)*74,128+Math.sin(s)*74),e.lineTo(128+Math.cos(s)*86,128+Math.sin(s)*86),e.stroke()}e.fillStyle="#2a2a2a",e.font='700 22px "Bricolage Grotesque", sans-serif',e.textAlign="center",e.fillText(i,128,196)})}function jv(){return{metal:new Ne({color:1845056,metalness:.55,roughness:.42}),metalLight:new Ne({color:9345710,metalness:.9,roughness:.28}),chrome:new Ne({color:14870768,metalness:1,roughness:.16}),copper:new Ne({color:13664336,metalness:1,roughness:.3}),brass:new Ne({color:14067280,metalness:1,roughness:.3}),wood:new Ne({map:Jv(),roughness:.55}),enamel:new Mt({color:2910832,roughness:.38,clearcoat:.6,clearcoatRoughness:.3}),ceramic:new Mt({color:14673902,roughness:.35,clearcoat:.5,clearcoatRoughness:.3}),floor:new Ne({color:790810,metalness:.35,roughness:.45}),glass:new Mt({color:15267583,transparent:!0,opacity:.24,roughness:.05,clearcoat:1,clearcoatRoughness:.05,depthWrite:!1,side:Bt,envMapIntensity:2.5}),dark:new Ne({color:724242,roughness:.6}),neon:(i,e=2)=>new yt({color:bt(i,e),toneMapped:!1})}}function ey(i){let e=new Es;e.add(new Te(new pt(24,12,24),new yt({color:658967,side:en})));let t=(r,o,a,l,c)=>{let h=new Te(new Ut(r,o),new yt({color:bt(l,c),side:Bt}));h.position.copy(a),h.lookAt(0,0,0),e.add(h)};t(9,3,P(0,5,7),Be.warm,2.6),t(4,4,P(6,3,6),16765600,1.6),t(6,2,P(-10,2,0),Be.cyan,2.2),t(6,2,P(10,2,-3),Be.magenta,2),t(12,1.2,P(0,5.5,-9),Be.violet,1.4);let n=new Pr(i),s=n.fromScene(e,.03).texture;return n.dispose(),s}var ds=(i,e=32)=>new fi(i.map(([t,n])=>new ge(t,n)),e),ni=(i,e,t,n=.04,s=3)=>new ls(i,e,t,s,n);function ty(i,e){let t=[];for(let[r,o,a,l,c,h,d]of[[18,.05,.05,.5,.35,-6.45,Be.cyan],[18,.05,.05,.5,5.2,-6.45,Be.magenta],[.05,.05,14,9.45,.35,.5,Be.cyan],[.05,.05,14,9.45,5.2,.5,Be.violet]]){let u=new Te(new pt(r,o,a),e.neon(d,1.3));u.position.set(l,c,h),i.add(u),t.push(u)}let n=ny("LABO DE R\xC9UNIONOLOGIE APPLIQU\xC9E",{w:1024,h:128,font:'700 64px "Bricolage Grotesque", sans-serif',color:"#7df3ff",glow:"#22e6ff"});n.scale.set(5,.62,1),n.position.set(.5,4.78,-6.4),i.add(n);let s=new Ze;i.add(s);for(let r of[-1,1]){let o=new Wt([P(r*3.2,5.6,-6.35),P(r*2.6,5.2,-5.6),P(r*1.4,4.6,-2.4),P(r*.55,3.9,-.4),P(r*.5,3.12,0)]);s.add(new Te(new Qn(o,80,.07,12),e.copper));for(let a=1;a<6;a++){let l=new Te(new kt(.085,.025,8,20),e.brass),c=a/6;l.position.copy(o.getPointAt(c)),l.quaternion.setFromUnitVectors(P(0,0,1),o.getTangentAt(c)),s.add(l)}}return r=>{let o=r>16.4&&r<ct?.5+.5*Math.sin(r*14):0;t[1].material.color.copy(bt(o?Be.red:Be.magenta,1.3+o*3)),n.visible=r<ct,s.visible=r<ct}}function ny(i,{w:e,h:t,font:n,color:s,glow:r}){let o=Nr(e,t,l=>{l.font=n;let c=Math.min(1,(e-60)/l.measureText(i).width);c<1&&(l.font=n.replace(/(\d+)px/,(h,d)=>`${Math.floor(Number(d)*c)}px`)),l.textAlign="center",l.textBaseline="middle",l.shadowColor=r,l.shadowBlur=18,l.fillStyle=s,l.fillText(i,e/2,t/2)}),a=new Te(new Ut(1,1),new yt({map:o,transparent:!0,depthWrite:!1,toneMapped:!1,color:bt(16777215,1.6)}));return a.userData.noDepth=!0,a}var xu=[{glass:[[0,0],[.12,0],[.125,.012],[.05,.2],[.04,.21],[.04,.3],[.046,.31]],liquid:[[0,.01],[.115,.01],[.08,.11],[0,.11]]},{glass:[[0,0],[.05,.005],[.09,.04],[.11,.11],[.09,.18],[.04,.215],[.035,.3],[.04,.31]],liquid:[[0,.008],[.05,.012],[.088,.045],[.105,.1],[0,.1]]},{glass:[[0,0],[.07,0],[.075,.01],[.075,.2],[.05,.25],[.03,.27],[.03,.32],[.034,.33]],liquid:[[0,.01],[.068,.01],[.068,.16],[0,.16]]},{glass:[[0,0],[.08,0],[.085,.008],[.085,.2],[.092,.21]],liquid:[[0,.008],[.078,.008],[.078,.12],[0,.12]]}];function iy(i,e){let t=new Ze;i.add(t);let n=[.95,1.7,2.45,3.2],s=[[-7.4,-2.6],[2.6,7.4]],r=-6.2,o=xu.map(()=>[]),a=[Be.green,Be.magenta,Be.cyan,Be.amber,Be.violet,16738877,11992893],l=0;for(let[h,d]of s){let u=d-h,f=(h+d)/2;for(let p of n){let x=new Te(ni(u,.06,.42,.02,2),e.wood);x.position.set(f,p,r),t.add(x);let m=new Te(new pt(u-.1,.012,.02),e.neon(Be.warm,1.3));m.position.set(f,p-.04,r+.2),t.add(m);for(let g=h+.25;g<d-.2;g+=.3+$(l,1)*.22){l+=1;let y=Math.floor($(l,2)*xu.length),M=.8+$(l,3)*.55;o[y].push({x:g,y:p+.03,z:r+($(l,4)-.5)*.18,sc:M,col:a[Math.floor($(l,5)*a.length)],k:l})}}for(let p of[h+.05,d-.05]){let x=new Te(new it(.03,.03,3,10),e.brass);x.position.set(p,1.95,r+.18),t.add(x)}}let c=new Ht;xu.forEach((h,d)=>{let u=o[d];if(!u.length)return;let f=new vn(ds(h.glass,20),e.glass,u.length),p=new vn(ds(h.liquid,20),new yt({toneMapped:!1}),u.length);u.forEach((x,m)=>{c.position.set(x.x,x.y,x.z),c.scale.setScalar(x.sc),c.rotation.set(0,$(x.k,6)*6,0),c.updateMatrix(),f.setMatrixAt(m,c.matrix),p.setMatrixAt(m,c.matrix),p.setColorAt(m,bt(x.col,1.1+$(x.k,7)*1.1))}),t.add(f,p)}),hs(t)}function _u(i,e,t,n,s){let r=new Ze;r.position.copy(t),i.add(r);let o=new Te(new it(.01,.01,6.5-t.y,6),e.dark);o.position.y=(6.5-t.y)/2+.2,r.add(o);let a=new Te(ds([[.03,.25],[.07,.24],[.12,.17],[.22,.04],[.27,0],[.265,-.01]],32),new Ne({color:2316367,metalness:.6,roughness:.35,side:Bt}));r.add(a);let l=new Te(new kt(.265,.012,8,40),e.brass);l.rotation.x=Math.PI/2,r.add(l);let c=new Te(new lt(.07,16,12),new yt({color:bt(16767392,4),toneMapped:!1}));c.position.y=.06,c.userData.noCast=!0,r.add(c);let h=new Xi(Be.warm,s,9,.72,.85,2);return h.position.copy(t),h.target.position.copy(n),h.castShadow=!0,h.shadow.mapSize.set(1024,1024),h.shadow.bias=-3e-4,h.shadow.normalBias=.025,h.shadow.radius=5,h.shadow.camera.near=.3,h.shadow.camera.far=7,i.add(h,h.target),h}function sy(i,e){let n=new vn(ni(1.25,2.7,1,.06,2),e.metal,28),s=new vn(new pt(.035,2.5,.035),e.neon(Be.cyan,1.15),56),r=new Ht,o=[],a=0,l=0;for(let x of[-1,1])for(let m=0;m<14;m++){let g=-8.6-m*1.32,y=x*2.6;r.position.set(g,1.35,y),r.rotation.set(0,0,0),r.updateMatrix(),n.setMatrixAt(a++,r.matrix);for(let M of[-.58,.58])r.position.set(g+M,1.35,y-x*.51),r.updateMatrix(),s.setMatrixAt(l++,r.matrix);for(let M=0;M<14;M++)for(let _=0;_<4;_++)o.push({x:g-.42+_*.28,y:.3+M*.17,z:y-x*.506,i:m,s:x})}i.add(n,s);let c=new vn(new Ut(.12,.036),new yt({toneMapped:!1,side:Bt}),o.length),h=new Re(198670);o.forEach((x,m)=>{r.position.set(x.x,x.y,x.z),r.rotation.set(0,x.s>0?Math.PI:0,0),r.updateMatrix(),c.setMatrixAt(m,r.matrix),c.setColorAt(m,h)}),i.add(c);let d=[Be.cyan,Be.green,Be.cyan,Be.green,Be.amber,Be.magenta].map(x=>new Re(x)),u=new Re,f=[-1.7,1.7].map(x=>new Wt([P(-29,3.15,x),P(-16,3.15,x),P(-8,3.2,x*.8),P(-3,3.6,x*.4),P(0,3.2,0)]));for(let x of f){let m=new Te(new Qn(x,160,.05,8),e.metalLight);m.userData.cable=!0,i.add(m)}let p=new vn(new lt(.075,14,10),new yt({toneMapped:!1}),36);p.userData.noCast=!0;for(let x=0;x<36;x++)p.setColorAt(x,bt(x%3===0?Be.magenta:Be.cyan,3));return i.add(p),x=>{let m=x>16.4&&x<ct?1+2*Math.abs(Math.sin(x*12)):1;for(let y=0;y<o.length;y++){let _=.2+(13-o[y].i)*.11+$(y,7)*.45;if(x<_||x>ct+.1){c.setColorAt(y,h);continue}let b=2+$(y,3)*9;if(!($(y,Math.floor(x*b*m+$(y,5)*10))>.33+.25*$(y,11))){c.setColorAt(y,h);continue}u.copy(d[Math.floor($(y,13)*d.length)]).multiplyScalar(1.35*m),c.setColorAt(y,u)}c.instanceColor.needsUpdate=!0;let g=.1*x+Math.max(0,x-14)**2*.03;for(let y=0;y<36;y++){let M=f[y%2],_=(g+(y>>1)/18)%1,b=x>1.6&&x<ct;r.position.copy(M.getPointAt(_)),r.position.y-=.13,r.rotation.set(0,0,0),r.scale.setScalar(b?1:1e-4),r.updateMatrix(),p.setMatrixAt(y,r.matrix)}p.instanceMatrix.needsUpdate=!0}}var Fc=P(-3.6,0,1.4),qd=-.13;function ry(i,e){let t=new Ze;t.position.set(Fc.x,qd,Fc.z),i.add(t);let n=new Te(ni(2.95,.08,1,.025,2),e.wood);n.position.y=.95,t.add(n);let s=new Te(ni(2.8,.78,.86,.05),e.enamel);s.position.y=.52,t.add(s);for(let k of[-.93,0,.93]){let j=new Te(ni(.86,.62,.03,.012,2),e.enamel);j.position.set(k,.5,.43),t.add(j);let I=new Te(new Sn(.016,.16,4,8),e.brass);I.rotation.z=Math.PI/2,I.position.set(k,.72,.47),t.add(I)}let r=new Te(new pt(2.8,.025,.025),e.neon(Be.green,2.2));r.position.set(0,.9,.47),t.add(r);let o=new Set([n,s,r,...t.children]),a=[],l=(k,j,I,G,X=.99,Q=0)=>{let re=new Te(k,e.glass);re.position.set(G,X,Q),t.add(re);let pe=new Te(j,new yt({color:bt(I,1.5),toneMapped:!1}));return pe.position.set(G,X,Q),t.add(pe),a.push({glass:re,liquid:pe,color:I,x:G,y:X,z:Q}),a[a.length-1]},c=ds([[0,0],[.17,0],[.18,.02],[.065,.27],[.055,.28],[.055,.4],[.062,.41]]),h=ds([[0,.012],[.165,.012],[.11,.14],[0,.14]]);l(c,h,Be.green,-1.1,.99,.1);let d=new Te(new kt(.16,.012,6,24),e.brass);d.rotation.x=Math.PI/2,d.position.set(-.45,1.2,0),t.add(d);for(let k=0;k<3;k++){let j=k/3*Math.PI*2,I=new Te(new it(.008,.008,.22,6),e.brass);I.position.set(-.45+Math.cos(j)*.16,1.09,Math.sin(j)*.16),t.add(I)}let u=new Te(new it(.05,.07,.12,12),e.brass);u.position.set(-.45,1.05,0),t.add(u);let f=new Te(new Wi(.045,.14,12),new yt({color:bt(3902719,3),toneMapped:!1,transparent:!0,opacity:.85}));f.position.set(-.45,1.17,0),t.add(f);let p=new lt(.17,24,18),x=new lt(.155,24,16,0,Math.PI*2,Math.PI*.42,Math.PI*.58),m=l(p,x,Be.magenta,-.45,1.38),g=new Te(new it(.045,.045,.22,16,1,!0),e.glass);g.position.set(-.45,1.62,0),t.add(g);let y=[];for(let k=0;k<=120;k++){let j=k*.32;y.push(P(-.8+Math.cos(j)*.07,1+k*.0035,-.3+Math.sin(j)*.07))}t.add(new Te(new Qn(new Wt(y),240,.012,6),e.copper));let M=new Te(ni(.5,.06,.14,.015,2),e.wood);M.position.set(.15,1.13,.12),t.add(M),[Be.cyan,Be.amber,Be.violet,Be.green].forEach((k,j)=>{let I=new it(.032,.032,.34,14,1,!0),G=new it(.027,.027,.16+.04*j,14);l(I,G,k,-.03+j*.12,1.15,.12),a[a.length-1].liquid.position.y=1.07+(.08+.02*j)});let _=l(c,h,Be.violet,.7,.99,-.22),b=new it(.075,.075,.55,18,1,!0),S=new it(.068,.068,.38,18);l(b,S,Be.amber,1.22,1.265,.05),a[a.length-1].liquid.position.y=1.19,[[12071482,.07,.1],[3108762,.06,-.08],[3836490,.065,.2]].forEach(([k,j,I],G)=>{let X=new Te(ni(.3,j,.22,.012,2),new Ne({color:k,roughness:.7}));X.position.set(-1.3,.99+j/2+G*.068,-.25),X.rotation.y=I,t.add(X)});let R=[{x:-1.1,y:1,z:.1,h:.42,r:.09},{x:-.45,y:1.26,z:0,h:.55,r:.07},{x:.7,y:1,z:-.22,h:.42,r:.09},{x:1.22,y:1.05,z:.05,h:.5,r:.04},{x:-.03,y:1,z:.12,h:.3,r:.015},{x:.33,y:1,z:.12,h:.3,r:.015}],v=72,T=new vn(new lt(1,8,6),new yt({toneMapped:!1,transparent:!0,opacity:.85}),v);for(let k=0;k<v;k++)T.setColorAt(k,bt([Be.green,Be.magenta,Be.violet,Be.amber,Be.cyan,Be.violet][k%6],2.2));t.add(T);let A=60,C=new wt;C.setAttribute("position",new At(new Float32Array(A*3),3)),C.setAttribute("color",new At(new Float32Array(A*3),3));let D=new Vi(C,new bi({size:.22,map:vu(),vertexColors:!0,transparent:!0,depthWrite:!1,blending:gn,toneMapped:!1}));t.add(D);let B=new Ht,N=new Re(Be.violet),W=new Re(Be.green);return{target:_,update(k){let j=1+2.5*Et(dt(k,9.6,10.4))*(1-dt(k,11,13))+(k>16.4&&k<ct?1.5:0);for(let re=0;re<v;re++){let pe=R[re%R.length],Fe=.35+$(re,1)*.5,ze=(k*Fe*j*.6+$(re,2))%1,We=.012+$(re,3)*.022;B.position.set(pe.x+Math.sin(k*3+re)*pe.r*.5*(1-ze),pe.y+ze*pe.h,pe.z+Math.cos(k*2.3+re)*pe.r*.5*(1-ze)),B.scale.setScalar(k>ct?1e-4:We*(1-ze*.5)),B.updateMatrix(),T.setMatrixAt(re,B.matrix)}T.instanceMatrix.needsUpdate=!0;let I=C.attributes.position.array,G=C.attributes.color.array;for(let re=0;re<A;re++){let pe=re%2?{x:-.45,y:1.72,z:0}:{x:.7,y:1.4,z:-.22},Fe=(k*.25+$(re,4))%1;I[re*3]=pe.x+Math.sin(re+k)*.12*Fe,I[re*3+1]=pe.y+Fe*1.1,I[re*3+2]=pe.z+Math.cos(re*1.3+k)*.1*Fe;let ze=Math.sin(Fe*Math.PI)*.35*(k>ct?0:1),We=re%2?[.9,.3,.9]:[.5,.4,1];G[re*3]=We[0]*ze,G[re*3+1]=We[1]*ze,G[re*3+2]=We[2]*ze}C.attributes.position.needsUpdate=!0,C.attributes.color.needsUpdate=!0,f.scale.set(1,.8+.4*Math.abs(Math.sin(k*17)),1);let X=Et(dt(k,8.4,10.2));_.liquid.material.color.copy(N).lerp(W,X).multiplyScalar(1.5+X*1.5*Math.abs(Math.sin(k*8))),m.liquid.rotation.y=k;let Q=k>ct;t.children.forEach(re=>{o.has(re)||(re.visible=!Q||re===T)})}}}var Ui=P(3.6,0,1.4);function oy(i=512,e=288){let t=document.createElement("canvas");t.width=i,t.height=e;let n=new rn(t);return n.colorSpace=Ot,{c:t,x:t.getContext("2d"),tex:n}}function ay(i,e,t){let{c:n,x:s}=i,r=n.width,o=n.height;if(s.clearRect(0,0,r,o),s.strokeStyle="rgba(34,230,255,0.9)",s.lineWidth=3,s.strokeRect(6,6,r-12,o-12),s.font='700 26px "Bricolage Grotesque", sans-serif',s.fillStyle="#7df3ff",t===0){s.fillText("ANALYSE S\xC9MANTIQUE",24,44);let a=Nc[Math.floor(e*1.6)%Nc.length];s.font='800 64px "Bricolage Grotesque", sans-serif',s.fillStyle="#ff7df7",s.shadowColor="#ff3df2",s.fillText(a,24,140),s.font='700 24px "Bricolage Grotesque", sans-serif',s.fillStyle="#7df3ff",s.shadowColor="#22e6ff";let l=Math.min(99,Math.floor(60+e*13.7%40));s.fillText(`Creux : ${l} %`,24,190),s.fillRect(24,214,(r-48)*(l/100),18),s.strokeRect(24,214,r-48,18)}else if(t===1){s.fillText("FLUX DE BLABLA",24,44),s.beginPath();for(let a=0;a<=60;a++){let l=24+a/60*(r-48),c=170+Math.sin(a*.4+e*5)*40*Math.sin(a*.11+e)+Math.sin(a*1.7+e*9)*8;a?s.lineTo(l,c):s.moveTo(l,c)}s.stroke()}else{s.font='600 20px "Bricolage Grotesque", monospace';for(let a=0;a<9;a++){let l="";for(let c=0;c<18;c++)l+="0123456789ABCDEF"[Math.floor($(a*31+c,Math.floor(e*8)+a)*16)];s.fillText(l,24,44+a*26)}}i.tex.needsUpdate=!0}function ly(i){let e=Nr(512,128,n=>{n.font='800 70px "Bricolage Grotesque", sans-serif',n.textAlign="center",n.textBaseline="middle",n.shadowColor="#ff3df2",n.shadowBlur=22,n.fillStyle="#ffd6fb",n.fillText(i,256,64)}),t=new uo(new dr({map:e,transparent:!0,depthWrite:!1,blending:gn,toneMapped:!1,color:bt(16777215,1.4)}));return t.scale.set(1.2,.3,1),t}function cy(i,e){let t=new Ze;t.position.set(Ui.x,qd,Ui.z),i.add(t);let n=new Te(ni(2.55,.08,.95,.03,2),e.ceramic);n.position.y=.95,t.add(n);let s=new Te(ni(2.4,.78,.82,.06),e.metal);s.position.y=.52,t.add(s);let r=new Te(new pt(2.4,.025,.025),e.neon(Be.cyan,2.2));r.position.set(0,.9,.42),t.add(r);let o=new Te(ni(.9,.04,.3,.015,2),e.metal);o.position.set(0,1.01,.15),o.rotation.x=.2,t.add(o);let a=new vn(ni(.058,.014,.05,.006,1),new yt({toneMapped:!1}),36),l=new Ht;for(let _=0;_<36;_++)l.position.set(-.38+_%12*.069,1.04+Math.floor(_/12)*.012,.06+Math.floor(_/12)*.075),l.rotation.x=.2,l.updateMatrix(),a.setMatrixAt(_,l.matrix),a.setColorAt(_,bt(Be.cyan,.6));t.add(a);let c=new Te(new it(.07,.08,.04,20),e.brass);c.position.set(.85,1.01,.1),t.add(c);let h=new Te(new lt(.055,20,12,0,Math.PI*2,0,Math.PI/2),new Mt({color:14689326,roughness:.25,clearcoat:1}));h.position.set(.85,1.03,.1),t.add(h);let d=new Te(new kt(.5,.03,8,40),e.neon(Be.cyan,2));d.rotation.x=Math.PI/2,d.position.set(0,.16,-1.45),t.add(d);let u=new Te(new it(1.25,.5,2,32,1,!0),new yt({color:bt(Be.cyan,.5),transparent:!0,opacity:.1,blending:gn,depthWrite:!1,side:Bt,toneMapped:!1}));u.position.set(0,1.16,-1.45),u.userData.noDepth=!0,t.add(u);let f=[0,1,2].map(_=>{let b=oy(),S=new Te(new Ut(1.25,.7),new yt({map:b.tex,transparent:!0,depthWrite:!1,blending:gn,side:Bt,toneMapped:!1,color:bt(16777215,1.5)})),R=(_-1)*.5;return S.position.set(Math.sin(R)*2.1,2.13,-1.45+(1-Math.cos(R))*1.6),S.rotation.y=-R,t.add(S),{h:b,m:S,kind:_}}),p=Nc.map(_=>{let b=ly(_);return i.add(b),b}),x=-1,m=P(0,2.7,0),g=[bt(Be.cyan,.6),bt(Be.cyan,1.4),bt(Be.magenta,1.4)],y=new U,M=new U;return _=>{let b=Et(dt(_,10.6,11.6))*(_>ct?0:1),S=Math.floor(_*10);b>.001&&S!==x&&(x=S,f.forEach(v=>ay(v.h,_,v.kind))),f.forEach((v,T)=>{v.m.material.opacity=b*(.85+.15*Math.sin(_*30+T*2))*($(Math.floor(_*20),T)>.04?1:.3),v.m.position.y=(v.kind===1?2.25:2.13)+Math.sin(_*1.5+T)*.03}),u.material.opacity=.1*b;for(let v=0;v<36;v++)a.setColorAt(v,g[_>11?$(v,Math.floor(_*12))>.75&&_<16.2?2:1:0]);a.instanceColor.needsUpdate=!0,p.forEach((v,T)=>{let A=11.2+T*.28,C=_*.9+T/Nc.length*Math.PI*2;y.set(Ui.x+Math.cos(C)*1.4,2.15+Math.sin(_*1.3+T)*.28+T%3*.14,Ui.z-.35+Math.sin(C)*.8);let D=pu(dt(_,16+T*.16,20.1));M.set(Math.cos(_*4+T)*.8*(1-D),0,Math.sin(_*4+T)*.8*(1-D)),v.position.copy(y).lerp(m,D).add(M);let B=1-.7*D;v.scale.set(1.2*B,.3*B,1),v.material.opacity=Et(dt(_,A,A+.5))*(1-dt(_,19.9,20.4)),v.visible=v.material.opacity>.01});let R=_>ct;f.forEach(v=>{v.m.visible=!R}),d.visible=!R,u.visible=!R}}function hy(i,e){let t=new Ze;i.add(t);let n=[];for(let x of[-1.35,1.35]){let m=new Te(new it(.34,.4,.24,24),e.copper);m.position.set(x,.12,-3.4),t.add(m);let g=new Te(new it(.12,.2,2.4,20),e.metalLight);g.position.set(x,1.2,-3.4),t.add(g);for(let _=0;_<6;_++){let b=new Te(new kt(.2-_*.012,.028,10,28),_%2?e.copper:e.neon(Be.violet,2));b.rotation.x=Math.PI/2,b.position.set(x,.45+_*.32,-3.4),t.add(b)}let y=new Te(new lt(.32,32,24),e.chrome);y.position.set(x,2.72,-3.4),t.add(y);let M=new Te(new kt(.33,.02,8,30),e.neon(Be.violet,2.5));M.rotation.x=Math.PI/2,M.position.copy(y.position),t.add(M),n.push(y.position.clone())}let s=new xr({color:bt(14268671,3),toneMapped:!1,transparent:!0}),r=26,o=[];for(let x=0;x<7;x++){let m=new wt;m.setAttribute("position",new At(new Float32Array(r*3),3));let g=new mo(m,s);g.frustumCulled=!1,t.add(g),o.push(g)}let a=P(0,3,0);function l(x,m,g,y,M){let _=x.geometry.attributes.position.array;for(let b=0;b<r;b++){let S=b/(r-1),R=Math.sin(S*Math.PI);_[b*3]=xt(m.x,g.x,S)+($(y,b*3)-.5)*M*R,_[b*3+1]=xt(m.y,g.y,S)+($(y,b*3+1)-.5)*M*R+R*.25,_[b*3+2]=xt(m.z,g.z,S)+($(y,b*3+2)-.5)*M*R}x.geometry.attributes.position.needsUpdate=!0}let c=new Te(ni(.55,1,.4,.05),e.metal);c.position.set(-2.05,.5,-2.4),t.add(c);let h=new Te(new Ut(.5,.12),new Ne({map:Kv(),roughness:.6}));h.position.set(-2.05,.18,-2.195),t.add(h);let d=new Te(new lt(.08,14,10),new yt({color:bt(Be.red,1),toneMapped:!1}));d.position.set(-2.05,1.07,-2.4),t.add(d);let u=new Ze;u.position.set(-2.05,.75,-2.18),t.add(u);let f=new Te(new it(.022,.022,.42,10),e.chrome);f.position.y=.21,u.add(f);let p=new Te(new lt(.065,18,14),new Mt({color:14689326,roughness:.25,clearcoat:1,emissive:4194304}));return p.position.y=.42,u.add(p),{leverHandle:p,update(x,m){let g=Math.floor(x*30),y=0;o.forEach((b,S)=>{let R=!1;S<3?(R=x>12.4&&x<ct&&$(g,S+40)>(x>16?.15:.45),R&&l(b,n[0],n[1],g*7+S,.55)):(R=x>17.3&&x<ct&&$(g,S+80)>.25,R&&l(b,n[S%2],a,g*11+S,.7)),b.visible=R,R&&(y+=1)}),m.intensity=y*7;let M=Et(dt(x,16,16.35));u.rotation.x=xt(-.6,.7,M);let _=x>16.4&&x<ct&&Math.sin(x*16)>0?3:.4;d.material.color.copy(bt(Be.red,_))}}}function uy(i,e){let t=new Ze;i.add(t);let n=new Te(new it(1.3,1.45,.32,64),e.copper);n.position.y=.16,t.add(n);let s=new Te(new kt(1.36,.035,8,64),e.neon(Be.cyan,2.5));s.rotation.x=Math.PI/2,s.position.y=.33,t.add(s);let r=new vn(new lt(.035,10,8),e.brass,24),o=new Ht;for(let M=0;M<24;M++){let _=M/24*Math.PI*2;o.position.set(Math.cos(_)*1.18,.33,Math.sin(_)*1.18),o.updateMatrix(),r.setMatrixAt(M,o.matrix)}t.add(r);let a=new Te(new it(1,1,2.6,64,1,!0),e.glass);a.position.y=1.62,t.add(a);let l=new Te(ds([[0,.3],[.35,.28],[.85,.16],[1.1,.05],[1.12,-.06],[1,-.08]],64),e.copper);l.position.y=2.97,t.add(l);let c=new Te(new lt(.18,20,14),new yt({color:bt(Be.white,2),toneMapped:!1}));c.position.y=3.35,t.add(c);let h=new yt({color:bt(Be.cyan,1.5),toneMapped:!1,transparent:!0,opacity:.85}),d=new Te(new it(.93,.93,1,48),h);t.add(d);let u=[0,1,2].map(M=>{let _=new Te(new kt(1.06,.03,8,64),e.neon([Be.magenta,Be.cyan,Be.amber][M],2.5));return _.rotation.x=Math.PI/2,t.add(_),_}),f=[-1,1].map(M=>{let _=new Ze;_.position.set(M*1.25,0,1.15),_.rotation.y=-M*.5,t.add(_);let b=new Te(new it(.04,.05,.75,12),e.brass);b.position.y=.375,_.add(b);let S=new Te(new it(.2,.2,.08,32),e.brass);S.rotation.x=Math.PI/2,S.position.y=.92,_.add(S);let R=new Te(new on(.175,40),new Ne({map:Qv(M<0?"BLABLA":"CREUX"),roughness:.5}));R.position.set(0,.92,.041),_.add(R);let v=new Ze;v.position.set(0,.92,.05),_.add(v);let T=new Te(new pt(.012,.15,.006),new Ne({color:13114922,roughness:.4}));T.position.y=.065,v.add(T);let A=new Te(new lt(.018,10,8),e.brass);v.add(A);let C=new Te(new lt(.19,24,12,0,Math.PI*2,0,.5),e.glass);return C.rotation.x=Math.PI/2,C.position.set(0,.92,-.12),_.add(C),{gg:_,needle:v,sx:M}}),p=220,x=new wt;x.setAttribute("position",new At(new Float32Array(p*3),3));let m=new Vi(x,new bi({size:.07,map:vu(),color:bt(16777215,2),transparent:!0,depthWrite:!1,blending:gn,toneMapped:!1}));t.add(m);let g=new Te(new kt(1,.08,10,80),new yt({color:bt(Be.white,3),toneMapped:!1,transparent:!0}));g.rotation.x=Math.PI/2,g.position.y=1.6,t.add(g);let y=new Re;return(M,_)=>{let b=.35+1*Et(dt(M,9.5,16))+.85*Et(dt(M,16,20.4));d.scale.y=b,d.position.y=.32+b/2;let S=M<16?.06:.06+(M-16)*.12;y.setHSL((M*S+.5)%1,1,.55);let R=1.2+.9*Et(dt(M,16,ct));h.color.copy(y).multiplyScalar(R),c.material.color.copy(y).multiplyScalar(1.2+R),u.forEach((C,D)=>{let B=.6+(M*(.25+D*.07)*(M>16?3:1)+D/3)%1*2.2;C.position.y=B,C.scale.setScalar(1+.05*Math.sin(M*6+D))});let v=x.attributes.position.array;for(let C=0;C<p;C++){let D=M*(1.5+$(C,1)*2)*(M>16?2.5:1)+$(C,2)*6.283,B=.2+$(C,3)*.7;v[C*3]=Math.cos(D)*B,v[C*3+1]=.35+(M*.3*(1+$(C,4))+$(C,5))%1*b,v[C*3+2]=Math.sin(D)*B}x.attributes.position.needsUpdate=!0,f.forEach((C,D)=>{let B=Di(.15+.4*Et(dt(M,9,16))+.5*Et(dt(M,16,ct-.4))+(M>16.4&&M<ct?.04*Math.sin(M*40+D):0)),N=M>=ct?Zi+(M-ct)*14:-Zi+2*Zi*B;C.needle.rotation.z=-N,C.gg.visible=M<ct+.25}),_.color.copy(y),_.intensity=4+20*Et(dt(M,15,ct));let T=M>=ct;a.visible=!T,d.visible=!T,m.visible=!T,c.visible=!T,l.visible=!T,u.forEach(C=>{C.visible=!T});let A=dt(M,ct,ct+.9);g.visible=T&&A<1,g.scale.setScalar(1+A*16),g.material.opacity=1-A,T&&(_.intensity=30*Math.exp(-(M-ct)*3))}}async function fy(i,e,t,n=0){try{await document.fonts.load('800 160px "Bricolage Grotesque"')}catch{}let s=1024,r=128*i.length+40,o=document.createElement("canvas");o.width=s,o.height=r;let a=o.getContext("2d");a.fillStyle="#fff",a.textAlign="center",a.textBaseline="middle",i.forEach((u,f)=>{let p=f===0?150:104;a.font=`800 ${p}px "Bricolage Grotesque", "Arial Black", sans-serif`;let x=a.measureText(u).width,m=Math.min(1,(s-40)/x);a.font=`800 ${Math.floor(p*m)}px "Bricolage Grotesque", "Arial Black", sans-serif`,a.fillText(u,s/2,84+f*128)});let l=a.getImageData(0,0,s,r).data,c=[],h=3;for(let u=0;u<r;u+=h)for(let f=0;f<s;f+=h)l[(u*s+f)*4+3]>140&&c.push([f,u]);let d=e/s;return c.map(([u,f])=>P((u-s/2)*d,t-(f-r/2)*d,n+($(u,f)-.5)*.1))}function dy(i,e,t,n){let s=Math.min(5200,Math.max(1500,t.length)),r=new Float32Array(s*3),o=new Float32Array(s*3),a=new wt;a.setAttribute("position",new At(r,3)),a.setAttribute("color",new At(o,3));let l=new bi({size:n,map:vu(),vertexColors:!0,transparent:!0,depthWrite:!1,depthTest:!1,blending:gn,toneMapped:!1,fog:!1}),c=new Vi(a,l);c.frustumCulled=!1,e.add(c);let h=P(0,2.2,0),d=[Be.magenta,Be.cyan,Be.amber,Be.green,Be.violet,Be.pink].map(T=>new Re(T)),u=[],f=[],p=[],x=1/0,m=-1/0;for(let T of t)x=Math.min(x,T.x),m=Math.max(m,T.x);for(let T=0;T<s;T++){let A=$(T,1)*Math.PI*2,C=Math.acos(1-2*$(T,2)),D=P(Math.sin(C)*Math.cos(A),Math.abs(Math.cos(C))*.9+.2,Math.sin(C)*Math.sin(A));u.push(D.multiplyScalar(2.5+$(T,3)*5)),f.push(t.length>s?t[Math.floor(T*t.length/s)]:t[T%t.length]),p.push(d[Math.floor($(T,4)*d.length)])}let g=new Re(Be.magenta),y=new Re(Be.cyan),M=new Re(Be.amber),_=new Re,b=new Re,S=40,R=new vn(new it(.22,.22,.05,32),new Mt({color:Be.pink,emissive:Be.pink,emissiveIntensity:.35,roughness:.3,clearcoat:1,clearcoatRoughness:.15}),S);R.castShadow=!0,i.add(R);let v=new Ht;return T=>{let A=T-ct;if(c.visible=A>=0,A>=0){let C=pu(dt(A,.9,3)),D=Math.min(A,1.8),B=1-dt(T,ha-1,ha-.2);for(let N=0;N<s;N++){let W=1-Math.exp(-2.4*D),k=h.x+u[N].x*W*1.25,j=h.y+u[N].y*W*1.25-.35*D*D,I=h.z+u[N].z*W*1.25,G=f[N],X=A>3?.025:0;r[N*3]=xt(k,G.x+Math.sin(T*3+N)*X,C),r[N*3+1]=xt(j,G.y+Math.cos(T*2.6+N*1.3)*X,C),r[N*3+2]=xt(I,G.z,C);let Q=(G.x-x)/Math.max(.001,m-x);Q<.5?b.copy(g).lerp(y,Q*2):b.copy(y).lerp(M,(Q-.5)*2);let re=A>3.2?.75+.5*$(N,Math.floor(T*12)):1;_.copy(p[N]).lerp(b,C).multiplyScalar(2.2*re*B*(A<.25?1+(.25-A)*8:1)),o[N*3]=_.r,o[N*3+1]=_.g,o[N*3+2]=_.b}a.attributes.position.needsUpdate=!0,a.attributes.color.needsUpdate=!0}for(let C=0;C<S;C++){let D=23.4+$(C,1)*2.4,B=($(C,2)-.5)*12,N=($(C,3)-.5)*5+1,W=T-D,k=9;if(W>0){let j=9-4.9*W*W;if(j>.03)k=j;else{let I=W-Math.sqrt(1.8306122448979592);k=.03+Math.abs(Math.sin(I*7))*.5*Math.exp(-I*4)}}v.position.set(B,k,N),v.rotation.set(W>0&&k>.1?W*6+C:0,C,W>0&&k>.1?W*4:0),v.scale.setScalar(W>0?1:1e-4),v.updateMatrix(),R.setMatrixAt(C,v.matrix)}R.instanceMatrix.needsUpdate=!0}}function Xd(i,e,t=0){let n=[[0,P(-27.5,1.7,0),P(-20,1.6,0)],[2.6,P(-22,1.75,.3),P(-14,1.6,0)],[5.2,P(-13.5,1.85,.4),P(-6,1.45,.8)],[7.2,P(-3.02,1.64,1.9),P(-3.18,1.5,.66)],[9.6,P(-4.8,1.85,3.7),P(-3.1,1.1,1.1)],[11.9,P(1.6,2,4.4),P(3.6,1.6,1)],[14,P(3.78,1.8,1.72),P(3.6,1.58,.62)],[15.2,P(-2.3,2.6,2.9),P(-2.2,1.5,-2)],[16.6,P(-1.35,1.7,-.75),P(-2.35,1.35,-2.3)],[17.7,P(-2.9,2.35,1.9),P(-1,1.6,-1.4)],[18.8,P(0,3.3,8.4),P(0,1.7,0)],[20.6,P(0,2.4,5.4),P(0,1.8,0)],[22.8,P(0,e+.4,t+i+1.2),P(0,e-.3,t)],[ha,P(0,e,t+i),P(0,e,t)]],s=new Wt(n.map(c=>c[1]),!1,"centripetal"),r=new Wt(n.map(c=>c[2]),!1,"centripetal"),o=n.length-1,a=new U,l=new U;return(c,h)=>{let d=0;for(;d<o-1&&h>n[d+1][0];)d++;let u=Di((h-n[d][0])/(n[d+1][0]-n[d][0])),f=.45*u+.55*Et(u),p=Math.min(1,(d+f)/o);s.getPoint(p,a),r.getPoint(p,l);let x=.012+.09*Et(dt(h,16,ct))+(h>ct?.35*Math.exp(-(h-ct)*3):0);return a.x+=Math.sin(h*37)*x*.6+Math.sin(h*23)*x*.4,a.y+=Math.sin(h*41+1)*x*.5,c.position.copy(a),c.lookAt(l),l}}function py(i){let e=i||document.createElement("div");e.className="intro",e.setAttribute("role","dialog"),e.setAttribute("aria-label","Introduction anim\xE9e du jeu"),e.replaceChildren();let t=document.createElement("canvas");t.className="intro-canvas",t.setAttribute("aria-hidden","true");let n=document.createElement("p");n.className="intro-caption";let s=document.createElement("div");s.className="intro-flash";let r=document.createElement("div");r.className="intro-bar";let o=document.createElement("button");o.type="button",o.className="intro-btn intro-sound";let a=document.createElement("button");a.type="button",a.className="intro-btn",a.textContent="Passer",r.append(o,a);let l=document.createElement("div");l.className="intro-progress";let c=document.createElement("p");return c.className="intro-loading",c.textContent="Pr\xE9paration du laboratoire\u2026",e.append(t,s,n,r,l,c),i||document.body.append(e),{o:e,canvas:t,caption:n,flash:s,sound:o,skip:a,progress:l,loading:c}}async function my({renderer:i,composer:e,scene:t,camera:n,ui:s,update:r,resize:o,ao:a,dof:l,bloom:c,allShadows:h,nextShadow:d,calibrate:u,maxQ:f,getQuality:p,setQuality:x}){let m=i.getContext(),g=new Uint8Array(4),y=()=>m.readPixels(0,0,1,1,m.RGBA,m.UNSIGNED_BYTE,g),M=i.extensions.get("WEBGL_debug_renderer_info"),_={gpu:M?m.getParameter(M.UNMASKED_RENDERER_WEBGL):m.getParameter(m.RENDERER),dpr:window.devicePixelRatio||1,viewport:`${window.innerWidth}x${window.innerHeight}`,parallelCompile:i.extensions.has("KHR_parallel_shader_compile"),visible:document.visibilityState},b=[];t.traverse(X=>{X.isLight&&X.castShadow&&b.push(X)});let S=[];t.traverse(X=>{X.isLight&&!X.isHemisphereLight&&S.push(X)});let R=[e.renderTarget1,e.renderTarget2],v=[];t.traverse(X=>{(X.isMesh||X.isPoints||X.isSprite)&&X.material&&X.material.transparent&&v.push(X)});let T=new yt({colorWrite:!1}),A=()=>{let X=v.map(re=>re.visible);for(let re of v)re.visible=!1;let Q=t.background;t.background=null,t.overrideMaterial=T,i.setClearColor(197899,1),i.render(t,n),t.overrideMaterial=null,t.background=Q,v.forEach((re,pe)=>{re.visible=X[pe]})},C=X=>{x(X.pr??f),o();for(let re of b)re.castShadow=X.shadows!==!1;for(let re of S)re.visible=!X.fewLights||re.castShadow||re.isSpotLight;a.enabled=X.ao!==!1,l.enabled=X.dof!==!1,c.enabled=X.bloom!==!1;let Q=X.msaa??4;for(let re of R)re.samples!==Q&&(re.samples=Q,re.dispose())},D=X=>{if(X.rr?d():h(),!X.direct){e.render();return}i.setRenderTarget(null);let Q=null;if(X.opaqueOnly){Q=v.map(re=>re.visible);for(let re of v)re.visible=!1}if(X.prepass){A(),i.autoClear=!1;let re=t.background;t.background=null,i.render(t,n),t.background=re,i.autoClear=!0}else i.render(t,n);Q&&v.forEach((re,pe)=>{re.visible=Q[pe]})},B=[3,8,12,15.5,19,24],N=[["3 ombres par image, r\xE9solution max",{}],["ombres \xE0 tour de r\xF4le, r\xE9solution max",{rr:!0}],["ombres \xE0 tour de r\xF4le, r\xE9solution 1",{rr:!0,pr:1}],["ombres \xE0 tour de r\xF4le, r\xE9solution 0,75",{rr:!0,pr:.75}],["ombres \xE0 tour de r\xF4le, r\xE9solution 0,6",{rr:!0,pr:.6}],["ombres \xE0 tour de r\xF4le, r\xE9solution 0,5",{rr:!0,pr:.5}],["tour de r\xF4le, r\xE9solution 1, sans occlusion",{rr:!0,pr:1,ao:!1}],["tour de r\xF4le, r\xE9solution 1, sans flou",{rr:!0,pr:1,dof:!1}],["tour de r\xF4le, r\xE9solution 1, sans halo",{rr:!0,pr:1,bloom:!1}],["tour de r\xF4le, r\xE9solution 1, sans MSAA",{rr:!0,pr:1,msaa:0}],["r\xE9solution 1, sans ombres",{pr:1,shadows:!1}],["sc\xE8ne seule, r\xE9solution 1, sans ombres",{pr:1,direct:!0,shadows:!1}],["sc\xE8ne seule, sans ombres ni lampes ponctuelles",{pr:1,direct:!0,shadows:!1,fewLights:!0}],["sc\xE8ne seule, sans ombres, objets opaques seulement",{pr:1,direct:!0,shadows:!1,opaqueOnly:!0}],["sc\xE8ne seule, sans ombres, avec pr\xE9passe de profondeur",{pr:1,direct:!0,shadows:!1,prepass:!0}],["sc\xE8ne seule, r\xE9solution 0,5, sans ombres",{pr:.5,direct:!0,shadows:!1}]],W=X=>{let Q=[...X].sort((re,pe)=>re-pe);return Q[Math.floor(Q.length/2)]},k=[],j=document.createElement("pre");j.className="intro-bench",s.loading.textContent="Mesure des performances\u2026",s.o.append(j),s.skip.addEventListener("click",()=>s.o.remove());let I=0,G=0;for(let[X,Q]of N){C(Q);let re=[],pe=[];for(let Fe of B){r(Fe),D(Q),y();let ze=4,We=0,oe=performance.now();for(let le=0;le<ze;le++){r(Fe+le*.03),i.info.reset();let be=performance.now();D(Q),We+=performance.now()-be,Q.direct&&X==="sc\xE8ne seule, r\xE9solution 1, sans ombres"&&(I=Math.max(I,i.info.render.calls),G=Math.max(G,i.info.render.triangles))}y(),re.push((performance.now()-oe)/ze),pe.push(We/ze),await new Promise(le=>{setTimeout(le,0)})}k.push({name:X,ms:Math.round(W(re)*10)/10,max:Math.round(Math.max(...re)*10)/10,cpu:Math.round(W(pe)*10)/10}),j.textContent=k.map(Fe=>`${Fe.ms.toFixed(1).padStart(6)} ms (max ${Fe.max.toFixed(1)}, envoi ${Fe.cpu.toFixed(1)})  ${Fe.name}`).join(`
`)}_.drawCalls=I,_.triangles=G,C({rr:!0}),await u(),_.calibrage=window.__introQuality,_.resolutionChoisie=p(),s.loading.textContent="",window.__introBench={info:_,rows:k},j.textContent=`${_.gpu}
${_.viewport} x${_.dpr}, appels de dessin ${I}, triangles ${G}
r\xE9solution choisie ${_.resolutionChoisie} ${JSON.stringify(_.calibrage)}

${j.textContent}`}async function RE({seekT:i=null,shell:e=null,speed:t=1,stallMs:n=3e3}={}){window.__introStartAt=performance.now();let s=py(e),r;try{r=new _c({canvas:s.canvas,antialias:!1,powerPreference:"high-performance"})}catch{s.o.remove();return}let o=!1,a=V=>{V.stopPropagation(),o=!0};s.skip.addEventListener("click",a);let l=async()=>{s.o.classList.add("leaving"),await new Promise(V=>{setTimeout(V,650)});try{r.dispose(),r.forceContextLoss()}catch{}s.o.remove()},c=r.extensions.has("KHR_parallel_shader_compile"),h=(V,nt,tt=V)=>{let He=r.getRenderTarget();r.setRenderTarget(nt);try{return c?r.compileAsync(V,m,tt):Promise.resolve(r.compile(V,m,tt))}finally{r.setRenderTarget(He)}},d=new URL("../",import.meta.url),u=performance.now(),f=Promise.all(["grandpa","wild","curly"].map(V=>Ud(new URL(Bd[V],d)))).then(V=>(window.__introCastMs=Math.round(performance.now()-u),V)).catch(V=>(console.warn("Personnages sculpt\xE9s indisponibles :",V),null));r.toneMapping=is,r.toneMappingExposure=1.12,r.outputColorSpace=Ot,r.shadowMap.enabled=!0,r.shadowMap.type=As;let p=new Es;p.background=new Re(461068),p.fog=new ao(658705,.03),p.environment=ey(r),p.environmentIntensity=.42;let x=new Es,m=new pn(50,1,.05,120),g=jv();p.add(new Po(13621478,3814188,.45));let y=new Xi(15856895,25,14,1.3,.6,1.4);y.position.set(.2,5.5,.2),y.target.position.set(.2,0,.6),p.add(y,y.target);let M=new kn(Be.cyan,5,10);M.position.set(-21,2.6,0),p.add(M);let _=new kn(Be.cyan,5,10);_.position.set(-12,2.6,0),p.add(_);let b=new kn(Be.green,4,6);b.position.set(-3.4,1.5,2),p.add(b);let S=new kn(Be.cyan,4,6);S.position.set(3.6,1.6,2),p.add(S);let R=new kn(16743128,3.2,5);R.position.set(-3.6,2.5,-.6),p.add(R);let v=new kn(8055039,3.2,5);v.position.set(3.6,2.4,-.9),p.add(v);let T=new kn(Be.cyan,6,14);T.position.set(0,1.6,0),p.add(T);let A=new kn(Be.violet,0,9);A.position.set(0,2.9,-3.1),p.add(A);let C=new Xi(Be.red,0,18,.5,.6);C.position.set(0,5.5,0),p.add(C),p.add(C.target);let D=new Xi(16762512,30,22,.55,.9,1.6);D.position.set(0,6,8.5),D.target.position.set(0,1.4,-.5),p.add(D,D.target);let B=Math.min(6,Math.max(0,Number(new URLSearchParams(location.search).get("introcold"))||0));for(let V=0;V<B;V++){let nt=new kn(16777215,0,1);nt.position.set(0,-50-V,0),p.add(nt)}let N=ty(p,g),W=Hd(p,g),k=Gd(p,g);iy(p,g);let j=sy(p,g),I=ry(p,g),G=cy(p,g),X=hy(p,g),Q=uy(p,g),re=_u(p,g,P(-3.2,3.4,1.75),P(-3.3,.8,.8),10),pe=_u(p,g,P(3.6,3.4,1.75),P(3.6,.9,.7),10),Fe=_u(p,g,P(-1.7,3.5,-1.4),P(-2.4,.6,-2.4),10),ze=[re,pe,Fe];for(let V of ze)V.shadow.autoUpdate=!1;let We=()=>{for(let V of ze)V.shadow.needsUpdate=!0},oe=0,le=()=>{ze[oe%ze.length].shadow.needsUpdate=!0,oe+=1};p.traverse(V=>{!V.isMesh||V.material.transparent||V.material.isMeshBasicMaterial||(V.receiveShadow=!0,V.userData.noCast||(V.castShadow=!0))});let be=new Xi(16769736,0,4.5,.42,.9,2);p.add(be,be.target);let Ve=new Xt(1,1),Ie=h(p,Ve).catch(()=>{}).finally(()=>Ve.dispose()),Xe=await f,ht={cast:Math.round(performance.now()-window.__introStartAt)};if(window.__introPrep=ht,o&&i===null){await l();return}let de=Xe?Fd():null,ve=Xe?Rc(Xe[0],de,{seed:3,baseOpen:.12}):Tc(bc.grandpa);ve.root.position.set(Fc.x+.35,0,Fc.z-.85),p.add(ve.root);let Se=Xe?Rc(Xe[1],de,{seed:7,baseOpen:.15}):Tc(bc.wild);Se.root.position.set(Ui.x,0,Ui.z-.85),p.add(Se.root);let Ee=Xe?Rc(Xe[2],de,{seed:11,baseOpen:.02,prop:"clipboard"}):Tc(bc.curly);Ee.root.position.set(-2.55,0,-2.25),p.add(Ee.root);let Y=Xe?[ve,Se,Ee]:[],ye=new U,Ae=new U,De=(V,nt)=>{let tt=1/0,He=1/0;for(let qe of Y){qe.head.updateWorldMatrix(!0,!1),ye.setFromMatrixPosition(qe.head.matrixWorld),ye.y+=.1;let Tt=ye.distanceTo(nt);Tt<tt?(He=tt,tt=Tt,Ae.copy(ye)):Tt<He&&(He=Tt)}let st=V.position.clone().sub(Ae).setY(0).normalize(),we=P(-st.z,0,st.x);be.position.copy(Ae).addScaledVector(st,1.1).addScaledVector(we,.55).add(P(0,.55,0)),be.target.position.copy(Ae),be.updateMatrixWorld(),be.target.updateMatrixWorld();let mt=V.position.distanceTo(Ae);be.intensity=1.3*(1-Et(dt(mt,2.5,6)))*Et(dt(He-tt,.3,1.2))},Le=new Ze;ve.arms.L.hand.add(Le);let H=new Te(ds([[0,0],[.11,0],[.12,.015],[.045,.18],[.038,.19],[.038,.27],[.044,.28]]),g.glass),$e=new Te(ds([[0,.01],[.105,.01],[.07,.09],[0,.09]]),new yt({color:bt(Be.green,2),toneMapped:!1}));Le.add(H,$e),Le.position.set(0,-.08,.06),Le.rotation.x=Math.PI;let ut=18,L=new vn(new lt(.022,8,6),new yt({color:bt(Be.green,2.5),toneMapped:!1}),ut);p.add(L);let E=16/9,J=()=>E<.9,K=3.3,ae=1.8,Me=()=>J()?{lines:["Bingo","du lundi","matin"],width:4.4}:{lines:["Bingo","du lundi matin"],width:8.2},Pe=Me(),ue=()=>{let V=Gh.degToRad(m.fov);return Math.max(5.5,Pe.width/2*1.15/(Math.tan(V/2)*E))},me=Math.min(1.5,window.devicePixelRatio||1),O=Math.min(.5,me),q=me,z=new Sc(r,new Xt(1,1,{type:Kt,samples:4}));z.addPass(new ta(p,m));let ee=new Uc(p,m,512,512,void 0,{radius:.45,distanceExponent:1.6,thickness:.9,scale:1.15,samples:8},{lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,samples:8});ee.blendIntensity=.9,z.addPass(ee);let te=new Dr(Vd);te.uniforms.tDepth.value=ee.depthTexture,te.uniforms.resolution.value=new ge(1,1),te.uniforms.cameraNear.value=m.near,te.uniforms.cameraFar.value=m.far,z.addPass(te);let ne=new ta(x,m);ne.clear=!1,z.addPass(ne);let fe=new Ur(new ge(512,512),.55,.45,.92);z.addPass(fe),z.addPass(new ia);let F=10,_e=()=>{let V=window.innerWidth,nt=window.innerHeight;E=V/nt,m.aspect=E,m.fov=E<.9?64:50,m.updateProjectionMatrix();let tt=q;r.setPixelRatio(tt),r.setSize(V,nt,!1),z.setPixelRatio(tt),z.setSize(V,nt),fe.resolution.set(V/2,nt/2),te.uniforms.resolution.value.set(V*tt,nt*tt),F=Math.min(18,.009*Math.min(V,nt*1.4)*tt)};_e(),Pe=Me();let he=await fy(Pe.lines,Pe.width,K,ae);if(o&&i===null){await l();return}let Ce=dy(p,x,he,.1*(Pe.width/8.2)),Ue=Xd(ue(),K,ae),xe=new Ht,Ke=new U,Qe=new U,Nt=I.target.glass.getWorldPosition(new U).add(P(0,.42,0)),Lt=Nt.clone().add(P(0,-.2,0)),ln=P(0,2.2,0),wn=P(Ui.x,2,Ui.z-1.6),Fr=P(Ui.x,.95,Ui.z+.15),Fs=X.leverHandle.getWorldPosition(new U),Ni=new URLSearchParams(location.search).get("introlook")==="cam";function ps(V){let nt=V>ct?Math.exp(-(V-ct)*.32):0,tt=Gs=>(V-ct)*5.5+Gs,He=Gs=>V>ct+.15?Math.abs(Math.sin(tt(Gs)))*.3*nt:0,st=Gs=>V>ct+.15?1-.1*nt*Math.max(0,Math.cos(2*tt(Gs)))**3+.05*nt*Math.sin(2*tt(Gs))**2:1,we=V>16.4&&V<ct,mt=m.position,qe={smile:1,open:.6,brow:.7,look:mt},Tt={smile:-.35,open:.85,brow:1,browAngle:-.4,look:ln},Rt=Et(dt(V,7.4,8.1))*(1-Et(dt(V,10.4,11))),xn=Math.sin(dt(V,6.95,7.3)*Math.PI),hn;V>ct?hn=qe:we?hn=Tt:V>10.6?hn={smile:1,open:.35,brow:.3,look:ln}:V>7.6?hn={smile:.3,open:.05,brow:-.3,browAngle:.35,squint:.35,look:Lt}:hn={smile:.9,open:.28+.12*xn,brow:.3,look:mt,wink:xn},ve.pose({t:V,y:He(0),squash:st(0),turn:V>16?xt(.15,.7,Et(dt(V,16,17))):.15,L:V>ct?[2.8,.5,.2,.2]:[xt(.25,1.35,Rt),.12+.3*Rt,xt(.35,.45,Rt),xt(.3,.95,Rt)],R:V>ct?[2.8,.5,.2,.2]:[.45+.08*Math.sin(V*2),.18,1.2,.5],headTurn:xt(0,.3,Rt)+(V>16&&V<ct?.35:0),headTilt:.2*Rt,lean:.06*Rt,frizz:1+nt*3,...hn,...Ni?{look:mt}:{}}),Le.rotation.z=xt(0,1.9,Et(dt(V,8.1,8.6))*(1-Et(dt(V,10,10.5)))),Le.visible=V<ct;let Pt=V>10.8&&V<16.2?1:0,Yt=Pt*.15*Math.abs(Math.sin(V*15)),Yn=Pt*.15*Math.abs(Math.sin(V*15+1.6)),Dt=Et(dt(V,16.2,17)),An;V>ct?An=qe:V>16.2?An=Tt:V>13.3&&V<14.9?An={smile:1,open:.55,brow:.8,browAngle:-.3,look:mt}:Pt?An={smile:1,open:.4,brow:.5,browAngle:.3,squint:.2,look:Math.sin(V*1.7)>0?wn:Fr}:An={smile:.6,open:.15,brow:.2,look:wn},Se.pose({t:V,y:He(1.2),squash:st(1.2),turn:xt(0,-.9,Dt),L:V>ct?[2.8,.6,.1,.1]:[xt(.85+Yt,1.6,Dt),xt(.05,.2,Dt),xt(1.1,.1,Dt),xt(.4,.1,Dt)],R:V>ct?[2.8,.6,.1,.1]:[.85+Yn,.05,1.1,.4],headTurn:xt(.12*Math.sin(V*.8),.2,Dt),headTilt:xt(.12,-.1,Dt),frizz:1+nt*3+(Pt?.6:0),...An,...Ni?{look:mt}:{}});let xi=Et(dt(V,15.4,16))*(1-Et(dt(V,16.6,17.2))),fa=Et(dt(V,16,16.35)),Br;V>ct?Br=qe:V>16.4?Br={smile:.6,open:.9,brow:1,look:ln}:V>15?Br={smile:.25,open:.08,brow:-.5,browAngle:.6,squint:.25,look:Fs}:Br={smile:.6,open:.15,brow:.1,look:ln},Ee.pose({t:V,y:He(2.1),squash:st(2.1),turn:xt(.6,.2,Et(dt(V,16.6,17.4))),L:V>17?[xt(.4,2.7,Et(dt(V,17,17.6))),.6,.3,.1]:[xt(.4,xt(1.5,.85,fa),xi),.1,xt(.5,.2,xi),xt(.3,1,xi)],R:V>17?[xt(.4,2.7,Et(dt(V,17,17.6))),.6,.3,.1]:[.4,.15,.5,.3],headTurn:-.25,headTilt:.08,frizz:1+(V>16.4?2:0),...Br,...Ni?{look:mt}:{}})}function tn(V){let tt=Et(dt(V,8.1,8.6))*(1-Et(dt(V,10,10.5)))>.75&&V<10.1;tt&&(Le.updateWorldMatrix(!0,!1),Qe.set(0,.28,0).applyMatrix4(Le.matrixWorld));for(let He=0;He<ut;He++){if(!tt)xe.scale.setScalar(1e-4),xe.position.set(0,-10,0);else{let st=(He/ut+V*2.2)%1;Ke.copy(Qe).lerp(Nt,st),Ke.y-=Math.sin(st*Math.PI)*-.12+st*st*.05,xe.position.copy(Ke),xe.scale.setScalar(1-st*.3)}xe.updateMatrix(),L.setMatrixAt(He,xe.matrix)}L.instanceMatrix.needsUpdate=!0}let ii=null;function Rn(V){N(V),j(V),I.update(V),G(V),X.update(V,A),Q(V,T);let nt=Ue(m,V);ii&&(nt=ii(m)),m.updateMatrixWorld();for(let mt of Y)mt.setLod(m.position.distanceTo(mt.root.position)>4.2?1:0);Y.length&&De(m,nt),W.update(V,m),k.update(V),ps(V),p.updateMatrixWorld(),tn(V),Ce(V);let tt=V>16.4&&V<ct;C.intensity=tt?60+40*Math.sin(V*14):0,C.target.position.set(Math.cos(V*4)*5,0,Math.sin(V*4)*5),b.intensity=V>ct?0:1+4*Et(dt(V,9.6,10.4))*(1-dt(V,10.6,12)),S.intensity=V>ct?0:1+2.5*Et(dt(V,10.6,11.6)),re.intensity=V>ct?5:10,pe.intensity=V>ct?5:10,D.intensity=V>ct?40:10,p.fog.density=xt(.04,.06,Et(dt(V,ct,ct+2))),te.uniforms.focus.value=m.position.distanceTo(nt);let He=Math.max(Et(dt(V,6,7))*(1-Et(dt(V,9.2,10.2))),Et(dt(V,13,13.8))*(1-Et(dt(V,14.6,15.2))),Et(dt(V,15.8,16.4))*(1-Et(dt(V,17,17.6))));te.uniforms.aperture.value=(V<5.2?.18:.3)+.36*He,te.uniforms.maxBlur.value=F;let st=V>=ct?Math.max(0,1-(V-ct)/.7):0;s.flash.style.opacity=String(st*.95);let we="";for(let[mt,qe,Tt]of $v)if(V>=mt&&V<qe){let Rt=Math.floor((V-mt)*40);we=Tt.slice(0,Rt),s.caption.style.opacity=String(1-dt(V,qe-.4,qe))}s.caption.textContent!==we&&(s.caption.textContent=we),s.progress.style.transform=`scaleX(${Di(V/ha)})`}async function Un(){let V=[Ie];V.push(h(p,z.readBuffer),h(x,z.readBuffer));let nt=He=>{let st=[];return p.traverse(we=>{if(we.isMesh&&we.material&&!Array.isArray(we.material)){let mt=He(we);mt&&(st.push([we,we.material]),we.material=mt)}}),()=>{for(let[we,mt]of st)we.material=mt}};if(ee.normalRenderTarget){let He=nt(st=>st.userData.noDepth?null:ee.normalMaterial);try{V.push(h(p,ee.normalRenderTarget,p))}finally{He()}}{let He={[di]:en,[en]:di,[Bt]:Bt},st=nt(mt=>{if(!mt.castShadow)return null;let qe=mt.material,Tt=new Sr;return Tt.side=qe.shadowSide!==null&&qe.shadowSide!==void 0?qe.shadowSide:He[qe.side],Tt.map=qe.map||null,Tt.alphaMap=qe.alphaMap||null,Tt.alphaTest=qe.alphaToCoverage===!0?.5:qe.alphaTest,Tt.displacementMap=qe.displacementMap||null,Tt.displacementScale=qe.displacementScale??1,Tt.displacementBias=qe.displacementBias??0,Tt}),we=p.fog;p.fog=null;try{V.push(h(p,z.readBuffer,p))}finally{p.fog=we,st()}}let tt=z.passes.find(He=>He instanceof ia);tt&&r.toneMapping===is&&r.outputColorSpace===Ot&&(tt._outputColorSpace=r.outputColorSpace,tt._toneMapping=r.toneMapping,tt.material.defines={SRGB_TRANSFER:"",ACES_FILMIC_TONE_MAPPING:""},tt.material.needsUpdate=!0);{let He=new wt;He.setAttribute("position",new at([-1,3,0,-1,-1,0,3,-1,0],3)),He.setAttribute("uv",new at([0,2,0,0,2,0],2));let st=new Te(He),we=new Set,mt=[...z.passes,z.copyPass].filter(Boolean);for(let qe of mt){let Tt=[];for(let Rt of Object.values(qe))if(Rt&&Rt.isMaterial)Tt.push(Rt);else if(Array.isArray(Rt))for(let xn of Rt)xn&&xn.isMaterial&&Tt.push(xn);for(let Rt of Tt)we.has(Rt)||Rt===ee.normalMaterial||(we.add(Rt),st.material=Rt,V.push(h(st,qe.renderToScreen?null:z.readBuffer)))}}await Promise.all(V)}let gi=22;async function Nn(){let V=r.getContext(),nt=new Uint8Array(4),tt=()=>V.readPixels(0,0,1,1,V.RGBA,V.UNSIGNED_BYTE,nt),He=window.innerWidth*window.innerHeight,st=async we=>{q=we,_e();let mt=[];for(let qe of[12,17.2,3]){Rn(qe),le(),z.render(),tt();let Tt=performance.now();for(let Rt=1;Rt<=3;Rt++)Rn(qe+Rt*.03),le(),z.render();tt(),mt.push((performance.now()-Tt)/3),await new Promise(Rt=>{setTimeout(Rt,0)})}return mt.sort((qe,Tt)=>qe-Tt),mt[1]};try{let we=Math.max(.3,me*.65),mt=Math.max(.2,me*.35),qe=await st(we),Tt=await st(mt),Rt=He*we*we/1e6,xn=He*mt*mt/1e6,hn=(qe-Tt)/(Rt-xn),Pt=qe-hn*Rt;(!(hn>0)||Pt<0)&&(hn=qe/Rt,Pt=0);let Yt=Math.max(0,(gi-Pt)/hn),Yn=Math.sqrt(Yt*1e6/He);q=Math.min(me,Math.max(O,Math.floor(Yn*20)/20)),window.__introQuality={cHi:Math.round(qe*10)/10,cLo:Math.round(Tt*10)/10,fixe:Math.round(Pt*10)/10,parMpx:Math.round(hn*10)/10,resolution:q}}catch{q=me}_e()}if(new URLSearchParams(location.search).get("introbench")==="1"){await my({renderer:r,composer:z,scene:p,camera:m,ui:s,update:Rn,resize:_e,ao:ee,dof:te,bloom:fe,allShadows:We,nextShadow:le,calibrate:Nn,maxQ:me,getQuality:()=>q,setQuality:V=>{q=V}});return}if(i!==null){let V=new URLSearchParams(location.search).get("introdbg")||"";V.includes("nodof")&&(te.uniforms.maxBlur.value=0),V.includes("noao")&&(ee.blendIntensity=0),V.includes("coc")&&(te.uniforms.debug.value=1),V.includes("nocable")&&p.traverse(st=>{st.userData.cable&&(st.visible=!1)});let nt=V.includes("noui"),tt=new URLSearchParams(location.search).get("introcam"),He=null;tt&&(He=tt.split(",").map(Number),ii=st=>{st.position.set(He[0],He[1],He[2]);let we=P(He[3],He[4],He[5]);return st.lookAt(we),He[6]&&(st.fov=He[6],st.updateProjectionMatrix()),we}),Rn(i),He&&He[7]&&(te.uniforms.aperture.value=He[7]),We(),V.includes("nodof")&&(te.uniforms.maxBlur.value=0),r.info.autoReset=!1,r.info.reset(),z.render(),s.loading.remove(),s.sound.hidden=!0,nt&&(s.caption.style.display="none",s.skip.style.display="none",s.progress.style.display="none"),window.__introStats={calls:r.info.render.calls,triangles:r.info.render.triangles,geometries:r.info.memory.geometries,textures:r.info.memory.textures,programs:r.info.programs?r.info.programs.length:0},window.__introFrame=i,window.__introScene=p;return}s.sound.hidden=!0,s.canvas.style.visibility="hidden";let cn=Ad();cn.prepare(),ht.scene=Math.round(performance.now()-window.__introStartAt),ht.steps=[];{let V=performance.now();Rn(12);try{await Un()}catch{}ht.compile=Math.round(performance.now()-V),ht.programsCompiled=r.info.programs?r.info.programs.length:null,window.__introProgKeys=r.info.programs?new Set(r.info.programs.map(nt=>nt.cacheKey)):null}for(let V of[12,17,21.5]){if(o)break;Rn(V),We();let nt=performance.now();z.render(),r.getContext().readPixels(0,0,1,1,r.getContext().RGBA,r.getContext().UNSIGNED_BYTE,new Uint8Array(4)),ht.steps.push({t:V,render:Math.round(performance.now()-nt)}),await new Promise(tt=>{setTimeout(tt,0)})}ht.programs=r.info.programs?r.info.programs.length:null,window.__introProgKeys&&(window.__introProgList=r.info.programs.filter(V=>!window.__introProgKeys.has(V.cacheKey)).map(V=>`${V.name} | ${V.cacheKey}`));let Bs=performance.now();if(o||await Nn(),ht.calibrate=Math.round(performance.now()-Bs),s.skip.removeEventListener("click",a),o){cn.stop(0),s.o.classList.add("leaving"),await new Promise(V=>{setTimeout(V,650)});try{z.dispose(),r.dispose(),r.forceContextLoss()}catch{}s.o.remove();return}Rn(0),We(),z.render(),s.canvas.style.visibility="",s.loading.remove(),s.sound.hidden=!1;let Fn=!0;try{Fn=localStorage.getItem(Wd)!=="off"}catch{}let Bn=0,ms=performance.now(),gs=Date.now(),Os=document.visibilityState!=="visible",Hs=!1,ua,Bc=new Promise(V=>{ua=V}),zs=()=>{if(!Fn){s.sound.textContent="Activer le son",s.sound.classList.remove("pulse");return}cn.running()?(s.sound.textContent="Couper le son",s.sound.classList.remove("pulse")):(s.sound.textContent="Activer le son",s.sound.classList.add("pulse"))};async function w(){let V=await cn.play(Bn);return cn.setMuted(!1),zs(),V}s.sound.addEventListener("click",async V=>{V.stopPropagation(),Fn&&cn.running()?(Fn=!1,cn.setMuted(!0)):(Fn=!0,await w());try{localStorage.setItem(Wd,Fn?"on":"off")}catch{}zs()}),s.o.addEventListener("pointerdown",V=>{V.target.closest(".intro-btn")||Fn&&!cn.running()&&w()});function Z(){Hs||(Hs=!0,cn.stop(.5),clearInterval(Ye),document.removeEventListener("visibilitychange",se),document.removeEventListener("keydown",ce),window.removeEventListener("resize",ie),s.o.classList.add("leaving"),setTimeout(()=>{try{z.dispose(),r.dispose(),r.forceContextLoss()}catch{}s.o.remove(),ua()},650))}s.skip.addEventListener("click",V=>{V.stopPropagation(),Z()});let ce=V=>{(V.key==="Escape"||V.key==="Enter")&&Z()};document.addEventListener("keydown",ce);let ie=()=>{_e();let V=Me();V.lines.length!==Pe.lines.length&&(Pe=V),Ue=Xd(ue(),K,ae)};window.addEventListener("resize",ie);let se=()=>{document.visibilityState!=="visible"?(Os=!0,cn.suspend()):(Os=!1,ms=performance.now(),gs=Date.now(),cn.resume().then(()=>{Fn&&cn.running()&&cn.play(Bn)}))};document.addEventListener("visibilitychange",se);let Ge=Date.now(),Ye=setInterval(()=>{Hs||(!Os&&Date.now()-gs>n&&Z(),Date.now()-Ge>9e4&&Z())},1e3),Oe=0,Je=0,et=0,_t=8,vt=new URLSearchParams(location.search).get("introperf")==="1"?document.createElement("p"):null;vt&&(vt.className="intro-perf",s.o.append(vt),window.__introPerf=[],window.__introReadyAt=performance.now());function je(V){if(Hs||(requestAnimationFrame(je),Os))return;let nt=V-ms,tt=Math.min(.1,nt/1e3)*t;ms=V,gs=Date.now();let He=cn.position();if(Bn=He!==null&&Fn?Math.max(Bn,He):Bn+tt,Bn>=ha){Z();return}if(Rn(Bn),le(),z.render(),gs=Date.now(),vt&&window.__introPerf.push([Math.round(Bn*100)/100,Math.round(nt*10)/10,q]),_t>0){_t-=1;return}if(Oe+=1,Je+=nt,et=Math.max(et,nt),Oe===40){let st=Je/Oe;vt&&(vt.textContent=`${Math.round(1e3/st)} images/s, pire image ${Math.round(et)} ms, r\xE9solution ${q.toFixed(2)}`),st>30&&q>O&&(q=Math.max(O,Math.floor(q*Math.sqrt(gi/st)*20)/20),_e(),_t=8),Oe=0,Je=0,et=0}}return zs(),Fn&&w(),requestAnimationFrame(V=>{ms=V,je(V)}),Bc}export{RE as playIntro};
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
