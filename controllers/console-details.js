'use strict';
import logger from "../utils/logger.js";
import consoleStore from "../models/console-store.js";

const consoleDetails = {
    createView(request, response) {
        const collectionId = request.params.id;
        logger.info("Details page loading for collection: " + collectionId);

        const viewData = {
            title: "Console Details",
            collection: consoleStore.getCollection(collectionId),
        };
        response.render('console-details', viewData);
    },
};
export default consoleDetails;