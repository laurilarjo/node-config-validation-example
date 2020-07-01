import * as Hapi from '@hapi/hapi';
import { config } from './config/config'

let port = config.PORT;
console.log('From index.ts, port: ' + port);

const init = async () => {

    const server = Hapi.server({
        port: port,
        host: 'localhost'
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
