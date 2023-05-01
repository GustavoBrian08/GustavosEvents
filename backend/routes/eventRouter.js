const EventController = require('../controllers/EventController');

const getRouter = (app) => {
    app.get('/', async (req, res) => {
        try {
            const event = await EventController.getEvent();
    
            res.status(200).send(event).json();
        } catch(error) {
            res.status(500).send(error.message);
        }
    });
}

const postRouter = (app) => {
    app.post('/', async (req, res) => {

        try {
            const event = await EventController.postEvent(req.body);
            
            if(event) {
                res.status(201).send(event).json();
            }
            
        } catch(error) {
            res.status(500).send(error.message);
        }
    });
}

const patchRouter = (app) => {
    app.patch('/:id', async (req, res) => {
        try {
            const id = req.params.id;
            const event = await EventController.patchEvent(id, req.body);
            
            res.status(200).send(event).json();
        } catch(error) {
            res.status(500).send(error.message);
        }
    });
}

const deleteRouter = (app) => {
    app.delete('/:id', async (req, res) => {
        try {
            const id = req.params.id;
            const event = await EventController.deleteEvent(id);

            res.status(200).send(event).json();
        } catch(error) {
            res.status(500).send(error.message);
        }
    });
}

const EventRoutes = (app) => {
    getRouter(app);
    postRouter(app);
    patchRouter(app);
    deleteRouter(app);
}

module.exports = EventRoutes;