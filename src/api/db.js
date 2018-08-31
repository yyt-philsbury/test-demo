import LocalDB from 'local-db'

var submissionTable = new LocalDB('submissions');
var globalId = 0;

var insert = (data) => ({
    submissionTable.insert(data);
})

var read = (id) => ({
    submissionTable.query({id:{$eq:{id}}})
})

var deleteAll = () {
    submissionTable.drop();
}

var getUniqueId = () {
    let result
    while ((result = read(++globalId)) != null);
    return result;
}

export { insert, read, deleteAll, getUniqueId };