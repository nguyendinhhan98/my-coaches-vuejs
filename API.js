const axios = require("axios");
axios
  .post("https://my-coaches-default-rtdb.firebaseio.com/coaches.json", {
    areas: ["Frontend"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, suscipit cumque asperiores possimus dignissimos quis molestiae corporis ratione expedita sint. Error temporibus fugiat commodi repellendus animi cum quos tempore? Saepe.",
    firstName: "Lap",
    lastName: "Dao",
    hourlyRate: 200,
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error));
