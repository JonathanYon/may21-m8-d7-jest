import app from "./server.js";
import mongoose from "mongoose";

const port = process.env.PORT || 3001;
const mongoUrl = process.env.MONGO_URL;

// mongoose
//   .connect(mongoUrl, {
//     useNewUrlParser: true,
//   })
//   .then(() => {
//     console.log("🍀 Connected to MongoDB");
//     app.listen(port, () => {
//       console.log("🤘 Server listening on port " + port);
//     });
//   });

app.listen(port, async () => {
  try {
    await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`✅ Server is running on ${port}  and connected to db`);
  } catch (error) {
    console.log("Db connection is failed ", error);
  }
});

app.on("error", (error) =>
  console.log(`❌ Server is not running due to : ${error}`)
);
