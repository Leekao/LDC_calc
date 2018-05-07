const {validate_request, calc_handler} = require('../calc.js')
console.log(validate_request)

describe("request validation", function() {
  let req = {}
  it("accepts a valid addding requst", () =>  {
    req = {body: {
      'action': 'add',
      'first_number': '1',
      'second_number': '2'
    }}
    expect(validate_request(req)).toBe(true)
  })

  it("fails gracefully when request has no params", () =>  {
    req = {}
    expect(validate_request(req)).toBe(false)
    req = {body: {}}
    expect(validate_request(req)).toBe(false)
    req = {body: {
      'action': 'add'
    }}
    expect(validate_request(req)).toBe(false)
    req = {body: {
      'action': 'add',
      'first_number': '1'
    }}
    expect(validate_request(req)).toBe(false)
    req = {body: {
      'action': 'add',
      'first_number': null,
      'second_number': '2'
      }
    }
    expect(validate_request(req)).toBe(false)
    req = {body: {
      'action': 'add',
      'first_number': '1',
      'second_number': null
      }
    }
    expect(validate_request(req)).toBe(false)
    req = {body: {
      'action': 'add',
      'first_number': '1',
      'second_number': ''
      }
    }
    expect(validate_request(req)).toBe(false)
    req = {body: {
      'action': 'add',
      'first_number': 'add',
      'second_number': '2'
      }
    }
    expect(validate_request(req)).toBe(false)
    req = {body: {
      'action': 'addy',
      'first_number': '1',
      'second_number': '2'
      }
    }
    expect(validate_request(req)).toBe(false)
  });
});