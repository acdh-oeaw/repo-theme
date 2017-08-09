# acdh_repo
Description: A custom theme for ACDH-Repo for Drupal 8.
Author: Asil Çetin

## Information regarding SASS stylesheets
For the convenience and the sustainability of the CSS stylesheets, the style definitions should be made in the partial .scss files under sass/_partials/ directory. These should be compiled by Compass automatically after every change into the main stylesheet css/style.css.

1. To use Compass, please navigate to the root of your virtual machine and install Ruby as described in here: [https://rvm.io/]
2. Download and install Compass: [http://compass-style.org/install/]
3. Navigate to /home/vagrant/drupal/themes/acdh_repo and run the command "compass watch"
4. Compass will start watching the changes as configured in the config.rb file in the theme.
5. Edit your .gitignore file add: /drupal/themes/acdh_repo/.sass-cache/
