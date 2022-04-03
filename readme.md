# Information Assurance Student Group Website

This is the public facing website for the Information Assurance Student Group at Iowa State University. 

If you are looking to download and test the site locally clone the repo into a directory and follow the steps list [here](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll).

On a fresh installation of Ubuntu WSL2, the steps are

1. Clone the repo ```git clone https://github.com/IASG/iasg.github.io```
2. Install Ruby development environment, and bundler ```sudo apt install ruby-dev ruby-bundler```
3. Install the gems with ```bundle install```
4. Serve the website to be viewed on the Windows desktop ```bundle exec jekyll serve```
5. Connect to localhost:4000 in a browser to view the website
6. If the website is serving correctly in WSL, but not viewable in Windows, you may need to add ```--host 0.0.0.0``` to the ```bundle exec jekyll serve``` command. In the event WSL is not sharing localhost correctly.
7. Then connect with the IP address of the WSL interface on the correct port

For other operating systems, the steps are roughly the same with installing Ruby and Bundler. Then installing the gems with ```bundle install``` and serving the website with ```bundle exec jekyll serve```.

Doing this will allow you to test the site locally without having to push to the remote repository.
