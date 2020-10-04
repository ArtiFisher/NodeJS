import logger from './logger';

export const logArgs = (target: any, key: string, descriptor: PropertyDescriptor) => ({
    ...descriptor,
    value() {
        logger.info(`Invoked ${target.constructor.name}::${key}(${[...arguments]})`);
        return descriptor.value.apply(this, arguments);
    }
});

export const logErrors = (target: any, key: string, descriptor: PropertyDescriptor) => ({
    ...descriptor,
    async value() {
        try {
            return await descriptor.value.apply(this, arguments);
        } catch (err) {
            logger.error(`Failed invocation of ${target.constructor.name}::${key}(${[...arguments]}). Error: ${err.message || err}.`);
            throw err;
        }
    }
});
