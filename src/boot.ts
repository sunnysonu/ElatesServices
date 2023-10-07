import { 
    establishDatabaseConnection,
    initiateExpressApp,
    loadControllers,
    startServer,
} from './boot-services';

/* 
 * Author: Addapa Sunny
 */
const boot = () => {

    /* Establing Database Connection */

    establishDatabaseConnection();

    /* Initiating the Express App */

    const app = initiateExpressApp();

    /* Starting up the server */

    startServer(app);

    /* Loading Controller */

    loadControllers(app);
};

export default boot;