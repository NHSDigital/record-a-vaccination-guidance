---
layout: page
caption: User guide
title: Manage users
analytics_key: managing-users
showPagination: true
order: 7
---

{% include 'guide-contents.njk' %}

Only lead administrators have access to this section, where they can:

* add users
* change a user's permissions
* deactivate users
* reactivate users

On the Manage users home page, you can see invited, active and deactivated users.  

Invited means users who have been added to RAVS but have not yet logged in. Deactivated means users who have either not logged in to RAVS for 90 days, or have been deactivated by a lead administrator.  

## Adding new users

When you add a user, you must enter their:

* first name
* last name
* NHS-approved email address. For a list of approved email addresses, see the [Care Identity email allow list](https://digital.nhs.uk/services/care-identity-service/applications-and-services/apply-for-care-id/care-identity-email-domain-allow-list)

You then need to select:

* if the user is a vaccinator (someone who gives vaccines)
* the permission level you want to give the user

### Permission levels

Choose and select a permission level for new users:

| **Permission level**       | **Record and edit vaccinations** | **Add and manage vaccines** | **Create reports** | **Add and manage users** |
|----------------------------|---------------------------|----------------------|-----------------|---|
| **Recorder**               | Yes                       | No                 | No             | No |
| **Administrator**          | Yes                       | Yes                  | Yes              | No |
| **Lead administrator**     | Yes                       | Yes                  | Yes              | Yes |

You can have more than 1 user for each permission level.

![Screen shows user adding a new user's details and selecting their permission level](/images/manage-users-add.png)

### Creating a RAVS account

Once you have added a new user, we'll automatically create a RAVS account and send them a welcome email to access the service.

RAVS uses Okta to sign users in securely.

* If users already have an Okta account, they can log in to RAVS as soon as they've received the welcome email, using their Okta username and password.
* If users are new to Okta, they'll also receive an email from Okta with instructions to set up their Okta account. They'll need to do this first to access RAVS.

## Adding a user to multiple organisations

You can add a user to more than 1 organisation, using the same email address for that user.

The user will then be able to use the same email address and Okta account to access RAVS at each organisation.

Users can have different permission levels at each organisation.

### If a user has been added to multiple organisations

Each time they log in, they will see a screen listing all the organisations they're currently associated with. They then have to select the relevant organisation.

To switch organisations, they need to log out, log back in and select a new organisation.

## Changing a user's permissions or vaccinator status

To change a user's permission levels or vaccinator status, select 'Change' next to their name on the Manage users home page.

A change to permission levels becomes active when the user next logs in.

![Screen shows user the manage users screen](/images/manage-users-home.png)

## Deactivating users

If a user no longer needs to access RAVS, you must deactivate their account.

Select 'Change' next to a name on the Manage users home page. On the next screen you'll have the option to deactivate the account.

Deactivated users will no longer be able to sign in to RAVS at your organisation.

If you deactivate a user who works at several organisations, they will only be deactivated from your organisation.

## Reactivating users

From the Manage users home page, you have 2 options for reactivating users.  
 
To reactivate all users who have not logged in for 90 days, select the 'Reactivate users' link that appears before the list of users.  
 
To reactivate an individual user, select the 'Reactivate' link next to the user you want to reactivate. 
