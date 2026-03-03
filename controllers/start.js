'use strict';
import logger from "../utils/logger.js";

const start = {
    createView(request, response) {
        logger.info("Start page loading!");
        const viewData = {
            title: "Welcome to Console Archive",
        };
        response.render('start', viewData);
    },
};
export default start;