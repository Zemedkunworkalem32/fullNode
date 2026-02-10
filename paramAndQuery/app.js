import express from "express";

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;

const mockUsers = [
  { id: 1, username: "Natoli", displayName: "Tolessa" },
  { id: 2, username: "abebe", displayName: "Abebe Kebede" },
  { id: 3, username: "Netsanet", displayName: "Tesfaye Getachew" },
  { id: 4, username: "mehari", displayName: "Tesema Mekonnen" },
  { id: 5, username: "samuel", displayName: "Samuel Desta" },
  { id: 6, username: "selam", displayName: "Selamawit Tadesse" },
  { id: 7, username: "miki", displayName: "Mikias Abate" },
  { id: 8, username: "hana", displayName: "Hana Gebre" },
  { id: 9, username: "yonas", displayName: "Yonas Solomon" },
  { id: 10, username: "fikir", displayName: "Fikirte Alemu" },
  { id: 11, username: "daniel", displayName: "Daniel Haile" },
  { id: 12, username: "robel", displayName: "Robel Kassahun" },
  { id: 13, username: "betty", displayName: "Betelhem Worku" },
  { id: 14, username: "kaleb", displayName: "Kaleb Tesfaye" },
  { id: 15, username: "lily", displayName: "Lily Abraham" },
  { id: 16, username: "nahom", displayName: "Nahom Yohannes" },
  { id: 17, username: "sara", displayName: "Sara Yared" },
  { id: 18, username: "dawit", displayName: "Dawit Asfaw" },
  { id: 19, username: "tsion", displayName: "Tsion Berhanu" },
  { id: 20, username: "eyob", displayName: "Eyob Amanuel" },
];

app.get("/api/users", (req, res) => {
  console.log("QUERY RECEIVED:", req.query);

  const { filter, value } = req.query;

  // return all users if filter or value is missing
  if (!filter || !value) {
    return res.send(mockUsers);
  }

  // filter users safely
  const filteredUsers = mockUsers.filter((user) => {
    return user[filter]?.toLowerCase().includes(value.toLowerCase());
  });

  return res.send(filteredUsers);
});

app.post('/api/users',(req, res)=>{
  console.log(req.body);
  const {body} = req;
 const newId = mockUsers.length > 0 ? mockUsers[mockUsers.length - 1].id + 1 : 1;
const newUser = { id: newId, ...body };

  mockUsers.push(newUser);
  return res.status(201).send(newUser);
})

app.get("/api/users/:id", (req, res) => {
  console.log("PARAMS RECEIVED:", req.params);

  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).send({ msg: "Bad request! ID must be a number." });
  }

  const findUser = mockUsers.find((user) => user.id === id);

  if (!findUser) {
    return res.status(404).send({ msg: "User not found" });
  }

  return res.send(findUser);
});

app.get("/api/products", (req, res) => {
  return res.send([
    { id: 123, name: "chicken breast", price: 34.6 },
    { id: 124, name: "milk", price: 55 },
    { id: 125, name: "bread", price: 20 },
  ]);
});

app.put("/api/users/:id", (req, res) =>{
  const {body,params:{id},} = req;
  const parsedId = parseInt(id);
   if (isNaN(id)) 
    return res.status(400).sendStatus(400);
   const findUserIndex = mockUsers.findIndex((user)=>user.id === parsedId);
   if(findUserIndex === -1) return res.sendStatus(404);

   mockUsers[findUserIndex] = {id: parsedId, ...body};
   return res.sendStatus(200);

})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
