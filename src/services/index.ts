import UserService from "./UserService";

class ServiceFactory {
    constructor() {}

    private static userServiceInstance: UserService | null = null;

    static getUserService(): UserService {
        if(!ServiceFactory.userServiceInstance) 
            ServiceFactory.userServiceInstance = new UserService();

        return ServiceFactory.userServiceInstance;
    }
}

export default ServiceFactory;