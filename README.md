# _Github API_

### _Epicodus: JavaScript (Week 1: Tuesday)_

#### By _[**Caleb Stevenson**](https://github.com/CGrahamS)_

## Description

A webpage that displays account information for a specific github user.

## Specs

| BEHAVIOR                                                  | INPUT             | OUTPUT                                                                                                                                                                                                                      |
|-----------------------------------------------------------|-------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Program retrieves a github username                       | <h4>cgrahams</h4> | <h4>cgrahams</h4>                                                                                                                                                                                                           |
| Program retrieves a github user's repositories            | <h4>cgrahams</h4> | <h4>cgrahams:</h4> <br> <strong>Repositories:</strong> <br> <em>journal</em> <em>alarm-clock</em> <em>ping-pong-js-2</em>                                                                                                   |
| Program retrieves a github user's repository descriptions | <h4>cgrahams</h4> | <h4>cgrahams:</h4> <br> <strong>Repositories:</strong> <br> <em>journal:</em> <br> Epicodus JavaScript - Week 1 Monday <br> <em>alarm clock:</em> <br><br> <em>ping-pong-js-2:</em> <br> Epicodus JavaScript: Week 1 Monday |

## Setup/Installation Requirements

1. Clone this repository to your desktop: `$ git clone https://github.com/CGrahamS/github-api.git`
2. Navigate to main repository: `$ cd Desktop/github-api`
3. Install both back and front end dependencies: `$ npm install; bower install`
4. Create .env file `$ touch .env`
5. Paste the code below into the .env file you just created:
>! `exports.apiKey = "4c668147f93e354a5bd98ad5a8b3b1243d47f721";`
6. Start server: `$ gulp serve`

The home page should open on your local host automatically!

## Known Bugs

_NONE_

## Support and contact details

Caleb Stevenson: _cgrahamstevenson@gmail.com_

## Technologies Used

_HTML,
CSS,
JavaScript,
Node_

### License

This webpage is licensed under the GPL license.

Copyright &copy; 2016 **_Caleb Stevenson_**
