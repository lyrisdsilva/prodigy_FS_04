const mongoose = require('mongoose');

const url = `mongodb+srv://lyrisdsilva:1axTOpmqNy3qsehf@cluster0.mmeilze.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => console.log('Connected to DB')).catch((e)=> console.log('Error', e))