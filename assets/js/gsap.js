gsap.registerPlugin(ScrollTrigger);const boxContainer=document.querySelector("#boxContainer"),splitTypes=boxContainer.querySelectorAll("h2");splitTypes.forEach((t,r)=>{const e=new SplitType(t,{types:"chars"});gsap.from(e.chars,{scrollTrigger:{trigger:t,start:"top 80%",end:"top 30%",scrub:!0},opacity:.2,stagger:.1})});const textosIntroducao=document.querySelector("#textosIntroducao"),splitTypes2=textosIntroducao.querySelectorAll("h2");splitTypes2.forEach((t,r)=>{const e=new SplitType(t,{types:"chars"});gsap.from(e.chars,2.2,{scrollTrigger:{trigger:t,start:"top 80%",end:"top 20%",scrub:!0},scaleY:0,y:-20,transformOrigin:"top",stagger:.1})});const{innerHeight:innerHeight}=window;gsap.from("#zoom-out video",{opacity:0,scale:.5,stagger:.25,duration:3,scrollTrigger:{trigger:"#zoom-out",pin:!0,end:`+=${1.5*innerHeight}`,scrub:3}});const splitTypes3=document.querySelectorAll(".tituloGSAP");splitTypes3.forEach((t,r)=>{const e=new SplitType(t,{types:"chars"});gsap.from(e.chars,{y:130,stagger:.05,ease:"back.out",duration:1,opacity:0,scrollTrigger:{trigger:t,start:"top 80%"}})});const splitTypes4=document.querySelectorAll(".textoGSAP");splitTypes4.forEach((t,r)=>{const e=new SplitType(t,{types:"chars"});gsap.from(e.chars,{scrollTrigger:{trigger:t,start:"top 80%",end:"top 50%",scrub:!0},opacity:.2,stagger:.1})});