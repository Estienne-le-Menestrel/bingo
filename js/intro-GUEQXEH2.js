var Lu=0,nh=1,Uu=2;var bs=1,Nu=2,mr=3,is=0,on=1,Ht=2,qt=0,gr=1,Cn=2,ih=3,sh=4,cl=5;var Zn=100,Fu=101,Bu=102,Ou=103,Hu=104,Ts=200,zu=201,Gu=202,ku=203,rh=204,oh=205,Mo=206,Vu=207,So=208,Wu=209,Xu=210,qu=211,Yu=212,Zu=213,$u=214,Aa=0,Ra=1,Ca=2,js=3,Pa=4,Ia=5,Da=6,La=7,ah=0,Ju=1,Ku=2,ai=0,Eo=1,bo=2,To=3,ws=4,wo=5,Ao=6,Ro=7;var lh=300,ss=301,As=302,hl=303,ul=304,Co=306,Mn=1e3,di=1001,Ua=1002,jt=1003,Qu=1004;var Po=1005;var gn=1006,dl=1007;var rs=1008;var Sn=1009,ch=1010,hh=1011,xr=1012,fl=1013,li=1014,$n=1015,$t=1016,pl=1017,ml=1018,os=1020,uh=35902,dh=35899,fh=1021,ph=1022,Ln=1023,mi=1026,Si=1027,gl=1028,xl=1029,as=1030,_l=1031;var vl=1033,Io=33776,Do=33777,Lo=33778,Uo=33779,yl=35840,Ml=35841,Sl=35842,El=35843,bl=36196,Tl=37492,wl=37496,Al=37488,Rl=37489,No=37490,Cl=37491,Pl=37808,Il=37809,Dl=37810,Ll=37811,Ul=37812,Nl=37813,Fl=37814,Bl=37815,Ol=37816,Hl=37817,zl=37818,Gl=37819,kl=37820,Vl=37821,Wl=36492,Xl=36494,ql=36495,Yl=36283,Zl=36284,Fo=36285,$l=36286;var Vr=2300,Na=2301,Ta=2302,Wc=2303,Xc=2400,qc=2401,Yc=2402;var ju=3200;var Bo=0,ed=1,ki="",Vt="srgb",Wr="srgb-linear",Xr="linear",Et="srgb";var wa=7680;var td=519,nd=512,id=513,sd=514,Jl=515,rd=516,od=517,Kl=518,ad=519,mh=35044;var gh="300 es",oi=2e3,er=2001;function hf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function uf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function qr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ld(){let i=qr("canvas");return i.style.display="block",i}var Kh={},tr=null;function Yr(...i){let e="THREE."+i.shift();tr?tr("log",e,...i):console.log(e,...i)}function cd(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function tt(...i){i=cd(i);let e="THREE."+i.shift();if(tr)tr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function rt(...i){i=cd(i);let e="THREE."+i.shift();if(tr)tr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function xs(...i){let e=i.join(" ");e in Kh||(Kh[e]=!0,tt(...i))}function hd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var ud={[Aa]:Ra,[Ca]:Da,[Pa]:La,[js]:Ia,[Ra]:Aa,[Da]:Ca,[La]:Pa,[Ia]:js},gi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qh=1234567,Hr=Math.PI/180,_s=180/Math.PI;function pi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vn[i&255]+vn[i>>8&255]+vn[i>>16&255]+vn[i>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[n&255]+vn[n>>8&255]+vn[n>>16&255]+vn[n>>24&255]).toLowerCase()}function ft(i,e,t){return Math.max(e,Math.min(t,i))}function xh(i,e){return(i%e+e)%e}function df(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function ff(i,e,t){return i!==e?(t-i)/(e-i):0}function zr(i,e,t){return(1-t)*i+t*e}function pf(i,e,t,n){return zr(i,e,1-Math.exp(-t*n))}function mf(i,e=1){return e-Math.abs(xh(i,e*2)-e)}function gf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function xf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function _f(i,e){return i+Math.floor(Math.random()*(e-i+1))}function vf(i,e){return i+Math.random()*(e-i)}function yf(i){return i*(.5-Math.random())}function Mf(i){i!==void 0&&(Qh=i);let e=Qh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Sf(i){return i*Hr}function Ef(i){return i*_s}function bf(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Tf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function wf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Af(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),f=r((e-n)/2),u=o((e-n)/2),d=r((n-e)/2),p=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*f,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*f,a*c);break;case"ZXZ":i.set(l*f,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*p,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*p,a*c);break;case"ZYZ":i.set(l*p,l*d,a*h,a*c);break;default:tt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ri(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Rt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var _h={DEG2RAD:Hr,RAD2DEG:_s,generateUUID:pi,clamp:ft,euclideanModulo:xh,mapLinear:df,inverseLerp:ff,lerp:zr,damp:pf,pingpong:mf,smoothstep:gf,smootherstep:xf,randInt:_f,randFloat:vf,randFloatSpread:yf,seededRandom:Mf,degToRad:Sf,radToDeg:Ef,isPowerOfTwo:bf,ceilPowerOfTwo:Tf,floorPowerOfTwo:wf,setQuaternionFromProperEuler:Af,normalize:Rt,denormalize:ri},bh=class bh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};bh.prototype.isVector2=!0;var xe=bh,fn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=r[o+0],d=r[o+1],p=r[o+2],x=r[o+3];if(f!==x||l!==u||c!==d||h!==p){let g=l*u+c*d+h*p+f*x;g<0&&(u=-u,d=-d,p=-p,x=-x,g=-g);let m=1-a;if(g<.9995){let y=Math.acos(g),S=Math.sin(y);m=Math.sin(m*y)/S,a=Math.sin(a*y)/S,l=l*m+u*a,c=c*m+d*a,h=h*m+p*a,f=f*m+x*a}else{l=l*m+u*a,c=c*m+d*a,h=h*m+p*a,f=f*m+x*a;let y=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=y,c*=y,h*=y,f*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[o],u=r[o+1],d=r[o+2],p=r[o+3];return e[t]=a*p+h*f+l*d-c*u,e[t+1]=l*p+h*u+c*f-a*d,e[t+2]=c*p+h*d+a*u-l*f,e[t+3]=h*p-a*f-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),f=a(r/2),u=l(n/2),d=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=u*h*f+c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f-u*d*p;break;case"YXZ":this._x=u*h*f+c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f+u*d*p;break;case"ZXY":this._x=u*h*f-c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f-u*d*p;break;case"ZYX":this._x=u*h*f-c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f+u*d*p;break;case"YZX":this._x=u*h*f+c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f-u*d*p;break;case"XZY":this._x=u*h*f-c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f+u*d*p;break;default:tt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=n+a+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Th=class Th{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),f=2*(r*n-o*t);return this.x=t+l*c+o*f-a*h,this.y=n+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _c.copy(this).projectOnVector(e),this.sub(_c)}reflect(e){return this.sub(_c.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Th.prototype.isVector3=!0;var D=Th,_c=new D,jh=new fn,wh=class wh{constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],p=n[8],x=s[0],g=s[3],m=s[6],y=s[1],S=s[4],_=s[7],b=s[2],T=s[5],A=s[8];return r[0]=o*x+a*y+l*b,r[3]=o*g+a*S+l*T,r[6]=o*m+a*_+l*A,r[1]=c*x+h*y+f*b,r[4]=c*g+h*S+f*T,r[7]=c*m+h*_+f*A,r[2]=u*x+d*y+p*b,r[5]=u*g+d*S+p*T,r[8]=u*m+d*_+p*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,u=a*l-h*r,d=c*r-o*l,p=t*f+n*u+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=f*x,e[1]=(s*c-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=u*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=d*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return xs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(vc.makeScale(e,t)),this}rotate(e){return xs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(vc.makeRotation(-e)),this}translate(e,t){return xs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(vc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};wh.prototype.isMatrix3=!0;var ct=wh,vc=new ct,eu=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tu=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rf(){let i={enabled:!0,workingColorSpace:Wr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Et&&(s.r=Fi(s.r),s.g=Fi(s.g),s.b=Fi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Et&&(s.r=Qs(s.r),s.g=Qs(s.g),s.b=Qs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ki?Xr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return xs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return xs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Wr]:{primaries:e,whitePoint:n,transfer:Xr,toXYZ:eu,fromXYZ:tu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:e,whitePoint:n,transfer:Et,toXYZ:eu,fromXYZ:tu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}}),i}var mt=Rf();function Fi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Qs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Us,Fa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Us===void 0&&(Us=qr("canvas")),Us.width=e.width,Us.height=e.height;let s=Us.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Us}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=qr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Fi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Fi(t[n]/255)*255):t[n]=Fi(t[n]);return{data:t,width:e.width,height:e.height}}else return tt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Cf=0,nr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=pi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(yc(s[o].image)):r.push(yc(s[o]))}else r=yc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function yc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Fa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(tt("Texture: Unable to serialize Texture."),{})}var Pf=0,Mc=new D,wn=class i extends gi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=di,s=di,r=gn,o=rs,a=Ln,l=Sn,c=i.DEFAULT_ANISOTROPY,h=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=pi(),this.name="",this.source=new nr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Mc).x}get height(){return this.source.getSize(Mc).y}get depth(){return this.source.getSize(Mc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){tt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){tt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mn:e.x=e.x-Math.floor(e.x);break;case di:e.x=e.x<0?0:1;break;case Ua:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mn:e.y=e.y-Math.floor(e.y);break;case di:e.y=e.y<0?0:1;break;case Ua:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=lh;wn.DEFAULT_ANISOTROPY=1;var Ah=class Ah{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,_=(d+1)/2,b=(m+1)/2,T=(h+u)/4,A=(f+x)/4,v=(p+g)/4;return S>_&&S>b?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=T/n,r=A/n):_>b?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=T/s,r=v/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=A/r,s=v/r),this.set(n,s,r,t),this}let y=Math.sqrt((g-p)*(g-p)+(f-x)*(f-x)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(g-p)/y,this.y=(f-x)/y,this.z=(u-h)/y,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this.w=ft(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this.w=ft(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ah.prototype.isVector4=!0;var Gt=Ah,Ba=class extends gi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Gt(0,0,e,t),this.scissorTest=!1,this.viewport=new Gt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new wn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:gn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new nr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bt=class extends Ba{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Zr=class extends wn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Oa=class extends wn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var ll=class ll{constructor(e,t,n,s,r,o,a,l,c,h,f,u,d,p,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,f,u,d,p,x,g)}set(e,t,n,s,r,o,a,l,c,h,f,u,d,p,x,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=f,m[14]=u,m[3]=d,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ll().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Ns.setFromMatrixColumn(e,0).length(),r=1/Ns.setFromMatrixColumn(e,1).length(),o=1/Ns.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let u=o*h,d=o*f,p=a*h,x=a*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=d+p*c,t[5]=u-x*c,t[9]=-a*l,t[2]=x-u*c,t[6]=p+d*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,d=l*f,p=c*h,x=c*f;t[0]=u+x*a,t[4]=p*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=d*a-p,t[6]=x+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,d=l*f,p=c*h,x=c*f;t[0]=u-x*a,t[4]=-o*f,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*h,t[9]=x-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,d=o*f,p=a*h,x=a*f;t[0]=l*h,t[4]=p*c-d,t[8]=u*c+x,t[1]=l*f,t[5]=x*c+u,t[9]=d*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,d=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=x-u*f,t[8]=p*f+d,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*f+p,t[10]=u-x*f}else if(e.order==="XZY"){let u=o*l,d=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+x,t[5]=o*h,t[9]=d*f-p,t[2]=p*f-d,t[6]=a*h,t[10]=x*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(If,e,Df)}lookAt(e,t,n){let s=this.elements;return Fn.subVectors(e,t),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),$i.crossVectors(n,Fn),$i.lengthSq()===0&&(Math.abs(n.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),$i.crossVectors(n,Fn)),$i.normalize(),Jo.crossVectors(Fn,$i),s[0]=$i.x,s[4]=Jo.x,s[8]=Fn.x,s[1]=$i.y,s[5]=Jo.y,s[9]=Fn.y,s[2]=$i.z,s[6]=Jo.z,s[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],p=n[2],x=n[6],g=n[10],m=n[14],y=n[3],S=n[7],_=n[11],b=n[15],T=s[0],A=s[4],v=s[8],E=s[12],R=s[1],P=s[5],L=s[9],k=s[13],U=s[2],V=s[6],H=s[10],Y=s[14],K=s[3],Z=s[7],$=s[11],ne=s[15];return r[0]=o*T+a*R+l*U+c*K,r[4]=o*A+a*P+l*V+c*Z,r[8]=o*v+a*L+l*H+c*$,r[12]=o*E+a*k+l*Y+c*ne,r[1]=h*T+f*R+u*U+d*K,r[5]=h*A+f*P+u*V+d*Z,r[9]=h*v+f*L+u*H+d*$,r[13]=h*E+f*k+u*Y+d*ne,r[2]=p*T+x*R+g*U+m*K,r[6]=p*A+x*P+g*V+m*Z,r[10]=p*v+x*L+g*H+m*$,r[14]=p*E+x*k+g*Y+m*ne,r[3]=y*T+S*R+_*U+b*K,r[7]=y*A+S*P+_*V+b*Z,r[11]=y*v+S*L+_*H+b*$,r[15]=y*E+S*k+_*Y+b*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],d=e[14],p=e[3],x=e[7],g=e[11],m=e[15],y=l*d-c*u,S=a*d-c*f,_=a*u-l*f,b=o*d-c*h,T=o*u-l*h,A=o*f-a*h;return t*(x*y-g*S+m*_)-n*(p*y-g*b+m*T)+s*(p*S-x*b+m*A)-r*(p*_-x*T+g*A)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],d=e[11],p=e[12],x=e[13],g=e[14],m=e[15],y=t*a-n*o,S=t*l-s*o,_=t*c-r*o,b=n*l-s*a,T=n*c-r*a,A=s*c-r*l,v=h*x-f*p,E=h*g-u*p,R=h*m-d*p,P=f*g-u*x,L=f*m-d*x,k=u*m-d*g,U=y*k-S*L+_*P+b*R-T*E+A*v;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/U;return e[0]=(a*k-l*L+c*P)*V,e[1]=(s*L-n*k-r*P)*V,e[2]=(x*A-g*T+m*b)*V,e[3]=(u*T-f*A-d*b)*V,e[4]=(l*R-o*k-c*E)*V,e[5]=(t*k-s*R+r*E)*V,e[6]=(g*_-p*A-m*S)*V,e[7]=(h*A-u*_+d*S)*V,e[8]=(o*L-a*R+c*v)*V,e[9]=(n*R-t*L-r*v)*V,e[10]=(p*T-x*_+m*y)*V,e[11]=(f*_-h*T-d*y)*V,e[12]=(a*E-o*P-l*v)*V,e[13]=(t*P-n*E+s*v)*V,e[14]=(x*S-p*b-g*y)*V,e[15]=(h*b-f*S+u*y)*V,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,f=a+a,u=r*c,d=r*h,p=r*f,x=o*h,g=o*f,m=a*f,y=l*c,S=l*h,_=l*f,b=n.x,T=n.y,A=n.z;return s[0]=(1-(x+m))*b,s[1]=(d+_)*b,s[2]=(p-S)*b,s[3]=0,s[4]=(d-_)*T,s[5]=(1-(u+m))*T,s[6]=(g+y)*T,s[7]=0,s[8]=(p+S)*A,s[9]=(g-y)*A,s[10]=(1-(u+x))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Ns.set(s[0],s[1],s[2]).length(),a=Ns.set(s[4],s[5],s[6]).length(),l=Ns.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ti.copy(this);let c=1/o,h=1/a,f=1/l;return ti.elements[0]*=c,ti.elements[1]*=c,ti.elements[2]*=c,ti.elements[4]*=h,ti.elements[5]*=h,ti.elements[6]*=h,ti.elements[8]*=f,ti.elements[9]*=f,ti.elements[10]*=f,t.setFromRotationMatrix(ti),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=oi,l=!1){let c=this.elements,h=2*r/(t-e),f=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===oi)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===er)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=oi,l=!1){let c=this.elements,h=2/(t-e),f=2/(n-s),u=-(t+e)/(t-e),d=-(n+s)/(n-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===oi)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===er)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};ll.prototype.isMatrix4=!0;var ut=ll,Ns=new D,ti=new ut,If=new D(0,0,0),Df=new D(1,1,1),$i=new D,Jo=new D,Fn=new D,nu=new ut,iu=new fn,Xn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ft(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:tt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return nu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return iu.setFromEuler(this),this.setFromQuaternion(iu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xn.DEFAULT_ORDER="XYZ";var $r=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Lf=0,su=new D,Fs=new fn,Pi=new ut,Ko=new D,Rr=new D,Uf=new D,Nf=new fn,ru=new D(1,0,0),ou=new D(0,1,0),au=new D(0,0,1),lu={type:"added"},Ff={type:"removed"},Bs={type:"childadded",child:null},Sc={type:"childremoved",child:null},Lt=class i extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new Xn,n=new fn,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ut},normalMatrix:{value:new ct}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $r,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.premultiply(Fs),this}rotateX(e){return this.rotateOnAxis(ru,e)}rotateY(e){return this.rotateOnAxis(ou,e)}rotateZ(e){return this.rotateOnAxis(au,e)}translateOnAxis(e,t){return su.copy(e).applyQuaternion(this.quaternion),this.position.add(su.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ru,e)}translateY(e){return this.translateOnAxis(ou,e)}translateZ(e){return this.translateOnAxis(au,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ko.copy(e):Ko.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(Rr,Ko,this.up):Pi.lookAt(Ko,Rr,this.up),this.quaternion.setFromRotationMatrix(Pi),s&&(Pi.extractRotation(s.matrixWorld),Fs.setFromRotationMatrix(Pi),this.quaternion.premultiply(Fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lu),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null):rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ff),Sc.child=e,this.dispatchEvent(Sc),Sc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lu),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,e,Uf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,Nf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),u=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Lt.DEFAULT_UP=new D(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var je=class extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Bf={type:"move"},ir=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,p=.005;c.inputState.pinching&&u>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Bf)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new je;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},dd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},Qo={h:0,s:0,l:0};function Ec(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Re=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,mt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=mt.workingColorSpace){if(e=xh(e,1),t=ft(t,0,1),n=ft(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ec(o,r,e+1/3),this.g=Ec(o,r,e),this.b=Ec(o,r,e-1/3)}return mt.colorSpaceToWorking(this,s),this}setStyle(e,t=Vt){function n(r){r!==void 0&&parseFloat(r)<1&&tt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:tt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);tt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){let n=dd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):tt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fi(e.r),this.g=Fi(e.g),this.b=Fi(e.b),this}copyLinearToSRGB(e){return this.r=Qs(e.r),this.g=Qs(e.g),this.b=Qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return mt.workingToColorSpace(yn.copy(this),e),Math.round(ft(yn.r*255,0,255))*65536+Math.round(ft(yn.g*255,0,255))*256+Math.round(ft(yn.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.workingToColorSpace(yn.copy(this),t);let n=yn.r,s=yn.g,r=yn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=mt.workingColorSpace){return mt.workingToColorSpace(yn.copy(this),t),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=Vt){mt.workingToColorSpace(yn.copy(this),e);let t=yn.r,n=yn.g,s=yn.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ji),this.setHSL(Ji.h+e,Ji.s+t,Ji.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ji),e.getHSL(Qo);let n=zr(Ji.h,Qo.h,t),s=zr(Ji.s,Qo.s,t),r=zr(Ji.l,Qo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},yn=new Re;Re.NAMES=dd;var Jr=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Re(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var vs=class extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ni=new D,Ii=new D,bc=new D,Di=new D,Os=new D,Hs=new D,cu=new D,Tc=new D,wc=new D,Ac=new D,Rc=new Gt,Cc=new Gt,Pc=new Gt,Ni=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ni.subVectors(e,t),s.cross(ni);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ni.subVectors(s,t),Ii.subVectors(n,t),bc.subVectors(e,t);let o=ni.dot(ni),a=ni.dot(Ii),l=ni.dot(bc),c=Ii.dot(Ii),h=Ii.dot(bc),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-a*h)*u,p=(o*h-a*l)*u;return r.set(1-d-p,p,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Di.x),l.addScaledVector(o,Di.y),l.addScaledVector(a,Di.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Rc.setScalar(0),Cc.setScalar(0),Pc.setScalar(0),Rc.fromBufferAttribute(e,t),Cc.fromBufferAttribute(e,n),Pc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Rc,r.x),o.addScaledVector(Cc,r.y),o.addScaledVector(Pc,r.z),o}static isFrontFacing(e,t,n,s){return ni.subVectors(n,t),Ii.subVectors(e,t),ni.cross(Ii).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),ni.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Os.subVectors(s,n),Hs.subVectors(r,n),Tc.subVectors(e,n);let l=Os.dot(Tc),c=Hs.dot(Tc);if(l<=0&&c<=0)return t.copy(n);wc.subVectors(e,s);let h=Os.dot(wc),f=Hs.dot(wc);if(h>=0&&f<=h)return t.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Os,o);Ac.subVectors(e,r);let d=Os.dot(Ac),p=Hs.dot(Ac);if(p>=0&&d<=p)return t.copy(r);let x=d*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(Hs,a);let g=h*p-d*f;if(g<=0&&f-h>=0&&d-p>=0)return cu.subVectors(r,s),a=(f-h)/(f-h+(d-p)),t.copy(s).addScaledVector(cu,a);let m=1/(g+x+u);return o=x*m,a=u*m,t.copy(n).addScaledVector(Os,o).addScaledVector(Hs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},xi=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ii.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ii.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ii):ii.fromBufferAttribute(r,o),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),jo.copy(n.boundingBox)),jo.applyMatrix4(e.matrixWorld),this.union(jo)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cr),ea.subVectors(this.max,Cr),zs.subVectors(e.a,Cr),Gs.subVectors(e.b,Cr),ks.subVectors(e.c,Cr),Ki.subVectors(Gs,zs),Qi.subVectors(ks,Gs),fs.subVectors(zs,ks);let t=[0,-Ki.z,Ki.y,0,-Qi.z,Qi.y,0,-fs.z,fs.y,Ki.z,0,-Ki.x,Qi.z,0,-Qi.x,fs.z,0,-fs.x,-Ki.y,Ki.x,0,-Qi.y,Qi.x,0,-fs.y,fs.x,0];return!Ic(t,zs,Gs,ks,ea)||(t=[1,0,0,0,1,0,0,0,1],!Ic(t,zs,Gs,ks,ea))?!1:(ta.crossVectors(Ki,Qi),t=[ta.x,ta.y,ta.z],Ic(t,zs,Gs,ks,ea))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Li=[new D,new D,new D,new D,new D,new D,new D,new D],ii=new D,jo=new xi,zs=new D,Gs=new D,ks=new D,Ki=new D,Qi=new D,fs=new D,Cr=new D,ea=new D,ta=new D,ps=new D;function Ic(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ps.fromArray(i,r);let a=s.x*Math.abs(ps.x)+s.y*Math.abs(ps.y)+s.z*Math.abs(ps.z),l=e.dot(ps),c=t.dot(ps),h=n.dot(ps);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var sn=new D,na=new xe,Of=0,Ct=class extends gi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Of++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=mh,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)na.fromBufferAttribute(this,t),na.applyMatrix3(e),this.setXY(t,na.x,na.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ri(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),s=Rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),s=Rt(s,this.array),r=Rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Kr=class extends Ct{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Qr=class extends Ct{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var nt=class extends Ct{constructor(e,t,n){super(new Float32Array(e),t,n)}},Hf=new xi,Pr=new D,Dc=new D,_i=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Hf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pr.subVectors(e,this.center);let t=Pr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Pr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pr.copy(e.center).add(Dc)),this.expandByPoint(Pr.copy(e.center).sub(Dc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},zf=0,Wn=new ut,Lc=new Lt,Vs=new D,Bn=new xi,Ir=new xi,un=new D,gt=class i extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hf(e)?Qr:Kr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ct().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Wn.makeRotationFromQuaternion(e),this.applyMatrix4(Wn),this}rotateX(e){return Wn.makeRotationX(e),this.applyMatrix4(Wn),this}rotateY(e){return Wn.makeRotationY(e),this.applyMatrix4(Wn),this}rotateZ(e){return Wn.makeRotationZ(e),this.applyMatrix4(Wn),this}translate(e,t,n){return Wn.makeTranslation(e,t,n),this.applyMatrix4(Wn),this}scale(e,t,n){return Wn.makeScale(e,t,n),this.applyMatrix4(Wn),this}lookAt(e){return Lc.lookAt(e),Lc.updateMatrix(),this.applyMatrix4(Lc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new nt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&tt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Bn.setFromBufferAttribute(r),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _i);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(Bn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Ir.setFromBufferAttribute(a),this.morphTargetsRelative?(un.addVectors(Bn.min,Ir.min),Bn.expandByPoint(un),un.addVectors(Bn.max,Ir.max),Bn.expandByPoint(un)):(Bn.expandByPoint(Ir.min),Bn.expandByPoint(Ir.max))}Bn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)un.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(un));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)un.fromBufferAttribute(a,c),l&&(Vs.fromBufferAttribute(e,c),un.add(Vs)),s=Math.max(s,n.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Ct(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let v=0;v<n.count;v++)a[v]=new D,l[v]=new D;let c=new D,h=new D,f=new D,u=new xe,d=new xe,p=new xe,x=new D,g=new D;function m(v,E,R){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,E),f.fromBufferAttribute(n,R),u.fromBufferAttribute(r,v),d.fromBufferAttribute(r,E),p.fromBufferAttribute(r,R),h.sub(c),f.sub(c),d.sub(u),p.sub(u);let P=1/(d.x*p.y-p.x*d.y);isFinite(P)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(f,-d.y).multiplyScalar(P),g.copy(f).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(P),a[v].add(x),a[E].add(x),a[R].add(x),l[v].add(g),l[E].add(g),l[R].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let v=0,E=y.length;v<E;++v){let R=y[v],P=R.start,L=R.count;for(let k=P,U=P+L;k<U;k+=3)m(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let S=new D,_=new D,b=new D,T=new D;function A(v){b.fromBufferAttribute(s,v),T.copy(b);let E=a[v];S.copy(E),S.sub(b.multiplyScalar(b.dot(E))).normalize(),_.crossVectors(T,E);let P=_.dot(l[v])<0?-1:1;o.setXYZW(v,S.x,S.y,S.z,P)}for(let v=0,E=y.length;v<E;++v){let R=y[v],P=R.start,L=R.count;for(let k=P,U=P+L;k<U;k+=3)A(e.getX(k+0)),A(e.getX(k+1)),A(e.getX(k+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ct(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,h=new D,f=new D;if(e)for(let u=0,d=e.count;u<d;u+=3){let p=e.getX(u+0),x=e.getX(u+1),g=e.getX(u+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)un.fromBufferAttribute(e,t),un.normalize(),e.setXYZ(t,un.x,un.y,un.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h),d=0,p=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let m=0;m<h;m++)u[p++]=c[d++]}return new Ct(u,h,f)}if(this.index===null)return tt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=e(u,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},jr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=mh,this.updateRanges=[],this.version=0,this.uuid=pi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Tn=new D,sr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyMatrix4(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyNormalMatrix(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.transformDirection(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ri(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ri(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ri(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ri(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ri(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),s=Rt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),s=Rt(s,this.array),r=Rt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Yr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ct(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Yr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Uc=new D,Gf=new D,kf=new ct,si=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Uc.subVectors(n,t).cross(Gf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Uc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||kf.getNormalMatrix(e),s=this.coplanarPoint(Uc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Vf=0,qn=class extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=pi(),this.name="",this.type="Material",this.blending=gr,this.side=is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rh,this.blendDst=oh,this.blendEquation=Zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=td,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wa,this.stencilZFail=wa,this.stencilZPass=wa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){tt(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){tt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Re().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new si().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new xe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new xe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},rr=class extends qn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ws,Dr=new D,Xs=new D,qs=new D,Ys=new xe,Lr=new xe,fd=new ut,ia=new D,Ur=new D,sa=new D,hu=new xe,Nc=new xe,uu=new xe,eo=class extends Lt{constructor(e=new rr){if(super(),this.isSprite=!0,this.type="Sprite",Ws===void 0){Ws=new gt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new jr(t,5);Ws.setIndex([0,1,2,0,2,3]),Ws.setAttribute("position",new sr(n,3,0,!1)),Ws.setAttribute("uv",new sr(n,2,3,!1))}this.geometry=Ws,this.material=e,this.center=new xe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&rt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xs.setFromMatrixScale(this.matrixWorld),fd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),qs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xs.multiplyScalar(-qs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;ra(ia.set(-.5,-.5,0),qs,o,Xs,s,r),ra(Ur.set(.5,-.5,0),qs,o,Xs,s,r),ra(sa.set(.5,.5,0),qs,o,Xs,s,r),hu.set(0,0),Nc.set(1,0),uu.set(1,1);let a=e.ray.intersectTriangle(ia,Ur,sa,!1,Dr);if(a===null&&(ra(Ur.set(-.5,.5,0),qs,o,Xs,s,r),Nc.set(0,1),a=e.ray.intersectTriangle(ia,sa,Ur,!1,Dr),a===null))return;let l=e.ray.origin.distanceTo(Dr);l<e.near||l>e.far||t.push({distance:l,point:Dr.clone(),uv:Ni.getInterpolation(Dr,ia,Ur,sa,hu,Nc,uu,new xe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ra(i,e,t,n,s,r){Ys.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Lr.x=r*Ys.x-s*Ys.y,Lr.y=s*Ys.x+r*Ys.y):Lr.copy(Ys),i.copy(e),i.x+=Lr.x,i.y+=Lr.y,i.applyMatrix4(fd)}var Ui=new D,Fc=new D,oa=new D,aa=new D,or=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ui.copy(this.origin).addScaledVector(this.direction,t),Ui.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Fc.copy(e).add(t).multiplyScalar(.5),oa.copy(t).sub(e).normalize(),aa.copy(this.origin).sub(Fc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(oa),a=aa.dot(this.direction),l=-aa.dot(oa),c=aa.lengthSq(),h=Math.abs(1-o*o),f,u,d,p;if(h>0)if(f=o*l-a,u=o*a-l,p=r*h,f>=0)if(u>=-p)if(u<=p){let x=1/h;f*=x,u*=x,d=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u<=-p?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=p?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Fc).addScaledVector(oa,u),d}intersectSphere(e,t){if(e.radius<0)return null;Ui.subVectors(e.center,this.origin);let n=Ui.dot(this.direction),s=Ui.dot(Ui)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(a=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ui)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,f=e.x-o.x,u=e.y-o.y,d=e.z-o.z,p=t.x-o.x,x=t.y-o.y,g=t.z-o.z,m=n.x-o.x,y=n.y-o.y,S=n.z-o.z,_=Math.abs(l),b=Math.abs(c),T=Math.abs(h),A,v,E,R,P,L,k,U,V,H,Y,K;if(_>=b&&_>=T?(E=l,L=f,V=p,K=m,l>=0?(A=c,v=h,R=u,P=d,k=x,U=g,H=y,Y=S):(A=h,v=c,R=d,P=u,k=g,U=x,H=S,Y=y)):b>=T?(E=c,L=u,V=x,K=y,c>=0?(A=h,v=l,R=d,P=f,k=g,U=p,H=S,Y=m):(A=l,v=h,R=f,P=d,k=p,U=g,H=m,Y=S)):(E=h,L=d,V=g,K=S,h>=0?(A=l,v=c,R=f,P=u,k=p,U=x,H=m,Y=y):(A=c,v=l,R=u,P=f,k=x,U=p,H=y,Y=m)),E===0)return null;let Z=A/E,$=v/E,ne=1/E,de=R-Z*L,Ee=P-$*L,Ye=k-Z*V,Ve=U-$*V,Je=H-Z*K,oe=Y-$*K,ce=Je*Ve-oe*Ye,we=de*oe-Ee*Je,He=Ye*Ee-Ve*de;if(s){if(ce<0||we<0||He<0)return null}else if((ce<0||we<0||He<0)&&(ce>0||we>0||He>0))return null;let be=ce+we+He;if(be===0)return null;let Ze=ne*(ce*L+we*V+He*K);return(be>0?Ze<0:Ze>0)?null:this.at(Ze/be,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xt=class extends qn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=ah,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},du=new ut,ms=new or,la=new _i,fu=new D,ca=new D,ha=new D,ua=new D,Bc=new D,da=new D,pu=new D,fa=new D,De=class extends Lt{constructor(e=new gt,t=new xt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){da.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(Bc.fromBufferAttribute(f,e),o?da.addScaledVector(Bc,h):da.addScaledVector(Bc.sub(t),h))}t.add(da)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),la.copy(n.boundingSphere),la.applyMatrix4(r),ms.copy(e.ray).recast(e.near),!(la.containsPoint(ms.origin)===!1&&(ms.intersectSphere(la,fu)===null||ms.origin.distanceToSquared(fu)>(e.far-e.near)**2))&&(du.copy(r).invert(),ms.copy(e.ray).applyMatrix4(du),!(n.boundingBox!==null&&ms.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ms)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=u.length;p<x;p++){let g=u[p],m=o[g.materialIndex],y=Math.max(g.start,d.start),S=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let _=y,b=S;_<b;_+=3){let T=a.getX(_),A=a.getX(_+1),v=a.getX(_+2);s=pa(this,m,e,n,c,h,f,T,A,v),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){let y=a.getX(g),S=a.getX(g+1),_=a.getX(g+2);s=pa(this,o,e,n,c,h,f,y,S,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=u.length;p<x;p++){let g=u[p],m=o[g.materialIndex],y=Math.max(g.start,d.start),S=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let _=y,b=S;_<b;_+=3){let T=_,A=_+1,v=_+2;s=pa(this,m,e,n,c,h,f,T,A,v),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){let y=g,S=g+1,_=g+2;s=pa(this,o,e,n,c,h,f,y,S,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Wf(i,e,t,n,s,r,o,a){let l;if(e.side===on?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===is,a),l===null)return null;fa.copy(a),fa.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(fa);return c<t.near||c>t.far?null:{distance:c,point:fa.clone(),object:i}}function pa(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,ca),i.getVertexPosition(l,ha),i.getVertexPosition(c,ua);let h=Wf(i,e,t,n,ca,ha,ua,pu);if(h){let f=new D;Ni.getBarycoord(pu,ca,ha,ua,f),s&&(h.uv=Ni.getInterpolatedAttribute(s,a,l,c,f,new xe)),r&&(h.uv1=Ni.getInterpolatedAttribute(r,a,l,c,f,new xe)),o&&(h.normal=Ni.getInterpolatedAttribute(o,a,l,c,f,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new D,materialIndex:0};Ni.getNormal(ca,ha,ua,u.normal),h.face=u,h.barycoord=f}return h}var Bi=class extends wn{constructor(e=null,t=1,n=1,s,r,o,a,l,c=jt,h=jt,f,u){super(null,o,a,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ar=class extends Ct{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Zs=new ut,mu=new ut,ma=[],gu=new xi,Xf=new ut,Nr=new De,Fr=new _i,An=class extends De{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ar(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Xf)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new xi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Zs),gu.copy(e.boundingBox).applyMatrix4(Zs),this.boundingBox.union(gu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new _i),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Zs),Fr.copy(e.boundingSphere).applyMatrix4(Zs),this.boundingSphere.union(Fr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Nr.geometry=this.geometry,Nr.material=this.material,Nr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fr.copy(this.boundingSphere),Fr.applyMatrix4(n),e.ray.intersectsSphere(Fr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Zs),mu.multiplyMatrices(n,Zs),Nr.matrixWorld=mu,Nr.raycast(e,ma);for(let o=0,a=ma.length;o<a;o++){let l=ma[o];l.instanceId=r,l.object=this,t.push(l)}ma.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ar(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Bi(new Float32Array(s*this.count),s,this.count,gl,$n));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},gs=new _i,qf=new xe(.5,.5),ga=new D,lr=class{constructor(e=new si,t=new si,n=new si,s=new si,r=new si,o=new si){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=oi,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],p=r[8],x=r[9],g=r[10],m=r[11],y=r[12],S=r[13],_=r[14],b=r[15];if(s[0].setComponents(c-o,d-h,m-p,b-y).normalize(),s[1].setComponents(c+o,d+h,m+p,b+y).normalize(),s[2].setComponents(c+a,d+f,m+x,b+S).normalize(),s[3].setComponents(c-a,d-f,m-x,b-S).normalize(),n)s[4].setComponents(l,u,g,_).normalize(),s[5].setComponents(c-l,d-u,m-g,b-_).normalize();else if(s[4].setComponents(c-l,d-u,m-g,b-_).normalize(),t===oi)s[5].setComponents(c+l,d+u,m+g,b+_).normalize();else if(t===er)s[5].setComponents(l,u,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(e){gs.center.set(0,0,0);let t=qf.distanceTo(e.center);return gs.radius=.7071067811865476+t,gs.applyMatrix4(e.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ga.x=s.normal.x>0?e.max.x:e.min.x,ga.y=s.normal.y>0?e.max.y:e.min.y,ga.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ga)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var cr=class extends qn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ha=new D,za=new D,xu=new ut,Br=new or,xa=new _i,Oc=new D,_u=new D,to=class extends Lt{constructor(e=new gt,t=new cr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Ha.fromBufferAttribute(t,s-1),za.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ha.distanceTo(za);e.setAttribute("lineDistance",new nt(n,1))}else tt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xa.copy(n.boundingSphere),xa.applyMatrix4(s),xa.radius+=r,e.ray.intersectsSphere(xa)===!1)return;xu.copy(s).invert(),Br.copy(e.ray).applyMatrix4(xu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=d,g=p-1;x<g;x+=c){let m=h.getX(x),y=h.getX(x+1),S=_a(this,e,Br,l,m,y,x);S&&t.push(S)}if(this.isLineLoop){let x=h.getX(p-1),g=h.getX(d),m=_a(this,e,Br,l,x,g,p-1);m&&t.push(m)}}else{let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=d,g=p-1;x<g;x+=c){let m=_a(this,e,Br,l,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){let x=_a(this,e,Br,l,p-1,d,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function _a(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(Ha.fromBufferAttribute(a,s),za.fromBufferAttribute(a,r),t.distanceSqToSegment(Ha,za,Oc,_u)>n)return;Oc.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Oc);if(!(c<e.near||c>e.far))return{distance:c,point:_u.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var vi=class extends qn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},vu=new ut,Zc=new or,va=new _i,ya=new D,Oi=class extends Lt{constructor(e=new gt,t=new vi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),va.copy(n.boundingSphere),va.applyMatrix4(s),va.radius+=r,e.ray.intersectsSphere(va)===!1)return;vu.copy(s).invert(),Zc.copy(e.ray).applyMatrix4(vu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=u,x=d;p<x;p++){let g=c.getX(p);ya.fromBufferAttribute(f,g),yu(ya,g,l,s,e,t,this)}}else{let u=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let p=u,x=d;p<x;p++)ya.fromBufferAttribute(f,p),yu(ya,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function yu(i,e,t,n,s,r,o){let a=Zc.distanceSqToPoint(i);if(a<t){let l=new D;Zc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var no=class extends wn{constructor(e=[],t=ss,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},On=class extends wn{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var yi=class extends wn{constructor(e,t,n=li,s,r,o,a=jt,l=jt,c,h=mi,f=1){if(h!==mi&&h!==Si)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:f};super(u,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new nr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ga=class extends yi{constructor(e,t=li,n=ss,s,r,o=jt,a=jt,l,c=mi){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},io=class extends wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},yt=class i extends gt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],u=0,d=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,s,o,2),p("x","z","y",1,-1,e,n,-t,s,o,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(f,2));function p(x,g,m,y,S,_,b,T,A,v,E){let R=_/A,P=b/v,L=_/2,k=b/2,U=T/2,V=A+1,H=v+1,Y=0,K=0,Z=new D;for(let $=0;$<H;$++){let ne=$*P-k;for(let de=0;de<V;de++){let Ee=de*R-L;Z[x]=Ee*y,Z[g]=ne*S,Z[m]=U,c.push(Z.x,Z.y,Z.z),Z[x]=0,Z[g]=0,Z[m]=T>0?1:-1,h.push(Z.x,Z.y,Z.z),f.push(de/A),f.push(1-$/v),Y+=1}}for(let $=0;$<v;$++)for(let ne=0;ne<A;ne++){let de=u+ne+V*$,Ee=u+ne+V*($+1),Ye=u+(ne+1)+V*($+1),Ve=u+(ne+1)+V*$;l.push(de,Ee,Ve),l.push(Ee,Ye,Ve),K+=6}a.addGroup(d,K,E),d+=K,u+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Dn=class i extends gt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=t/2,f=Math.PI/2*e,u=t,d=2*f+u,p=n*2+r,x=s+1,g=new D,m=new D;for(let y=0;y<=p;y++){let S=0,_=0,b=0,T=0;if(y<=n){let E=y/n,R=E*Math.PI/2;_=-h-e*Math.cos(R),b=e*Math.sin(R),T=-e*Math.cos(R),S=E*f}else if(y<=n+r){let E=(y-n)/r;_=-h+E*t,b=e,T=0,S=f+E*u}else{let E=(y-n-r)/n,R=E*Math.PI/2;_=h+e*Math.sin(R),b=e*Math.cos(R),T=e*Math.sin(R),S=f+u+E*f}let A=Math.max(0,Math.min(1,S/d)),v=0;y===0?v=.5/s:y===p&&(v=-.5/s);for(let E=0;E<=s;E++){let R=E/s,P=R*Math.PI*2,L=Math.sin(P),k=Math.cos(P);m.x=-b*k,m.y=_,m.z=b*L,a.push(m.x,m.y,m.z),g.set(-b*k,T,b*L),g.normalize(),l.push(g.x,g.y,g.z),c.push(R+v,A)}if(y>0){let E=(y-1)*x;for(let R=0;R<s;R++){let P=E+R,L=E+R+1,k=y*x+R,U=y*x+R+1;o.push(P,L,k),o.push(L,U,k)}}}this.setIndex(o),this.setAttribute("position",new nt(a,3)),this.setAttribute("normal",new nt(l,3)),this.setAttribute("uv",new nt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Rn=class i extends gt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new D,h=new xe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){let d=n+f/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new nt(o,3)),this.setAttribute("normal",new nt(a,3)),this.setAttribute("uv",new nt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ot=class i extends gt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],p=0,x=[],g=n/2,m=0;y(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new nt(f,3)),this.setAttribute("normal",new nt(u,3)),this.setAttribute("uv",new nt(d,2));function y(){let _=new D,b=new D,T=0,A=(t-e)/n;for(let v=0;v<=r;v++){let E=[],R=v/r,P=R*(t-e)+e;for(let L=0;L<=s;L++){let k=L/s,U=k*l+a,V=Math.sin(U),H=Math.cos(U);b.x=P*V,b.y=-R*n+g,b.z=P*H,f.push(b.x,b.y,b.z),_.set(V,A,H).normalize(),u.push(_.x,_.y,_.z),d.push(k,1-R),E.push(p++)}x.push(E)}for(let v=0;v<s;v++)for(let E=0;E<r;E++){let R=x[E][v],P=x[E+1][v],L=x[E+1][v+1],k=x[E][v+1];(e>0||E!==0)&&(h.push(R,P,k),T+=3),(t>0||E!==r-1)&&(h.push(P,L,k),T+=3)}c.addGroup(m,T,0),m+=T}function S(_){let b=p,T=new xe,A=new D,v=0,E=_===!0?e:t,R=_===!0?1:-1;for(let L=1;L<=s;L++)f.push(0,g*R,0),u.push(0,R,0),d.push(.5,.5),p++;let P=p;for(let L=0;L<=s;L++){let U=L/s*l+a,V=Math.cos(U),H=Math.sin(U);A.x=E*H,A.y=g*R,A.z=E*V,f.push(A.x,A.y,A.z),u.push(0,R,0),T.x=V*.5+.5,T.y=H*.5*R+.5,d.push(T.x,T.y),p++}for(let L=0;L<s;L++){let k=b+L,U=P+L;_===!0?h.push(U,U+1,k):h.push(U+1,U,k),v+=3}c.addGroup(m,v,_===!0?1:2),m+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Hi=class i extends ot{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ka=class i extends gt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new nt(r,3)),this.setAttribute("normal",new nt(r.slice(),3)),this.setAttribute("uv",new nt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let S=new D,_=new D,b=new D;for(let T=0;T<t.length;T+=3)d(t[T+0],S),d(t[T+1],_),d(t[T+2],b),l(S,_,b,y)}function l(y,S,_,b){let T=b+1,A=[];for(let v=0;v<=T;v++){A[v]=[];let E=y.clone().lerp(_,v/T),R=S.clone().lerp(_,v/T),P=T-v;for(let L=0;L<=P;L++)L===0&&v===T?A[v][L]=E:A[v][L]=E.clone().lerp(R,L/P)}for(let v=0;v<T;v++)for(let E=0;E<2*(T-v)-1;E++){let R=Math.floor(E/2);E%2===0?(u(A[v][R+1]),u(A[v+1][R]),u(A[v][R])):(u(A[v][R+1]),u(A[v+1][R+1]),u(A[v+1][R]))}}function c(y){let S=new D;for(let _=0;_<r.length;_+=3)S.x=r[_+0],S.y=r[_+1],S.z=r[_+2],S.normalize().multiplyScalar(y),r[_+0]=S.x,r[_+1]=S.y,r[_+2]=S.z}function h(){let y=new D;for(let S=0;S<r.length;S+=3){y.x=r[S+0],y.y=r[S+1],y.z=r[S+2];let _=g(y)/2/Math.PI+.5,b=m(y)/Math.PI+.5;o.push(_,1-b)}p(),f()}function f(){for(let y=0;y<o.length;y+=6){let S=o[y+0],_=o[y+2],b=o[y+4],T=Math.max(S,_,b),A=Math.min(S,_,b);T>.9&&A<.1&&(S<.2&&(o[y+0]+=1),_<.2&&(o[y+2]+=1),b<.2&&(o[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function d(y,S){let _=y*3;S.x=e[_+0],S.y=e[_+1],S.z=e[_+2]}function p(){let y=new D,S=new D,_=new D,b=new D,T=new xe,A=new xe,v=new xe;for(let E=0,R=0;E<r.length;E+=9,R+=6){y.set(r[E+0],r[E+1],r[E+2]),S.set(r[E+3],r[E+4],r[E+5]),_.set(r[E+6],r[E+7],r[E+8]),T.set(o[R+0],o[R+1]),A.set(o[R+2],o[R+3]),v.set(o[R+4],o[R+5]),b.copy(y).add(S).add(_).divideScalar(3);let P=g(b);x(T,R+0,y,P),x(A,R+2,S,P),x(v,R+4,_,P)}}function x(y,S,_,b){b<0&&y.x===1&&(o[S]=y.x-1),_.x===0&&_.z===0&&(o[S]=b/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var Hn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){tt("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,d=(o-h)/u;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new xe:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new D,s=[],r=[],o=[],a=new D,l=new ut;for(let d=0;d<=e;d++){let p=d/e;s[d]=this.getTangentAt(p,new D)}r[0]=new D,o[0]=new D;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(ft(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(ft(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],d*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},hr=class extends Hn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new xe){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Va=class extends hr{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function vh(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+f)+(l-a)/f;u*=h,d*=h,s(o,a,u,d)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Mu=new D,Su=new D,Hc=new vh,zc=new vh,Gc=new vh,Ot=class extends Hn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new D){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Su.subVectors(s[0],s[1]).add(s[0]),c=Su);let f=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Mu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Mu),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(h),d);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),Hc.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,p,x,g),zc.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,p,x,g),Gc.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,p,x,g)}else this.curveType==="catmullrom"&&(Hc.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),zc.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),Gc.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(Hc.calc(l),zc.calc(l),Gc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Eu(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function Yf(i,e){let t=1-i;return t*t*e}function Zf(i,e){return 2*(1-i)*i*e}function $f(i,e){return i*i*e}function Gr(i,e,t,n){return Yf(i,e)+Zf(i,t)+$f(i,n)}function Jf(i,e){let t=1-i;return t*t*t*e}function Kf(i,e){let t=1-i;return 3*t*t*i*e}function Qf(i,e){return 3*(1-i)*i*i*e}function jf(i,e){return i*i*i*e}function kr(i,e,t,n,s){return Jf(i,e)+Kf(i,t)+Qf(i,n)+jf(i,s)}var so=class extends Hn{constructor(e=new xe,t=new xe,n=new xe,s=new xe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new xe){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(kr(e,s.x,r.x,o.x,a.x),kr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Wa=class extends Hn{constructor(e=new D,t=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new D){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(kr(e,s.x,r.x,o.x,a.x),kr(e,s.y,r.y,o.y,a.y),kr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ro=class extends Hn{constructor(e=new xe,t=new xe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new xe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new xe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xa=class extends Hn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},oo=class extends Hn{constructor(e=new xe,t=new xe,n=new xe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new xe){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Gr(e,s.x,r.x,o.x),Gr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ao=class extends Hn{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Gr(e,s.x,r.x,o.x),Gr(e,s.y,r.y,o.y),Gr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},lo=class extends Hn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new xe){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(Eu(a,l.x,c.x,h.x,f.x),Eu(a,l.y,c.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new xe().fromArray(s))}return this}},qa=Object.freeze({__proto__:null,ArcCurve:Va,CatmullRomCurve3:Ot,CubicBezierCurve:so,CubicBezierCurve3:Wa,EllipseCurve:hr,LineCurve:ro,LineCurve3:Xa,QuadraticBezierCurve:oo,QuadraticBezierCurve3:ao,SplineCurve:lo}),Ya=class extends Hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new qa[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new qa[s.type]().fromJSON(s))}return this}},ys=class extends Ya{constructor(e){super(),this.type="Path",this.currentPoint=new xe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ro(this.currentPoint.clone(),new xe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new oo(this.currentPoint.clone(),new xe(e,t),new xe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new so(this.currentPoint.clone(),new xe(e,t),new xe(n,s),new xe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new lo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new hr(e,t,n,s,r,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Mi=class extends ys{constructor(e){super(e),this.uuid=pi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new ys().fromJSON(s))}return this}};function ep(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=pd(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=rp(i,e,r,t)),i.length>80*t){a=i[0],l=i[1];let h=a,f=l;for(let u=t;u<s;u+=t){let d=i[u],p=i[u+1];d<a&&(a=d),p<l&&(l=p),d>h&&(h=d),p>f&&(f=p)}c=Math.max(h-a,f-l),c=c!==0?32767/c:0}return co(r,o,t,a,l,c,0),o}function pd(i,e,t,n,s){let r;if(s===gp(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=bu(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=bu(o/n|0,i[o],i[o+1],r);return r&&ur(r,r.next)&&(uo(r),r=r.next),r}function Ms(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ur(t,t.next)||Wt(t.prev,t,t.next)===0)){if(uo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function co(i,e,t,n,s,r,o){if(!i)return;!o&&r&&hp(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?np(i,n,s,r):tp(i)){e.push(l.i,i.i,c.i),uo(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=ip(Ms(i),e),co(i,e,t,n,s,r,2)):o===2&&sp(i,e,t,n,s,r):co(Ms(i),e,t,n,s,r,1);break}}}function tp(i){let e=i.prev,t=i,n=i.next;if(Wt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(s,r,o),f=Math.min(a,l,c),u=Math.max(s,r,o),d=Math.max(a,l,c),p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=u&&p.y>=f&&p.y<=d&&Or(s,a,r,l,o,c,p.x,p.y)&&Wt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function np(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Wt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,f=r.y,u=o.y,d=Math.min(a,l,c),p=Math.min(h,f,u),x=Math.max(a,l,c),g=Math.max(h,f,u),m=$c(d,p,e,t,n),y=$c(x,g,e,t,n),S=i.prevZ,_=i.nextZ;for(;S&&S.z>=m&&_&&_.z<=y;){if(S.x>=d&&S.x<=x&&S.y>=p&&S.y<=g&&S!==s&&S!==o&&Or(a,h,l,f,c,u,S.x,S.y)&&Wt(S.prev,S,S.next)>=0||(S=S.prevZ,_.x>=d&&_.x<=x&&_.y>=p&&_.y<=g&&_!==s&&_!==o&&Or(a,h,l,f,c,u,_.x,_.y)&&Wt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;S&&S.z>=m;){if(S.x>=d&&S.x<=x&&S.y>=p&&S.y<=g&&S!==s&&S!==o&&Or(a,h,l,f,c,u,S.x,S.y)&&Wt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;_&&_.z<=y;){if(_.x>=d&&_.x<=x&&_.y>=p&&_.y<=g&&_!==s&&_!==o&&Or(a,h,l,f,c,u,_.x,_.y)&&Wt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function ip(i,e){let t=i;do{let n=t.prev,s=t.next.next;!ur(n,s)&&gd(n,t,t.next,s)&&ho(n,s)&&ho(s,n)&&(e.push(n.i,t.i,s.i),uo(t),uo(t.next),t=i=s),t=t.next}while(t!==i);return Ms(t)}function sp(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&fp(o,a)){let l=xd(o,a);o=Ms(o,o.next),l=Ms(l,l.next),co(o,e,t,n,s,r,0),co(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function rp(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=pd(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(dp(c))}s.sort(op);for(let r=0;r<s.length;r++)t=ap(s[r],t);return t}function op(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function ap(i,e){let t=lp(i,e);if(!t)return e;let n=xd(t,i);return Ms(n,n.next),Ms(t,t.next)}function lp(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(ur(i,t))return t;do{if(ur(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r&&(r=f,o=t.x<t.next.x?t:t.next,f===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&md(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let f=Math.abs(s-t.y)/(n-t.x);ho(t,i)&&(f<h||f===h&&(t.x>o.x||t.x===o.x&&cp(o,t)))&&(o=t,h=f)}t=t.next}while(t!==a);return o}function cp(i,e){return Wt(i.prev,i,e.prev)<0&&Wt(e.next,i,i.next)<0}function hp(i,e,t,n){let s=i;do s.z===0&&(s.z=$c(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,up(s)}function up(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function $c(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function dp(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function md(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Or(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&md(i,e,t,n,s,r,o,a)}function fp(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!pp(i,e)&&(ho(i,e)&&ho(e,i)&&mp(i,e)&&(Wt(i.prev,i,e.prev)||Wt(i,e.prev,e))||ur(i,e)&&Wt(i.prev,i,i.next)>0&&Wt(e.prev,e,e.next)>0)}function Wt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ur(i,e){return i.x===e.x&&i.y===e.y}function gd(i,e,t,n){let s=Sa(Wt(i,e,t)),r=Sa(Wt(i,e,n)),o=Sa(Wt(t,n,i)),a=Sa(Wt(t,n,e));return!!(s!==r&&o!==a||s===0&&Ma(i,t,e)||r===0&&Ma(i,n,e)||o===0&&Ma(t,i,n)||a===0&&Ma(t,e,n))}function Ma(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Sa(i){return i>0?1:i<0?-1:0}function pp(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&gd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ho(i,e){return Wt(i.prev,i,i.next)<0?Wt(i,e,i.next)>=0&&Wt(i,i.prev,e)>=0:Wt(i,e,i.prev)<0||Wt(i,i.next,e)<0}function mp(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function xd(i,e){let t=Jc(i.i,i.x,i.y),n=Jc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function bu(i,e,t,n){let s=Jc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function uo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Jc(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function gp(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Kc=class{static triangulate(e,t,n=2){return ep(e,t,n)}},fi=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Tu(e),wu(n,e);let o=e.length;t.forEach(Tu);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,wu(n,t[l]);let a=Kc.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Tu(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function wu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var fo=class i extends gt{constructor(e=new Mi([new xe(.5,.5),new xe(-.5,.5),new xe(-.5,-.5),new xe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new nt(s,3)),this.setAttribute("uv",new nt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:xp,S,_=!1,b,T,A,v;if(m){S=m.getSpacedPoints(h),_=!0,u=!1;let fe=m.isCatmullRomCurve3?m.closed:!1;b=m.computeFrenetFrames(h,fe),T=new D,A=new D,v=new D}u||(g=0,d=0,p=0,x=0);let E=a.extractPoints(c),R=E.shape,P=E.holes;if(!fi.isClockWise(R)){R=R.reverse();for(let fe=0,me=P.length;fe<me;fe++){let ve=P[fe];fi.isClockWise(ve)&&(P[fe]=ve.reverse())}}function k(fe){let ve=10000000000000001e-36,Se=fe[0];for(let z=1;z<=fe.length;z++){let ye=z%fe.length,Ae=fe[ye],Ie=Ae.x-Se.x,Ce=Ae.y-Se.y,F=Ie*Ie+Ce*Ce,Ge=Math.max(Math.abs(Ae.x),Math.abs(Ae.y),Math.abs(Se.x),Math.abs(Se.y)),it=ve*Ge*Ge;if(F<=it){fe.splice(ye,1),z--;continue}Se=Ae}}k(R),P.forEach(k);let U=P.length,V=R;for(let fe=0;fe<U;fe++){let me=P[fe];R=R.concat(me)}function H(fe,me,ve){return me||rt("ExtrudeGeometry: vec does not exist"),fe.clone().addScaledVector(me,ve)}let Y=R.length;function K(fe,me,ve){let Se,z,ye,Ae=fe.x-me.x,Ie=fe.y-me.y,Ce=ve.x-fe.x,F=ve.y-fe.y,Ge=Ae*Ae+Ie*Ie,it=Ae*F-Ie*Ce;if(Math.abs(it)>Number.EPSILON){let C=Math.sqrt(Ge),M=Math.sqrt(Ce*Ce+F*F),X=me.x-Ie/C,q=me.y+Ae/C,re=ve.x-F/M,Me=ve.y+Ce/M,Pe=((re-X)*F-(Me-q)*Ce)/(Ae*F-Ie*Ce);Se=X+Ae*Pe-fe.x,z=q+Ie*Pe-fe.y;let he=Se*Se+z*z;if(he<=2)return new xe(Se,z);ye=Math.sqrt(he/2)}else{let C=!1;Ae>Number.EPSILON?Ce>Number.EPSILON&&(C=!0):Ae<-Number.EPSILON?Ce<-Number.EPSILON&&(C=!0):Math.sign(Ie)===Math.sign(F)&&(C=!0),C?(Se=-Ie,z=Ae,ye=Math.sqrt(Ge)):(Se=Ae,z=Ie,ye=Math.sqrt(Ge/2))}return new xe(Se/ye,z/ye)}let Z=[];for(let fe=0,me=V.length,ve=me-1,Se=fe+1;fe<me;fe++,ve++,Se++)ve===me&&(ve=0),Se===me&&(Se=0),Z[fe]=K(V[fe],V[ve],V[Se]);let $=[],ne,de=Z.concat();for(let fe=0,me=U;fe<me;fe++){let ve=P[fe];ne=[];for(let Se=0,z=ve.length,ye=z-1,Ae=Se+1;Se<z;Se++,ye++,Ae++)ye===z&&(ye=0),Ae===z&&(Ae=0),ne[Se]=K(ve[Se],ve[ye],ve[Ae]);$.push(ne),de=de.concat(ne)}let Ee;if(g===0)Ee=fi.triangulateShape(V,P);else{let fe=[],me=[];for(let ve=0;ve<g;ve++){let Se=ve/g,z=d*Math.cos(Se*Math.PI/2),ye=p*Math.sin(Se*Math.PI/2)+x;for(let Ae=0,Ie=V.length;Ae<Ie;Ae++){let Ce=H(V[Ae],Z[Ae],ye);we(Ce.x,Ce.y,-z),Se===0&&fe.push(Ce)}for(let Ae=0,Ie=U;Ae<Ie;Ae++){let Ce=P[Ae];ne=$[Ae];let F=[];for(let Ge=0,it=Ce.length;Ge<it;Ge++){let C=H(Ce[Ge],ne[Ge],ye);we(C.x,C.y,-z),Se===0&&F.push(C)}Se===0&&me.push(F)}}Ee=fi.triangulateShape(fe,me)}let Ye=Ee.length,Ve=p+x;for(let fe=0;fe<Y;fe++){let me=u?H(R[fe],de[fe],Ve):R[fe];_?(A.copy(b.normals[0]).multiplyScalar(me.x),T.copy(b.binormals[0]).multiplyScalar(me.y),v.copy(S[0]).add(A).add(T),we(v.x,v.y,v.z)):we(me.x,me.y,0)}for(let fe=1;fe<=h;fe++)for(let me=0;me<Y;me++){let ve=u?H(R[me],de[me],Ve):R[me];_?(A.copy(b.normals[fe]).multiplyScalar(ve.x),T.copy(b.binormals[fe]).multiplyScalar(ve.y),v.copy(S[fe]).add(A).add(T),we(v.x,v.y,v.z)):we(ve.x,ve.y,f/h*fe)}for(let fe=g-1;fe>=0;fe--){let me=fe/g,ve=d*Math.cos(me*Math.PI/2),Se=p*Math.sin(me*Math.PI/2)+x;for(let z=0,ye=V.length;z<ye;z++){let Ae=H(V[z],Z[z],Se);we(Ae.x,Ae.y,f+ve)}for(let z=0,ye=P.length;z<ye;z++){let Ae=P[z];ne=$[z];for(let Ie=0,Ce=Ae.length;Ie<Ce;Ie++){let F=H(Ae[Ie],ne[Ie],Se);_?we(F.x,F.y+S[h-1].y,S[h-1].x+ve):we(F.x,F.y,f+ve)}}}Je(),oe();function Je(){let fe=s.length/3;if(u){let me=0,ve=Y*me;for(let Se=0;Se<Ye;Se++){let z=Ee[Se];He(z[2]+ve,z[1]+ve,z[0]+ve)}me=h+g*2,ve=Y*me;for(let Se=0;Se<Ye;Se++){let z=Ee[Se];He(z[0]+ve,z[1]+ve,z[2]+ve)}}else{for(let me=0;me<Ye;me++){let ve=Ee[me];He(ve[2],ve[1],ve[0])}for(let me=0;me<Ye;me++){let ve=Ee[me];He(ve[0]+Y*h,ve[1]+Y*h,ve[2]+Y*h)}}n.addGroup(fe,s.length/3-fe,0)}function oe(){let fe=s.length/3,me=0;ce(V,me),me+=V.length;for(let ve=0,Se=P.length;ve<Se;ve++){let z=P[ve];ce(z,me),me+=z.length}n.addGroup(fe,s.length/3-fe,1)}function ce(fe,me){let ve=fe.length;for(;--ve>=0;){let Se=ve,z=ve-1;z<0&&(z=fe.length-1);for(let ye=0,Ae=h+g*2;ye<Ae;ye++){let Ie=Y*ye,Ce=Y*(ye+1),F=me+Se+Ie,Ge=me+z+Ie,it=me+z+Ce,C=me+Se+Ce;be(F,Ge,it,C)}}}function we(fe,me,ve){l.push(fe),l.push(me),l.push(ve)}function He(fe,me,ve){Ze(fe),Ze(me),Ze(ve);let Se=s.length/3,z=y.generateTopUV(n,s,Se-3,Se-2,Se-1);et(z[0]),et(z[1]),et(z[2])}function be(fe,me,ve,Se){Ze(fe),Ze(me),Ze(Se),Ze(me),Ze(ve),Ze(Se);let z=s.length/3,ye=y.generateSideWallUV(n,s,z-6,z-3,z-2,z-1);et(ye[0]),et(ye[1]),et(ye[3]),et(ye[1]),et(ye[2]),et(ye[3])}function Ze(fe){s.push(l[fe*3+0]),s.push(l[fe*3+1]),s.push(l[fe*3+2])}function et(fe){r.push(fe.x),r.push(fe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return _p(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new qa[s.type]().fromJSON(s)),new i(n,e.options)}},xp={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new xe(r,o),new xe(a,l),new xe(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],f=e[n*3+2],u=e[s*3],d=e[s*3+1],p=e[s*3+2],x=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new xe(o,1-l),new xe(c,1-f),new xe(u,1-p),new xe(x,1-m)]:[new xe(a,1-l),new xe(h,1-f),new xe(d,1-p),new xe(g,1-m)]}};function _p(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var po=class i extends ka{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},zi=class i extends gt{constructor(e=[new xe(0,-.5),new xe(.5,0),new xe(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=ft(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,f=new D,u=new xe,d=new D,p=new D,x=new D,g=0,m=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:g=e[y+1].x-e[y].x,m=e[y+1].y-e[y].y,d.x=m*1,d.y=-g,d.z=m*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:g=e[y+1].x-e[y].x,m=e[y+1].y-e[y].y,d.x=m*1,d.y=-g,d.z=m*0,p.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(p)}for(let y=0;y<=t;y++){let S=n+y*h*s,_=Math.sin(S),b=Math.cos(S);for(let T=0;T<=e.length-1;T++){f.x=e[T].x*_,f.y=e[T].y,f.z=e[T].x*b,o.push(f.x,f.y,f.z),u.x=y/t,u.y=T/(e.length-1),a.push(u.x,u.y);let A=l[3*T+0]*_,v=l[3*T+1],E=l[3*T+0]*b;c.push(A,v,E)}}for(let y=0;y<t;y++)for(let S=0;S<e.length-1;S++){let _=S+y*e.length,b=_,T=_+e.length,A=_+e.length+1,v=_+1;r.push(b,T,v),r.push(A,v,T)}this.setIndex(r),this.setAttribute("position",new nt(o,3)),this.setAttribute("uv",new nt(a,2)),this.setAttribute("normal",new nt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Zt=class i extends gt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,f=e/a,u=t/l,d=[],p=[],x=[],g=[];for(let m=0;m<h;m++){let y=m*u-o;for(let S=0;S<c;S++){let _=S*f-r;p.push(_,-y,0),x.push(0,0,1),g.push(S/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){let S=y+c*m,_=y+c*(m+1),b=y+1+c*(m+1),T=y+1+c*m;d.push(S,_,T),d.push(_,b,T)}this.setIndex(d),this.setAttribute("position",new nt(p,3)),this.setAttribute("normal",new nt(x,3)),this.setAttribute("uv",new nt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var dr=class i extends gt{constructor(e=new Mi([new xe(0,.5),new xe(-.5,-.5),new xe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new nt(s,3)),this.setAttribute("normal",new nt(r,3)),this.setAttribute("uv",new nt(o,2));function c(h){let f=s.length/3,u=h.extractPoints(t),d=u.shape,p=u.holes;fi.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,m=p.length;g<m;g++){let y=p[g];fi.isClockWise(y)===!0&&(p[g]=y.reverse())}let x=fi.triangulateShape(d,p);for(let g=0,m=p.length;g<m;g++){let y=p[g];d=d.concat(y)}for(let g=0,m=d.length;g<m;g++){let y=d[g];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let g=0,m=x.length;g<m;g++){let y=x[g],S=y[0]+f,_=y[1]+f,b=y[2]+f;n.push(S,_,b),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return vp(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function vp(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var st=class i extends gt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new D,u=new D,d=[],p=[],x=[],g=[];for(let m=0;m<=n;m++){let y=[],S=m/n,_=o+S*a,b=e*Math.cos(_),T=Math.sqrt(e*e-b*b),A=0;m===0&&o===0?A=.5/t:m===n&&l===Math.PI&&(A=-.5/t);for(let v=0;v<=t;v++){let E=v/t,R=s+E*r;f.x=-T*Math.cos(R),f.y=b,f.z=T*Math.sin(R),p.push(f.x,f.y,f.z),u.copy(f).normalize(),x.push(u.x,u.y,u.z),g.push(E+A,1-S),y.push(c++)}h.push(y)}for(let m=0;m<n;m++)for(let y=0;y<t;y++){let S=h[m][y+1],_=h[m][y],b=h[m+1][y],T=h[m+1][y+1];(m!==0||o>0)&&d.push(S,_,T),(m!==n-1||l<Math.PI)&&d.push(_,b,T)}this.setIndex(d),this.setAttribute("position",new nt(p,3)),this.setAttribute("normal",new nt(x,3)),this.setAttribute("uv",new nt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Xt=class i extends gt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],f=[],u=new D,d=new D,p=new D;for(let x=0;x<=n;x++){let g=o+x/n*a;for(let m=0;m<=s;m++){let y=m/s*r;d.x=(e+t*Math.cos(g))*Math.cos(y),d.y=(e+t*Math.cos(g))*Math.sin(y),d.z=t*Math.sin(g),c.push(d.x,d.y,d.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),p.subVectors(d,u).normalize(),h.push(p.x,p.y,p.z),f.push(m/s),f.push(x/n)}}for(let x=1;x<=n;x++)for(let g=1;g<=s;g++){let m=(s+1)*x+g-1,y=(s+1)*(x-1)+g-1,S=(s+1)*(x-1)+g,_=(s+1)*x+g;l.push(m,y,_),l.push(y,S,_)}this.setIndex(l),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Gi=class i extends gt{constructor(e=new ao(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new D,l=new D,c=new xe,h=new D,f=[],u=[],d=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new nt(f,3)),this.setAttribute("normal",new nt(u,3)),this.setAttribute("uv",new nt(d,2));function x(){for(let S=0;S<t;S++)g(S);g(r===!1?t:0),y(),m()}function g(S){h=e.getPointAt(S/t,h);let _=o.normals[S],b=o.binormals[S];for(let T=0;T<=s;T++){let A=T/s*Math.PI*2,v=Math.sin(A),E=-Math.cos(A);l.x=E*_.x+v*b.x,l.y=E*_.y+v*b.y,l.z=E*_.z+v*b.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,f.push(a.x,a.y,a.z)}}function m(){for(let S=1;S<=t;S++)for(let _=1;_<=s;_++){let b=(s+1)*(S-1)+(_-1),T=(s+1)*S+(_-1),A=(s+1)*S+_,v=(s+1)*(S-1)+_;p.push(b,T,v),p.push(T,A,v)}}function y(){for(let S=0;S<=t;S++)for(let _=0;_<=s;_++)c.x=S/t,c.y=_/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new qa[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Rs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Au(s))s.isRenderTargetTexture?(tt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Au(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function En(i){let e={};for(let t=0;t<i.length;t++){let n=Rs(i[t]);for(let s in n)e[s]=n[s]}return e}function Au(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function yp(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function yh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}var Pn={clone:Rs,merge:En},Mp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Pt=class extends qn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mp,this.fragmentShader=Sp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rs(e.uniforms),this.uniformsGroups=yp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Re().setHex(s.value);break;case"v2":this.uniforms[n].value=new xe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new D().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Gt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ct().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ut().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},fr=class extends Pt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ke=class extends qn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bo,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},bt=class extends Ke{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ft(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var mo=class extends qn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bo,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};var Za=class extends qn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ju,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},$a=class extends qn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function $s(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function kc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var es=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ja=class extends es{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xc,endingEnd:Xc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case qc:r=e,a=2*t-n;break;case Yc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case qc:o=e,l=2*n-t;break;case Yc:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,p=(n-t)/(s-t),x=p*p,g=x*p,m=-u*g+2*u*x-u*p,y=(1+u)*g+(-1.5-2*u)*x+(-.5+u)*p+1,S=(-1-d)*g+(1.5+d)*x+.5*p,_=d*g-d*x;for(let b=0;b!==a;++b)r[b]=m*o[h+b]+y*o[c+b]+S*o[l+b]+_*o[f+b];return r}},Ka=class extends es{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),f=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*f+o[l+u]*h;return r}},Qa=class extends es{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ja=class extends es{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,f=this.outTangents;if(!h||!f){let p=(n-t)/(s-t),x=1-p;for(let g=0;g!==a;++g)r[g]=o[c+g]*x+o[l+g]*p;return r}let u=a*2,d=e-1;for(let p=0;p!==a;++p){let x=o[c+p],g=o[l+p],m=d*u+p*2,y=f[m],S=f[m+1],_=e*u+p*2,b=h[_],T=h[_+1],A=bp(n,t,y,b,s);r[p]=_d(A,x,S,T,g)}return r}};function _d(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Ep(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function bp(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=_d(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let l=Ep(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var zn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=$s(t,this.TimeBufferType),this.values=$s(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:$s(e.times,Array),values:$s(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),kc(e.settings)&&(n.settings={inTangents:$s(e.settings.inTangents,Array),outTangents:$s(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Qa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ka(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ja(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ja(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Vr:t=this.InterpolantFactoryMethodDiscrete;break;case Na:t=this.InterpolantFactoryMethodLinear;break;case Ta:t=this.InterpolantFactoryMethodSmooth;break;case Wc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return tt("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vr;case this.InterpolantFactoryMethodLinear:return Na;case this.InterpolantFactoryMethodSmooth:return Ta;case this.InterpolantFactoryMethodBezier:return Wc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;kc(this.settings)&&(Ru(this.settings.inTangents,e),Ru(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(rt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(rt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){rt("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){rt("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&uf(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){rt("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ta,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let f=a*n,u=f-n,d=f+n;for(let p=0;p!==n;++p){let x=t[f+p];if(x!==t[u+p]||x!==t[d+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*n,u=o*n;for(let d=0;d!==n;++d)t[u+d]=t[f+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,kc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Ru(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}zn.prototype.ValueTypeName="";zn.prototype.TimeBufferType=Float32Array;zn.prototype.ValueBufferType=Float32Array;zn.prototype.DefaultInterpolation=Na;var ts=class extends zn{constructor(e,t,n){super(e,t,n)}};ts.prototype.ValueTypeName="bool";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=Vr;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var el=class extends zn{constructor(e,t,n,s){super(e,t,n,s)}};el.prototype.ValueTypeName="color";var tl=class extends zn{constructor(e,t,n,s){super(e,t,n,s)}};tl.prototype.ValueTypeName="number";var nl=class extends es{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)fn.slerpFlat(r,0,o,c-a,o,c,l);return r}},go=class extends zn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new nl(this.times,this.values,this.getValueSize(),e)}};go.prototype.ValueTypeName="quaternion";go.prototype.InterpolantFactoryMethodSmooth=void 0;var ns=class extends zn{constructor(e,t,n){super(e,t,n)}};ns.prototype.ValueTypeName="string";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=Vr;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var il=class extends zn{constructor(e,t,n,s){super(e,t,n,s)}};il.prototype.ValueTypeName="vector";var sl=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],p=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},vd=new sl,rl=class{constructor(e){this.manager=e!==void 0?e:vd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};rl.DEFAULT_MATERIAL_NAME="__DEFAULT";var pr=class extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},xo=class extends pr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Vc=new ut,Cu=new D,Pu=new D,_o=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.mapType=Sn,this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lr,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Cu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Cu),Pu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Pu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Vc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Vc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===er||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Vc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ea=new D,ba=new fn,ui=new D,vo=class extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ea,ba,ui),ui.x===1&&ui.y===1&&ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ea,ba,ui.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ea,ba,ui),ui.x===1&&ui.y===1&&ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ea,ba,ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ji=new D,Iu=new xe,Du=new xe,dn=class extends vo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=_s*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Hr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _s*2*Math.atan(Math.tan(Hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ji.x,ji.y).multiplyScalar(-e/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ji.x,ji.y).multiplyScalar(-e/ji.z)}getViewSize(e,t){return this.getViewBounds(e,Iu,Du),t.subVectors(Du,Iu)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Hr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Qc=class extends _o{constructor(){super(new dn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=_s*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Ss=class extends pr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Qc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},jc=class extends _o{constructor(){super(new dn(90,1,.5,500)),this.isPointLightShadow=!0}},Yn=class extends pr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new jc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Es=class extends vo{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Js=-90,Ks=1,ol=class extends Lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new dn(Js,Ks,e,t);s.layers=this.layers,this.add(s);let r=new dn(Js,Ks,e,t);r.layers=this.layers,this.add(r);let o=new dn(Js,Ks,e,t);o.layers=this.layers,this.add(o);let a=new dn(Js,Ks,e,t);a.layers=this.layers,this.add(a);let l=new dn(Js,Ks,e,t);l.layers=this.layers,this.add(l);let c=new dn(Js,Ks,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===oi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===er)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},al=class extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},yo=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Tp.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Tp(){this._document.hidden===!1&&this.reset()}var Mh="\\[\\]\\.:\\/",wp=new RegExp("["+Mh+"]","g"),Sh="[^"+Mh+"]",Ap="[^"+Mh.replace("\\.","")+"]",Rp=/((?:WC+[\/:])*)/.source.replace("WC",Sh),Cp=/(WCOD+)?/.source.replace("WCOD",Ap),Pp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sh),Ip=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sh),Dp=new RegExp("^"+Rp+Cp+Pp+Ip+"$"),Lp=["material","materials","bones","map"],eh=class{constructor(e,t,n){let s=n||Ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ft=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(wp,"")}static parseTrackName(e){let t=Dp.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Lp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){tt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){rt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){rt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){rt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){rt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){rt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;rt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ft.Composite=eh;Ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ft.prototype.GetterByBindingType=[Ft.prototype._getValue_direct,Ft.prototype._getValue_array,Ft.prototype._getValue_arrayElement,Ft.prototype._getValue_toArray];Ft.prototype.SetterByBindingTypeAndVersioning=[[Ft.prototype._setValue_direct,Ft.prototype._setValue_direct_setNeedsUpdate,Ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_array,Ft.prototype._setValue_array_setNeedsUpdate,Ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_arrayElement,Ft.prototype._setValue_arrayElement_setNeedsUpdate,Ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_fromArray,Ft.prototype._setValue_fromArray_setNeedsUpdate,Ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var _v=new Float32Array(1);var Rh=class Rh{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Rh.prototype.isMatrix2=!0;var th=Rh;function Eh(i,e,t,n){let s=Up(n);switch(t){case fh:return i*e;case gl:return i*e/s.components*s.byteLength;case xl:return i*e/s.components*s.byteLength;case as:return i*e*2/s.components*s.byteLength;case _l:return i*e*2/s.components*s.byteLength;case ph:return i*e*3/s.components*s.byteLength;case Ln:return i*e*4/s.components*s.byteLength;case vl:return i*e*4/s.components*s.byteLength;case Io:case Do:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Lo:case Uo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ml:case El:return Math.max(i,16)*Math.max(e,8)/4;case yl:case Sl:return Math.max(i,8)*Math.max(e,8)/2;case bl:case Tl:case Al:case Rl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case wl:case No:case Cl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Il:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Dl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ll:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ul:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Nl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Fl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Bl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ol:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Hl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case zl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Gl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case kl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Vl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Wl:case Xl:case ql:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Yl:case Zl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Fo:case $l:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Up(i){switch(i){case Sn:case ch:return{byteLength:1,components:1};case xr:case hh:case $t:return{byteLength:2,components:1};case pl:case ml:return{byteLength:2,components:4};case li:case fl:case $n:return{byteLength:4,components:1};case uh:case dh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?tt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Gd(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Hp(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,h);else{f.sort((d,p)=>d.start-p.start);let u=0;for(let d=1;d<f.length;d++){let p=f[u],x=f[d];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++u,f[u]=x)}f.length=u+1;for(let d=0,p=f.length;d<p;d++){let x=f[d];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var zp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gp=`#ifdef USE_ALPHAHASH
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
#endif`,kp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qp=`#ifdef USE_AOMAP
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
#endif`,Yp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zp=`#ifdef USE_BATCHING
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
#endif`,$p=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jp=`#ifdef USE_IRIDESCENCE
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
#endif`,e0=`#ifdef USE_BUMPMAP
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
#endif`,t0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,n0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,i0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,s0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,r0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,o0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,a0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,l0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,c0=`#define PI 3.141592653589793
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
} // validated`,h0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,u0=`vec3 transformedNormal = objectNormal;
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
#endif`,d0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,f0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,p0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,m0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,g0="gl_FragColor = linearToOutputTexel( gl_FragColor );",x0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_0=`#ifdef USE_ENVMAP
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
#endif`,v0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,y0=`#ifdef USE_ENVMAP
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
#endif`,M0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,S0=`#ifdef USE_ENVMAP
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
#endif`,E0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,b0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,T0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,w0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,A0=`#ifdef USE_GRADIENTMAP
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
}`,R0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,C0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,P0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,I0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,D0=`#ifdef USE_ENVMAP
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
#endif`,L0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,U0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,N0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,F0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,B0=`PhysicalMaterial material;
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
#endif`,O0=`uniform sampler2D dfgLUT;
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
}`,H0=`
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
#endif`,z0=`#if defined( RE_IndirectDiffuse )
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
#endif`,G0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,k0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,V0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,W0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,q0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Y0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Z0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,J0=`#if defined( USE_POINTS_UV )
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
#endif`,K0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Q0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,j0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,em=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nm=`#ifdef USE_MORPHTARGETS
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
#endif`,im=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,rm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,om=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,cm=`#ifdef USE_NORMALMAP
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
#endif`,hm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,um=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_m=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ym=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Em=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Tm=`float getShadowMask() {
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
}`,wm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Am=`#ifdef USE_SKINNING
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
#endif`,Rm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cm=`#ifdef USE_SKINNING
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
#endif`,Pm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Im=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Um=`#ifdef USE_TRANSMISSION
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
#endif`,Nm=`#ifdef USE_TRANSMISSION
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
#endif`,Fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,zm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gm=`uniform sampler2D t2D;
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
}`,km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qm=`#include <common>
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
}`,Ym=`#if DEPTH_PACKING == 3200
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
}`,Zm=`#define DISTANCE
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
}`,$m=`#define DISTANCE
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
}`,Jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Km=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qm=`uniform float scale;
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
}`,jm=`uniform vec3 diffuse;
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
}`,eg=`#include <common>
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
}`,tg=`uniform vec3 diffuse;
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
}`,ng=`#define LAMBERT
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
}`,ig=`#define LAMBERT
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
}`,sg=`#define MATCAP
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
}`,rg=`#define MATCAP
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
}`,og=`#define NORMAL
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
}`,ag=`#define NORMAL
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
}`,lg=`#define PHONG
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
}`,cg=`#define PHONG
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
}`,hg=`#define STANDARD
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
}`,ug=`#define STANDARD
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
}`,dg=`#define TOON
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
}`,fg=`#define TOON
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
}`,pg=`uniform float size;
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
}`,mg=`uniform vec3 diffuse;
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
}`,gg=`#include <common>
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
}`,xg=`uniform vec3 color;
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
}`,_g=`uniform float rotation;
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
}`,vg=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:zp,alphahash_pars_fragment:Gp,alphamap_fragment:kp,alphamap_pars_fragment:Vp,alphatest_fragment:Wp,alphatest_pars_fragment:Xp,aomap_fragment:qp,aomap_pars_fragment:Yp,batching_pars_vertex:Zp,batching_vertex:$p,begin_vertex:Jp,beginnormal_vertex:Kp,bsdfs:Qp,iridescence_fragment:jp,bumpmap_pars_fragment:e0,clipping_planes_fragment:t0,clipping_planes_pars_fragment:n0,clipping_planes_pars_vertex:i0,clipping_planes_vertex:s0,color_fragment:r0,color_pars_fragment:o0,color_pars_vertex:a0,color_vertex:l0,common:c0,cube_uv_reflection_fragment:h0,defaultnormal_vertex:u0,displacementmap_pars_vertex:d0,displacementmap_vertex:f0,emissivemap_fragment:p0,emissivemap_pars_fragment:m0,colorspace_fragment:g0,colorspace_pars_fragment:x0,envmap_fragment:_0,envmap_common_pars_fragment:v0,envmap_pars_fragment:y0,envmap_pars_vertex:M0,envmap_physical_pars_fragment:D0,envmap_vertex:S0,fog_vertex:E0,fog_pars_vertex:b0,fog_fragment:T0,fog_pars_fragment:w0,gradientmap_pars_fragment:A0,lightmap_pars_fragment:R0,lights_lambert_fragment:C0,lights_lambert_pars_fragment:P0,lights_pars_begin:I0,lights_toon_fragment:L0,lights_toon_pars_fragment:U0,lights_phong_fragment:N0,lights_phong_pars_fragment:F0,lights_physical_fragment:B0,lights_physical_pars_fragment:O0,lights_fragment_begin:H0,lights_fragment_maps:z0,lights_fragment_end:G0,lightprobes_pars_fragment:k0,logdepthbuf_fragment:V0,logdepthbuf_pars_fragment:W0,logdepthbuf_pars_vertex:X0,logdepthbuf_vertex:q0,map_fragment:Y0,map_pars_fragment:Z0,map_particle_fragment:$0,map_particle_pars_fragment:J0,metalnessmap_fragment:K0,metalnessmap_pars_fragment:Q0,morphinstance_vertex:j0,morphcolor_vertex:em,morphnormal_vertex:tm,morphtarget_pars_vertex:nm,morphtarget_vertex:im,normal_fragment_begin:sm,normal_fragment_maps:rm,normal_pars_fragment:om,normal_pars_vertex:am,normal_vertex:lm,normalmap_pars_fragment:cm,clearcoat_normal_fragment_begin:hm,clearcoat_normal_fragment_maps:um,clearcoat_pars_fragment:dm,iridescence_pars_fragment:fm,opaque_fragment:pm,packing:mm,premultiplied_alpha_fragment:gm,project_vertex:xm,dithering_fragment:_m,dithering_pars_fragment:vm,roughnessmap_fragment:ym,roughnessmap_pars_fragment:Mm,shadowmap_pars_fragment:Sm,shadowmap_pars_vertex:Em,shadowmap_vertex:bm,shadowmask_pars_fragment:Tm,skinbase_vertex:wm,skinning_pars_vertex:Am,skinning_vertex:Rm,skinnormal_vertex:Cm,specularmap_fragment:Pm,specularmap_pars_fragment:Im,tonemapping_fragment:Dm,tonemapping_pars_fragment:Lm,transmission_fragment:Um,transmission_pars_fragment:Nm,uv_pars_fragment:Fm,uv_pars_vertex:Bm,uv_vertex:Om,worldpos_vertex:Hm,background_vert:zm,background_frag:Gm,backgroundCube_vert:km,backgroundCube_frag:Vm,cube_vert:Wm,cube_frag:Xm,depth_vert:qm,depth_frag:Ym,distance_vert:Zm,distance_frag:$m,equirect_vert:Jm,equirect_frag:Km,linedashed_vert:Qm,linedashed_frag:jm,meshbasic_vert:eg,meshbasic_frag:tg,meshlambert_vert:ng,meshlambert_frag:ig,meshmatcap_vert:sg,meshmatcap_frag:rg,meshnormal_vert:og,meshnormal_frag:ag,meshphong_vert:lg,meshphong_frag:cg,meshphysical_vert:hg,meshphysical_frag:ug,meshtoon_vert:dg,meshtoon_frag:fg,points_vert:pg,points_frag:mg,shadow_vert:gg,shadow_frag:xg,sprite_vert:_g,sprite_frag:vg},Be={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},bi={basic:{uniforms:En([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:En([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Re(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:En([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:En([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:En([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new Re(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:En([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:En([Be.points,Be.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:En([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:En([Be.common,Be.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:En([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:En([Be.sprite,Be.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:En([Be.common,Be.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:En([Be.lights,Be.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};bi.physical={uniforms:En([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};var Ql={r:0,b:0,g:0},yg=new ut,kd=new ct;kd.set(-1,0,0,0,1,0,0,0,1);function Mg(i,e,t,n,s,r){let o=new Re(0),a=s===!0?0:1,l,c,h=null,f=0,u=null;function d(y){let S=y.isScene===!0?y.background:null;if(S&&S.isTexture){let _=y.backgroundBlurriness>0;S=e.get(S,_)}return S}function p(y){let S=!1,_=d(y);_===null?g(o,a):_&&_.isColor&&(g(_,1),S=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(y,S){let _=d(S);_&&(_.isCubeTexture||_.mapping===Co)?(c===void 0&&(c=new De(new yt(1,1,1),new Pt({name:"BackgroundCubeMaterial",uniforms:Rs(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(yg.makeRotationFromEuler(S.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(kd),c.material.toneMapped=mt.getTransfer(_.colorSpace)!==Et,(h!==_||f!==_.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,f=_.version,u=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new De(new Zt(2,2),new Pt({name:"BackgroundMaterial",uniforms:Rs(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:is,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=mt.getTransfer(_.colorSpace)!==Et,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,f=_.version,u=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function g(y,S){y.getRGB(Ql,yh(i)),t.buffers.color.setClear(Ql.r,Ql.g,Ql.b,S,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,S=1){o.set(y),a=S,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,g(o,a)},render:p,addToRenderList:x,dispose:m}}function Sg(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(P,L,k,U,V){let H=!1,Y=f(P,U,k,L);r!==Y&&(r=Y,c(r.object)),H=d(P,U,k,V),H&&p(P,U,k,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,_(P,L,k,U),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function h(P){return i.deleteVertexArray(P)}function f(P,L,k,U){let V=U.wireframe===!0,H=n[L.id];H===void 0&&(H={},n[L.id]=H);let Y=P.isInstancedMesh===!0?P.id:0,K=H[Y];K===void 0&&(K={},H[Y]=K);let Z=K[k.id];Z===void 0&&(Z={},K[k.id]=Z);let $=Z[V];return $===void 0&&($=u(l()),Z[V]=$),$}function u(P){let L=[],k=[],U=[];for(let V=0;V<t;V++)L[V]=0,k[V]=0,U[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:U,object:P,attributes:{},index:null}}function d(P,L,k,U){let V=r.attributes,H=L.attributes,Y=0,K=k.getAttributes();for(let Z in K)if(K[Z].location>=0){let ne=V[Z],de=H[Z];if(de===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(de=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(de=P.instanceColor)),ne===void 0||ne.attribute!==de||de&&ne.data!==de.data)return!0;Y++}return r.attributesNum!==Y||r.index!==U}function p(P,L,k,U){let V={},H=L.attributes,Y=0,K=k.getAttributes();for(let Z in K)if(K[Z].location>=0){let ne=H[Z];ne===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(ne=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(ne=P.instanceColor));let de={};de.attribute=ne,ne&&ne.data&&(de.data=ne.data),V[Z]=de,Y++}r.attributes=V,r.attributesNum=Y,r.index=U}function x(){let P=r.newAttributes;for(let L=0,k=P.length;L<k;L++)P[L]=0}function g(P){m(P,0)}function m(P,L){let k=r.newAttributes,U=r.enabledAttributes,V=r.attributeDivisors;k[P]=1,U[P]===0&&(i.enableVertexAttribArray(P),U[P]=1),V[P]!==L&&(i.vertexAttribDivisor(P,L),V[P]=L)}function y(){let P=r.newAttributes,L=r.enabledAttributes;for(let k=0,U=L.length;k<U;k++)L[k]!==P[k]&&(i.disableVertexAttribArray(k),L[k]=0)}function S(P,L,k,U,V,H,Y){Y===!0?i.vertexAttribIPointer(P,L,k,V,H):i.vertexAttribPointer(P,L,k,U,V,H)}function _(P,L,k,U){x();let V=U.attributes,H=k.getAttributes(),Y=L.defaultAttributeValues;for(let K in H){let Z=H[K];if(Z.location>=0){let $=V[K];if($===void 0&&(K==="instanceMatrix"&&P.instanceMatrix&&($=P.instanceMatrix),K==="instanceColor"&&P.instanceColor&&($=P.instanceColor)),$!==void 0){let ne=$.normalized,de=$.itemSize,Ee=e.get($);if(Ee===void 0)continue;let Ye=Ee.buffer,Ve=Ee.type,Je=Ee.bytesPerElement,oe=Ve===i.INT||Ve===i.UNSIGNED_INT||$.gpuType===fl;if($.isInterleavedBufferAttribute){let ce=$.data,we=ce.stride,He=$.offset;if(ce.isInstancedInterleavedBuffer){for(let be=0;be<Z.locationSize;be++)m(Z.location+be,ce.meshPerAttribute);P.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let be=0;be<Z.locationSize;be++)g(Z.location+be);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let be=0;be<Z.locationSize;be++)S(Z.location+be,de/Z.locationSize,Ve,ne,we*Je,(He+de/Z.locationSize*be)*Je,oe)}else{if($.isInstancedBufferAttribute){for(let ce=0;ce<Z.locationSize;ce++)m(Z.location+ce,$.meshPerAttribute);P.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ce=0;ce<Z.locationSize;ce++)g(Z.location+ce);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let ce=0;ce<Z.locationSize;ce++)S(Z.location+ce,de/Z.locationSize,Ve,ne,de*Je,de/Z.locationSize*ce*Je,oe)}}else if(Y!==void 0){let ne=Y[K];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv(Z.location,ne);break;case 3:i.vertexAttrib3fv(Z.location,ne);break;case 4:i.vertexAttrib4fv(Z.location,ne);break;default:i.vertexAttrib1fv(Z.location,ne)}}}}y()}function b(){E();for(let P in n){let L=n[P];for(let k in L){let U=L[k];for(let V in U){let H=U[V];for(let Y in H)h(H[Y].object),delete H[Y];delete U[V]}}delete n[P]}}function T(P){if(n[P.id]===void 0)return;let L=n[P.id];for(let k in L){let U=L[k];for(let V in U){let H=U[V];for(let Y in H)h(H[Y].object),delete H[Y];delete U[V]}}delete n[P.id]}function A(P){for(let L in n){let k=n[L];for(let U in k){let V=k[U];if(V[P.id]===void 0)continue;let H=V[P.id];for(let Y in H)h(H[Y].object),delete H[Y];delete V[P.id]}}}function v(P){for(let L in n){let k=n[L],U=P.isInstancedMesh===!0?P.id:0,V=k[U];if(V!==void 0){for(let H in V){let Y=V[H];for(let K in Y)h(Y[K].object),delete Y[K];delete V[H]}delete k[U],Object.keys(k).length===0&&delete n[L]}}}function E(){R(),o=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:R,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:g,disableUnusedAttributes:y}}function Eg(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function bg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==Ln&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let v=A===$t&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Sn&&A!==$n&&!v&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(tt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&tt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:_,maxSamples:b,samples:T}}function Tg(i){let e=this,t=null,n=0,s=!1,r=!1,o=new si,a=new ct,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){let p=f.clippingPlanes,x=f.clipIntersection,g=f.clipShadows,m=i.get(f);if(!s||p===null||p.length===0||r&&!g)r?h(null):c();else{let y=r?0:n,S=y*4,_=m.clippingState||null;l.value=_,_=h(p,u,S,d);for(let b=0;b!==S;++b)_[b]=t[b];m.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,d,p){let x=f!==null?f.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=d+x*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let S=0,_=d;S!==x;++S,_+=4)o.copy(f[S]).applyMatrix4(y,a),o.normal.toArray(g,_),g[_+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}var vr=4,wg=6,Ag=20,Rg=256,Oo=new Es,yd=new Re,Ch=null,Ph=0,Ih=0,Dh=!1,Cg=new D,Cs=new D,Mr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=Cg}=r;Ch=this._renderer.getRenderTarget(),Ph=this._renderer.getActiveCubeFace(),Ih=this._renderer.getActiveMipmapLevel(),Dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ed(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ch,Ph,Ih),this._renderer.xr.enabled=Dh,e.scissorTest=!1,_r(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ss||e.mapping===As?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ch=this._renderer.getRenderTarget(),Ph=this._renderer.getActiveCubeFace(),Ih=this._renderer.getActiveMipmapLevel(),Dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:$t,format:Ln,colorSpace:Wr,depthBuffer:!1},s=Md(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Md(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Pg(r)),this._blurMaterial=Dg(r,e,t),this._ggxMaterial=Ig(r,e,t)}return s}_compileMaterial(e){let t=new De(new gt,e);this._renderer.compile(t,Oo)}_sceneToCubeUV(e,t,n,s,r){let l=new dn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(yd),f.toneMapping=ai,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new De(new yt,new xt({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,m=!1,y=e.background;y?y.isColor&&(g.color.copy(y),e.background=null,m=!0):(g.color.copy(yd),m=!0);for(let S=0;S<6;S++){let _=S%3;_===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[S],r.y,r.z)):_===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[S]));let b=this._cubeSize;_r(s,_*b,S>2?b:0,b,b),f.setRenderTarget(s),m&&f.render(x,l),f.render(e,l)}f.toneMapping=d,f.autoClear=u,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ss||e.mapping===As;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ed()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;_r(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Oo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,d=f*u,{_lodMax:p}=this,x=this._sizeLods[n],g=3*x*(n>p-vr?n-p+vr:0),m=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=p-t,_r(r,g,m,3*x,2*x),s.setRenderTarget(r),s.render(a,Oo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,_r(e,g,m,3*x,2*x),s.setRenderTarget(e),s.render(a,Oo)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],f=3*h*(s>this._lodMax-vr?s-this._lodMax+vr:0),u=4*(this._cubeSize-h);_r(t,f,u,3*h,2*h),o.setRenderTarget(t),o.render(l,Oo)}};function Pg(i){let e=[],t=[],n=i,s=i-vr+1+wg;for(let r=0;r<s;r++){let o=Math.pow(2,n);e.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,d=3,p=new Float32Array(d*u*f),x=new Float32Array(d*u*f);for(let m=0;m<f;m++){let y=m%3*2/3-1,S=m>2?0:-1,_=[y,S,0,y+2/3,S,0,y+2/3,S+1,0,y,S,0,y+2/3,S+1,0,y,S+1,0];p.set(_,d*u*m);for(let b=0;b<u;b++){let T=h[b*2]*2-1,A=h[b*2+1]*2-1;m===0?Cs.set(1,A,T):m===1?Cs.set(-T,1,-A):m===2?Cs.set(-T,A,1):m===3?Cs.set(-1,A,-T):m===4?Cs.set(-T,-1,A):Cs.set(T,A,-1),Cs.toArray(x,(m*u+b)*d)}}let g=new gt;g.setAttribute("position",new Ct(p,d)),g.setAttribute("outputDirection",new Ct(x,d)),t.push(new De(g,null)),n>vr&&n--}return{lodMeshes:t,sizeLods:e}}function Md(i,e,t){let n=new Bt(i,e,t);return n.texture.mapping=Co,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _r(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Ig(i,e,t){return new Pt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Rg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:nc(),fragmentShader:`

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
		`,blending:qt,depthTest:!1,depthWrite:!1})}function Dg(i,e,t){return new Pt({name:"SphericalGaussianBlur",defines:{SAMPLES:Ag,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:nc(),fragmentShader:`

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
		`,blending:qt,depthTest:!1,depthWrite:!1})}function Sd(){return new Pt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nc(),fragmentShader:`

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
		`,blending:qt,depthTest:!1,depthWrite:!1})}function Ed(){return new Pt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qt,depthTest:!1,depthWrite:!1})}function nc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ec=class extends Bt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new no(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new yt(5,5,5),r=new Pt({name:"CubemapFromEquirect",uniforms:Rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:qt});r.uniforms.tEquirect.value=t;let o=new De(s,r),a=t.minFilter;return t.minFilter===rs&&(t.minFilter=gn),new ol(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function Lg(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?o(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===hl||d===ul)if(e.has(u)){let p=e.get(u).texture;return a(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let x=new ec(p.height);return x.fromEquirectangularTexture(i,u),e.set(u,x),u.addEventListener("dispose",c),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let d=u.mapping,p=d===hl||d===ul,x=d===ss||d===As;if(p||x){let g=t.get(u),m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new Mr(i)),g=p?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),g.texture;if(g!==void 0)return g.texture;{let y=u.image;return p&&y&&y.height>0||x&&y&&l(y)?(n===null&&(n=new Mr(i)),g=p?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function a(u,d){return d===hl?u.mapping=ss:d===ul&&(u.mapping=As),u}function l(u){let d=0,p=6;for(let x=0;x<p;x++)u[x]!==void 0&&d++;return d===p}function c(u){let d=u.target;d.removeEventListener("dispose",c);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function Ug(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&xs("WebGLRenderer: "+n+" extension not supported."),s}}}function Ng(i,e,t,n){let s={},r=new WeakMap;function o(f){let u=f.target;u.index!==null&&e.remove(u.index);for(let p in u.attributes)e.remove(u.attributes[p]);u.removeEventListener("dispose",o),delete s[u.id];let d=r.get(u);d&&(e.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(f,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function l(f){let u=f.attributes;for(let d in u)e.update(u[d],i.ARRAY_BUFFER)}function c(f){let u=[],d=f.index,p=f.attributes.position,x=0;if(p===void 0)return;if(d!==null){let y=d.array;x=d.version;for(let S=0,_=y.length;S<_;S+=3){let b=y[S+0],T=y[S+1],A=y[S+2];u.push(b,T,T,A,A,b)}}else{let y=p.array;x=p.version;for(let S=0,_=y.length/3-1;S<_;S+=3){let b=S+0,T=S+1,A=S+2;u.push(b,T,T,A,A,b)}}let g=new(p.count>=65535?Qr:Kr)(u,1);g.version=x;let m=r.get(f);m&&e.remove(m),r.set(f,g)}function h(f){let u=r.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function Fg(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,u){i.drawElements(n,u,r,f*o),t.update(u,n,1)}function c(f,u,d){d!==0&&(i.drawElementsInstanced(n,u,r,f*o,d),t.update(u,n,d))}function h(f,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,d);let x=0;for(let g=0;g<d;g++)x+=u[g];t.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Bg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:rt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Og(i,e,t){let n=new WeakMap,s=new Gt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==f){let E=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],S=0;d===!0&&(S=1),p===!0&&(S=2),x===!0&&(S=3);let _=a.attributes.position.count*S,b=1;_>e.maxTextureSize&&(b=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let T=new Float32Array(_*b*4*f),A=new Zr(T,_,b,f);A.type=$n,A.needsUpdate=!0;let v=S*4;for(let R=0;R<f;R++){let P=g[R],L=m[R],k=y[R],U=_*b*4*R;for(let V=0;V<P.count;V++){let H=V*v;d===!0&&(s.fromBufferAttribute(P,V),T[U+H+0]=s.x,T[U+H+1]=s.y,T[U+H+2]=s.z,T[U+H+3]=0),p===!0&&(s.fromBufferAttribute(L,V),T[U+H+4]=s.x,T[U+H+5]=s.y,T[U+H+6]=s.z,T[U+H+7]=0),x===!0&&(s.fromBufferAttribute(k,V),T[U+H+8]=s.x,T[U+H+9]=s.y,T[U+H+10]=s.z,T[U+H+11]=k.itemSize===4?s.w:1)}}u={count:f,texture:A,size:new xe(_,b)},n.set(a,u),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Hg(i,e,t,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,f=c.geometry,u=e.get(c,f);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var zg={[Eo]:"LINEAR_TONE_MAPPING",[bo]:"REINHARD_TONE_MAPPING",[To]:"CINEON_TONE_MAPPING",[ws]:"ACES_FILMIC_TONE_MAPPING",[Ao]:"AGX_TONE_MAPPING",[Ro]:"NEUTRAL_TONE_MAPPING",[wo]:"CUSTOM_TONE_MAPPING"};function Gg(i,e,t,n,s,r){let o=new Bt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new gt;c.setAttribute("position",new nt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new nt([0,2,0,0,2,0],2));let h=new fr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new De(c,h),u=new Es(-1,1,1,-1,0,1),d=null,p=null,x=!1,g,m=null,y=[],S=!1;this.setSize=function(_,b){o.setSize(_,b),a!==null&&a.setSize(_,b),l!==null&&l.setSize(_,b);for(let T=0;T<y.length;T++){let A=y[T];A.setSize&&A.setSize(_,b)}},this.setEffects=function(_){y=_,S=y.length>0&&y[0].isRenderPass===!0;let b=o.width,T=o.height;y.length>0&&a===null&&(a=new Bt(b,T,{type:$t,depthBuffer:!1,stencilBuffer:!1}),l=new Bt(b,T,{type:$t,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<y.length;A++){let v=y[A];v.setSize&&v.setSize(b,T)}},this.begin=function(_,b){if(x||_.toneMapping===ai&&y.length===0)return!1;if(m=b,b!==null){let T=b.width,A=b.height;(o.width!==T||o.height!==A)&&this.setSize(T,A)}return S===!1&&_.setRenderTarget(o),g=_.toneMapping,_.toneMapping=ai,!0},this.hasRenderPass=function(){return S},this.end=function(_,b){_.toneMapping=g,x=!0;let T=o,A=a;for(let v=0;v<y.length;v++){let E=y[v];E.enabled!==!1&&(E.render(_,A,T,b),E.needsSwap!==!1&&(T=A,A=A===a?l:a))}if(d!==_.outputColorSpace||p!==_.toneMapping){d=_.outputColorSpace,p=_.toneMapping,h.defines={},mt.getTransfer(d)===Et&&(h.defines.SRGB_TRANSFER="");let v=zg[p];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,_.setRenderTarget(m),_.render(f,u),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Vd=new wn,Nh=new yi(1,1),Wd=new Zr,Xd=new Oa,qd=new no,bd=[],Td=[],wd=new Float32Array(16),Ad=new Float32Array(9),Rd=new Float32Array(4);function Sr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=bd[s];if(r===void 0&&(r=new Float32Array(s),bd[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function an(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ln(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ic(i,e){let t=Td[e];t===void 0&&(t=new Int32Array(e),Td[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function kg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Vg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;i.uniform2fv(this.addr,e),ln(t,e)}}function Wg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;i.uniform3fv(this.addr,e),ln(t,e)}}function Xg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;i.uniform4fv(this.addr,e),ln(t,e)}}function qg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(an(t,n))return;Rd.set(n),i.uniformMatrix2fv(this.addr,!1,Rd),ln(t,n)}}function Yg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(an(t,n))return;Ad.set(n),i.uniformMatrix3fv(this.addr,!1,Ad),ln(t,n)}}function Zg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(an(t,n))return;wd.set(n),i.uniformMatrix4fv(this.addr,!1,wd),ln(t,n)}}function $g(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Jg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;i.uniform2iv(this.addr,e),ln(t,e)}}function Kg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;i.uniform3iv(this.addr,e),ln(t,e)}}function Qg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;i.uniform4iv(this.addr,e),ln(t,e)}}function jg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ex(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;i.uniform2uiv(this.addr,e),ln(t,e)}}function tx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;i.uniform3uiv(this.addr,e),ln(t,e)}}function nx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;i.uniform4uiv(this.addr,e),ln(t,e)}}function ix(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Nh.compareFunction=t.isReversedDepthBuffer()?Kl:Jl,r=Nh):r=Vd,t.setTexture2D(e||r,s)}function sx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Xd,s)}function rx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||qd,s)}function ox(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Wd,s)}function ax(i){switch(i){case 5126:return kg;case 35664:return Vg;case 35665:return Wg;case 35666:return Xg;case 35674:return qg;case 35675:return Yg;case 35676:return Zg;case 5124:case 35670:return $g;case 35667:case 35671:return Jg;case 35668:case 35672:return Kg;case 35669:case 35673:return Qg;case 5125:return jg;case 36294:return ex;case 36295:return tx;case 36296:return nx;case 35678:case 36198:case 36298:case 36306:case 35682:return ix;case 35679:case 36299:case 36307:return sx;case 35680:case 36300:case 36308:case 36293:return rx;case 36289:case 36303:case 36311:case 36292:return ox}}function lx(i,e){i.uniform1fv(this.addr,e)}function cx(i,e){let t=Sr(e,this.size,2);i.uniform2fv(this.addr,t)}function hx(i,e){let t=Sr(e,this.size,3);i.uniform3fv(this.addr,t)}function ux(i,e){let t=Sr(e,this.size,4);i.uniform4fv(this.addr,t)}function dx(i,e){let t=Sr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function fx(i,e){let t=Sr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function px(i,e){let t=Sr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function mx(i,e){i.uniform1iv(this.addr,e)}function gx(i,e){i.uniform2iv(this.addr,e)}function xx(i,e){i.uniform3iv(this.addr,e)}function _x(i,e){i.uniform4iv(this.addr,e)}function vx(i,e){i.uniform1uiv(this.addr,e)}function yx(i,e){i.uniform2uiv(this.addr,e)}function Mx(i,e){i.uniform3uiv(this.addr,e)}function Sx(i,e){i.uniform4uiv(this.addr,e)}function Ex(i,e,t){let n=this.cache,s=e.length,r=ic(t,s);an(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Nh:o=Vd;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function bx(i,e,t){let n=this.cache,s=e.length,r=ic(t,s);an(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Xd,r[o])}function Tx(i,e,t){let n=this.cache,s=e.length,r=ic(t,s);an(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||qd,r[o])}function wx(i,e,t){let n=this.cache,s=e.length,r=ic(t,s);an(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Wd,r[o])}function Ax(i){switch(i){case 5126:return lx;case 35664:return cx;case 35665:return hx;case 35666:return ux;case 35674:return dx;case 35675:return fx;case 35676:return px;case 5124:case 35670:return mx;case 35667:case 35671:return gx;case 35668:case 35672:return xx;case 35669:case 35673:return _x;case 5125:return vx;case 36294:return yx;case 36295:return Mx;case 36296:return Sx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ex;case 35679:case 36299:case 36307:return bx;case 35680:case 36300:case 36308:case 36293:return Tx;case 36289:case 36303:case 36311:case 36292:return wx}}var Fh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ax(t.type)}},Bh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ax(t.type)}},Oh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Lh=/(\w+)(\])?(\[|\.)?/g;function Cd(i,e){i.seq.push(e),i.map[e.id]=e}function Rx(i,e,t){let n=i.name,s=n.length;for(Lh.lastIndex=0;;){let r=Lh.exec(n),o=Lh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Cd(t,c===void 0?new Fh(a,i,e):new Bh(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new Oh(a),Cd(t,f)),t=f}}}var yr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Rx(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Pd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Cx=37297,Px=0;function Ix(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Id=new ct;function Dx(i){mt._getMatrix(Id,mt.workingColorSpace,i);let e=`mat3( ${Id.elements.map(t=>t.toFixed(4))} )`;switch(mt.getTransfer(i)){case Xr:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return tt("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Dd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Ix(i.getShaderSource(e),a)}else return r}function Lx(i,e){let t=Dx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Ux={[Eo]:"Linear",[bo]:"Reinhard",[To]:"Cineon",[ws]:"ACESFilmic",[Ao]:"AgX",[Ro]:"Neutral",[wo]:"Custom"};function Nx(i,e){let t=Ux[e];return t===void 0?(tt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var jl=new D;function Fx(){mt.getLuminanceCoefficients(jl);let i=jl.x.toFixed(4),e=jl.y.toFixed(4),t=jl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zo).join(`
`)}function Ox(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Hx(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function zo(i){return i!==""}function Ld(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ud(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var zx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hh(i){return i.replace(zx,kx)}var Gx=new Map;function kx(i,e){let t=pt[e];if(t===void 0){let n=Gx.get(e);if(n!==void 0)t=pt[n],tt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Hh(t)}var Vx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nd(i){return i.replace(Vx,Wx)}function Wx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fd(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Xx={[bs]:"SHADOWMAP_TYPE_PCF",[mr]:"SHADOWMAP_TYPE_VSM"};function qx(i){return Xx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Yx={[ss]:"ENVMAP_TYPE_CUBE",[As]:"ENVMAP_TYPE_CUBE",[Co]:"ENVMAP_TYPE_CUBE_UV"};function Zx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Yx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var $x={[As]:"ENVMAP_MODE_REFRACTION"};function Jx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":$x[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Kx={[ah]:"ENVMAP_BLENDING_MULTIPLY",[Ju]:"ENVMAP_BLENDING_MIX",[Ku]:"ENVMAP_BLENDING_ADD"};function Qx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Kx[i.combine]||"ENVMAP_BLENDING_NONE"}function jx(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function e_(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=qx(t),c=Zx(t),h=Jx(t),f=Qx(t),u=jx(t),d=Bx(t),p=Ox(r),x=s.createProgram(),g,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(zo).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(zo).join(`
`),m.length>0&&(m+=`
`)):(g=[Fd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zo).join(`
`),m=[Fd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ai?"#define TONE_MAPPING":"",t.toneMapping!==ai?pt.tonemapping_pars_fragment:"",t.toneMapping!==ai?Nx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,Lx("linearToOutputTexel",t.outputColorSpace),Fx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zo).join(`
`)),o=Hh(o),o=Ld(o,t),o=Ud(o,t),a=Hh(a),a=Ld(a,t),a=Ud(a,t),o=Nd(o),a=Nd(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===gh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let S=y+g+o,_=y+m+a,b=Pd(s,s.VERTEX_SHADER,S),T=Pd(s,s.FRAGMENT_SHADER,_);s.attachShader(x,b),s.attachShader(x,T),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(P){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(x)||"",k=s.getShaderInfoLog(b)||"",U=s.getShaderInfoLog(T)||"",V=L.trim(),H=k.trim(),Y=U.trim(),K=!0,Z=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,b,T);else{let $=Dd(s,b,"vertex"),ne=Dd(s,T,"fragment");rt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+V+`
`+$+`
`+ne)}else V!==""?tt("WebGLProgram: Program Info Log:",V):(H===""||Y==="")&&(Z=!1);Z&&(P.diagnostics={runnable:K,programLog:V,vertexShader:{log:H,prefix:g},fragmentShader:{log:Y,prefix:m}})}s.deleteShader(b),s.deleteShader(T),v=new yr(s,x),E=Hx(s,x)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(x,Cx)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Px++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=T,this}var t_=0,zh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Gh(e),t.set(e,n)),n}},Gh=class{constructor(e){this.id=t_++,this.code=e,this.usedTimes=0}};function n_(i){return i===as||i===No||i===Fo}function i_(i,e,t,n,s,r){let o=new $r,a=new zh,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function x(v,E,R,P,L,k){let U=P.fog,V=L.geometry,H=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,Y=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,K=e.get(v.envMap||H,Y),Z=K&&K.mapping===Co?K.image.height:null,$=d[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&tt("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let ne=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,de=ne!==void 0?ne.length:0,Ee=0;V.morphAttributes.position!==void 0&&(Ee=1),V.morphAttributes.normal!==void 0&&(Ee=2),V.morphAttributes.color!==void 0&&(Ee=3);let Ye,Ve,Je,oe;if($){let Tt=bi[$];Ye=Tt.vertexShader,Ve=Tt.fragmentShader}else{Ye=v.vertexShader,Ve=v.fragmentShader;let Tt=a.getVertexShaderStage(v),_t=a.getFragmentShaderStage(v);a.update(v,Tt,_t),Je=Tt.id,oe=_t.id}let ce=i.getRenderTarget(),we=i.state.buffers.depth.getReversed(),He=L.isInstancedMesh===!0,be=L.isBatchedMesh===!0,Ze=!!v.map,et=!!v.matcap,fe=!!K,me=!!v.aoMap,ve=!!v.lightMap,Se=!!v.bumpMap&&v.wireframe===!1,z=!!v.normalMap,ye=!!v.displacementMap,Ae=!!v.emissiveMap,Ie=!!v.metalnessMap,Ce=!!v.roughnessMap,F=v.anisotropy>0,Ge=v.clearcoat>0,it=v.dispersion>0,C=v.retroreflectivity>0,M=v.iridescence>0,X=v.sheen>0,q=v.transmission>0,re=F&&!!v.anisotropyMap,Me=Ge&&!!v.clearcoatMap,Pe=Ge&&!!v.clearcoatNormalMap,he=Ge&&!!v.clearcoatRoughnessMap,ge=M&&!!v.iridescenceMap,N=M&&!!v.iridescenceThicknessMap,W=X&&!!v.sheenColorMap,B=X&&!!v.sheenRoughnessMap,J=!!v.specularMap,te=!!v.specularColorMap,Q=!!v.specularIntensityMap,ue=q&&!!v.transmissionMap,I=q&&!!v.thicknessMap,pe=!!v.gradientMap,ae=!!v.alphaMap,Te=v.alphaTest>0,Le=!!v.alphaHash,_e=!!v.extensions,ke=ai;v.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(ke=i.toneMapping);let We={shaderID:$,shaderType:v.type,shaderName:v.name,vertexShader:Ye,fragmentShader:Ve,defines:v.defines,customVertexShaderID:Je,customFragmentShaderID:oe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:be,batchingColor:be&&L._colorsTexture!==null,instancing:He,instancingColor:He&&L.instanceColor!==null,instancingMorph:He&&L.morphTexture!==null,outputColorSpace:ce===null?i.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:mt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ze,matcap:et,envMap:fe,envMapMode:fe&&K.mapping,envMapCubeUVHeight:Z,aoMap:me,lightMap:ve,bumpMap:Se,normalMap:z,displacementMap:ye,emissiveMap:Ae,normalMapObjectSpace:z&&v.normalMapType===ed,normalMapTangentSpace:z&&v.normalMapType===Bo,packedNormalMap:z&&v.normalMapType===Bo&&n_(v.normalMap.format),metalnessMap:Ie,roughnessMap:Ce,anisotropy:F,anisotropyMap:re,clearcoat:Ge,clearcoatMap:Me,clearcoatNormalMap:Pe,clearcoatRoughnessMap:he,dispersion:it,retroreflection:C,iridescence:M,iridescenceMap:ge,iridescenceThicknessMap:N,sheen:X,sheenColorMap:W,sheenRoughnessMap:B,specularMap:J,specularColorMap:te,specularIntensityMap:Q,transmission:q,transmissionMap:ue,thicknessMap:I,gradientMap:pe,opaque:v.transparent===!1&&v.blending===gr&&v.alphaToCoverage===!1,alphaMap:ae,alphaTest:Te,alphaHash:Le,combine:v.combine,mapUv:Ze&&p(v.map.channel),aoMapUv:me&&p(v.aoMap.channel),lightMapUv:ve&&p(v.lightMap.channel),bumpMapUv:Se&&p(v.bumpMap.channel),normalMapUv:z&&p(v.normalMap.channel),displacementMapUv:ye&&p(v.displacementMap.channel),emissiveMapUv:Ae&&p(v.emissiveMap.channel),metalnessMapUv:Ie&&p(v.metalnessMap.channel),roughnessMapUv:Ce&&p(v.roughnessMap.channel),anisotropyMapUv:re&&p(v.anisotropyMap.channel),clearcoatMapUv:Me&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:N&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:W&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:B&&p(v.sheenRoughnessMap.channel),specularMapUv:J&&p(v.specularMap.channel),specularColorMapUv:te&&p(v.specularColorMap.channel),specularIntensityMapUv:Q&&p(v.specularIntensityMap.channel),transmissionMapUv:ue&&p(v.transmissionMap.channel),thicknessMapUv:I&&p(v.thicknessMap.channel),alphaMapUv:ae&&p(v.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(z||F),vertexNormals:!!V.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!V.attributes.uv&&(Ze||ae),fog:!!U,useFog:v.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||V.attributes.normal===void 0&&z===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:we,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Ee,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:ke,decodeVideoTexture:Ze&&v.map.isVideoTexture===!0&&mt.getTransfer(v.map.colorSpace)===Et,decodeVideoTextureEmissive:Ae&&v.emissiveMap.isVideoTexture===!0&&mt.getTransfer(v.emissiveMap.colorSpace)===Et,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ht,flipSided:v.side===on,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:_e&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&v.extensions.multiDraw===!0||be)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return We.vertexUv1s=l.has(1),We.vertexUv2s=l.has(2),We.vertexUv3s=l.has(3),l.clear(),We}function g(v){let E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(let R in v.defines)E.push(R),E.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(m(E,v),y(E,v),E.push(i.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function m(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numSunLights),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numSunLightShadows),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function y(v,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.retroreflection&&o.enable(24),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function S(v){let E=d[v.type],R;if(E){let P=bi[E];R=Pn.clone(P.uniforms)}else R=v.uniforms;return R}function _(v,E){let R=h.get(E);return R!==void 0?++R.usedTimes:(R=new e_(i,E,v,s),c.push(R),h.set(E,R)),R}function b(v){if(--v.usedTimes===0){let E=c.indexOf(v);c[E]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function T(v){a.remove(v)}function A(){a.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:S,acquireProgram:_,releaseProgram:b,releaseShaderCache:T,programs:c,dispose:A}}function s_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function r_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Bd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Od(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function a(u,d,p,x,g,m){let y=i[e];return y===void 0?(y={id:u.id,object:u,geometry:d,material:p,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:g,group:m},i[e]=y):(y.id=u.id,y.object=u,y.geometry=d,y.material=p,y.materialVariant=o(u),y.groupOrder=x,y.renderOrder=u.renderOrder,y.z=g,y.group=m),e++,y}function l(u,d,p,x,g,m,y){y.reversedDepth===!0&&(g=-g);let S=a(u,d,p,x,g,m);p.transmission>0?n.push(S):p.transparent===!0?s.push(S):t.push(S)}function c(u,d,p,x,g,m){let y=a(u,d,p,x,g,m);p.transmission>0?n.unshift(y):p.transparent===!0?s.unshift(y):t.unshift(y)}function h(u,d){t.length>1&&t.sort(u||r_),n.length>1&&n.sort(d||Bd),s.length>1&&s.sort(d||Bd)}function f(){for(let u=e,d=i.length;u<d;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function o_(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Od,i.set(n,[o])):s>=r.length?(o=new Od,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function a_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new Re};break;case"SpotLight":t={position:new D,direction:new D,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function l_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var c_=0;function h_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function u_(i){let e=new a_,t=l_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let s=new D,r=new ut,o=new ut;function a(c){let h=0,f=0,u=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let d=0,p=0,x=0,g=0,m=0,y=0,S=0,_=0,b=0,T=0,A=0,v=0,E=0,R=0;c.sort(h_);for(let L=0,k=c.length;L<k;L++){let U=c[L],V=U.color,H=U.intensity,Y=U.distance,K=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===as?K=U.shadow.map.texture:K=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)h+=V.r*H,f+=V.g*H,u+=V.b*H;else if(U.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(U.sh.coefficients[Z],H);R++}else if(U.isSunLight){let Z=e.get(U);if(Z.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let $=U.shadow,ne=t.get(U);ne.shadowIntensity=$.intensity,ne.shadowBias=$.bias,ne.shadowNormalBias=$.normalBias,ne.shadowRadius=$.radius,ne.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),n.sunShadow[p]=ne,n.sunShadowMap[p]=K;let de=$.getViewportCount();for(let Ee=0;Ee<de;Ee++)n.sunShadowMatrix[x+Ee]=$.getMatrix(Ee),n.sunShadowCascade[x+Ee]=$._cascadeData[Ee];x+=de,p++}n.sun[d]=Z,d++}else if(U.isDirectionalLight){let Z=e.get(U);if(Z.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let $=U.shadow,ne=t.get(U);ne.shadowIntensity=$.intensity,ne.shadowBias=$.bias,ne.shadowNormalBias=$.normalBias,ne.shadowRadius=$.radius,ne.shadowMapSize=$.mapSize,n.directionalShadow[g]=ne,n.directionalShadowMap[g]=K,n.directionalShadowMatrix[g]=U.shadow.matrix,b++}n.directional[g]=Z,g++}else if(U.isSpotLight){let Z=e.get(U);Z.position.setFromMatrixPosition(U.matrixWorld),Z.color.copy(V).multiplyScalar(H),Z.distance=Y,Z.coneCos=Math.cos(U.angle),Z.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Z.decay=U.decay,n.spot[y]=Z;let $=U.shadow;if(U.map&&(n.spotLightMap[v]=U.map,v++,$.updateMatrices(U),U.castShadow&&E++),n.spotLightMatrix[y]=$.matrix,U.castShadow){let ne=t.get(U);ne.shadowIntensity=$.intensity,ne.shadowBias=$.bias,ne.shadowNormalBias=$.normalBias,ne.shadowRadius=$.radius,ne.shadowMapSize=$.mapSize,n.spotShadow[y]=ne,n.spotShadowMap[y]=K,A++}y++}else if(U.isRectAreaLight){let Z=e.get(U);Z.color.copy(V).multiplyScalar(H),Z.halfWidth.set(U.width*.5,0,0),Z.halfHeight.set(0,U.height*.5,0),n.rectArea[S]=Z,S++}else if(U.isPointLight){let Z=e.get(U);if(Z.color.copy(U.color).multiplyScalar(U.intensity),Z.distance=U.distance,Z.decay=U.decay,U.castShadow){let $=U.shadow,ne=t.get(U);ne.shadowIntensity=$.intensity,ne.shadowBias=$.bias,ne.shadowNormalBias=$.normalBias,ne.shadowRadius=$.radius,ne.shadowMapSize=$.mapSize,ne.shadowCameraNear=$.camera.near,ne.shadowCameraFar=$.camera.far,n.pointShadow[m]=ne,n.pointShadowMap[m]=K,n.pointShadowMatrix[m]=U.shadow.matrix,T++}n.point[m]=Z,m++}else if(U.isHemisphereLight){let Z=e.get(U);Z.skyColor.copy(U.color).multiplyScalar(H),Z.groundColor.copy(U.groundColor).multiplyScalar(H),n.hemi[_]=Z,_++}}S>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Be.LTC_FLOAT_1,n.rectAreaLTC2=Be.LTC_FLOAT_2):(n.rectAreaLTC1=Be.LTC_HALF_1,n.rectAreaLTC2=Be.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let P=n.hash;(P.sunLength!==d||P.directionalLength!==g||P.pointLength!==m||P.spotLength!==y||P.rectAreaLength!==S||P.hemiLength!==_||P.numSunShadows!==p||P.numDirectionalShadows!==b||P.numPointShadows!==T||P.numSpotShadows!==A||P.numSpotMaps!==v||P.numLightProbes!==R)&&(n.sun.length=d,n.directional.length=g,n.spot.length=y,n.rectArea.length=S,n.point.length=m,n.hemi.length=_,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+v-E,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,P.sunLength=d,P.directionalLength=g,P.pointLength=m,P.spotLength=y,P.rectAreaLength=S,P.hemiLength=_,P.numSunShadows=p,P.numDirectionalShadows=b,P.numPointShadows=T,P.numSpotShadows=A,P.numSpotMaps=v,P.numLightProbes=R,n.version=c_++)}function l(c,h){let f=0,u=0,d=0,p=0,x=0,g=0,m=h.matrixWorldInverse;for(let y=0,S=c.length;y<S;y++){let _=c[y];if(_.isSunLight){let b=n.sun[f];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(m),f++}else if(_.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),u++}else if(_.isSpotLight){let b=n.spot[p];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),p++}else if(_.isRectAreaLight){let b=n.rectArea[x];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(_.isPointLight){let b=n.point[d];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){let b=n.hemi[g];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function Hd(i){let e=new u_(i),t=[],n=[],s=[];function r(u){f.camera=u,t.length=0,n.length=0,s.length=0}function o(u){t.push(u)}function a(u){n.push(u)}function l(u){s.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}let f={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function d_(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Hd(i),e.set(s,[a])):r>=o.length?(a=new Hd(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var f_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,p_=`uniform sampler2D shadow_pass;
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
}`,m_=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],g_=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],zd=new ut,Ho=new D,Uh=new D;function x_(i,e,t){let n=new lr,s=new xe,r=new xe,o=new Gt,a=new Za,l=new $a,c={},h=t.maxTextureSize,f={[is]:on,[on]:is,[Ht]:Ht},u=new Pt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:f_,fragmentShader:p_}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let p=new gt;p.setAttribute("position",new Ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new De(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bs;let m=this.type;this.render=function(T,A,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===Nu&&(tt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=bs);let E=i.getRenderTarget(),R=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),L=i.state;L.setBlending(qt),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let k=m!==this.type;k&&A.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(V=>V.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,V=T.length;U<V;U++){let H=T[U],Y=H.shadow;if(Y===void 0){tt("WebGLShadowMap:",H,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let K=Y.getFrameExtents();s.multiply(K),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/K.x),s.x=r.x*K.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/K.y),s.y=r.y*K.y,Y.mapSize.y=r.y));let Z=i.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=Z,Y.map===null||k===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===mr){if(H.isPointLight){tt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Bt(s.x,s.y,{format:as,type:$t,minFilter:gn,magFilter:gn,generateMipmaps:!1}),Y.map.texture.name=H.name+".shadowMap",Y.map.depthTexture=new yi(s.x,s.y,$n),Y.map.depthTexture.name=H.name+".shadowMapDepth",Y.map.depthTexture.format=mi,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=jt,Y.map.depthTexture.magFilter=jt}else H.isPointLight?(Y.map=new ec(s.x),Y.map.depthTexture=new Ga(s.x,li)):(Y.map=new Bt(s.x,s.y),Y.map.depthTexture=new yi(s.x,s.y,li)),Y.map.depthTexture.name=H.name+".shadowMap",Y.map.depthTexture.format=mi,this.type===bs?(Y.map.depthTexture.compareFunction=Z?Kl:Jl,Y.map.depthTexture.minFilter=gn,Y.map.depthTexture.magFilter=gn):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=jt,Y.map.depthTexture.magFilter=jt);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==s.x||Y.map.height!==s.y)&&Y.map.setSize(s.x,s.y);let $=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();H.isPointLight!==!0&&Y.updateMatrices(H,v);for(let ne=0;ne<$;ne++){let de=Y.getCamera(ne);if(H.isPointLight){let Ee=Y.camera,Ye=Y.matrix,Ve=H.distance||Ee.far;Ve!==Ee.far&&(Ee.far=Ve,Ee.updateProjectionMatrix()),Ho.setFromMatrixPosition(H.matrixWorld),Ee.position.copy(Ho),Uh.copy(Ee.position),Uh.add(m_[ne]),Ee.up.copy(g_[ne]),Ee.lookAt(Uh),Ee.updateMatrixWorld(),Ye.makeTranslation(-Ho.x,-Ho.y,-Ho.z),zd.multiplyMatrices(Ee.projectionMatrix,Ee.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(zd,Ee.coordinateSystem,Ee.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)i.setRenderTarget(Y.map,ne),i.clear();else{ne===0&&(i.setRenderTarget(Y.map),i.clear());let Ee=Y.getViewport(ne);o.set(r.x*Ee.x,r.y*Ee.y,r.x*Ee.z,r.y*Ee.w),L.viewport(o)}n=Y.getFrustum(ne),_(A,v,de,H,this.type)}Y.isPointLightShadow!==!0&&this.type===mr&&y(Y,v),Y.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(E,R,P)};function y(T,A){let v=e.update(x);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new Bt(s.x,s.y,{format:as,type:$t}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,v,u,x,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,v,d,x,null)}function S(T,A,v,E){let R=null,P=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)R=P;else if(R=v.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let L=R.uuid,k=A.uuid,U=c[L];U===void 0&&(U={},c[L]=U);let V=U[k];V===void 0&&(V=R.clone(),U[k]=V,A.addEventListener("dispose",b)),R=V}if(R.visible=A.visible,R.wireframe=A.wireframe,E===mr?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:f[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,v.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let L=i.properties.get(R);L.light=v}return R}function _(T,A,v,E,R){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&R===mr)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);let k=e.update(T),U=T.material;if(Array.isArray(U)){let V=k.groups;for(let H=0,Y=V.length;H<Y;H++){let K=V[H],Z=U[K.materialIndex];if(Z&&Z.visible){let $=S(T,Z,E,R);T.onBeforeShadow(i,T,A,v,k,$,K),i.renderBufferDirect(v,null,k,$,T,K),T.onAfterShadow(i,T,A,v,k,$,K)}}}else if(U.visible){let V=S(T,U,E,R);T.onBeforeShadow(i,T,A,v,k,V,null),i.renderBufferDirect(v,null,k,V,T,null),T.onAfterShadow(i,T,A,v,k,V,null)}}let L=T.children;for(let k=0,U=L.length;k<U;k++)_(L[k],A,v,E,R)}function b(T){T.target.removeEventListener("dispose",b);for(let v in c){let E=c[v],R=T.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}function __(i,e){function t(){let I=!1,pe=new Gt,ae=null,Te=new Gt(0,0,0,0);return{setMask:function(Le){ae!==Le&&!I&&(i.colorMask(Le,Le,Le,Le),ae=Le)},setLocked:function(Le){I=Le},setClear:function(Le,_e,ke,We,Tt){Tt===!0&&(Le*=We,_e*=We,ke*=We),pe.set(Le,_e,ke,We),Te.equals(pe)===!1&&(i.clearColor(Le,_e,ke,We),Te.copy(pe))},reset:function(){I=!1,ae=null,Te.set(-1,0,0,0)}}}function n(){let I=!1,pe=!1,ae=null,Te=null,Le=null;return{setReversed:function(_e){if(pe!==_e){let ke=e.get("EXT_clip_control");_e?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),pe=_e;let We=Le;Le=null,this.setClear(We)}},getReversed:function(){return pe},setTest:function(_e){_e?ce(i.DEPTH_TEST):we(i.DEPTH_TEST)},setMask:function(_e){ae!==_e&&!I&&(i.depthMask(_e),ae=_e)},setFunc:function(_e){if(pe&&(_e=ud[_e]),Te!==_e){switch(_e){case Aa:i.depthFunc(i.NEVER);break;case Ra:i.depthFunc(i.ALWAYS);break;case Ca:i.depthFunc(i.LESS);break;case js:i.depthFunc(i.LEQUAL);break;case Pa:i.depthFunc(i.EQUAL);break;case Ia:i.depthFunc(i.GEQUAL);break;case Da:i.depthFunc(i.GREATER);break;case La:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Te=_e}},setLocked:function(_e){I=_e},setClear:function(_e){Le!==_e&&(Le=_e,pe&&(_e=1-_e),i.clearDepth(_e))},reset:function(){I=!1,ae=null,Te=null,Le=null,pe=!1}}}function s(){let I=!1,pe=null,ae=null,Te=null,Le=null,_e=null,ke=null,We=null,Tt=null;return{setTest:function(_t){I||(_t?ce(i.STENCIL_TEST):we(i.STENCIL_TEST))},setMask:function(_t){pe!==_t&&!I&&(i.stencilMask(_t),pe=_t)},setFunc:function(_t,cn,hn){(ae!==_t||Te!==cn||Le!==hn)&&(i.stencilFunc(_t,cn,hn),ae=_t,Te=cn,Le=hn)},setOp:function(_t,cn,hn){(_e!==_t||ke!==cn||We!==hn)&&(i.stencilOp(_t,cn,hn),_e=_t,ke=cn,We=hn)},setLocked:function(_t){I=_t},setClear:function(_t){Tt!==_t&&(i.clearStencil(_t),Tt=_t)},reset:function(){I=!1,pe=null,ae=null,Te=null,Le=null,_e=null,ke=null,We=null,Tt=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},f={},u={},d=new WeakMap,p=[],x=null,g=!1,m=null,y=null,S=null,_=null,b=null,T=null,A=null,v=new Re(0,0,0),E=0,R=!1,P=null,L=null,k=null,U=null,V=null,H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,K=0,Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Z)[1]),Y=K>=1):Z.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),Y=K>=2);let $=null,ne={},de=i.getParameter(i.SCISSOR_BOX),Ee=i.getParameter(i.VIEWPORT),Ye=new Gt().fromArray(de),Ve=new Gt().fromArray(Ee);function Je(I,pe,ae,Te){let Le=new Uint8Array(4),_e=i.createTexture();i.bindTexture(I,_e),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ke=0;ke<ae;ke++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(pe,0,i.RGBA,1,1,Te,0,i.RGBA,i.UNSIGNED_BYTE,Le):i.texImage2D(pe+ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Le);return _e}let oe={};oe[i.TEXTURE_2D]=Je(i.TEXTURE_2D,i.TEXTURE_2D,1),oe[i.TEXTURE_CUBE_MAP]=Je(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[i.TEXTURE_2D_ARRAY]=Je(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),oe[i.TEXTURE_3D]=Je(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ce(i.DEPTH_TEST),o.setFunc(js),Se(!1),z(nh),ce(i.CULL_FACE),me(qt);function ce(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function we(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function He(I,pe){return u[I]!==pe?(i.bindFramebuffer(I,pe),u[I]=pe,I===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=pe),I===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=pe),!0):!1}function be(I,pe){let ae=p,Te=!1;if(I){ae=d.get(pe),ae===void 0&&(ae=[],d.set(pe,ae));let Le=I.textures;if(ae.length!==Le.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let _e=0,ke=Le.length;_e<ke;_e++)ae[_e]=i.COLOR_ATTACHMENT0+_e;ae.length=Le.length,Te=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,Te=!0);Te&&i.drawBuffers(ae)}function Ze(I){return x!==I?(i.useProgram(I),x=I,!0):!1}let et={[Zn]:i.FUNC_ADD,[Fu]:i.FUNC_SUBTRACT,[Bu]:i.FUNC_REVERSE_SUBTRACT};et[Ou]=i.MIN,et[Hu]=i.MAX;let fe={[Ts]:i.ZERO,[zu]:i.ONE,[Gu]:i.SRC_COLOR,[rh]:i.SRC_ALPHA,[Xu]:i.SRC_ALPHA_SATURATE,[So]:i.DST_COLOR,[Mo]:i.DST_ALPHA,[ku]:i.ONE_MINUS_SRC_COLOR,[oh]:i.ONE_MINUS_SRC_ALPHA,[Wu]:i.ONE_MINUS_DST_COLOR,[Vu]:i.ONE_MINUS_DST_ALPHA,[qu]:i.CONSTANT_COLOR,[Yu]:i.ONE_MINUS_CONSTANT_COLOR,[Zu]:i.CONSTANT_ALPHA,[$u]:i.ONE_MINUS_CONSTANT_ALPHA};function me(I,pe,ae,Te,Le,_e,ke,We,Tt,_t){if(I===qt){g===!0&&(we(i.BLEND),g=!1);return}if(g===!1&&(ce(i.BLEND),g=!0),I!==cl){if(I!==m||_t!==R){if((y!==Zn||b!==Zn)&&(i.blendEquation(i.FUNC_ADD),y=Zn,b=Zn),_t)switch(I){case gr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Cn:i.blendFunc(i.ONE,i.ONE);break;case ih:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:rt("WebGLState: Invalid blending: ",I);break}else switch(I){case gr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Cn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ih:rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sh:rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rt("WebGLState: Invalid blending: ",I);break}S=null,_=null,T=null,A=null,v.set(0,0,0),E=0,m=I,R=_t}return}Le=Le||pe,_e=_e||ae,ke=ke||Te,(pe!==y||Le!==b)&&(i.blendEquationSeparate(et[pe],et[Le]),y=pe,b=Le),(ae!==S||Te!==_||_e!==T||ke!==A)&&(i.blendFuncSeparate(fe[ae],fe[Te],fe[_e],fe[ke]),S=ae,_=Te,T=_e,A=ke),(We.equals(v)===!1||Tt!==E)&&(i.blendColor(We.r,We.g,We.b,Tt),v.copy(We),E=Tt),m=I,R=!1}function ve(I,pe){I.side===Ht?we(i.CULL_FACE):ce(i.CULL_FACE);let ae=I.side===on;pe&&(ae=!ae),Se(ae),I.blending===gr&&I.transparent===!1?me(qt):me(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);let Te=I.stencilWrite;a.setTest(Te),Te&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Ae(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ce(i.SAMPLE_ALPHA_TO_COVERAGE):we(i.SAMPLE_ALPHA_TO_COVERAGE)}function Se(I){P!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),P=I)}function z(I){I!==Lu?(ce(i.CULL_FACE),I!==L&&(I===nh?i.cullFace(i.BACK):I===Uu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):we(i.CULL_FACE),L=I}function ye(I){I!==k&&(Y&&i.lineWidth(I),k=I)}function Ae(I,pe,ae){I?(ce(i.POLYGON_OFFSET_FILL),(U!==pe||V!==ae)&&(U=pe,V=ae,o.getReversed()&&(pe=-pe),i.polygonOffset(pe,ae))):we(i.POLYGON_OFFSET_FILL)}function Ie(I){I?ce(i.SCISSOR_TEST):we(i.SCISSOR_TEST)}function Ce(I){I===void 0&&(I=i.TEXTURE0+H-1),$!==I&&(i.activeTexture(I),$=I)}function F(I,pe,ae){ae===void 0&&($===null?ae=i.TEXTURE0+H-1:ae=$);let Te=ne[ae];Te===void 0&&(Te={type:void 0,texture:void 0},ne[ae]=Te),(Te.type!==I||Te.texture!==pe)&&($!==ae&&(i.activeTexture(ae),$=ae),i.bindTexture(I,pe||oe[I]),Te.type=I,Te.texture=pe)}function Ge(){let I=ne[$];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function it(){try{i.compressedTexImage2D(...arguments)}catch(I){rt("WebGLState:",I)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(I){rt("WebGLState:",I)}}function M(){try{i.texSubImage2D(...arguments)}catch(I){rt("WebGLState:",I)}}function X(){try{i.texSubImage3D(...arguments)}catch(I){rt("WebGLState:",I)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(I){rt("WebGLState:",I)}}function re(){try{i.compressedTexSubImage3D(...arguments)}catch(I){rt("WebGLState:",I)}}function Me(){try{i.texStorage2D(...arguments)}catch(I){rt("WebGLState:",I)}}function Pe(){try{i.texStorage3D(...arguments)}catch(I){rt("WebGLState:",I)}}function he(){try{i.texImage2D(...arguments)}catch(I){rt("WebGLState:",I)}}function ge(){try{i.texImage3D(...arguments)}catch(I){rt("WebGLState:",I)}}function N(I){return f[I]!==void 0?f[I]:i.getParameter(I)}function W(I,pe){f[I]!==pe&&(i.pixelStorei(I,pe),f[I]=pe)}function B(I){Ye.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Ye.copy(I))}function J(I){Ve.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Ve.copy(I))}function te(I,pe){let ae=c.get(pe);ae===void 0&&(ae=new WeakMap,c.set(pe,ae));let Te=ae.get(I);Te===void 0&&(Te=i.getUniformBlockIndex(pe,I.name),ae.set(I,Te))}function Q(I,pe){let Te=c.get(pe).get(I);l.get(pe)!==Te&&(i.uniformBlockBinding(pe,Te,I.__bindingPointIndex),l.set(pe,Te))}function ue(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},$=null,ne={},u={},d=new WeakMap,p=[],x=null,g=!1,m=null,y=null,S=null,_=null,b=null,T=null,A=null,v=new Re(0,0,0),E=0,R=!1,P=null,L=null,k=null,U=null,V=null,Ye.set(0,0,i.canvas.width,i.canvas.height),Ve.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ce,disable:we,bindFramebuffer:He,drawBuffers:be,useProgram:Ze,setBlending:me,setMaterial:ve,setFlipSided:Se,setCullFace:z,setLineWidth:ye,setPolygonOffset:Ae,setScissorTest:Ie,activeTexture:Ce,bindTexture:F,unbindTexture:Ge,compressedTexImage2D:it,compressedTexImage3D:C,texImage2D:he,texImage3D:ge,pixelStorei:W,getParameter:N,updateUBOMapping:te,uniformBlockBinding:Q,texStorage2D:Me,texStorage3D:Pe,texSubImage2D:M,texSubImage3D:X,compressedTexSubImage2D:q,compressedTexSubImage3D:re,scissor:B,viewport:J,reset:ue}}function v_(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new xe,h=new WeakMap,f=new Set,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,M){return p?new OffscreenCanvas(C,M):qr("canvas")}function g(C,M,X){let q=1,re=it(C);if((re.width>X||re.height>X)&&(q=X/Math.max(re.width,re.height)),q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let Me=Math.floor(q*re.width),Pe=Math.floor(q*re.height);u===void 0&&(u=x(Me,Pe));let he=M?x(Me,Pe):u;return he.width=Me,he.height=Pe,he.getContext("2d").drawImage(C,0,0,Me,Pe),tt("WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+Me+"x"+Pe+")."),he}else return"data"in C&&tt("WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),C;return C}function m(C){return C.generateMipmaps}function y(C){i.generateMipmap(C)}function S(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(C,M,X,q,re,Me=!1){if(C!==null){if(i[C]!==void 0)return i[C];tt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Pe;q&&(Pe=e.get("EXT_texture_norm16"),Pe||tt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let he=M;if(M===i.RED&&(X===i.FLOAT&&(he=i.R32F),X===i.HALF_FLOAT&&(he=i.R16F),X===i.UNSIGNED_BYTE&&(he=i.R8),X===i.UNSIGNED_SHORT&&Pe&&(he=Pe.R16_EXT),X===i.SHORT&&Pe&&(he=Pe.R16_SNORM_EXT)),M===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(he=i.R8UI),X===i.UNSIGNED_SHORT&&(he=i.R16UI),X===i.UNSIGNED_INT&&(he=i.R32UI),X===i.BYTE&&(he=i.R8I),X===i.SHORT&&(he=i.R16I),X===i.INT&&(he=i.R32I)),M===i.RG&&(X===i.FLOAT&&(he=i.RG32F),X===i.HALF_FLOAT&&(he=i.RG16F),X===i.UNSIGNED_BYTE&&(he=i.RG8),X===i.UNSIGNED_SHORT&&Pe&&(he=Pe.RG16_EXT),X===i.SHORT&&Pe&&(he=Pe.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(he=i.RG8UI),X===i.UNSIGNED_SHORT&&(he=i.RG16UI),X===i.UNSIGNED_INT&&(he=i.RG32UI),X===i.BYTE&&(he=i.RG8I),X===i.SHORT&&(he=i.RG16I),X===i.INT&&(he=i.RG32I)),M===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(he=i.RGB8UI),X===i.UNSIGNED_SHORT&&(he=i.RGB16UI),X===i.UNSIGNED_INT&&(he=i.RGB32UI),X===i.BYTE&&(he=i.RGB8I),X===i.SHORT&&(he=i.RGB16I),X===i.INT&&(he=i.RGB32I)),M===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(he=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(he=i.RGBA16UI),X===i.UNSIGNED_INT&&(he=i.RGBA32UI),X===i.BYTE&&(he=i.RGBA8I),X===i.SHORT&&(he=i.RGBA16I),X===i.INT&&(he=i.RGBA32I)),M===i.RGB&&(X===i.UNSIGNED_SHORT&&Pe&&(he=Pe.RGB16_EXT),X===i.SHORT&&Pe&&(he=Pe.RGB16_SNORM_EXT),X===i.UNSIGNED_INT_5_9_9_9_REV&&(he=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&(he=i.R11F_G11F_B10F)),M===i.RGBA){let ge=Me?Xr:mt.getTransfer(re);X===i.FLOAT&&(he=i.RGBA32F),X===i.HALF_FLOAT&&(he=i.RGBA16F),X===i.UNSIGNED_BYTE&&(he=ge===Et?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT&&Pe&&(he=Pe.RGBA16_EXT),X===i.SHORT&&Pe&&(he=Pe.RGBA16_SNORM_EXT),X===i.UNSIGNED_SHORT_4_4_4_4&&(he=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(he=i.RGB5_A1)}return(he===i.R16F||he===i.R32F||he===i.RG16F||he===i.RG32F||he===i.RGBA16F||he===i.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function b(C,M){let X;return C?M===null||M===li||M===os?X=i.DEPTH24_STENCIL8:M===$n?X=i.DEPTH32F_STENCIL8:M===xr&&(X=i.DEPTH24_STENCIL8,tt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===li||M===os?X=i.DEPTH_COMPONENT24:M===$n?X=i.DEPTH_COMPONENT32F:M===xr&&(X=i.DEPTH_COMPONENT16),X}function T(C,M){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==jt&&C.minFilter!==gn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function A(C){let M=C.target;M.removeEventListener("dispose",A),E(M),M.isVideoTexture&&h.delete(M),M.isHTMLTexture&&f.delete(M)}function v(C){let M=C.target;M.removeEventListener("dispose",v),P(M)}function E(C){let M=n.get(C);if(M.__webglInit===void 0)return;let X=C.source,q=d.get(X);if(q){let re=q[M.__cacheKey];re.usedTimes--,re.usedTimes===0&&R(C),Object.keys(q).length===0&&d.delete(X)}n.remove(C)}function R(C){let M=n.get(C);i.deleteTexture(M.__webglTexture);let X=C.source,q=d.get(X);delete q[M.__cacheKey],o.memory.textures--}function P(C){let M=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(M.__webglFramebuffer[q]))for(let re=0;re<M.__webglFramebuffer[q].length;re++)i.deleteFramebuffer(M.__webglFramebuffer[q][re]);else i.deleteFramebuffer(M.__webglFramebuffer[q]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[q])}else{if(Array.isArray(M.__webglFramebuffer))for(let q=0;q<M.__webglFramebuffer.length;q++)i.deleteFramebuffer(M.__webglFramebuffer[q]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let q=0;q<M.__webglColorRenderbuffer.length;q++)M.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[q]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let X=C.textures;for(let q=0,re=X.length;q<re;q++){let Me=n.get(X[q]);Me.__webglTexture&&(i.deleteTexture(Me.__webglTexture),o.memory.textures--),n.remove(X[q])}n.remove(C)}let L=0;function k(){L=0}function U(){return L}function V(C){L=C}function H(){let C=L;return C>=s.maxTextures&&tt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),L+=1,C}function Y(C){let M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function K(C,M){let X=n.get(C);if(C.isVideoTexture&&F(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&X.__version!==C.version){let q=C.image;if(q===null)tt("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)tt("WebGLRenderer: Texture marked for update but image is incomplete");else{we(X,C,M);return}}else C.isExternalTexture&&(X.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+M)}function Z(C,M){let X=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){we(X,C,M);return}else C.isExternalTexture&&(X.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+M)}function $(C,M){let X=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){we(X,C,M);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+M)}function ne(C,M){let X=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&X.__version!==C.version){He(X,C,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+M)}let de={[Mn]:i.REPEAT,[di]:i.CLAMP_TO_EDGE,[Ua]:i.MIRRORED_REPEAT},Ee={[jt]:i.NEAREST,[Qu]:i.NEAREST_MIPMAP_NEAREST,[Po]:i.NEAREST_MIPMAP_LINEAR,[gn]:i.LINEAR,[dl]:i.LINEAR_MIPMAP_NEAREST,[rs]:i.LINEAR_MIPMAP_LINEAR},Ye={[nd]:i.NEVER,[ad]:i.ALWAYS,[id]:i.LESS,[Jl]:i.LEQUAL,[sd]:i.EQUAL,[Kl]:i.GEQUAL,[rd]:i.GREATER,[od]:i.NOTEQUAL};function Ve(C,M){if(M.type===$n&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===gn||M.magFilter===dl||M.magFilter===Po||M.magFilter===rs||M.minFilter===gn||M.minFilter===dl||M.minFilter===Po||M.minFilter===rs)&&tt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,de[M.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,de[M.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,de[M.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,Ee[M.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,Ee[M.minFilter]),M.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Ye[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===jt||M.minFilter!==Po&&M.minFilter!==rs||M.type===$n&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Je(C,M){let X=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",A));let q=M.source,re=d.get(q);re===void 0&&(re={},d.set(q,re));let Me=Y(M);if(Me!==C.__cacheKey){re[Me]===void 0&&(re[Me]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),re[Me].usedTimes++;let Pe=re[C.__cacheKey];Pe!==void 0&&(re[C.__cacheKey].usedTimes--,Pe.usedTimes===0&&R(M)),C.__cacheKey=Me,C.__webglTexture=re[Me].texture}return X}function oe(C,M,X){return Math.floor(Math.floor(C/X)/M)}function ce(C,M,X,q){let Me=C.updateRanges;if(Me.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,X,q,M.data);else{Me.sort((W,B)=>W.start-B.start);let Pe=0;for(let W=1;W<Me.length;W++){let B=Me[Pe],J=Me[W],te=B.start+B.count,Q=oe(J.start,M.width,4),ue=oe(B.start,M.width,4);J.start<=te+1&&Q===ue&&oe(J.start+J.count-1,M.width,4)===Q?B.count=Math.max(B.count,J.start+J.count-B.start):(++Pe,Me[Pe]=J)}Me.length=Pe+1;let he=t.getParameter(i.UNPACK_ROW_LENGTH),ge=t.getParameter(i.UNPACK_SKIP_PIXELS),N=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let W=0,B=Me.length;W<B;W++){let J=Me[W],te=Math.floor(J.start/4),Q=Math.ceil(J.count/4),ue=te%M.width,I=Math.floor(te/M.width),pe=Q,ae=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ue),t.pixelStorei(i.UNPACK_SKIP_ROWS,I),t.texSubImage2D(i.TEXTURE_2D,0,ue,I,pe,ae,X,q,M.data)}C.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,he),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ge),t.pixelStorei(i.UNPACK_SKIP_ROWS,N)}}function we(C,M,X){let q=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(q=i.TEXTURE_3D);let re=Je(C,M),Me=M.source;t.bindTexture(q,C.__webglTexture,i.TEXTURE0+X);let Pe=n.get(Me);if(Me.version!==Pe.__version||re===!0){if(t.activeTexture(i.TEXTURE0+X),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let ae=mt.getPrimaries(mt.workingColorSpace),Te=M.colorSpace===ki?null:mt.getPrimaries(M.colorSpace),Le=M.colorSpace===ki||ae===Te?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le)}t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let ge=g(M.image,!1,s.maxTextureSize);ge=Ge(M,ge);let N=r.convert(M.format,M.colorSpace),W=r.convert(M.type),B=_(M.internalFormat,N,W,M.normalized,M.colorSpace,M.isVideoTexture);Ve(q,M);let J,te=M.mipmaps,Q=M.isVideoTexture!==!0,ue=Pe.__version===void 0||re===!0,I=Me.dataReady,pe=T(M,ge);if(M.isDepthTexture)B=b(M.format===Si,M.type),ue&&(Q?t.texStorage2D(i.TEXTURE_2D,1,B,ge.width,ge.height):t.texImage2D(i.TEXTURE_2D,0,B,ge.width,ge.height,0,N,W,null));else if(M.isDataTexture)if(te.length>0){Q&&ue&&t.texStorage2D(i.TEXTURE_2D,pe,B,te[0].width,te[0].height);for(let ae=0,Te=te.length;ae<Te;ae++)J=te[ae],Q?I&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,J.width,J.height,N,W,J.data):t.texImage2D(i.TEXTURE_2D,ae,B,J.width,J.height,0,N,W,J.data);M.generateMipmaps=!1}else Q?(ue&&t.texStorage2D(i.TEXTURE_2D,pe,B,ge.width,ge.height),I&&ce(M,ge,N,W)):t.texImage2D(i.TEXTURE_2D,0,B,ge.width,ge.height,0,N,W,ge.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Q&&ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,B,te[0].width,te[0].height,ge.depth);for(let ae=0,Te=te.length;ae<Te;ae++)if(J=te[ae],M.format!==Ln)if(N!==null)if(Q){if(I)if(M.layerUpdates.size>0){let Le=Eh(J.width,J.height,M.format,M.type);for(let _e of M.layerUpdates){let ke=J.data.subarray(_e*Le/J.data.BYTES_PER_ELEMENT,(_e+1)*Le/J.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,_e,J.width,J.height,1,N,ke)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,J.width,J.height,ge.depth,N,J.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ae,B,J.width,J.height,ge.depth,0,J.data,0,0);else tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Q?I&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,J.width,J.height,ge.depth,N,W,J.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ae,B,J.width,J.height,ge.depth,0,N,W,J.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{Q&&ue&&t.texStorage2D(i.TEXTURE_2D,pe,B,te[0].width,te[0].height);for(let ae=0,Te=te.length;ae<Te;ae++)J=te[ae],M.format!==Ln?N!==null?Q?I&&t.compressedTexSubImage2D(i.TEXTURE_2D,ae,0,0,J.width,J.height,N,J.data):t.compressedTexImage2D(i.TEXTURE_2D,ae,B,J.width,J.height,0,J.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Q?I&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,J.width,J.height,N,W,J.data):t.texImage2D(i.TEXTURE_2D,ae,B,J.width,J.height,0,N,W,J.data)}else if(M.isDataArrayTexture)if(Q){if(ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,B,ge.width,ge.height,ge.depth),I)if(M.layerUpdates.size>0){let ae=Eh(ge.width,ge.height,M.format,M.type);for(let Te of M.layerUpdates){let Le=ge.data.subarray(Te*ae/ge.data.BYTES_PER_ELEMENT,(Te+1)*ae/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Te,ge.width,ge.height,1,N,W,Le)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,N,W,ge.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,B,ge.width,ge.height,ge.depth,0,N,W,ge.data);else if(M.isData3DTexture)Q?(ue&&t.texStorage3D(i.TEXTURE_3D,pe,B,ge.width,ge.height,ge.depth),I&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,N,W,ge.data)):t.texImage3D(i.TEXTURE_3D,0,B,ge.width,ge.height,ge.depth,0,N,W,ge.data);else if(M.isFramebufferTexture){if(ue)if(Q)t.texStorage2D(i.TEXTURE_2D,pe,B,ge.width,ge.height);else{let ae=ge.width,Te=ge.height;for(let Le=0;Le<pe;Le++)t.texImage2D(i.TEXTURE_2D,Le,B,ae,Te,0,N,W,null),ae>>=1,Te>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){let ae=i.canvas;if(ae.hasAttribute("layoutsubtree")||ae.setAttribute("layoutsubtree","true"),ge.parentNode!==ae){ae.appendChild(ge),f.add(M),ae.onpaint=Te=>{let Le=Te.changedElements;for(let _e of f)Le.includes(_e.image)&&(_e.needsUpdate=!0)},ae.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ge);else{let Le=i.RGBA,_e=i.RGBA,ke=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Le,_e,ke,ge)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(te.length>0){if(Q&&ue){let ae=it(te[0]);t.texStorage2D(i.TEXTURE_2D,pe,B,ae.width,ae.height)}for(let ae=0,Te=te.length;ae<Te;ae++)J=te[ae],Q?I&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,N,W,J):t.texImage2D(i.TEXTURE_2D,ae,B,N,W,J);M.generateMipmaps=!1}else if(Q){if(ue){let ae=it(ge);t.texStorage2D(i.TEXTURE_2D,pe,B,ae.width,ae.height)}I&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,N,W,ge)}else t.texImage2D(i.TEXTURE_2D,0,B,N,W,ge);m(M)&&y(q),Pe.__version=Me.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function He(C,M,X){if(M.image.length!==6)return;let q=Je(C,M),re=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+X);let Me=n.get(re);if(re.version!==Me.__version||q===!0){t.activeTexture(i.TEXTURE0+X);let Pe=mt.getPrimaries(mt.workingColorSpace),he=M.colorSpace===ki?null:mt.getPrimaries(M.colorSpace),ge=M.colorSpace===ki||Pe===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let N=M.isCompressedTexture||M.image[0].isCompressedTexture,W=M.image[0]&&M.image[0].isDataTexture,B=[];for(let _e=0;_e<6;_e++)!N&&!W?B[_e]=g(M.image[_e],!0,s.maxCubemapSize):B[_e]=W?M.image[_e].image:M.image[_e],B[_e]=Ge(M,B[_e]);let J=B[0],te=r.convert(M.format,M.colorSpace),Q=r.convert(M.type),ue=_(M.internalFormat,te,Q,M.normalized,M.colorSpace),I=M.isVideoTexture!==!0,pe=Me.__version===void 0||q===!0,ae=re.dataReady,Te=T(M,J);Ve(i.TEXTURE_CUBE_MAP,M);let Le;if(N){I&&pe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,ue,J.width,J.height);for(let _e=0;_e<6;_e++){Le=B[_e].mipmaps;for(let ke=0;ke<Le.length;ke++){let We=Le[ke];M.format!==Ln?te!==null?I?ae&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke,0,0,We.width,We.height,te,We.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke,ue,We.width,We.height,0,We.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke,0,0,We.width,We.height,te,Q,We.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke,ue,We.width,We.height,0,te,Q,We.data)}}}else{if(Le=M.mipmaps,I&&pe){Le.length>0&&Te++;let _e=it(B[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,ue,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(W){I?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,B[_e].width,B[_e].height,te,Q,B[_e].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ue,B[_e].width,B[_e].height,0,te,Q,B[_e].data);for(let ke=0;ke<Le.length;ke++){let Tt=Le[ke].image[_e].image;I?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke+1,0,0,Tt.width,Tt.height,te,Q,Tt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke+1,ue,Tt.width,Tt.height,0,te,Q,Tt.data)}}else{I?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,te,Q,B[_e]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ue,te,Q,B[_e]);for(let ke=0;ke<Le.length;ke++){let We=Le[ke];I?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke+1,0,0,te,Q,We.image[_e]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke+1,ue,te,Q,We.image[_e])}}}m(M)&&y(i.TEXTURE_CUBE_MAP),Me.__version=re.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function be(C,M,X,q,re,Me){let Pe=r.convert(X.format,X.colorSpace),he=r.convert(X.type),ge=_(X.internalFormat,Pe,he,X.normalized,X.colorSpace),N=n.get(M),W=n.get(X);if(W.__renderTarget=M,!N.__hasExternalTextures){let B=Math.max(1,M.width>>Me),J=Math.max(1,M.height>>Me);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,Me,ge,B,J,M.depth,0,Pe,he,null):t.texImage2D(re,Me,ge,B,J,0,Pe,he,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),Ce(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,re,W.__webglTexture,0,Ie(M)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,re,W.__webglTexture,Me),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ze(C,M,X){if(i.bindRenderbuffer(i.RENDERBUFFER,C),M.depthBuffer){let q=M.depthTexture,re=q&&q.isDepthTexture?q.type:null,Me=b(M.stencilBuffer,re),Pe=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ce(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ie(M),Me,M.width,M.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie(M),Me,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Me,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pe,i.RENDERBUFFER,C)}else{let q=M.textures;for(let re=0;re<q.length;re++){let Me=q[re],Pe=r.convert(Me.format,Me.colorSpace),he=r.convert(Me.type),ge=_(Me.internalFormat,Pe,he,Me.normalized,Me.colorSpace);Ce(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ie(M),ge,M.width,M.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie(M),ge,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ge,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function et(C,M,X){let q=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let re=n.get(M.depthTexture);if(re.__renderTarget=M,(!re.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q){if(re.__webglInit===void 0&&(re.__webglInit=!0,M.depthTexture.addEventListener("dispose",A)),re.__webglTexture===void 0){re.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture),Ve(i.TEXTURE_CUBE_MAP,M.depthTexture);let N=r.convert(M.depthTexture.format),W=r.convert(M.depthTexture.type),B;M.depthTexture.format===mi?B=i.DEPTH_COMPONENT24:M.depthTexture.format===Si&&(B=i.DEPTH24_STENCIL8);for(let J=0;J<6;J++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,B,M.width,M.height,0,N,W,null)}}else K(M.depthTexture,0);let Me=re.__webglTexture,Pe=Ie(M),he=q?i.TEXTURE_CUBE_MAP_POSITIVE_X+X:i.TEXTURE_2D,ge=M.depthTexture.format===Si?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===mi)Ce(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ge,he,Me,0,Pe):i.framebufferTexture2D(i.FRAMEBUFFER,ge,he,Me,0);else if(M.depthTexture.format===Si)Ce(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ge,he,Me,0,Pe):i.framebufferTexture2D(i.FRAMEBUFFER,ge,he,Me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function fe(C){let M=n.get(C),X=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){let q=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),q){let re=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,q.removeEventListener("dispose",re)};q.addEventListener("dispose",re),M.__depthDisposeCallback=re}M.__boundDepthTexture=q}if(C.depthTexture&&!M.__autoAllocateDepthBuffer)if(X)for(let q=0;q<6;q++)et(M.__webglFramebuffer[q],C,q);else{let q=C.texture.mipmaps;q&&q.length>0?et(M.__webglFramebuffer[0],C,0):et(M.__webglFramebuffer,C,0)}else if(X){M.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[q]),M.__webglDepthbuffer[q]===void 0)M.__webglDepthbuffer[q]=i.createRenderbuffer(),Ze(M.__webglDepthbuffer[q],C,!1);else{let re=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=M.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,Me),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,Me)}}else{let q=C.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),Ze(M.__webglDepthbuffer,C,!1);else{let re=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Me),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,Me)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function me(C,M,X){let q=n.get(C);M!==void 0&&be(q.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&fe(C)}function ve(C){let M=C.texture,X=n.get(C),q=n.get(M);C.addEventListener("dispose",v);let re=C.textures,Me=C.isWebGLCubeRenderTarget===!0,Pe=re.length>1;if(Pe||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=M.version,o.memory.textures++),Me){X.__webglFramebuffer=[];for(let he=0;he<6;he++)if(M.mipmaps&&M.mipmaps.length>0){X.__webglFramebuffer[he]=[];for(let ge=0;ge<M.mipmaps.length;ge++)X.__webglFramebuffer[he][ge]=i.createFramebuffer()}else X.__webglFramebuffer[he]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){X.__webglFramebuffer=[];for(let he=0;he<M.mipmaps.length;he++)X.__webglFramebuffer[he]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Pe)for(let he=0,ge=re.length;he<ge;he++){let N=n.get(re[he]);N.__webglTexture===void 0&&(N.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&Ce(C)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let he=0;he<re.length;he++){let ge=re[he];X.__webglColorRenderbuffer[he]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[he]);let N=r.convert(ge.format,ge.colorSpace),W=r.convert(ge.type),B=_(ge.internalFormat,N,W,ge.normalized,ge.colorSpace,C.isXRRenderTarget===!0),J=Ie(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,J,B,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,X.__webglColorRenderbuffer[he])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),Ze(X.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Me){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Ve(i.TEXTURE_CUBE_MAP,M);for(let he=0;he<6;he++)if(M.mipmaps&&M.mipmaps.length>0)for(let ge=0;ge<M.mipmaps.length;ge++)be(X.__webglFramebuffer[he][ge],C,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,ge);else be(X.__webglFramebuffer[he],C,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(M)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let he=0,ge=re.length;he<ge;he++){let N=re[he],W=n.get(N),B=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(B=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(B,W.__webglTexture),Ve(B,N),be(X.__webglFramebuffer,C,N,i.COLOR_ATTACHMENT0+he,B,0),m(N)&&y(B)}t.unbindTexture()}else{let he=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(he=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,q.__webglTexture),Ve(he,M),M.mipmaps&&M.mipmaps.length>0)for(let ge=0;ge<M.mipmaps.length;ge++)be(X.__webglFramebuffer[ge],C,M,i.COLOR_ATTACHMENT0,he,ge);else be(X.__webglFramebuffer,C,M,i.COLOR_ATTACHMENT0,he,0);m(M)&&y(he),t.unbindTexture()}C.depthBuffer&&fe(C)}function Se(C){let M=C.textures;for(let X=0,q=M.length;X<q;X++){let re=M[X];if(m(re)){let Me=S(C),Pe=n.get(re).__webglTexture;t.bindTexture(Me,Pe),y(Me),t.unbindTexture()}}}let z=[],ye=[];function Ae(C){if(C.samples>0){if(Ce(C)===!1){let M=C.textures,X=C.width,q=C.height,re=i.COLOR_BUFFER_BIT,Me=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=n.get(C),he=M.length>1;if(he)for(let N=0;N<M.length;N++)t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+N,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+N,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);let ge=C.texture.mipmaps;ge&&ge.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let N=0;N<M.length;N++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),he){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[N]);let W=n.get(M[N]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,W,0)}i.blitFramebuffer(0,0,X,q,0,0,X,q,re,i.NEAREST),l===!0&&(z.length=0,ye.length=0,z.push(i.COLOR_ATTACHMENT0+N),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(z.push(Me),ye.push(Me),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ye)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,z))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),he)for(let N=0;N<M.length;N++){t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+N,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[N]);let W=n.get(M[N]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+N,i.TEXTURE_2D,W,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let M=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Ie(C){return Math.min(s.maxSamples,C.samples)}function Ce(C){let M=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function F(C){let M=o.render.frame;h.get(C)!==M&&(h.set(C,M),C.update())}function Ge(C,M){let X=C.colorSpace,q=C.format,re=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||X!==Wr&&X!==ki&&(mt.getTransfer(X)===Et?(q!==Ln||re!==Sn)&&tt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rt("WebGLTextures: Unsupported texture color space:",X)),M}function it(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=k,this.getTextureUnits=U,this.setTextureUnits=V,this.setTexture2D=K,this.setTexture2DArray=Z,this.setTexture3D=$,this.setTextureCube=ne,this.rebindTextures=me,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Ce,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function y_(i,e){function t(n,s=ki){let r,o=mt.getTransfer(s);if(n===Sn)return i.UNSIGNED_BYTE;if(n===pl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ml)return i.UNSIGNED_SHORT_5_5_5_1;if(n===uh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===dh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ch)return i.BYTE;if(n===hh)return i.SHORT;if(n===xr)return i.UNSIGNED_SHORT;if(n===fl)return i.INT;if(n===li)return i.UNSIGNED_INT;if(n===$n)return i.FLOAT;if(n===$t)return i.HALF_FLOAT;if(n===fh)return i.ALPHA;if(n===ph)return i.RGB;if(n===Ln)return i.RGBA;if(n===mi)return i.DEPTH_COMPONENT;if(n===Si)return i.DEPTH_STENCIL;if(n===gl)return i.RED;if(n===xl)return i.RED_INTEGER;if(n===as)return i.RG;if(n===_l)return i.RG_INTEGER;if(n===vl)return i.RGBA_INTEGER;if(n===Io||n===Do||n===Lo||n===Uo)if(o===Et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Io)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Do)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Io)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Do)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Lo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Uo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yl||n===Ml||n===Sl||n===El)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===yl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ml)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Sl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===El)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===bl||n===Tl||n===wl||n===Al||n===Rl||n===No||n===Cl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===bl||n===Tl)return o===Et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===wl)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Al)return r.COMPRESSED_R11_EAC;if(n===Rl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===No)return r.COMPRESSED_RG11_EAC;if(n===Cl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Pl||n===Il||n===Dl||n===Ll||n===Ul||n===Nl||n===Fl||n===Bl||n===Ol||n===Hl||n===zl||n===Gl||n===kl||n===Vl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Pl)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Il)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Dl)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ll)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ul)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Nl)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fl)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Bl)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ol)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Hl)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zl)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Gl)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===kl)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vl)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wl||n===Xl||n===ql)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Wl)return o===Et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ql)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Yl||n===Zl||n===Fo||n===$l)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Yl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Zl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$l)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===os?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var M_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,S_=`
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

}`,kh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new io(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Pt({vertexShader:M_,fragmentShader:S_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new De(new Zt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Vh=class extends gi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,p=null,x=typeof XRWebGLBinding<"u",g=new kh,m={},y=t.getContextAttributes(),S=null,_=null,b=[],T=[],A=new xe,v=null,E=null,R=new dn;R.viewport=new Gt;let P=new dn;P.viewport=new Gt;let L=[R,P],k=new al,U=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let ce=b[oe];return ce===void 0&&(ce=new ir,b[oe]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(oe){let ce=b[oe];return ce===void 0&&(ce=new ir,b[oe]=ce),ce.getGripSpace()},this.getHand=function(oe){let ce=b[oe];return ce===void 0&&(ce=new ir,b[oe]=ce),ce.getHandSpace()};function H(oe){let ce=T.indexOf(oe.inputSource);if(ce===-1)return;let we=b[ce];we!==void 0&&(we.update(oe.inputSource,oe.frame,c||o),we.dispatchEvent({type:oe.type,data:oe.inputSource}))}function Y(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",K);for(let oe=0;oe<b.length;oe++){let ce=T[oe];ce!==null&&(T[oe]=null,b[oe].disconnect(ce))}U=null,V=null,g.reset();for(let oe in m)delete m[oe];if(e.setRenderTarget(S),d=null,u=null,f=null,s=null,_=null,Je.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(A.width,A.height,!1),E!==null){let oe=E.camera;oe.fov=E.fov,oe.zoom=E.zoom,oe.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){r=oe,n.isPresenting===!0&&tt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){a=oe,n.isPresenting===!0&&tt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(oe){c=oe},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(oe){if(s=oe,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",K),y.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,He=null,be=null;y.depth&&(be=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=y.stencil?Si:mi,He=y.stencil?os:li);let Ze={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Ze),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),_=new Bt(u.textureWidth,u.textureHeight,{format:Ln,type:Sn,depthTexture:new yi(u.textureWidth,u.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let we={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,we),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Bt(d.framebufferWidth,d.framebufferHeight,{format:Ln,type:Sn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Je.setContext(s),Je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function K(oe){for(let ce=0;ce<oe.removed.length;ce++){let we=oe.removed[ce],He=T.indexOf(we);He>=0&&(T[He]=null,b[He].disconnect(we))}for(let ce=0;ce<oe.added.length;ce++){let we=oe.added[ce],He=T.indexOf(we);if(He===-1){for(let Ze=0;Ze<b.length;Ze++)if(Ze>=T.length){T.push(we),He=Ze;break}else if(T[Ze]===null){T[Ze]=we,He=Ze;break}if(He===-1)break}let be=b[He];be&&be.connect(we)}}let Z=new D,$=new D;function ne(oe,ce,we){Z.setFromMatrixPosition(ce.matrixWorld),$.setFromMatrixPosition(we.matrixWorld);let He=Z.distanceTo($),be=ce.projectionMatrix.elements,Ze=we.projectionMatrix.elements,et=be[14]/(be[10]-1),fe=be[14]/(be[10]+1),me=(be[9]+1)/be[5],ve=(be[9]-1)/be[5],Se=(be[8]-1)/be[0],z=(Ze[8]+1)/Ze[0],ye=et*Se,Ae=et*z,Ie=He/(-Se+z),Ce=Ie*-Se;if(ce.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(Ce),oe.translateZ(Ie),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),be[10]===-1)oe.projectionMatrix.copy(ce.projectionMatrix),oe.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{let F=et+Ie,Ge=fe+Ie,it=ye-Ce,C=Ae+(He-Ce),M=me*fe/Ge*F,X=ve*fe/Ge*F;oe.projectionMatrix.makePerspective(it,C,M,X,F,Ge),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function de(oe,ce){ce===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(ce.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(s===null)return;let ce=oe.near,we=oe.far;g.texture!==null&&(g.depthNear>0&&(ce=g.depthNear),g.depthFar>0&&(we=g.depthFar)),k.near=P.near=R.near=ce,k.far=P.far=R.far=we,(U!==k.near||V!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),U=k.near,V=k.far),k.layers.mask=oe.layers.mask|6,R.layers.mask=k.layers.mask&-5,P.layers.mask=k.layers.mask&-3;let He=oe.parent,be=k.cameras;de(k,He);for(let Ze=0;Ze<be.length;Ze++)de(be[Ze],He);be.length===2?ne(k,R,P):k.projectionMatrix.copy(R.projectionMatrix),E===null&&oe.isPerspectiveCamera&&(E={camera:oe,fov:oe.fov,zoom:oe.zoom}),Ee(oe,k,He)};function Ee(oe,ce,we){we===null?oe.matrix.copy(ce.matrixWorld):(oe.matrix.copy(we.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(ce.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(ce.projectionMatrix),oe.projectionMatrixInverse.copy(ce.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=_s*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(oe){l=oe,u!==null&&(u.fixedFoveation=oe),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=oe)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(k)},this.getCameraTexture=function(oe){return m[oe]};let Ye=null;function Ve(oe,ce){if(h=ce.getViewerPose(c||o),p=ce,h!==null){let we=h.views;d!==null&&(e.setRenderTargetFramebuffer(_,d.framebuffer),e.setRenderTarget(_));let He=!1;we.length!==k.cameras.length&&(k.cameras.length=0,He=!0);for(let fe=0;fe<we.length;fe++){let me=we[fe],ve=null;if(d!==null)ve=d.getViewport(me);else{let z=f.getViewSubImage(u,me);ve=z.viewport,fe===0&&(e.setRenderTargetTextures(_,z.colorTexture,z.depthStencilTexture),e.setRenderTarget(_))}let Se=L[fe];Se===void 0&&(Se=new dn,Se.layers.enable(fe),Se.viewport=new Gt,L[fe]=Se),Se.matrix.fromArray(me.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(me.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(ve.x,ve.y,ve.width,ve.height),fe===0&&(k.matrix.copy(Se.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),He===!0&&k.cameras.push(Se)}let be=s.enabledFeatures;if(be&&be.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=n.getBinding();let fe=f.getDepthInformation(we[0]);fe&&fe.isValid&&fe.texture&&g.init(fe,s.renderState)}if(be&&be.includes("camera-access")&&x){e.state.unbindTexture(),f=n.getBinding();for(let fe=0;fe<we.length;fe++){let me=we[fe].camera;if(me){let ve=m[me];ve||(ve=new io,m[me]=ve);let Se=f.getCameraImage(me);ve.sourceTexture=Se}}}}for(let we=0;we<b.length;we++){let He=T[we],be=b[we];He!==null&&be!==void 0&&be.update(He,ce,c||o)}Ye&&Ye(oe,ce),ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ce}),p=null}let Je=new Gd;Je.setAnimationLoop(Ve),this.setAnimationLoop=function(oe){Ye=oe},this.dispose=function(){}}},E_=new ut,Yd=new ct;Yd.set(-1,0,0,0,1,0,0,0,1);function b_(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,yh(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,y,S,_){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),f(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),u(g,m),m.isMeshPhysicalMaterial&&d(g,m,_)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,y,S):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===on&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===on&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let y=e.get(m),S=y.envMap,_=y.envMapRotation;S&&(g.envMap.value=S,g.envMapRotation.value.setFromMatrix4(E_.makeRotationFromEuler(_)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Yd),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,y,S){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=S*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,y){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===on&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let y=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function T_(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,b){let T=b.program;n.uniformBlockBinding(_,T)}function c(_,b){let T=s[_.id];T===void 0&&(g(_),T=h(_),s[_.id]=T,_.addEventListener("dispose",y));let A=b.program;n.updateUBOMapping(_,A);let v=e.render.frame;r[_.id]!==v&&(u(_),r[_.id]=v)}function h(_){let b=f();_.__bindingPointIndex=b;let T=i.createBuffer(),A=_.__size,v=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,A,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,T),T}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){let b=s[_.id],T=_.uniforms,A=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let v=0,E=T.length;v<E;v++){let R=T[v];if(Array.isArray(R))for(let P=0,L=R.length;P<L;P++)d(R[P],v,P,A);else d(R,v,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(_,b,T,A){if(x(_,b,T,A)===!0){let v=_.__offset,E=_.value;if(Array.isArray(E)){let R=0;for(let P=0;P<E.length;P++){let L=E[P],k=m(L);p(L,_.__data,R),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(R+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(E,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,_.__data)}}function p(_,b,T){typeof _=="number"||typeof _=="boolean"?b[0]=_:_.isMatrix3?(b[0]=_.elements[0],b[1]=_.elements[1],b[2]=_.elements[2],b[3]=0,b[4]=_.elements[3],b[5]=_.elements[4],b[6]=_.elements[5],b[7]=0,b[8]=_.elements[6],b[9]=_.elements[7],b[10]=_.elements[8],b[11]=0):ArrayBuffer.isView(_)?b.set(new _.constructor(_.buffer,_.byteOffset,b.length)):_.toArray(b,T)}function x(_,b,T,A){let v=_.value,E=b+"_"+T;if(A[E]===void 0)return typeof v=="number"||typeof v=="boolean"?A[E]=v:ArrayBuffer.isView(v)?A[E]=v.slice():A[E]=v.clone(),!0;{let R=A[E];if(typeof v=="number"||typeof v=="boolean"){if(R!==v)return A[E]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(R.equals(v)===!1)return R.copy(v),!0}}return!1}function g(_){let b=_.uniforms,T=0,A=16;for(let E=0,R=b.length;E<R;E++){let P=Array.isArray(b[E])?b[E]:[b[E]];for(let L=0,k=P.length;L<k;L++){let U=P[L],V=Array.isArray(U.value)?U.value:[U.value];for(let H=0,Y=V.length;H<Y;H++){let K=V[H],Z=m(K),$=T%A,ne=$%Z.boundary,de=$+ne;T+=ne,de!==0&&A-de<Z.storage&&(T+=A-de),U.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=T,T+=Z.storage}}}let v=T%A;return v>0&&(T+=A-v),_.__size=T,_.__cache={},this}function m(_){let b={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=48,b.storage=48):_.isMatrix4?(b.boundary=64,b.storage=64):_.isTexture?tt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(b.boundary=16,b.storage=_.byteLength):tt("WebGLRenderer: Unsupported uniform value type.",_),b}function y(_){let b=_.target;b.removeEventListener("dispose",y);let T=o.indexOf(b.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function S(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:S}}var w_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ei=null;function A_(){return Ei===null&&(Ei=new Bi(w_,16,16,as,$t),Ei.name="DFG_LUT",Ei.minFilter=gn,Ei.magFilter=gn,Ei.wrapS=di,Ei.wrapT=di,Ei.generateMipmaps=!1,Ei.needsUpdate=!0),Ei}var tc=class{constructor(e={}){let{canvas:t=ld(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Sn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=d,g=new Set([vl,_l,xl]),m=new Set([Sn,li,xr,os,pl,ml]),y=new Uint32Array(4),S=new Int32Array(4),_=new D,b=null,T=null,A=[],v=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,P=!1,L=null,k=null,U=null,V=null;this._outputColorSpace=Vt;let H=0,Y=0,K=null,Z=-1,$=null,ne=new Gt,de=new Gt,Ee=null,Ye=new Re(0),Ve=0,Je=t.width,oe=t.height,ce=1,we=null,He=null,be=new Gt(0,0,Je,oe),Ze=new Gt(0,0,Je,oe),et=!1,fe=new lr,me=!1,ve=!1,Se=new ut,z=new D,ye=new Gt,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ie=!1;function Ce(){return K===null?ce:1}let F=n;function Ge(w,G){return t.getContext(w,G)}let it,C,M,X,q,re,Me,Pe,he,ge,N,W,B,J,te,Q,ue,I,pe,ae,Te,Le,_e;try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Tt,!1),t.addEventListener("webglcontextrestored",_t,!1),t.addEventListener("webglcontextcreationerror",cn,!1),F===null){let G="webgl2";if(F=Ge(G,w),F===null)throw Ge(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ke()}catch(w){throw t.removeEventListener("webglcontextlost",Tt,!1),t.removeEventListener("webglcontextrestored",_t,!1),t.removeEventListener("webglcontextcreationerror",cn,!1),rt("WebGLRenderer: "+w.message),w}function ke(){it=new Ug(F),it.init(),Te=new y_(F,it),C=new bg(F,it,e,Te),M=new __(F,it),C.reversedDepthBuffer&&u&&M.buffers.depth.setReversed(!0),k=F.createFramebuffer(),U=F.createFramebuffer(),V=F.createFramebuffer(),X=new Bg(F),q=new s_,re=new v_(F,it,M,q,C,Te,X),Me=new Lg(R),Pe=new Hp(F),Le=new Sg(F,Pe),he=new Ng(F,Pe,X,Le),ge=new Hg(F,he,Pe,Le,X),I=new Og(F,C,re),te=new Tg(q),N=new i_(R,Me,it,C,Le,te),W=new b_(R,q),B=new o_,J=new d_(it),ue=new Mg(R,Me,M,ge,p,l),Q=new x_(R,ge,C),_e=new T_(F,X,C,M),pe=new Eg(F,it,X),ae=new Fg(F,it,X),X.programs=N.programs,R.capabilities=C,R.extensions=it,R.properties=q,R.renderLists=B,R.shadowMap=Q,R.state=M,R.info=X}x!==Sn&&(E=new Gg(x,t.width,t.height,a,s,r));let We=new Vh(R,F);this.xr=We,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let w=it.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=it.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(w){w!==void 0&&(ce=w,this.setSize(Je,oe,!1))},this.getSize=function(w){return w.set(Je,oe)},this.setSize=function(w,G,se=!0){if(We.isPresenting){tt("WebGLRenderer: Can't change size while VR device is presenting.");return}Je=w,oe=G,t.width=Math.floor(w*ce),t.height=Math.floor(G*ce),se===!0&&(t.style.width=w+"px",t.style.height=G+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,w,G)},this.getDrawingBufferSize=function(w){return w.set(Je*ce,oe*ce).floor()},this.setDrawingBufferSize=function(w,G,se){Je=w,oe=G,ce=se,t.width=Math.floor(w*se),t.height=Math.floor(G*se),this.setViewport(0,0,w,G)},this.setEffects=function(w){if(x===Sn){rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let G=0;G<w.length;G++)if(w[G].isOutputPass===!0){tt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(ne)},this.getViewport=function(w){return w.copy(be)},this.setViewport=function(w,G,se,j){w.isVector4?be.set(w.x,w.y,w.z,w.w):be.set(w,G,se,j),M.viewport(ne.copy(be).multiplyScalar(ce).round())},this.getScissor=function(w){return w.copy(Ze)},this.setScissor=function(w,G,se,j){w.isVector4?Ze.set(w.x,w.y,w.z,w.w):Ze.set(w,G,se,j),M.scissor(de.copy(Ze).multiplyScalar(ce).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(w){M.setScissorTest(et=w)},this.setOpaqueSort=function(w){we=w},this.setTransparentSort=function(w){He=w},this.getClearColor=function(w){return w.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor(...arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha(...arguments)},this.clear=function(w=!0,G=!0,se=!0){let j=0;if(w){let ee=!1;if(K!==null){let Ne=K.texture.format;ee=g.has(Ne)}if(ee){let Ne=K.texture.type,Oe=m.has(Ne),Fe=ue.getClearColor(),qe=ue.getClearAlpha(),Xe=Fe.r,lt=Fe.g,vt=Fe.b;Oe?(y[0]=Xe,y[1]=lt,y[2]=vt,y[3]=qe,F.clearBufferuiv(F.COLOR,0,y)):(S[0]=Xe,S[1]=lt,S[2]=vt,S[3]=qe,F.clearBufferiv(F.COLOR,0,S))}else j|=F.COLOR_BUFFER_BIT}G&&(j|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),se&&(j|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&F.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),L=w},this.dispose=function(){t.removeEventListener("webglcontextlost",Tt,!1),t.removeEventListener("webglcontextrestored",_t,!1),t.removeEventListener("webglcontextcreationerror",cn,!1),ue.dispose(),B.dispose(),J.dispose(),q.dispose(),Me.dispose(),ge.dispose(),Le.dispose(),_e.dispose(),N.dispose(),We.dispose(),We.removeEventListener("sessionstart",kn),We.removeEventListener("sessionend",ci),pn.stop()};function Tt(w){w.preventDefault(),Yr("WebGLRenderer: Context Lost."),P=!0}function _t(){Yr("WebGLRenderer: Context Restored."),P=!1;let w=X.autoReset,G=Q.enabled,se=Q.autoUpdate,j=Q.needsUpdate,ee=Q.type;ke(),X.autoReset=w,Q.enabled=G,Q.autoUpdate=se,Q.needsUpdate=j,Q.type=ee}function cn(w){rt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function hn(w){let G=w.target;G.removeEventListener("dispose",hn),Is(G)}function Is(w){hs(w),q.remove(w)}function hs(w){let G=q.get(w).programs;G!==void 0&&(G.forEach(function(se){N.releaseProgram(se)}),w.isShaderMaterial&&N.releaseShaderCache(w))}this.renderBufferDirect=function(w,G,se,j,ee,Ne){G===null&&(G=Ae);let Oe=ee.isMesh&&ee.matrixWorld.determinantAffine()<0,Fe=xn(w,G,se,j,ee);M.setMaterial(j,Oe);let qe=se.index,Xe=1;if(j.wireframe===!0){if(qe=he.getWireframeAttribute(se),qe===void 0)return;Xe=2}let lt=se.drawRange,vt=se.attributes.position,$e=lt.start*Xe,At=(lt.start+lt.count)*Xe;Ne!==null&&($e=Math.max($e,Ne.start*Xe),At=Math.min(At,(Ne.start+Ne.count)*Xe)),qe!==null?($e=Math.max($e,0),At=Math.min(At,qe.count)):vt!=null&&($e=Math.max($e,0),At=Math.min(At,vt.count));let nn=At-$e;if(nn<0||nn===1/0)return;Le.setup(ee,j,Fe,se,qe);let Nt,Dt=pe;if(qe!==null&&(Nt=Pe.get(qe),Dt=ae,Dt.setIndex(Nt)),ee.isMesh)j.wireframe===!0?(M.setLineWidth(j.wireframeLinewidth*Ce()),Dt.setMode(F.LINES)):Dt.setMode(F.TRIANGLES);else if(ee.isLine){let _n=j.linewidth;_n===void 0&&(_n=1),M.setLineWidth(_n*Ce()),ee.isLineSegments?Dt.setMode(F.LINES):ee.isLineLoop?Dt.setMode(F.LINE_LOOP):Dt.setMode(F.LINE_STRIP)}else ee.isPoints?Dt.setMode(F.POINTS):ee.isSprite&&Dt.setMode(F.TRIANGLES);if(ee.isBatchedMesh)if(it.get("WEBGL_multi_draw"))Dt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{let _n=ee._multiDrawStarts,ze=ee._multiDrawCounts,bn=ee._multiDrawCount,St=qe?Pe.get(qe).bytesPerElement:1,Vn=q.get(j).currentProgram.getUniforms();for(let hi=0;hi<bn;hi++)Vn.setValue(F,"_gl_DrawID",hi),Dt.render(_n[hi]/St,ze[hi])}else if(ee.isInstancedMesh)Dt.renderInstances($e,nn,ee.count);else if(se.isInstancedBufferGeometry){let _n=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,ze=Math.min(se.instanceCount,_n);Dt.renderInstances($e,nn,ze)}else Dt.render($e,nn)};function Xi(w,G,se,j){L!==null&&w.isNodeMaterial&&L.setObject(j,w),me===!0&&te.setState(w,se,!1),w.transparent===!0&&w.side===Ht&&w.forceSinglePass===!1?(w.side=on,w.needsUpdate=!0,zt(w,G,j),w.side=is,w.needsUpdate=!0,zt(w,G,j),w.side=Ht):zt(w,G,j)}this.compile=function(w,G,se=null){se===null&&(se=w),L!==null&&L.renderStart(w,G,se),T=J.get(se),T.init(G),v.push(T),se.traverseVisible(function(ee){ee.isLight&&ee.layers.test(G.layers)&&(T.pushLight(ee),ee.castShadow&&T.pushShadow(ee))}),w!==se&&w.traverseVisible(function(ee){ee.isLight&&ee.layers.test(G.layers)&&(T.pushLight(ee),ee.castShadow&&T.pushShadow(ee))}),T.setupLights(),L!==null&&L.updateLights(T.state.lightsArray),ve=this.localClippingEnabled,me=te.init(this.clippingPlanes,ve),me===!0&&te.setGlobalState(this.clippingPlanes,G),L!==null&&Q.render(T.state.shadowsArray,se,G);let j=new Set;return w.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;let Ne=ee.material;if(Ne)if(Array.isArray(Ne))for(let Oe=0;Oe<Ne.length;Oe++){let Fe=Ne[Oe];Xi(Fe,se,G,ee),j.add(Fe)}else Xi(Ne,se,G,ee),j.add(Ne)}),T=v.pop(),L!==null&&L.renderEnd(),j},this.compileAsync=function(w,G,se=null){let j=this.compile(w,G,se);return new Promise(ee=>{function Ne(){if(j.forEach(function(Oe){let qe=q.get(Oe).currentProgram;(qe===void 0||qe.isReady())&&j.delete(Oe)}),j.size===0){ee(w);return}setTimeout(Ne,10)}it.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let us=null;function en(w){us&&us(w)}function kn(){pn.stop()}function ci(){pn.start()}let pn=new Gd;pn.setAnimationLoop(en),typeof self<"u"&&pn.setContext(self),this.setAnimationLoop=function(w){us=w,We.setAnimationLoop(w),w===null?pn.stop():pn.start()},We.addEventListener("sessionstart",kn),We.addEventListener("sessionend",ci),this.render=function(w,G){if(G!==void 0&&G.isCamera!==!0){rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;L!==null&&L.renderStart(w,G);let se=We.enabled===!0&&We.isPresenting===!0,j=E!==null&&(K===null||se)&&E.begin(R,K);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),We.enabled===!0&&We.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(We.cameraAutoUpdate===!0&&We.updateCamera(G),G=We.getCamera()),w.isScene===!0&&w.onBeforeRender(R,w,G,K),T=J.get(w,v.length),T.init(G),T.state.textureUnits=re.getTextureUnits(),v.push(T),Se.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),fe.setFromProjectionMatrix(Se,oi,G.reversedDepth),ve=this.localClippingEnabled,me=te.init(this.clippingPlanes,ve),b=B.get(w,A.length),b.init(),A.push(b),We.enabled===!0&&We.isPresenting===!0){let Oe=R.xr.getDepthSensingMesh();Oe!==null&&ei(Oe,G,-1/0,R.sortObjects)}ei(w,G,0,R.sortObjects),b.finish(),L!==null&&L.updateLights(T.state.lightsArray),R.sortObjects===!0&&b.sort(we,He),Ie=We.enabled===!1||We.isPresenting===!1||We.hasDepthSensing()===!1,Ie&&ue.addToRenderList(b,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),me===!0&&te.beginShadows();let ee=T.state.shadowsArray;if(Q.render(ee,w,G),me===!0&&te.endShadows(),(j&&E.hasRenderPass())===!1){let Oe=b.opaque,Fe=b.transmissive;if(T.setupLights(),G.isArrayCamera){let qe=G.cameras;if(Fe.length>0)for(let Xe=0,lt=qe.length;Xe<lt;Xe++){let vt=qe[Xe];ds(Oe,Fe,w,vt)}Ie&&ue.render(w);for(let Xe=0,lt=qe.length;Xe<lt;Xe++){let vt=qe[Xe];mn(b,w,vt,vt.viewport)}}else Fe.length>0&&ds(Oe,Fe,w,G),Ie&&ue.render(w),mn(b,w,G)}K!==null&&Y===0&&(re.updateMultisampleRenderTarget(K),re.updateRenderTargetMipmap(K)),j&&E.end(R),w.isScene===!0&&w.onAfterRender(R,w,G),Le.resetDefaultState(),Z=-1,$=null,v.pop(),v.length>0?(T=v[v.length-1],re.setTextureUnits(T.state.textureUnits),me===!0&&te.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?b=A[A.length-1]:b=null,L!==null&&L.renderEnd()};function ei(w,G,se,j){if(w.visible===!1)return;if(w.layers.test(G.layers)){if(w.isGroup)se=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(G);else if(w.isLightProbeGrid)T.pushLightProbeGrid(w);else if(w.isLight)T.pushLight(w),w.castShadow&&T.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(fe)){j&&ye.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Se);let Oe=ge.update(w),Fe=w.material;Fe.visible&&b.push(w,Oe,Fe,se,ye.z,null,G)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(fe))){let Oe=ge.update(w),Fe=w.material;if(j&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ye.copy(w.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),ye.copy(Oe.boundingSphere.center)),ye.applyMatrix4(w.matrixWorld).applyMatrix4(Se)),Array.isArray(Fe)){let qe=Oe.groups;for(let Xe=0,lt=qe.length;Xe<lt;Xe++){let vt=qe[Xe],$e=Fe[vt.materialIndex];$e&&$e.visible&&b.push(w,Oe,$e,se,ye.z,vt,G)}}else Fe.visible&&b.push(w,Oe,Fe,se,ye.z,null,G)}}let Ne=w.children;for(let Oe=0,Fe=Ne.length;Oe<Fe;Oe++)ei(Ne[Oe],G,se,j)}function mn(w,G,se,j){let{opaque:ee,transmissive:Ne,transparent:Oe}=w;T.setupLightsView(se),me===!0&&te.setGlobalState(R.clippingPlanes,se),j&&M.viewport(ne.copy(j)),ee.length>0&&ie(ee,G,se),Ne.length>0&&ie(Ne,G,se),Oe.length>0&&ie(Oe,G,se),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function ds(w,G,se,j){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[j.id]===void 0){let $e=it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[j.id]=new Bt(1,1,{generateMipmaps:!0,type:$e?$t:Sn,minFilter:rs,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:mt.workingColorSpace})}let Ne=T.state.transmissionRenderTarget[j.id],Oe=j.viewport||ne;Ne.setSize(Oe.z*R.transmissionResolutionScale,Oe.w*R.transmissionResolutionScale);let Fe=R.getRenderTarget(),qe=R.getActiveCubeFace(),Xe=R.getActiveMipmapLevel();R.setRenderTarget(Ne),R.getClearColor(Ye),Ve=R.getClearAlpha(),Ve<1&&R.setClearColor(16777215,.5),R.clear(),Ie&&ue.render(se);let lt=R.toneMapping;R.toneMapping=ai;let vt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),T.setupLightsView(j),me===!0&&te.setGlobalState(R.clippingPlanes,j),ie(w,se,j),re.updateMultisampleRenderTarget(Ne),re.updateRenderTargetMipmap(Ne),it.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let At=0,nn=G.length;At<nn;At++){let Nt=G[At],{object:Dt,geometry:_n,material:ze,group:bn}=Nt;if(ze.side===Ht&&Dt.layers.test(j.layers)){let St=ze.side;ze.side=on,ze.needsUpdate=!0,wt(Dt,se,j,_n,ze,bn),ze.side=St,ze.needsUpdate=!0,$e=!0}}$e===!0&&(re.updateMultisampleRenderTarget(Ne),re.updateRenderTargetMipmap(Ne))}R.setRenderTarget(Fe,qe,Xe),R.setClearColor(Ye,Ve),vt!==void 0&&(j.viewport=vt),R.toneMapping=lt}function ie(w,G,se){let j=G.isScene===!0?G.overrideMaterial:null;for(let ee=0,Ne=w.length;ee<Ne;ee++){let Oe=w[ee],{object:Fe,geometry:qe,group:Xe}=Oe,lt=Oe.material;lt.allowOverride===!0&&j!==null&&(lt=j),Fe.layers.test(se.layers)&&wt(Fe,G,se,qe,lt,Xe)}}function wt(w,G,se,j,ee,Ne){L!==null&&ee.isNodeMaterial&&L.setObject(w,ee),w.onBeforeRender(R,G,se,j,ee,Ne),w.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),ee.onBeforeRender(R,G,se,j,w,Ne),ee.transparent===!0&&ee.side===Ht&&ee.forceSinglePass===!1?(ee.side=on,ee.needsUpdate=!0,R.renderBufferDirect(se,G,j,ee,w,Ne),ee.side=is,ee.needsUpdate=!0,R.renderBufferDirect(se,G,j,ee,w,Ne),ee.side=Ht):R.renderBufferDirect(se,G,j,ee,w,Ne),w.onAfterRender(R,G,se,j,ee,Ne)}function zt(w,G,se){G.isScene!==!0&&(G=Ae);let j=q.get(w),ee=T.state.lights,Ne=T.state.shadowsArray,Oe=ee.state.version,Fe=N.getParameters(w,ee.state,Ne,G,se,T.state.lightProbeGridArray),qe=N.getProgramCacheKey(Fe),Xe=j.programs;j.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?G.environment:null,j.fog=G.fog;let lt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;j.envMap=Me.get(w.envMap||j.environment,lt),j.envMapRotation=j.environment!==null&&w.envMap===null?G.environmentRotation:w.envMapRotation,Xe===void 0&&(w.addEventListener("dispose",hn),Xe=new Map,j.programs=Xe);let vt=Xe.get(qe);if(vt!==void 0){if(j.currentProgram===vt&&j.lightsStateVersion===Oe)return Kt(w,Fe),vt}else Fe.uniforms=N.getUniforms(w),L!==null&&w.isNodeMaterial&&L.build(w,se,Fe),w.onBeforeCompile(Fe,R),vt=N.acquireProgram(Fe,qe),Xe.set(qe,vt),j.uniforms=Fe.uniforms;let $e=j.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&($e.clippingPlanes=te.uniform),Kt(w,Fe),j.needsLights=Nn(w),j.lightsStateVersion=Oe,j.needsLights&&($e.ambientLightColor.value=ee.state.ambient,$e.lightProbe.value=ee.state.probe,$e.sunLights.value=ee.state.sun,$e.sunLightShadows.value=ee.state.sunShadow,$e.directionalLights.value=ee.state.directional,$e.directionalLightShadows.value=ee.state.directionalShadow,$e.spotLights.value=ee.state.spot,$e.spotLightShadows.value=ee.state.spotShadow,$e.rectAreaLights.value=ee.state.rectArea,$e.ltc_1.value=ee.state.rectAreaLTC1,$e.ltc_2.value=ee.state.rectAreaLTC2,$e.pointLights.value=ee.state.point,$e.pointLightShadows.value=ee.state.pointShadow,$e.hemisphereLights.value=ee.state.hemi,$e.sunShadowMatrix.value=ee.state.sunShadowMatrix,$e.sunShadowCascade.value=ee.state.sunShadowCascade,$e.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,$e.spotLightMatrix.value=ee.state.spotLightMatrix,$e.spotLightMap.value=ee.state.spotLightMap,$e.pointShadowMatrix.value=ee.state.pointShadowMatrix),j.lightProbeGrid=T.state.lightProbeGridArray.length>0,j.currentProgram=vt,j.uniformsList=null,vt}function tn(w){if(w.uniformsList===null){let G=w.currentProgram.getUniforms();w.uniformsList=yr.seqWithValue(G.seq,w.uniforms)}return w.uniformsList}function Kt(w,G){let se=q.get(w);se.outputColorSpace=G.outputColorSpace,se.batching=G.batching,se.batchingColor=G.batchingColor,se.instancing=G.instancing,se.instancingColor=G.instancingColor,se.instancingMorph=G.instancingMorph,se.skinning=G.skinning,se.morphTargets=G.morphTargets,se.morphNormals=G.morphNormals,se.morphColors=G.morphColors,se.morphTargetsCount=G.morphTargetsCount,se.numClippingPlanes=G.numClippingPlanes,se.numIntersection=G.numClipIntersection,se.vertexAlphas=G.vertexAlphas,se.vertexTangents=G.vertexTangents,se.toneMapping=G.toneMapping}function Un(w,G){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;_.setFromMatrixPosition(G.matrixWorld);for(let se=0,j=w.length;se<j;se++){let ee=w[se];if(ee.texture!==null&&ee.boundingBox.containsPoint(_))return ee}return null}function xn(w,G,se,j,ee){G.isScene!==!0&&(G=Ae),re.resetTextureUnits();let Ne=G.fog,Oe=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?G.environment:null,Fe=K===null?R.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:mt.workingColorSpace,qe=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,Xe=Me.get(j.envMap||Oe,qe),lt=j.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,vt=!!se.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),$e=!!se.morphAttributes.position,At=!!se.morphAttributes.normal,nn=!!se.morphAttributes.color,Nt=ai;j.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Nt=R.toneMapping);let Dt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,_n=Dt!==void 0?Dt.length:0,ze=q.get(j),bn=T.state.lights;if(me===!0&&(ve===!0||w!==$)){let Ut=w===$&&j.id===Z;te.setState(j,w,Ut)}let St=!1;j.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==bn.state.version||ze.outputColorSpace!==Fe||ee.isBatchedMesh&&ze.batching===!1||!ee.isBatchedMesh&&ze.batching===!0||ee.isBatchedMesh&&ze.batchingColor===!0&&ee._colorsTexture===null||ee.isBatchedMesh&&ze.batchingColor===!1&&ee._colorsTexture!==null||ee.isInstancedMesh&&ze.instancing===!1||!ee.isInstancedMesh&&ze.instancing===!0||ee.isSkinnedMesh&&ze.skinning===!1||!ee.isSkinnedMesh&&ze.skinning===!0||ee.isInstancedMesh&&ze.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&ze.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&ze.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&ze.instancingMorph===!1&&ee.morphTexture!==null||ze.envMap!==Xe||j.fog===!0&&ze.fog!==Ne||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==te.numPlanes||ze.numIntersection!==te.numIntersection)||ze.vertexAlphas!==lt||ze.vertexTangents!==vt||ze.morphTargets!==$e||ze.morphNormals!==At||ze.morphColors!==nn||ze.toneMapping!==Nt||ze.morphTargetsCount!==_n||!!ze.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(St=!0):(St=!0,ze.__version=j.version);let Vn=ze.currentProgram;St===!0&&(Vn=zt(j,G,ee),L&&j.isNodeMaterial&&L.onUpdateProgram(j,Vn,ze));let hi=!1,qi=!1,Ds=!1,It=Vn.getUniforms(),Qt=ze.uniforms;if(M.useProgram(Vn.program)&&(hi=!0,qi=!0,Ds=!0),j.id!==Z&&(Z=j.id,qi=!0),ze.needsLights){let Ut=Un(T.state.lightProbeGridArray,ee);ze.lightProbeGrid!==Ut&&(ze.lightProbeGrid=Ut,qi=!0)}if(hi||$!==w){M.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),It.setValue(F,"projectionMatrix",w.projectionMatrix),It.setValue(F,"viewMatrix",w.matrixWorldInverse);let Zi=It.map.cameraPosition;Zi!==void 0&&Zi.setValue(F,z.setFromMatrixPosition(w.matrixWorld)),C.logarithmicDepthBuffer&&It.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&It.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),$!==w&&($=w,qi=!0,Ds=!0)}if(ze.needsLights&&(bn.state.sunShadowMap.length>0&&It.setValue(F,"sunShadowMap",bn.state.sunShadowMap,re),bn.state.directionalShadowMap.length>0&&It.setValue(F,"directionalShadowMap",bn.state.directionalShadowMap,re),bn.state.spotShadowMap.length>0&&It.setValue(F,"spotShadowMap",bn.state.spotShadowMap,re),bn.state.pointShadowMap.length>0&&It.setValue(F,"pointShadowMap",bn.state.pointShadowMap,re)),ee.isSkinnedMesh){It.setOptional(F,ee,"bindMatrix"),It.setOptional(F,ee,"bindMatrixInverse");let Ut=ee.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),It.setValue(F,"boneTexture",Ut.boneTexture,re))}ee.isBatchedMesh&&(It.setOptional(F,ee,"batchingTexture"),It.setValue(F,"batchingTexture",ee._matricesTexture,re),It.setOptional(F,ee,"batchingIdTexture"),It.setValue(F,"batchingIdTexture",ee._indirectTexture,re),It.setOptional(F,ee,"batchingColorTexture"),ee._colorsTexture!==null&&It.setValue(F,"batchingColorTexture",ee._colorsTexture,re));let Yi=se.morphAttributes;if((Yi.position!==void 0||Yi.normal!==void 0||Yi.color!==void 0)&&I.update(ee,se,Vn),(qi||ze.receiveShadow!==ee.receiveShadow)&&(ze.receiveShadow=ee.receiveShadow,It.setValue(F,"receiveShadow",ee.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&G.environment!==null&&(Qt.envMapIntensity.value=G.environmentIntensity),Qt.dfgLUT!==void 0&&(Qt.dfgLUT.value=A_()),qi){if(It.setValue(F,"toneMappingExposure",R.toneMappingExposure),ze.needsLights&&rn(Qt,Ds),Ne&&j.fog===!0&&W.refreshFogUniforms(Qt,Ne),W.refreshMaterialUniforms(Qt,j,ce,oe,T.state.transmissionRenderTarget[w.id]),ze.needsLights&&ze.lightProbeGrid){let Ut=ze.lightProbeGrid;Qt.probesSH.value=Ut.texture,Qt.probesMin.value.copy(Ut.boundingBox.min),Qt.probesMax.value.copy(Ut.boundingBox.max),Qt.probesResolution.value.copy(Ut.resolution)}yr.upload(F,tn(ze),Qt,re)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(yr.upload(F,tn(ze),Qt,re),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&It.setValue(F,"center",ee.center),It.setValue(F,"modelViewMatrix",ee.modelViewMatrix),It.setValue(F,"normalMatrix",ee.normalMatrix),It.setValue(F,"modelMatrix",ee.matrixWorld),j.uniformsGroups!==void 0){let Ut=j.uniformsGroups;for(let Zi=0,Ls=Ut.length;Zi<Ls;Zi++){let Jh=Ut[Zi];_e.update(Jh,Vn),_e.bind(Jh,Vn)}}return Vn}function rn(w,G){w.ambientLightColor.needsUpdate=G,w.lightProbe.needsUpdate=G,w.sunLights.needsUpdate=G,w.sunLightShadows.needsUpdate=G,w.directionalLights.needsUpdate=G,w.directionalLightShadows.needsUpdate=G,w.pointLights.needsUpdate=G,w.pointLightShadows.needsUpdate=G,w.spotLights.needsUpdate=G,w.spotLightShadows.needsUpdate=G,w.rectAreaLights.needsUpdate=G,w.hemisphereLights.needsUpdate=G}function Nn(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(w,G,se){let j=q.get(w);j.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),q.get(w.texture).__webglTexture=G,q.get(w.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:se,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,G){let se=q.get(w);se.__webglFramebuffer=G,se.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(w,G=0,se=0){K=w,H=G,Y=se;let j=null,ee=!1,Ne=!1;if(w){let Fe=q.get(w);if(Fe.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(F.FRAMEBUFFER,Fe.__webglFramebuffer),ne.copy(w.viewport),de.copy(w.scissor),Ee=w.scissorTest,M.viewport(ne),M.scissor(de),M.setScissorTest(Ee),Z=-1;return}else if(Fe.__webglFramebuffer===void 0)re.setupRenderTarget(w);else if(Fe.__hasExternalTextures)re.rebindTextures(w,q.get(w.texture).__webglTexture,q.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let lt=w.depthTexture;if(Fe.__boundDepthTexture!==lt){if(lt!==null&&q.has(lt)&&(w.width!==lt.image.width||w.height!==lt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(w)}}let qe=w.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ne=!0);let Xe=q.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Xe[G])?j=Xe[G][se]:j=Xe[G],ee=!0):w.samples>0&&re.useMultisampledRTT(w)===!1?j=q.get(w).__webglMultisampledFramebuffer:Array.isArray(Xe)?j=Xe[se]:j=Xe,ne.copy(w.viewport),de.copy(w.scissor),Ee=w.scissorTest}else ne.copy(be).multiplyScalar(ce).floor(),de.copy(Ze).multiplyScalar(ce).floor(),Ee=et;if(se!==0&&(j=k),M.bindFramebuffer(F.FRAMEBUFFER,j)&&M.drawBuffers(w,j),M.viewport(ne),M.scissor(de),M.setScissorTest(Ee),ee){let Fe=q.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+G,Fe.__webglTexture,se)}else if(Ne){let Fe=G;for(let qe=0;qe<w.textures.length;qe++){let Xe=q.get(w.textures[qe]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+qe,Xe.__webglTexture,se,Fe)}}else if(w!==null&&se!==0){let Fe=q.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Fe.__webglTexture,se)}Z=-1};function Yt(w){let G=q.get(w);return(G.__readFormat!==w.format||G.__readType!==w.type)&&(G.__readFormat=w.format,G.__readType=w.type,G.__formatReadable=C.textureFormatReadable(w.format),G.__typeReadable=C.textureTypeReadable(w.type)),G}this.readRenderTargetPixels=function(w,G,se,j,ee,Ne,Oe,Fe=0){if(!(w&&w.isWebGLRenderTarget)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=q.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Oe!==void 0&&(qe=qe[Oe]),qe){M.bindFramebuffer(F.FRAMEBUFFER,qe);try{let Xe=w.textures[Fe],lt=Xe.format,vt=Xe.type;w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Fe);let $e=Yt(Xe);if($e.__formatReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if($e.__typeReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=w.width-j&&se>=0&&se<=w.height-ee&&F.readPixels(G,se,j,ee,Te.convert(lt),Te.convert(vt),Ne)}finally{let Xe=K!==null?q.get(K).__webglFramebuffer:null;M.bindFramebuffer(F.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(w,G,se,j,ee,Ne,Oe,Fe=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=q.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Oe!==void 0&&(qe=qe[Oe]),qe)if(G>=0&&G<=w.width-j&&se>=0&&se<=w.height-ee){M.bindFramebuffer(F.FRAMEBUFFER,qe);let Xe=w.textures[Fe],lt=Xe.format,vt=Xe.type;w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Fe);let $e=Yt(Xe);if($e.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if($e.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let At=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,At),F.bufferData(F.PIXEL_PACK_BUFFER,Ne.byteLength,F.STREAM_READ),F.readPixels(G,se,j,ee,Te.convert(lt),Te.convert(vt),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let nn=K!==null?q.get(K).__webglFramebuffer:null;M.bindFramebuffer(F.FRAMEBUFFER,nn);let Nt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await hd(F,Nt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,At),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Ne),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(At),F.deleteSync(Nt),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,G=null,se=0){let j=Math.pow(2,-se),ee=Math.floor(w.image.width*j),Ne=Math.floor(w.image.height*j),Oe=G!==null?G.x:0,Fe=G!==null?G.y:0;re.setTexture2D(w,0),F.copyTexSubImage2D(F.TEXTURE_2D,se,0,0,Oe,Fe,ee,Ne),M.unbindTexture()},this.copyTextureToTexture=function(w,G,se=null,j=null,ee=0,Ne=0){let Oe,Fe,qe,Xe,lt,vt,$e,At,nn,Nt=w.isCompressedTexture?w.mipmaps[Ne]:w.image;if(se!==null)Oe=se.max.x-se.min.x,Fe=se.max.y-se.min.y,qe=se.isBox3?se.max.z-se.min.z:1,Xe=se.min.x,lt=se.min.y,vt=se.isBox3?se.min.z:0;else{let Qt=Math.pow(2,-ee);Oe=Math.floor(Nt.width*Qt),Fe=Math.floor(Nt.height*Qt),w.isDataArrayTexture?qe=Nt.depth:w.isData3DTexture?qe=Math.floor(Nt.depth*Qt):qe=1,Xe=0,lt=0,vt=0}j!==null?($e=j.x,At=j.y,nn=j.z):($e=0,At=0,nn=0);let Dt=Te.convert(G.format),_n=Te.convert(G.type),ze;G.isData3DTexture?(re.setTexture3D(G,0),ze=F.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(re.setTexture2DArray(G,0),ze=F.TEXTURE_2D_ARRAY):(re.setTexture2D(G,0),ze=F.TEXTURE_2D),M.activeTexture(F.TEXTURE0),M.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,G.flipY),M.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),M.pixelStorei(F.UNPACK_ALIGNMENT,G.unpackAlignment);let bn=M.getParameter(F.UNPACK_ROW_LENGTH),St=M.getParameter(F.UNPACK_IMAGE_HEIGHT),Vn=M.getParameter(F.UNPACK_SKIP_PIXELS),hi=M.getParameter(F.UNPACK_SKIP_ROWS),qi=M.getParameter(F.UNPACK_SKIP_IMAGES);M.pixelStorei(F.UNPACK_ROW_LENGTH,Nt.width),M.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Nt.height),M.pixelStorei(F.UNPACK_SKIP_PIXELS,Xe),M.pixelStorei(F.UNPACK_SKIP_ROWS,lt),M.pixelStorei(F.UNPACK_SKIP_IMAGES,vt);let Ds=w.isDataArrayTexture||w.isData3DTexture,It=G.isDataArrayTexture||G.isData3DTexture;if(w.isDepthTexture){let Qt=q.get(w),Yi=q.get(G),Ut=q.get(Qt.__renderTarget),Zi=q.get(Yi.__renderTarget);M.bindFramebuffer(F.READ_FRAMEBUFFER,Ut.__webglFramebuffer),M.bindFramebuffer(F.DRAW_FRAMEBUFFER,Zi.__webglFramebuffer);for(let Ls=0;Ls<qe;Ls++)Ds&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,q.get(w).__webglTexture,ee,vt+Ls),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,q.get(G).__webglTexture,Ne,nn+Ls)),F.blitFramebuffer(Xe,lt,Oe,Fe,$e,At,Oe,Fe,F.DEPTH_BUFFER_BIT,F.NEAREST);M.bindFramebuffer(F.READ_FRAMEBUFFER,null),M.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(ee!==0||w.isRenderTargetTexture||q.has(w)){let Qt=q.get(w),Yi=q.get(G);M.bindFramebuffer(F.READ_FRAMEBUFFER,U),M.bindFramebuffer(F.DRAW_FRAMEBUFFER,V);for(let Ut=0;Ut<qe;Ut++)Ds?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Qt.__webglTexture,ee,vt+Ut):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Qt.__webglTexture,ee),It?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Yi.__webglTexture,Ne,nn+Ut):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Yi.__webglTexture,Ne),ee!==0?F.blitFramebuffer(Xe,lt,Oe,Fe,$e,At,Oe,Fe,F.COLOR_BUFFER_BIT,F.NEAREST):It?F.copyTexSubImage3D(ze,Ne,$e,At,nn+Ut,Xe,lt,Oe,Fe):F.copyTexSubImage2D(ze,Ne,$e,At,Xe,lt,Oe,Fe);M.bindFramebuffer(F.READ_FRAMEBUFFER,null),M.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else It?w.isDataTexture||w.isData3DTexture?F.texSubImage3D(ze,Ne,$e,At,nn,Oe,Fe,qe,Dt,_n,Nt.data):G.isCompressedArrayTexture?F.compressedTexSubImage3D(ze,Ne,$e,At,nn,Oe,Fe,qe,Dt,Nt.data):F.texSubImage3D(ze,Ne,$e,At,nn,Oe,Fe,qe,Dt,_n,Nt):w.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Ne,$e,At,Oe,Fe,Dt,_n,Nt.data):w.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Ne,$e,At,Nt.width,Nt.height,Dt,Nt.data):F.texSubImage2D(F.TEXTURE_2D,Ne,$e,At,Oe,Fe,Dt,_n,Nt);M.pixelStorei(F.UNPACK_ROW_LENGTH,bn),M.pixelStorei(F.UNPACK_IMAGE_HEIGHT,St),M.pixelStorei(F.UNPACK_SKIP_PIXELS,Vn),M.pixelStorei(F.UNPACK_SKIP_ROWS,hi),M.pixelStorei(F.UNPACK_SKIP_IMAGES,qi),Ne===0&&G.generateMipmaps&&F.generateMipmap(ze),M.unbindTexture()},this.initRenderTarget=function(w){q.get(w).__webglFramebuffer===void 0&&re.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?re.setTextureCube(w,0):w.isData3DTexture?re.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?re.setTexture2DArray(w,0):re.setTexture2D(w,0),M.unbindTexture()},this.resetState=function(){H=0,Y=0,K=null,M.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=mt._getUnpackColorSpace()}};var Ti={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var In=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},R_=new Es(-1,1,1,-1,0,1),Wh=class extends gt{constructor(){super(),this.setAttribute("position",new nt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new nt([0,2,0,0,2,0],2))}},C_=new Wh,wi=class{constructor(e){this._mesh=new De(C_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,R_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Er=class extends In{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Pt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Pn.clone(e.uniforms),this.material=new Pt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new wi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Go=class extends In{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},rc=class extends In{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var oc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new xe);this._width=n.width,this._height=n.height,t=new Bt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:$t}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Er(Ti),this.copyPass.material.blending=qt,this.timer=new yo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Go!==void 0&&(o instanceof Go?n=!0:o instanceof rc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new xe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var ko=class extends In{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Re}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Zd={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Re(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var br=class i extends In{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new xe(e.x,e.y):new xe(256,256),this.clearColor=new Re(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Bt(r,o,{type:$t,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new Bt(r,o,{type:$t,depthBuffer:!1});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let u=new Bt(r,o,{type:$t,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}let a=Zd;this.highPassUniforms=Pn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Pt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new xe(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Pn.clone(Ti.uniforms),this.blendMaterial=new Pt({uniforms:this.copyUniforms,vertexShader:Ti.vertexShader,fragmentShader:Ti.fragmentShader,premultipliedAlpha:!0,blending:Cn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Re,this._oldClearAlpha=1,this._basic=new xt,this._fsQuad=new wi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new xe(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let s=[],r=[];for(let o=1;o<e;o+=2){let a=t[o],l=o+1<e?t[o+1]:0,c=a+l;s.push((o*a+(o+1)*l)/c),r.push(c)}return new Pt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new xe(.5,.5)},direction:{value:new xe(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Pt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};br.BlurDirectionX=new xe(1,0);br.BlurDirectionY=new xe(0,1);var Vo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var ac=class extends In{constructor(){super(),this.isOutputPass=!0,this.uniforms=Pn.clone(Vo.uniforms),this.material=new fr({name:Vo.name,uniforms:this.uniforms,vertexShader:Vo.vertexShader,fragmentShader:Vo.fragmentShader}),this._fsQuad=new wi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},mt.getTransfer(this._outputColorSpace)===Et&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Eo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===bo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===To?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ws?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ao?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ro?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===wo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Wo=new D;function Jn(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Wo.copy(e),Wo[n]=0,Wo.normalize();let c=.5*o/(o+a),h=1-Wo.angleTo(i)/l;return Math.sign(Wo[t])===1?h*c:a/(o+a)+c+c*(1-h)}var Tr=class i extends yt{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new D,c=new D,h=new D(e,t,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,p=f.length/6,x=new D,g=.5/o;for(let m=0,y=0;m<f.length;m+=3,y+=2)switch(l.fromArray(f,m),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),f[m+0]=h.x*Math.sign(l.x)+c.x*r,f[m+1]=h.y*Math.sign(l.y)+c.y*r,f[m+2]=h.z*Math.sign(l.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/p)){case 0:x.set(1,0,0),d[y+0]=Jn(x,c,"z","y",r,n),d[y+1]=1-Jn(x,c,"y","z",r,t);break;case 1:x.set(-1,0,0),d[y+0]=1-Jn(x,c,"z","y",r,n),d[y+1]=1-Jn(x,c,"y","z",r,t);break;case 2:x.set(0,1,0),d[y+0]=1-Jn(x,c,"x","z",r,e),d[y+1]=Jn(x,c,"z","x",r,n);break;case 3:x.set(0,-1,0),d[y+0]=1-Jn(x,c,"x","z",r,e),d[y+1]=1-Jn(x,c,"z","x",r,n);break;case 4:x.set(0,0,1),d[y+0]=1-Jn(x,c,"x","y",r,e),d[y+1]=1-Jn(x,c,"y","x",r,t);break;case 5:x.set(0,0,-1),d[y+0]=Jn(x,c,"x","y",r,e),d[y+1]=1-Jn(x,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var ls=.1171875,Jt=1.875*11,P_=1.875*15+1.4,I_={C:0,D:2,E:4,F:5,G:7,A:9,B:11};function Ai(i){let e=/^([A-G])(#|b)?(-?\d)$/.exec(i),t=I_[e[1]]+(e[2]==="#"?1:e[2]==="b"?-1:0);return 440*2**(((Number(e[3])+1)*12+t-69)/12)}function Ps(i,e){let t=Math.imul(i|0,374761393)^Math.imul(e|0,668265263);return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967296}var D_=[null,"Am","Am","F","C","G","Am","F","C","G","E7","A","Fsm","D","E"],L_={Am:["A","C","E"],F:["F","A","C"],C:["C","E","G"],G:["G","B","D"],E7:["E","G#","B","D"],A:["A","C#","E"],Fsm:["F#","A","C#"],D:["D","F#","A"],E:["E","G#","B"]},U_={Am:"A",F:"F",C:"C",G:"G",E7:"E",A:"A",Fsm:"F#",D:"D",E:"E"},N_={6:[[0,"E5",2],[2,"A5",2],[4,"C6",1],[5,"B5",1],[6,"A5",2],[8,"G#5",1],[9,"A5",3],[12,"E5",4]],7:[[0,"F5",2],[2,"A5",2],[4,"C6",2],[6,"D6",1],[7,"C6",1],[8,"A5",2],[10,"F5",2],[12,"G5",2],[14,"A5",2]],8:[[0,"G5",2],[2,"E5",1],[3,"G5",1],[4,"C6",2],[6,"E6",2],[8,"D6",1],[9,"C6",1],[10,"B5",2],[12,"G5",4]],9:[[0,"B5",1],[1,"C6",1],[2,"D6",2],[4,"B5",2],[6,"G5",2],[8,"A5",1],[9,"B5",1],[10,"C6",1],[11,"D6",1],[12,"E6",4]],11:[[0,"A5",4],[4,"C#6",2],[6,"E6",2],[8,"A6",6],[14,"G#6",1],[15,"F#6",1]],12:[[0,"F#6",4],[4,"E6",2],[6,"C#6",2],[8,"A5",4],[12,"C#6",4]],13:[[0,"D6",2],[2,"F#6",2],[4,"A6",4],[8,"G#6",2],[10,"F#6",2],[12,"E6",4]],14:[[0,"E6",2],[2,"G#6",2],[4,"B6",4],[8,"G#6",2],[10,"B6",2],[12,"C#7",4]]};function F_(){let i=[],e=(n,s)=>n*1.875+s*ls,t=["A5","C6","D6","E6","G6","A6"];for(let n=0;n<32;n++)Ps(n,1)>.45&&i.push({t:e(0,n),k:"blip",f:Ai(t[Math.floor(Ps(n,2)*t.length)]),v:.5+.5*(n/32)});for(let n=0;n<16;n+=2)i.push({t:e(1,n),k:"bass",f:Ai("A1"),d:ls*1.6,v:.4+n*.03,cut:300+n*90});for(let n=0;n<16;n+=2)i.push({t:e(1,n+1),k:"hat",v:.25});i.push({t:e(1,12),k:"riserShort"});for(let n=2;n<=14;n++){let s=D_[n],r=L_[s],o=U_[s],a=n>=11,l=n===10;if(l){for(let h of[0,4,8,12])i.push({t:e(n,h),k:"kick",v:1});for(let h=0;h<8;h+=2)i.push({t:e(n,h),k:"snare",v:.35+h*.04});for(let h=8;h<15;h++)i.push({t:e(n,h),k:"snare",v:.55+(h-8)*.06});i.push({t:e(n,0),k:"riser",d:1.875-ls})}else{for(let h of[0,4,8,12])i.push({t:e(n,h),k:"kick",v:1});n%2===1&&i.push({t:e(n,14),k:"kick",v:.7});for(let h of[4,12])i.push({t:e(n,h),k:"snare",v:.9});for(let h=2;h<16;h+=4)i.push({t:e(n,h),k:"hat",v:.45,open:a&&h===14});if(n>=6)for(let h=1;h<16;h+=2)i.push({t:e(n,h),k:"hat",v:.18})}let c=[[0,2],[2,3],[3,2],[6,3],[8,2],[10,3],[11,2],[14,3]];if(l)for(let h=0;h<15;h+=2)i.push({t:e(n,h),k:"bass",f:Ai(`${o}${h%4===0?2:3}`),d:ls*1.5,v:.8,cut:600+h*160});else for(let[h,f]of c)i.push({t:e(n,h),k:"bass",f:Ai(`${o}${f}`),d:ls*1.4,v:.85,cut:a?1400:900});if(n>=3){let h=[...r.map(f=>`${f}4`),`${r[0]}5`];for(let f=0;f<16;f++)l&&f===15||i.push({t:e(n,f),k:"arp",f:Ai(h[f%h.length]),v:a?.32:.24})}a&&i.push({t:e(n,0),k:"pad",fs:r.map(h=>Ai(`${h}3`)),d:1.875*.98});for(let[h,f,u]of N_[n]||[])i.push({t:e(n,h),k:"lead",f:Ai(f),d:u*ls*.92,v:a?.55:.5});if(n>=3&&n<=5)for(let h=0;h<16;h+=1)Ps(n*16+h,9)>.78&&i.push({t:e(n,h),k:"bloop",f:300+Ps(h,n)*500});if(n>=6&&n<=9)for(let h=0;h<16;h+=1)Ps(n*16+h,4)>.82&&i.push({t:e(n,h),k:"crackle",d:.05+Ps(h,n)*.12})}return i.push({t:Jt,k:"boom"}),i.push({t:Jt,k:"crash"}),i.push({t:1.875*15,k:"kick",v:1}),i.push({t:1.875*15,k:"crash"}),i.push({t:1.875*15,k:"pad",fs:["A3","C#4","E4","A4"].map(Ai),d:1.3}),i.push({t:1.875*15,k:"lead",f:Ai("A6"),d:1.1,v:.5}),i.push({t:1.875*15,k:"bass",f:Ai("A1"),d:1.2,v:.9,cut:900}),i.sort((n,s)=>n.t-s.t)}function $d(i,e=.25){let n=new Float32Array(64),s=new Float32Array(64);for(let r=1;r<64;r++)n[r]=2/(r*Math.PI)*Math.sin(r*Math.PI*e);return i.createPeriodicWave(n,s)}function Jd(i){let e=i.createBuffer(1,i.sampleRate,i.sampleRate),t=e.getChannelData(0),n=12345;for(let s=0;s<t.length;s++)n=Math.imul(n,1103515245)+12345|0,t[s]=(n>>>16&32767)/16384-1;return e}function Gn(i,e,t,n,s,r=.05){i.gain.setValueAtTime(1e-4,e),i.gain.exponentialRampToValueAtTime(Math.max(2e-4,n),e+t),i.gain.setValueAtTime(Math.max(2e-4,n),e+Math.max(t,s)),i.gain.exponentialRampToValueAtTime(1e-4,e+Math.max(t,s)+r)}function Kd(i,e,t,n){let{out:s,send:r,noise:o,pulse:a}=e,l=(u,d)=>{let p=i.createOscillator();return u==="pulse"?p.setPeriodicWave(a):p.type=u,p.frequency.setValueAtTime(d,n),p},c=()=>i.createGain(),h=(u,d,p=.7)=>{let x=i.createBiquadFilter();return x.type=u,x.frequency.setValueAtTime(d,n),x.Q.value=p,x},f=()=>{let u=i.createBufferSource();return u.buffer=o,u};switch(t.k){case"kick":{let u=l("sine",160),d=c();u.frequency.exponentialRampToValueAtTime(42,n+.13),Gn(d,n,.004,.95*t.v,.02,.32),u.connect(d).connect(s),u.start(n),u.stop(n+.45);break}case"snare":{let u=f(),d=h("bandpass",1900,.8),p=c();Gn(p,n,.002,.42*t.v,.01,.16),u.connect(d).connect(p).connect(s),u.start(n),u.stop(n+.25);let x=l("triangle",190),g=c();Gn(g,n,.002,.25*t.v,.01,.09),x.connect(g).connect(s),x.start(n),x.stop(n+.15);break}case"hat":{let u=f(),d=h("highpass",7500),p=c();Gn(p,n,.001,.16*t.v,.005,t.open?.22:.045),u.connect(d).connect(p).connect(s),u.start(n),u.stop(n+.3);break}case"crash":{let u=f(),d=h("highpass",3800),p=c();Gn(p,n,.003,.28,.02,1.6),u.connect(d).connect(p).connect(s),u.start(n),u.stop(n+1.8);break}case"bass":{let u=l("sawtooth",t.f),d=l("square",t.f/2),p=h("lowpass",t.cut*2,4),x=c(),g=c();p.frequency.exponentialRampToValueAtTime(Math.max(80,t.cut*.4),n+t.d),g.gain.value=.35,Gn(x,n,.005,.38*t.v,t.d*.75,.06),u.connect(p),d.connect(g).connect(p),p.connect(x).connect(s),u.start(n),d.start(n),u.stop(n+t.d+.1),d.stop(n+t.d+.1);break}case"arp":{let u=l("pulse",t.f*2),d=h("lowpass",3800),p=c();Gn(p,n,.003,.11*t.v,.02,.07),u.connect(d).connect(p),p.connect(s),p.connect(r),u.start(n),u.stop(n+.12);break}case"lead":{let u=l("sawtooth",t.f),d=l("sawtooth",t.f);d.detune.value=9,u.detune.value=-7;let p=l("sine",5.6),x=c();x.gain.setValueAtTime(0,n),x.gain.linearRampToValueAtTime(9,n+.18),p.connect(x),x.connect(u.detune),x.connect(d.detune);let g=h("lowpass",3400,2),m=c();Gn(m,n,.012,.13*t.v,t.d,.09),u.connect(g),d.connect(g),g.connect(m),m.connect(s),m.connect(r);for(let y of[u,d,p])y.start(n),y.stop(n+t.d+.15);break}case"pad":{for(let u of t.fs){let d=l("triangle",u),p=l("sine",u*2),x=c();Gn(x,n,.25,.055,t.d,.6),d.connect(x),p.connect(x),x.connect(s),x.connect(r),d.start(n),p.start(n),d.stop(n+t.d+.7),p.stop(n+t.d+.7)}break}case"blip":{let u=l("square",t.f),d=c(),p=h("lowpass",5e3);Gn(d,n,.002,.06*t.v,.04,.03),u.connect(p).connect(d),d.connect(s),d.connect(r),u.start(n),u.stop(n+.1);break}case"bloop":{let u=l("sine",t.f),d=c();u.frequency.exponentialRampToValueAtTime(t.f*2.4,n+.11),Gn(d,n,.004,.16,.06,.05),u.connect(d),d.connect(s),d.connect(r),u.start(n),u.stop(n+.16);break}case"crackle":{let u=f(),d=h("highpass",2500),p=c();p.gain.setValueAtTime(1e-4,n);let x=8;for(let g=0;g<x;g++)p.gain.setValueAtTime(Ps(g,Math.round(n*1e3))>.5?.12:1e-4,n+t.d*g/x);p.gain.setValueAtTime(1e-4,n+t.d),u.connect(d).connect(p).connect(s),u.start(n),u.stop(n+t.d+.02);break}case"riserShort":case"riser":{let u=t.d||.46875,d=f();d.loop=!0;let p=h("bandpass",300,2.5),x=c();p.frequency.exponentialRampToValueAtTime(7e3,n+u),x.gain.setValueAtTime(1e-4,n),x.gain.exponentialRampToValueAtTime(t.k==="riser"?.3:.12,n+u),x.gain.exponentialRampToValueAtTime(1e-4,n+u+.04),d.connect(p).connect(x).connect(s),d.start(n),d.stop(n+u+.06);break}case"boom":{let u=l("sine",75),d=c();u.frequency.exponentialRampToValueAtTime(28,n+1.4),Gn(d,n,.005,.9,.05,1.5),u.connect(d).connect(s),u.start(n),u.stop(n+1.7);let p=f();p.loop=!0;let x=h("lowpass",4e3,.5),g=c();x.frequency.exponentialRampToValueAtTime(160,n+1.6),Gn(g,n,.003,.55,.05,1.6),p.connect(x).connect(g).connect(s),p.start(n),p.stop(n+1.8);break}default:break}}function Qd(){let i=F_(),e=null,t=null,n=0,s=0,r=null,o=!1;function a(){if(e)return e;let c=window.AudioContext||window.webkitAudioContext;if(!c)return null;e=new c;let h=e.createGain();h.gain.value=o?0:.32;let f=e.createDynamicsCompressor();f.threshold.value=-14,f.ratio.value=4,f.attack.value=.005,f.release.value=.2,h.connect(f).connect(e.destination);let u=e.createDelay(1);u.delayTime.value=ls*3;let d=e.createGain();d.gain.value=.28;let p=e.createBiquadFilter();p.type="lowpass",p.frequency.value=2600;let x=e.createGain();return x.gain.value=.35,u.connect(p).connect(d).connect(u),p.connect(x).connect(h),t={out:h,send:u,master:h,noise:Jd(e),pulse:$d(e)},e}function l(){if(!e||e.state!=="running")return;let c=e.currentTime-n+.25;for(;s<i.length&&i[s].t<c;){let h=i[s++],f=n+h.t;f>=e.currentTime-.01&&Kd(e,t,h,Math.max(f,e.currentTime+.005))}}return{async play(c){if(!a())return!1;if(e.state!=="running")try{await e.resume()}catch{}return e.state!=="running"?!1:(n=e.currentTime+.06-c,s=i.findIndex(h=>h.t>=c-.001),s<0&&(s=i.length),clearInterval(r),r=setInterval(l,25),l(),!0)},running:()=>!!e&&e.state==="running"&&r!==null,position:()=>e&&e.state==="running"?e.currentTime-n:null,setMuted(c){o=c,t&&t.master.gain.setTargetAtTime(c?0:.32,e.currentTime,.05)},suspend(){e&&e.state==="running"&&e.suspend()},resume(){return e&&e.state==="suspended"?e.resume():Promise.resolve()},stop(c=.4){if(clearInterval(r),r=null,!e)return;let h=e;try{t.master.gain.setTargetAtTime(0,h.currentTime,c/3)}catch{}setTimeout(()=>{h.close().catch(()=>{})},c*1e3+200),e=null},async renderOffline(c=22050){let h=window.OfflineAudioContext,f=new h(1,Math.ceil(P_*c),c),u=f.createGain();u.gain.value=.32;let d=f.createDynamicsCompressor();d.threshold.value=-14,d.ratio.value=4,u.connect(d).connect(f.destination);let p=f.createDelay(1);p.delayTime.value=ls*3;let x=f.createGain();x.gain.value=.28;let g=f.createBiquadFilter();g.type="lowpass",g.frequency.value=2600;let m=f.createGain();m.gain.value=.35,p.connect(g).connect(x).connect(p),g.connect(m).connect(u);let y={out:u,send:p,master:u,noise:Jd(f),pulse:$d(f)};for(let S of i)Kd(f,y,S,S.t+.01);return f.startRendering()},events:i}}function ef(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new gt,c=0;for(let h=0;h<i.length;++h){let f=i[h],u=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.morphAttributes[d])}if(e){let d;if(t)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0,f=[];for(let u=0;u<i.length;++u){let d=i[u].index;for(let p=0;p<d.count;++p)f.push(d.getX(p)+h);h+=i[u].attributes.position.count}l.setIndex(f)}for(let h in r){let f=jd(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in o){let f=o[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){let d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][u]);let p=jd(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function jd(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new Ct(o,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let f=l/t;for(let u=0,d=h.count;u<d;u++)for(let p=0;p<t;p++){let x=h.getComponent(u,p);a.setComponent(u+f,p,x)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}var Ri=i=>Math.min(1,Math.max(0,i)),at=(i,e,t)=>Ri((i-e)/(t-e)),dt=i=>i*i*(3-2*i),Xh=i=>i<.5?4*i*i*i:1-(-2*i+2)**3/2,ht=(i,e,t)=>i+(e-i)*t;function le(i,e=0){let t=Math.imul(i|0,374761393)^Math.imul(e|0,668265263);return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967296}var O=(i,e,t)=>new D(i,e,t),Mt=(i,e=1)=>new Re(i).multiplyScalar(e),Vi=class{constructor(){this.pos=[],this.nor=[],this.col=[],this.idx=[],this.n=0}addGeometry(e,t,n){let s=e.attributes.position,r=e.attributes.normal,o=new ct().getNormalMatrix(t),a=new D;for(let l=0;l<s.count;l++)a.fromBufferAttribute(s,l).applyMatrix4(t),this.pos.push(a.x,a.y,a.z),a.fromBufferAttribute(r,l).applyMatrix3(o).normalize(),this.nor.push(a.x,a.y,a.z),this.col.push(n.r,n.g,n.b);if(e.index)for(let l=0;l<e.index.count;l++)this.idx.push(e.index.getX(l)+this.n);else for(let l=0;l<s.count;l++)this.idx.push(l+this.n);this.n+=s.count,e.dispose()}addTube(e,{segs:t=12,radial:n=6,prof:s,col:r}){let o=e.computeFrenetFrames(t,!1),a=new D,l=new D,c=this.n;for(let h=0;h<=t;h++){let f=h/t;e.getPointAt(f,a);let u=s(f),d=r(f),p=o.normals[h],x=o.binormals[h];for(let g=0;g<=n;g++){let m=g/n*Math.PI*2,y=Math.sin(m),S=-Math.cos(m);l.set(S*p.x+y*x.x,S*p.y+y*x.y,S*p.z+y*x.z).normalize(),this.nor.push(l.x,l.y,l.z),this.pos.push(a.x+u*l.x,a.y+u*l.y,a.z+u*l.z),this.col.push(d.r,d.g,d.b)}}for(let h=1;h<=t;h++)for(let f=1;f<=n;f++){let u=c+(n+1)*(h-1)+(f-1),d=c+(n+1)*h+(f-1),p=c+(n+1)*h+f,x=c+(n+1)*(h-1)+f;this.idx.push(u,d,x,d,p,x)}this.n+=(t+1)*(n+1)}build(){let e=new gt;return e.setAttribute("position",new nt(this.pos,3)),e.setAttribute("normal",new nt(this.nor,3)),e.setAttribute("color",new nt(this.col,3)),e.setIndex(this.idx),e.computeBoundingSphere(),e}};function wr(i,{deep:e=!0,skip:t=()=>!1}={}){i.updateMatrixWorld(!0);let n=new ut().copy(i.matrixWorld).invert(),s=new Map,r=a=>{for(let l of a.children)if(!t(l))if(l.isMesh){if(l.isInstancedMesh||l.userData.keep||Array.isArray(l.material)||!l.visible)continue;let c=[l.material.uuid,l.castShadow,l.receiveShadow,!!l.userData.noDepth,!!l.userData.noCast,l.renderOrder,l.frustumCulled].join("|");s.has(c)||s.set(c,[]),s.get(c).push(l)}else e&&l.children.length&&!l.isPoints&&!l.isLine&&!l.isSprite&&r(l)};r(i);let o=new ut;for(let a of s.values()){if(a.length<2)continue;let l=a.some(p=>p.geometry.attributes.uv),c=a.some(p=>p.geometry.attributes.color),h=a.map(p=>{let x=p.geometry.index?p.geometry.toNonIndexed():p.geometry.clone();for(let m of Object.keys(x.attributes))["position","normal","uv","color"].includes(m)||x.deleteAttribute(m);x.attributes.normal||x.computeVertexNormals();let g=x.attributes.position.count;return l&&!x.attributes.uv&&x.setAttribute("uv",new nt(new Float32Array(g*2),2)),!l&&x.attributes.uv&&x.deleteAttribute("uv"),c&&!x.attributes.color&&x.setAttribute("color",new nt(new Float32Array(g*3).fill(1),3)),!c&&x.attributes.color&&x.deleteAttribute("color"),x.morphAttributes={},x.clearGroups(),o.multiplyMatrices(n,p.matrixWorld),x.applyMatrix4(o),x}),f=ef(h,!1);if(h.forEach(p=>p.dispose()),!f)continue;let u=a[0],d=new De(f,u.material);d.castShadow=u.castShadow,d.receiveShadow=u.receiveShadow,d.renderOrder=u.renderOrder,d.frustumCulled=u.frustumCulled,d.userData={...u.userData},i.add(d);for(let p of a)p.removeFromParent(),p.geometry.dispose()}}var Kn=Math.PI*2,cc={grandpa:{skin:15777688,hair:14278115,brow:13620443,style:"swept",beard:!0,mustache:!0,glasses:"round",frame:13212222,eye:7029795,head:[.25,.262,.245],eyeR:.05,eyeX:.088,eyeY:.035,nose:.06,noseRed:.3,mouthY:-.142,mouthW:.08,belly:1,shirt:7114677,tie:"bow",tieColor:12071482,browR:.019,cheeks:!0,badge:"Pr Anatole",wrinkles:"old",extra:"chain",shoe:5911072},wild:{skin:16044732,hair:15988216,brow:15988216,style:"wild",goatee:!0,glasses:"thick",frame:1315864,eye:4102988,head:[.232,.285,.235],eyeR:.06,eyeX:.083,eyeY:.05,nose:.064,noseRed:.55,mouthY:-.122,mouthW:.084,belly:0,shirt:3108762,vest:3817032,tie:null,browR:.025,chin:!0,badge:"Dr Eustache",wrinkles:"grin",extra:"pencil",shoe:2501171},curly:{skin:10118212,hair:12867628,brow:7219730,style:"puff",goggles:!0,eye:6963987,head:[.238,.258,.24],eyeR:.058,eyeX:.086,eyeY:.035,nose:.042,noseRed:.12,mouthY:-.115,mouthW:.064,belly:.2,shirt:2001546,tie:null,browR:.012,cheeks:!0,lashes:!0,lidOpen:-.25,badge:"Dr Margot",freckles:!0,extra:"clipboard",shoe:8007226}};function B_(i,e,t){let n=(a,l)=>t*Math.sqrt(Math.max(0,1-(a/i)**2-(l/e)**2)),s=a=>O(a.x/(i*i),a.y/(e*e),a.z/(t*t)).normalize();return{zS:n,normal:s,surf:(a,l,c=0)=>{let h=O(a,l,n(a,l));return h.addScaledVector(s(h),c)},dirPt:(a,l,c=1)=>O(Math.sin(a)*Math.cos(l)*i*c,Math.sin(l)*e*c,Math.cos(a)*Math.cos(l)*t*c)}}function O_(i){let e=document.createElement("canvas");e.width=256,e.height=128;let t=e.getContext("2d");t.fillStyle="#f6f2ec",t.fillRect(0,0,256,128);let n=t.createRadialGradient(64,64,34,64,64,120);n.addColorStop(0,"rgba(255,255,255,0)"),n.addColorStop(1,"rgba(214,140,140,0.45)"),t.fillStyle=n,t.fillRect(0,0,256,128);let s=new Re(i),r=l=>`rgb(${Math.min(255,Math.round(s.r*255*l))},${Math.min(255,Math.round(s.g*255*l))},${Math.min(255,Math.round(s.b*255*l))})`,o=t.createRadialGradient(64,64,6,64,64,24);o.addColorStop(0,r(1.6)),o.addColorStop(.65,r(1.05)),o.addColorStop(1,r(.5)),t.beginPath(),t.arc(64,64,24,0,Kn),t.fillStyle=o,t.fill();for(let l=0;l<48;l++){let c=l/48*Kn+le(l,5)*.08;t.strokeStyle=le(l,6)>.5?r(1.9):r(.55),t.globalAlpha=.35,t.lineWidth=1,t.beginPath(),t.moveTo(64+Math.cos(c)*11,64+Math.sin(c)*11),t.lineTo(64+Math.cos(c)*(19+le(l,7)*4),64+Math.sin(c)*(19+le(l,7)*4)),t.stroke()}t.globalAlpha=1,t.lineWidth=2.5,t.strokeStyle=r(.28),t.stroke(),t.beginPath(),t.arc(64,64,10.5,0,Kn),t.fillStyle="#0a0706",t.fill(),t.fillStyle="rgba(255,255,255,0.95)",t.beginPath(),t.arc(56,55,5,0,Kn),t.fill(),t.fillStyle="rgba(255,255,255,0.65)",t.beginPath(),t.arc(72,72,2.2,0,Kn),t.fill();let a=new On(e);return a.colorSpace=Vt,a.anisotropy=4,a}var lc=null;function tf(){if(lc)return lc;let i=(n,s,r)=>{let o=document.createElement("canvas");o.width=n,o.height=s,r(o.getContext("2d"),n,s);let a=new On(o);return a.wrapS=a.wrapT=Mn,a},e=i(256,128,(n,s,r)=>{n.fillStyle="#808080",n.fillRect(0,0,s,r);for(let o=0;o<2600;o++){let a=110+Math.floor(le(o,1)*50);n.fillStyle=`rgba(${a},${a},${a},0.5)`,n.beginPath(),n.arc(le(o,2)*s,le(o,3)*r,.6+le(o,4)*1.2,0,Kn),n.fill()}}),t=i(128,128,(n,s,r)=>{n.fillStyle="#808080",n.fillRect(0,0,s,r);for(let o=0;o<r;o+=2)n.fillStyle=o%4?"rgba(150,150,150,0.5)":"rgba(100,100,100,0.5)",n.fillRect(0,o,s,1);for(let o=0;o<s;o+=2)n.fillStyle=o%4?"rgba(140,140,140,0.35)":"rgba(110,110,110,0.35)",n.fillRect(o,0,1,r)});return t.repeat.set(10,10),lc={skin:e,fabric:t},lc}function H_(i){let e=document.createElement("canvas");e.width=256,e.height=128;let t=e.getContext("2d");t.fillStyle="#f8f6f0",t.fillRect(0,0,256,128),t.fillStyle="#1e8a8a",t.fillRect(0,0,256,34),t.fillStyle="#ffffff",t.font='700 22px "Bricolage Grotesque", sans-serif',t.textAlign="center",t.fillText("LABO",128,25),t.fillStyle="#1b2433",t.font='800 34px "Bricolage Grotesque", sans-serif',t.fillText(i,128,86),t.fillStyle="#e0446a",t.fillRect(96,104,64,8);let n=new On(e);return n.colorSpace=Vt,n}function z_(i,e,t,n){let s=e.clone().sub(i),r=new De(new ot(t,t,s.length(),8),n);return r.position.copy(i).addScaledVector(s,.5),r.quaternion.setFromUnitVectors(O(0,1,0),s.normalize()),r}function hc(i){let e=new je,t=new je;e.add(t);let n=(N,W,B,J=null,te=null,Q=null)=>{let ue=new De(W,B);return J&&ue.position.copy(J),te&&ue.rotation.set(te[0],te[1],te[2]),Q&&ue.scale.copy(Q),N.add(ue),ue},s=new Re(i.skin),r=new bt({color:s,roughness:.5,sheen:.55,sheenColor:new Re(16748408),sheenRoughness:.45,emissive:s.clone().multiplyScalar(.05),bumpMap:tf().skin,bumpScale:.35}),o=r.clone();o.color=s.clone().lerp(new Re(14704746),.3);let a=r.clone();a.color=s.clone().lerp(new Re(14178383),i.noseRed);let l=new bt({color:15593971,roughness:.72,sheen:.6,sheenColor:new Re(16777215),sheenRoughness:.7,bumpMap:tf().fabric,bumpScale:.6}),c=new Ke({color:2830917,roughness:.85}),h=new bt({color:i.shoe||3809558,roughness:.35,clearcoat:.7,clearcoatRoughness:.25}),f=new Ke({color:15327956,roughness:.8}),u=new Ke({color:i.shirt,roughness:.75}),d=new Re(i.hair),p=new bt({vertexColors:!0,roughness:.55,sheen:1,sheenRoughness:.4,sheenColor:d.clone().lerp(new Re(16777215),.5)}),x=new Ke({color:1380366,roughness:.5}),g=new bt({map:O_(i.eye),roughness:.25,clearcoat:1,clearcoatRoughness:.05,emissive:16777215,emissiveIntensity:.04}),m=null;i.glasses==="round"?m=new Ke({color:i.frame,metalness:1,roughness:.25}):i.glasses&&(m=new bt({color:i.frame,roughness:.3,clearcoat:1,clearcoatRoughness:.1}));let y=new bt({color:16777215,transparent:!0,opacity:.1,roughness:.04,clearcoat:1,depthWrite:!1}),S=new Ke({color:13146696,metalness:1,roughness:.3});for(let N of[-1,1]){n(t,new Dn(.085,.32,6,12),c,O(N*.11,.3,0)),n(t,new st(1,20,14),h,O(N*.115,.075,.055),null,O(.1,.07,.16)),n(t,new st(1,20,10,0,Kn,Math.PI*.5,Math.PI*.5),f,O(N*.115,.06,.055),null,O(.108,.05,.17));for(let W=0;W<3;W++)n(t,new ot(.006,.006,.07,6),f,O(N*.115,.135-W*.008,.1+W*.03),[.35+W*.25,0,Math.PI/2])}let _=i.belly,b=[[.001,.4],[.27,.4],[.3,.43],[.285,.55],[.28+.06*_,.72],[.28+.075*_,.86],[.275+.04*_,.98],[.26,1.08],[.22,1.16],[.15,1.23],[.085,1.27],[.001,1.28]],T=N=>{for(let W=1;W<b.length;W++)if(N<=b[W][1]){let[B,J]=b[W-1],[te,Q]=b[W];return ht(B,te,(N-J)/(Q-J))}return 0},A=.8;n(t,new zi(b.map(([N,W])=>new xe(N,W)),40),l,null,null,O(1,1,A));let v=(N,W=0)=>T(N)*A+W,E=new je;E.position.set(0,1.27,v(1.27)+.004),E.rotation.x=-.72,t.add(E);let R=(N,W,B)=>{let J=new Mi;return J.moveTo(-N,0),J.lineTo(N,0),J.lineTo(0,-W),J.closePath(),new fo(J,{depth:B,bevelEnabled:!1})};if(i.vest){n(E,R(.12,.3,.02),new Ke({color:i.vest,roughness:.8})),n(E,R(.07,.13,.024),u);for(let N=0;N<2;N++)n(E,new st(.012,8,6),x,O(0,-.15-N*.05,.022))}else n(E,R(.12,.3,.02),u);if(i.tie==="bow"){let N=new Ke({color:i.tieColor,roughness:.6});n(E,new st(.018,10,8),N,O(0,-.03,.03));for(let W of[-1,1])n(E,new Hi(.03,.06,10),N,O(W*.035,-.03,.028),[0,0,W*Math.PI/2],O(1,1,.5))}for(let N of[-1,1])n(E,new yt(.04,.32,.018),l,O(N*.07,-.14,.024),[0,0,N*.38]);n(t,new Xt(.1,.032,10,24),l,O(0,1.27,0),[Math.PI/2,0,0],O(1,1,.75)),n(t,new ot(.07,.075,.14,14),r,O(0,1.31,0));for(let N of[.95,.8,.65])n(t,new st(.016,10,8),x,O(0,N,v(N)+.004));for(let N of[-1,1]){let B=new je;B.position.set(N*.17,.66,v(.66)*.82),B.rotation.y=N*.62,t.add(B),n(B,new yt(.15,.13,.016),l,O(0,0,.012)),n(B,new yt(.16,.035,.022),l,O(0,.07,.016))}if(i.badge){let N=new je;N.position.set(-.13,1,v(1)-.02),N.rotation.set(-.15,-.5,.06),t.add(N),n(N,new yt(.1,.055,.006),new Ke({map:H_(i.badge),roughness:.35}),O(0,0,.012)),n(N,new yt(.02,.02,.008),S,O(0,.032,.012))}let P=new je;P.position.set(.13,.98,v(.98)-.03),P.rotation.y=.5,t.add(P),n(P,new yt(.11,.1,.02),l,O(0,0,.012)),[15221579,2919664,15777836].forEach((N,W)=>{n(P,new ot(.008,.008,.07,8),new Ke({color:N,roughness:.4}),O(-.03+W*.025,.06,.006))});let L={};for(let[N,W]of[["L",1],["R",-1]]){let B=new je;B.position.set(W*.245,1.15,0),t.add(B),n(B,new st(.074,16,12),l),n(B,new Dn(.072,.2,6,12),l,O(0,-.14,0));let J=new je;J.position.y=-.29,B.add(J),n(J,new Dn(.066,.19,6,12),l,O(0,-.13,0)),n(J,new Xt(.066,.018,8,18),l,O(0,-.245,0),[Math.PI/2,0,0]);let te=new je;te.position.y=-.29,J.add(te),n(te,new st(1,16,12),r,O(0,-.05,0),null,O(.04,.078,.07));let Q=[];for(let[ue,I]of[[-.036,.04],[-.012,.052],[.012,.055],[.036,.048]]){let pe=new je;pe.position.set(0,-.1,ue*1.1),te.add(pe),n(pe,new Dn(.017,I,4,8),r,O(0,-.03,0)),Q.push(pe)}n(te,new Dn(.022,.05,4,8),r,O(-W*.014,-.045,.062),[.7,0,0]),L[N]={shoulder:B,elbow:J,hand:te,fingers:Q,sx:W}}if(i.extra==="clipboard"){let N=new je;N.position.set(-.035,-.13,.02),L.R.hand.add(N),n(N,new yt(.012,.24,.17),new Ke({color:9067058,roughness:.6}));let W=document.createElement("canvas");W.width=128,W.height=180;let B=W.getContext("2d");B.fillStyle="#fbfaf5",B.fillRect(0,0,128,180),B.strokeStyle="#2f6f9a",B.lineWidth=3;for(let te=0;te<6;te++)B.strokeRect(10,20+te*26,14,14),B.fillStyle="#9aa7b5",B.fillRect(32,24+te*26,60+le(te,91)*30,6),te<4&&(B.beginPath(),B.moveTo(12,27+te*26),B.lineTo(17,32+te*26),B.lineTo(26,18+te*26),B.strokeStyle="#e0446a",B.stroke(),B.strokeStyle="#2f6f9a");let J=new On(W);J.colorSpace=Vt,n(N,new Zt(.15,.2),new Ke({map:J,roughness:.8}),O(-.0065,-.01,0),[0,-Math.PI/2,0]),n(N,new yt(.02,.025,.06),S,O(-.006,.115,0))}let[k,U,V]=i.head,H=B_(k,U,V),Y=1.24,K=new je,Z=1.29+U*.86*Y;K.position.y=Z,K.scale.setScalar(Y),t.add(K),n(K,new st(1,48,36),r,null,null,O(k,U,V));for(let N of[-1,1])n(K,new st(1,16,12),r,O(N*k*.95,-.015,-.01),[0,N*.3,N*.12],O(.03,.068,.05)),n(K,new st(1,12,10),o,O(N*(k*.95+.012),-.015,0),[0,N*.3,0],O(.012,.042,.03)),i.cheeks&&n(K,new st(.06,20,14),o,H.surf(N*.14,-.045,-.046));i.chin&&n(K,new st(.072,20,14),r,H.surf(0,-.2,-.045));let $=H.surf(0,-.035,i.nose*.32);n(K,new st(i.nose,24,18),a,$,null,O(1,.92,1.05));let ne=new Ke({color:s.clone().multiplyScalar(.32),roughness:.8});for(let N of[-1,1])n(K,new st(i.nose*.2,12,8),ne,$.clone().add(O(N*i.nose*.4,-i.nose*.62,i.nose*.42)),null,O(1.1,.55,1));let de=[];for(let N of[-1,1]){let W=N*i.eyeX,B=i.eyeY,J=new je;J.position.set(W,B,H.zS(W,B)-.6*i.eyeR),K.add(J);let te=n(J,new st(i.eyeR,32,24),g),Q=new je;J.add(Q),n(Q,new st(i.eyeR*1.08,28,14,0,Kn,0,Math.PI/2),r);let ue=new je;if(J.add(ue),n(ue,new st(i.eyeR*1.06,28,14,0,Kn,Math.PI/2,Math.PI/2),r),i.lashes){let I=new Vi,pe=i.eyeR*1.08;for(let ae of[.55,.85,1.15]){let Te=O(N*Math.sin(ae)*pe,0,Math.cos(ae)*pe),Le=Te.clone().normalize();I.addTube(new Ot([Te,Te.clone().addScaledVector(Le,.012).add(O(0,.004,0)),Te.clone().addScaledVector(Le,.02).add(O(0,.014,0))]),{segs:5,radial:4,prof:_e=>.0035*(1-_e),col:()=>new Re(1707272)})}n(Q,I.build(),p)}de.push({g:J,eye:te,lidU:Q,lidL:ue,sx:N})}let Ee=[],Ye=i.eyeY+i.eyeR+.032;for(let N of[-1,1]){let W=H.surf(N*(i.eyeX+.004),Ye,.01),B=new je;B.position.copy(W),K.add(B);let J=new Vi,te=[-1,-.4,.3,1].map(ue=>H.surf(N*(i.eyeX+ue*.05),Ye+.014*(1-ue*ue)-.006*ue,.01).sub(W)),Q=new Re(i.brow);J.addTube(new Ot(te),{segs:12,radial:7,prof:ue=>i.browR*Math.sin(Math.PI*(.12+.76*ue))*(1.1-.4*ue),col:ue=>Q.clone().multiplyScalar(.85+.15*ue)}),n(B,J.build(),p),Ee.push({g:B,sx:N,base:W.clone()})}let Ve=N=>H.zS(N*i.eyeX,i.eyeY)-.6*i.eyeR+i.eyeR;if(i.glasses){let N=i.glasses==="thick",W=i.eyeR+(N?.022:.018),B=Ve(1)+(N?.03:.022);for(let te of[-1,1]){let Q=n(K,new Xt(W,N?.015:.0065,10,40),m,O(te*i.eyeX,i.eyeY,B),null,N?O(1.08,.94,1):null);Q.castShadow=!0;let ue=n(K,new Rn(W,32),y,O(te*i.eyeX,i.eyeY,B-.002),null,N?O(1.08,.94,1):null);ue.userData.noDepth=!0;let I=O(te*(i.eyeX+W*(N?1.08:1)),i.eyeY+.01,B-.005),pe=O(te*k*.97,i.eyeY-.005,-.03);K.add(z_(I,pe,N?.009:.004,m))}let J=i.eyeX-W*(N?1.08:1);n(K,new Xt(Math.max(.01,J),N?.011:.005,8,14,Math.PI),m,O(0,i.eyeY-.002,B))}if(i.goggles){for(let te of[-1,1]){let Q=H.surf(te*.072,.165,.02),ue=new je;ue.position.copy(Q),ue.quaternion.setFromUnitVectors(O(0,0,1),H.normal(Q)),K.add(ue),n(ue,new ot(.052,.056,.045,24),S,null,[Math.PI/2,0,0]);let I=n(ue,new Rn(.044,24),new bt({color:16757575,emissive:16747034,emissiveIntensity:.08,roughness:.25,clearcoat:.6}),O(0,0,.0235));I.castShadow=!1}let W=new Vi,B=[];for(let te=0;te<24;te++){let Q=te/24*Kn,ue=.165-.03+.03*Math.cos(Q),I=Math.sqrt(Math.max(.05,1-(ue/U)**2))*1.03;B.push(O(Math.sin(Q)*k*I,ue,Math.cos(Q)*V*I))}let J=new Re(3811874);W.addTube(new Ot(B,!0),{segs:48,radial:5,prof:()=>.011,col:()=>J}),n(K,W.build(),p)}let Je=18,oe=5,ce=(Je+1)*2,we=new Float32Array(oe*ce*3),He=new Float32Array(oe*ce*3),be=new Float32Array(oe*ce*3),Ze=[];for(let N=0;N<oe;N++)for(let W=0;W<Je;W++){let B=N*ce+W*2;Ze.push(B,B+2,B+1,B+1,B+2,B+3)}let et=new gt;et.setAttribute("position",new Ct(we,3)),et.setAttribute("normal",new Ct(He,3)),et.setAttribute("color",new Ct(be,3)),et.setIndex(Ze);let fe=n(K,et,new Ke({vertexColors:!0,roughness:.45,side:Ht}));fe.frustumCulled=!1;let me=s.clone().lerp(new Re(9321010),.4),ve=[me,new Re(3803662),new Re(15920352),new Re(12865626),me],Se=[.0022,.0016,.0026,.002,.0022],z=new D;function ye(N,W,B,J,te){let Q=(N*ce+W*2+B)*3;z.copy(H.surf(J,te,Se[N])),we[Q]=z.x,we[Q+1]=z.y,we[Q+2]=z.z;let ue=H.normal(z);He[Q]=ue.x,He[Q+1]=ue.y,He[Q+2]=ue.z,be[Q]=ve[N].r,be[Q+1]=ve[N].g,be[Q+2]=ve[N].b}let Ae="";function Ie(N,W){let B=`${N.toFixed(3)}|${W.toFixed(3)}`;if(B===Ae)return;Ae=B;let J=i.mouthW,te=i.mouthY;for(let Q=0;Q<=Je;Q++){let ue=-1+2*Q/Je,I=ue*J,pe=1-ue*ue,ae=te+N*.03*ue*ue+W*.02*pe*(1-.5*Math.max(0,N)),Te=Math.min(ae,te+N*.03*ue*ue-(.006+W*.075)*Math.pow(pe,.85)),Le=Math.max(Te,ae-.024*Math.sqrt(pe)),_e=Math.min(ae,Te+(.01+.022*W)*pe),ke=.0095*Math.sqrt(pe)+.0015;ye(0,Q,0,I,ae+ke),ye(0,Q,1,I,ae),ye(1,Q,0,I,ae),ye(1,Q,1,I,Te),ye(2,Q,0,I,ae-5e-4),ye(2,Q,1,I,Le),ye(3,Q,0,I,_e),ye(3,Q,1,I,Te),ye(4,Q,0,I,Te),ye(4,Q,1,I,Te-ke)}et.attributes.position.needsUpdate=!0,et.attributes.normal.needsUpdate=!0,et.attributes.color.needsUpdate=!0}Ie(.6,.1);let Ce=new Vi,F=new Re,Ge=(N,W,B)=>F.copy(N).multiplyScalar(.7+.3*B+(le(W,9)-.5)*.14).clone();if(i.beard){let N=new Re(i.hair).multiplyScalar(.9),W=(J,te,Q)=>!(Math.abs(J)<i.mouthW+.035&&te>i.mouthY-.045)&&!(te>-.085&&Math.abs(J)<Q*.66),B=0;for(let J=0;J<1400&&B<150;J++){let te=ht(0,-.265,le(J,52)),Q=k*.98*Math.sqrt(Math.max(0,1-(te/U)**2)),ue=(le(J,51)*2-1)*Q;if(!W(ue,te,Q))continue;B+=1;let I=H.surf(ue,te,-.006),pe=.03+le(J,54)*.014;Ce.addGeometry(new st(1,10,8),new ut().compose(I,new fn,O(pe,pe*1.15,pe)),Ge(N,J,.55+le(J,55)*.45))}}if(i.mustache){let N=new Re(i.hair);for(let W of[-1,1])for(let B=0;B<3;B++){let J=(B-1)*.006,te=B===1?.004:0,Q=[[.006,-.088,.024],[.045,-.097,.027],[.085,-.118,.02],[.108,-.15,.012]].map(([ue,I,pe])=>H.surf(W*ue,I+J,pe+te));Ce.addTube(new Ot(Q),{segs:14,radial:8,prof:ue=>.026*Math.pow(Math.sin(Math.PI*(.08+.84*ue)),.7)*(1-.3*ue),col:ue=>Ge(N,B+W*5,.6+.4*ue)})}}if(i.goatee){let N=new Re(i.hair);for(let W=0;W<10;W++){let B=(le(W,61)-.5)*.07,J=-.2-le(W,62)*.05,te=H.surf(B,J,.015),Q=.07+le(W,63)*.05;Ce.addTube(new Ot([te,te.clone().add(O(B*.2,-Q*.5,.02)),te.clone().add(O(B*.4,-Q,.035))]),{segs:6,radial:6,prof:ue=>.022*(1-.88*ue),col:ue=>Ge(N,W,ue)})}}let it=s.clone().multiplyScalar(.78),C=(N,W=.0032)=>Ce.addTube(new Ot(N.map(([B,J])=>H.surf(B,J,5e-4))),{segs:10,radial:5,prof:B=>W*Math.sin(Math.PI*(.1+.8*B)),col:()=>it});if(i.wrinkles){let N=i.wrinkles==="old"?3:2;for(let W=0;W<N;W++){let B=Ye+.048+W*.022;C([-1,-.5,0,.5,1].map(J=>[J*(.07+W*.008),B+.007*(1-J*J)]))}for(let W of[-1,1])if(i.wrinkles==="old"){for(let B of[-.016,0,.016])C([[W*(i.eyeX+i.eyeR+.006),i.eyeY+B*.6],[W*(i.eyeX+i.eyeR+.02),i.eyeY+B*1.2],[W*(i.eyeX+i.eyeR+.032),i.eyeY+B*1.8]],.0026);C([[W*(i.eyeX-.03),i.eyeY-i.eyeR-.004],[W*i.eyeX,i.eyeY-i.eyeR-.012],[W*(i.eyeX+.032),i.eyeY-i.eyeR-.004]],.0028)}else C([[W*i.nose*1.05,-.045],[W*(i.nose*1.45),-.085],[W*(i.mouthW+.012),i.mouthY-.004]],.0035)}if(i.freckles){let N=s.clone().multiplyScalar(.6);for(let W=0;W<26;W++){let B=(le(W,81)*2-1)*.15,J=-.055+le(W,82)*.05;if(Math.abs(B)<.03&&J<-.02)continue;let te=.0035+le(W,83)*.003;Ce.addGeometry(new st(1,8,6),new ut().compose(H.surf(B,J,-5e-4),new fn,O(te,te,te*.5)),N)}}if(Ce.n&&n(K,Ce.build(),p),i.extra==="chain"){let N=new Vi,W=B=>v(B)+.012;N.addTube(new Ot([O(.11,.95,W(.95)-.02),O(.085,.87,W(.87)),O(.04,.845,W(.845)),O(.004,.86,W(.86))]),{segs:20,radial:5,prof:()=>.004,col:()=>new Re(16777215)}),n(t,N.build(),S)}else if(i.extra==="pencil"){let N=new je;N.position.set(-k*.93,.05,-.01),N.rotation.set(Math.PI/2+.25,0,.15),K.add(N),n(N,new ot(.008,.008,.15,6),new Ke({color:15909424,roughness:.5})),n(N,new Hi(.008,.025,6),new Ke({color:15255450,roughness:.7}),O(0,-.087,0),[Math.PI,0,0]),n(N,new ot(.0085,.0085,.018,6),new Ke({color:15235722,roughness:.6}),O(0,.083,0))}let M=new je;K.add(M);let X=new Vi,q=(N,W,B,J=.6)=>X.addGeometry(new st(1,32,20,0,Kn,0,Math.PI*J),new ut().compose(O(0,.004,-.01),new fn().setFromEuler(new Xn(N,0,0)),O(k*W,U*W,V*W)),B);if(i.style==="swept"){q(-.5,1.03,d.clone().multiplyScalar(.78));for(let N=0;N<64;N++){let W=ht(-.21,.21,(N+le(N,1))/64),B=Math.sqrt(Math.max(.05,1-(W/k)**2)),J=.8+le(N,2)*.2+Math.abs(W)*1.3,te=2.55+le(N,3)*.35,Q=[];for(let ue=0;ue<=5;ue++){let I=ue/5,pe=ht(J,te,I),ae=.985+.2*Math.pow(Math.sin(Math.PI*Math.min(1,I*1.15)),.8)+.06*I+le(N,4)*.04;Q.push(O(W*(1+.3*I),Math.sin(pe)*U*B*ae,Math.cos(pe)*V*B*ae))}X.addTube(new Ot(Q),{segs:16,radial:7,prof:ue=>.044*(1-.85*Math.pow(ue,1.3))*(.55+.45*Math.min(1,ue*6)),col:ue=>Ge(d,N,ue)})}for(let N of[-1,1])for(let W=0;W<14;W++){let B=H.dirPt(N*(1.35+le(W,11+N)*.6),.02+le(W,12)*.6,.97),J=H.normal(B),te=.07+le(W,13)*.06,Q=.03+le(W,14)*.05,ue=[B,B.clone().addScaledVector(J,te*.5).add(O(0,Q*.4,-.03)),B.clone().addScaledVector(J,te).add(O(0,Q,-.07))];X.addTube(new Ot(ue),{segs:8,radial:7,prof:I=>.048*(1-.8*I),col:I=>Ge(d,W+50,.6+.4*I)})}for(let N=0;N<18;N++){let W=ht(-.19,.19,(N+le(N,21))/18),B=Math.sqrt(Math.max(.05,1-(W/k)**2)),J=[];for(let te=0;te<=4;te++){let Q=te/4,ue=ht(1.95+le(N,22)*.3,3.75+le(N,23)*.2,Q),I=1+.1*Math.sin(Math.PI*Q)+le(N,24)*.03;J.push(O(W,Math.sin(ue)*U*B*I,Math.cos(ue)*V*B*I))}X.addTube(new Ot(J),{segs:12,radial:7,prof:te=>.04*(1-.8*te),col:te=>Ge(d,N+90,te)})}}else if(i.style==="wild"){q(-.7,1.02,d.clone().multiplyScalar(.8));let N=0;for(let B=0;B<400&&N<46;B++){let J=(le(B,71)*2-1)*Math.PI,te=ht(-.1,.9,le(B,72));if(Math.abs(J)<1.2)continue;N+=1;let Q=.045+le(B,73)*.03;X.addGeometry(new st(1,10,8),new ut().compose(H.dirPt(J,te,1.02+le(B,74)*.12),new fn,O(Q,Q,Q)),Ge(d,B,.7+le(B,75)*.3))}let W=0;for(let B=0;B<1200&&W<150;B++){let J=(le(B,1)*2-1)*Math.PI,te=ht(-.05,1.5,Math.sqrt(le(B,2)));if(Math.abs(J)<.75&&te<1.1)continue;W+=1;let Q=H.dirPt(J,te,.96),I=H.normal(Q).clone().add(O(0,.55+le(B,3)*.45,0)).normalize(),pe=new D().crossVectors(I,O(0,1,0));pe.lengthSq()<.001&&(pe=O(1,0,0)),pe.normalize();let ae=.15+le(B,4)*.2,Te=(le(B,5)-.5)*.22,Le=[Q,Q.clone().addScaledVector(I,ae*.35).addScaledVector(pe,Te*.5),Q.clone().addScaledVector(I,ae*.7).addScaledVector(pe,-Te*.6),Q.clone().addScaledVector(I,ae).addScaledVector(pe,Te)];X.addTube(new Ot(Le),{segs:12,radial:7,prof:_e=>.048*(1-.88*Math.pow(_e,.9)),col:_e=>Ge(d,B,.75+.25*_e)})}}else if(i.style==="puff"){let N=new st(1,32,20,0,Kn,0,Math.PI*.6);X.addGeometry(N,new ut().compose(O(0,.005,-.012),new fn().setFromEuler(new Xn(-.42,0,0)),O(k*1.05,U*1.05,V*1.05)),d.clone().multiplyScalar(.8));let W=(Q,ue,I)=>X.addGeometry(new st(1,10,8),new ut().compose(Q,new fn,O(ue,ue,ue)),Ge(d,I,.7+le(I,77)*.3)),B=0;for(let Q=0;Q<800&&B<115;Q++){let ue=(le(Q,31)*2-1)*Math.PI,I=ht(.2,1.5,le(Q,32));Math.abs(ue)<.85&&I<.95||(B+=1,W(H.dirPt(ue,I,1.06+le(Q,33)*.1),.034+le(Q,34)*.028,Q))}let J=O(0,U*1.08,-V*.38);for(let Q=0;Q<46;Q++){let ue=O(le(Q,41)-.5,le(Q,42)-.35,le(Q,43)-.5).normalize();W(J.clone().addScaledVector(ue,.1+le(Q,44)*.05),.05+le(Q,45)*.03,Q+200)}for(let Q=0;Q<9;Q++)W(H.dirPt(ht(-.8,.8,Q/8),.98+le(Q,46)*.08,1.05),.038,Q+300);let te=new je;te.position.copy(J).add(O(.04,.05,.02)),te.rotation.set(.4,0,-.9),M.add(te),n(te,new ot(.011,.011,.26,6),new Ke({color:15909424,roughness:.5})),n(te,new ot(.012,.012,.03,8),new Ke({color:15235722,roughness:.6}),O(0,.14,0)),n(te,new Hi(.011,.035,6),new Ke({color:15255450,roughness:.7}),O(0,-.147,0),[Math.PI,0,0])}if(i.flyaways){let N=i.style==="wild"?26:10;for(let W=0;W<N;W++){let B=(le(W,101)*2-1)*Math.PI,J=ht(.5,1.45,le(W,102));if(Math.abs(B)<.7&&J<1)continue;let te=H.dirPt(B,J,1),Q=H.normal(te),ue=(i.style==="wild"?.25:.14)+le(W,103)*.12,I=O(le(W,104)-.5,.2,le(W,105)-.5).normalize().multiplyScalar(ue*.5);X.addTube(new Ot([te,te.clone().addScaledVector(Q,ue*.4).addScaledVector(I,.15),te.clone().addScaledVector(Q,ue*.75).addScaledVector(I,.5),te.clone().addScaledVector(Q,ue).addScaledVector(I,1)]),{segs:16,radial:5,prof:pe=>.012*(1-.8*pe),col:pe=>Ge(d,W+700,.85+.15*pe)})}}n(M,X.build(),p),e.traverse(N=>{N.isMesh&&(N.castShadow=N.castShadow||!N.material.transparent,N.receiveShadow=!N.material.transparent)}),fe.castShadow=!1,fe.userData.keep=!0,de.forEach(N=>{N.eye.userData.keep=!0});let re=[];e.traverse(N=>{N.isMesh||re.push(N)});for(let N of re)wr(N,{deep:!1});let Me=new D,Pe=(N,W)=>{let B=2.6+le(W,1)*1.8,J=(N+le(W,2)*B)%B/B,te=.16/B;return J<te?Math.sin(J/te*Math.PI):0},he=Math.floor(i.eyeX*1e3+i.mouthY*777);function ge(N){let{t:W=0,y:B=0,turn:J=0,L:te=[0,0,0,.3],R:Q=[0,0,0,.3],headTurn:ue=0,headTilt:I=0,headRoll:pe=0,frizz:ae=1,smile:Te=.6,open:Le=.08,brow:_e=0,browAngle:ke=0,lid:We=0,squint:Tt=0,look:_t=null,squash:cn=1,lean:hn=0,wink:Is=0}=N;t.position.y=B,t.rotation.x=hn;let hs=1/Math.sqrt(cn);t.scale.set(hs,cn,hs),e.rotation.y=J;for(let[en,[kn,ci,pn,ei=.3]]of[["L",te],["R",Q]]){let mn=L[en];mn.shoulder.rotation.set(-kn,0,mn.sx*ci),mn.elbow.rotation.set(-pn,0,0),mn.fingers.forEach(ds=>{ds.rotation.z=-mn.sx*ei*1.4})}K.position.y=Z+.006*Math.sin(W*2.2+he),K.rotation.set(I,ue,pe),M.scale.setScalar(1+.022*ae*Math.sin(W*9+he)+(ae-1)*.025),Ee.forEach(en=>{en.g.position.copy(en.base),en.g.position.y+=_e*.02,en.g.rotation.z=en.sx*ke*.4}),Ie(Math.max(-1,Math.min(1,Te)),Ri(Le));let Xi=Math.max(We,Pe(W,he)),us=-.7-.22*Math.max(0,_e)+.25*Tt+(i.lidOpen||0);de.forEach(en=>{en.lidU.rotation.x=ht(us,1.45,en.sx<0?Math.max(Xi,Is):Xi),en.lidL.rotation.x=ht(.85,.32,Tt)}),_t&&(e.updateMatrixWorld(!0),Me.copy(_t),K.worldToLocal(Me),de.forEach(en=>{let kn=Me.x-en.g.position.x,ci=Me.y-en.g.position.y,pn=Me.z-en.g.position.z,ei=Math.max(-.55,Math.min(.55,Math.atan2(kn,pn))),mn=Math.max(-.4,Math.min(.4,Math.atan2(ci,Math.hypot(kn,pn))));en.eye.rotation.set(-mn,ei,0)}))}return{root:e,pose:ge,arms:L,head:K}}var kt=Math.PI*2;function Qn(i,e,t,{srgb:n=!0,repeat:s=null}={}){let r=document.createElement("canvas");r.width=i,r.height=e,t(r.getContext("2d"),i,e);let o=new On(r);return n&&(o.colorSpace=Vt),o.anisotropy=8,s&&(o.wrapS=o.wrapT=Mn,o.repeat.set(s[0],s[1])),o}var uc=(i,e,t,n=.03,s=2)=>new Tr(i,e,t,s,n),dc=(i,e=28)=>new zi(i.map(([t,n])=>new xe(t,n)),e);function nf(i){let e=t=>(n,s,r)=>{if(n.fillStyle=t?"#808080":"#1b2a3d",n.fillRect(0,0,s,r),!t){for(let a=0;a<900;a++){let l=le(a,3);n.fillStyle=`rgba(${l>.5?"255,255,255":"0,0,0"},${.015+le(a,4)*.03})`,n.fillRect(le(a,1)*s,le(a,2)*r,2+le(a,5)*30,2+le(a,6)*30)}let o=n.createLinearGradient(0,r*.6,0,r);o.addColorStop(0,"rgba(0,0,0,0)"),o.addColorStop(1,"rgba(0,0,0,0.35)"),n.fillStyle=o,n.fillRect(0,0,s,r)}n.fillStyle=t?"#3a3a3a":"rgba(5,10,18,0.9)",n.fillRect(0,0,s,4),n.fillRect(0,0,4,r),n.fillRect(s/2-2,0,3,r);for(let[o,a]of[[14,14],[s/2-14,14],[s/2+14,14],[s-14,14],[14,r-14],[s/2-14,r-14],[s/2+14,r-14],[s-14,r-14]])n.fillStyle=t?"#d0d0d0":"#3d5068",n.beginPath(),n.arc(o,a,5,0,kt),n.fill(),t||(n.fillStyle="rgba(255,255,255,0.25)",n.beginPath(),n.arc(o-1.5,a-1.5,2,0,kt),n.fill())};return{map:Qn(256,256,e(!1),{repeat:i}),bump:Qn(256,256,e(!0),{srgb:!1,repeat:i})}}function G_(i){let e=t=>(n,s,r)=>{let a=s/4;for(let l=0;l<4;l++)for(let c=0;c<4;c++){let h=le(l*7+c,11);if(t){let f=120+Math.floor(h*40);n.fillStyle=`rgb(${f},${f},${f})`}else{let f=14+h*8;n.fillStyle=(l+c)%2?`hsl(220, 22%, ${f}%)`:`hsl(215, 18%, ${f+4}%)`}n.fillRect(l*a,c*a,a,a)}if(!t)for(let l=0;l<160;l++){n.strokeStyle=`rgba(0,0,0,${.05+le(l,13)*.08})`,n.lineWidth=1+le(l,14)*2;let c=le(l,15)*s,h=le(l,16)*r;n.beginPath(),n.moveTo(c,h),n.lineTo(c+(le(l,17)-.5)*40,h+(le(l,18)-.5)*12),n.stroke()}n.fillStyle=t?"#e8e8e8":"#070a10";for(let l=0;l<=4;l++)n.fillRect(l*a-2,0,4,r),n.fillRect(0,l*a-2,s,4)};return{map:Qn(512,512,e(!1),{repeat:i}),rough:Qn(512,512,e(!0),{srgb:!1,repeat:i})}}function k_(){return Qn(1024,512,(i,e,t)=>{let n=i.createLinearGradient(0,0,0,t);n.addColorStop(0,"#070b24"),n.addColorStop(.55,"#1d1550"),n.addColorStop(.8,"#5b2a6e"),n.addColorStop(1,"#ff8a5c"),i.fillStyle=n,i.fillRect(0,0,e,t);for(let r=0;r<220;r++)i.fillStyle=`rgba(255,255,255,${.3+le(r,1)*.7})`,i.fillRect(le(r,2)*e,le(r,3)*t*.55,1.5,1.5);let s=i.createRadialGradient(760,120,10,760,120,120);s.addColorStop(0,"rgba(255,248,220,1)"),s.addColorStop(.3,"rgba(255,240,200,0.9)"),s.addColorStop(.31,"rgba(255,220,180,0.25)"),s.addColorStop(1,"rgba(255,200,160,0)"),i.fillStyle=s,i.beginPath(),i.arc(760,120,120,0,kt),i.fill();for(let r=0;r<3;r++){let o=-20;for(;o<e;){let a=30+le(Math.floor(o),r+20)*70,l=(.18+le(Math.floor(o),r+30)*.32)*t*(1-r*.18),c=t-l-r*18;i.fillStyle=["#0c1030","#0a0d26","#06081a"][r],i.fillRect(o,c,a,t-c),le(Math.floor(o),r+40)>.7&&(i.beginPath(),i.moveTo(o+a/2-3,c),i.lineTo(o+a/2,c-40),i.lineTo(o+a/2+3,c),i.fill(),i.fillStyle="#ff3d5a",i.fillRect(o+a/2-1.5,c-42,3,3));for(let h=c+8;h<t-6;h+=11)for(let f=o+5;f<o+a-6;f+=9){let u=le(Math.floor(f*3+h),r+50);u>.62&&(i.fillStyle=u>.93?"#7df3ff":u>.85?"#ff9ef0":"#ffd48a",i.globalAlpha=.5+r*.15,i.fillRect(f,h,4,5),i.globalAlpha=1)}o+=a+4}}i.strokeStyle="rgba(255,90,200,0.8)",i.lineWidth=2,i.beginPath(),i.moveTo(80,300),i.bezierCurveTo(300,260,500,330,980,270),i.stroke(),i.strokeStyle="rgba(120,240,255,0.7)",i.beginPath(),i.moveTo(0,340),i.bezierCurveTo(250,300,600,360,1024,320),i.stroke()})}function V_(){return Qn(1024,512,(i,e,t)=>{i.fillStyle="#1f3a33",i.fillRect(0,0,e,t);for(let r=0;r<40;r++)i.fillStyle=`rgba(255,255,255,${.02+le(r,1)*.04})`,i.beginPath(),i.ellipse(le(r,2)*e,le(r,3)*t,40+le(r,4)*120,15+le(r,5)*40,le(r,6)*3,0,kt),i.fill();i.fillStyle="rgba(245,245,235,0.88)",i.font='italic 600 46px "Bricolage Grotesque", sans-serif',i.fillText("R\xE9union = \u03A3 (blabla)\xB2",40,80),i.font='italic 600 40px "Bricolage Grotesque", sans-serif',i.fillText("Synergie \u2248 m\xB7c\xB2",60,160),i.fillText("Quick win \u2192 quick lose ?",520,130),i.fillText("ROI = \xBF?",640,230),i.font='italic 600 34px "Bricolage Grotesque", sans-serif',i.fillText("On boucle... encore",70,400),i.fillText("ASAP = hier",600,420),i.strokeStyle="rgba(245,245,235,0.8)",i.lineWidth=3;let n=120,s=210;for(let r=0;r<=3;r++)i.beginPath(),i.moveTo(n+r*45,s),i.lineTo(n+r*45,s+135),i.stroke(),i.beginPath(),i.moveTo(n,s+r*45),i.lineTo(n+135,s+r*45),i.stroke();i.beginPath(),i.arc(n+22,s+22,14,0,kt),i.stroke(),i.beginPath(),i.arc(n+67,s+67,14,0,kt),i.stroke(),i.beginPath(),i.moveTo(n+100,s+100),i.lineTo(n+125,s+125),i.moveTo(n+125,s+100),i.lineTo(n+100,s+125),i.stroke(),i.beginPath(),i.moveTo(300,260),i.quadraticCurveTo(400,200,480,270),i.stroke(),i.beginPath(),i.moveTo(470,255),i.lineTo(482,272),i.lineTo(462,276),i.stroke(),i.beginPath(),i.arc(880,330,40,0,kt),i.stroke(),i.beginPath(),i.arc(866,320,5,0,kt),i.arc(894,320,5,0,kt),i.fill(),i.beginPath(),i.arc(880,340,18,.2,Math.PI-.2),i.stroke()})}function W_(i){return Qn(256,384,(e,t,n)=>{if(i===0){let s=e.createLinearGradient(0,0,0,n);s.addColorStop(0,"#ffcf4a"),s.addColorStop(1,"#ff7a1a"),e.fillStyle=s,e.fillRect(0,0,t,n),e.fillStyle="#1b1b2e",e.font='800 30px "Bricolage Grotesque", sans-serif',e.textAlign="center",e.fillText("R\xC9UNIONITE",t/2,60),e.fillText("AIGU\xCB",t/2,95),e.font='600 18px "Bricolage Grotesque", sans-serif',["B\xE2illements","Regard vitreux","Envie de caf\xE9","Mots creux"].forEach((r,o)=>e.fillText(`\u2022 ${r}`,t/2,160+o*34)),e.beginPath(),e.arc(t/2,320,30,0,kt),e.fill(),e.fillStyle="#ffcf4a",e.fillRect(t/2-4,300,8,26),e.fillRect(t/2-4,332,8,8)}else e.fillStyle="#16324a",e.fillRect(0,0,t,n),e.fillStyle="#7df3ff",e.font='800 28px "Bricolage Grotesque", sans-serif',e.textAlign="center",e.fillText("COUPEZ",t/2,70),e.fillText("VOS MICROS",t/2,105),e.strokeStyle="#ff3df2",e.lineWidth=10,e.beginPath(),e.roundRect(t/2-28,150,56,100,28),e.stroke(),e.beginPath(),e.moveTo(t/2-60,290),e.lineTo(t/2+60,140),e.stroke(),e.fillStyle="#e7f0ee",e.font='600 18px "Bricolage Grotesque", sans-serif',e.fillText("(sauf pour dire \xAB Bingo \xBB)",t/2,340)})}function X_(){return Qn(256,256,i=>{i.fillStyle="#f6f1e4",i.beginPath(),i.arc(128,128,126,0,kt),i.fill(),i.fillStyle="#1b2433",i.textAlign="center",i.textBaseline="middle",i.font='800 30px "Bricolage Grotesque", sans-serif';for(let e=1;e<=12;e++){let t=e/12*kt-Math.PI/2;i.fillText(String(e),128+Math.cos(t)*96,128+Math.sin(t)*96)}for(let e=0;e<60;e++){let t=e/60*kt;i.fillRect(128+Math.cos(t)*116-1,128+Math.sin(t)*116-1,e%5?2:4,e%5?2:4)}i.font='700 16px "Bricolage Grotesque", sans-serif',i.fillStyle="#e0446a",i.fillText("LUNDI",128,168)})}function q_(){return Qn(256,256,(i,e,t)=>{i.fillStyle="#9a6a3a",i.fillRect(0,0,e,t);for(let n=0;n<4;n++)i.fillStyle=n%2?"#8a5c30":"#a87444",i.fillRect(0,n*64,e,62);for(let n=0;n<60;n++){i.strokeStyle="rgba(60,30,10,0.25)",i.beginPath();let s=le(n,1)*t;i.moveTo(0,s),i.bezierCurveTo(80,s+4,160,s-4,e,s+2),i.stroke()}i.strokeStyle="#5a3a1a",i.lineWidth=14,i.strokeRect(7,7,e-14,t-14),i.beginPath(),i.moveTo(10,10),i.lineTo(e-10,t-10),i.stroke(),i.fillStyle="rgba(30,20,10,0.75)",i.font='800 26px "Bricolage Grotesque", sans-serif',i.textAlign="center",i.fillText("MOTS CREUX",e/2,112),i.font='700 20px "Bricolage Grotesque", sans-serif',i.fillText("FRAGILE",e/2,150)})}function Y_(){return Qn(512,512,(i,e)=>{let t=e/2;for(let n=0;n<48;n++)i.fillStyle=n%2?"#16161a":"#f2c230",i.beginPath(),i.moveTo(t,t),i.arc(t,t,250,n/48*kt,(n+1)/48*kt),i.closePath(),i.fill();i.globalCompositeOperation="destination-out",i.beginPath(),i.arc(t,t,212,0,kt),i.fill(),i.globalCompositeOperation="source-over",i.fillStyle="rgba(0,0,0,0.25)";for(let n=0;n<300;n++)i.fillRect(le(n,1)*e,le(n,2)*e,3,3)})}function Z_(){let i=new je,e=new je;i.add(e);let t=new bt({color:15856630,roughness:.28,clearcoat:1,clearcoatRoughness:.12}),n=new bt({color:16742938,roughness:.35,clearcoat:.7}),s=new bt({color:527122,roughness:.08,clearcoat:1,metalness:.3}),r=new Ke({color:1776930,roughness:.85}),o=new xt({color:Mt(4190463,2.4),toneMapped:!1}),a=(x,g,m,y,S,_)=>{let b=new De(g,m);return y&&b.position.copy(y),S&&b.rotation.set(...S),_&&b.scale.copy(_),x.add(b),b},l=a(i,new Xt(.075,.035,12,24),r,O(0,.11,0),[0,Math.PI/2,0]);a(e,new ot(.15,.19,.12,28),n,O(0,.17,0)),a(e,new st(.22,32,24),t,O(0,.42,0),null,O(1,1.08,.95)),a(e,new Xt(.205,.018,10,40),n,O(0,.36,0),[Math.PI/2,0,0]);let c=a(e,new Rn(.035,20),new xt({color:Mt(3800968,2),toneMapped:!1}),O(0,.46,.21));a(e,new ot(.05,.06,.08,14),r,O(0,.67,0));let h=new je;h.position.y=.8,e.add(h),a(h,new st(.19,32,24),t,null,null,O(1.15,.82,1)),a(h,new st(.185,32,16,-Math.PI*.42,Math.PI*.84,Math.PI*.22,Math.PI*.56),s,O(0,0,.012),null,O(1.13,.8,1));let f=[-1,1].map(x=>a(h,new st(.032,16,12),o,O(x*.065,.005,.178),null,O(.8,1.15,.3)));a(h,new ot(.007,.007,.14,6),r,O(0,.2,0));let u=a(h,new st(.026,14,10),new xt({color:Mt(16756768,2),toneMapped:!1}),O(0,.28,0)),d=[-1,1].map(x=>{let g=new je;g.position.set(x*.21,.5,0),e.add(g),a(g,new st(.045,14,10),n),a(g,new Dn(.028,.14,4,10),t,O(0,-.1,0));let m=a(g,new st(.04,14,10),n,O(0,-.2,0));return{sh:g,hand:m,sx:x}}),p=new je;return d[1].hand.add(p),p.position.set(.02,-.02,.07),a(p,dc([[0,0],[.045,0],[.048,.1],[.044,.1],[.041,.006],[0,.006]]),new bt({color:14697578,roughness:.3,clearcoat:.8,side:Ht})),a(p,new Rn(.041,20),new Ke({color:3809040,roughness:.2}),O(0,.085,0),[-Math.PI/2,0,0]),a(p,new Xt(.025,.007,8,16,Math.PI),new bt({color:14697578,roughness:.3}),O(.05,.05,0),[0,0,-Math.PI/2]),{root:i,body:e,head:h,eyes:f,bulb:u,arms:d,wheel:l,status:c,mug:p}}function sf(i,e){let t=new je;i.add(t);let n=(z,ye,Ae,Ie,Ce=t)=>{let F=new De(z,ye);return Ae&&F.position.copy(Ae),Ie&&F.rotation.set(...Ie),Ce.add(F),F},s=G_([45,25]),r=new Ke({map:s.map,roughnessMap:s.rough,roughness:.55,metalness:.15}),o=n(new Zt(90,50),r,null,[-Math.PI/2,0,0]);o.receiveShadow=!0,o.userData.noCast=!0;let a=nf([.5,.5]),l=new Ke({map:a.map,bumpMap:a.bump,bumpScale:1.5,roughness:.6,metalness:.35}),c=new Mi;c.moveTo(-8.5,0),c.lineTo(9.5,0),c.lineTo(9.5,7),c.lineTo(-8.5,7),c.closePath();let h=new ys,f={x:0,y:3,r:1.3};h.absarc(f.x,f.y,f.r,0,kt,!0),c.holes.push(h);let u=n(new dr(c,48),l,O(0,0,-6.5));u.receiveShadow=!0,u.userData.noCast=!0;let d=nf([7,3.5]),p=n(new Zt(14,7),new Ke({map:d.map,bumpMap:d.bump,bumpScale:1.5,roughness:.6,metalness:.35}),O(9.5,3.5,.5),[0,-Math.PI/2,0]);p.receiveShadow=!0,p.userData.noCast=!0;let x=new bt({color:2051410,roughness:.4,clearcoat:.5});n(new yt(18,.32,.06),x,O(.5,.16,-6.46)),n(new yt(.06,.32,14),x,O(9.46,.16,.5));let g=n(new Xt(f.r,.1,16,72),e.brass,O(f.x,f.y,-6.45));g.castShadow=!1;for(let z=0;z<16;z++){let ye=z/16*kt;n(new st(.035,10,8),e.copper,O(f.x+Math.cos(ye)*f.r,f.y+Math.sin(ye)*f.r,-6.36))}n(new yt(f.r*2,.05,.05),e.metalLight,O(f.x,f.y,-6.5)),n(new yt(.05,f.r*2,.05),e.metalLight,O(f.x,f.y,-6.5));let m=n(new Rn(f.r,48),new bt({color:10475775,transparent:!0,opacity:.08,roughness:.05,clearcoat:1,depthWrite:!1}),O(f.x,f.y,-6.52));m.userData.noDepth=!0;let y=new xt({map:k_(),fog:!1});n(new Zt(6.4,3.2),y,O(f.x,f.y-.2,-7.4));let S=n(new ot(f.r,f.r,.9,48,1,!0),new Ke({color:791586,roughness:.7,side:on}),O(f.x,f.y,-6.95),[Math.PI/2,0,0]);S.userData.noCast=!0;let _=new Ke({color:2305082,metalness:.6,roughness:.45});for(let z of[-5.2,-2.6,0,2.6])n(new yt(18.4,.28,.22),_,O(.5,5.95,z));for(let z of[-6,-2,2,6])n(new yt(.18,.2,13),_,O(z,5.72,-1.3));for(let[z,ye,Ae,Ie]of[[5.45,-4.2,.12,e.metalLight],[5.5,-3.6,.08,e.copper],[5.35,1.4,.1,e.metalLight]])n(new ot(Ae,Ae,18,16),Ie,O(.5,z,ye),[0,0,Math.PI/2]);let b=n(new Zt(22,5.4),new Ke({color:1120808,roughness:.8}),O(-19,3.75,0),[Math.PI/2,0,0]);b.userData.noCast=!0;let T=new xt({color:Mt(13627391,1.5),toneMapped:!1});for(let z=-28;z<=-10;z+=3)n(new yt(1.4,.03,.5),T,O(z,3.73,0));let A=new je;A.position.set(9.42,2.55,-2.4),A.rotation.y=-Math.PI/2,t.add(A),n(new yt(3.8,2,.06),e.wood,null,null,A),n(new Zt(3.6,1.8),new Ke({map:V_(),roughness:.95}),O(0,0,.032),null,A),n(new yt(3.6,.06,.12),e.wood,O(0,-1.02,.06),null,A),n(new yt(.18,.05,.07),new Ke({color:3816010,roughness:.8}),O(1.2,-.97,.08),null,A);for(let z=0;z<3;z++)n(new ot(.012,.012,.09,8),new Ke({color:[16777215,16766688,14087935][z]}),O(-1.2+z*.14,-.975,.08),[0,0,Math.PI/2],A);for(let[z,ye,Ae]of[[O(9.43,2.45,2.6),-Math.PI/2,0],[O(8.55,2.3,-6.44),0,1]]){let Ie=n(new Zt(.9,1.35),new Ke({map:W_(Ae),roughness:.7}),z,[0,ye,0]);Ie.userData.noCast=!0}let v=n(new Rn(.32,3),new Ke({color:15909424,roughness:.5}),O(-2.05,2,-6.44),[0,0,Math.PI/2]);v.userData.noCast=!0,n(new Zt(.06,.24),new xt({color:1447450}),O(-2.05,2.02,-6.43));let E=new je;E.position.set(-5,4.35,-6.42),t.add(E),n(new ot(.46,.46,.06,48),e.brass,null,[Math.PI/2,0,0],E),n(new Rn(.42,48),new Ke({map:X_(),roughness:.6}),O(0,0,.032),null,E);let R=[[.2,.03,1778739],[.32,.02,1778739],[.36,.008,14697578]].map(([z,ye,Ae],Ie)=>{let Ce=new je;return Ce.position.z=.036+Ie*.004,E.add(Ce),n(new yt(ye,z,.006),new Ke({color:Ae,roughness:.5}),O(0,z/2-.03,0),null,Ce),Ce}),P=new Ke({map:q_(),roughness:.75});for(let[z,ye,Ae,Ie,Ce]of[[-6.6,.4,-2,.8,.1],[-6.5,1.2,-2.05,.8,-.15],[-6.7,.35,-1,.7,.3],[-7.6,.4,-5.6,.8,.2]])n(uc(Ie,Ie,Ie,.03),P,O(z,ye,Ae),[0,Ce,0]);let L=new je;L.position.set(6.3,0,1.4),L.rotation.y=-.4,t.add(L);let k=new ot(.02,.02,.9,8);for(let[z,ye]of[[-.42,-.25],[.42,-.25],[-.42,.25],[.42,.25]])n(k,e.chrome,O(z,.47,ye),null,L);for(let z of[.2,.92])n(uc(.95,.04,.6,.015),e.wood,O(0,z,0),null,L);n(uc(.36,.5,.34,.05),new bt({color:12071482,roughness:.3,clearcoat:.8}),O(-.18,1.19,-.05),null,L),n(uc(.26,.06,.2,.02),e.chrome,O(-.18,1,.14),null,L),n(new Rn(.035,16),new xt({color:Mt(3800968,2),toneMapped:!1}),O(-.08,1.3,.121),null,L);for(let z=0;z<3;z++)n(dc([[0,0],[.04,0],[.042,.09],[.038,.09],[.036,.006],[0,.006]]),new bt({color:[15922422,2270899,15909424][z],roughness:.3,clearcoat:.8,side:Ht}),O(.12+z*.1,.94,.12-z*.05),null,L);let U=new Ke({color:3115594,roughness:.55,side:Ht}),V=new Mi;V.moveTo(0,0),V.bezierCurveTo(.18,.08,.2,.32,0,.42),V.bezierCurveTo(-.2,.32,-.18,.08,0,0);let H=new dr(V,8),Y=(z,ye,Ae)=>{let Ie=new je;Ie.position.set(z,0,ye),Ie.scale.setScalar(Ae),t.add(Ie),n(dc([[0,0],[.18,0],[.24,.4],[.26,.42],[0,.42]]),new bt({color:14252106,roughness:.6}),null,null,Ie);for(let Ce=0;Ce<9;Ce++){let F=Ce/9*kt+le(Ce,1),Ge=new je;Ge.position.y=.4,Ge.rotation.set(.5+le(Ce,2)*.5,F,0),Ie.add(Ge),n(new ot(.008,.01,.6,5),U,O(0,.3,0),null,Ge),n(H,U,O(0,.58,0),[.6,0,0],Ge)}};Y(-7.8,-5,1.4),Y(8.6,-5.6,1.2),Y(6.5,-.3,.9);let K=new je;K.position.set(-5.45,0,.75),t.add(K),n(new ot(.2,.2,.06,24),new bt({color:12071482,roughness:.4,clearcoat:.6}),O(0,.62,0),null,K);for(let z=0;z<3;z++){let ye=z/3*kt;n(new ot(.015,.02,.62,8),e.chrome,O(Math.cos(ye)*.13,.3,Math.sin(ye)*.13),[Math.sin(ye)*.15,0,-Math.cos(ye)*.15],K)}n(dc([[0,0],[.16,0],[.2,.4],[.21,.4],[.17,0],[0,.005]]),new Ke({color:5925498,metalness:.6,roughness:.4,side:Ht}),O(-1.75,0,2.35));let Z=new Ke({color:15855590,roughness:.9,flatShading:!0});for(let z=0;z<5;z++)n(new po(.06,0),Z,O(-1.75+(le(z,1)-.5)*.18,.4+le(z,2)*.05,2.35+(le(z,3)-.5)*.18),[le(z,4)*3,le(z,5)*3,0]);for(let[z,ye]of[[9.1,-4.6],[-8.2,-5.9]])n(new Dn(.1,.4,6,16),new bt({color:14032678,roughness:.3,clearcoat:1}),O(z,.32,ye)),n(new ot(.03,.03,.08,10),e.dark,O(z,.63,ye));let $=new Ke({color:1447965,roughness:.7});for(let z of[[[1.35,-3.4],[1.5,-4.6],[1.9,-5.8],[2.2,-6.4]],[[-1.35,-3.4],[-1.6,-4.8],[-1.8,-6.4]],[[-1.2,-.6],[-2,.2],[-2.6,.6],[-3.2,.9]],[[1.2,-.6],[2,.1],[2.8,.5],[3.4,.9]]]){let ye=new Ot(z.map(([Ae,Ie],Ce)=>O(Ae,.035,Ie+Math.sin(Ce*2.1)*.08)));n(new Gi(ye,40,.035,8),$)}let ne=new Ke({map:Y_(),transparent:!0,roughness:.7,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,depthWrite:!1}),de=n(new Zt(3.7,3.7),ne,O(0,.004,0),[-Math.PI/2,0,0]);de.userData.noCast=!0,de.userData.noDepth=!0;let Ee=Qn(4,128,z=>{let ye=z.createLinearGradient(0,0,0,128);ye.addColorStop(0,"rgba(255,255,255,0)"),ye.addColorStop(.15,"rgba(255,255,255,0.9)"),ye.addColorStop(1,"rgba(255,255,255,0.15)"),z.fillStyle=ye,z.fillRect(0,0,4,128)},{srgb:!1}),Ye=[],Ve=[];for(let[z,ye,Ae,Ie,Ce]of[[-3.2,3.32,1.75,-3.3,.8],[3.6,3.32,1.75,3.6,.7],[-1.7,3.42,-1.4,-2.4,-2.4]]){let F=ye-.02,Ge=new De(new ot(.2,1,F,40,1,!0),new xt({color:Mt(16762512,.03),alphaMap:Ee,transparent:!0,depthWrite:!1,blending:Cn,side:Ht,toneMapped:!1}));Ge.position.set((z+Ie)/2,F/2,(Ae+Ce)/2);let it=O(z-Ie,F,Ae-Ce).normalize();Ge.quaternion.setFromUnitVectors(O(0,1,0),it),Ge.userData.noDepth=!0,t.add(Ge),Ye.push(Ge),Ve.push({top:O(z,ye,Ae),bot:O(Ie,0,Ce)})}let Je=240,oe=new gt;oe.setAttribute("position",new Ct(new Float32Array(Je*3),3));let ce=Qn(32,32,z=>{let ye=z.createRadialGradient(16,16,0,16,16,16);ye.addColorStop(0,"rgba(255,255,255,1)"),ye.addColorStop(1,"rgba(255,255,255,0)"),z.fillStyle=ye,z.fillRect(0,0,32,32)}),we=new vi({size:.022,map:ce,color:Mt(16767400,1.6),transparent:!0,depthWrite:!1,blending:Cn,toneMapped:!1}),He=new Oi(oe,we);He.frustumCulled=!1,t.add(He);let be=Z_();t.add(be.root),be.root.traverse(z=>{z.isMesh&&!z.material.isMeshBasicMaterial&&(z.castShadow=!0,z.receiveShadow=!0)});let Ze=[[0,O(-.6,0,3.4)],[6.4,O(-.6,0,3.4)],[9.2,O(-1.75,0,2.6)],[11,O(-1.75,0,2.6)],[13.4,O(2.1,0,2.7)],[16.2,O(2.1,0,2.7)],[Jt,O(1.4,0,2.9)],[Jt+1.2,O(.9,0,3.1)],[40,O(.9,0,3.1)]],et=(z,ye)=>{let Ae=0;for(;Ae<Ze.length-2&&z>Ze[Ae+1][0];)Ae++;let[Ie,Ce]=Ze[Ae],[F,Ge]=Ze[Ae+1];return ye.copy(Ce).lerp(Ge,dt(Ri((z-Ie)/(F-Ie))))};wr(t,{skip:z=>z===be.root||R.includes(z)||Ye.includes(z)||z===He});let fe=new D,me=new D,ve=new Re(4190463),Se=new Re(16722493);return{window:f,update(z,ye){let Ae=z>Jt?(z-Jt)*9:0;R[0].rotation.z=-((9+2/60)/12)*kt-Ae*.3,R[1].rotation.z=-(2/60)*kt-z*.02-Ae,R[2].rotation.z=-Math.floor(z)*(kt/60)-Ae*3,y.color.setScalar(z>Jt?ht(1,.45,dt(at(z,Jt,Jt+1.5))):1);let Ie=oe.attributes.position.array;for(let q=0;q<Je;q++){let re=Ve[q%Ve.length],Me=(le(q,1)+z*(.01+le(q,2)*.02))%1,Pe=Math.sqrt(le(q,3))*ht(.15,1,Me),he=le(q,4)*kt+z*.1*(le(q,5)-.5);fe.copy(re.top).lerp(re.bot,Me*.85),Ie[q*3]=fe.x+Math.cos(he)*Pe,Ie[q*3+1]=fe.y+Math.sin(z*.7+q)*.03,Ie[q*3+2]=fe.z+Math.sin(he)*Pe}oe.attributes.position.needsUpdate=!0,Ye.forEach((q,re)=>{let Me=ye.position.distanceTo(q.position);q.material.color.copy(Mt(16762512,(z>Jt&&re<2?.012:.03)*dt(Ri((Me-1.2)/2.5))))}),et(z,fe),et(z+.15,me);let Ce=fe.distanceTo(me)>.004;be.root.position.copy(fe);let F=z>16.4&&z<Jt,Ge;if(F)Ge=(z-16.4)*9;else if(Ce)Ge=Math.atan2(me.x-fe.x,me.z-fe.z);else{let q=ye.position;Ge=Math.atan2(q.x-fe.x,q.z-fe.z)*.6}be.root.rotation.y=ht(be.root.rotation.y,Ge,F?1:.25),be.wheel.rotation.x+=Ce?.35:0;let it=z>Jt+.4?Math.exp(-(z-Jt-.4)*.25):0,C=it?Math.abs(Math.sin((z-Jt)*6.5))*.22*it:0;be.body.position.y=C+(Ce?Math.abs(Math.sin(z*14))*.012:0),be.body.rotation.z=Ce?Math.sin(z*7)*.04:0,be.head.rotation.set(F?Math.sin(z*20)*.15:Math.sin(z*1.3)*.05,F?0:Math.sin(z*.9)*.25,F?Math.sin(z*17)*.2:0);let M=z*.37%1<.05?.15:1;be.eyes.forEach(q=>{q.scale.set(.8,(F?1.5:z>Jt?.45:1.15)*M,.3),q.material.color.copy(F?Se:ve).multiplyScalar(2.4)}),be.bulb.material.color.copy(Mt(F?Math.sin(z*16)>0?16722493:4194304:16756768,2)),be.arms.forEach((q,re)=>{let Me=z>Jt?2.6+Math.sin((z-Jt)*6.5+re)*.3:F?2.2+Math.sin(z*12+re*3)*.6:re===1?1.1:.2+Math.sin(z*2+re)*.1;q.sh.rotation.set(-Me*(re===1&&!F&&z<Jt?1:.2),0,q.sx*(z>Jt||F?Me*.45:.15))});let X=at(z,17.6,18.1);be.mug.visible=z<18.1,be.mug.position.y=-.02-X*X*.8}}}var Xo={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new xe},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new ut},cameraProjectionMatrixInverse:{value:new ut},cameraWorldMatrix:{value:new ut},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new D(-1,-1,-1)},sceneBoxMax:{value:new D(1,1,1)}},vertexShader:`

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
		}`},qo={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},fc={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function rf(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=$_(e),n=t.length,s=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=t[o],l=2*Math.PI*a/n,c=new D(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new Bi(s,e,e);return r.wrapS=Mn,r.wrapT=Mn,r.needsUpdate=!0,r}function $_(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=o++;r++,s--}return n}var Yo={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:qh(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new xe},cameraProjectionMatrixInverse:{value:new ut},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function qh(i,e,t){let n=J_(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let o=n[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<i-1?",":")"}`}return s}function J_(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,o=Math.pow(s/(i-1),t);n.push(new D(Math.cos(r),Math.sin(r),o))}return n}var pc=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),h=(3-Math.sqrt(3))/6,f=(l+c)*h,u=l-f,d=c-f,p=e-u,x=t-d,g,m;p>x?(g=1,m=0):(g=0,m=1);let y=p-g+h,S=x-m+h,_=p-1+2*h,b=x-1+2*h,T=l&255,A=c&255,v=this.perm[T+this.perm[A]]%12,E=this.perm[T+g+this.perm[A+m]]%12,R=this.perm[T+1+this.perm[A+1]]%12,P=.5-p*p-x*x;P<0?n=0:(P*=P,n=P*P*this._dot(this.grad3[v],p,x));let L=.5-y*y-S*S;L<0?s=0:(L*=L,s=L*L*this._dot(this.grad3[E],y,S));let k=.5-_*_-b*b;return k<0?r=0:(k*=k,r=k*k*this._dot(this.grad3[R],_,b)),70*(n+s+r)}noise3d(e,t,n){let s,r,o,a,c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),f=Math.floor(t+c),u=Math.floor(n+c),d=1/6,p=(h+f+u)*d,x=h-p,g=f-p,m=u-p,y=e-x,S=t-g,_=n-m,b,T,A,v,E,R;y>=S?S>=_?(b=1,T=0,A=0,v=1,E=1,R=0):y>=_?(b=1,T=0,A=0,v=1,E=0,R=1):(b=0,T=0,A=1,v=1,E=0,R=1):S<_?(b=0,T=0,A=1,v=0,E=1,R=1):y<_?(b=0,T=1,A=0,v=0,E=1,R=1):(b=0,T=1,A=0,v=1,E=1,R=0);let P=y-b+d,L=S-T+d,k=_-A+d,U=y-v+2*d,V=S-E+2*d,H=_-R+2*d,Y=y-1+3*d,K=S-1+3*d,Z=_-1+3*d,$=h&255,ne=f&255,de=u&255,Ee=this.perm[$+this.perm[ne+this.perm[de]]]%12,Ye=this.perm[$+b+this.perm[ne+T+this.perm[de+A]]]%12,Ve=this.perm[$+v+this.perm[ne+E+this.perm[de+R]]]%12,Je=this.perm[$+1+this.perm[ne+1+this.perm[de+1]]]%12,oe=.6-y*y-S*S-_*_;oe<0?s=0:(oe*=oe,s=oe*oe*this._dot3(this.grad3[Ee],y,S,_));let ce=.6-P*P-L*L-k*k;ce<0?r=0:(ce*=ce,r=ce*ce*this._dot3(this.grad3[Ye],P,L,k));let we=.6-U*U-V*V-H*H;we<0?o=0:(we*=we,o=we*we*this._dot3(this.grad3[Ve],U,V,H));let He=.6-Y*Y-K*K-Z*Z;return He<0?a=0:(He*=He,a=He*He*this._dot3(this.grad3[Je],Y,K,Z)),32*(s+r+o+a)}noise4d(e,t,n,s){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,f,u,d,p,x=(e+t+n+s)*l,g=Math.floor(e+x),m=Math.floor(t+x),y=Math.floor(n+x),S=Math.floor(s+x),_=(g+m+y+S)*c,b=g-_,T=m-_,A=y-_,v=S-_,E=e-b,R=t-T,P=n-A,L=s-v,k=E>R?32:0,U=E>P?16:0,V=R>P?8:0,H=E>L?4:0,Y=R>L?2:0,K=P>L?1:0,Z=k+U+V+H+Y+K,$=o[Z][0]>=3?1:0,ne=o[Z][1]>=3?1:0,de=o[Z][2]>=3?1:0,Ee=o[Z][3]>=3?1:0,Ye=o[Z][0]>=2?1:0,Ve=o[Z][1]>=2?1:0,Je=o[Z][2]>=2?1:0,oe=o[Z][3]>=2?1:0,ce=o[Z][0]>=1?1:0,we=o[Z][1]>=1?1:0,He=o[Z][2]>=1?1:0,be=o[Z][3]>=1?1:0,Ze=E-$+c,et=R-ne+c,fe=P-de+c,me=L-Ee+c,ve=E-Ye+2*c,Se=R-Ve+2*c,z=P-Je+2*c,ye=L-oe+2*c,Ae=E-ce+3*c,Ie=R-we+3*c,Ce=P-He+3*c,F=L-be+3*c,Ge=E-1+4*c,it=R-1+4*c,C=P-1+4*c,M=L-1+4*c,X=g&255,q=m&255,re=y&255,Me=S&255,Pe=a[X+a[q+a[re+a[Me]]]]%32,he=a[X+$+a[q+ne+a[re+de+a[Me+Ee]]]]%32,ge=a[X+Ye+a[q+Ve+a[re+Je+a[Me+oe]]]]%32,N=a[X+ce+a[q+we+a[re+He+a[Me+be]]]]%32,W=a[X+1+a[q+1+a[re+1+a[Me+1]]]]%32,B=.6-E*E-R*R-P*P-L*L;B<0?h=0:(B*=B,h=B*B*this._dot4(r[Pe],E,R,P,L));let J=.6-Ze*Ze-et*et-fe*fe-me*me;J<0?f=0:(J*=J,f=J*J*this._dot4(r[he],Ze,et,fe,me));let te=.6-ve*ve-Se*Se-z*z-ye*ye;te<0?u=0:(te*=te,u=te*te*this._dot4(r[ge],ve,Se,z,ye));let Q=.6-Ae*Ae-Ie*Ie-Ce*Ce-F*F;Q<0?d=0:(Q*=Q,d=Q*Q*this._dot4(r[N],Ae,Ie,Ce,F));let ue=.6-Ge*Ge-it*it-C*C-M*M;return ue<0?p=0:(ue*=ue,p=ue*ue*this._dot4(r[W],Ge,it,C,M)),27*(h+f+u+d+p)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}};var Zo=class i extends In{constructor(e,t,n=512,s=512,r,o,a){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=rf(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Bt(this.width,this.height,{type:$t,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Pt({defines:Object.assign({},Xo.defines),uniforms:Pn.clone(Xo.uniforms),vertexShader:Xo.vertexShader,fragmentShader:Xo.fragmentShader,blending:qt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new mo,this.normalMaterial.blending=qt,this.pdMaterial=new Pt({defines:Object.assign({},Yo.defines),uniforms:Pn.clone(Yo.uniforms),vertexShader:Yo.vertexShader,fragmentShader:Yo.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Pt({defines:Object.assign({},qo.defines),uniforms:Pn.clone(qo.uniforms),vertexShader:qo.vertexShader,fragmentShader:qo.fragmentShader,blending:qt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Pt({uniforms:Pn.clone(Ti.uniforms),vertexShader:Ti.vertexShader,fragmentShader:Ti.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:So,blendDst:Ts,blendEquation:Zn,blendSrcAlpha:Mo,blendDstAlpha:Ts,blendEquationAlpha:Zn}),this.blendMaterial=new Pt({uniforms:Pn.clone(fc.uniforms),vertexShader:fc.vertexShader,fragmentShader:fc.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:cl,blendSrc:So,blendDst:Ts,blendEquation:Zn,blendSrcAlpha:Mo,blendDstAlpha:Ts,blendEquationAlpha:Zn}),this._fsQuad=new wi(null),this._originalClearColor=new Re,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new yi,this.depthTexture.format=Si,this.depthTexture.type=os,this.normalRenderTarget=new Bt(this.width,this.height,{minFilter:jt,magFilter:jt,type:$t,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=qh(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=qt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=qt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=qt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=qt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=qt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new pc,n=e*e*4,s=new Uint8Array(n);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let l=o,c=a;s[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new Bi(s,e,e,Ln,Sn);return r.wrapS=Mn,r.wrapT=Mn,r.needsUpdate=!0,r}};Zo.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var mc=class extends Zo{constructor(...e){super(...e),this.blendMaterial=new Pt({uniforms:{tDiffuse:{value:null},tColor:{value:null},intensity:{value:1}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
        }`,blending:qt,depthTest:!1,depthWrite:!1})}setSize(e,t){super.setSize(Math.max(1,e>>1),Math.max(1,t>>1))}render(e,t,n,s,r){this.blendMaterial.uniforms.tColor.value=n.texture,super.render(e,t,n,s,r)}_overrideVisibility(){let e=this._visibilityCache;this.scene.traverse(t=>{t.visible&&(t.isPoints||t.isLine||t.isSprite||t.userData.noDepth)&&(t.visible=!1,e.push(t))})}},of={name:"LabDofShader",uniforms:{tDiffuse:{value:null},tDepth:{value:null},cameraNear:{value:.05},cameraFar:{value:120},focus:{value:4},aperture:{value:.5},maxBlur:{value:10},resolution:{value:null},vignette:{value:.35},sharpen:{value:.18},debug:{value:0}},vertexShader:`
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
      if (maxBlur > 0.5) {
        for (int i = 0; i < 36; i++) {
          float fi = float(i) + 0.5;
          float r = maxBlur * sqrt(fi / 36.0);
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
  `};var Qe=Jt,$o=29.2,af="bingo.introSound",Ue={cyan:2287359,green:3800968,magenta:16727538,amber:16756768,violet:10181887,pink:14697578,red:16722493,white:16777215,warm:16757866},gc=["Synergie","ASAP","Roadmap","On boucle","Quick win","KPI","Align\xE9s","Process","Deadline"],K_=[[1.2,5.6,"Quelque part, dans un laboratoire secret\u2026"],[6,10.8,"Des savants fous distillent les mots les plus creux des r\xE9unions"],[11.4,15.8,"Synergie, roadmap, quick win : 400 serveurs analysent chaque phrase"],[16.2,20.4,"Attention : r\xE9action imminente"]];function Ar(i,e,t){let n=document.createElement("canvas");n.width=i,n.height=e,t(n.getContext("2d"),i,e);let s=new On(n);return s.colorSpace=Vt,s.anisotropy=4,s}function $h(){return Ar(64,64,i=>{let e=i.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,255,255,0.55)"),e.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=e,i.fillRect(0,0,64,64)})}function Q_(){let i=Ar(512,128,(e,t,n)=>{e.fillStyle="#8a5530",e.fillRect(0,0,t,n);for(let s=0;s<80;s++){let r=le(s,1)*n,o=.05+le(s,2)*.14;e.strokeStyle=le(s,3)>.5?`rgba(48,20,6,${o})`:`rgba(206,140,84,${o})`,e.lineWidth=1+le(s,4)*3,e.beginPath();for(let a=0;a<=t;a+=16){let l=r+Math.sin(a*.012+s)*4+Math.sin(a*.05+s*3)*1.5;a?e.lineTo(a,l):e.moveTo(a,l)}e.stroke()}});return i.wrapS=i.wrapT=Mn,i}function j_(){return Ar(256,64,(i,e,t)=>{i.fillStyle="#f2c230",i.fillRect(0,0,e,t),i.fillStyle="#16161a";for(let n=-t;n<e+t;n+=48)i.beginPath(),i.moveTo(n,0),i.lineTo(n+24,0),i.lineTo(n+24-t,t),i.lineTo(n-t,t),i.closePath(),i.fill()})}var Wi=2.2;function ev(i){return Ar(256,256,e=>{e.fillStyle="#f3ead8",e.beginPath(),e.arc(128,128,124,0,Math.PI*2),e.fill();let t=(n,s,r)=>{e.strokeStyle=r,e.lineWidth=18,e.beginPath(),e.arc(128,128,96,-Math.PI/2-Wi+2*Wi*n,-Math.PI/2-Wi+2*Wi*s),e.stroke()};t(0,.55,"#3bb273"),t(.55,.8,"#f2b632"),t(.8,1,"#e5383b"),e.strokeStyle="#2a2a2a",e.lineWidth=3;for(let n=0;n<=10;n++){let s=-Math.PI/2-Wi+2*Wi*n/10;e.beginPath(),e.moveTo(128+Math.cos(s)*74,128+Math.sin(s)*74),e.lineTo(128+Math.cos(s)*86,128+Math.sin(s)*86),e.stroke()}e.fillStyle="#2a2a2a",e.font='700 22px "Bricolage Grotesque", sans-serif',e.textAlign="center",e.fillText(i,128,196)})}function tv(){return{metal:new Ke({color:1845056,metalness:.55,roughness:.42}),metalLight:new Ke({color:9345710,metalness:.9,roughness:.28}),chrome:new Ke({color:14870768,metalness:1,roughness:.16}),copper:new Ke({color:13664336,metalness:1,roughness:.3}),brass:new Ke({color:14067280,metalness:1,roughness:.3}),wood:new Ke({map:Q_(),roughness:.55}),enamel:new bt({color:2910832,roughness:.38,clearcoat:.6,clearcoatRoughness:.3}),ceramic:new bt({color:14673902,roughness:.35,clearcoat:.5,clearcoatRoughness:.3}),floor:new Ke({color:790810,metalness:.35,roughness:.45}),glass:new bt({color:15267583,transparent:!0,opacity:.24,roughness:.05,clearcoat:1,clearcoatRoughness:.05,depthWrite:!1,side:Ht,envMapIntensity:2.5}),dark:new Ke({color:724242,roughness:.6}),neon:(i,e=2)=>new xt({color:Mt(i,e),toneMapped:!1})}}function nv(i){let e=new vs;e.add(new De(new yt(24,12,24),new xt({color:658967,side:on})));let t=(r,o,a,l,c)=>{let h=new De(new Zt(r,o),new xt({color:Mt(l,c),side:Ht}));h.position.copy(a),h.lookAt(0,0,0),e.add(h)};t(9,3,O(0,5,7),Ue.warm,2.6),t(4,4,O(6,3,6),16765600,1.6),t(6,2,O(-10,2,0),Ue.cyan,2.2),t(6,2,O(10,2,-3),Ue.magenta,2),t(12,1.2,O(0,5.5,-9),Ue.violet,1.4);let n=new Mr(i),s=n.fromScene(e,.03).texture;return n.dispose(),s}var cs=(i,e=32)=>new zi(i.map(([t,n])=>new xe(t,n)),e),jn=(i,e,t,n=.04,s=3)=>new Tr(i,e,t,s,n);function iv(i,e){let t=[];for(let[r,o,a,l,c,h,f]of[[18,.05,.05,.5,.35,-6.45,Ue.cyan],[18,.05,.05,.5,5.2,-6.45,Ue.magenta],[.05,.05,14,9.45,.35,.5,Ue.cyan],[.05,.05,14,9.45,5.2,.5,Ue.violet]]){let u=new De(new yt(r,o,a),e.neon(f,2.2));u.position.set(l,c,h),i.add(u),t.push(u)}let n=sv("LABO DE R\xC9UNIONOLOGIE APPLIQU\xC9E",{w:1024,h:128,font:'700 64px "Bricolage Grotesque", sans-serif',color:"#7df3ff",glow:"#22e6ff"});n.scale.set(5,.62,1),n.position.set(.5,4.78,-6.4),i.add(n);let s=new je;i.add(s);for(let r of[-1,1]){let o=new Ot([O(r*3.2,5.6,-6.35),O(r*2.6,5.2,-5.6),O(r*1.4,4.6,-2.4),O(r*.55,3.9,-.4),O(r*.5,3.12,0)]);s.add(new De(new Gi(o,80,.07,12),e.copper));for(let a=1;a<6;a++){let l=new De(new Xt(.085,.025,8,20),e.brass),c=a/6;l.position.copy(o.getPointAt(c)),l.quaternion.setFromUnitVectors(O(0,0,1),o.getTangentAt(c)),s.add(l)}}return r=>{let o=r>16.4&&r<Qe?.5+.5*Math.sin(r*14):0;t[1].material.color.copy(Mt(o?Ue.red:Ue.magenta,2.2+o*2)),n.visible=r<Qe,s.visible=r<Qe}}function sv(i,{w:e,h:t,font:n,color:s,glow:r}){let o=Ar(e,t,l=>{l.font=n;let c=Math.min(1,(e-60)/l.measureText(i).width);c<1&&(l.font=n.replace(/(\d+)px/,(h,f)=>`${Math.floor(Number(f)*c)}px`)),l.textAlign="center",l.textBaseline="middle",l.shadowColor=r,l.shadowBlur=18,l.fillStyle=s,l.fillText(i,e/2,t/2)}),a=new De(new Zt(1,1),new xt({map:o,transparent:!0,depthWrite:!1,toneMapped:!1,color:Mt(16777215,1.6)}));return a.userData.noDepth=!0,a}var Yh=[{glass:[[0,0],[.12,0],[.125,.012],[.05,.2],[.04,.21],[.04,.3],[.046,.31]],liquid:[[0,.01],[.115,.01],[.08,.11],[0,.11]]},{glass:[[0,0],[.05,.005],[.09,.04],[.11,.11],[.09,.18],[.04,.215],[.035,.3],[.04,.31]],liquid:[[0,.008],[.05,.012],[.088,.045],[.105,.1],[0,.1]]},{glass:[[0,0],[.07,0],[.075,.01],[.075,.2],[.05,.25],[.03,.27],[.03,.32],[.034,.33]],liquid:[[0,.01],[.068,.01],[.068,.16],[0,.16]]},{glass:[[0,0],[.08,0],[.085,.008],[.085,.2],[.092,.21]],liquid:[[0,.008],[.078,.008],[.078,.12],[0,.12]]}];function rv(i,e){let t=new je;i.add(t);let n=[.95,1.7,2.45,3.2],s=[[-7.4,-2.6],[2.6,7.4]],r=-6.2,o=Yh.map(()=>[]),a=[Ue.green,Ue.magenta,Ue.cyan,Ue.amber,Ue.violet,16738877,11992893],l=0;for(let[h,f]of s){let u=f-h,d=(h+f)/2;for(let p of n){let x=new De(jn(u,.06,.42,.02,2),e.wood);x.position.set(d,p,r),t.add(x);let g=new De(new yt(u-.1,.012,.02),e.neon(Ue.warm,1.3));g.position.set(d,p-.04,r+.2),t.add(g);for(let m=h+.25;m<f-.2;m+=.3+le(l,1)*.22){l+=1;let y=Math.floor(le(l,2)*Yh.length),S=.8+le(l,3)*.55;o[y].push({x:m,y:p+.03,z:r+(le(l,4)-.5)*.18,sc:S,col:a[Math.floor(le(l,5)*a.length)],k:l})}}for(let p of[h+.05,f-.05]){let x=new De(new ot(.03,.03,3,10),e.brass);x.position.set(p,1.95,r+.18),t.add(x)}}let c=new Lt;Yh.forEach((h,f)=>{let u=o[f];if(!u.length)return;let d=new An(cs(h.glass,20),e.glass,u.length),p=new An(cs(h.liquid,20),new xt({toneMapped:!1}),u.length);u.forEach((x,g)=>{c.position.set(x.x,x.y,x.z),c.scale.setScalar(x.sc),c.rotation.set(0,le(x.k,6)*6,0),c.updateMatrix(),d.setMatrixAt(g,c.matrix),p.setMatrixAt(g,c.matrix),p.setColorAt(g,Mt(x.col,1.1+le(x.k,7)*1.1))}),t.add(d,p)}),wr(t)}function Zh(i,e,t,n,s){let r=new je;r.position.copy(t),i.add(r);let o=new De(new ot(.01,.01,6.5-t.y,6),e.dark);o.position.y=(6.5-t.y)/2+.2,r.add(o);let a=new De(cs([[.03,.25],[.07,.24],[.12,.17],[.22,.04],[.27,0],[.265,-.01]],32),new Ke({color:2316367,metalness:.6,roughness:.35,side:Ht}));r.add(a);let l=new De(new Xt(.265,.012,8,40),e.brass);l.rotation.x=Math.PI/2,r.add(l);let c=new De(new st(.07,16,12),new xt({color:Mt(16767392,4),toneMapped:!1}));c.position.y=.06,c.userData.noCast=!0,r.add(c);let h=new Ss(Ue.warm,s,9,.72,.85,2);return h.position.copy(t),h.target.position.copy(n),h.castShadow=!0,h.shadow.mapSize.set(1024,1024),h.shadow.bias=-3e-4,h.shadow.normalBias=.025,h.shadow.radius=5,h.shadow.camera.near=.3,h.shadow.camera.far=7,i.add(h,h.target),h}function ov(i,e){let n=new An(jn(1.25,2.7,1,.06,2),e.metal,28),s=new An(new yt(.035,2.5,.035),e.neon(Ue.cyan,1.15),56),r=new Lt,o=[],a=0,l=0;for(let x of[-1,1])for(let g=0;g<14;g++){let m=-8.6-g*1.32,y=x*2.6;r.position.set(m,1.35,y),r.rotation.set(0,0,0),r.updateMatrix(),n.setMatrixAt(a++,r.matrix);for(let S of[-.58,.58])r.position.set(m+S,1.35,y-x*.51),r.updateMatrix(),s.setMatrixAt(l++,r.matrix);for(let S=0;S<14;S++)for(let _=0;_<4;_++)o.push({x:m-.42+_*.28,y:.3+S*.17,z:y-x*.506,i:g,s:x})}i.add(n,s);let c=new An(new Zt(.12,.036),new xt({toneMapped:!1,side:Ht}),o.length),h=new Re(198670);o.forEach((x,g)=>{r.position.set(x.x,x.y,x.z),r.rotation.set(0,x.s>0?Math.PI:0,0),r.updateMatrix(),c.setMatrixAt(g,r.matrix),c.setColorAt(g,h)}),i.add(c);let f=[Ue.cyan,Ue.green,Ue.cyan,Ue.green,Ue.amber,Ue.magenta].map(x=>new Re(x)),u=new Re,d=[-1.7,1.7].map(x=>new Ot([O(-29,3.15,x),O(-16,3.15,x),O(-8,3.2,x*.8),O(-3,3.6,x*.4),O(0,3.2,0)]));for(let x of d){let g=new De(new Gi(x,160,.05,8),e.metalLight);g.userData.cable=!0,i.add(g)}let p=new An(new st(.075,14,10),new xt({toneMapped:!1}),36);p.userData.noCast=!0;for(let x=0;x<36;x++)p.setColorAt(x,Mt(x%3===0?Ue.magenta:Ue.cyan,3));return i.add(p),x=>{let g=x>16.4&&x<Qe?1+2*Math.abs(Math.sin(x*12)):1;for(let y=0;y<o.length;y++){let _=.2+(13-o[y].i)*.11+le(y,7)*.45;if(x<_||x>Qe+.1){c.setColorAt(y,h);continue}let b=2+le(y,3)*9;if(!(le(y,Math.floor(x*b*g+le(y,5)*10))>.33+.25*le(y,11))){c.setColorAt(y,h);continue}u.copy(f[Math.floor(le(y,13)*f.length)]).multiplyScalar(1.35*g),c.setColorAt(y,u)}c.instanceColor.needsUpdate=!0;let m=.1*x+Math.max(0,x-14)**2*.03;for(let y=0;y<36;y++){let S=d[y%2],_=(m+(y>>1)/18)%1,b=x>1.6&&x<Qe;r.position.copy(S.getPointAt(_)),r.position.y-=.13,r.rotation.set(0,0,0),r.scale.setScalar(b?1:1e-4),r.updateMatrix(),p.setMatrixAt(y,r.matrix)}p.instanceMatrix.needsUpdate=!0}}var xc=O(-3.6,0,1.4),cf=-.13;function av(i,e){let t=new je;t.position.set(xc.x,cf,xc.z),i.add(t);let n=new De(jn(2.95,.08,1,.025,2),e.wood);n.position.y=.95,t.add(n);let s=new De(jn(2.8,.78,.86,.05),e.enamel);s.position.y=.52,t.add(s);for(let H of[-.93,0,.93]){let Y=new De(jn(.86,.62,.03,.012,2),e.enamel);Y.position.set(H,.5,.43),t.add(Y);let K=new De(new Dn(.016,.16,4,8),e.brass);K.rotation.z=Math.PI/2,K.position.set(H,.72,.47),t.add(K)}let r=new De(new yt(2.8,.025,.025),e.neon(Ue.green,2.2));r.position.set(0,.9,.47),t.add(r);let o=new Set([n,s,r,...t.children]),a=[],l=(H,Y,K,Z,$=.99,ne=0)=>{let de=new De(H,e.glass);de.position.set(Z,$,ne),t.add(de);let Ee=new De(Y,new xt({color:Mt(K,1.5),toneMapped:!1}));return Ee.position.set(Z,$,ne),t.add(Ee),a.push({glass:de,liquid:Ee,color:K,x:Z,y:$,z:ne}),a[a.length-1]},c=cs([[0,0],[.17,0],[.18,.02],[.065,.27],[.055,.28],[.055,.4],[.062,.41]]),h=cs([[0,.012],[.165,.012],[.11,.14],[0,.14]]);l(c,h,Ue.green,-1.1,.99,.1);let f=new De(new Xt(.16,.012,6,24),e.brass);f.rotation.x=Math.PI/2,f.position.set(-.45,1.2,0),t.add(f);for(let H=0;H<3;H++){let Y=H/3*Math.PI*2,K=new De(new ot(.008,.008,.22,6),e.brass);K.position.set(-.45+Math.cos(Y)*.16,1.09,Math.sin(Y)*.16),t.add(K)}let u=new De(new ot(.05,.07,.12,12),e.brass);u.position.set(-.45,1.05,0),t.add(u);let d=new De(new Hi(.045,.14,12),new xt({color:Mt(3902719,3),toneMapped:!1,transparent:!0,opacity:.85}));d.position.set(-.45,1.17,0),t.add(d);let p=new st(.17,24,18),x=new st(.155,24,16,0,Math.PI*2,Math.PI*.42,Math.PI*.58),g=l(p,x,Ue.magenta,-.45,1.38),m=new De(new ot(.045,.045,.22,16,1,!0),e.glass);m.position.set(-.45,1.62,0),t.add(m);let y=[];for(let H=0;H<=120;H++){let Y=H*.32;y.push(O(-.8+Math.cos(Y)*.07,1+H*.0035,-.3+Math.sin(Y)*.07))}t.add(new De(new Gi(new Ot(y),240,.012,6),e.copper));let S=new De(jn(.5,.06,.14,.015,2),e.wood);S.position.set(.15,1.13,.12),t.add(S),[Ue.cyan,Ue.amber,Ue.violet,Ue.green].forEach((H,Y)=>{let K=new ot(.032,.032,.34,14,1,!0),Z=new ot(.027,.027,.16+.04*Y,14);l(K,Z,H,-.03+Y*.12,1.15,.12),a[a.length-1].liquid.position.y=1.07+(.08+.02*Y)});let _=l(c,h,Ue.violet,.7,.99,-.22),b=new ot(.075,.075,.55,18,1,!0),T=new ot(.068,.068,.38,18);l(b,T,Ue.amber,1.22,1.265,.05),a[a.length-1].liquid.position.y=1.19,[[12071482,.07,.1],[3108762,.06,-.08],[3836490,.065,.2]].forEach(([H,Y,K],Z)=>{let $=new De(jn(.3,Y,.22,.012,2),new Ke({color:H,roughness:.7}));$.position.set(-1.3,.99+Y/2+Z*.068,-.25),$.rotation.y=K,t.add($)});let A=[{x:-1.1,y:1,z:.1,h:.42,r:.09},{x:-.45,y:1.26,z:0,h:.55,r:.07},{x:.7,y:1,z:-.22,h:.42,r:.09},{x:1.22,y:1.05,z:.05,h:.5,r:.04},{x:-.03,y:1,z:.12,h:.3,r:.015},{x:.33,y:1,z:.12,h:.3,r:.015}],v=72,E=new An(new st(1,8,6),new xt({toneMapped:!1,transparent:!0,opacity:.85}),v);for(let H=0;H<v;H++)E.setColorAt(H,Mt([Ue.green,Ue.magenta,Ue.violet,Ue.amber,Ue.cyan,Ue.violet][H%6],2.2));t.add(E);let R=60,P=new gt;P.setAttribute("position",new Ct(new Float32Array(R*3),3)),P.setAttribute("color",new Ct(new Float32Array(R*3),3));let L=new Oi(P,new vi({size:.22,map:$h(),vertexColors:!0,transparent:!0,depthWrite:!1,blending:Cn,toneMapped:!1}));t.add(L);let k=new Lt,U=new Re(Ue.violet),V=new Re(Ue.green);return{target:_,update(H){let Y=1+2.5*dt(at(H,9.6,10.4))*(1-at(H,11,13))+(H>16.4&&H<Qe?1.5:0);for(let de=0;de<v;de++){let Ee=A[de%A.length],Ye=.35+le(de,1)*.5,Ve=(H*Ye*Y*.6+le(de,2))%1,Je=.012+le(de,3)*.022;k.position.set(Ee.x+Math.sin(H*3+de)*Ee.r*.5*(1-Ve),Ee.y+Ve*Ee.h,Ee.z+Math.cos(H*2.3+de)*Ee.r*.5*(1-Ve)),k.scale.setScalar(H>Qe?1e-4:Je*(1-Ve*.5)),k.updateMatrix(),E.setMatrixAt(de,k.matrix)}E.instanceMatrix.needsUpdate=!0;let K=P.attributes.position.array,Z=P.attributes.color.array;for(let de=0;de<R;de++){let Ee=de%2?{x:-.45,y:1.72,z:0}:{x:.7,y:1.4,z:-.22},Ye=(H*.25+le(de,4))%1;K[de*3]=Ee.x+Math.sin(de+H)*.12*Ye,K[de*3+1]=Ee.y+Ye*1.1,K[de*3+2]=Ee.z+Math.cos(de*1.3+H)*.1*Ye;let Ve=Math.sin(Ye*Math.PI)*.35*(H>Qe?0:1),Je=de%2?[.9,.3,.9]:[.5,.4,1];Z[de*3]=Je[0]*Ve,Z[de*3+1]=Je[1]*Ve,Z[de*3+2]=Je[2]*Ve}P.attributes.position.needsUpdate=!0,P.attributes.color.needsUpdate=!0,d.scale.set(1,.8+.4*Math.abs(Math.sin(H*17)),1);let $=dt(at(H,8.4,10.2));_.liquid.material.color.copy(U).lerp(V,$).multiplyScalar(1.5+$*1.5*Math.abs(Math.sin(H*8))),g.liquid.rotation.y=H;let ne=H>Qe;t.children.forEach(de=>{o.has(de)||(de.visible=!ne||de===E)})}}}var Ci=O(3.6,0,1.4);function lv(i=512,e=288){let t=document.createElement("canvas");t.width=i,t.height=e;let n=new On(t);return n.colorSpace=Vt,{c:t,x:t.getContext("2d"),tex:n}}function cv(i,e,t){let{c:n,x:s}=i,r=n.width,o=n.height;if(s.clearRect(0,0,r,o),s.strokeStyle="rgba(34,230,255,0.9)",s.lineWidth=3,s.strokeRect(6,6,r-12,o-12),s.font='700 26px "Bricolage Grotesque", sans-serif',s.fillStyle="#7df3ff",t===0){s.fillText("ANALYSE S\xC9MANTIQUE",24,44);let a=gc[Math.floor(e*1.6)%gc.length];s.font='800 64px "Bricolage Grotesque", sans-serif',s.fillStyle="#ff7df7",s.shadowColor="#ff3df2",s.fillText(a,24,140),s.font='700 24px "Bricolage Grotesque", sans-serif',s.fillStyle="#7df3ff",s.shadowColor="#22e6ff";let l=Math.min(99,Math.floor(60+e*13.7%40));s.fillText(`Creux : ${l} %`,24,190),s.fillRect(24,214,(r-48)*(l/100),18),s.strokeRect(24,214,r-48,18)}else if(t===1){s.fillText("FLUX DE BLABLA",24,44),s.beginPath();for(let a=0;a<=60;a++){let l=24+a/60*(r-48),c=170+Math.sin(a*.4+e*5)*40*Math.sin(a*.11+e)+Math.sin(a*1.7+e*9)*8;a?s.lineTo(l,c):s.moveTo(l,c)}s.stroke()}else{s.font='600 20px "Bricolage Grotesque", monospace';for(let a=0;a<9;a++){let l="";for(let c=0;c<18;c++)l+="0123456789ABCDEF"[Math.floor(le(a*31+c,Math.floor(e*8)+a)*16)];s.fillText(l,24,44+a*26)}}i.tex.needsUpdate=!0}function hv(i){let e=Ar(512,128,n=>{n.font='800 70px "Bricolage Grotesque", sans-serif',n.textAlign="center",n.textBaseline="middle",n.shadowColor="#ff3df2",n.shadowBlur=22,n.fillStyle="#ffd6fb",n.fillText(i,256,64)}),t=new eo(new rr({map:e,transparent:!0,depthWrite:!1,blending:Cn,toneMapped:!1,color:Mt(16777215,1.4)}));return t.scale.set(1.2,.3,1),t}function uv(i,e){let t=new je;t.position.set(Ci.x,cf,Ci.z),i.add(t);let n=new De(jn(2.55,.08,.95,.03,2),e.ceramic);n.position.y=.95,t.add(n);let s=new De(jn(2.4,.78,.82,.06),e.metal);s.position.y=.52,t.add(s);let r=new De(new yt(2.4,.025,.025),e.neon(Ue.cyan,2.2));r.position.set(0,.9,.42),t.add(r);let o=new De(jn(.9,.04,.3,.015,2),e.metal);o.position.set(0,1.01,.15),o.rotation.x=.2,t.add(o);let a=new An(jn(.058,.014,.05,.006,1),new xt({toneMapped:!1}),36),l=new Lt;for(let _=0;_<36;_++)l.position.set(-.38+_%12*.069,1.04+Math.floor(_/12)*.012,.06+Math.floor(_/12)*.075),l.rotation.x=.2,l.updateMatrix(),a.setMatrixAt(_,l.matrix),a.setColorAt(_,Mt(Ue.cyan,.6));t.add(a);let c=new De(new ot(.07,.08,.04,20),e.brass);c.position.set(.85,1.01,.1),t.add(c);let h=new De(new st(.055,20,12,0,Math.PI*2,0,Math.PI/2),new bt({color:14689326,roughness:.25,clearcoat:1}));h.position.set(.85,1.03,.1),t.add(h);let f=new De(new Xt(.5,.03,8,40),e.neon(Ue.cyan,2));f.rotation.x=Math.PI/2,f.position.set(0,.16,-1.45),t.add(f);let u=new De(new ot(1.25,.5,2,32,1,!0),new xt({color:Mt(Ue.cyan,.5),transparent:!0,opacity:.1,blending:Cn,depthWrite:!1,side:Ht,toneMapped:!1}));u.position.set(0,1.16,-1.45),u.userData.noDepth=!0,t.add(u);let d=[0,1,2].map(_=>{let b=lv(),T=new De(new Zt(1.25,.7),new xt({map:b.tex,transparent:!0,depthWrite:!1,blending:Cn,side:Ht,toneMapped:!1,color:Mt(16777215,1.5)})),A=(_-1)*.5;return T.position.set(Math.sin(A)*2.1,2.13,-1.45+(1-Math.cos(A))*1.6),T.rotation.y=-A,t.add(T),{h:b,m:T,kind:_}}),p=gc.map(_=>{let b=hv(_);return i.add(b),b}),x=-1,g=O(0,2.7,0),m=[Mt(Ue.cyan,.6),Mt(Ue.cyan,1.4),Mt(Ue.magenta,1.4)],y=new D,S=new D;return _=>{let b=dt(at(_,10.6,11.6))*(_>Qe?0:1),T=Math.floor(_*10);b>.001&&T!==x&&(x=T,d.forEach(v=>cv(v.h,_,v.kind))),d.forEach((v,E)=>{v.m.material.opacity=b*(.85+.15*Math.sin(_*30+E*2))*(le(Math.floor(_*20),E)>.04?1:.3),v.m.position.y=(v.kind===1?2.25:2.13)+Math.sin(_*1.5+E)*.03}),u.material.opacity=.1*b;for(let v=0;v<36;v++)a.setColorAt(v,m[_>11?le(v,Math.floor(_*12))>.75&&_<16.2?2:1:0]);a.instanceColor.needsUpdate=!0,p.forEach((v,E)=>{let R=11.2+E*.28,P=_*.9+E/gc.length*Math.PI*2;y.set(Ci.x+Math.cos(P)*1.4,2.15+Math.sin(_*1.3+E)*.28+E%3*.14,Ci.z-.35+Math.sin(P)*.8);let L=Xh(at(_,16+E*.16,20.1));S.set(Math.cos(_*4+E)*.8*(1-L),0,Math.sin(_*4+E)*.8*(1-L)),v.position.copy(y).lerp(g,L).add(S);let k=1-.7*L;v.scale.set(1.2*k,.3*k,1),v.material.opacity=dt(at(_,R,R+.5))*(1-at(_,19.9,20.4)),v.visible=v.material.opacity>.01});let A=_>Qe;d.forEach(v=>{v.m.visible=!A}),f.visible=!A,u.visible=!A}}function dv(i,e){let t=new je;i.add(t);let n=[];for(let x of[-1.35,1.35]){let g=new De(new ot(.34,.4,.24,24),e.copper);g.position.set(x,.12,-3.4),t.add(g);let m=new De(new ot(.12,.2,2.4,20),e.metalLight);m.position.set(x,1.2,-3.4),t.add(m);for(let _=0;_<6;_++){let b=new De(new Xt(.2-_*.012,.028,10,28),_%2?e.copper:e.neon(Ue.violet,2));b.rotation.x=Math.PI/2,b.position.set(x,.45+_*.32,-3.4),t.add(b)}let y=new De(new st(.32,32,24),e.chrome);y.position.set(x,2.72,-3.4),t.add(y);let S=new De(new Xt(.33,.02,8,30),e.neon(Ue.violet,2.5));S.rotation.x=Math.PI/2,S.position.copy(y.position),t.add(S),n.push(y.position.clone())}let s=new cr({color:Mt(14268671,3),toneMapped:!1,transparent:!0}),r=26,o=[];for(let x=0;x<7;x++){let g=new gt;g.setAttribute("position",new Ct(new Float32Array(r*3),3));let m=new to(g,s);m.frustumCulled=!1,t.add(m),o.push(m)}let a=O(0,3,0);function l(x,g,m,y,S){let _=x.geometry.attributes.position.array;for(let b=0;b<r;b++){let T=b/(r-1),A=Math.sin(T*Math.PI);_[b*3]=ht(g.x,m.x,T)+(le(y,b*3)-.5)*S*A,_[b*3+1]=ht(g.y,m.y,T)+(le(y,b*3+1)-.5)*S*A+A*.25,_[b*3+2]=ht(g.z,m.z,T)+(le(y,b*3+2)-.5)*S*A}x.geometry.attributes.position.needsUpdate=!0}let c=new De(jn(.55,1,.4,.05),e.metal);c.position.set(-2.05,.5,-2.4),t.add(c);let h=new De(new Zt(.5,.12),new Ke({map:j_(),roughness:.6}));h.position.set(-2.05,.18,-2.195),t.add(h);let f=new De(new st(.08,14,10),new xt({color:Mt(Ue.red,1),toneMapped:!1}));f.position.set(-2.05,1.07,-2.4),t.add(f);let u=new je;u.position.set(-2.05,.75,-2.18),t.add(u);let d=new De(new ot(.022,.022,.42,10),e.chrome);d.position.y=.21,u.add(d);let p=new De(new st(.065,18,14),new bt({color:14689326,roughness:.25,clearcoat:1,emissive:4194304}));return p.position.y=.42,u.add(p),{leverHandle:p,update(x,g){let m=Math.floor(x*30),y=0;o.forEach((b,T)=>{let A=!1;T<3?(A=x>12.4&&x<Qe&&le(m,T+40)>(x>16?.15:.45),A&&l(b,n[0],n[1],m*7+T,.55)):(A=x>17.3&&x<Qe&&le(m,T+80)>.25,A&&l(b,n[T%2],a,m*11+T,.7)),b.visible=A,A&&(y+=1)}),g.intensity=y*7;let S=dt(at(x,16,16.35));u.rotation.x=ht(-.6,.7,S);let _=x>16.4&&x<Qe&&Math.sin(x*16)>0?3:.4;f.material.color.copy(Mt(Ue.red,_))}}}function fv(i,e){let t=new je;i.add(t);let n=new De(new ot(1.3,1.45,.32,64),e.copper);n.position.y=.16,t.add(n);let s=new De(new Xt(1.36,.035,8,64),e.neon(Ue.cyan,2.5));s.rotation.x=Math.PI/2,s.position.y=.33,t.add(s);let r=new An(new st(.035,10,8),e.brass,24),o=new Lt;for(let S=0;S<24;S++){let _=S/24*Math.PI*2;o.position.set(Math.cos(_)*1.18,.33,Math.sin(_)*1.18),o.updateMatrix(),r.setMatrixAt(S,o.matrix)}t.add(r);let a=new De(new ot(1,1,2.6,64,1,!0),e.glass);a.position.y=1.62,t.add(a);let l=new De(cs([[0,.3],[.35,.28],[.85,.16],[1.1,.05],[1.12,-.06],[1,-.08]],64),e.copper);l.position.y=2.97,t.add(l);let c=new De(new st(.18,20,14),new xt({color:Mt(Ue.white,2),toneMapped:!1}));c.position.y=3.35,t.add(c);let h=new xt({color:Mt(Ue.cyan,1.5),toneMapped:!1,transparent:!0,opacity:.85}),f=new De(new ot(.93,.93,1,48),h);t.add(f);let u=[0,1,2].map(S=>{let _=new De(new Xt(1.06,.03,8,64),e.neon([Ue.magenta,Ue.cyan,Ue.amber][S],2.5));return _.rotation.x=Math.PI/2,t.add(_),_}),d=[-1,1].map(S=>{let _=new je;_.position.set(S*1.25,0,1.15),_.rotation.y=-S*.5,t.add(_);let b=new De(new ot(.04,.05,.75,12),e.brass);b.position.y=.375,_.add(b);let T=new De(new ot(.2,.2,.08,32),e.brass);T.rotation.x=Math.PI/2,T.position.y=.92,_.add(T);let A=new De(new Rn(.175,40),new Ke({map:ev(S<0?"BLABLA":"CREUX"),roughness:.5}));A.position.set(0,.92,.041),_.add(A);let v=new je;v.position.set(0,.92,.05),_.add(v);let E=new De(new yt(.012,.15,.006),new Ke({color:13114922,roughness:.4}));E.position.y=.065,v.add(E);let R=new De(new st(.018,10,8),e.brass);v.add(R);let P=new De(new st(.19,24,12,0,Math.PI*2,0,.5),e.glass);return P.rotation.x=Math.PI/2,P.position.set(0,.92,-.12),_.add(P),{gg:_,needle:v,sx:S}}),p=220,x=new gt;x.setAttribute("position",new Ct(new Float32Array(p*3),3));let g=new Oi(x,new vi({size:.07,map:$h(),color:Mt(16777215,2),transparent:!0,depthWrite:!1,blending:Cn,toneMapped:!1}));t.add(g);let m=new De(new Xt(1,.08,10,80),new xt({color:Mt(Ue.white,3),toneMapped:!1,transparent:!0}));m.rotation.x=Math.PI/2,m.position.y=1.6,t.add(m);let y=new Re;return(S,_)=>{let b=.35+1*dt(at(S,9.5,16))+.85*dt(at(S,16,20.4));f.scale.y=b,f.position.y=.32+b/2;let T=S<16?.06:.06+(S-16)*.12;y.setHSL((S*T+.5)%1,1,.55);let A=1.2+.9*dt(at(S,16,Qe));h.color.copy(y).multiplyScalar(A),c.material.color.copy(y).multiplyScalar(1.2+A),u.forEach((P,L)=>{let k=.6+(S*(.25+L*.07)*(S>16?3:1)+L/3)%1*2.2;P.position.y=k,P.scale.setScalar(1+.05*Math.sin(S*6+L))});let v=x.attributes.position.array;for(let P=0;P<p;P++){let L=S*(1.5+le(P,1)*2)*(S>16?2.5:1)+le(P,2)*6.283,k=.2+le(P,3)*.7;v[P*3]=Math.cos(L)*k,v[P*3+1]=.35+(S*.3*(1+le(P,4))+le(P,5))%1*b,v[P*3+2]=Math.sin(L)*k}x.attributes.position.needsUpdate=!0,d.forEach((P,L)=>{let k=Ri(.15+.4*dt(at(S,9,16))+.5*dt(at(S,16,Qe-.4))+(S>16.4&&S<Qe?.04*Math.sin(S*40+L):0)),U=S>=Qe?Wi+(S-Qe)*14:-Wi+2*Wi*k;P.needle.rotation.z=-U,P.gg.visible=S<Qe+.25}),_.color.copy(y),_.intensity=4+20*dt(at(S,15,Qe));let E=S>=Qe;a.visible=!E,f.visible=!E,g.visible=!E,c.visible=!E,l.visible=!E,u.forEach(P=>{P.visible=!E});let R=at(S,Qe,Qe+.9);m.visible=E&&R<1,m.scale.setScalar(1+R*16),m.material.opacity=1-R,E&&(_.intensity=30*Math.exp(-(S-Qe)*3))}}async function pv(i,e,t,n=0){try{await document.fonts.load('800 160px "Bricolage Grotesque"')}catch{}let s=1024,r=128*i.length+40,o=document.createElement("canvas");o.width=s,o.height=r;let a=o.getContext("2d");a.fillStyle="#fff",a.textAlign="center",a.textBaseline="middle",i.forEach((u,d)=>{let p=d===0?150:104;a.font=`800 ${p}px "Bricolage Grotesque", "Arial Black", sans-serif`;let x=a.measureText(u).width,g=Math.min(1,(s-40)/x);a.font=`800 ${Math.floor(p*g)}px "Bricolage Grotesque", "Arial Black", sans-serif`,a.fillText(u,s/2,84+d*128)});let l=a.getImageData(0,0,s,r).data,c=[],h=3;for(let u=0;u<r;u+=h)for(let d=0;d<s;d+=h)l[(u*s+d)*4+3]>140&&c.push([d,u]);let f=e/s;return c.map(([u,d])=>O((u-s/2)*f,t-(d-r/2)*f,n+(le(u,d)-.5)*.1))}function mv(i,e,t,n){let s=Math.min(5200,Math.max(1500,t.length)),r=new Float32Array(s*3),o=new Float32Array(s*3),a=new gt;a.setAttribute("position",new Ct(r,3)),a.setAttribute("color",new Ct(o,3));let l=new vi({size:n,map:$h(),vertexColors:!0,transparent:!0,depthWrite:!1,depthTest:!1,blending:Cn,toneMapped:!1,fog:!1}),c=new Oi(a,l);c.frustumCulled=!1,e.add(c);let h=O(0,2.2,0),f=[Ue.magenta,Ue.cyan,Ue.amber,Ue.green,Ue.violet,Ue.pink].map(E=>new Re(E)),u=[],d=[],p=[],x=1/0,g=-1/0;for(let E of t)x=Math.min(x,E.x),g=Math.max(g,E.x);for(let E=0;E<s;E++){let R=le(E,1)*Math.PI*2,P=Math.acos(1-2*le(E,2)),L=O(Math.sin(P)*Math.cos(R),Math.abs(Math.cos(P))*.9+.2,Math.sin(P)*Math.sin(R));u.push(L.multiplyScalar(2.5+le(E,3)*5)),d.push(t.length>s?t[Math.floor(E*t.length/s)]:t[E%t.length]),p.push(f[Math.floor(le(E,4)*f.length)])}let m=new Re(Ue.magenta),y=new Re(Ue.cyan),S=new Re(Ue.amber),_=new Re,b=new Re,T=40,A=new An(new ot(.22,.22,.05,32),new bt({color:Ue.pink,emissive:Ue.pink,emissiveIntensity:.35,roughness:.3,clearcoat:1,clearcoatRoughness:.15}),T);A.castShadow=!0,i.add(A);let v=new Lt;return E=>{let R=E-Qe;if(c.visible=R>=0,R>=0){let P=Xh(at(R,.9,3)),L=Math.min(R,1.8),k=1-at(E,$o-1,$o-.2);for(let U=0;U<s;U++){let V=1-Math.exp(-2.4*L),H=h.x+u[U].x*V*1.25,Y=h.y+u[U].y*V*1.25-.35*L*L,K=h.z+u[U].z*V*1.25,Z=d[U],$=R>3?.025:0;r[U*3]=ht(H,Z.x+Math.sin(E*3+U)*$,P),r[U*3+1]=ht(Y,Z.y+Math.cos(E*2.6+U*1.3)*$,P),r[U*3+2]=ht(K,Z.z,P);let ne=(Z.x-x)/Math.max(.001,g-x);ne<.5?b.copy(m).lerp(y,ne*2):b.copy(y).lerp(S,(ne-.5)*2);let de=R>3.2?.75+.5*le(U,Math.floor(E*12)):1;_.copy(p[U]).lerp(b,P).multiplyScalar(2.2*de*k*(R<.25?1+(.25-R)*8:1)),o[U*3]=_.r,o[U*3+1]=_.g,o[U*3+2]=_.b}a.attributes.position.needsUpdate=!0,a.attributes.color.needsUpdate=!0}for(let P=0;P<T;P++){let L=23.4+le(P,1)*2.4,k=(le(P,2)-.5)*12,U=(le(P,3)-.5)*5+1,V=E-L,H=9;if(V>0){let Y=9-4.9*V*V;if(Y>.03)H=Y;else{let K=V-Math.sqrt(1.8306122448979592);H=.03+Math.abs(Math.sin(K*7))*.5*Math.exp(-K*4)}}v.position.set(k,H,U),v.rotation.set(V>0&&H>.1?V*6+P:0,P,V>0&&H>.1?V*4:0),v.scale.setScalar(V>0?1:1e-4),v.updateMatrix(),A.setMatrixAt(P,v.matrix)}A.instanceMatrix.needsUpdate=!0}}function lf(i,e,t=0){let n=[[0,O(-27.5,1.7,0),O(-20,1.6,0)],[2.6,O(-22,1.75,.3),O(-14,1.6,0)],[5.2,O(-13.5,1.85,.4),O(-6,1.45,.8)],[7.2,O(-3,1.78,2.7),O(-3.12,1.42,.7)],[9.6,O(-4.8,1.85,3.7),O(-3.1,1.1,1.1)],[11.9,O(1.6,2,4.4),O(3.6,1.6,1)],[14,O(4.15,1.72,3),O(3.55,1.55,.6)],[15.2,O(-2.3,2.6,2.9),O(-2.2,1.5,-2)],[16.6,O(-1.35,1.7,-.75),O(-2.35,1.35,-2.3)],[17.7,O(-2.9,2.35,1.9),O(-1,1.6,-1.4)],[18.8,O(0,3.3,8.4),O(0,1.7,0)],[20.6,O(0,2.4,5.4),O(0,1.8,0)],[22.8,O(0,e+.4,t+i+1.2),O(0,e-.3,t)],[$o,O(0,e,t+i),O(0,e,t)]],s=new Ot(n.map(c=>c[1]),!1,"centripetal"),r=new Ot(n.map(c=>c[2]),!1,"centripetal"),o=n.length-1,a=new D,l=new D;return(c,h)=>{let f=0;for(;f<o-1&&h>n[f+1][0];)f++;let u=Ri((h-n[f][0])/(n[f+1][0]-n[f][0])),d=.45*u+.55*dt(u),p=Math.min(1,(f+d)/o);s.getPoint(p,a),r.getPoint(p,l);let x=.012+.09*dt(at(h,16,Qe))+(h>Qe?.35*Math.exp(-(h-Qe)*3):0);return a.x+=Math.sin(h*37)*x*.6+Math.sin(h*23)*x*.4,a.y+=Math.sin(h*41+1)*x*.5,c.position.copy(a),c.lookAt(l),l}}function gv(i){let e=i||document.createElement("div");e.className="intro",e.setAttribute("role","dialog"),e.setAttribute("aria-label","Introduction anim\xE9e du jeu"),e.replaceChildren();let t=document.createElement("canvas");t.className="intro-canvas",t.setAttribute("aria-hidden","true");let n=document.createElement("p");n.className="intro-caption";let s=document.createElement("div");s.className="intro-flash";let r=document.createElement("div");r.className="intro-bar";let o=document.createElement("button");o.type="button",o.className="intro-btn intro-sound";let a=document.createElement("button");a.type="button",a.className="intro-btn",a.textContent="Passer",r.append(o,a);let l=document.createElement("div");l.className="intro-progress";let c=document.createElement("p");return c.className="intro-loading",c.textContent="Pr\xE9paration du laboratoire\u2026",e.append(t,s,n,r,l,c),i||document.body.append(e),{o:e,canvas:t,caption:n,flash:s,sound:o,skip:a,progress:l,loading:c}}async function xv({renderer:i,composer:e,scene:t,camera:n,ui:s,update:r,resize:o,ao:a,dof:l,bloom:c,allShadows:h,nextShadow:f,calibrate:u,maxQ:d,getQuality:p,setQuality:x}){let g=i.getContext(),m=new Uint8Array(4),y=()=>g.readPixels(0,0,1,1,g.RGBA,g.UNSIGNED_BYTE,m),S=i.extensions.get("WEBGL_debug_renderer_info"),_={gpu:S?g.getParameter(S.UNMASKED_RENDERER_WEBGL):g.getParameter(g.RENDERER),dpr:window.devicePixelRatio||1,viewport:`${window.innerWidth}x${window.innerHeight}`,parallelCompile:i.extensions.has("KHR_parallel_shader_compile"),visible:document.visibilityState},b=[];t.traverse($=>{$.isLight&&$.castShadow&&b.push($)});let T=[];t.traverse($=>{$.isLight&&!$.isHemisphereLight&&T.push($)});let A=[e.renderTarget1,e.renderTarget2],v=[];t.traverse($=>{($.isMesh||$.isPoints||$.isSprite)&&$.material&&$.material.transparent&&v.push($)});let E=new xt({colorWrite:!1}),R=()=>{let $=v.map(de=>de.visible);for(let de of v)de.visible=!1;let ne=t.background;t.background=null,t.overrideMaterial=E,i.setClearColor(197899,1),i.render(t,n),t.overrideMaterial=null,t.background=ne,v.forEach((de,Ee)=>{de.visible=$[Ee]})},P=$=>{x($.pr??d),o();for(let de of b)de.castShadow=$.shadows!==!1;for(let de of T)de.visible=!$.fewLights||de.castShadow||de.isSpotLight;a.enabled=$.ao!==!1,l.enabled=$.dof!==!1,c.enabled=$.bloom!==!1;let ne=$.msaa??4;for(let de of A)de.samples!==ne&&(de.samples=ne,de.dispose())},L=$=>{if($.rr?f():h(),!$.direct){e.render();return}i.setRenderTarget(null);let ne=null;if($.opaqueOnly){ne=v.map(de=>de.visible);for(let de of v)de.visible=!1}if($.prepass){R(),i.autoClear=!1;let de=t.background;t.background=null,i.render(t,n),t.background=de,i.autoClear=!0}else i.render(t,n);ne&&v.forEach((de,Ee)=>{de.visible=ne[Ee]})},k=[3,8,12,15.5,19,24],U=[["3 ombres par image, r\xE9solution max",{}],["ombres \xE0 tour de r\xF4le, r\xE9solution max",{rr:!0}],["ombres \xE0 tour de r\xF4le, r\xE9solution 1",{rr:!0,pr:1}],["ombres \xE0 tour de r\xF4le, r\xE9solution 0,75",{rr:!0,pr:.75}],["ombres \xE0 tour de r\xF4le, r\xE9solution 0,6",{rr:!0,pr:.6}],["ombres \xE0 tour de r\xF4le, r\xE9solution 0,5",{rr:!0,pr:.5}],["tour de r\xF4le, r\xE9solution 1, sans occlusion",{rr:!0,pr:1,ao:!1}],["tour de r\xF4le, r\xE9solution 1, sans flou",{rr:!0,pr:1,dof:!1}],["tour de r\xF4le, r\xE9solution 1, sans halo",{rr:!0,pr:1,bloom:!1}],["tour de r\xF4le, r\xE9solution 1, sans MSAA",{rr:!0,pr:1,msaa:0}],["r\xE9solution 1, sans ombres",{pr:1,shadows:!1}],["sc\xE8ne seule, r\xE9solution 1, sans ombres",{pr:1,direct:!0,shadows:!1}],["sc\xE8ne seule, sans ombres ni lampes ponctuelles",{pr:1,direct:!0,shadows:!1,fewLights:!0}],["sc\xE8ne seule, sans ombres, objets opaques seulement",{pr:1,direct:!0,shadows:!1,opaqueOnly:!0}],["sc\xE8ne seule, sans ombres, avec pr\xE9passe de profondeur",{pr:1,direct:!0,shadows:!1,prepass:!0}],["sc\xE8ne seule, r\xE9solution 0,5, sans ombres",{pr:.5,direct:!0,shadows:!1}]],V=$=>{let ne=[...$].sort((de,Ee)=>de-Ee);return ne[Math.floor(ne.length/2)]},H=[],Y=document.createElement("pre");Y.className="intro-bench",s.loading.textContent="Mesure des performances\u2026",s.o.append(Y),s.skip.addEventListener("click",()=>s.o.remove());let K=0,Z=0;for(let[$,ne]of U){P(ne);let de=[],Ee=[];for(let Ye of k){r(Ye),L(ne),y();let Ve=4,Je=0,oe=performance.now();for(let ce=0;ce<Ve;ce++){r(Ye+ce*.03),i.info.reset();let we=performance.now();L(ne),Je+=performance.now()-we,ne.direct&&$==="sc\xE8ne seule, r\xE9solution 1, sans ombres"&&(K=Math.max(K,i.info.render.calls),Z=Math.max(Z,i.info.render.triangles))}y(),de.push((performance.now()-oe)/Ve),Ee.push(Je/Ve),await new Promise(ce=>{setTimeout(ce,0)})}H.push({name:$,ms:Math.round(V(de)*10)/10,max:Math.round(Math.max(...de)*10)/10,cpu:Math.round(V(Ee)*10)/10}),Y.textContent=H.map(Ye=>`${Ye.ms.toFixed(1).padStart(6)} ms (max ${Ye.max.toFixed(1)}, envoi ${Ye.cpu.toFixed(1)})  ${Ye.name}`).join(`
`)}_.drawCalls=K,_.triangles=Z,P({rr:!0}),await u(),_.calibrage=window.__introQuality,_.resolutionChoisie=p(),s.loading.textContent="",window.__introBench={info:_,rows:H},Y.textContent=`${_.gpu}
${_.viewport} x${_.dpr}, appels de dessin ${K}, triangles ${Z}
r\xE9solution choisie ${_.resolutionChoisie} ${JSON.stringify(_.calibrage)}

${Y.textContent}`}async function bS({seekT:i=null,shell:e=null,speed:t=1,stallMs:n=3e3}={}){let s=gv(e),r;try{r=new tc({canvas:s.canvas,antialias:!1,powerPreference:"high-performance"})}catch{s.o.remove();return}r.toneMapping=ws,r.toneMappingExposure=1.12,r.outputColorSpace=Vt,r.shadowMap.enabled=!0,r.shadowMap.type=bs;let o=new vs;o.background=new Re(197899),o.fog=new Jr(197899,.04),o.environment=nv(r),o.environmentIntensity=.32;let a=new vs,l=new dn(50,1,.05,120),c=tv();o.add(new xo(5928191,4860948,.75));let h=new Yn(Ue.cyan,5,10);h.position.set(-21,2.6,0),o.add(h);let f=new Yn(Ue.cyan,5,10);f.position.set(-12,2.6,0),o.add(f);let u=new Yn(Ue.green,4,6);u.position.set(-3.4,1.5,2),o.add(u);let d=new Yn(Ue.cyan,4,6);d.position.set(3.6,1.6,2),o.add(d);let p=new Yn(Ue.magenta,7,5);p.position.set(-3.6,2.5,-.6),o.add(p);let x=new Yn(Ue.cyan,7,5);x.position.set(3.6,2.4,-.9),o.add(x);let g=new Yn(Ue.cyan,6,14);g.position.set(0,1.6,0),o.add(g);let m=new Yn(Ue.violet,0,9);m.position.set(0,2.9,-3.1),o.add(m);let y=new Ss(Ue.red,0,18,.5,.6);y.position.set(0,5.5,0),o.add(y),o.add(y.target);let S=new Ss(16762512,30,22,.55,.9,1.6);S.position.set(0,6,8.5),S.target.position.set(0,1.4,-.5),o.add(S,S.target);let _=iv(o,c),b=sf(o,c);rv(o,c);let T=ov(o,c),A=av(o,c),v=uv(o,c),E=dv(o,c),R=fv(o,c),P=Zh(o,c,O(-3.2,3.4,1.75),O(-3.3,.8,.8),10),L=Zh(o,c,O(3.6,3.4,1.75),O(3.6,.9,.7),10),k=Zh(o,c,O(-1.7,3.5,-1.4),O(-2.4,.6,-2.4),10),U=[P,L,k];for(let ie of U)ie.shadow.autoUpdate=!1;let V=()=>{for(let ie of U)ie.shadow.needsUpdate=!0},H=0,Y=()=>{U[H%U.length].shadow.needsUpdate=!0,H+=1};o.traverse(ie=>{!ie.isMesh||ie.material.transparent||ie.material.isMeshBasicMaterial||(ie.receiveShadow=!0,ie.userData.noCast||(ie.castShadow=!0))});let K=hc(cc.grandpa);K.root.position.set(xc.x+.35,0,xc.z-.85),o.add(K.root);let Z=hc(cc.wild);Z.root.position.set(Ci.x,0,Ci.z-.85),o.add(Z.root);let $=hc(cc.curly);$.root.position.set(-2.55,0,-2.25),o.add($.root);let ne=new je;K.arms.L.hand.add(ne);let de=new De(cs([[0,0],[.11,0],[.12,.015],[.045,.18],[.038,.19],[.038,.27],[.044,.28]]),c.glass),Ee=new De(cs([[0,.01],[.105,.01],[.07,.09],[0,.09]]),new xt({color:Mt(Ue.green,2),toneMapped:!1}));ne.add(de,Ee),ne.position.set(0,-.08,.06),ne.rotation.x=Math.PI;let Ye=18,Ve=new An(new st(.022,8,6),new xt({color:Mt(Ue.green,2.5),toneMapped:!1}),Ye);o.add(Ve);let Je=16/9,oe=()=>Je<.9,ce=3.3,we=1.8,He=()=>oe()?{lines:["Bingo","du lundi","matin"],width:4.4}:{lines:["Bingo","du lundi matin"],width:8.2},be=He(),Ze=()=>{let ie=_h.degToRad(l.fov);return Math.max(5.5,be.width/2*1.15/(Math.tan(ie/2)*Je))},et=Math.min(1.5,window.devicePixelRatio||1),fe=Math.min(.5,et),me=et,ve=new oc(r,new Bt(1,1,{type:$t,samples:4}));ve.addPass(new ko(o,l));let Se=new mc(o,l,512,512,void 0,{radius:.45,distanceExponent:1.6,thickness:.9,scale:1.15,samples:12},{lumaPhi:10,depthPhi:2,normalPhi:3,radius:6});Se.blendIntensity=.9,ve.addPass(Se);let z=new Er(of);z.uniforms.tDepth.value=Se.depthTexture,z.uniforms.resolution.value=new xe(1,1),z.uniforms.cameraNear.value=l.near,z.uniforms.cameraFar.value=l.far,ve.addPass(z);let ye=new ko(a,l);ye.clear=!1,ve.addPass(ye);let Ae=new br(new xe(512,512),.55,.45,.92);ve.addPass(Ae),ve.addPass(new ac);let Ie=10,Ce=()=>{let ie=window.innerWidth,wt=window.innerHeight;Je=ie/wt,l.aspect=Je,l.fov=Je<.9?64:50,l.updateProjectionMatrix();let zt=me;r.setPixelRatio(zt),r.setSize(ie,wt,!1),ve.setPixelRatio(zt),ve.setSize(ie,wt),Ae.resolution.set(ie/2,wt/2),z.uniforms.resolution.value.set(ie*zt,wt*zt),Ie=Math.min(18,.009*Math.min(ie,wt*1.4)*zt)};Ce(),be=He();let F=await pv(be.lines,be.width,ce,we),Ge=mv(o,a,F,.1*(be.width/8.2)),it=lf(Ze(),ce,we),C=new Lt,M=new D,X=new D,q=A.target.glass.getWorldPosition(new D).add(O(0,.42,0)),re=q.clone().add(O(0,-.2,0)),Me=O(0,2.2,0),Pe=O(Ci.x,2,Ci.z-1.6),he=O(Ci.x,.95,Ci.z+.15),ge=E.leverHandle.getWorldPosition(new D);function N(ie){let wt=ie>Qe?Math.exp(-(ie-Qe)*.32):0,zt=lt=>(ie-Qe)*5.5+lt,tn=lt=>ie>Qe+.15?Math.abs(Math.sin(zt(lt)))*.3*wt:0,Kt=lt=>ie>Qe+.15?1-.1*wt*Math.max(0,Math.cos(2*zt(lt)))**3+.05*wt*Math.sin(2*zt(lt))**2:1,Un=ie>16.4&&ie<Qe,xn=l.position,rn={smile:1,open:.6,brow:.7,look:xn},Nn={smile:-.35,open:.85,brow:1,browAngle:-.4,look:Me},Yt=dt(at(ie,7.4,8.1))*(1-dt(at(ie,10.4,11))),w=Math.sin(at(ie,6.95,7.3)*Math.PI),G;ie>Qe?G=rn:Un?G=Nn:ie>10.6?G={smile:1,open:.35,brow:.3,look:Me}:ie>7.6?G={smile:.3,open:.05,brow:-.3,browAngle:.35,squint:.35,look:re}:G={smile:.9,open:.28+.12*w,brow:.3,look:xn,wink:w},K.pose({t:ie,y:tn(0),squash:Kt(0),turn:ie>16?ht(.15,.7,dt(at(ie,16,17))):.15,L:ie>Qe?[2.8,.5,.2,.2]:[ht(.25,1.35,Yt),.12+.3*Yt,ht(.35,.45,Yt),ht(.3,.95,Yt)],R:ie>Qe?[2.8,.5,.2,.2]:[.45+.08*Math.sin(ie*2),.18,1.2,.5],headTurn:ht(0,.3,Yt)+(ie>16&&ie<Qe?.35:0),headTilt:.2*Yt,lean:.06*Yt,frizz:1+wt*3,...G}),ne.rotation.z=ht(0,1.9,dt(at(ie,8.1,8.6))*(1-dt(at(ie,10,10.5)))),ne.visible=ie<Qe;let se=ie>10.8&&ie<16.2?1:0,j=se*.15*Math.abs(Math.sin(ie*15)),ee=se*.15*Math.abs(Math.sin(ie*15+1.6)),Ne=dt(at(ie,16.2,17)),Oe;ie>Qe?Oe=rn:ie>16.2?Oe=Nn:ie>13.3&&ie<14.9?Oe={smile:1,open:.55,brow:.8,browAngle:-.3,look:xn}:se?Oe={smile:1,open:.4,brow:.5,browAngle:.3,squint:.2,look:Math.sin(ie*1.7)>0?Pe:he}:Oe={smile:.6,open:.15,brow:.2,look:Pe},Z.pose({t:ie,y:tn(1.2),squash:Kt(1.2),turn:ht(0,-.9,Ne),L:ie>Qe?[2.8,.6,.1,.1]:[ht(.85+j,1.6,Ne),ht(.05,.2,Ne),ht(1.1,.1,Ne),ht(.4,.1,Ne)],R:ie>Qe?[2.8,.6,.1,.1]:[.85+ee,.05,1.1,.4],headTurn:ht(.12*Math.sin(ie*.8),.2,Ne),headTilt:ht(.12,-.1,Ne),frizz:1+wt*3+(se?.6:0),...Oe});let Fe=dt(at(ie,15.4,16))*(1-dt(at(ie,16.6,17.2))),qe=dt(at(ie,16,16.35)),Xe;ie>Qe?Xe=rn:ie>16.4?Xe={smile:.6,open:.9,brow:1,look:Me}:ie>15?Xe={smile:.25,open:.08,brow:-.5,browAngle:.6,squint:.25,look:ge}:Xe={smile:.6,open:.15,brow:.1,look:Me},$.pose({t:ie,y:tn(2.1),squash:Kt(2.1),turn:ht(.6,.2,dt(at(ie,16.6,17.4))),L:ie>17?[ht(.4,2.7,dt(at(ie,17,17.6))),.6,.3,.1]:[ht(.4,ht(1.5,.85,qe),Fe),.1,ht(.5,.2,Fe),ht(.3,1,Fe)],R:ie>17?[ht(.4,2.7,dt(at(ie,17,17.6))),.6,.3,.1]:[.4,.15,.5,.3],headTurn:-.25,headTilt:.08,frizz:1+(ie>16.4?2:0),...Xe})}function W(ie){let zt=dt(at(ie,8.1,8.6))*(1-dt(at(ie,10,10.5)))>.75&&ie<10.1;zt&&(ne.updateWorldMatrix(!0,!1),X.set(0,.28,0).applyMatrix4(ne.matrixWorld));for(let tn=0;tn<Ye;tn++){if(!zt)C.scale.setScalar(1e-4),C.position.set(0,-10,0);else{let Kt=(tn/Ye+ie*2.2)%1;M.copy(X).lerp(q,Kt),M.y-=Math.sin(Kt*Math.PI)*-.12+Kt*Kt*.05,C.position.copy(M),C.scale.setScalar(1-Kt*.3)}C.updateMatrix(),Ve.setMatrixAt(tn,C.matrix)}Ve.instanceMatrix.needsUpdate=!0}function B(ie){_(ie),T(ie),A.update(ie),v(ie),E.update(ie,m),R(ie,g);let wt=it(l,ie);l.updateMatrixWorld(),b.update(ie,l),N(ie),o.updateMatrixWorld(),W(ie),Ge(ie);let zt=ie>16.4&&ie<Qe;y.intensity=zt?60+40*Math.sin(ie*14):0,y.target.position.set(Math.cos(ie*4)*5,0,Math.sin(ie*4)*5),u.intensity=ie>Qe?0:1+4*dt(at(ie,9.6,10.4))*(1-at(ie,10.6,12)),d.intensity=ie>Qe?0:1+2.5*dt(at(ie,10.6,11.6)),P.intensity=ie>Qe?5:10,L.intensity=ie>Qe?5:10,S.intensity=ie>Qe?40:10,o.fog.density=ht(.04,.06,dt(at(ie,Qe,Qe+2))),z.uniforms.focus.value=l.position.distanceTo(wt);let tn=Math.max(dt(at(ie,6,7))*(1-dt(at(ie,9.2,10.2))),dt(at(ie,13,13.8))*(1-dt(at(ie,14.6,15.2))),dt(at(ie,15.8,16.4))*(1-dt(at(ie,17,17.6))));z.uniforms.aperture.value=(ie<5.2?.18:.3)+.36*tn,z.uniforms.maxBlur.value=Ie;let Kt=ie>=Qe?Math.max(0,1-(ie-Qe)/.7):0;s.flash.style.opacity=String(Kt*.95);let Un="";for(let[xn,rn,Nn]of K_)if(ie>=xn&&ie<rn){let Yt=Math.floor((ie-xn)*40);Un=Nn.slice(0,Yt),s.caption.style.opacity=String(1-at(ie,rn-.4,rn))}s.caption.textContent!==Un&&(s.caption.textContent=Un),s.progress.style.transform=`scaleX(${Ri(ie/$o)})`}let J=22;async function te(){let ie=r.getContext(),wt=new Uint8Array(4),zt=()=>ie.readPixels(0,0,1,1,ie.RGBA,ie.UNSIGNED_BYTE,wt),tn=window.innerWidth*window.innerHeight,Kt=async Un=>{me=Un,Ce();let xn=[];for(let rn of[12,17.2,3]){B(rn),Y(),ve.render(),zt();let Nn=performance.now();for(let Yt=1;Yt<=3;Yt++)B(rn+Yt*.03),Y(),ve.render();zt(),xn.push((performance.now()-Nn)/3),await new Promise(Yt=>{setTimeout(Yt,0)})}return xn.sort((rn,Nn)=>rn-Nn),xn[1]};try{let Un=et,xn=Math.max(.3,et*.5),rn=await Kt(Un),Nn=await Kt(xn),Yt=tn*Un*Un/1e6,w=tn*xn*xn/1e6,G=(rn-Nn)/(Yt-w),se=rn-G*Yt;(!(G>0)||se<0)&&(G=rn/Yt,se=0);let j=Math.max(0,(J-se)/G),ee=Math.sqrt(j*1e6/tn);me=Math.min(et,Math.max(fe,Math.floor(ee*20)/20)),window.__introQuality={cHi:Math.round(rn*10)/10,cLo:Math.round(Nn*10)/10,fixe:Math.round(se*10)/10,parMpx:Math.round(G*10)/10,resolution:me}}catch{me=et}Ce()}if(new URLSearchParams(location.search).get("introbench")==="1"){await xv({renderer:r,composer:ve,scene:o,camera:l,ui:s,update:B,resize:Ce,ao:Se,dof:z,bloom:Ae,allShadows:V,nextShadow:Y,calibrate:te,maxQ:et,getQuality:()=>me,setQuality:ie=>{me=ie}});return}if(i!==null){let ie=new URLSearchParams(location.search).get("introdbg")||"";ie.includes("nodof")&&(z.uniforms.maxBlur.value=0),ie.includes("noao")&&(Se.blendIntensity=0),ie.includes("coc")&&(z.uniforms.debug.value=1),ie.includes("nocable")&&o.traverse(wt=>{wt.userData.cable&&(wt.visible=!1)}),B(i),V(),ie.includes("nodof")&&(z.uniforms.maxBlur.value=0),r.info.autoReset=!1,r.info.reset(),ve.render(),s.loading.remove(),s.sound.hidden=!0,window.__introStats={calls:r.info.render.calls,triangles:r.info.render.triangles,geometries:r.info.memory.geometries,textures:r.info.memory.textures,programs:r.info.programs?r.info.programs.length:0},window.__introFrame=i,window.__introScene=o;return}let Q=!1,ue=ie=>{ie.stopPropagation(),Q=!0};s.skip.addEventListener("click",ue),s.sound.hidden=!0,s.canvas.style.visibility="hidden";for(let ie of[12,17,21.5]){if(Q)break;B(ie),V();try{r.extensions.has("KHR_parallel_shader_compile")?await r.compileAsync(o,l):r.compile(o,l)}catch{}ve.render(),await new Promise(wt=>{setTimeout(wt,0)})}if(Q||await te(),s.skip.removeEventListener("click",ue),Q){s.o.classList.add("leaving"),await new Promise(ie=>{setTimeout(ie,650)});try{ve.dispose(),r.dispose(),r.forceContextLoss()}catch{}s.o.remove();return}B(0),V(),ve.render(),s.canvas.style.visibility="",s.loading.remove(),s.sound.hidden=!1;let I=Qd(),pe=!0;try{pe=localStorage.getItem(af)!=="off"}catch{}let ae=0,Te=performance.now(),Le=Date.now(),_e=document.visibilityState!=="visible",ke=!1,We,Tt=new Promise(ie=>{We=ie}),_t=()=>{if(!pe){s.sound.textContent="Activer le son",s.sound.classList.remove("pulse");return}I.running()?(s.sound.textContent="Couper le son",s.sound.classList.remove("pulse")):(s.sound.textContent="Activer le son",s.sound.classList.add("pulse"))};async function cn(){let ie=await I.play(ae);return I.setMuted(!1),_t(),ie}s.sound.addEventListener("click",async ie=>{ie.stopPropagation(),pe&&I.running()?(pe=!1,I.setMuted(!0)):(pe=!0,await cn());try{localStorage.setItem(af,pe?"on":"off")}catch{}_t()}),s.o.addEventListener("pointerdown",ie=>{ie.target.closest(".intro-btn")||pe&&!I.running()&&cn()});function hn(){ke||(ke=!0,I.stop(.5),clearInterval(en),document.removeEventListener("visibilitychange",Xi),document.removeEventListener("keydown",Is),window.removeEventListener("resize",hs),s.o.classList.add("leaving"),setTimeout(()=>{try{ve.dispose(),r.dispose(),r.forceContextLoss()}catch{}s.o.remove(),We()},650))}s.skip.addEventListener("click",ie=>{ie.stopPropagation(),hn()});let Is=ie=>{(ie.key==="Escape"||ie.key==="Enter")&&hn()};document.addEventListener("keydown",Is);let hs=()=>{Ce();let ie=He();ie.lines.length!==be.lines.length&&(be=ie),it=lf(Ze(),ce,we)};window.addEventListener("resize",hs);let Xi=()=>{document.visibilityState!=="visible"?(_e=!0,I.suspend()):(_e=!1,Te=performance.now(),Le=Date.now(),I.resume().then(()=>{pe&&I.running()&&I.play(ae)}))};document.addEventListener("visibilitychange",Xi);let us=Date.now(),en=setInterval(()=>{ke||(!_e&&Date.now()-Le>n&&hn(),Date.now()-us>9e4&&hn())},1e3),kn=0,ci=0,pn=0,ei=8,mn=new URLSearchParams(location.search).get("introperf")==="1"?document.createElement("p"):null;mn&&(mn.className="intro-perf",s.o.append(mn),window.__introPerf=[]);function ds(ie){if(ke||(requestAnimationFrame(ds),_e))return;let wt=ie-Te,zt=Math.min(.1,wt/1e3)*t;Te=ie,Le=Date.now();let tn=I.position();if(ae=tn!==null&&pe?Math.max(ae,tn):ae+zt,ae>=$o){hn();return}if(B(ae),Y(),ve.render(),Le=Date.now(),mn&&window.__introPerf.push([Math.round(ae*100)/100,Math.round(wt*10)/10,me]),ei>0){ei-=1;return}if(kn+=1,ci+=wt,pn=Math.max(pn,wt),kn===40){let Kt=ci/kn;mn&&(mn.textContent=`${Math.round(1e3/Kt)} images/s, pire image ${Math.round(pn)} ms, r\xE9solution ${me.toFixed(2)}`),Kt>30&&me>fe&&(me=Math.max(fe,Math.floor(me*Math.sqrt(J/Kt)*20)/20),Ce(),ei=8),kn=0,ci=0,pn=0}}return _t(),pe&&cn(),requestAnimationFrame(ie=>{Te=ie,ds(ie)}),Tt}export{bS as playIntro};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
