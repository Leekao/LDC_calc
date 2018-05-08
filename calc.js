const validate_request = (req) => {
  if (!("body" in req)) return false
  if (!("first_number" in req.body)) return false
  if (!("second_number" in req.body)) return false
  if (!("action" in req.body)) return false
  const {action, first_number, second_number} = req.body
  if (typeof(first_number) != 'string') return false
  if (typeof(second_number) != 'string') return false
  if (typeof(action) != 'string') return false
  if (first_number.length === 0) return false
  if (second_number.length === 0) return false
  if (Object.keys(actions).indexOf(action) < 0)
    return false
  let f_number, s_number
  f_number = parseFloat(first_number)
  s_number = parseFloat(second_number)
  if (isNaN(f_number)) return false
  if (isNaN(s_number)) return false
  return true
}

const actions = {
  'add': (a,b) => {
    return (a+b)
  },
  'sub': (a,b) => {
    return (a-b)
  },
  'mul': (a,b) => {
    return (a*b)
  },
  'div': (a,b) => {
    return (a/b)
  }
}

const calc_handler = (req, res) => {
  if (!validate_request(req))
    return res.status(500).send({
      'error': 'request invalid'
    })
  const {action, first_number, second_number} = req.body
  const f_number = parseFloat(first_number)
  const s_number = parseFloat(second_number)
  const result = actions[action](f_number, s_number)
  return res.status(200).send({
    'response': result.toString()
  })
}

module.exports = {validate_request, calc_handler, actions}