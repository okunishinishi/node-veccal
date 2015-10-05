veccal
==========

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![Code Climate][bd_codeclimate_shield_url]][bd_codeclimate_url]
[![Code Coverage][bd_codeclimate_coverage_shield_url]][bd_codeclimate_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![bower version][bd_bower_badge_url]][bd_repo_url]

[bd_repo_url]: https://github.com/okunishinishi/node-veccal
[bd_travis_url]: http://travis-ci.org/okunishinishi/node-veccal
[bd_travis_shield_url]: http://img.shields.io/travis/okunishinishi/node-veccal.svg?style=flat
[bd_license_url]: https://github.com/okunishinishi/node-veccal/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/okunishinishi/node-veccal
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/okunishinishi/node-veccal.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/okunishinishi/node-veccal.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/okunishinishi/node-veccal
[bd_gemnasium_shield_url]: https://gemnasium.com/okunishinishi/node-veccal.svg
[bd_npm_url]: http://www.npmjs.org/package/veccal
[bd_npm_shield_url]: http://img.shields.io/npm/v/veccal.svg?style=flat
[bd_bower_badge_url]: https://img.shields.io/bower/v/veccal.svg?style=flat

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Basic vector calculation functions.

<!-- Description End -->




<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/readme/01.Installation.md.hbs" Start -->

<a name="section-doc-readme-01-installation-md"></a>
Installation
-----

```bash
npm install veccal --save
```
<!-- Section from "doc/readme/01.Installation.md.hbs" End -->

<!-- Section from "doc/readme/02.Usage.md.hbs" Start -->

<a name="section-doc-readme-02-usage-md"></a>
Usage
-----

```javascript
var veccal = require('veccal');

//------------------------
// add
//------------------------
console.log(veccal.add([1, 2, 3], [2, 4, 8])); //-> [3, 6, 11]
console.log(veccal.add([1, 2, 3], [2, 4, 8], [0, 1, 0])); //-> [3, 7, 11]

//------------------------
// subtract
//------------------------
console.log(veccal.subtract([1, 2, 3], [2, 4, 8])); //-> [-1, -2, -5]
console.log(veccal.subtract([1, 2, 3], [2, 4, 8], [0, 1, 0])); //-> [-1, -3, -5]

//------------------------
// multiply
//------------------------
console.log(veccal.multiply([1, 2, 3], [2, 4, 8])); //-> [2, 8, 24]
console.log(veccal.multiply([1, 2, 3], [2, 4, 8], [0, 1, 0])); //-> [0, 8, 0]

//------------------------
// scale
//------------------------
console.log(veccal.scale([1, 2, 3], 2)); //-> [2, 4, 6]
console.log(veccal.scale([1, 2, 3], -4)); //-> [-4, -8, -12]

//------------------------
// size
//------------------------
console.log(veccal.size([3, 4, 5])); //-> 7.0710678118654755
console.log(veccal.size([1, 0, 0])); //-> 1

//------------------------
// normalize
//------------------------
console.log(veccal.normalize([3, 4, 5])); //-> [0.4242640687119285, 0.565685424949238, 0.7071067811865475]
console.log(veccal.normalize([3, 4, 5], 2)); //-> [0.848528137423857, 1.131370849898476, 1.414213562373095]

//------------------------
// revert
//------------------------
console.log(veccal.revert([3, 4, 5])); //-> [-3, -4, -5]


````

<!-- Section from "doc/readme/02.Usage.md.hbs" End -->

<!-- Section from "doc/readme/03.API.md.hbs" Start -->

<a name="section-doc-readme-03-a-p-i-md"></a>
API
---

| Signature | Description |
| --------- | ----------- |
| .add(vec1, vec2, ...) -> vec | Add multiple vectors. |
| .subtract(vec1, vec2, ...) -> vec | Subtract multiple vectors. |
| .multiply(vec1, vec2, ...) -> vec | Multiply multiple vectors. |
| .size(vec) -> size | Get size for a vector. |
| .scale(vec, rate) -> vec | Change size for a vector. |
| .normalize(vec) -> vec | Normalize a vector. |
| .normalize(vec, size) -> vec | Normalize a vector to fit size. |
| .revert(vec) -> vec | Revert a vector. |

<!-- Section from "doc/readme/03.API.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/okunishinishi/node-veccal/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [numcal](https://github.com/okunishinishi/node-numcal)
+ [rangecal](https://github.com/okunishinishi/node-rangecal)

<!-- Links End -->
