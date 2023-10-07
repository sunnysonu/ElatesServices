import { JwtPayload } from 'jsonwebtoken';

enum Role {
    SuperAdmin = 'superadmin',
    Admin = 'admin',
    User = 'user',
}

interface QueryOptions {
    sort?: Object,
    pagination?: {
        skip: number,
        limit: number
    }
}

interface SuccessResponse {
    statusCode: number,
    message: string
}

interface ErrorResponse {
    statusCode: number,
    error: Object
}

interface JWTData extends JwtPayload {
    userId: string,
}

export { Role, QueryOptions, SuccessResponse, ErrorResponse, JWTData };