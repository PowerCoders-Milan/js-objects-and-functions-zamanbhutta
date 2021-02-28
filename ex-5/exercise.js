function helloWorld() {
    lang = prompt("Choose a preferred language -en-, -ur- or -it-")
    if(lang === "en"){
        window.alert("Hello Everyone")
     }else if(lang === "ur"){
      window.alert("Salam sab ko")
     } else if(lang === "it"){
      window.alert("Ciao Tutti")
    }
}
helloWorld()