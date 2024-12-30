import{a as K,c as Q}from"./chunk-OTOQPNFC.js";import{a as j,b as B,c as N,d as H,e as U,f as z,h as G}from"./chunk-O62WTFBR.js";import{H as q,I as J}from"./chunk-VO3RIM5S.js";import{b as L,e as F,y as R}from"./chunk-HKDZNTJD.js";import{f as k,g as $}from"./chunk-VH6JMEIQ.js";import{Ab as m,Bb as d,Cc as w,Db as x,Eb as u,Ec as P,Fb as i,Gb as n,Hb as E,Nb as s,Qb as g,Ua as b,Xa as o,Ya as p,Yb as r,Zb as c,_b as S,cc as h,db as I,ec as T,fc as O,ib as A,nb as _,wb as f}from"./chunk-FTEUR76U.js";var V=e=>["../",e];function W(e,a){if(e&1&&(i(0,"p"),r(1),n()),e&2){let t=a.$implicit;o(),c(t)}}function X(e,a){if(e&1&&(i(0,"mat-icon"),r(1),n()),e&2){let t=a.$implicit;o(),c(t)}}function Y(e,a){if(e&1&&(i(0,"tr")(1,"td"),r(2),n(),i(3,"td"),r(4),n()()),e&2){let t=a.$implicit;o(2),S(" ",t.description," "),o(2),S(" \u20B9",t.value," ")}}function Z(e,a){if(e&1&&(i(0,"div")(1,"b"),r(2,"Entry Fee"),n(),i(3,"table",7),x(4,Y,5,2,"tr",null,d),n()()),e&2){let t=s(2);o(4),u(t.siteData().fee)}}function tt(e,a){if(e&1&&(i(0,"div"),E(1,"img",8),n()),e&2){let t=a.$implicit,l=s(2);o(),g("src",t,b),g("alt",l.siteData().title)}}function et(e,a){if(e&1&&(i(0,"a",6),r(1),n()),e&2){let t=s(2);f("routerLink",h(2,V,t.previousAttraction.toLowerCase().replaceAll(" ","-"))),o(),c(t.previousAttraction)}}function it(e,a){if(e&1&&(i(0,"a",6),r(1),n()),e&2){let t=s(2);f("routerLink",h(2,V,t.nextAttraction.toLowerCase().replaceAll(" ","-"))),o(),c(t.nextAttraction)}}function nt(e,a){if(e&1&&(i(0,"mat-card",1),T(1,"async"),i(2,"mat-card-header",2)(3,"mat-card-title"),r(4),n(),i(5,"mat-card-subtitle"),r(6),n()(),i(7,"mat-card-content"),x(8,W,2,1,"p",null,d),i(10,"div",3)(11,"div")(12,"b"),r(13,"Contacts"),n(),i(14,"p"),r(15),n(),i(16,"p"),r(17," Location: "),i(18,"a",4),r(19),n()()(),i(20,"div")(21,"b"),r(22,"Amenities"),n(),i(23,"p"),r(24,"Amenities available at or near the site."),n(),x(25,X,2,1,"mat-icon",null,d),n(),_(27,Z,6,0,"div"),n(),i(28,"p")(29,"strong"),r(30,"Image Gallery"),n()(),i(31,"div",3),x(32,tt,2,2,"div",null,d),n()(),i(34,"mat-card-actions",5),_(35,et,2,4,"a",6)(36,it,2,4,"a",6),n()()),e&2){let t=s();f("ngClass",O(1,9,t.isHandset$)?"site-card":""),o(4),c(t.siteData().title),o(2),c(t.siteData().timing),o(2),u(t.siteData().description),o(7),S("Address: ",t.siteData().address,""),o(3),g("href",t.siteData().locationUrl,b),o(),c(t.siteData().title),o(6),u(t.siteData().amenities),o(2),m(t.siteData().fee.length>0?27:-1),o(5),u(t.siteData().images),o(3),m(t.previousAttraction?35:-1),o(),m(t.nextAttraction?36:-1)}}var D=class e{constructor(a,t,l,v){this.dataService=l;this.activatedRoute=v;this.isHandset$=l.isHandset$,t.setTitle("Trip Info - Site Details"),a.updateTag({name:"description",content:"More details about a particular attraction or site."})}siteData=I("");nextAttraction="";isHandset$;previousAttraction="";paramSubscription;ngOnInit(){this.paramSubscription=this.activatedRoute.paramMap.subscribe({next:a=>{let t=a.get("siteName")||"",l=a.get("attractionName")||"";this.getAttractionData(l,t)}})}getAttractionData(a,t){let l=`${a}/${a}.json`.toLowerCase();this.dataService.getAttractionData(l).subscribe({next:v=>{t=t.replaceAll("-"," "),v.attractions.details.forEach((y,C,M)=>{y.title.toLowerCase()==t&&(this.previousAttraction=C-1>-1?M[C-1].title:"",this.nextAttraction=C+1<M.length?M[C+1].title:"",this.siteData.set(y))})},error:v=>console.log(v)})}ngOnDestroy(){this.paramSubscription?.unsubscribe()}static \u0275fac=function(t){return new(t||e)(p(k),p($),p(R),p(L))};static \u0275cmp=A({type:e,selectors:[["app-site-details"]],decls:2,vars:1,consts:[[1,"container"],[3,"ngClass"],[2,"background-color","#cfe6ff"],[1,"row"],["target","_blank",2,"text-decoration","none",3,"href"],["align","end"],["mat-button","",3,"routerLink"],[2,"width","100%","margin-top","16px"],[3,"src","alt"]],template:function(t,l){t&1&&(i(0,"div",0),_(1,nt,37,11,"mat-card",1),n()),t&2&&(o(),m(l.siteData()?1:-1))},dependencies:[G,j,U,N,z,H,B,J,q,P,w,Q,K,F],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;margin:16px}.row[_ngcontent-%COMP%]{display:flex;margin-top:8px;justify-content:center;flex-wrap:wrap;gap:8px}.row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding:12px;width:340px;box-shadow:4px 4px 8px #0000001a}.row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#205389;margin-right:8px}.row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:340px;height:248px;object-fit:cover}.site-card[_ngcontent-%COMP%]{width:372px}"]})};var ht=[{path:"",redirectTo:"/main/home",pathMatch:"full"},{path:"attraction-details/:attractionName/site/:siteName",component:D}];export{ht as routes};