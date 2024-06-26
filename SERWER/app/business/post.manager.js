import postDAO from "../DAO/postDAO"

const create = (ctx) => {
    const query = async () => {
        let res = postDAO.query();
        if(res) return res;
    }

    const get = async (id) => {
        let res = await postDAO.get(id);
        if(res) return res;
    }

    const createNewOrUpdate = async (data) => {
        let res = await postDAO.createNewOrUpdate(data);
        if(res) return res;
    }

    const drop = async (id) => {
        let res = await postDAO.drop(id);
        if(res) return res;
    }

    return {query, get, createNewOrUpdate, drop};
};

export default { create };
