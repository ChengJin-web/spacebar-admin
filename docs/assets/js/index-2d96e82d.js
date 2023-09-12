import{d as y,i as q,Q as g,r,o as U,c as F,b as e,w as a,e as f,R as C,p as S,g as I,a as N}from"./index-fcbc4c7a.js";import{_ as R}from"./_plugin-vue_export-helper-c27b6911.js";function z(i,d,t){const p=/^(((13[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(17[3-8]{1})|(18[0-9]{1})|(19[0-9]{1})|(14[5-7]{1}))+\d{8})$/;if(d===""&&t("请输入手机号码"),!p.test(d))t(new Error("请输入正确的手机号码"));else return t()}const B=i=>(S("data-v-c191418a"),i=i(),I(),i),$={class:"card content-box"},Z=B(()=>N("span",{class:"text-gray-500"},"-",-1)),j=y({name:"dynamicForm"}),E=y({...j,setup(i){const d=q(),t=g({name:"Spacebar",phone:"",region:"",date1:"",date2:"",delivery:!1,resource:"",desc:""}),p=g({name:[{required:!0,message:"Please input Activity name",trigger:"blur"},{min:3,max:5,message:"Length should be 3 to 5",trigger:"blur"}],phone:[{required:!0,validator:z,trigger:"blur"}],region:[{required:!0,message:"Please select Activity zone",trigger:"change"}],date1:[{type:"date",required:!0,message:"Please pick a date",trigger:"change"}],date2:[{type:"date",required:!0,message:"Please pick a time",trigger:"change"}],resource:[{required:!0,message:"Please select activity resource",trigger:"change"}],desc:[{required:!0,message:"Please input activity form",trigger:"blur"}]}),v=async s=>{s&&await s.validate((o,u)=>{o&&C.success("提交的数据为 : "+JSON.stringify(t))})},V=s=>{s&&s.resetFields()};return(s,o)=>{const u=r("el-input"),n=r("el-form-item"),m=r("el-option"),b=r("el-select"),x=r("el-date-picker"),h=r("el-col"),k=r("el-time-picker"),w=r("el-switch"),c=r("el-radio"),A=r("el-radio-group"),_=r("el-button"),P=r("el-form");return U(),F("div",$,[e(P,{ref_key:"ruleFormRef",ref:d,model:t,rules:p,"label-width":"140px"},{default:a(()=>[e(n,{label:"Activity name",prop:"name"},{default:a(()=>[e(u,{modelValue:t.name,"onUpdate:modelValue":o[0]||(o[0]=l=>t.name=l)},null,8,["modelValue"])]),_:1}),e(n,{label:"Activity phone",prop:"phone"},{default:a(()=>[e(u,{modelValue:t.phone,"onUpdate:modelValue":o[1]||(o[1]=l=>t.phone=l),placeholder:"Activity phone"},null,8,["modelValue"])]),_:1}),e(n,{label:"Activity zone",prop:"region"},{default:a(()=>[e(b,{modelValue:t.region,"onUpdate:modelValue":o[2]||(o[2]=l=>t.region=l),placeholder:"Activity zone"},{default:a(()=>[e(m,{label:"Zone one",value:"shanghai"}),e(m,{label:"Zone two",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),e(n,{label:"Activity time",required:""},{default:a(()=>[e(n,{prop:"date1"},{default:a(()=>[e(x,{modelValue:t.date1,"onUpdate:modelValue":o[3]||(o[3]=l=>t.date1=l),type:"date",placeholder:"Pick a date",style:{width:"100%"}},null,8,["modelValue"])]),_:1}),e(h,{class:"text-center",span:1},{default:a(()=>[Z]),_:1}),e(n,{prop:"date2"},{default:a(()=>[e(k,{modelValue:t.date2,"onUpdate:modelValue":o[4]||(o[4]=l=>t.date2=l),placeholder:"Pick a time",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{label:"Instant delivery",prop:"delivery"},{default:a(()=>[e(w,{modelValue:t.delivery,"onUpdate:modelValue":o[5]||(o[5]=l=>t.delivery=l)},null,8,["modelValue"])]),_:1}),e(n,{label:"Resources",prop:"resource"},{default:a(()=>[e(A,{modelValue:t.resource,"onUpdate:modelValue":o[6]||(o[6]=l=>t.resource=l)},{default:a(()=>[e(c,{label:"Sponsorship"}),e(c,{label:"Venue"})]),_:1},8,["modelValue"])]),_:1}),e(n,{label:"Activity form",prop:"desc"},{default:a(()=>[e(u,{modelValue:t.desc,"onUpdate:modelValue":o[7]||(o[7]=l=>t.desc=l),type:"textarea"},null,8,["modelValue"])]),_:1}),e(n,null,{default:a(()=>[e(_,{type:"primary",onClick:o[8]||(o[8]=l=>v(d.value))},{default:a(()=>[f(" Create ")]),_:1}),e(_,{onClick:o[9]||(o[9]=l=>V(d.value))},{default:a(()=>[f(" Reset ")]),_:1})]),_:1})]),_:1},8,["model","rules"])])}}});const M=R(E,[["__scopeId","data-v-c191418a"]]);export{M as default};
