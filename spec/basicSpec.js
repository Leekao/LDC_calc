const {validate_request, calc_handler} = require('../calc.js')

describe("request validation", function() {
  it("fails gracefully when no params", () =>  {
    const req = {}
    const valid = validate_request(req)
    expect(valid).toBe(false);
  });
});