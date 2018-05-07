const actions = {
  'add': (a,b) => {
  },
  'sub': (a,b) => {
  }
}

const validate_request = (req) => {
  return (
    (req.body) &&
    (req.body.action) &&
    (req.body.first_number) &&
    (req.body.second_number) &&
    (Object.keys(actions).indexOf(req.body.action) > -1)
  )
}

const calc_handler = (req, res) => {
  return true
}

module.exports = {validate_request, calc_handler}