import{L as Ce,M as te,i as ee,l as C,m as ve,n as V,x as ye}from"./chunk-GRYZA2NA.js";import{A as ge,B as Y,Jb as K,V as me,X as O,Y as I,Ya as p,Z as k,_ as m,_b as T,a,aa as f,b as d,da as l,db as _,f as q,i as g,jb as v,ka as X,kb as M,l as ue,lb as P,lc as y,m as he,mc as c,pb as _e,q as fe,ta as S,tc as J,ua as N,w as pe,x as Z,xa as Q}from"./chunk-P3FZWFNY.js";var Xt=new f("");function u(i){return i==null||(typeof i=="string"||Array.isArray(i))&&i.length===0}function Fe(i){return i!=null&&typeof i.length=="number"}var xe=new f(""),Re=new f(""),et=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Ve=class{static min(t){return tt(t)}static max(t){return it(t)}static required(t){return nt(t)}static requiredTrue(t){return rt(t)}static email(t){return ot(t)}static minLength(t){return st(t)}static maxLength(t){return at(t)}static pattern(t){return lt(t)}static nullValidator(t){return Oe(t)}static compose(t){return Be(t)}static composeAsync(t){return je(t)}};function tt(i){return t=>{if(u(t.value)||u(i))return null;let e=parseFloat(t.value);return!isNaN(e)&&e<i?{min:{min:i,actual:t.value}}:null}}function it(i){return t=>{if(u(t.value)||u(i))return null;let e=parseFloat(t.value);return!isNaN(e)&&e>i?{max:{max:i,actual:t.value}}:null}}function nt(i){return u(i.value)?{required:!0}:null}function rt(i){return i.value===!0?null:{required:!0}}function ot(i){return u(i.value)||et.test(i.value)?null:{email:!0}}function st(i){return t=>u(t.value)||!Fe(t.value)?null:t.value.length<i?{minlength:{requiredLength:i,actualLength:t.value.length}}:null}function at(i){return t=>Fe(t.value)&&t.value.length>i?{maxlength:{requiredLength:i,actualLength:t.value.length}}:null}function lt(i){if(!i)return Oe;let t,e;return typeof i=="string"?(e="",i.charAt(0)!=="^"&&(e+="^"),e+=i,i.charAt(i.length-1)!=="$"&&(e+="$"),t=new RegExp(e)):(e=i.toString(),t=i),n=>{if(u(n.value))return null;let r=n.value;return t.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function Oe(i){return null}function Ie(i){return i!=null}function ke(i){return _e(i)?ue(i):i}function Ne(i){let t={};return i.forEach(e=>{t=e!=null?a(a({},t),e):t}),Object.keys(t).length===0?null:t}function Pe(i,t){return t.map(e=>e(i))}function dt(i){return!i.validate}function Te(i){return i.map(t=>dt(t)?t:e=>t.validate(e))}function Be(i){if(!i)return null;let t=i.filter(Ie);return t.length==0?null:function(e){return Ne(Pe(e,t))}}function se(i){return i!=null?Be(Te(i)):null}function je(i){if(!i)return null;let t=i.filter(Ie);return t.length==0?null:function(e){let n=Pe(e,t).map(ke);return pe(n).pipe(fe(Ne))}}function ae(i){return i!=null?je(Te(i)):null}function De(i,t){return i===null?[t]:Array.isArray(i)?[...i,t]:[i,t]}function Ge(i){return i._rawValidators}function ze(i){return i._rawAsyncValidators}function ie(i){return i?Array.isArray(i)?i:[i]:[]}function j(i,t){return Array.isArray(i)?i.includes(t):i===t}function be(i,t){let e=ie(t);return ie(i).forEach(r=>{j(e,r)||e.push(r)}),e}function we(i,t){return ie(t).filter(e=>!j(i,e))}var G=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=se(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=ae(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control&&this.control.reset(t)}hasError(t,e){return this.control?this.control.hasError(t,e):!1}getError(t,e){return this.control?this.control.getError(t,e):null}},w=class extends G{name;get formDirective(){return null}get path(){return null}},Se=class extends G{_parent=null;name=null;valueAccessor=null};var ct={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Qt=d(a({},ct),{"[class.ng-submitted]":"isSubmitted"});var A="VALID",B="INVALID",D="PENDING",E="DISABLED",h=class{},z=class extends h{value;source;constructor(t,e){super(),this.value=t,this.source=e}},x=class extends h{pristine;source;constructor(t,e){super(),this.pristine=t,this.source=e}},R=class extends h{touched;source;constructor(t,e){super(),this.touched=t,this.source=e}},b=class extends h{status;source;constructor(t,e){super(),this.status=t,this.source=e}},ne=class extends h{source;constructor(t){super(),this.source=t}},re=class extends h{source;constructor(t){super(),this.source=t}};function Le(i){return($(i)?i.validators:i)||null}function ut(i){return Array.isArray(i)?se(i):i||null}function Ue(i,t){return($(t)?t.asyncValidators:i)||null}function ht(i){return Array.isArray(i)?ae(i):i||null}function $(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function ft(i,t,e){let n=i.controls;if(!(t?Object.keys(n):n).length)throw new O(1e3,"");if(!n[e])throw new O(1001,"")}function pt(i,t,e){i._forEachChild((n,r)=>{if(e[r]===void 0)throw new O(1002,"")})}var L=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(t,e){this._assignValidators(t),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get status(){return c(this.statusReactive)}set status(t){c(()=>this.statusReactive.set(t))}_status=y(()=>this.statusReactive());statusReactive=_(void 0);get valid(){return this.status===A}get invalid(){return this.status===B}get pending(){return this.status==D}get disabled(){return this.status===E}get enabled(){return this.status!==E}errors;get pristine(){return c(this.pristineReactive)}set pristine(t){c(()=>this.pristineReactive.set(t))}_pristine=y(()=>this.pristineReactive());pristineReactive=_(!0);get dirty(){return!this.pristine}get touched(){return c(this.touchedReactive)}set touched(t){c(()=>this.touchedReactive.set(t))}_touched=y(()=>this.touchedReactive());touchedReactive=_(!1);get untouched(){return!this.touched}_events=new g;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(be(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(be(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(we(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(we(t,this._rawAsyncValidators))}hasValidator(t){return j(this._rawValidators,t)}hasAsyncValidator(t){return j(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){let e=this.touched===!1;this.touched=!0;let n=t.sourceControl??this;this._parent&&!t.onlySelf&&this._parent.markAsTouched(d(a({},t),{sourceControl:n})),e&&t.emitEvent!==!1&&this._events.next(new R(!0,n))}markAllAsTouched(t={}){this.markAsTouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(t))}markAsUntouched(t={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=t.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:n})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t,n),e&&t.emitEvent!==!1&&this._events.next(new R(!1,n))}markAsDirty(t={}){let e=this.pristine===!0;this.pristine=!1;let n=t.sourceControl??this;this._parent&&!t.onlySelf&&this._parent.markAsDirty(d(a({},t),{sourceControl:n})),e&&t.emitEvent!==!1&&this._events.next(new x(!1,n))}markAsPristine(t={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=t.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:t.emitEvent})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t,n),e&&t.emitEvent!==!1&&this._events.next(new x(!0,n))}markAsPending(t={}){this.status=D;let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new b(this.status,e)),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.markAsPending(d(a({},t),{sourceControl:e}))}disable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=E,this.errors=null,this._forEachChild(r=>{r.disable(d(a({},t),{onlySelf:!0}))}),this._updateValue();let n=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new z(this.value,n)),this._events.next(new b(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(d(a({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=A,this._forEachChild(n=>{n.enable(d(a({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(d(a({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(t,e){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine({},e),this._parent._updateTouched({},e))}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===A||this.status===D)&&this._runAsyncValidator(n,t.emitEvent)}let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new z(this.value,e)),this._events.next(new b(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(d(a({},t),{sourceControl:e}))}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?E:A}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t,e){if(this.asyncValidator){this.status=D,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1};let n=ke(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:t})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let t=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,t}return!1}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(t){let e=t;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((n,r)=>n&&n._find(r),this)}getError(t,e){let n=e?this.get(e):this;return n&&n.errors?n.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t,e,n){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),(t||n)&&this._events.next(new b(this.status,e)),this._parent&&this._parent._updateControlsErrors(t,e,n)}_initObservables(){this.valueChanges=new S,this.statusChanges=new S}_calculateStatus(){return this._allControlsDisabled()?E:this.errors?B:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(D)?D:this._anyControlsHaveStatus(B)?B:A}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t,e){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,this._parent&&!t.onlySelf&&this._parent._updatePristine(t,e),r&&this._events.next(new x(this.pristine,e))}_updateTouched(t={},e){this.touched=this._anyControlsTouched(),this._events.next(new R(this.touched,e)),this._parent&&!t.onlySelf&&this._parent._updateTouched(t,e)}_onDisabledChange=[];_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){$(t)&&t.updateOn!=null&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){let e=this._parent&&this._parent.dirty;return!t&&!!e&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=ut(this._rawValidators)}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=ht(this._rawAsyncValidators)}},U=class extends L{constructor(t,e,n){super(Le(e),Ue(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,n={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,n={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){pt(this,!0,t),Object.keys(t).forEach(n=>{ft(this,!0,n),this.controls[n].setValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){t!=null&&(Object.keys(t).forEach(n=>{let r=this.controls[n];r&&r.patchValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((n,r)=>{n.reset(t?t[r]:null,{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,n)=>(t[n]=e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,n)=>n._syncPendingControls()?!0:e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{let n=this.controls[e];n&&t(n,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(let[e,n]of Object.entries(this.controls))if(this.contains(e)&&t(n))return!0;return!1}_reduceValue(){let t={};return this._reduceChildren(t,(e,n,r)=>((n.enabled||this.disabled)&&(e[r]=n.value),e))}_reduceChildren(t,e){let n=t;return this._forEachChild((r,o)=>{n=e(n,r,o)}),n}_allControlsDisabled(){for(let t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(t){return this.controls.hasOwnProperty(t)?this.controls[t]:null}};var le=new f("CallSetDisabledState",{providedIn:"root",factory:()=>de}),de="always";function oe(i,t,e=de){ce(i,t),t.valueAccessor.writeValue(i.value),(i.disabled||e==="always")&&t.valueAccessor.setDisabledState?.(i.disabled),mt(i,t),vt(i,t),_t(i,t),gt(i,t)}function Me(i,t,e=!0){let n=()=>{};t.valueAccessor&&(t.valueAccessor.registerOnChange(n),t.valueAccessor.registerOnTouched(n)),W(i,t),i&&(t._invokeOnDestroyCallbacks(),i._registerOnCollectionChange(()=>{}))}function H(i,t){i.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function gt(i,t){if(t.valueAccessor.setDisabledState){let e=n=>{t.valueAccessor.setDisabledState(n)};i.registerOnDisabledChange(e),t._registerOnDestroy(()=>{i._unregisterOnDisabledChange(e)})}}function ce(i,t){let e=Ge(i);t.validator!==null?i.setValidators(De(e,t.validator)):typeof e=="function"&&i.setValidators([e]);let n=ze(i);t.asyncValidator!==null?i.setAsyncValidators(De(n,t.asyncValidator)):typeof n=="function"&&i.setAsyncValidators([n]);let r=()=>i.updateValueAndValidity();H(t._rawValidators,r),H(t._rawAsyncValidators,r)}function W(i,t){let e=!1;if(i!==null){if(t.validator!==null){let r=Ge(i);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==t.validator);o.length!==r.length&&(e=!0,i.setValidators(o))}}if(t.asyncValidator!==null){let r=ze(i);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==t.asyncValidator);o.length!==r.length&&(e=!0,i.setAsyncValidators(o))}}}let n=()=>{};return H(t._rawValidators,n),H(t._rawAsyncValidators,n),e}function mt(i,t){t.valueAccessor.registerOnChange(e=>{i._pendingValue=e,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&He(i,t)})}function _t(i,t){t.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&He(i,t),i.updateOn!=="submit"&&i.markAsTouched()})}function He(i,t){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function vt(i,t){let e=(n,r)=>{t.valueAccessor.writeValue(n),r&&t.viewToModelUpdate(n)};i.registerOnChange(e),t._registerOnDestroy(()=>{i._unregisterOnChange(e)})}function We(i,t){i==null,ce(i,t)}function yt(i,t){return W(i,t)}function $e(i,t){i._syncPendingControls(),t.forEach(e=>{let n=e.control;n.updateOn==="submit"&&n._pendingChange&&(e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function Ct(i,t){let e=i.indexOf(t);e>-1&&i.splice(e,1)}var Vt={provide:w,useExisting:I(()=>Dt)},F=Promise.resolve(),Dt=(()=>{class i extends w{callSetDisabledState;get submitted(){return c(this.submittedReactive)}_submitted=y(()=>this.submittedReactive());submittedReactive=_(!1);_directives=new Set;form;ngSubmit=new S;options;constructor(e,n,r){super(),this.callSetDisabledState=r,this.form=new U({},se(e),ae(n))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){F.then(()=>{let n=this._findContainer(e.path);e.control=n.registerControl(e.name,e.control),oe(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){F.then(()=>{let n=this._findContainer(e.path);n&&n.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){F.then(()=>{let n=this._findContainer(e.path),r=new U({});We(r,e),n.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){F.then(()=>{let n=this._findContainer(e.path);n&&n.removeControl(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,n){F.then(()=>{this.form.get(e.path).setValue(n)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),$e(this.form,this._directives),this.ngSubmit.emit(e),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(n){return new(n||i)(p(xe,10),p(Re,10),p(le,8))};static \u0275dir=M({type:i,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(n,r){n&1&&K("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[T([Vt]),P]})}return i})();function Ae(i,t){let e=i.indexOf(t);e>-1&&i.splice(e,1)}function Ee(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var bt=class extends L{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(t=null,e,n){super(Le(e),Ue(n,e)),this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),$(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Ee(t)?this.defaultValue=t.value:this.defaultValue=t)}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){Ae(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){Ae(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(t){Ee(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};var wt=i=>i instanceof bt;var St=new f("");var Mt={provide:w,useExisting:I(()=>At)},At=(()=>{class i extends w{callSetDisabledState;get submitted(){return c(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=y(()=>this._submittedReactive());_submittedReactive=_(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];form=null;ngSubmit=new S;constructor(e,n,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(n)}ngOnChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(W(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(e){let n=this.form.get(e.path);return oe(n,e,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),n}getControl(e){return this.form.get(e.path)}removeControl(e){Me(e.control||null,e,!1),Ct(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}getFormArray(e){return this.form.get(e.path)}updateModel(e,n){this.form.get(e.path).setValue(n)}onSubmit(e){return this._submittedReactive.set(!0),$e(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new ne(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this._submittedReactive.set(!1),this.form._events.next(new re(this.form))}_updateDomValue(){this.directives.forEach(e=>{let n=e.control,r=this.form.get(e.path);n!==r&&(Me(n||null,e),wt(r)&&(oe(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let n=this.form.get(e.path);We(n,e),n.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){if(this.form){let n=this.form.get(e.path);n&&yt(n,e)&&n.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){ce(this.form,this),this._oldForm&&W(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(n){return new(n||i)(p(xe,10),p(Re,10),p(le,8))};static \u0275dir=M({type:i,selectors:[["","formGroup",""]],hostBindings:function(n,r){n&1&&K("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[T([Mt]),P,X]})}return i})();var Et=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=v({type:i});static \u0275inj=m({})}return i})();var Jt=(()=>{class i{static withConfig(e){return{ngModule:i,providers:[{provide:St,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:le,useValue:e.callSetDisabledState??de}]}}static \u0275fac=function(n){return new(n||i)};static \u0275mod=v({type:i});static \u0275inj=m({imports:[Et]})}return i})();var Ft=20,xt=(()=>{class i{_ngZone=l(N);_platform=l(ee);_document=l(J,{optional:!0});constructor(){}_scrolled=new g;_globalSubscription=null;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let n=this.scrollContainers.get(e);n&&(n.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=Ft){return this._platform.isBrowser?new q(n=>{this._globalSubscription||this._addGlobalListener();let r=e>0?this._scrolled.pipe(Y(e)).subscribe(n):this._scrolled.subscribe(n);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||this._removeGlobalListener()}}):he()}ngOnDestroy(){this._removeGlobalListener(),this.scrollContainers.forEach((e,n)=>this.deregister(n)),this._scrolled.complete()}ancestorScrolled(e,n){let r=this.getAncestorScrollContainers(e);return this.scrolled(n).pipe(ge(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let n=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,e)&&n.push(o)}),n}_getWindow(){return this._document.defaultView||window}_scrollableContainsElement(e,n){let r=ye(n),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}_addGlobalListener(){this._globalSubscription=this._ngZone.runOutsideAngular(()=>{let e=this._getWindow();return Z(e.document,"scroll").subscribe(()=>this._scrolled.next())})}_removeGlobalListener(){this._globalSubscription&&(this._globalSubscription.unsubscribe(),this._globalSubscription=null)}static \u0275fac=function(n){return new(n||i)};static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),$i=(()=>{class i{elementRef=l(Q);scrollDispatcher=l(xt);ngZone=l(N);dir=l(Ce,{optional:!0});_destroyed=new g;_elementScrolled=new q(e=>this.ngZone.runOutsideAngular(()=>Z(this.elementRef.nativeElement,"scroll").pipe(me(this._destroyed)).subscribe(e)));constructor(){}ngOnInit(){this.scrollDispatcher.register(this)}ngOnDestroy(){this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let n=this.elementRef.nativeElement,r=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=r?e.end:e.start),e.right==null&&(e.right=r?e.start:e.end),e.bottom!=null&&(e.top=n.scrollHeight-n.clientHeight-e.bottom),r&&V()!=C.NORMAL?(e.left!=null&&(e.right=n.scrollWidth-n.clientWidth-e.left),V()==C.INVERTED?e.left=e.right:V()==C.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=n.scrollWidth-n.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let n=this.elementRef.nativeElement;ve()?n.scrollTo(e):(e.top!=null&&(n.scrollTop=e.top),e.left!=null&&(n.scrollLeft=e.left))}measureScrollOffset(e){let n="left",r="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let s=this.dir&&this.dir.value=="rtl";return e=="start"?e=s?r:n:e=="end"&&(e=s?n:r),s&&V()==C.INVERTED?e==n?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:s&&V()==C.NEGATED?e==n?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==n?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(n){return new(n||i)};static \u0275dir=M({type:i,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return i})(),Rt=20,qi=(()=>{class i{_platform=l(ee);_viewportSize;_change=new g;_changeListener=e=>{this._change.next(e)};_document=l(J,{optional:!0});constructor(){l(N).runOutsideAngular(()=>{if(this._platform.isBrowser){let n=this._getWindow();n.addEventListener("resize",this._changeListener),n.addEventListener("orientationchange",this._changeListener)}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){if(this._platform.isBrowser){let e=this._getWindow();e.removeEventListener("resize",this._changeListener),e.removeEventListener("orientationchange",this._changeListener)}this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:n,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+n,height:r,width:n}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,n=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),s=-o.top||e.body.scrollTop||n.scrollY||r.scrollTop||0,Ze=-o.left||e.body.scrollLeft||n.scrollX||r.scrollLeft||0;return{top:s,left:Ze}}change(e=Rt){return e>0?this._change.pipe(Y(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(n){return new(n||i)};static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var qe=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=v({type:i});static \u0275inj=m({})}return i})(),Zi=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=v({type:i});static \u0275inj=m({imports:[te,qe,te,qe]})}return i})();export{Xt as a,Ve as b,Se as c,Dt as d,At as e,Jt as f,xt as g,$i as h,qi as i,qe as j,Zi as k};