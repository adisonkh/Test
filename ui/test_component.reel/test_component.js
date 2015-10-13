/**
 * @module ui/test_component.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Test_component
 * @extends Component
 */
exports.Test_component = Component.specialize(/** @lends Test_component# */ {
    constructor: {
        value: function Test_component() {
            this.super();
        }
    }
});
