'use strict';
import logger from "../utils/logger.js";
import consoleStore from "../models/console-store.js";

const dashboard = {
    createView(request, response) {
        logger.info("Dashboard loading!");
        const viewData = {
            title: "Manufacturer Dashboard",
            collections: consoleStore.getAllCollections(),
        };
        response.render('dashboard', viewData);
    },
};
export default dashboard;