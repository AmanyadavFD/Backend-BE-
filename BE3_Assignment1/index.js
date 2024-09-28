const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, This is Express Assignment Server.");
});

const albums = [
  { id: 1, title: "Abbey Road", artist: "The Beatles", year: 1969 },

  {
    id: 2,
    title: "The Dark Side of the Moon",
    artist: "Pink Floyd",
    year: 1973,
  },

  { id: 3, title: "Thriller", artist: "Michael Jackson", year: 1982 },
];

app.post("/albums", (req, res) => {
  const newAlbums = req.body;
  if (!newAlbums.title || !newAlbums.artist || !newAlbums.year) {
    res.status(404).json({ error: "Title, artist and year are required" });
  } else {
    albums.push(newAlbums);
    res
      .status(201)
      .json({ message: "Album added successfully", album: newAlbums });
  }
});

app.delete("/albums/:id", (req, res) => {
  const albumId = parseInt(req.params.id);
  const index = albums.findIndex((album) => album.id === albumId);
  if (index === -1) {
    res.status("404").json({ error: "Album not found" });
  } else {
    albums.splice(index, 1);
    res.status(201).json({ message: "Album deleted successfully" });
  }
});

app.post("/albums/:id", (req, res) => {
  const albumId = parseInt(req.params.id);
  const updateAlbum = req.body;
  const albumToUpdate = albums.find((album) => album.id === albumId);

  if (!albumToUpdate) {
    res.status(401).json({ error: "Album does not exist" });
  } else {
    if (!updateAlbum.title || !updateAlbum.artist || !updateAlbum.year) {
      res.status(404).json({ error: "Title , artist and year are required" });
    } else {
      Object.assign(albumToUpdate, updateAlbum);
      res
        .status(201)
        .json({ message: "album updated Successfuly", album: albumToUpdate });
    }
  }
});

app.get("/albums", (req, res) => {
  res.send(albums);
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on the port ${port}`);
});
