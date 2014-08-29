var api_url = 'https://api.github.com/gists/';
var gist_id = '87c31d2a43a704b4c443';

var UniqueCategoricalValues = function () {
    // categories for filter
    var categorical_keys =
        ['Years in business', 'Company size', 'Industry sector'];

    var categorical_values_by_key = (function () {
        var kv = {};
        categorical_keys.forEach(function (k) {
            kv[k] = [];
        });
        return kv;
    }());

    var geojson;

    var self = function () {
        geojson.features.forEach(function (feature) {
            Object.keys(feature.properties).forEach (function (k) {
                var value = normalize_value(feature.properties[k]);
                if (categorical_keys.indexOf(k) != -1) {
                    if (categorical_values_by_key[k].indexOf(value) === -1 &
                        value.length > 0) {
                        categorical_values_by_key[k].push(value);
                    }
                }
            });
        });
        console.log(categorical_values_by_key);

        categorical_keys.forEach(function (key) {
            var container = d3.select('.container');

            container
                .append('h3')
                .text(key);

            container
                .append('ul')
                .selectAll('.list-item' + slugify(key))
                .data(categorical_values_by_key[key].sort())
                .enter()
                .append("li")
                .attr('class',  'list-item' + slugify(key))
                .text(function (d) {
                    return d;
                });
        });
    };

    self.geojson = function (x) {
        if (!arguments.length) return geojson;
        geojson = x;
        return self;
    };

    function slugify (value) {
        return value.trim().replace(/ /g, "-").toLowerCase();
    }

    function normalize_value (value) {
        // temporarily fixing category values that end in +
        // supposed to be: 50+
        // entered as: 50 +
        return value.trim().substr(value.length - 1) === "+" ?
            value.trim().replace(/ /g, "") : value.trim();
    }

    return self;
};

d3.json(api_url + gist_id, function (gist) {
    var geojson = JSON.parse(gist.files['map.geojson'].content);

    console.log(geojson);

    UniqueCategoricalValues().geojson(geojson)();
});
