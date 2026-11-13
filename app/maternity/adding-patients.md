---
layout: page
caption: User guide
title: Adding patients
analytics_key: 
showPagination: true
order: 12
---

{% include 'maternity-guide-contents.njk' %}

To add pregnant patients, you first need to export them from the system you currently use to store and manage pregnant patients. 

A CSV file is a plain-text format that makes it easy to transfer table-based data from one system to another.  

![Screen showing the user the ability to select and upload a file](/images/maternity-images/add-patients.png)


## Preparing a CSV file 

You must export patient information as a CSV file that includes a header row followed by data rows.  

The header row must include two columns: 'NHS number' and 'Due date'. You can also include an optional 'Phone number' column.

Due dates must be in one of these formats: 

* DD/MM/YYYY, for example 06/11/2026 
* YYYY-MM-DD, for example 2026-11-06 
* YYYYMMDD, for example 20261106 

Your file should look like this example: 

```
NHS number, Due date, Phone number
1234567890, 27/04/2026, 07700 900142
0987654321, 11/12/2026, 07700 900981
```

You do not need to include any other patient information in your exported file. If you add any other columns, we will ignore them.   

It is your responsibility to make sure the patient data is accurate. 

## Phone numbers 

You have the option to include patient phone numbers in your CSV file. 

We ask you to upload phone numbers because your records are likely to be more up to date than the information available on the Personal Demographic Service (PDS). 

Phone numbers will also be included when you export a list of patients from our service.  

## Miscarriage, baby loss and termination 

Do not add people who have recently had a miscarriage, pregnancy loss or termination. Our service currently has no way of knowing and displaying this information. 

## Patients flagged as sensitive

You can add pregnant patients flagged as sensitive to the service.  

They appear in your list of patients alongside their vaccination eligibility information. Patients flagged as sensitive also appear in any file that you export from the service.  

Currently, there is no location-based information about any patient available through this new maternity area of RAVS.  

## Patients who have died

Patients who've been recorded as having died will not appear in your list of pregnant patients. They will be shown on the ‘Import issues’ page instead.

We check for this overnight using national records, which can take a few days to update after a death. Always check the patient's record in your own system before contacting them.

## If a patient has no NHS number 

Patients in your CSV file that do not have an NHS number will not appear in your list of pregnant patients in RAVS.  

This is because we cannot find and match a patient’s vaccination information without an NHS number.  

## Why a file might fail to upload 

Your CSV file will fail to upload if: 

* a due date is not in the correct format
* ‘Due date’ or ‘NHS number’ is spelled incorrectly 
* there is a duplicate NHS number with different due dates 


If your CSV file fails to upload, check for these common issues. You can make changes to the file or export a new file from your existing system. 

If you continue to have problems uploading a file, [contact our team for support](https://guide.ravs.england.nhs.uk/maternity/service-unavailable/).

## After uploading a CSV file 

When you upload your CSV file, we check and match the vaccination information we currently hold about your patients.  

**It may take several hours to carry out this check.** 

You may want to upload files at the end of the day, so that your list of patients is ready in the morning. 

![Screen that confirms the file is uploading and the user will receive an email](/images/maternity-images/upload-in-progress.png)

We will email the person who uploaded the CSV file when the check is complete and your list of patients is ready to view.  

## Replacing a list of patients 

You can only ever have one list at any time for your Trust. This means you need to upload a new CSV file to replace and update the patients on your list.  

Follow the same process and upload a new CSV file to replace a list of pregnant patients.  

Before completing a new upload, you will be asked to confirm that you want to overwrite your previous list. 

![Screen that asks the user to confirm they want to replace their list of patients](/images/maternity-images/confirm-replace.png)

You will not be able to view your previous list of patients while your patients are being checked and matched. 

We recommend you regularly upload a new file to make sure your list of patients is up to date. 
