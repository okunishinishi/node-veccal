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

<!-- Section from "docs/readme/01.Installation.md.hbs" Start -->

<a name="section-docs-readme-01-installation-md"></a>
Installation
-----

```bash
npm install veccal --save
```
<!-- Section from "docs/readme/01.Installation.md.hbs" End -->

<!-- Section from "docs/readme/02.Usage.md.hbs" Start -->

<a name="section-docs-readme-02-usage-md"></a>
Usage
-----

```javascript
var veccal = require('veccal');

//------------------------
// add
//------------------------
console.log(veccal.add([1, 2, 3], [2, 4, 8])); //-> [3, 6, 11]

//------------------------
// multiply
//------------------------
console.log(veccal.multiply([1, 2, 3], [2, 4, 8])); //-> [2, 8, 24]

//------------------------
// scale
//------------------------
console.log(veccal.scale([1, 2, 3], 2)); //-> [2, 4, 6]

//------------------------
// size
//------------------------
console.log(veccal.size([3, 4, 5])); //-> 7.0710678118654755


````

<!-- Section from "docs/readme/02.Usage.md.hbs" End -->

<!-- Section from "docs/readme/03.API.md.hbs" Start -->

<a name="section-docs-readme-03-a-p-i-md"></a>
API
---

| Signature | Description |
| --------- | ----------- |
| .add(vec1, vec2, ...) | Add multiple vectors. |
| .multiply(vec1, vec2, ...) | Multiply multiple vectors. |
| .sive(vec) | Get size for a vector. |
| .scale(vec, rate) | Change size for a vector. |
| .normalize(vec) | Normalize a vector. |

<!-- Section from "docs/readme/03.API.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/okunishinishi/node-veccal/blob/master/LICENSE).

<!-- LICENSE End -->


