import data from '../../data/frontpagedata.json'


export default function handler(req, res) {
  const dat = data;
  res.status(200).json(dat)
  
}

