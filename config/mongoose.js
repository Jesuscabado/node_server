import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb://localhost:27017/petanca';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log ('conexion satisfactoria a MongoDB'))
    .catch((error)=> console.error('Error al conectarse a MongoDB: ', error));

    export default mongoose;
