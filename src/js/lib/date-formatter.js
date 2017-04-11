/**
 * Created by Administrator on 2017/4/11.
 */
module.exports = function(kebabDateText) {
    return kebabDateText.replace(/^(\d+)-0?(\d+)-0?(\d+)$/, '$1年$2月$3日');
};