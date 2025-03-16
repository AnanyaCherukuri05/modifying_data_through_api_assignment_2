const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const menuRoutes = require('./routes/menu');

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
mongoURI='mongodb+srv://ananyacherukuri5:tG2aoHvSbZHusZ3e@cluster0.tjmvg.mongodb.net/data?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/menu', menuRoutes);

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});