---
layout: page
title: Find a patient and record a vaccination
analytics_key: finding-a-patient
previous:
  title: Vaccination data
  url: /data
next:
  title: Record vaccinations
  url: /record-vaccinations
---

{% include 'guide-contents.njk' %}
This page describes how to record a vaccination using the **Find a patient** link in the navigation. This way of recording vaccinations will be phased out at the end of November 2025 as it's being replaced by the new **Record vaccinations** section.

## Find a patient 
To find a patient quickly, follow these steps.

### By NHS number

The easiest way to find a matching result is to enter the patient's 10-digit NHS number. For example, 485 777 3456.

If the patient needs to find their number, refer them to [Find your NHS number](https://www.nhs.uk/nhs-services/online-services/find-nhs-number/).

![Screen showing a user searching for a patient by entering their NHS number](/images/search-by-NHS-number.png)

### By demographics

Enter at least the patient's first name, last name and date of birth. However, entering all 5 fields will increase your chances of finding an exact match immediately.

![Screen showing a user searching for a patient by their demographics entering the required information](/images/find-by-demographic-search.png)

### By local records

Local records are vaccinations saved in RAVS. Enter at least the first and last name to find a matching record.

![Screen showing a user searching for a patient in local records entering the required information](/images/find-by-local-records.png)

### Search tips

Patients' names and postcodes are often spelled or entered incorrectly.

Make sure you ask the patient to:

* spell their name, for example, Catherine could be Katherine, or Smith could be Smyth
* confirm their previous postcode if they have recently moved

If a patient is homeless, enter the postcode ZZ99 3VZ to find them. 

### If you cannot find a match

You can create a new patient if you've tried searching by their NHS number and demographics and you're confident there is no existing patient record.

If your demographic search returns no results, the opportunity to create a new patient will appear.

**Important**: Adding duplicate records unnecessarily could result in incorrect or delayed patient care.

Once you have entered all required fields to create a new patient record, you can save it to RAVS and find it by searching your local records.

![Screen showing a user a create a new patient button after they have searched and not found a patient by their demographics](/images/add-a-new-patient.png)

Once you've found a patient and opened their record, you'll see their details and vaccination history.

## Patient record and vaccination history

![Screen showing a user the patient’s details and vaccination history](/images/patient-details.png)

You can view NHS vaccinations given in England and recorded at least 24 hours ago. Currently the history includes COVID-19, flu, MMR and RSV, plus some pertussis and pneumococcal vaccination records. 

## Editing or deleting records within the vaccination history

You can only:

* edit or delete vaccination records saved in RAVS. You cannot change records captured in other systems.  
* edit the information recorded on the 'Vaccinate' screen. You cannot change the assessment or consent screen because it changes the vaccination outcome. 

**Important**: Be cautious when deleting a vaccination record. Incorrectly doing so could impact the patient's future care.

If everything looks OK in the vaccination history, continue to **Choose a vaccine**.

## Choose a vaccine

Select the vaccine and vaccine product you wish to give the patient. You'll only see vaccine products with active batches.

### Selecting a delivery team

If your organisation has several sub-sites or teams, select a 'Delivery team' before you select the 'Vaccine' you wish to administer. This information will remain the same until you make new selections during your session or log out.

RAVS will warn you if the patient's details or vaccination history contain important information to consider.

![Screen showing a user a warning stating the patient may not have reached the minimal interval between doses for the vaccine they have selected](/images/choose-vaccine-warning.png)

## Assess the patient

Check if the patient is suitable for the vaccination before continuing to capture consent.

### Screening questions

We've provided COVID-19 screening questions to consider when assessing a patient. Recording this information is no longer necessary. Refer to your organisation's standard operating procedures, if you're screening patients for other vaccines.

### Selecting an assessing clinician

Select a registered clinician that appears under 'Assessing clinician'. You'll only see users that have been added with a clinician status. For more information, see [managing users](https://guide.ravs.england.nhs.uk/managing-users/).

The clinician will remain the same until you make new selections during your session or log out.

### Selecting an assessment date

Select the date the patient is assessed. The date will remain the same until you make new selections during your session or log out.

### Selecting an estimated due date (for maternity services)

The Pertussis or RSV vaccine should be given at a specific stage of the pregnancy. When vaccinating pregnant women for these vaccines, you must enter their estimated due date. RAVS will warn you if the date means it's not clinically appropriate to vaccinate, but not stop you from continuing.

### Exiting an assessment

If you do not vaccinate the patient, select a 'Vaccine not given' reason before you save and exit the patient's record.

![Screenhot of the Assess the patient screen](/images/assess-the-patient.png)

## Record consent

Before vaccinating a patient, capture their consent or the details of the person consenting on their behalf.

### Selecting a consenting clinician

Select a registered clinician that appears under 'Consenting clinician'. You'll only see users that have been added with a clinician status. For more information, see [managing users](https://guide.ravs.england.nhs.uk/managing-users/).

The clinician will remain the same until you make new selections during your session or log out.

### Exiting if consent is declined

If consent is declined, select a 'No consent reason', before you save and exit a patient’s record.

![Screen showing a user a button to save and exit a patient's record when the patient declines consent](/images/consent-not-given.png)

## Vaccinate a patient

Enter the vaccination event details once you've given the patient a vaccine.

### Changing batches

If you run out of a batch, you can switch the vaccine product at this point and search for an alternative batch to give to the patient.

Batches are assigned to a vaccine product and preadded to RAVS with an expiry date and dose volume. This means that when you select a batch, this information will prepopulate, saving you time.

![Screen showing the user selecting an alternative vaccine and batch](/images/vaccinate.png)

### Selecting a vaccination date

Select a 'Vaccination date'. The date will remain the same until you make new selections during your session or log out.

Vaccination and assessment dates are likely to be on the same day. Make sure they match.

If you're recording a vaccination that happened in the past, you can select a batch available at that time (even if they're currently depleted or expired).

### Selecting a vaccinator

Select and record registered clinicians or non-registered staff that appear under 'Vaccinator'. You'll see users that have been added with or without a clinician status. For more information, see [managing users](https://guide.ravs.england.nhs.uk/managing-users/). 

A vaccinator will remain the same until you make new selections during your session or log out.

### Selecting where the vaccination is taking place

To support payments and reporting, you must select where or how the vaccination is taking place. Once you select an option, it will remain the same until you make new selections during your session or log out.

## Checking and confirming

Before saving a patient's vaccination record, you can edit it from the final 'Check and confirm' screen by selecting a link. The link will return you to the relevant screen to make the necessary changes.

### What you can and cannot edit

You can edit most information you have recorded, but there are exceptions:

* You cannot edit a patient's demographic details.
* Editing information recorded on the assessment or consent screen changes the vaccination outcome. As a result, RAVS will remove the data you have entered on the vaccinate screen and ask you to enter it again.

![Screen showing the user a list of the vaccination details they have recorded and can and cannot edit before submitting](/images/check-and-confirm.png)


