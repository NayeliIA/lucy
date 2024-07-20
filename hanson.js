//***************************************************** Setup de eventos a escuchar
require('events').EventEmitter.defaultMaxListeners = 20
//***************************************************** HTTPS server setup
//-----* Express inicia servidor / carpeta raiz
//------------------------------------Express inicia servidor 
const express = require('express')
const app = express()
const fs = require('fs')
clientesConectados = []
let isConnected = true
let disconnected = null
let startSequence
//const ImageDataURI = require('image-data-uri')
app.use(express.static(__dirname))//Carpeta de donde sirve / carpeta raiz public

const server = app.listen(8888, () => {
    console.log('Servidor web iniciado')
})
var fecha = Date.now().toString();


//-----* Filesystem module object
var fss = require('fs')
//-----* https module object
var https = require('https')

//***************************************************** Seccion Socket 
var io = require('socket.io')(server)

io.on('connection', (socket) => {

    socket.on('ejemplo', async function () {
        await socketfunction()
    })

})//close io.on

//***************************************************** Postgres module object
const { Pool } = require('pg')
postgresdb = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'Redsamuraix1.', //Redsamuraix1.
    database: 'sofia',
})
/*postgresdb.connect((err, client, release) => {
    if (err) {
      console.error('Error al conectar a la base de datos:', err.stack);
      return;
    }
    console.log('Conexión exitosa a la base de datos');
    release(); // Libera la conexión del pool
  });*/
let client
// release the client


//***************************************************** Files Handler
io.on('connection', (socket) => {
    socket.on('deletefile', function (path) {
        deletef(path);
    }); //Close socket

    socket.on('picsaving', async function (datauri, serial, sqty) {
        await savingpic(datauri, serial, sqty);
        console.log("recibe", serial, qty);
    });

    socket.on('logsaving', async function (sn, logsaving, logsave) { // Funcion de ejemplo borrar no importante
        savinglog(sn, logsaving, logsave)
    });
    socket.on('renombrasnr', function (snr) { // conexion con main_script
        renombraF(snr);
    });
    /*Socket BD
    socket.on('socketconection', async function (turno, status,day,fecha,semana,serial,point) { //datos del front
        await partn(turno, status,day,fecha,semana,serial);
      
        console.log("entre al socketconection y partn")
    }); //Close socket
*/
    /*socket.on('socketconection1', async function (turno, status,day,fecha,semana,point) { //datos del front
        await tasshow(turno, status,day,fecha,semana,point);
        console.log("entre al socketconection1 y tashow")
    }); //Close socket*/

    //agrupapass t2 se agrego
    socket.on('agrupapasst2', async function (datospf) {
        agrupapasst2(datospf.turno, datospf.status, datospf.day, datospf.fecha)
        console.log("entre a agrupapass t2")
    });



    socket.on('agrupardias', async function (datospfd) {
        agrupardias(datospfd.status, datospfd.day, datospfd.semana)
        console.log("entre a agrupar dias")
    });




    //agrupa fail se agrego
    socket.on('agrupafailt1', async function () {
        await agrupafailt1()
        console.log("entre a agrupafail t1")
    });
    //agrupa fail se agrego
    socket.on('agrupafailt2', async function () {
        await agrupafailt2()
        console.log("entre a agrupafail t2")
    });

    socket.on('abrir', async function () {
        await abrir()
        console.log("conectado")
    });

    socket.on('cerrar', async function () {
        await cerrar()
        console.log("desconectado")
    })

    socket.on('exp', async function () {
        await experiment()
        console.log("Experiment ...")
    })
})

async function deletef(path) {
    await deletefile(path);
}

async function deletefile(path) {

    return new Promise(async resolve => {

        netpath = path;
        fs.unlinkSync(netpath)
        console.log("Archivo borrado: " + netpath);

    });//Cierra Promise
}

//-----* Guarda imagen desde URI
async function savingpic(datauri, serial, sqty) {

    let filePath;
    const ImageDataURI = require('image-data-uri');
    return new Promise(async resolve => {
        //console.log("Variables:"+serial+' - '+sqty+'');// temporal para ver que esta rebiendo 

        //C:/Users/mayra_ayala/Documents/Aquiles/img/
        //C:/Users/gdl3_mds/myapp/timsamples/
        let filePath = 'C:/Users/nayeli_garcia/Desktop/projects/Lucy/lucy/timsamples/' + serial + '';//Ruta de las carpetas por serial
        let filevalidation = fs.existsSync(filePath);

        if (filevalidation) {

            filePath = '' + filePath + '/' + sqty + '';
            ImageDataURI.outputFile(datauri, filePath).then(res => console.log(res));
        }
        else {
            fs.mkdir(filePath, (error) => {
                if (error) {
                    console.log(error.message);//en caso de que el folder ya exista manda un error y evita hacer otro folder con el mismo nombre.
                }
                filePath = '' + filePath + '/' + sqty + '';
                ImageDataURI.outputFile(datauri, filePath).then(res => console.log(res));
                console.log("Directorio creado");
            });
        }
    });//Cierra Promise
}

