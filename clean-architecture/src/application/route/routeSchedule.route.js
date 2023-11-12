const express = require('express');

const RouteScheduleController = require('../controller/routeSchedule.controller');
const localCache = require('../../infrastructure/config/localCache');

const router = express.Router();
const routeScheduleController = new RouteScheduleController(localCache);

router.get('/', routeScheduleController.getAllRouteSchedules);
router.post('/', routeScheduleController.createRouteSchedule);

module.exports = router;