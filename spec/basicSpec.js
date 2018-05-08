const {validate_request, calc_handler, actions} = require('../calc.js')

describe("calc actions", function() {
  it("knows how to add two numbers", () =>  {
    const result = actions['add'](1,2)
    expect(result).toBe(3.0)
  })
  it("knows how to subtract two numbers", () =>  {
    const result = actions['sub'](2,1)
    expect(result).toBe(1)
  })
  it("knows how to multiply two numbers", () =>  {
    const result = actions['mul'](1,2)
    expect(result).toBe(2.0)
  })
  it("knows how to divide two numbers", () =>  {
    let result = actions['div'](4,2)
    expect(result).toBe(2.0)
    result = actions['div'](3,2)
    expect(result).toBe(1.5)
  })
})

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