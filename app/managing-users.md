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
* NHS-approved email address. For a list of approved domains, see the [Care Identity email allow list](https://digital.nhs.uk/services/care-identity-service/applications-and-services/apply-for-care-id/care-identity-email-domain-allow-list)
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

## Adding a user to multiple organisations 

From 16 December 2024, you can add a user to more than 1 organisation, using the same email address for that user. 

The user will then be able to use the same email address and Okta account to access RAVS at each organisation. 

Users can have different permission levels at each organisation.

## If a user was added to multiple organisations before 16 December 2024

Before 16 December 2024, to access RAVS at multiple organisations, a user needed a separate email address linked to each organisation.

If a user has more than 1 email address to access RAVS, they can continue to log in as before, using separate emails for each organisation.

Or, if they want to only use their main email address to access RAVS at each organisation, they can do the following:

* add themselves (or ask a lead admin to add them) to an organisation using their main email address
* then deactivate (or ask a lead admin to deactivate) the extra email account they used previously for that organisation

Any records previously created with an extra email account will remain unchanged. 

## If a user has been added to multiple organisations after 16 December 2024

Each time they log in, they will see a screen listing all the organisations they’ve been added to. They then have to select the relevant organisation.

To switch organisations, they need to log out, log back in and select a new organisation.

## Changing a user’s permissions or clinician status

To change a user’s permission levels or clinician status, select ‘Change’ next to their name on the ‘Manage users’ screen.

A change to permission levels becomes active when the user next logs in.

![Screen shows user the manage users screen](/images/manage-users-home.png)

## Deactivating users

If a user no longer works at your organisation, you must deactivate their account.

Select ‘Change’ next to a name on the 'Manage users' screen. On the next screen you'll have the option to deactivate the account.

Deactivated users will no longer be able to sign in to RAVS at your organisation.

If you deactivate a user who works at several organisations, they will only be deactivated from your organisation. Their access to RAVS at other organisations will not change. 

You can reactivate users at any time from the ‘Manage users’ screen.
