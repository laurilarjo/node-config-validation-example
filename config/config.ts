import * as envalid from 'envalid';

const { str, email, bool, num, host } = envalid

const config = envalid.cleanEnv(process.env, {
    DATABASE_PASSWORD:      str({desc: 'Database pass for user-db', example: 'awodk9f32'}),
    ADMIN_EMAIL:            email({ default: 'admin@example.com' }),
    BOOLEAN_SETTING:        bool(),
    PORT:                   num(),
    STRING_SETTING_QUOTES:  str(),
    STRING_SETTING:         str(),
    NUMERICAL_SETTING:      num(),
    IP_ADDRESS:             host()
}, { strict: true });

console.log(config.ADMIN_EMAIL);
console.log(config.BOOLEAN_SETTING);
console.log(config.STRING_SETTING_QUOTES);
console.log(config.STRING_SETTING);
console.log(config.NUMERICAL_SETTING);
console.log(config.IP_ADDRESS);

export { config };
