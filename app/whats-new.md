{% extends 'layout.html' %}

{% set pageName = "What's new" %}

{% set currentSection = "What's new" %}

{% block content %}
  <div class="nhsuk-grid-row">
    <div class="nhsuk-grid-column-two-thirds">

      <h1 class="nhsuk-heading-l">What's new</h1>
      <p> Find out about the latest changes to the Record a vaccination service.</p>

      <h2 class="nhsuk-heading-m">26 November 2025: new vaccinator role</h2>
      <ul class="nhsuk-list nhsuk-list--bullet">
        <li>In Manage users, when you add a user, you are now asked if the user is a vaccinator. This replaces a previous question that asked if the user was a registered clinician. Any user previously added as a registered clinician will now appear as a vaccinator.</li>
        <li>In Record vaccinations, when you select a vaccinator, the list of names now includes users who have the role of vaccinator. Previously it included users with the role of registered clinician. If a vaccinator is missing from the list, make sure they are a vaccinator in Manage users.</li>
        <li>In Find a patient, when you select a vaccinator, the list of names now only includes users who have the role of vaccinator. Previously it included all users. If a vaccinator is missing from the list, make sure they are a vaccinator in Manage users.</li>
        
      </ul>

      <h2 class="nhsuk-heading-m">12 November 2025: changing eligibility</h3>

      <ul class="nhsuk-list nhsuk-list--bullet">
        <li>When you record the same vaccination for the next patient, you can now change the eligibility details (including healthcare worker role) on the 'Check if these details still apply' page.</li>
         
      </ul>

      <h2 class="nhsuk-heading-m">21 October 2025: GP address added</h2>

      <ul class="nhsuk-list nhsuk-list--bullet">
        <li>The name and address of the patient's GP surgery is now shown on the patient's details and vaccination history.</li>
        <li>The ODS code of the patient's GP surgery is now included in reports.</li>

      </ul>
      <h2 class="nhsuk-heading-m">30 September 2025: COVID-19 vaccine products</h2>

      <ul class="nhsuk-list nhsuk-list--bullet">
        <li>The list of COVID-19 vaccine products has been updated for this Autumn/Winter campaign.</li>

      </ul>
      
      <h2 class="nhsuk-heading-m">29 September 2025: new sections added</h2>

      <ul class="nhsuk-list nhsuk-list--bullet">
        <li>Record vaccinations is a new section for recording vaccinations. It will replace the Find a patient section in future.</li>
        <li>Records is a new section where you can view and edit records.</li>

      </ul>
      
      </div>
     </div>

{% endblock %}
