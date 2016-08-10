# SkonkWorks-ChatBot-Seed

A conversational chat bot written in AIML (XML-compliant Artificial Intelligence Markup Language).

## Deploying New Bots

#### Make a new repository for your new bot:

http://github.com

#### Clone this seed kit repo:

```
$ git clone --bare git@github.com:Argo-DigitalVentures/Skonkworks-ChatBot-Seed.git
```

or if you don't use SSH keys:

```
$ git clone --bare https://github.com/Argo-DigitalVentures/Skonkworks-ChatBot-Seed.git
```
Enter the cloned directory:

```
$ cd Skonkworks-ChatBot-Seed.git
```

#### Push the clone to your new app repo:

```
$ git push --mirror https://github.com/exampleuser/new-repository.git
```

#### Check your new repo and confirm it worked. If so, go ahead and delete the source clone:

```
$ cd ..

$ rm -rf Skonkworks-ChatBot-Seed.git
```

#### Finally, clone your new repo and start using it:

```
$ git clone https://github.com/exampleuser/new-repository.git

$ cd new-repository
```

## Installation

#### Install the modules:

```
$ npm install
```

#### Install Pandora CLI

We are currently using a software service called Pandora Bots for storing and compiling our AIML.

The manual and automated work flow require the command line interface package, Pandora CLI.

```
$ npm install -g pb-cli
```

You can now use the CLI anywhere on your machine.

#### Create your Secret File

```
$ touch chatbot.json
```

Get in touch with one of the bot engineers for the keys to Pandora.

Add those private keys for Pandora using this template. Each bot has its own set:

```
{
  "app_id": "x",
  "user_key": "x",
  "botname": "x"
}
```

Save. That should be it!

Ready to get your ChatBot on?

## Development Workflow

#### Use Pandora CLI

For various manual tasks, use Pandora CLI.

Documentation is here:

https://github.com/pandorabots/pb-cli

Working with the upload and compile is tedious when working on AIML. For that aspect, it's recommended to use Gulp Watch.

#### Start the Gulp Watch

When working on AIML, use the watch to automatically upload and compile for you.

This should be done in Development only. Not on Production Bots!

```
$ gulp watch
```

Enjoy :)
