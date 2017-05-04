# ReactJS with Django backend
[![CircleCI](https://circleci.com/gh/Zaccc123/react-django.svg?style=svg)](https://circleci.com/gh/Zaccc123/react-django)

This is a sample project that demonstrate how `ReactJS` could be use as a frontend on `Django` with the help of `webpack`.

A complete guide could be found here:

- [Part One - Guide on using ReactJS with Django](https://www.botzeta.com/post/9/)
- [Part Two - Displaying ReactJS app in Django](https://www.botzeta.com/post/10/)
- [Part Three - Hot loading a ReactJS app in Django](https://www.botzeta.com/post/11/)

We would be able to achieve this:
<img src="https://project-zeta.s3-ap-southeast-1.amazonaws.com/post/11/hot-loading.gif" width="800">

Checkout the correct branch to start:

```bash
$ git clone -b start git@github.com:Zaccc123/react-django.git   #start of part1
$ git clone -b part2 git@github.com:Zaccc123/react-django.git   #start of part2
$ git clone -b part3 git@github.com:Zaccc123/react-django.git   #start of part3
```

To run the complete project, just checkout the master branch and do this:

```bash
$ git clone git@github.com:Zaccc123/react-django.git
$ npm run watch
$ python manage.py rumserver #on another session
```

## Live Production Example
I have also use the exact same setup to create a [iOS App Landing page](http://www.botzeta.com/app/).

<img src="https://project-zeta.s3-ap-southeast-1.amazonaws.com/post/11/app-page.png" width="800">
