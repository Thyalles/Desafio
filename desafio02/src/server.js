import 'dotenv/config';
import Fastify from 'fastify';
import cors from '@fastify/cors';
import userRoutes from './routes/userRoutes.js';

const fastify = Fastify({ logger: true });

fastify.register(cors, {
    origin: '*',
    methods: ['GET'],
});

fastify.register(userRoutes);

const PORT = process.env.PORT || 3000;

const start = async () => {
    try{
        await fastify.listen({ port: PORT });
        fastify.log.info(`Server running at http://localhost:${fastify.server.address().port}`);
    }catch(err){
        fastify.log.error(err);
        process.exit(1);
    }
};

start();