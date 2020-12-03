# STAT 628 Module 3: Yelp Analysis
This repository is for STAT 628 Module 3, which is a project to analyze part of the yelp dataset and help business owners increase their business rating on Yelp. Our project is mainly targeted to help Chinese foods restaurant owners and give them data-driven recommendations.

## Group members: 
<ol>
<li><a href="https://github.com/AustinJiangH">Austin Jiang</a></li>
<li><a href="https://github.com/WenyiWang0416">Wenyi Wang</a></li>
<li><a href="https://github.com/Lofia">Zixiang Xu</a></li>
</ol>

# Description of Folders
There are five folders in the repository: <code>data</code>, <code>code</code>, <code>plot</code>, <code>deliverables</code> and <code>app</code>.

## Data Folder
This folder contains all the data we have selected specifically for Chinese restaurants. The subfolder <code>ChineseBusiness</code> has all the data that the application needs.

## Code Folder
- <code>DataFilter_Chinese_Restaurants.ipynb</code> selects all the businesses with word Chinese in its description and write them in new json files.
- <code>business_info.R</code> does the attribute analysis: process the business data, did some test for some attributes, check the assumption for the test and draw conclusion.
- <code>Split_Data.ipynb</code> processes and stores the data used by the web application.
- <code>Single_Business_Comments_Analysis.ipynb processes the comment data and does some comment analysis.
- <code>Graph_drawing.R</code> analyzes the comment data and draw some plots for the output. It include the EDA section and some of part 1.
## Plot Folder 
The plot folder includes all plots in the summary pdf.

## Deliverables Folder
The deliverables folder contains our summary pdf and presentation ppt.

## App Folder
This folder contains all the scripts used to run the web application, which is developed with genuine HTML, CSS and JS, instead of Shiny

# Application 
The link to our app is: <a href="https://austinjiangh.github.io/YelpAnalysis/">Click me</a>
