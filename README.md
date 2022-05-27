# Progressive Text Editor
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
Progressive Text Editor is a simple text editor with a twist: it functions as a Progressive Web Application, allowing it to run and hold state between reloads and even when offline. This makes it ideal for holding small tet or code snippets.

[Screenshot of Progressive Text Editor](https://drive.google.com/file/d/1xowJKBBjrnqFRX2R6u9rHpsD3WL3N6mp/view)


## Table of Contents

* [Usage](#usage)
* [Features](#features)
* [Technologies Used](#technologies-used)
* [Author](#author)
* [License](#license)


## Usage

Users enter text into the Progressive Text Editor simply by clicking on the editor and typing out text. Text is saved automatically to both IndexedDB and local storage, with local storing being used as the backup if IndexedDB fails. A service worker caches website resources and offers an installation option, which can be accessed by clicking on the "Install" button on the upper left corner of the page.


## Features

* Allows users to enter and save text and code snippets
  * Automatically saves content to local storage and IndexedDB, both on user's machine
* Service worker works in background to serve cached assets
  * Service worker can install entire website on user's machine upon request


## Technologies Used

* JavaScript
  * Express.js
  * idb
* Node.js
* Webpack
 * babel
 * Workbox


## Author

John Netzel
* [Portfolio](https://commiedog.github.io/my-portfolio/)
* [LinkedIn](https://www.linkedin.com/in/john-netzel-481112129/)
* [GitHub](https://github.com/CommieDog)


## License
&copy; 2022 John Netzel. All Rights Reserved. Licenced under the terms of the MIT License.