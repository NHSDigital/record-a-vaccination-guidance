---
layout: page
title: Managing users
analytics_key: managing-users
parent:
  title: How to use the pilot service
  url: /guide
previous:
  title: Reporting
  url: /reporting
next:
  title: Managing vaccines
  url: /managing-vaccines
---

{% include 'guide-contents.njk' %}

## Adding new users  

Only lead administrators can add and manage users. 

To add a user, you must enter their: 

* First name  
* Last name 
* NHS-approved email address  
* Clinician status

## Selecting clinician status 

Select ‘yes’ if users are registered clinicians. This will allow them to assess patients and record their consent.  

## Selecting permission levels 

Choose and select a permission level for new users: 

| **Permission level**               | **Lead administrator**    | **Administrator**    | **Recorder**    |
|------------------------------------|---------------------------|----------------------|-----------------|
| **Records and edits vaccinations** | Yes                       | Yes                  | Yes             |
| **Adds and manages vaccines**      | Yes                       | Yes                  | No              |
| **Creates reports**                | Yes                       | Yes                  | No              |
| **Adds and manages users**         | Yes                       | No                   | No              |

You can select more than one user for each permission level. 

[Screen shows user adding a new user's details and selecting their permission level](add image)

## Creating a RAVS account  

Once you have added a new user, we’ll automatically create a RAVS and Okta user account. We'll also send them a RAVS welcome email with instructions to access the service. Okta allows new users to verify their identity and use RAVS.  

If users:
* already have an Okta account for other NHS applications, their RAVS account will be added to their existing Okta account. 
* are new to Okta, they’ll also receive an Okta email with instructions to activate it. They’ll need to do this first to access RAVS.

[Screen shows user a preview email before they send it](add image)

## Changing users  

You can change user permission levels and clinician status from the 'Manage users' screen.  

If you remove their clinician status, they can no longer assess patients and record their consent.  

If you change their permission levels, this will become active when they log back into the service.  

**Important:** You cannot change your permission level if you’re the only 'Lead administrator' for your organisation. 

[Screen shows user the manage users screen](add image)

## Deleting users  

Delete a user account by emailing [ravs.support@england.nhs.uk](mailto:ravs.support@england.nhs.uk) or by calling **0121 611 0187** (select option 3).  

## Users across multiple organisation  

To add users to your organisation that are users in another organisation, they'll need a different email address. They can only have one email address per organisation.  
