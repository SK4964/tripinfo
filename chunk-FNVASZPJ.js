import{e as I,y as L}from"./chunk-TF36Y5U6.js";import"./chunk-NZHBG2WF.js";import{$b as _,Bb as u,Cb as h,Eb as v,Fb as P,Gb as r,Hb as a,Ib as C,Rb as m,Va as l,Ya as n,Za as p,Zb as s,eb as d,ec as y,jb as f,ob as g,xb as x}from"./chunk-XFZ7SW23.js";var O=(i,t)=>["/","main","attraction-details",i,"site",t];function S(i,t){i&1&&(r(0,"div",1),s(1,"Promotions"),a())}function F(i,t){if(i&1&&(r(0,"div",2)(1,"div",3),s(2),a(),r(3,"div"),C(4,"img",4),a()()),i&2){let e=t.$implicit;n(2),_(" ",e.title," "),n(2),m("src",e.image,l),m("alt",e.title),x("routerLink",y(4,O,e.link.toLowerCase(),e.title.toLowerCase().replaceAll(" ","-")))}}var M=class i{constructor(t){this.dataService=t}promotions=d([]);maxPromotionsLimit=8;attractionFilter="";ngOnInit(){this.dataService.getPromotions().subscribe({next:t=>{if(this.attractionFilter){let c=t.filter(w=>w.link==this.attractionFilter);c.length&&(t=c)}let e=Math.floor(Math.random()*t.length),o=e>this.maxPromotionsLimit?e-this.maxPromotionsLimit+1:0;this.promotions.set(t.slice(o,o+this.maxPromotionsLimit))},error:t=>console.log(t)})}static \u0275fac=function(e){return new(e||i)(p(L))};static \u0275cmp=f({type:i,selectors:[["app-promotions"]],inputs:{maxPromotionsLimit:"maxPromotionsLimit",attractionFilter:"attractionFilter"},decls:4,vars:1,consts:[[1,"container"],[1,"header"],[1,"item"],[1,"head-title"],["mat-card-image","",3,"src","alt","routerLink"]],template:function(e,o){e&1&&(r(0,"div",0),g(1,S,2,0,"div",1),v(2,F,5,7,"div",2,h),a()),e&2&&(n(),u(o.promotions().length?1:-1),n(),P(o.promotions()))},dependencies:[I],styles:[".container[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-wrap:wrap;gap:8px}.header[_ngcontent-%COMP%]{color:gray;text-align:center;font-size:small;width:90%}.head-title[_ngcontent-%COMP%]{padding:4px;text-align:center;background-color:orange}.item[_ngcontent-%COMP%]{width:172px;display:flex;flex-direction:column;justify-content:space-between}.item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:172px;height:128px;cursor:pointer}"]})};export{M as PromotionsComponent};
