import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const usersData = JSON.parse(fs.readFileSync(path.join(__dirname, '../../data/mock-users.json'), 'utf-8'));

//Filtrar e Paginar os usuários.
export function findUsers({q, role, is_active, page, page_size}) {
    let filteredUsers = usersData;

    //Filtrar por busca(name ou email)
    if(q){
        const query = q.toLowerCase();
        filteredUsers = filteredUsers.filter(user => 
            user.name.toLowerCase().includes(query) || user.email.toLowerCase().includes(query));
    }

    //Filtrar por role
    if(role){
        filteredUsers = filteredUsers.filter(user => user.role === role);
    }

    //Filtrar por is_active
    if(is_active !== undefined){
        const isActiveBool = is_active === 'true' || is_active === true;
        filteredUsers
    }

    //Paginação
    const total = filteredUsers.length;
    const startIndex = (page - 1) * page_size;
    const endIndex = startIndex + page_size;
    const paginatedUsers = filteredUsers.slice(startIndex, endIndex);

    return{
        data: paginatedUsers,
        pagination:{
            total,
            page,
            page_size,
            total_pages: Math.ceil(total / page_size)
        }
    }
}

//Encontrar usuário por ID
export function findUserById(id){
    return usersData.find(user => user.id === parseInt(id));
}

