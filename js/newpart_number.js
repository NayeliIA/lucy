// -------------------------------------------- Funciones de procesamiento --------------------------------------------------------------
// Coordenas para TPs
let TP1X =  1261//161//188
let TP1Y = 115//838//830
let TP2X = 918//510
let TP2Y = 127//416
let TP3X = 407//1083
let TP3Y = 134//513

async function recortaTP1(){
    //TP1, En la spec de tesla tiene el mismo tamaño que canvande
    contextcanvastp1.drawImage(fullimage,TP1X,TP1Y,98,318,0,0,contextcanvastp1.canvas.width,contextcanvastp1.canvas.height);
    await Analiza(canvastp1,28)
    logresult(28,statusx)
   // if(statusx=='0'){cuadrante_errorarray[0]=1} //-----Guardian
    contextfullimage.strokeStyle="#76FF03"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TP1X,TP1Y,98,318) //Se colocan coordenadas y tamaño de canvas ¨Canvande¨  
}
async function recortaTP2(){
    //TP2
    contextcanvastp2.drawImage(fullimage,TP2X,TP2Y,100,325,0,0,contextcanvastp2.canvas.width,contextcanvastp2.canvas.height);
    await Analiza(canvastp2,29)
    logresult(29,statusx)
    //if(statusx=='0'){cuadrante_errorarray[1]=1} //-----Guardian
    contextfullimage.strokeStyle="#76FF03"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TP2X,TP2Y,100,325)//Dibuja rectangulo en canvas2*/
}
async function recortaTP3(){
    //TP3
    contextcanvastp3.drawImage(fullimage,TP3X,TP3Y,102,317,0,0,contextcanvastp3.canvas.width,contextcanvastp3.canvas.height);
    await Analiza(canvastp3,30)
    logresult(30,statusx)
    //if(statusx=='0'){cuadrante_errorarray[2]=1} //-----Guardian
    contextfullimage.strokeStyle="#76FF03"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TP3X,TP3Y,102,317)//Dibuja rectangulo en canvas2
}

