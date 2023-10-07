import { v1 as uuidv1 } from 'uuid';

const generateId = (model: string): string => {
    if (!model) {
        throw new Error("Invalid Model Name");
    }
    const modelCode: string = model.toLowerCase().slice(0, 3);
    return `${modelCode}-${uuidv1()}`;
};

export default generateId;