FoodSwipe
===================
Austin Edington, Zac Gallagher, Aparna Gollakota, Don Stolz, Mike Sukan

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
- [1 Introduction](#1-introduction)
  - [1.1 Purpose](#11-purpose)
  - [1.2 Document Conventions](#12-document-conventions)
  - [1.3 Intended Audience and Reading Suggestions](#13-intended-audience-and-reading-suggestions)
  - [1.4 Product Scope](#14-product-scope)
  - [1.5 References](#15-references)
- [2 Overall Description](#2-overall-description)
  - [2.1 Product Perspective](#21-product-perspective)
  - [2.2 Product Functions](#22-product-functions)
  - [2.3 User Classes and Characteristics](#23-user-classes-and-characteristics)
  - [2.4 Operating Environment](#24-operating-environment)
  - [2.5 Design and Implementation Constraints](#25-design-and-implementation-constraints)
  - [2.6 User Documentation](#26-user-documentation)
  - [2.7 Assumptions and Dependencies](#27-assumptions-and-dependencies)
- [3 External Interface Requirements](#3-external-interface-requirements)
  - [3.1 User Interfaces](#31-user-interfaces)
  - [3.2 Software Interfaces](#32-software-interfaces)
- [4 System Features](#4-system-features)
  - [4.1 Swipe Function](#41-swipe-function)
  - [4.2 Swipe Function](#42-swipe-function)
- [5 Other Nonfunctional Requirements](#5-other-nonfunctional-requirements)
  - [5.1 Performance Requirements](#51-performance-requirements)
  - [5.2 Security Requirements](#52-security-requirements)
  - [5.3 Software Quality Attributes](#53-software-quality-attributes)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

1 Introduction
============

1.1 Purpose
--------

Our purpose for FoodSwipe™ is to give our users a friendly way to search for food in their area. Whether they’re hungry for pizza or Chinese food, users can specify whether they want to see vegan/vegetarian options, gluten-free options, so on and so forth. By displaying “cards” of different restaurants to users, users can “thumbs-up” or “thumbs-down” the search results to find their perfect meal. This will be the release of our debut version, v1.0

1.2 Document Conventions
--------------------

This proposal will use the Playfair Display font for all text. The bodies of our different sections will have a 12 point font, and will expand on the headings and subheadings above using bullet points. Subsection headings will be 14 point bold and ordered numerically corresponding to the topics listed in the headings.  Section headings will  be in 18 point bold and numerically ordered.

1.3 Intended Audience and Reading Suggestions
-----------------------------------------

Our intended audience for FoodSwipe™ is an urban crowd, where food options tend to be abundant in variety, however depending on how far our users are willing to travel, FoodSwipe™ could also be beneficial to a suburban audience. Our intended audience will be able to better service their own dietary restrictions, as FoodSwipe™ would focus around helping our users find food that suits their own needs, no matter if they’re vegan, gluten-free, or eat Halal.

Users interested in FoodSwipe™ would be best serviced throughout this document by focusing on 2. Overall Description, and then moving to 4. System Features.

1.4 Product Scope
-------------

After users enter their determined restrictions including distance from the user’s location, their own dietary restrictions, etc., users will then get “cards” of restaurants that fit their requirements. These cards will provide an image of the restaurant or food from the restaurant, in which users will be able  to “thumbs up” or “thumbs down” to each restaurant presented, allowing a popularity of each restaurant to be relevant in the user’s search.

1.5 References
----------

**// Add Hyperlinks**
Restaurants have seen a serious rise since 2001, providing a much wider diversity for users, and a more intense need for users to choose what services them best. More information located in a news article here.

Online ordering provides a sense of control to the customers, increased order frequency, and contributed to savings of labor as cited here.

2 Overall Description
===================

2.1 Product Perspective
-------------------

FoodSwipe™ is a mobile application designed to help users locate a restaurant that fits their dietary restrictions and otherwise. However, FoodSwipe™ is a self-contained product. A long-term goal would be to attach FoodSwipe™ to other sites for reviews, such as Yelp, Google Reviews, or TripAdvisor. FoodSwipe™ was conceived as a tool for users to decide on local food option in their area, designed in response to the growing number of food options and how difficult it has become for our users to decide between them.

The system of FoodSwipe™ is to be initially designed as a mobile application. The app will need to communicate with the user’s GPS in order to view the restaurants in the user’s vicinity. This functionality will be embedded into FoodSwipe™ so that other functions in the application may be accessed without any transition between applications.

The second part of the system will be a database used to store and reference information on restaurants around Loyola, as our first version. This database will be maintained separately from the application.

2.2 Product Functions
-----------------

* Our users choose the types of restaurants they want food from
* We take user’s current location into consideration
* The user then will be taken to a main UI, featuring “cards” of each restaurant is displayed, where the user can “thumbs up” or “thumbs down” restaurants
* The user then has the opportunity to view restaurant's profile for reviews, prices, menu items, allergy alerts, etc.


2.3 User Classes and Characteristics
--------------------------------

We are going for simple and minimalistic so people can quickly decide what to eat. Since this is a food app, there is no target age or gender. However, FoodSwipe™ may be more useful for people in urban areas where there is a wide variety of restaurants to choose from in the area.

2.4 Operating Environment
---------------------

FoodSwipe™ will be compatible with Apple and Android smartphones that can support React-native applications.

2.5 Design and Implementation Constraints
-------------------------------------

Internet connection is required to properly use FoodSwipe™, and the restaurants will be limited to the user’s area. New restaurants might be left out due to lack of information and appearance on Yelp or Google.

2.6 User Documentation
------------------

We will have several sources of documentation, including: user manuals, tutorials, and FAQ’s.

2.7 Assumptions and Dependencies
----------------------------

Our assumptions are that FoodSwipe™ will be used primarily within the application on the user’s mobile device. The application may not work as intended, crash, or provide inaccurate location data if the platform does not have the hardware resources available. We are also assuming that the GPS will work uniformly within browser platforms.

3 External Interface Requirements
===============================

3.1 User Interfaces
---------------
**//Add images**
Our user interface will be using a “card” interface, similar to applications such as Tinder. This user interface will allow users to “thumbs up” and “thumbs down” restaurants that fit their criteria.

3.2 Software Interfaces
-------------------

* MongoDB
* React-native
* Bootstrap CSS
* Meteor Boilerplate

4 System Features
===============

&lt;This template illustrates organizing the functional requirements for
the product by system features, the major services provided by the
product. You may prefer to organize this section by use case, mode of
operation, user class, object class, functional hierarchy, or
combinations of these, whatever makes the most logical sense for your
product.&gt;

4.1 Swipe Function
----------------

4.1.1 Description and Priority

The swipe function is of high priority for FoodSwipe™. After inputting their criteria, the swipe functions allows the users to determine their restaurants of choice.

4.1.2 Stimulus/Response Sequences

The swipe function is dynamic to the user’s interactions. Users can swipe right or “thumbs up” restaurants they do like, and swipe left or “thumbs down” restaurants that they don’t like, or they feel like does not match their criteria.

4.2 Swipe Function
----------------

4.2.1 Description and Priority

Within the FoodSwipe™ application, users input specific criteria for the restaurants they are searching for. Users can enter keywords that best identify with what they want.

4.2.2 Stimulus/Response Sequences

Users are given the opportunity to enter keywords that best identify with what they’re interested in, in terms of restaurants. This search option would include: vegan/vegetarian options, gluten-free, Halal/Kosher, specific allergies, etc.


5 Other Nonfunctional Requirements
================================

5.1 Performance Requirements
------------------------

FoodSwipe™ should be able to quickly receive and usefully relay information to the users, no delays if possible. Once the user has designated the category of food they are searching for, they will be able to swipe through the available options. The goal is for users to have no delay when searching for restaurants. The user will be able to view detailed and accurate information once a restraunt has been selected. The user experience should be smooth and up-to-date so that they can have the best experience possible.

5.2 Security Requirements
---------------------

User authentication maybe added at a later point in the project. However, the initial design does not require it.

5.3 Software Quality Attributes
---------------------------

We’re developing an app with cross-compatibility because of react-native. The information from the restaurants will be coming from the restaurants themselves, so the info will be as accurate as they make it online. Reliability depends on internet connection. Testing will be done in small focus groups before a release. It will be available on Google Play so we can provide the link to people with Android phones. Our intention is to show our focus groups how to navigate throughout the application, however the developers for FoodSwipe™ have in their utmost priority to make the interface seem familiar, without the need of teaching users how to operate the application.
