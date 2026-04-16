---
layout: page
caption: User guide
title: Record vaccinations
analytics_key: record-vaccinations
showPagination: true
order: 3
---

{% include 'guide-contents.njk' %}

All users can access this section to record vaccinations.

## Video: Record vaccinations

This short video shows you how to record a vaccination.

<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1176583136?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="How to record vaccinations in the record a vaccination service"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
<br>
<br>

## How to record a vaccination

First, we ask for the patient’s NHS number, or their name and date of birth. 

We then look up the patient. If a match is found, you'll be shown the patient's details and vaccination history. 

{% from "details/macro.njk" import details %}

{% call details({
  summaryText: "What is included in the vaccination history",
  classes: "nhsuk-expander"
}) %}
  <p>Currently you can expect to see:</p>
  <ul>
    <li>all vaccinations recorded in RAVS, including flu, COVID-19, pertussis, RSV, MenB, MMR and pneumococcal </li>
    <li>most flu, COVID-19 and RSV vaccinations recorded in other systems </li>
    <li>some MMR, MenB and pneumococcal vaccinations recorded in other systems </li>
  </ul>
{% endcall %}

If no match is found for the details you entered, you have the option to record a vaccination without an NHS number. 

> [!NOTE]
> You must use upper case letters and a space when you enter a postcode. For example, SW1A 2AA.
>
> If the patient is homeless, you can try searching with the postcode ZZ99 3VZ.

We then ask for the following:

* date of vaccination
* site or team (only asked if your organisation has several sites)
* name of the vaccinator – you will only see the names of users who've been added to RAVS as a vaccinator by a lead administrator
* vaccine and batch details – if a vaccine or batch is not available to select, an administrator or lead administrator will need to add it in the Vaccines section of RAVS
* why the patient is eligible (only asked for some vaccinations)
* location type (only asked for COVID-19)
* patient's estimated due date (only asked for pertussis, and RSV if pregnant)
* which dose was given (only asked for MenB)
* consent details
* where on the body the vaccination was given (only asked for injected vaccines)
* if a full dose was given (only asked for Fluenz nasal spray)

You may also see a warning if there is some important information to consider. But the warning will not prevent you from continuing. 

### Saving a vaccination record

Before saving, you'll see a Check and confirm page, where you can review your answers and add an optional note.

## Recording multiple vaccinations 

Once you’ve recorded your first vaccination, you are presented with 3 options for what you can do next. You can either record:

* another vaccination for the same patient (co-admin)
* the same vaccination for another patient
* a different vaccination for another patient

If you choose either of the first 2 options, you’ll skip a number of questions as some of your previous answers will be saved.

### Another vaccination for the same patient (co-admin) 
This option saves the date, site or team, vaccinator and patient details from the previous vaccination you recorded.  

### Same vaccination for another patient 
This option allows you to save the date, site or team, vaccinator, vaccine product, batch, eligibility and location type from the previous vaccination. Before you start recording, you have the option to change some of the saved answers.  

### Different vaccination for another patient 
This option takes you back to the start of the recording journey.  
 
## Editing and deleting records

To edit or delete a vaccination record, go to the [Records](https://guide.ravs.england.nhs.uk/records/) section.
