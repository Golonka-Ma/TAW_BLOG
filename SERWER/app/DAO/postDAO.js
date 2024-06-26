import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import mongoConverter from '../service/mongoConverter';
import _ from 'lodash';

const modelName = "db_post";
const postSchema = new mongoose.Schema({
    title: { type: String },
    text: { type: String },
    image: { type: String }
}, {
    collection: modelName
});
postSchema.plugin(uniqueValidator);

const Model = mongoose.model(modelName, postSchema);

const query = async () => {
    const res = await Model.find({});
    if (res) return mongoConverter(res);
}

const get = async (id) => {
    return Model.findOne({ _id: id }).then((res) => {
        if (res) return mongoConverter(res);
    });
}

const createNewOrUpdate = (data) => {
    return Promise.resolve().then(() => {
        if (!data.id) {
            return new Model(data).save().then((res) => {
                if (res) return mongoConverter(res);
            });
        } else {
            return Model.findByIdAndUpdate(data.id, _.omit(data, ['id', '_id']), { new: true }).then((res) => {
                if (res) return mongoConverter(res);
            });
        }
    });
}

const drop = (id) => {
    return Model.deleteOne({ _id: id }).then((res) => {
        if (res.deletedCount > 0) return { message: "Post deleted successfully" };
        else throw new Error("Post not found");
    });
}

export default { query, get, createNewOrUpdate, drop, Model };
