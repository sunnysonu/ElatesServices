import { Response } from 'express';

export const respondUnauthorized = (res: Response, err?: string) => {
    res.status(401);
    res.send({
        message: err ?? `Unauthorized`
    })
}
