(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/rubenrodriguez/Documents/commisions/risd_media/risd-alumni-map-data-categorical-unique-list/src/index.js":[function(require,module,exports){
var api_url = 'https://api.github.com/gists/';
var gist_id = '87c31d2a43a704b4c443';

d3.json(api_url + gist_id, function (gist) {
    var geojson = JSON.parse(gist.files['map.geojson'].content);

    console.log(geojson);

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
            .data(categorical_values_by_key[key])
            .enter()
            .append("li")
            .attr('class',  'list-item' + slugify(key))
            .text(function (d) {
                return d;
            });
    });
    // end categories for filter

});

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
},{}]},{},["/Users/rubenrodriguez/Documents/commisions/risd_media/risd-alumni-map-data-categorical-unique-list/src/index.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ydWJlbnJvZHJpZ3Vlei9Eb2N1bWVudHMvY29tbWlzaW9ucy9yaXNkX21lZGlhL3Jpc2QtYWx1bW5pLW1hcC1kYXRhLWNhdGVnb3JpY2FsLXVuaXF1ZS1saXN0L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvcnViZW5yb2RyaWd1ZXovRG9jdW1lbnRzL2NvbW1pc2lvbnMvcmlzZF9tZWRpYS9yaXNkLWFsdW1uaS1tYXAtZGF0YS1jYXRlZ29yaWNhbC11bmlxdWUtbGlzdC9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBhcGlfdXJsID0gJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vZ2lzdHMvJztcbnZhciBnaXN0X2lkID0gJzg3YzMxZDJhNDNhNzA0YjRjNDQzJztcblxuZDMuanNvbihhcGlfdXJsICsgZ2lzdF9pZCwgZnVuY3Rpb24gKGdpc3QpIHtcbiAgICB2YXIgZ2VvanNvbiA9IEpTT04ucGFyc2UoZ2lzdC5maWxlc1snbWFwLmdlb2pzb24nXS5jb250ZW50KTtcblxuICAgIGNvbnNvbGUubG9nKGdlb2pzb24pO1xuXG4gICAgLy8gY2F0ZWdvcmllcyBmb3IgZmlsdGVyXG4gICAgdmFyIGNhdGVnb3JpY2FsX2tleXMgPVxuICAgICAgICBbJ1llYXJzIGluIGJ1c2luZXNzJywgJ0NvbXBhbnkgc2l6ZScsICdJbmR1c3RyeSBzZWN0b3InXTtcbiAgICB2YXIgY2F0ZWdvcmljYWxfdmFsdWVzX2J5X2tleSA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBrdiA9IHt9O1xuICAgICAgICBjYXRlZ29yaWNhbF9rZXlzLmZvckVhY2goZnVuY3Rpb24gKGspIHtcbiAgICAgICAgICAgIGt2W2tdID0gW107XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ga3Y7XG4gICAgfSgpKTtcblxuICAgIGdlb2pzb24uZmVhdHVyZXMuZm9yRWFjaChmdW5jdGlvbiAoZmVhdHVyZSkge1xuICAgICAgICBPYmplY3Qua2V5cyhmZWF0dXJlLnByb3BlcnRpZXMpLmZvckVhY2ggKGZ1bmN0aW9uIChrKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBub3JtYWxpemVfdmFsdWUoZmVhdHVyZS5wcm9wZXJ0aWVzW2tdKTtcbiAgICAgICAgICAgIGlmIChjYXRlZ29yaWNhbF9rZXlzLmluZGV4T2YoaykgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2F0ZWdvcmljYWxfdmFsdWVzX2J5X2tleVtrXS5pbmRleE9mKHZhbHVlKSA9PT0gLTEgJlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpY2FsX3ZhbHVlc19ieV9rZXlba10ucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhjYXRlZ29yaWNhbF92YWx1ZXNfYnlfa2V5KTtcblxuICAgIGNhdGVnb3JpY2FsX2tleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciBjb250YWluZXIgPSBkMy5zZWxlY3QoJy5jb250YWluZXInKTtcblxuICAgICAgICBjb250YWluZXJcbiAgICAgICAgICAgIC5hcHBlbmQoJ2gzJylcbiAgICAgICAgICAgIC50ZXh0KGtleSk7XG5cbiAgICAgICAgY29udGFpbmVyXG4gICAgICAgICAgICAuYXBwZW5kKCd1bCcpXG4gICAgICAgICAgICAuc2VsZWN0QWxsKCcubGlzdC1pdGVtJyArIHNsdWdpZnkoa2V5KSlcbiAgICAgICAgICAgIC5kYXRhKGNhdGVnb3JpY2FsX3ZhbHVlc19ieV9rZXlba2V5XSlcbiAgICAgICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgICAuYXBwZW5kKFwibGlcIilcbiAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsICAnbGlzdC1pdGVtJyArIHNsdWdpZnkoa2V5KSlcbiAgICAgICAgICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGQ7XG4gICAgICAgICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyBlbmQgY2F0ZWdvcmllcyBmb3IgZmlsdGVyXG5cbn0pO1xuXG5mdW5jdGlvbiBzbHVnaWZ5ICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS50cmltKCkucmVwbGFjZSgvIC9nLCBcIi1cIikudG9Mb3dlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplX3ZhbHVlICh2YWx1ZSkge1xuICAgIC8vIHRlbXBvcmFyaWx5IGZpeGluZyBjYXRlZ29yeSB2YWx1ZXMgdGhhdCBlbmQgaW4gK1xuICAgIC8vIHN1cHBvc2VkIHRvIGJlOiA1MCtcbiAgICAvLyBlbnRlcmVkIGFzOiA1MCArXG4gICAgcmV0dXJuIHZhbHVlLnRyaW0oKS5zdWJzdHIodmFsdWUubGVuZ3RoIC0gMSkgPT09IFwiK1wiID9cbiAgICAgICAgdmFsdWUudHJpbSgpLnJlcGxhY2UoLyAvZywgXCJcIikgOiB2YWx1ZS50cmltKCk7XG59Il19
