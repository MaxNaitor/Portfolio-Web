(this["webpackJsonpportfolio-web"]=this["webpackJsonpportfolio-web"]||[]).push([[0],{105:function(e,t){},106:function(e,t){},107:function(e,t){},108:function(e,t){},109:function(e,t){},157:function(e,t,i){"use strict";i.r(t);var a=i(2),c=i.n(a),n=i(24),s=i.n(n),r=(i(76),i(77),i(19)),l=i(7),o=i.p+"static/media/laptopLOGO.1d131bcd.png",d=i.p+"static/media/cameraLOGO.2678deeb.png",h=i(1),b=function(e){var t=e.titolo,i=e.classe,a=e.immagine,c=e.lato,n=e.nav,s="btn btn-info "+i,r="laptop"===a?o:d,b="homecard "+c+" rounded",j=Object(l.f)();return Object(h.jsxs)("div",{className:b,children:[Object(h.jsx)("h1",{className:i,children:t}),Object(h.jsx)("img",{src:r,alt:"",className:a})," ",Object(h.jsx)("br",{}),Object(h.jsx)("button",{className:s,onClick:function(){return j.push(n)},children:"Entra"})]})},j=function(){return Object(h.jsx)("div",{className:"corpoComponente",children:Object(h.jsx)("div",{className:"homepage",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsx)(b,{titolo:"Web Development",classe:"tech",immagine:"laptop",lato:"left",nav:"/development"})}),Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsx)(b,{titolo:"Fotografia",classe:"fotografia",immagine:"camera",lato:"right",nav:"/photography"})})]})})})},m=function(){var e=Object(l.f)();return Object(h.jsx)("div",{className:"header",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-md-3",children:Object(h.jsxs)(r.b,{to:"/development",children:[" ",Object(h.jsx)("h5",{children:"Web Development"})," "]})}),Object(h.jsx)("div",{className:"col-md-6",onClick:function(){return e.push("/homepage")},children:Object(h.jsx)("h1",{children:"Tiziano Massa"})}),Object(h.jsx)("div",{className:"col-md-3",children:Object(h.jsx)(r.b,{to:"/photography",children:"Fotografia"})})]})})},u=i.p+"static/media/github.363cb5ed.png",p=i.p+"static/media/instagram.46b1557e.png",g=i.p+"static/media/linkedin.238ec218.png",O=function(){return Object(h.jsx)("div",{className:"footer",children:Object(h.jsxs)("div",{className:"row no-gutters",style:{height:"100%",width:"100%"},children:[Object(h.jsx)("div",{className:"col-sm-4",style:{height:"100%",width:"100%"},children:Object(h.jsx)("a",{href:"https://github.com/MaxNaitor",target:"_blank",children:Object(h.jsx)("img",{src:u,alt:""})})}),Object(h.jsx)("div",{className:"col-sm-4",style:{height:"100%",width:"100%"},children:Object(h.jsxs)("a",{href:"https://www.linkedin.com/in/tiziano-massa-061151158/",target:"_blank",children:[" ",Object(h.jsx)("img",{src:g,alt:""})," "]})}),Object(h.jsx)("div",{className:"col-sm-4",style:{height:"100%",width:"100%"},children:Object(h.jsxs)("a",{href:"https://www.instagram.com/ti_pics/",target:"_blank",children:[Object(h.jsx)("img",{src:p,alt:""})," "]})})]})})},x=i(17),f=i.p+"static/media/ioPH.28da4c9a.jfif",v=i(67),N=function(e){var t=e.elemento,i=e.tipo,a=function(){return Object(h.jsxs)("div",{className:"elemento-tech",children:[Object(h.jsx)("h1",{children:t.nome}),Object(h.jsxs)("div",{className:"row no-gutters",children:[Object(h.jsx)("div",{className:"col-md-3",children:Object(h.jsx)("img",{src:t.immagine,alt:""})}),Object(h.jsx)("div",{className:"col-md-9",children:Object(h.jsx)("h3",{children:t.commento})})]})]})},c=function(){return Object(h.jsxs)("div",{className:"elemento-tech",children:[Object(h.jsx)("h1",{children:t.nome}),Object(h.jsxs)("div",{className:"row no-gutters",children:[Object(h.jsx)("div",{className:"col-md-3",children:Object(h.jsx)("a",{href:t.github,target:"_blank",children:Object(h.jsx)("img",{src:u,alt:"",title:"Guarda su GitHub"})})}),Object(h.jsx)("div",{className:"col-md-9",children:Object(h.jsx)("h3",{children:t.descrizione})})]})]})},n=function(){return Object(h.jsx)("div",{className:"elemento-ph",children:Object(h.jsxs)("div",{className:"row no-gutters",children:[Object(h.jsx)("div",{className:"col-md-3",children:Object(h.jsx)("img",{src:t.immagine,alt:""})}),Object(h.jsx)("div",{className:"col-md-9",children:Object(h.jsx)("h1",{children:t.nome})})]})})};return Object(h.jsx)(h.Fragment,{children:"tecnologie"===i?a():"progetti"===i?c():"attrezzatura"===i?n():void 0})},C=function(e){var t=e.tipo,i=e.filtro,a=De.collection(t).orderBy("ordine"),c=Object(v.a)(a),n=Object(x.a)(c,1)[0];return Object(h.jsx)("div",{className:"lista",children:n&&n.map((function(e){return a=e,console.log(i),void 0==i||a.tipo===i?Object(h.jsx)(N,{elemento:a,tipo:t},a.id):void 0;var a}))})},H=function(){return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"row no-gutters",children:[Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsx)(C,{tipo:"attrezzatura",filtro:"Fotocamera"})}),Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsx)(C,{tipo:"attrezzatura",filtro:"Obiettivo"})})]})})},W=function(){var e=(new Date).getFullYear();return parseInt(e,10)-1996},z=function(e){var t=e.tipo,i=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"paragrafo",children:Object(h.jsx)("h1",{children:"Come molti,a causa della pandemia del 2020, ho perso il mio posto di lavoro."})}),Object(h.jsx)("div",{className:"paragrafo",children:Object(h.jsxs)("h1",{children:["Durante il primo periodo di quarantena,ho iniziato a studiare ",Object(h.jsx)("b",{children:"Java"})," autonomamente seguendo corsi online."]})}),Object(h.jsx)("div",{className:"paragrafo",children:Object(h.jsxs)("h1",{children:["A settembre dello stesso anno,ho frequentato un corso di formazione professionale presso un' azienda ampliando le mie competenze e conoscienze,imparando linguaggi come ",Object(h.jsx)("b",{children:"HTML"}),", ",Object(h.jsx)("b",{children:" CSS,"})," ",Object(h.jsx)("b",{children:"SQL"})," e framework come ",Object(h.jsx)("b",{children:"Spring "})," e ",Object(h.jsx)("b",{children:"Hibernate"}),"."]})}),Object(h.jsx)("div",{className:"paragrafo",children:Object(h.jsxs)("h1",{children:["Al termine del corso,ho proseguito la formazione in stage con la medesima azienda,introducendo ulteriori tecnologie come ",Object(h.jsx)("b",{children:"React"}),", ",Object(h.jsx)("b",{children:"Redux"}),", ",Object(h.jsx)("b",{children:"MongoDB"})," e ",Object(h.jsx)("b",{children:"Docker"}),"."]})}),Object(h.jsx)("div",{className:"paragrafo",children:Object(h.jsx)("h1",{children:"Ci\xf2 che preferisco del mondo della programmazione \xe8 la continua necessit\xe0 di studiare,apprendere e utilizzare nuovi strumenti che, combinati tra loro, porteranno al raggiungimento dell'obiettivo prefissato, cosa che personalmente mi regala grandi soddisfazioni."})}),Object(h.jsx)("div",{className:"paragrafo",children:Object(h.jsx)("h1",{children:"Durante questo periodo di studio e apprendimento,ho compreso che la programmazione sarebbe stata la scelta del mio campo lavorativo."})})]})},a=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"paragrafo",children:Object(h.jsx)("h1",{children:"La mia passione per la fotografia, \xe8 nata per puro caso."})}),Object(h.jsx)("div",{className:"paragrafo",children:Object(h.jsx)("h1",{children:"Ho comprato la mia prima fotocamera nel 2016 ed \xe8 stato amore a primo scatto."})}),Object(h.jsx)("div",{className:"paragrafo",children:Object(h.jsx)("h1",{children:"Da quel momento ho iniziato a studiare la composizione,la teoria e la storia della fotografia da completo autodidatta,seguendo numerosi fotografi su youtube e prendendo spunto dai loro scatti."})}),Object(h.jsxs)("div",{className:"paragrafo",children:[Object(h.jsx)("h1",{children:"Sperimentando vari generi,ho scoperto la mia preferenza per tre di questi in particolare:"}),Object(h.jsxs)("h1",{children:["La ",Object(h.jsx)("b",{children:"Travel Photography"}),",la ",Object(h.jsx)("b",{children:"Portrait Photograhy"})," e la ",Object(h.jsx)("b",{children:"Live Photograhy"}),"."]})]}),Object(h.jsxs)("div",{className:"paragrafo",children:[Object(h.jsxs)("h1",{children:["Col passare del tempo,sto sviluppando un mio stile,concentrato sulla ",Object(h.jsx)("b",{children:"simmetria"}),",lo ",Object(h.jsx)("b",{children:"spazio negativo"})]}),Object(h.jsxs)("h1",{children:["e, dove possibile, il ",Object(h.jsx)("b",{children:"minimalismo"}),"."]})]})]})};return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"chi-sono",children:[Object(h.jsx)("h1",{children:"Salve!"}),Object(h.jsxs)("h1",{children:["Sono ",Object(h.jsx)("b",{children:"Tiziano Massa"}),", ho ",W()," anni e vivo a Roma."]}),"/development"===t?i():a()]})})})},w=i(32),k=i.n(w),V=i(28),y=i.n(V),F=i(29),S=i.n(F),T=function(){var e=Object(a.useState)(""),t=Object(x.a)(e,2),i=t[0],c=t[1],n=Object(a.useState)(""),s=Object(x.a)(n,2),r=s[0],l=s[1],o=Object(a.useState)(""),d=Object(x.a)(o,2),b=d[0],j=d[1],m=function(e){if(""===i?(y()(S.a).fire({title:Object(h.jsx)("div",{children:Object(h.jsx)("p",{children:"Inserisci il tuo nome!"})})}),0):""===r?(y()(S.a).fire({title:Object(h.jsx)("div",{children:Object(h.jsx)("p",{children:"Inserisci la tua email!"})})}),0):""!==b||(y()(S.a).fire({title:Object(h.jsx)("div",{children:Object(h.jsx)("p",{children:"Inserisci il tuo messaggio!"})})}),0)){var t=i.charAt(0).toUpperCase()+i.slice(1),a={mittente:t,msg:b,reply_to:r};k.a.send("gmail_service","template_cxou839",a,"user_OuiiPTBmuFQviQVgy1BlE").then(y()(S.a).fire({title:Object(h.jsxs)("div",{children:[Object(h.jsxs)("p",{children:["Grazie ",t,"!"]}),Object(h.jsx)("p",{children:"Ti risponder\xf2 prima possibile!"})]})}))}e.preventDefault()};return Object(h.jsx)("form",{onSubmit:function(e){return m(e)},children:Object(h.jsxs)("div",{className:"contattami",children:[Object(h.jsx)("h1",{children:"Contattami!"}),Object(h.jsx)("h4",{children:"Ti risponder\xf2 prima possibile!"}),Object(h.jsx)("div",{className:"form-group",children:Object(h.jsx)("input",{type:"text",className:"form-control",placeholder:"Nome",onChange:function(e){return c(e.target.value)},style:{height:"4vh"}})}),Object(h.jsx)("div",{className:"form-group",children:Object(h.jsx)("input",{type:"email",className:"form-control",placeholder:"Email",onChange:function(e){return l(e.target.value)},style:{height:"4vh"}})}),Object(h.jsx)("div",{className:"form-group",children:Object(h.jsx)("textarea",{name:"msg",id:"msg",cols:"60",rows:"10",className:"form-control",placeholder:"Scrivi il tuo messaggio",onChange:function(e){return j(e.target.value)},style:{height:"25vh"}})}),Object(h.jsx)("button",{className:"btn btn-info",style:{marginTop:"3%"},children:"Invia"})]})})},D=i(26);D.c.GlobalWorkerOptions.workerSrc="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(D.c.version,"/pdf.worker.js");var L=function(){return Object(h.jsxs)("div",{className:"cv",children:[Object(h.jsxs)(D.a,{file:"/files/Tiziano Massa CV.pdf",className:"pdf",children:[Object(h.jsx)(D.b,{pageNumber:1}),Object(h.jsx)(D.b,{pageNumber:2})]}),Object(h.jsx)(r.b,{to:"/files/Tiziano Massa CV.pdf",target:"_blank",download:!0,children:" Scarica il CV"})]})},B=i(70),I=i.n(B),_=i.p+"static/media/O-Keta.464391b4.jpg",G=i.p+"static/media/V-Basso.a675a438.jpg",P=i.p+"static/media/O-PubFuori.238291a1.jpg",M=i.p+"static/media/V-IramaBW.71db256c.jpg",A=i.p+"static/media/V-Keta.66565205.jpg",E=i.p+"static/media/O-ChitBW.57073d3e.jpg",Q=i.p+"static/media/V-ChitHaken.b6fb310f.jpg",R=i.p+"static/media/V-Irama.52b93a45.jpg",Y=i.p+"static/media/O-Batteria.03ac2fc5.jpg",q=i.p+"static/media/O-Chit.f5d30cee.jpg",K=i.p+"static/media/V-CantHaken.752d9358.jpg",J=i.p+"static/media/O-ChitHaken.109bfe98.jpg",U=i.p+"static/media/O-PubHaken.1c8683d5.jpg",X=[{src:R,thumbnail:R,thumbnailWidth:2,thumbnailHeight:3},{src:_,thumbnail:_,thumbnailWidth:3,thumbnailHeight:2},{src:P,thumbnail:P,thumbnailWidth:3,thumbnailHeight:2},{src:q,thumbnail:q,thumbnailWidth:3,thumbnailHeight:2},{src:Y,thumbnail:Y,thumbnailWidth:3,thumbnailHeight:2},{src:G,thumbnail:G,thumbnailWidth:2,thumbnailHeight:3},{src:M,thumbnail:M,thumbnailWidth:2,thumbnailHeight:3},{src:A,thumbnail:A,thumbnailWidth:2,thumbnailHeight:3},{src:E,thumbnail:E,thumbnailWidth:3,thumbnailHeight:2},{src:Q,thumbnail:Q,thumbnailWidth:2,thumbnailHeight:3},{src:U,thumbnail:U,thumbnailWidth:3,thumbnailHeight:2},{src:K,thumbnail:K,thumbnailWidth:2,thumbnailHeight:3},{src:J,thumbnail:J,thumbnailWidth:3,thumbnailHeight:2}],Z=i.p+"static/media/V-MartiTosc.ff1320b2.jpg",$=i.p+"static/media/V-MartiTuli.08db3eaf.jpg",ee=i.p+"static/media/V-Edo.1963dcdf.jpg",te=i.p+"static/media/V-Mich.73464b2f.jpg",ie=i.p+"static/media/V-Taylor.fd856eef.jpg",ae=i.p+"static/media/V-TaylorBurger.64d4bdb2.jpg",ce=i.p+"static/media/V-Giorgia.a65ce189.jpg",ne=i.p+"static/media/V-Fede.cbe03eee.jpg",se=i.p+"static/media/V-Jess.3a26d6a6.jpg",re=i.p+"static/media/V-FedeCasa.23838214.jpg",le=i.p+"static/media/V-GiorgiaCap.f1c5918b.jpg",oe=i.p+"static/media/V-KTColosseo.84df67c2.jpg",de=i.p+"static/media/V-Gabri.ed2ecf96.jpg",he=i.p+"static/media/V-GabAlb.6871d821.jpg",be=i.p+"static/media/V-KT.ef8ff315.jpg",je=[{src:Z,thumbnail:Z,thumbnailWidth:2,thumbnailHeight:3},{src:ee,thumbnail:ee,thumbnailWidth:2,thumbnailHeight:3},{src:ae,thumbnail:ae,thumbnailWidth:2,thumbnailHeight:3},{src:te,thumbnail:te,thumbnailWidth:2,thumbnailHeight:3},{src:$,thumbnail:$,thumbnailWidth:2,thumbnailHeight:3},{src:ce,thumbnail:ce,thumbnailWidth:2,thumbnailHeight:3},{src:ne,thumbnail:ne,thumbnailWidth:2,thumbnailHeight:3},{src:se,thumbnail:se,thumbnailWidth:2,thumbnailHeight:3},{src:re,thumbnail:re,thumbnailWidth:2,thumbnailHeight:3},{src:le,thumbnail:le,thumbnailWidth:2,thumbnailHeight:3},{src:oe,thumbnail:oe,thumbnailWidth:2,thumbnailHeight:3},{src:de,thumbnail:de,thumbnailWidth:2,thumbnailHeight:3},{src:ie,thumbnail:ie,thumbnailWidth:2,thumbnailHeight:3},{src:he,thumbnail:he,thumbnailWidth:2,thumbnailHeight:3},{src:be,thumbnail:be,thumbnailWidth:2,thumbnailHeight:3}],me=i.p+"static/media/O-Dumbo.92ea17e5.jpg",ue=i.p+"static/media/V-Nara.b4977851.jpg",pe=i.p+"static/media/O-Fushimi.8ecd1fd9.jpg",ge=i.p+"static/media/V-Camper.ed8da34b.jpg",Oe=i.p+"static/media/V-LA.8d89bf72.jpg",xe=i.p+"static/media/O-Venezia.b70649b0.jpg",fe=i.p+"static/media/O-Gion.21017476.jpg",ve=i.p+"static/media/V-Shibuya.395e991c.jpg",Ne=i.p+"static/media/Q-NY.7bfba628.jpg",Ce=i.p+"static/media/O-NY.33b3fa81.jpg",He=i.p+"static/media/V-Capo.e1b73db8.jpg",We=i.p+"static/media/O-Egitto.b0cdd656.jpg",ze=i.p+"static/media/Q-Capo.3fe34499.jpg",we=[{src:me,thumbnail:me,thumbnailWidth:3,thumbnailHeight:2},{src:ue,thumbnail:ue,thumbnailWidth:2,thumbnailHeight:3},{src:pe,thumbnail:pe,thumbnailWidth:3,thumbnailHeight:2},{src:ge,thumbnail:ge,thumbnailWidth:2,thumbnailHeight:3},{src:Oe,thumbnail:Oe,thumbnailWidth:2,thumbnailHeight:3},{src:xe,thumbnail:xe,thumbnailWidth:3,thumbnailHeight:2},{src:ve,thumbnail:ve,thumbnailWidth:2,thumbnailHeight:3},{src:Ne,thumbnail:Ne,thumbnailWidth:3,thumbnailHeight:3},{src:fe,thumbnail:fe,thumbnailWidth:3,thumbnailHeight:2},{src:Ce,thumbnail:Ce,thumbnailWidth:3,thumbnailHeight:2},{src:He,thumbnail:He,thumbnailWidth:2,thumbnailHeight:3},{src:We,thumbnail:We,thumbnailWidth:3,thumbnailHeight:2},{src:ze,thumbnail:ze,thumbnailWidth:3,thumbnailHeight:2}],ke=function(e){var t=e.genere;return Object(h.jsxs)("div",{className:"row no-gutters",style:{backgroundColor:"teal"},children:[Object(h.jsx)("div",{className:"col-md-3",style:{padding:"3%",textAlign:"left",margin:"auto"},children:Object(h.jsxs)("div",{className:"rounded etichetta-foto",children:["travel"===t?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:"Travel"}),Object(h.jsx)("p",{children:"Se c'\xe8 una cosa che amo veramente,\xe8 viaggiare."}),Object(h.jsx)("p",{children:"Nulla ti arricchisce di pi\xf9 di andare lontano e vedere posti e culture diverse dalla tua. "})]}):"ritratti"===t?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:"Ritratti"}),Object(h.jsx)("p",{children:"Secondo me,per raccontare veramente una persona,non basta un volto."}),Object(h.jsx)("p",{children:"Una persona \xe8 se stessa solo nel suo luogo di appartenenza."})]}):"live"===t?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:"Live"}),Object(h.jsx)("p",{children:"La musica \xe8 contaminazione."}),Object(h.jsx)("p",{children:"La musica unisce."}),Object(h.jsx)("p",{children:"La musica, \xe8 essa stessa la vita."})]}):void 0,Object(h.jsx)("p",{children:"Clicca sulle immagini per vederle con le proporzioni reali!"})]})}),Object(h.jsx)("div",{className:"col-md-9 scroll-foto",children:Object(h.jsx)(I.a,{images:"ritratti"===t?je:"travel"===t?we:"live"===t?X:void 0,rowHeight:300})})]})},Ve=function(e){var t=e.mostra,i=Object(l.f)();return Object(h.jsx)("div",{className:"contenuto rounded",children:function(){switch(t){case"chi sono":return Object(h.jsx)(z,{tipo:i.location.pathname});case"contattami":return Object(h.jsx)(T,{});case"tecnologie":return Object(h.jsx)(C,{tipo:"tecnologie"});case"progetti":return Object(h.jsx)(C,{tipo:"progetti"});case"ritratti":return Object(h.jsx)(ke,{genere:"ritratti"});case"travel":return Object(h.jsx)(ke,{genere:"travel"});case"live":return Object(h.jsx)(ke,{genere:"live"});case"attrezzatura":return Object(h.jsx)(H,{});case"cv":return Object(h.jsx)(L,{});default:return Object(h.jsx)(z,{tipo:i.location.pathname})}}()})},ye=function(e){var t=e.selezione,i=e.tipo;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{align:"center",style:{margin:"10%"},children:"development"===i?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("button",{className:"btn btn-info-inverted tech pulsantiera",onClick:function(){return t("chi sono")},children:"Chi Sono"}),Object(h.jsx)("button",{className:"btn btn-info-inverted tech pulsantiera",onClick:function(){return t("tecnologie")},children:"Tecnologie"}),Object(h.jsx)("button",{className:"btn btn-info-inverted tech pulsantiera",onClick:function(){return t("progetti")},children:"Progetti"}),Object(h.jsx)("button",{className:"btn btn-info-inverted tech pulsantiera",onClick:function(){return t("contattami")},children:"Contattami"}),Object(h.jsx)("button",{className:"btn btn-info-inverted tech pulsantiera",onClick:function(){return t("cv")},children:"CV"})]}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("button",{className:"btn btn-info-inverted fotografia pulsantiera",onClick:function(){return t("chi sono")},children:"Chi Sono"}),Object(h.jsx)("button",{className:"btn btn-info-inverted fotografia pulsantiera",onClick:function(){return t("ritratti")},children:"Ritratti"}),Object(h.jsx)("button",{className:"btn btn-info-inverted fotografia pulsantiera",onClick:function(){return t("travel")},children:"Travel"}),Object(h.jsx)("button",{className:"btn btn-info-inverted fotografia pulsantiera",onClick:function(){return t("live")},children:"Live"}),Object(h.jsx)("button",{className:"btn btn-info-inverted fotografia pulsantiera",onClick:function(){return t("attrezzatura")},children:"Attrezzatura"}),Object(h.jsx)("button",{className:"btn btn-info-inverted fotografia pulsantiera",onClick:function(){return t("contattami")},children:"Contattami"})]})})})},Fe=function(){var e=Object(a.useState)("prova"),t=Object(x.a)(e,2),i=t[0],c=t[1];return Object(h.jsx)("div",{className:"corpoComponente",children:Object(h.jsx)("div",{className:"home",children:Object(h.jsxs)("div",{className:"row no-gutters",children:[Object(h.jsx)("div",{className:"col-md-3",children:Object(h.jsxs)("div",{className:"schedahome rounded",children:[Object(h.jsx)("img",{src:f,alt:"",className:"fotoprofilo rounded-circle"}),Object(h.jsx)(ye,{selezione:c,tipo:"development"})]})}),Object(h.jsx)("div",{className:"col-md-9",children:Object(h.jsx)(Ve,{mostra:i})})]})})})},Se=function(){var e=Object(a.useState)("prova"),t=Object(x.a)(e,2),i=t[0],c=t[1];return Object(h.jsx)("div",{className:"corpoComponente",children:Object(h.jsx)("div",{className:"home",children:Object(h.jsxs)("div",{className:"row no-gutters",children:[Object(h.jsx)("div",{className:"col-md-3",children:Object(h.jsxs)("div",{className:"schedahome rounded",children:[Object(h.jsx)("img",{src:f,alt:"",className:"fotoprofilo rounded-circle"}),Object(h.jsx)(ye,{selezione:c,tipo:"fotografia"})]})}),Object(h.jsx)("div",{className:"col-md-9",children:Object(h.jsx)(Ve,{mostra:i})})]})})})},Te=i(44);i(158);Object(w.init)("user_OuiiPTBmuFQviQVgy1BlE");Te.a.initializeApp({apiKey:"AIzaSyDoRSWWGgCDpOgfdYYR_D31C_Y55kFuad0",authDomain:"portfolio-web-a36cf.firebaseapp.com",projectId:"portfolio-web-a36cf",storageBucket:"portfolio-web-a36cf.appspot.com",messagingSenderId:"100048278984",appId:"1:100048278984:web:cdbe752227070d68759cfd"});var De=Te.a.firestore();var Le=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)(r.a,{children:[Object(h.jsx)(m,{}),Object(h.jsxs)(l.c,{children:[Object(h.jsx)(l.a,{path:"/",exact:!0,component:j}),Object(h.jsx)(l.a,{path:"/homepage",component:j}),Object(h.jsx)(l.a,{path:"/photography",component:Se}),Object(h.jsx)(l.a,{path:"/development",component:Fe})]})]}),Object(h.jsx)(O,{})]})},Be=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,159)).then((function(t){var i=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,s=t.getTTFB;i(e),a(e),c(e),n(e),s(e)}))};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(Le,{})}),document.getElementById("root")),Be()},76:function(e,t,i){},77:function(e,t,i){}},[[157,1,2]]]);
//# sourceMappingURL=main.8238eaf5.chunk.js.map