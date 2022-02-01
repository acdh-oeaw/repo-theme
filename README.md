# acdh_repo
A custom theme for ARCHE for Drupal 8.

## Installation
* Clone the content of this repository into a folder called "acdh_repo" and put it inside the "drupal/themes" directory.
* Login to your Drupal site as admin and under Appearance activate the theme.
* Use it with the repo-gui module for Drupal (https://github.com/acdh-oeaw/repo-gui) for best results.

## Information regarding SASS stylesheets
For the convenience and the sustainability of the CSS stylesheets, the style definitions should be made in the partial .scss files under sass/_partials/ directory. These should be compiled by Compass automatically after every change into the main stylesheet css/style.css.

1. To use Compass, please navigate to the root of your virtual machine and install Ruby as described in here: [https://rvm.io/]
2. Download and install Compass: [http://compass-style.org/install/]
3. Navigate to /home/vagrant/drupal/themes/acdh_repo and run the command "compass watch"
4. Compass will start watching the changes as configured in the config.rb file in the theme.
5. Edit your .gitignore file add: /drupal/themes/acdh_repo/.sass-cache/


## Adding/editing content on information pages
* Login to your Drupal site as admin and under Content see all the published pages
* You can edit the pages here by clicking the Edit button (i.e. pages with the Content Type "Information Page")
* Inside the editor you can use h3 (Heading 3) format for in-page headings, and h2 for separate sub-pages in a single page
* You can add a new page by clicking Add Content button and selecting Information Page as you template
* On the right sidebar check the "Provide a menu link" button and under URL Path Settings define a pretty-looking URL alias (e.g for "My Page" the url: /my-page)
* Go to Structure > Menus in Drupal and edit the Information Page Navigation. Here you can select the order of your menu items of information pages.
* For linking child-items as anchor links, you should add new links under an existing page and URLs (e.g. a new link under the existing "Deposition Process" page with the name "Before Submission" and the URL: /deposition-process#before-submission)
* Lastly you should edit this parent page (e.g. Deposition Process) and activate the source editor (the button next to Format with a code symbol), scroll down to the heading where you want to add your anchor link to and add to that heading an id tag with the corresponding anchor link, e.g. id="before-submission" to the h2 "Before Submission"
