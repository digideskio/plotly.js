/**
* Copyright 2012-2016, Plotly, Inc.
* All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/


'use strict';

var hasColorscale = require('../../components/colorscale/has_colorscale');
var calcColorscale = require('../../components/colorscale/calc');

var subTypes = require('./subtypes');


// common to 'scatter', 'scatter3d' and 'scattergeo'
module.exports = function calcMarkerColorscale(trace) {

    // auto-z and autocolorscale if applicable

    if(subTypes.hasLines(trace) && hasColorscale(trace, 'line')) {
        calcColorscale(trace, trace.line.color, 'line', 'c');
    }

    if(subTypes.hasMarkers(trace)) {

        if(hasColorscale(trace, 'marker')) {
            calcColorscale(trace, trace.marker.color, 'marker', 'c');
        }

        if(hasColorscale(trace, 'marker.line')) {
            calcColorscale(trace, trace.marker.line.color, 'marker.line', 'c');
        }
    }
};
