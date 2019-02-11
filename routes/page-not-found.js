const path = require('path')support
const router = express.Router();

router.use('/',(req, resp, next) => {
 resp.status(404).render('page-not-found');
});                           

module.exports = router;