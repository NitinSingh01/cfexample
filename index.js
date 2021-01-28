exports.httpRequest = function httpServer(req, res) {
  const path = req.path;
  switch(path) {
    case '/users':
      handleUsers(req, res);
      break;
    default: 
      res.status(200).send('Server is up and running');
  }
};

const handleUsers = (req, res) => {
  if (req.method === 'GET') {
    res.status(200).send('Listing users...');
  } else if (req.method === 'POST') {
    res.status(201).send('Creating User...')
  } else {
    res.status(404);
  }
}