//Funcion para renombrar carpeta F 
async function renombraF(serial) {
    fs.rename('C:/Users/nayeli_garcia/Desktop/projects/Lucy/lucy/timsamples/' + serial,
        'C:/Users/nayeli_garcia/Desktop/projects/Lucy/lucy/timsamples/' + serial + '_F',
        function (err) {
            if (err)
                console.log('Error de renombramiento');
        });
}

function savinglog(sn, logdata, logsave) {
    console.log("entre a la savinglog")
    let datoc = logsave.toString()
    let datoscadena = '\n' + logdata + datoc + '\n'
    let logpath = 'C:/Users/nayeli_garcia/Desktop/projects/Lucy/lucy/timsamples/' + sn + '/log.txt';
    console.log(logsave)
    fs.writeFile(logpath, datoscadena, function (err) {
        if (err) throw err;
    });
}
//-----------------------------QUERYS BD------------------------//
//agregar t1
/*
async function partn(turno, status, day,fecha,semana,serial) {

    console.log("entre a insertar")
    let pg = "INSERT INTO unidades VALUES (" + turno + ",'" + status + "','" + day + "','" + fecha + "'," + semana + ",'" + serial + "' )"
    console.log(pg)
    client.query(pg, (err, result) => {
        if (err) {
            return console.error('Error executing query', err.stack)
        }
       
        console.log(result.rows)
    })
   
    //})
}*/

async function agrupapasst2(turno, status, day, fecha) {
    console.log("bd connected")
    let up = "SELECT COUNT (*) FROM unidades WHERE turno = (" + turno + ") AND status = ('" + status + "') AND day = ('" + day + "') AND fecha = ('" + fecha + "') ";
    client
        .query(up)
        .then((result) => { io.emit('qtyP2', { result, turno, status, day, fecha }); })
        .catch((err) => console.error('Error executing query', err.stack))

}

async function agrupardias(status, day, semana) {
    console.log("bd connected")
    let upf = "SELECT COUNT (*) FROM unidades WHERE status = ('" + status + "') AND day = ('" + day + "')  AND semana =(" + semana + ") ";
    client
        .query(upf)
        .then((result) => { io.emit('qtyD', { result, status, day, semana }); })
        .catch((err) => console.error('Error executing query', err.stack))

}


async function abrir() {
    // return new Promise(async resolve => {
    client = await postgresdb.connect()
    //resolve('resolved');
    //})

}
async function cerrar() {
    return new Promise(async resolve => {
        client.end()
        client.release()
        //postgresdb.release()
        resolve('resolved');
    })

}
//experimento para saber los
async function experiment() {
    console.log("total", postgresdb.totalCount)
    console.log("idle", postgresdb.idleCount)
    console.log("clientes esperando", postgresdb.waitingCount)

}

//***************************************************** TCP/IP PLC TESLA
let plc_endresponse = 0
//const fs = require('fs'); // Incluimos el módulo 'fs' para operaciones del sistema de archivos

io.on('connection', (socket) => {

    socket.on('plc_response', function (result_matrix) {
        if (isConnected) {
            tcpWrite(result_matrix)
            console.log("seguimos conectados\n")
            console.log(result_matrix)
        } else {
            console.log("Estamos desconectados del PLC")
        }
    })

})

var net = require('net')
var tcpipserver = net.createServer(function (connection) {
    console.log('Cliente PLC conectado') //mensaje para saber que el cliente esta conectado 
    clientesConectados.push(connection) //se guardar al array todas las conexiones 
    connection.write('Handshake ok!\r\n')

    connection.on('data', function (data) {
        console.log("datos recibidos del plc: ", data.toString()) //se imprimen en el servidor los datos que recibe
        if (data.toString() == "hola") {
            setTimeout(() => {
                connection.write("enterado")
            }, 100)
        } else {
            startSequence = 0
            io.emit('Timsequence_start', data.toString());
        }
        console.log("Análisis en proceso...")
    })

    // Responde a PLC cuando termine inspeccion

    connection.on('end', () => {
        if (startSequence == 0) {
            isConnected = false
            let d = new Date();
            disconnected = d.getHours();
            console.log("PLC desconectado.. " + d);

            // Registra la fecha y hora de desconexión en un txt
            const logFilePath = 'C:/Users/nayeli_garcia/Desktop/projects/Lucy/lucy/logs/registro_desconexion_plc.txt';
            const logMessage = "PLC desconectado a las "+d.toLocaleString()+"\n"

            fs.appendFile(logFilePath, logMessage, (err) => {
                if (err) {
                    console.error('Error al escribir en el archivo de registro:', err);
                } else {
                    console.log('Desconexión del PLC registrada con éxito.');
                }
            });
        }
    })
})


tcpipserver.listen(40000, function () {
    console.log('Puerto PLC 40000 escuchando...')
})

function tcpWrite(result_matrix) {
    startSequence = 1
    clientesConectados.forEach(socket => { //busca la conexion
        matrixtostring = result_matrix.toString()
        console.log('hola estamos en la conexion de nuevo para poder escribir ', startSequence)
        socket.write(matrixtostring)  //envia los datos al plc

    });

}
