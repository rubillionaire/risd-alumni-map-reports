(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/rubenrodriguez/Documents/commisions/risd_media/risd-alumni-map-reports/src/index.js":[function(require,module,exports){
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

},{}]},{},["/Users/rubenrodriguez/Documents/commisions/risd_media/risd-alumni-map-reports/src/index.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ydWJlbnJvZHJpZ3Vlei9Eb2N1bWVudHMvY29tbWlzaW9ucy9yaXNkX21lZGlhL3Jpc2QtYWx1bW5pLW1hcC1yZXBvcnRzL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvcnViZW5yb2RyaWd1ZXovRG9jdW1lbnRzL2NvbW1pc2lvbnMvcmlzZF9tZWRpYS9yaXNkLWFsdW1uaS1tYXAtcmVwb3J0cy9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIGFwaV91cmwgPSAnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9naXN0cy8nO1xudmFyIGdpc3RfaWQgPSAnODdjMzFkMmE0M2E3MDRiNGM0NDMnO1xuXG52YXIgVW5pcXVlQ2F0ZWdvcmljYWxWYWx1ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gY2F0ZWdvcmllcyBmb3IgZmlsdGVyXG4gICAgdmFyIGNhdGVnb3JpY2FsX2tleXMgPVxuICAgICAgICBbJ1llYXJzIGluIGJ1c2luZXNzJywgJ0NvbXBhbnkgc2l6ZScsICdJbmR1c3RyeSBzZWN0b3InXTtcblxuICAgIHZhciBjYXRlZ29yaWNhbF92YWx1ZXNfYnlfa2V5ID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGt2ID0ge307XG4gICAgICAgIGNhdGVnb3JpY2FsX2tleXMuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuICAgICAgICAgICAga3Zba10gPSBbXTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBrdjtcbiAgICB9KCkpO1xuXG4gICAgdmFyIGdlb2pzb247XG5cbiAgICB2YXIgc2VsZiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZ2VvanNvbi5mZWF0dXJlcy5mb3JFYWNoKGZ1bmN0aW9uIChmZWF0dXJlKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhmZWF0dXJlLnByb3BlcnRpZXMpLmZvckVhY2ggKGZ1bmN0aW9uIChrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gbm9ybWFsaXplX3ZhbHVlKGZlYXR1cmUucHJvcGVydGllc1trXSk7XG4gICAgICAgICAgICAgICAgaWYgKGNhdGVnb3JpY2FsX2tleXMuaW5kZXhPZihrKSAhPSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2F0ZWdvcmljYWxfdmFsdWVzX2J5X2tleVtrXS5pbmRleE9mKHZhbHVlKSA9PT0gLTEgJlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmljYWxfdmFsdWVzX2J5X2tleVtrXS5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coY2F0ZWdvcmljYWxfdmFsdWVzX2J5X2tleSk7XG5cbiAgICAgICAgY2F0ZWdvcmljYWxfa2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIHZhciBjb250YWluZXIgPSBkMy5zZWxlY3QoJy5jb250YWluZXInKTtcblxuICAgICAgICAgICAgY29udGFpbmVyXG4gICAgICAgICAgICAgICAgLmFwcGVuZCgnaDMnKVxuICAgICAgICAgICAgICAgIC50ZXh0KGtleSk7XG5cbiAgICAgICAgICAgIGNvbnRhaW5lclxuICAgICAgICAgICAgICAgIC5hcHBlbmQoJ3VsJylcbiAgICAgICAgICAgICAgICAuc2VsZWN0QWxsKCcubGlzdC1pdGVtJyArIHNsdWdpZnkoa2V5KSlcbiAgICAgICAgICAgICAgICAuZGF0YShjYXRlZ29yaWNhbF92YWx1ZXNfYnlfa2V5W2tleV0uc29ydCgpKVxuICAgICAgICAgICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgICAgICAgLmFwcGVuZChcImxpXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2NsYXNzJywgICdsaXN0LWl0ZW0nICsgc2x1Z2lmeShrZXkpKVxuICAgICAgICAgICAgICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgc2VsZi5nZW9qc29uID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gZ2VvanNvbjtcbiAgICAgICAgZ2VvanNvbiA9IHg7XG4gICAgICAgIHJldHVybiBzZWxmO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBzbHVnaWZ5ICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUudHJpbSgpLnJlcGxhY2UoLyAvZywgXCItXCIpLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbm9ybWFsaXplX3ZhbHVlICh2YWx1ZSkge1xuICAgICAgICAvLyB0ZW1wb3JhcmlseSBmaXhpbmcgY2F0ZWdvcnkgdmFsdWVzIHRoYXQgZW5kIGluICtcbiAgICAgICAgLy8gc3VwcG9zZWQgdG8gYmU6IDUwK1xuICAgICAgICAvLyBlbnRlcmVkIGFzOiA1MCArXG4gICAgICAgIHJldHVybiB2YWx1ZS50cmltKCkuc3Vic3RyKHZhbHVlLmxlbmd0aCAtIDEpID09PSBcIitcIiA/XG4gICAgICAgICAgICB2YWx1ZS50cmltKCkucmVwbGFjZSgvIC9nLCBcIlwiKSA6IHZhbHVlLnRyaW0oKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZjtcbn07XG5cbmQzLmpzb24oYXBpX3VybCArIGdpc3RfaWQsIGZ1bmN0aW9uIChnaXN0KSB7XG4gICAgdmFyIGdlb2pzb24gPSBKU09OLnBhcnNlKGdpc3QuZmlsZXNbJ21hcC5nZW9qc29uJ10uY29udGVudCk7XG5cbiAgICBjb25zb2xlLmxvZyhnZW9qc29uKTtcblxuICAgIFVuaXF1ZUNhdGVnb3JpY2FsVmFsdWVzKCkuZ2VvanNvbihnZW9qc29uKSgpO1xufSk7XG4iXX0=
