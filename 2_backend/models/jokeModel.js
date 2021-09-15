import mongoose from 'mongoose';
const { Schema } = mongoose;

const jokeSchema = new Schema({
  random_joke: {
    type: String,
    required: true,
  },
});

const Joke = mongoose.model('joke', jokeSchema);
export default Joke;
