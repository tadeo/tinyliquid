/**
 * 测试 assgin 标签
 */

var assert = require('assert');
var common = require('./common');


describe('Tag: assgin', function () {
  
  it('#assign', function (done) {
    common.taskList()
      .add(function (done) {
        common.render('{% assign freestyle = false %}{{ freestyle }}', function (err, buf) {
          assert.equal(err, null);
          assert.equal(buf, 'false');
          done();
        });
      })
      .add(function (done) {
        common.render('{% assign freestyle = nil %}{{ freestyle }}', function (err, buf) {
          assert.equal(err, null);
          assert.equal(buf, 'null');
          done();
        });
      })
      .add(function (done) {
        common.render('{% assign freestyle = 123 %}{{ freestyle }}', function (err, buf) {
          assert.equal(err, null);
          assert.equal(buf, '123');
          done();
        });
      })
      .add(function (done) {
        common.render('{% assign freestyle = "abc" %}{{ freestyle }}', function (err, buf) {
          assert.equal(err, null);
          assert.equal(buf, 'abc');
          done();
        });
      })
      .add(function (done) {
        common.render('value={% assign freestyle = "abc" | upcase | size | plus: 5 %}{{ freestyle }};', function (err, buf) {
          assert.equal(err, null);
          assert.equal(buf, 'value=8;');
          done();
        });
      })
      .end(done);
  });
  
});