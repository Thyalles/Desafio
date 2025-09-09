import * as userService from '../services/userService.js';

//GET /users
export function getUserProfile(request, reply) {
    const {q, role, is_active } = request.query;
    const page = parseInt(request.query.page) || 1;
    const pageSize = parseInt(request.query.page_size) || 10;

    const page_size = Math.min(pageSize, 50);

    const result = userService.findUsers({ q, role, is_active, page, page_size });
    reply.send(result);
}

//GET /users/{id}
export function getUserById(request, reply) {
    const { id } = request.params;
    const user = userService.findUserById(id);

    if(user){
        reply.send(user);
    }else{
        reply.code(404).send({
            error: "User not found",
            code: 404
        });
    }
}