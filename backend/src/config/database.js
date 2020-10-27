const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/mymoney'
    , { useNewUrlParser: true })

mongoose.Error.messages.general.required = "L'attribut '{PATH}' est obligatoire."
mongoose.Error.messages.Number.min =
    "La valeur '{VALUE}' informée est inférieure à la limite minimale de '{MIN}'."
mongoose.Error.messages.Number.max =
    "La valeur '{VALUE}' informée est supérieure à la limite maximale de '{MAX}'."
mongoose.Error.messages.String.enum =
    "'{VALUE}' n'est pas valable pour l'attribut '{PATH}'."