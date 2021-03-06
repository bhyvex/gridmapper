module.exports = {
  'walls' : function (browser) {
    browser
      .url('file://' + process.cwd() + '/gridmapper.svg')
      .assert.elementPresent('#walls0')
      .keys('w')
      .waitForElementPresent('#wall_0_0', 1000)
      .assert.attributeEquals('#wall_0_0', 'rotate', '0')
      .keys('w')
      .assert.attributeEquals('#wall_0_0', 'rotate', '90')
      // enter wall mode
      .keys('mw')
      .waitForElementPresent('#wall_1_0', 1000)
      .assert.attributeEquals('#wall_1_0', 'rotate', '0')
      // variant
      .keys('v')
      .waitForElementPresent('#curtain_1_0', 1000)
      .assert.elementNotPresent('#wall_1_0')
      .end();
  }
};
