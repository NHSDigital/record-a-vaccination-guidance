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

Select ‘yes’ if users are registered clinicians. For example, a doctor or nurse registered with a professional body like the General Medical Council or Nursing and Midwifery Council. 

As a result, they can be selected as assessing and consenting clinicians when recording vaccinations.

## Selecting permission levels

Choose and select a permission level for new users:

| **Permission level**       | **Record and edit vaccinations** | **Add and manage vaccines** | **Create reports** | **Add and manage users** |
|----------------------------|---------------------------|----------------------|-----------------|---|
| **Recorder**               | Yes                       | No                 | No             | No |
| **Administrator**          | Yes                       | Yes                  | Yes              | No |
| **Lead administrator**     | Yes                       | Yes                  | Yes              | Yes |

You can have more than one user for each permission level.

![Screen shows user adding a new user's details and selecting their permission level](/images/manage-users-add.png)

## Creating a RAVS account

Once you have added a new user, we’ll automatically create a RAVS account and send them a welcome email to access the service.

Okta allows new users to sign in and use RAVS.

* If users already have an Okta account for other NHS applications, then their RAVS account will be added to their existing Okta account.
* If users are new to Okta, they’ll also receive an Okta email with instructions to set up their account. They’ll need to do this first to access RAVS.

![Screen shows user a preview email before they send it](/images/manage-users-check.png)

## Adding users when their ‘email already exists’ 

RAVS cannot onboard users to multiple organisations with the same email address. Only one email can be linked to one organisation. 

If you encounter an ‘email already exists’ error message while adding a user their email is already linked to an organisation. 
 
### Creating multiple RAVS accounts for a user 

For users working across multiple organisations, like community pharmacies or hospitals, you can use variations of their email by including '+organisationname’ to their email address when you’re adding them as a user.  

You must do this to help users identify which account they’re logging into. Not doing so, could lead to users recording vaccinations under an incorrect organisation.  

For example, Jane works across multiple organisations. Her primary email jane.carlton2@nhs.net is linked to Hollybrook hospital.  

Her email for: 

* Greenwood pharmacy account is jane.carlton2+greenwoodpharmacy@nhs.net 
* Ridgeview pharmacy account is jane.carlton2+ridgeviewpharmacy@nhs.net  
* Rosebush hospital account is jane.carlton2+rosebushhospital@nhs.net 

Each email variation will have its own OKTA account.  

When a user is added with a new email variation, we’ll automatically send them a RAVS and Okta welcome email with instructions to activate their account. Emails will be sent to their primary email inbox. 

Users must log in with the email linked to the organisation they’re delivering vaccinations to maintain accurate clinical records. 

**Note**: In future, you'll be able to add users to your organisation even if their email is linked to another. This means when users log in they can switch between organisations. When we introduce this change, all varying email accounts will be merged into users’ primary emails.   

## Changing users

You can change user permission levels and clinician status from the 'Manage users' screen.

If you remove their clinician status, they can no longer assess patients and record their consent.

If you change their permission levels, this will become active when they log back into the service.

**Important:** You cannot change your permission level if you’re the only 'Lead administrator' for your organisation.

![Screen shows user the manage users screen](/images/manage-users-home.png)

## Deleting users

Delete a user account by emailing [ravs.support@england.nhs.uk](mailto:ravs.support@england.nhs.uk) or by calling **0121 611 0187** (select option 3).

## Users across multiple organisation

To add users to your organisation that are users in another organisation, they’ll need a different email address. They need a unique email address for each organisation.
