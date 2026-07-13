---
layout: page
caption: User guide
title: Records
analytics_key: 
showPagination: true
order: 12
---

{% include 'maternity-guide-contents.njk' %}


## Preparing a CSV file 

To add pregnant patients, you first need to export them from the system you currently use to manage pregnant patients.

You must export the information as a CSV file that includes a header row followed by data rows.  

The header row has two mandatory columns: NHS number, Due date.  

The date must be in ISO 8601 format (YYYY-MM-DD).  

For example: 

```
NHS number, Due date  
1234567890, 2026-04-27 
0987654321, 2026-11-12
```

You do not need to include any other patient information.  

Unless you are very comfortable working with CSV files, we recommend you do not edit the CSV file before you upload it to RAVS. 

It is your responsibility to make sure the patient data is accurate. 

## If a patient has no NHS number 

Patients in your CSV file that do not have an NHS number will not appear in your list of pregnant patients in RAVS.  

This is because we cannot find and match a patient’s vaccination information without an NHS number.  

## After uploading a CSV file 

When you upload your CSV file, we check to see what vaccination information we currently hold about your patients.  

**It may take several hours to carry out this check.**  

You will receive an email when the check is complete. The email will tell you that your list patients has been imported and is ready to view.