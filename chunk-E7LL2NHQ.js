import{e as h,y as _}from"./chunk-HKDZNTJD.js";import{Bb as g,Db as f,Eb as x,Fb as r,Gb as a,Hb as P,Qb as m,Ua as s,Xa as o,Ya as c,Yb as u,_b as v,db as p,dc as C,ib as l,wb as d}from"./chunk-FTEUR76U.js";var I=(i,t)=>["/","item","attraction-details",i,"site",t];function O(i,t){if(i&1&&(r(0,"div",1)(1,"div",2),u(2),a(),r(3,"div"),P(4,"img",3),a()()),i&2){let e=t.$implicit;o(2),v(" ",e.title," "),o(2),m("src",e.image,s),m("alt",e.title),d("routerLink",C(4,I,e.link.toLowerCase(),e.title.toLowerCase().replaceAll(" ","-")))}}var M=class i{constructor(t){this.dataService=t}promotions=p([]);maxPromotionsLimit=8;attractionFilter="";ngOnInit(){this.dataService.getPromotions().subscribe({next:t=>{this.attractionFilter&&(t=t.filter(y=>y.link==this.attractionFilter));let e=Math.floor(Math.random()*t.length),n=e>this.maxPromotionsLimit?e-this.maxPromotionsLimit+1:0;this.promotions.set(t.slice(n,n+this.maxPromotionsLimit))},error:t=>console.log(t)})}static \u0275fac=function(e){return new(e||i)(c(_))};static \u0275cmp=l({type:i,selectors:[["app-promotions"]],inputs:{maxPromotionsLimit:"maxPromotionsLimit",attractionFilter:"attractionFilter"},decls:3,vars:0,consts:[[1,"container"],[1,"item"],[1,"title"],["mat-card-image","",3,"src","alt","routerLink"]],template:function(e,n){e&1&&(r(0,"div",0),f(1,O,5,7,"div",1,g),a()),e&2&&(o(),x(n.promotions()))},dependencies:[h],styles:[".container[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-wrap:wrap;gap:8px}.container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{width:172px;display:flex;flex-direction:column;justify-content:space-between}.container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{padding:4px;text-align:center;background-color:orange}.container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:172px;height:128px;cursor:pointer}"]})};export{M as a};
