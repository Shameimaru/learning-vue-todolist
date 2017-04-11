/**
 * Created by Administrator on 2017/4/11.
 */
const chai = require('chai');
const formatter = require('../lib/date-formatter');
chai.should();

describe('/src/js/lib', function() {
    describe('#date-formatter()', function() {
        it('should return Chinese pattern when passed in a kebab-style date string', function () {
            formatter('2014-05-11').should.be.equal('2014年5月11日');
            formatter('2017-8-04').should.be.equal('2017年8月4日');
            formatter('2016-12-25').should.be.equal('2016年12月25日');
        });
    });
});