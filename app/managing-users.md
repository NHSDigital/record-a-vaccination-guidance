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

If you encounter an ‘email already exists’ error message while adding a user, their email is already linked to another organisation. To add this user to your organisation, you can use a variation of their email by including `+organisationname` to their email address.  

You must do this to help users identify which account they’re logging into. Not doing so, could lead to users recording vaccinations under an incorrect organisation.  

For example, Jane works across multiple organisations. Her primary email jane.carlton2@nhs.net is linked to Hollybrook hospital.  

If you’re a lead user at: 

* Greenwood pharmacy, add Jane to your organisation by entering jane.carlton2+greenwoodpharmacy@nhs.net 
* Rosebush hospital, add Jane to your organisation by entering jane.carlton2+rosebushhospital@nhs.net

You cannot add users to other organisations.  

### What happens next? 

* Each email will have its own OKTA account and is linked to one organisation.  
* When you add users to your organisation with a variation of their email, we’ll automatically send a RAVS and Okta welcome email. Emails are sent to users’ primary email inboxes with instructions to activate their accounts.  
* Users must log in with the email linked to the organisation where they’re delivering vaccinations to maintain accurate clinical records. 

**Note**: In future, you'll be able to add users to your organisation even if their email is linked to another. This means when users log in they can switch between organisations. When we introduce this change, all varying email accounts will be merged into users’ primary emails.   

## Changing a user's permissions or clinician status

To change a user’s permission levels or clinician status, select ‘Change’ next to their name on the ‘Manage users’ screen.

A change to permission levels becomes active when the user next logs in.You can change user permission levels and clinician status from the 'Manage users' screen.

![Screen shows user the manage users screen](/images/manage-users-home.png)

## Deactivating users

If a user no longer works at your organisation, you can deactivate their account.

Select ‘Change’ next to a name on the 'Manage users' screen. On the next screen you'll have the option to deactivate the account.

Deactivated users will not be able to sign in to the Record a vaccination service.

You can reactivate users at any time from the ‘Manage users’ screen.

## Users across multiple organisation

To add users to your organisation that are users in another organisation, they’ll need a different email address. They need a unique email address for each organisation.
