(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Xc="180",tr={ROTATE:0,DOLLY:1,PAN:2},js={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Fp=0,Gu=1,Op=2,Pd=1,Bp=2,di=3,Vi=0,un=1,Fe=2,Bi=0,ds=1,Wi=2,Hu=3,Vu=4,kp=5,as=100,zp=101,Gp=102,Hp=103,Vp=104,Wp=200,qp=201,Xp=202,Yp=203,Wl=204,ql=205,Zp=206,jp=207,Kp=208,Qp=209,$p=210,Jp=211,tm=212,em=213,nm=214,Xl=0,Yl=1,Zl=2,ur=3,jl=4,Kl=5,Ql=6,$l=7,Rd=0,im=1,sm=2,ki=0,rm=1,om=2,am=3,Yc=4,lm=5,cm=6,um=7,Cd=300,hr=301,dr=302,Jl=303,tc=304,Ba=306,ec=1e3,us=1001,nc=1002,xn=1003,hm=1004,Co=1005,zn=1006,il=1007,hs=1008,ei=1009,Ld=1010,Dd=1011,Jr=1012,Zc=1013,_s=1014,Qn=1015,po=1016,jc=1017,Kc=1018,to=1020,Id=35902,Ud=35899,Nd=1021,Fd=1022,Gn=1023,eo=1026,no=1027,Qc=1028,$c=1029,Od=1030,Jc=1031,tu=1033,da=33776,fa=33777,pa=33778,ma=33779,ic=35840,sc=35841,rc=35842,oc=35843,ac=36196,lc=37492,cc=37496,uc=37808,hc=37809,dc=37810,fc=37811,pc=37812,mc=37813,gc=37814,vc=37815,_c=37816,yc=37817,xc=37818,Sc=37819,Mc=37820,wc=37821,Ec=36492,bc=36494,Tc=36495,Ac=36283,Pc=36284,Rc=36285,Cc=36286,dm=3200,fm=3201,Bd=0,pm=1,Ii="",an="srgb",fr="srgb-linear",Sa="linear",ge="srgb",Rs=7680,Wu=519,mm=512,gm=513,vm=514,kd=515,_m=516,ym=517,xm=518,Sm=519,Lc=35044,Mm=35048,qu="300 es",$n=2e3,Ma=2001;class Ms{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Xu=1234567;const Xr=Math.PI/180,io=180/Math.PI;function ti(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[i&255]+je[i>>8&255]+je[i>>16&255]+je[i>>24&255]).toLowerCase()}function Zt(n,t,e){return Math.max(t,Math.min(e,n))}function eu(n,t){return(n%t+t)%t}function wm(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Em(n,t,e){return n!==t?(e-n)/(t-n):0}function Yr(n,t,e){return(1-e)*n+e*t}function bm(n,t,e,i){return Yr(n,t,1-Math.exp(-e*i))}function Tm(n,t=1){return t-Math.abs(eu(n,t*2)-t)}function Am(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Pm(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Rm(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Cm(n,t){return n+Math.random()*(t-n)}function Lm(n){return n*(.5-Math.random())}function Dm(n){n!==void 0&&(Xu=n);let t=Xu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Im(n){return n*Xr}function Um(n){return n*io}function Nm(n){return(n&n-1)===0&&n!==0}function Fm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Om(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Bm(n,t,e,i,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),u=o((t+i)/2),h=r((t-i)/2),p=o((t-i)/2),d=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*u,l*h,l*p,a*c);break;case"YZY":n.set(l*p,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*p,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Fn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function de(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const An={DEG2RAD:Xr,RAD2DEG:io,generateUUID:ti,clamp:Zt,euclideanModulo:eu,mapLinear:wm,inverseLerp:Em,lerp:Yr,damp:bm,pingpong:Tm,smoothstep:Am,smootherstep:Pm,randInt:Rm,randFloat:Cm,randFloatSpread:Lm,seededRandom:Dm,degToRad:Im,radToDeg:Um,isPowerOfTwo:Nm,ceilPowerOfTwo:Fm,floorPowerOfTwo:Om,setQuaternionFromProperEuler:Bm,normalize:de,denormalize:Fn};class et{constructor(t=0,e=0){et.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Zt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Zt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ys{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const p=r[o+0],d=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=p,t[e+1]=d,t[e+2]=g,t[e+3]=v;return}if(h!==v||l!==p||c!==d||u!==g){let m=1-a;const f=l*p+c*d+u*g+h*v,w=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const A=Math.sqrt(x),P=Math.atan2(A,f*w);m=Math.sin(m*P)/A,a=Math.sin(a*P)/A}const _=a*w;if(l=l*m+p*_,c=c*m+d*_,u=u*m+g*_,h=h*m+v*_,m===1-a){const A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],p=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+u*h+l*d-c*p,t[e+1]=l*g+u*p+c*h-a*d,t[e+2]=c*g+u*d+a*p-l*h,t[e+3]=u*g-a*h-l*p-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),p=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=p*u*h+c*d*g,this._y=c*d*h-p*u*g,this._z=c*u*g+p*d*h,this._w=c*u*h-p*d*g;break;case"YXZ":this._x=p*u*h+c*d*g,this._y=c*d*h-p*u*g,this._z=c*u*g-p*d*h,this._w=c*u*h+p*d*g;break;case"ZXY":this._x=p*u*h-c*d*g,this._y=c*d*h+p*u*g,this._z=c*u*g+p*d*h,this._w=c*u*h-p*d*g;break;case"ZYX":this._x=p*u*h-c*d*g,this._y=c*d*h+p*u*g,this._z=c*u*g-p*d*h,this._w=c*u*h+p*d*g;break;case"YZX":this._x=p*u*h+c*d*g,this._y=c*d*h+p*u*g,this._z=c*u*g-p*d*h,this._w=c*u*h-p*d*g;break;case"XZY":this._x=p*u*h-c*d*g,this._y=c*d*h-p*u*g,this._z=c*u*g+p*d*h,this._w=c*u*h+p*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],p=i+a+h;if(p>0){const d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,p=Math.sin(e*u)/c;return this._w=o*h+this._w*p,this._x=i*h+this._x*p,this._y=s*h+this._y*p,this._z=r*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(t=0,e=0,i=0){T.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Yu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Yu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Zt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return sl.copy(this).projectOnVector(t),this.sub(sl)}reflect(t){return this.sub(sl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Zt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sl=new T,Yu=new ys;class Yt{constructor(t,e,i,s,r,o,a,l,c){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],p=i[2],d=i[5],g=i[8],v=s[0],m=s[3],f=s[6],w=s[1],x=s[4],_=s[7],A=s[2],P=s[5],R=s[8];return r[0]=o*v+a*w+l*A,r[3]=o*m+a*x+l*P,r[6]=o*f+a*_+l*R,r[1]=c*v+u*w+h*A,r[4]=c*m+u*x+h*P,r[7]=c*f+u*_+h*R,r[2]=p*v+d*w+g*A,r[5]=p*m+d*x+g*P,r[8]=p*f+d*_+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,p=a*l-u*r,d=c*r-o*l,g=e*h+i*p+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=h*v,t[1]=(s*c-u*i)*v,t[2]=(a*i-s*o)*v,t[3]=p*v,t[4]=(u*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=d*v,t[7]=(i*l-c*e)*v,t[8]=(o*e-i*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(rl.makeScale(t,e)),this}rotate(t){return this.premultiply(rl.makeRotation(-t)),this}translate(t,e){return this.premultiply(rl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const rl=new Yt;function zd(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function wa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function km(){const n=wa("canvas");return n.style.display="block",n}const Zu={};function so(n){n in Zu||(Zu[n]=!0,console.warn(n))}function zm(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const ju=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ku=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gm(){const n={enabled:!0,workingColorSpace:fr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ge&&(s.r=yi(s.r),s.g=yi(s.g),s.b=yi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ge&&(s.r=er(s.r),s.g=er(s.g),s.b=er(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ii?Sa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return so("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return so("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[fr]:{primaries:t,whitePoint:i,transfer:Sa,toXYZ:ju,fromXYZ:Ku,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:an},outputColorSpaceConfig:{drawingBufferColorSpace:an}},[an]:{primaries:t,whitePoint:i,transfer:ge,toXYZ:ju,fromXYZ:Ku,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:an}}}),n}const re=Gm();function yi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function er(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Cs;class Hm{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Cs===void 0&&(Cs=wa("canvas")),Cs.width=t.width,Cs.height=t.height;const s=Cs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Cs}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=wa("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=yi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(yi(e[i]/255)*255):e[i]=yi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Vm=0;class nu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vm++}),this.uuid=ti(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ol(s[o].image)):r.push(ol(s[o]))}else r=ol(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function ol(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Hm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wm=0;const al=new T;class Qe extends Ms{constructor(t=Qe.DEFAULT_IMAGE,e=Qe.DEFAULT_MAPPING,i=us,s=us,r=zn,o=hs,a=Gn,l=ei,c=Qe.DEFAULT_ANISOTROPY,u=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=ti(),this.name="",this.source=new nu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(al).x}get height(){return this.source.getSize(al).y}get depth(){return this.source.getSize(al).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Cd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ec:t.x=t.x-Math.floor(t.x);break;case us:t.x=t.x<0?0:1;break;case nc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ec:t.y=t.y-Math.floor(t.y);break;case us:t.y=t.y<0?0:1;break;case nc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Qe.DEFAULT_IMAGE=null;Qe.DEFAULT_MAPPING=Cd;Qe.DEFAULT_ANISOTROPY=1;class _e{constructor(t=0,e=0,i=0,s=1){_e.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],p=l[1],d=l[5],g=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(u-p)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+p)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,_=(d+1)/2,A=(f+1)/2,P=(u+p)/4,R=(h+v)/4,D=(g+m)/4;return x>_&&x>A?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=P/i,r=R/i):_>A?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=P/s,r=D/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=R/r,s=D/r),this.set(i,s,r,e),this}let w=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(p-u)*(p-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(h-v)/w,this.z=(p-u)/w,this.w=Math.acos((c+d+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Zt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qm extends Ms{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);const s={width:t,height:e,depth:i.depth},r=new Qe(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:zn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new nu(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xs extends qm{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Gd extends Qe{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Xm extends Qe{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ws{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Rn):Rn.fromBufferAttribute(r,o),Rn.applyMatrix4(t.matrixWorld),this.expandByPoint(Rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Lo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Lo.copy(i.boundingBox)),Lo.applyMatrix4(t.matrixWorld),this.union(Lo)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Rn),Rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Er),Do.subVectors(this.max,Er),Ls.subVectors(t.a,Er),Ds.subVectors(t.b,Er),Is.subVectors(t.c,Er),bi.subVectors(Ds,Ls),Ti.subVectors(Is,Ds),$i.subVectors(Ls,Is);let e=[0,-bi.z,bi.y,0,-Ti.z,Ti.y,0,-$i.z,$i.y,bi.z,0,-bi.x,Ti.z,0,-Ti.x,$i.z,0,-$i.x,-bi.y,bi.x,0,-Ti.y,Ti.x,0,-$i.y,$i.x,0];return!ll(e,Ls,Ds,Is,Do)||(e=[1,0,0,0,1,0,0,0,1],!ll(e,Ls,Ds,Is,Do))?!1:(Io.crossVectors(bi,Ti),e=[Io.x,Io.y,Io.z],ll(e,Ls,Ds,Is,Do))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ai),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ai=[new T,new T,new T,new T,new T,new T,new T,new T],Rn=new T,Lo=new ws,Ls=new T,Ds=new T,Is=new T,bi=new T,Ti=new T,$i=new T,Er=new T,Do=new T,Io=new T,Ji=new T;function ll(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ji.fromArray(n,r);const a=s.x*Math.abs(Ji.x)+s.y*Math.abs(Ji.y)+s.z*Math.abs(Ji.z),l=t.dot(Ji),c=e.dot(Ji),u=i.dot(Ji);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Ym=new ws,br=new T,cl=new T;class Es{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Ym.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;br.subVectors(t,this.center);const e=br.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(br,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(cl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(br.copy(t.center).add(cl)),this.expandByPoint(br.copy(t.center).sub(cl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const li=new T,ul=new T,Uo=new T,Ai=new T,hl=new T,No=new T,dl=new T;class mo{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,li)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=li.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(li.copy(this.origin).addScaledVector(this.direction,e),li.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){ul.copy(t).add(e).multiplyScalar(.5),Uo.copy(e).sub(t).normalize(),Ai.copy(this.origin).sub(ul);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Uo),a=Ai.dot(this.direction),l=-Ai.dot(Uo),c=Ai.lengthSq(),u=Math.abs(1-o*o);let h,p,d,g;if(u>0)if(h=o*l-a,p=o*a-l,g=r*u,h>=0)if(p>=-g)if(p<=g){const v=1/u;h*=v,p*=v,d=h*(h+o*p+2*a)+p*(o*h+p+2*l)+c}else p=r,h=Math.max(0,-(o*p+a)),d=-h*h+p*(p+2*l)+c;else p=-r,h=Math.max(0,-(o*p+a)),d=-h*h+p*(p+2*l)+c;else p<=-g?(h=Math.max(0,-(-o*r+a)),p=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+p*(p+2*l)+c):p<=g?(h=0,p=Math.min(Math.max(-r,-l),r),d=p*(p+2*l)+c):(h=Math.max(0,-(o*r+a)),p=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+p*(p+2*l)+c);else p=o>0?-r:r,h=Math.max(0,-(o*p+a)),d=-h*h+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(ul).addScaledVector(Uo,p),d}intersectSphere(t,e){li.subVectors(t.center,this.origin);const i=li.dot(this.direction),s=li.dot(li)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,p=this.origin;return c>=0?(i=(t.min.x-p.x)*c,s=(t.max.x-p.x)*c):(i=(t.max.x-p.x)*c,s=(t.min.x-p.x)*c),u>=0?(r=(t.min.y-p.y)*u,o=(t.max.y-p.y)*u):(r=(t.max.y-p.y)*u,o=(t.min.y-p.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-p.z)*h,l=(t.max.z-p.z)*h):(a=(t.max.z-p.z)*h,l=(t.min.z-p.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,li)!==null}intersectTriangle(t,e,i,s,r){hl.subVectors(e,t),No.subVectors(i,t),dl.crossVectors(hl,No);let o=this.direction.dot(dl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ai.subVectors(this.origin,t);const l=a*this.direction.dot(No.crossVectors(Ai,No));if(l<0)return null;const c=a*this.direction.dot(hl.cross(Ai));if(c<0||l+c>o)return null;const u=-a*Ai.dot(dl);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class he{constructor(t,e,i,s,r,o,a,l,c,u,h,p,d,g,v,m){he.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,h,p,d,g,v,m)}set(t,e,i,s,r,o,a,l,c,u,h,p,d,g,v,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=p,f[3]=d,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new he().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Us.setFromMatrixColumn(t,0).length(),r=1/Us.setFromMatrixColumn(t,1).length(),o=1/Us.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const p=o*u,d=o*h,g=a*u,v=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+g*c,e[5]=p-v*c,e[9]=-a*l,e[2]=v-p*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const p=l*u,d=l*h,g=c*u,v=c*h;e[0]=p+v*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=v+p*a,e[10]=o*l}else if(t.order==="ZXY"){const p=l*u,d=l*h,g=c*u,v=c*h;e[0]=p-v*a,e[4]=-o*h,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=v-p*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const p=o*u,d=o*h,g=a*u,v=a*h;e[0]=l*u,e[4]=g*c-d,e[8]=p*c+v,e[1]=l*h,e[5]=v*c+p,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const p=o*l,d=o*c,g=a*l,v=a*c;e[0]=l*u,e[4]=v-p*h,e[8]=g*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+g,e[10]=p-v*h}else if(t.order==="XZY"){const p=o*l,d=o*c,g=a*l,v=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=p*h+v,e[5]=o*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=a*u,e[10]=v*h+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zm,t,jm)}lookAt(t,e,i){const s=this.elements;return pn.subVectors(t,e),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),Pi.crossVectors(i,pn),Pi.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),Pi.crossVectors(i,pn)),Pi.normalize(),Fo.crossVectors(pn,Pi),s[0]=Pi.x,s[4]=Fo.x,s[8]=pn.x,s[1]=Pi.y,s[5]=Fo.y,s[9]=pn.y,s[2]=Pi.z,s[6]=Fo.z,s[10]=pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],p=i[9],d=i[13],g=i[2],v=i[6],m=i[10],f=i[14],w=i[3],x=i[7],_=i[11],A=i[15],P=s[0],R=s[4],D=s[8],M=s[12],S=s[1],L=s[5],B=s[9],z=s[13],G=s[2],V=s[6],X=s[10],K=s[14],U=s[3],st=s[7],ft=s[11],yt=s[15];return r[0]=o*P+a*S+l*G+c*U,r[4]=o*R+a*L+l*V+c*st,r[8]=o*D+a*B+l*X+c*ft,r[12]=o*M+a*z+l*K+c*yt,r[1]=u*P+h*S+p*G+d*U,r[5]=u*R+h*L+p*V+d*st,r[9]=u*D+h*B+p*X+d*ft,r[13]=u*M+h*z+p*K+d*yt,r[2]=g*P+v*S+m*G+f*U,r[6]=g*R+v*L+m*V+f*st,r[10]=g*D+v*B+m*X+f*ft,r[14]=g*M+v*z+m*K+f*yt,r[3]=w*P+x*S+_*G+A*U,r[7]=w*R+x*L+_*V+A*st,r[11]=w*D+x*B+_*X+A*ft,r[15]=w*M+x*z+_*K+A*yt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],p=t[10],d=t[14],g=t[3],v=t[7],m=t[11],f=t[15];return g*(+r*l*h-s*c*h-r*a*p+i*c*p+s*a*d-i*l*d)+v*(+e*l*d-e*c*p+r*o*p-s*o*d+s*c*u-r*l*u)+m*(+e*c*h-e*a*d-r*o*h+i*o*d+r*a*u-i*c*u)+f*(-s*a*u-e*l*h+e*a*p+s*o*h-i*o*p+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],p=t[10],d=t[11],g=t[12],v=t[13],m=t[14],f=t[15],w=h*m*c-v*p*c+v*l*d-a*m*d-h*l*f+a*p*f,x=g*p*c-u*m*c-g*l*d+o*m*d+u*l*f-o*p*f,_=u*v*c-g*h*c+g*a*d-o*v*d-u*a*f+o*h*f,A=g*h*l-u*v*l-g*a*p+o*v*p+u*a*m-o*h*m,P=e*w+i*x+s*_+r*A;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/P;return t[0]=w*R,t[1]=(v*p*r-h*m*r-v*s*d+i*m*d+h*s*f-i*p*f)*R,t[2]=(a*m*r-v*l*r+v*s*c-i*m*c-a*s*f+i*l*f)*R,t[3]=(h*l*r-a*p*r-h*s*c+i*p*c+a*s*d-i*l*d)*R,t[4]=x*R,t[5]=(u*m*r-g*p*r+g*s*d-e*m*d-u*s*f+e*p*f)*R,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*f-e*l*f)*R,t[7]=(o*p*r-u*l*r+u*s*c-e*p*c-o*s*d+e*l*d)*R,t[8]=_*R,t[9]=(g*h*r-u*v*r-g*i*d+e*v*d+u*i*f-e*h*f)*R,t[10]=(o*v*r-g*a*r+g*i*c-e*v*c-o*i*f+e*a*f)*R,t[11]=(u*a*r-o*h*r-u*i*c+e*h*c+o*i*d-e*a*d)*R,t[12]=A*R,t[13]=(u*v*s-g*h*s+g*i*p-e*v*p-u*i*m+e*h*m)*R,t[14]=(g*a*s-o*v*s-g*i*l+e*v*l+o*i*m-e*a*m)*R,t[15]=(o*h*s-u*a*s+u*i*l-e*h*l-o*i*p+e*a*p)*R,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,p=r*c,d=r*u,g=r*h,v=o*u,m=o*h,f=a*h,w=l*c,x=l*u,_=l*h,A=i.x,P=i.y,R=i.z;return s[0]=(1-(v+f))*A,s[1]=(d+_)*A,s[2]=(g-x)*A,s[3]=0,s[4]=(d-_)*P,s[5]=(1-(p+f))*P,s[6]=(m+w)*P,s[7]=0,s[8]=(g+x)*R,s[9]=(m-w)*R,s[10]=(1-(p+v))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Us.set(s[0],s[1],s[2]).length();const o=Us.set(s[4],s[5],s[6]).length(),a=Us.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Cn.copy(this);const c=1/r,u=1/o,h=1/a;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=u,Cn.elements[5]*=u,Cn.elements[6]*=u,Cn.elements[8]*=h,Cn.elements[9]*=h,Cn.elements[10]*=h,e.setFromRotationMatrix(Cn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=$n,l=!1){const c=this.elements,u=2*r/(e-t),h=2*r/(i-s),p=(e+t)/(e-t),d=(i+s)/(i-s);let g,v;if(l)g=r/(o-r),v=o*r/(o-r);else if(a===$n)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Ma)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=$n,l=!1){const c=this.elements,u=2/(e-t),h=2/(i-s),p=-(e+t)/(e-t),d=-(i+s)/(i-s);let g,v;if(l)g=1/(o-r),v=o/(o-r);else if(a===$n)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===Ma)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Us=new T,Cn=new he,Zm=new T(0,0,0),jm=new T(1,1,1),Pi=new T,Fo=new T,pn=new T,Qu=new he,$u=new ys;class ni{constructor(t=0,e=0,i=0,s=ni.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],p=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Qu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $u.setFromEuler(this),this.setFromQuaternion($u,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ni.DEFAULT_ORDER="XYZ";class iu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Km=0;const Ju=new T,Ns=new ys,ci=new he,Oo=new T,Tr=new T,Qm=new T,$m=new ys,th=new T(1,0,0),eh=new T(0,1,0),nh=new T(0,0,1),ih={type:"added"},Jm={type:"removed"},Fs={type:"childadded",child:null},fl={type:"childremoved",child:null};class Ue extends Ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ue.DEFAULT_UP.clone();const t=new T,e=new ni,i=new ys,s=new T(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new he},normalMatrix:{value:new Yt}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=Ue.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new iu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ns.setFromAxisAngle(t,e),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(t,e){return Ns.setFromAxisAngle(t,e),this.quaternion.premultiply(Ns),this}rotateX(t){return this.rotateOnAxis(th,t)}rotateY(t){return this.rotateOnAxis(eh,t)}rotateZ(t){return this.rotateOnAxis(nh,t)}translateOnAxis(t,e){return Ju.copy(t).applyQuaternion(this.quaternion),this.position.add(Ju.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(th,t)}translateY(t){return this.translateOnAxis(eh,t)}translateZ(t){return this.translateOnAxis(nh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Oo.copy(t):Oo.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(Tr,Oo,this.up):ci.lookAt(Oo,Tr,this.up),this.quaternion.setFromRotationMatrix(ci),s&&(ci.extractRotation(s.matrixWorld),Ns.setFromRotationMatrix(ci),this.quaternion.premultiply(Ns.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ih),Fs.child=t,this.dispatchEvent(Fs),Fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Jm),fl.child=t,this.dispatchEvent(fl),fl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ci.multiply(t.parent.matrixWorld)),t.applyMatrix4(ci),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ih),Fs.child=t,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,t,Qm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,$m,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),p=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),p.length>0&&(i.skeletons=p),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Ue.DEFAULT_UP=new T(0,1,0);Ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new T,ui=new T,pl=new T,hi=new T,Os=new T,Bs=new T,sh=new T,ml=new T,gl=new T,vl=new T,_l=new _e,yl=new _e,xl=new _e;class Tn{constructor(t=new T,e=new T,i=new T){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Ln.subVectors(t,e),s.cross(Ln);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Ln.subVectors(s,e),ui.subVectors(i,e),pl.subVectors(t,e);const o=Ln.dot(Ln),a=Ln.dot(ui),l=Ln.dot(pl),c=ui.dot(ui),u=ui.dot(pl),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const p=1/h,d=(c*l-a*u)*p,g=(o*u-a*l)*p;return r.set(1-d-g,g,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,hi.x),l.addScaledVector(o,hi.y),l.addScaledVector(a,hi.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return _l.setScalar(0),yl.setScalar(0),xl.setScalar(0),_l.fromBufferAttribute(t,e),yl.fromBufferAttribute(t,i),xl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(_l,r.x),o.addScaledVector(yl,r.y),o.addScaledVector(xl,r.z),o}static isFrontFacing(t,e,i,s){return Ln.subVectors(i,e),ui.subVectors(t,e),Ln.cross(ui).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ln.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Ln.cross(ui).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Tn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Tn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return Tn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Tn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Tn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Os.subVectors(s,i),Bs.subVectors(r,i),ml.subVectors(t,i);const l=Os.dot(ml),c=Bs.dot(ml);if(l<=0&&c<=0)return e.copy(i);gl.subVectors(t,s);const u=Os.dot(gl),h=Bs.dot(gl);if(u>=0&&h<=u)return e.copy(s);const p=l*h-u*c;if(p<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(Os,o);vl.subVectors(t,r);const d=Os.dot(vl),g=Bs.dot(vl);if(g>=0&&d<=g)return e.copy(r);const v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(Bs,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return sh.subVectors(r,s),a=(h-u)/(h-u+(d-g)),e.copy(s).addScaledVector(sh,a);const f=1/(m+v+p);return o=v*f,a=p*f,e.copy(i).addScaledVector(Os,o).addScaledVector(Bs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Hd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},Bo={h:0,s:0,l:0};function Sl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Ht{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=an){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=i,re.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=re.workingColorSpace){if(t=eu(t,1),e=Zt(e,0,1),i=Zt(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Sl(o,r,t+1/3),this.g=Sl(o,r,t),this.b=Sl(o,r,t-1/3)}return re.colorSpaceToWorking(this,s),this}setStyle(t,e=an){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=an){const i=Hd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=yi(t.r),this.g=yi(t.g),this.b=yi(t.b),this}copyLinearToSRGB(t){return this.r=er(t.r),this.g=er(t.g),this.b=er(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=an){return re.workingToColorSpace(Ke.copy(this),t),Math.round(Zt(Ke.r*255,0,255))*65536+Math.round(Zt(Ke.g*255,0,255))*256+Math.round(Zt(Ke.b*255,0,255))}getHexString(t=an){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.workingToColorSpace(Ke.copy(this),e);const i=Ke.r,s=Ke.g,r=Ke.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=re.workingColorSpace){return re.workingToColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=an){re.workingToColorSpace(Ke.copy(this),t);const e=Ke.r,i=Ke.g,s=Ke.b;return t!==an?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ri),this.setHSL(Ri.h+t,Ri.s+e,Ri.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ri),t.getHSL(Bo);const i=Yr(Ri.h,Bo.h,e),s=Yr(Ri.s,Bo.s,e),r=Yr(Ri.l,Bo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ke=new Ht;Ht.NAMES=Hd;let t0=0;class Zi extends Ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=ti(),this.name="",this.type="Material",this.blending=ds,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wl,this.blendDst=ql,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rs,this.stencilZFail=Rs,this.stencilZPass=Rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(i.blending=this.blending),this.side!==Vi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wl&&(i.blendSrc=this.blendSrc),this.blendDst!==ql&&(i.blendDst=this.blendDst),this.blendEquation!==as&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ur&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Rs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Rs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Be extends Zi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=Rd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ne=new T,ko=new et;let e0=0;class Sn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:e0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Lc,this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ko.fromBufferAttribute(this,e),ko.applyMatrix3(t),this.setXY(e,ko.x,ko.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Fn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=de(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Fn(e,this.array)),e}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Fn(e,this.array)),e}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Fn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Fn(e,this.array)),e}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),i=de(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),i=de(i,this.array),s=de(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),i=de(i,this.array),s=de(s,this.array),r=de(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Lc&&(t.usage=this.usage),t}}class Vd extends Sn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Wd extends Sn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class te extends Sn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let n0=0;const bn=new he,Ml=new Ue,ks=new T,mn=new ws,Ar=new ws,Ge=new T;class Ie extends Ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(zd(t)?Wd:Vd)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Yt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return bn.makeRotationFromQuaternion(t),this.applyMatrix4(bn),this}rotateX(t){return bn.makeRotationX(t),this.applyMatrix4(bn),this}rotateY(t){return bn.makeRotationY(t),this.applyMatrix4(bn),this}rotateZ(t){return bn.makeRotationZ(t),this.applyMatrix4(bn),this}translate(t,e,i){return bn.makeTranslation(t,e,i),this.applyMatrix4(bn),this}scale(t,e,i){return bn.makeScale(t,e,i),this.applyMatrix4(bn),this}lookAt(t){return Ml.lookAt(t),Ml.updateMatrix(),this.applyMatrix4(Ml.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new te(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ws);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ge.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Ge),Ge.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Ge)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Es);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(t){const i=this.boundingSphere.center;if(mn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ar.setFromBufferAttribute(a),this.morphTargetsRelative?(Ge.addVectors(mn.min,Ar.min),mn.expandByPoint(Ge),Ge.addVectors(mn.max,Ar.max),mn.expandByPoint(Ge)):(mn.expandByPoint(Ar.min),mn.expandByPoint(Ar.max))}mn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Ge.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ge));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ge.fromBufferAttribute(a,c),l&&(ks.fromBufferAttribute(t,c),Ge.add(ks)),s=Math.max(s,i.distanceToSquared(Ge))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Sn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new T,l[D]=new T;const c=new T,u=new T,h=new T,p=new et,d=new et,g=new et,v=new T,m=new T;function f(D,M,S){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,M),h.fromBufferAttribute(i,S),p.fromBufferAttribute(r,D),d.fromBufferAttribute(r,M),g.fromBufferAttribute(r,S),u.sub(c),h.sub(c),d.sub(p),g.sub(p);const L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(L),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(L),a[D].add(v),a[M].add(v),a[S].add(v),l[D].add(m),l[M].add(m),l[S].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let D=0,M=w.length;D<M;++D){const S=w[D],L=S.start,B=S.count;for(let z=L,G=L+B;z<G;z+=3)f(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const x=new T,_=new T,A=new T,P=new T;function R(D){A.fromBufferAttribute(s,D),P.copy(A);const M=a[D];x.copy(M),x.sub(A.multiplyScalar(A.dot(M))).normalize(),_.crossVectors(P,M);const L=_.dot(l[D])<0?-1:1;o.setXYZW(D,x.x,x.y,x.z,L)}for(let D=0,M=w.length;D<M;++D){const S=w[D],L=S.start,B=S.count;for(let z=L,G=L+B;z<G;z+=3)R(t.getX(z+0)),R(t.getX(z+1)),R(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Sn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let p=0,d=i.count;p<d;p++)i.setXYZ(p,0,0,0);const s=new T,r=new T,o=new T,a=new T,l=new T,c=new T,u=new T,h=new T;if(t)for(let p=0,d=t.count;p<d;p+=3){const g=t.getX(p+0),v=t.getX(p+1),m=t.getX(p+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,d=e.count;p<d;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(p+0,u.x,u.y,u.z),i.setXYZ(p+1,u.x,u.y,u.z),i.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ge.fromBufferAttribute(t,e),Ge.normalize(),t.setXYZ(e,Ge.x,Ge.y,Ge.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,p=new c.constructor(l.length*u);let d=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*u;for(let f=0;f<u;f++)p[g++]=c[d++]}return new Sn(p,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ie,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const p=c[u],d=t(p,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,p=c.length;h<p;h++){const d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let p=0,d=h.length;p<d;p++)u.push(h[p].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rh=new he,ts=new mo,zo=new Es,oh=new T,Go=new T,Ho=new T,Vo=new T,wl=new T,Wo=new T,ah=new T,qo=new T;class bt extends Ue{constructor(t=new Ie,e=new Be){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Wo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(wl.fromBufferAttribute(h,t),o?Wo.addScaledVector(wl,u):Wo.addScaledVector(wl.sub(e),u))}e.add(Wo)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),zo.copy(i.boundingSphere),zo.applyMatrix4(r),ts.copy(t.ray).recast(t.near),!(zo.containsPoint(ts.origin)===!1&&(ts.intersectSphere(zo,oh)===null||ts.origin.distanceToSquared(oh)>(t.far-t.near)**2))&&(rh.copy(r).invert(),ts.copy(t.ray).applyMatrix4(rh),!(i.boundingBox!==null&&ts.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ts)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,p=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=p.length;g<v;g++){const m=p[g],f=o[m.materialIndex],w=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let _=w,A=x;_<A;_+=3){const P=a.getX(_),R=a.getX(_+1),D=a.getX(_+2);s=Xo(this,f,t,i,c,u,h,P,R,D),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let m=g,f=v;m<f;m+=3){const w=a.getX(m),x=a.getX(m+1),_=a.getX(m+2);s=Xo(this,o,t,i,c,u,h,w,x,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=p.length;g<v;g++){const m=p[g],f=o[m.materialIndex],w=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let _=w,A=x;_<A;_+=3){const P=_,R=_+1,D=_+2;s=Xo(this,f,t,i,c,u,h,P,R,D),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=g,f=v;m<f;m+=3){const w=m,x=m+1,_=m+2;s=Xo(this,o,t,i,c,u,h,w,x,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function i0(n,t,e,i,s,r,o,a){let l;if(t.side===un?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Vi,a),l===null)return null;qo.copy(a),qo.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(qo);return c<e.near||c>e.far?null:{distance:c,point:qo.clone(),object:n}}function Xo(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Go),n.getVertexPosition(l,Ho),n.getVertexPosition(c,Vo);const u=i0(n,t,e,i,Go,Ho,Vo,ah);if(u){const h=new T;Tn.getBarycoord(ah,Go,Ho,Vo,h),s&&(u.uv=Tn.getInterpolatedAttribute(s,a,l,c,h,new et)),r&&(u.uv1=Tn.getInterpolatedAttribute(r,a,l,c,h,new et)),o&&(u.normal=Tn.getInterpolatedAttribute(o,a,l,c,h,new T),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const p={a,b:l,c,normal:new T,materialIndex:0};Tn.getNormal(Go,Ho,Vo,p.normal),u.face=p,u.barycoord=h}return u}class _n extends Ie{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let p=0,d=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new te(c,3)),this.setAttribute("normal",new te(u,3)),this.setAttribute("uv",new te(h,2));function g(v,m,f,w,x,_,A,P,R,D,M){const S=_/R,L=A/D,B=_/2,z=A/2,G=P/2,V=R+1,X=D+1;let K=0,U=0;const st=new T;for(let ft=0;ft<X;ft++){const yt=ft*L-z;for(let It=0;It<V;It++){const kt=It*S-B;st[v]=kt*w,st[m]=yt*x,st[f]=G,c.push(st.x,st.y,st.z),st[v]=0,st[m]=0,st[f]=P>0?1:-1,u.push(st.x,st.y,st.z),h.push(It/R),h.push(1-ft/D),K+=1}}for(let ft=0;ft<D;ft++)for(let yt=0;yt<R;yt++){const It=p+yt+V*ft,kt=p+yt+V*(ft+1),ie=p+(yt+1)+V*(ft+1),jt=p+(yt+1)+V*ft;l.push(It,kt,jt),l.push(kt,ie,jt),U+=6}a.addGroup(d,U,M),d+=U,p+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function pr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function tn(n){const t={};for(let e=0;e<n.length;e++){const i=pr(n[e]);for(const s in i)t[s]=i[s]}return t}function s0(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function qd(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}const r0={clone:pr,merge:tn};var o0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,a0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ii extends Zi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=o0,this.fragmentShader=a0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=pr(t.uniforms),this.uniformsGroups=s0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Xd extends Ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=$n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ci=new T,lh=new et,ch=new et;class cn extends Xd{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=io*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Xr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return io*2*Math.atan(Math.tan(Xr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ci.x,Ci.y).multiplyScalar(-t/Ci.z),Ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ci.x,Ci.y).multiplyScalar(-t/Ci.z)}getViewSize(t,e){return this.getViewBounds(t,lh,ch),e.subVectors(ch,lh)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Xr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const zs=-90,Gs=1;class l0 extends Ue{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new cn(zs,Gs,t,e);s.layers=this.layers,this.add(s);const r=new cn(zs,Gs,t,e);r.layers=this.layers,this.add(r);const o=new cn(zs,Gs,t,e);o.layers=this.layers,this.add(o);const a=new cn(zs,Gs,t,e);a.layers=this.layers,this.add(a);const l=new cn(zs,Gs,t,e);l.layers=this.layers,this.add(l);const c=new cn(zs,Gs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===$n)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ma)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),p=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(h,p,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Yd extends Qe{constructor(t=[],e=hr,i,s,r,o,a,l,c,u){super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class c0 extends xs{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Yd(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new _n(5,5,5),r=new ii({name:"CubemapFromEquirect",uniforms:pr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:Bi});r.uniforms.tEquirect.value=e;const o=new bt(s,r),a=e.minFilter;return e.minFilter===hs&&(e.minFilter=zn),new l0(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}class ae extends Ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}const u0={type:"move"};class El{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ae,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ae,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ae,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,i),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],p=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&p>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(u0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new ae;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class su{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ht(t),this.density=e}clone(){return new su(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Zd extends Ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ni,this.environmentIntensity=1,this.environmentRotation=new ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class h0{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Lc,this.updateRanges=[],this.version=0,this.uuid=ti()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Je=new T;class Ea{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix4(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Je.fromBufferAttribute(this,e),Je.applyNormalMatrix(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Je.fromBufferAttribute(this,e),Je.transformDirection(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Fn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=de(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Fn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Fn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Fn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Fn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),i=de(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),i=de(i,this.array),s=de(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),i=de(i,this.array),s=de(s,this.array),r=de(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Sn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ea(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class jd extends Zi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Hs;const Pr=new T,Vs=new T,Ws=new T,qs=new et,Rr=new et,Kd=new he,Yo=new T,Cr=new T,Zo=new T,uh=new et,bl=new et,hh=new et;class d0 extends Ue{constructor(t=new jd){if(super(),this.isSprite=!0,this.type="Sprite",Hs===void 0){Hs=new Ie;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new h0(e,5);Hs.setIndex([0,1,2,0,2,3]),Hs.setAttribute("position",new Ea(i,3,0,!1)),Hs.setAttribute("uv",new Ea(i,2,3,!1))}this.geometry=Hs,this.material=t,this.center=new et(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Vs.setFromMatrixScale(this.matrixWorld),Kd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ws.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Vs.multiplyScalar(-Ws.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;jo(Yo.set(-.5,-.5,0),Ws,o,Vs,s,r),jo(Cr.set(.5,-.5,0),Ws,o,Vs,s,r),jo(Zo.set(.5,.5,0),Ws,o,Vs,s,r),uh.set(0,0),bl.set(1,0),hh.set(1,1);let a=t.ray.intersectTriangle(Yo,Cr,Zo,!1,Pr);if(a===null&&(jo(Cr.set(-.5,.5,0),Ws,o,Vs,s,r),bl.set(0,1),a=t.ray.intersectTriangle(Yo,Zo,Cr,!1,Pr),a===null))return;const l=t.ray.origin.distanceTo(Pr);l<t.near||l>t.far||e.push({distance:l,point:Pr.clone(),uv:Tn.getInterpolation(Pr,Yo,Cr,Zo,uh,bl,hh,new et),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function jo(n,t,e,i,s,r){qs.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Rr.x=r*qs.x-s*qs.y,Rr.y=s*qs.x+r*qs.y):Rr.copy(qs),n.copy(t),n.x+=Rr.x,n.y+=Rr.y,n.applyMatrix4(Kd)}class f0 extends Qe{constructor(t=null,e=1,i=1,s,r,o,a,l,c=xn,u=xn,h,p){super(null,o,a,l,c,u,s,r,h,p),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dh extends Sn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Xs=new he,fh=new he,Ko=[],ph=new ws,p0=new he,Lr=new bt,Dr=new Es;class mh extends bt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new dh(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,p0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ws),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Xs),ph.copy(t.boundingBox).applyMatrix4(Xs),this.boundingBox.union(ph)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Es),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Xs),Dr.copy(t.boundingSphere).applyMatrix4(Xs),this.boundingSphere.union(Dr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(Lr.geometry=this.geometry,Lr.material=this.material,Lr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Dr.copy(this.boundingSphere),Dr.applyMatrix4(i),t.ray.intersectsSphere(Dr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Xs),fh.multiplyMatrices(i,Xs),Lr.matrixWorld=fh,Lr.raycast(t,Ko);for(let o=0,a=Ko.length;o<a;o++){const l=Ko[o];l.instanceId=r,l.object=this,e.push(l)}Ko.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new dh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new f0(new Float32Array(s*this.count),s,this.count,Qc,Qn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Tl=new T,m0=new T,g0=new Yt;class Di{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Tl.subVectors(i,e).cross(m0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Tl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||g0.getNormalMatrix(t),s=this.coplanarPoint(Tl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const es=new Es,v0=new et(.5,.5),Qo=new T;class ru{constructor(t=new Di,e=new Di,i=new Di,s=new Di,r=new Di,o=new Di){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=$n,i=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],p=r[6],d=r[7],g=r[8],v=r[9],m=r[10],f=r[11],w=r[12],x=r[13],_=r[14],A=r[15];if(s[0].setComponents(c-o,d-u,f-g,A-w).normalize(),s[1].setComponents(c+o,d+u,f+g,A+w).normalize(),s[2].setComponents(c+a,d+h,f+v,A+x).normalize(),s[3].setComponents(c-a,d-h,f-v,A-x).normalize(),i)s[4].setComponents(l,p,m,_).normalize(),s[5].setComponents(c-l,d-p,f-m,A-_).normalize();else if(s[4].setComponents(c-l,d-p,f-m,A-_).normalize(),e===$n)s[5].setComponents(c+l,d+p,f+m,A+_).normalize();else if(e===Ma)s[5].setComponents(l,p,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(t){es.center.set(0,0,0);const e=v0.distanceTo(t.center);return es.radius=.7071067811865476+e,es.applyMatrix4(t.matrixWorld),this.intersectsSphere(es)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Qo.x=s.normal.x>0?t.max.x:t.min.x,Qo.y=s.normal.y>0?t.max.y:t.min.y,Qo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Qo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Qd extends Zi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ba=new T,Ta=new T,gh=new he,Ir=new mo,$o=new Es,Al=new T,vh=new T;class _0 extends Ue{constructor(t=new Ie,e=new Qd){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)ba.fromBufferAttribute(e,s-1),Ta.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=ba.distanceTo(Ta);t.setAttribute("lineDistance",new te(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$o.copy(i.boundingSphere),$o.applyMatrix4(s),$o.radius+=r,t.ray.intersectsSphere($o)===!1)return;gh.copy(s).invert(),Ir.copy(t.ray).applyMatrix4(gh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,p=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=d,m=g-1;v<m;v+=c){const f=u.getX(v),w=u.getX(v+1),x=Jo(this,t,Ir,l,f,w,v);x&&e.push(x)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(d),f=Jo(this,t,Ir,l,v,m,g-1);f&&e.push(f)}}else{const d=Math.max(0,o.start),g=Math.min(p.count,o.start+o.count);for(let v=d,m=g-1;v<m;v+=c){const f=Jo(this,t,Ir,l,v,v+1,v);f&&e.push(f)}if(this.isLineLoop){const v=Jo(this,t,Ir,l,g-1,d,g-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Jo(n,t,e,i,s,r,o){const a=n.geometry.attributes.position;if(ba.fromBufferAttribute(a,s),Ta.fromBufferAttribute(a,r),e.distanceSqToSegment(ba,Ta,Al,vh)>i)return;Al.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Al);if(!(c<t.near||c>t.far))return{distance:c,point:vh.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const _h=new T,yh=new T;class y0 extends _0{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)_h.fromBufferAttribute(e,s),yh.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+_h.distanceTo(yh);t.setAttribute("lineDistance",new te(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class $d extends Zi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const xh=new he,Dc=new mo,ta=new Es,ea=new T;class x0 extends Ue{constructor(t=new Ie,e=new $d){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ta.copy(i.boundingSphere),ta.applyMatrix4(s),ta.radius+=r,t.ray.intersectsSphere(ta)===!1)return;xh.copy(s).invert(),Dc.copy(t.ray).applyMatrix4(xh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const p=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=p,v=d;g<v;g++){const m=c.getX(g);ea.fromBufferAttribute(h,m),Sh(ea,m,l,s,t,e,this)}}else{const p=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=p,v=d;g<v;g++)ea.fromBufferAttribute(h,g),Sh(ea,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Sh(n,t,e,i,s,r,o){const a=Dc.distanceSqToPoint(n);if(a<e){const l=new T;Dc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class S0 extends Qe{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Jd extends Qe{constructor(t,e,i=_s,s,r,o,a=xn,l=xn,c,u=eo,h=1){if(u!==eo&&u!==no)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:t,height:e,depth:h};super(p,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new nu(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class tf extends Qe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class si extends Ie{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new T,u=new et;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,p=3;h<=e;h++,p+=3){const d=i+h/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[p]/t+1)/2,u.y=(o[p+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new te(o,3)),this.setAttribute("normal",new te(a,3)),this.setAttribute("uv",new te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new si(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class yn extends Ie{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],p=[],d=[];let g=0;const v=[],m=i/2;let f=0;w(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new te(h,3)),this.setAttribute("normal",new te(p,3)),this.setAttribute("uv",new te(d,2));function w(){const _=new T,A=new T;let P=0;const R=(e-t)/i;for(let D=0;D<=r;D++){const M=[],S=D/r,L=S*(e-t)+t;for(let B=0;B<=s;B++){const z=B/s,G=z*l+a,V=Math.sin(G),X=Math.cos(G);A.x=L*V,A.y=-S*i+m,A.z=L*X,h.push(A.x,A.y,A.z),_.set(V,R,X).normalize(),p.push(_.x,_.y,_.z),d.push(z,1-S),M.push(g++)}v.push(M)}for(let D=0;D<s;D++)for(let M=0;M<r;M++){const S=v[M][D],L=v[M+1][D],B=v[M+1][D+1],z=v[M][D+1];(t>0||M!==0)&&(u.push(S,L,z),P+=3),(e>0||M!==r-1)&&(u.push(L,B,z),P+=3)}c.addGroup(f,P,0),f+=P}function x(_){const A=g,P=new et,R=new T;let D=0;const M=_===!0?t:e,S=_===!0?1:-1;for(let B=1;B<=s;B++)h.push(0,m*S,0),p.push(0,S,0),d.push(.5,.5),g++;const L=g;for(let B=0;B<=s;B++){const G=B/s*l+a,V=Math.cos(G),X=Math.sin(G);R.x=M*X,R.y=m*S,R.z=M*V,h.push(R.x,R.y,R.z),p.push(0,S,0),P.x=V*.5+.5,P.y=X*.5*S+.5,d.push(P.x,P.y),g++}for(let B=0;B<s;B++){const z=A+B,G=L+B;_===!0?u.push(G,G+1,z):u.push(G+1,G,z),D+=3}c.addGroup(f,D,_===!0?1:2),f+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ou extends Ie{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new te(r,3)),this.setAttribute("normal",new te(r.slice(),3)),this.setAttribute("uv",new te(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(w){const x=new T,_=new T,A=new T;for(let P=0;P<e.length;P+=3)d(e[P+0],x),d(e[P+1],_),d(e[P+2],A),l(x,_,A,w)}function l(w,x,_,A){const P=A+1,R=[];for(let D=0;D<=P;D++){R[D]=[];const M=w.clone().lerp(_,D/P),S=x.clone().lerp(_,D/P),L=P-D;for(let B=0;B<=L;B++)B===0&&D===P?R[D][B]=M:R[D][B]=M.clone().lerp(S,B/L)}for(let D=0;D<P;D++)for(let M=0;M<2*(P-D)-1;M++){const S=Math.floor(M/2);M%2===0?(p(R[D][S+1]),p(R[D+1][S]),p(R[D][S])):(p(R[D][S+1]),p(R[D+1][S+1]),p(R[D+1][S]))}}function c(w){const x=new T;for(let _=0;_<r.length;_+=3)x.x=r[_+0],x.y=r[_+1],x.z=r[_+2],x.normalize().multiplyScalar(w),r[_+0]=x.x,r[_+1]=x.y,r[_+2]=x.z}function u(){const w=new T;for(let x=0;x<r.length;x+=3){w.x=r[x+0],w.y=r[x+1],w.z=r[x+2];const _=m(w)/2/Math.PI+.5,A=f(w)/Math.PI+.5;o.push(_,1-A)}g(),h()}function h(){for(let w=0;w<o.length;w+=6){const x=o[w+0],_=o[w+2],A=o[w+4],P=Math.max(x,_,A),R=Math.min(x,_,A);P>.9&&R<.1&&(x<.2&&(o[w+0]+=1),_<.2&&(o[w+2]+=1),A<.2&&(o[w+4]+=1))}}function p(w){r.push(w.x,w.y,w.z)}function d(w,x){const _=w*3;x.x=t[_+0],x.y=t[_+1],x.z=t[_+2]}function g(){const w=new T,x=new T,_=new T,A=new T,P=new et,R=new et,D=new et;for(let M=0,S=0;M<r.length;M+=9,S+=6){w.set(r[M+0],r[M+1],r[M+2]),x.set(r[M+3],r[M+4],r[M+5]),_.set(r[M+6],r[M+7],r[M+8]),P.set(o[S+0],o[S+1]),R.set(o[S+2],o[S+3]),D.set(o[S+4],o[S+5]),A.copy(w).add(x).add(_).divideScalar(3);const L=m(A);v(P,S+0,w,L),v(R,S+2,x,L),v(D,S+4,_,L)}}function v(w,x,_,A){A<0&&w.x===1&&(o[x]=w.x-1),_.x===0&&_.z===0&&(o[x]=A/2/Math.PI+.5)}function m(w){return Math.atan2(w.z,-w.x)}function f(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ou(t.vertices,t.indices,t.radius,t.details)}}class qn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const u=i[s],p=i[s+1]-u,d=(o-u)/p;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new et:new T);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new T,s=[],r=[],o=[],a=new T,l=new he;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new T)}r[0]=new T,o[0]=new T;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),p=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),p<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Zt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Zt(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class au extends qn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new et){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),p=l-this.aX,d=c-this.aY;l=p*u-d*h+this.aX,c=p*h+d*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class M0 extends au{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function lu(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let p=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;p*=u,d*=u,s(o,a,p,d)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const na=new T,Pl=new lu,Rl=new lu,Cl=new lu;class Ic extends qn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new T){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(na.subVectors(s[0],s[1]).add(s[0]),c=na);const h=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(na.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=na),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),d),v=Math.pow(h.distanceToSquared(p),d),m=Math.pow(p.distanceToSquared(u),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Pl.initNonuniformCatmullRom(c.x,h.x,p.x,u.x,g,v,m),Rl.initNonuniformCatmullRom(c.y,h.y,p.y,u.y,g,v,m),Cl.initNonuniformCatmullRom(c.z,h.z,p.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(Pl.initCatmullRom(c.x,h.x,p.x,u.x,this.tension),Rl.initCatmullRom(c.y,h.y,p.y,u.y,this.tension),Cl.initCatmullRom(c.z,h.z,p.z,u.z,this.tension));return i.set(Pl.calc(l),Rl.calc(l),Cl.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new T().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Mh(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function w0(n,t){const e=1-n;return e*e*t}function E0(n,t){return 2*(1-n)*n*t}function b0(n,t){return n*n*t}function Zr(n,t,e,i){return w0(n,t)+E0(n,e)+b0(n,i)}function T0(n,t){const e=1-n;return e*e*e*t}function A0(n,t){const e=1-n;return 3*e*e*n*t}function P0(n,t){return 3*(1-n)*n*n*t}function R0(n,t){return n*n*n*t}function jr(n,t,e,i,s){return T0(n,t)+A0(n,e)+P0(n,i)+R0(n,s)}class ef extends qn{constructor(t=new et,e=new et,i=new et,s=new et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new et){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(jr(t,s.x,r.x,o.x,a.x),jr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class C0 extends qn{constructor(t=new T,e=new T,i=new T,s=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new T){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(jr(t,s.x,r.x,o.x,a.x),jr(t,s.y,r.y,o.y,a.y),jr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class nf extends qn{constructor(t=new et,e=new et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new et){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hr extends qn{constructor(t=new T,e=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new T){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new T){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class sf extends qn{constructor(t=new et,e=new et,i=new et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new et){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Zr(t,s.x,r.x,o.x),Zr(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class rf extends qn{constructor(t=new T,e=new T,i=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new T){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Zr(t,s.x,r.x,o.x),Zr(t,s.y,r.y,o.y),Zr(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class of extends qn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new et){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set(Mh(a,l.x,c.x,u.x,h.x),Mh(a,l.y,c.y,u.y,h.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new et().fromArray(s))}return this}}var Aa=Object.freeze({__proto__:null,ArcCurve:M0,CatmullRomCurve3:Ic,CubicBezierCurve:ef,CubicBezierCurve3:C0,EllipseCurve:au,LineCurve:nf,LineCurve3:Hr,QuadraticBezierCurve:sf,QuadraticBezierCurve3:rf,SplineCurve:of});class af extends qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Aa[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Aa[s.type]().fromJSON(s))}return this}}class wh extends af{constructor(t){super(),this.type="Path",this.currentPoint=new et,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new nf(this.currentPoint.clone(),new et(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new sf(this.currentPoint.clone(),new et(t,e),new et(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){const a=new ef(this.currentPoint.clone(),new et(t,e),new et(i,s),new et(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new of(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){const c=new au(t,e,i,s,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class nr extends wh{constructor(t){super(t),this.uuid=ti(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new wh().fromJSON(s))}return this}}function L0(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=lf(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=F0(n,t,r,e)),n.length>80*e){a=1/0,l=1/0;let u=-1/0,h=-1/0;for(let p=e;p<s;p+=e){const d=n[p],g=n[p+1];d<a&&(a=d),g<l&&(l=g),d>u&&(u=d),g>h&&(h=g)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return ro(r,o,e,a,l,c,0),o}function lf(n,t,e,i,s){let r;if(s===Y0(n,t,e,i)>0)for(let o=t;o<e;o+=i)r=Eh(o/i|0,n[o],n[o+1],r);else for(let o=e-i;o>=t;o-=i)r=Eh(o/i|0,n[o],n[o+1],r);return r&&mr(r,r.next)&&(ao(r),r=r.next),r}function Ss(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(mr(e,e.next)||Ce(e.prev,e,e.next)===0)){if(ao(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function ro(n,t,e,i,s,r,o){if(!n)return;!o&&r&&G0(n,i,s,r);let a=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(r?I0(n,i,s,r):D0(n)){t.push(l.i,n.i,c.i),ao(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=U0(Ss(n),t),ro(n,t,e,i,s,r,2)):o===2&&N0(n,t,e,i,s,r):ro(Ss(n),t,e,i,s,r,1);break}}}function D0(n){const t=n.prev,e=n,i=n.next;if(Ce(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,u=Math.min(s,r,o),h=Math.min(a,l,c),p=Math.max(s,r,o),d=Math.max(a,l,c);let g=i.next;for(;g!==t;){if(g.x>=u&&g.x<=p&&g.y>=h&&g.y<=d&&Vr(s,a,r,l,o,c,g.x,g.y)&&Ce(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function I0(n,t,e,i){const s=n.prev,r=n,o=n.next;if(Ce(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,p=o.y,d=Math.min(a,l,c),g=Math.min(u,h,p),v=Math.max(a,l,c),m=Math.max(u,h,p),f=Uc(d,g,t,e,i),w=Uc(v,m,t,e,i);let x=n.prevZ,_=n.nextZ;for(;x&&x.z>=f&&_&&_.z<=w;){if(x.x>=d&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Vr(a,u,l,h,c,p,x.x,x.y)&&Ce(x.prev,x,x.next)>=0||(x=x.prevZ,_.x>=d&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Vr(a,u,l,h,c,p,_.x,_.y)&&Ce(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;x&&x.z>=f;){if(x.x>=d&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Vr(a,u,l,h,c,p,x.x,x.y)&&Ce(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;_&&_.z<=w;){if(_.x>=d&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Vr(a,u,l,h,c,p,_.x,_.y)&&Ce(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function U0(n,t){let e=n;do{const i=e.prev,s=e.next.next;!mr(i,s)&&uf(i,e,e.next,s)&&oo(i,s)&&oo(s,i)&&(t.push(i.i,e.i,s.i),ao(e),ao(e.next),e=n=s),e=e.next}while(e!==n);return Ss(e)}function N0(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&W0(o,a)){let l=hf(o,a);o=Ss(o,o.next),l=Ss(l,l.next),ro(o,t,e,i,s,r,0),ro(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function F0(n,t,e,i){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=lf(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(V0(c))}s.sort(O0);for(let r=0;r<s.length;r++)e=B0(s[r],e);return e}function O0(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function B0(n,t){const e=k0(n,t);if(!e)return t;const i=hf(e,n);return Ss(i,i.next),Ss(e,e.next)}function k0(n,t){let e=t;const i=n.x,s=n.y;let r=-1/0,o;if(mr(n,e))return e;do{if(mr(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const h=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=i&&h>r&&(r=h,o=e.x<e.next.x?e:e.next,h===i))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;e=o;do{if(i>=e.x&&e.x>=l&&i!==e.x&&cf(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){const h=Math.abs(s-e.y)/(i-e.x);oo(e,n)&&(h<u||h===u&&(e.x>o.x||e.x===o.x&&z0(o,e)))&&(o=e,u=h)}e=e.next}while(e!==a);return o}function z0(n,t){return Ce(n.prev,n,t.prev)<0&&Ce(t.next,n,n.next)<0}function G0(n,t,e,i){let s=n;do s.z===0&&(s.z=Uc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,H0(s)}function H0(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let o=i,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,e*=2}while(t>1);return n}function Uc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function V0(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function cf(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function Vr(n,t,e,i,s,r,o,a){return!(n===o&&t===a)&&cf(n,t,e,i,s,r,o,a)}function W0(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!q0(n,t)&&(oo(n,t)&&oo(t,n)&&X0(n,t)&&(Ce(n.prev,n,t.prev)||Ce(n,t.prev,t))||mr(n,t)&&Ce(n.prev,n,n.next)>0&&Ce(t.prev,t,t.next)>0)}function Ce(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function mr(n,t){return n.x===t.x&&n.y===t.y}function uf(n,t,e,i){const s=sa(Ce(n,t,e)),r=sa(Ce(n,t,i)),o=sa(Ce(e,i,n)),a=sa(Ce(e,i,t));return!!(s!==r&&o!==a||s===0&&ia(n,e,t)||r===0&&ia(n,i,t)||o===0&&ia(e,n,i)||a===0&&ia(e,t,i))}function ia(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function sa(n){return n>0?1:n<0?-1:0}function q0(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&uf(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function oo(n,t){return Ce(n.prev,n,n.next)<0?Ce(n,t,n.next)>=0&&Ce(n,n.prev,t)>=0:Ce(n,t,n.prev)<0||Ce(n,n.next,t)<0}function X0(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function hf(n,t){const e=Nc(n.i,n.x,n.y),i=Nc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Eh(n,t,e,i){const s=Nc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function ao(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Nc(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Y0(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class Z0{static triangulate(t,e,i=2){return L0(t,e,i)}}class pi{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return pi.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];bh(t),Th(i,t);let o=t.length;e.forEach(bh);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Th(i,e[l]);const a=Z0.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function bh(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Th(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Pa extends Ie{constructor(t=new nr([new et(.5,.5),new et(-.5,.5),new et(-.5,-.5),new et(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new te(s,3)),this.setAttribute("uv",new te(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let p=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const f=e.extrudePath,w=e.UVGenerator!==void 0?e.UVGenerator:j0;let x,_=!1,A,P,R,D;f&&(x=f.getSpacedPoints(u),_=!0,p=!1,A=f.computeFrenetFrames(u,!1),P=new T,R=new T,D=new T),p||(m=0,d=0,g=0,v=0);const M=a.extractPoints(c);let S=M.shape;const L=M.holes;if(!pi.isClockWise(S)){S=S.reverse();for(let tt=0,Q=L.length;tt<Q;tt++){const j=L[tt];pi.isClockWise(j)&&(L[tt]=j.reverse())}}function z(tt){const j=10000000000000001e-36;let k=tt[0];for(let lt=1;lt<=tt.length;lt++){const it=lt%tt.length,ct=tt[it],Ot=ct.x-k.x,Dt=ct.y-k.y,b=Ot*Ot+Dt*Dt,y=Math.max(Math.abs(ct.x),Math.abs(ct.y),Math.abs(k.x),Math.abs(k.y)),O=j*y*y;if(b<=O){tt.splice(it,1),lt--;continue}k=ct}}z(S),L.forEach(z);const G=L.length,V=S;for(let tt=0;tt<G;tt++){const Q=L[tt];S=S.concat(Q)}function X(tt,Q,j){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(Q,j)}const K=S.length;function U(tt,Q,j){let k,lt,it;const ct=tt.x-Q.x,Ot=tt.y-Q.y,Dt=j.x-tt.x,b=j.y-tt.y,y=ct*ct+Ot*Ot,O=ct*b-Ot*Dt;if(Math.abs(O)>Number.EPSILON){const q=Math.sqrt(y),nt=Math.sqrt(Dt*Dt+b*b),Y=Q.x-Ot/q,Ct=Q.y+ct/q,ht=j.x-b/nt,At=j.y+Dt/nt,Pt=((ht-Y)*b-(At-Ct)*Dt)/(ct*b-Ot*Dt);k=Y+ct*Pt-tt.x,lt=Ct+Ot*Pt-tt.y;const rt=k*k+lt*lt;if(rt<=2)return new et(k,lt);it=Math.sqrt(rt/2)}else{let q=!1;ct>Number.EPSILON?Dt>Number.EPSILON&&(q=!0):ct<-Number.EPSILON?Dt<-Number.EPSILON&&(q=!0):Math.sign(Ot)===Math.sign(b)&&(q=!0),q?(k=-Ot,lt=ct,it=Math.sqrt(y)):(k=ct,lt=Ot,it=Math.sqrt(y/2))}return new et(k/it,lt/it)}const st=[];for(let tt=0,Q=V.length,j=Q-1,k=tt+1;tt<Q;tt++,j++,k++)j===Q&&(j=0),k===Q&&(k=0),st[tt]=U(V[tt],V[j],V[k]);const ft=[];let yt,It=st.concat();for(let tt=0,Q=G;tt<Q;tt++){const j=L[tt];yt=[];for(let k=0,lt=j.length,it=lt-1,ct=k+1;k<lt;k++,it++,ct++)it===lt&&(it=0),ct===lt&&(ct=0),yt[k]=U(j[k],j[it],j[ct]);ft.push(yt),It=It.concat(yt)}let kt;if(m===0)kt=pi.triangulateShape(V,L);else{const tt=[],Q=[];for(let j=0;j<m;j++){const k=j/m,lt=d*Math.cos(k*Math.PI/2),it=g*Math.sin(k*Math.PI/2)+v;for(let ct=0,Ot=V.length;ct<Ot;ct++){const Dt=X(V[ct],st[ct],it);Tt(Dt.x,Dt.y,-lt),k===0&&tt.push(Dt)}for(let ct=0,Ot=G;ct<Ot;ct++){const Dt=L[ct];yt=ft[ct];const b=[];for(let y=0,O=Dt.length;y<O;y++){const q=X(Dt[y],yt[y],it);Tt(q.x,q.y,-lt),k===0&&b.push(q)}k===0&&Q.push(b)}}kt=pi.triangulateShape(tt,Q)}const ie=kt.length,jt=g+v;for(let tt=0;tt<K;tt++){const Q=p?X(S[tt],It[tt],jt):S[tt];_?(R.copy(A.normals[0]).multiplyScalar(Q.x),P.copy(A.binormals[0]).multiplyScalar(Q.y),D.copy(x[0]).add(R).add(P),Tt(D.x,D.y,D.z)):Tt(Q.x,Q.y,0)}for(let tt=1;tt<=u;tt++)for(let Q=0;Q<K;Q++){const j=p?X(S[Q],It[Q],jt):S[Q];_?(R.copy(A.normals[tt]).multiplyScalar(j.x),P.copy(A.binormals[tt]).multiplyScalar(j.y),D.copy(x[tt]).add(R).add(P),Tt(D.x,D.y,D.z)):Tt(j.x,j.y,h/u*tt)}for(let tt=m-1;tt>=0;tt--){const Q=tt/m,j=d*Math.cos(Q*Math.PI/2),k=g*Math.sin(Q*Math.PI/2)+v;for(let lt=0,it=V.length;lt<it;lt++){const ct=X(V[lt],st[lt],k);Tt(ct.x,ct.y,h+j)}for(let lt=0,it=L.length;lt<it;lt++){const ct=L[lt];yt=ft[lt];for(let Ot=0,Dt=ct.length;Ot<Dt;Ot++){const b=X(ct[Ot],yt[Ot],k);_?Tt(b.x,b.y+x[u-1].y,x[u-1].x+j):Tt(b.x,b.y,h+j)}}}Z(),$();function Z(){const tt=s.length/3;if(p){let Q=0,j=K*Q;for(let k=0;k<ie;k++){const lt=kt[k];St(lt[2]+j,lt[1]+j,lt[0]+j)}Q=u+m*2,j=K*Q;for(let k=0;k<ie;k++){const lt=kt[k];St(lt[0]+j,lt[1]+j,lt[2]+j)}}else{for(let Q=0;Q<ie;Q++){const j=kt[Q];St(j[2],j[1],j[0])}for(let Q=0;Q<ie;Q++){const j=kt[Q];St(j[0]+K*u,j[1]+K*u,j[2]+K*u)}}i.addGroup(tt,s.length/3-tt,0)}function $(){const tt=s.length/3;let Q=0;xt(V,Q),Q+=V.length;for(let j=0,k=L.length;j<k;j++){const lt=L[j];xt(lt,Q),Q+=lt.length}i.addGroup(tt,s.length/3-tt,1)}function xt(tt,Q){let j=tt.length;for(;--j>=0;){const k=j;let lt=j-1;lt<0&&(lt=tt.length-1);for(let it=0,ct=u+m*2;it<ct;it++){const Ot=K*it,Dt=K*(it+1),b=Q+k+Ot,y=Q+lt+Ot,O=Q+lt+Dt,q=Q+k+Dt;Qt(b,y,O,q)}}}function Tt(tt,Q,j){l.push(tt),l.push(Q),l.push(j)}function St(tt,Q,j){pe(tt),pe(Q),pe(j);const k=s.length/3,lt=w.generateTopUV(i,s,k-3,k-2,k-1);C(lt[0]),C(lt[1]),C(lt[2])}function Qt(tt,Q,j,k){pe(tt),pe(Q),pe(k),pe(Q),pe(j),pe(k);const lt=s.length/3,it=w.generateSideWallUV(i,s,lt-6,lt-3,lt-2,lt-1);C(it[0]),C(it[1]),C(it[3]),C(it[1]),C(it[2]),C(it[3])}function pe(tt){s.push(l[tt*3+0]),s.push(l[tt*3+1]),s.push(l[tt*3+2])}function C(tt){r.push(tt.x),r.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return K0(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Aa[s.type]().fromJSON(s)),new Pa(i,t.options)}}const j0={generateTopUV:function(n,t,e,i,s){const r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],u=t[s*3+1];return[new et(r,o),new et(a,l),new et(c,u)]},generateSideWallUV:function(n,t,e,i,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],u=t[i*3+1],h=t[i*3+2],p=t[s*3],d=t[s*3+1],g=t[s*3+2],v=t[r*3],m=t[r*3+1],f=t[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new et(o,1-l),new et(c,1-h),new et(p,1-g),new et(v,1-f)]:[new et(a,1-l),new et(u,1-h),new et(d,1-g),new et(m,1-f)]}};function K0(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class cu extends ou{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new cu(t.radius,t.detail)}}class xi extends Ie{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=t/a,p=e/l,d=[],g=[],v=[],m=[];for(let f=0;f<u;f++){const w=f*p-o;for(let x=0;x<c;x++){const _=x*h-r;g.push(_,-w,0),v.push(0,0,1),m.push(x/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let w=0;w<a;w++){const x=w+c*f,_=w+c*(f+1),A=w+1+c*(f+1),P=w+1+c*f;d.push(x,_,P),d.push(_,A,P)}this.setIndex(d),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(v,3)),this.setAttribute("uv",new te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xi(t.width,t.height,t.widthSegments,t.heightSegments)}}class ka extends Ie{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],l=[],c=[],u=[];let h=t;const p=(e-t)/s,d=new T,g=new et;for(let v=0;v<=s;v++){for(let m=0;m<=i;m++){const f=r+m/i*o;d.x=h*Math.cos(f),d.y=h*Math.sin(f),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,u.push(g.x,g.y)}h+=p}for(let v=0;v<s;v++){const m=v*(i+1);for(let f=0;f<i;f++){const w=f+m,x=w,_=w+i+1,A=w+i+2,P=w+1;a.push(x,_,P),a.push(_,A,P)}}this.setIndex(a),this.setAttribute("position",new te(l,3)),this.setAttribute("normal",new te(c,3)),this.setAttribute("uv",new te(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ka(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class za extends Ie{constructor(t=new nr([new et(0,.5),new et(-.5,-.5),new et(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new te(s,3)),this.setAttribute("normal",new te(r,3)),this.setAttribute("uv",new te(o,2));function c(u){const h=s.length/3,p=u.extractPoints(e);let d=p.shape;const g=p.holes;pi.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,f=g.length;m<f;m++){const w=g[m];pi.isClockWise(w)===!0&&(g[m]=w.reverse())}const v=pi.triangulateShape(d,g);for(let m=0,f=g.length;m<f;m++){const w=g[m];d=d.concat(w)}for(let m=0,f=d.length;m<f;m++){const w=d[m];s.push(w.x,w.y,0),r.push(0,0,1),o.push(w.x,w.y)}for(let m=0,f=v.length;m<f;m++){const w=v[m],x=w[0]+h,_=w[1]+h,A=w[2]+h;i.push(x,_,A),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Q0(e,t)}static fromJSON(t,e){const i=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];i.push(o)}return new za(i,t.curveSegments)}}function Q0(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}class Kn extends Ie{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new T,p=new T,d=[],g=[],v=[],m=[];for(let f=0;f<=i;f++){const w=[],x=f/i;let _=0;f===0&&o===0?_=.5/e:f===i&&l===Math.PI&&(_=-.5/e);for(let A=0;A<=e;A++){const P=A/e;h.x=-t*Math.cos(s+P*r)*Math.sin(o+x*a),h.y=t*Math.cos(o+x*a),h.z=t*Math.sin(s+P*r)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),p.copy(h).normalize(),v.push(p.x,p.y,p.z),m.push(P+_,1-x),w.push(c++)}u.push(w)}for(let f=0;f<i;f++)for(let w=0;w<e;w++){const x=u[f][w+1],_=u[f][w],A=u[f+1][w],P=u[f+1][w+1];(f!==0||o>0)&&d.push(x,_,P),(f!==i-1||l<Math.PI)&&d.push(_,A,P)}this.setIndex(d),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(v,3)),this.setAttribute("uv",new te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class fs extends Ie{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],l=[],c=[],u=new T,h=new T,p=new T;for(let d=0;d<=i;d++)for(let g=0;g<=s;g++){const v=g/s*r,m=d/i*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(v),h.y=(t+e*Math.cos(m))*Math.sin(v),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),p.subVectors(h,u).normalize(),l.push(p.x,p.y,p.z),c.push(g/s),c.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=s;g++){const v=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,f=(s+1)*(d-1)+g,w=(s+1)*d+g;o.push(v,m,w),o.push(m,f,w)}this.setIndex(o),this.setAttribute("position",new te(a,3)),this.setAttribute("normal",new te(l,3)),this.setAttribute("uv",new te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fs(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ni extends Ie{constructor(t=new rf(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new T,l=new T,c=new et;let u=new T;const h=[],p=[],d=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new te(h,3)),this.setAttribute("normal",new te(p,3)),this.setAttribute("uv",new te(d,2));function v(){for(let x=0;x<e;x++)m(x);m(r===!1?e:0),w(),f()}function m(x){u=t.getPointAt(x/e,u);const _=o.normals[x],A=o.binormals[x];for(let P=0;P<=s;P++){const R=P/s*Math.PI*2,D=Math.sin(R),M=-Math.cos(R);l.x=M*_.x+D*A.x,l.y=M*_.y+D*A.y,l.z=M*_.z+D*A.z,l.normalize(),p.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,h.push(a.x,a.y,a.z)}}function f(){for(let x=1;x<=e;x++)for(let _=1;_<=s;_++){const A=(s+1)*(x-1)+(_-1),P=(s+1)*x+(_-1),R=(s+1)*x+_,D=(s+1)*(x-1)+_;g.push(A,P,D),g.push(P,R,D)}}function w(){for(let x=0;x<=e;x++)for(let _=0;_<=s;_++)c.x=x/e,c.y=_/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Ni(new Aa[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class On extends Zi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bd,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class $0 extends On{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new et(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ht(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ht(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ht(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class J0 extends Zi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class tg extends Zi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ga extends Ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class eg extends Ga{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ht(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ll=new he,Ah=new T,Ph=new T;class df{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.mapType=ei,this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ru,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Ah.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ah),Ph.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ph),e.updateMatrixWorld(),Ll.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ll,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ll)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Rh=new he,Ur=new T,Dl=new T;class ng extends df{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new et(4,2),this._viewportCount=6,this._viewports=[new _e(2,1,1,1),new _e(0,1,1,1),new _e(3,1,1,1),new _e(1,1,1,1),new _e(3,0,1,1),new _e(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Ur.setFromMatrixPosition(t.matrixWorld),i.position.copy(Ur),Dl.copy(i.position),Dl.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Dl),i.updateMatrixWorld(),s.makeTranslation(-Ur.x,-Ur.y,-Ur.z),Rh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rh,i.coordinateSystem,i.reversedDepth)}}class ig extends Ga{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new ng}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class ff extends Xd{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class sg extends df{constructor(){super(new ff(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Fc extends Ga{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.target=new Ue,this.shadow=new sg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class rg extends Ga{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class og extends cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class ag{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}const Ch=new he;class lg{constructor(t,e,i=0,s=1/0){this.ray=new mo(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new iu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ch.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ch),this}intersectObject(t,e=!0,i=[]){return Oc(t,this,i,e),i.sort(Lh),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Oc(t[s],this,i,e);return i.sort(Lh),i}}function Lh(n,t){return n.distance-t.distance}function Oc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Oc(r[o],t,e,!0)}}class Dh{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Zt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Zt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class cg extends y0{constructor(t=10,e=10,i=4473924,s=8947848){i=new Ht(i),s=new Ht(s);const r=e/2,o=t/e,a=t/2,l=[],c=[];for(let p=0,d=0,g=-a;p<=e;p++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const v=p===r?i:s;v.toArray(c,d),d+=3,v.toArray(c,d),d+=3,v.toArray(c,d),d+=3,v.toArray(c,d),d+=3}const u=new Ie;u.setAttribute("position",new te(l,3)),u.setAttribute("color",new te(c,3));const h=new Qd({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class ug extends Ms{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Ih(n,t,e,i){const s=hg(i);switch(e){case Nd:return n*t;case Qc:return n*t/s.components*s.byteLength;case $c:return n*t/s.components*s.byteLength;case Od:return n*t*2/s.components*s.byteLength;case Jc:return n*t*2/s.components*s.byteLength;case Fd:return n*t*3/s.components*s.byteLength;case Gn:return n*t*4/s.components*s.byteLength;case tu:return n*t*4/s.components*s.byteLength;case da:case fa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case pa:case ma:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case sc:case oc:return Math.max(n,16)*Math.max(t,8)/4;case ic:case rc:return Math.max(n,8)*Math.max(t,8)/2;case ac:case lc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case cc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case uc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case hc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case dc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case fc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case pc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case mc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case gc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case vc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case _c:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case yc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case xc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Sc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Mc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case wc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Ec:case bc:case Tc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Ac:case Pc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Rc:case Cc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function hg(n){switch(n){case ei:case Ld:return{byteLength:1,components:1};case Jr:case Dd:case po:return{byteLength:2,components:1};case jc:case Kc:return{byteLength:2,components:4};case _s:case Zc:case Qn:return{byteLength:4,components:1};case Id:case Ud:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xc);function pf(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function dg(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,p=n.createBuffer();n.bindBuffer(l,p),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let p=0;for(let d=1;d<h.length;d++){const g=h[p],v=h[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++p,h[p]=v)}h.length=p+1;for(let d=0,g=h.length;d<g;d++){const v=h[d];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var fg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pg=`#ifdef USE_ALPHAHASH
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
#endif`,mg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_g=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yg=`#ifdef USE_AOMAP
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
#endif`,xg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sg=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Mg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Eg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Tg=`#ifdef USE_IRIDESCENCE
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
#endif`,Ag=`#ifdef USE_BUMPMAP
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
#endif`,Pg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Rg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ig=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ug=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ng=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Fg=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Og=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bg=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,kg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Xg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yg=`#ifdef USE_ENVMAP
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
#endif`,Zg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Kg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$g=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tv=`#ifdef USE_GRADIENTMAP
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
}`,ev=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sv=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,rv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,ov=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,av=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,hv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,dv=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_v=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mv=`#if defined( USE_POINTS_UV )
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
#endif`,wv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ev=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Av=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pv=`#ifdef USE_MORPHTARGETS
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
#endif`,Rv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Lv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Dv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nv=`#ifdef USE_NORMALMAP
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
#endif`,Fv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ov=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Hv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,jv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Kv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Qv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,$v=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jv=`#ifdef USE_SKINNING
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
#endif`,t_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,e_=`#ifdef USE_SKINNING
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
#endif`,n_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,i_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,s_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,r_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,o_=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,a_=`#ifdef USE_TRANSMISSION
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
#endif`,l_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const d_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,f_=`uniform sampler2D t2D;
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
}`,p_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,__=`#include <common>
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
}`,y_=`#if DEPTH_PACKING == 3200
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
}`,x_=`#define DISTANCE
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
}`,S_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,M_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,w_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E_=`uniform float scale;
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
}`,b_=`uniform vec3 diffuse;
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
}`,T_=`#include <common>
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
}`,A_=`uniform vec3 diffuse;
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
}`,P_=`#define LAMBERT
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
}`,R_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,C_=`#define MATCAP
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
}`,L_=`#define MATCAP
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
}`,D_=`#define NORMAL
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
}`,I_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,U_=`#define PHONG
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
}`,N_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,F_=`#define STANDARD
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
}`,O_=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,B_=`#define TOON
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
}`,k_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,z_=`uniform float size;
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
}`,G_=`uniform vec3 diffuse;
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
}`,H_=`#include <common>
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
}`,V_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,W_=`uniform float rotation;
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
}`,q_=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:fg,alphahash_pars_fragment:pg,alphamap_fragment:mg,alphamap_pars_fragment:gg,alphatest_fragment:vg,alphatest_pars_fragment:_g,aomap_fragment:yg,aomap_pars_fragment:xg,batching_pars_vertex:Sg,batching_vertex:Mg,begin_vertex:wg,beginnormal_vertex:Eg,bsdfs:bg,iridescence_fragment:Tg,bumpmap_pars_fragment:Ag,clipping_planes_fragment:Pg,clipping_planes_pars_fragment:Rg,clipping_planes_pars_vertex:Cg,clipping_planes_vertex:Lg,color_fragment:Dg,color_pars_fragment:Ig,color_pars_vertex:Ug,color_vertex:Ng,common:Fg,cube_uv_reflection_fragment:Og,defaultnormal_vertex:Bg,displacementmap_pars_vertex:kg,displacementmap_vertex:zg,emissivemap_fragment:Gg,emissivemap_pars_fragment:Hg,colorspace_fragment:Vg,colorspace_pars_fragment:Wg,envmap_fragment:qg,envmap_common_pars_fragment:Xg,envmap_pars_fragment:Yg,envmap_pars_vertex:Zg,envmap_physical_pars_fragment:rv,envmap_vertex:jg,fog_vertex:Kg,fog_pars_vertex:Qg,fog_fragment:$g,fog_pars_fragment:Jg,gradientmap_pars_fragment:tv,lightmap_pars_fragment:ev,lights_lambert_fragment:nv,lights_lambert_pars_fragment:iv,lights_pars_begin:sv,lights_toon_fragment:ov,lights_toon_pars_fragment:av,lights_phong_fragment:lv,lights_phong_pars_fragment:cv,lights_physical_fragment:uv,lights_physical_pars_fragment:hv,lights_fragment_begin:dv,lights_fragment_maps:fv,lights_fragment_end:pv,logdepthbuf_fragment:mv,logdepthbuf_pars_fragment:gv,logdepthbuf_pars_vertex:vv,logdepthbuf_vertex:_v,map_fragment:yv,map_pars_fragment:xv,map_particle_fragment:Sv,map_particle_pars_fragment:Mv,metalnessmap_fragment:wv,metalnessmap_pars_fragment:Ev,morphinstance_vertex:bv,morphcolor_vertex:Tv,morphnormal_vertex:Av,morphtarget_pars_vertex:Pv,morphtarget_vertex:Rv,normal_fragment_begin:Cv,normal_fragment_maps:Lv,normal_pars_fragment:Dv,normal_pars_vertex:Iv,normal_vertex:Uv,normalmap_pars_fragment:Nv,clearcoat_normal_fragment_begin:Fv,clearcoat_normal_fragment_maps:Ov,clearcoat_pars_fragment:Bv,iridescence_pars_fragment:kv,opaque_fragment:zv,packing:Gv,premultiplied_alpha_fragment:Hv,project_vertex:Vv,dithering_fragment:Wv,dithering_pars_fragment:qv,roughnessmap_fragment:Xv,roughnessmap_pars_fragment:Yv,shadowmap_pars_fragment:Zv,shadowmap_pars_vertex:jv,shadowmap_vertex:Kv,shadowmask_pars_fragment:Qv,skinbase_vertex:$v,skinning_pars_vertex:Jv,skinning_vertex:t_,skinnormal_vertex:e_,specularmap_fragment:n_,specularmap_pars_fragment:i_,tonemapping_fragment:s_,tonemapping_pars_fragment:r_,transmission_fragment:o_,transmission_pars_fragment:a_,uv_pars_fragment:l_,uv_pars_vertex:c_,uv_vertex:u_,worldpos_vertex:h_,background_vert:d_,background_frag:f_,backgroundCube_vert:p_,backgroundCube_frag:m_,cube_vert:g_,cube_frag:v_,depth_vert:__,depth_frag:y_,distanceRGBA_vert:x_,distanceRGBA_frag:S_,equirect_vert:M_,equirect_frag:w_,linedashed_vert:E_,linedashed_frag:b_,meshbasic_vert:T_,meshbasic_frag:A_,meshlambert_vert:P_,meshlambert_frag:R_,meshmatcap_vert:C_,meshmatcap_frag:L_,meshnormal_vert:D_,meshnormal_frag:I_,meshphong_vert:U_,meshphong_frag:N_,meshphysical_vert:F_,meshphysical_frag:O_,meshtoon_vert:B_,meshtoon_frag:k_,points_vert:z_,points_frag:G_,shadow_vert:H_,shadow_frag:V_,sprite_vert:W_,sprite_frag:q_},pt={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},Yn={basic:{uniforms:tn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:tn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:tn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:tn([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:tn([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:tn([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:tn([pt.points,pt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:tn([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:tn([pt.common,pt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:tn([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:tn([pt.sprite,pt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:tn([pt.common,pt.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:tn([pt.lights,pt.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};Yn.physical={uniforms:tn([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};const ra={r:0,b:0,g:0},ns=new ni,X_=new he;function Y_(n,t,e,i,s,r,o){const a=new Ht(0);let l=r===!0?0:1,c,u,h=null,p=0,d=null;function g(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?e:t).get(_)),_}function v(x){let _=!1;const A=g(x);A===null?f(a,l):A&&A.isColor&&(f(A,1),_=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(x,_){const A=g(_);A&&(A.isCubeTexture||A.mapping===Ba)?(u===void 0&&(u=new bt(new _n(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:pr(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,R,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ns.copy(_.backgroundRotation),ns.x*=-1,ns.y*=-1,ns.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(X_.makeRotationFromEuler(ns)),u.material.toneMapped=re.getTransfer(A.colorSpace)!==ge,(h!==A||p!==A.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=A,p=A.version,d=n.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new bt(new xi(2,2),new ii({name:"BackgroundMaterial",uniforms:pr(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=re.getTransfer(A.colorSpace)!==ge,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||p!==A.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=A,p=A.version,d=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function f(x,_){x.getRGB(ra,qd(n)),i.buffers.color.setClear(ra.r,ra.g,ra.b,_,o)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,_=1){a.set(x),l=_,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,f(a,l)},render:v,addToRenderList:m,dispose:w}}function Z_(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=p(null);let r=s,o=!1;function a(S,L,B,z,G){let V=!1;const X=h(z,B,L);r!==X&&(r=X,c(r.object)),V=d(S,z,B,G),V&&g(S,z,B,G),G!==null&&t.update(G,n.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,_(S,L,B,z),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function h(S,L,B){const z=B.wireframe===!0;let G=i[S.id];G===void 0&&(G={},i[S.id]=G);let V=G[L.id];V===void 0&&(V={},G[L.id]=V);let X=V[z];return X===void 0&&(X=p(l()),V[z]=X),X}function p(S){const L=[],B=[],z=[];for(let G=0;G<e;G++)L[G]=0,B[G]=0,z[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:B,attributeDivisors:z,object:S,attributes:{},index:null}}function d(S,L,B,z){const G=r.attributes,V=L.attributes;let X=0;const K=B.getAttributes();for(const U in K)if(K[U].location>=0){const ft=G[U];let yt=V[U];if(yt===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&(yt=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&(yt=S.instanceColor)),ft===void 0||ft.attribute!==yt||yt&&ft.data!==yt.data)return!0;X++}return r.attributesNum!==X||r.index!==z}function g(S,L,B,z){const G={},V=L.attributes;let X=0;const K=B.getAttributes();for(const U in K)if(K[U].location>=0){let ft=V[U];ft===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&(ft=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&(ft=S.instanceColor));const yt={};yt.attribute=ft,ft&&ft.data&&(yt.data=ft.data),G[U]=yt,X++}r.attributes=G,r.attributesNum=X,r.index=z}function v(){const S=r.newAttributes;for(let L=0,B=S.length;L<B;L++)S[L]=0}function m(S){f(S,0)}function f(S,L){const B=r.newAttributes,z=r.enabledAttributes,G=r.attributeDivisors;B[S]=1,z[S]===0&&(n.enableVertexAttribArray(S),z[S]=1),G[S]!==L&&(n.vertexAttribDivisor(S,L),G[S]=L)}function w(){const S=r.newAttributes,L=r.enabledAttributes;for(let B=0,z=L.length;B<z;B++)L[B]!==S[B]&&(n.disableVertexAttribArray(B),L[B]=0)}function x(S,L,B,z,G,V,X){X===!0?n.vertexAttribIPointer(S,L,B,G,V):n.vertexAttribPointer(S,L,B,z,G,V)}function _(S,L,B,z){v();const G=z.attributes,V=B.getAttributes(),X=L.defaultAttributeValues;for(const K in V){const U=V[K];if(U.location>=0){let st=G[K];if(st===void 0&&(K==="instanceMatrix"&&S.instanceMatrix&&(st=S.instanceMatrix),K==="instanceColor"&&S.instanceColor&&(st=S.instanceColor)),st!==void 0){const ft=st.normalized,yt=st.itemSize,It=t.get(st);if(It===void 0)continue;const kt=It.buffer,ie=It.type,jt=It.bytesPerElement,Z=ie===n.INT||ie===n.UNSIGNED_INT||st.gpuType===Zc;if(st.isInterleavedBufferAttribute){const $=st.data,xt=$.stride,Tt=st.offset;if($.isInstancedInterleavedBuffer){for(let St=0;St<U.locationSize;St++)f(U.location+St,$.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let St=0;St<U.locationSize;St++)m(U.location+St);n.bindBuffer(n.ARRAY_BUFFER,kt);for(let St=0;St<U.locationSize;St++)x(U.location+St,yt/U.locationSize,ie,ft,xt*jt,(Tt+yt/U.locationSize*St)*jt,Z)}else{if(st.isInstancedBufferAttribute){for(let $=0;$<U.locationSize;$++)f(U.location+$,st.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let $=0;$<U.locationSize;$++)m(U.location+$);n.bindBuffer(n.ARRAY_BUFFER,kt);for(let $=0;$<U.locationSize;$++)x(U.location+$,yt/U.locationSize,ie,ft,yt*jt,yt/U.locationSize*$*jt,Z)}}else if(X!==void 0){const ft=X[K];if(ft!==void 0)switch(ft.length){case 2:n.vertexAttrib2fv(U.location,ft);break;case 3:n.vertexAttrib3fv(U.location,ft);break;case 4:n.vertexAttrib4fv(U.location,ft);break;default:n.vertexAttrib1fv(U.location,ft)}}}}w()}function A(){D();for(const S in i){const L=i[S];for(const B in L){const z=L[B];for(const G in z)u(z[G].object),delete z[G];delete L[B]}delete i[S]}}function P(S){if(i[S.id]===void 0)return;const L=i[S.id];for(const B in L){const z=L[B];for(const G in z)u(z[G].object),delete z[G];delete L[B]}delete i[S.id]}function R(S){for(const L in i){const B=i[L];if(B[S.id]===void 0)continue;const z=B[S.id];for(const G in z)u(z[G].object),delete z[G];delete B[S.id]}}function D(){M(),o=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:P,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:w}}function j_(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),e.update(u,i,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];e.update(d,i,1)}function l(c,u,h,p){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],p[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,p,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*p[v];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function K_(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Gn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const D=R===po&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==ei&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Qn&&!D)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:p,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:w,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:A,maxSamples:P}}function Q_(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new Di,a=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const d=h.length!==0||p||i!==0||s;return s=p,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,p){e=u(h,p,0)},this.setState=function(h,p,d){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,f=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const w=r?0:i,x=w*4;let _=f.clippingState||null;l.value=_,_=u(g,p,x,d);for(let A=0;A!==x;++A)_[A]=e[A];f.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,p,d,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const f=d+v*4,w=p.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,_=d;x!==v;++x,_+=4)o.copy(h[x]).applyMatrix4(w,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function $_(n){let t=new WeakMap;function e(o,a){return a===Jl?o.mapping=hr:a===tc&&(o.mapping=dr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Jl||a===tc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new c0(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}const Ks=4,Uh=[.125,.215,.35,.446,.526,.582],ls=20,Il=new ff,Nh=new Ht;let Ul=null,Nl=0,Fl=0,Ol=!1;const ss=(1+Math.sqrt(5))/2,Ys=1/ss,Fh=[new T(-ss,Ys,0),new T(ss,Ys,0),new T(-Ys,0,ss),new T(Ys,0,ss),new T(0,ss,-Ys),new T(0,ss,Ys),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)],J_=new T;class Oh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100,r={}){const{size:o=256,position:a=J_}=r;Ul=this._renderer.getRenderTarget(),Nl=this._renderer.getActiveCubeFace(),Fl=this._renderer.getActiveMipmapLevel(),Ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ul,Nl,Fl),this._renderer.xr.enabled=Ol,t.scissorTest=!1,oa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===hr||t.mapping===dr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ul=this._renderer.getRenderTarget(),Nl=this._renderer.getActiveCubeFace(),Fl=this._renderer.getActiveMipmapLevel(),Ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:po,format:Gn,colorSpace:fr,depthBuffer:!1},s=Bh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bh(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ty(r)),this._blurMaterial=ey(r,t,e)}return s}_compileMaterial(t){const e=new bt(this._lodPlanes[0],t);this._renderer.compile(e,Il)}_sceneToCubeUV(t,e,i,s,r){const l=new cn(90,1,e,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,d=h.toneMapping;h.getClearColor(Nh),h.toneMapping=ki,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));const v=new Be({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),m=new bt(new _n,v);let f=!1;const w=t.background;w?w.isColor&&(v.color.copy(w),t.background=null,f=!0):(v.color.copy(Nh),f=!0);for(let x=0;x<6;x++){const _=x%3;_===0?(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[x],r.y,r.z)):_===1?(l.up.set(0,0,c[x]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[x],r.z)):(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[x]));const A=this._cubeSize;oa(s,_*A,x>2?A:0,A,A),h.setRenderTarget(s),f&&h.render(m,l),h.render(t,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=p,t.background=w}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===hr||t.mapping===dr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=zh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new bt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;oa(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Il)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Fh[(s-r-1)%Fh.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new bt(this._lodPlanes[s],c),p=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ls-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):ls;m>ls&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ls}`);const f=[];let w=0;for(let R=0;R<ls;++R){const D=R/v,M=Math.exp(-D*D/2);f.push(M),R===0?w+=M:R<m&&(w+=2*M)}for(let R=0;R<f.length;R++)f[R]=f[R]/w;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=f,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:x}=this;p.dTheta.value=g,p.mipInt.value=x-i;const _=this._sizeLods[s],A=3*_*(s>x-Ks?s-x+Ks:0),P=4*(this._cubeSize-_);oa(e,A,P,3*_,2*_),l.setRenderTarget(e),l.render(h,Il)}}function ty(n){const t=[],e=[],i=[];let s=n;const r=n-Ks+1+Uh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Ks?l=Uh[o-n+Ks-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,p=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,v=3,m=2,f=1,w=new Float32Array(v*g*d),x=new Float32Array(m*g*d),_=new Float32Array(f*g*d);for(let P=0;P<d;P++){const R=P%3*2/3-1,D=P>2?0:-1,M=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];w.set(M,v*g*P),x.set(p,m*g*P);const S=[P,P,P,P,P,P];_.set(S,f*g*P)}const A=new Ie;A.setAttribute("position",new Sn(w,v)),A.setAttribute("uv",new Sn(x,m)),A.setAttribute("faceIndex",new Sn(_,f)),t.push(A),s>Ks&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Bh(n,t,e){const i=new xs(n,t,e);return i.texture.mapping=Ba,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function oa(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function ey(n,t,e){const i=new Float32Array(ls),s=new T(0,1,0);return new ii({name:"SphericalGaussianBlur",defines:{n:ls,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function kh(){return new ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uu(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function zh(){return new ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function uu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ny(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Jl||l===tc,u=l===hr||l===dr;if(c||u){let h=t.get(a);const p=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new Oh(n)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(e===null&&(e=new Oh(n)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function iy(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&so("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function sy(n,t,e,i){const s={},r=new WeakMap;function o(h){const p=h.target;p.index!==null&&t.remove(p.index);for(const g in p.attributes)t.remove(p.attributes[g]);p.removeEventListener("dispose",o),delete s[p.id];const d=r.get(p);d&&(t.remove(d),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(h,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,e.memory.geometries++),p}function l(h){const p=h.attributes;for(const d in p)t.update(p[d],n.ARRAY_BUFFER)}function c(h){const p=[],d=h.index,g=h.attributes.position;let v=0;if(d!==null){const w=d.array;v=d.version;for(let x=0,_=w.length;x<_;x+=3){const A=w[x+0],P=w[x+1],R=w[x+2];p.push(A,P,P,R,R,A)}}else if(g!==void 0){const w=g.array;v=g.version;for(let x=0,_=w.length/3-1;x<_;x+=3){const A=x+0,P=x+1,R=x+2;p.push(A,P,P,R,R,A)}}else return;const m=new(zd(p)?Wd:Vd)(p,1);m.version=v;const f=r.get(h);f&&t.remove(f),r.set(h,m)}function u(h){const p=r.get(h);if(p){const d=h.index;d!==null&&p.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function ry(n,t,e){let i;function s(p){i=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function l(p,d){n.drawElements(i,d,r,p*o),e.update(d,i,1)}function c(p,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,p*o,g),e.update(d,i,g))}function u(p,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,p,0,g);let m=0;for(let f=0;f<g;f++)m+=d[f];e.update(m,i,1)}function h(p,d,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<p.length;f++)c(p[f]/o,d[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,p,0,v,0,g);let f=0;for(let w=0;w<g;w++)f+=d[w]*v[w];e.update(f,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function oy(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function ay(n,t,e){const i=new WeakMap,s=new _e;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let p=i.get(a);if(p===void 0||p.count!==h){let S=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var d=S;p!==void 0&&p.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),m===!0&&(_=3);let A=a.attributes.position.count*_,P=1;A>t.maxTextureSize&&(P=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const R=new Float32Array(A*P*4*h),D=new Gd(R,A,P,h);D.type=Qn,D.needsUpdate=!0;const M=_*4;for(let L=0;L<h;L++){const B=f[L],z=w[L],G=x[L],V=A*P*4*L;for(let X=0;X<B.count;X++){const K=X*M;g===!0&&(s.fromBufferAttribute(B,X),R[V+K+0]=s.x,R[V+K+1]=s.y,R[V+K+2]=s.z,R[V+K+3]=0),v===!0&&(s.fromBufferAttribute(z,X),R[V+K+4]=s.x,R[V+K+5]=s.y,R[V+K+6]=s.z,R[V+K+7]=0),m===!0&&(s.fromBufferAttribute(G,X),R[V+K+8]=s.x,R[V+K+9]=s.y,R[V+K+10]=s.z,R[V+K+11]=G.itemSize===4?s.w:1)}}p={count:h,texture:D,size:new et(A,P)},i.set(a,p),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:r}}function ly(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const mf=new Qe,Gh=new Jd(1,1),gf=new Gd,vf=new Xm,_f=new Yd,Hh=[],Vh=[],Wh=new Float32Array(16),qh=new Float32Array(9),Xh=new Float32Array(4);function _r(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Hh[s];if(r===void 0&&(r=new Float32Array(s),Hh[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function ke(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ze(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ha(n,t){let e=Vh[t];e===void 0&&(e=new Int32Array(t),Vh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function cy(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function uy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;n.uniform2fv(this.addr,t),ze(e,t)}}function hy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ke(e,t))return;n.uniform3fv(this.addr,t),ze(e,t)}}function dy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;n.uniform4fv(this.addr,t),ze(e,t)}}function fy(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(ke(e,i))return;Xh.set(i),n.uniformMatrix2fv(this.addr,!1,Xh),ze(e,i)}}function py(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(ke(e,i))return;qh.set(i),n.uniformMatrix3fv(this.addr,!1,qh),ze(e,i)}}function my(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(ke(e,i))return;Wh.set(i),n.uniformMatrix4fv(this.addr,!1,Wh),ze(e,i)}}function gy(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function vy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;n.uniform2iv(this.addr,t),ze(e,t)}}function _y(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;n.uniform3iv(this.addr,t),ze(e,t)}}function yy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;n.uniform4iv(this.addr,t),ze(e,t)}}function xy(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Sy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;n.uniform2uiv(this.addr,t),ze(e,t)}}function My(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;n.uniform3uiv(this.addr,t),ze(e,t)}}function wy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;n.uniform4uiv(this.addr,t),ze(e,t)}}function Ey(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Gh.compareFunction=kd,r=Gh):r=mf,e.setTexture2D(t||r,s)}function by(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||vf,s)}function Ty(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||_f,s)}function Ay(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||gf,s)}function Py(n){switch(n){case 5126:return cy;case 35664:return uy;case 35665:return hy;case 35666:return dy;case 35674:return fy;case 35675:return py;case 35676:return my;case 5124:case 35670:return gy;case 35667:case 35671:return vy;case 35668:case 35672:return _y;case 35669:case 35673:return yy;case 5125:return xy;case 36294:return Sy;case 36295:return My;case 36296:return wy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ey;case 35679:case 36299:case 36307:return by;case 35680:case 36300:case 36308:case 36293:return Ty;case 36289:case 36303:case 36311:case 36292:return Ay}}function Ry(n,t){n.uniform1fv(this.addr,t)}function Cy(n,t){const e=_r(t,this.size,2);n.uniform2fv(this.addr,e)}function Ly(n,t){const e=_r(t,this.size,3);n.uniform3fv(this.addr,e)}function Dy(n,t){const e=_r(t,this.size,4);n.uniform4fv(this.addr,e)}function Iy(n,t){const e=_r(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Uy(n,t){const e=_r(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Ny(n,t){const e=_r(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Fy(n,t){n.uniform1iv(this.addr,t)}function Oy(n,t){n.uniform2iv(this.addr,t)}function By(n,t){n.uniform3iv(this.addr,t)}function ky(n,t){n.uniform4iv(this.addr,t)}function zy(n,t){n.uniform1uiv(this.addr,t)}function Gy(n,t){n.uniform2uiv(this.addr,t)}function Hy(n,t){n.uniform3uiv(this.addr,t)}function Vy(n,t){n.uniform4uiv(this.addr,t)}function Wy(n,t,e){const i=this.cache,s=t.length,r=Ha(e,s);ke(i,r)||(n.uniform1iv(this.addr,r),ze(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||mf,r[o])}function qy(n,t,e){const i=this.cache,s=t.length,r=Ha(e,s);ke(i,r)||(n.uniform1iv(this.addr,r),ze(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||vf,r[o])}function Xy(n,t,e){const i=this.cache,s=t.length,r=Ha(e,s);ke(i,r)||(n.uniform1iv(this.addr,r),ze(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||_f,r[o])}function Yy(n,t,e){const i=this.cache,s=t.length,r=Ha(e,s);ke(i,r)||(n.uniform1iv(this.addr,r),ze(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||gf,r[o])}function Zy(n){switch(n){case 5126:return Ry;case 35664:return Cy;case 35665:return Ly;case 35666:return Dy;case 35674:return Iy;case 35675:return Uy;case 35676:return Ny;case 5124:case 35670:return Fy;case 35667:case 35671:return Oy;case 35668:case 35672:return By;case 35669:case 35673:return ky;case 5125:return zy;case 36294:return Gy;case 36295:return Hy;case 36296:return Vy;case 35678:case 36198:case 36298:case 36306:case 35682:return Wy;case 35679:case 36299:case 36307:return qy;case 35680:case 36300:case 36308:case 36293:return Xy;case 36289:case 36303:case 36311:case 36292:return Yy}}class jy{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Py(e.type)}}class Ky{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Zy(e.type)}}class Qy{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const Bl=/(\w+)(\])?(\[|\.)?/g;function Yh(n,t){n.seq.push(t),n.map[t.id]=t}function $y(n,t,e){const i=n.name,s=i.length;for(Bl.lastIndex=0;;){const r=Bl.exec(i),o=Bl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Yh(e,c===void 0?new jy(a,n,t):new Ky(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new Qy(a),Yh(e,h)),e=h}}}class ga{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);$y(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function Zh(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Jy=37297;let tx=0;function ex(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const jh=new Yt;function nx(n){re._getMatrix(jh,re.workingColorSpace,n);const t=`mat3( ${jh.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(n)){case Sa:return[t,"LinearTransferOETF"];case ge:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Kh(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+ex(n.getShaderSource(t),a)}else return r}function ix(n,t){const e=nx(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function sx(n,t){let e;switch(t){case rm:e="Linear";break;case om:e="Reinhard";break;case am:e="Cineon";break;case Yc:e="ACESFilmic";break;case cm:e="AgX";break;case um:e="Neutral";break;case lm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const aa=new T;function rx(){re.getLuminanceCoefficients(aa);const n=aa.x.toFixed(4),t=aa.y.toFixed(4),e=aa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ox(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wr).join(`
`)}function ax(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function lx(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Wr(n){return n!==""}function Qh(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $h(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const cx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bc(n){return n.replace(cx,hx)}const ux=new Map;function hx(n,t){let e=Kt[t];if(e===void 0){const i=ux.get(t);if(i!==void 0)e=Kt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Bc(e)}const dx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jh(n){return n.replace(dx,fx)}function fx(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function td(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function px(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Pd?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Bp?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===di&&(t="SHADOWMAP_TYPE_VSM"),t}function mx(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case hr:case dr:t="ENVMAP_TYPE_CUBE";break;case Ba:t="ENVMAP_TYPE_CUBE_UV";break}return t}function gx(n){let t="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===dr&&(t="ENVMAP_MODE_REFRACTION"),t}function vx(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Rd:t="ENVMAP_BLENDING_MULTIPLY";break;case im:t="ENVMAP_BLENDING_MIX";break;case sm:t="ENVMAP_BLENDING_ADD";break}return t}function _x(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function yx(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=px(e),c=mx(e),u=gx(e),h=vx(e),p=_x(e),d=ox(e),g=ax(r),v=s.createProgram();let m,f,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Wr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Wr).join(`
`),f.length>0&&(f+=`
`)):(m=[td(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wr).join(`
`),f=[td(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ki?"#define TONE_MAPPING":"",e.toneMapping!==ki?Kt.tonemapping_pars_fragment:"",e.toneMapping!==ki?sx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,ix("linearToOutputTexel",e.outputColorSpace),rx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Wr).join(`
`)),o=Bc(o),o=Qh(o,e),o=$h(o,e),a=Bc(a),a=Qh(a,e),a=$h(a,e),o=Jh(o),a=Jh(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===qu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===qu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=w+m+o,_=w+f+a,A=Zh(s,s.VERTEX_SHADER,x),P=Zh(s,s.FRAGMENT_SHADER,_);s.attachShader(v,A),s.attachShader(v,P),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(L){if(n.debug.checkShaderErrors){const B=s.getProgramInfoLog(v)||"",z=s.getShaderInfoLog(A)||"",G=s.getShaderInfoLog(P)||"",V=B.trim(),X=z.trim(),K=G.trim();let U=!0,st=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(U=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,A,P);else{const ft=Kh(s,A,"vertex"),yt=Kh(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+V+`
`+ft+`
`+yt)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(X===""||K==="")&&(st=!1);st&&(L.diagnostics={runnable:U,programLog:V,vertexShader:{log:X,prefix:m},fragmentShader:{log:K,prefix:f}})}s.deleteShader(A),s.deleteShader(P),D=new ga(s,v),M=lx(s,v)}let D;this.getUniforms=function(){return D===void 0&&R(this),D};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(v,Jy)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=tx++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=P,this}let xx=0;class Sx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Mx(t),e.set(t,i)),i}}class Mx{constructor(t){this.id=xx++,this.code=t,this.usedTimes=0}}function wx(n,t,e,i,s,r,o){const a=new iu,l=new Sx,c=new Set,u=[],h=s.logarithmicDepthBuffer,p=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,S,L,B,z){const G=B.fog,V=z.geometry,X=M.isMeshStandardMaterial?B.environment:null,K=(M.isMeshStandardMaterial?e:t).get(M.envMap||X),U=K&&K.mapping===Ba?K.image.height:null,st=g[M.type];M.precision!==null&&(d=s.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const ft=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,yt=ft!==void 0?ft.length:0;let It=0;V.morphAttributes.position!==void 0&&(It=1),V.morphAttributes.normal!==void 0&&(It=2),V.morphAttributes.color!==void 0&&(It=3);let kt,ie,jt,Z;if(st){const ce=Yn[st];kt=ce.vertexShader,ie=ce.fragmentShader}else kt=M.vertexShader,ie=M.fragmentShader,l.update(M),jt=l.getVertexShaderID(M),Z=l.getFragmentShaderID(M);const $=n.getRenderTarget(),xt=n.state.buffers.depth.getReversed(),Tt=z.isInstancedMesh===!0,St=z.isBatchedMesh===!0,Qt=!!M.map,pe=!!M.matcap,C=!!K,tt=!!M.aoMap,Q=!!M.lightMap,j=!!M.bumpMap,k=!!M.normalMap,lt=!!M.displacementMap,it=!!M.emissiveMap,ct=!!M.metalnessMap,Ot=!!M.roughnessMap,Dt=M.anisotropy>0,b=M.clearcoat>0,y=M.dispersion>0,O=M.iridescence>0,q=M.sheen>0,nt=M.transmission>0,Y=Dt&&!!M.anisotropyMap,Ct=b&&!!M.clearcoatMap,ht=b&&!!M.clearcoatNormalMap,At=b&&!!M.clearcoatRoughnessMap,Pt=O&&!!M.iridescenceMap,rt=O&&!!M.iridescenceThicknessMap,vt=q&&!!M.sheenColorMap,zt=q&&!!M.sheenRoughnessMap,Lt=!!M.specularMap,mt=!!M.specularColorMap,Xt=!!M.specularIntensityMap,I=nt&&!!M.transmissionMap,ut=nt&&!!M.thicknessMap,dt=!!M.gradientMap,wt=!!M.alphaMap,ot=M.alphaTest>0,J=!!M.alphaHash,Rt=!!M.extensions;let Vt=ki;M.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Vt=n.toneMapping);const Me={shaderID:st,shaderType:M.type,shaderName:M.name,vertexShader:kt,fragmentShader:ie,defines:M.defines,customVertexShaderID:jt,customFragmentShaderID:Z,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:St,batchingColor:St&&z._colorsTexture!==null,instancing:Tt,instancingColor:Tt&&z.instanceColor!==null,instancingMorph:Tt&&z.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:$===null?n.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:fr,alphaToCoverage:!!M.alphaToCoverage,map:Qt,matcap:pe,envMap:C,envMapMode:C&&K.mapping,envMapCubeUVHeight:U,aoMap:tt,lightMap:Q,bumpMap:j,normalMap:k,displacementMap:p&&lt,emissiveMap:it,normalMapObjectSpace:k&&M.normalMapType===pm,normalMapTangentSpace:k&&M.normalMapType===Bd,metalnessMap:ct,roughnessMap:Ot,anisotropy:Dt,anisotropyMap:Y,clearcoat:b,clearcoatMap:Ct,clearcoatNormalMap:ht,clearcoatRoughnessMap:At,dispersion:y,iridescence:O,iridescenceMap:Pt,iridescenceThicknessMap:rt,sheen:q,sheenColorMap:vt,sheenRoughnessMap:zt,specularMap:Lt,specularColorMap:mt,specularIntensityMap:Xt,transmission:nt,transmissionMap:I,thicknessMap:ut,gradientMap:dt,opaque:M.transparent===!1&&M.blending===ds&&M.alphaToCoverage===!1,alphaMap:wt,alphaTest:ot,alphaHash:J,combine:M.combine,mapUv:Qt&&v(M.map.channel),aoMapUv:tt&&v(M.aoMap.channel),lightMapUv:Q&&v(M.lightMap.channel),bumpMapUv:j&&v(M.bumpMap.channel),normalMapUv:k&&v(M.normalMap.channel),displacementMapUv:lt&&v(M.displacementMap.channel),emissiveMapUv:it&&v(M.emissiveMap.channel),metalnessMapUv:ct&&v(M.metalnessMap.channel),roughnessMapUv:Ot&&v(M.roughnessMap.channel),anisotropyMapUv:Y&&v(M.anisotropyMap.channel),clearcoatMapUv:Ct&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:ht&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:vt&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:zt&&v(M.sheenRoughnessMap.channel),specularMapUv:Lt&&v(M.specularMap.channel),specularColorMapUv:mt&&v(M.specularColorMap.channel),specularIntensityMapUv:Xt&&v(M.specularIntensityMap.channel),transmissionMapUv:I&&v(M.transmissionMap.channel),thicknessMapUv:ut&&v(M.thicknessMap.channel),alphaMapUv:wt&&v(M.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(k||Dt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!V.attributes.uv&&(Qt||wt),fog:!!G,useFog:M.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:xt,skinning:z.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:It,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Vt,decodeVideoTexture:Qt&&M.map.isVideoTexture===!0&&re.getTransfer(M.map.colorSpace)===ge,decodeVideoTextureEmissive:it&&M.emissiveMap.isVideoTexture===!0&&re.getTransfer(M.emissiveMap.colorSpace)===ge,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Fe,flipSided:M.side===un,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Rt&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Rt&&M.extensions.multiDraw===!0||St)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Me.vertexUv1s=c.has(1),Me.vertexUv2s=c.has(2),Me.vertexUv3s=c.has(3),c.clear(),Me}function f(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)S.push(L),S.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(w(S,M),x(S,M),S.push(n.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function w(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function x(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),M.push(a.mask)}function _(M){const S=g[M.type];let L;if(S){const B=Yn[S];L=r0.clone(B.uniforms)}else L=M.uniforms;return L}function A(M,S){let L;for(let B=0,z=u.length;B<z;B++){const G=u[B];if(G.cacheKey===S){L=G,++L.usedTimes;break}}return L===void 0&&(L=new yx(n,S,M,r),u.push(L)),L}function P(M){if(--M.usedTimes===0){const S=u.indexOf(M);u[S]=u[u.length-1],u.pop(),M.destroy()}}function R(M){l.remove(M)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:_,acquireProgram:A,releaseProgram:P,releaseShaderCache:R,programs:u,dispose:D}}function Ex(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function bx(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function ed(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function nd(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h,p,d,g,v,m){let f=n[t];return f===void 0?(f={id:h.id,object:h,geometry:p,material:d,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},n[t]=f):(f.id=h.id,f.object=h,f.geometry=p,f.material=d,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=v,f.group=m),t++,f}function a(h,p,d,g,v,m){const f=o(h,p,d,g,v,m);d.transmission>0?i.push(f):d.transparent===!0?s.push(f):e.push(f)}function l(h,p,d,g,v,m){const f=o(h,p,d,g,v,m);d.transmission>0?i.unshift(f):d.transparent===!0?s.unshift(f):e.unshift(f)}function c(h,p){e.length>1&&e.sort(h||bx),i.length>1&&i.sort(p||ed),s.length>1&&s.sort(p||ed)}function u(){for(let h=t,p=n.length;h<p;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Tx(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new nd,n.set(i,[o])):s>=r.length?(o=new nd,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Ax(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new Ht};break;case"SpotLight":e={position:new T,direction:new T,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new T,halfWidth:new T,halfHeight:new T};break}return n[t.id]=e,e}}}function Px(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Rx=0;function Cx(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Lx(n){const t=new Ax,e=Px(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new T);const s=new T,r=new he,o=new he;function a(c){let u=0,h=0,p=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let d=0,g=0,v=0,m=0,f=0,w=0,x=0,_=0,A=0,P=0,R=0;c.sort(Cx);for(let M=0,S=c.length;M<S;M++){const L=c[M],B=L.color,z=L.intensity,G=L.distance,V=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=B.r*z,h+=B.g*z,p+=B.b*z;else if(L.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(L.sh.coefficients[X],z);R++}else if(L.isDirectionalLight){const X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const K=L.shadow,U=e.get(L);U.shadowIntensity=K.intensity,U.shadowBias=K.bias,U.shadowNormalBias=K.normalBias,U.shadowRadius=K.radius,U.shadowMapSize=K.mapSize,i.directionalShadow[d]=U,i.directionalShadowMap[d]=V,i.directionalShadowMatrix[d]=L.shadow.matrix,w++}i.directional[d]=X,d++}else if(L.isSpotLight){const X=t.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(B).multiplyScalar(z),X.distance=G,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,i.spot[v]=X;const K=L.shadow;if(L.map&&(i.spotLightMap[A]=L.map,A++,K.updateMatrices(L),L.castShadow&&P++),i.spotLightMatrix[v]=K.matrix,L.castShadow){const U=e.get(L);U.shadowIntensity=K.intensity,U.shadowBias=K.bias,U.shadowNormalBias=K.normalBias,U.shadowRadius=K.radius,U.shadowMapSize=K.mapSize,i.spotShadow[v]=U,i.spotShadowMap[v]=V,_++}v++}else if(L.isRectAreaLight){const X=t.get(L);X.color.copy(B).multiplyScalar(z),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=X,m++}else if(L.isPointLight){const X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){const K=L.shadow,U=e.get(L);U.shadowIntensity=K.intensity,U.shadowBias=K.bias,U.shadowNormalBias=K.normalBias,U.shadowRadius=K.radius,U.shadowMapSize=K.mapSize,U.shadowCameraNear=K.camera.near,U.shadowCameraFar=K.camera.far,i.pointShadow[g]=U,i.pointShadowMap[g]=V,i.pointShadowMatrix[g]=L.shadow.matrix,x++}i.point[g]=X,g++}else if(L.isHemisphereLight){const X=t.get(L);X.skyColor.copy(L.color).multiplyScalar(z),X.groundColor.copy(L.groundColor).multiplyScalar(z),i.hemi[f]=X,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pt.LTC_FLOAT_1,i.rectAreaLTC2=pt.LTC_FLOAT_2):(i.rectAreaLTC1=pt.LTC_HALF_1,i.rectAreaLTC2=pt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=p;const D=i.hash;(D.directionalLength!==d||D.pointLength!==g||D.spotLength!==v||D.rectAreaLength!==m||D.hemiLength!==f||D.numDirectionalShadows!==w||D.numPointShadows!==x||D.numSpotShadows!==_||D.numSpotMaps!==A||D.numLightProbes!==R)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=_+A-P,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=R,D.directionalLength=d,D.pointLength=g,D.spotLength=v,D.rectAreaLength=m,D.hemiLength=f,D.numDirectionalShadows=w,D.numPointShadows=x,D.numSpotShadows=_,D.numSpotMaps=A,D.numLightProbes=R,i.version=Rx++)}function l(c,u){let h=0,p=0,d=0,g=0,v=0;const m=u.matrixWorldInverse;for(let f=0,w=c.length;f<w;f++){const x=c[f];if(x.isDirectionalLight){const _=i.directional[h];_.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),h++}else if(x.isSpotLight){const _=i.spot[d];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),d++}else if(x.isRectAreaLight){const _=i.rectArea[g];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const _=i.point[p];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),p++}else if(x.isHemisphereLight){const _=i.hemi[v];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function id(n){const t=new Lx(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Dx(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new id(n),t.set(s,[a])):r>=o.length?(a=new id(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const Ix=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ux=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Nx(n,t,e){let i=new ru;const s=new et,r=new et,o=new _e,a=new J0({depthPacking:fm}),l=new tg,c={},u=e.maxTextureSize,h={[Vi]:un,[un]:Vi,[Fe]:Fe},p=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:Ix,fragmentShader:Ux}),d=p.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ie;g.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new bt(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pd;let f=this.type;this.render=function(P,R,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const M=n.getRenderTarget(),S=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),B=n.state;B.setBlending(Bi),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const z=f!==di&&this.type===di,G=f===di&&this.type!==di;for(let V=0,X=P.length;V<X;V++){const K=P[V],U=K.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);const st=U.getFrameExtents();if(s.multiply(st),r.copy(U.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/st.x),s.x=r.x*st.x,U.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/st.y),s.y=r.y*st.y,U.mapSize.y=r.y)),U.map===null||z===!0||G===!0){const yt=this.type!==di?{minFilter:xn,magFilter:xn}:{};U.map!==null&&U.map.dispose(),U.map=new xs(s.x,s.y,yt),U.map.texture.name=K.name+".shadowMap",U.camera.updateProjectionMatrix()}n.setRenderTarget(U.map),n.clear();const ft=U.getViewportCount();for(let yt=0;yt<ft;yt++){const It=U.getViewport(yt);o.set(r.x*It.x,r.y*It.y,r.x*It.z,r.y*It.w),B.viewport(o),U.updateMatrices(K,yt),i=U.getFrustum(),_(R,D,U.camera,K,this.type)}U.isPointLightShadow!==!0&&this.type===di&&w(U,D),U.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(M,S,L)};function w(P,R){const D=t.update(v);p.defines.VSM_SAMPLES!==P.blurSamples&&(p.defines.VSM_SAMPLES=P.blurSamples,d.defines.VSM_SAMPLES=P.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new xs(s.x,s.y)),p.uniforms.shadow_pass.value=P.map.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(R,null,D,p,v,null),d.uniforms.shadow_pass.value=P.mapPass.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(R,null,D,d,v,null)}function x(P,R,D,M){let S=null;const L=D.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(L!==void 0)S=L;else if(S=D.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const B=S.uuid,z=R.uuid;let G=c[B];G===void 0&&(G={},c[B]=G);let V=G[z];V===void 0&&(V=S.clone(),G[z]=V,R.addEventListener("dispose",A)),S=V}if(S.visible=R.visible,S.wireframe=R.wireframe,M===di?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:h[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const B=n.properties.get(S);B.light=D}return S}function _(P,R,D,M,S){if(P.visible===!1)return;if(P.layers.test(R.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&S===di)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,P.matrixWorld);const z=t.update(P),G=P.material;if(Array.isArray(G)){const V=z.groups;for(let X=0,K=V.length;X<K;X++){const U=V[X],st=G[U.materialIndex];if(st&&st.visible){const ft=x(P,st,M,S);P.onBeforeShadow(n,P,R,D,z,ft,U),n.renderBufferDirect(D,null,z,ft,P,U),P.onAfterShadow(n,P,R,D,z,ft,U)}}}else if(G.visible){const V=x(P,G,M,S);P.onBeforeShadow(n,P,R,D,z,V,null),n.renderBufferDirect(D,null,z,V,P,null),P.onAfterShadow(n,P,R,D,z,V,null)}}const B=P.children;for(let z=0,G=B.length;z<G;z++)_(B[z],R,D,M,S)}function A(P){P.target.removeEventListener("dispose",A);for(const D in c){const M=c[D],S=P.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const Fx={[Xl]:Yl,[Zl]:Ql,[jl]:$l,[ur]:Kl,[Yl]:Xl,[Ql]:Zl,[$l]:jl,[Kl]:ur};function Ox(n,t){function e(){let I=!1;const ut=new _e;let dt=null;const wt=new _e(0,0,0,0);return{setMask:function(ot){dt!==ot&&!I&&(n.colorMask(ot,ot,ot,ot),dt=ot)},setLocked:function(ot){I=ot},setClear:function(ot,J,Rt,Vt,Me){Me===!0&&(ot*=Vt,J*=Vt,Rt*=Vt),ut.set(ot,J,Rt,Vt),wt.equals(ut)===!1&&(n.clearColor(ot,J,Rt,Vt),wt.copy(ut))},reset:function(){I=!1,dt=null,wt.set(-1,0,0,0)}}}function i(){let I=!1,ut=!1,dt=null,wt=null,ot=null;return{setReversed:function(J){if(ut!==J){const Rt=t.get("EXT_clip_control");J?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),ut=J;const Vt=ot;ot=null,this.setClear(Vt)}},getReversed:function(){return ut},setTest:function(J){J?$(n.DEPTH_TEST):xt(n.DEPTH_TEST)},setMask:function(J){dt!==J&&!I&&(n.depthMask(J),dt=J)},setFunc:function(J){if(ut&&(J=Fx[J]),wt!==J){switch(J){case Xl:n.depthFunc(n.NEVER);break;case Yl:n.depthFunc(n.ALWAYS);break;case Zl:n.depthFunc(n.LESS);break;case ur:n.depthFunc(n.LEQUAL);break;case jl:n.depthFunc(n.EQUAL);break;case Kl:n.depthFunc(n.GEQUAL);break;case Ql:n.depthFunc(n.GREATER);break;case $l:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}wt=J}},setLocked:function(J){I=J},setClear:function(J){ot!==J&&(ut&&(J=1-J),n.clearDepth(J),ot=J)},reset:function(){I=!1,dt=null,wt=null,ot=null,ut=!1}}}function s(){let I=!1,ut=null,dt=null,wt=null,ot=null,J=null,Rt=null,Vt=null,Me=null;return{setTest:function(ce){I||(ce?$(n.STENCIL_TEST):xt(n.STENCIL_TEST))},setMask:function(ce){ut!==ce&&!I&&(n.stencilMask(ce),ut=ce)},setFunc:function(ce,oi,Xn){(dt!==ce||wt!==oi||ot!==Xn)&&(n.stencilFunc(ce,oi,Xn),dt=ce,wt=oi,ot=Xn)},setOp:function(ce,oi,Xn){(J!==ce||Rt!==oi||Vt!==Xn)&&(n.stencilOp(ce,oi,Xn),J=ce,Rt=oi,Vt=Xn)},setLocked:function(ce){I=ce},setClear:function(ce){Me!==ce&&(n.clearStencil(ce),Me=ce)},reset:function(){I=!1,ut=null,dt=null,wt=null,ot=null,J=null,Rt=null,Vt=null,Me=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},p=new WeakMap,d=[],g=null,v=!1,m=null,f=null,w=null,x=null,_=null,A=null,P=null,R=new Ht(0,0,0),D=0,M=!1,S=null,L=null,B=null,z=null,G=null;const V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,K=0;const U=n.getParameter(n.VERSION);U.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(U)[1]),X=K>=1):U.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),X=K>=2);let st=null,ft={};const yt=n.getParameter(n.SCISSOR_BOX),It=n.getParameter(n.VIEWPORT),kt=new _e().fromArray(yt),ie=new _e().fromArray(It);function jt(I,ut,dt,wt){const ot=new Uint8Array(4),J=n.createTexture();n.bindTexture(I,J),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Rt=0;Rt<dt;Rt++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(ut,0,n.RGBA,1,1,wt,0,n.RGBA,n.UNSIGNED_BYTE,ot):n.texImage2D(ut+Rt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ot);return J}const Z={};Z[n.TEXTURE_2D]=jt(n.TEXTURE_2D,n.TEXTURE_2D,1),Z[n.TEXTURE_CUBE_MAP]=jt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[n.TEXTURE_2D_ARRAY]=jt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Z[n.TEXTURE_3D]=jt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),$(n.DEPTH_TEST),o.setFunc(ur),j(!1),k(Gu),$(n.CULL_FACE),tt(Bi);function $(I){u[I]!==!0&&(n.enable(I),u[I]=!0)}function xt(I){u[I]!==!1&&(n.disable(I),u[I]=!1)}function Tt(I,ut){return h[I]!==ut?(n.bindFramebuffer(I,ut),h[I]=ut,I===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ut),I===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ut),!0):!1}function St(I,ut){let dt=d,wt=!1;if(I){dt=p.get(ut),dt===void 0&&(dt=[],p.set(ut,dt));const ot=I.textures;if(dt.length!==ot.length||dt[0]!==n.COLOR_ATTACHMENT0){for(let J=0,Rt=ot.length;J<Rt;J++)dt[J]=n.COLOR_ATTACHMENT0+J;dt.length=ot.length,wt=!0}}else dt[0]!==n.BACK&&(dt[0]=n.BACK,wt=!0);wt&&n.drawBuffers(dt)}function Qt(I){return g!==I?(n.useProgram(I),g=I,!0):!1}const pe={[as]:n.FUNC_ADD,[zp]:n.FUNC_SUBTRACT,[Gp]:n.FUNC_REVERSE_SUBTRACT};pe[Hp]=n.MIN,pe[Vp]=n.MAX;const C={[Wp]:n.ZERO,[qp]:n.ONE,[Xp]:n.SRC_COLOR,[Wl]:n.SRC_ALPHA,[$p]:n.SRC_ALPHA_SATURATE,[Kp]:n.DST_COLOR,[Zp]:n.DST_ALPHA,[Yp]:n.ONE_MINUS_SRC_COLOR,[ql]:n.ONE_MINUS_SRC_ALPHA,[Qp]:n.ONE_MINUS_DST_COLOR,[jp]:n.ONE_MINUS_DST_ALPHA,[Jp]:n.CONSTANT_COLOR,[tm]:n.ONE_MINUS_CONSTANT_COLOR,[em]:n.CONSTANT_ALPHA,[nm]:n.ONE_MINUS_CONSTANT_ALPHA};function tt(I,ut,dt,wt,ot,J,Rt,Vt,Me,ce){if(I===Bi){v===!0&&(xt(n.BLEND),v=!1);return}if(v===!1&&($(n.BLEND),v=!0),I!==kp){if(I!==m||ce!==M){if((f!==as||_!==as)&&(n.blendEquation(n.FUNC_ADD),f=as,_=as),ce)switch(I){case ds:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wi:n.blendFunc(n.ONE,n.ONE);break;case Hu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Vu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ds:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Hu:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vu:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}w=null,x=null,A=null,P=null,R.set(0,0,0),D=0,m=I,M=ce}return}ot=ot||ut,J=J||dt,Rt=Rt||wt,(ut!==f||ot!==_)&&(n.blendEquationSeparate(pe[ut],pe[ot]),f=ut,_=ot),(dt!==w||wt!==x||J!==A||Rt!==P)&&(n.blendFuncSeparate(C[dt],C[wt],C[J],C[Rt]),w=dt,x=wt,A=J,P=Rt),(Vt.equals(R)===!1||Me!==D)&&(n.blendColor(Vt.r,Vt.g,Vt.b,Me),R.copy(Vt),D=Me),m=I,M=!1}function Q(I,ut){I.side===Fe?xt(n.CULL_FACE):$(n.CULL_FACE);let dt=I.side===un;ut&&(dt=!dt),j(dt),I.blending===ds&&I.transparent===!1?tt(Bi):tt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const wt=I.stencilWrite;a.setTest(wt),wt&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),it(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?$(n.SAMPLE_ALPHA_TO_COVERAGE):xt(n.SAMPLE_ALPHA_TO_COVERAGE)}function j(I){S!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),S=I)}function k(I){I!==Fp?($(n.CULL_FACE),I!==L&&(I===Gu?n.cullFace(n.BACK):I===Op?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xt(n.CULL_FACE),L=I}function lt(I){I!==B&&(X&&n.lineWidth(I),B=I)}function it(I,ut,dt){I?($(n.POLYGON_OFFSET_FILL),(z!==ut||G!==dt)&&(n.polygonOffset(ut,dt),z=ut,G=dt)):xt(n.POLYGON_OFFSET_FILL)}function ct(I){I?$(n.SCISSOR_TEST):xt(n.SCISSOR_TEST)}function Ot(I){I===void 0&&(I=n.TEXTURE0+V-1),st!==I&&(n.activeTexture(I),st=I)}function Dt(I,ut,dt){dt===void 0&&(st===null?dt=n.TEXTURE0+V-1:dt=st);let wt=ft[dt];wt===void 0&&(wt={type:void 0,texture:void 0},ft[dt]=wt),(wt.type!==I||wt.texture!==ut)&&(st!==dt&&(n.activeTexture(dt),st=dt),n.bindTexture(I,ut||Z[I]),wt.type=I,wt.texture=ut)}function b(){const I=ft[st];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function y(){try{n.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function O(){try{n.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{n.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function nt(){try{n.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{n.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ct(){try{n.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ht(){try{n.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function At(){try{n.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pt(){try{n.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function rt(){try{n.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function vt(I){kt.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),kt.copy(I))}function zt(I){ie.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),ie.copy(I))}function Lt(I,ut){let dt=c.get(ut);dt===void 0&&(dt=new WeakMap,c.set(ut,dt));let wt=dt.get(I);wt===void 0&&(wt=n.getUniformBlockIndex(ut,I.name),dt.set(I,wt))}function mt(I,ut){const wt=c.get(ut).get(I);l.get(ut)!==wt&&(n.uniformBlockBinding(ut,wt,I.__bindingPointIndex),l.set(ut,wt))}function Xt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},st=null,ft={},h={},p=new WeakMap,d=[],g=null,v=!1,m=null,f=null,w=null,x=null,_=null,A=null,P=null,R=new Ht(0,0,0),D=0,M=!1,S=null,L=null,B=null,z=null,G=null,kt.set(0,0,n.canvas.width,n.canvas.height),ie.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:$,disable:xt,bindFramebuffer:Tt,drawBuffers:St,useProgram:Qt,setBlending:tt,setMaterial:Q,setFlipSided:j,setCullFace:k,setLineWidth:lt,setPolygonOffset:it,setScissorTest:ct,activeTexture:Ot,bindTexture:Dt,unbindTexture:b,compressedTexImage2D:y,compressedTexImage3D:O,texImage2D:Pt,texImage3D:rt,updateUBOMapping:Lt,uniformBlockBinding:mt,texStorage2D:ht,texStorage3D:At,texSubImage2D:q,texSubImage3D:nt,compressedTexSubImage2D:Y,compressedTexSubImage3D:Ct,scissor:vt,viewport:zt,reset:Xt}}function Bx(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,u=new WeakMap;let h;const p=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,y){return d?new OffscreenCanvas(b,y):wa("canvas")}function v(b,y,O){let q=1;const nt=Dt(b);if((nt.width>O||nt.height>O)&&(q=O/Math.max(nt.width,nt.height)),q<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Y=Math.floor(q*nt.width),Ct=Math.floor(q*nt.height);h===void 0&&(h=g(Y,Ct));const ht=y?g(Y,Ct):h;return ht.width=Y,ht.height=Ct,ht.getContext("2d").drawImage(b,0,0,Y,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+Y+"x"+Ct+")."),ht}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),b;return b}function m(b){return b.generateMipmaps}function f(b){n.generateMipmap(b)}function w(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(b,y,O,q,nt=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Y=y;if(y===n.RED&&(O===n.FLOAT&&(Y=n.R32F),O===n.HALF_FLOAT&&(Y=n.R16F),O===n.UNSIGNED_BYTE&&(Y=n.R8)),y===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(Y=n.R8UI),O===n.UNSIGNED_SHORT&&(Y=n.R16UI),O===n.UNSIGNED_INT&&(Y=n.R32UI),O===n.BYTE&&(Y=n.R8I),O===n.SHORT&&(Y=n.R16I),O===n.INT&&(Y=n.R32I)),y===n.RG&&(O===n.FLOAT&&(Y=n.RG32F),O===n.HALF_FLOAT&&(Y=n.RG16F),O===n.UNSIGNED_BYTE&&(Y=n.RG8)),y===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(Y=n.RG8UI),O===n.UNSIGNED_SHORT&&(Y=n.RG16UI),O===n.UNSIGNED_INT&&(Y=n.RG32UI),O===n.BYTE&&(Y=n.RG8I),O===n.SHORT&&(Y=n.RG16I),O===n.INT&&(Y=n.RG32I)),y===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),O===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),O===n.UNSIGNED_INT&&(Y=n.RGB32UI),O===n.BYTE&&(Y=n.RGB8I),O===n.SHORT&&(Y=n.RGB16I),O===n.INT&&(Y=n.RGB32I)),y===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),O===n.UNSIGNED_INT&&(Y=n.RGBA32UI),O===n.BYTE&&(Y=n.RGBA8I),O===n.SHORT&&(Y=n.RGBA16I),O===n.INT&&(Y=n.RGBA32I)),y===n.RGB&&(O===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),O===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),y===n.RGBA){const Ct=nt?Sa:re.getTransfer(q);O===n.FLOAT&&(Y=n.RGBA32F),O===n.HALF_FLOAT&&(Y=n.RGBA16F),O===n.UNSIGNED_BYTE&&(Y=Ct===ge?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function _(b,y){let O;return b?y===null||y===_s||y===to?O=n.DEPTH24_STENCIL8:y===Qn?O=n.DEPTH32F_STENCIL8:y===Jr&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===_s||y===to?O=n.DEPTH_COMPONENT24:y===Qn?O=n.DEPTH_COMPONENT32F:y===Jr&&(O=n.DEPTH_COMPONENT16),O}function A(b,y){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==xn&&b.minFilter!==zn?Math.log2(Math.max(y.width,y.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?y.mipmaps.length:1}function P(b){const y=b.target;y.removeEventListener("dispose",P),D(y),y.isVideoTexture&&u.delete(y)}function R(b){const y=b.target;y.removeEventListener("dispose",R),S(y)}function D(b){const y=i.get(b);if(y.__webglInit===void 0)return;const O=b.source,q=p.get(O);if(q){const nt=q[y.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&M(b),Object.keys(q).length===0&&p.delete(O)}i.remove(b)}function M(b){const y=i.get(b);n.deleteTexture(y.__webglTexture);const O=b.source,q=p.get(O);delete q[y.__cacheKey],o.memory.textures--}function S(b){const y=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(y.__webglFramebuffer[q]))for(let nt=0;nt<y.__webglFramebuffer[q].length;nt++)n.deleteFramebuffer(y.__webglFramebuffer[q][nt]);else n.deleteFramebuffer(y.__webglFramebuffer[q]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[q])}else{if(Array.isArray(y.__webglFramebuffer))for(let q=0;q<y.__webglFramebuffer.length;q++)n.deleteFramebuffer(y.__webglFramebuffer[q]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let q=0;q<y.__webglColorRenderbuffer.length;q++)y.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[q]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const O=b.textures;for(let q=0,nt=O.length;q<nt;q++){const Y=i.get(O[q]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(O[q])}i.remove(b)}let L=0;function B(){L=0}function z(){const b=L;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),L+=1,b}function G(b){const y=[];return y.push(b.wrapS),y.push(b.wrapT),y.push(b.wrapR||0),y.push(b.magFilter),y.push(b.minFilter),y.push(b.anisotropy),y.push(b.internalFormat),y.push(b.format),y.push(b.type),y.push(b.generateMipmaps),y.push(b.premultiplyAlpha),y.push(b.flipY),y.push(b.unpackAlignment),y.push(b.colorSpace),y.join()}function V(b,y){const O=i.get(b);if(b.isVideoTexture&&ct(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&O.__version!==b.version){const q=b.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(O,b,y);return}}else b.isExternalTexture&&(O.__webglTexture=b.sourceTexture?b.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+y)}function X(b,y){const O=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){Z(O,b,y);return}e.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+y)}function K(b,y){const O=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){Z(O,b,y);return}e.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+y)}function U(b,y){const O=i.get(b);if(b.version>0&&O.__version!==b.version){$(O,b,y);return}e.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+y)}const st={[ec]:n.REPEAT,[us]:n.CLAMP_TO_EDGE,[nc]:n.MIRRORED_REPEAT},ft={[xn]:n.NEAREST,[hm]:n.NEAREST_MIPMAP_NEAREST,[Co]:n.NEAREST_MIPMAP_LINEAR,[zn]:n.LINEAR,[il]:n.LINEAR_MIPMAP_NEAREST,[hs]:n.LINEAR_MIPMAP_LINEAR},yt={[mm]:n.NEVER,[Sm]:n.ALWAYS,[gm]:n.LESS,[kd]:n.LEQUAL,[vm]:n.EQUAL,[xm]:n.GEQUAL,[_m]:n.GREATER,[ym]:n.NOTEQUAL};function It(b,y){if(y.type===Qn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===zn||y.magFilter===il||y.magFilter===Co||y.magFilter===hs||y.minFilter===zn||y.minFilter===il||y.minFilter===Co||y.minFilter===hs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,st[y.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,st[y.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,st[y.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,ft[y.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,ft[y.minFilter]),y.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,yt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===xn||y.minFilter!==Co&&y.minFilter!==hs||y.type===Qn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");n.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function kt(b,y){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,y.addEventListener("dispose",P));const q=y.source;let nt=p.get(q);nt===void 0&&(nt={},p.set(q,nt));const Y=G(y);if(Y!==b.__cacheKey){nt[Y]===void 0&&(nt[Y]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),nt[Y].usedTimes++;const Ct=nt[b.__cacheKey];Ct!==void 0&&(nt[b.__cacheKey].usedTimes--,Ct.usedTimes===0&&M(y)),b.__cacheKey=Y,b.__webglTexture=nt[Y].texture}return O}function ie(b,y,O){return Math.floor(Math.floor(b/O)/y)}function jt(b,y,O,q){const Y=b.updateRanges;if(Y.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,O,q,y.data);else{Y.sort((rt,vt)=>rt.start-vt.start);let Ct=0;for(let rt=1;rt<Y.length;rt++){const vt=Y[Ct],zt=Y[rt],Lt=vt.start+vt.count,mt=ie(zt.start,y.width,4),Xt=ie(vt.start,y.width,4);zt.start<=Lt+1&&mt===Xt&&ie(zt.start+zt.count-1,y.width,4)===mt?vt.count=Math.max(vt.count,zt.start+zt.count-vt.start):(++Ct,Y[Ct]=zt)}Y.length=Ct+1;const ht=n.getParameter(n.UNPACK_ROW_LENGTH),At=n.getParameter(n.UNPACK_SKIP_PIXELS),Pt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let rt=0,vt=Y.length;rt<vt;rt++){const zt=Y[rt],Lt=Math.floor(zt.start/4),mt=Math.ceil(zt.count/4),Xt=Lt%y.width,I=Math.floor(Lt/y.width),ut=mt,dt=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Xt),n.pixelStorei(n.UNPACK_SKIP_ROWS,I),e.texSubImage2D(n.TEXTURE_2D,0,Xt,I,ut,dt,O,q,y.data)}b.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ht),n.pixelStorei(n.UNPACK_SKIP_PIXELS,At),n.pixelStorei(n.UNPACK_SKIP_ROWS,Pt)}}function Z(b,y,O){let q=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(q=n.TEXTURE_3D);const nt=kt(b,y),Y=y.source;e.bindTexture(q,b.__webglTexture,n.TEXTURE0+O);const Ct=i.get(Y);if(Y.version!==Ct.__version||nt===!0){e.activeTexture(n.TEXTURE0+O);const ht=re.getPrimaries(re.workingColorSpace),At=y.colorSpace===Ii?null:re.getPrimaries(y.colorSpace),Pt=y.colorSpace===Ii||ht===At?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let rt=v(y.image,!1,s.maxTextureSize);rt=Ot(y,rt);const vt=r.convert(y.format,y.colorSpace),zt=r.convert(y.type);let Lt=x(y.internalFormat,vt,zt,y.colorSpace,y.isVideoTexture);It(q,y);let mt;const Xt=y.mipmaps,I=y.isVideoTexture!==!0,ut=Ct.__version===void 0||nt===!0,dt=Y.dataReady,wt=A(y,rt);if(y.isDepthTexture)Lt=_(y.format===no,y.type),ut&&(I?e.texStorage2D(n.TEXTURE_2D,1,Lt,rt.width,rt.height):e.texImage2D(n.TEXTURE_2D,0,Lt,rt.width,rt.height,0,vt,zt,null));else if(y.isDataTexture)if(Xt.length>0){I&&ut&&e.texStorage2D(n.TEXTURE_2D,wt,Lt,Xt[0].width,Xt[0].height);for(let ot=0,J=Xt.length;ot<J;ot++)mt=Xt[ot],I?dt&&e.texSubImage2D(n.TEXTURE_2D,ot,0,0,mt.width,mt.height,vt,zt,mt.data):e.texImage2D(n.TEXTURE_2D,ot,Lt,mt.width,mt.height,0,vt,zt,mt.data);y.generateMipmaps=!1}else I?(ut&&e.texStorage2D(n.TEXTURE_2D,wt,Lt,rt.width,rt.height),dt&&jt(y,rt,vt,zt)):e.texImage2D(n.TEXTURE_2D,0,Lt,rt.width,rt.height,0,vt,zt,rt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){I&&ut&&e.texStorage3D(n.TEXTURE_2D_ARRAY,wt,Lt,Xt[0].width,Xt[0].height,rt.depth);for(let ot=0,J=Xt.length;ot<J;ot++)if(mt=Xt[ot],y.format!==Gn)if(vt!==null)if(I){if(dt)if(y.layerUpdates.size>0){const Rt=Ih(mt.width,mt.height,y.format,y.type);for(const Vt of y.layerUpdates){const Me=mt.data.subarray(Vt*Rt/mt.data.BYTES_PER_ELEMENT,(Vt+1)*Rt/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ot,0,0,Vt,mt.width,mt.height,1,vt,Me)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ot,0,0,0,mt.width,mt.height,rt.depth,vt,mt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ot,Lt,mt.width,mt.height,rt.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?dt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ot,0,0,0,mt.width,mt.height,rt.depth,vt,zt,mt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ot,Lt,mt.width,mt.height,rt.depth,0,vt,zt,mt.data)}else{I&&ut&&e.texStorage2D(n.TEXTURE_2D,wt,Lt,Xt[0].width,Xt[0].height);for(let ot=0,J=Xt.length;ot<J;ot++)mt=Xt[ot],y.format!==Gn?vt!==null?I?dt&&e.compressedTexSubImage2D(n.TEXTURE_2D,ot,0,0,mt.width,mt.height,vt,mt.data):e.compressedTexImage2D(n.TEXTURE_2D,ot,Lt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?dt&&e.texSubImage2D(n.TEXTURE_2D,ot,0,0,mt.width,mt.height,vt,zt,mt.data):e.texImage2D(n.TEXTURE_2D,ot,Lt,mt.width,mt.height,0,vt,zt,mt.data)}else if(y.isDataArrayTexture)if(I){if(ut&&e.texStorage3D(n.TEXTURE_2D_ARRAY,wt,Lt,rt.width,rt.height,rt.depth),dt)if(y.layerUpdates.size>0){const ot=Ih(rt.width,rt.height,y.format,y.type);for(const J of y.layerUpdates){const Rt=rt.data.subarray(J*ot/rt.data.BYTES_PER_ELEMENT,(J+1)*ot/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,rt.width,rt.height,1,vt,zt,Rt)}y.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,vt,zt,rt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Lt,rt.width,rt.height,rt.depth,0,vt,zt,rt.data);else if(y.isData3DTexture)I?(ut&&e.texStorage3D(n.TEXTURE_3D,wt,Lt,rt.width,rt.height,rt.depth),dt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,vt,zt,rt.data)):e.texImage3D(n.TEXTURE_3D,0,Lt,rt.width,rt.height,rt.depth,0,vt,zt,rt.data);else if(y.isFramebufferTexture){if(ut)if(I)e.texStorage2D(n.TEXTURE_2D,wt,Lt,rt.width,rt.height);else{let ot=rt.width,J=rt.height;for(let Rt=0;Rt<wt;Rt++)e.texImage2D(n.TEXTURE_2D,Rt,Lt,ot,J,0,vt,zt,null),ot>>=1,J>>=1}}else if(Xt.length>0){if(I&&ut){const ot=Dt(Xt[0]);e.texStorage2D(n.TEXTURE_2D,wt,Lt,ot.width,ot.height)}for(let ot=0,J=Xt.length;ot<J;ot++)mt=Xt[ot],I?dt&&e.texSubImage2D(n.TEXTURE_2D,ot,0,0,vt,zt,mt):e.texImage2D(n.TEXTURE_2D,ot,Lt,vt,zt,mt);y.generateMipmaps=!1}else if(I){if(ut){const ot=Dt(rt);e.texStorage2D(n.TEXTURE_2D,wt,Lt,ot.width,ot.height)}dt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,vt,zt,rt)}else e.texImage2D(n.TEXTURE_2D,0,Lt,vt,zt,rt);m(y)&&f(q),Ct.__version=Y.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function $(b,y,O){if(y.image.length!==6)return;const q=kt(b,y),nt=y.source;e.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+O);const Y=i.get(nt);if(nt.version!==Y.__version||q===!0){e.activeTexture(n.TEXTURE0+O);const Ct=re.getPrimaries(re.workingColorSpace),ht=y.colorSpace===Ii?null:re.getPrimaries(y.colorSpace),At=y.colorSpace===Ii||Ct===ht?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const Pt=y.isCompressedTexture||y.image[0].isCompressedTexture,rt=y.image[0]&&y.image[0].isDataTexture,vt=[];for(let J=0;J<6;J++)!Pt&&!rt?vt[J]=v(y.image[J],!0,s.maxCubemapSize):vt[J]=rt?y.image[J].image:y.image[J],vt[J]=Ot(y,vt[J]);const zt=vt[0],Lt=r.convert(y.format,y.colorSpace),mt=r.convert(y.type),Xt=x(y.internalFormat,Lt,mt,y.colorSpace),I=y.isVideoTexture!==!0,ut=Y.__version===void 0||q===!0,dt=nt.dataReady;let wt=A(y,zt);It(n.TEXTURE_CUBE_MAP,y);let ot;if(Pt){I&&ut&&e.texStorage2D(n.TEXTURE_CUBE_MAP,wt,Xt,zt.width,zt.height);for(let J=0;J<6;J++){ot=vt[J].mipmaps;for(let Rt=0;Rt<ot.length;Rt++){const Vt=ot[Rt];y.format!==Gn?Lt!==null?I?dt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Rt,0,0,Vt.width,Vt.height,Lt,Vt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Rt,Xt,Vt.width,Vt.height,0,Vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?dt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Rt,0,0,Vt.width,Vt.height,Lt,mt,Vt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Rt,Xt,Vt.width,Vt.height,0,Lt,mt,Vt.data)}}}else{if(ot=y.mipmaps,I&&ut){ot.length>0&&wt++;const J=Dt(vt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,wt,Xt,J.width,J.height)}for(let J=0;J<6;J++)if(rt){I?dt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,vt[J].width,vt[J].height,Lt,mt,vt[J].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Xt,vt[J].width,vt[J].height,0,Lt,mt,vt[J].data);for(let Rt=0;Rt<ot.length;Rt++){const Me=ot[Rt].image[J].image;I?dt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Rt+1,0,0,Me.width,Me.height,Lt,mt,Me.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Rt+1,Xt,Me.width,Me.height,0,Lt,mt,Me.data)}}else{I?dt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Lt,mt,vt[J]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Xt,Lt,mt,vt[J]);for(let Rt=0;Rt<ot.length;Rt++){const Vt=ot[Rt];I?dt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Rt+1,0,0,Lt,mt,Vt.image[J]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Rt+1,Xt,Lt,mt,Vt.image[J])}}}m(y)&&f(n.TEXTURE_CUBE_MAP),Y.__version=nt.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function xt(b,y,O,q,nt,Y){const Ct=r.convert(O.format,O.colorSpace),ht=r.convert(O.type),At=x(O.internalFormat,Ct,ht,O.colorSpace),Pt=i.get(y),rt=i.get(O);if(rt.__renderTarget=y,!Pt.__hasExternalTextures){const vt=Math.max(1,y.width>>Y),zt=Math.max(1,y.height>>Y);nt===n.TEXTURE_3D||nt===n.TEXTURE_2D_ARRAY?e.texImage3D(nt,Y,At,vt,zt,y.depth,0,Ct,ht,null):e.texImage2D(nt,Y,At,vt,zt,0,Ct,ht,null)}e.bindFramebuffer(n.FRAMEBUFFER,b),it(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,nt,rt.__webglTexture,0,lt(y)):(nt===n.TEXTURE_2D||nt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,nt,rt.__webglTexture,Y),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Tt(b,y,O){if(n.bindRenderbuffer(n.RENDERBUFFER,b),y.depthBuffer){const q=y.depthTexture,nt=q&&q.isDepthTexture?q.type:null,Y=_(y.stencilBuffer,nt),Ct=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ht=lt(y);it(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ht,Y,y.width,y.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,ht,Y,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,Y,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ct,n.RENDERBUFFER,b)}else{const q=y.textures;for(let nt=0;nt<q.length;nt++){const Y=q[nt],Ct=r.convert(Y.format,Y.colorSpace),ht=r.convert(Y.type),At=x(Y.internalFormat,Ct,ht,Y.colorSpace),Pt=lt(y);O&&it(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pt,At,y.width,y.height):it(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pt,At,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,At,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function St(b,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,b),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=i.get(y.depthTexture);q.__renderTarget=y,(!q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),V(y.depthTexture,0);const nt=q.__webglTexture,Y=lt(y);if(y.depthTexture.format===eo)it(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,nt,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,nt,0);else if(y.depthTexture.format===no)it(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,nt,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function Qt(b){const y=i.get(b),O=b.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==b.depthTexture){const q=b.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),q){const nt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,q.removeEventListener("dispose",nt)};q.addEventListener("dispose",nt),y.__depthDisposeCallback=nt}y.__boundDepthTexture=q}if(b.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const q=b.texture.mipmaps;q&&q.length>0?St(y.__webglFramebuffer[0],b):St(y.__webglFramebuffer,b)}else if(O){y.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[q]),y.__webglDepthbuffer[q]===void 0)y.__webglDepthbuffer[q]=n.createRenderbuffer(),Tt(y.__webglDepthbuffer[q],b,!1);else{const nt=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=y.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,nt,n.RENDERBUFFER,Y)}}else{const q=b.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),Tt(y.__webglDepthbuffer,b,!1);else{const nt=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,nt,n.RENDERBUFFER,Y)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function pe(b,y,O){const q=i.get(b);y!==void 0&&xt(q.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&Qt(b)}function C(b){const y=b.texture,O=i.get(b),q=i.get(y);b.addEventListener("dispose",R);const nt=b.textures,Y=b.isWebGLCubeRenderTarget===!0,Ct=nt.length>1;if(Ct||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=y.version,o.memory.textures++),Y){O.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[ht]=[];for(let At=0;At<y.mipmaps.length;At++)O.__webglFramebuffer[ht][At]=n.createFramebuffer()}else O.__webglFramebuffer[ht]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let ht=0;ht<y.mipmaps.length;ht++)O.__webglFramebuffer[ht]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(Ct)for(let ht=0,At=nt.length;ht<At;ht++){const Pt=i.get(nt[ht]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&it(b)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ht=0;ht<nt.length;ht++){const At=nt[ht];O.__webglColorRenderbuffer[ht]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[ht]);const Pt=r.convert(At.format,At.colorSpace),rt=r.convert(At.type),vt=x(At.internalFormat,Pt,rt,At.colorSpace,b.isXRRenderTarget===!0),zt=lt(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,zt,vt,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,O.__webglColorRenderbuffer[ht])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),Tt(O.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){e.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),It(n.TEXTURE_CUBE_MAP,y);for(let ht=0;ht<6;ht++)if(y.mipmaps&&y.mipmaps.length>0)for(let At=0;At<y.mipmaps.length;At++)xt(O.__webglFramebuffer[ht][At],b,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,At);else xt(O.__webglFramebuffer[ht],b,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(y)&&f(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let ht=0,At=nt.length;ht<At;ht++){const Pt=nt[ht],rt=i.get(Pt);let vt=n.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(vt=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(vt,rt.__webglTexture),It(vt,Pt),xt(O.__webglFramebuffer,b,Pt,n.COLOR_ATTACHMENT0+ht,vt,0),m(Pt)&&f(vt)}e.unbindTexture()}else{let ht=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ht=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ht,q.__webglTexture),It(ht,y),y.mipmaps&&y.mipmaps.length>0)for(let At=0;At<y.mipmaps.length;At++)xt(O.__webglFramebuffer[At],b,y,n.COLOR_ATTACHMENT0,ht,At);else xt(O.__webglFramebuffer,b,y,n.COLOR_ATTACHMENT0,ht,0);m(y)&&f(ht),e.unbindTexture()}b.depthBuffer&&Qt(b)}function tt(b){const y=b.textures;for(let O=0,q=y.length;O<q;O++){const nt=y[O];if(m(nt)){const Y=w(b),Ct=i.get(nt).__webglTexture;e.bindTexture(Y,Ct),f(Y),e.unbindTexture()}}}const Q=[],j=[];function k(b){if(b.samples>0){if(it(b)===!1){const y=b.textures,O=b.width,q=b.height;let nt=n.COLOR_BUFFER_BIT;const Y=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ct=i.get(b),ht=y.length>1;if(ht)for(let Pt=0;Pt<y.length;Pt++)e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer);const At=b.texture.mipmaps;At&&At.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let Pt=0;Pt<y.length;Pt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(nt|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(nt|=n.STENCIL_BUFFER_BIT)),ht){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ct.__webglColorRenderbuffer[Pt]);const rt=i.get(y[Pt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,rt,0)}n.blitFramebuffer(0,0,O,q,0,0,O,q,nt,n.NEAREST),l===!0&&(Q.length=0,j.length=0,Q.push(n.COLOR_ATTACHMENT0+Pt),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Q.push(Y),j.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,j)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Q))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ht)for(let Pt=0;Pt<y.length;Pt++){e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pt,n.RENDERBUFFER,Ct.__webglColorRenderbuffer[Pt]);const rt=i.get(y[Pt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pt,n.TEXTURE_2D,rt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const y=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function lt(b){return Math.min(s.maxSamples,b.samples)}function it(b){const y=i.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ct(b){const y=o.render.frame;u.get(b)!==y&&(u.set(b,y),b.update())}function Ot(b,y){const O=b.colorSpace,q=b.format,nt=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||O!==fr&&O!==Ii&&(re.getTransfer(O)===ge?(q!==Gn||nt!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),y}function Dt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=B,this.setTexture2D=V,this.setTexture2DArray=X,this.setTexture3D=K,this.setTextureCube=U,this.rebindTextures=pe,this.setupRenderTarget=C,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=k,this.setupDepthRenderbuffer=Qt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=it}function kx(n,t){function e(i,s=Ii){let r;const o=re.getTransfer(s);if(i===ei)return n.UNSIGNED_BYTE;if(i===jc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Kc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Id)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ud)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ld)return n.BYTE;if(i===Dd)return n.SHORT;if(i===Jr)return n.UNSIGNED_SHORT;if(i===Zc)return n.INT;if(i===_s)return n.UNSIGNED_INT;if(i===Qn)return n.FLOAT;if(i===po)return n.HALF_FLOAT;if(i===Nd)return n.ALPHA;if(i===Fd)return n.RGB;if(i===Gn)return n.RGBA;if(i===eo)return n.DEPTH_COMPONENT;if(i===no)return n.DEPTH_STENCIL;if(i===Qc)return n.RED;if(i===$c)return n.RED_INTEGER;if(i===Od)return n.RG;if(i===Jc)return n.RG_INTEGER;if(i===tu)return n.RGBA_INTEGER;if(i===da||i===fa||i===pa||i===ma)if(o===ge)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===da)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===da)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===fa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===pa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ma)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ic||i===sc||i===rc||i===oc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ic)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===sc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===rc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===oc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ac||i===lc||i===cc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ac||i===lc)return o===ge?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===cc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===uc||i===hc||i===dc||i===fc||i===pc||i===mc||i===gc||i===vc||i===_c||i===yc||i===xc||i===Sc||i===Mc||i===wc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===uc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===hc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===dc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===fc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===pc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===mc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===gc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===vc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_c)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===yc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===xc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Sc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Mc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===wc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ec||i===bc||i===Tc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Ec)return o===ge?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===bc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Tc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ac||i===Pc||i===Rc||i===Cc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ac)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Pc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Rc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Cc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===to?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const zx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gx=`
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

}`;class Hx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new tf(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ii({vertexShader:zx,fragmentShader:Gx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new bt(new xi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Vx extends Ms{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,p=null,d=null,g=null;const v=typeof XRWebGLBinding<"u",m=new Hx,f={},w=e.getContextAttributes();let x=null,_=null;const A=[],P=[],R=new et;let D=null;const M=new cn;M.viewport=new _e;const S=new cn;S.viewport=new _e;const L=[M,S],B=new og;let z=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let $=A[Z];return $===void 0&&($=new El,A[Z]=$),$.getTargetRaySpace()},this.getControllerGrip=function(Z){let $=A[Z];return $===void 0&&($=new El,A[Z]=$),$.getGripSpace()},this.getHand=function(Z){let $=A[Z];return $===void 0&&($=new El,A[Z]=$),$.getHandSpace()};function V(Z){const $=P.indexOf(Z.inputSource);if($===-1)return;const xt=A[$];xt!==void 0&&(xt.update(Z.inputSource,Z.frame,c||o),xt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function X(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",K);for(let Z=0;Z<A.length;Z++){const $=P[Z];$!==null&&(P[Z]=null,A[Z].disconnect($))}z=null,G=null,m.reset();for(const Z in f)delete f[Z];t.setRenderTarget(x),d=null,p=null,h=null,s=null,_=null,jt.stop(),i.isPresenting=!1,t.setPixelRatio(D),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(x=t.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",X),s.addEventListener("inputsourceschange",K),w.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,Tt=null,St=null;w.depth&&(St=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=w.stencil?no:eo,Tt=w.stencil?to:_s);const Qt={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:r};h=this.getBinding(),p=h.createProjectionLayer(Qt),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),_=new xs(p.textureWidth,p.textureHeight,{format:Gn,type:ei,depthTexture:new Jd(p.textureWidth,p.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const xt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,xt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new xs(d.framebufferWidth,d.framebufferHeight,{format:Gn,type:ei,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),jt.setContext(s),jt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function K(Z){for(let $=0;$<Z.removed.length;$++){const xt=Z.removed[$],Tt=P.indexOf(xt);Tt>=0&&(P[Tt]=null,A[Tt].disconnect(xt))}for(let $=0;$<Z.added.length;$++){const xt=Z.added[$];let Tt=P.indexOf(xt);if(Tt===-1){for(let Qt=0;Qt<A.length;Qt++)if(Qt>=P.length){P.push(xt),Tt=Qt;break}else if(P[Qt]===null){P[Qt]=xt,Tt=Qt;break}if(Tt===-1)break}const St=A[Tt];St&&St.connect(xt)}}const U=new T,st=new T;function ft(Z,$,xt){U.setFromMatrixPosition($.matrixWorld),st.setFromMatrixPosition(xt.matrixWorld);const Tt=U.distanceTo(st),St=$.projectionMatrix.elements,Qt=xt.projectionMatrix.elements,pe=St[14]/(St[10]-1),C=St[14]/(St[10]+1),tt=(St[9]+1)/St[5],Q=(St[9]-1)/St[5],j=(St[8]-1)/St[0],k=(Qt[8]+1)/Qt[0],lt=pe*j,it=pe*k,ct=Tt/(-j+k),Ot=ct*-j;if($.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ot),Z.translateZ(ct),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),St[10]===-1)Z.projectionMatrix.copy($.projectionMatrix),Z.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const Dt=pe+ct,b=C+ct,y=lt-Ot,O=it+(Tt-Ot),q=tt*C/b*Dt,nt=Q*C/b*Dt;Z.projectionMatrix.makePerspective(y,O,q,nt,Dt,b),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function yt(Z,$){$===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices($.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let $=Z.near,xt=Z.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(xt=m.depthFar)),B.near=S.near=M.near=$,B.far=S.far=M.far=xt,(z!==B.near||G!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),z=B.near,G=B.far),B.layers.mask=Z.layers.mask|6,M.layers.mask=B.layers.mask&3,S.layers.mask=B.layers.mask&5;const Tt=Z.parent,St=B.cameras;yt(B,Tt);for(let Qt=0;Qt<St.length;Qt++)yt(St[Qt],Tt);St.length===2?ft(B,M,S):B.projectionMatrix.copy(M.projectionMatrix),It(Z,B,Tt)};function It(Z,$,xt){xt===null?Z.matrix.copy($.matrixWorld):(Z.matrix.copy(xt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply($.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy($.projectionMatrix),Z.projectionMatrixInverse.copy($.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=io*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(p===null&&d===null))return l},this.setFoveation=function(Z){l=Z,p!==null&&(p.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(Z){return f[Z]};let kt=null;function ie(Z,$){if(u=$.getViewerPose(c||o),g=$,u!==null){const xt=u.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let Tt=!1;xt.length!==B.cameras.length&&(B.cameras.length=0,Tt=!0);for(let C=0;C<xt.length;C++){const tt=xt[C];let Q=null;if(d!==null)Q=d.getViewport(tt);else{const k=h.getViewSubImage(p,tt);Q=k.viewport,C===0&&(t.setRenderTargetTextures(_,k.colorTexture,k.depthStencilTexture),t.setRenderTarget(_))}let j=L[C];j===void 0&&(j=new cn,j.layers.enable(C),j.viewport=new _e,L[C]=j),j.matrix.fromArray(tt.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(tt.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(Q.x,Q.y,Q.width,Q.height),C===0&&(B.matrix.copy(j.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Tt===!0&&B.cameras.push(j)}const St=s.enabledFeatures;if(St&&St.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){h=i.getBinding();const C=h.getDepthInformation(xt[0]);C&&C.isValid&&C.texture&&m.init(C,s.renderState)}if(St&&St.includes("camera-access")&&v){t.state.unbindTexture(),h=i.getBinding();for(let C=0;C<xt.length;C++){const tt=xt[C].camera;if(tt){let Q=f[tt];Q||(Q=new tf,f[tt]=Q);const j=h.getCameraImage(tt);Q.sourceTexture=j}}}}for(let xt=0;xt<A.length;xt++){const Tt=P[xt],St=A[xt];Tt!==null&&St!==void 0&&St.update(Tt,$,c||o)}kt&&kt(Z,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),g=null}const jt=new pf;jt.setAnimationLoop(ie),this.setAnimationLoop=function(Z){kt=Z},this.dispose=function(){}}}const is=new ni,Wx=new he;function qx(n,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,qd(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,w,x,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),p(m,f),f.isMeshPhysicalMaterial&&d(m,f,_)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,w,x):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===un&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===un&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const w=t.get(f),x=w.envMap,_=w.envMapRotation;x&&(m.envMap.value=x,is.copy(_),is.x*=-1,is.y*=-1,is.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),m.envMapRotation.value.setFromMatrix4(Wx.makeRotationFromEuler(is)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,w,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*w,m.scale.value=x*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function p(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,w){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===un&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const w=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Xx(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,x){const _=x.program;i.uniformBlockBinding(w,_)}function c(w,x){let _=s[w.id];_===void 0&&(g(w),_=u(w),s[w.id]=_,w.addEventListener("dispose",m));const A=x.program;i.updateUBOMapping(w,A);const P=t.render.frame;r[w.id]!==P&&(p(w),r[w.id]=P)}function u(w){const x=h();w.__bindingPointIndex=x;const _=n.createBuffer(),A=w.__size,P=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,A,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,_),_}function h(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(w){const x=s[w.id],_=w.uniforms,A=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let P=0,R=_.length;P<R;P++){const D=Array.isArray(_[P])?_[P]:[_[P]];for(let M=0,S=D.length;M<S;M++){const L=D[M];if(d(L,P,M,A)===!0){const B=L.__offset,z=Array.isArray(L.value)?L.value:[L.value];let G=0;for(let V=0;V<z.length;V++){const X=z[V],K=v(X);typeof X=="number"||typeof X=="boolean"?(L.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,B+G,L.__data)):X.isMatrix3?(L.__data[0]=X.elements[0],L.__data[1]=X.elements[1],L.__data[2]=X.elements[2],L.__data[3]=0,L.__data[4]=X.elements[3],L.__data[5]=X.elements[4],L.__data[6]=X.elements[5],L.__data[7]=0,L.__data[8]=X.elements[6],L.__data[9]=X.elements[7],L.__data[10]=X.elements[8],L.__data[11]=0):(X.toArray(L.__data,G),G+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(w,x,_,A){const P=w.value,R=x+"_"+_;if(A[R]===void 0)return typeof P=="number"||typeof P=="boolean"?A[R]=P:A[R]=P.clone(),!0;{const D=A[R];if(typeof P=="number"||typeof P=="boolean"){if(D!==P)return A[R]=P,!0}else if(D.equals(P)===!1)return D.copy(P),!0}return!1}function g(w){const x=w.uniforms;let _=0;const A=16;for(let R=0,D=x.length;R<D;R++){const M=Array.isArray(x[R])?x[R]:[x[R]];for(let S=0,L=M.length;S<L;S++){const B=M[S],z=Array.isArray(B.value)?B.value:[B.value];for(let G=0,V=z.length;G<V;G++){const X=z[G],K=v(X),U=_%A,st=U%K.boundary,ft=U+st;_+=st,ft!==0&&A-ft<K.storage&&(_+=A-ft),B.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=_,_+=K.storage}}}const P=_%A;return P>0&&(_+=A-P),w.__size=_,w.__cache={},this}function v(w){const x={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(x.boundary=4,x.storage=4):w.isVector2?(x.boundary=8,x.storage=8):w.isVector3||w.isColor?(x.boundary=16,x.storage=12):w.isVector4?(x.boundary=16,x.storage=16):w.isMatrix3?(x.boundary=48,x.storage=48):w.isMatrix4?(x.boundary=64,x.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),x}function m(w){const x=w.target;x.removeEventListener("dispose",m);const _=o.indexOf(x.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function f(){for(const w in s)n.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}class yf{constructor(t={}){const{canvas:e=km(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,f=null;const w=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let A=!1;this._outputColorSpace=an;let P=0,R=0,D=null,M=-1,S=null;const L=new _e,B=new _e;let z=null;const G=new Ht(0);let V=0,X=e.width,K=e.height,U=1,st=null,ft=null;const yt=new _e(0,0,X,K),It=new _e(0,0,X,K);let kt=!1;const ie=new ru;let jt=!1,Z=!1;const $=new he,xt=new T,Tt=new _e,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qt=!1;function pe(){return D===null?U:1}let C=i;function tt(E,N){return e.getContext(E,N)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Xc}`),e.addEventListener("webglcontextlost",dt,!1),e.addEventListener("webglcontextrestored",wt,!1),e.addEventListener("webglcontextcreationerror",ot,!1),C===null){const N="webgl2";if(C=tt(N,E),C===null)throw tt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Q,j,k,lt,it,ct,Ot,Dt,b,y,O,q,nt,Y,Ct,ht,At,Pt,rt,vt,zt,Lt,mt,Xt;function I(){Q=new iy(C),Q.init(),Lt=new kx(C,Q),j=new K_(C,Q,t,Lt),k=new Ox(C,Q),j.reversedDepthBuffer&&p&&k.buffers.depth.setReversed(!0),lt=new oy(C),it=new Ex,ct=new Bx(C,Q,k,it,j,Lt,lt),Ot=new $_(_),Dt=new ny(_),b=new dg(C),mt=new Z_(C,b),y=new sy(C,b,lt,mt),O=new ly(C,y,b,lt),rt=new ay(C,j,ct),ht=new Q_(it),q=new wx(_,Ot,Dt,Q,j,mt,ht),nt=new qx(_,it),Y=new Tx,Ct=new Dx(Q),Pt=new Y_(_,Ot,Dt,k,O,d,l),At=new Nx(_,O,j),Xt=new Xx(C,lt,j,k),vt=new j_(C,Q,lt),zt=new ry(C,Q,lt),lt.programs=q.programs,_.capabilities=j,_.extensions=Q,_.properties=it,_.renderLists=Y,_.shadowMap=At,_.state=k,_.info=lt}I();const ut=new Vx(_,C);this.xr=ut,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const E=Q.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Q.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(E){E!==void 0&&(U=E,this.setSize(X,K,!1))},this.getSize=function(E){return E.set(X,K)},this.setSize=function(E,N,H=!0){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=E,K=N,e.width=Math.floor(E*U),e.height=Math.floor(N*U),H===!0&&(e.style.width=E+"px",e.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(X*U,K*U).floor()},this.setDrawingBufferSize=function(E,N,H){X=E,K=N,U=H,e.width=Math.floor(E*H),e.height=Math.floor(N*H),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(L)},this.getViewport=function(E){return E.copy(yt)},this.setViewport=function(E,N,H,W){E.isVector4?yt.set(E.x,E.y,E.z,E.w):yt.set(E,N,H,W),k.viewport(L.copy(yt).multiplyScalar(U).round())},this.getScissor=function(E){return E.copy(It)},this.setScissor=function(E,N,H,W){E.isVector4?It.set(E.x,E.y,E.z,E.w):It.set(E,N,H,W),k.scissor(B.copy(It).multiplyScalar(U).round())},this.getScissorTest=function(){return kt},this.setScissorTest=function(E){k.setScissorTest(kt=E)},this.setOpaqueSort=function(E){st=E},this.setTransparentSort=function(E){ft=E},this.getClearColor=function(E){return E.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor(...arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha(...arguments)},this.clear=function(E=!0,N=!0,H=!0){let W=0;if(E){let F=!1;if(D!==null){const at=D.texture.format;F=at===tu||at===Jc||at===$c}if(F){const at=D.texture.type,gt=at===ei||at===_s||at===Jr||at===to||at===jc||at===Kc,Et=Pt.getClearColor(),Mt=Pt.getClearAlpha(),Bt=Et.r,Gt=Et.g,Ut=Et.b;gt?(g[0]=Bt,g[1]=Gt,g[2]=Ut,g[3]=Mt,C.clearBufferuiv(C.COLOR,0,g)):(v[0]=Bt,v[1]=Gt,v[2]=Ut,v[3]=Mt,C.clearBufferiv(C.COLOR,0,v))}else W|=C.COLOR_BUFFER_BIT}N&&(W|=C.DEPTH_BUFFER_BIT),H&&(W|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",dt,!1),e.removeEventListener("webglcontextrestored",wt,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),Pt.dispose(),Y.dispose(),Ct.dispose(),it.dispose(),Ot.dispose(),Dt.dispose(),O.dispose(),mt.dispose(),Xt.dispose(),q.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",Xn),ut.removeEventListener("sessionend",Nu),Ki.stop()};function dt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const E=lt.autoReset,N=At.enabled,H=At.autoUpdate,W=At.needsUpdate,F=At.type;I(),lt.autoReset=E,At.enabled=N,At.autoUpdate=H,At.needsUpdate=W,At.type=F}function ot(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function J(E){const N=E.target;N.removeEventListener("dispose",J),Rt(N)}function Rt(E){Vt(E),it.remove(E)}function Vt(E){const N=it.get(E).programs;N!==void 0&&(N.forEach(function(H){q.releaseProgram(H)}),E.isShaderMaterial&&q.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,H,W,F,at){N===null&&(N=St);const gt=F.isMesh&&F.matrixWorld.determinant()<0,Et=Cp(E,N,H,W,F);k.setMaterial(W,gt);let Mt=H.index,Bt=1;if(W.wireframe===!0){if(Mt=y.getWireframeAttribute(H),Mt===void 0)return;Bt=2}const Gt=H.drawRange,Ut=H.attributes.position;let ee=Gt.start*Bt,me=(Gt.start+Gt.count)*Bt;at!==null&&(ee=Math.max(ee,at.start*Bt),me=Math.min(me,(at.start+at.count)*Bt)),Mt!==null?(ee=Math.max(ee,0),me=Math.min(me,Mt.count)):Ut!=null&&(ee=Math.max(ee,0),me=Math.min(me,Ut.count));const Le=me-ee;if(Le<0||Le===1/0)return;mt.setup(F,W,Et,H,Mt);let Ee,xe=vt;if(Mt!==null&&(Ee=b.get(Mt),xe=zt,xe.setIndex(Ee)),F.isMesh)W.wireframe===!0?(k.setLineWidth(W.wireframeLinewidth*pe()),xe.setMode(C.LINES)):xe.setMode(C.TRIANGLES);else if(F.isLine){let Ft=W.linewidth;Ft===void 0&&(Ft=1),k.setLineWidth(Ft*pe()),F.isLineSegments?xe.setMode(C.LINES):F.isLineLoop?xe.setMode(C.LINE_LOOP):xe.setMode(C.LINE_STRIP)}else F.isPoints?xe.setMode(C.POINTS):F.isSprite&&xe.setMode(C.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)so("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),xe.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))xe.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ft=F._multiDrawStarts,Ae=F._multiDrawCounts,se=F._multiDrawCount,dn=Mt?b.get(Mt).bytesPerElement:1,Ps=it.get(W).currentProgram.getUniforms();for(let fn=0;fn<se;fn++)Ps.setValue(C,"_gl_DrawID",fn),xe.render(Ft[fn]/dn,Ae[fn])}else if(F.isInstancedMesh)xe.renderInstances(ee,Le,F.count);else if(H.isInstancedBufferGeometry){const Ft=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Ae=Math.min(H.instanceCount,Ft);xe.renderInstances(ee,Le,Ae)}else xe.render(ee,Le)};function Me(E,N,H){E.transparent===!0&&E.side===Fe&&E.forceSinglePass===!1?(E.side=un,E.needsUpdate=!0,Ro(E,N,H),E.side=Vi,E.needsUpdate=!0,Ro(E,N,H),E.side=Fe):Ro(E,N,H)}this.compile=function(E,N,H=null){H===null&&(H=E),f=Ct.get(H),f.init(N),x.push(f),H.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),E!==H&&E.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights();const W=new Set;return E.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const at=F.material;if(at)if(Array.isArray(at))for(let gt=0;gt<at.length;gt++){const Et=at[gt];Me(Et,H,F),W.add(Et)}else Me(at,H,F),W.add(at)}),f=x.pop(),W},this.compileAsync=function(E,N,H=null){const W=this.compile(E,N,H);return new Promise(F=>{function at(){if(W.forEach(function(gt){it.get(gt).currentProgram.isReady()&&W.delete(gt)}),W.size===0){F(E);return}setTimeout(at,10)}Q.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let ce=null;function oi(E){ce&&ce(E)}function Xn(){Ki.stop()}function Nu(){Ki.start()}const Ki=new pf;Ki.setAnimationLoop(oi),typeof self<"u"&&Ki.setContext(self),this.setAnimationLoop=function(E){ce=E,ut.setAnimationLoop(E),E===null?Ki.stop():Ki.start()},ut.addEventListener("sessionstart",Xn),ut.addEventListener("sessionend",Nu),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(N),N=ut.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,N,D),f=Ct.get(E,x.length),f.init(N),x.push(f),$.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),ie.setFromProjectionMatrix($,$n,N.reversedDepth),Z=this.localClippingEnabled,jt=ht.init(this.clippingPlanes,Z),m=Y.get(E,w.length),m.init(),w.push(m),ut.enabled===!0&&ut.isPresenting===!0){const at=_.xr.getDepthSensingMesh();at!==null&&el(at,N,-1/0,_.sortObjects)}el(E,N,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(st,ft),Qt=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,Qt&&Pt.addToRenderList(m,E),this.info.render.frame++,jt===!0&&ht.beginShadows();const H=f.state.shadowsArray;At.render(H,E,N),jt===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,F=m.transmissive;if(f.setupLights(),N.isArrayCamera){const at=N.cameras;if(F.length>0)for(let gt=0,Et=at.length;gt<Et;gt++){const Mt=at[gt];Ou(W,F,E,Mt)}Qt&&Pt.render(E);for(let gt=0,Et=at.length;gt<Et;gt++){const Mt=at[gt];Fu(m,E,Mt,Mt.viewport)}}else F.length>0&&Ou(W,F,E,N),Qt&&Pt.render(E),Fu(m,E,N);D!==null&&R===0&&(ct.updateMultisampleRenderTarget(D),ct.updateRenderTargetMipmap(D)),E.isScene===!0&&E.onAfterRender(_,E,N),mt.resetDefaultState(),M=-1,S=null,x.pop(),x.length>0?(f=x[x.length-1],jt===!0&&ht.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function el(E,N,H,W){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ie.intersectsSprite(E)){W&&Tt.setFromMatrixPosition(E.matrixWorld).applyMatrix4($);const gt=O.update(E),Et=E.material;Et.visible&&m.push(E,gt,Et,H,Tt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ie.intersectsObject(E))){const gt=O.update(E),Et=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Tt.copy(E.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),Tt.copy(gt.boundingSphere.center)),Tt.applyMatrix4(E.matrixWorld).applyMatrix4($)),Array.isArray(Et)){const Mt=gt.groups;for(let Bt=0,Gt=Mt.length;Bt<Gt;Bt++){const Ut=Mt[Bt],ee=Et[Ut.materialIndex];ee&&ee.visible&&m.push(E,gt,ee,H,Tt.z,Ut)}}else Et.visible&&m.push(E,gt,Et,H,Tt.z,null)}}const at=E.children;for(let gt=0,Et=at.length;gt<Et;gt++)el(at[gt],N,H,W)}function Fu(E,N,H,W){const F=E.opaque,at=E.transmissive,gt=E.transparent;f.setupLightsView(H),jt===!0&&ht.setGlobalState(_.clippingPlanes,H),W&&k.viewport(L.copy(W)),F.length>0&&Po(F,N,H),at.length>0&&Po(at,N,H),gt.length>0&&Po(gt,N,H),k.buffers.depth.setTest(!0),k.buffers.depth.setMask(!0),k.buffers.color.setMask(!0),k.setPolygonOffset(!1)}function Ou(E,N,H,W){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[W.id]===void 0&&(f.state.transmissionRenderTarget[W.id]=new xs(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?po:ei,minFilter:hs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:re.workingColorSpace}));const at=f.state.transmissionRenderTarget[W.id],gt=W.viewport||L;at.setSize(gt.z*_.transmissionResolutionScale,gt.w*_.transmissionResolutionScale);const Et=_.getRenderTarget(),Mt=_.getActiveCubeFace(),Bt=_.getActiveMipmapLevel();_.setRenderTarget(at),_.getClearColor(G),V=_.getClearAlpha(),V<1&&_.setClearColor(16777215,.5),_.clear(),Qt&&Pt.render(H);const Gt=_.toneMapping;_.toneMapping=ki;const Ut=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),f.setupLightsView(W),jt===!0&&ht.setGlobalState(_.clippingPlanes,W),Po(E,H,W),ct.updateMultisampleRenderTarget(at),ct.updateRenderTargetMipmap(at),Q.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let me=0,Le=N.length;me<Le;me++){const Ee=N[me],xe=Ee.object,Ft=Ee.geometry,Ae=Ee.material,se=Ee.group;if(Ae.side===Fe&&xe.layers.test(W.layers)){const dn=Ae.side;Ae.side=un,Ae.needsUpdate=!0,Bu(xe,H,W,Ft,Ae,se),Ae.side=dn,Ae.needsUpdate=!0,ee=!0}}ee===!0&&(ct.updateMultisampleRenderTarget(at),ct.updateRenderTargetMipmap(at))}_.setRenderTarget(Et,Mt,Bt),_.setClearColor(G,V),Ut!==void 0&&(W.viewport=Ut),_.toneMapping=Gt}function Po(E,N,H){const W=N.isScene===!0?N.overrideMaterial:null;for(let F=0,at=E.length;F<at;F++){const gt=E[F],Et=gt.object,Mt=gt.geometry,Bt=gt.group;let Gt=gt.material;Gt.allowOverride===!0&&W!==null&&(Gt=W),Et.layers.test(H.layers)&&Bu(Et,N,H,Mt,Gt,Bt)}}function Bu(E,N,H,W,F,at){E.onBeforeRender(_,N,H,W,F,at),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),F.onBeforeRender(_,N,H,W,E,at),F.transparent===!0&&F.side===Fe&&F.forceSinglePass===!1?(F.side=un,F.needsUpdate=!0,_.renderBufferDirect(H,N,W,F,E,at),F.side=Vi,F.needsUpdate=!0,_.renderBufferDirect(H,N,W,F,E,at),F.side=Fe):_.renderBufferDirect(H,N,W,F,E,at),E.onAfterRender(_,N,H,W,F,at)}function Ro(E,N,H){N.isScene!==!0&&(N=St);const W=it.get(E),F=f.state.lights,at=f.state.shadowsArray,gt=F.state.version,Et=q.getParameters(E,F.state,at,N,H),Mt=q.getProgramCacheKey(Et);let Bt=W.programs;W.environment=E.isMeshStandardMaterial?N.environment:null,W.fog=N.fog,W.envMap=(E.isMeshStandardMaterial?Dt:Ot).get(E.envMap||W.environment),W.envMapRotation=W.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Bt===void 0&&(E.addEventListener("dispose",J),Bt=new Map,W.programs=Bt);let Gt=Bt.get(Mt);if(Gt!==void 0){if(W.currentProgram===Gt&&W.lightsStateVersion===gt)return zu(E,Et),Gt}else Et.uniforms=q.getUniforms(E),E.onBeforeCompile(Et,_),Gt=q.acquireProgram(Et,Mt),Bt.set(Mt,Gt),W.uniforms=Et.uniforms;const Ut=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ut.clippingPlanes=ht.uniform),zu(E,Et),W.needsLights=Dp(E),W.lightsStateVersion=gt,W.needsLights&&(Ut.ambientLightColor.value=F.state.ambient,Ut.lightProbe.value=F.state.probe,Ut.directionalLights.value=F.state.directional,Ut.directionalLightShadows.value=F.state.directionalShadow,Ut.spotLights.value=F.state.spot,Ut.spotLightShadows.value=F.state.spotShadow,Ut.rectAreaLights.value=F.state.rectArea,Ut.ltc_1.value=F.state.rectAreaLTC1,Ut.ltc_2.value=F.state.rectAreaLTC2,Ut.pointLights.value=F.state.point,Ut.pointLightShadows.value=F.state.pointShadow,Ut.hemisphereLights.value=F.state.hemi,Ut.directionalShadowMap.value=F.state.directionalShadowMap,Ut.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ut.spotShadowMap.value=F.state.spotShadowMap,Ut.spotLightMatrix.value=F.state.spotLightMatrix,Ut.spotLightMap.value=F.state.spotLightMap,Ut.pointShadowMap.value=F.state.pointShadowMap,Ut.pointShadowMatrix.value=F.state.pointShadowMatrix),W.currentProgram=Gt,W.uniformsList=null,Gt}function ku(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=ga.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function zu(E,N){const H=it.get(E);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function Cp(E,N,H,W,F){N.isScene!==!0&&(N=St),ct.resetTextureUnits();const at=N.fog,gt=W.isMeshStandardMaterial?N.environment:null,Et=D===null?_.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:fr,Mt=(W.isMeshStandardMaterial?Dt:Ot).get(W.envMap||gt),Bt=W.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Gt=!!H.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ut=!!H.morphAttributes.position,ee=!!H.morphAttributes.normal,me=!!H.morphAttributes.color;let Le=ki;W.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Le=_.toneMapping);const Ee=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,xe=Ee!==void 0?Ee.length:0,Ft=it.get(W),Ae=f.state.lights;if(jt===!0&&(Z===!0||E!==S)){const $e=E===S&&W.id===M;ht.setState(W,E,$e)}let se=!1;W.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==Ae.state.version||Ft.outputColorSpace!==Et||F.isBatchedMesh&&Ft.batching===!1||!F.isBatchedMesh&&Ft.batching===!0||F.isBatchedMesh&&Ft.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ft.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ft.instancing===!1||!F.isInstancedMesh&&Ft.instancing===!0||F.isSkinnedMesh&&Ft.skinning===!1||!F.isSkinnedMesh&&Ft.skinning===!0||F.isInstancedMesh&&Ft.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ft.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ft.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ft.instancingMorph===!1&&F.morphTexture!==null||Ft.envMap!==Mt||W.fog===!0&&Ft.fog!==at||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==ht.numPlanes||Ft.numIntersection!==ht.numIntersection)||Ft.vertexAlphas!==Bt||Ft.vertexTangents!==Gt||Ft.morphTargets!==Ut||Ft.morphNormals!==ee||Ft.morphColors!==me||Ft.toneMapping!==Le||Ft.morphTargetsCount!==xe)&&(se=!0):(se=!0,Ft.__version=W.version);let dn=Ft.currentProgram;se===!0&&(dn=Ro(W,N,F));let Ps=!1,fn=!1,wr=!1;const Pe=dn.getUniforms(),wn=Ft.uniforms;if(k.useProgram(dn.program)&&(Ps=!0,fn=!0,wr=!0),W.id!==M&&(M=W.id,fn=!0),Ps||S!==E){k.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Pe.setValue(C,"projectionMatrix",E.projectionMatrix),Pe.setValue(C,"viewMatrix",E.matrixWorldInverse);const nn=Pe.map.cameraPosition;nn!==void 0&&nn.setValue(C,xt.setFromMatrixPosition(E.matrixWorld)),j.logarithmicDepthBuffer&&Pe.setValue(C,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Pe.setValue(C,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,fn=!0,wr=!0)}if(F.isSkinnedMesh){Pe.setOptional(C,F,"bindMatrix"),Pe.setOptional(C,F,"bindMatrixInverse");const $e=F.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),Pe.setValue(C,"boneTexture",$e.boneTexture,ct))}F.isBatchedMesh&&(Pe.setOptional(C,F,"batchingTexture"),Pe.setValue(C,"batchingTexture",F._matricesTexture,ct),Pe.setOptional(C,F,"batchingIdTexture"),Pe.setValue(C,"batchingIdTexture",F._indirectTexture,ct),Pe.setOptional(C,F,"batchingColorTexture"),F._colorsTexture!==null&&Pe.setValue(C,"batchingColorTexture",F._colorsTexture,ct));const En=H.morphAttributes;if((En.position!==void 0||En.normal!==void 0||En.color!==void 0)&&rt.update(F,H,dn),(fn||Ft.receiveShadow!==F.receiveShadow)&&(Ft.receiveShadow=F.receiveShadow,Pe.setValue(C,"receiveShadow",F.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(wn.envMap.value=Mt,wn.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&N.environment!==null&&(wn.envMapIntensity.value=N.environmentIntensity),fn&&(Pe.setValue(C,"toneMappingExposure",_.toneMappingExposure),Ft.needsLights&&Lp(wn,wr),at&&W.fog===!0&&nt.refreshFogUniforms(wn,at),nt.refreshMaterialUniforms(wn,W,U,K,f.state.transmissionRenderTarget[E.id]),ga.upload(C,ku(Ft),wn,ct)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ga.upload(C,ku(Ft),wn,ct),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Pe.setValue(C,"center",F.center),Pe.setValue(C,"modelViewMatrix",F.modelViewMatrix),Pe.setValue(C,"normalMatrix",F.normalMatrix),Pe.setValue(C,"modelMatrix",F.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const $e=W.uniformsGroups;for(let nn=0,nl=$e.length;nn<nl;nn++){const Qi=$e[nn];Xt.update(Qi,dn),Xt.bind(Qi,dn)}}return dn}function Lp(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function Dp(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(E,N,H){const W=it.get(E);W.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),it.get(E.texture).__webglTexture=N,it.get(E.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:H,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,N){const H=it.get(E);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0};const Ip=C.createFramebuffer();this.setRenderTarget=function(E,N=0,H=0){D=E,P=N,R=H;let W=!0,F=null,at=!1,gt=!1;if(E){const Mt=it.get(E);if(Mt.__useDefaultFramebuffer!==void 0)k.bindFramebuffer(C.FRAMEBUFFER,null),W=!1;else if(Mt.__webglFramebuffer===void 0)ct.setupRenderTarget(E);else if(Mt.__hasExternalTextures)ct.rebindTextures(E,it.get(E.texture).__webglTexture,it.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ut=E.depthTexture;if(Mt.__boundDepthTexture!==Ut){if(Ut!==null&&it.has(Ut)&&(E.width!==Ut.image.width||E.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ct.setupDepthRenderbuffer(E)}}const Bt=E.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(gt=!0);const Gt=it.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Gt[N])?F=Gt[N][H]:F=Gt[N],at=!0):E.samples>0&&ct.useMultisampledRTT(E)===!1?F=it.get(E).__webglMultisampledFramebuffer:Array.isArray(Gt)?F=Gt[H]:F=Gt,L.copy(E.viewport),B.copy(E.scissor),z=E.scissorTest}else L.copy(yt).multiplyScalar(U).floor(),B.copy(It).multiplyScalar(U).floor(),z=kt;if(H!==0&&(F=Ip),k.bindFramebuffer(C.FRAMEBUFFER,F)&&W&&k.drawBuffers(E,F),k.viewport(L),k.scissor(B),k.setScissorTest(z),at){const Mt=it.get(E.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+N,Mt.__webglTexture,H)}else if(gt){const Mt=N;for(let Bt=0;Bt<E.textures.length;Bt++){const Gt=it.get(E.textures[Bt]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Bt,Gt.__webglTexture,H,Mt)}}else if(E!==null&&H!==0){const Mt=it.get(E.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Mt.__webglTexture,H)}M=-1},this.readRenderTargetPixels=function(E,N,H,W,F,at,gt,Et=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=it.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&gt!==void 0&&(Mt=Mt[gt]),Mt){k.bindFramebuffer(C.FRAMEBUFFER,Mt);try{const Bt=E.textures[Et],Gt=Bt.format,Ut=Bt.type;if(!j.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!j.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-W&&H>=0&&H<=E.height-F&&(E.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Et),C.readPixels(N,H,W,F,Lt.convert(Gt),Lt.convert(Ut),at))}finally{const Bt=D!==null?it.get(D).__webglFramebuffer:null;k.bindFramebuffer(C.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(E,N,H,W,F,at,gt,Et=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=it.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&gt!==void 0&&(Mt=Mt[gt]),Mt)if(N>=0&&N<=E.width-W&&H>=0&&H<=E.height-F){k.bindFramebuffer(C.FRAMEBUFFER,Mt);const Bt=E.textures[Et],Gt=Bt.format,Ut=Bt.type;if(!j.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!j.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ee=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,ee),C.bufferData(C.PIXEL_PACK_BUFFER,at.byteLength,C.STREAM_READ),E.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Et),C.readPixels(N,H,W,F,Lt.convert(Gt),Lt.convert(Ut),0);const me=D!==null?it.get(D).__webglFramebuffer:null;k.bindFramebuffer(C.FRAMEBUFFER,me);const Le=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await zm(C,Le,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,ee),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,at),C.deleteBuffer(ee),C.deleteSync(Le),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,N=null,H=0){const W=Math.pow(2,-H),F=Math.floor(E.image.width*W),at=Math.floor(E.image.height*W),gt=N!==null?N.x:0,Et=N!==null?N.y:0;ct.setTexture2D(E,0),C.copyTexSubImage2D(C.TEXTURE_2D,H,0,0,gt,Et,F,at),k.unbindTexture()};const Up=C.createFramebuffer(),Np=C.createFramebuffer();this.copyTextureToTexture=function(E,N,H=null,W=null,F=0,at=null){at===null&&(F!==0?(so("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),at=F,F=0):at=0);let gt,Et,Mt,Bt,Gt,Ut,ee,me,Le;const Ee=E.isCompressedTexture?E.mipmaps[at]:E.image;if(H!==null)gt=H.max.x-H.min.x,Et=H.max.y-H.min.y,Mt=H.isBox3?H.max.z-H.min.z:1,Bt=H.min.x,Gt=H.min.y,Ut=H.isBox3?H.min.z:0;else{const En=Math.pow(2,-F);gt=Math.floor(Ee.width*En),Et=Math.floor(Ee.height*En),E.isDataArrayTexture?Mt=Ee.depth:E.isData3DTexture?Mt=Math.floor(Ee.depth*En):Mt=1,Bt=0,Gt=0,Ut=0}W!==null?(ee=W.x,me=W.y,Le=W.z):(ee=0,me=0,Le=0);const xe=Lt.convert(N.format),Ft=Lt.convert(N.type);let Ae;N.isData3DTexture?(ct.setTexture3D(N,0),Ae=C.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(ct.setTexture2DArray(N,0),Ae=C.TEXTURE_2D_ARRAY):(ct.setTexture2D(N,0),Ae=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,N.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,N.unpackAlignment);const se=C.getParameter(C.UNPACK_ROW_LENGTH),dn=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Ps=C.getParameter(C.UNPACK_SKIP_PIXELS),fn=C.getParameter(C.UNPACK_SKIP_ROWS),wr=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Ee.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Ee.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Bt),C.pixelStorei(C.UNPACK_SKIP_ROWS,Gt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ut);const Pe=E.isDataArrayTexture||E.isData3DTexture,wn=N.isDataArrayTexture||N.isData3DTexture;if(E.isDepthTexture){const En=it.get(E),$e=it.get(N),nn=it.get(En.__renderTarget),nl=it.get($e.__renderTarget);k.bindFramebuffer(C.READ_FRAMEBUFFER,nn.__webglFramebuffer),k.bindFramebuffer(C.DRAW_FRAMEBUFFER,nl.__webglFramebuffer);for(let Qi=0;Qi<Mt;Qi++)Pe&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,it.get(E).__webglTexture,F,Ut+Qi),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,it.get(N).__webglTexture,at,Le+Qi)),C.blitFramebuffer(Bt,Gt,gt,Et,ee,me,gt,Et,C.DEPTH_BUFFER_BIT,C.NEAREST);k.bindFramebuffer(C.READ_FRAMEBUFFER,null),k.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(F!==0||E.isRenderTargetTexture||it.has(E)){const En=it.get(E),$e=it.get(N);k.bindFramebuffer(C.READ_FRAMEBUFFER,Up),k.bindFramebuffer(C.DRAW_FRAMEBUFFER,Np);for(let nn=0;nn<Mt;nn++)Pe?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,En.__webglTexture,F,Ut+nn):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,En.__webglTexture,F),wn?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,$e.__webglTexture,at,Le+nn):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,$e.__webglTexture,at),F!==0?C.blitFramebuffer(Bt,Gt,gt,Et,ee,me,gt,Et,C.COLOR_BUFFER_BIT,C.NEAREST):wn?C.copyTexSubImage3D(Ae,at,ee,me,Le+nn,Bt,Gt,gt,Et):C.copyTexSubImage2D(Ae,at,ee,me,Bt,Gt,gt,Et);k.bindFramebuffer(C.READ_FRAMEBUFFER,null),k.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else wn?E.isDataTexture||E.isData3DTexture?C.texSubImage3D(Ae,at,ee,me,Le,gt,Et,Mt,xe,Ft,Ee.data):N.isCompressedArrayTexture?C.compressedTexSubImage3D(Ae,at,ee,me,Le,gt,Et,Mt,xe,Ee.data):C.texSubImage3D(Ae,at,ee,me,Le,gt,Et,Mt,xe,Ft,Ee):E.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,at,ee,me,gt,Et,xe,Ft,Ee.data):E.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,at,ee,me,Ee.width,Ee.height,xe,Ee.data):C.texSubImage2D(C.TEXTURE_2D,at,ee,me,gt,Et,xe,Ft,Ee);C.pixelStorei(C.UNPACK_ROW_LENGTH,se),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,dn),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ps),C.pixelStorei(C.UNPACK_SKIP_ROWS,fn),C.pixelStorei(C.UNPACK_SKIP_IMAGES,wr),at===0&&N.generateMipmaps&&C.generateMipmap(Ae),k.unbindTexture()},this.initRenderTarget=function(E){it.get(E).__webglFramebuffer===void 0&&ct.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?ct.setTextureCube(E,0):E.isData3DTexture?ct.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ct.setTexture2DArray(E,0):ct.setTexture2D(E,0),k.unbindTexture()},this.resetState=function(){P=0,R=0,D=null,k.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}}const sd={type:"change"},hu={type:"start"},xf={type:"end"},la=new mo,rd=new Di,Yx=Math.cos(70*An.DEG2RAD),Oe=new T,sn=2*Math.PI,ve={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},kl=1e-6;class Zx extends ug{constructor(t,e=null){super(t,e),this.state=ve.NONE,this.target=new T,this.cursor=new T,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:tr.ROTATE,MIDDLE:tr.DOLLY,RIGHT:tr.PAN},this.touches={ONE:js.ROTATE,TWO:js.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new T,this._lastQuaternion=new ys,this._lastTargetPosition=new T,this._quat=new ys().setFromUnitVectors(t.up,new T(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Dh,this._sphericalDelta=new Dh,this._scale=1,this._panOffset=new T,this._rotateStart=new et,this._rotateEnd=new et,this._rotateDelta=new et,this._panStart=new et,this._panEnd=new et,this._panDelta=new et,this._dollyStart=new et,this._dollyEnd=new et,this._dollyDelta=new et,this._dollyDirection=new T,this._mouse=new et,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Kx.bind(this),this._onPointerDown=jx.bind(this),this._onPointerUp=Qx.bind(this),this._onContextMenu=sS.bind(this),this._onMouseWheel=tS.bind(this),this._onKeyDown=eS.bind(this),this._onTouchStart=nS.bind(this),this._onTouchMove=iS.bind(this),this._onMouseDown=$x.bind(this),this._onMouseMove=Jx.bind(this),this._interceptControlDown=rS.bind(this),this._interceptControlUp=oS.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(sd),this.update(),this.state=ve.NONE}update(t=null){const e=this.object.position;Oe.copy(e).sub(this.target),Oe.applyQuaternion(this._quat),this._spherical.setFromVector3(Oe),this.autoRotate&&this.state===ve.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=sn:i>Math.PI&&(i-=sn),s<-Math.PI?s+=sn:s>Math.PI&&(s-=sn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Oe.setFromSpherical(this._spherical),Oe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Oe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Oe.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new T(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new T(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Oe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(la.origin.copy(this.object.position),la.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(la.direction))<Yx?this.object.lookAt(this.target):(rd.setFromNormalAndCoplanarPoint(this.object.up,this.target),la.intersectPlane(rd,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>kl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>kl||this._lastTargetPosition.distanceToSquared(this.target)>kl?(this.dispatchEvent(sd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?sn/60*this.autoRotateSpeed*t:sn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Oe.setFromMatrixColumn(e,0),Oe.multiplyScalar(-t),this._panOffset.add(Oe)}_panUp(t,e){this.screenSpacePanning===!0?Oe.setFromMatrixColumn(e,1):(Oe.setFromMatrixColumn(e,0),Oe.crossVectors(this.object.up,Oe)),Oe.multiplyScalar(t),this._panOffset.add(Oe)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Oe.copy(s).sub(this.target);let r=Oe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(sn*this._rotateDelta.x/e.clientHeight),this._rotateUp(sn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(sn*this._rotateDelta.x/e.clientHeight),this._rotateUp(sn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new et,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function jx(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Kx(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Qx(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(xf),this.state=ve.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function $x(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case tr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ve.DOLLY;break;case tr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ve.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ve.ROTATE}break;case tr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ve.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ve.PAN}break;default:this.state=ve.NONE}this.state!==ve.NONE&&this.dispatchEvent(hu)}function Jx(n){switch(this.state){case ve.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ve.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ve.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function tS(n){this.enabled===!1||this.enableZoom===!1||this.state!==ve.NONE||(n.preventDefault(),this.dispatchEvent(hu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(xf))}function eS(n){this.enabled!==!1&&this._handleKeyDown(n)}function nS(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case js.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ve.TOUCH_ROTATE;break;case js.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ve.TOUCH_PAN;break;default:this.state=ve.NONE}break;case 2:switch(this.touches.TWO){case js.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ve.TOUCH_DOLLY_PAN;break;case js.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ve.TOUCH_DOLLY_ROTATE;break;default:this.state=ve.NONE}break;default:this.state=ve.NONE}this.state!==ve.NONE&&this.dispatchEvent(hu)}function iS(n){switch(this._trackPointer(n),this.state){case ve.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ve.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ve.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ve.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ve.NONE}}function sS(n){this.enabled!==!1&&n.preventDefault()}function rS(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function oS(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Sf(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Ie;let c=0;for(let u=0;u<n.length;++u){const h=n[u];let p=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in h.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.attributes[d]),p++}if(p!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in h.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(t){let d;if(e)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(e){let u=0;const h=[];for(let p=0;p<n.length;++p){const d=n[p].index;for(let g=0;g<d.count;++g)h.push(d.getX(g)+u);u+=n[p].attributes.position.count}l.setIndex(h)}for(const u in r){const h=od(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let p=0;p<h;++p){const d=[];for(let v=0;v<o[u].length;++v)d.push(o[u][v][p]);const g=od(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function od(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){const u=n[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}const o=new t(r),a=new Sn(o,e,i);let l=0;for(let c=0;c<n.length;++c){const u=n[c];if(u.isInterleavedBufferAttribute){const h=l/e;for(let p=0,d=u.count;p<d;p++)for(let g=0;g<e;g++){const v=u.getComponent(p,g);a.setComponent(p+h,g,v)}}else o.set(u.array,l);l+=u.count*e}return s!==void 0&&(a.gpuType=s),a}function aS(n,t=1e-4){t=Math.max(t,Number.EPSILON);const e={},i=n.getIndex(),s=n.getAttribute("position"),r=i?i.count:s.count;let o=0;const a=Object.keys(n.attributes),l={},c={},u=[],h=["getX","getY","getZ","getW"],p=["setX","setY","setZ","setW"];for(let w=0,x=a.length;w<x;w++){const _=a[w],A=n.attributes[_];l[_]=new A.constructor(new A.array.constructor(A.count*A.itemSize),A.itemSize,A.normalized);const P=n.morphAttributes[_];P&&(c[_]||(c[_]=[]),P.forEach((R,D)=>{const M=new R.array.constructor(R.count*R.itemSize);c[_][D]=new R.constructor(M,R.itemSize,R.normalized)}))}const d=t*.5,g=Math.log10(1/t),v=Math.pow(10,g),m=d*v;for(let w=0;w<r;w++){const x=i?i.getX(w):w;let _="";for(let A=0,P=a.length;A<P;A++){const R=a[A],D=n.getAttribute(R),M=D.itemSize;for(let S=0;S<M;S++)_+=`${~~(D[h[S]](x)*v+m)},`}if(_ in e)u.push(e[_]);else{for(let A=0,P=a.length;A<P;A++){const R=a[A],D=n.getAttribute(R),M=n.morphAttributes[R],S=D.itemSize,L=l[R],B=c[R];for(let z=0;z<S;z++){const G=h[z],V=p[z];if(L[V](o,D[G](x)),M)for(let X=0,K=M.length;X<K;X++)B[X][V](o,M[X][G](x))}}e[_]=o,u.push(o),o++}}const f=n.clone();for(const w in n.attributes){const x=l[w];if(f.setAttribute(w,new x.constructor(x.array.slice(0,o*x.itemSize),x.itemSize,x.normalized)),w in c)for(let _=0;_<c[w].length;_++){const A=c[w][_];f.morphAttributes[w][_]=new A.constructor(A.array.slice(0,o*A.itemSize),A.itemSize,A.normalized)}}return f.setIndex(u),f}const Wt=18,ue=3.2,$t=2.55,ln=Wt/2,Nr=8.8,gr=$t*1.2,en=$t*1.4,Qs=$t*1.08,lS=.22,yr={straight:["north","south"],corner:["north","east"],tjunction:["north","east","west"],crossroad:["north","east","south","west"],teleport:["east","west"],ghostchamber:["north"]},cS=[{type:"straight",position:[-24,0,-6],rotation:Math.PI/2},{type:"corner",position:[-10,0,15],rotation:Math.PI/2},{type:"crossroad",position:[12,0,15],rotation:0},{type:"tjunction",position:[26,0,-5],rotation:Math.PI},{type:"teleport",position:[1,0,-22],rotation:0},{type:"ghostchamber",position:[0,0,0],rotation:0}],Te=uS(),ir=hS(),ca=new Map;function uS(){return{glass:new $0({color:14742783,transmission:.98,thickness:lS,roughness:.04,metalness:.02,ior:1.48,reflectivity:.5,transparent:!0,side:Fe,attenuationColor:16777215,attenuationDistance:.8,userData:{isMazeGlass:!0}}),rim:new On({color:1920728,emissive:996512,emissiveIntensity:.6,roughness:.24,metalness:.4}),structure:new On({color:1384239,emissive:330516,roughness:.64,metalness:.2}),walkway:new On({color:3818839,emissive:791330,roughness:.76,metalness:.08}),led:new On({color:2909439,emissive:1459442,emissiveIntensity:2.1,roughness:.14,metalness:.08}),halo:new Be({color:1919743,transparent:!0,opacity:.1,side:Fe}),ledGlow:new Be({color:1655252,transparent:!0,opacity:.24,side:Fe}),teleport:new On({color:9236479,emissive:4645631,emissiveIntensity:1.55,transparent:!0,opacity:.66,roughness:.12,metalness:.08})}}function hS(){return{pedestalBase:new yn(Nr,Nr+.6,1.35,10),pedestalTop:new yn(Nr-1.1,Nr-.45,.36,10),pedestalHalo:new si(Nr+.85,28),hubDeck:new yn($t*1.02,$t*1.08,.18,18),rimRing:new fs($t+.02,.12,8,24),hubHalo:new fs($t*.76,.08,8,20),pipeShell:new yn($t,$t,ln,20,1,!0),walkwayX:new _n(ln,.18,gr*1.34),walkwayZ:new _n(gr*1.34,.18,ln),ledStripX:new _n(ln*.98,.06,.18),ledStripZ:new _n(.18,.06,ln*.98),ledGlowX:new xi(ln*.98,.95),ledGlowZ:new xi(.95,ln*.98),portalRing:new fs($t*.9,.14,10,24),portalFace:new si($t*.72,20)}}function Dn(n,t,e,i,s=Math.random()*Math.PI*2){return n.userData.pulse={base:t,amplitude:e,speed:i,phase:s},n}function Mf(n){return n==="east"||n==="west"?"x":"z"}function wf(n){return n==="east"||n==="south"?1:-1}function Ef(n,t){n.rotation.set(0,0,0),t==="x"?n.rotation.z=Math.PI/2:n.rotation.x=Math.PI/2}function dS(n,t,e,i,s,r=24,o=1){const a=new yn(e,e,t,r,o,i),l=new bt(a);return Ef(l,n),l.position.copy(s),l.updateMatrixWorld(!0),a.applyMatrix4(l.matrixWorld),a.deleteAttribute("uv"),a}function Mn(){const n=new ae,t=new bt(ir.pedestalBase,Te.structure);t.position.y=-.24;const e=new bt(ir.pedestalTop,Te.walkway);e.position.y=.44;const i=new bt(ir.pedestalHalo,Te.halo);return i.rotation.x=-Math.PI/2,i.position.y=.052,n.add(t,e,i),n}function bf(){const n=new ae,t=new bt(ir.hubDeck,Te.walkway);t.position.y=ue-$t+.14;const e=Dn(new bt(ir.hubHalo,Te.led),1.2,.18,1.3);return e.position.y=ue-$t+.22,e.rotation.x=Math.PI/2,n.add(t,e),n}function fS(n,t){const e=new bt(ir.rimRing,Te.rim);return e.position.copy(t),n==="x"&&(e.rotation.y=Math.PI/2),e}function pS(n,t,e=ln,i=0){const s=n==="x"?new _n(e,.18,gr*1.34):new _n(gr*1.34,.18,e),r=new bt(s,Te.walkway),o=i+e*.5;return n==="x"?r.position.set(t*o,ue-$t+.14,0):r.position.set(0,ue-$t+.14,t*o),r}function mS(n,t,e=ln,i=0){const s=new ae,r=n==="x"?new _n(e*.98,.06,.18):new _n(.18,.06,e*.98),o=n==="x"?new xi(e*.98,.95):new xi(.95,e*.98),a=i+e*.5;return[-1,1].forEach(l=>{const c=Dn(new bt(r,Te.led),1.4,.34,1.2,l),u=new bt(o,Te.ledGlow);n==="x"?(c.position.set(t*a,ue-$t+.3,l*1.08),u.position.set(t*a,ue-$t+.14,l*1.02)):(c.position.set(l*1.08,ue-$t+.3,t*a),u.position.set(l*1.02,ue-$t+.14,t*a)),u.rotation.x=-Math.PI/2,s.add(c,u)}),s}function lo(n,t={}){const e=new ae,i=Mf(n),s=wf(n),r=t.length??ln,o=t.startOffset??0,a=o+r*.5,l=new bt(new yn($t,$t,r,20,1,!0),Te.glass);Ef(l,i),i==="x"?l.position.set(s*a,ue,0):l.position.set(0,ue,s*a);const c=i==="x"?new T(s*(o+r),ue,0):new T(0,ue,s*(o+r));return e.add(l),e.add(fS(i,c)),e.add(pS(i,s,r,o)),e.add(mS(i,s,r,o)),e}function Tf(n,t){return new class extends qn{getPoint(e,i=new T){const s=Math.PI-e*(Math.PI/2),r=en+n*Math.cos(s),o=-en+n*Math.sin(s);return i.set(r,t,o)}}}function gS(){const n=en+gr*.67,t=en-gr*.67,e=new nr;e.absarc(en,-en,n,Math.PI,Math.PI/2,!0),e.absarc(en,-en,t,Math.PI/2,Math.PI,!1);const i=new bt(new za(e,20),Te.walkway);return i.rotation.x=-Math.PI/2,i.position.y=ue-$t+.14,i}function vS(){const n=new ae;return[en-1.08,en+1.08].forEach((e,i)=>{const s=Tf(e,ue-$t+.3),r=Dn(new bt(new Ni(s,18,.05,8,!1),Te.led),1.35,.28,1.15,i);n.add(r)}),n}function _S(){const n=new ae,t=Tf(en,ue),e=new bt(new Ni(t,24,$t,16,!1),Te.glass);return n.add(e),n.add(gS()),n.add(vS()),n}function yS(){const n=new ae;return n.userData.type="corner",n.add(Mn()),n.add(lo("north",{length:ln-en,startOffset:en})),n.add(lo("east",{length:ln-en,startOffset:en})),n.add(_S()),n}function xS(n){const t=[{axis:"x",length:Qs*2,position:new T(0,ue,0)}];return n==="crossroad"?t.push({axis:"z",length:Qs*2,position:new T(0,ue,0)}):t.push({axis:"z",length:Qs,position:new T(0,ue,-Qs*.5)}),t}function SS(n){if(ca.has(n))return ca.get(n);const e=xS(n).map(s=>dS(s.axis,s.length,$t,!0,s.position,48));let i=Sf(e,!1);return i=aS(i,.001),i.computeVertexNormals(),ca.set(n,i.clone()),ca.get(n)}const zl=new Map;function MS(n){if(zl.has(n))return zl.get(n);const t=Te.glass.clone();return t.userData.isMazeGlass=!0,t.customProgramCacheKey=()=>n,t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
      varying vec3 vRawPos;`),e.vertexShader=e.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      vRawPos = position;`);let i="";n==="crossroad"?i=`
          float rSq = 2.54 * 2.54; 
          float dy = vRawPos.y - 3.2; // HUB_HEIGHT
          float distSqX = dy * dy + vRawPos.z * vRawPos.z;
          float distSqZ = vRawPos.x * vRawPos.x + dy * dy;
          // Delete overlapping interiors
          if (distSqX < rSq || distSqZ < rSq) discard;
        `:n==="tjunction"&&(i=`
          float rSq = 2.54 * 2.54;
          float dy = vRawPos.y - 3.2; // HUB_HEIGHT
          float distSqX = dy * dy + vRawPos.z * vRawPos.z;
          float distSqZ = vRawPos.x * vRawPos.x + dy * dy;
          
          if (distSqX < rSq) {
              // Pixel is inside the X pipe
              discard;
          }
          if (distSqZ < rSq && vRawPos.z < 0.0) {
              // Pixel is inside the Z pipe (which only exists on the negative Z side)
              discard;
          }
        `),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
      varying vec3 vRawPos;`),e.fragmentShader=e.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
      ${i}
      `)},zl.set(n,t),t}function wS(n){const t=new ae;return t.userData.type=n,t.add(Mn()),t.add(bf()),t.add(new bt(SS(n),MS(n))),yr[n].forEach(e=>{t.add(lo(e,{length:ln-Qs,startOffset:Qs}))}),t}function ES(n){const t=Mf(n),e=wf(n),i=new ae,s=e*(ln-.3),r=new si($t*.96,64),o=new ii({uniforms:{uTime:{value:0}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform float uTime;
      varying vec2 vUv;

      void main() {
        vec2 uv = vUv - 0.5;
        float r = length(uv) * 2.0;
        float a = atan(uv.y, uv.x);

        // Singularity hole mask
        float hole = smoothstep(0.2, 0.25, r);
        
        // Vortex physics: the "suction" twist
        float twist = 8.0 / (r + 0.1);
        
        // Create a grid of "Digital Pieces"
        float rFreq = 14.0;
        float aFreq = 10.0;
        float rCoord = r * rFreq - uTime * 6.0;
        float aCoord = a * aFreq + twist;
        
        vec2 grid = fract(vec2(rCoord, aCoord));
        float piece = step(0.6, grid.x) * step(0.2, grid.y);
        
        // Deep Saturated Blue
        vec3 deepBlue = vec3(0.05, 0.2, 1.0);
        
        // Subtle energy flicker
        float flicker = 0.85 + 0.15 * sin(uTime * 12.0 + rCoord * 10.0);

        // Intensity
        float intensity = 2.2;

        // Final color
        vec3 color = deepBlue * intensity * flicker;

        // Space between pieces is unfilled (alpha = 0)
        float alpha = piece * hole * (1.0 - smoothstep(0.92, 1.0, r));
        
        // Use discard for alphaTest compatibility
        if (alpha < 0.1) discard;

        gl_FragColor = vec4(color, 1.0);
      }
    `,transparent:!1,alphaTest:.1,side:Fe,depthWrite:!0}),a=new bt(r,o);a.onBeforeRender=()=>{o.uniforms.uTime.value=performance.now()*.001};const l=new ka($t*.88,$t*1.05,32),c=new Be({color:65535,transparent:!0,opacity:.12,blending:Wi,side:Fe,depthWrite:!1}),u=new bt(l,c);return u.renderOrder=10,t==="x"?(a.position.set(s,ue,0),a.rotation.y=Math.PI/2,u.position.set(s+e*.05,ue,0),u.rotation.y=Math.PI/2):(a.position.set(0,ue,s),a.rotation.y=e>0?Math.PI:0,u.position.set(0,ue,s+e*.05),u.rotation.y=e>0?Math.PI:0),i.add(a,u),i}function go(n){let t;if(n==="corner")t=yS();else if(n==="ghostchamber")t=bS();else if(n==="tjunction"||n==="crossroad")t=wS(n);else{t=new ae,t.userData.type=n;const e=yr[n];if(!e)throw new Error(`Unknown maze piece type: ${n}`);t.add(Mn()),t.add(bf()),e.forEach(i=>{t.add(lo(i))}),n==="teleport"&&t.add(ES("west"))}return t.traverse(e=>{e.isMesh&&e.material?.userData?.isMazeGlass&&(e.renderOrder=1)}),t}function bS(){const n=new ae;n.userData.type="ghostchamber";const t=new ae;t.position.z=4.5,n.add(t),n.add(Mn());const e=$t,i=18.9,s=13.9,r=4,o=new nr,a=-i/2,l=-s/2;o.moveTo(a,l+r),o.lineTo(a,l+s-r),o.quadraticCurveTo(a,l+s,a+r,l+s),o.lineTo(a+i-r,l+s),o.quadraticCurveTo(a+i,l+s,a+i,l+s-r),o.lineTo(a+i,l+r),o.quadraticCurveTo(a+i,l,a+i-r,l),o.lineTo(a+r,l),o.quadraticCurveTo(a,l,a,l+r);const c={depth:.01,bevelEnabled:!0,bevelThickness:e,bevelSize:e,bevelSegments:20,curveSegments:24},u=new Pa(o,c),h=Te.glass.clone();h.userData.isMazeGlass=!0,h.customProgramCacheKey=()=>"ghostchamber",h.onBeforeCompile=k=>{k.vertexShader=k.vertexShader.replace("#include <common>",`#include <common>
      varying vec3 vRawPos;`),k.vertexShader=k.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      vRawPos = position;`),k.fragmentShader=k.fragmentShader.replace("#include <common>",`#include <common>
      varying vec3 vRawPos;`),k.fragmentShader=k.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
      // The shell is rotated -90deg on X, so Local Y becomes World -Z.
      if (vRawPos.y > 6.9) { 
        float distToPipeCenter = sqrt(vRawPos.x * vRawPos.x + vRawPos.z * vRawPos.z);
        if (distToPipeCenter < 2.54) {
            discard;
        }
      }
      `)};const p=new bt(u,h);p.rotation.x=-Math.PI/2,p.position.y=ue,t.add(p);const d=18,g=14,v=3,m=new nr,f=-d/2,w=-g/2;m.moveTo(f,w+v),m.lineTo(f,w+g-v),m.quadraticCurveTo(f,w+g,f+v,w+g),m.lineTo(f+d-v,w+g),m.quadraticCurveTo(f+d,w+g,f+d,w+g-v),m.lineTo(f+d,w+v),m.quadraticCurveTo(f+d,w,f+d-v,w),m.lineTo(f+v,w),m.quadraticCurveTo(f,w,f,w+v);const x=new Pa(m,{depth:.18,bevelEnabled:!1,curveSegments:16});x.computeBoundingBox();const _=-.5*(x.boundingBox.max.z-x.boundingBox.min.z);x.translate(0,0,_);const A=new bt(x,Te.walkway);A.rotation.x=-Math.PI/2,A.position.set(0,ue-$t+.14,0),t.add(A);const R=m.getPoints(24).map(k=>new T(k.x,0,k.y)),D=new Ic(R,!0),M=new Ni(D,128,.06,8,!0),S=Dn(new bt(M,Te.led),1.4,.34,1.2,0);S.position.set(0,ue-$t+.3,0),t.add(S);const L=new Ni(D,128,.4,8,!0),B=new bt(L,Te.ledGlow);B.position.set(0,ue-$t+.14,0),t.add(B);const z=1.8,G=new nr;G.absarc(0,.5,z,0,Math.PI,!1),G.lineTo(-z,-1.5),G.lineTo(-z/2,-.5),G.lineTo(0,-1.5),G.lineTo(z/2,-.5),G.lineTo(z,-1.5),G.lineTo(z,.5);const X=G.getPoints(16).map(k=>new T(k.x,0,k.y)),K=new Ic(X,!0),U=new Ni(K,64,.08,8,!0),st=new za(G,16),ft=[-4.5,4.5],yt=[-3,3],It=new af,kt=[new T(-.6,0,-.2),new T(-.3,0,.1),new T(0,0,-.2),new T(.3,0,.1),new T(.6,0,-.2)];It.add(new Hr(kt[0],kt[1])),It.add(new Hr(kt[1],kt[2])),It.add(new Hr(kt[2],kt[3])),It.add(new Hr(kt[3],kt[4]));const ie=new Ni(It,16,.05,8,!1),jt=new fs(.25,.05,8,16);let Z=0;ft.forEach(k=>{let lt=0;yt.forEach(it=>{const ct=(Z+lt)%2===1,Ot=Dn(new bt(U,Te.led),1.2,.4,1.8,Math.random()*Math.PI);Ot.position.set(k,ue-$t+.24,it);const Dt=new bt(st,Te.ledGlow);Dt.rotation.x=Math.PI/2,Dt.position.set(k,ue-$t+.24,it),t.add(Ot,Dt);const b=new ae,y=Dn(new bt(jt,Te.led),1.4,.3,2,Math.random());y.rotation.x=Math.PI/2,y.position.set(-.7,0,.6);const O=Dn(new bt(jt,Te.led),1.4,.3,2,Math.random());if(O.rotation.x=Math.PI/2,O.position.set(.7,0,.6),b.add(y,O),ct){const q=Dn(new bt(ie,Te.led),1.4,.3,2,Math.random());b.add(q)}b.position.set(k,ue-$t+.24,it),t.add(b),lt++}),Z++});const $=lo("north",{length:6.55,startOffset:6.95}),xt=$.children[0],Tt=Te.glass.clone();Tt.userData.isMazeGlass=!0,Tt.customProgramCacheKey=()=>"ghostchamber_pipe",Tt.onBeforeCompile=k=>{k.vertexShader=k.vertexShader.replace("#include <common>",`#include <common>
      varying vec3 vWorldPos;`),k.vertexShader=k.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;`),k.fragmentShader=k.fragmentShader.replace("#include <common>",`#include <common>
      varying vec3 vWorldPos;`),k.fragmentShader=k.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
      
      float rSq = 2.54 * 2.54; 
      float dy = vWorldPos.y - 3.2;
      float dz = vWorldPos.z - (-6.95);
      float distSqX = dy * dy + dz * dz;
      
      if (distSqX < rSq) {
          discard;
      }
      `)},xt.material=Tt,t.add($);const St=new ae,Qt=new Be({color:16711680,transparent:!0,opacity:.15,blending:Wi,side:Fe,depthWrite:!1}),pe=new si($t-.1,32),C=Dn(new bt(pe,Qt),1.1,.1,1.5,0);St.add(C);const tt=new Be({color:16720418}),Q=new Be({color:16711680,transparent:!0,opacity:.5,blending:Wi,depthWrite:!1}),j=[-1.2,-.4,.4,1.2];return j.forEach(k=>{const lt=Math.sqrt(Math.pow($t-.15,2)-Math.pow(k,2))*2,it=new yn(.04,.04,lt,8),ct=Dn(new bt(it,tt),1.3,.7,2,Math.random());ct.rotation.z=Math.PI/2,ct.position.y=k;const Ot=new yn(.12,.12,lt,8),Dt=new bt(Ot,Q);Dt.rotation.z=Math.PI/2,Dt.position.y=k,St.add(ct,Dt)}),j.forEach(k=>{const lt=Math.sqrt(Math.pow($t-.15,2)-Math.pow(k,2))*2,it=new yn(.04,.04,lt,8),ct=Dn(new bt(it,tt),1.3,.7,2,Math.random());ct.position.x=k;const Ot=new yn(.12,.12,lt,8),Dt=new bt(Ot,Q);Dt.position.x=k,St.add(ct,Dt)}),St.position.set(0,ue,-13.1),t.add(St),n}function TS(n){const t=new ae;return n.forEach((e,i)=>{const s=i%2,r=Math.floor(i/2),o=s*24,a=r*24,l=go(e.type);l.position.set(o,6,a),t.add(l)}),t}function bs(){const n=new ae,t=new ae,e=new ae,i=3.5,s=new On({color:16765466,emissive:16756736,emissiveIntensity:.45,roughness:.32,metalness:.05,transparent:!1,opacity:1,depthWrite:!0}),r=s.clone(),o={blink:{value:1},power:{value:0}};r.customProgramCacheKey=()=>"showroom-pacman-painted-eyes",r.onBeforeCompile=U=>{U.uniforms.uEyeBlink=o.blink,U.uniforms.uPowerMode=o.power,U.vertexShader=U.vertexShader.replace("#include <common>",`#include <common>
      varying vec3 vLocalPos;`),U.vertexShader=U.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      vLocalPos = position;`),U.fragmentShader=U.fragmentShader.replace("#include <common>",`#include <common>
      uniform float uEyeBlink;
      uniform float uPowerMode;
      varying vec3 vLocalPos;`),U.fragmentShader=U.fragmentShader.replace("#include <opaque_fragment>",`
      if (vLocalPos.z > 0.0 && vLocalPos.y > 0.35) {
        float blinkHeight = max(0.08, uEyeBlink);
        vec2 rightEye = vec2((vLocalPos.x - 1.18) / 0.42, (vLocalPos.y - 1.7) / (0.43 * blinkHeight));
        vec2 leftEye = vec2((vLocalPos.x + 1.18) / 0.42, (vLocalPos.y - 1.7) / (0.43 * blinkHeight));
        float rightEyeMask = 1.0 - smoothstep(0.76, 1.0, dot(rightEye, rightEye));
        float leftEyeMask = 1.0 - smoothstep(0.76, 1.0, dot(leftEye, leftEye));

        vec2 rightGlint = vec2((vLocalPos.x - 1.18) / 0.08, (vLocalPos.y - 1.76) / (0.08 * blinkHeight));
        vec2 leftGlint = vec2((vLocalPos.x + 1.18) / 0.08, (vLocalPos.y - 1.76) / (0.08 * blinkHeight));
        float rightGlintMask = 1.0 - smoothstep(0.55, 1.0, dot(rightGlint, rightGlint));
        float leftGlintMask = 1.0 - smoothstep(0.55, 1.0, dot(leftGlint, leftGlint));

        float eyeMask = max(rightEyeMask, leftEyeMask);
        float glintMask = max(rightGlintMask, leftGlintMask);
        float eyeGlow = 1.0 - smoothstep(1.0, 2.0, min(dot(rightEye, rightEye), dot(leftEye, leftEye)));

        outgoingLight = mix(outgoingLight, vec3(0.18, 0.15, 0.03), eyeGlow * 0.18 * uEyeBlink);
        outgoingLight = mix(outgoingLight, vec3(0.006, 0.007, 0.01), eyeMask);
        vec3 glintColor = mix(vec3(0.95, 0.82, 0.34), vec3(0.15, 0.92, 1.0), uPowerMode);
        outgoingLight = mix(outgoingLight, glintColor, glintMask * uEyeBlink);
      }
      #include <opaque_fragment>`)};const a=new Be({color:65795,side:Fe,transparent:!1,opacity:1,depthWrite:!0}),l={mouthAngle:{value:.35},eyeBlink:{value:1},eyeFade:{value:1}},c=s.clone();c.customProgramCacheKey=()=>"pacman-death-mouth-cut",c.onBeforeCompile=U=>{U.uniforms.uDeathMouthAngle=l.mouthAngle,U.vertexShader=U.vertexShader.replace("#include <common>",`#include <common>
      varying vec3 vDeathLocalPos;`),U.vertexShader=U.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      vDeathLocalPos = position;`),U.fragmentShader=U.fragmentShader.replace("#include <common>",`#include <common>
      uniform float uDeathMouthAngle;
      uniform float uDeathEyeBlink;
      uniform float uDeathEyeFade;
      varying vec3 vDeathLocalPos;`),U.uniforms.uDeathEyeBlink=l.eyeBlink,U.uniforms.uDeathEyeFade=l.eyeFade,U.fragmentShader=U.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
      float deathAngle = atan(abs(vDeathLocalPos.y), vDeathLocalPos.z);
      float deathBlinkHeight = max(0.08, uDeathEyeBlink);
      vec2 deathRightEye = vec2((vDeathLocalPos.x - 1.18) / 0.42, (vDeathLocalPos.y - 1.7) / (0.43 * deathBlinkHeight));
      vec2 deathLeftEye = vec2((vDeathLocalPos.x + 1.18) / 0.42, (vDeathLocalPos.y - 1.7) / (0.43 * deathBlinkHeight));
      float deathRightEyeMask = 1.0 - smoothstep(0.76, 1.0, dot(deathRightEye, deathRightEye));
      float deathLeftEyeMask = 1.0 - smoothstep(0.76, 1.0, dot(deathLeftEye, deathLeftEye));
      float deathEyeMask = max(deathRightEyeMask, deathLeftEyeMask) * uDeathEyeFade;
      if (deathAngle < uDeathMouthAngle && deathEyeMask < 0.08) discard;`),U.fragmentShader=U.fragmentShader.replace("#include <opaque_fragment>",`
      if (vDeathLocalPos.z > 0.0 && vDeathLocalPos.y > 0.35) {
        float deathBlinkHeight = max(0.08, uDeathEyeBlink);
        vec2 deathRightEye = vec2((vDeathLocalPos.x - 1.18) / 0.42, (vDeathLocalPos.y - 1.7) / (0.43 * deathBlinkHeight));
        vec2 deathLeftEye = vec2((vDeathLocalPos.x + 1.18) / 0.42, (vDeathLocalPos.y - 1.7) / (0.43 * deathBlinkHeight));
        float deathRightEyeMask = 1.0 - smoothstep(0.76, 1.0, dot(deathRightEye, deathRightEye));
        float deathLeftEyeMask = 1.0 - smoothstep(0.76, 1.0, dot(deathLeftEye, deathLeftEye));

        vec2 deathRightGlint = vec2((vDeathLocalPos.x - 1.18) / 0.08, (vDeathLocalPos.y - 1.76) / (0.08 * deathBlinkHeight));
        vec2 deathLeftGlint = vec2((vDeathLocalPos.x + 1.18) / 0.08, (vDeathLocalPos.y - 1.76) / (0.08 * deathBlinkHeight));
        float deathRightGlintMask = 1.0 - smoothstep(0.55, 1.0, dot(deathRightGlint, deathRightGlint));
        float deathLeftGlintMask = 1.0 - smoothstep(0.55, 1.0, dot(deathLeftGlint, deathLeftGlint));

        float deathEyeMask = max(deathRightEyeMask, deathLeftEyeMask) * uDeathEyeFade;
        float deathGlintMask = max(deathRightGlintMask, deathLeftGlintMask) * uDeathEyeFade;
        outgoingLight = mix(outgoingLight, vec3(0.006, 0.007, 0.01), deathEyeMask);
        outgoingLight = mix(outgoingLight, vec3(0.95, 0.82, 0.34), deathGlintMask);
      }
      #include <opaque_fragment>`)};const u=new Kn(i,48,24,0,Math.PI*2,0,Math.PI/2),h=new si(i*.985,48),p=new bt(new Kn(i,48,32),c);p.visible=!1;const d=a.clone(),g=new ae,v=new bt(new si(i*.99,48,0,Math.PI),d);v.rotation.x=Math.PI/2;const m=v.clone();g.add(v,m),g.visible=!1;const f=new Be({color:328967,transparent:!0,opacity:1,depthWrite:!1}),w=new Be({color:15913815,transparent:!0,opacity:1,depthWrite:!1}),x=new ae,_=[],A=new T(1,0,0);[-1,1].forEach(U=>{const st=new ae,ft=new bt(new Kn(.32,18,18),f),yt=new bt(new Kn(.075,10,10),w);yt.position.set(0,.1,.2),st.add(ft,yt),st.userData.baseDeathPosition=new T(U*1.18,1.7,2.72),st.position.copy(st.userData.baseDeathPosition),x.add(st),_.push(st)}),x.visible=!1;const P=new bt(u,r),R=new bt(h,a);R.rotation.x=Math.PI/2,t.add(P,R),e.rotation.x=Math.PI;const D=new bt(u,s),M=new bt(h,a);M.rotation.x=-Math.PI/2,e.add(D,M);const S=new bt(new Kn(i*.96,40,14,Math.PI,Math.PI),a);n.add(S,t,e,p,g,x);const L=.45,B=1.25,z=[s,r,a,c,d,f,w],G={active:!1,elapsed:0,duration:1.45,baseScale:new T(1,1,1)};let V=!1;function X(U){z.forEach(st=>{st.opacity=U})}function K(){n.visible=!0,X(1),t.visible=!0,e.visible=!0,S.visible=!0,p.visible=!1,g.visible=!1,x.visible=!1,x.rotation.x=0,l.mouthAngle.value=.35,l.eyeBlink.value=1,l.eyeFade.value=0,v.rotation.x=Math.PI/2,m.rotation.x=Math.PI/2,_.forEach(U=>{U.position.copy(U.userData.baseDeathPosition),U.rotation.set(0,0,0),U.scale.y=1}),G.active=!1,G.elapsed=0}return n.setPowerMode=U=>{V=!!U,o.power.value=V?1:0,V||(s.emissiveIntensity=L,r.emissiveIntensity=L)},n.playDeathAnimation=(U=1.45)=>{G.baseScale.copy(n.scale),K(),G.active=!0,G.duration=U,t.visible=!1,e.visible=!1,S.visible=!1,p.visible=!0,g.visible=!0,x.visible=!0,l.eyeFade.value=0},n.resetDeathAnimation=K,n.isDeathAnimationActive=()=>G.active,n.userData={type:"pacman",update:(U,st=1/60)=>{if(G.active){G.elapsed=Math.min(G.duration,G.elapsed+st);const It=G.duration>0?G.elapsed/G.duration:1,kt=An.smoothstep(It,.82,1),ie=An.smoothstep(It,0,1);l.mouthAngle.value=An.lerp(.35,Math.PI,ie),l.eyeBlink.value=1,l.eyeFade.value=0;const jt=l.mouthAngle.value;v.rotation.x=Math.PI/2-jt,m.rotation.x=Math.PI/2+jt,x.rotation.x=0;const Z=1-An.smoothstep(It,.72,.94);f.opacity=Z,w.opacity=Z,_.forEach($=>{$.position.copy($.userData.baseDeathPosition).applyAxisAngle(A,-jt),$.position.add($.position.clone().normalize().multiplyScalar(.08)),$.rotation.set(0,0,0),$.scale.y=1}),o.blink.value=1,n.scale.copy(G.baseScale),X(1-kt),It>=1&&(G.active=!1,n.visible=!1);return}const ft=Math.abs(Math.sin(U*6.5))*.48;t.rotation.x=-ft,e.rotation.x=Math.PI+ft,X(1);const yt=Math.sin(U*2.1)>.985?.18:1;if(o.blink.value=yt,V){const It=.82+Math.sin(U*8)*.18,kt=B*It;s.emissiveIntensity=kt,r.emissiveIntensity=kt}}},n}function qi(n=16711748){const t=new ae,e=2.1,i=4.5,s=64,r=32,o=new Kn(e,s,16,0,Math.PI*2,0,Math.PI/2);o.translate(0,i,0);const a=new yn(e,e,i,s,r,!0);a.translate(0,i/2,0);const l=Sf([o,a]);l.attributes.position.setUsage(Mm);const c=l.attributes.position,u=new Float32Array(c.count);for(let _=0;_<c.count;_++)u[_]=c.getY(_);const h={uniforms:{uColor:{value:new Ht(n)},uHeight:{value:i},uEyeRight:{value:new T(.8,i+.65,Math.sqrt(e*e-.8*.8-.65*.65))},uEyeLeft:{value:new T(-.8,i+.65,Math.sqrt(e*e-.8*.8-.65*.65))},uIsVulnerable:{value:0},uVulnerableColor:{value:new Ht(8959)},uVulnerableEyeColor:{value:new Ht(16758920)},uTime:{value:0}},vertexShader:`
      varying vec3 vNormal;
      varying vec3 vLocalPos;
      void main() {
        // Normal in view space for Fresnel calculation
        vNormal = normalize(normalMatrix * normal);
        vLocalPos = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform vec3 uColor;
      uniform float uHeight;
      uniform vec3 uEyeRight;
      uniform vec3 uEyeLeft;
      uniform float uIsVulnerable;
      uniform vec3 uVulnerableColor;
      uniform vec3 uVulnerableEyeColor;
      uniform float uTime;
      
      varying vec3 vNormal;
      varying vec3 vLocalPos;
      
      void main() {
        // Fresnel Effect: glow more at grazing angles (edges)
        float fresnel = pow(1.0 - abs(vNormal.z), 2.2);
        
        // Vertical Gradient: glow more at the bottom skirt
        float bottomGlow = smoothstep(uHeight, 0.0, vLocalPos.y);
        
        // Restored to the beloved original 0.1 base opacity for the pure glow
        float baseOpacity = 0.1;           
        float rimOpacity = fresnel * 0.8;  
        float skirtOpacity = bottomGlow * 0.25; 
        
        float finalAlpha = baseOpacity + rimOpacity + skirtOpacity;
        
        // --- Vulnerability State Logic ---
        bool isVulnerable = uIsVulnerable > 0.5;
        bool isFlashing = uIsVulnerable > 1.5;
        
        // Flashing alternates cleanly between 0 and 1 every ~0.2 seconds
        float flashCycle = isFlashing ? step(0.0, sin(uTime * 15.0)) : 0.0;
        
        // Classic flashing colors: Blue body/Peach eyes -> White body/Red eyes
        vec3 activeVulnerableColor = mix(uVulnerableColor, vec3(0.9, 0.9, 1.0), flashCycle);
        vec3 activeVulnerableEyeColor = mix(uVulnerableEyeColor, vec3(1.0, 0.1, 0.1), flashCycle);
        
        // Base color shift: Transition to active vulnerable color if scared
        vec3 activeShellColor = mix(uColor, activeVulnerableColor, isVulnerable ? 1.0 : 0.0);
        vec3 finalColor = mix(activeShellColor, vec3(1.0), fresnel * 0.35);
        
        // --- Shader Eyes & Mouth (Seamlessly painted onto the curvature) ---
        // Only draw on the front half of the ghost
        if (vLocalPos.z > 0.0) {
           float dR = distance(vLocalPos, uEyeRight);
           float dL = distance(vLocalPos, uEyeLeft);
           float dEye = min(dR, dL);
           
           float eyeCoreRadius = 0.55; 
           float eyeHaloRadius = 0.8; 
           
           float eyeCore = 1.0 - smoothstep(0.28, eyeCoreRadius, dEye);
           float eyeHalo = 1.0 - smoothstep(0.28, eyeHaloRadius, dEye);
           
           float eyeIntensity = gl_FrontFacing ? 1.0 : 0.2;
           
           // Transition eye color when vulnerable
           vec3 currentEyeColor = mix(vec3(1.0), activeVulnerableEyeColor, isVulnerable ? 1.0 : 0.0);
           
           // Paint the eyes over the shell color
           finalColor = mix(finalColor, currentEyeColor, eyeCore * eyeIntensity);
           finalAlpha += ((eyeHalo * 0.15) + (eyeCore * 0.85)) * eyeIntensity; 
           
           // --- Vulnerable Animated Squiggly Mouth ---
           if (isVulnerable) {
               // Using cos() makes it perfectly symmetrical around x=0!
               // Adding uTime animates the wave, making it travel horizontally.
               float mouthY = 3.5 + cos(vLocalPos.x * 7.0 + uTime * 8.0) * 0.15;
               float dMouth = abs(vLocalPos.y - mouthY);
               
               // Constrain the mouth width
               if (abs(vLocalPos.x) < 1.4 && vLocalPos.y > 2.5 && vLocalPos.y < 4.5) {
                   // Soft fade at the edges of the mouth
                   float mouthEdgeFade = smoothstep(1.4, 1.0, abs(vLocalPos.x));
                   
                   float mouthCore = 1.0 - smoothstep(0.04, 0.08, dMouth);
                   float mouthHalo = 1.0 - smoothstep(0.08, 0.25, dMouth);
                   
                   mouthCore *= mouthEdgeFade;
                   mouthHalo *= mouthEdgeFade;
                   
                   finalColor = mix(finalColor, activeVulnerableEyeColor, mouthCore * eyeIntensity);
                   finalAlpha += ((mouthHalo * 0.2) + (mouthCore * 0.8)) * eyeIntensity;
               }
           }
        }
        
        gl_FragColor = vec4(finalColor, finalAlpha);
      }
    `},p=new ii({uniforms:h.uniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,transparent:!0,blending:Wi,depthWrite:!1,side:Fe}),d=new ae;t.add(d);const g=new bt(l,p);g.renderOrder=2,d.add(g);const v=new Be({color:0,transparent:!0,opacity:.85,blending:ds,depthWrite:!1}),m=new bt(l,v);m.scale.set(.98,.98,.98),m.renderOrder=1,d.add(m);const f=6,w=.35,x=4.2;return t.userData={type:"ghost",update:_=>{h.uniforms.uTime.value=_,d.position.y=Math.sin(_*2.2)*.2;for(let A=0;A<c.count;A++){const P=u[A];if(P<2.5){const R=c.getX(A),D=c.getZ(A),M=Math.atan2(D,R),S=Math.sin(M*f+_*x),L=Math.pow((2.5-P)/2.5,1.1);c.setY(A,P+S*w*L)}}l.computeVertexNormals(),c.needsUpdate=!0}},t.setVulnerable=_=>{_==="flashing"?h.uniforms.uIsVulnerable.value=2:_?h.uniforms.uIsVulnerable.value=1:h.uniforms.uIsVulnerable.value=0},t}function vo(){const n=new ae,t=16755200,e=new On({color:t,emissive:t,emissiveIntensity:6}),i=new Be({color:t,transparent:!0,opacity:.4,side:Fe}),s=new bt(new cu(1,0),e);n.add(s);const r=new bt(new fs(1.8,.04,8,48),i);return r.rotation.x=Math.PI/2,n.add(r),n.userData={type:"pellet",update:o=>{s.rotation.y=o*2,s.rotation.z=o*1.5,n.position.y+=Math.sin(o*3)*.006,r.rotation.z=-o*3,r.scale.setScalar(1+Math.sin(o*4)*.1)}},n}function Af(){const n=new ae,t=16755200,e=new On({color:t,emissive:t,emissiveIntensity:1.5,roughness:.2,metalness:.8}),i=new Be({color:t,transparent:!0,opacity:.3,blending:Wi,depthWrite:!1}),s=new Kn(.35,16,16),r=new bt(s,e),o=new bt(s,i);return o.scale.set(1.4,1.4,1.4),n.add(r),n.add(o),n.userData={type:"standard_pellet",update:a=>{n.position.y+=Math.sin(a*4)*.005}},n}const AS=JSON.parse('[{"type":"ghostchamber","position":[0,0,-18],"rotation":3.141592653589793,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"tjunction","position":[0,0,0],"rotation":6.283185307179586,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"tjunction","position":[18,0,0],"rotation":7.853981633974483,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"tjunction","position":[-18,0,0],"rotation":10.995574287564276,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"tjunction","position":[18,0,-18],"rotation":10.995574287564276,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"tjunction","position":[-18,0,-18],"rotation":14.137166941154069,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"tjunction","position":[-18,0,-36],"rotation":29.845130209103047,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"tjunction","position":[18,0,-36],"rotation":32.986722862692844,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"straight","position":[0,0,-36],"rotation":32.986722862692844,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"corner","position":[18,0,-54],"rotation":42.411500823462234,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"corner","position":[-18,0,-54],"rotation":53.40707511102652,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"corner","position":[36,0,-54],"rotation":58.11946409141122,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"corner","position":[-36,0,-54],"rotation":62.83185307179591,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"tjunction","position":[-36,0,-72],"rotation":65.9734457253857,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"tjunction","position":[36,0,-72],"rotation":65.9734457253857,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"tjunction","position":[-18,0,-72],"rotation":69.11503837897548,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"tjunction","position":[18,0,-72],"rotation":69.11503837897548,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"straight","position":[0,0,-72],"rotation":70.68583470577038,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"corner","position":[-18,0,-90],"rotation":72.25663103256527,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"corner","position":[18,0,-90],"rotation":73.82742735936016,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"straight","position":[36,0,-90],"rotation":73.82742735936016,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"tjunction","position":[54,0,-90],"rotation":78.53981633974483,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"tjunction","position":[-54,0,-90],"rotation":78.53981633974483,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"straight","position":[-36,0,-90],"rotation":80.11061266653972,"hasPowerPellet":true,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"crossroad","position":[-54,0,-72],"rotation":80.11061266653972,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"crossroad","position":[54,0,-72],"rotation":80.11061266653972,"hasPowerPellet":true,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"corner","position":[-72,0,-90],"rotation":80.11061266653972,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"tjunction","position":[-72,0,-72],"rotation":80.11061266653972,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"tjunction","position":[72,0,-72],"rotation":83.2522053201295,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"corner","position":[72,0,-90],"rotation":84.8230016469244,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"corner","position":[-72,0,-54],"rotation":87.96459430051418,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"tjunction","position":[-54,0,-54],"rotation":89.53539062730907,"hasPowerPellet":true,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"tjunction","position":[54,0,-54],"rotation":92.67698328089885,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"corner","position":[72,0,-54],"rotation":95.81857593448863,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"corner","position":[-54,0,-36],"rotation":100.53096491487331,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"corner","position":[-36,0,-36],"rotation":103.67255756846309,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"teleport","position":[-54,0,-18],"rotation":106.81415022205287,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"crossroad","position":[-36,0,-18],"rotation":106.81415022205287,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"corner","position":[54,0,-36],"rotation":108.38494654884776,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"corner","position":[36,0,-36],"rotation":111.52653920243755,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"crossroad","position":[36,0,-18],"rotation":111.52653920243755,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"teleport","position":[54,0,-18],"rotation":116.23892818282222,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"straight","position":[36,0,0],"rotation":116.23892818282222,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"straight","position":[-36,0,0],"rotation":116.23892818282222,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"crossroad","position":[-36,0,18],"rotation":119.380520836412,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"tjunction","position":[-18,0,18],"rotation":119.380520836412,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"tjunction","position":[18,0,18],"rotation":119.380520836412,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"tjunction","position":[0,0,18],"rotation":122.52211349000179,"hasPowerPellet":false,"hasPacmanSpawn":true,"pacmanSpawnRotation":0},{"type":"corner","position":[-72,0,18],"rotation":124.09290981679668,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"straight","position":[-54,0,18],"rotation":124.09290981679668,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"corner","position":[-72,0,36],"rotation":125.66370614359157,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"corner","position":[-54,0,36],"rotation":128.80529879718136,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"tjunction","position":[-54,0,54],"rotation":131.94689145077115,"hasPowerPellet":true,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"corner","position":[-36,0,54],"rotation":133.51768777756604,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"tjunction","position":[-36,0,36],"rotation":136.65928043115582,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"tjunction","position":[-18,0,36],"rotation":147.65485471872006,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"corner","position":[-18,0,54],"rotation":150.79644737230984,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"crossroad","position":[0,0,36],"rotation":158.6504290062843,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"crossroad","position":[36,0,18],"rotation":158.6504290062843,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"straight","position":[54,0,18],"rotation":158.6504290062843,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"corner","position":[72,0,18],"rotation":166.50441064025875,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"corner","position":[72,0,36],"rotation":171.21679962064343,"hasPowerPellet":true,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"corner","position":[54,0,36],"rotation":174.3583922742332,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"tjunction","position":[54,0,54],"rotation":182.21237390820767,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"tjunction","position":[18,0,36],"rotation":191.637151868977,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"corner","position":[18,0,54],"rotation":196.3495408493617,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"tjunction","position":[36,0,36],"rotation":196.3495408493617,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"corner","position":[36,0,54],"rotation":201.06192982974636,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"tjunction","position":[0,0,54],"rotation":0,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"teleport","position":[-72,0,54],"rotation":0,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0},{"type":"teleport","position":[72,0,54],"rotation":3.141592653589793,"hasPowerPellet":false,"hasPacmanSpawn":false,"pacmanSpawnRotation":0}]'),PS=[{type:"ghostchamber",position:[0,0,-54],rotation:3.141592653589793,hasPowerPellet:!1,hasPacmanSpawn:!1,pacmanSpawnRotation:0},{type:"corner",position:[-54,0,-36],rotation:4.71238898038469,hasPowerPellet:!0,hasPacmanSpawn:!1,pacmanSpawnRotation:0},{type:"tjunction",position:[-36,0,-36],rotation:3.141592653589793,hasPowerPellet:!1,hasPacmanSpawn:!1,pacmanSpawnRotation:0},{type:"tjunction",position:[-18,0,-36],rotation:3.141592653589793,hasPowerPellet:!1,hasPacmanSpawn:!1,pacmanSpawnRotation:0},{type:"crossroad",position:[0,0,-36],rotation:0,hasPowerPellet:!1,hasPacmanSpawn:!1,pacmanSpawnRotation:0},{type:"tjunction",position:[18,0,-36],rotation:3.141592653589793,hasPowerPellet:!1,hasPacmanSpawn:!1,pacmanSpawnRotation:0},{type:"tjunction",position:[36,0,-36],rotation:3.141592653589793,hasPowerPellet:!1,hasPacmanSpawn:!1,pacmanSpawnRotation:0},{type:"corner",position:[54,0,-36],rotation:3.141592653589793,hasPowerPellet:!0,hasPacmanSpawn:!1,pacmanSpawnRotation:0},{type:"tjunction",position:[-54,0,-18],rotation:4.71238898038469,hasPowerPellet:!1,hasPacmanSpawn:!1,pacmanSpawnRotation:0},{type:"crossroad",position:[-36,0,-18],rotation:0,hasPowerPellet:!1,hasPacmanSpawn:!1,pacmanSpawnRotation:0},{type:"crossroad",position:[-18,0,-18],rotation:0,hasPowerPellet:!1,hasPacmanSpawn:!1,pacmanSpawnRotation:0},{type:"crossroad",position:[0,0,-18],rotation:0,hasPowerPellet:!1,hasPacmanSpawn:!1,pacmanSpawnRotation:0},{type:"crossroad",position:[18,0,-18],rotation:0,hasPowerPellet:!1,hasPacmanSpawn:!1,pacmanSpawnRotation:0},{type:"crossroad",position:[36,0,-18],rotation:0,hasPowerPellet:!1,hasPacmanSpawn:!1,pacmanSpawnRotation:0},{type:"tjunction",position:[54,0,-18],rotation:1.5707963267948966,hasPowerPellet:!1,hasPacmanSpawn:!1,pacmanSpawnRotation:0},{type:"teleport",position:[-72,0,0],rotation:0,hasPowerPellet:!1,hasPacmanSpawn:!1,pacmanSpawnRotation:0},{type:"crossroad",position:[-54,0,0],rotation:0,hasPowerPellet:!1,hasPacmanSpawn:!1,pacmanSpawnRotation:0},{type:"crossroad",position:[-36,0,0],rotation:0,hasPowerPellet:!1,hasPacmanSpawn:!1,pacmanSpawnRotation:0},{type:"crossroad",position:[-18,0,0],rotation:0,hasPowerPellet:!1,hasPacmanSpawn:!1,pacmanSpawnRotation:0},{type:"crossroad",position:[0,0,0],rotation:0,hasPowerPellet:!1,hasPacmanSpawn:!0,pacmanSpawnRotation:12.566370614359172},{type:"crossroad",position:[18,0,0],rotation:0,hasPowerPellet:!1,hasPacmanSpawn:!1,pacmanSpawnRotation:0},{type:"crossroad",position:[36,0,0],rotation:0,hasPowerPellet:!1,hasPacmanSpawn:!1,pacmanSpawnRotation:0},{type:"crossroad",position:[54,0,0],rotation:0,hasPowerPellet:!1,hasPacmanSpawn:!1,pacmanSpawnRotation:0},{type:"tjunction",position:[-54,0,18],rotation:4.71238898038469,hasPowerPellet:!1,hasPacmanSpawn:!1,pacmanSpawnRotation:0},{type:"crossroad",position:[-36,0,18],rotation:0,hasPowerPellet:!1,hasPacmanSpawn:!1,pacmanSpawnRotation:0},{type:"crossroad",position:[-18,0,18],rotation:0,hasPowerPellet:!1,hasPacmanSpawn:!1,pacmanSpawnRotation:0},{type:"crossroad",position:[0,0,18],rotation:0,hasPowerPellet:!1,hasPacmanSpawn:!1,pacmanSpawnRotation:0},{type:"crossroad",position:[18,0,18],rotation:0,hasPowerPellet:!1,hasPacmanSpawn:!1,pacmanSpawnRotation:0},{type:"crossroad",position:[36,0,18],rotation:0,hasPowerPellet:!1,hasPacmanSpawn:!1,pacmanSpawnRotation:0},{type:"tjunction",position:[54,0,18],rotation:1.5707963267948966,hasPowerPellet:!1,hasPacmanSpawn:!1,pacmanSpawnRotation:0},{type:"corner",position:[-54,0,36],rotation:0,hasPowerPellet:!0,hasPacmanSpawn:!1,pacmanSpawnRotation:0},{type:"tjunction",position:[-36,0,36],rotation:0,hasPowerPellet:!1,hasPacmanSpawn:!1,pacmanSpawnRotation:0},{type:"tjunction",position:[-18,0,36],rotation:0,hasPowerPellet:!1,hasPacmanSpawn:!1,pacmanSpawnRotation:0},{type:"tjunction",position:[0,0,36],rotation:0,hasPowerPellet:!1,hasPacmanSpawn:!1,pacmanSpawnRotation:0},{type:"tjunction",position:[18,0,36],rotation:0,hasPowerPellet:!1,hasPacmanSpawn:!1,pacmanSpawnRotation:0},{type:"tjunction",position:[36,0,36],rotation:0,hasPowerPellet:!1,hasPacmanSpawn:!1,pacmanSpawnRotation:0},{type:"corner",position:[54,0,36],rotation:1.5707963267948966,hasPowerPellet:!0,hasPacmanSpawn:!1,pacmanSpawnRotation:0},{type:"teleport",position:[72,0,0],rotation:3.141592653589793,hasPowerPellet:!1,hasPacmanSpawn:!1,pacmanSpawnRotation:0}],Xi={north:{x:0,z:-1},east:{x:1,z:0},south:{x:0,z:1},west:{x:-1,z:0}},De={north:"south",east:"west",south:"north",west:"east"},RS={north:"west",east:"north",south:"east",west:"south"},CS={north:"east",east:"south",south:"west",west:"north"},ad={north:Math.PI,east:Math.PI/2,south:0,west:-Math.PI/2};function Fr(n,t){return`${Math.round(n)},${Math.round(t)}`}function $s(n){const t=Xi[n];return new T(t.x,0,t.z)}function Ve(n,t){return n.map(e=>{const i=Xi[e],s=i.x*Math.cos(t)+i.z*Math.sin(t),r=-i.x*Math.sin(t)+i.z*Math.cos(t);return Object.entries(Xi).find(([,o])=>o.x===Math.round(s)&&o.z===Math.round(r))?.[0]}).filter(Boolean)}function Pf(n){const t=new Map;return n.forEach(e=>{const[i,s,r]=e.position,o=yr[e.type]||[],a=Ve(o,e.rotation);t.set(Fr(i,r),{key:Fr(i,r),type:e.type,position:new T(i,s,r),rotation:e.rotation,connectors:a,exits:new Set,hasPowerPellet:e.hasPowerPellet||!1,hasPacmanSpawn:e.hasPacmanSpawn||!1,pacmanSpawnRotation:e.pacmanSpawnRotation||0})}),t.forEach(e=>{e.connectors.forEach(i=>{const s=Xi[i],r=Fr(e.position.x+s.x*Wt,e.position.z+s.z*Wt);t.get(r)?.connectors.includes(De[i])&&e.exits.add(i)})}),{tiles:t,hasTileAt(e,i){return t.has(Fr(e,i))},getTileAt(e,i){return t.get(Fr(e,i))||null},getNeighbor(e,i){const s=Xi[i];return this.getTileAt(e.position.x+s.x*Wt,e.position.z+s.z*Wt)},canMove(e,i){return!!e?.exits.has(i)}}}const qr=2,LS=.001,Gl=7.5,DS=9.25,Or=2.55*1.4,IS=260,ua=.05;function Kr(n){return new T(n.position.x,qr,n.position.z)}function Br(n,t){return Kr(n).addScaledVector($s(t),Wt/2)}function US(n,t){return Math.atan2(Math.sin(t-n),Math.cos(t-n))}function Rf(n,t){const e=n.x*Math.cos(t)+n.z*Math.sin(t),i=-n.x*Math.sin(t)+n.z*Math.cos(t);return new T(e,n.y,i)}function NS(){const n=[new T(0,qr,-Wt/2),new T(0,qr,-Or)];for(let t=1;t<=8;t+=1){const e=t/8,i=Math.PI-e*(Math.PI/2);n.push(new T(Or+Or*Math.cos(i),qr,-Or+Or*Math.sin(i)))}return n.push(new T(Wt/2,qr,0)),n}function Cf(n){return NS().map(t=>Rf(t,n.rotation).add(n.position))}function kc(n,t){const e=Ve(["north","east"],n.rotation),i=Cf(n);return e[0]===t?i[1].clone():e[1]===t?i[i.length-2].clone():Kr(n)}function rn(n,t=null){return n.type==="ghostchamber"?`${n.key}:${t||"center_front"}`:n.type==="teleport"&&t==="event_horizon"?`${n.key}:event_horizon`:n.type==="corner"?`${n.key}:${t}`:`${n.key}:center`}function FS(n,t){return n.type==="corner"?rn(n,t):n.type==="ghostchamber"?rn(n,"center_front"):rn(n)}function OS(n,t,e){const i=Ve(["north","east"],n.rotation),r=Cf(n).slice(1,-1);return i[0]===t&&i[1]===e?r:i[1]===t&&i[0]===e?r.reverse():[kc(n,t),kc(n,e)]}function ld(n){const t=[0];let e=0;for(let i=1;i<n.length;i+=1)e+=n[i-1].distanceTo(n[i]),t.push(e);return{points:n,cumulativeLengths:t,totalLength:e,progress:0}}function va(n){if(n.progress<=0)return n.points[0].clone();if(n.progress>=n.totalLength)return n.points[n.points.length-1].clone();const t=n.cumulativeLengths.findIndex(o=>o>=n.progress),e=Math.max(1,t),i=n.cumulativeLengths[e-1],s=n.cumulativeLengths[e],r=(n.progress-i)/(s-i);return n.points[e-1].clone().lerp(n.points[e],r)}function kr(n,t){return va({...n,progress:t})}function Li(n,t,e,i,s,r={}){const o=n.tile?.type!=="ghostchamber"&&t.tile?.type==="ghostchamber";return{from:n,to:t,inputDirection:e,endDirection:i,continueDirection:r.continueDirection??null,reverseDirection:r.reverseDirection??De[i],reverseContinueDirection:r.reverseContinueDirection??null,allowedEntities:r.allowedEntities??(o?[]:["pacman","ghost"]),points:s}}function BS(n){const t=new Map;function e(s,r=null){const o=rn(s,r);if(t.has(o))return t.get(o);let a,l="center";if(s.type==="corner")a=kc(s,r),l="corner";else if(s.type==="ghostchamber"){const u={left_back:{x:-6,z:8.5},center_back:{x:0,z:8.5},right_back:{x:6,z:8.5},left_front:{x:-6,z:0},center_front:{x:0,z:0},right_front:{x:6,z:0}}[r],h=Rf(new T(u.x,0,u.z),s.rotation);a=Kr(s).add(h),l="ghostchamber"}else if(s.type==="teleport")if(r==="event_horizon"){const u=Ve(["west"],s.rotation)[0];a=Br(s,u),l="teleport_event_horizon"}else a=Kr(s),l="center";else a=Kr(s);const c={id:o,tile:s,connector:r,type:l,position:a,edges:[]};return t.set(o,c),c}n.tiles.forEach(s=>{s.type==="corner"?s.connectors.forEach(r=>e(s,r)):s.type==="ghostchamber"?["left_back","center_back","right_back","left_front","center_front","right_front"].forEach(r=>e(s,r)):s.type==="teleport"?(e(s),e(s,"event_horizon")):e(s)});function i(s,r){return t.get(FS(s,r))}return n.tiles.forEach(s=>{if(s.type==="ghostchamber"){const r=Ve(["north"],s.rotation)[0],o=Ve(["south"],s.rotation)[0],a=Ve(["east"],s.rotation)[0],l=Ve(["west"],s.rotation)[0],c=(h,p,d)=>{const g=t.get(rn(s,h)),v=t.get(rn(s,p)),m=[g.position,v.position];g.edges.push(Li(g,v,d,d,m,{reverseDirection:De[d],reverseContinueDirection:De[d]}))};c("left_back","center_back",a),c("center_back","left_back",l),c("center_back","right_back",a),c("right_back","center_back",l),c("left_front","center_front",a),c("center_front","left_front",l),c("center_front","right_front",a),c("right_front","center_front",l),c("left_back","left_front",r),c("left_front","left_back",o),c("center_back","center_front",r),c("center_front","center_back",o),c("right_back","right_front",r),c("right_front","right_back",o);const u=n.getNeighbor(s,r);if(u&&s.exits.has(r)){const h=t.get(rn(s,"center_front")),p=i(u,De[r]),d=[h.position,Br(s,r),p.position];h.edges.push(Li(h,p,r,r,d,{reverseDirection:De[r],reverseContinueDirection:De[r]}))}return}if(s.type==="teleport"){const r=t.get(rn(s)),o=Ve(["west"],s.rotation)[0],a=Ve(["east"],s.rotation)[0],l=t.get(rn(s,"event_horizon"));r.edges.push(Li(r,l,o,o,[r.position,l.position],{reverseDirection:a,reverseContinueDirection:a})),l.edges.push(Li(l,r,a,a,[l.position,r.position],{reverseDirection:o,reverseContinueDirection:o})),s.exits.forEach(c=>{const u=n.getNeighbor(s,c),h=i(u,De[c]),p=[r.position,Br(s,c),h.position];r.edges.push(Li(r,h,c,c,p,{reverseDirection:De[c],reverseContinueDirection:De[c]}))});return}if(s.type!=="corner"){const r=t.get(rn(s));s.exits.forEach(o=>{const a=n.getNeighbor(s,o),l=i(a,De[o]),c=[r.position,Br(s,o),l.position];r.edges.push(Li(r,l,o,o,c,{reverseDirection:De[o],reverseContinueDirection:De[o]}))});return}s.connectors.forEach(r=>{const o=t.get(rn(s,r)),a=n.getNeighbor(s,r);if(a&&s.exits.has(r)){const l=i(a,De[r]),c=[o.position,Br(s,r),l.position];o.edges.push(Li(o,l,r,r,c,{reverseDirection:De[r],reverseContinueDirection:null}))}s.connectors.filter(l=>l!==r).forEach(l=>{if(!n.getNeighbor(s,l)||!s.exits.has(l))return;const u=t.get(rn(s,l)),h=OS(s,r,l);o.edges.push(Li(o,u,l,l,h,{continueDirection:l,reverseDirection:r,reverseContinueDirection:r}))})})}),t}class Lf{constructor(t,e,i={}){this.model=t,this.graph=e,this.entityType=i.entityType??"pacman",this.navigationNodes=BS(e),this.speed=i.speed??13,this.currentNode=null,this.currentDirection=null,this.desiredDirection=null,this.desiredIntent=null,this.facingDirection="east",this.bodyFacingDirection="east",this.bodyTurnResponsiveness=Gl,this.boostedBodyTurnEdgesRemaining=0,this.activeEdge=null,this.route=null,this.forceContinueDirection=null,this.isMoving=!1,this.cameraTrail=[],this.startedIntentEvents=[]}reset(t,e=null,i=null){let s=i;!s&&t.type==="corner"&&(s=t.connectors[0]),this.currentNode=this.navigationNodes.get(rn(t,s)),this.currentDirection=null,this.desiredDirection=e,this.desiredIntent=null,this.facingDirection=e||"east",this.bodyFacingDirection=this.facingDirection,this.bodyTurnResponsiveness=Gl,this.boostedBodyTurnEdgesRemaining=0,this.activeEdge=null,this.route=null,this.forceContinueDirection=null,this.isMoving=!1,this.cameraTrail=[this.currentNode.position.clone()],this.startedIntentEvents=[],this.model.position.copy(this.currentNode.position),this.model.rotation.set(0,ad[this.bodyFacingDirection],0)}setDesiredDirection(t){if(Xi[t]){if(this.canReverseImmediately(t)){this.reverseActiveEdge();return}if(!this.isMoving){const e=this.findEdge(t);if(!e)return;this.desiredDirection=t,this.startEdge(e);return}this.desiredDirection=t}}setDesiredIntent(t){const e=this.resolveIntentDirection(t);if(!e)return{accepted:!1,direction:null,reverseIntent:!1};const i=t==="reverse";if(this.canReverseImmediately(e))return this.reverseActiveEdge(),{accepted:!0,direction:e,reverseIntent:i,started:!0};if(!this.isMoving){const s=this.findEdge(e);return s?(this.desiredIntent=null,this.desiredDirection=null,this.startEdge(s,null,t),{accepted:!0,direction:e,reverseIntent:i,started:!0}):{accepted:!1,direction:e,reverseIntent:i}}return this.desiredIntent=t,this.desiredDirection=null,{accepted:!0,direction:e,reverseIntent:i,queued:!0}}update(t,e){if(!this.currentNode)return;this.model.userData.update&&this.model.userData.update(e);let i=this.speed*t;for(;i>LS&&this.route;){const s=this.route,r=s.progress,o=this.route.totalLength-this.route.progress;i>=o?(this.route.progress=this.route.totalLength,this.recordCameraTrail(s,r,s.totalLength),this.model.position.copy(va(this.route)),i-=o,this.finishActiveEdge()):(this.route.progress+=i,this.recordCameraTrail(s,r,s.progress),this.model.position.copy(va(this.route)),i=0)}this.isMoving=!!this.route,this.updateFacing(t)}findEdge(t){return this.getAllowedEdges(this.currentNode).find(e=>e.inputDirection===t)||null}getAllowedEdges(t=this.currentNode){return(t?.edges||[]).filter(e=>this.canUseEdge(e))}canUseEdge(t){return!t.allowedEntities||t.allowedEntities.includes(this.entityType)}startEdge(t,e=null,i=null){const s=this.currentDirection&&t.inputDirection===De[this.currentDirection];if(this.activeEdge=t,this.route=ld(t.points),this.forceContinueDirection=e??t.continueDirection,this.currentDirection=t.endDirection,this.facingDirection=t.endDirection,this.bodyFacingDirection=t.endDirection,this.isMoving=!0,s||i==="reverse"){this.rebuildCameraTrailBehind();const o=t.from.type==="corner"&&t.to.type==="corner"&&t.from.tile===t.to.tile?"reverse_instant":"reverse";this.startedIntentEvents.push(o)}else i&&this.startedIntentEvents.push(i)}finishActiveEdge(){const t=this.activeEdge,e=this.forceContinueDirection;if(this.currentNode=t.to,this.activeEdge=null,this.route=null,this.forceContinueDirection=null,this.currentNode.type==="teleport_event_horizon"){const o=Array.from(this.graph.tiles.values()).filter(a=>a.type==="teleport"&&a!==this.currentNode.tile);if(o.length>0){const a=o[Math.floor(Math.random()*o.length)],l=this.navigationNodes.get(rn(a,"event_horizon")),c=Ve(["east"],a.rotation)[0];this.currentNode=l,this.currentDirection=c,this.facingDirection=c,this.bodyFacingDirection=c,this.model.position.copy(l.position),this.cameraTrail=[l.position.clone()],this.startedIntentEvents.push("reverse_instant")}else{const a=Ve(["east"],this.currentNode.tile.rotation)[0];this.forceContinueDirection=a}}this.boostedBodyTurnEdgesRemaining>0&&(this.boostedBodyTurnEdgesRemaining-=1,this.boostedBodyTurnEdgesRemaining===0&&(this.bodyTurnResponsiveness=Gl));const i=e?this.findEdge(e):null;if(i&&this.currentNode.type==="corner"){this.startEdge(i);return}const s=this.desiredIntent,r=this.findDesiredEdge();if(r){this.desiredDirection=null,this.desiredIntent=null,this.startEdge(r,null,s);return}if(i){this.startEdge(i);return}if(this.currentNode.type!=="corner"){const o=this.currentDirection?this.findEdge(this.currentDirection):null;if(o){this.startEdge(o);return}}this.desiredDirection=null,this.desiredIntent=null,this.currentDirection=null,this.isMoving=!1}canReverseImmediately(t){return this.route&&this.activeEdge&&this.currentDirection&&t===De[this.currentDirection]&&this.route.progress>.05&&this.route.totalLength-this.route.progress>.05}reverseActiveEdge(){const t=this.activeEdge,e=this.route,i=t.from.type==="corner"&&t.to.type==="corner"&&t.from.tile===t.to.tile,s=t.points.slice().reverse().map(o=>o.clone()),r={from:t.to,to:t.from,inputDirection:t.reverseDirection,endDirection:t.reverseDirection,continueDirection:t.reverseContinueDirection,reverseDirection:t.endDirection,reverseContinueDirection:t.endDirection,points:s};this.activeEdge=r,this.route=ld(s),this.route.progress=e.totalLength-e.progress,this.forceContinueDirection=t.reverseContinueDirection,this.currentDirection=r.endDirection,this.facingDirection=r.endDirection,this.bodyFacingDirection=i?De[t.endDirection]:r.endDirection,i&&(this.bodyTurnResponsiveness=DS,this.boostedBodyTurnEdgesRemaining=2),this.desiredDirection=null,this.desiredIntent=null,this.model.position.copy(va(this.route)),this.isMoving=!0,this.rebuildCameraTrailBehind(),this.startedIntentEvents.push(i?"reverse_instant":"reverse")}consumeStartedIntent(){return this.startedIntentEvents.shift()||null}findDesiredEdge(){if(this.desiredIntent){const t=this.resolveIntentDirection(this.desiredIntent);return t?this.findEdge(t):null}return this.desiredDirection?this.findEdge(this.desiredDirection):null}resolveIntentDirection(t){const e=this.currentDirection||this.facingDirection;return t==="forward"?e:t==="right"?CS[e]:t==="reverse"?De[e]:t==="left"?RS[e]:null}updateFacing(t){if(!this.bodyFacingDirection)return;const e=ad[this.bodyFacingDirection],i=US(this.model.rotation.y,e),s=1-Math.exp(-this.bodyTurnResponsiveness*t);this.model.rotation.y+=i*s}getFacingDirection(){return this.facingDirection||"east"}getFollowDirection(){return $s(this.getFacingDirection())}getCameraTarget(){return this.model.position.clone()}getRouteCameraPoint(t=0,e=!0){if(!this.route)return this.getCameraTarget().addScaledVector($s(this.getFacingDirection()),t);const i=this.route.progress+t;if(!e&&(i<0||i>this.route.totalLength))return null;const s=An.clamp(i,0,this.route.totalLength);return kr(this.route,s)}recordCameraTrail(t,e,i){if(!t||e===i)return;const s=i>e?1:-1;let r=e+s*ua;for(;s>0&&r<i||s<0&&r>i;)this.appendCameraTrailPoint(kr(t,r)),r+=s*ua;this.appendCameraTrailPoint(kr(t,i))}rebuildCameraTrailBehind(){if(this.cameraTrail=[],this.activeEdge){const e=this.activeEdge.from.connector&&this.activeEdge.from.connector!==this.activeEdge.inputDirection?this.activeEdge.from.connector:De[this.activeEdge.inputDirection];if(Xi[e]){const i=this.activeEdge.points[0].clone().addScaledVector($s(e),20);this.cameraTrail.push(i)}}if(this.route){for(let e=0;e<=this.route.progress;e+=ua)this.cameraTrail.push(kr(this.route,e));const t=kr(this.route,this.route.progress);(this.cameraTrail.length===0||this.cameraTrail[this.cameraTrail.length-1].distanceTo(t)>.001)&&this.cameraTrail.push(t)}else this.currentNode?this.cameraTrail.push(this.currentNode.position.clone()):this.cameraTrail.push(this.model.position.clone())}appendCameraTrailPoint(t){if(this.cameraTrail.length>=2){const i=this.cameraTrail[this.cameraTrail.length-1],s=this.cameraTrail[this.cameraTrail.length-2];t.distanceTo(s)<i.distanceTo(s)&&this.cameraTrail.pop()}const e=this.cameraTrail[this.cameraTrail.length-1];for((!e||e.distanceTo(t)>=ua*.5)&&this.cameraTrail.push(t.clone());this.cameraTrail.length>IS;)this.cameraTrail.shift()}getCameraTrailPoint(t,e){let i=t,s=this.getCameraTarget();for(let o=this.cameraTrail.length-1;o>=0;o-=1){const a=this.cameraTrail[o],l=s.distanceTo(a);if(l!==0){if(l>=i){const c=i/l;return s.clone().lerp(a,c)}i-=l,s=a}}const r=e?.clone?.()||$s(this.getFacingDirection());return s.clone().addScaledVector(r.normalize(),-i)}}const cs={STANDARD:0,POWER:1};class kS{constructor(t){this.scene=t,this.coreMesh=null,this.glowMesh=null,this.pellets=[],this.powerPelletGroup=new ae,this.scene.add(this.powerPelletGroup),this.dummy=new Ue}buildFromMap(t){for(this.coreMesh&&(this.scene.remove(this.coreMesh),this.scene.remove(this.glowMesh),this.coreMesh.dispose(),this.glowMesh.dispose(),this.pellets=[]);this.powerPelletGroup.children.length>0;)this.powerPelletGroup.remove(this.powerPelletGroup.children[0]);this.scene.children.includes(this.powerPelletGroup)||this.scene.add(this.powerPelletGroup);const e=[];t.tiles.forEach(l=>{const c=l.position,u=l.rotation,h=l.hasPowerPellet,p=v=>{const m=Ve([v],u)[0];return t.getNeighbor(l,m)?.type!=="ghostchamber"},d=(v,m,f)=>{p(v)&&e.push({pos:c.clone().add(g(m,f)),power:!1})},g=(v,m)=>{const f=v*Math.cos(u)+m*Math.sin(u),w=-v*Math.sin(u)+m*Math.cos(u);return new T(f,2,w)};if(l.type==="straight")d("north",0,-6),e.push({pos:c.clone().add(g(0,0)),power:h}),d("south",0,6);else if(l.type==="corner"){const v=3.57*(1-Math.SQRT1_2);d("north",0,-6),e.push({pos:c.clone().add(g(v,-v)),power:h}),d("east",6,0)}else l.type==="tjunction"?(e.push({pos:c.clone().add(g(0,0)),power:h}),d("north",0,-6),d("west",-6,0),d("east",6,0)):l.type==="crossroad"&&(e.push({pos:c.clone().add(g(0,0)),power:h}),d("north",0,-6),d("south",0,6),d("west",-6,0),d("east",6,0))}),this.pellets=[];const i=[];e.forEach(l=>{if(l.power){const c=vo();c.position.copy(l.pos),c.position.y=2.5,c.scale.setScalar(.65),this.powerPelletGroup.add(c),this.pellets.push({position:c.position,type:cs.POWER,active:!0,mesh:c})}else i.push(l.pos)}),i.forEach((l,c)=>{this.pellets.push({position:l,type:cs.STANDARD,active:!0,meshIndex:c})});const s=16755200,r=new Kn(.35,16,16),o=new On({color:s,emissive:s,emissiveIntensity:1.5,roughness:.2,metalness:.8}),a=new Be({color:s,transparent:!0,opacity:.3,blending:Wi,depthWrite:!1});this.coreMesh=new mh(r,o,i.length),this.glowMesh=new mh(r,a,i.length),this.coreMesh.frustumCulled=!1,this.glowMesh.frustumCulled=!1,i.forEach((l,c)=>{this.dummy.position.copy(l),this.dummy.scale.set(1,1,1),this.dummy.updateMatrix(),this.coreMesh.setMatrixAt(c,this.dummy.matrix),this.dummy.scale.set(1.4,1.4,1.4),this.dummy.updateMatrix(),this.glowMesh.setMatrixAt(c,this.dummy.matrix)}),this.coreMesh.instanceMatrix.needsUpdate=!0,this.glowMesh.instanceMatrix.needsUpdate=!0,this.scene.add(this.coreMesh),this.scene.add(this.glowMesh)}checkCollisions(t){const e=[];for(let s=0;s<this.pellets.length;s++){const r=this.pellets[s];if(!r.active)continue;t.distanceToSquared(r.position)<1.8*1.8&&(r.active=!1,e.push(r),r.type===cs.POWER?r.mesh.visible=!1:(this.dummy.position.copy(r.position),this.dummy.scale.set(0,0,0),this.dummy.updateMatrix(),this.coreMesh.setMatrixAt(r.meshIndex,this.dummy.matrix),this.glowMesh.setMatrixAt(r.meshIndex,this.dummy.matrix),this.coreMesh.instanceMatrix.needsUpdate=!0,this.glowMesh.instanceMatrix.needsUpdate=!0))}return e}reset(){this.coreMesh&&(this.pellets.forEach(t=>{t.active=!0,t.type===cs.POWER?t.mesh.visible=!0:(this.dummy.position.copy(t.position),this.dummy.scale.set(1,1,1),this.dummy.updateMatrix(),this.coreMesh.setMatrixAt(t.meshIndex,this.dummy.matrix),this.dummy.scale.set(1.4,1.4,1.4),this.dummy.updateMatrix(),this.glowMesh.setMatrixAt(t.meshIndex,this.dummy.matrix))}),this.coreMesh.instanceMatrix.needsUpdate=!0,this.glowMesh.instanceMatrix.needsUpdate=!0)}getEatenCount(){return this.pellets.filter(t=>!t.active).length}getTotalCount(){return this.pellets.length}update(t){this.coreMesh&&(this.pellets.forEach(e=>{e.active&&(e.type===cs.POWER?e.mesh.userData.update&&e.mesh.userData.update(t):(this.dummy.position.copy(e.position),this.dummy.position.y+=Math.sin(t*4+e.position.x)*.005,this.dummy.scale.set(1,1,1),this.dummy.updateMatrix(),this.coreMesh.setMatrixAt(e.meshIndex,this.dummy.matrix),this.dummy.scale.set(1.4,1.4,1.4),this.dummy.updateMatrix(),this.glowMesh.setMatrixAt(e.meshIndex,this.dummy.matrix)))}),this.coreMesh.instanceMatrix.needsUpdate=!0,this.glowMesh.instanceMatrix.needsUpdate=!0)}}const zS=4.5,cd="direct",GS=3,ud=2,HS=3,hd=8;class VS{constructor(t={}){this.enabled=!1,this.profile=t.profile??cd,this.lastDecisionNodeId=null,this.decisionLeadDistance=t.decisionLeadDistance??zS,this.randomSeed=t.randomSeed??this.createDefaultSeed(this.profile),this.pendingFrightenedReverse=!1}setProfile(t=cd){this.profile=t,this.lastDecisionNodeId=null}setEnabled(t){this.enabled=t,this.lastDecisionNodeId=null}reset(){this.lastDecisionNodeId=null,this.pendingFrightenedReverse=!1}createDefaultSeed(t){return Array.from(t).reduce((e,i)=>e*31+i.charCodeAt(0)>>>0,2654435769)}forceReverse(t){const e=t?.currentDirection?De[t.currentDirection]:null;e&&(t.setDesiredDirection(e),this.lastDecisionNodeId=null)}queueFrightenedReverse(){this.pendingFrightenedReverse=!0,this.lastDecisionNodeId=null}update({ghostController:t,pacman:e,ghost:i,scatterTarget:s,canGhostBeEaten:r,isGhostRespawning:o,ghosts:a=[]}){if(!this.enabled||!t||!e||o)return;const l=this.getDecisionContext(t);if(!l?.node||this.lastDecisionNodeId===l.node.id)return;const c=this.getTargetPosition({pacman:e,ghost:i,scatterTarget:s,ghostController:t,ghosts:a,fleeing:r(i)}),u=this.chooseEdge({decisionNode:l.node,incomingDirection:l.incomingDirection,targetPosition:c,ghostController:t,fleeing:r(i)});u&&(t.setDesiredDirection(u.inputDirection),this.lastDecisionNodeId=l.node.id)}getTargetPosition({pacman:t,ghost:e,scatterTarget:i,ghosts:s}){return this.profile==="ambush"?this.getPacmanLookaheadPosition(t,GS):this.profile==="vector"?this.getVectorTargetPosition({pacman:t,ghosts:s}):this.profile==="shy"?this.getShyTargetPosition({pacman:t,ghost:e,scatterTarget:i}):t.position}getPacmanLookaheadPosition(t,e){const i=t.userData.controller?.getFacingDirection?.()||t.userData.facingDirection||"east";return t.position.clone().addScaledVector($s(i),Wt*e)}getVectorTargetPosition({pacman:t,ghosts:e}){const i=e.find(r=>r.id==="blinky");return i?.model?this.getPacmanLookaheadPosition(t,ud).clone().sub(i.model.position).multiplyScalar(2).add(i.model.position):this.getPacmanLookaheadPosition(t,ud)}getShyTargetPosition({pacman:t,ghost:e,scatterTarget:i}){if(!e)return t.position;const s=Wt*HS;return e.position.distanceTo(t.position)>s?t.position:i||t.position.clone().add(new t.position.constructor(-Wt*hd,0,Wt*hd))}getDecisionContext(t){return!t.route||!t.activeEdge?!t.currentNode||this.isTeleportTransitionNode(t.currentNode)?null:{node:t.currentNode,incomingDirection:t.currentDirection}:this.isTeleportTransitionNode(t.activeEdge.to)||t.route.totalLength-t.route.progress>this.decisionLeadDistance?null:{node:t.activeEdge.to,incomingDirection:t.activeEdge.endDirection}}chooseEdge({decisionNode:t,incomingDirection:e,targetPosition:i,ghostController:s,fleeing:r}){if(!t?.edges?.length||!i)return null;const o=e?De[e]:null;let a=s?.getAllowedEdges?.(t)||t.edges;if(r&&this.pendingFrightenedReverse){this.pendingFrightenedReverse=!1;const c=o?a.find(u=>u.inputDirection===o):null;if(c)return c}const l=o?a.filter(c=>c.inputDirection!==o):a;return l.length>0&&(a=l),r?this.chooseFrightenedEdge(a):a.reduce((c,u)=>{const h=u.to.position.distanceToSquared(i);return c?h<c.distanceSq?{edge:u,distanceSq:h}:c:{edge:u,distanceSq:h}},null)?.edge||null}chooseFrightenedEdge(t){return t.length===0?null:(this.randomSeed=this.randomSeed*1664525+1013904223>>>0,t[this.randomSeed%t.length])}isTeleportTransitionNode(t){return t?.type==="teleport_event_horizon"}}let Ra={},zr=null,Fi="/menu";function du(n){const e=String(n||"").replace(/^#/,"").trim().split("?")[0]||Fi;return(e.startsWith("/")?e:`/${e}`).replace(/\/+$/,"")||Fi}function Df(n=window.location.hash){const t=String(n||"").replace(/^#/,"")||Fi,[e,i=""]=t.split("?"),s=Object.fromEntries(new URLSearchParams(i));return{path:du(e),query:s}}function WS(n,t={}){const e=du(n),i=new URLSearchParams;Object.entries(t).forEach(([r,o])=>{o==null||o===!1||i.set(r,o===!0?"1":String(o))});const s=i.toString();return`#${e}${s?`?${s}`:""}`}function Ca(){const n=Df(),t=Ra[n.path];if(!t){be(Fi,{replace:!0});return}if(zr?.path===n.path){t.update?.(n),zr=n;return}zr&&Ra[zr.path]?.exit?.(n),zr=n,t.enter?.(n)}function qS(n,t={}){if(Ra=n,Fi=du(t.fallbackRoute||Fi),window.addEventListener("hashchange",Ca),!window.location.hash){be(Fi,{replace:!0});return}if(!Ra[Df().path]){be(Fi,{replace:!0});return}Ca()}function be(n,t={}){const e=WS(n,t.query);if(window.location.hash===e){Ca();return}if(t.replace){window.location.replace(e),Ca();return}window.location.hash=e}const oe=new Zd;oe.background=new Ht(66052);oe.fog=new su(66052,.009);const qt=new cn(48,window.innerWidth/window.innerHeight,.1,500),_o=48,XS=82,Hn={pos:[-52.15,34.87,81.2],target:[13.69,0,46.19]},La={pos:[0,65,120],target:[0,0,0]};qt.position.set(...Hn.pos);const Xe=new yf({antialias:!0,powerPreference:"high-performance"});Xe.setPixelRatio(Math.min(window.devicePixelRatio,1.25));Xe.setSize(window.innerWidth,window.innerHeight);Xe.outputColorSpace=an;Xe.toneMapping=Yc;Xe.toneMappingExposure=1.1;Xe.autoClear=!1;Xe.shadowMap.enabled=!1;const le=document.querySelector("#app");le.appendChild(Xe.domElement);const YS=new Be({colorWrite:!1,depthWrite:!0,depthTest:!0}),ZS=`
  <div id="mode-status">Showcase</div>
  
  <div class="command-deck" id="command-deck">
    <div class="deck-header" id="deck-header">
      <div class="deck-title">Command Deck</div>
      <div class="collapse-icon">▼</div>
    </div>
    
    <div class="deck-body">
      <button class="btn btn-primary" id="btn-toggle-mode">Open Editor</button>
      <button class="btn" id="btn-toggle-game">Start Game</button>

      <div class="game-only-controls" id="game-only-controls" style="display: none; flex-direction: column; gap: 14px;">
        <div style="display: flex; gap: 10px; margin-bottom: 5px;">
          <div class="control-label" style="flex: 1; align-self: center;">Pellets: <span id="pellet-counter" style="color: #ffaa00; font-weight: bold;">0</span></div>
          <div class="control-label" style="flex: 1; align-self: center;">Lives: <span id="lives-counter" style="color: #ff4444; font-weight: bold;">3</span></div>
        </div>
        <div class="control-label" style="text-align: center;">Score: <span id="score-counter" style="color: #00ffaa; font-weight: bold;">0</span></div>
        <div id="game-state-label" class="control-label" style="display: none; color: #ff4444; font-weight: bold; text-align: center;">Game Over</div>
        <div style="display: flex; gap: 10px; margin-top: -5px;">
          <button class="btn dev-only-control" id="btn-reset-pellets" style="flex: 1; padding: 6px;">Reset Pellets</button>
          <button class="btn" id="btn-reset-run" style="flex: 1; padding: 6px;">Restart Run</button>
        </div>
        <button class="btn dev-only-control" id="btn-swap-puppet" style="margin-top: -5px; padding: 6px; background: rgba(255, 204, 0, 0.2); border-color: rgba(255, 204, 0, 0.3); color: #ffcc00;">Control: Pacman</button>
        <button class="btn dev-only-control" id="btn-cycle-ghost-count" style="margin-top: -5px; padding: 6px;">Ghosts: 4</button>
        <button class="btn dev-only-control" id="btn-toggle-ghost-ai" style="margin-top: -5px; padding: 6px;">Ghost AI: Off</button>
        <button class="btn dev-only-control" id="btn-toggle-collisions" style="margin-top: -5px; padding: 6px;">Collisions: On</button>
        <button class="btn dev-only-control" id="btn-toggle-jumpscare" style="margin-top: -5px; padding: 6px;">Jumpscare: Off</button>
        <div class="hotkey-list">
          <div class="hotkey-item"><span>Move</span> <span class="hotkey-key">WASD / Arrows</span></div>
          <div class="hotkey-item"><span>Look Around</span> <span class="hotkey-key">Q / E / Space</span></div>
          <div class="hotkey-item dev-only-control"><span>Swap</span> <span class="hotkey-key">Tab</span></div>
          <div class="hotkey-item"><span>Exit</span> <span class="hotkey-key">Esc</span></div>
        </div>
      </div>
      
      <div class="editor-only-controls" id="editor-only-controls" style="display: none; flex-direction: column; gap: 20px;">
        <div style="display: flex; gap: 10px;">
          <button class="btn" id="btn-export" style="flex: 1;">Export</button>
          <button class="btn" id="btn-import" style="flex: 1;">Import</button>
        </div>
        <div style="display: flex; gap: 10px; margin-top: -10px;">
          <button class="btn" id="btn-apply-shift" style="flex: 1; display: none; background: rgba(0, 255, 136, 0.2); color: #00ff88; border-color: rgba(0, 255, 136, 0.3);">Apply</button>
          <button class="btn" id="btn-shift-map" style="flex: 1;">Shift Map</button>
        </div>

        <div class="control-group">
          <div class="control-label">Zoom Level</div>
          <input type="range" id="zoom-slider" min="10" max="300" value="60">
        </div>

        <div class="segmented-toggle">
          <div class="toggle-slider" id="view-slider"></div>
          <div class="toggle-option active" data-view="3d">3D View</div>
          <div class="toggle-option" data-view="2d">Bird's Eye</div>
        </div>
        
        <div class="hotkey-list" id="hotkey-list">
          <div class="hotkey-item"><span>Free Mode</span> <span class="hotkey-key">V</span></div>
          <div class="hotkey-item"><span>Place</span> <span class="hotkey-key">Click / Space</span></div>
          <div class="hotkey-item"><span>Rotate</span> <span class="hotkey-key">R</span></div>
          <div class="hotkey-item"><span>Delete</span> <span class="hotkey-key">X</span></div>
          <div class="hotkey-item"><span>Pan</span> <span class="hotkey-key">WASD / Arrows</span></div>
          <div class="hotkey-item"><span>View</span> <span class="hotkey-key">Tab</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="showroom-nav" id="showroom-nav" aria-label="Showroom navigation">
    <button class="showroom-action btn-blue" id="btn-showroom-menu">
      <svg class="btn-icon" viewBox="0 0 24 24" fill="none">
        <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
      </svg>
      <span>Menu</span>
    </button>
    <button class="showroom-action btn-yellow" id="btn-showroom-play">
      <svg class="btn-icon" viewBox="0 0 24 24" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13 3C15.1523 3 17.1281 3.7555 18.6768 5.01576L20.124 6.46299L18.8288 7.75818L18.828 7.75738L14.5854 12L18.2236 15.6383L18.2224 15.6396L20.1273 17.5445L18.7144 18.9575L18.7122 18.9553C17.1583 20.2329 15.1687 21 13 21C8.02944 21 4 16.9706 4 12C4 7.02944 8.02944 3 13 3ZM11.7569 12L17.2893 17.5323C16.1044 18.4523 14.6162 19 13 19C9.13401 19 6 15.866 6 12C6 8.13401 9.13401 5 13 5C14.6162 5 16.1045 5.54772 17.2893 6.46768L11.7569 12Z" fill="currentColor"/>
      </svg>
      <span>Play</span>
    </button>
    <button class="showroom-action btn-blue" id="btn-showroom-create">
      <svg class="btn-icon" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="2" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        <line x1="2" y1="12" x2="6" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
        <line x1="18" y1="12" x2="22" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
        <line x1="12" y1="2" x2="12" y2="6" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
        <line x1="12" y1="18" x2="12" y2="22" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      </svg>
      <span>Create</span>
    </button>
  </div>

  <div class="editor-ui" id="editor-ui">
    <div class="left-bar">
      <div class="separator-label">Items</div>
      <div class="item-card" data-type="powerpellet">
        <span class="key-hint">P</span>
        Power
      </div>
      <div class="item-card" data-type="pacmanspawn">
        <span class="key-hint">S</span>
        Spawn
      </div>
    </div>
    <div class="bottom-bar">
      <div class="piece-card active" data-type="straight">
        <span class="key-hint">1</span>
        Straight
      </div>
      <div class="piece-card" data-type="corner">
        <span class="key-hint">2</span>
        Corner
      </div>
      <div class="piece-card" data-type="tjunction">
        <span class="key-hint">3</span>
        T-Junc
      </div>
      <div class="piece-card" data-type="crossroad">
        <span class="key-hint">4</span>
        Cross
      </div>
      <div class="piece-card" data-type="teleport">
        <span class="key-hint">5</span>
        Teleport
      </div>
      <div class="piece-card" data-type="ghostchamber">
        <span class="key-hint">6</span>
        Chamber
      </div>
    </div>
  </div>

  <button class="editor-save-fab" id="btn-save-map" type="button">
    <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
      <polyline points="17 21 17 13 7 13 7 21"></polyline>
      <polyline points="7 3 7 8 15 8"></polyline>
    </svg>
    <span class="editor-save-label">Save Map</span>
  </button>

  <div class="modal-overlay" id="export-modal">
    <div class="modal-content">
      <h3 class="modal-title">Export Maze</h3>
      <div class="modal-buttons">
        <button class="btn" id="btn-modal-copy">Copy to Clipboard</button>
        <button class="btn" id="btn-modal-download">Download File</button>
      </div>
      <div class="modal-footer">
        <button class="btn-close" id="btn-modal-close">Close</button>
      </div>
    </div>
  </div>

  <div class="modal-overlay" id="import-modal">
    <div class="modal-content" style="width: 400px;">
      <h3 class="modal-title">Import Maze</h3>
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <textarea id="import-textarea" placeholder="Paste your exported maze JSON here..." rows="6" style="width: 100%; background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.1); color: #fff; border-radius: 8px; padding: 12px; font-family: monospace; resize: vertical; outline: none;"></textarea>
        <div style="text-align: center; color: rgba(255,255,255,0.4); font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em;">- OR -</div>
        <div class="file-drop-zone" id="import-file-zone">
          <div class="content-wrapper">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
            <span id="import-file-name">Import File</span>
          </div>
          <input type="file" id="import-file" accept=".json">
        </div>
      </div>
      <div class="modal-buttons">
        <button class="btn btn-primary" id="btn-modal-import">Import Maze</button>
      </div>
      <div class="modal-footer">
        <button class="btn-close" id="btn-modal-import-close">Cancel</button>
      </div>
    </div>
  </div>

  <div class="modal-overlay editor-save-modal" id="editor-save-modal">
    <div class="modal-content editor-save-modal-content">
      <p class="editor-modal-eyebrow" id="editor-save-modal-eyebrow">Map Editor</p>
      <h3 class="modal-title editor-save-modal-title" id="editor-save-modal-title">Save Map</h3>
      <p class="editor-save-modal-message" id="editor-save-modal-message">Name this map before saving it to your slots.</p>
      <label class="editor-save-input-wrap" id="editor-save-input-wrap">
        <span>Map Name</span>
        <input id="editor-save-name-input" type="text" maxlength="28" autocomplete="off" />
      </label>
      <p class="editor-save-modal-error" id="editor-save-modal-error"></p>
      <div class="editor-save-modal-actions">
        <button class="editor-modal-secondary" id="btn-editor-save-cancel" type="button">Cancel</button>
        <button class="editor-modal-primary" id="btn-editor-save-confirm" type="button">Save</button>
      </div>
    </div>
  </div>

  <div class="landing-overlay" id="landing-menu">
    <div class="landing-menu-container">
      <div id="menu-3d-container">
        <canvas id="menu-3d-canvas"></canvas>
      </div>      <div class="landing-content">
        <div class="landing-logo" aria-label="3D Pacman">
          <div class="logo-top">            <svg class="logo-svg-top" viewBox="0 0 1538 780">
              <g transform="translate(40, 40)">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M266 712Q192 712 121 692.50Q50 673-1 637L62 513Q102 543 154.50 559.50Q207 576 262 576Q323 576 358 552.50Q393 529 393 486Q393 447 362 423.50Q331 400 262 400L188 400L188 293L331 130L34 130L34 0L524 0L524 105L366 284Q460 300 508 354Q556 408 556 486Q556 545 525 596.50Q494 648 429.50 680Q365 712 266 712" />
                <path transform="translate(632, 0)" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M401 700L83 700L83 0L401 0Q515 0 602 43.50Q689 87 738 165.50Q787 244 787 350Q787 456 738 534.50Q689 613 602 656.50Q515 700 401 700M245 133L245 567L393 567Q463 567 514.50 540.50Q566 514 594.50 465.50Q623 417 623 350Q623 283 594.50 234.50Q566 186 514.50 159.50Q463 133 393 133" />
              </g>
            </svg>
          </div>
          <div class="logo-word">
            <span class="logo-letter">
              <svg viewBox="0 0 792 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M245 700L83 700L83 0L386 0Q479 0 547.50 30.50Q616 61 653 118Q690 175 690 254Q690 332 653 389Q616 446 547.50 476.50Q479 507 386 507L245 507L245 700M245 132L245 375L377 375Q451 375 488.50 343Q526 311 526 254Q526 196 488.50 164Q451 132 377 132" />
                </g>
              </svg>
            </span>
            <span class="logo-letter">
              <svg viewBox="0 0 826 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M383 0L766 700L0 700ZM383 380L465 530L301 530Z" />
                </g>
              </svg>
            </span>
            <span class="logo-letter">
              <svg viewBox="0 0 784 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M418 712Q337 712 267.50 685Q198 658 147 609.50Q96 561 67.50 495Q39 429 39 350Q39 271 67.50 205Q96 139 147.50 90.50Q199 42 268 15Q337-12 419-12Q510-12 584 20Q658 52 707 112L603 208Q531 126 427 126Q361 126 310.50 154.50Q260 183 231.50 233.50Q203 284 203 350Q203 416 231.50 466.50Q260 517 310.50 545.50Q361 574 427 574Q531 574 603 491L707 587Q658 648 584 680Q510 712 418 712" />
                </g>
              </svg>
            </span>
            <span class="logo-letter">
              <svg viewBox="0 0 1015 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M235 700L83 700L83 0L217 0L479 435L737 0L870 0L872 700L720 700L719 281L513 626L440 626L235 288" />
                </g>
              </svg>
            </span>
            <span class="logo-letter">
              <svg viewBox="0 0 826 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M383 0L766 700L0 700ZM383 380L465 530L301 530Z" />
                </g>
              </svg>
            </span>
            <span class="logo-letter">
              <svg viewBox="0 0 868 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M243 700L83 700L83 0L217 0L565 426L565 0L725 0L725 700L592 700L243 274" />
                </g>
              </svg>
            </span>
          </div>
        </div>
        <div class="landing-actions">
          <button class="landing-action btn-yellow" id="btn-menu-start">
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M13 3C15.1523 3 17.1281 3.7555 18.6768 5.01576L20.124 6.46299L18.8288 7.75818L18.828 7.75738L14.5854 12L18.2236 15.6383L18.2224 15.6396L20.1273 17.5445L18.7144 18.9575L18.7122 18.9553C17.1583 20.2329 15.1687 21 13 21C8.02944 21 4 16.9706 4 12C4 7.02944 8.02944 3 13 3ZM11.7569 12L17.2893 17.5323C16.1044 18.4523 14.6162 19 13 19C9.13401 19 6 15.866 6 12C6 8.13401 9.13401 5 13 5C14.6162 5 16.1045 5.54772 17.2893 6.46768L11.7569 12Z" fill="currentColor"/>
            </svg>
            <span>Start Game</span>
          </button>
          <button class="landing-action btn-blue" id="btn-menu-editor">
            <svg class="btn-icon" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="2" />
              <circle cx="12" cy="12" r="1.5" fill="currentColor" />
              <line x1="2" y1="12" x2="6" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
              <line x1="18" y1="12" x2="22" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
              <line x1="12" y1="2" x2="12" y2="6" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
              <line x1="12" y1="18" x2="12" y2="22" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            </svg>
            <span>Create Map</span>
          </button>
          <button class="landing-action btn-blue" id="btn-menu-showroom">
            <svg class="btn-icon" viewBox="0 0 512 512" fill="none">
              <g stroke="currentColor" stroke-width="28" stroke-linecap="round" stroke-linejoin="round">
                <path d="M 104 404 L 104 198 C 104 118 168 70 256 70 C 344 70 408 118 408 198 L 408 404 L 368 368 L 312 420 L 256 370 L 200 420 L 144 368 L 104 404 Z"/>
                <circle cx="200" cy="216" r="34"/>
                <circle cx="312" cy="216" r="34"/>
              </g>
            </svg>
            <span>Showroom</span>
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="route-overlay" id="map-select-screen">
    <div class="route-screen map-picker">
      <div class="route-screen-header">
        <button class="route-back-button route-icon-button" id="btn-map-select-back" aria-label="Back to menu">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M15 5L8 12L15 19" />
          </svg>
        </button>
        <div>
          <h2>Pick a Map</h2>
        </div>
      </div>
      <div class="map-picker-grid" id="map-picker-grid"></div>
      <details class="map-advanced-panel">
        <summary>
          <span>Advanced</span>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 9L12 15L18 9" />
          </svg>
        </summary>
        <div class="map-advanced-controls">
          <label class="map-dev-toggle">
            <input type="checkbox" id="map-jumpscare-toggle">
            <span>Jumpscare mode</span>
          </label>
          <div class="map-ghost-count-control">
            <span>Ghosts</span>
            <div class="ghost-stepper" id="map-ghost-stepper">
              <button class="ghost-stepper-button" id="btn-ghost-count-minus" type="button" aria-label="Decrease ghost count">-</button>
              <div class="ghost-stepper-value" id="map-ghost-count" role="status" aria-live="polite">4</div>
              <button class="ghost-stepper-button ghost-stepper-button-plus" id="btn-ghost-count-plus" type="button" aria-label="Increase ghost count">+</button>
            </div>
          </div>
        </div>
      </details>
      <div class="map-picker-footer">
        <label class="map-dev-toggle">
          <input type="checkbox" id="map-dev-toggle">
          <span>Dev tools</span>
        </label>
        <button class="map-start-button" id="btn-map-select-start">Start</button>
      </div>
    </div>
  </div>

  <div class="route-overlay" id="map-manager-screen">
    <div class="route-screen map-manager">
      <div class="route-screen-header">
        <button class="route-back-button route-icon-button" id="btn-map-manager-back" aria-label="Back to menu">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M15 5L8 12L15 19" />
          </svg>
        </button>
        <div>
          <h2>Your Maps</h2>
        </div>
      </div>
      <div class="map-manager-grid" id="map-manager-grid"></div>
    </div>
  </div>
  <div class="game-hud" id="game-hud">
    <svg width="0" height="0" style="position:absolute">
      <defs>
        <radialGradient id="pacman3dGrad" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stop-color="#fff5a0" />
          <stop offset="25%" stop-color="#ffd91f" />
          <stop offset="75%" stop-color="#cc9a00" />
          <stop offset="100%" stop-color="#664d00" />
        </radialGradient>
      </defs>
    </svg>
    <div class="game-hud-header">
      <div class="hud-score-inline">
        <span class="hud-score-title">SCORE:</span>
        <span class="hud-score-val" id="hud-score-value">0</span>
      </div>
      <button class="hud-pause-button" id="btn-hud-pause" type="button" aria-label="Pause game">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <rect x="5" y="4" width="4" height="16" rx="1" />
          <rect x="15" y="4" width="4" height="16" rx="1" />
        </svg>
      </button>
    </div>
    <div class="game-hud-lives" id="game-hud-lives"></div>
    <div class="game-start-overlay" id="game-start-overlay" aria-hidden="true">
      <div class="game-start-modal">
        <h2 class="game-start-title">Controls</h2>
        <div class="game-start-commands">
          <div><span>Move</span><strong>WASD / Arrows</strong></div>
          <div><span>Look left / right</span><strong>Hold Q / E</strong></div>
          <div><span>Look back</span><strong>Hold Space</strong></div>
          <div><span>Exit</span><strong>Esc</strong></div>
        </div>
        <button class="game-start-button" id="btn-game-start" type="button">Start</button>
      </div>
    </div>
    <div class="game-countdown-overlay" id="game-countdown-overlay" aria-hidden="true">
      <!-- READY Title -->
      <div class="game-ready-title" id="countdown-ready-title">
        <div class="logo-word">
          <span class="logo-letter">
            <svg viewBox="0 0 792 760">
              <g transform="translate(30, 30)">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M83 700L83 0L386 0Q479 0 547.50 30.50Q616 61 653 118Q690 175 690 254Q690 332 653 389Q616 446 547.50 476.50L700 700L540 700L386 507L245 507L245 700ZM245 132L245 375L377 375Q451 375 488.50 343Q526 311 526 254Q526 196 488.50 164Q451 132 377 132Z" />
              </g>
            </svg>
          </span>
          <span class="logo-letter">
            <svg viewBox="0 0 660 760">
              <g transform="translate(30, 30)">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M83 0 L600 0 L600 133 L245 133 L245 285 L500 285 L500 415 L245 415 L245 567 L600 567 L600 700 L83 700 Z" />
              </g>
            </svg>
          </span>
          <span class="logo-letter">
            <svg viewBox="0 0 826 760">
              <g transform="translate(30, 30)">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M383 0L766 700L0 700ZM383 380L465 530L301 530Z" />
              </g>
            </svg>
          </span>
          <span class="logo-letter">
            <svg viewBox="0 0 847 760">
              <g transform="translate(30, 30)">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M401 700L83 700L83 0L401 0Q515 0 602 43.50Q689 87 738 165.50Q787 244 787 350Q787 456 738 534.50Q689 613 602 656.50Q515 700 401 700M245 133L245 567L393 567Q463 567 514.50 540.50Q566 514 594.50 465.50Q623 417 623 350Q623 283 594.50 234.50Q566 186 514.50 159.50Q463 133 393 133" />
              </g>
            </svg>
          </span>
          <span class="logo-letter">
            <svg viewBox="0 0 710 760">
              <g transform="translate(30, 30)">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M83 0 L245 0 L341.5 180 L438 0 L600 0 L422 350 L422 700 L260 700 L260 350 Z" />
              </g>
            </svg>
          </span>
        </div>
      </div>
      <!-- GO! Title -->
      <div class="game-go-title" id="countdown-go-title" style="display: none;">
        <div class="logo-word">
          <span class="logo-letter">
            <svg viewBox="0 0 710 760">
              <g transform="translate(30, 30)">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M650 0 L83 0 L83 700 L650 700 L650 350 L380 350 L380 483 L488 483 L488 567 L245 567 L245 133 L650 133 Z" />
              </g>
            </svg>
          </span>
          <span class="logo-letter">
            <svg viewBox="0 0 710 760">
              <g transform="translate(30, 30)">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M83 0 L600 0 L600 700 L83 700 Z M245 133 L245 567 L438 567 L438 133 Z" />
              </g>
            </svg>
          </span>
          <span class="logo-letter">
            <svg viewBox="0 0 482 760">
              <g transform="translate(30, 30)">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M260 0 L422 0 L422 450 L260 450 Z M260 538 L422 538 L422 700 L260 700 Z" />
              </g>
            </svg>
          </span>
        </div>
      </div>
    </div>
    <div class="game-hud-overlay game-status-overlay game-over-overlay" id="game-over-overlay" aria-hidden="true">
      <div class="pause-menu-content">
        <div class="game-over-title">
          <div class="logo-word">
            <span class="logo-letter">
              <svg viewBox="0 0 847 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M401 700L83 700L83 0L401 0Q515 0 602 43.50Q689 87 738 165.50Q787 244 787 350Q787 456 738 534.50Q689 613 602 656.50Q515 700 401 700M245 133L245 567L393 567Q463 567 514.50 540.50Q566 514 594.50 465.50Q623 417 623 350Q623 283 594.50 234.50Q566 186 514.50 159.50Q463 133 393 133" />
                </g>
              </svg>
            </span>
            <span class="logo-letter">
              <svg viewBox="0 0 660 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M83 0 L600 0 L600 133 L245 133 L245 285 L500 285 L500 415 L245 415 L245 567 L600 567 L600 700 L83 700 Z" />
                </g>
              </svg>
            </span>
            <span class="logo-letter">
              <svg viewBox="0 0 660 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M83 0 L600 0 L600 133 L245 133 L245 285 L500 285 L500 415 L245 415 L245 700 L83 700 Z" />
                </g>
              </svg>
            </span>
            <span class="logo-letter">
              <svg viewBox="0 0 660 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M83 0 L600 0 L600 133 L245 133 L245 285 L500 285 L500 415 L245 415 L245 567 L600 567 L600 700 L83 700 Z" />
                </g>
              </svg>
            </span>
            <span class="logo-letter">
              <svg viewBox="0 0 826 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M383 0L766 700L0 700ZM383 380L465 530L301 530Z" />
                </g>
              </svg>
            </span>
            <span class="logo-letter">
              <svg viewBox="0 0 660 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M83 0 L600 0 L600 133 L422 133 L422 700 L260 700 L260 133 L83 133 Z" />
                </g>
              </svg>
            </span>
            <span class="logo-letter">
              <svg viewBox="0 0 660 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M83 0 L600 0 L600 133 L245 133 L245 285 L500 285 L500 415 L245 415 L245 567 L600 567 L600 700 L83 700 Z" />
                </g>
              </svg>
            </span>
            <span class="logo-letter">
              <svg viewBox="0 0 847 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M401 700L83 700L83 0L401 0Q515 0 602 43.50Q689 87 738 165.50Q787 244 787 350Q787 456 738 534.50Q689 613 602 656.50Q515 700 401 700M245 133L245 567L393 567Q463 567 514.50 540.50Q566 514 594.50 465.50Q623 417 623 350Q623 283 594.50 234.50Q566 186 514.50 159.50Q463 133 393 133" />
                </g>
              </svg>
            </span>
          </div>
        </div>

        <div class="game-over-score-display">
          SCORE: <span id="game-over-score">0</span>
        </div>

        <div class="pause-menu-actions" style="margin-top: 12px;">
          <button class="landing-action btn-red" id="btn-game-over-retry" type="button">
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M23 4v6h-6"></path>
              <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
            </svg>
            <span>Try Again</span>
          </button>
          <button class="landing-action btn-blue" id="btn-game-over-menu" type="button">
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
            </svg>
            <span>Main Menu</span>
          </button>
        </div>
      </div>
    </div>
    <div class="game-hud-overlay game-status-overlay game-victory-overlay" id="game-victory-overlay" aria-hidden="true">
      <div class="pause-menu-content">
        <div class="game-victory-title">
          <div class="logo-word">
            <!-- V -->
            <span class="logo-letter">
              <svg viewBox="0 0 660 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M83 0L245 0L330 450L415 0L577 0L411 700L249 700Z" />
                </g>
              </svg>
            </span>
            <!-- I -->
            <span class="logo-letter">
              <svg viewBox="0 0 482 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M160 0L322 0L322 700L160 700Z" />
                </g>
              </svg>
            </span>
            <!-- C -->
            <span class="logo-letter">
              <svg viewBox="0 0 710 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M650 0L83 0L83 700L650 700L650 567L245 567L245 133L650 133Z" />
                </g>
              </svg>
            </span>
            <!-- T -->
            <span class="logo-letter">
              <svg viewBox="0 0 660 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M83 0L600 0L600 133L422 133L422 700L260 700L260 133L83 133Z" />
                </g>
              </svg>
            </span>
            <!-- O -->
            <span class="logo-letter">
              <svg viewBox="0 0 710 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M83 0L600 0L600 700L83 700ZM245 133L245 567L438 567L438 133Z" />
                </g>
              </svg>
            </span>
            <!-- R -->
            <span class="logo-letter">
              <svg viewBox="0 0 792 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M83 700L83 0L386 0Q479 0 547.50 30.50Q616 61 653 118Q690 175 690 254Q690 332 653 389Q616 446 547.50 476.50L700 700L540 700L386 507L245 507L245 700ZM245 132L245 375L377 375Q451 375 488.50 343Q526 311 526 254Q526 196 488.50 164Q451 132 377 132Z" />
                </g>
              </svg>
            </span>
            <!-- Y -->
            <span class="logo-letter">
              <svg viewBox="0 0 710 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M83 0L245 0L341.5 180L438 0L600 0L422 350L422 700L260 700L260 350Z" />
                </g>
              </svg>
            </span>
          </div>
        </div>

        <div class="game-victory-score-display">
          SCORE: <span id="game-victory-score">0</span>
        </div>

        <div class="pause-menu-actions" style="margin-top: 12px;">
          <button class="landing-action btn-yellow" id="btn-game-victory-retry" type="button">
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M23 4v6h-6"></path>
              <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
            </svg>
            <span>Play Again</span>
          </button>
          <button class="landing-action btn-blue" id="btn-game-victory-menu" type="button">
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
            </svg>
            <span>Main Menu</span>
          </button>
        </div>
      </div>
    </div>
    <div class="game-hud-overlay game-pause-overlay" id="game-pause-overlay" aria-hidden="true">
      <div class="pause-menu-content">
        <div class="game-paused-title">
          <div class="logo-word">
            <span class="logo-letter">
              <svg viewBox="0 0 710 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M650 0 L83 0 L83 700 L650 700 L650 350 L380 350 L380 483 L488 483 L488 567 L245 567 L245 133 L650 133 Z" />
                </g>
              </svg>
            </span>
            <span class="logo-letter">
              <svg viewBox="0 0 826 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M383 0L766 700L0 700ZM383 380L465 530L301 530Z" />
                </g>
              </svg>
            </span>
            <span class="logo-letter">
              <svg viewBox="0 0 1015 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M235 700L83 700L83 0L217 0L479 435L737 0L870 0L872 700L720 700L719 281L513 626L440 626L235 288" />
                </g>
              </svg>
            </span>
            <span class="logo-letter">
              <svg viewBox="0 0 660 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M83 0 L600 0 L600 133 L245 133 L245 285 L500 285 L500 415 L245 415 L245 567 L600 567 L600 700 L83 700 Z" />
                </g>
              </svg>
            </span>
            <span class="logo-letter-space"></span>
            <span class="logo-letter">
              <svg viewBox="0 0 792 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M245 700L83 700L83 0L386 0Q479 0 547.50 30.50Q616 61 653 118Q690 175 690 254Q690 332 653 389Q616 446 547.50 476.50Q479 507 386 507L245 507L245 700M245 132L245 375L377 375Q451 375 488.50 343Q526 311 526 254Q526 196 488.50 164Q451 132 377 132" />
                </g>
              </svg>
            </span>
            <span class="logo-letter">
              <svg viewBox="0 0 826 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M383 0L766 700L0 700ZM383 380L465 530L301 530Z" />
                </g>
              </svg>
            </span>
            <span class="logo-letter">
              <svg viewBox="0 0 710 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M83 0 L83 700 L650 700 L650 0 L488 0 L488 567 L245 567 L245 0 Z" />
                </g>
              </svg>
            </span>
            <span class="logo-letter">
              <svg viewBox="0 0 710 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M83 0 L650 0 L650 133 L245 133 L245 285 L650 285 L650 700 L83 700 L83 567 L488 567 L488 415 L83 415 Z" />
                </g>
              </svg>
            </span>
            <span class="logo-letter">
              <svg viewBox="0 0 660 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M83 0 L600 0 L600 133 L245 133 L245 285 L500 285 L500 415 L245 415 L245 567 L600 567 L600 700 L83 700 Z" />
                </g>
              </svg>
            </span>
            <span class="logo-letter">
              <svg viewBox="0 0 847 760">
                <g transform="translate(30, 30)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="26" d="M401 700L83 700L83 0L401 0Q515 0 602 43.50Q689 87 738 165.50Q787 244 787 350Q787 456 738 534.50Q689 613 602 656.50Q515 700 401 700M245 133L245 567L393 567Q463 567 514.50 540.50Q566 514 594.50 465.50Q623 417 623 350Q623 283 594.50 234.50Q566 186 514.50 159.50Q463 133 393 133" />
                </g>
              </svg>
            </span>
          </div>
        </div>
        <div class="pause-menu-actions" id="pause-main-actions">
          <button class="landing-action btn-yellow" id="btn-game-pause-resume" type="button">
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M13 3C15.1523 3 17.1281 3.7555 18.6768 5.01576L20.124 6.46299L18.8288 7.75818L18.828 7.75738L14.5854 12L18.2236 15.6383L18.2224 15.6396L20.1273 17.5445L18.7144 18.9575L18.7122 18.9553C17.1583 20.2329 15.1687 21 13 21C8.02944 21 4 16.9706 4 12C4 7.02944 8.02944 3 13 3ZM11.7569 12L17.2893 17.5323C16.1044 18.4523 14.6162 19 13 19C9.13401 19 6 15.866 6 12C6 8.13401 9.13401 5 13 5C14.6162 5 16.1045 5.54772 17.2893 6.46768L11.7569 12Z" fill="currentColor"/>
            </svg>
            <span>Resume</span>
          </button>
          <button class="landing-action btn-blue" id="btn-game-pause-controls" type="button">
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
              <path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01"></path>
              <path d="M6 12h.01M10 12h.01M14 12h.01M18 12h.01"></path>
              <path d="M7 16h10"></path>
            </svg>
            <span>Controls</span>
          </button>
          <button class="landing-action btn-blue" id="btn-game-pause-menu" type="button">
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
            </svg>
            <span>Main Menu</span>
          </button>
        </div>
        <div class="pause-menu-controls" id="pause-controls-panel" style="display: none;">
          <div class="game-start-commands">
            <div><span>Move</span><strong>WASD / Arrows</strong></div>
            <div><span>Look left / right</span><strong>Hold Q / E</strong></div>
            <div><span>Look back</span><strong>Hold Space</strong></div>
            <div><span>Exit</span><strong>Esc</strong></div>
          </div>
          <button class="landing-action btn-yellow" id="btn-game-pause-controls-back" type="button" style="margin-top: 24px;">
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>Back</span>
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="editor-toast" id="editor-toast"></div>
`;le.insertAdjacentHTML("beforeend",ZS);le.classList.add("landing-active");const Nt=new Zx(qt,Xe.domElement);Nt.enableDamping=!0;Nt.dampingFactor=.05;Nt.target.set(0,0,0);Nt.minDistance=10;Nt.maxDistance=300;Nt.maxPolarAngle=Math.PI/2.12;Nt.screenSpacePanning=!1;const Ts=new eg(9022975,65795,1.4);oe.add(Ts);const If=new Fc(12836607,1.1);If.position.set(28,34,16);oe.add(If);const Uf=new ig(3898623,10,90,2.2);Uf.position.set(6,9,3);oe.add(Uf);const Nf=new bt(new si(115,64),new On({color:263948,emissive:66054,roughness:.96,metalness:.04}));Nf.rotation.x=-Math.PI/2;const fu=new bt(new si(72,64),new Be({color:399434,transparent:!0,opacity:.14,side:Fe}));fu.rotation.x=-Math.PI/2;fu.position.y=.03;const pu=new bt(new ka(88,106,72),new Be({color:794455,transparent:!0,opacity:.1,side:Fe}));pu.rotation.x=-Math.PI/2;pu.position.y=.02;const fe=TS(cS),Jt=new ae,Pn=new ae;let we=null,Jn=null,We=[],ye=null,mi="pacman",fi=null,He=new kS(Pn),Ye=!1,Ui=!1,Va=!1,co=!1,uo=!1,zc="forward",gi=!1,Oi=!0,Si=0,zi=3,Vn=!1,hn=!1,Mi=0,Gi=!1,_a=0;const jS=1.2;let Yi=!1,vi=0,vr=0,yo=0,sr=[],rr=4,Ff=null,ps="classic",Hi=4;const Gc="icg-3d-pacman-user-maps",xo=2,mu=[{id:"classic",name:"Classic",description:"Default glass-pipe maze",source:AS}];let Bn=HM(),kn={mapId:null,name:"",saveable:!1},Wa=!1,qa=null,ya=null,gn=null,_i=null,vn=null,Un=null,Nn=null,Zn=null,Da=[];const Ia=54,Ua=38,KS=12;let rs=0;const _t={forward:new T(1,0,0),reverseHoldForward:new T(1,0,0),target:new T,position:new T,isReversing:!1,reversalTimer:0,reverseSnapFramesRemaining:0},QS=8.5,Gr=4.5,ha=2,dd=.5,fd=.75,$S=3.5,JS=2.1,pd=2,gu=3,tM=10,eM=50,nM=6,iM=.13,sM=7,rM=22,oM=.2,aM=1.5,lM=3,cM=3,Of=12.5,uM=8,md=[200,400,800,1600],hM={blinky:{enabled:!0,releaseDelay:0},pinky:{enabled:!0,releaseDelay:3},inky:{enabled:!0,releaseDelay:6},clyde:{enabled:!0,releaseDelay:9}},So=[{id:"blinky",label:"Blinky",color:16711748,uiColor:"#ff0044",uiRgb:"255, 0, 68",spawnConnector:"center_front",aiProfile:"direct"},{id:"pinky",label:"Pinky",color:16729275,uiColor:"#ff44bb",uiRgb:"255, 68, 187",spawnConnector:"center_back",aiProfile:"ambush"},{id:"inky",label:"Inky",color:52479,uiColor:"#00ccff",uiRgb:"0, 204, 255",spawnConnector:"left_back",aiProfile:"vector"},{id:"clyde",label:"Clyde",color:16755200,uiColor:"#ffaa00",uiRgb:"255, 170, 0",spawnConnector:"right_back",aiProfile:"shy"}];function vu(n,t,e=null){return hM[n]?.[t]??e}function dM(){return So.slice(0,rr).filter(n=>vu(n.id,"enabled",!0))}function qe(){return We[0]||null}function Xa(){return qe()?.controller||null}function _u(n){return We.find(t=>t.id===n)||null}function Ze(n=qe()){return n?typeof n=="string"?_u(n):We.includes(n)?n:We.find(t=>t.model===n||t.controller===n||t.ai===n)||null:null}function Se(n){We.forEach(n)}function yu(){return!!We.some(n=>n.ai.enabled)}function Bf(){return mi==="pacman"?Jn:_u(mi)?.controller||Xa()}function kf(){const n=document.querySelector("#btn-swap-puppet");if(!n)return;const t=_u(mi);if(!t){n.textContent="Control: Pacman",n.style.background="rgba(255, 204, 0, 0.2)",n.style.borderColor="rgba(255, 204, 0, 0.3)",n.style.color="#ffcc00";return}n.textContent=`Control: ${t.definition.label}`,n.style.background=`rgba(${t.definition.uiRgb}, 0.2)`,n.style.borderColor=`rgba(${t.definition.uiRgb}, 0.3)`,n.style.color=t.definition.uiColor}function fM(){if(mi==="pacman")mi=qe()?.id||"pacman";else{const n=We.findIndex(t=>t.id===mi);mi=n>=0&&n<We.length-1?We[n+1].id:"pacman"}ye=Bf(),kf()}function pM(n,t,e){const i=n.clone().setY(0).normalize(),s=t.clone().setY(0).normalize(),r=An.clamp(i.dot(s),-1,1),o=i.x*s.z-i.z*s.x,a=Math.atan2(-o,r),l=An.clamp(a,-e,e);return i.applyAxisAngle(new T(0,1,0),l).normalize()}function zf(){return Va?"back":co&&!uo?"left":uo&&!co?"right":"forward"}function Ya(){Va=!1,co=!1,uo=!1,zc="forward"}function gd(n,t){const e=t==="left"?Math.PI/2:-Math.PI/2;return n.clone().setY(0).normalize().applyAxisAngle(new T(0,1,0),e)}function mM(n,t){return ye.getCameraTarget().addScaledVector(t,-4.5)}function vd(n,t,e=!1){if(e){const i=ye.getRouteCameraPoint(n,!1);return i||ye.getCameraTarget().addScaledVector(t,-n)}return ye.getCameraTrailPoint(n,t)}function gM(n){n.traverse(t=>{t.material&&(t.material.depthTest=!0)})}function Gf(){const n=document.querySelector("#btn-toggle-jumpscare");n&&(n.textContent=gi?"Jumpscare: On":"Jumpscare: Off",n.style.background=gi?"rgba(255, 34, 34, 0.2)":"rgba(12, 22, 45, 0.84)",n.style.borderColor=gi?"rgba(255, 34, 34, 0.4)":"rgba(136, 178, 255, 0.2)",n.style.color=gi?"#ff5555":"#ffffff")}function Hf(){const n=document.querySelector("#btn-toggle-collisions");n&&(n.textContent=Oi?"Collisions: On":"Collisions: Off",n.style.background=Oi?"rgba(255, 170, 0, 0.18)":"rgba(12, 22, 45, 0.84)",n.style.borderColor=Oi?"rgba(255, 170, 0, 0.35)":"rgba(136, 178, 255, 0.2)",n.style.color=Oi?"#ffaa00":"#ffffff")}function xu(){const n=document.querySelector("#btn-toggle-ghost-ai");if(!n)return;const t=yu();n.textContent=t?"Ghost AI: On":"Ghost AI: Off",n.style.background=t?"rgba(0, 255, 170, 0.16)":"rgba(12, 22, 45, 0.84)",n.style.borderColor=t?"rgba(0, 255, 170, 0.35)":"rgba(136, 178, 255, 0.2)",n.style.color=t?"#00ffaa":"#ffffff"}function Vf(){const n=document.querySelector("#btn-cycle-ghost-count");n&&(n.textContent=`Ghosts: ${rr}`)}function xr(){const n=document.querySelector("#lives-counter"),t=document.querySelector("#game-state-label");n&&(n.textContent=zi),t&&(t.style.display=Vn||hn?"block":"none",t.textContent=hn?"Level Complete":"Game Over",t.style.color=hn?"#00ffaa":"#ff4444");const e=document.querySelector("#game-hud-lives");if(e){e.innerHTML="";for(let i=0;i<zi;i++){const s=document.createElementNS("http://www.w3.org/2000/svg","svg");s.classList.add("hud-life-icon"),s.setAttribute("viewBox","0 0 24 24"),s.setAttribute("width","42"),s.setAttribute("height","42");const r=document.createElementNS("http://www.w3.org/2000/svg","path");r.setAttribute("d","M12 12 L20.66 7 A10 10 0 1 0 20.66 17 Z"),r.setAttribute("fill","url(#pacman3dGrad)"),s.appendChild(r),e.appendChild(s)}}}function Mo(){const n=document.querySelector("#score-counter");n&&(n.textContent=Mi);const t=document.querySelector("#hud-score-value");t&&(t.textContent=Mi)}function Su(){if(le.classList.contains("dev-tools-active"))return;Gi=!0,_a=jS;const t=document.querySelector("#game-countdown-overlay"),e=document.querySelector("#countdown-ready-title"),i=document.querySelector("#countdown-go-title");t&&(t.classList.add("active"),t.className="game-countdown-overlay active countdown-ready",t.setAttribute("aria-hidden","false")),e&&(e.style.display="flex"),i&&(i.style.display="none")}function vM(n){if(Gi&&(_a=Math.max(0,_a-n),_a<=0)){Gi=!1;const t=document.querySelector("#game-countdown-overlay"),e=document.querySelector("#countdown-ready-title"),i=document.querySelector("#countdown-go-title");t&&(t.className="game-countdown-overlay active countdown-go"),e&&(e.style.display="none"),i&&(i.style.display="flex"),setTimeout(()=>{Gi||Mu()},800)}}function Mu(){const n=document.querySelector("#game-countdown-overlay");n&&(n.classList.remove("active"),n.className="game-countdown-overlay",n.setAttribute("aria-hidden","true"))}function _M(){if(le.classList.contains("dev-tools-active"))return;const t=document.querySelector("#game-over-overlay");if(!t)return;const e=document.querySelector("#game-over-score");e&&(e.textContent=Mi),t.classList.add("active"),t.setAttribute("aria-hidden","false");const i=document.querySelector("#btn-hud-pause");i&&(i.style.display="none")}function Za(){const n=document.querySelector("#game-over-overlay");n&&(n.classList.remove("active"),n.setAttribute("aria-hidden","true"))}function yM(){if(le.classList.contains("dev-tools-active"))return;const t=document.querySelector("#game-victory-overlay");if(!t)return;const e=document.querySelector("#game-victory-score");e&&(e.textContent=Mi),t.classList.add("active"),t.setAttribute("aria-hidden","false");const i=document.querySelector("#btn-hud-pause");i&&(i.style.display="none")}function ja(){const n=document.querySelector("#game-victory-overlay");n&&(n.classList.remove("active"),n.setAttribute("aria-hidden","true"))}function Wf(){if(le.classList.contains("dev-tools-active"))return;const t=document.querySelector("#game-pause-overlay");if(!t)return;Yi=!0,t.classList.add("active"),t.setAttribute("aria-hidden","false");const e=document.querySelector("#pause-main-actions"),i=document.querySelector("#pause-controls-panel");e&&(e.style.display="flex"),i&&(i.style.display="none");const s=document.querySelector("#btn-hud-pause");s&&(s.style.display="none")}function wo(){const n=document.querySelector("#game-pause-overlay");n&&(n.classList.remove("active"),n.setAttribute("aria-hidden","true")),Yi=!1;const t=document.querySelector("#btn-hud-pause");t&&(t.style.display="")}function xM(n){return n===cs.POWER?eM:tM}function SM(n){n.length!==0&&(Mi+=n.reduce((t,e)=>t+xM(e.type),0),Mo())}function qf(){const n=Math.min(yo,md.length-1);return md[n]}function MM(){Mi+=qf(),yo+=1,Mo()}function wM(n,t){const e=document.createElement("canvas");e.width=256,e.height=128;const i=e.getContext("2d");i.clearRect(0,0,e.width,e.height),i.textAlign="center",i.textBaseline="middle",i.shadowColor="#00ffff",i.shadowBlur=14,i.lineWidth=7,i.font="bold 82px 'Century Gothic', Futura, sans-serif",i.strokeStyle="#00cccc",i.strokeText(n,e.width/2,e.height/2),i.shadowBlur=4,i.fillStyle="#ffffff",i.fillText(n,e.width/2,e.height/2);const s=new S0(e);s.minFilter=zn;const r=new jd({map:s,transparent:!0,depthWrite:!1,depthTest:!0}),o=new d0(r);o.position.copy(t),o.position.y+=.8,o.scale.set(.1,.05,1),oe.add(o),sr.push({sprite:o,age:0,duration:1.2,speed:1.8,targetWidth:1.8,targetHeight:.9})}function EM(n){for(let t=sr.length-1;t>=0;t--){const e=sr[t];if(e.age+=n,e.age>=e.duration)oe.remove(e.sprite),e.sprite.material.map.dispose(),e.sprite.material.dispose(),sr.splice(t,1);else{e.sprite.position.y+=e.speed*n;const i=Math.min(1,e.age/.15);if(e.sprite.scale.set(e.targetWidth*i,e.targetHeight*i,1),e.age>.6){const s=(e.age-.6)/(e.duration-.6);e.sprite.material.opacity=1-s}else e.sprite.material.opacity=1}}}function wu(){sr.forEach(n=>{oe.remove(n.sprite),n.sprite.material.map.dispose(),n.sprite.material.dispose()}),sr=[]}function Xf(){const n=Ff?.tiles?.size??0;return An.clamp(nM+n*iM,sM,rM)}function bM(n=vr||Xf()){return An.clamp(n*oM,aM,lM)}function Yf(n=qe()){return Ze(n)?.powerState||null}function Zf(n,t){n?.setVulnerable&&n.setVulnerable(t)}function Eu(n){we?.setPowerMode&&we.setPowerMode(n)}function Eo(n=qe()){if(Ze(n)?.powerState.recoveringFromEaten)return!1;const e=Yf(n);return!!(tp()&&e&&!e.eatenDuringCurrentPower)}function TM(){return tp()?vi<=bM()?"flashing":!0:!1}function Ka(){Se(n=>{Zf(n.model,Eo(n)?TM():!1),jf(n)})}function jf(n=null){(n?[Ze(n)].filter(Boolean):We).forEach(e=>{e.controller.speed=Eo(e)?uM:Of})}function bu(n=qe()){return Ze(n)?.houseState||null}function Tu(n=qe()){const t=Ze(n);t&&(t.houseState.houseState=t.spawnState?.tile?.type==="ghostchamber"?"inside":"active",t.houseState.releaseTimer=t.powerState.recoveringFromEaten?0:vu(t.id,"releaseDelay",0),t.houseState.releaseDirection=t.spawnState?.direction||null)}function _d(n=qe()){const t=bu(n);return!!(t&&t.houseState!=="active")}function Qa(n=qe()){const t=Ze(n),e=bu(t);!t||!e||!bo(t.controller)||(e.houseState="inside",e.releaseTimer=vu(t.id,"releaseDelay",0),e.releaseDirection=Kf(t)||t.spawnState?.direction||t.controller.currentDirection||null,t.ai.reset())}function Kf(n=qe()){const t=Ze(n),e=t?.controller.activeEdge?.to||t?.controller.currentNode;if(e?.tile?.type!=="ghostchamber")return null;const s={left_back:"east",right_back:"west",center_back:"north",left_front:"east",right_front:"west",center_front:"north"}[e.connector];return s&&Ve([s],e.tile.rotation)[0]||null}function yd(n=qe()){const t=Ze(n),e=Kf(t);!t||!e||(t.houseState.releaseDirection=e,Qf(t,e))}function AM(n=qe()){const t=Ze(n),e=t?.controller.activeEdge?.to||t?.controller.currentNode;if(e?.tile?.type!=="ghostchamber")return null;const s={left_back:"north",center_back:"north",right_back:"north",left_front:"south",center_front:"south",right_front:"south"}[e.connector];return s&&Ve([s],e.tile.rotation)[0]||null}function PM(n=qe()){const t=Ze(n),e=AM(t);!t||!e||Qf(t,e)}function Qf(n,t){const e=Ze(n);!e||!t||(e.controller.isMoving?e.controller.desiredDirection=t:e.controller.setDesiredDirection(t),e.controller.desiredIntent=null)}function bo(n=Xa()){return n?n.currentNode?.tile?.type==="ghostchamber"||n.activeEdge?.from?.tile?.type==="ghostchamber"||n.activeEdge?.to?.tile?.type==="ghostchamber":!1}function $f(n=Xa()){return n?.currentNode?.tile?.type==="ghostchamber"&&!n.route}function Jf(n=Xa()){return!n?.route||!n.activeEdge?!1:n.activeEdge.from?.tile?.type==="ghostchamber"&&n.activeEdge.to?.tile?.type!=="ghostchamber"&&n.route.totalLength-n.route.progress<=4.5}function RM(n=qe()){const t=Ze(n);return!t||ri(t)||$f(t.controller)?!0:bo(t.controller)?!Jf(t.controller):!1}function CM(n){Se(t=>{if(xd(t),!t.ai.enabled)return;const e=bu(t);if(!(!e||e.houseState==="active"||ri(t))){if(e.houseState==="inside"){e.releaseTimer=Math.max(0,e.releaseTimer-n),e.releaseTimer===0?(e.houseState="releasing",yd(t),t.ai.reset()):PM(t);return}e.houseState==="releasing"&&(!bo(t.controller)||Jf(t.controller)?(e.houseState="active",xd(t),t.ai.reset()):yd(t))}})}function LM(){vr=Xf(),vi=vr,yo=0,Eu(!0),Se(n=>{n.powerState.eatenDuringCurrentPower=ri(n)||n.powerState.recoveringFromEaten}),Ka(),Se(n=>{Eo(n)&&!ri(n)&&!bo(n.controller)&&n.ai.queueFrightenedReverse()})}function To(){vi=0,vr=0,yo=0,Eu(!1),Se(n=>{n.powerState.eatenDuringCurrentPower=!1}),Ka()}function Hl(n){vi<=0||(vi=Math.max(0,vi-n),vi===0&&(vr=0,yo=0,Eu(!1),Se(t=>{t.powerState.eatenDuringCurrentPower=!1})),Ka())}function DM(n){return n.some(t=>t.type===cs.POWER)}function tp(){return vi>0}function ri(n=qe()){return(Ze(n)?.respawnTimer||0)>0}function xd(n=qe()){const t=Ze(n);t?.powerState.recoveringFromEaten&&(ri(t)||bo(t.controller)||(t.powerState.recoveringFromEaten=!1))}function IM(n=qe()){const t=Ze(n);!t?.controller||!t.spawnState||(t.controller.reset(t.spawnState.tile,t.spawnState.direction,t.spawnState.connector),Tu(t),t.model.visible=!0,Ka())}function UM(n=qe()){const t=Ze(n);if(!t||ri(t))return;const e=Yf(t);e&&(e.eatenDuringCurrentPower=!0),e&&(e.recoveringFromEaten=!0);const i=qf();MM(),wM(i,t.model.position),Zf(t.model,!1),jf(t),t.respawnTimer=cM,t.model.visible=!1}function Vl(n){Se(t=>{ri(t)&&(t.respawnTimer=Math.max(0,t.respawnTimer-n),ri(t)||IM(t))})}function NM(){Se(n=>{n.ai.enabled&&$f(n.controller)&&!_d(n)&&Qa(n),!_d(n)&&n.ai.update({ghostController:n.controller,pacman:we,ghost:n.model,scatterTarget:n.scatterTarget,ghosts:We,canGhostBeEaten:Eo,isGhostRespawning:ri(n)})})}function FM(n){return Array.isArray(n)?n:[n]}function OM(n){return!n.isMesh||!n.visible||!n.material?!1:FM(n.material).every(t=>t&&t.visible!==!1&&t.transparent!==!0&&t.opacity!==0&&t.depthWrite!==!1)}function BM(){const n=[],t=oe.background,e=oe.overrideMaterial;oe.traverse(i=>{i.isMesh&&(OM(i)||(n.push([i,i.visible]),i.visible=!1))}),oe.background=null,oe.overrideMaterial=YS;try{Xe.render(oe,qt)}finally{oe.overrideMaterial=e,oe.background=t,n.forEach(([i,s])=>{i.visible=s})}}function kM(){Xe.clear();const n=We.map(t=>t.model).filter(t=>t?.visible);if(!Ye||gi||n.length===0){Xe.render(oe,qt);return}n.forEach(t=>{t.visible=!1}),Xe.render(oe,qt),n.forEach(t=>{t.visible=!0}),Xe.clearDepth(),BM(),n.forEach(t=>{Xe.render(t,qt)})}fe.add(Nf);fe.add(fu);fe.add(pu);const Au=new bt(new xi(Wt*20,Wt*20),new Be({visible:!1}));Au.rotation.x=-Math.PI/2;oe.add(Au);oe.add(fe);oe.add(Jt);oe.add(Pn);Pn.visible=!1;function zM(n,t){const e=qi(n.color);return e.scale.setScalar(.32),e.userData.ghostId=n.id,gM(e),Pn.add(e),{id:n.id,definition:n,scatterTarget:GM(n.id,t),model:e,controller:new Lf(e,t,{speed:Of,entityType:"ghost"}),ai:new VS({profile:n.aiProfile,randomSeed:n.id.split("").reduce((i,s)=>i*31+s.charCodeAt(0)>>>0,2654435769)}),powerState:{eatenDuringCurrentPower:!1,recoveringFromEaten:!1},houseState:{houseState:"active",releaseTimer:0,releaseDirection:null},spawnState:null,respawnTimer:0}}function GM(n,t){const e=Array.from(t.tiles.values());if(e.length===0)return new T;const i=e.reduce((a,l)=>({minX:Math.min(a.minX,l.position.x),maxX:Math.max(a.maxX,l.position.x),minZ:Math.min(a.minZ,l.position.z),maxZ:Math.max(a.maxZ,l.position.z)}),{minX:1/0,maxX:-1/0,minZ:1/0,maxZ:-1/0}),s={blinky:[i.maxX,i.minZ],pinky:[i.minX,i.minZ],inky:[i.maxX,i.maxZ],clyde:[i.minX,i.maxZ]},[r,o]=s[n]||[i.minX,i.maxZ];return new T(r,2,o)}function HM(){try{const n=localStorage.getItem(Gc);if(n===null){const e=[{id:"user-grid",name:"Grid",source:PS,updatedAt:Date.now()}];return localStorage.setItem(Gc,JSON.stringify(e)),e}const t=JSON.parse(n||"[]");return Array.isArray(t)?t.filter(e=>e&&typeof e.id=="string"&&typeof e.name=="string"&&Array.isArray(e.source)).slice(0,xo):[]}catch{return[]}}function VM(){localStorage.setItem(Gc,JSON.stringify(Bn.slice(0,xo)))}function ep(){return[...mu,...Bn]}function WM(){return`user-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,7)}`}function Sd(n){return String(n).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function np(n){return ep().find(t=>t.id===n)||mu[0]}function qM(){return np(ps)}function XM(){return Jt.children.map(n=>({type:n.userData.type,position:[n.position.x,n.position.y,n.position.z],rotation:n.userData.rotation,hasPowerPellet:n.userData.hasPowerPellet||!1,hasPacmanSpawn:n.userData.hasPacmanSpawn||!1,pacmanSpawnRotation:n.userData.pacmanSpawnRotation||0}))}function wi(n=!0){Wa=!!n,ip()}function $a(n){kn={mode:n.mode||"none",mapId:n.mapId||null,name:n.name||"",saveable:!!n.saveable},wi(!1)}function Hc(n){const t=document.querySelector("#editor-toast");t&&(t.textContent=n,t.classList.add("active"),clearTimeout(Hc.timeoutId),Hc.timeoutId=setTimeout(()=>{t.classList.remove("active")},2600))}function Js(){document.querySelector("#editor-save-modal")?.classList.remove("active"),qa=null}function ho({title:n,message:t,variant:e="info",primaryText:i="Close"}){const s=document.querySelector("#editor-save-modal"),r=document.querySelector("#editor-save-modal-eyebrow"),o=document.querySelector("#editor-save-modal-title"),a=document.querySelector("#editor-save-modal-message"),l=document.querySelector("#editor-save-input-wrap"),c=document.querySelector("#editor-save-name-input"),u=document.querySelector("#editor-save-modal-error"),h=document.querySelector("#btn-editor-save-cancel"),p=document.querySelector("#btn-editor-save-confirm");!s||!o||!a||!l||!c||!u||!h||!p||(qa=null,s.dataset.variant=e,r.textContent=e==="success"?"Saved":"Map Editor",o.textContent=n,a.textContent=t,l.style.display="none",c.value="",u.textContent="",h.style.display="none",p.textContent=i,s.classList.add("active"),p.focus())}function YM(n,t){const e=document.querySelector("#editor-save-modal"),i=document.querySelector("#editor-save-modal-eyebrow"),s=document.querySelector("#editor-save-modal-title"),r=document.querySelector("#editor-save-modal-message"),o=document.querySelector("#editor-save-input-wrap"),a=document.querySelector("#editor-save-name-input"),l=document.querySelector("#editor-save-modal-error"),c=document.querySelector("#btn-editor-save-cancel"),u=document.querySelector("#btn-editor-save-confirm");!e||!s||!r||!o||!a||!l||!c||!u||(qa={source:n},e.dataset.variant="save",i.textContent=kn.mapId?"Update Slot":"New Slot",s.textContent="Save Map",r.textContent="Name this map before saving it to your map slots.",o.style.display="",a.value=t,l.textContent="",c.style.display="",c.textContent="Cancel",u.textContent="Save Map",e.classList.add("active"),requestAnimationFrame(()=>{a.focus(),a.select()}))}function ZM(n){const t=document.querySelector("#editor-save-modal"),e=document.querySelector("#editor-save-modal-eyebrow"),i=document.querySelector("#editor-save-modal-title"),s=document.querySelector("#editor-save-modal-message"),r=document.querySelector("#editor-save-input-wrap"),o=document.querySelector("#editor-save-name-input"),a=document.querySelector("#editor-save-modal-error"),l=document.querySelector("#btn-editor-save-cancel"),c=document.querySelector("#btn-editor-save-confirm");!t||!i||!s||!r||!o||!a||!l||!c||(ya=n,t.dataset.variant="confirm-discard",e.textContent="Unsaved Changes",i.textContent="Discard Changes?",s.textContent="You have unsaved changes. If you close the editor, these changes will be lost.",r.style.display="none",o.value="",a.textContent="",l.style.display="",l.textContent="Cancel",c.textContent="Discard",t.classList.add("active"),c.focus())}function ip(){const n=document.querySelector("#btn-save-map");if(!n)return;n.disabled=!kn.saveable;const t=n.querySelector(".editor-save-label"),e=n.querySelector(".editor-save-kicker");t&&(t.textContent=kn.saveable?Wa?"Save Map *":"Save Map":"Read Only"),e&&(e.textContent=kn.saveable?kn.name||"Editor Slot":"Built-In Map"),n.title=kn.saveable?"Save this map to your map slots":"Built-in maps can be exported, but cannot be saved over"}function sp(n,t={}){if(!Array.isArray(n))throw new Error("Map data must be an array of pieces.");if(t.requirePlayable&&n.length<5)throw new Error("Saved maps need at least 5 maze pieces.");const e=["straight","corner","tjunction","crossroad","teleport","ghostchamber"];let i=0,s=0;const r=new Set,o=a=>{const c=(a%(Math.PI*2)+Math.PI*2)%(Math.PI*2)%(Math.PI/2);return c<.01||Math.abs(c-Math.PI/2)<.01};for(let a=0;a<n.length;a+=1){const l=n[a];if(!l.type||!e.includes(l.type))throw new Error(`Invalid or missing piece type at index ${a}: ${l.type}`);if(!Array.isArray(l.position)||l.position.length!==3)throw new Error(`Invalid position array at index ${a}. Must have 3 coordinates.`);const c=Math.round(l.position[0]/Wt)*Wt,u=Math.round(l.position[2]/Wt)*Wt;if(Math.abs(l.position[0]-c)>.1||Math.abs(l.position[1])>.1||Math.abs(l.position[2]-u)>.1)throw new Error(`Invalid position at index ${a}. Must be aligned to the grid (multiples of ${Wt}) at Y=0.`);const h=`${Math.round(l.position[0])},${Math.round(l.position[2])}`;if(r.has(h))throw new Error(`Duplicate tile position at index ${a}.`);if(r.add(h),typeof l.rotation!="number")throw new Error(`Invalid rotation at index ${a}. Must be a number.`);if(!o(l.rotation))throw new Error(`Invalid rotation at index ${a}. Must be a multiple of 90 degrees (PI/2).`);if(l.hasPacmanSpawn){if(i+=1,i>1)throw new Error("Multiple Pacman spawns detected. Only one is allowed.");if(typeof l.pacmanSpawnRotation=="number"&&!o(l.pacmanSpawnRotation))throw new Error(`Invalid Pacman spawn rotation at index ${a}. Must be a multiple of 90 degrees.`);if(l.hasPowerPellet)throw new Error(`Conflict at index ${a}: A tile cannot have both a Pacman spawn and a Power Pellet.`)}if(l.type==="ghostchamber"&&(s+=1,s>1))throw new Error("Multiple Ghost Chambers detected. Only one is allowed.")}if(t.requirePlayable){if(i!==1)throw new Error("Saved maps need exactly one Pacman spawn.");if(s!==1)throw new Error("Saved maps need exactly one Ghost Chamber.");const a=Pf(n);for(const l of a.tiles.values()){const c=l.type==="teleport"?Ve(["west"],l.rotation)[0]:null;for(const u of l.connectors)if(u!==c&&!l.exits.has(u)){const h=u.charAt(0).toUpperCase()+u.slice(1);throw new Error(`Open ${h} connection at (${l.position.x}, ${l.position.z}). Every pipe opening must connect to another piece.`)}}}}function rp({markDirty:n=!1}={}){for(;Jt.children.length>0;)Jt.remove(Jt.children[0]);Ao(),wi(n)}function jM(n){const t=go(n.type);if(t.position.set(...n.position),t.rotation.y=n.rotation,t.userData={type:n.type,rotation:n.rotation,hasPowerPellet:n.hasPowerPellet||!1,hasPacmanSpawn:n.hasPacmanSpawn||!1,pacmanSpawnRotation:n.pacmanSpawnRotation||0},t.userData.hasPowerPellet){const e=vo();e.name="powerPelletIndicator";let i=0,s=0;if(t.userData.type==="corner"){const r=3.57*(1-Math.SQRT1_2);i=r,s=-r}e.position.set(i,2.5,s),e.scale.set(.4,.4,.4),e.traverse(r=>{r.material&&(r.material=r.material.clone(),r.material.depthTest=!1,r.renderOrder=998)}),t.add(e)}if(t.userData.hasPacmanSpawn){const e=bs();e.name="pacmanSpawnIndicator";let i=0,s=0;if(t.userData.type==="corner"){const r=3.57*(1-Math.SQRT1_2);i=r,s=-r}e.position.set(i,2.5,s),e.scale.setScalar(.32),e.rotation.y=t.userData.pacmanSpawnRotation-t.rotation.y,t.add(e)}Jt.add(t)}function Pu(n,t={}){rp({markDirty:!1}),n.forEach(jM),wi(!!t.markDirty)}function KM(n){$a({mode:"template",mapId:n.id,name:n.name,saveable:!1}),Pu(n.source),be("/editor")}function QM(n){$a({mode:"saved",mapId:n.id,name:n.name,saveable:!0}),Pu(n.source),be("/editor")}function $M(){if(Bn.length>=xo){ho({title:"No Free Slots",message:"All map slots are already occupied. Edit an existing map or export your work before replacing anything.",variant:"error"});return}$a({mode:"new",mapId:null,name:"",saveable:!0}),rp({markDirty:!1}),be("/editor")}function JM(n,t){const e=Bn.findIndex(s=>s.id===kn.mapId);let i=kn.mapId;if(e>=0)Bn[e]={...Bn[e],name:t,source:n,updatedAt:Date.now()};else{if(Bn.length>=xo){ho({title:"No Free Slots",message:"All map slots are already occupied. Edit an existing map or export your work before replacing anything.",variant:"error"});return}i=WM(),Bn.push({id:i,name:t,source:n,updatedAt:Date.now()})}VM(),ps=i,$a({mode:"saved",mapId:i,name:t,saveable:!0}),wi(!1),be("/maps")}function tw(){if(!kn.saveable){ho({title:"Read Only Map",message:"Classic can be opened for inspection and export, but it cannot be saved over. Create a new map slot to save changes.",variant:"error"});return}const n=XM();try{sp(n,{requirePlayable:!0})}catch(e){ho({title:"Map Not Ready",message:e.message,variant:"error"});return}const t=kn.name||`Custom ${String(Bn.length+1).padStart(2,"0")}`;YM(n,t)}function op(){Pn.clear(),We=[];const n=qM().source;n.forEach(o=>{const a=go(o.type);a.position.set(...o.position),a.rotation.y=o.rotation,a.userData={type:o.type,rotation:o.rotation,hasPowerPellet:o.hasPowerPellet||!1,hasPacmanSpawn:o.hasPacmanSpawn||!1,pacmanSpawnRotation:o.pacmanSpawnRotation||0},Pn.add(a)});const t=n.map(o=>({type:o.type,position:o.position,rotation:o.rotation,hasPowerPellet:o.hasPowerPellet||!1,hasPacmanSpawn:o.hasPacmanSpawn||!1,pacmanSpawnRotation:o.pacmanSpawnRotation||0})),e=Pf(t);Ff=e,we=bs(),we.scale.setScalar(.32),Pn.add(we),Jn=new Lf(we,e,{entityType:"pacman"}),we.userData.controller=Jn,We=dM().map(o=>zM(o,e)),To(),ye=Jn,mi="pacman",kf();let i=null,s=null,r=null;fi=null;for(const o of e.tiles.values()){if(o.hasPacmanSpawn){i=o;const a=(o.pacmanSpawnRotation%(Math.PI*2)+Math.PI*2)%(Math.PI*2);Math.abs(a-0)<.1?s="south":Math.abs(a-Math.PI/2)<.1?s="east":Math.abs(a-Math.PI)<.1?s="north":Math.abs(a-Math.PI*1.5)<.1&&(s="west")}o.type==="ghostchamber"&&(r=o)}if(!i){const o=["straight","corner","tjunction","crossroad","teleport"];i=Array.from(e.tiles.values()).find(a=>o.includes(a.type)),i||(i=Array.from(e.tiles.values())[0])}if(i&&(fi={tile:i,direction:s,connector:null},Jn.reset(fi.tile,fi.direction,fi.connector)),r){const o=Ve(["north"],r.rotation)[0];Se(a=>{a.spawnState={tile:r,direction:o,connector:a.definition.spawnConnector}})}else Se(i?o=>{o.spawnState={tile:i,direction:s,connector:null}}:o=>{o.spawnState=null});Se(o=>{o.spawnState&&(o.controller.reset(o.spawnState.tile,o.spawnState.direction,o.spawnState.connector),Tu(o))}),He.buildFromMap(e)}function ap(n=!0){!Jn||We.length===0||!fi||(we?.resetDeathAnimation&&we.resetDeathAnimation(),Jn.reset(fi.tile,fi.direction,fi.connector),Se(t=>{t.spawnState&&(t.controller.reset(t.spawnState.tile,t.spawnState.direction,t.spawnState.connector),Tu(t),t.respawnTimer=0,t.model.visible=!0,t.ai.reset(),t.powerState.eatenDuringCurrentPower=!1,t.powerState.recoveringFromEaten=!1)}),Ya(),_t.isReversing=!1,_t.reversalTimer=0,_t.reverseSnapFramesRemaining=0,ye=Bf(),n&&ye&&(_t.forward.copy(ye.getFollowDirection()).normalize(),_t.reverseHoldForward.copy(_t.forward),_t.target.copy(ye.getCameraTarget()),jn(1,!0)))}function ew(){if(!we)return null;const n=$S*we.scale.x;return We.find(t=>{if(!t.model.visible||RM(t))return!1;const e=JS*t.model.scale.x,i=n+e;return we.position.distanceToSquared(t.model.position)<=i*i})||null}function Na(){return Si>0}function nw(){Na()||(To(),Si=pd,we?.playDeathAnimation&&we.playDeathAnimation(pd),Ya(),_t.isReversing=!1,_t.reversalTimer=0,_t.reverseSnapFramesRemaining=0)}function iw(){zi=Math.max(0,zi-1),Vn=zi===0,xr(),Vn?_M():(ap(!0),Su())}function sw(){hn=!0,Si=0,xr(),yM()}function Ru(){zi=gu,Vn=!1,hn=!1,Mi=0,Si=0,Se(n=>{n.respawnTimer=0}),To(),wu(),He.reset(),document.querySelector("#pellet-counter").textContent=He.getEatenCount(),xr(),Mo(),ap(!0),Su()}function rw(){const n=yu();Si=0,Vn=!1,hn=!1,Mi=0,zi=gu,To(),op(),Se(t=>{t.ai.setEnabled(n),n&&Qa(t)}),document.querySelector("#pellet-counter").textContent=He.getEatenCount(),xu(),Vf(),xr(),Mo(),ye&&(_t.forward.copy(ye.getFollowDirection()).normalize(),_t.reverseHoldForward.copy(_t.forward),_t.target.copy(ye.getCameraTarget()),_t.isReversing=!1,_t.reversalTimer=0,_t.reverseSnapFramesRemaining=0,jn(1,!0))}const Sr=0,Ei=96,lp=Mn();lp.position.set(Sr,3.5,Ei);fe.add(lp);const ms=bs();ms.position.set(Sr,7.5,Ei);ms.rotation.y=Math.PI/1.4+Math.PI/2+Math.PI/12;fe.add(ms);const cp=Mn();cp.position.set(Sr-24,3.5,Ei);fe.add(cp);const In=bs();In.position.set(Sr-24,7.5,Ei);In.rotation.y=ms.rotation.y;fe.add(In);let Md=-1/0;const ow=5,aw=1.45;let wd=!1,Zs=0;const up=Sr,As=Ei+24,hp=Mn();hp.position.set(up,3.5,As);fe.add(hp);const Qr=vo();Qr.position.set(up,7.5,As);fe.add(Qr);const dp=12,fp=144,pp=Mn();pp.position.set(dp,3.5,fp);fe.add(pp);const $r=Af();$r.position.set(dp,5.5,fp);fe.add($r);const Mr=Sr+24,Ja=Mr+24,mp=Mn();mp.position.set(Mr,3.5,Ei);fe.add(mp);const or=qi(16711748);or.position.set(Mr,4.8,Ei);or.rotation.y=-Math.PI/4;fe.add(or);const gp=Mn();gp.position.set(Ja,3.5,Ei);fe.add(gp);const ar=qi(16729275);ar.position.set(Ja,4.8,Ei);ar.rotation.y=-Math.PI/4;fe.add(ar);const vp=Mn();vp.position.set(Mr,3.5,As);fe.add(vp);const lr=qi(52479);lr.position.set(Mr,4.8,As);lr.rotation.y=-Math.PI/4;fe.add(lr);const _p=Mn();_p.position.set(Ja,3.5,As);fe.add(_p);const cr=qi(16755200);cr.position.set(Ja,4.8,As);cr.rotation.y=-Math.PI/4;fe.add(cr);const yp=Mr+12,xp=As+24,Sp=Mn();Sp.position.set(yp,3.5,xp);fe.add(Sp);const gs=qi(16777215);gs.position.set(yp,4.8,xp);gs.rotation.y=-Math.PI/4;gs.setVulnerable("flashing");fe.add(gs);Nt.target.set(...Hn.target);qt.position.set(...Hn.pos);window.getCameraConfig=()=>{const n=qt.position,t=Nt.target;console.log("%c --- View Captured ---","color: #2462ff; font-weight: bold;"),console.log(`Position: [${n.x.toFixed(2)}, ${n.y.toFixed(2)}, ${n.z.toFixed(2)}]`),console.log(`Target: [${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)}]`),console.log("----------------------")};let Wn=!1,fo=!1,vs=!1,xa=null,Re="straight",on=0,ne=null;const Ed=new lg,Vc=new et,ji=new cg(Wt*20,20,2384639,1385797);ji.position.y=.06;ji.visible=!1;oe.add(ji);function lw(){if(Wn)return;Wn=!0;const n=document.querySelector("#mode-status"),t=document.querySelector("#btn-toggle-mode"),e=document.querySelector("#btn-toggle-game"),i=document.querySelector("#editor-ui"),s=document.querySelector("#editor-only-controls");le.classList.add("editor-active"),le.classList.remove("showroom-active"),le.classList.remove("route-overlay-active"),n.textContent="Editor",t.textContent="Close Editor",i.classList.add("active"),s.style.display="flex",e.style.display="none",ji.visible=!0,fe.visible=!1,Jt.visible=!0,Pn.visible=!1,oe.fog.density=0,Ts.intensity=2.8,Tp(),Nt.enabled=!0,Nt.enableRotate=!0,Nt.maxPolarAngle=Math.PI/2,Nt.minDistance=5,qt.fov=_o,qt.updateProjectionMatrix(),qt.position.set(...La.pos),Nt.target.set(...La.target),ip()}function cw(){if(!Wn)return;const n=Wa;Wn=!1;const t=document.querySelector("#mode-status"),e=document.querySelector("#btn-toggle-mode"),i=document.querySelector("#btn-toggle-game"),s=document.querySelector("#editor-ui"),r=document.querySelector("#editor-only-controls");le.classList.remove("editor-active"),t.textContent="Showcase",e.textContent="Open Editor",s.classList.remove("active"),r.style.display="none",i.style.display="block",ji.visible=!1,fe.visible=!0,Jt.visible=!1,Ao(),fo&&Iu("3d"),Nt.maxPolarAngle=Math.PI/2.12,Nt.minDistance=18,oe.fog.density=.009,Ts.intensity=1.4,qt.fov=_o,qt.updateProjectionMatrix(),qt.position.set(...Hn.pos),Nt.target.set(...Hn.target),n&&Hc("Editor closed without saving changes.")}function Cu(n){le.classList.toggle("dev-tools-active",n)}function tl(n){Ui=!!n;const t=document.querySelector("#game-start-overlay");if(!t)return;t.classList.toggle("active",Ui),t.setAttribute("aria-hidden",Ui?"false":"true");const e=document.querySelector("#btn-hud-pause");e&&(e.style.display=Ui?"none":""),!Ui&&Ye&&Su()}function uw(n={}){const t=!!n.dev,e=Number(n.ghostCount);Ye=!0,Ui=!1,Ya(),gi=!!n.jumpscare,Gi=!1,Yi=!1,Mu(),Za(),ja(),wo(),wu();const i=document.querySelector("#btn-hud-pause");i&&(i.style.display=t?"":"none"),Number.isInteger(e)&&(rr=An.clamp(e,1,So.length));const s=!t;Oi=!0,Si=0,vi=0,vr=0,Se(c=>{c.respawnTimer=0}),zi=gu,Vn=!1,hn=!1,Mi=0,le.classList.add("game-active"),le.classList.remove("showroom-active"),le.classList.remove("route-overlay-active"),Cu(t);const r=document.querySelector("#mode-status"),o=document.querySelector("#btn-toggle-game"),a=document.querySelector("#btn-toggle-mode"),l=document.querySelector("#game-only-controls");r.textContent="Game",o.textContent="End Game",a.style.display="none",l.style.display="flex",Gf(),Hf(),Vf(),xr(),Mo(),fe.visible=!1,Jt.visible=!1,Pn.visible=!0,ji.visible=!1,Ao(),oe.fog.density=.004,Ts.intensity=2.2,qt.fov=XS,qt.updateProjectionMatrix(),Nt.enabled=!1,Nt.enableRotate=!1,op(),Se(c=>{c.ai.setEnabled(s),s&&Qa(c)}),xu(),_t.forward.copy(ye.getFollowDirection()),_t.reverseHoldForward.copy(_t.forward),_t.target.copy(ye.getCameraTarget()),_t.position.copy(qt.position),_t.isReversing=!1,_t.reversalTimer=0,_t.reverseSnapFramesRemaining=0,jn(1,!0),tl(!t)}function hw(){if(!Ye)return;Ye=!1,Gi=!1,Yi=!1,Mu(),Za(),ja(),wo(),wu(),tl(!1),Ya(),gi=!1,Se(s=>s.ai.setEnabled(!1)),Si=0,Se(s=>{s.respawnTimer=0}),To(),Vn=!1,hn=!1,le.classList.remove("game-active"),Cu(!1);const n=document.querySelector("#mode-status"),t=document.querySelector("#btn-toggle-game"),e=document.querySelector("#btn-toggle-mode"),i=document.querySelector("#game-only-controls");n.textContent="Showcase",t.textContent="Start Game",e.style.display="",i.style.display="none",fe.visible=!0,Jt.visible=!1,Pn.visible=!1,oe.fog.density=.009,Ts.intensity=1.4,qt.fov=_o,qt.updateProjectionMatrix(),Nt.enabled=!0,Nt.enableRotate=!0,Nt.maxPolarAngle=Math.PI/2.12,Nt.minDistance=18,qt.position.set(...Hn.pos),Nt.target.set(...Hn.target)}function os(n){const t=Ia,e=Ua,i=t/2,s=e/2,r=2*(t+e);if(n=n%r,n<0&&(n+=r),n<t)return{pos:new T(-i+n,0,-s),dir:new T(1,0,0)};if(n<t+e){const o=n-t;return{pos:new T(i,0,-s+o),dir:new T(0,0,1)}}else if(n<2*t+e){const o=n-(t+e);return{pos:new T(i-o,0,s),dir:new T(-1,0,0)}}else{const o=n-(2*t+e);return{pos:new T(-i,0,s-o),dir:new T(0,0,-1)}}}function dw(){const n=document.querySelector("#menu-3d-canvas");if(!n)return;const t=n.clientWidth||560,e=n.clientHeight||400;gn=new Zd,_i=new cn(54,t/e,.1,100),_i.position.set(0,45,8),_i.up.set(0,1,0),_i.lookAt(0,-1,0),vn=new yf({canvas:n,alpha:!0,antialias:!0}),vn.setPixelRatio(Math.min(window.devicePixelRatio,1.25)),vn.setSize(t,e,!1),vn.outputColorSpace=an,vn.toneMapping=Yc,vn.toneMappingExposure=1.05;const i=new rg(9022975,.8);gn.add(i);const s=new Fc(16765466,2.2);s.position.set(5,15,5),gn.add(s);const r=new Fc(3898623,1.6);r.position.set(-5,10,-5),gn.add(r),Un=bs(),Un.scale.setScalar(.45),gn.add(Un),Nn=qi(8959),Nn.scale.setScalar(.42),Nn.setVulnerable(!0),gn.add(Nn),Zn=qi(16746530),Zn.scale.setScalar(.42),gn.add(Zn);const o=3;Da=[];const a=u=>{const h=Af();h.scale.setScalar(1.4);const p=os(u);h.position.copy(p.pos),gn.add(h),Da.push({mesh:h,dist:u,eaten:!1})},l=[Ia,Ua,Ia,Ua];let c=0;l.forEach((u,h)=>{const p=Math.max(1,Math.round(u/o));for(let d=0;d<=p;d+=1)h>0&&d===0||h===l.length-1&&d===p||a(c+u*d/p);c+=u}),rs=0}function fw(n,t){if(!gn||!Un)return;rs+=t;const e=2*(Ia+Ua),i=rs*KS%e,s=os(i);Un.position.copy(s.pos);const r=i+.15,o=os(r);if(Un.lookAt(o.pos),Un.userData&&Un.userData.update&&Un.userData.update(rs,t),Nn){const a=(i+30)%e,l=os(a);Nn.position.copy(l.pos);const c=a+.15,u=os(c);Nn.lookAt(u.pos),Nn.userData&&Nn.userData.update&&Nn.userData.update(rs)}if(Zn){const a=(i-30+e)%e,l=os(a);Zn.position.copy(l.pos);const c=a+.15,u=os(c);Zn.lookAt(u.pos),Zn.userData&&Zn.userData.update&&Zn.userData.update(rs)}Da.forEach(a=>{let l=i-a.dist;l<0&&(l+=e),a.mesh.position.distanceTo(Un.position)<2.3&&(a.eaten||(a.eaten=!0,a.mesh.visible=!1)),l>33&&l<e-1.5&&a.eaten&&(a.eaten=!1,a.mesh.visible=!0),a.mesh.userData&&a.mesh.userData.update&&a.mesh.userData.update(rs)}),vn.render(gn,_i)}function pw(){if(!vn||!_i)return;const n=document.querySelector("#menu-3d-canvas");if(!n)return;const t=n.clientWidth,e=n.clientHeight;_i.aspect=t/e,_i.updateProjectionMatrix(),vn.setPixelRatio(Math.min(window.devicePixelRatio,1.25)),vn.setSize(t,e,!1)}function mw(n){const t=n.map(i=>i.position[0]),e=n.map(i=>i.position[2]);return{minX:Math.min(...t),maxX:Math.max(...t),minZ:Math.min(...e),maxZ:Math.max(...e)}}function gw(n,t,e,i,s,r){n.beginPath(),n.moveTo(t+r,e),n.lineTo(t+i-r,e),n.quadraticCurveTo(t+i,e,t+i,e+r),n.lineTo(t+i,e+s-r),n.quadraticCurveTo(t+i,e+s,t+i-r,e+s),n.lineTo(t+r,e+s),n.quadraticCurveTo(t,e+s,t,e+s-r),n.lineTo(t,e+r),n.quadraticCurveTo(t,e,t+r,e),n.closePath()}function vw(n,t,e,i){n.beginPath();for(let r=0;r<8;r+=1){const o=Math.PI/8+r*(Math.PI*2/8),a=t+Math.cos(o)*i,l=e+Math.sin(o)*i;r===0?n.moveTo(a,l):n.lineTo(a,l)}n.closePath()}function _w(n){const t=n.getContext("2d"),{width:e,height:i}=n;t.clearRect(0,0,e,i);const s=t.createLinearGradient(0,0,e,i);s.addColorStop(0,"#020614"),s.addColorStop(1,"#050b1d"),t.fillStyle=s,t.fillRect(0,0,e,i),t.save(),t.globalAlpha=.42,t.strokeStyle="rgba(51, 102, 255, 0.14)",t.lineWidth=1;for(let r=24;r<e;r+=28)t.beginPath(),t.moveTo(r,0),t.lineTo(r,i),t.stroke();for(let r=24;r<i;r+=28)t.beginPath(),t.moveTo(0,r),t.lineTo(e,r),t.stroke();t.restore(),t.save(),t.fillStyle="rgba(136, 178, 255, 0.22)",t.font="700 15px Trebuchet MS, sans-serif",t.letterSpacing="2px",t.textAlign="center",t.textBaseline="middle",t.fillText("EMPTY SLOT",e/2,i/2),t.restore()}function Mp(n,t){if(!t){_w(n);return}const e=n.getContext("2d"),i=n.width,s=n.height,r=mw(t),o=Math.max(Wt,r.maxX-r.minX+Wt),a=Math.max(Wt,r.maxZ-r.minZ+Wt),l=22,c=Math.min((i-l*2)/o,(s-l*2)/a),u=(r.minX+r.maxX)/2,h=(r.minZ+r.maxZ)/2,p=(v,m)=>({x:i/2+(v-u)*c,y:s/2+(m-h)*c});e.clearRect(0,0,i,s);const d=e.createLinearGradient(0,0,i,s);d.addColorStop(0,"#020614"),d.addColorStop(1,"#050b1d"),e.fillStyle=d,e.fillRect(0,0,i,s),e.save(),e.globalAlpha=.5,e.strokeStyle="rgba(51, 102, 255, 0.16)",e.lineWidth=1;for(let v=24;v<i;v+=24)e.beginPath(),e.moveTo(v,0),e.lineTo(v,s),e.stroke();for(let v=24;v<s;v+=24)e.beginPath(),e.moveTo(0,v),e.lineTo(i,v),e.stroke();e.restore(),e.save(),t.forEach(v=>{const m=p(v.position[0],v.position[2]),f=Wt*c*(v.type==="ghostchamber"?.52:.46);vw(e,m.x,m.y,f),e.fillStyle=v.type==="ghostchamber"?"rgba(255, 68, 187, 0.22)":"rgba(24, 63, 155, 0.55)",e.shadowColor=v.type==="ghostchamber"?"rgba(255, 68, 187, 0.45)":"rgba(51, 102, 255, 0.45)",e.shadowBlur=12,e.fill(),e.lineWidth=2,e.strokeStyle=v.type==="ghostchamber"?"rgba(255, 68, 187, 0.55)":"rgba(51, 102, 255, 0.28)",e.stroke()}),e.restore();const g=[];t.forEach(v=>{if(v.type==="ghostchamber")return;const m={type:v.type,rotation:v.rotation,position:v.position},f=p(v.position[0],v.position[2]);(yr[v.type]||[]).forEach(x=>{const _=Ve([x],m.rotation)[0],A=Xi[_];if(!A)return;const P=p(v.position[0]+A.x*Wt*.48,v.position[2]+A.z*Wt*.48);g.push({from:f,to:P})})}),[{width:Math.max(22,Wt*c*.78),color:"rgba(0, 34, 255, 0.2)",blur:18},{width:Math.max(15,Wt*c*.54),color:"rgba(0, 75, 255, 0.72)",blur:12},{width:Math.max(8,Wt*c*.28),color:"#0b62ff",blur:4},{width:Math.max(3,Wt*c*.08),color:"rgba(120, 178, 255, 0.9)",blur:0}].forEach(v=>{e.save(),e.lineCap="round",e.lineJoin="round",e.shadowColor=v.color,e.shadowBlur=v.blur,e.strokeStyle=v.color,e.lineWidth=v.width,g.forEach(m=>{e.beginPath(),e.moveTo(m.from.x,m.from.y),e.lineTo(m.to.x,m.to.y),e.stroke()}),e.restore()}),e.save(),t.filter(v=>v.type==="ghostchamber").forEach(v=>{const m=p(v.position[0],v.position[2]),f=Wt*c*.68;gw(e,m.x-f/2,m.y-f/2,f,f,8),e.fillStyle="rgba(255, 68, 187, 0.24)",e.fill(),e.strokeStyle="rgba(255, 68, 187, 0.9)",e.lineWidth=2,e.stroke()}),t.forEach(v=>{const m=p(v.position[0],v.position[2]);v.hasPowerPellet&&(e.beginPath(),e.fillStyle="#ffaa00",e.shadowColor="rgba(255, 170, 0, 0.95)",e.shadowBlur=12,e.arc(m.x,m.y,4.5,0,Math.PI*2),e.fill()),v.hasPacmanSpawn&&(e.beginPath(),e.fillStyle="#ffd91f",e.shadowColor="rgba(255, 217, 31, 0.95)",e.shadowBlur=10,e.moveTo(m.x+7,m.y),e.arc(m.x,m.y,7,.3,Math.PI*1.7),e.closePath(),e.fill())}),e.restore()}function yw(){const n=document.querySelector("#map-picker-grid");if(!n)return;const t=ep(),e=[...t,...Array.from({length:Math.max(0,3-t.length)},(i,s)=>({id:`empty-${s}`,name:"Empty Slot",source:null,disabled:!0}))].slice(0,3);n.innerHTML=e.map(i=>`
    <button class="map-card${i.id===ps?" selected":""}${i.disabled?" disabled":""}" data-map-id="${i.id}" ${i.disabled?"disabled":""}>
      <canvas class="map-thumbnail" width="320" height="320" aria-hidden="true"></canvas>
      <span class="map-card-name">${i.name}</span>
    </button>
  `).join(""),n.querySelectorAll(".map-card").forEach(i=>{const s=e.find(o=>o.id===i.dataset.mapId),r=i.querySelector("canvas");Mp(r,s.source),!s.disabled&&(i.addEventListener("click",()=>{ps=s.id,n.querySelectorAll(".map-card").forEach(o=>o.classList.toggle("selected",o===i))}),i.addEventListener("dblclick",()=>{be("/game",{query:{map:ps,dev:document.querySelector("#map-dev-toggle")?.checked?1:!1}})}))})}function xw(){const n=document.querySelector("#map-manager-grid");if(!n)return;const t=[...mu.map(e=>({...e,action:"template",readonly:!0})),...Bn.map(e=>({...e,action:"edit"}))];for(Bn.length<xo&&t.push({id:"new",name:"New Map",action:"new",source:null});t.length<3;)t.push({id:`empty-${t.length}`,name:"Empty Slot",action:"empty",source:null,disabled:!0});n.innerHTML=t.slice(0,3).map(e=>e.action==="new"?`
        <button class="manager-create-card" data-action="new" type="button">
          <span class="manager-plus">+</span>
          <span class="manager-create-label">New Map</span>
        </button>
      `:`
      <button class="manager-map-card${e.disabled?" disabled":""}" data-map-id="${Sd(e.id)}" data-action="${e.action}" ${e.disabled?"disabled":""} type="button">
        <canvas class="map-thumbnail" width="320" height="320" aria-hidden="true"></canvas>
        <span class="map-card-name">${Sd(e.name)}</span>
        ${e.disabled?"":`
          <span class="manager-card-hover" aria-hidden="true">
            ${e.readonly?`
              <svg viewBox="0 0 24 24"><path d="M8 7V5.8a4 4 0 0 1 8 0V7"/><rect x="5" y="9" width="14" height="11" rx="2"/><path d="M12 13v3"/></svg>
            `:`
              <svg viewBox="0 0 24 24"><path d="M12 20h9"/><path d="m16.5 3.5 3 3L8 18l-4 1 1-4Z"/></svg>
            `}
          </span>
        `}
      </button>
    `).join(""),n.querySelectorAll(".manager-map-card").forEach(e=>{const i=t.find(r=>r.id===e.dataset.mapId),s=e.querySelector("canvas");Mp(s,i?.source)})}function Lu(){const n=document.querySelector("#map-ghost-count"),t=document.querySelector("#btn-ghost-count-minus"),e=document.querySelector("#btn-ghost-count-plus");n&&(n.textContent=Hi),t&&(t.disabled=Hi<=1),e&&(e.disabled=Hi>=So.length)}function Sw(){le.classList.add("landing-active"),le.classList.remove("showroom-active"),le.classList.remove("route-overlay-active"),document.querySelector("#mode-status").textContent="Showcase",fe.visible=!0,Jt.visible=!1,Pn.visible=!1,ji.visible=!1,Nt.enabled=!0,Nt.enableRotate=!0,Nt.maxPolarAngle=Math.PI/2.12,Nt.minDistance=18,oe.fog.density=.009,Ts.intensity=1.4,qt.fov=_o,qt.updateProjectionMatrix(),qt.position.set(...Hn.pos),Nt.target.set(...Hn.target)}function Mw(){le.classList.remove("landing-active")}function Du(){le.classList.remove("landing-active"),le.classList.remove("route-overlay-active"),le.classList.add("showroom-active"),document.querySelector("#mode-status").textContent="Showcase",fe.visible=!0,Jt.visible=!1,Pn.visible=!1,ji.visible=!1,Nt.enabled=!0,Nt.enableRotate=!0,Nt.maxPolarAngle=Math.PI/2.12,Nt.minDistance=18,oe.fog.density=.009,Ts.intensity=1.4,qt.fov=_o,qt.updateProjectionMatrix(),qt.position.set(...Hn.pos),Nt.target.set(...Hn.target)}function ww(){le.classList.remove("showroom-active")}function Ew(){Du(),le.classList.add("route-overlay-active"),document.querySelector("#map-select-screen").classList.add("active"),yw(),Lu(),le.classList.remove("showroom-active")}function bw(){le.classList.remove("route-overlay-active"),document.querySelector("#map-select-screen").classList.remove("active")}function Tw(){Du(),le.classList.add("route-overlay-active"),document.querySelector("#map-manager-screen").classList.add("active"),xw(),le.classList.remove("showroom-active")}function Aw(){le.classList.remove("route-overlay-active"),document.querySelector("#map-manager-screen").classList.remove("active")}function Pw(n){return n==="arrowup"||n==="w"?"forward":n==="arrowright"||n==="d"?"right":n==="arrowdown"||n==="s"?"reverse":n==="arrowleft"||n==="a"?"left":null}function wp(){zf()!=="forward"||_t.isReversing||(_t.isReversing=!0,_t.reverseHoldForward.copy(_t.forward),_t.reversalTimer=.35)}function jn(n,t=!1){if(!ye)return;const e=ye.getCameraTarget(),i=zf(),s=ye.getFollowDirection(),r=s.clone().multiplyScalar(i==="back"?-1:1),o=i!==zc;let a=!1,l=t||o;if(l)_t.isReversing=!1,_t.reversalTimer=0,_t.forward.copy(r).normalize();else{const g=An.clamp(_t.forward.dot(r),-1,1);if(_t.isReversing&&g>.45&&(_t.isReversing=!1,_t.reversalTimer=0,l=!0,_t.forward.copy(r).normalize()),_t.isReversing)_t.reversalTimer-=n,_t.reversalTimer<=0||!ye.isMoving?(_t.isReversing=!1,_t.forward.copy(r).normalize(),l=!0):a=!0;else{const v=QS*n,m=pM(_t.forward,r,v),f=1-Math.exp(-7.5*n);_t.forward.copy(m.lerp(r,f*.2).normalize())}}zc=i;const c=i==="back"||a;let u=a?e.clone().addScaledVector(_t.reverseHoldForward,-Gr).add(new T(0,ha,0)):i==="left"||i==="right"?mM(Gr,gd(s,i)).add(new T(0,ha,0)):c?vd(Gr,_t.forward,!0).add(new T(0,ha,0)):vd(Gr,_t.forward,!1).add(new T(0,ha,0));const h=e.clone().add(new T(0,dd,0)),p=h.clone().sub(u).setY(0);p.lengthSq()>1e-4?p.normalize():p.copy(_t.forward);let d=h.clone().addScaledVector(p,fd);if(c)d=e.clone().add(new T(0,dd,0));else if(i==="left"||i==="right"){const g=gd(s,i);d=u.clone().addScaledVector(g,Gr),d.addScaledVector(g,fd),d.y=h.y}if(l)_t.position.copy(u),_t.target.copy(d);else if(a)_t.position.copy(u),_t.target.copy(d);else if(c){const g=1-Math.exp(-7*n),v=1-Math.exp(-8.5*n);_t.position.lerp(u,g),_t.target.lerp(d,v)}else _t.position.copy(u),_t.target.copy(d);qt.position.copy(_t.position),Nt.target.copy(_t.target),qt.lookAt(Nt.target),_t.reverseSnapFramesRemaining>0&&(_t.reverseSnapFramesRemaining-=1)}function Iu(n){fo=n==="2d";const t=document.querySelector("#view-slider");document.querySelectorAll(".toggle-option").forEach(i=>{i.classList.toggle("active",i.dataset.view===n)}),fo?(t.classList.add("right"),qt.position.set(0,160,0),Nt.target.set(0,0,0),Nt.enableRotate=!1):(t.classList.remove("right"),qt.position.set(...La.pos),Nt.target.set(...La.target),Nt.enableRotate=!0)}const Rw=document.querySelector("#command-deck"),Ep=document.querySelector("#zoom-slider");document.querySelector("#deck-header").addEventListener("click",()=>{Rw.classList.toggle("collapsed")});Ep.addEventListener("input",n=>{const t=parseFloat(n.target.value),e=qt.position.clone().sub(Nt.target).normalize();qt.position.copy(Nt.target).add(e.multiplyScalar(t))});document.querySelector("#btn-toggle-mode").addEventListener("click",()=>{Wn&&Wa?ZM(()=>{be("/showroom")}):be(Wn?"/showroom":"/maps")});document.querySelector("#btn-toggle-game").addEventListener("click",()=>{be(Ye?"/menu":"/play/maps")});document.querySelector("#btn-menu-start").addEventListener("click",()=>be("/play/maps"));document.querySelector("#btn-menu-editor").addEventListener("click",()=>be("/maps"));document.querySelector("#btn-menu-showroom").addEventListener("click",()=>be("/showroom"));document.querySelector("#btn-showroom-menu").addEventListener("click",()=>be("/menu"));document.querySelector("#btn-showroom-play").addEventListener("click",()=>be("/play/maps"));document.querySelector("#btn-showroom-create").addEventListener("click",()=>be("/maps"));document.querySelector("#btn-map-select-back").addEventListener("click",()=>be("/menu"));document.querySelector("#btn-map-select-start").addEventListener("click",()=>{be("/game",{query:{map:ps,dev:document.querySelector("#map-dev-toggle")?.checked?1:!1,jumpscare:document.querySelector("#map-jumpscare-toggle")?.checked?1:!1,ghosts:Hi}})});document.querySelector("#btn-ghost-count-minus").addEventListener("click",()=>{Hi=Math.max(1,Hi-1),Lu()});document.querySelector("#btn-ghost-count-plus").addEventListener("click",()=>{Hi=Math.min(So.length,Hi+1),Lu()});document.querySelector("#btn-map-manager-back").addEventListener("click",()=>be("/menu"));document.querySelector("#map-manager-grid").addEventListener("click",n=>{const t=n.target.closest("[data-action]");if(!t)return;const e=t.dataset.action;if(e==="new"){$M();return}const i=np(t.dataset.mapId);e==="template"?KM(i):e==="edit"&&QM(i)});document.querySelector("#btn-save-map").addEventListener("click",tw);document.querySelector("#btn-editor-save-cancel").addEventListener("click",Js);document.querySelector("#btn-editor-save-confirm").addEventListener("click",()=>{const n=document.querySelector("#editor-save-modal");if(n?.dataset.variant==="confirm-discard"){Js(),ya&&(ya(),ya=null);return}if(n?.dataset.variant!=="save"){Js();return}const t=document.querySelector("#editor-save-name-input"),e=document.querySelector("#editor-save-modal-error"),i=t?.value.trim()||"";if(!i){e&&(e.textContent="Map name is required."),t?.focus();return}const s=qa?.source;if(!s){Js(),ho({title:"Save Failed",message:"The editor lost the pending map data. Open the save action again.",variant:"error"});return}Js(),JM(s,i)});document.querySelector("#editor-save-name-input").addEventListener("keydown",n=>{n.key==="Enter"&&(n.preventDefault(),document.querySelector("#btn-editor-save-confirm").click())});document.querySelector("#editor-save-modal").addEventListener("click",n=>{n.target===document.querySelector("#editor-save-modal")&&Js()});document.querySelector("#btn-game-over-retry").addEventListener("click",()=>{Za(),Ru()});document.querySelector("#btn-game-over-menu").addEventListener("click",()=>{Za(),be("/menu")});document.querySelector("#btn-game-victory-retry").addEventListener("click",()=>{ja(),Ru()});document.querySelector("#btn-game-victory-menu").addEventListener("click",()=>{ja(),be("/menu")});document.querySelector("#btn-game-pause-resume").addEventListener("click",()=>{wo()});document.querySelector("#btn-game-pause-controls").addEventListener("click",()=>{const n=document.querySelector("#pause-main-actions"),t=document.querySelector("#pause-controls-panel");n&&(n.style.display="none"),t&&(t.style.display="flex")});document.querySelector("#btn-game-pause-controls-back").addEventListener("click",()=>{const n=document.querySelector("#pause-controls-panel"),t=document.querySelector("#pause-main-actions");n&&(n.style.display="none"),t&&(t.style.display="flex")});document.querySelector("#btn-game-pause-menu").addEventListener("click",()=>{wo(),be("/menu")});document.querySelector("#btn-hud-pause").addEventListener("click",n=>{n.target.blur(),!(!Ye||Yi||Vn||hn)&&Wf()});qS({"/menu":{enter:Sw,exit:Mw},"/showroom":{enter:Du,exit:ww},"/play/maps":{enter:Ew,exit:bw},"/game":{enter:n=>{n.query.map&&(ps=n.query.map),uw({dev:n.query.dev==="1"||n.query.dev==="true",jumpscare:n.query.jumpscare==="1"||n.query.jumpscare==="true",ghostCount:n.query.ghosts})},update:n=>Cu(n.query.dev==="1"||n.query.dev==="true"),exit:hw},"/maps":{enter:Tw,exit:Aw},"/editor":{enter:lw,exit:cw}},{fallbackRoute:"/menu"});document.querySelector("#btn-reset-pellets").addEventListener("click",()=>{He&&(He.reset(),hn=!1,xr(),document.querySelector("#pellet-counter").textContent=He.getEatenCount())});document.querySelector("#btn-reset-run").addEventListener("click",()=>{Ye&&Ru()});document.querySelector("#btn-game-start").addEventListener("click",()=>{tl(!1)});document.querySelector("#btn-cycle-ghost-count").addEventListener("click",n=>{n.target.blur(),Ye&&(rr=rr>=So.length?1:rr+1,rw())});document.querySelector("#btn-swap-puppet").addEventListener("click",n=>{n.target.blur(),Ye&&(fM(),_t.forward.copy(ye.getFollowDirection()),_t.reverseHoldForward.copy(_t.forward),_t.target.copy(ye.getCameraTarget()),_t.isReversing=!1,_t.reversalTimer=0,_t.reverseSnapFramesRemaining=0,jn(.016,!0))});document.querySelector("#btn-toggle-jumpscare").addEventListener("click",n=>{n.target.blur(),Ye&&(gi=!gi,Gf())});document.querySelector("#btn-toggle-collisions").addEventListener("click",n=>{n.target.blur(),Ye&&(Oi=!Oi,Hf())});document.querySelector("#btn-toggle-ghost-ai").addEventListener("click",n=>{if(n.target.blur(),!Ye)return;const t=!yu();Se(e=>{e.ai.setEnabled(t)}),t&&Se(e=>Qa(e)),xu()});document.querySelectorAll(".toggle-option").forEach(n=>{n.addEventListener("click",()=>Iu(n.dataset.view))});function Wc(n){const t=document.querySelectorAll(".piece-card, .item-card"),e=document.querySelector(".piece-card.active, .item-card.active");if(e&&e.classList.remove("active"),n===null){Re=null,Ao();return}const i=Array.from(t).find(s=>s.dataset.type===n);i&&i.classList.add("active"),Re=n,Tp()}document.querySelectorAll(".piece-card, .item-card").forEach(n=>{n.addEventListener("click",()=>{Wc(n.dataset.type)})});function Fa(n,t){return n.map(e=>{let i;e==="north"?i={x:0,z:-1}:e==="south"?i={x:0,z:1}:e==="east"?i={x:1,z:0}:e==="west"&&(i={x:-1,z:0});const s=i.x*Math.cos(t)+i.z*Math.sin(t),r=-i.x*Math.sin(t)+i.z*Math.cos(t);return{x:Math.round(s),z:Math.round(r)}})}function bp(n,t,e){if(!t)return!0;if(Jt.children.find(o=>o.position.x===t.x&&o.position.z===t.z))return!1;const s=Jt.children.filter(o=>o.userData.type==="ghostchamber");if(n==="ghostchamber"&&s.length>0)return!1;if(n==="ghostchamber"){for(const o of Jt.children)if(!bd({position:t,rotation:e},o))return!1}else for(const o of s)if(!bd(o,{position:t,rotation:e,type:n}))return!1;const r=Jt.children.filter(o=>o.userData.type==="teleport");for(const o of r)if(!Td(o,{position:t,rotation:e,type:n}))return!1;if(n==="teleport"){for(const o of Jt.children)if(!Td({position:t,rotation:e},o))return!1}return!0}function bd(n,t){const e=Math.sqrt(Math.pow(n.position.x-t.position.x,2)+Math.pow(n.position.z-t.position.z,2));if(Math.abs(e-Wt)>1)return!0;const i=Math.round((t.position.x-n.position.x)/Wt),s=Math.round((t.position.z-n.position.z)/Wt),r=Fa(["north"],n.userData?n.userData.rotation:n.rotation)[0];if(i===r.x&&s===r.z)return!0;const o=t.userData?t.userData.type:t.type,a=t.userData?t.userData.rotation:t.rotation,l=Fa(yr[o],a);for(const c of l)if(c.x===-i&&c.z===-s)return!1;return!0}function Td(n,t){const e=Math.sqrt(Math.pow(n.position.x-t.position.x,2)+Math.pow(n.position.z-t.position.z,2));if(Math.abs(e-Wt)>1)return!0;const i=Math.round((t.position.x-n.position.x)/Wt),s=Math.round((t.position.z-n.position.z)/Wt),r=Fa(["west"],n.userData?n.userData.rotation:n.rotation)[0];if(i===r.x&&s===r.z){const o=t.userData?t.userData.type:t.type,a=t.userData?t.userData.rotation:t.rotation,l=Fa(yr[o],a);for(const c of l)if(c.x===-i&&c.z===-s)return!1}return!0}function Tp(){Ao(),Re!==null&&(Re==="powerpellet"||Re==="pacmanspawn"?(Re==="powerpellet"?(ne=vo(),ne.scale.set(.4,.4,.4)):(ne=bs(),ne.scale.setScalar(.32)),ne.traverse(n=>{n.isLight&&(n.intensity=0),n.material&&(n.material=n.material.clone(),Re==="powerpellet"?(n.material.transparent=!0,n.material.opacity=.8,n.material.depthTest=!1,n.renderOrder=999):n.material.wireframe=!0,n.material.color&&(n.userData.originalColor=n.material.color.clone()),n.material.emissive&&(n.userData.originalEmissive=n.material.emissive.clone()),n.material.emissiveIntensity!==void 0&&(n.userData.originalEmissiveIntensity=n.material.emissiveIntensity))})):(ne=go(Re),ne.rotation.y=on,ne.traverse(n=>{n.material&&(n.material=n.material.clone(),n.material.transparent=!0,n.material.opacity=.4,n.material.color&&(n.userData.originalColor=n.material.color.clone()),n.material.emissive&&(n.userData.originalEmissive=n.material.emissive.clone()))})),oe.add(ne))}function Ao(){ne&&(oe.remove(ne),ne=null)}window.addEventListener("click",n=>{const t=n.target.closest("button");t&&t.blur(),n.target.tagName==="INPUT"&&n.target.blur()});window.addEventListener("mousemove",n=>{Wn&&(Vc.x=n.clientX/window.innerWidth*2-1,Vc.y=-(n.clientY/window.innerHeight)*2+1)});window.addEventListener("keydown",n=>{if(document.querySelector("#export-modal").classList.contains("active")||document.querySelector("#import-modal").classList.contains("active")||document.querySelector("#editor-save-modal").classList.contains("active"))return;const t=n.key.toLowerCase();if(t==="c"&&window.getCameraConfig(),Ye){if(Yi){(t==="escape"||t==="p")&&(n.preventDefault(),wo());return}if((t==="escape"||t==="p")&&!(Vn||hn)){n.preventDefault(),Wf();return}if(Ui){t==="enter"||t===" "?(n.preventDefault(),tl(!1)):n.preventDefault();return}if(Gi)return;if(Vn||hn){t==="escape"&&be("/menu");return}if(Na())return;if(t===" "){n.preventDefault(),Va=!0;return}if(t==="q"){n.preventDefault(),co=!0;return}if(t==="e"){n.preventDefault(),uo=!0;return}const s=Pw(t);if(s){if(n.preventDefault(),Ze(ye)?.ai.enabled||s==="reverse"&&n.repeat)return;const o=ye.setDesiredIntent(s);o?.started&&o.reverseIntent&&wp()}if(t==="tab"){if(n.preventDefault(),!le.classList.contains("dev-tools-active"))return;document.querySelector("#btn-swap-puppet")?.click();return}t==="escape"&&be("/menu");return}if(!Wn)return;if(t==="tab"&&(n.preventDefault(),Iu(fo?"3d":"2d")),vs){const s=Wt;if((t==="arrowup"||t==="w")&&(Jt.position.z-=s),(t==="arrowdown"||t==="s")&&(Jt.position.z+=s),(t==="arrowleft"||t==="a")&&(Jt.position.x-=s),(t==="arrowright"||t==="d")&&(Jt.position.x+=s),t==="enter"){const r=Jt.position.clone();Jt.children.forEach(o=>{o.position.add(r)}),Jt.position.set(0,0,0),r.lengthSq()>0&&wi(!0),Oa()}t==="escape"&&(Jt.position.set(0,0,0),Oa());return}const e={1:"straight",2:"corner",3:"tjunction",4:"crossroad",5:"teleport",6:"ghostchamber",p:"powerpellet",s:"pacmanspawn"};e[t]&&Wc(e[t]),t==="v"&&Wc(null),t===" "&&(n.preventDefault(),Ap()),t==="r"&&(on+=Math.PI/2,ne&&(ne.rotation.y=on)),t==="x"&&Cw();const i=fo?5.5:2.8;(t==="arrowup"||t==="w")&&(Nt.target.z-=i,qt.position.z-=i),(t==="arrowdown"||t==="s")&&(Nt.target.z+=i,qt.position.z+=i),(t==="arrowleft"||t==="a")&&(Nt.target.x-=i,qt.position.x-=i),(t==="arrowright"||t==="d")&&(Nt.target.x+=i,qt.position.x+=i)});window.addEventListener("keyup",n=>{if(!Ye)return;const t=n.key.toLowerCase();t===" "&&(Va=!1),t==="q"&&(co=!1),t==="e"&&(uo=!1)});window.addEventListener("mousedown",n=>{!Wn||vs||n.button!==0||document.querySelector("#export-modal").classList.contains("active")||document.querySelector("#import-modal").classList.contains("active")||document.querySelector("#editor-save-modal").classList.contains("active")||n.target.closest(".bottom-bar")||n.target.closest(".left-bar")||n.target.closest(".top-controls")||n.target.closest("#command-deck")||n.target.closest("#btn-save-map")||n.target.closest("#export-modal")||n.target.closest("#import-modal")||n.target.closest("#editor-save-modal")||Ap()});function Uu(){Ed.setFromCamera(Vc,qt);const n=Ed.intersectObject(Au);if(n.length>0){const t=n[0].point;return{x:Math.round(t.x/Wt)*Wt,z:Math.round(t.z/Wt)*Wt}}return null}function Ap(){if(Re===null)return;const n=Uu();if(!n)return;const t=Jt.children.find(i=>i.position.x===n.x&&i.position.z===n.z);if(Re==="powerpellet"||Re==="pacmanspawn"){const i=["straight","corner","tjunction","crossroad"];if(Re==="pacmanspawn"&&i.push("teleport"),!t||!i.includes(t.userData.type))return;if(Re==="powerpellet"){if(!t.userData.hasPowerPellet&&t.userData.hasPacmanSpawn){t.userData.hasPacmanSpawn=!1;const r=t.getObjectByName("pacmanSpawnIndicator");r&&t.remove(r)}t.userData.hasPowerPellet=!t.userData.hasPowerPellet;let s=t.getObjectByName("powerPelletIndicator");if(t.userData.hasPowerPellet){if(!s){s=vo(),s.name="powerPelletIndicator";let r=0,o=0;if(t.userData.type==="corner"){const a=3.57*(1-Math.SQRT1_2);r=a,o=-a}s.position.set(r,2.5,o),s.scale.set(.4,.4,.4),s.traverse(a=>{a.material&&(a.material=a.material.clone(),a.material.depthTest=!1,a.renderOrder=998)}),t.add(s)}}else s&&t.remove(s)}else{if(!t.userData.hasPacmanSpawn&&t.userData.hasPowerPellet){t.userData.hasPowerPellet=!1;const s=t.getObjectByName("powerPelletIndicator");s&&t.remove(s)}if(t.userData.hasPacmanSpawn){const s=a=>(a%(Math.PI*2)+Math.PI*2)%(Math.PI*2),r=s(on),o=s(t.userData.pacmanSpawnRotation);if(Math.abs(r-o)<.01){t.userData.hasPacmanSpawn=!1;const a=t.getObjectByName("pacmanSpawnIndicator");a&&t.remove(a)}else{t.userData.pacmanSpawnRotation=on;const a=t.getObjectByName("pacmanSpawnIndicator");a&&(a.rotation.y=on-t.rotation.y)}}else{Jt.children.forEach(a=>{if(a.userData.hasPacmanSpawn){a.userData.hasPacmanSpawn=!1;const l=a.getObjectByName("pacmanSpawnIndicator");l&&a.remove(l)}}),t.userData.hasPacmanSpawn=!0,t.userData.pacmanSpawnRotation=on;const s=bs();s.name="pacmanSpawnIndicator";let r=0,o=0;if(t.userData.type==="corner"){const a=3.57*(1-Math.SQRT1_2);r=a,o=-a}s.position.set(r,2.5,o),s.scale.setScalar(.32),s.rotation.y=on-t.rotation.y,t.add(s)}}wi(!0);return}if(t||!bp(Re,n,on))return;const e=go(Re);e.position.set(n.x,0,n.z),e.rotation.y=on,e.userData={type:Re,rotation:on},Jt.add(e),wi(!0)}function Cw(){const n=Uu();if(!n)return;const t=Jt.children.find(e=>e.position.x===n.x&&e.position.z===n.z);t&&(Jt.remove(t),wi(!0))}document.querySelector("#btn-export").addEventListener("click",n=>{n.target.blur(),document.querySelector("#export-modal").classList.add("active")});document.querySelector("#btn-modal-close").addEventListener("click",()=>{document.querySelector("#export-modal").classList.remove("active")});document.querySelector("#export-modal").addEventListener("click",n=>{n.target===document.querySelector("#export-modal")&&document.querySelector("#export-modal").classList.remove("active")});document.querySelector("#btn-modal-copy").addEventListener("click",()=>{const n=Jt.children.map(e=>({type:e.userData.type,position:[e.position.x,e.position.y,e.position.z],rotation:e.userData.rotation,hasPowerPellet:e.userData.hasPowerPellet||!1,hasPacmanSpawn:e.userData.hasPacmanSpawn||!1,pacmanSpawnRotation:e.userData.pacmanSpawnRotation||0})),t=JSON.stringify(n,null,2);navigator.clipboard.writeText(t).then(()=>{const e=document.querySelector("#btn-modal-copy"),i=e.textContent;e.textContent="Copied!",setTimeout(()=>{e.textContent=i},2e3)}).catch(e=>{alert("Failed to copy to clipboard. Check console."),console.error("Could not copy text: ",e)})});document.querySelector("#btn-modal-download").addEventListener("click",()=>{const n=Jt.children.map(r=>({type:r.userData.type,position:[r.position.x,r.position.y,r.position.z],rotation:r.userData.rotation,hasPowerPellet:r.userData.hasPowerPellet||!1,hasPacmanSpawn:r.userData.hasPacmanSpawn||!1,pacmanSpawnRotation:r.userData.pacmanSpawnRotation||0})),t=JSON.stringify(n,null,2),e=new Blob([t],{type:"application/json"}),i=URL.createObjectURL(e),s=document.createElement("a");s.href=i,s.download="maze.json",document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(i)});document.querySelector("#btn-import").addEventListener("click",n=>{n.target.blur(),document.querySelector("#import-textarea").value="",document.querySelector("#import-file").value="",document.querySelector("#import-file-zone").classList.remove("has-file"),document.querySelector("#import-file-name").textContent="Import From File",document.querySelector("#import-modal").classList.add("active")});document.querySelector("#btn-modal-import-close").addEventListener("click",()=>{document.querySelector("#import-modal").classList.remove("active")});document.querySelector("#import-modal").addEventListener("click",n=>{n.target===document.querySelector("#import-modal")&&document.querySelector("#import-modal").classList.remove("active")});document.querySelector("#import-file").addEventListener("change",n=>{const t=n.target.files[0],e=document.querySelector("#import-file-zone"),i=document.querySelector("#import-file-name");if(!t){e.classList.remove("has-file"),i.textContent="Import From File";return}e.classList.add("has-file"),i.textContent=t.name;const s=new FileReader;s.onload=r=>{document.querySelector("#import-textarea").value=r.target.result},s.readAsText(t)});document.querySelector("#btn-modal-import").addEventListener("click",()=>{const n=document.querySelector("#import-textarea").value.trim();if(!n){alert("Please paste JSON or select a file first.");return}try{const t=JSON.parse(n);sp(t),Pu(t,{markDirty:!0}),document.querySelector("#import-modal").classList.remove("active");const e=document.querySelector("#btn-modal-import"),i=e.textContent;e.textContent="Success!",e.style.background="#00ff88",e.style.color="#000",setTimeout(()=>{e.textContent=i,e.style.background="",e.style.color=""},1500)}catch(t){alert(`Import failed: ${t.message}`),console.error("Import validation error:",t)}});document.querySelector("#btn-shift-map").addEventListener("click",()=>{if(!Wn)return;vs=!vs;const n=document.querySelector("#btn-shift-map"),t=document.querySelector("#btn-apply-shift");n.blur();const e=document.querySelector(".bottom-bar"),i=document.querySelector("#hotkey-list"),s=document.querySelector(".segmented-toggle"),r=document.querySelector("#zoom-slider").parentElement,o=document.querySelector("#btn-export").parentElement,a=document.querySelector("#btn-save-map");vs?(n.textContent="Cancel",n.style.background="rgba(255, 68, 68, 0.2)",n.style.color="#ff4444",n.style.borderColor="rgba(255, 68, 68, 0.3)",t&&(t.style.display="block"),e&&(e.style.display="none"),s&&(s.style.display="none"),r&&(r.style.display="none"),o&&(o.style.display="none"),a&&(a.style.display="none"),i&&(i.innerHTML=`
        <div class="hotkey-item"><span>Move</span> <span class="hotkey-key">Arrows / WASD</span></div>
        <div class="hotkey-item"><span>Apply</span> <span class="hotkey-key" style="background: rgba(0, 255, 136, 0.2); color: #00ff88;">Enter</span></div>
        <div class="hotkey-item"><span>Cancel</span> <span class="hotkey-key" style="background: rgba(255, 68, 68, 0.2); color: #ff4444;">Esc</span></div>
      `),xa={pos:qt.position.clone(),target:Nt.target.clone()},Nt.target.set(0,0,0),qt.position.set(0,300,0),Nt.update(),ne&&(ne.visible=!1)):(Jt.position.set(0,0,0),Oa())});document.querySelector("#btn-apply-shift").addEventListener("click",()=>{if(!vs)return;const n=Jt.position.clone();Jt.children.forEach(t=>{t.position.add(n)}),Jt.position.set(0,0,0),n.lengthSq()>0&&wi(!0),Oa()});function Oa(){vs=!1;const n=document.querySelector("#btn-shift-map");n.textContent="Shift Map",n.classList.remove("btn-primary"),n.style.background="",n.style.color="",n.style.borderColor="";const t=document.querySelector("#btn-apply-shift");t&&(t.style.display="none");const e=document.querySelector(".bottom-bar"),i=document.querySelector("#hotkey-list"),s=document.querySelector(".segmented-toggle"),r=document.querySelector("#zoom-slider").parentElement,o=document.querySelector("#btn-export").parentElement,a=document.querySelector("#btn-save-map");e&&(e.style.display="flex"),s&&(s.style.display="flex"),r&&(r.style.display="flex"),o&&(o.style.display="flex"),a&&(a.style.display=""),i&&(i.innerHTML=`
      <div class="hotkey-item"><span>Free Mode</span> <span class="hotkey-key">V</span></div>
      <div class="hotkey-item"><span>Place</span> <span class="hotkey-key">Click / Space</span></div>
      <div class="hotkey-item"><span>Rotate</span> <span class="hotkey-key">R</span></div>
      <div class="hotkey-item"><span>Delete</span> <span class="hotkey-key">X</span></div>
      <div class="hotkey-item"><span>Pan</span> <span class="hotkey-key">WASD / Arrows</span></div>
      <div class="hotkey-item"><span>View</span> <span class="hotkey-key">Tab</span></div>
    `),xa&&(qt.position.copy(xa.pos),Nt.target.copy(xa.target),Nt.update()),ne&&(ne.visible=!0)}const Pp=Lw();oe.add(Pp);const Rp=[];fe.traverse(n=>{n.userData.pulse&&Rp.push(n)});const Ad=new ag;function Lw(){const n=[];for(let i=0;i<120;i+=1){const s=18+Math.random()*68,r=Math.random()*Math.PI*2,o=1.5+Math.random()*18;n.push(Math.cos(r)*s,o,Math.sin(r)*s)}const e=new Ie;return e.setAttribute("position",new te(n,3)),new x0(e,new $d({color:10929919,size:.18,transparent:!0,opacity:.36,sizeAttenuation:!0}))}function Dw(n){Rp.forEach(t=>{const{base:e,amplitude:i,speed:s,phase:r}=t.userData.pulse;t.material.emissiveIntensity=e+Math.sin(n*s+r)*i})}function qc(){const n=Math.min(Ad.getDelta(),.05),t=Ad.elapsedTime;if(Dw(t),ms&&ms.userData.update&&ms.userData.update(t,n),In&&In.userData.update&&(Zs>0&&(Zs=Math.max(0,Zs-n),Zs===0&&In.resetDeathAnimation()),Zs===0&&!In.isDeathAnimationActive?.()&&t-Md>=ow&&(In.playDeathAnimation(aw),Md=t),In.userData.update(t,n),wd&&!In.isDeathAnimationActive?.()&&(Zs=.85),wd=In.isDeathAnimationActive?.()||!1),or&&or.userData.update&&or.userData.update(t,n),ar&&ar.userData.update&&ar.userData.update(t),lr&&lr.userData.update&&lr.userData.update(t),cr&&cr.userData.update&&cr.userData.update(t),gs&&gs.userData.update&&gs.userData.update(t),Qr&&Qr.userData.update&&Qr.userData.update(t),$r&&$r.userData.update&&$r.userData.update(t),Ye&&ye){if(Yi)we?.userData.update&&we.userData.update(t,n),Se(i=>{i.model.visible&&i.model.userData.update&&i.model.userData.update(t)}),He.update(t),jn(n,!1);else if(Ui)we?.userData.update&&we.userData.update(t,n),Se(i=>{i.model.visible&&i.model.userData.update&&i.model.userData.update(t)}),He.update(t),jn(n,!1);else if(Vn||hn)we?.userData.update&&we.userData.update(t,n),Se(i=>{i.model.visible&&i.model.userData.update&&i.model.userData.update(t)}),He.update(t),Hl(n),Vl(n),jn(n,!1);else if(Gi)vM(n),we?.userData.update&&we.userData.update(t,n),Se(i=>{i.model.visible&&i.model.userData.update&&i.model.userData.update(t)}),He.update(t),jn(n,!1);else if(Na())Si=Math.max(0,Si-n),we?.userData.update&&we.userData.update(t,n),Se(i=>{i.model.visible&&i.model.userData.update&&i.model.userData.update(t)}),He.update(t),Hl(n),Vl(n),jn(n,!1),Na()||iw();else{Jn&&Jn.update(n,t),CM(n),NM(),Se(l=>{ri(l)?l.model.visible&&l.model.userData.update&&l.model.userData.update(t):l.controller.update(n,t)}),Vl(n);let i=!1,s=ye.consumeStartedIntent();for(;s;)s==="reverse"?wp():s==="reverse_instant"&&(_t.isReversing=!1,_t.reversalTimer=0,_t.forward.copy(ye.getFollowDirection()).normalize(),i=!0),s=ye.consumeStartedIntent();(mi==="pacman"?We.map(l=>l.controller):[Jn,...We.map(l=>l.controller).filter(l=>l!==ye)]).filter(Boolean).forEach(l=>{for(;l.consumeStartedIntent(););}),jn(n,i),He.update(t),Hl(n);const o=He.checkCollisions(we.position);o.length>0&&(SM(o),DM(o)&&LM(),document.querySelector("#pellet-counter").textContent=He.getEatenCount(),He.getTotalCount()>0&&He.getEatenCount()>=He.getTotalCount()&&sw());const a=Oi&&!hn?ew():null;a&&(Eo(a)?UM(a):nw())}Yi||EM(n)}if(Wn&&(Ep.value=qt.position.distanceTo(Nt.target),Jt.children.forEach(i=>{const s=i.getObjectByName("powerPelletIndicator");s&&s.userData.update&&s.userData.update(t);const r=i.getObjectByName("pacmanSpawnIndicator");r&&r.userData.update&&r.userData.update(t)}),ne)){const i=Uu();if(i)if(Re==="powerpellet"||Re==="pacmanspawn"){const s=Jt.children.find(o=>o.position.x===i.x&&o.position.z===i.z),r=["straight","corner","tjunction","crossroad"];if(Re==="pacmanspawn"&&r.push("teleport"),s&&r.includes(s.userData.type)){let o=i.x,a=i.z;if(s.userData.type==="corner"){const l=3.57*(1-Math.SQRT1_2),c=s.userData.rotation;o+=l*Math.cos(c)+-l*Math.sin(c),a+=-l*Math.sin(c)+-l*Math.cos(c)}ne.position.set(o,2.5,a),ne.visible=!0,Re==="pacmanspawn"&&(ne.rotation.y=on),ne.traverse(l=>{l.material&&l.userData.originalColor&&(Re==="pacmanspawn"?(l.material.color.set(65450),l.material.emissive&&(l.material.emissive.set(65450),l.material.emissiveIntensity=1)):(l.material.color.copy(l.userData.originalColor),l.material.emissive&&(l.material.emissive.copy(l.userData.originalEmissive),l.userData.originalEmissiveIntensity!==void 0&&(l.material.emissiveIntensity=l.userData.originalEmissiveIntensity))))}),ne.userData.update&&ne.userData.update(t)}else ne.position.set(i.x,2.5,i.z),ne.visible=!0,Re==="pacmanspawn"&&(ne.rotation.y=on),ne.traverse(o=>{o.material&&o.userData.originalColor&&(o.material.color.set(16711680),o.material.emissive&&(o.material.emissive.set(16711680),o.material.emissiveIntensity=2))}),ne.userData.update&&ne.userData.update(t)}else{ne.position.set(i.x,0,i.z),ne.visible=!0;const s=bp(Re,i,on);ne.traverse(r=>{r.material&&r.userData.originalColor&&(s?(r.material.color.copy(r.userData.originalColor),r.material.emissive&&r.material.emissive.copy(r.userData.originalEmissive)):(r.material.color.set(16711680),r.material.emissive&&r.material.emissive.set(11141120)))})}else ne.visible=!1}if(le.classList.contains("landing-active")){gn||dw(),fw(t,n),requestAnimationFrame(qc);return}else gn&&(vn&&vn.dispose(),gn=null,_i=null,vn=null,Un=null,Nn=null,Zn=null,Da=[]);Pp.rotation.y=t*.01,Ye||Nt.update(),kM(),requestAnimationFrame(qc)}qc();window.addEventListener("resize",()=>{qt.aspect=window.innerWidth/window.innerHeight,qt.updateProjectionMatrix(),Xe.setPixelRatio(Math.min(window.devicePixelRatio,1.25)),Xe.setSize(window.innerWidth,window.innerHeight),pw()});
