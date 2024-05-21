---
layout: page
title: Recording a vaccination
analytics_key: recording-vaccinations
parent:
  title: How to use the pilot service
  url: /guide
previous:
  title: Finding a patient
  url: /finding-a-patient
next:
  title: Adding vaccines and batches
  url: /adding-vaccines-and-batches
---

{% include 'guide-contents.njk' %}

There are several steps to record a vaccination.

## Choosing a vaccine

Select the vaccine and vaccine product you wish to give the patient.

RAVS will warn you if the patient’s details or vaccination history contain important information to consider.

![Editing or deleting the vaccination history](/images/choose-vaccine-warning.png)

## Assessing the patient

Check if the patient is suitable for the vaccination before continuing to capture consent.

In comparison to other point-of-care systems, we have introduced or changed a few things to make recording vaccination easier:

### Removed screening questions

Although you’ll continue to ask these questions to determine if a patient is suitable for vaccination, recording this information is no longer necessary.

### Selecting fields

You only need to select dates, clinical staff and vaccine batch details at the start of your session.

This information will remain the same until you make new selections during your session or log out. For example, if your staff or stock changes midway through a clinic.

### Exiting the journey

If you do not vaccinate the patient, you should save and exit the patient’s record.

This could be for the following reasons:

* the patient declines
* it’s not appropriate to vaccinate on the day, for example, the patient is unwell
* there’s an increased risk for a serious adverse reaction (contraindication)

![Saving and exiting a record when a vaccine was not given](/images/assess-the-patient.png)

## Recording consent

Before vaccinating the patient, you’ll need to capture their consent or the details of the person who is consenting on their behalf.

### Exiting the journey

If consent is refused, you should save and exit the patient’s record.

This could be for the following reasons:

* patient has been vaccinated
* patient has made a personal choice
* vaccine contains porcine

![Saving and exiting a record when a consent is refused](/images/consent-not-given.png)

## Vaccinating the patient

Confirm the vaccination event details once you’ve given the patient the vaccine.

### Changing vaccines

If no batches are left in stock, you can switch the vaccine product at this point and search for an alternative batch to give to the patient.

Note: batches are assigned to a vaccine product and preadded to RAVS with an expiry date and dose volume. This means that when you select a batch, this information will prepopulate, saving you time.

![Selecting an alternative vaccine and batch](/images/vaccinate.png)

## Checking and confirming

Before saving the patient’s vaccination record into RAVS, you can edit the record from the final check and confirm screen. The screen will return you to the relevant step to make the necessary changes.

Note: You cannot edit the patient’s demographic details.

![Check and confirm your vaccination data](/images/check-and-confirm.png)
