const EventRepository = require('../repositories/EventRepository');
const EventModel = require('../models/eventModel');

class EventController {

    static async getEvent() {
        try {
            const events = await EventRepository.getData();
            return events;
        } catch(error) { console.log(error.message); }
    }

    static async postEvent(body) {
        try {
            const model = new EventModel(body);
            const event = await EventRepository.postData(model.data);
            
            return event;
        } catch(error) {
            console.log(error.message);
            return null;
        }   
    }

    static async patchEvent(id, body) {
        try {
            const model = new EventModel(body);
            const event = await EventRepository.updateData(id, model.data);

            return event;
        } catch(error) {
            console.log(error.message);
            return null;
        }
    }

    static async deleteEvent(id) {
        try {
            const event = await EventRepository.deleteData(id);

            return event;
        } catch(error) {
            console.log(error.message);
        }
    }
}

module.exports = EventController;

