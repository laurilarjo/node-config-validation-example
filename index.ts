import * as Hapi from '@hapi/hapi';
import * as dotenv from 'dotenv';

dotenv.config();
let port = process.env.PORT;
console.log(port);

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