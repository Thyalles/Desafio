import { getUserProfile, getUserById } from '../controllers/userController.js';

async function userRoutes(fastify, options) {
    fastify.get('/users', getUserProfile);
    fastify.get('/users/:id', getUserById);
}

export default userRoutes;