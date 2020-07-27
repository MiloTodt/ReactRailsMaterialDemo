# Prerequisites

## toolchain- Ruby, Rails, Node

- Ruby Version Manager (RVM) allows selection of which Ruby release to use.
- `gem` installs a single Ruby library

```bash
curl -sSL https://get.rvm.io | bash -s stable --ruby
rvm use 2.7.1
gem install rails
```

> `ruby -v` should output ruby 2.7.1
> `rails -v` should output at least version 6

- NVM allows selection of which Node release to use.

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
source ~/.profile #activates path for current profile
nvm install --lts
```

> `node -v` should output at least version 14

## Running- Backend

Open a terminal and from the project directory run:

- `bundle` is used to install Ruby libraries inside Gemfile

```bash
cd backend
bundle
rails db:setup # Creates our database, runs migrations, seeds data into it.
rails server -p 5000 # Starts our backend API on port 5000
```

## Running- Fontend

Leave the first terminal running, and open a new one. Again starting from base directory.

```bash
cd frontend
npm install # Installs node packages
npm run
```

## Usage

- App should now be running at http://localhost:3000/
- A test user has been provided. email: test@test.com password: Testpass
- Visual polish could use... some work.
  ![](https://i.imgur.com/Gk57mw2.png)
  ![](https://i.imgur.com/bJ8hQ1l.png)
