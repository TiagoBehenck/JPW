import { Service } from "@tsed/di";

const Datastore = require('nedb');
const db = new Datastore({ filename: 'documents.json' });
db.loadDatabase((err) => console.log(err || 'DB loaded with success.'))

@Service()
export class NeDBStorage {

    async save(doc) {
        db.insert(doc, (err, doc) => console.log(err || doc));
    }
}