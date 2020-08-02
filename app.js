const argv = require('./config/yargs').argv;
const colors = require('colors/safe');


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')


let comando = argv._[0];

switch (comando) {
    case 'listar':

        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch(error => console.log(error))


        console.log('crear');
        break;
    default:
        console.log('Comando no reconocido');

}



//console.log(process.argv);

//let argv2 = process.argv;

//console.log(argv.base);



/*let parametro = argv[2];
let base = parametro.split('=')[1]

console.log(base);*/


/*
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {

        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })

.command('crear', 'Genera un archivo con la tabla de multiplicar', {

    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
})





.help()
    .argv;
*/