function evalTP(point) { //Evalua la matriz de logsave 
    let valtus  //Variable que guarda el valor que se almacena en el Array
    return new Promise(async resolve => {
        switch (point) {
            case 1:
                //Cuadrante 1 
                cuadranteArray[0] = logsave[1]
                valtus = cuadranteArray.some((e) => e == "0") // funcion para buscar dentro de un array solo un valor 
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(1, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                cuadranteArray[1] = logsave[2]
                valtus = cuadranteArray.some((e) => e == "0") // funcion para buscar dentro de un array solo un valor 
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(2, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                cuadranteArray[2] = logsave[3]
                valtus = cuadranteArray.some((e) => e == "0") // funcion para buscar dentro de un array solo un valor 
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(11, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                cuadranteArray[3] = logsave[4]
                valtus = cuadranteArray.some((e) => e == "0") // funcion para buscar dentro de un array solo un valor 
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(12, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                cuadranteArray[4] = logsave[5]
                valtus = cuadranteArray.some((e) => e == "0") // funcion para buscar dentro de un array solo un valor 
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(23, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                cuadranteArray[5] = logsave[6]
                valtus = cuadranteArray.some((e) => e == "0") // funcion para buscar dentro de un array solo un valor 
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(28, valtus) //manda llamar y los pinta rojo o verde

                cuadranteArray = [] //Limpia matriz de trabajo
                break

            case 2:
                //Cuadrante 2
                cuadranteArray[0] = logsave[7]
                valtus = cuadranteArray.some((e) => e == "0") // funcion para buscar dentro de un array solo un valor 
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(3, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                cuadranteArray[1] = logsave[8]
                valtus = cuadranteArray.some((e) => e == "0") // funcion para buscar dentro de un array solo un valor 
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(4, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                cuadranteArray[2] = logsave[9]
                valtus = cuadranteArray.some((e) => e == "0") // funcion para buscar dentro de un array solo un valor 
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(9, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                cuadranteArray[3] = logsave[10]
                valtus = cuadranteArray.some((e) => e == "0") // funcion para buscar dentro de un array solo un valor 
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(10, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                cuadranteArray[4] = logsave[11]
                valtus = cuadranteArray.some((e) => e == "0")
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(24, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                cuadranteArray[5] = logsave[12]
                valtus = cuadranteArray.some((e) => e == "0")
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(29, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                break

            case 3:
                //Cuadrante 3
                cuadranteArray[0] = logsave[13]
                valtus = cuadranteArray.some((e) => e == "0")
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(5, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                cuadranteArray[1] = logsave[14]
                valtus = cuadranteArray.some((e) => e == "0")
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(6, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                cuadranteArray[2] = logsave[15]
                valtus = cuadranteArray.some((e) => e == "0")
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(7, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                cuadranteArray[3] = logsave[16]
                valtus = cuadranteArray.some((e) => e == "0")
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(8, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                cuadranteArray[4] = logsave[17]
                valtus = cuadranteArray.some((e) => e == "0")
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(25, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                cuadranteArray[5] = logsave[18]
                valtus = cuadranteArray.some((e) => e == "0")
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(30, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                break
            case 4:
                //Cuadrante 4
                cuadranteArray[0] = logsave[19]
                valtus = cuadranteArray.some((e) => e == "0")
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(18, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                cuadranteArray[1] = logsave[20]
                valtus = cuadranteArray.some((e) => e == "0")
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(17, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                cuadranteArray[2] = logsave[21]
                valtus = cuadranteArray.some((e) => e == "0")
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(27, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo
                break
            case 5:
                //Cuadrante 5
                cuadranteArray[0] = logsave[22]
                valtus = cuadranteArray.some((e) => e == "0")
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(16, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                cuadranteArray[1] = logsave[23]
                valtus = cuadranteArray.some((e) => e == "0")
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(15, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                cuadranteArray[2] = logsave[24]
                valtus = cuadranteArray.some((e) => e == "0")
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(19, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                cuadranteArray[3] = logsave[25]
                valtus = cuadranteArray.some((e) => e == "0")
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(20, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                cuadranteArray[4] = logsave[26]
                valtus = cuadranteArray.some((e) => e == "0")
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(26, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo
                break
            case 6:
                //Cuadrante 6
                cuadranteArray[0] = logsave[27]
                valtus = cuadranteArray.some((e) => e == "0")
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(14, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                cuadranteArray[1] = logsave[28]
                valtus = cuadranteArray.some((e) => e == "0")
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(13, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo
                break
            case 7:
                //Cuadrante 7 
                cuadranteArray[0] = logsave[29]
                valtus = cuadranteArray.some((e) => e == "0")
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(21, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                cuadranteArray[1] = logsave[30]
                valtus = cuadranteArray.some((e) => e == "0")
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(22, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                //La evaluacion de todo el array se hara hasta el final del ultimo case
                //logsave[27] = ('1') //Dispensado pendiente de revisar 
                //turno 1
                logsave.fill('1')

                let resultadofinal = logsave.some((e) => e == "0")
                //console.log(logsave)
                //let hora = 23
                if (resultadofinal == false) {
                    pass()
                    //passturno() //tiene status
                    console.log("Unit---> Pass")
                } else {
                    fail()
                    //failturno()

                    console.log("Unit---> Fail")
                }
                resultado = resultadofinal
                break
            default:
        }//fin de switch

        resolve('resolved')
    })
}

function plc_responseNew(logsave){
    return new Promise(async resolve =>{
        porcentajeArray= 
        ""+snr+"\nCuadrante :1\n"+
        "TA1-:  "+"status :"+logsave[1]+", "+"percent -->  "+porcentajeArray[1]*100+"(%)   "  + `IA Inspection : ${IAdesition[1] == 0 ? 'Fail' :'Pass' } ` + "\n" + 
        "TA2-:  "+"status :"+logsave[2]+", "+"percent -->  "+porcentajeArray[2]*100+"(%)  "   +  `IA Inspection : ${IAdesition[2] == 0 ? 'Fail' :'Pass' } ` + "\n"  +
        "TA11-: "+"status :"+logsave[3]+", "+"percent -->  "+porcentajeArray[11]*100+"(%)\n"  +  
        "TA12-: "+"status :"+logsave[4]+", "+"percent -->  "+porcentajeArray[12]*100+"(%)   " + `IA Inspection: ${IAdesition[12] == 0 ? 'Fail' :'Pass' } ` + "\n" + 
        "TB1-:  "+"status :"+logsave[5]+", "+"percent -->  "+porcentajeArray[23]*100+"(%)   " +  `IA Inspection: ${IAdesition[23] == 0 ? 'Fail' :'Pass' } ` + "\n" + 
        "TP1-:  "+"status :"+logsave[6]+", "+"percent -->  "+porcentajeArray[28]*100+"(%)\n\n" +      
        //Cuadrante 2 
                "Cuadrante :2\n"+
        "TA3-:  "+"status :"+logsave[7]+",  "+"percent -->  "+porcentajeArray[3]*100+"(%)   " + `IA Inspection: ${IAdesition[3] == 0 ? 'Fail' :'Pass' } ` + "\n" +
        "TA4-:  "+"status :"+logsave[8]+",  "+"percent -->  "+porcentajeArray[4]*100+"(%)   " + `IA Inspection: ${IAdesition[4] == 0 ? 'Fail' :'Pass' } ` + "\n" +
        "TA9-:  "+"status :"+logsave[9]+",  "+"percent -->  "+porcentajeArray[9]*100+"(%)   " + `IA Inspection: ${IAdesition[9] == 0 ? 'Fail' :'Pass' } ` + "\n" +
        "TA10-: "+"status :"+logsave[10]+",  "+"percent -->  "+porcentajeArray[10]*100+"(%)  " + `IA Inspection: ${IAdesition[10] == 0 ? 'Fail' :'Pass' } ` + "\n" +
        "TB2-:  "+"status :"+logsave[11]+",  "+"percent -->  "+porcentajeArray[24]*100+"(%) " + `IA Inspection: ${IAdesition[24] == 0 ? 'Fail' :'Pass' } ` + "\n\n" +
        "TP2-:  "+"status :"+logsave[12]+", "+"percent -->  "+porcentajeArray[29]*100+"(%)\n\n" +  
        // Cuadrante3
                "Cuadrante :3\n"+
        "TA5-: "+"status :"+logsave[13]+", "+"percent -->  "+porcentajeArray[5]*100+"(%)   " + `IA Inspection : ${IAdesition[5] == 0 ? 'Fail' :'Pass' } ` + "\n" + // valor ternario que se utiliza para la toma de desicion en una cadena
        "TA6-: "+"status :"+logsave[14]+", "+"percent -->  "+porcentajeArray[6]*100+"(%)   " + `IA Inspection : ${IAdesition[6] == 0 ? 'Fail' :'Pass' } ` + "\n" +
        "TA7-: "+"status :"+logsave[15]+", "+"percent -->  "+porcentajeArray[7]*100+"(%)   " + `IA Inspection : ${IAdesition[7] == 0 ? 'Fail' :'Pass' } ` + "\n" + 
        "TA8-: "+"status :"+logsave[16]+", "+"percent -->  "+porcentajeArray[8]*100+"(%)   " + `IA Inspection : ${IAdesition[8] == 0 ? 'Fail' :'Pass' } ` + "\n" + 
        "TB3-: "+"status :"+logsave[17]+", "+"percent -->  "+porcentajeArray[25]*100+"(%)  " + `IA Inspection : ${IAdesition[25] == 0 ? 'Fail' :'Pass' } ` + "\n\n" + 
        "TP3-:  "+"status :"+logsave[18]+", "+"percent -->  "+porcentajeArray[30]*100+"(%)\n\n" +       
        // Cuadrante 4
                "Cuadrante :4\n"+
        "TA17-: "+"status :"+logsave[19]+", "+"percent -->  "+porcentajeArray[17]*100+"(%)  " + `IA Inspection : ${IAdesition[17] == 0 ? 'Fail' :'Pass' } ` + "\n" +
        "TA18-: "+"status :"+logsave[20]+", "+"percent -->  "+porcentajeArray[18]*100+"(%)  "+  `IA Inspection: ${IAdesition[18] == 0 ? 'Fail' :'Pass' } ` +  "\n" + 
        "TG1-:  "+"status :"+logsave[21]+", "+"percent -->  "+porcentajeArray[27]*100+"(%)  " +  `IA Inspection: ${IAdesition[27] == 0 ? 'Fail' :'Pass' } ` +  "\n\n" + 
                // Cuadrante 5 
                 "Cuadrante :5\n"+
        "TA15-: "+"status :"+logsave[22]+", "+"percent -->  "+porcentajeArray[15]*100+"(%)  " + `IA Inspection : ${IAdesition[15] == 0 ? 'Fail' :'Pass' } ` + "\n" +
        "TA16-: "+"status :"+logsave[23]+", "+"percent -->  "+porcentajeArray[16]*100+"(%)  " + `IA Inspection : ${IAdesition[16] == 0 ? 'Fail' :'Pass' } ` + "\n" +
        "TA19-: "+"status :"+logsave[24]+", "+"percent -->  "+porcentajeArray[19]*100+"(%)\n"+
        "TA20-: "+"status :"+logsave[25]+", "+"percent -->  "+porcentajeArray[20]*100+"(%)\n"+
        "TB4-:  "+"status :"+logsave[26]+", "+"percent -->  "+porcentajeArray[26]*100+"(%)\n\n"+
                 // Cuadrante 6
                 "Cuadrante :6\n"+
        "TA13-: "+"status :"+logsave[27]+", "+"percent -->  "+porcentajeArray[13]*100+"(%)   "+ `IA Inspection : ${IAdesition[13] == 0 ? 'Fail' :'Pass' } ` + "\n" +
        "TA14-: "+"status :"+logsave[28]+", "+"percent -->  "+porcentajeArray[14]*100+"(%)   "+ `IA Inspection : ${IAdesition[14] == 0 ? 'Fail' :'Pass' } ` + "\n\n" +
                 // Cuadrante 7
                 "Cuadrante :7\n"+
        "TA21-: "+"status :"+logsave[29]+", "+"percent -->  "+porcentajeArray[21]*100+"(%) "+ `IA Inspection : ${IAdesition[21] == 0 ? 'Fail' :'Pass' } ` + "\n" +
        "TC-:   "+"status :"+logsave[30]+", "+"percent -->  "+porcentajeArray[22]*100+"(%) "+ `IA Inspection : ${IAdesition[22] == 0 ? 'Fail' :'Pass' } ` + "\n\n" +
        "#"


   logsave=
    ""+snr+"&TA1-"+mtxw[1]*100+"%"+","+logsave[1]+
    "&TA2-"+mtxw[2]*100+"%"+","+logsave[2]+//porcentajeArray[2]+"%"+           
    "&TA11-"+mtxw[11]*100+"%"+","+logsave[3]+//porcentajeArray[3]+"%"+
    "&TA12-"+mtxw[12]*100+"%"+","+logsave[4]+//porcentajeArray[4]+
    "&TB1-"+mtxw[23]*100+"%"+","+logsave[5]+//porcentajeArray[5]+
    "&TP1-"+mtxw[28]*100+"%"+","+logsave[6]+//porcentajeArray[5]+
            //Cuadrante 2 
    "&TA3-"+mtxw[3]*100+"%"+","+logsave[7]+//porcentajeArray[6]+
    "&TA4-"+mtxw[4]*100+"%"+","+logsave[8]+//porcentajeArray[7]+
    "&TA9-"+mtxw[9]*100+"%"+","+logsave[9]+//porcentajeArray[8]+
    "&TA10-"+mtxw[10]*100+"%"+","+logsave[10]+//porcentajeArray[9]+
    "&TB2-"+mtxw[24]*100+"%"+","+logsave[11]+//porcentajeArray[10]+
    "&TP2-"+mtxw[29]*100+"%"+","+logsave[12]+//porcentajeArray[5]+
            // Cuadrante3
    "&TA5-"+mtxw[5]*100+"%"+","+logsave[13]+//porcentajeArray[11]+
    "&TA6-"+mtxw[6]*100+"%"+","+logsave[14]+//porcentajeArray[12]+
    "&TA7-"+mtxw[7]*100+"%"+","+logsave[15]+//porcentajeArray[13]+
    "&TA8-"+mtxw[8]*100+"%"+","+logsave[16]+//porcentajeArray[14]+
    "&TB3-"+mtxw[25]*100+"%"+","+logsave[17]+//porcentajeArray[15]+
    "&TP3-"+mtxw[30]*100+"%"+","+logsave[18]+//porcentajeArray[5]+

    "&TA17-"+mtxw[17]*100+"%"+","+logsave[19]+//porcentajeArray[16]+
    "&TA18-"+mtxw[18]*100+"%"+","+logsave[20]+//porcentajeArray[17]+
    "&TG1-"+mtxw[27]*100+"%"+","+logsave[21]+

    "&TA15-"+mtxw[15]*100+"%"+","+logsave[22]+//porcentajeArray[18]+
    "&TA16-"+mtxw[16]*100+"%"+","+logsave[23]+//porcentajeArray[19]+
    "&TA19-"+mtxw[19]*100+"%"+","+logsave[24]+//porcentajeArray[20]+
    "&TA20-"+mtxw[20]*100+"%"+","+logsave[25]+//porcentajeArray[21]+
    "&TB4-"+mtxw[26]*100+"%"+","+logsave[26]+//porcentajeArray[22]+

    "&TA13-"+mtxw[13]*100+"%"+","+logsave[27]+//porcentajeArray[23]+
    "&TA14-"+mtxw[14]*100+"%"+","+logsave[28]+//porcentajeArray[24]+
    
    "&TA21-"+mtxw[21]*100+"%"+","+logsave[29]+//porcentajeArray[25]+
    "&TC-"+mtxw[22]*100+"%"+","+logsave[30]+//porcentajeArray[26]+"%"+
    "#"

                
    //logsave=""+snr+"&TA0,1&TA1,1&TA2,1&TA3,1&TA4,1&TA5,1&TA6,1&TA7,1&TA8,1&TA9,1&TA10,1&TA11,1&TA12,1&TA13,1&TA14,1&TA15,1&TA16,1&TA17,1&TA18,1&TA19,1&TA20,1&TA21,1&TA22,1&TA23,1&TA24,1&TA25,1&TA26,0#"
    
    //console.log(logsave)

    /*mtxw= 
    ""+snr+"&TA1,"+mtxw[1]*100+"%"+","+logsave[1]+","+
    "&TA2,       "+mtxw[2]*100+"%"+","+logsave[2]+","+
    "&TA11,      "+mtxw[11]*100+"%"+","+logsave[2]+","+
    "&TA11,      "+mtxw[11]*100+"%"+","+logsave[2]+","+*/

    logsaving(snfile,porcentajeArray,logsave)
    //logsaving(snfile,porcentajeArray,resultado)
    socket.emit('plc_response',logsave)
    resolve('resolved')})
    }